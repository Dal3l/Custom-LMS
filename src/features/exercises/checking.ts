// Shared answer-checking helpers. Pure functions, used on the server.

/**
 * Result of checking one exercise.
 * `parts` says, per gap / question / statement, whether it is right:
 * true = right, false = wrong, null = not answered yet.
 * It never contains the correct answers themselves.
 */
export type CheckResult = {
  parts: Record<string, boolean | null>;
  /** share of right parts, 0…1 (unanswered parts count as not right) */
  score: number;
  /** every part answered and right */
  correct: boolean;
};

export function summarize(parts: Record<string, boolean | null>): CheckResult {
  const values = Object.values(parts);
  const right = values.filter((v) => v === true).length;
  return {
    parts,
    score: values.length ? right / values.length : 0,
    correct: values.length > 0 && right === values.length,
  };
}

/**
 * Makes typed answers comparable: trims, collapses spaces, unifies apostrophes,
 * quotes and dashes, and (unless case matters) ignores capital letters.
 */
export function normalizeAnswer(value: string, caseSensitive = false): string {
  const unified = value
    .normalize("NFC")
    .replace(/[‘’ʼ`´]/g, "'")
    .replace(/[“”«»„]/g, '"')
    .replace(/[‐-―−]/g, "-")
    .replace(/\s+/g, " ")
    .trim();
  return caseSensitive ? unified : unified.toLocaleLowerCase();
}
