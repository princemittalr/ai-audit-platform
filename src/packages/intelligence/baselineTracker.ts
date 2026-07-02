import fs from "fs-extra";
import path from "path";
import crypto from "crypto";

export interface BaselineEntry {
  timestamp: string;
  score: number;
  critical: number;
  high: number;
  medium: number;
  low: number;
}

export interface BaselineComparison {
  previous: BaselineEntry | null;
  current: BaselineEntry;
  scoreDelta: number | null;
}

/**
 * Reads the last recorded run for this specific repository (keyed by a hash
 * of its resolved path, so scanning multiple repos into the same output/
 * directory doesn't mix their history), appends the current run, and
 * returns both so the CLI can show a trend.
 */
export async function updateBaseline(
  outputDir: string,
  repoPath: string,
  current: BaselineEntry
): Promise<BaselineComparison> {

  const key = crypto
    .createHash("sha1")
    .update(path.resolve(repoPath))
    .digest("hex")
    .slice(0, 12);

  const filePath = path.join(outputDir, `audit-baseline.${key}.json`);

  let history: BaselineEntry[] = [];

  if (await fs.pathExists(filePath)) {
    try {
      history = await fs.readJson(filePath);
    } catch {
      history = [];
    }
  }

  const previous = history.length > 0 ? history[history.length - 1] : null;

  history.push(current);

  // keep last 20 runs, no unbounded growth
  if (history.length > 20) {
    history = history.slice(-20);
  }

  await fs.writeJson(filePath, history, { spaces: 2 });

  return {
    previous,
    current,
    scoreDelta: previous ? current.score - previous.score : null
  };

}
