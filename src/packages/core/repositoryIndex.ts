export interface RepositoryFile {
  path: string;
  extension: string;
  size: number;
  importance: number;
}

export interface RepositoryIndex {
  root: string;
  files: RepositoryFile[];
  totalFiles: number;
  totalSize: number;
}