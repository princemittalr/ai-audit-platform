import { Finding } from "../models/finding.js";

const WEIGHTS = {
  CRITICAL: 20,
  HIGH: 10,
  MEDIUM: 5,
  LOW: 2
} as const;

// Max total points a severity tier can deduct, regardless of count.
// Prevents e.g. 40 low-severity findings from flattening the score to 0
// the same as 2 critical ones would. CRITICAL is intentionally uncapped —
// a repo with many critical issues should score near 0.
const TIER_CAPS = {
  CRITICAL: Infinity,
  HIGH: 40,
  MEDIUM: 25,
  LOW: 15
} as const;

export function calculateScore(
  findings: Finding[]
): number {

  let score = 100;

  const counts: Record<string, number> = {
    CRITICAL: 0,
    HIGH: 0,
    MEDIUM: 0,
    LOW: 0
  };

  for (const finding of findings) {
    counts[finding.severity] = (counts[finding.severity] ?? 0) + 1;
  }

  for (const severity of Object.keys(WEIGHTS) as (keyof typeof WEIGHTS)[]) {
    const raw = counts[severity] * WEIGHTS[severity];
    score -= Math.min(raw, TIER_CAPS[severity]);
  }

  return Math.max(score, 0);

}