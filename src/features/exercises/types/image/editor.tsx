"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import type { ExerciseEditorProps } from "../../client-types";
import { CaptionInput } from "../../caption-input";
import { mediaUrl } from "../../media";
import { MediaDropzone } from "../../media-dropzone";
import type { ImageContent } from "./schema";

const MAX = 10;

export function ImageEditor({
  value,
  onChange,
  withCaption = true,
}: ExerciseEditorProps<ImageContent, null> & { withCaption?: boolean }) {
  const t = useTranslations("exercises.media");
  const { images, caption } = value.content;
  const set = (patch: Partial<ImageContent>) => onChange({ content: { ...value.content, ...patch }, key: null });

  return (
    <div className="flex flex-col gap-3">
      {images.length > 0 && (
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {images.map((img) => (
            <li key={img.path} className="relative">
              <Image
                src={mediaUrl(img.path)}
                alt={img.name}
                width={img.width ?? 600}
                height={img.height ?? 400}
                sizes="(min-width: 640px) 15rem, 50vw"
                unoptimized
                className="aspect-[4/3] w-full rounded-lg border object-cover"
              />
              <Button
                type="button"
                variant="secondary"
                size="icon"
                className="absolute top-1 right-1 size-7 rounded-full shadow"
                aria-label={t("removeImage", { name: img.name })}
                onClick={() => set({ images: images.filter((i) => i.path !== img.path) })}
              >
                <X aria-hidden="true" />
              </Button>
            </li>
          ))}
        </ul>
      )}
      {images.length < MAX && (
        <MediaDropzone
          kind="image"
          multiple
          compact={images.length > 0}
          onUploaded={(files) => set({ images: [...images, ...files].slice(0, MAX) })}
        />
      )}
      {withCaption && <CaptionInput value={caption} onChange={(caption) => set({ caption })} />}
    </div>
  );
}
