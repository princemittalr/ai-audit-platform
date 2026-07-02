export interface ScanResult {
    root: string;
    totalFiles: number;
    totalDirectories: number;
    files: string[];
}
export declare function scanRepository(root: string): Promise<ScanResult>;
