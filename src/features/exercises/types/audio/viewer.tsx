"use client";

import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import type { ExerciseViewerProps } from "../../client-types";
import { Caption } from "../../caption-input";
import { mediaUrl, type MediaFile } from "../../media";
import { PLAYBACK_RATES, type AudioContent } from "./schema";

/** Browser audio player (play, seek, volume) plus speed buttons. */
export function AudioPlayer({ file }: { file: MediaFile }) {
  const t = useTranslations("exercises.audio");
  const audio = useRef<HTMLAudioElement>(null);
  const [rate, setRate] = useState<number>(1);

  function choose(next: number) {
    setRate(next);
    if (audio.current) audio.current.playbackRate = next;
  }

  return (
    <div className="flex flex-col gap-2 rounded-xl border bg-muted/40 p-2 sm:flex-row sm:items-center">
      <audio
        ref={audio}
        controls
        preload="metadata"
        src={mediaUrl(file.path)}
        // Grows sideways only next to the speed buttons; stacked on phones it keeps its height.
        className="h-12 w-full min-w-0 sm:flex-1"
        aria-label={file.name}
        onLoadedMetadata={(e) => (e.currentTarget.playbackRate = rate)}
      />
      <div className="flex shrink-0 gap-1 self-end sm:self-auto" role="group" aria-label={t("speed")}>
        {PLAYBACK_RATES.map((r) => (
          <Button
            key={r}
            type="button"
            size="sm"
            variant={r === rate ? "default" : "ghost"}
            aria-pressed={r === rate}
            onClick={() => choose(r)}
            className="tabular-nums"
          >
            {r}×
          </Button>
        ))}
      </div>
    </div>
  );
}

export function AudioViewer({ content }: ExerciseViewerProps<AudioContent>) {
  if (!content.file) return null;
  return (
    <div className="flex flex-col gap-2">
      <AudioPlayer file={content.file} />
      <Caption text={content.caption} />
    </div>
  );
}
