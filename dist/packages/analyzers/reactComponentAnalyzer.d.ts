export interface ReactComponentInfo {
    name: string;
    file: string;
    clientComponent: boolean;
    hookCount: number;
    contextUsage: number;
}
export declare function analyzeReactComponents(root: string): Promise<ReactComponentInfo[]>;
