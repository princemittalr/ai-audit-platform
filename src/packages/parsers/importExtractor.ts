import ts from "typescript";

export interface ImportInfo {
  module: string;
  defaultImport?: string;
  namedImports: string[];
}

export function extractImports(
  source: ts.SourceFile
): ImportInfo[] {

  const imports: ImportInfo[] = [];

  source.forEachChild(node => {

    if (!ts.isImportDeclaration(node)) return;

    const module =
      (node.moduleSpecifier as ts.StringLiteral).text;

    let defaultImport: string | undefined;

    const namedImports: string[] = [];

    if (node.importClause) {

      if (node.importClause.name) {
        defaultImport = node.importClause.name.text;
      }

      if (
        node.importClause.namedBindings &&
        ts.isNamedImports(node.importClause.namedBindings)
      ) {

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