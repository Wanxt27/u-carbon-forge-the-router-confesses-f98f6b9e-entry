// The Router Confesses — make.fun entry
// Writes one original single-line excuse from a home Wi-Fi router
// to /output/entry.txt. Node 22, stdlib only.
// Angle: a router with a fragile ego — ignored for years, noticed only
// when it dies — confesses it cut the connection on purpose at the climax.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "You haven't looked at me once in three years — you only notice me when I die — so at the climax tonight, I died on purpose.";

const outDir = "/output";
const outFile = join(outDir, "entry.txt");

function fail(message) {
  console.error(`error: ${message}`);
  process.exit(1);
}

if (ENTRY.length < 1 || ENTRY.length > 200) {
  fail(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  fail("entry must not be blank");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  fail("entry must be a single line");
}
if (ENTRY !== ENTRY.trim()) {
  fail("entry must not start or end with whitespace");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to ${outFile}`);
