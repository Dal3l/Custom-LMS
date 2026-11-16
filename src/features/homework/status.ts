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

const DAY = 24 * 60 * 60 * 1000;
/** Reviewed work stays in the teacher's list this long, then moves to the archive. */
export const ARCHIVE_REVIEWED_AFTER_DAYS = 7;
/** Work never handed in moves to the archive this long after it was sent. */
export const ARCHIVE_UNSUBMITTED_AFTER_DAYS = 30;

/**
 * Whether a homework leaves the teacher's main list for the archive: checked
 * a week ago, or sent a month ago and never handed in. Handed-in work waiting
 * for a check never goes to the archive.
 */
export function isArchived(
  h: { status: HomeworkStatus; createdAt: string; reviewedAt: string | null },
  now: number = Date.now(),
): boolean {
  if (h.status === "reviewed") return now - new Date(h.reviewedAt ?? h.createdAt).getTime() > ARCHIVE_REVIEWED_AFTER_DAYS * DAY;
  if (h.status === "submitted") return false;
  return now - new Date(h.createdAt).getTime() > ARCHIVE_UNSUBMITTED_AFTER_DAYS * DAY;
}
