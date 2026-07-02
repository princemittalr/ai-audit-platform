import { KnowledgeGraph } from "../graph/types.js";

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

      const used = graph.edges.some(edge =>
        edge.to === component.id &&
        edge.relation === "imports"
      );

      return !used;

    })

    .map(component => ({
      component: component.id,
      file: component.file
    }));

}