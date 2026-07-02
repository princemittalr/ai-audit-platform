export interface GraphNode {
    id: string;
    path: string;
    type: string;
}
export interface GraphEdge {
    from: string;
    to: string;
    relation: string;
}
export interface KnowledgeGraph {
    nodes: GraphNode[];
    edges: GraphEdge[];
}
