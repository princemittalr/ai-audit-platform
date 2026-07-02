export function findUnusedComponents(graph) {
    const components = graph.nodes.filter(n => n.type === "component");
    return components
        .filter(component => {
        const used = graph.edges.some(edge => edge.to === component.id &&
            edge.relation === "imports");
        return !used;
    })
        .map(component => ({
        component: component.id,
        file: component.file
    }));
}
//# sourceMappingURL=unusedComponentAnalyzer.js.map