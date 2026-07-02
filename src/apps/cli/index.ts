#!/usr/bin/env node
import { Command } from "commander";
import chalk from "chalk";
import fs from "fs-extra";
import path from "path";

import { runPipeline } from "../../packages/pipeline/pipeline.js";
import { generateMarkdownPackage } from "../../packages/exporters/markdownPackage.js";
import { exportPrompts } from "../../packages/exporters/promptExporter.js";
import { updateBaseline } from "../../packages/intelligence/baselineTracker.js";
import { getChangedFiles } from "../../packages/core/gitDiff.js";
import { autoFixDeadCode } from "../../packages/analyzers/autoFix.js";
import { explainFinding } from "../../packages/intelligence/explainFinding.js";

const program = new Command();

program
  .name("audit-ai")
  .description("AI Audit Platform")
  .version("1.2.0");

program
  .command("scan")
  .argument("<path>", "Repository path")
  .option("--diff [ref]", "Only report findings for files changed vs a git ref (default: HEAD)")
  .action(async (repoPath: string, cmdOptions: { diff?: string | boolean }) => {

    try {

      console.log(chalk.cyan("\n🔍 Building AI Audit Package...\n"));

      let scopeToFiles: string[] | undefined;

      if (cmdOptions.diff) {
        const ref = typeof cmdOptions.diff === "string" ? cmdOptions.diff : "HEAD";
        scopeToFiles = await getChangedFiles(repoPath, ref);
        console.log(chalk.gray(`Diff mode: scoping to ${scopeToFiles.length} changed file(s) vs ${ref}\n`));
      }

      const pipeline = await runPipeline(repoPath, { scopeToFiles });

      await generateMarkdownPackage(
        "output",
        pipeline.audit
      );

      await exportPrompts("output");

      await fs.ensureDir("output");
      await fs.writeJson(
        path.join("output", "audit-report.json"),
        pipeline.report,
        { spaces: 2 }
      );

      console.log(chalk.green("✓ AI_AUDIT_PACKAGE.md"));
      console.log(chalk.green("✓ chatgpt-prompt.md"));
      console.log(chalk.green("✓ claude-prompt.md"));
      console.log(chalk.green("✓ gemini-prompt.md"));
      console.log(chalk.green("✓ audit-report.json"));

      if (pipeline.report) {
        const { score, critical, high, medium, low } = pipeline.report.summary;
        console.log(
          chalk.yellow(
            `\nScore: ${score}/100  (critical: ${critical}, high: ${high}, medium: ${medium}, low: ${low})`
          )
        );

        const comparison = await updateBaseline("output", repoPath, {
          timestamp: new Date().toISOString(),
          score,
          critical,
          high,
          medium,
          low
        });

        if (comparison.scoreDelta !== null) {
          const delta = comparison.scoreDelta;
          const arrow = delta > 0 ? "↑" : delta < 0 ? "↓" : "→";
          const color = delta > 0 ? chalk.green : delta < 0 ? chalk.red : chalk.gray;
          console.log(
            color(`${arrow} ${delta > 0 ? "+" : ""}${delta} since last run (was ${comparison.previous!.score}/100)`)
          );
        }
      }

      console.log(chalk.green("\nAudit completed.\n"));

    } catch (error) {

      console.error(error);

      process.exit(1);

    }

  });

program
  .command("fix")
  .argument("<path>", "Repository path")
  .option("--apply", "Actually delete files (default: dry-run, shows what would be deleted)")
  .action(async (repoPath: string, cmdOptions: { apply?: boolean }) => {

    try {

      const reportPath = path.join("output", "audit-report.json");

      if (!(await fs.pathExists(reportPath))) {
        console.error(chalk.red("No output/audit-report.json found. Run `scan` first."));
        process.exit(1);
      }

      const report = await fs.readJson(reportPath);
      const results = await autoFixDeadCode(repoPath, report.findings, !!cmdOptions.apply);

      if (results.length === 0) {
        console.log(chalk.gray("No dead-code findings to fix."));
        return;
      }

      for (const r of results) {
        if (r.action === "would-delete") {
          console.log(chalk.yellow(`would delete: ${r.file}`));
        } else if (r.action === "deleted") {
          console.log(chalk.red(`deleted: ${r.file}`));
        } else {
          console.log(chalk.gray(`skipped: ${r.file} (${r.reason})`));
        }
      }

      if (!cmdOptions.apply) {
        console.log(chalk.cyan("\nDry run only. Re-run with --apply to actually delete these files."));
      }

    } catch (error) {
      console.error(error);
      process.exit(1);
    }

  });

program
  .command("explain")
  .argument("<findingId>", "Finding ID from audit-report.json, e.g. DEAD-003")
  .action(async (findingId: string) => {

    try {

      const reportPath = path.join("output", "audit-report.json");

      if (!(await fs.pathExists(reportPath))) {
        console.error(chalk.red("No output/audit-report.json found. Run `scan` first."));
        process.exit(1);
      }

      const report = await fs.readJson(reportPath);
      const finding = report.findings.find((f: any) => f.id === findingId);

      if (!finding) {
        console.error(chalk.red(`No finding with id "${findingId}" in the last report.`));
        process.exit(1);
      }

      console.log(chalk.cyan(`\nExplaining ${findingId}...\n`));

      const explanation = await explainFinding(report.repository.path, finding);

      console.log(explanation);
      console.log();

    } catch (error) {
      console.error(error);
      process.exit(1);
    }

  });

program.parse();