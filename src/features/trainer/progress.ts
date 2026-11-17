// A student's progress in the dictionary, for the teacher. Pure, unit-tested.
import { LEARNED, wordStatus } from "./ladder";

export type ProgressWord = { id: string; term: string; translation: string; stage: number; due: string };
export type ProgressAnswer = { wordId: string; correct: boolean; reviewedAt: string };

export type VocabularySummary = {
  total: number;
  learning: number;
  learned: number;
  /** learned words it is time to review */
  toReview: number;
};

export type Progress = VocabularySummary & {
  /** last time the student answered in the trainer */
  lastTrainedAt: string | null;
  /** answers in the last 7 days */
  answersThisWeek: number;
  /** share of right answers in the last 30 days, 0–100, null without answers */
  accuracy: number | null;
  /** words with the most mistakes (in the last 90 days), at most 5 */
  hardWords: { id: string; term: string; translation: string; mistakes: number }[];
};

const DAY = 86_400_000;

export function summarize(words: Pick<ProgressWord, "stage" | "due">[], now = new Date()): VocabularySummary {
  const statuses = words.map((w) => wordStatus(w.stage, w.due, now));
  return {
    total: words.length,
    learning: words.filter((w) => w.stage < LEARNED).length,
    learned: words.filter((w) => w.stage >= LEARNED).length,
    toReview: statuses.filter((s) => s === "review").length,
  };
}

export function progress(words: ProgressWord[], answers: ProgressAnswer[], now = new Date()): Progress {
  const t = now.getTime();
  const since = (days: number) => answers.filter((a) => t - new Date(a.reviewedAt).getTime() <= days * DAY);
  const month = since(30);
  const mistakes = new Map<string, number>();
  for (const a of since(90)) if (!a.correct) mistakes.set(a.wordId, (mistakes.get(a.wordId) ?? 0) + 1);
  const byId = new Map(words.map((w) => [w.id, w]));
  const hardWords = [...mistakes]
    .filter(([id]) => byId.has(id))
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([id, n]) => ({ id, term: byId.get(id)!.term, translation: byId.get(id)!.translation, mistakes: n }));
  const last = answers.reduce<string | null>((m, a) => (!m || a.reviewedAt > m ? a.reviewedAt : m), null);
  return {
    ...summarize(words, now),
    lastTrainedAt: last,
    answersThisWeek: since(7).length,
    accuracy: month.length ? Math.round((month.filter((a) => a.correct).length / month.length) * 100) : null,
    hardWords,
  };
}
