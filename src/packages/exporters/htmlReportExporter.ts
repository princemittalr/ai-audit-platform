import fs from "fs-extra";
import path from "path";

import { AuditReport } from "../report/report.js";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function severityColor(severity: string): string {
  switch (severity) {
    case "CRITICAL": return "#dc2626";
    case "HIGH": return "#ea580c";
    case "MEDIUM": return "#ca8a04";
    case "LOW": return "#65a30d";
    default: return "#6b7280";
  }
}

function scoreColor(score: number): string {
  if (score >= 80) return "#16a34a";
  if (score >= 50) return "#ca8a04";
  return "#dc2626";
}

export function buildHtmlReport(report: AuditReport): string {

  const { repository, summary, findings } = report;

  const rows = findings.map(f => `
    <tr>
      <td><code>${escapeHtml(f.id)}</code></td>
      <td><span class="badge" style="background:${severityColor(f.severity)}">${f.severity}</span></td>
      <td>${escapeHtml(f.category)}</td>
      <td>${escapeHtml(f.title)}</td>
      <td>${escapeHtml(f.file ?? "—")}</td>
      <td>${f.confidence === "HEURISTIC" ? '<span class="conf-heuristic">heuristic</span>' : '<span class="conf-high">structural</span>'}</td>
    </tr>
  `).join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Audit Report — ${escapeHtml(repository.path)}</title>
<style>
  body { font-family: -apple-system, system-ui, sans-serif; margin: 0; padding: 40px; background: #0f1117; color: #e5e7eb; }
  .container { max-width: 960px; margin: 0 auto; }
  h1 { font-size: 22px; margin-bottom: 4px; }
  .meta { color: #9ca3af; font-size: 14px; margin-bottom: 32px; }
  .score-card { display: flex; align-items: center; gap: 24px; background: #1a1d29; border-radius: 12px; padding: 24px; margin-bottom: 32px; }
  .score-number { font-size: 48px; font-weight: 700; color: ${scoreColor(summary.score)}; }
  .score-label { color: #9ca3af; font-size: 13px; }
  .tiers { display: flex; gap: 16px; margin-left: auto; }
  .tier { text-align: center; }
  .tier-count { font-size: 20px; font-weight: 600; }
  .tier-label { font-size: 11px; color: #9ca3af; text-transform: uppercase; }
  table { width: 100%; border-collapse: collapse; background: #1a1d29; border-radius: 12px; overflow: hidden; }
  th { text-align: left; padding: 12px 16px; background: #22263a; font-size: 12px; text-transform: uppercase; color: #9ca3af; }
  td { padding: 10px 16px; border-top: 1px solid #2a2e42; font-size: 14px; }
  code { background: #22263a; padding: 2px 6px; border-radius: 4px; font-size: 12px; }
  .badge { color: white; padding: 3px 10px; border-radius: 999px; font-size: 11px; font-weight: 600; }
  .conf-heuristic { color: #ca8a04; font-size: 12px; }
  .conf-high { color: #16a34a; font-size: 12px; }
  .empty { padding: 40px; text-align: center; color: #9ca3af; }
</style>
</head>
<body>
<div class="container">
  <h1>Audit Report</h1>
  <div class="meta">${escapeHtml(repository.path)} · ${escapeHtml(repository.framework)} · ${escapeHtml(repository.language)}</div>

  <div class="score-card">
    <div>
      <div class="score-number">${summary.score}</div>
      <div class="score-label">/ 100</div>
    </div>
    <div class="tiers">
      <div class="tier"><div class="tier-count" style="color:${severityColor("CRITICAL")}">${summary.critical}</div><div class="tier-label">Critical</div></div>
      <div class="tier"><div class="tier-count" style="color:${severityColor("HIGH")}">${summary.high}</div><div class="tier-label">High</div></div>
      <div class="tier"><div class="tier-count" style="color:${severityColor("MEDIUM")}">${summary.medium}</div><div class="tier-label">Medium</div></div>
      <div class="tier"><div class="tier-count" style="color:${severityColor("LOW")}">${summary.low}</div><div class="tier-label">Low</div></div>
    </div>
  </div>

  ${findings.length === 0
    ? '<div class="empty">No findings.</div>'
    : `<table>
    <thead><tr><th>ID</th><th>Severity</th><th>Category</th><th>Title</th><th>File</th><th>Confidence</th></tr></thead>
    <tbody>${rows}</tbody>
  </table>`
  }
</div>
</body>
</html>`;

}

export async function exportHtmlReport(
  outputDir: string,
  report: AuditReport
): Promise<string> {

  await fs.ensureDir(outputDir);
  const filePath = path.join(outputDir, "audit-report.html");
  await fs.writeFile(filePath, buildHtmlReport(report), "utf8");
  return filePath;

}
