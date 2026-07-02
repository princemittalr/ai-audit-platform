import fg from "fast-glob";
export async function analyzeProject(root) {
    const appRouter = await fg(["app/**/page.*"], { cwd: root }).then(r => r.length > 0);
    const pagesRouter = await fg(["pages/**/*.{js,jsx,ts,tsx}"], {
        cwd: root,
    }).then(r => r.length > 0);
    const apiRoutes = (await fg([
        "app/**/route.{ts,js}",
        "pages/api/**/*.{ts,js}",
    ], { cwd: root })).length;
    const components = (await fg(["components/**/*.{ts,tsx,js,jsx}"], {
        cwd: root,
    })).length;
    const hooks = (await fg(["**/use*.{ts,tsx,js,jsx}"], {
        cwd: root,
    })).length;
    const contexts = (await fg(["**/*context*.{ts,tsx,js,jsx}"], {
        cwd: root,
        caseSensitiveMatch: false,
    })).length;
    const middleware = (await fg(["middleware.{ts,js}"], {
        cwd: root,
    })).length > 0;
    const publicAssets = (await fg(["public/**/*"], {
        cwd: root,
        onlyFiles: true,
    })).length;
    const envFiles = (await fg([".env*"], {
        cwd: root,
    })).length;
    const configFiles = (await fg([
        "*.config.*",
        "tsconfig.json",
        "package.json",
        "next.config.*",
        "tailwind.config.*",
    ], {
        cwd: root,
    })).length;
    return {
        appRouter,
        pagesRouter,
        apiRoutes,
        components,
        hooks,
        contexts,
        middleware,
        publicAssets,
        envFiles,
        configFiles,
    };
}
//# sourceMappingURL=projectAnalyzer.js.map