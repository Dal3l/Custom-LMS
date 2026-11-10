"use server";

import { redirect } from "@/i18n/navigation";
import { getLocale } from "next-intl/server";
import { createClient } from "@/lib/supabase/server";
import { fieldErrors, localeSchema, profileSchema } from "@/lib/validation/auth";
import type { FormState } from "@/features/auth/errors";

export async function updateProfile(_prev: FormState, formData: FormData): Promise<FormState> {
  const values = {
    fullName: String(formData.get("fullName") ?? ""),
    timezone: String(formData.get("timezone") ?? ""),
  };
  const parsed = profileSchema.safeParse(values);
  if (!parsed.success) {
    return { status: "error", fieldErrors: fieldErrors(parsed.error), values };
  }

  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) {
    return redirect({ href: "/login", locale: await getLocale() });
  }

  const { fullName, timezone } = parsed.data;
  const { error } = await supabase
    .from("profiles")
    .update({ full_name: fullName, timezone })
    .eq("id", auth.user.id);
  if (error) {
    return { status: "error", formError: "generic", values };
  }
  return { status: "success", values };
}

/**
 * Saves the interface language chosen in the language switcher (signed-in users only).
 * The profile stores it so the next login opens in the same language.
 */
export async function saveLocale(locale: string): Promise<void> {
  const parsed = localeSchema.safeParse(locale);
  if (!parsed.success) return;
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return;
  await supabase.from("profiles").update({ locale: parsed.data }).eq("id", auth.user.id);
}
