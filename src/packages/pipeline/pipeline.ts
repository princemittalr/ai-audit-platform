import { buildContext } from "../context/contextBuilder.js";
import { buildKnowledgeGraph } from "../graph/index.js";
import { generateFindings } from "../analyzers/findingEngine.js";
import { applyAuditIgnore } from "../analyzers/auditIgnore.js";

import { buildReport } from "../report/builder.js";

import { PipelineContext } from "./context.js";

export interface RunPipelineOptions {
  /**
   * If provided, the final report's findings are filtered down to only
   * those touching these files. Analysis (e.g. cycle detection) still runs
   * over the whole repo — a cycle involving a changed file can only be
   * found by seeing the whole graph — but the report only surfaces what's
   * relevant to the diff.
   */
  scopeToFiles?: string[];
}

export async function runPipeline(
  repository: string,
  options: RunPipelineOptions = {}
): Promise<PipelineContext> {

  const audit = await buildContext(repository);

  const graph = await buildKnowledgeGraph(repository);

  let findings = await generateFindings(
    audit.analysis,
    graph,
    repository
  );

  findings = await applyAuditIgnore(repository, findings);

  if (options.scopeToFiles) {
    const scope = new Set(options.scopeToFiles);
    findings = findings.filter(f => !f.file || scope.has(f.file));
  }

  const pipeline: PipelineContext = {

    audit,

    graph,

    findings

  };

  pipeline.report = buildReport(
    pipeline
  );

  return pipeline;

}