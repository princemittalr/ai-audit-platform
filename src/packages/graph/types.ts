export interface GraphNode {

  id: string;

  file: string;

  type:
    | "component"
    | "function"
    | "hook"
    | "file";

}

export interface GraphEdge {

  from: string;

  to: string;

  relation:
    | "imports"
    | "contains"
    | "uses";

}

export interface KnowledgeGraph {

  nodes: GraphNode[];

  edges: GraphEdge[];

}