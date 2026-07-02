import ts from "typescript";
export function parseSource(source, fileName) {
    return ts.createSourceFile(fileName, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
}
//# sourceMappingURL=astParser.js.map