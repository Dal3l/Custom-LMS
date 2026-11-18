import "server-only";

// Google's Gemini through its OpenAI-style address (the key goes in the
// usual "Authorization: Bearer" header). Free tier: limited requests per day,
// and Google may use what is sent to improve its products — only words and
// lesson sentences are sent, never personal data.
const URL = "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions";
const MODEL = process.env.GEMINI_MODEL || "gemini-3.1-flash-lite";

type Message = { role: "system" | "user"; content: string };

/** True when a Gemini key is set (otherwise the free service is used). */
export const hasGemini = () => Boolean(process.env.GEMINI_API_KEY);

/**
 * Asks Gemini for a JSON answer following `schema`; its text, or null on any
 * problem (no key, the daily limit, an error, too slow).
 */
export async function askGemini(messages: Message[], schema: object, timeoutMs = 12_000): Promise<string | null> {
  const key = process.env.GEMINI_API_KEY;
  if (!key) return null;
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: MODEL,
        temperature: 0,
        messages,
        response_format: { type: "json_schema", json_schema: { name: "answer", schema } },
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(timeoutMs),
    });
    if (!response.ok) return null;
    const data = (await response.json()) as { choices?: { message?: { content?: string } }[] };
    return data.choices?.[0]?.message?.content ?? null;
  } catch {
    return null;
  }
}
