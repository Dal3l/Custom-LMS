import { NextResponse, type NextRequest } from "next/server";
import { gradeExercise } from "@/features/lessons/grade";

// Answer checking. A plain endpoint (not a Server Action) so that several checks
// can run at the same time instead of waiting in a queue.
export async function POST(request: NextRequest) {
  const started = performance.now();
  let body: { exerciseId?: unknown; answer?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }
  const response = await gradeExercise(body.exerciseId, body.answer);
  const status = response.ok ? 200 : response.error === "forbidden" ? 403 : response.error === "invalid" ? 400 : 500;
  return NextResponse.json(response, {
    status,
    headers: {
      "Cache-Control": "no-store",
      // Lets us see in the browser how long the server itself took.
      "Server-Timing": `check;dur=${Math.round(performance.now() - started)}`,
    },
  });
}
