import fg from "fast-glob";
import fs from "fs-extra";
import path from "path";
import { calculateImportance } from "./importanceScorer.js";
const IGNORE = [
    "**/node_modules/**",
    "**/.git/**",
    "**/.next/**",
    "**/dist/**",
    "**/coverage/**"
];
export async function buildRepositoryIndex(root) {
    const entries = await fg(["**/*"], {
        cwd: root,
        onlyFiles: true,
        ignore: IGNORE,
        dot: true
    });
    const files = [];
    let totalSize = 0;
    for (const file of entries.sort()) {
        const absolute = path.join(root, file);
        const stat = await fs.stat(absolute);
        totalSize += stat.size;
        files.push({
            path: file,
            extension: path.extname(file),
            size: stat.size,
            importance: calculateImportance({
                path: file,
                extension: path.extname(file),
                size: stat.size,
                importance: 0
            })
        });
    }
    files.sort((a, b) => b.importance - a.importance);
    return {
        root,
        files,
        totalFiles: files.length,
        totalSize
    };
}
//# sourceMappingURL=indexBuilder.js.map