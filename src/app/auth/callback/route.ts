import type { EmailOtpType } from "@supabase/supabase-js";
import { NextResponse, type NextRequest } from "next/server";
import { callbackTargets } from "@/features/auth/callback";
import { createClient } from "@/lib/supabase/server";

const OTP_TYPES: readonly string[] = ["signup", "email", "recovery", "invite", "magiclink", "email_change"];

/**
 * Google sign-in and email links come back here.
 * - `?code=…`                    Google, and email links with Supabase's default templates
 *                                (works only in the browser where the user signed up).
 * - `?token_hash=…&type=…`       email links with our templates (README) — work on any device.
 */
export async function GET(request: NextRequest) {
  const { searchParams, origin } = request.nextUrl;
  const { next, errorPath } = callbackTargets(searchParams.get("next"));
  const code = searchParams.get("code");
  const tokenHash = searchParams.get("token_hash");
  const type = searchParams.get("type");

  const supabase = await createClient();
  let ok = false;
  if (tokenHash && type && OTP_TYPES.includes(type)) {
    const { error } = await supabase.auth.verifyOtp({ type: type as EmailOtpType, token_hash: tokenHash });
    ok = !error;
  } else if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    ok = !error;
  }

  return NextResponse.redirect(new URL(ok ? next : errorPath, origin));
}
