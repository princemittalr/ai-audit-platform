export function getGeminiPrompt(): string {
  return `Perform a complete technical audit of the attached repository context.

Review:

- Code Quality
- Product Quality
- UI/UX
- Performance
- SEO
- Accessibility
- Security
- Best Practices
- Missing Features

Return a prioritized implementation roadmap.

Focus on practical improvements with high impact.`;
}