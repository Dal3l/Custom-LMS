"use client";

import { Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import type { ExerciseEditorProps } from "../../client-types";
import { CaptionInput } from "../../caption-input";
import { MediaDropzone } from "../../media-dropzone";
import type { FileContent } from "./schema";
import { FileCard } from "./viewer";

export function FileEditor({ value, onChange }: ExerciseEditorProps<FileContent, null>) {
  const t = useTranslations("exercises.media");
  const { file, caption } = value.content;
  const set = (patch: Partial<FileContent>) => onChange({ content: { ...value.content, ...patch }, key: null });

  return (
    <div className="flex flex-col gap-3">
      {file ? (
        <>
          <FileCard file={file} preview={false} />
          <div>
            <Button type="button" variant="ghost" size="sm" onClick={() => set({ file: null })}>
              <Trash2 aria-hidden="true" />
              {t("remove")}
            </Button>
          </div>
        </>
      ) : (
        <MediaDropzone kind="file" onUploaded={([uploaded]) => uploaded && set({ file: uploaded })} />
      )}
      <CaptionInput value={caption} onChange={(caption) => set({ caption })} />
    </div>
  );
}
