import fs from "fs-extra";
import path from "path";
import fg from "fast-glob";

import {
  parseSource,
  extractComponents,
  extractFunctions,
  extractHooks,
  extractImports
} from "../parsers/index.js";

import {
  KnowledgeGraph
} from "./types.js";

import { resolveImportPath } from "./pathResolver.js";

export async function buildKnowledgeGraph(
  root: string
): Promise<KnowledgeGraph> {

  const graph: KnowledgeGraph = {

    nodes: [],

    edges: []

  };

  const files = await fg(
    [
      "**/*.ts",
      "**/*.tsx"
    ],
    {
      cwd: root,
      ignore: [
        "**/node_modules/**",
        "**/.next/**"
      ]
    }
  );

  const knownFiles = new Set(files);

  for (const file of files) {

    const full = path.join(root, file);

    const source = await fs.readFile(
      full,
      "utf8"
    );

    const ast = parseSource(
      source,
      file
    );

    graph.nodes.push({

      id: file,

      file,

      type: "file"

    });

    for (const c of extractComponents(ast)) {

      graph.nodes.push({

        id: `${file}:${c.name}`,

        file,

        type: "component"

      });

      graph.edges.push({

        from: file,

        to: `${file}:${c.name}`,

        relation: "contains"

      });

    }

    for (const fn of extractFunctions(ast)) {

      graph.nodes.push({

        id: `${file}:${fn.name}`,

        file,

        type: "function"

      });

      graph.edges.push({

        from: file,

        to: `${file}:${fn.name}`,

        relation: "contains"

      });

    }

    for (const hook of extractHooks(ast)) {

      graph.nodes.push({

        id: `${file}:${hook.name}`,

        file,

        type: "hook"

      });

      graph.edges.push({

        from: file,

        to: `${file}:${hook.name}`,

        relation: "uses"

      });

    }

    for (const imp of extractImports(ast)) {

      const resolved = resolveImportPath(
        file,
        imp.module,
        knownFiles
      );

      graph.edges.push({

        from: file,

        to: resolved ?? imp.module,

        relation: "imports"

      });

    }

  }

  return graph;

}