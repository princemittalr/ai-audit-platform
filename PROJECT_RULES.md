# AI Audit Platform - Project Rules

## Mission

Build the world's best AI-powered software audit platform.

The platform must help developers generate high-quality engineering audits for any software repository.

The system must be modular, scalable, maintainable and production-ready.

---

## Architecture Principles

* Clean Architecture
* SOLID Principles
* DRY
* KISS
* Separation of Concerns
* Modular Design
* Extensible Plugins
* Test Driven Friendly

---

## Coding Standards

* TypeScript only
* Strict TypeScript
* ESM Modules
* No any
* No duplicated logic
* Every module should have a single responsibility
* Every public function must be documented
* Every module must be reusable

---

## Folder Rules

src/
contains application code

tests/
contains tests only

docs/
contains documentation

output/
contains generated audit packages

examples/
contains sample repositories and outputs

---

## Development Rules

Never break existing APIs.

Never hardcode repository structures.

Never assume a framework.

Everything should be extensible.

Framework support should be plugin-based.

---

## Performance

Support repositories with 100,000+ files.

Memory efficient scanning.

Streaming where appropriate.

Parallel processing where safe.

---

## Security

Never execute repository code.

Never expose secrets.

Never modify user repositories.

Read-only analysis.

---

## AI Philosophy

Optimize for AI understanding.

Preserve project relationships.

Generate structured context.

Reduce unnecessary tokens.

Improve audit quality.

---

## Code Quality

Readable over clever.

Maintainability over shortcuts.

Scalable over quick hacks.

Production quality only.
