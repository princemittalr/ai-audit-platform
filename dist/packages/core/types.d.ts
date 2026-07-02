export interface RepositoryInfo {
    root: string;
    name: string;
    framework: string | null;
    language: string | null;
    packageManager: "npm" | "pnpm" | "yarn" | "bun" | "unknown";
    totalFiles: number;
    totalDirectories: number;
    ignoredFiles: number;
    sizeInBytes: number;
    scannedAt: Date;
}
export interface ScanOptions {
    ignore?: string[];
    includeHidden?: boolean;
}
export interface ScanResult {
    success: boolean;
    repository: RepositoryInfo;
    errors: string[];
}
