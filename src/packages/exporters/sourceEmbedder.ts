import fs from "fs-extra";
import path from "path";
import { RepositoryIndex } from "../core/repositoryIndex.js";

export async function buildSourceSection(
  root: string,
  index: RepositoryIndex,
  limit = 25
): Promise<string> {

  const selected = index.files.slice(0, limit);

  let markdown = `

---

# HIGH PRIORITY SOURCE CODE

`;

  for (const file of selected) {

    const absolute = path.join(root, file.path);

    try {

      const content = await fs.readFile(
        absolute,
        "utf8"
      );

      markdown += `

==================================================

FILE

${file.path}

IMPORTANCE

${file.importance}

\`\`\`
${content}
\`\`\`

`;

    } catch {

      continue;

    }

  }

  return markdown;

}