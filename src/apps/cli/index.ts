#!/usr/bin/env node
import { Command } from "commander";
import chalk from "chalk";
import fs from "fs-extra";
import path from "path";

import { runPipeline } from "../../packages/pipeline/pipeline.js";
import { generateMarkdownPackage } from "../../packages/exporters/markdownPackage.js";
import { exportPrompts } from "../../packages/exporters/promptExporter.js";

const program = new Command();

program
  .name("audit-ai")
  .description("AI Audit Platform")
  .version("1.2.0");

program
  .command("scan")
  .argument("<path>", "Repository path")
  .action(async (repoPath: string) => {

    try {

      console.log(chalk.cyan("\n🔍 Building AI Audit Package...\n"));

      const pipeline = await runPipeline(repoPath);

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
      }

      console.log(chalk.green("\nAudit completed.\n"));

    } catch (error) {

      console.error(error);

      process.exit(1);

    }

  });

program.parse();