import { RepositoryIndex, RepositoryFile } from "./repositoryIndex.js";
export interface TokenOptimizationResult {
    selectedFiles: RepositoryFile[];
    estimatedTokens: number;
    skippedFiles: RepositoryFile[];
}
export declare function optimizeForTokens(index: RepositoryIndex, maxTokens?: number): TokenOptimizationResult;
