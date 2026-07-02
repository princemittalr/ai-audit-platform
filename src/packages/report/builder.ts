import { AuditReport } from "./report.js";
import { PipelineContext } from "../pipeline/context.js";
import { calculateScore } from "../intelligence/scoreEngine.js";

export function buildReport(
  pipeline: PipelineContext
): AuditReport {

  const score = calculateScore(
    pipeline.findings
  );

  const critical = pipeline.findings.filter(
    f => f.severity === "CRITICAL"
  ).length;

  const high = pipeline.findings.filter(
    f => f.severity === "HIGH"
  ).length;

  const medium = pipeline.findings.filter(
    f => f.severity === "MEDIUM"
  ).length;

  const low = pipeline.findings.filter(
    f => f.severity === "LOW"
  ).length;

  return {

    repository: {

      path: pipeline.audit.scan.root,

      framework: pipeline.audit.framework.framework,

      language: pipeline.audit.framework.language

    },

    summary: {

      score,

      critical,

      high,

      medium,

      low

    },

    findings: pipeline.findings

  };

}