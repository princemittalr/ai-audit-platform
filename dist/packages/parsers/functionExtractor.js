import ts from "typescript";
export function extractFunctions(source) {
    const functions = [];
    function visit(node) {
        if (ts.isFunctionDeclaration(node) && node.name) {
            functions.push({
                name: node.name.text,
                async: node.modifiers?.some(m => m.kind === ts.SyntaxKind.AsyncKeyword) ?? false,
                line: source.getLineAndCharacterOfPosition(node.getStart()).line + 1
            });
        }
        ts.forEachChild(node, visit);
    }
    visit(source);
    return functions;
}
//# sourceMappingURL=functionExtractor.js.map