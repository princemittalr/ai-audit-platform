# AI Audit Platform

AI Audit Platform is an AI-powered static code analysis engine designed to help developers, engineering teams, and AI assistants understand software projects quickly and accurately.

Instead of only scanning files, the platform builds repository intelligence, extracts architectural information, constructs a knowledge graph, runs engineering analyzers, and generates AI-ready audit packages for large language models.

## Vision

Enable AI systems to understand any software repository with engineering-level context before generating recommendations, reviews, or code.

## Core Features

* Repository scanning
* Framework detection
* Project intelligence extraction
* AST-based source code parsing
* Import and dependency analysis
* Component extraction
* Function extraction
* Hook extraction
* Knowledge graph generation
* Engineering findings engine
* AI-ready audit package generation
* Prompt generation for multiple LLM providers
* Repository summary generation
* Route mapping
* File tree generation
* Extensible analyzer architecture

## Architecture

```text
Repository
      │
      ▼
Repository Scanner
      │
      ▼
Project Analysis
      │
      ▼
AST Parser
      │
      ▼
Knowledge Graph
      │
      ▼
Engineering Analyzers
      │
      ▼
Findings
      │
      ▼
Risk Scoring
      │
      ▼
Recommendations
      │
      ▼
Audit Report
      │
      ├── Markdown
      ├── JSON
      ├── HTML
      └── AI Prompt Packages
```

## Current Capabilities

* Detects project framework and technology stack
* Analyzes repository structure
* Extracts routes, components, hooks, and functions
* Builds a repository knowledge graph
* Produces engineering findings
* Generates AI-ready project documentation
* Creates prompts for ChatGPT, Claude, and Gemini

## Planned Features

* Security analyzer
* Performance analyzer
* Accessibility analyzer
* Dependency analyzer
* Circular dependency detection
* Dead code detection
* Large component detection
* Bundle analysis
* HTML reports
* PDF reports
* CI/CD integration
* GitHub Action
* VS Code extension
* Multi-language support

## Technology Stack

* TypeScript
* Node.js
* Commander
* Babel Parser
* Fast Glob
* fs-extra

## Example

```bash
npm install

npm run build

npm run dev scan ../my-project
```

Generated output:

```text
output/
├── AI_AUDIT_PACKAGE.md
├── chatgpt-prompt.md
├── claude-prompt.md
├── gemini-prompt.md
├── project-summary.md
├── route-map.md
└── file-tree.md
```

## Project Status

The project is under active development. The current focus is integrating the analysis pipeline, expanding engineering analyzers, and improving AI-generated audit quality.

## Contributing

Contributions, bug reports, feature requests, and engineering discussions are welcome. Please open an issue or submit a pull request.

## License

MIT License
