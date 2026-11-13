import type { CheckResponse } from "./grade";

/** Sends an answer to the server for checking (browser side). */
export async function requestCheck(exerciseId: string, answer: unknown, signal?: AbortSignal): Promise<CheckResponse> {
  try {
    const res = await fetch("/api/check", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ exerciseId, answer }),
      signal,
    });
    return (await res.json()) as CheckResponse;
  } catch {
    return { ok: false, error: "generic" };
  }
}
