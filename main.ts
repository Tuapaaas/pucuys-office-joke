// One-Line Office Joke: 24-Hour Sprint — make.fun entry.
// The program writes exactly one joke to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Gate: UTF-8 text, 1-200 characters, a single line, not only whitespace.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const joke =
  "The office printer only jams on documents marked urgent — it's the most reliable employee we've got.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke + "\n", "utf8");
console.log(joke);
