import fs from "fs-extra";
import path from "path";
import fg from "fast-glob";
import { parseSource, extractComponents, extractFunctions, extractHooks, extractImports } from "../parsers/index.js";
export async function buildKnowledgeGraph(root) {
    const graph = {
        nodes: [],
        edges: []
    };
    const files = await fg([
        "**/*.ts",
        "**/*.tsx"
    ], {
        cwd: root,
        ignore: [
            "**/node_modules/**",
            "**/.next/**"
        ]
    });
    for (const file of files) {
        const full = path.join(root, file);
        const source = await fs.readFile(full, "utf8");
        const ast = parseSource(source, file);
        graph.nodes.push({
            id: file,
            file,
            type: "file"
        });
        for (const c of extractComponents(ast)) {
            graph.nodes.push({
                id: `${file}:${c.name}`,
                file,
                type: "component"
            });
            graph.edges.push({
                from: file,
                to: `${file}:${c.name}`,
                relation: "contains"
            });
        }
        for (const fn of extractFunctions(ast)) {
            graph.nodes.push({
                id: `${file}:${fn.name}`,
                file,
                type: "function"
            });
            graph.edges.push({
                from: file,
                to: `${file}:${fn.name}`,
                relation: "contains"
            });
        }
        for (const hook of extractHooks(ast)) {
            graph.nodes.push({
                id: `${file}:${hook.name}`,
                file,
                type: "hook"
            });
            graph.edges.push({
                from: file,
                to: `${file}:${hook.name}`,
                relation: "uses"
            });
        }
        for (const imp of extractImports(ast)) {
            graph.edges.push({
                from: file,
                to: imp.module,
                relation: "imports"
            });
        }
    }
    return graph;
}
//# sourceMappingURL=knowledgeGraph.js.map