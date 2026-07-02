export function findCircularDependencies(graph) {
    const cycles = [];
    const imports = graph.edges.filter(e => e.relation === "imports");
    for (const edge of imports) {
        const reverse = imports.find(e => e.from === edge.to &&
            e.to === edge.from);
        if (reverse) {
            cycles.push({
                from: edge.from,
                to: edge.to
            });
        }
    }
    return cycles;
}
//# sourceMappingURL=circularDependencyAnalyzer.js.map