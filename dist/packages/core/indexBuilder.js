import fg from "fast-glob";
import fs from "fs-extra";
import path from "path";
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
    for (const file of entries) {
        const absolute = path.join(root, file);
        const stat = await fs.stat(absolute);
        totalSize += stat.size;
        files.push({
            path: file,
            extension: path.extname(file),
            size: stat.size,
            importance: 0
        });
    }
    return {
        root,
        files,
        totalFiles: files.length,
        totalSize
    };
}
//# sourceMappingURL=indexBuilder.js.map