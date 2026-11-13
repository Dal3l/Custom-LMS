"use client";

import { createContext, useContext } from "react";

/**
 * The language the course teaches (e.g. "en"). Some exercise words belong to the
 * lesson, not to the interface: an English course says "True / False" even when
 * the site is shown in Russian.
 */
const LessonLanguageContext = createContext<string | null>(null);

export const LessonLanguageProvider = LessonLanguageContext.Provider;

export function useLessonLanguage(): string | null {
  return useContext(LessonLanguageContext);
}
