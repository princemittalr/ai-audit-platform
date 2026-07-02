import { ProjectAnalysis } from "./projectAnalyzer.js";
export interface Finding {
    severity: "LOW" | "MEDIUM" | "HIGH";
    category: string;
    title: string;
    description: string;
    recommendation: string;
}
export declare function generateFindings(analysis: ProjectAnalysis): Finding[];
