import path from "path";
import fg from "fast-glob";
import { parseTypeScriptFile } from "../parsers/typescriptParser.js";
export async function buildImportGraph(root) {
    const files = await fg([
        "**/*.ts",
        "**/*.tsx",
        "**/*.js",
        "**/*.jsx"
    ], {
        cwd: root,
        ignore: [
            "**/node_modules/**",
            "**/.next/**",
            "**/dist/**"
        ]
    });
    const edges = [];
    for (const relative of files) {
        const absolute = path.join(root, relative);
        try {
            const parsed = await parseTypeScriptFile(absolute);
            for (const imp of parsed.imports) {
                edges.push({
                    from: relative,
                    to: imp.module
                });
            }
        }
        catch {
            continue;
        }
    }
    return { edges };
}
//# sourceMappingURL=importGraph.js.map