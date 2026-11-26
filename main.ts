// The Painfully Honest Out-of-Office — make.fun bounty
// Pure Node stdlib. Writes one brutally honest but polite
// out-of-office auto-reply (<= 200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I'm away from the office and, honestly, relieved — my inbox has hundreds of unread messages I was answering badly, so thank you for your patience while I recharge and reply properly.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry length ${LINE.length} is outside 1-200 characters`);
}
if (!LINE.trim()) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote /output/entry.txt (${LINE.length} chars)`);
