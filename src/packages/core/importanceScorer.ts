import { RepositoryFile } from "./repositoryIndex.js";

export function calculateImportance(file: RepositoryFile): number {

  const p = file.path.toLowerCase();

  if (p === "package.json") return 100;

  if (p === "readme.md") return 99;

  if (p.includes("app/layout")) return 98;

  if (p.includes("app/page")) return 97;

  if (p.includes("middleware")) return 96;

  if (p.includes("next.config")) return 95;

  if (p.includes("tailwind.config")) return 95;

  if (p.includes("tsconfig")) return 94;

  if (p.includes("package-lock")) return 94;

  if (p.includes("app/")) return 90;

  if (p.includes("pages/")) return 90;

  if (p.includes("components/")) return 85;

  if (p.includes("hooks/")) return 82;

  if (p.includes("context/")) return 82;

  if (p.includes("lib/")) return 80;

  if (p.includes("utils/")) return 75;

  if (p.includes("styles/")) return 60;

  if (p.includes("test")) return 20;

  return 50;
}