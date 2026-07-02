import fs from "fs-extra";
import path from "path";
import PDFDocument from "pdfkit";

import { AuditReport } from "../report/report.js";

function severityColor(severity: string): string {
  switch (severity) {
    case "CRITICAL": return "#dc2626";
    case "HIGH": return "#ea580c";
    case "MEDIUM": return "#ca8a04";
    case "LOW": return "#65a30d";
    default: return "#6b7280";
  }
}

export async function exportPdfReport(
  outputDir: string,
  report: AuditReport
): Promise<string> {

  await fs.ensureDir(outputDir);
  const filePath = path.join(outputDir, "audit-report.pdf");

  const doc = new PDFDocument({ margin: 50, size: "A4" });
  const stream = fs.createWriteStream(filePath);
  doc.pipe(stream);

  const { repository, summary, findings } = report;

  doc.fontSize(20).fillColor("#111827").text("Audit Report", { align: "left" });
  doc.moveDown(0.2);
  doc.fontSize(10).fillColor("#6b7280").text(
    `${repository.path}  ·  ${repository.framework}  ·  ${repository.language}`
  );
  doc.moveDown(1);

  doc.fontSize(36).fillColor(
    summary.score >= 80 ? "#16a34a" : summary.score >= 50 ? "#ca8a04" : "#dc2626"
  ).text(`${summary.score}/100`, { continued: false });
  doc.moveDown(0.3);

  doc.fontSize(11).fillColor("#374151").text(
    `Critical: ${summary.critical}   High: ${summary.high}   Medium: ${summary.medium}   Low: ${summary.low}`
  );
  doc.moveDown(1);

  doc.moveTo(50, doc.y).lineTo(545, doc.y).strokeColor("#e5e7eb").stroke();
  doc.moveDown(1);

  if (findings.length === 0) {
    doc.fontSize(12).fillColor("#6b7280").text("No findings.");
  } else {
    doc.fontSize(14).fillColor("#111827").text("Findings");
    doc.moveDown(0.5);

    for (const f of findings) {

      if (doc.y > 700) {
        doc.addPage();
      }

      doc.fontSize(10).fillColor(severityColor(f.severity)).text(
        `${f.severity}`, { continued: true }
      );
      doc.fillColor("#111827").text(`  ${f.id} — ${f.title}`);
      doc.fontSize(9).fillColor("#4b5563").text(f.description);
      if (f.file) {
        doc.fontSize(8).fillColor("#9ca3af").text(`File: ${f.file}`);
      }
      doc.fontSize(9).fillColor("#374151").text(`Fix: ${f.recommendation}`);
      doc.moveDown(0.7);

    }
  }

  doc.end();

  await new Promise<void>((resolve, reject) => {
    stream.on("finish", () => resolve());
    stream.on("error", reject);
  });

  return filePath;

}
