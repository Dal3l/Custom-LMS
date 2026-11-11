/** Languages a course can teach (ISO 639-1). Names come from the browser/Node (Intl). */
export const TAUGHT_LANGUAGES = [
  "en", "de", "fr", "es", "it", "pt", "ru", "kk", "tr", "zh", "ja", "ko", "ar",
  "pl", "nl", "cs", "uk", "uz", "ky", "el", "he", "hi", "sv", "fi",
] as const;

export const CEFR_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"] as const;

/** "en" in Russian → "Английский". Falls back to the code itself. */
export function languageName(code: string, uiLocale: string): string {
  try {
    const name = new Intl.DisplayNames([uiLocale], { type: "language" }).of(code);
    if (!name || name === code) return code.toUpperCase();
    return name.charAt(0).toLocaleUpperCase(uiLocale) + name.slice(1);
  } catch {
    return code.toUpperCase();
  }
}

export type LanguageOption = { code: string; name: string };

/** Taught languages sorted by their name in the interface language. Call on the server. */
export function sortedLanguages(uiLocale: string): LanguageOption[] {
  return TAUGHT_LANGUAGES.map((code) => ({ code, name: languageName(code, uiLocale) })).sort(
    (a, b) => a.name.localeCompare(b.name, uiLocale),
  );
}
