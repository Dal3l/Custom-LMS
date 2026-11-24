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

/** Watches the page for an element that appears later (e.g. a slot inside the top bar). */
function subscribeDom(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.body, { childList: true, subtree: true });
  return () => observer.disconnect();
}

/**
 * Puts its children into an element with this id, once it exists — e.g. a
 * place in the top bar that a page made with HeaderPortal.
 */
export function SlotPortal({ id, children }: { id: string; children: React.ReactNode }) {
  const slot = useSyncExternalStore(
    subscribeDom,
    () => document.getElementById(id),
    () => null,
  );
  return slot ? createPortal(children, slot) : null;
}
