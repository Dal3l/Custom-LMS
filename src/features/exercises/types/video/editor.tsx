"use client";

import { Link2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FieldDescription, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import type { ExerciseEditorProps } from "../../client-types";
import { CaptionInput } from "../../caption-input";
import { parseVideoUrl, type VideoContent } from "./schema";
import { VideoFrame } from "./viewer";

export function VideoEditor({ value, onChange }: ExerciseEditorProps<VideoContent, null>) {
  const t = useTranslations("exercises.video");
  const tn = useTranslations("exercises.types.video");
  const { video, caption } = value.content;
  const set = (patch: Partial<VideoContent>) => onChange({ content: { ...value.content, ...patch }, key: null });
  const [link, setLink] = useState("");
  const [invalid, setInvalid] = useState(false);

  function apply() {
    const parsed = parseVideoUrl(link);
    setInvalid(!parsed);
    if (parsed) {
      set({ video: parsed });
      setLink("");
    }
  }

  return (
    <div className="flex flex-col gap-3">
      {video ? (
        <>
          <VideoFrame video={video} title={caption || tn("name")} />
          <div>
            <Button type="button" variant="outline" size="sm" onClick={() => set({ video: null })}>
              <Link2 aria-hidden="true" />
              {t("replace")}
            </Button>
          </div>
        </>
      ) : (
        <form
          className="flex flex-col gap-1.5"
          onSubmit={(e) => {
            e.preventDefault();
            apply();
          }}
        >
          <div className="flex gap-2">
            <Input
              value={link}
              onChange={(e) => {
                setLink(e.target.value);
                setInvalid(false);
              }}
              placeholder="https://www.youtube.com/watch?v=…"
              aria-label={t("link")}
              aria-invalid={invalid || undefined}
              inputMode="url"
            />
            <Button type="submit" disabled={!link.trim()}>
              {t("add")}
            </Button>
          </div>
          {invalid ? <FieldError>{t("invalid")}</FieldError> : <FieldDescription>{t("hint")}</FieldDescription>}
        </form>
      )}
      <CaptionInput value={caption} onChange={(caption) => set({ caption })} />
    </div>
  );
}
