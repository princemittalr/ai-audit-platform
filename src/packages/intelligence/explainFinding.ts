import fs from "fs-extra";
import path from "path";

import { Finding } from "../models/finding.js";

/**
 * Explains a finding in plain language using the surrounding source code as
 * context, via the Anthropic API. Requires ANTHROPIC_API_KEY to be set —
 * this is intentionally not bundled with a key or silently mocked. Without
 * it, returns a clear message instead of pretending to work.
 */
export async function explainFinding(
  root: string,
  finding: Finding
): Promise<string> {

  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return (
      "No ANTHROPIC_API_KEY set — can't call the explain API.\n" +
      "Set it with: export ANTHROPIC_API_KEY=sk-ant-...\n" +
      "This calls the real Anthropic API and will incur normal API usage cost.\n\n" +
      `Finding without AI explanation:\n${finding.title}\n${finding.description}\n${finding.recommendation}`
    );
  }

  let codeContext = "";

  if (finding.file) {
    const filePath = path.join(root, finding.file);
    if (await fs.pathExists(filePath)) {
      const content = await fs.readFile(filePath, "utf8");
      // cap context to first ~150 lines to keep the call cheap
      codeContext = content.split("\n").slice(0, 150).join("\n");
    }
  }

  const prompt = `You are explaining a static-analysis finding to a developer.

Finding: ${finding.title}
Category: ${finding.category}
Severity: ${finding.severity}
Description: ${finding.description}
Suggested fix: ${finding.recommendation}

${codeContext ? `Relevant file (${finding.file}):\n\`\`\`\n${codeContext}\n\`\`\`` : "No file context available."}

In 3-4 sentences, explain why this matters in THIS specific code (not generically), and whether the suggested fix is actually the right move here or if there's a reason this pattern might be intentional.`;

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01"
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 400,
      messages: [{ role: "user", content: prompt }]
    })
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Anthropic API error (${response.status}): ${text}`);
  }

  const data = await response.json();
  const textBlock = data.content?.find((b: any) => b.type === "text");

  return textBlock?.text ?? "No explanation returned.";

}
