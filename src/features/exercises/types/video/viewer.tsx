"use client";

import { useTranslations } from "next-intl";
import type { ExerciseViewerProps } from "../../client-types";
import { Caption } from "../../caption-input";
import { videoEmbedUrl, type VideoContent, type VideoRef } from "./schema";

export function VideoFrame({ video, title }: { video: VideoRef; title: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border bg-black">
      <iframe
        src={videoEmbedUrl(video)}
        title={title}
        className="absolute inset-0 size-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}

export function VideoViewer({ content }: ExerciseViewerProps<VideoContent>) {
  const t = useTranslations("exercises.types.video");
  if (!content.video) return null;
  return (
    <div className="flex flex-col gap-2">
      <VideoFrame video={content.video} title={content.caption || t("name")} />
      <Caption text={content.caption} />
    </div>
  );
}
