import fs from "fs-extra";
import path from "path";

import { AuditContext } from "../context/types.js";
import { buildRepositoryIndex } from "../core/indexBuilder.js";
import { buildSourceSection } from "./sourceEmbedder.js";
import { getSystemPrompt } from "../prompts/systemPrompt.js";
import { generateFindings } from "../analyzers/findingEngine.js";

export async function generateMarkdownPackage(
  outputDir: string,
  context: AuditContext
): Promise<void> {

  await fs.ensureDir(outputDir);

  const repositoryIndex = await buildRepositoryIndex(
    context.scan.root
  );

  const sourceSection = await buildSourceSection(
    context.scan.root,
    repositoryIndex
  );

  const findings = generateFindings(context.analysis);

  const findingsMarkdown =
    findings.length === 0
      ? "No findings generated."
      : findings
          .map(
            f => `## ${f.severity} — ${f.title}

**Category:** ${f.category}

**Description:** ${f.description}

**Recommendation:** ${f.recommendation}
`
          )
          .join("\n---\n\n");

  const markdown = `# AI AUDIT PACKAGE

## Project

- Repository: ${context.scan.root}
- Framework: ${context.framework.framework}
- Language: ${context.framework.language}
- Package Manager: ${context.framework.packageManager}
- CSS: ${context.framework.css}

---

## Repository Statistics

- Files: ${context.scan.totalFiles}
- Folders: ${context.scan.totalDirectories}
- Components: ${context.analysis.components}
- Hooks: ${context.analysis.hooks}
- Context Usage: ${context.analysis.contexts}

---

# Engineering Findings

${findingsMarkdown}

${sourceSection}

---

# AI System Prompt

${getSystemPrompt()}
`;

  await fs.writeFile(
    path.join(outputDir, "AI_AUDIT_PACKAGE.md"),
    markdown,
    "utf8"
  );
}