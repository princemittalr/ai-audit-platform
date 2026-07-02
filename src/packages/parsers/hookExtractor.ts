import ts from "typescript";

export interface HookInfo {
  name: string;
  line: number;
}

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

export function extractHooks(
  source: ts.SourceFile
): HookInfo[] {

  const hooks: HookInfo[] = [];

  function visit(node: ts.Node) {

    if (ts.isCallExpression(node)) {

      const exp = node.expression.getText(source);

      if (
        REACT_HOOKS.has(exp) ||
        /^use[A-Z]/.test(exp)
      ) {

        hooks.push({
          name: exp,
          line:
            source.getLineAndCharacterOfPosition(
              node.getStart()
            ).line + 1
        });

      }

    }

    ts.forEachChild(node, visit);

  }

  visit(source);

  return hooks;

}