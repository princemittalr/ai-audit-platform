import ts from "typescript";

export interface ComponentInfo {
  name: string;
  line: number;
}

export function extractComponents(
  source: ts.SourceFile
): ComponentInfo[] {

  const components: ComponentInfo[] = [];

  function visit(node: ts.Node) {

    if (
      ts.isFunctionDeclaration(node) &&
      node.name &&
      /^[A-Z]/.test(node.name.text)
    ) {
      components.push({
        name: node.name.text,
        line:
          source.getLineAndCharacterOfPosition(
            node.pos
          ).line + 1
      });
    }

    ts.forEachChild(node, visit);

  }

  visit(source);

  return components;

}