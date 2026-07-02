import { SourceCollection } from "../parser/sourceCollector.js";
import {
  GraphNode,
  GraphEdge,
  KnowledgeGraph
} from "./types.js";

export function buildKnowledgeGraph(
  source: SourceCollection
): KnowledgeGraph {

  const nodes: GraphNode[] = [];
  const edges: GraphEdge[] = [];

  for (const file of source.files) {

    nodes.push({
      id: file.path,
      path: file.path,
      type: file.extension.replace(".", "")
    });

  }

  return {
    nodes,
    edges
  };

}