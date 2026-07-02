export interface FrameworkInfo {
    framework: string;
    language: string;
    css: string;
    packageManager: string;
    packageName: string;
    version: string;
}
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
export interface ScanInfo {
    root: string;
    totalFiles: number;
    totalDirectories: number;
    files: string[];
}
export interface AuditContext {
    scan: ScanInfo;
    framework: FrameworkInfo;
    analysis: ProjectAnalysis;
}
