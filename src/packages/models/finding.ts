export type Severity = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

/**
 * How reliable this finding is. HIGH = deterministic/structural (e.g. a
 * circular import is either there or not). HEURISTIC = inferred from a
 * pattern that can have false positives (e.g. "unused" component detection
 * can miss dynamic imports, re-exports via index files, or usage from a
 * file type the parser doesn't cover).
 */
export type Confidence = "HIGH" | "HEURISTIC";

export interface Finding {
  id: string;
  severity: Severity;
  category: string;
  title: string;
  description: string;
  recommendation: string;
  file?: string;
  line?: number;
  confidence?: Confidence;
}