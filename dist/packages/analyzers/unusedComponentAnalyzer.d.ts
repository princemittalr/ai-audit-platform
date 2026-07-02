import { KnowledgeGraph } from "../graph/types.js";
export interface UnusedComponent {
    component: string;
    file: string;
}
export declare function findUnusedComponents(graph: KnowledgeGraph): UnusedComponent[];
