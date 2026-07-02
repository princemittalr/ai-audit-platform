export function calculateScore(findings) {
    let score = 100;
    for (const finding of findings) {
        switch (finding.severity) {
            case "CRITICAL":
                score -= 20;
                break;
            case "HIGH":
                score -= 10;
                break;
            case "MEDIUM":
                score -= 5;
                break;
            case "LOW":
                score -= 2;
                break;
        }
    }
    return Math.max(score, 0);
}
//# sourceMappingURL=scoreEngine.js.map