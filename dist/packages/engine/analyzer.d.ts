export interface Analyzer<T = unknown> {
    name: string;
    analyze(repository: string): Promise<T>;
}
