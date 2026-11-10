import "server-only";
import { cache } from "react";
import { redirect } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { createClient } from "@/lib/supabase/server";
import type { Profile, UserRole } from "@/lib/supabase/database.types";

/** The signed-in user (verified with Supabase Auth), or null. Cached per request. */
export const getUser = cache(async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user) return null;
  return data.user;
});

/** The signed-in user's profile, or null. Cached per request. */
export const getProfile = cache(async (): Promise<Profile | null> => {
  const user = await getUser();
  if (!user) return null;
  const supabase = await createClient();
  const { data } = await supabase.from("profiles").select("*").eq("id", user.id).maybeSingle();
  return data;
});

export type ProfileWithRole = Profile & { role: UserRole };

/**
 * For pages inside the app: sends guests to the login page and users
 * without a role to onboarding.
 */
export async function requireProfile(locale: Locale): Promise<ProfileWithRole> {
  if (!(await getUser())) {
    return redirect({ href: "/login", locale });
  }
  const profile = await getProfile();
  if (!profile?.role) {
    return redirect({ href: "/onboarding", locale });
  }
  return profile as ProfileWithRole;
}

/** Like requireProfile, but also checks the role. Others go to the dashboard. */
export async function requireRole(locale: Locale, role: UserRole): Promise<ProfileWithRole> {
  const profile = await requireProfile(locale);
  if (profile.role !== role) {
    return redirect({ href: "/dashboard", locale });
  }
  return profile;
}
