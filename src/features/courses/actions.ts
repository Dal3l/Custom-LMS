"use server";

import { getLocale, getTranslations } from "next-intl/server";
import { revalidatePath } from "next/cache";
import { redirect } from "@/i18n/navigation";
import { getProfile } from "@/lib/auth";
import type { TablesInsert } from "@/lib/supabase/database.types";
import { createClient } from "@/lib/supabase/server";
import {
  courseSchema,
  idListSchema,
  idSchema,
  isOwnCoverPath,
  titleSchema,
} from "./schemas";

// Every action re-checks the user; the database rules (RLS) are the final guard.

export type ActionResult<T = undefined> =
  | { ok: true; data: T }
  | { ok: false; error: "generic" | "forbidden" | "invalid" };

export type CourseFormState = {
  status: "idle" | "error" | "success";
  fieldErrors?: Partial<Record<string, string>>;
  formError?: "generic" | "forbidden";
};

const ok = <T,>(data: T): ActionResult<T> => ({ ok: true, data });
const fail = (error: "generic" | "forbidden" | "invalid" = "generic"): ActionResult<never> => ({
  ok: false,
  error,
});

async function teacherClient() {
  const profile = await getProfile();
  if (profile?.role !== "teacher") return null;
  return { supabase: await createClient(), profile };
}

function refresh() {
  revalidatePath("/[locale]/courses", "layout");
}

async function copySuffix() {
  const t = await getTranslations("courses");
  return ` (${t("copySuffix")})`;
}

function readCourseForm(formData: FormData) {
  return courseSchema.safeParse({
    title: formData.get("title") ?? "",
    language: formData.get("language") ?? "",
    level: formData.get("level") ?? "",
    description: formData.get("description") ?? "",
  });
}

function fieldErrorsOf(issues: { path: PropertyKey[]; message: string }[]) {
  const out: Record<string, string> = {};
  for (const i of issues) {
    const key = String(i.path[0] ?? "form");
    out[key] ??= i.message;
  }
  return out;
}

// ---------------------------------------------------------------------------
// Courses
// ---------------------------------------------------------------------------

export async function createCourse(_prev: CourseFormState, formData: FormData): Promise<CourseFormState> {
  const ctx = await teacherClient();
  if (!ctx) return { status: "error", formError: "forbidden" };
  const parsed = readCourseForm(formData);
  if (!parsed.success) return { status: "error", fieldErrors: fieldErrorsOf(parsed.error.issues) };

  const { data, error } = await ctx.supabase.from("courses").insert(parsed.data).select("id").single();
  if (error || !data) return { status: "error", formError: "generic" };

  refresh();
  return redirect({ href: `/courses/${data.id}`, locale: await getLocale() });
}

export async function updateCourse(
  courseId: string,
  _prev: CourseFormState,
  formData: FormData,
): Promise<CourseFormState> {
  const ctx = await teacherClient();
  if (!ctx || !idSchema.safeParse(courseId).success) return { status: "error", formError: "forbidden" };
  const parsed = readCourseForm(formData);
  if (!parsed.success) return { status: "error", fieldErrors: fieldErrorsOf(parsed.error.issues) };

  const { data, error } = await ctx.supabase
    .from("courses")
    .update(parsed.data)
    .eq("id", courseId)
    .select("id");
  if (error) return { status: "error", formError: "generic" };
  if (!data?.length) return { status: "error", formError: "forbidden" };

  refresh();
  return { status: "success" };
}

/** Saves a cover the browser has already uploaded to the user's own folder (null removes it). */
export async function setCourseCover(courseId: string, path: string | null): Promise<ActionResult> {
  const ctx = await teacherClient();
  if (!ctx || !idSchema.safeParse(courseId).success) return fail("forbidden");
  if (path !== null && !isOwnCoverPath(path, ctx.profile.id)) return fail("invalid");

  const { data, error } = await ctx.supabase
    .from("courses")
    .update({ cover_path: path })
    .eq("id", courseId)
    .select("id");
  if (error) return fail();
  if (!data?.length) return fail("forbidden");
  refresh();
  return ok(undefined);
}

export async function duplicateCourse(courseId: string): Promise<ActionResult<string>> {
  const ctx = await teacherClient();
  if (!ctx || !idSchema.safeParse(courseId).success) return fail("forbidden");
  const { data, error } = await ctx.supabase.rpc("duplicate_course", {
    p_id: courseId,
    p_suffix: await copySuffix(),
  });
  if (error || !data) return fail();
  refresh();
  return ok(data);
}

export async function deleteCourse(courseId: string): Promise<ActionResult> {
  const ctx = await teacherClient();
  if (!ctx || !idSchema.safeParse(courseId).success) return fail("forbidden");
  const { data, error } = await ctx.supabase.from("courses").delete().eq("id", courseId).select("id");
  if (error) return fail();
  if (!data?.length) return fail("forbidden");
  refresh();
  return ok(undefined);
}

// ---------------------------------------------------------------------------
// Modules
// ---------------------------------------------------------------------------

