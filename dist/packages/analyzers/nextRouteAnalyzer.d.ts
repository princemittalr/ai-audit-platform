export interface NextRoute {
    route: string;
    file: string;
    hasLayout: boolean;
    hasMetadata: boolean;
    isDynamic: boolean;
    isApi: boolean;
}
export declare function analyzeNextRoutes(root: string): Promise<NextRoute[]>;
