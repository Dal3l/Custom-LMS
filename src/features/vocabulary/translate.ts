// Translating a selected word: normalising it and reading the answer of the
// free translation service MyMemory. Pure functions, unit-tested.

/** Lower case, single spaces, no quotes or punctuation around it. */
export function normalizeTerm(text: string): string {
  return text
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^[\s"'«»“”‘’()[\]{}.,;:!?¡¿…—–-]+|[\s"'«»“”‘’()[\]{}.,;:!?¡¿…—–-]+$/g, "")
    .toLowerCase();
}

/** A selection worth translating: a word or a short phrase (up to 6 words, 60 letters). */
export function isTranslatable(text: string): boolean {
  const term = normalizeTerm(text);
  if (!term || term.length > 60) return false;
  if (term.split(" ").length > 6) return false;
  return /\p{L}/u.test(term);
}

type MyMemoryAnswer = {
  responseStatus?: number | string;
  responseData?: { translatedText?: string };
  matches?: { translation?: string; segment?: string; match?: number | string }[];
};

/**
 * Translation variants from a MyMemory answer, best first, at most 4.
 * Returns null when the service refused (e.g. the daily limit is used up).
 */
export function parseTranslation(data: unknown, term: string): string[] | null {
  const answer = (data ?? {}) as MyMemoryAnswer;
  if (Number(answer.responseStatus) !== 200) return null;
  const main = answer.responseData?.translatedText ?? "";
  if (/MYMEMORY WARNING|QUERY LENGTH LIMIT|INVALID/i.test(main)) return null;
  const wanted = normalizeTerm(term);
  const found: string[] = [];
  const add = (text: string | undefined) => {
    const clean = (text ?? "").replace(/\s+/g, " ").trim();
    if (!clean || clean.length > 100) return;
    if (normalizeTerm(clean) === wanted) return; // not translated
    if (found.some((f) => f.toLowerCase() === clean.toLowerCase())) return;
    found.push(clean);
  };
  add(main);
  for (const m of answer.matches ?? []) {
    // Only translations of this very word (not of a longer sentence).
    if (normalizeTerm(m.segment ?? "") === wanted && Number(m.match ?? 0) >= 0.5) add(m.translation);
  }
  return found.slice(0, 4);
}
