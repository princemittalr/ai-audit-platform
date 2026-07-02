export interface ParsedImport {
    module: string;
    namedImports: string[];
}
export interface ParsedFile {
    path: string;
    imports: ParsedImport[];
    exportedFunctions: string[];
    exportedClasses: string[];
    exportedVariables: string[];
}
export declare function parseTypeScriptFile(filePath: string): Promise<ParsedFile>;
