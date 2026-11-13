"use server";

import { getLocale } from "next-intl/server";
import { revalidatePath } from "next/cache";
import { redirect } from "@/i18n/navigation";
import { isLocale, routing } from "@/i18n/routing";
import { getProfile, getUser } from "@/lib/auth";
import { getOrigin } from "@/lib/site-url";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";
import { generateInviteToken, generatePassword } from "./credentials";
import { joinByInvite } from "./join";
import { classSchema, idSchema, registerStudentSchema } from "./schemas";

// Every action re-checks the user; the database rules (RLS) are the final guard.
// The secret key (admin client) is used only after the teacher's access is checked.

export type ClassActionError = "generic" | "forbidden" | "classFull";
export type ActionResult<T = undefined> = { ok: true; data: T } | { ok: false; error: ClassActionError };

export type ClassFormState = {
  status: "idle" | "error" | "success";
  fieldErrors?: Partial<Record<string, string>>;
  formError?: ClassActionError;
  /** Echoed back so the form keeps what the user typed. */
  values?: Record<string, string>;
};

export type Credentials = { fullName: string; email: string; password: string; loginUrl: string };
export type RegisterStudentState = ClassFormState & { credentials?: Credentials };

const ok = <T,>(data: T): ActionResult<T> => ({ ok: true, data });
const fail = (error: ClassActionError = "generic"): ActionResult<never> => ({ ok: false, error });

function refresh() {
  revalidatePath("/[locale]/classes", "layout");
}

function fieldErrorsOf(issues: { path: PropertyKey[]; message: string }[]) {
  const out: Record<string, string> = {};
  for (const i of issues) out[String(i.path[0] ?? "form")] ??= i.message;
  return out;
}

async function teacherClient() {
  const profile = await getProfile();
  if (profile?.role !== "teacher") return null;
  return { supabase: await createClient(), profile };
}

/** The class, if the signed-in teacher owns it. */
async function ownClass(classId: unknown) {
  const ctx = await teacherClient();
  const id = idSchema.safeParse(classId);
  if (!ctx || !id.success) return null;
  const { data } = await ctx.supabase
    .from("classes")
    .select("id, kind, class_members(count)")
    .eq("id", id.data)
    .eq("teacher_id", ctx.profile.id)
    .maybeSingle();
  if (!data) return null;
  return { ...ctx, cls: { id: data.id, kind: data.kind, studentCount: data.class_members[0]?.count ?? 0 } };
}

function formValues(formData: FormData, names: string[]): Record<string, string> {
  const out: Record<string, string> = {};
  for (const n of names) {
    const v = formData.get(n);
    out[n] = typeof v === "string" ? v : "";
  }
  return out;
}

function readClassForm(formData: FormData) {
  return classSchema.safeParse(formValues(formData, ["name", "kind", "call_url"]));
}

// ---------------------------------------------------------------------------
// Classes
// ---------------------------------------------------------------------------

export async function createClass(_prev: ClassFormState, formData: FormData): Promise<ClassFormState> {
  const ctx = await teacherClient();
  if (!ctx) return { status: "error", formError: "forbidden" };
  const values = formValues(formData, ["name", "kind", "call_url"]);
  const parsed = readClassForm(formData);
  if (!parsed.success) return { status: "error", fieldErrors: fieldErrorsOf(parsed.error.issues), values };

  const { data, error } = await ctx.supabase.from("classes").insert(parsed.data).select("id").single();
  if (error || !data) return { status: "error", formError: "generic", values };
  // Every class gets an invite link right away.
  await ctx.supabase.from("class_invites").insert({ class_id: data.id, token: generateInviteToken() });
  refresh();
  return redirect({ href: `/classes/${data.id}`, locale: await getLocale() });
}

export async function updateClass(_prev: ClassFormState, formData: FormData): Promise<ClassFormState> {
  const ctx = await ownClass(formData.get("id"));
  if (!ctx) return { status: "error", formError: "forbidden" };
  const values = formValues(formData, ["name", "kind", "call_url"]);
  const parsed = readClassForm(formData);
  if (!parsed.success) return { status: "error", fieldErrors: fieldErrorsOf(parsed.error.issues), values };
  if (parsed.data.kind === "individual" && ctx.cls.studentCount > 1) {
    return { status: "error", fieldErrors: { kind: "individualTooMany" }, values };
  }
  const { error } = await ctx.supabase.from("classes").update(parsed.data).eq("id", ctx.cls.id);
  if (error) return { status: "error", formError: "generic", values };
  refresh();
  return { status: "success" };
}

