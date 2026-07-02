import fg from "fast-glob";
import fs from "fs-extra";
import path from "path";

export interface SourceFile {
  path: string;
  extension: string;
  size: number;
  content: string;
}

export interface SourceCollection {
  root: string;
  files: SourceFile[];
  totalFiles: number;
  totalSize: number;
}

const DEFAULT_IGNORE = [
  "**/node_modules/**",
  "**/.git/**",
  "**/.next/**",
  "**/dist/**",
  "**/build/**",
  "**/coverage/**",
  "**/.turbo/**",
  "**/.cache/**",
  "**/*.log",
  "**/*.lock",
  "**/package-lock.json",
  "**/pnpm-lock.yaml",
  "**/yarn.lock"
];

const DEFAULT_INCLUDE = [
  "**/*.ts",
  "**/*.tsx",
  "**/*.js",
  "**/*.jsx",
  "**/*.json",
  "**/*.md",
  "**/*.css",
  "**/*.scss",
  "**/*.html",
  "**/*.env*"
];

export async function collectSource(
  root: string
): Promise<SourceCollection> {

  const entries = await fg(DEFAULT_INCLUDE, {
    cwd: root,
    ignore: DEFAULT_IGNORE,
    onlyFiles: true,
    dot: true
  });

  const files: SourceFile[] = [];
  let totalSize = 0;

  for (const file of entries.sort()) {

    const absolute = path.join(root, file);

    const stat = await fs.stat(absolute);

    const content = await fs.readFile(
      absolute,
      "utf8"
    );

    totalSize += stat.size;

    files.push({
      path: file,
      extension: path.extname(file),
      size: stat.size,
      content
    });

  }

  return {
    root,
    files,
    totalFiles: files.length,
    totalSize
  };

}