import { isLocale, routing } from "@/i18n/routing";
import { safeNextPath } from "@/lib/redirect";

/** Where to send the user after an email link / Google sign-in, and where on failure. */
export function callbackTargets(nextParam: string | null) {
  const next = safeNextPath(nextParam, `/${routing.defaultLocale}/dashboard`);
  const first = next.split(/[/?]/)[1];
  const locale = isLocale(first) ? first : routing.defaultLocale;
  return { next, errorPath: `/${locale}/login?error=link` };
}
