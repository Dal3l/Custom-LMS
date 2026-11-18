import { createHash } from "node:crypto";
import { after, NextResponse, type NextRequest } from "next/server";
import {
  cleanVariants,
  isTranslatable,
  normalizeTerm,
  parseAiTranslation,
  parseTranslation,
  translationPrompt,
  usableContext,
} from "@/features/vocabulary/translate";
import { getUser } from "@/lib/auth";
import { askGemini, hasGemini } from "@/lib/gemini";
import { createAdminClient } from "@/lib/supabase/admin";

const LANG = /^[a-z]{2,3}$/;
/** How long the popup waits for the AI before showing the free service's answer. */
const AI_WAIT = 4000;
const SCHEMA = {
  type: "object",
  properties: { variants: { type: "array", items: { type: "string" } } },
  required: ["variants"],
};

type Db = ReturnType<typeof createAdminClient>;

/** The AI's variants (cleaned), or null. */
async function aiVariants(term: string, from: string, to: string, sentence: string | null): Promise<string[] | null> {
  const content = await askGemini(translationPrompt(term, from, to, sentence), SCHEMA);
  const parsed = content ? parseAiTranslation(content) : null;
  const variants = parsed && cleanVariants(parsed, term, to);
  return variants?.length ? variants : null;
}

/** The free service's variants (cleaned): [] = not found, null = refused or unreachable. */
async function freeVariants(term: string, from: string, to: string): Promise<string[] | null> {
  const url = new URL("https://api.mymemory.translated.net/get");
  url.searchParams.set("q", term);
  url.searchParams.set("langpair", `${from}|${to}`);
  const email = process.env.MYMEMORY_EMAIL;
  if (email) url.searchParams.set("de", email);
  try {
    const response = await fetch(url, { cache: "no-store", signal: AbortSignal.timeout(6000) });
    const parsed = response.ok ? parseTranslation(await response.json(), term) : null;
    return parsed && cleanVariants(parsed, term, to);
  } catch {
    return null;
  }
}

/**
 * Remembers the AI's answer: for this sentence, or (asked without one) as the
 * word's general translation. A sentence's answer is never the general one:
 * "bank" by a river is not "bank" in general.
 */
async function rememberAi(db: Db, term: string, from: string, to: string, variants: string[], contextKey: string | null) {
  if (contextKey) {
    await db.from("context_translations").upsert({ source_lang: from, target_lang: to, term, context_key: contextKey, variants });
  } else {
    await db.from("translations").upsert({ source_lang: from, target_lang: to, term, variants, by_ai: true });
  }
}

// Translation of a word selected in a lesson, with the sentence it stands in
// (optional). Signed-in users only (not an open proxy). Each answer is
// remembered in the database for everyone, so a word is asked once.
//
// Order: a remembered answer → the AI (Gemini), given a few seconds → the
// free service. When the AI is slow, the free answer is shown and the AI's
// one is still saved for next time.
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
  const sentence = usableContext(params.get("context"), term);
  const contextKey = sentence ? createHash("sha256").update(sentence.toLocaleLowerCase()).digest("hex") : null;
  const ai = hasGemini();
  const db = createAdminClient();
  const answer = (variants: string[]) => NextResponse.json({ ok: true, variants });

  const [{ data: known }, { data: inSentence }] = await Promise.all([
    db.from("translations").select("variants, by_ai").eq("source_lang", from).eq("target_lang", to).eq("term", term).maybeSingle(),
    contextKey && ai
      ? db
          .from("context_translations")
          .select("variants")
          .eq("source_lang", from)
          .eq("target_lang", to)
          .eq("term", term)
          .eq("context_key", contextKey)
          .maybeSingle()
      : Promise.resolve({ data: null }),
  ]);
  if (inSentence) return answer(cleanVariants(inSentence.variants, term, to));
  // Without a sentence (or without the AI), a remembered answer is enough.
  if (known && (known.by_ai || !ai || !sentence)) {
    if (ai && !known.by_ai) {
      // An old answer of the free service: ask the AI for a better one, for next time.
      after(async () => {
        const better = await aiVariants(term, from, to, null);
        if (better) await rememberAi(db, term, from, to, better, null);
      });
    }
    return answer(cleanVariants(known.variants, term, to));
  }

  if (ai) {
    const asking = aiVariants(term, from, to, sentence);
    const quick = await Promise.race([asking, new Promise<"slow">((resolve) => setTimeout(() => resolve("slow"), AI_WAIT))]);
    if (quick !== "slow" && quick) {
      after(() => rememberAi(db, term, from, to, quick, contextKey));
      return answer(quick);
    }
    if (quick === "slow") {
      // Slow: show a remembered or the free service's answer now, and save the
      // AI's one when it comes. Without either, keep waiting for the AI.
      after(async () => {
        const late = await asking;
        if (late) await rememberAi(db, term, from, to, late, contextKey);
      });
      if (known) return answer(cleanVariants(known.variants, term, to));
      const free = await freeVariants(term, from, to);
      if (free?.length) {
        await db.from("translations").upsert({ source_lang: from, target_lang: to, term, variants: free });
        return answer(free);
      }
      const late = await asking;
      if (late) return answer(late);
      if (free) return answer([]);
      return NextResponse.json({ ok: false, error: "unavailable" }, { status: 503 });
    }
    if (known) return answer(cleanVariants(known.variants, term, to));
  }

  const variants = await freeVariants(term, from, to);
  // Refused (limit) or unreachable: an empty answer, typed in by hand.
  if (!variants) return NextResponse.json({ ok: false, error: "unavailable" }, { status: 503 });
  if (variants.length && !known) await db.from("translations").upsert({ source_lang: from, target_lang: to, term, variants });
  return answer(variants);
}
