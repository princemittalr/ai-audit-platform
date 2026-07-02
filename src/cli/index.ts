import { Command } from "commander";
import chalk from "chalk";
import { scanRepository } from "../core/scanner.js";
import { detectFramework } from "../analyzers/frameworkDetector.js";

const program = new Command();

program
  .name("audit-ai")
  .description("AI Audit Platform")
  .version("0.1.0");

program
  .command("scan")
  .argument("<path>")
  .action(async (repoPath) => {
    console.log(chalk.cyan("\nScanning repository...\n"));

    const result = await scanRepository(repoPath);
    const framework = await detectFramework(repoPath);

    console.log(chalk.green("Repository"));
    console.log(result.root);

    console.log("");

    console.log(chalk.blue("Framework"));
    console.log(framework.framework);

    console.log("");

    console.log(chalk.blue("Language"));
    console.log(framework.language);

    console.log("");

    console.log(chalk.blue("Package Manager"));
    console.log(framework.packageManager);

    console.log("");

    console.log(chalk.blue("CSS"));
    console.log(framework.css);

    console.log("");

    console.log(chalk.blue("Package"));
    console.log(framework.packageName);

    console.log("");

    console.log(chalk.blue("Version"));
    console.log(framework.version);

    console.log("");

    console.log("Files :", result.totalFiles);
    console.log("Folders :", result.totalDirectories);
  });

program.parse();