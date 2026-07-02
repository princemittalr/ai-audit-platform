import path from "path";
import fg from "fast-glob";

import { parseTypeScriptFile } from "../parsers/typescriptParser.js";

export interface ImportEdge {
  from: string;
  to: string;
}

export interface ImportGraph {
  edges: ImportEdge[];
}

export async function buildImportGraph(
  root: string
): Promise<ImportGraph> {

  const files = await fg(
    [
      "**/*.ts",
      "**/*.tsx",
      "**/*.js",
      "**/*.jsx"
    ],
    {
      cwd: root,
      ignore: [
        "**/node_modules/**",
        "**/.next/**",
        "**/dist/**"
      ]
    }
  );

  const edges: ImportEdge[] = [];

  for (const relative of files) {

    const absolute = path.join(root, relative);

    try {

      const parsed = await parseTypeScriptFile(
        absolute
      );

      for (const imp of parsed.imports) {

        edges.push({
          from: relative,
          to: imp.module
        });

      }

    } catch {

      continue;

    }

  }

  return { edges };

}