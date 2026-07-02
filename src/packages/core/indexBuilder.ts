import fg from "fast-glob";
import fs from "fs-extra";
import path from "path";
import {
  RepositoryFile,
  RepositoryIndex
} from "./repositoryIndex.js";

const IGNORE = [
  "**/node_modules/**",
  "**/.git/**",
  "**/.next/**",
  "**/dist/**",
  "**/coverage/**"
];

export async function buildRepositoryIndex(
  root: string
): Promise<RepositoryIndex> {

  const entries = await fg(["**/*"], {
    cwd: root,
    onlyFiles: true,
    ignore: IGNORE,
    dot: true
  });

  const files: RepositoryFile[] = [];

  let totalSize = 0;

  for (const file of entries) {

    const absolute = path.join(root, file);

    const stat = await fs.stat(absolute);

    totalSize += stat.size;

    files.push({
      path: file,
      extension: path.extname(file),
      size: stat.size,
      importance: 0
    });

  }

  return {
    root,
    files,
    totalFiles: files.length,
    totalSize
  };

}