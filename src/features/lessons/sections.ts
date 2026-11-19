// Section name templates (SPEC §4). They are default *content* the teacher can
// rename, so they stay in English like most textbooks use them.
export const SECTION_TEMPLATES = [
  "Warm-up",
  "Vocabulary",
  "Grammar",
  "Listening",
  "Reading",
  "Speaking",
  "Writing",
  "Homework",
] as const;

/** Blocks without a number: notes are comments beside the exercises, not exercises. */
export const isUnnumbered = (type: string) => type === "note";

/**
 * The numbers of a section's blocks ("1.1", "1.2"…), notes left out of the
 * count (null for them).
 */
export function exerciseNumbers(sectionIndex: number, exercises: { type: string }[]): (string | null)[] {
  let n = 0;
  return exercises.map((e) => (isUnnumbered(e.type) ? null : exerciseNumber(sectionIndex, n++)));
}

/** "1.2": section number . exercise number, both counted from 1. */
export function exerciseNumber(sectionIndex: number, exerciseIndex: number): string {
  return `${sectionIndex + 1}.${exerciseIndex + 1}`;
}
