export interface FrameworkInfo {
    framework: string;
    language: string;
    css: string;
    packageManager: string;
    packageName: string;
    version: string;
}
export declare function detectFramework(root: string): Promise<FrameworkInfo>;
