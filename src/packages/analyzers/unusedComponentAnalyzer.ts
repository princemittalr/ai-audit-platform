import { KnowledgeGraph } from "../graph/types.js";
import { isFrameworkEntryFile } from "../graph/pathResolver.js";

export interface UnusedComponent {

  component: string;

  file: string;

}

export function findUnusedComponents(
  graph: KnowledgeGraph
): UnusedComponent[] {

  const components = graph.nodes.filter(
    n => n.type === "component"
  );

  return components

    .filter(component => {

      if (isFrameworkEntryFile(component.file)) {
        return false;
      }

      const used = graph.edges.some(edge =>
        edge.to === component.file &&
        edge.relation === "imports"
      );

      return !used;

    })

    .map(component => ({
      component: component.id,
      file: component.file
    }));

}