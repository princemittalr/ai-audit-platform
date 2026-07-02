export type Severity = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
export interface Finding {
    id: string;
    severity: Severity;
    category: string;
    title: string;
    description: string;
    recommendation: string;
    file?: string;
    line?: number;
}
