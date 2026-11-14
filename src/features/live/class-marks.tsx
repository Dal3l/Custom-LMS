"use client";

import type { RealtimeChannel } from "@supabase/supabase-js";
import { useEffect, useMemo, useRef, useState } from "react";
import type { ClassMark } from "@/features/classes/lesson-queries";
import { SharedMarksContext, type SharedMarks } from "@/features/exercises/types/text/marks";
import { STUDENT_COLOR, TEACHER_COLOR, type Range } from "@/features/exercises/types/text/student-highlights";
import { createClient } from "@/lib/supabase/client";

const keyOf = (exerciseId: string, userId: string) => `${exerciseId}:${userId}`;

/**
 * Highlights in texts, shared in a class lesson: mine are saved (and seen by the
 * other side), the other person's arrive live. The teacher's "other" is the
 * student they are looking at; a student's "other" is the teacher.
 */
export function ClassMarksProvider({
  classId,
  userId,
  otherUserId,
  isTeacher,
  initial,
  children,
}: {
  classId: string;
  userId: string;
  otherUserId: string | null;
  isTeacher: boolean;
  initial: ClassMark[];
  children: React.ReactNode;
}) {
  const [supabase] = useState(() => createClient());
  const [marks, setMarks] = useState(() => new Map(initial.map((m) => [keyOf(m.exerciseId, m.userId), m.ranges])));
  const timers = useRef(new Map<string, ReturnType<typeof setTimeout>>());

  useEffect(() => {
    let channel: RealtimeChannel | null = null;
    let cancelled = false;
    void (async () => {
      await supabase.realtime.setAuth();
      if (cancelled) return;
      channel = supabase
        .channel(`marks:${classId}:${userId}`)
        .on(
          "postgres_changes",
          { event: "*", schema: "public", table: "class_marks", filter: `class_id=eq.${classId}` },
          (change) => {
            const row = change.new as { exercise_id?: string; user_id?: string; ranges?: unknown };
            // My own rows are already up to date here.
            if (!row?.exercise_id || !row.user_id || row.user_id === userId) return;
            setMarks((prev) => new Map(prev).set(keyOf(row.exercise_id!, row.user_id!), row.ranges));
          },
        )
        .subscribe();
    })();
    const pending = timers.current;
    return () => {
      cancelled = true;
      if (channel) void supabase.removeChannel(channel);
      pending.forEach((t) => clearTimeout(t));
    };
  }, [supabase, classId, userId]);

  const value = useMemo<SharedMarks>(
    () => ({
      ownColor: isTeacher ? TEACHER_COLOR : STUDENT_COLOR,
      otherColor: isTeacher ? STUDENT_COLOR : TEACHER_COLOR,
      own: (exerciseId) => marks.get(keyOf(exerciseId, userId)) ?? [],
      other: (exerciseId) => (otherUserId ? (marks.get(keyOf(exerciseId, otherUserId)) ?? []) : []),
      save: (exerciseId: string, ranges: Range[]) => {
        setMarks((prev) => new Map(prev).set(keyOf(exerciseId, userId), ranges));
        const key = keyOf(exerciseId, userId);
        const old = timers.current.get(key);
        if (old) clearTimeout(old);
        timers.current.set(
          key,
          setTimeout(function run(attempt = 0) {
            timers.current.delete(key);
            void (async () => {
              // Update first; the first highlight in this exercise creates the row.
              const updated = await supabase
                .from("class_marks")
                .update({ ranges })
                .eq("class_id", classId)
                .eq("exercise_id", exerciseId)
                .eq("user_id", userId)
                .select("exercise_id");
              let failed = Boolean(updated.error);
              if (!failed && !updated.data?.length) {
                const inserted = await supabase.from("class_marks").insert({ class_id: classId, exercise_id: exerciseId, ranges });
                failed = Boolean(inserted.error);
              }
              // No connection: try again a little later (unless a newer save replaced this one).
              if (failed && attempt < 5 && !timers.current.has(key)) {
                timers.current.set(key, setTimeout(() => run(attempt + 1), 3000));
              }
            })();
          }, 400),
        );
      },
    }),
    [marks, userId, otherUserId, isTeacher, supabase, classId],
  );

  return <SharedMarksContext.Provider value={value}>{children}</SharedMarksContext.Provider>;
}
