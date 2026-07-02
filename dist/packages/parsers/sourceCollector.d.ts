export interface SourceFile {
    path: string;
    extension: string;
    size: number;
    content: string;
}
export interface SourceCollection {
    root: string;
    files: SourceFile[];
    totalFiles: number;
    totalSize: number;
}
export declare function collectSource(root: string): Promise<SourceCollection>;
