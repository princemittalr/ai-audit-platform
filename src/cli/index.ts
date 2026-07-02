import { Command } from "commander";
import chalk from "chalk";

import { scanRepository } from "../core/scanner.js";
import { detectFramework } from "../analyzers/frameworkDetector.js";
import { analyzeProject } from "../analyzers/projectAnalyzer.js";

const program = new Command();

program
  .name("audit-ai")
  .description("AI Audit Platform")
  .version("0.1.0");

program
  .command("scan")
  .argument("<path>")
  .action(async (repoPath) => {

    console.log(chalk.cyan("\n🔍 Scanning repository...\n"));

    const scan = await scanRepository(repoPath);
    const framework = await detectFramework(repoPath);
    const analysis = await analyzeProject(repoPath);

    console.log(chalk.green("Repository"));
    console.log(scan.root);

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

    console.log(chalk.magenta("Project Intelligence"));
    console.log("--------------------------------");

    console.log("App Router       :", analysis.appRouter ? "Yes" : "No");
    console.log("Pages Router     :", analysis.pagesRouter ? "Yes" : "No");
    console.log("API Routes       :", analysis.apiRoutes);
    console.log("Components       :", analysis.components);
    console.log("Hooks            :", analysis.hooks);
    console.log("Contexts         :", analysis.contexts);
    console.log("Middleware       :", analysis.middleware ? "Yes" : "No");
    console.log("Public Assets    :", analysis.publicAssets);
    console.log("Environment Files:", analysis.envFiles);
    console.log("Config Files     :", analysis.configFiles);

    console.log("");

    console.log(chalk.yellow("Repository Statistics"));
    console.log("--------------------------------");

    console.log("Files            :", scan.totalFiles);
    console.log("Folders          :", scan.totalDirectories);

    console.log("");
  });

program.parse();