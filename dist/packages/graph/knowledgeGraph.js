export function buildKnowledgeGraph(source) {
    const nodes = [];
    const edges = [];
    for (const file of source.files) {
        nodes.push({
            id: file.path,
            path: file.path,
            type: file.extension.replace(".", "")
        });
    }
    return {
        nodes,
        edges
    };
}
//# sourceMappingURL=knowledgeGraph.js.map