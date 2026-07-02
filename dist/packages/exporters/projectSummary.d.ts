interface SummaryData {
    repository: string;
    framework: string;
    language: string;
    packageManager: string;
    css: string;
    packageName: string;
    version: string;
    files: number;
    folders: number;
}
export declare function generateProjectSummary(outputDir: string, data: SummaryData): Promise<void>;
export {};
