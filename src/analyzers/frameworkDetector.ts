import fs from "fs-extra";
import path from "path";

export interface FrameworkInfo {
    framework: string;
    language: string;
    css: string;
    packageManager: string;
    packageName: string;
    version: string;
}

export async function detectFramework(root: string): Promise<FrameworkInfo> {

    const packageJsonPath = path.join(root, "package.json");

    let framework = "Unknown";
    let language = "JavaScript";
    let css = "Unknown";
    let packageManager = "Unknown";
    let packageName = "";
    let version = "";

    if (await fs.pathExists(packageJsonPath)) {

        const pkg = await fs.readJson(packageJsonPath);

        packageName = pkg.name ?? "";
        version = pkg.version ?? "";

        const deps = {
            ...(pkg.dependencies ?? {}),
            ...(pkg.devDependencies ?? {})
        };

        if (deps.next)
            framework = "Next.js";

        else if (deps.react)
            framework = "React";

        if (await fs.pathExists(path.join(root, "tsconfig.json")))
            language = "TypeScript";

        if (deps.tailwindcss)
            css = "Tailwind CSS";

        if (await fs.pathExists(path.join(root, "package-lock.json")))
            packageManager = "npm";

        else if (await fs.pathExists(path.join(root, "pnpm-lock.yaml")))
            packageManager = "pnpm";

        else if (await fs.pathExists(path.join(root, "yarn.lock")))
            packageManager = "yarn";

        else if (await fs.pathExists(path.join(root, "bun.lockb")))
            packageManager = "bun";
    }

    return {
        framework,
        language,
        css,
        packageManager,
        packageName,
        version
    };

}