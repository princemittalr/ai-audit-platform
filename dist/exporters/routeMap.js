import fg from "fast-glob";
import fs from "fs-extra";
import path from "path";
export async function generateRouteMap(root, outputDir) {
    await fs.ensureDir(outputDir);
    const routes = await fg([
        "app/**/page.{ts,tsx,js,jsx}",
        "pages/**/*.{ts,tsx,js,jsx}"
    ], {
        cwd: root
    });
    const formatted = routes
        .map(route => {
        if (route.startsWith("app/")) {
            return "/" +
                route
                    .replace(/^app\//, "")
                    .replace(/\/page\.(tsx|ts|jsx|js)$/, "")
                    .replace(/^page$/, "");
        }
        if (route.startsWith("pages/")) {
            return "/" +
                route
                    .replace(/^pages\//, "")
                    .replace(/\.(tsx|ts|jsx|js)$/, "")
                    .replace(/index$/, "");
        }
        return route;
    })
        .sort();
    const markdown = `# Route Map

Repository

${root}

---

Total Routes: ${formatted.length}

---

\`\`\`text
${formatted.join("\n")}
\`\`\`
`;
    await fs.writeFile(path.join(outputDir, "route-map.md"), markdown, "utf8");
}
//# sourceMappingURL=routeMap.js.map