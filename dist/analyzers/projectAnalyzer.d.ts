export interface ProjectAnalysis {
    appRouter: boolean;
    pagesRouter: boolean;
    apiRoutes: number;
    components: number;
    hooks: number;
    contexts: number;
    middleware: boolean;
    publicAssets: number;
    envFiles: number;
    configFiles: number;
}
export declare function analyzeProject(root: string): Promise<ProjectAnalysis>;
