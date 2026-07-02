import fg from "fast-glob";
import { analyzeReactComponents } from "./reactComponentAnalyzer.js";
export async function analyzeProject(root) {
    const reactComponents = await analyzeReactComponents(root);
    const appRouter = (await fg(["app/**/page.*"], { cwd: root })).length > 0;
    const pagesRouter = (await fg(["pages/**/*.{ts,tsx,js,jsx}"], {
        cwd: root
    })).length > 0;
    const apiRoutes = (await fg([
        "app/**/route.{ts,js}",
        "pages/api/**/*.{ts,js}"
    ], {
        cwd: root
    })).length;
    const middleware = (await fg(["middleware.{ts,js}"], {
        cwd: root
    })).length > 0;
    const publicAssets = (await fg(["public/**/*"], {
        cwd: root,
        onlyFiles: true
    })).length;
    const envFiles = (await fg([".env*"], {
        cwd: root
    })).length;
    const configFiles = (await fg([
        "*.config.*",
        "next.config.*",
        "tailwind.config.*",
        "tsconfig.json",
        "package.json"
    ], {
        cwd: root
    })).length;
    return {
        appRouter,
        pagesRouter,
        apiRoutes,
        components: reactComponents.length,
        hooks: reactComponents.reduce((sum, c) => sum + c.hookCount, 0),
        contexts: reactComponents.reduce((sum, c) => sum + c.contextUsage, 0),
        middleware,
        publicAssets,
        envFiles,
        configFiles
    };
}
//# sourceMappingURL=projectAnalyzer.js.map