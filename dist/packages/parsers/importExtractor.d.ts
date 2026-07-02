import ts from "typescript";
export interface ImportInfo {
    module: string;
    defaultImport?: string;
    namedImports: string[];
}
export declare function extractImports(source: ts.SourceFile): ImportInfo[];
