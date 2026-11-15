// Homework statuses. Pure: tested in tests/.

export type HomeworkStatus = "new" | "in_progress" | "submitted" | "overdue";

/**
 * new: nothing answered yet; in_progress: some answers; submitted: handed in;
 * overdue: the due date passed and it was not handed in.
 */
export function homeworkStatus(h: {
  submittedAt: string | null;
  dueAt: string | null;
  answered: number;
  now?: number;
}): HomeworkStatus {
  if (h.submittedAt) return "submitted";
  if (h.dueAt && new Date(h.dueAt).getTime() < (h.now ?? Date.now())) return "overdue";
  return h.answered > 0 ? "in_progress" : "new";
}

/** Newest first, but anything still to do (new / in progress / overdue) before handed-in work. */
export function sortHomeworks<T extends { status: HomeworkStatus; createdAt: string }>(items: T[]): T[] {
  const open = (s: HomeworkStatus) => (s === "submitted" ? 1 : 0);
  return [...items].sort((a, b) => open(a.status) - open(b.status) || b.createdAt.localeCompare(a.createdAt));
}
