import { Finding } from "../models/finding.js";
export interface AuditReport {
    repository: {
        path: string;
        framework: string;
        language: string;
    };
    summary: {
        score: number;
        critical: number;
        high: number;
        medium: number;
        low: number;
    };
    findings: Finding[];
}
