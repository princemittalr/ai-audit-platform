export function buildRecommendations(findings) {
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
//# sourceMappingURL=recommendationEngine.js.map