import fg from "fast-glob";
import fs from "fs-extra";
import path from "path";

import {
  RepositoryFile,
  RepositoryIndex
} from "./repositoryIndex.js";

import { calculateImportance } from "./importanceScorer.js";

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

  for (const file of entries.sort()) {

    const absolute = path.join(root, file);

    const stat = await fs.stat(absolute);

    totalSize += stat.size;

    files.push({
      path: file,
      extension: path.extname(file),
      size: stat.size,
      importance: calculateImportance({
        path: file,
        extension: path.extname(file),
        size: stat.size,
        importance: 0
      })
    });

  }

  files.sort((a, b) => b.importance - a.importance);

  return {
    root,
    files,
    totalFiles: files.length,
    totalSize
  };

}