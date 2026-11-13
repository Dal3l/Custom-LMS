// The list of all exercise types (SPEC §5). Safe to import anywhere.
// A type becomes usable when `available` is true and it has a definition
// (definitions.ts) and editor/viewer components (client.tsx).

export const EXERCISE_GROUPS = ["material", "auto", "manual"] as const;
export type ExerciseGroup = (typeof EXERCISE_GROUPS)[number];

export const EXERCISE_TYPES = [
  // Materials (no checking)
  { id: "text", group: "material", icon: "text", available: true },
  { id: "image", group: "material", icon: "image", available: true },
  { id: "video", group: "material", icon: "video", available: true },
  { id: "audio", group: "material", icon: "audio", available: true },
  { id: "file", group: "material", icon: "file", available: true },
  // Checked automatically
  // check: "instant" = each gap is checked as soon as it is filled in (with 3 tries);
  //        "button"  = the student picks answers, then presses "Check"
  { id: "gap_input", group: "auto", icon: "gapInput", available: true, check: "instant" },
  { id: "gap_select", group: "auto", icon: "gapSelect", available: true, check: "button" },
  { id: "gap_drag", group: "auto", icon: "gapDrag", available: false },
  { id: "multiple_choice", group: "auto", icon: "choice", available: true, check: "button" },
  { id: "true_false", group: "auto", icon: "trueFalse", available: true, check: "button" },
  { id: "matching", group: "auto", icon: "matching", available: false },
  { id: "ordering", group: "auto", icon: "ordering", available: false },
  { id: "categorize", group: "auto", icon: "categorize", available: false },
  // Checked by the teacher
  { id: "open_answer", group: "manual", icon: "openAnswer", available: false },
  { id: "voice_answer", group: "manual", icon: "voice", available: false },
] as const;

export type ExerciseTypeId = (typeof EXERCISE_TYPES)[number]["id"];
export type ExerciseIcon = (typeof EXERCISE_TYPES)[number]["icon"];

export function exerciseMeta(id: string) {
  return EXERCISE_TYPES.find((t) => t.id === id);
}

/** How a type's answers are checked in the student view (null = nothing to check). */
export function checkMode(id: string): "instant" | "button" | null {
  const meta = exerciseMeta(id);
  return meta && "check" in meta ? meta.check : null;
}

export function isExerciseTypeId(id: unknown): id is ExerciseTypeId {
  return typeof id === "string" && EXERCISE_TYPES.some((t) => t.id === id);
}
