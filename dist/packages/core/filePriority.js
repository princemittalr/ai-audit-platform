export const FILE_PRIORITY = {
    "package.json": 100,
    "README.md": 99,
    "next.config.js": 98,
    "next.config.mjs": 98,
    "next.config.ts": 98,
    "tsconfig.json": 97,
    "middleware.ts": 96,
    "middleware.tsx": 96
};
export function getPriority(path) {
    if (FILE_PRIORITY[path]) {
        return FILE_PRIORITY[path];
    }
    if (path.includes("app/layout"))
        return 95;
    if (path.includes("app/page"))
        return 94;
    if (path.includes("/page."))
        return 93;
    if (path.includes("/layout."))
        return 92;
    if (path.includes("components/ui"))
        return 91;
    if (path.includes("components"))
        return 90;
    if (path.includes("hooks"))
        return 88;
    if (path.includes("context"))
        return 87;
    if (path.includes("lib"))
        return 86;
    if (path.includes("utils"))
        return 85;
    return 50;
}
//# sourceMappingURL=filePriority.js.map