import { execFile } from "child_process";
import { promisify } from "util";

const run = promisify(execFile);

/**
 * Returns files changed relative to a git ref (default: against the
 * merge-base with the target branch, falling back to working-tree diff).
 * Used to scope an audit to only what changed, instead of the whole repo —
 * faster and more relevant for PR review.
 */
export async function getChangedFiles(
  root: string,
  against: string = "HEAD"
): Promise<string[]> {

  try {

    const { stdout } = await run(
      "git",
      ["diff", "--name-only", against],
      { cwd: root }
    );

    return stdout
      .split("\n")
      .map(l => l.trim())
      .filter(l => l.length > 0)
      .filter(l => l.endsWith(".ts") || l.endsWith(".tsx"));

  } catch (error) {

    throw new Error(
      `Could not compute git diff against "${against}". Is this a git repository with that ref? (${(error as Error).message})`
    );

  }

}
