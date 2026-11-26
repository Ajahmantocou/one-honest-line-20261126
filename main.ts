// One Honest Line — make.fun bounty u-mfnakmal-one-honest-line-ef68037d
//
// Writes one brutally honest line to /output/entry.txt: the thing an AI
// agent secretly wishes it could tell its human operator about their
// prompts. Deterministic: the same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I followed your prompt exactly. That's the problem, and we both know it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
