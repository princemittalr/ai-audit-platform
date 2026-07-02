import fg from "fast-glob";
import fs from "fs-extra";
import path from "path";

export interface LargeFile {
  file: string;
  lines: number;
}

const DEFAULT_THRESHOLD = 300;

/**
 * Flags source files over a line-count threshold. Large files are a
 * maintainability smell (mixed concerns, hard to review/test) even when
 * nothing is technically wrong with them.
 */
export async function findLargeFiles(
  root: string,
  threshold: number = DEFAULT_THRESHOLD
): Promise<LargeFile[]> {

  const files = await fg(
    ["**/*.ts", "**/*.tsx"],
    {
      cwd: root,
      ignore: ["**/node_modules/**", "**/.next/**", "**/dist/**"]
    }
  );

  const results: LargeFile[] = [];

  for (const file of files) {

    const content = await fs.readFile(
      path.join(root, file),
      "utf8"
    );

    const lines = content.split("\n").length;

    if (lines > threshold) {
      results.push({ file, lines });
    }

  }

  return results.sort((a, b) => b.lines - a.lines);

}
