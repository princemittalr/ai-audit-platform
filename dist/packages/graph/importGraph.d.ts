export interface ImportEdge {
    from: string;
    to: string;
}
export interface ImportGraph {
    edges: ImportEdge[];
}
export declare function buildImportGraph(root: string): Promise<ImportGraph>;
