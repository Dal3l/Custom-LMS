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

/** "1.2": section number . exercise number, both counted from 1. */
export function exerciseNumber(sectionIndex: number, exerciseIndex: number): string {
  return `${sectionIndex + 1}.${exerciseIndex + 1}`;
}
