// Word status and checking a written word. Pure functions, unit-tested.
//
// A word is "learning" (stage 0) until a learning session in the Dictionary
// takes it through all steps; then it is "learned" (stage 4). FSRS (ts-fsrs)
// keeps its memory state and says when it is time to review it.

export type Outcome = "right" | "almost" | "wrong";
export type WordStatus = "learning" | "learned" | "review";

export const LEARNED = 4;

/** learning / learned / learned and it is time to review it */
export function wordStatus(stage: number, due: string | Date, now: Date = new Date()): WordStatus {
  if (stage < LEARNED) return "learning";
  return new Date(due) <= now ? "review" : "learned";
}

// ---------------------------------------------------------------------------
// Checking a written word
// ---------------------------------------------------------------------------

/** Lower case, single spaces, same apostrophes, ё = е, no punctuation around. */
export function normalizeAnswer(text: string): string {
  return text
    .normalize("NFC")
    .toLowerCase()
    .replace(/[’`´ʼ]/g, "'")
    .replace(/ё/g, "е")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^[\s"«»“”.,;:!?¡¿…—–-]+|[\s"«»“”.,;:!?¡¿…—–-]+$/g, "");
}

function distance(a: string, b: string): number {
  const prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let diag = prev[0];
    prev[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const up = prev[j];
      prev[j] = Math.min(prev[j] + 1, prev[j - 1] + 1, diag + (a[i - 1] === b[j - 1] ? 0 : 1));
      diag = up;
    }
  }
  return prev[b.length];
}

/** Right, almost right (one typo in a longer word, counts as passed) or wrong. */
export function checkWritten(answer: string, term: string): Outcome {
  const a = normalizeAnswer(answer);
  const t = normalizeAnswer(term);
  if (!a) return "wrong";
  if (a === t) return "right";
  const allowed = t.length >= 10 ? 2 : t.length >= 5 ? 1 : 0;
  return distance(a, t) <= allowed ? "almost" : "wrong";
}
