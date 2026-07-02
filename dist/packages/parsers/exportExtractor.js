import ts from "typescript";
export function extractExports(source) {
    const exports = [];
    source.forEachChild(node => {
        if (ts.canHaveModifiers(node) &&
            ts.getModifiers(node)?.some(m => m.kind === ts.SyntaxKind.ExportKeyword)) {
            if (ts.isFunctionDeclaration(node) && node.name) {
                exports.push({
                    name: node.name.text,
                    type: "function"
                });
            }
            if (ts.isInterfaceDeclaration(node)) {
                exports.push({
                    name: node.name.text,
                    type: "interface"
                });
            }
            if (ts.isTypeAliasDeclaration(node)) {
                exports.push({
                    name: node.name.text,
                    type: "type"
                });
            }
            if (ts.isClassDeclaration(node) && node.name) {
                exports.push({
                    name: node.name.text,
                    type: "class"
                });
            }
        }
    });
    return exports;
}
//# sourceMappingURL=exportExtractor.js.map