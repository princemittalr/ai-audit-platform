import fg from "fast-glob";
import fs from "fs-extra";
import path from "path";

export async function generateFileTree(
  root: string,
  outputDir: string
) {
  await fs.ensureDir(outputDir);

  const files = await fg(["**/*"], {
    cwd: root,
    dot: true,
    onlyFiles: false,
    ignore: [
      "node_modules/**",
      ".git/**",
      ".next/**",
      "dist/**",
      "build/**"
    ]
  });

  files.sort();

  const markdown =
`# File Tree

Repository

${root}

---

\`\`\`text
${files.join("\n")}
\`\`\`
`;

  await fs.writeFile(
    path.join(outputDir, "file-tree.md"),
    markdown,
    "utf8"
  );
}