import ts from "typescript";
const REACT_HOOKS = new Set([
    "useState",
    "useEffect",
    "useMemo",
    "useCallback",
    "useRef",
    "useContext",
    "useReducer",
    "useLayoutEffect",
    "useTransition",
    "useDeferredValue",
    "useId",
    "useImperativeHandle",
    "useSyncExternalStore"
]);
export function extractHooks(source) {
    const hooks = [];
    function visit(node) {
        if (ts.isCallExpression(node)) {
            const exp = node.expression.getText(source);
            if (REACT_HOOKS.has(exp) ||
                /^use[A-Z]/.test(exp)) {
                hooks.push({
                    name: exp,
                    line: source.getLineAndCharacterOfPosition(node.getStart()).line + 1
                });
            }
        }
        ts.forEachChild(node, visit);
    }
    visit(source);
    return hooks;
}
//# sourceMappingURL=hookExtractor.js.map