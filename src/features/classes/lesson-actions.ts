"use server";

import { getLocale } from "next-intl/server";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { redirect } from "@/i18n/navigation";
import { getProfile } from "@/lib/auth";
import { createClient } from "@/lib/supabase/server";
import type { ClassLessonStatus } from "./class-lessons";
import { idSchema } from "./schemas";

// Choosing and running lessons in a class. Teacher only; RLS checks that the
// class is theirs and the lesson is from their own or a library course.

export type PickerCourse = { id: string; title: string; language: string; level: string | null; lessonCount: number };
export type PickerLesson = { id: string; title: string; isTest: boolean; status: ClassLessonStatus | null };
export type PickerModule = { id: string; title: string; lessons: PickerLesson[] };
export type PickerOutline = { course: { id: string; title: string }; modules: PickerModule[] };

type Result<T> = { ok: true; data: T } | { ok: false; error: "generic" | "forbidden" };

async function teacherContext() {
  const profile = await getProfile();
  if (profile?.role !== "teacher") return null;
  return { profile, supabase: await createClient() };
}

/** Courses for the "Open lesson" catalogue: the teacher's own, or the library. */
export async function listPickerCourses(source: "mine" | "library"): Promise<Result<PickerCourse[]>> {
  const ctx = await teacherContext();
  if (!ctx) return { ok: false, error: "forbidden" };
  let query = ctx.supabase.from("courses").select("id, title, language, level, lessons(count)");
  query =
    source === "mine"
      ? query.eq("owner_id", ctx.profile.id).order("updated_at", { ascending: false })
      : query.eq("is_library", true).eq("is_published", true).order("title");
  const { data, error } = await query;
  if (error) return { ok: false, error: "generic" };
  return {
    ok: true,
    data: data.map(({ lessons, ...c }) => ({ ...c, lessonCount: lessons[0]?.count ?? 0 })),
  };
}

/** A course's modules and lessons, with the lessons already opened in this class marked. */
export async function getPickerOutline(classId: string, courseId: string): Promise<Result<PickerOutline>> {
  const ctx = await teacherContext();
  const ids = z.object({ classId: idSchema, courseId: idSchema }).safeParse({ classId, courseId });
  if (!ctx || !ids.success) return { ok: false, error: "forbidden" };
  const [course, history] = await Promise.all([
    ctx.supabase
      .from("courses")
      .select("id, title, modules(id, title, position), lessons(id, module_id, title, is_test, position)")
      .eq("id", ids.data.courseId)
      .maybeSingle(),
    ctx.supabase.from("class_lessons").select("lesson_id, status").eq("class_id", ids.data.classId),
  ]);
  if (course.error || history.error) return { ok: false, error: "generic" };
  if (!course.data) return { ok: false, error: "forbidden" };
  const status = new Map(history.data.map((h) => [h.lesson_id, h.status as ClassLessonStatus]));
  const byPosition = <T extends { position: number }>(a: T, b: T) => a.position - b.position;
  const lessons = [...course.data.lessons].sort(byPosition);
  return {
    ok: true,
    data: {
      course: { id: course.data.id, title: course.data.title },
      modules: [...course.data.modules].sort(byPosition).map((m) => ({
        id: m.id,
        title: m.title,
        lessons: lessons
          .filter((l) => l.module_id === m.id)
          .map((l) => ({ id: l.id, title: l.title, isTest: l.is_test, status: status.get(l.id) ?? null })),
      })),
    },
  };
}

function refresh(classId: string) {
  revalidatePath(`/[locale]/classes/${classId}`, "layout");
}

/**
 * Opens a lesson in the class: the lesson going on so far is finished, this one
 * becomes the current lesson (again, if it was done before). Then goes to it.
 */
export async function openClassLesson(classId: string, lessonId: string): Promise<Result<never>> {
  const ctx = await teacherContext();
  const ids = z.object({ classId: idSchema, lessonId: idSchema }).safeParse({ classId, lessonId });
  if (!ctx || !ids.success) return { ok: false, error: "forbidden" };
  const { supabase } = ctx;
  const now = new Date().toISOString();

  const { error: finishError } = await supabase
    .from("class_lessons")
    .update({ status: "done", finished_at: now })
    .eq("class_id", ids.data.classId)
    .eq("status", "live")
    .neq("lesson_id", ids.data.lessonId);
  if (finishError) return { ok: false, error: "generic" };

  const { data: reopened, error: reopenError } = await supabase
    .from("class_lessons")
    .update({ status: "live", opened_at: now, finished_at: null })
    .eq("class_id", ids.data.classId)
    .eq("lesson_id", ids.data.lessonId)
    .select("lesson_id");
  if (reopenError) return { ok: false, error: "generic" };
  if (!reopened.length) {
    // RLS refuses classes that aren't the teacher's and lessons they can't use.
    const { error } = await supabase
      .from("class_lessons")
      .insert({ class_id: ids.data.classId, lesson_id: ids.data.lessonId });
    if (error) return { ok: false, error: error.code === "42501" ? "forbidden" : "generic" };
  }

  refresh(ids.data.classId);
  return redirect({ href: `/classes/${ids.data.classId}/lessons/${ids.data.lessonId}`, locale: await getLocale() });
}

/** Marks the lesson as done (it stays in the class's list with a check mark). */
export async function finishClassLesson(classId: string, lessonId: string): Promise<Result<undefined>> {
  const ctx = await teacherContext();
  const ids = z.object({ classId: idSchema, lessonId: idSchema }).safeParse({ classId, lessonId });
  if (!ctx || !ids.success) return { ok: false, error: "forbidden" };
  const { data, error } = await ctx.supabase
    .from("class_lessons")
    .update({ status: "done", finished_at: new Date().toISOString() })
    .eq("class_id", ids.data.classId)
    .eq("lesson_id", ids.data.lessonId)
    .eq("status", "live")
    .select("lesson_id");
  if (error) return { ok: false, error: "generic" };
  if (!data.length) return { ok: false, error: "forbidden" };
  refresh(ids.data.classId);
  return { ok: true, data: undefined };
}
