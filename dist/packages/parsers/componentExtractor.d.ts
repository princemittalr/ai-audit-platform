import ts from "typescript";
export interface ComponentInfo {
    name: string;
    line: number;
}
export declare function extractComponents(source: ts.SourceFile): ComponentInfo[];
