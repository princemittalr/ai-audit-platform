import fs from "fs-extra";
import path from "path";
export async function exportFindings(outputDir, findings) {
    await fs.ensureDir(outputDir);
    await fs.writeJson(path.join(outputDir, "findings.json"), findings, { spaces: 2 });
}
//# sourceMappingURL=findingsExporter.js.map