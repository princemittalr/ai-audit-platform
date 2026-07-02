import { getAnalyzers } from "./registry.js";
export async function runAnalyzers(root) {
    const results = [];
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
//# sourceMappingURL=runner.js.map