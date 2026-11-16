// Homework statuses. Pure: tested in tests/.

export type HomeworkStatus = "new" | "in_progress" | "submitted" | "reviewed" | "overdue";

/**
 * new: nothing answered yet; in_progress: some answers; submitted: handed in
 * (waiting for the teacher); reviewed: the teacher checked it; overdue: the
 * due date passed and it was not handed in.
 */
export function homeworkStatus(h: {
  submittedAt: string | null;
  reviewedAt?: string | null;
  dueAt: string | null;
  answered: number;
  now?: number;
}): HomeworkStatus {
  if (h.submittedAt && h.reviewedAt) return "reviewed";
  if (h.submittedAt) return "submitted";
  if (h.dueAt && new Date(h.dueAt).getTime() < (h.now ?? Date.now())) return "overdue";
  return h.answered > 0 ? "in_progress" : "new";
}

/** Student: newest first, but anything still to do (new / in progress / overdue) before handed-in work. */
export function sortHomeworks<T extends { status: HomeworkStatus; createdAt: string }>(items: T[]): T[] {
  const open = (s: HomeworkStatus) => (s === "submitted" || s === "reviewed" ? 1 : 0);
  return [...items].sort((a, b) => open(a.status) - open(b.status) || b.createdAt.localeCompare(a.createdAt));
}

/** Teacher: handed-in work waiting for a check first (oldest first), then the rest, checked work last. */
export function sortForTeacher<T extends { status: HomeworkStatus; createdAt: string; submittedAt: string | null }>(
  items: T[],
): T[] {
  const rank = (s: HomeworkStatus) => (s === "submitted" ? 0 : s === "reviewed" ? 2 : 1);
  return [...items].sort(
    (a, b) =>
      rank(a.status) - rank(b.status) ||
      (a.status === "submitted" ? (a.submittedAt ?? "").localeCompare(b.submittedAt ?? "") : b.createdAt.localeCompare(a.createdAt)),
  );
}
