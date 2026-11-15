"use client";

import { useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

const noop = () => () => {};

/** Puts its children into the app's top bar (next to the language and profile buttons). */
export function HeaderPortal({ children }: { children: React.ReactNode }) {
  // The slot exists only in the browser (after the first render on the server).
  const slot = useSyncExternalStore(
    noop,
    () => document.getElementById("page-header-slot"),
    () => null,
  );
  return slot ? createPortal(children, slot) : null;
}
