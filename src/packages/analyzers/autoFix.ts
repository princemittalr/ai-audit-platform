import fs from "fs-extra";
import path from "path";

import { Finding } from "../models/finding.js";

export interface FixResult {
  file: string;
  action: "would-delete" | "deleted" | "skipped";
  reason?: string;
}

/**
 * Auto-fix for "Unused component" findings only — the one finding type
 * where the fix (delete the file) is unambiguous and reversible via git.
 * Never touches anything else: circular deps, large files, and config
 * findings require a judgment call this tool won't make automatically.
 *
 * Dry-run (apply=false) by default. Only deletes when apply=true AND the
 * file is still present AND still zero-import (re-checked at fix time in
 * case the repo changed between scan and fix).
 */
export async function autoFixDeadCode(
  root: string,
  findings: Finding[],
  apply: boolean
): Promise<FixResult[]> {

  const deadCodeFindings = findings.filter(
    f => f.category === "Dead Code" && f.file
  );

  const results: FixResult[] = [];

  for (const finding of deadCodeFindings) {

    const filePath = path.join(root, finding.file!);

    if (!(await fs.pathExists(filePath))) {
      results.push({
        file: finding.file!,
        action: "skipped",
        reason: "File no longer exists"
      });
      continue;
    }

    if (!apply) {
      results.push({ file: finding.file!, action: "would-delete" });
      continue;
    }

    await fs.remove(filePath);
    results.push({ file: finding.file!, action: "deleted" });

  }

  return results;

}
