import fs from "fs-extra";
import path from "path";
import { Finding } from "../models/finding.js";

export async function exportFindings(
  outputDir: string,
  findings: Finding[]
): Promise<void> {

  await fs.ensureDir(outputDir);

  await fs.writeJson(
    path.join(outputDir, "findings.json"),
    findings,
    { spaces: 2 }
  );

}