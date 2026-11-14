// Pure helpers for lessons opened in a class. No server code: tested in tests/.

/** "live" = the lesson going on now in the class; "open" = opened before. */
export type ClassLessonStatus = "live" | "open";

/** Live lesson first, then by the time it was opened, newest first. */
export function sortClassLessons<T extends { status: ClassLessonStatus; openedAt: string }>(items: T[]): T[] {
  return [...items].sort((a, b) =>
    a.status !== b.status ? (a.status === "live" ? -1 : 1) : b.openedAt.localeCompare(a.openedAt),
  );
}

/** Adds or removes an id (a finished section, a revealed exercise), without duplicates. */
export function toggleDoneSection(done: readonly string[], sectionId: string, finished: boolean): string[] {
  const rest = done.filter((id) => id !== sectionId);
  return finished ? [...rest, sectionId] : rest;
}
