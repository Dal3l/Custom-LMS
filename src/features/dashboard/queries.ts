import "server-only";
import { chatUnread } from "@/features/chat/actions";
import { listClasses } from "@/features/classes/queries";
import { listMyHomeworks, listTeacherHomeworks } from "@/features/homework/queries";
import { expand } from "@/features/schedule/occurrences";
import { loadSchedule } from "@/features/schedule/queries";
import { summarize, type VocabularySummary } from "@/features/trainer/progress";
import type { ProfileWithRole } from "@/lib/auth";
import { createClient } from "@/lib/supabase/server";
import { homeworkToDo, unreadChats, waitingForCheck } from "./dashboard";

const DAY = 86_400_000;

export type UpcomingLesson = {
  key: string;
  start: string;
  end: string;
  classId: string;
  className: string;
  callUrl: string | null;
  href: string;
};

export type LiveClass = { classId: string; name: string; href: string };

async function common(profile: ProfileWithRole, days: number, limit: number) {
  const now = new Date();
  const [{ events, overrides, classes }, list, unread] = await Promise.all([loadSchedule(), listClasses(profile), chatUnread()]);
  const upcoming: UpcomingLesson[] = expand(events, overrides, now, new Date(now.getTime() + days * DAY))
    .slice(0, limit)
    .map((o) => {
      const c = classes[o.classId];
      return {
        key: `${o.eventId}|${o.occursOn}`,
        start: o.start.toISOString(),
        end: o.end.toISOString(),
        classId: o.classId,
        className: c?.name ?? "",
        callUrl: c?.callUrl ?? null,
        href: c?.lessonId ? `/classes/${o.classId}/lessons/${c.lessonId}` : `/classes/${o.classId}`,
      };
    });
  const live: LiveClass[] = list.flatMap((c) =>
    c.liveLessonId ? [{ classId: c.id, name: c.name, href: `/classes/${c.id}/lessons/${c.liveLessonId}` }] : [],
  );
  const names = Object.fromEntries(list.map((c) => [c.id, c.name]));
  return { upcoming, live, chats: unreadChats(unread, names) };
}

/** Teacher's home: lessons of the next week, work to check, new messages. */
export async function teacherDashboard(profile: ProfileWithRole) {
  const [base, homework] = await Promise.all([common(profile, 7, 5), listTeacherHomeworks()]);
  return { ...base, toCheck: waitingForCheck(homework) };
}

/** Student's home: the next lesson, homework to do, words to review, new messages. */
export async function studentDashboard(profile: ProfileWithRole) {
  const supabase = await createClient();
  const [base, homework, { data: words }] = await Promise.all([
    common(profile, 14, 1),
    listMyHomeworks(profile.id),
    supabase.from("vocabulary").select("stage, due").eq("student_id", profile.id),
  ]);
  const vocabulary: VocabularySummary = summarize(words ?? []);
  return { ...base, homework: homeworkToDo(homework), vocabulary };
}
