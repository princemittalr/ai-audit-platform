import { Command } from "commander";
import chalk from "chalk";
import { buildContext } from "../../packages/context/contextBuilder.js";
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
    .action(async (repoPath) => {
    try {
        console.log(chalk.cyan("\n🔍 Building AI Audit Package...\n"));
        const context = await buildContext(repoPath);
        await generateMarkdownPackage("output", context);
        await exportPrompts("output");
        console.log(chalk.green("✓ AI_AUDIT_PACKAGE.md"));
        console.log(chalk.green("✓ chatgpt-prompt.md"));
        console.log(chalk.green("✓ claude-prompt.md"));
        console.log(chalk.green("✓ gemini-prompt.md"));
        console.log(chalk.green("\nAudit completed.\n"));
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
});
program.parse();
//# sourceMappingURL=index.js.map