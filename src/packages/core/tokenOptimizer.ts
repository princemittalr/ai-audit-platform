import { RepositoryIndex, RepositoryFile } from "./repositoryIndex.js";

export interface TokenOptimizationResult {
  selectedFiles: RepositoryFile[];
  estimatedTokens: number;
  skippedFiles: RepositoryFile[];
}

const CHARS_PER_TOKEN = 4;

export function optimizeForTokens(
  index: RepositoryIndex,
  maxTokens = 100000
): TokenOptimizationResult {

  let usedTokens = 0;

  const selectedFiles: RepositoryFile[] = [];
  const skippedFiles: RepositoryFile[] = [];

  for (const file of index.files) {

    const estimated = Math.ceil(file.size / CHARS_PER_TOKEN);

    if (usedTokens + estimated <= maxTokens) {

      selectedFiles.push(file);

      usedTokens += estimated;

    } else {

      skippedFiles.push(file);

    }

  }

  return {

    selectedFiles,

    estimatedTokens: usedTokens,

    skippedFiles

  };

}