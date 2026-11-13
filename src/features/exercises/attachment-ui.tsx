"use client";

import { AudioLines, Image as ImageIcon, Paperclip, Trash2, Video } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Attachment, AttachmentKind } from "./attachment";
import { AudioEditor } from "./types/audio/editor";
import { AudioViewer } from "./types/audio/viewer";
import { ImageEditor } from "./types/image/editor";
import { ImageViewer } from "./types/image/viewer";
import { VideoEditor } from "./types/video/editor";
import { VideoViewer } from "./types/video/viewer";

const EMPTY: Record<AttachmentKind, Attachment> = {
  image: { kind: "image", images: [] },
  audio: { kind: "audio", file: null },
  video: { kind: "video", video: null },
};

/** Teacher side: "Media on top" button, then the matching material editor. */
export function AttachmentEditor({
  value,
  onChange,
}: {
  value: Attachment | null | undefined;
  onChange: (value: Attachment | null) => void;
}) {
  const t = useTranslations("exercises.attachment");
  const tt = useTranslations("exercises.types");

  if (!value) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button type="button" variant="ghost" size="sm" className="w-fit text-primary">
            <Paperclip aria-hidden="true" />
            {t("add")}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onSelect={() => onChange(EMPTY.image)}>
            <ImageIcon aria-hidden="true" />
            {tt("image.name")}
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => onChange(EMPTY.audio)}>
            <AudioLines aria-hidden="true" />
            {tt("audio.name")}
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => onChange(EMPTY.video)}>
            <Video aria-hidden="true" />
            {tt("video.name")}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <div className="flex flex-col gap-2 rounded-lg border border-dashed p-3">
      <div className="flex items-center justify-between gap-2">
        <span className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
          <Paperclip className="size-4" aria-hidden="true" />
          {t("title")}
        </span>
        <Button type="button" variant="ghost" size="sm" onClick={() => onChange(null)}>
          <Trash2 aria-hidden="true" />
          {t("remove")}
        </Button>
      </div>
      {value.kind === "image" && (
        <ImageEditor
          value={{ content: { images: value.images, caption: "" }, key: null }}
          onChange={(v) => onChange({ kind: "image", images: v.content.images })}
          withCaption={false}
        />
      )}
      {value.kind === "audio" && (
        <AudioEditor
          value={{ content: { file: value.file, caption: "" }, key: null }}
          onChange={(v) => onChange({ kind: "audio", file: v.content.file })}
          withCaption={false}
        />
      )}
      {value.kind === "video" && (
        <VideoEditor
          value={{ content: { video: value.video, caption: "" }, key: null }}
          onChange={(v) => onChange({ kind: "video", video: v.content.video })}
          withCaption={false}
        />
      )}
    </div>
  );
}

/** Student side: the picture / audio / video shown above the questions. */
export function AttachmentViewer({ value }: { value: Attachment | null | undefined }) {
  if (!value) return null;
  if (value.kind === "image") return <ImageViewer content={{ images: value.images, caption: "" }} />;
  if (value.kind === "audio") return <AudioViewer content={{ file: value.file, caption: "" }} />;
  return <VideoViewer content={{ video: value.video, caption: "" }} />;
}
