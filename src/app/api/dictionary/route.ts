import { NextResponse, type NextRequest } from "next/server";
import { canLookUp, parseLookup } from "@/features/vocabulary/lookup";
import { getUser } from "@/lib/auth";

// Transcription and pronunciation of an English word, for the word card.
// Signed-in users only (not an open proxy); answers are cached for a day.
export async function GET(request: NextRequest) {
  if (!(await getUser())) return NextResponse.json({ ok: false }, { status: 401 });
  const term = request.nextUrl.searchParams.get("term")?.trim() ?? "";
  const language = request.nextUrl.searchParams.get("lang") ?? "";
  if (!term || term.length > 100 || !canLookUp(language)) return NextResponse.json({ ok: false }, { status: 400 });
  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(term.toLowerCase())}`, {
      next: { revalidate: 86_400 },
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) return NextResponse.json({ ok: false }, { status: 404 });
    return NextResponse.json({ ok: true, ...parseLookup(await response.json()) });
  } catch {
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
