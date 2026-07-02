import fs from "fs-extra";
import path from "path";

interface SummaryData {
  repository: string;
  framework: string;
  language: string;
  packageManager: string;
  css: string;
  packageName: string;
  version: string;
  files: number;
  folders: number;
}

export async function generateProjectSummary(
  outputDir: string,
  data: SummaryData
) {

  await fs.ensureDir(outputDir);

  const markdown = `# Project Summary

## Repository

${data.repository}

---

## Technology

| Property | Value |
|----------|-------|
| Framework | ${data.framework} |
| Language | ${data.language} |
| Package Manager | ${data.packageManager} |
| CSS | ${data.css} |
| Package | ${data.packageName} |
| Version | ${data.version} |

---

## Repository Statistics

| Metric | Value |
|--------|------:|
| Files | ${data.files} |
| Folders | ${data.folders} |

`;

  await fs.writeFile(
    path.join(outputDir, "project-summary.md"),
    markdown,
    "utf8"
  );
}