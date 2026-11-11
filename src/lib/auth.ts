import "server-only";
import { cache } from "react";
import { redirect } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { createClient } from "@/lib/supabase/server";
import type { Profile, UserRole } from "@/lib/supabase/database.types";

export type SessionUser = { id: string; email: string | null };

/**
 * The signed-in user, or null. Cached per request.
 * Uses getClaims(): the project signs sessions with an asymmetric key, so the
 * signature is verified locally against Supabase's public key (fetched once and
 * cached) instead of asking the Auth server on every request.
 */
export const getUser = cache(async (): Promise<SessionUser | null> => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();
  const claims = data?.claims;
  if (error || !claims?.sub) return null;
  return { id: claims.sub, email: typeof claims.email === "string" ? claims.email : null };
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
