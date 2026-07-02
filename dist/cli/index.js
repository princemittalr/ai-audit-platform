import { Command } from "commander";
import chalk from "chalk";
import { scanRepository } from "../core/scanner.js";
import { detectFramework } from "../analyzers/frameworkDetector.js";
import { analyzeProject } from "../analyzers/projectAnalyzer.js";
import { generateProjectSummary } from "../exporters/projectSummary.js";
import { generateFileTree } from "../exporters/fileTree.js";
import { generateRouteMap } from "../exporters/routeMap.js";
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
    console.log(chalk.blue("Language"));
    console.log(framework.language);
    console.log(chalk.blue("Package Manager"));
    console.log(framework.packageManager);
    console.log(chalk.blue("CSS"));
    console.log(framework.css);
    console.log(chalk.blue("Package"));
    console.log(framework.packageName);
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
    console.log(chalk.yellow("Generating audit package...\n"));
    await generateProjectSummary("output", {
        repository: scan.root,
        framework: framework.framework,
        language: framework.language,
        packageManager: framework.packageManager,
        css: framework.css,
        packageName: framework.packageName,
        version: framework.version,
        files: scan.totalFiles,
        folders: scan.totalDirectories
    });
    await generateFileTree(repoPath, "output");
    await generateRouteMap(repoPath, "output");
    console.log(chalk.green("✓ project-summary.md"));
    console.log(chalk.green("✓ file-tree.md"));
    console.log(chalk.green("✓ route-map.md"));
    console.log("");
    console.log(chalk.green("Sprint 6 completed."));
});
program.parse();
//# sourceMappingURL=index.js.map