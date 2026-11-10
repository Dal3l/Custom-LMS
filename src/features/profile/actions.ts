"use server";

import { redirect } from "@/i18n/navigation";
import { isLocale, routing } from "@/i18n/routing";
import { createClient } from "@/lib/supabase/server";
import { fieldErrors, localeSchema, profileSchema } from "@/lib/validation/auth";
import type { FormState } from "@/features/auth/errors";

export async function updateProfile(_prev: FormState, formData: FormData): Promise<FormState> {
  const rawLocale = formData.get("currentLocale");
  const currentLocale = isLocale(rawLocale) ? rawLocale : routing.defaultLocale;
  const values = {
    fullName: String(formData.get("fullName") ?? ""),
    locale: String(formData.get("locale") ?? ""),
    timezone: String(formData.get("timezone") ?? ""),
  };
  const parsed = profileSchema.safeParse(values);
  if (!parsed.success) {
    return { status: "error", fieldErrors: fieldErrors(parsed.error), values };
  }

  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) {
    return redirect({ href: "/login", locale: currentLocale });
  }

  const { fullName, locale, timezone } = parsed.data;
  const { error } = await supabase
    .from("profiles")
    .update({ full_name: fullName, locale, timezone })
    .eq("id", auth.user.id);
  if (error) {
    return { status: "error", formError: "generic", values };
  }

  if (locale !== currentLocale) {
    // Reopen the profile page in the newly chosen language.
    return redirect({ href: "/profile?saved=1", locale });
  }
  return { status: "success", values };
}

/** Saves the interface language chosen in the language switcher (signed-in users only). */
export async function saveLocale(locale: string): Promise<void> {
  const parsed = localeSchema.safeParse(locale);
  if (!parsed.success) return;
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return;
  await supabase.from("profiles").update({ locale: parsed.data }).eq("id", auth.user.id);
}
