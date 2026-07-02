import { Command } from "commander";
import chalk from "chalk";
import { buildContext } from "../../packages/context/contextBuilder.js";
import { generateAuditPackage } from "../../packages/exporters/auditPackage.js";
const program = new Command();
program
    .name("audit-ai")
    .description("AI Audit Platform")
    .version("1.0.0");
program
    .command("scan")
    .description("Generate an AI-ready audit package for a repository")
    .argument("<path>", "Path to the repository")
    .action(async (repoPath) => {
    try {
        console.log(chalk.cyan("\n🔍 Building AI Audit Package...\n"));
        const context = await buildContext(repoPath);
        await generateAuditPackage("output", context);
        console.log(chalk.green("✓ AI_AUDIT_PACKAGE.md generated"));
        console.log(chalk.green("✓ Scan completed successfully.\n"));
    }
    catch (error) {
        console.error(chalk.red("\n❌ Scan failed.\n"));
        console.error(error);
        process.exit(1);
    }
});
program.parse();
//# sourceMappingURL=index.js.map