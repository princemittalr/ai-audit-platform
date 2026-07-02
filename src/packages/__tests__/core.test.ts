import { test } from "node:test";
import assert from "node:assert/strict";

import { calculateScore } from "../intelligence/scoreEngine.js";
import { resolveImportPath, isFrameworkEntryFile } from "../graph/pathResolver.js";
import { autoFixDeadCode } from "../analyzers/autoFix.js";
import { findCircularDependencies } from "../analyzers/circularDependencyAnalyzer.js";
import { findUnusedComponents } from "../analyzers/unusedComponentAnalyzer.js";

test("findCircularDependencies: detects direct A<->B cycle", () => {
  const graph: KnowledgeGraph = {
    nodes: [],
    edges: [
      { from: "a.ts", to: "b.ts", relation: "imports" },
      { from: "b.ts", to: "a.ts", relation: "imports" }
    ]
  };
  const result = findCircularDependencies(graph);
  assert.equal(result.length, 1);
});

test("findCircularDependencies: detects long A->B->C->A cycle", () => {
  const graph: KnowledgeGraph = {
    nodes: [],
    edges: [
      { from: "a.ts", to: "b.ts", relation: "imports" },
      { from: "b.ts", to: "c.ts", relation: "imports" },
      { from: "c.ts", to: "a.ts", relation: "imports" }
    ]
  };
  const result = findCircularDependencies(graph);
  assert.equal(result.length, 1);
  assert.ok(result[0].path.includes("a.ts"));
  assert.ok(result[0].path.includes("b.ts"));
  assert.ok(result[0].path.includes("c.ts"));
});

test("findCircularDependencies: no false positive on acyclic chain", () => {
  const graph: KnowledgeGraph = {
    nodes: [],
    edges: [
      { from: "a.ts", to: "b.ts", relation: "imports" },
      { from: "b.ts", to: "c.ts", relation: "imports" }
    ]
  };
  assert.deepEqual(findCircularDependencies(graph), []);
});
import { Finding } from "../models/finding.js";
import { KnowledgeGraph } from "../graph/types.js";

test("calculateScore: no findings = 100", () => {
  assert.equal(calculateScore([]), 100);
});

test("calculateScore: single critical deducts 20", () => {
  const findings: Finding[] = [{
    id: "X-1", severity: "CRITICAL", category: "x",
    title: "x", description: "x", recommendation: "x"
  }];
  assert.equal(calculateScore(findings), 80);
});

test("calculateScore: many low findings don't flatten to 0", () => {
  const findings: Finding[] = Array.from({ length: 48 }, (_, i) => ({
    id: `L-${i}`, severity: "LOW" as const, category: "x",
    title: "x", description: "x", recommendation: "x"
  }));
  // 48 * 2 = 96 uncapped, but LOW tier is capped at 15
  assert.equal(calculateScore(findings), 85);
});

test("calculateScore: never goes below 0", () => {
  const findings: Finding[] = Array.from({ length: 20 }, (_, i) => ({
    id: `C-${i}`, severity: "CRITICAL" as const, category: "x",
    title: "x", description: "x", recommendation: "x"
  }));
  assert.equal(calculateScore(findings), 0);
});

test("resolveImportPath: relative import resolves to real file", () => {
  const known = new Set(["components/Footer.tsx", "app/page.tsx"]);
  const resolved = resolveImportPath(
    "app/page.tsx",
    "../components/Footer",
    known
  );
  assert.equal(resolved, "components/Footer.tsx");
});

test("resolveImportPath: alias import resolves via src root", () => {
  const known = new Set(["components/Navbar.tsx"]);
  const resolved = resolveImportPath(
    "app/layout.tsx",
    "@/components/Navbar",
    known,
    ""
  );
  assert.equal(resolved, "components/Navbar.tsx");
});

test("resolveImportPath: external package import returns null", () => {
  const known = new Set(["components/Footer.tsx"]);
  const resolved = resolveImportPath("app/page.tsx", "react", known);
  assert.equal(resolved, null);
});

test("isFrameworkEntryFile: recognizes Next.js convention files", () => {
  assert.equal(isFrameworkEntryFile("app/layout.tsx"), true);
  assert.equal(isFrameworkEntryFile("app/error.tsx"), true);
  assert.equal(isFrameworkEntryFile("components/Footer.tsx"), false);
});

test("autoFixDeadCode: dry-run reports would-delete without touching disk", async () => {
  const os = await import("node:os");
  const fsp = await import("node:fs/promises");
  const fs = await import("fs-extra");
  const path = await import("node:path");

  const tmp = await fsp.mkdtemp(path.join(os.tmpdir(), "audit-fix-test-"));
  const filePath = path.join(tmp, "orphan.tsx");
  await fsp.writeFile(filePath, "export default function Orphan() { return null; }");

  const findings: Finding[] = [{
    id: "DEAD-001", severity: "LOW", category: "Dead Code",
    title: "Unused component", description: "x", recommendation: "x",
    file: "orphan.tsx"
  }];

  const results = await autoFixDeadCode(tmp, findings, false);

  assert.equal(results.length, 1);
  assert.equal(results[0].action, "would-delete");
  assert.equal(await fs.pathExists(filePath), true);

  await fs.remove(tmp);
});

test("autoFixDeadCode: apply=true actually deletes the file", async () => {
  const os = await import("node:os");
  const fsp = await import("node:fs/promises");
  const fs = await import("fs-extra");
  const path = await import("node:path");

  const tmp = await fsp.mkdtemp(path.join(os.tmpdir(), "audit-fix-test-"));
  const filePath = path.join(tmp, "orphan.tsx");
  await fsp.writeFile(filePath, "export default function Orphan() { return null; }");

  const findings: Finding[] = [{
    id: "DEAD-001", severity: "LOW", category: "Dead Code",
    title: "Unused component", description: "x", recommendation: "x",
    file: "orphan.tsx"
  }];

  const results = await autoFixDeadCode(tmp, findings, true);

  assert.equal(results[0].action, "deleted");
  assert.equal(await fs.pathExists(filePath), false);

  await fs.remove(tmp);
});

test("autoFixDeadCode: ignores non-dead-code findings", async () => {
  const findings: Finding[] = [{
    id: "ARCH-001", severity: "MEDIUM", category: "Architecture",
    title: "Middleware not found", description: "x", recommendation: "x"
  }];
  const results = await autoFixDeadCode("/tmp", findings, false);
  assert.deepEqual(results, []);
});

test("findUnusedComponents: excludes framework entry files even with no importers", () => {
  const graph: KnowledgeGraph = {
    nodes: [
      { id: "app/layout.tsx:RootLayout", file: "app/layout.tsx", type: "component" }
    ],
    edges: []
  };
  assert.deepEqual(findUnusedComponents(graph), []);
});

test("findUnusedComponents: flags a component with no importer", () => {
  const graph: KnowledgeGraph = {
    nodes: [
      { id: "components/Orphan.tsx:Orphan", file: "components/Orphan.tsx", type: "component" }
    ],
    edges: []
  };
  const result = findUnusedComponents(graph);
  assert.equal(result.length, 1);
  assert.equal(result[0].file, "components/Orphan.tsx");
});

test("findUnusedComponents: does not flag an imported component", () => {
  const graph: KnowledgeGraph = {
    nodes: [
      { id: "components/Footer.tsx:Footer", file: "components/Footer.tsx", type: "component" }
    ],
    edges: [
      { from: "app/page.tsx", to: "components/Footer.tsx", relation: "imports" }
    ]
  };
  assert.deepEqual(findUnusedComponents(graph), []);
});
