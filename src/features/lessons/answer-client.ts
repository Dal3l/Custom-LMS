import type { SaveAnswerRequest, SaveAnswerResponse } from "./answers";

/** Saves (and optionally checks) a student's answer in a class lesson — browser side. */
export async function requestSaveAnswer(body: SaveAnswerRequest): Promise<SaveAnswerResponse> {
  try {
    const res = await fetch("/api/answers", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    });
    return (await res.json()) as SaveAnswerResponse;
  } catch {
    return { ok: false, error: "generic" };
  }
}
