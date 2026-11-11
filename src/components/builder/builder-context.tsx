"use client";

import { createContext, useContext } from "react";

/** Things every exercise editor may need (e.g. the folder to upload files into). */
export const BuilderContext = createContext<{ userId: string } | null>(null);

export function useBuilder() {
  const value = useContext(BuilderContext);
  if (!value) throw new Error("useBuilder must be used inside the lesson builder");
  return value;
}
