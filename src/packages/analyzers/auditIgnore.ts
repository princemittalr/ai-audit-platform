import fs from "fs-extra";
import path from "path";
import ignore from "ignore";

import { Finding } from "../models/finding.js";

/**
 * Filters out findings whose `file` matches a pattern in <repo>/.auditignore.
 * Lets users suppress known false positives or intentionally-orphaned files
 * without editing analyzer code. Uses gitignore-style glob syntax.
 */
export async function applyAuditIgnore(
  root: string,
  findings: Finding[]
): Promise<Finding[]> {

  const ignoreFile = path.join(root, ".auditignore");

  if (!(await fs.pathExists(ignoreFile))) {
    return findings;
  }

  const ig = ignore();
  ig.add(await fs.readFile(ignoreFile, "utf8"));

  return findings.filter(f => !f.file || !ig.ignores(f.file));

}
