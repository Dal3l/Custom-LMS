"use client";

import { createContext, useContext } from "react";

/**
 * "Add to dictionary" inside a lesson: the lesson page provides it, the text
 * viewer offers it for selected words. Null where words can't be added.
 */
export type WordAdder = { open: (term?: string) => void };

export const WordAdderContext = createContext<WordAdder | null>(null);

export function useWordAdder() {
  return useContext(WordAdderContext);
}
