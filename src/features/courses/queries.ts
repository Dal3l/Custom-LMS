import "server-only";
import { cache } from "react";
import { createClient } from "@/lib/supabase/server";
import type { Tables } from "@/lib/supabase/database.types";

export type Course = Tables<"courses">;
export type Module = Tables<"modules">;
export type Lesson = Tables<"lessons">;
export type CourseListItem = Course & { moduleCount: number; lessonCount: number };
export type ModuleWithLessons = Module & { lessons: Lesson[] };
export type CourseTree = { course: Course; modules: ModuleWithLessons[] };

/** The teacher's own courses, newest first. */
export async function listMyCourses(userId: string): Promise<CourseListItem[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("courses")
    .select("*, modules(count), lessons(count)")
    .eq("owner_id", userId)
    .order("updated_at", { ascending: false });
  if (error) throw error;
  return (data ?? []).map(({ modules, lessons, ...course }) => ({
    ...course,
    moduleCount: modules[0]?.count ?? 0,
    lessonCount: lessons[0]?.count ?? 0,
  }));
}

/** A course with its modules and lessons in order, or null if not visible. One request. */
export const getCourseTree = cache(async (courseId: string): Promise<CourseTree | null> => {
  const supabase = await createClient();
  const { data } = await supabase
    .from("courses")
    .select("*, modules(*), lessons(*)")
    .eq("id", courseId)
    .maybeSingle();
  if (!data) return null;

  const { modules, lessons, ...course } = data;
  const byPosition = <T extends { position: number }>(a: T, b: T) => a.position - b.position;
  const sortedLessons = [...lessons].sort(byPosition);
  return {
    course,
    modules: [...modules].sort(byPosition).map((m) => ({
      ...m,
      lessons: sortedLessons.filter((l) => l.module_id === m.id),
    })),
  };
});
