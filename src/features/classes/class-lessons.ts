// Pure helpers for lessons opened in a class. No server code: tested in tests/.

export type ClassLessonStatus = "live" | "done";

/** Live lesson first, then by the time it was opened, newest first. */
export function sortClassLessons<T extends { status: ClassLessonStatus; openedAt: string }>(items: T[]): T[] {
  return [...items].sort((a, b) =>
    a.status !== b.status ? (a.status === "live" ? -1 : 1) : b.openedAt.localeCompare(a.openedAt),
  );
}
