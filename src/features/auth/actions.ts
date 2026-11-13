"use server";

import { redirect } from "@/i18n/navigation";
import { isLocale, routing, type Locale } from "@/i18n/routing";
import { safeNextPath, stripLocalePrefix } from "@/lib/redirect";
import { getOrigin } from "@/lib/site-url";
import { createClient } from "@/lib/supabase/server";
import { joinByInvite } from "@/features/classes/join";
import {
  fieldErrors,
  forgotPasswordSchema,
  localeSchema,
  resetPasswordSchema,
  roleSchema,
  signInSchema,
  signUpSchema,
} from "@/lib/validation/auth";
import { authErrorKey, type FormState } from "./errors";

function readLocale(formData: FormData): Locale {
  const value = formData.get("locale");
  return isLocale(value) ? value : routing.defaultLocale;
}

function text(formData: FormData, name: string): string {
  const value = formData.get(name);
  return typeof value === "string" ? value : "";
}

/** URL that Supabase email links come back to. */
async function callbackUrl(nextPath: string) {
  return `${await getOrigin()}/auth/callback?next=${encodeURIComponent(nextPath)}`;
}

export async function signIn(_prev: FormState, formData: FormData): Promise<FormState> {
  const locale = readLocale(formData);
  const values = { email: text(formData, "email") };
  const parsed = signInSchema.safeParse({ email: values.email, password: text(formData, "password") });
  if (!parsed.success) {
    return { status: "error", fieldErrors: fieldErrors(parsed.error), values };
  }

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword(parsed.data);
  if (error || !data.user) {
    return { status: "error", formError: authErrorKey(error?.code), values };
  }

  // Open the app in the language saved in the profile.
  const { data: profile } = await supabase
    .from("profiles")
    .select("locale")
    .eq("id", data.user.id)
    .maybeSingle();
  const targetLocale = isLocale(profile?.locale) ? profile.locale : locale;

  const next = stripLocalePrefix(safeNextPath(text(formData, "next"), "/dashboard"));
  return redirect({ href: next === "/" ? "/dashboard" : next, locale: targetLocale });
}

export async function signUp(_prev: FormState, formData: FormData): Promise<FormState> {
  const locale = readLocale(formData);
  // Sign-up from a class invite link: always a student.
  const invite = text(formData, "invite");
  const values = {
    fullName: text(formData, "fullName"),
    email: text(formData, "email"),
    role: invite ? "student" : text(formData, "role"),
  };
  const parsed = signUpSchema.safeParse({
    ...values,
    password: text(formData, "password"),
    timezone: text(formData, "timezone"),
  });
  if (!parsed.success) {
    return { status: "error", fieldErrors: fieldErrors(parsed.error), values };
  }

  const { email, password, fullName, role, timezone } = parsed.data;
  const supabase = await createClient();
  const afterSignUp = invite ? `/${locale}/join/${encodeURIComponent(invite)}` : `/${locale}/dashboard`;
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: await callbackUrl(afterSignUp),
      // Read by the database trigger that creates the profile.
      data: { full_name: fullName, role, locale, timezone },
    },
  });
  if (error) {
    return { status: "error", formError: authErrorKey(error.code), values };
  }

  // Email confirmation is off: the user is signed in right away.
  if (data.session && data.user) {
    if (invite) {
      const joined = await joinByInvite(data.user.id, invite);
      // On failure the invite page explains what went wrong.
      return redirect({
        href: joined.ok ? `/classes/${joined.classId}` : `/join/${encodeURIComponent(invite)}`,
        locale,
      });
    }
    return redirect({ href: "/dashboard", locale });
  }

  // Same answer whether or not the email was already registered,
  // so nobody can probe which emails have accounts.
  return { status: "success", values: { email } };
}

export async function requestPasswordReset(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const locale = readLocale(formData);
  const values = { email: text(formData, "email") };
  const parsed = forgotPasswordSchema.safeParse(values);
  if (!parsed.success) {
    return { status: "error", fieldErrors: fieldErrors(parsed.error), values };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.resetPasswordForEmail(parsed.data.email, {
    redirectTo: await callbackUrl(`/${locale}/reset-password`),
  });
  if (error && authErrorKey(error.code) === "rateLimited") {
    return { status: "error", formError: "rateLimited", values };
  }
  return { status: "success", values: { email: parsed.data.email } };
}

export async function updatePassword(_prev: FormState, formData: FormData): Promise<FormState> {
  const locale = readLocale(formData);
  const parsed = resetPasswordSchema.safeParse({
    password: text(formData, "password"),
    confirm: text(formData, "confirm"),
  });
  if (!parsed.success) {
    return { status: "error", fieldErrors: fieldErrors(parsed.error) };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.updateUser({ password: parsed.data.password });
  if (error) {
    return { status: "error", formError: authErrorKey(error.code) };
  }
  return redirect({ href: "/dashboard", locale });
}

export async function signOut(formData: FormData) {
  const locale = readLocale(formData);
  const supabase = await createClient();
  await supabase.auth.signOut();
  // e.g. a teacher on a class invite page signs out to sign up as a student.
  const next = stripLocalePrefix(safeNextPath(text(formData, "next"), "/"));
  return redirect({ href: next, locale });
}

/** Onboarding: the user picks a role once (used after Google sign-up). */
export async function chooseRole(_prev: FormState, formData: FormData): Promise<FormState> {
  const locale = readLocale(formData);
  const role = roleSchema.safeParse(formData.get("role"));
  if (!role.success) {
    return { status: "error", fieldErrors: { role: "roleRequired" } };
  }

  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) {
    return redirect({ href: "/login", locale });
  }

  // RLS + a database trigger make sure the role can only be set while it is empty.
  const { data: updated, error } = await supabase
    .from("profiles")
    .update({ role: role.data, locale: localeSchema.parse(locale) })
    .eq("id", auth.user.id)
    .is("role", null)
    .select("id");
  if (error) {
    return { status: "error", formError: "generic" };
  }
  if (!updated?.length) {
    // Either the role was already chosen (fine) or the profile row is missing.
    const { data: existing } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", auth.user.id)
      .maybeSingle();
    if (!existing?.role) return { status: "error", formError: "generic" };
  }
  return redirect({ href: "/dashboard", locale });
}
