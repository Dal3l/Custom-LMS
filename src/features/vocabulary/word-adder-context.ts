"use client";

import { createContext, useContext } from "react";

/**
 * "Add to dictionary" inside a lesson: the lesson page provides it, the text
 * viewer offers it for selected words. Null where words can't be added.
 */
export type WordAdder = {
  open: (term?: string) => void;
  /** Adds words right away (the teacher: to every student of the class); null if it failed. */
  addWords?: (words: { term: string; translation: string; example: string }[]) => Promise<{ added: number; existing: number } | null>;
  /** The teacher adds to the students' dictionaries, not their own. */
  forStudents?: boolean;
};

export const WordAdderContext = createContext<WordAdder | null>(null);

export function useWordAdder() {
  return useContext(WordAdderContext);
}
