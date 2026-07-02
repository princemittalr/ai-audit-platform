import fs from "fs-extra";
import path from "path";
import { getSystemPrompt } from "../prompts/systemPrompt.js";
import { buildRepositoryIndex } from "../core/indexBuilder.js";
import { buildSourceSection } from "./sourceEmbedder.js";
export async function generateMarkdownPackage(outputDir, context) {
    await fs.ensureDir(outputDir);
    const repositoryIndex = await buildRepositoryIndex(context.scan.root);
    const sourceSection = await buildSourceSection(context.scan.root, repositoryIndex);
    const markdown = `# AI AUDIT PACKAGE

# PROJECT

${context.scan.root}

---

Framework

${context.framework.framework}

Language

${context.framework.language}

Files

${context.scan.totalFiles}

Folders

${context.scan.totalDirectories}

${sourceSection}

---

# SYSTEM PROMPT

${getSystemPrompt()}
`;
    await fs.writeFile(path.join(outputDir, "AI_AUDIT_PACKAGE.md"), markdown, "utf8");
}
//# sourceMappingURL=markdownPackage.js.map