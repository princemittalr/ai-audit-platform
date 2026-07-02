import ts from "typescript";
export function extractComponents(source) {
    const components = [];
    function visit(node) {
        if (ts.isFunctionDeclaration(node) &&
            node.name &&
            /^[A-Z]/.test(node.name.text)) {
            components.push({
                name: node.name.text,
                line: source.getLineAndCharacterOfPosition(node.pos).line + 1
            });
        }
        ts.forEachChild(node, visit);
    }
    visit(source);
    return components;
}
//# sourceMappingURL=componentExtractor.js.map