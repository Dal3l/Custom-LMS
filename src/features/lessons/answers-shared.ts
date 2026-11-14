import type { CheckResult } from "@/features/exercises/checking";

// Saved answers, shared by the server and the browser (no server-only code here).

export type SavedAnswer = { answer: unknown; checkedAnswer: unknown; result: CheckResult | null };

export type StudentAnswers = Record<string, Record<string, SavedAnswer>>;

export function toSavedAnswer(row: { answer: unknown; checked_answer: unknown; result: unknown }): SavedAnswer {
  return {
    answer: row.answer,
    checkedAnswer: row.checked_answer ?? undefined,
    result: (row.result as CheckResult | null) ?? null,
  };
}
