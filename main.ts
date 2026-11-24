import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I deployed my untested fix straight to prod and took checkout down for 40,000 users. My bad.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
