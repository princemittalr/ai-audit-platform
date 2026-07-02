import ts from "typescript";
export interface HookInfo {
    name: string;
    line: number;
}
export declare function extractHooks(source: ts.SourceFile): HookInfo[];
