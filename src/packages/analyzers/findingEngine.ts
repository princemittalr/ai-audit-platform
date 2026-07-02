import { ProjectAnalysis } from "./projectAnalyzer.js";
import { Finding } from "../models/finding.js";
import { KnowledgeGraph } from "../graph/types.js";
import { findCircularDependencies } from "./circularDependencyAnalyzer.js";
import { findUnusedComponents } from "./unusedComponentAnalyzer.js";
import { findLargeFiles } from "./largeFileAnalyzer.js";

export async function generateFindings(
  analysis: ProjectAnalysis,
  graph?: KnowledgeGraph,
  root?: string
): Promise<Finding[]> {

  const findings: Finding[] = [];

  if (!analysis.middleware) {
    findings.push({
      id: "ARCH-001",
      severity: "MEDIUM",
      category: "Architecture",
      title: "Middleware not found",
      confidence: "HEURISTIC",
      description: "No Next.js middleware detected.",
      recommendation:
        "Add middleware if authentication, redirects or request filtering are required."
    });
  }

  if (analysis.envFiles === 0) {
    findings.push({
      id: "CONF-001",
      severity: "LOW",
      category: "Configuration",
      title: "No environment files",
      confidence: "HEURISTIC",
      description: "No .env files were detected.",
      recommendation:
        "Verify environment configuration is documented."
    });
  }

  if (analysis.components === 0) {
    findings.push({
      id: "ARCH-002",
      severity: "HIGH",
      category: "Architecture",
      title: "No React components detected",
      confidence: "HEURISTIC",
      description:
        "Component analysis returned zero components.",
      recommendation:
        "Verify repository structure or analyzer configuration."
    });
  }

  if (graph) {

    const cycles = findCircularDependencies(graph);

    for (const cycle of cycles) {
      findings.push({
        id: `DEP-${String(findings.length + 1).padStart(3, "0")}`,
        severity: "HIGH",
        category: "Dependencies",
        title: "Circular dependency detected",
        confidence: "HIGH",
        description: `Circular import chain: ${cycle.path.join(" → ")}`,
        recommendation:
          "Break the cycle by extracting shared code into a separate module.",
        file: cycle.from
      });
    }

    const unused = findUnusedComponents(graph);

    for (const component of unused) {
      findings.push({
        id: `DEAD-${String(findings.length + 1).padStart(3, "0")}`,
        severity: "LOW",
        category: "Dead Code",
        title: "Unused component",
        confidence: "HEURISTIC",
        description: `Component "${component.component}" is never imported.`,
        recommendation:
          "Remove the component if unused, or verify it's exported for external use.",
        file: component.file
      });
    }

  }

  if (root) {

    const largeFiles = await findLargeFiles(root);

    for (const large of largeFiles) {
      findings.push({
        id: `MAINT-${String(findings.length + 1).padStart(3, "0")}`,
        severity: large.lines > 600 ? "MEDIUM" : "LOW",
        category: "Maintainability",
        title: "Large file",
        confidence: "HIGH",
        description: `${large.file} is ${large.lines} lines long.`,
        recommendation:
          "Consider splitting into smaller, single-responsibility modules.",
        file: large.file
      });
    }

  }

  return findings;
}