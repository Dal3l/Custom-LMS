"use client";

import { Loader2, Upload } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { useBuilder } from "@/components/builder/builder-context";
import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";
import { acceptAttribute, MEDIA_BUCKET, mediaExtension, mediaProblem, type MediaFile, type MediaKind } from "./media";

export type UploadedMedia = MediaFile & { width?: number; height?: number };

async function imageSize(file: File): Promise<{ width: number; height: number } | null> {
  try {
    const bitmap = await createImageBitmap(file);
    const size = { width: bitmap.width, height: bitmap.height };
    bitmap.close();
    return size;
  } catch {
    return null;
  }
}

/**
 * Drop a file here or click to choose. Uploads straight from the browser into
 * the teacher's own folder and reports the stored file.
 */
export function MediaDropzone({
  kind,
  multiple = false,
  onUploaded,
  compact = false,
}: {
  kind: MediaKind;
  multiple?: boolean;
  onUploaded: (files: UploadedMedia[]) => void;
  compact?: boolean;
}) {
  const t = useTranslations("exercises.media");
  const { userId } = useBuilder();
  const input = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [over, setOver] = useState(false);

  async function upload(list: FileList | File[]) {
    const files = Array.from(list).slice(0, multiple ? 10 : 1);
    if (!files.length) return;
    setBusy(true);
    const supabase = createClient();
    const done: UploadedMedia[] = [];
    for (const file of files) {
      const problem = mediaProblem(file, kind);
      const ext = mediaExtension(file.type, kind);
      if (problem || !ext) {
        toast.error(t(problem === "size" ? `tooBig.${kind}` : `wrongType.${kind}`, { name: file.name }));
        continue;
      }
      const path = `${userId}/${crypto.randomUUID()}.${ext}`;
      const { error } = await supabase.storage
        .from(MEDIA_BUCKET)
        .upload(path, file, { contentType: file.type, cacheControl: "31536000" });
      if (error) {
        toast.error(t("uploadFailed", { name: file.name }));
        continue;
      }
      const size = kind === "image" ? await imageSize(file) : null;
      done.push({ path, name: file.name.slice(0, 200), size: file.size, mime: file.type, ...(size ?? {}) });
    }
    setBusy(false);
    if (done.length) onUploaded(done);
  }

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setOver(true);
      }}
      onDragLeave={() => setOver(false)}
      onDrop={(e) => {
        e.preventDefault();
        setOver(false);
        void upload(e.dataTransfer.files);
      }}
    >
      <button
        type="button"
        disabled={busy}
        onClick={() => input.current?.click()}
        className={cn(
          "flex w-full flex-col items-center justify-center gap-1 rounded-lg border-2 border-dashed text-center text-sm text-muted-foreground transition-colors hover:border-primary hover:bg-accent/50 focus-visible:outline-2 focus-visible:outline-ring",
          compact ? "px-3 py-3" : "px-4 py-8",
          over && "border-primary bg-accent/60",
        )}
      >
        {busy ? (
          <Loader2 className="size-6 animate-spin text-primary" aria-hidden="true" />
        ) : (
          <Upload className="size-6 text-primary" aria-hidden="true" />
        )}
        <span className="font-medium text-foreground">{busy ? t("uploading") : t(`drop.${kind}`)}</span>
        {!compact && <span>{t(`hint.${kind}`)}</span>}
      </button>
      <input
        ref={input}
        type="file"
        className="hidden"
        accept={acceptAttribute(kind)}
        multiple={multiple}
        data-testid={`upload-${kind}`}
        onChange={(e) => {
          const files = e.target.files;
          if (files) void upload(files);
          e.target.value = "";
        }}
      />
    </div>
  );
}
