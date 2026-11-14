"use client";

import { createContext, useContext } from "react";
import type { Range } from "./student-highlights";

/**
 * Shared highlights in a class lesson. Provided by the class lesson page; the
 * text viewer uses it when present (otherwise highlights stay on this device).
 */
export type SharedMarks = {
  /** colour of my highlights / of the other person's (teacher ↔ student) */
  ownColor: string;
  otherColor: string;
  own: (exerciseId: string) => unknown;
  other: (exerciseId: string) => unknown;
  save: (exerciseId: string, ranges: Range[]) => void;
};

export const SharedMarksContext = createContext<SharedMarks | null>(null);

export function useSharedMarks() {
  return useContext(SharedMarksContext);
}