export async function deleteClass(classId: string): Promise<ActionResult> {
  const ctx = await ownClass(classId);
  if (!ctx) return fail("forbidden");
  const { error } = await ctx.supabase.from("classes").delete().eq("id", ctx.cls.id);
  if (error) return fail();
  refresh();
  return ok(undefined);
}

// ---------------------------------------------------------------------------
// Students
// ---------------------------------------------------------------------------

export async function removeStudent(classId: string, studentId: string): Promise<ActionResult> {
  const ctx = await ownClass(classId);
  const student = idSchema.safeParse(studentId);
  if (!ctx || !student.success) return fail("forbidden");
  const { error } = await ctx.supabase
    .from("class_members")
    .delete()
    .eq("class_id", ctx.cls.id)
    .eq("student_id", student.data);
  if (error) return fail();
  refresh();
  return ok(undefined);
}

/**
 * The teacher creates a student account (name, email, time zone) and adds it to
 * the class. Returns the login and a generated password to send to the student.
 */
export async function registerStudent(
  _prev: RegisterStudentState,
  formData: FormData,
): Promise<RegisterStudentState> {
  const ctx = await ownClass(formData.get("classId"));
  if (!ctx) return { status: "error", formError: "forbidden" };
  const values = formValues(formData, ["fullName", "email", "timezone"]);
  const parsed = registerStudentSchema.safeParse(values);
  if (!parsed.success) return { status: "error", fieldErrors: fieldErrorsOf(parsed.error.issues), values };
  if (ctx.cls.kind === "individual" && ctx.cls.studentCount > 0) {
    return { status: "error", formError: "classFull", values };
  }

  const { fullName, email, timezone } = parsed.data;
  const password = generatePassword();
  const localeValue = await getLocale();
  const locale = isLocale(localeValue) ? localeValue : routing.defaultLocale;
  const admin = createAdminClient();

  const { data: created, error } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    // Read by the database trigger that creates the profile.
    user_metadata: { full_name: fullName, role: "student", locale, timezone },
  });
  if (error || !created.user) {
    if (error?.code === "email_exists" || error?.status === 422) {
      return { status: "error", fieldErrors: { email: "emailTaken" }, values };
    }
    return { status: "error", formError: "generic", values };
  }

  const { error: memberError } = await admin
    .from("class_members")
    .insert({ class_id: ctx.cls.id, student_id: created.user.id });
  if (memberError) {
    // Don't leave an account nobody knows about.
    await admin.auth.admin.deleteUser(created.user.id);
    return { status: "error", formError: "generic", values };
  }

  refresh();
  return {
    status: "success",
    credentials: { fullName, email, password, loginUrl: `${await getOrigin()}/${locale}/login` },
  };
}

// ---------------------------------------------------------------------------
// Invite link
// ---------------------------------------------------------------------------

export async function setInviteEnabled(classId: string, enabled: boolean): Promise<ActionResult> {
  const ctx = await ownClass(classId);
  if (!ctx) return fail("forbidden");
  const { error } = await ctx.supabase.from("class_invites").update({ enabled }).eq("class_id", ctx.cls.id);
  if (error) return fail();
  refresh();
  return ok(undefined);
}

/** A new link: the old one stops working. */
export async function regenerateInvite(classId: string): Promise<ActionResult<string>> {
  const ctx = await ownClass(classId);
  if (!ctx) return fail("forbidden");
  const token = generateInviteToken();
  const { data: updated, error } = await ctx.supabase
    .from("class_invites")
    .update({ token, enabled: true })
    .eq("class_id", ctx.cls.id)
    .select("class_id");
  if (error) return fail();
  if (!updated.length) {
    const { error: insertError } = await ctx.supabase.from("class_invites").insert({ class_id: ctx.cls.id, token });
    if (insertError) return fail();
  }
  refresh();
  return ok(token);
}

// ---------------------------------------------------------------------------
// Joining (signed-in user on the invite page)
// ---------------------------------------------------------------------------

export type JoinState = { status: "idle" | "error"; error?: "invalidInvite" | "teacherAccount" | "classFull" | "generic" };

export async function joinClass(_prev: JoinState, formData: FormData): Promise<JoinState> {
  const locale = await getLocale();
  const user = await getUser();
  const token = formData.get("token");
  if (!user) return redirect({ href: "/login", locale });
  if (typeof token !== "string") return { status: "error", error: "invalidInvite" };
  const result = await joinByInvite(user.id, token);
  if (!result.ok) return { status: "error", error: result.error };
  refresh();
  return redirect({ href: `/classes/${result.classId}`, locale });
}
