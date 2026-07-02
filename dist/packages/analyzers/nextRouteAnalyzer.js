import fg from "fast-glob";
import fs from "fs-extra";
import path from "path";
export async function analyzeNextRoutes(root) {
    const pages = await fg([
        "app/**/page.{ts,tsx,js,jsx}",
        "app/**/route.{ts,tsx,js,jsx}"
    ], {
        cwd: root
    });
    const routes = [];
    for (const file of pages) {
        const content = await fs.readFile(path.join(root, file), "utf8");
        const folder = path.dirname(file);
        const route = folder
            .replace(/^app/, "")
            .replace(/\\/g, "/") || "/";
        const layoutExists = await fs.pathExists(path.join(root, folder, "layout.tsx"));
        routes.push({
            route,
            file,
            hasLayout: layoutExists,
            hasMetadata: content.includes("export const metadata") ||
                content.includes("generateMetadata"),
            isDynamic: route.includes("["),
            isApi: file.includes("/route.")
        });
    }
    return routes;
}
//# sourceMappingURL=nextRouteAnalyzer.js.map