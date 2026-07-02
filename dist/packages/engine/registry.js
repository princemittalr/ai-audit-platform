const analyzers = [];
export function register(analyzer) {
    analyzers.push(analyzer);
}
export function getAnalyzers() {
    return analyzers;
}
//# sourceMappingURL=registry.js.map