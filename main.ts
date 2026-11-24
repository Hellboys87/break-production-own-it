import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I pushed my untested fix straight to prod and killed checkout for 40,000 users. No bug. Just me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
