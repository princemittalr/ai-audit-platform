import ts from "typescript";
export interface ExportInfo {
    name: string;
    type: string;
}
export declare function extractExports(source: ts.SourceFile): ExportInfo[];
