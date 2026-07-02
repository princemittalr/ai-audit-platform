import fs from "fs-extra";
import path from "path";
import { getChatGPTPrompt, getClaudePrompt, getGeminiPrompt } from "../prompts/index.js";
export async function exportPrompts(outputDir) {
    await fs.ensureDir(outputDir);
    await fs.writeFile(path.join(outputDir, "chatgpt-prompt.md"), getChatGPTPrompt());
    await fs.writeFile(path.join(outputDir, "claude-prompt.md"), getClaudePrompt());
    await fs.writeFile(path.join(outputDir, "gemini-prompt.md"), getGeminiPrompt());
}
//# sourceMappingURL=promptExporter.js.map