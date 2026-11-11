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

/** A course with its modules and lessons in order, or null if not visible. */
export const getCourseTree = cache(async (courseId: string): Promise<CourseTree | null> => {
  const supabase = await createClient();
  const { data: course } = await supabase.from("courses").select("*").eq("id", courseId).maybeSingle();
  if (!course) return null;

  const [{ data: modules }, { data: lessons }] = await Promise.all([
    supabase.from("modules").select("*").eq("course_id", courseId).order("position"),
    supabase.from("lessons").select("*").eq("course_id", courseId).order("position"),
  ]);

  return {
    course,
    modules: (modules ?? []).map((m) => ({
      ...m,
      lessons: (lessons ?? []).filter((l) => l.module_id === m.id),
    })),
  };
});
