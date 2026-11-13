"use client";

import Image from "next/image";
import type { ExerciseViewerProps } from "../../client-types";
import { Caption } from "../../caption-input";
import { mediaUrl } from "../../media";
import { ImageGallery } from "./gallery";
import type { ImageContent } from "./schema";

export function ImageViewer({ content }: ExerciseViewerProps<ImageContent>) {
  const { images, caption } = content;
  if (!images.length) return null;
  const single = images[0]!;
  return (
    <figure className="flex flex-col gap-2">
      {images.length > 1 ? (
        <ImageGallery images={images} alt={caption || single.name} />
      ) : (
        <Image
          src={mediaUrl(single.path)}
          alt={caption || single.name}
          width={single.width ?? 1200}
          height={single.height ?? 800}
          sizes="(min-width: 1024px) 50rem, 100vw"
          // Served straight from storage: lessons may have many pictures, and the free
          // Vercel plan limits how many images its optimiser processes per month.
          unoptimized
          // Never blown up past its real size, never taller than the screen.
          className="mx-auto h-auto max-h-[70vh] w-auto max-w-full rounded-xl border object-contain"
        />
      )}
      {caption && (
        <figcaption>
          <Caption text={caption} />
        </figcaption>
      )}
    </figure>
  );
}
