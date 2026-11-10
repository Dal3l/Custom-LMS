import "server-only";
import { redirect } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getUser } from "@/lib/auth";

/** Signed-in users don't need login/sign-up pages: send them to the app. */
export async function redirectIfSignedIn(locale: Locale) {
  if (await getUser()) {
    redirect({ href: "/dashboard", locale });
  }
}
