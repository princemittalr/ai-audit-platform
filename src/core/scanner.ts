import fg from "fast-glob";
import fs from "fs-extra";
import path from "path";
import ignore from "ignore";

export interface ScanResult {
    root: string;
    totalFiles: number;
    totalDirectories: number;
    files: string[];
}

export async function scanRepository(root: string): Promise<ScanResult> {

    const gitignore = path.join(root, ".gitignore");

    const ig = ignore();

    if (await fs.pathExists(gitignore)) {
        ig.add(await fs.readFile(gitignore, "utf8"));
    }

    const entries = await fg(["**/*"], {
        cwd: root,
        dot: true,
        onlyFiles: false,
        followSymbolicLinks: false
    });

    const filtered = entries.filter(e => !ig.ignores(e));

    const files: string[] = [];
    let dirs = 0;

    for (const item of filtered) {

        const full = path.join(root, item);

        const stat = await fs.stat(full);

        if (stat.isDirectory()) {
            dirs++;
        } else {
            files.push(item);
        }
    }

    return {
        root,
        totalFiles: files.length,
        totalDirectories: dirs,
        files
    };
}