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
  /**
   * Right answers the rules allow to show now, per part — e.g. a gap after
   * three wrong tries. Never filled before the student has tried.
   */
  reveal?: Record<string, string>;
};

export function summarize(parts: Record<string, boolean | null>, reveal?: Record<string, string>): CheckResult {
  const values = Object.values(parts);
  const right = values.filter((v) => v === true).length;
  return {
    parts,
    score: values.length ? right / values.length : 0,
    correct: values.length > 0 && right === values.length,
    ...(reveal && Object.keys(reveal).length ? { reveal } : {}),
  };
}

/** How many tries a student gets for a typed gap before the right answer is shown. */
export const MAX_ATTEMPTS = 3;

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
