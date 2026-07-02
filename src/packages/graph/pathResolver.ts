import path from "path";

/**
 * Resolves a raw import specifier (e.g. "./Footer", "@/components/Footer")
 * to a real file path in the project, matched against a known file list.
 * Returns null for external packages (no relative/alias prefix) or unresolved paths.
 */
export function resolveImportPath(
  fromFile: string,
  rawImport: string,
  knownFiles: Set<string>,
  aliasRoot: string = "src"
): string | null {

  let target: string;

  if (rawImport.startsWith(".")) {
    target = path.normalize(
      path.join(path.dirname(fromFile), rawImport)
    );
  } else if (rawImport.startsWith("@/")) {
    target = path.normalize(
      path.join(aliasRoot, rawImport.slice(2))
    );
  } else {
    // bare package import (react, next, etc) — not a local file
    return null;
  }

  target = target.split(path.sep).join("/");

  const candidates = [
    target,
    `${target}.tsx`,
    `${target}.ts`,
    `${target}.jsx`,
    `${target}.js`,
    `${target}/index.tsx`,
    `${target}/index.ts`
  ];

  for (const candidate of candidates) {
    if (knownFiles.has(candidate)) {
      return candidate;
    }
  }

  // retry without alias root prefix, in case aliasRoot guess was wrong
  if (rawImport.startsWith("@/")) {
    const bare = rawImport.slice(2);
    const bareCandidates = [
      bare,
      `${bare}.tsx`,
      `${bare}.ts`,
      `${bare}/index.tsx`,
      `${bare}/index.ts`
    ];
    for (const candidate of bareCandidates) {
      if (knownFiles.has(candidate)) {
        return candidate;
      }
    }
  }

  return null;

}

/** Next.js convention files that are loaded by the framework, not by import. */
export const FRAMEWORK_ENTRY_FILES = new Set([
  "layout.tsx",
  "layout.ts",
  "page.tsx",
  "page.ts",
  "loading.tsx",
  "error.tsx",
  "global-error.tsx",
  "not-found.tsx",
  "template.tsx",
  "default.tsx",
  "route.ts",
  "middleware.ts",
  "instrumentation.ts"
]);

export function isFrameworkEntryFile(filePath: string): boolean {
  const base = path.basename(filePath);
  return FRAMEWORK_ENTRY_FILES.has(base);
}
