import { Finding } from "../models/finding.js";

export function buildRecommendations(
  findings: Finding[]
): string[] {

  return findings

    .sort((a, b) => {

      const order = {
        CRITICAL: 4,
        HIGH: 3,
        MEDIUM: 2,
        LOW: 1
      };

      return order[b.severity] - order[a.severity];

    })

    .map(f => f.recommendation);

}