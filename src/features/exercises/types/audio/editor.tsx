"use client";

import { Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import type { ExerciseEditorProps } from "../../client-types";
import { CaptionInput } from "../../caption-input";
import { MediaDropzone } from "../../media-dropzone";
import type { AudioContent } from "./schema";
import { AudioPlayer } from "./viewer";

export function AudioEditor({ value, onChange }: ExerciseEditorProps<AudioContent, null>) {
  const t = useTranslations("exercises.media");
  const { file, caption } = value.content;
  const set = (patch: Partial<AudioContent>) => onChange({ content: { ...value.content, ...patch }, key: null });

  return (
    <div className="flex flex-col gap-3">
      {file ? (
        <>
          <AudioPlayer file={file} />
          <div className="flex items-center gap-2">
            <span className="min-w-0 flex-1 truncate text-sm text-muted-foreground">{file.name}</span>
            <Button type="button" variant="ghost" size="sm" onClick={() => set({ file: null })}>
              <Trash2 aria-hidden="true" />
              {t("remove")}
            </Button>
          </div>
        </>
      ) : (
        <MediaDropzone kind="audio" onUploaded={([uploaded]) => uploaded && set({ file: uploaded })} />
      )}
      <CaptionInput value={caption} onChange={(caption) => set({ caption })} />
    </div>
  );
}
