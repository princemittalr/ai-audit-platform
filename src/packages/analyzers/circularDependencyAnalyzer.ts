import { KnowledgeGraph } from "../graph/types.js";

export interface CircularDependency {

  from: string;

  to: string;

  /** Full cycle path, e.g. ["a.ts", "b.ts", "c.ts", "a.ts"] */
  path: string[];

}

export function findCircularDependencies(
  graph: KnowledgeGraph
): CircularDependency[] {

  const imports = graph.edges.filter(
    e => e.relation === "imports"
  );

  const adjacency = new Map<string, string[]>();
  for (const edge of imports) {
    const list = adjacency.get(edge.from) ?? [];
    list.push(edge.to);
    adjacency.set(edge.from, list);
  }

  const cycles: CircularDependency[] = [];
  const seenCycleKeys = new Set<string>();

  const visited = new Set<string>();
  const stack: string[] = [];
  const onStack = new Set<string>();

  function dfs(node: string) {

    visited.add(node);
    stack.push(node);
    onStack.add(node);

    for (const next of adjacency.get(node) ?? []) {

      if (!visited.has(next)) {
        dfs(next);
      } else if (onStack.has(next)) {

        const cycleStart = stack.indexOf(next);
        const cyclePath = [...stack.slice(cycleStart), next];

        // dedupe cycles found from different starting nodes
        const key = [...new Set(cyclePath)].sort().join(">");
        if (!seenCycleKeys.has(key)) {
          seenCycleKeys.add(key);
          cycles.push({
            from: cyclePath[0],
            to: cyclePath[cyclePath.length - 2] ?? cyclePath[0],
            path: cyclePath
          });
        }

      }

    }

    stack.pop();
    onStack.delete(node);

  }

  for (const node of adjacency.keys()) {
    if (!visited.has(node)) {
      dfs(node);
    }
  }

  return cycles;

}