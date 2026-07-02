import { getAnalyzers } from "./registry.js";
import { AnalyzerResult } from "./result.js";

export async function runAnalyzers(
  root: string
): Promise<AnalyzerResult[]> {

  const results: AnalyzerResult[] = [];

  for (const analyzer of getAnalyzers()) {

    const start = Date.now();

    const data = await analyzer.analyze(root);

    results.push({

      analyzer: analyzer.name,

      duration: Date.now() - start,

      data

    });

  }

  return results;

}