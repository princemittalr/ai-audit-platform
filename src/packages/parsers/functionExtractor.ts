import ts from "typescript";

export interface FunctionInfo {
  name: string;
  async: boolean;
  line: number;
}

export function extractFunctions(
  source: ts.SourceFile
): FunctionInfo[] {

  const functions: FunctionInfo[] = [];

  function visit(node: ts.Node) {

    if (ts.isFunctionDeclaration(node) && node.name) {

      functions.push({
        name: node.name.text,
        async: node.modifiers?.some(
          m => m.kind === ts.SyntaxKind.AsyncKeyword
        ) ?? false,
        line:
          source.getLineAndCharacterOfPosition(node.getStart()).line + 1
      });

    }

    ts.forEachChild(node, visit);

  }

  visit(source);

  return functions;

}