export async function createModule(courseId: string, title: string): Promise<ActionResult<string>> {
  const ctx = await teacherClient();
  const parsedTitle = titleSchema.safeParse(title);
  if (!ctx || !idSchema.safeParse(courseId).success) return fail("forbidden");
  if (!parsedTitle.success) return fail("invalid");
  const { data, error } = await ctx.supabase
    .from("modules")
    // `position` is filled in by a database trigger (end of the list).
    .insert({ course_id: courseId, title: parsedTitle.data } as TablesInsert<"modules">)
    .select("id")
    .single();
  if (error || !data) return fail();
  refresh();
  return ok(data.id);
}

export async function renameModule(moduleId: string, title: string): Promise<ActionResult> {
  return renameRow("modules", moduleId, title);
}

export async function duplicateModule(moduleId: string): Promise<ActionResult<string>> {
  const ctx = await teacherClient();
  if (!ctx || !idSchema.safeParse(moduleId).success) return fail("forbidden");
  const { data, error } = await ctx.supabase.rpc("duplicate_module", {
    p_id: moduleId,
    p_suffix: await copySuffix(),
  });
  if (error || !data) return fail();
  refresh();
  return ok(data);
}

export async function deleteModule(moduleId: string): Promise<ActionResult> {
  return deleteRow("modules", moduleId);
}

export async function reorderModules(courseId: string, ids: string[]): Promise<ActionResult> {
  const ctx = await teacherClient();
  if (!ctx || !idSchema.safeParse(courseId).success || !idListSchema.safeParse(ids).success) {
    return fail("forbidden");
  }
  const { error } = await ctx.supabase.rpc("reorder_modules", { p_course: courseId, p_ids: ids });
  if (error) return fail();
  refresh();
  return ok(undefined);
}

// ---------------------------------------------------------------------------
// Lessons
// ---------------------------------------------------------------------------

export async function createLesson(moduleId: string, title: string): Promise<ActionResult<string>> {
  const ctx = await teacherClient();
  const parsedTitle = titleSchema.safeParse(title);
  if (!ctx || !idSchema.safeParse(moduleId).success) return fail("forbidden");
  if (!parsedTitle.success) return fail("invalid");
  const { data, error } = await ctx.supabase
    .from("lessons")
    // `position` and `course_id` are filled in by a database trigger.
    .insert({ module_id: moduleId, title: parsedTitle.data } as TablesInsert<"lessons">)
    .select("id")
    .single();
  if (error || !data) return fail();
  refresh();
  return ok(data.id);
}

export async function renameLesson(lessonId: string, title: string): Promise<ActionResult> {
  return renameRow("lessons", lessonId, title);
}

export async function setLessonTest(lessonId: string, isTest: boolean): Promise<ActionResult> {
  const ctx = await teacherClient();
  if (!ctx || !idSchema.safeParse(lessonId).success) return fail("forbidden");
  const { data, error } = await ctx.supabase
    .from("lessons")
    .update({ is_test: Boolean(isTest) })
    .eq("id", lessonId)
    .select("id");
  if (error) return fail();
  if (!data?.length) return fail("forbidden");
  refresh();
  return ok(undefined);
}

export async function duplicateLesson(lessonId: string): Promise<ActionResult<string>> {
  const ctx = await teacherClient();
  if (!ctx || !idSchema.safeParse(lessonId).success) return fail("forbidden");
  const { data, error } = await ctx.supabase.rpc("duplicate_lesson", {
    p_id: lessonId,
    p_suffix: await copySuffix(),
  });
  if (error || !data) return fail();
  refresh();
  return ok(data);
}

export async function deleteLesson(lessonId: string): Promise<ActionResult> {
  return deleteRow("lessons", lessonId);
}

/** Puts these lessons into the module in this order (also moves lessons between modules). */
export async function reorderLessons(moduleId: string, ids: string[]): Promise<ActionResult> {
  const ctx = await teacherClient();
  if (!ctx || !idSchema.safeParse(moduleId).success || !idListSchema.safeParse(ids).success) {
    return fail("forbidden");
  }
  const { error } = await ctx.supabase.rpc("reorder_lessons", { p_module: moduleId, p_ids: ids });
  if (error) return fail();
  refresh();
  return ok(undefined);
}

// ---------------------------------------------------------------------------
// Shared
// ---------------------------------------------------------------------------

async function renameRow(table: "modules" | "lessons", id: string, title: string): Promise<ActionResult> {
  const ctx = await teacherClient();
  const parsedTitle = titleSchema.safeParse(title);
  if (!ctx || !idSchema.safeParse(id).success) return fail("forbidden");
  if (!parsedTitle.success) return fail("invalid");
  const { data, error } = await ctx.supabase
    .from(table)
    .update({ title: parsedTitle.data })
    .eq("id", id)
    .select("id");
  if (error) return fail();
  if (!data?.length) return fail("forbidden");
  refresh();
  return ok(undefined);
}

async function deleteRow(table: "modules" | "lessons", id: string): Promise<ActionResult> {
  const ctx = await teacherClient();
  if (!ctx || !idSchema.safeParse(id).success) return fail("forbidden");
  const { data, error } = await ctx.supabase.from(table).delete().eq("id", id).select("id");
  if (error) return fail();
  if (!data?.length) return fail("forbidden");
  refresh();
  return ok(undefined);
}
