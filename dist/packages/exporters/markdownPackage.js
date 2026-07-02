import fs from "fs-extra";
import path from "path";
import { getSystemPrompt } from "../prompts/systemPrompt.js";
export async function generateMarkdownPackage(outputDir, context) {
    await fs.ensureDir(outputDir);
    const markdown = `# AI AUDIT PACKAGE

---

# PROJECT

Repository

${context.scan.root}

---

# TECH STACK

Framework: ${context.framework.framework}

Language: ${context.framework.language}

Package Manager: ${context.framework.packageManager}

CSS: ${context.framework.css}

Version: ${context.framework.version}

---

# PROJECT ANALYSIS

App Router: ${context.analysis.appRouter}

Pages Router: ${context.analysis.pagesRouter}

API Routes: ${context.analysis.apiRoutes}

Components: ${context.analysis.components}

Hooks: ${context.analysis.hooks}

Contexts: ${context.analysis.contexts}

Middleware: ${context.analysis.middleware}

Files: ${context.scan.totalFiles}

Folders: ${context.scan.totalDirectories}

---

# AI SYSTEM PROMPT

${getSystemPrompt()}
`;
    await fs.writeFile(path.join(outputDir, "AI_AUDIT_PACKAGE.md"), markdown, "utf8");
}
//# sourceMappingURL=markdownPackage.js.map