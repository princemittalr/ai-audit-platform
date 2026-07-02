import { ProjectAnalysis } from "./projectAnalyzer.js";

export interface Finding {

  severity: "LOW" | "MEDIUM" | "HIGH";

  category: string;

  title: string;

  description: string;

  recommendation: string;

}

export function generateFindings(
  analysis: ProjectAnalysis
): Finding[] {

  const findings: Finding[] = [];

  if (!analysis.middleware) {

    findings.push({

      severity: "MEDIUM",

      category: "Architecture",

      title: "Middleware not found",

      description:
        "No Next.js middleware detected.",

      recommendation:
        "Add middleware if authentication, redirects or request filtering are required."

    });

  }

  if (analysis.envFiles === 0) {

    findings.push({

      severity: "LOW",

      category: "Configuration",

      title: "No environment files",

      description:
        "No .env files were detected.",

      recommendation:
        "Verify environment configuration is documented."

    });

  }

  if (analysis.components === 0) {

    findings.push({

      severity: "HIGH",

      category: "Architecture",

      title: "No React components detected",

      description:
        "Component analysis returned zero components.",

      recommendation:
        "Verify repository structure or analyzer configuration."

    });

  }

  return findings;

}