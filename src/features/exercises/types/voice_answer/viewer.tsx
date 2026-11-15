"use client";

import { Loader2, Mic, RotateCcw, Square } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { useAnswerPlace } from "../../answer-context";
import type { ExerciseViewerProps } from "../../client-types";
import { ANSWER_BUCKET, audioExtension, VOICE_MAX_BYTES, type VoiceAnswerAnswer, type VoiceAnswerContent } from "./schema";

const TYPES = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4", "audio/ogg;codecs=opus", "audio/ogg"];

function pickType(): string | undefined {
  if (typeof MediaRecorder === "undefined") return undefined;
  return TYPES.find((t) => MediaRecorder.isTypeSupported?.(t)) ?? "";
}

/** A link to listen to a saved recording (the bucket is private: links last an hour). */
function useRecordingUrl(path: string | undefined) {
  const [url, setUrl] = useState<{ path: string; url: string } | null>(null);
  useEffect(() => {
    if (!path) return;
    let cancelled = false;
    void createClient()
      .storage.from(ANSWER_BUCKET)
      .createSignedUrl(path, 3600)
      .then(({ data }) => {
        if (!cancelled && data?.signedUrl) setUrl({ path, url: data.signedUrl });
      });
    return () => {
      cancelled = true;
    };
  }, [path]);
  return url && url.path === path ? url.url : null;
}

const mmss = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

/**
 * The student records an answer in the browser, listens to it and may record
 * again. In a class the recording is saved; the teacher listens to it.
 */
export function VoiceAnswerViewer({ content, answer, onAnswer }: ExerciseViewerProps<VoiceAnswerContent, VoiceAnswerAnswer>) {
  const t = useTranslations("exercises.voiceAnswer");
  const place = useAnswerPlace();
  const saved = answer?.file ?? null;
  const savedUrl = useRecordingUrl(saved?.path);
  const [localUrl, setLocalUrl] = useState<string | null>(null);
  const [state, setState] = useState<"idle" | "recording" | "uploading">("idle");
  const [seconds, setSeconds] = useState(0);
  const recorder = useRef<MediaRecorder | null>(null);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const length = useRef(0);

  useEffect(
    () => () => {
      if (timer.current) clearInterval(timer.current);
      recorder.current?.stream.getTracks().forEach((track) => track.stop());
    },
    [],
  );

  const url = localUrl ?? savedUrl;

  if (!onAnswer) {
    // The teacher's view.
    if (!saved) return <p className="text-sm text-muted-foreground">{t("noRecording")}</p>;
    return url ? (
      <audio controls src={url} className="w-full" aria-label={t("recording")} />
    ) : (
      <Loader2 className="size-5 animate-spin text-muted-foreground" aria-label={t("loading")} />
    );
  }

  async function start() {
    const type = pickType();
    if (type === undefined || !navigator.mediaDevices?.getUserMedia) {
      toast.error(t("notSupported"));
      return;
    }
    let stream: MediaStream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      toast.error(t("noMicrophone"));
      return;
    }
    const rec = new MediaRecorder(stream, type ? { mimeType: type } : undefined);
    const chunks: Blob[] = [];
    rec.ondataavailable = (e) => e.data.size && chunks.push(e.data);
    rec.onstop = () => {
      stream.getTracks().forEach((track) => track.stop());
      const mime = (rec.mimeType || type || "audio/webm").split(";")[0]!;
      void finish(new Blob(chunks, { type: mime }), mime);
    };
    recorder.current = rec;
    setSeconds(0);
    length.current = 0;
    const startedAt = Date.now();
    timer.current = setInterval(() => {
      const s = (Date.now() - startedAt) / 1000;
      length.current = s;
      setSeconds(s);
      if (s >= content.maxSeconds) stop();
    }, 250);
    rec.start();
    setState("recording");
  }

  function stop() {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
    if (recorder.current?.state === "recording") recorder.current.stop();
  }

  async function finish(blob: Blob, mime: string) {
    const recorded = Math.min(length.current, content.maxSeconds);
    if (localUrl) URL.revokeObjectURL(localUrl);
    setLocalUrl(URL.createObjectURL(blob));
    if (!place) return setState("idle"); // preview: kept on this device only
    if (blob.size > VOICE_MAX_BYTES) {
      toast.error(t("tooLong"));
      return setState("idle");
    }
    setState("uploading");
    const path = `${place.classId}/${place.userId}/${crypto.randomUUID()}.${audioExtension(mime)}`;
    const supabase = createClient();
    const { error } = await supabase.storage.from(ANSWER_BUCKET).upload(path, blob, { contentType: mime });
    setState("idle");
    if (error) {
      toast.error(t("uploadFailed"));
      return;
    }
    // The previous recording is no longer needed.
    if (saved) void supabase.storage.from(ANSWER_BUCKET).remove([saved.path]).then(undefined, () => undefined);
    onAnswer?.({ file: { path, mime, size: blob.size, seconds: Math.round(recorded * 10) / 10 } }, { check: false });
  }

  return (
    <div className="flex flex-col gap-3">
      {state === "recording" ? (
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2 font-medium text-destructive" role="status">
            <span className="size-3 animate-pulse rounded-full bg-destructive" aria-hidden="true" />
            {t("recordingNow")} {mmss(seconds)} / {mmss(content.maxSeconds)}
          </span>
          <Button type="button" variant="outline" onClick={stop}>
            <Square aria-hidden="true" />
            {t("stop")}
          </Button>
        </div>
      ) : (
        <div className="flex flex-wrap items-center gap-2">
          <Button type="button" variant={url ? "outline" : "default"} onClick={() => void start()} disabled={state === "uploading"}>
            {state === "uploading" ? (
              <Loader2 className="animate-spin" aria-hidden="true" />
            ) : url ? (
              <RotateCcw aria-hidden="true" />
            ) : (
              <Mic aria-hidden="true" />
            )}
            {state === "uploading" ? t("saving") : url ? t("recordAgain") : t("record")}
          </Button>
          <span className="text-sm text-muted-foreground">{t("limit", { time: mmss(content.maxSeconds) })}</span>
        </div>
      )}
      {url && state !== "recording" && <audio controls src={url} className="w-full" aria-label={t("recording")} />}
    </div>
  );
}
