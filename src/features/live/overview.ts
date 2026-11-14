import type { SavedAnswer } from "@/features/lessons/answers-shared";

// The group overview: how each student is doing in each exercise. Pure, tested.

export type CellStatus =
  | { kind: "none" }
  | { kind: "unchecked" }
  | { kind: "correct" }
  | { kind: "partial"; right: number; total: number }
  | { kind: "wrong" };

export function cellStatus(saved: SavedAnswer | undefined): CellStatus {
  if (!saved) return { kind: "none" };
  if (!saved.result) return { kind: "unchecked" };
  const verdicts = Object.values(saved.result.parts).filter((v) => v !== null);
  if (verdicts.length === 0) return { kind: "unchecked" };
  const right = verdicts.filter((v) => v === true).length;
  if (saved.result.correct) return { kind: "correct" };
  if (right === 0) return { kind: "wrong" };
  return { kind: "partial", right, total: Object.keys(saved.result.parts).length };
}

/** "Done" exercises of a student: answered and checked fully right. */
export function correctCount(answers: Record<string, SavedAnswer> | undefined): number {
  return Object.values(answers ?? {}).filter((a) => cellStatus(a).kind === "correct").length;
}
