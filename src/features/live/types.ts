// Messages of the live lesson. Pure types and helpers: tested in tests/.

/** The teacher's "Show to students": open this section and scroll to this exercise. */
export type ShowMessage = { lessonId: string; sectionId: string; exerciseId: string };

/** What a student shares about themselves in a class channel (presence). */
export type StudentPresence = {
  userId: string;
  lessonId: string | null;
  sectionId: string | null;
};

export type LiveStatus = "connecting" | "online" | "offline";

export const classTopic = (classId: string) => `class:${classId}`;

/** Where each online student is, from a presence state ({ key: [metas…] }). */
export function onlineStudents(state: Record<string, unknown[]>): Map<string, StudentPresence> {
  const out = new Map<string, StudentPresence>();
  for (const metas of Object.values(state)) {
    // The newest meta wins (a student may have the app open twice).
    for (const meta of metas) {
      const m = meta as Partial<StudentPresence>;
      if (typeof m.userId === "string") {
        out.set(m.userId, {
          userId: m.userId,
          lessonId: typeof m.lessonId === "string" ? m.lessonId : null,
          sectionId: typeof m.sectionId === "string" ? m.sectionId : null,
        });
      }
    }
  }
  return out;
}

/**
 * Did the teacher just open this lesson (so the student's screen should follow)?
 * `seen` is the last "lesson@openedAt" the student knew for the class.
 */
export function isNewlyOpened(row: { status?: unknown; lesson_id?: unknown; opened_at?: unknown }, seen: string | null) {
  if (row.status !== "live" || typeof row.lesson_id !== "string" || typeof row.opened_at !== "string") return null;
  const signature = `${row.lesson_id}@${row.opened_at}`;
  return signature === seen ? null : signature;
}

/** Combines channel states: online only when every channel is connected. */
export function combineStatus(states: LiveStatus[]): LiveStatus {
  if (states.length === 0) return "online";
  if (states.some((s) => s === "offline")) return "offline";
  if (states.some((s) => s === "connecting")) return "connecting";
  return "online";
}
