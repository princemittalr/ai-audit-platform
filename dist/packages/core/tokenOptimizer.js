const CHARS_PER_TOKEN = 4;
export function optimizeForTokens(index, maxTokens = 100000) {
    let usedTokens = 0;
    const selectedFiles = [];
    const skippedFiles = [];
    for (const file of index.files) {
        const estimated = Math.ceil(file.size / CHARS_PER_TOKEN);
        if (usedTokens + estimated <= maxTokens) {
            selectedFiles.push(file);
            usedTokens += estimated;
        }
        else {
            skippedFiles.push(file);
        }
    }
    return {
        selectedFiles,
        estimatedTokens: usedTokens,
        skippedFiles
    };
}
//# sourceMappingURL=tokenOptimizer.js.map