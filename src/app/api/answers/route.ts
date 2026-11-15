import { NextResponse, type NextRequest } from "next/server";
import { saveHomeworkAnswer } from "@/features/homework/answers";
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
  // A homework answer carries the homework id; otherwise it is a class lesson answer.
  const isHomework = typeof body === "object" && body !== null && "homeworkId" in body;
  const response = isHomework ? await saveHomeworkAnswer(body) : await saveClassAnswer(body);
  const status = response.ok ? 200 : response.error === "forbidden" || response.error === "submitted" ? 403 : response.error === "invalid" ? 400 : 500;
  return NextResponse.json(response, { status, headers: { "Cache-Control": "no-store" } });
}
