// What the home page picks out to show. Pure, unit-tested.
import type { HomeworkStatus } from "@/features/homework/status";
import { addDays, localDate } from "@/features/schedule/occurrences";

/** "today" / "tomorrow" in the viewer's time zone, else "later". */
export function dayKind(start: Date, now: Date, timeZone: string): "today" | "tomorrow" | "later" {
  const today = localDate(now, timeZone);
  const day = localDate(start, timeZone);
  if (day === today) return "today";
  if (day === addDays(today, 1)) return "tomorrow";
  return "later";
}

const TO_DO: HomeworkStatus[] = ["overdue", "new", "in_progress"];

/** The student's homework still to do: overdue first, then the nearest due date, then newest. */
export function homeworkToDo<T extends { status: HomeworkStatus; dueAt: string | null; createdAt: string }>(items: T[]): T[] {
  return items
    .filter((h) => TO_DO.includes(h.status))
    .sort(
      (a, b) =>
        Number(b.status === "overdue") - Number(a.status === "overdue") ||
        (a.dueAt ?? "9999").localeCompare(b.dueAt ?? "9999") ||
        b.createdAt.localeCompare(a.createdAt),
    );
}

/** Handed-in work waiting for the teacher's check, the longest-waiting first. */
export function waitingForCheck<T extends { status: HomeworkStatus; submittedAt: string | null }>(items: T[]): T[] {
  return items
    .filter((h) => h.status === "submitted")
    .sort((a, b) => (a.submittedAt ?? "").localeCompare(b.submittedAt ?? ""));
}

/** Classes with unread chat messages, the most unread first. */
export function unreadChats(unread: Record<string, number>, names: Record<string, string>): { classId: string; name: string; count: number }[] {
  return Object.entries(unread)
    .filter(([id, n]) => n > 0 && id in names)
    .map(([classId, count]) => ({ classId, name: names[classId], count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}
