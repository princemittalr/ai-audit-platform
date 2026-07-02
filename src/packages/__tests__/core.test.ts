import { test } from "node:test";
import assert from "node:assert/strict";

import { calculateScore } from "../intelligence/scoreEngine.js";
import { resolveImportPath, isFrameworkEntryFile } from "../graph/pathResolver.js";
import { findUnusedComponents } from "../analyzers/unusedComponentAnalyzer.js";
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
