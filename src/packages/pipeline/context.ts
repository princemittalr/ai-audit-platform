import { AuditContext } from "../context/types.js";
import { KnowledgeGraph } from "../graph/types.js";
import { Finding } from "../models/finding.js";
import { AuditReport } from "../report/report.js";

export interface PipelineContext {

  audit: AuditContext;

  graph: KnowledgeGraph;

  findings: Finding[];

  report?: AuditReport;

}