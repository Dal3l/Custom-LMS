import { NextResponse, type NextRequest } from "next/server";
import { saveClassAnswer } from "@/features/lessons/answers";

// Saves a student's answer in a class lesson (and checks it when asked).
// A plain endpoint so that saves of different exercises run at the same time.
export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }
  const response = await saveClassAnswer(body);
  const status = response.ok ? 200 : response.error === "forbidden" ? 403 : response.error === "invalid" ? 400 : 500;
  return NextResponse.json(response, { status, headers: { "Cache-Control": "no-store" } });
}
