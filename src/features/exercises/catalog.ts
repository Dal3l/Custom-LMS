// The list of all exercise types (SPEC §5). Safe to import anywhere.
// A type becomes usable when `available` is true and it has a definition
// (definitions.ts) and editor/viewer components (client.tsx).

export const EXERCISE_GROUPS = ["material", "auto", "manual"] as const;
export type ExerciseGroup = (typeof EXERCISE_GROUPS)[number];

export const EXERCISE_TYPES = [
  // Materials (no checking)
  { id: "text", group: "material", icon: "text", available: true },
  // A note: tips for the teacher, a suggested answer, a rule. Hidden from
  // students unless the teacher shows it (its text is then kept with the keys).
  { id: "note", group: "material", icon: "note", available: true },
  // Words with a translation or definition, "+" adds them to the dictionary.
  { id: "glossary", group: "material", icon: "glossary", available: true },
  { id: "image", group: "material", icon: "image", available: true },
  { id: "video", group: "material", icon: "video", available: true },
  { id: "audio", group: "material", icon: "audio", available: true },
  { id: "file", group: "material", icon: "file", available: true },
  { id: "whiteboard", group: "material", icon: "whiteboard", available: true },
  // Checked automatically
  // check: "button" = the student answers, then presses "Check"
  //        ("instant" = checked on every change; kept for types that may need it)
  { id: "gap_input", group: "auto", icon: "gapInput", available: true, check: "button" },
  { id: "gap_select", group: "auto", icon: "gapSelect", available: true, check: "button" },
  { id: "gap_drag", group: "auto", icon: "gapDrag", available: true, check: "button" },
  { id: "multiple_choice", group: "auto", icon: "choice", available: true, check: "button" },
  { id: "true_false", group: "auto", icon: "trueFalse", available: true, check: "button" },
  { id: "matching", group: "auto", icon: "matching", available: true, check: "button" },
  { id: "ordering", group: "auto", icon: "ordering", available: true, check: "button" },
  { id: "categorize", group: "auto", icon: "categorize", available: true, check: "button" },
  // Checked by the teacher (check: "manual" = the answer is saved, the teacher reviews it)
  { id: "open_answer", group: "manual", icon: "openAnswer", available: true, check: "manual" },
  { id: "voice_answer", group: "manual", icon: "voice", available: true, check: "manual" },
] as const;

export type ExerciseTypeId = (typeof EXERCISE_TYPES)[number]["id"];
export type ExerciseIcon = (typeof EXERCISE_TYPES)[number]["icon"];

export function exerciseMeta(id: string) {
  return EXERCISE_TYPES.find((t) => t.id === id);
}

/**
 * How a type's answers are checked in the student view:
 * "button" / "instant" automatically, "manual" by the teacher, null = nothing to answer.
 */
export function checkMode(id: string): "instant" | "button" | "manual" | null {
  const meta = exerciseMeta(id);
  return meta && "check" in meta ? meta.check : null;
}

export function isExerciseTypeId(id: unknown): id is ExerciseTypeId {
  return typeof id === "string" && EXERCISE_TYPES.some((t) => t.id === id);
}

/** Checked automatically on the server (has right answers). */
export function isAutoChecked(id: string): boolean {
  const mode = checkMode(id);
  return mode === "button" || mode === "instant";
}
