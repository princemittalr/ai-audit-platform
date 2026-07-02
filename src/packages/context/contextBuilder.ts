import { scanRepository } from "../core/scanner.js";
import { detectFramework } from "../analyzers/frameworkDetector.js";
import { analyzeProject } from "../analyzers/projectAnalyzer.js";
import type { AuditContext } from "./types.js";

export async function buildContext(
  repository: string
): Promise<AuditContext> {
  const scan = await scanRepository(repository);

  const framework = await detectFramework(repository);

  const analysis = await analyzeProject(repository);

  return {
    scan,
    framework,
    analysis,
  };
}