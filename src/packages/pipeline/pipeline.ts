import { buildContext } from "../context/contextBuilder.js";
import { buildKnowledgeGraph } from "../graph/index.js";
import { generateFindings } from "../analyzers/findingEngine.js";

import { buildReport } from "../report/builder.js";

import { PipelineContext } from "./context.js";

export async function runPipeline(
  repository: string
): Promise<PipelineContext> {

  const audit = await buildContext(repository);

  const graph = await buildKnowledgeGraph(repository);

  const findings = generateFindings(
    audit.analysis,
    graph
  );

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