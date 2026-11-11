"use client";

import Image from "next/image";
import type { ExerciseViewerProps } from "../../client-types";
import { Caption } from "../../caption-input";
import { mediaUrl } from "../../media";
import type { ImageContent } from "./schema";

export function ImageViewer({ content }: ExerciseViewerProps<ImageContent>) {
  const { images, caption } = content;
  if (!images.length) return null;
  return (
    <figure className="flex flex-col gap-2">
      <div className={images.length > 1 ? "grid gap-2 sm:grid-cols-2" : ""}>
        {images.map((img) => (
          <Image
            key={img.path}
            src={mediaUrl(img.path)}
            alt={caption || img.name}
            width={img.width ?? 1200}
            height={img.height ?? 800}
            sizes={images.length > 1 ? "(min-width: 640px) 40vw, 100vw" : "(min-width: 1024px) 50rem, 100vw"}
            // Served straight from storage: lessons may have many pictures, and the free
            // Vercel plan limits how many images its optimiser processes per month.
            unoptimized
            className="h-auto w-full rounded-xl border object-contain"
          />
        ))}
      </div>
      {caption && (
        <figcaption>
          <Caption text={caption} />
        </figcaption>
      )}
    </figure>
  );
}
