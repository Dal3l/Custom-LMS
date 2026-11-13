// "True / False" in the language being taught. This is lesson content, not
// interface text, so it lives here rather than in messages/*.json.
const LABELS: Record<string, readonly [string, string]> = {
  en: ["True", "False"],
  de: ["Richtig", "Falsch"],
  fr: ["Vrai", "Faux"],
  es: ["Verdadero", "Falso"],
  it: ["Vero", "Falso"],
  pt: ["Verdadeiro", "Falso"],
  ru: ["Верно", "Неверно"],
  kk: ["Дұрыс", "Бұрыс"],
  tr: ["Doğru", "Yanlış"],
  zh: ["对", "错"],
  ja: ["正しい", "間違い"],
  ko: ["맞음", "틀림"],
  ar: ["صحيح", "خطأ"],
  pl: ["Prawda", "Fałsz"],
  nl: ["Waar", "Niet waar"],
  cs: ["Pravda", "Nepravda"],
  uk: ["Правда", "Неправда"],
  uz: ["To'g'ri", "Noto'g'ri"],
  ky: ["Туура", "Туура эмес"],
  el: ["Σωστό", "Λάθος"],
  he: ["נכון", "לא נכון"],
  hi: ["सही", "गलत"],
  sv: ["Sant", "Falskt"],
  fi: ["Totta", "Tarua"],
};

/** [true, false] labels for a course language, or null if we have none. */
export function trueFalseLabels(language: string | null | undefined): readonly [string, string] | null {
  return (language && LABELS[language]) || null;
}
