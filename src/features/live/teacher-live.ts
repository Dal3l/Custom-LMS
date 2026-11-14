"use client";

import type { RealtimeChannel } from "@supabase/supabase-js";
import { useCallback, useEffect, useRef, useState } from "react";
import { fetchLessonAnswers } from "@/features/classes/lesson-actions";
import { toSavedAnswer, type StudentAnswers } from "@/features/lessons/answers-shared";
import { createClient } from "@/lib/supabase/client";
import { classTopic, combineStatus, onlineStudents, type LiveStatus, type ShowMessage, type StudentPresence } from "./types";

/**
 * The teacher's side of a live lesson: students' answers as they type (saved
 * answers are pushed by the database), who is online and where, and
 * "Show to students". Reloads the answers after a lost connection.
 */
export function useTeacherLive({
  classId,
  lessonId,
  teacherId,
  initialAnswers,
}: {
  classId: string;
  lessonId: string;
  teacherId: string;
  initialAnswers: StudentAnswers;
}) {
  const [supabase] = useState(() => createClient());
  const [answers, setAnswers] = useState(initialAnswers);
  const [online, setOnline] = useState<Map<string, StudentPresence>>(new Map());
  const [status, setStatus] = useState<LiveStatus>("connecting");
  const channel = useRef<RealtimeChannel | null>(null);

  useEffect(() => {
    const states = new Map<string, LiveStatus>();
    let wasOffline = false;
    const update = (key: string, s: LiveStatus) => {
      states.set(key, s);
      const all = combineStatus([...states.values()]);
      setStatus(all);
      if (all === "offline") wasOffline = true;
      if (all === "online" && wasOffline) {
        wasOffline = false;
        void fetchLessonAnswers(classId, lessonId).then((r) => r.ok && setAnswers(r.data));
      }
    };
    const toStatus = (s: string): LiveStatus =>
      s === "SUBSCRIBED" ? "online" : s === "CHANNEL_ERROR" || s === "TIMED_OUT" || s === "CLOSED" ? "offline" : "connecting";

    let cancelled = false;
    const created: RealtimeChannel[] = [];
    void (async () => {
      await supabase.realtime.setAuth();
      if (cancelled) return;
      const room = supabase.channel(classTopic(classId), { config: { private: true, presence: { key: teacherId } } });
      room.on("presence", { event: "sync" }, () => setOnline(onlineStudents(room.presenceState())));
      room.subscribe((s) => update("room", toStatus(s)));
      channel.current = room;
      created.push(room);

      const feed = supabase
        .channel(`answers:${classId}:${lessonId}`)
        .on(
          "postgres_changes",
          { event: "*", schema: "public", table: "class_answers", filter: `class_id=eq.${classId}` },
          (change) => {
            const row = change.new as {
              lesson_id?: string;
              student_id?: string;
              exercise_id?: string;
              answer?: unknown;
              checked_answer?: unknown;
              result?: unknown;
            };
            if (row?.lesson_id !== lessonId || !row.student_id || !row.exercise_id) return;
            const saved = toSavedAnswer({ answer: row.answer, checked_answer: row.checked_answer, result: row.result });
            setAnswers((prev) => ({
              ...prev,
              [row.student_id!]: { ...prev[row.student_id!], [row.exercise_id!]: saved },
            }));
          },
        )
        .subscribe((s) => update("feed", toStatus(s)));
      created.push(feed);
    })();

    const offline = () => update("browser", "offline");
    const online = () => update("browser", "online");
    window.addEventListener("offline", offline);
    window.addEventListener("online", online);
    // Back to the tab after a while (laptop slept, other app): fetch the answers again.
    let hiddenAt = 0;
    const visibility = () => {
      if (document.visibilityState === "hidden") hiddenAt = Date.now();
      else if (hiddenAt && Date.now() - hiddenAt > 20_000) {
        void fetchLessonAnswers(classId, lessonId).then((r) => r.ok && setAnswers(r.data));
      }
    };
    document.addEventListener("visibilitychange", visibility);
    return () => {
      document.removeEventListener("visibilitychange", visibility);
      cancelled = true;
      window.removeEventListener("offline", offline);
      window.removeEventListener("online", online);
      created.forEach((c) => void supabase.removeChannel(c));
      channel.current = null;
    };
  }, [supabase, classId, lessonId, teacherId]);

  // The pointer is sent at most ~15 times a second.
  const lastPointer = useRef(0);
  const sendPointer = useCallback(
    (pointer: { exerciseId: string; x: number; y: number } | null) => {
      const room = channel.current;
      if (!room || room.state !== "joined") return;
      const now = Date.now();
      if (pointer && now - lastPointer.current < 66) return;
      lastPointer.current = now;
      void room.send({
        type: "broadcast",
        event: "pointer",
        payload: pointer ? { ...pointer, lessonId } : { lessonId, hide: true },
      });
    },
    [lessonId],
  );

  /** After "Reset answers": clear them here and on the students' screens. */
  const resetExercise = useCallback(
    (exerciseId: string) => {
      setAnswers((prev) =>
        Object.fromEntries(
          Object.entries(prev).map(([student, byExercise]) => {
            const rest = { ...byExercise };
            delete rest[exerciseId];
            return [student, rest];
          }),
        ),
      );
      void channel.current?.send({ type: "broadcast", event: "reset", payload: { lessonId, exerciseId } });
    },
    [lessonId],
  );

  const show = useCallback(
    async (message: Omit<ShowMessage, "lessonId">) => {
      const room = channel.current;
      if (!room) return false;
      const r = await room.send({ type: "broadcast", event: "show", payload: { ...message, lessonId } });
      return r === "ok";
    },
    [lessonId],
  );

  return { answers, online, status, show, sendPointer, resetExercise };
}
