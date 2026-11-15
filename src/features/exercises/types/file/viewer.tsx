"use client";

import { Download, ExternalLink, FileText } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import type { ExerciseViewerProps } from "../../client-types";
import { Caption } from "../../caption-input";
import { formatBytes, mediaUrl, type MediaFile } from "../../media";
import { PdfViewer } from "./pdf-viewer";
import type { FileContent } from "./schema";

const OFFICE_TYPES = new Set([
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
]);

/**
 * File name, size, "Open" and "Download". With `preview` the file is also shown
 * on the page: PDFs page by page (with pen and marker notes in a lesson), Word
 * and PowerPoint files through Microsoft's free online viewer (read-only).
 */
export function FileCard({
  file,
  preview = true,
  exerciseId,
}: {
  file: MediaFile;
  preview?: boolean;
  exerciseId?: string;
}) {
  const t = useTranslations("exercises.file");
  const locale = useLocale();
  const url = mediaUrl(file.path);
  const isPdf = file.mime === "application/pdf";

  return (
    <div className="flex flex-col gap-2">
      {preview && isPdf && <PdfViewer url={url} title={file.name} exerciseId={exerciseId} />}
      {preview && OFFICE_TYPES.has(file.mime) && (
        <iframe
          src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(url)}`}
          title={file.name}
          className="h-[70vh] max-h-[50rem] w-full rounded-xl border bg-muted"
          loading="lazy"
        />
      )}
      <div className="flex flex-col gap-3 rounded-xl border p-3 sm:flex-row sm:items-center">
        <div className="flex min-w-0 flex-1 items-center gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
          <FileText className="size-5" aria-hidden="true" />
        </span>
        <span className="flex min-w-0 flex-1 flex-col">
          <span className="truncate font-medium">{file.name}</span>
          <span className="text-xs text-muted-foreground">{formatBytes(file.size, locale)}</span>
        </span>
        </div>
        <div className="flex gap-2 [&>*]:flex-1 sm:[&>*]:flex-none">
          <Button asChild variant="outline" size="sm">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <ExternalLink aria-hidden="true" />
              {t("open")}
            </a>
          </Button>
          <Button asChild variant="outline" size="sm">
            {/* Supabase sets "save as" with this name when ?download= is present */}
            <a href={`${url}?download=${encodeURIComponent(file.name)}`}>
              <Download aria-hidden="true" />
              {t("download")}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export function FileViewer({ content, exerciseId }: ExerciseViewerProps<FileContent>) {
  if (!content.file) return null;
  return (
    <div className="flex flex-col gap-2">
      <FileCard file={content.file} exerciseId={exerciseId} />
      <Caption text={content.caption} />
    </div>
  );
}
