import { Analyzer } from "./analyzer.js";

const analyzers: Analyzer[] = [];

export function register(
  analyzer: Analyzer
) {
  analyzers.push(analyzer);
}

export function getAnalyzers() {
  return analyzers;
}