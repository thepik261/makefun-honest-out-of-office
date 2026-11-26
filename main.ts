// The Painfully Honest Out-of-Office — make.fun bounty
// Pure Node stdlib. Writes one brutally honest but polite
// out-of-office auto-reply (<= 200 chars) to /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "I'm out of the office and, honestly, relieved — my inbox holds hundreds of unread messages I was answering badly, so thank you for your patience while I recharge and reply properly.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry length ${LINE.length} is outside 1-200 characters`);
}
if (!LINE.trim()) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
// Verify the round-trip: what landed on disk must be exactly the line.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("entry.txt on disk does not match the entry line");
}
if (written.includes("\n")) {
  throw new Error("entry must be a single line");
}
console.log(`wrote /output/entry.txt (${LINE.length} chars)`);
