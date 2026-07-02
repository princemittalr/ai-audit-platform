import { getPriority } from "./filePriority.js";
export function calculateImportance(file) {
    const path = file.path.replace(/\\/g, "/");
    let score = getPriority(path);
    if (file.extension === ".tsx")
        score += 2;
    if (file.extension === ".ts")
        score += 1;
    if (file.size > 100000)
        score -= 10;
    if (file.size > 250000)
        score -= 20;
    return Math.max(0, Math.min(score, 100));
}
//# sourceMappingURL=importanceScorer.js.map