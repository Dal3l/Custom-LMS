// The trainer's ladder. Pure functions (the FSRS scheduler is passed in), unit-tested.
//
//   stage 0  new            → shown as a flash card ("Don't remember / Hard / Remember / Easy")
//   stage 1  card passed    → pick the translation out of 4
//   stage 2  picked it      → write the word from its translation
//   stage 3  wrote it       → write the word by ear
//   stage 4  learned        → FSRS brings it back now and then for a check
//
// A right answer moves the word one step up, a mistake one step down (a learned
// word goes back to "learning"). Between the steps there are short pauses
// (10 minutes, a day, two days) so "learned" means remembered, not crammed.

export type Stage = 0 | 1 | 2 | 3 | 4;
export type Mode = "card" | "choice" | "write" | "listen";
export type Outcome = "right" | "almost" | "wrong";
/** FSRS grades: 1 again, 2 hard, 3 good, 4 easy */
export type Grade = 1 | 2 | 3 | 4;
export type WordStatus = "new" | "learning" | "learned";

export const LEARNED: Stage = 4;
const MINUTE = 60_000;
const DAY = 24 * 60 * MINUTE;
/** The pause before the next step, by the step just reached (1, 2, 3). */
export const STEP_PAUSE: Record<1 | 2 | 3, number> = { 1: 10 * MINUTE, 2: DAY, 3: 2 * DAY };
/** After a mistake the word comes back soon. */
export const RETRY_PAUSE = 10 * MINUTE;
/** A word just learned is checked again no sooner than this. */
export const FIRST_CHECK_PAUSE = 4 * DAY;

export function wordStatus(stage: number, reviews: number): WordStatus {
  if (stage >= LEARNED) return "learned";
  return stage === 0 && reviews === 0 ? "new" : "learning";
}

/**
 * Which exercise a word gets. Without enough other words for 4 choices it is
 * written instead; without any voice the listening step is written too.
 * A learned word is checked by choice or writing (alternating).
 */
export function modeFor(stage: number, can: { choose: boolean; listen: boolean }, reviews = 0): Mode {
  if (stage <= 0) return "card";
  if (stage === 1) return can.choose ? "choice" : "write";
  if (stage === 2) return "write";
  if (stage === 3) return can.listen ? "listen" : "write";
  return reviews % 2 === 0 || !can.choose ? "write" : "choice";
}

/** The FSRS grade of an answer: cards are graded by the student, the rest by the result. */
export function gradeFor(outcome: Outcome, cardGrade?: Grade): Grade {
  if (cardGrade) return cardGrade;
  return outcome === "right" ? 3 : outcome === "almost" ? 2 : 1;
}

export function passed(grade: Grade): boolean {
  return grade > 1;
}

export function nextStage(stage: number, grade: Grade): Stage {
  const s = Math.min(Math.max(stage, 0), LEARNED);
  return (passed(grade) ? Math.min(s + 1, LEARNED) : Math.max(s - 1, 0)) as Stage;
}

/** When the word comes back, given the new stage and FSRS's own date. */
export function nextDue(stageAfter: Stage, grade: Grade, fsrsDue: Date, now: Date, stageBefore: number): Date {
  const t = now.getTime();
  if (!passed(grade)) return new Date(t + RETRY_PAUSE);
  if (stageAfter < LEARNED) return new Date(t + STEP_PAUSE[stageAfter as 1 | 2 | 3]);
  // Just learned: not before a few days. Already learned: FSRS decides.
  const fsrs = fsrsDue.getTime();
  return new Date(stageBefore < LEARNED ? Math.max(fsrs, t + FIRST_CHECK_PAUSE) : Math.max(fsrs, t + DAY));
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
