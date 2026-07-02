import { buildContext } from "../context/contextBuilder.js";
import { buildKnowledgeGraph } from "../graph/index.js";
import { generateFindings } from "../analyzers/findingEngine.js";
import { buildReport } from "../report/builder.js";
export async function runPipeline(repository) {
    const audit = await buildContext(repository);
    const graph = await buildKnowledgeGraph(repository);
    const findings = generateFindings(audit.analysis);
    const pipeline = {
        audit,
        graph,
        findings
    };
    pipeline.report = buildReport(pipeline);
    return pipeline;
}
//# sourceMappingURL=pipeline.js.map