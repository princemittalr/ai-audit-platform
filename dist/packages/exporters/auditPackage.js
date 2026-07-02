import fs from "fs-extra";
import path from "path";
export async function generateAuditPackage(outputDir, context) {
    await fs.ensureDir(outputDir);
    const markdown = `# AI AUDIT PACKAGE

==================================================
PROJECT SUMMARY
==================================================

Repository:
${context.scan.root}

Framework:
${context.framework.framework}

Language:
${context.framework.language}

Package Manager:
${context.framework.packageManager}

CSS:
${context.framework.css}

Package:
${context.framework.packageName}

Version:
${context.framework.version}

==================================================
PROJECT INTELLIGENCE
==================================================

App Router: ${context.analysis.appRouter ? "Yes" : "No"}

Pages Router: ${context.analysis.pagesRouter ? "Yes" : "No"}

API Routes: ${context.analysis.apiRoutes}

Components: ${context.analysis.components}

Hooks: ${context.analysis.hooks}

Contexts: ${context.analysis.contexts}

Middleware: ${context.analysis.middleware ? "Yes" : "No"}

Public Assets: ${context.analysis.publicAssets}

Environment Files: ${context.analysis.envFiles}

Config Files: ${context.analysis.configFiles}

==================================================
REPOSITORY STATISTICS
==================================================

Files: ${context.scan.totalFiles}

Folders: ${context.scan.totalDirectories}
`;
    await fs.writeFile(path.join(outputDir, "AI_AUDIT_PACKAGE.md"), markdown, "utf8");
}
//# sourceMappingURL=auditPackage.js.map