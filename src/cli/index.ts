import { Command } from "commander";
import chalk from "chalk";

import { buildContext } from "../context/contextBuilder.js";
import { generateAuditPackage } from "../exporters/auditPackage.js";

const program = new Command();

program
  .name("audit-ai")
  .description("AI Audit Platform")
  .version("0.1.0");

program
  .command("scan")
  .argument("<path>")
  .action(async (repoPath) => {

    console.log(chalk.cyan("\n🔍 Building AI Audit Package...\n"));

    const context = await buildContext(repoPath);

    await generateAuditPackage("output", context);

    console.log(chalk.green("✓ AI_AUDIT_PACKAGE.md generated"));
    console.log(chalk.green("✓ Scan completed"));

  });

program.parse();