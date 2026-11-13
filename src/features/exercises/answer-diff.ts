import type { CheckResult } from "./checking";

/** The per-part record inside an answer ({ values: {...} } or { selected: {...} }). */
function partsOf(answer: unknown): Record<string, unknown> {
  if (!answer || typeof answer !== "object") return {};
  const a = answer as Record<string, unknown>;
  const record = a.values ?? a.selected;
  return record && typeof record === "object" ? (record as Record<string, unknown>) : {};
}

/** Parts whose answer changed since the last check — their old verdict no longer applies. */
export function changedParts(before: unknown, after: unknown): string[] {
  const a = partsOf(before);
  const b = partsOf(after);
  return [...new Set([...Object.keys(a), ...Object.keys(b)])].filter((k) => JSON.stringify(a[k]) !== JSON.stringify(b[k]));
}

export function withoutVerdicts(result: CheckResult, parts: string[]): CheckResult {
  if (!parts.length) return result;
  const next = { ...result.parts };
  for (const p of parts) if (p in next) next[p] = null;
  const values = Object.values(next);
  const right = values.filter((v) => v === true).length;
  return { ...result, parts: next, score: values.length ? right / values.length : 0, correct: values.length > 0 && right === values.length };
}

/** Does the answer contain anything at all? */
export function hasAnyAnswer(answer: unknown): boolean {
  return Object.values(partsOf(answer)).some((v) => (Array.isArray(v) ? v.length > 0 : v !== undefined && v !== ""));
}
