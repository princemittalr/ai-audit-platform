import { KnowledgeGraph } from "../graph/types.js";
export interface CircularDependency {
    from: string;
    to: string;
}
export declare function findCircularDependencies(graph: KnowledgeGraph): CircularDependency[];
