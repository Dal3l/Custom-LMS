"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

// The teacher's quiet hints in exercises (see ExerciseViewerProps.hint): only
// the teacher's view gets the right answers, so nothing here reaches students.

/** A light green mark on the right option, item or group. */
export const HINT_MARK = "border-emerald-400 bg-emerald-50 dark:bg-emerald-950/40";
/** The same, for things that already have their own colours (a chosen option). */
export const HINT_RING = "ring-2 ring-emerald-400 ring-offset-1";

/** Shows `text` in a small green bubble above `children` while it is hovered, focused or tapped. */
export function HintTip({ text, className, children }: { text?: string | null; className?: string; children: React.ReactNode }) {
  if (!text) return <>{children}</>;
  return (
    // Focusable, so a tap shows the hint on touch screens (no hover there).
    <span tabIndex={0} className={cn("group/hint relative inline-flex outline-none", className)}>
      {children}
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-1 hidden w-max max-w-[min(28rem,90vw)] -translate-x-1/2 rounded-md bg-emerald-600 px-2 py-0.5 text-sm leading-snug font-medium whitespace-pre-line text-white shadow-md group-focus-within/hint:block group-hover/hint:block"
      >
        {text}
      </span>
    </span>
  );
}

/**
 * Which item the pointer is on (or which one has focus): the closest element
 * with a data-hint attribute. Spread `handlers` on the exercise's outer element.
 */
export function useHintHover() {
  const [active, setActive] = useState<string | null>(null);
  const pick = (e: React.SyntheticEvent) => {
    const el = e.target instanceof Element ? e.target.closest("[data-hint]") : null;
    setActive(el?.getAttribute("data-hint") ?? null);
  };
  return {
    active,
    handlers: {
      onPointerOver: pick,
      onPointerDown: pick,
      // A finger "leaves" right after a tap: the tapped item stays lit until the next tap.
      onPointerLeave: (e: React.PointerEvent) => e.pointerType !== "touch" && setActive(null),
      onFocus: pick,
    },
  };
}
