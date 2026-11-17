import { NextResponse, type NextRequest } from "next/server";
import { cleanVariants, isTranslatable, normalizeTerm, parseTranslation } from "@/features/vocabulary/translate";
import { getUser } from "@/lib/auth";
import { createAdminClient } from "@/lib/supabase/admin";

const LANG = /^[a-z]{2,3}$/;

// Translation of a word selected in a lesson. Signed-in users only (not an open
// proxy). A word is asked from the service once, then remembered in the
// database for everyone.
export async function GET(request: NextRequest) {
  if (!(await getUser())) return NextResponse.json({ ok: false }, { status: 401 });
  const params = request.nextUrl.searchParams;
  const raw = params.get("term") ?? "";
  const from = params.get("from") ?? "";
  const to = params.get("to") ?? "";
  if (!isTranslatable(raw) || !LANG.test(from) || !LANG.test(to) || from === to) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  const term = normalizeTerm(raw);
  const db = createAdminClient();

  const { data: known } = await db
    .from("translations")
    .select("variants")
    .eq("source_lang", from)
    .eq("target_lang", to)
    .eq("term", term)
    .maybeSingle();
  if (known) return NextResponse.json({ ok: true, variants: cleanVariants(known.variants, term, to) });

  const url = new URL("https://api.mymemory.translated.net/get");
  url.searchParams.set("q", term);
  url.searchParams.set("langpair", `${from}|${to}`);
  const email = process.env.MYMEMORY_EMAIL;
  if (email) url.searchParams.set("de", email);
  try {
    const response = await fetch(url, { cache: "no-store", signal: AbortSignal.timeout(6000) });
    const parsed = response.ok ? parseTranslation(await response.json(), term) : null;
    const variants = parsed && cleanVariants(parsed, term, to);
    // Refused (limit) or nothing found: an empty answer, typed in by hand.
    if (!variants) return NextResponse.json({ ok: false, error: "unavailable" }, { status: 503 });
    if (variants.length === 0) return NextResponse.json({ ok: true, variants: [] });
    await db.from("translations").upsert({ source_lang: from, target_lang: to, term, variants });
    return NextResponse.json({ ok: true, variants });
  } catch {
    return NextResponse.json({ ok: false, error: "unavailable" }, { status: 503 });
  }
}
