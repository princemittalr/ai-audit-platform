import fg from "fast-glob";
import fs from "fs-extra";
import path from "path";

export interface ReactComponentInfo {
  name: string;
  file: string;
  clientComponent: boolean;
  hookCount: number;
  contextUsage: number;
}

export async function analyzeReactComponents(
  root: string
): Promise<ReactComponentInfo[]> {

  const files = await fg(
    ["**/*.tsx"],
    {
      cwd: root,
      ignore: [
        "**/node_modules/**",
        "**/.next/**"
      ]
    }
  );

  const results: ReactComponentInfo[] = [];

  for (const file of files) {

    const content = await fs.readFile(
      path.join(root, file),
      "utf8"
    );

    const hooks =
      content.match(/use[A-Z][A-Za-z0-9_]*/g) ?? [];

    const contexts =
      content.match(/useContext/g) ?? [];

    results.push({
      name: path.basename(file, ".tsx"),
      file,
      clientComponent: content.includes('"use client"') ||
                       content.includes("'use client'"),
      hookCount: hooks.length,
      contextUsage: contexts.length
    });

  }

  return results;

}