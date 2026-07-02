import { scanRepository } from "../core/scanner.js";
import { detectFramework } from "../analyzers/frameworkDetector.js";
import { analyzeProject } from "../analyzers/projectAnalyzer.js";
export async function buildContext(repository) {
    const scan = await scanRepository(repository);
    const framework = await detectFramework(repository);
    const analysis = await analyzeProject(repository);
    return {
        scan,
        framework,
        analysis
    };
}
//# sourceMappingURL=contextBuilder.js.map