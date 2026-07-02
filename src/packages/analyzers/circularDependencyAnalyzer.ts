import { KnowledgeGraph } from "../graph/types.js";

export interface CircularDependency {

  from: string;

  to: string;

}

export function findCircularDependencies(
  graph: KnowledgeGraph
): CircularDependency[] {

  const cycles: CircularDependency[] = [];

  const imports = graph.edges.filter(
    e => e.relation === "imports"
  );

  for (const edge of imports) {

    const reverse = imports.find(e =>
      e.from === edge.to &&
      e.to === edge.from
    );

    if (reverse) {

      cycles.push({

        from: edge.from,

        to: edge.to

      });

    }

  }

  return cycles;

}