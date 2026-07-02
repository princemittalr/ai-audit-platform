# AI Audit Platform

A CLI that scans a TypeScript/React/Next.js repository, builds a knowledge graph of its files, components, and imports, and produces an AI-ready audit package: a risk score, concrete findings, and prompts pre-loaded with repo context for ChatGPT, Claude, and Gemini.

## Why

Pasting a whole repo into an LLM chat for review is slow and imprecise. This tool does the mechanical part first — parse the AST, resolve imports, find dead code and circular dependencies, score the repo — so the LLM (or you) starts from findings instead of raw files.

## Install & run

```bash
npm install
npm run dev scan ../path/to/repo
```

## What it actually does today

* Detects framework (Next.js/React), language, package metadata
* Parses every `.ts`/`.tsx` file into an AST, extracts imports, components, functions, hooks
* Builds a knowledge graph and **resolves import paths** (relative + `@/` aliases) to real files — not just string matching
* Runs analyzers:
  * **Circular dependency detection** — real DFS-based cycle detection over the import graph, catches cycles of any length (not just direct A↔B pairs)
  * **Unused component detection** — components never imported anywhere, excluding Next.js convention files (`layout.tsx`, `page.tsx`, `error.tsx`, etc. — these load by filename, not import)
  * **Large file detection** — flags files over 300 lines as a maintainability smell
  * Basic architecture/config checks (missing middleware, no env files)
* Every finding is tagged `HIGH` or `HEURISTIC` confidence — structural facts (a cycle exists) vs. pattern-based inference that can have false positives (unused-component detection can miss dynamic imports or re-exports)
* Scores the repo 0–100, weighted by severity, with per-tier caps on HIGH/MEDIUM/LOW so 40 minor findings don't drown out 2 critical ones — CRITICAL findings are uncapped and dominate the score
* Tracks score across runs per-repository (`output/audit-baseline.<hash>.json`) and shows the delta on each scan
* Supports `.auditignore` (gitignore syntax) in the target repo to suppress known false positives without touching analyzer code
* Ships a GitHub Action (`.github/workflows/audit.yml`) that runs the audit on PRs, comments the score, and fails the build on any critical finding
* Outputs a Markdown audit package + JSON report + provider-specific prompts

```text
output/
├── AI_AUDIT_PACKAGE.md   # full context dump for pasting into any LLM
├── audit-report.json     # { repository, summary: { score, critical, high, medium, low }, findings[] }
├── audit-baseline.<hash>.json  # score history for this repo
├── chatgpt-prompt.md
├── claude-prompt.md
└── gemini-prompt.md
```

Example run against a real Next.js app:

```
$ npm run dev scan ../eduing-landing

🔍 Building AI Audit Package...

✓ AI_AUDIT_PACKAGE.md
✓ audit-report.json

Score: 80/100  (critical: 0, high: 0, medium: 1, low: 8)
→ 0 since last run (was 80/100)

Audit completed.
```

## Architecture

```
Repository → Scanner → Framework Detection → AST Parser → Knowledge Graph
    → Analyzers (circular deps, dead code, config) → Finding Engine
    → Score Engine → Audit Report → Markdown / JSON / LLM Prompts
```

## Tests

```bash
npm test
```

Covers score-weighting edge cases, import path resolution (relative + alias), and false-positive prevention for framework convention files.

## Not built yet

Security/performance/accessibility analyzers, HTML/PDF export, CI integration beyond the included GitHub Action, VS Code extension, multi-language support beyond TS/JS. These are real subprojects each — a parser per language, marketplace publishing, etc. — not flags to flip. Listed here instead of faked.

## Other commands

```bash
# Only report findings touching files changed vs a git ref (default HEAD)
npm run dev scan ../my-project --diff
npm run dev scan ../my-project --diff main

# Delete confirmed-unused component files. Dry-run by default.
npm run dev fix ../my-project
npm run dev fix ../my-project --apply

# Ask an LLM to explain a specific finding using the real surrounding code.
# Requires ANTHROPIC_API_KEY — without it, prints the plain finding instead
# of pretending to call an API. This makes a real, billed API call when a
# key is set.
export ANTHROPIC_API_KEY=sk-ant-...
npm run dev explain DEAD-003
```

`fix` only ever touches "Dead Code" findings — the one category where the fix (delete the file) is unambiguous. It won't touch circular-dependency or large-file findings; those need a judgment call.

## Stack

TypeScript, Node.js, Commander, Babel/ts-morph AST parsing, fast-glob, fs-extra.

## License

MIT
