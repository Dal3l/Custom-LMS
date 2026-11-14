import "server-only";
import { createClient } from "@/lib/supabase/server";
import { sortClassLessons, type ClassLessonStatus } from "./class-lessons";

export type { ClassLessonStatus };

export type ClassLessonItem = {
  lessonId: string;
  title: string;
  isTest: boolean;
  courseTitle: string;
  status: ClassLessonStatus;
  openedAt: string;
  /** Set when the teacher finished the lesson. */
  finishedAt: string | null;
};

/** Lessons opened in a class: the one going on first, then the rest, newest first. */
export async function listClassLessons(classId: string): Promise<ClassLessonItem[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("class_lessons")
    .select("status, opened_at, finished_at, lesson:lessons(id, title, is_test, course:courses(title))")
    .eq("class_id", classId)
    .order("opened_at", { ascending: false });
  if (error) throw new Error(`class lessons query failed: ${error.message}`);
  const items = (data ?? []).flatMap((row) =>
    row.lesson
      ? [
          {
            lessonId: row.lesson.id,
            title: row.lesson.title,
            isTest: row.lesson.is_test,
            courseTitle: row.lesson.course?.title ?? "",
            status: row.status as ClassLessonStatus,
            openedAt: row.opened_at,
            finishedAt: row.finished_at,
          },
        ]
      : [],
  );
  return sortClassLessons(items);
}

export type ClassLessonState = {
  status: ClassLessonStatus;
  openedAt: string;
  finishedAt: string | null;
  doneSections: string[];
  /** exercises whose right answers the teacher revealed */
  revealed: string[];
};

/** The state of one lesson in a class, or null if it was never opened there. */
export async function getClassLessonState(classId: string, lessonId: string): Promise<ClassLessonState | null> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("class_lessons")
    .select("status, opened_at, finished_at, done_sections, revealed")
    .eq("class_id", classId)
    .eq("lesson_id", lessonId)
    .maybeSingle();
  return data
    ? {
        status: data.status as ClassLessonStatus,
        openedAt: data.opened_at,
        finishedAt: data.finished_at,
        doneSections: data.done_sections,
        revealed: data.revealed,
      }
    : null;
}

export type ClassMark = { exerciseId: string; userId: string; ranges: unknown };

/** Shared text highlights in a lesson of the class that this user may see (RLS). */
export async function listClassMarks(classId: string, exerciseIds: string[]): Promise<ClassMark[]> {
  if (exerciseIds.length === 0) return [];
  const supabase = await createClient();
  const { data } = await supabase
    .from("class_marks")
    .select("exercise_id, user_id, ranges")
    .eq("class_id", classId)
    .in("exercise_id", exerciseIds);
  return (data ?? []).map((m) => ({ exerciseId: m.exercise_id, userId: m.user_id, ranges: m.ranges }));
}
