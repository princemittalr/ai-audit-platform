import ts from "typescript";
export function extractImports(source) {
    const imports = [];
    source.forEachChild(node => {
        if (!ts.isImportDeclaration(node))
            return;
        const module = node.moduleSpecifier.text;
        let defaultImport;
        const namedImports = [];
        if (node.importClause) {
            if (node.importClause.name) {
                defaultImport = node.importClause.name.text;
            }
            if (node.importClause.namedBindings &&
                ts.isNamedImports(node.importClause.namedBindings)) {
                node.importClause.namedBindings.elements.forEach(el => {
                    namedImports.push(el.name.text);
                });
            }
        }
        imports.push({
            module,
            defaultImport,
            namedImports
        });
    });
    return imports;
}
//# sourceMappingURL=importExtractor.js.map