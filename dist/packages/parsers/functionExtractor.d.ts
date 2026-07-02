import ts from "typescript";
export interface FunctionInfo {
    name: string;
    async: boolean;
    line: number;
}
export declare function extractFunctions(source: ts.SourceFile): FunctionInfo[];
