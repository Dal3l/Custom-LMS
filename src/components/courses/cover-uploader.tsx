"use client";

import { ImagePlus, Loader2, Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRef, useState, useTransition } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { setCourseCover } from "@/features/courses/actions";
import { coverProblem } from "@/features/courses/schemas";
import { createClient } from "@/lib/supabase/client";
import { CourseCover } from "./course-cover";

const EXT: Record<string, string> = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp" };

/** Uploads straight from the browser to the teacher's own folder, then saves the path. */
export function CoverUploader({
  courseId,
  userId,
  path,
  language,
}: {
  courseId: string;
  userId: string;
  path: string | null;
  language: string;
}) {
  const t = useTranslations("courses");
  const input = useRef<HTMLInputElement>(null);
  const [current, setCurrent] = useState(path);
  const [busy, setBusy] = useState(false);
  const [, startTransition] = useTransition();

  async function upload(file: File) {
    const problem = coverProblem(file);
    if (problem) {
      toast.error(t(`errors.${problem}`));
      return;
    }
    setBusy(true);
    const newPath = `${userId}/${crypto.randomUUID()}.${EXT[file.type]}`;
    const { error } = await createClient()
      .storage.from("course-covers")
      .upload(newPath, file, { contentType: file.type, cacheControl: "31536000" });
    if (error) {
      setBusy(false);
      toast.error(t("errors.generic"));
      return;
    }
    save(newPath);
  }

  function save(newPath: string | null) {
    setBusy(true);
    startTransition(async () => {
      const result = await setCourseCover(courseId, newPath);
      setBusy(false);
      if (result.ok) {
        setCurrent(newPath);
        toast.success(t("saved"));
      } else {
        toast.error(t(`errors.${result.error}`));
      }
    });
  }

  return (
    <div className="flex flex-col gap-3">
      <div
        className="relative"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          const file = e.dataTransfer.files[0];
          if (file) void upload(file);
        }}
      >
        <CourseCover path={current} language={language} sizes="(min-width: 640px) 32rem, 100vw" />
        {busy && (
          <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-background/70">
            <Loader2 className="size-6 animate-spin text-primary" aria-label={t("coverUploading")} />
          </div>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button type="button" variant="outline" size="sm" disabled={busy} onClick={() => input.current?.click()}>
          <ImagePlus aria-hidden="true" />
          {current ? t("coverReplace") : t("coverUpload")}
        </Button>
        {current && (
          <Button type="button" variant="ghost" size="sm" disabled={busy} onClick={() => save(null)}>
            <Trash2 aria-hidden="true" />
            {t("coverRemove")}
          </Button>
        )}
        <span className="text-xs text-muted-foreground">{t("coverHint")}</span>
      </div>
      <input
        ref={input}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          e.target.value = "";
          if (file) void upload(file);
        }}
      />
    </div>
  );
}
