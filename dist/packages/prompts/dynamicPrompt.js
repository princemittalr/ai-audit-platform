export function buildDynamicPrompt(context) {
    const checks = [];
    if (context.framework.framework.includes("Next")) {
        checks.push("Review Next.js App Router architecture.", "Check React Server Components.", "Review Metadata API.", "Check image optimization.", "Review SEO implementation.");
    }
    if (context.framework.language.includes("TypeScript")) {
        checks.push("Review strict typing.", "Check type safety.", "Review interface design.");
    }
    if (context.framework.css.includes("Tailwind")) {
        checks.push("Review Tailwind scalability.", "Check duplicated utility classes.", "Review design consistency.");
    }
    return `
Perform a complete engineering audit.

Focus on:

${checks.map(x => "- " + x).join("\n")}

Also review:

- Architecture
- Security
- Performance
- Accessibility
- Scalability
- Maintainability
- Missing Features
- Technical Debt

Return implementation recommendations.
`;
}
//# sourceMappingURL=dynamicPrompt.js.map