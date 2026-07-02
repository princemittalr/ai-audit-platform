export function generateFindings(analysis) {
    const findings = [];
    if (!analysis.middleware) {
        findings.push({
            severity: "MEDIUM",
            category: "Architecture",
            title: "Middleware not found",
            description: "No Next.js middleware detected.",
            recommendation: "Add middleware if authentication, redirects or request filtering are required."
        });
    }
    if (analysis.envFiles === 0) {
        findings.push({
            severity: "LOW",
            category: "Configuration",
            title: "No environment files",
            description: "No .env files were detected.",
            recommendation: "Verify environment configuration is documented."
        });
    }
    if (analysis.components === 0) {
        findings.push({
            severity: "HIGH",
            category: "Architecture",
            title: "No React components detected",
            description: "Component analysis returned zero components.",
            recommendation: "Verify repository structure or analyzer configuration."
        });
    }
    return findings;
}
//# sourceMappingURL=findingEngine.js.map