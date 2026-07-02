import { Project } from "ts-morph";
export async function parseTypeScriptFile(filePath) {
    const project = new Project({
        skipAddingFilesFromTsConfig: true
    });
    const source = project.addSourceFileAtPath(filePath);
    const imports = source.getImportDeclarations().map(i => ({
        module: i.getModuleSpecifierValue(),
        namedImports: i.getNamedImports().map(n => n.getName())
    }));
    const exportedFunctions = source
        .getFunctions()
        .filter(f => f.isExported())
        .map(f => f.getName() ?? "anonymous");
    const exportedClasses = source
        .getClasses()
        .filter(c => c.isExported())
        .map(c => c.getName() ?? "AnonymousClass");
    const exportedVariables = source
        .getVariableStatements()
        .filter(v => v.isExported())
        .flatMap(v => v.getDeclarations().map(d => d.getName()));
    return {
        path: filePath,
        imports,
        exportedFunctions,
        exportedClasses,
        exportedVariables
    };
}
//# sourceMappingURL=typescriptParser.js.map