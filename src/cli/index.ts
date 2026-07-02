import { Command } from "commander";
import chalk from "chalk";
import { scanRepository } from "../core/scanner.js";

const program = new Command();

program
    .name("audit-ai")
    .description("AI Audit Platform")
    .version("0.1.0");

program
.command("scan")
.argument("<path>")
.action(async (repoPath)=>{

    console.log(chalk.cyan("\nScanning repository...\n"));

    const result = await scanRepository(repoPath);

    console.log(chalk.green("Repository"));

    console.log(result.root);

    console.log("");

    console.log("Files :",result.totalFiles);

    console.log("Folders :",result.totalDirectories);

});

program.parse();