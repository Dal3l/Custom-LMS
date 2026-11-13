"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { mediaUrl } from "../../media";
import type { ImageContent } from "./schema";

type Item = ImageContent["images"][number];

/**
 * Several pictures, one at a time: arrows, "2 / 5", dots, swipe on phones and
 * arrow keys on computers. The frame keeps one size so the page does not jump.
 */
export function ImageGallery({ images, alt }: { images: Item[]; alt: string }) {
  const t = useTranslations("exercises.media");
  const [index, setIndex] = useState(0);
  const touchX = useRef<number | null>(null);
  const count = images.length;
  const go = (next: number) => setIndex(((next % count) + count) % count);
  const current = images[index]!;

  return (
    <div
      className="flex flex-col gap-2"
      role="group"
      aria-roledescription={t("gallery")}
      aria-label={alt}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(index - 1);
        if (e.key === "ArrowRight") go(index + 1);
      }}
    >
      <div
        className="relative flex aspect-[4/3] max-h-[70vh] w-full items-center justify-center overflow-hidden rounded-xl border bg-muted/40 select-none"
        onTouchStart={(e) => (touchX.current = e.touches[0]?.clientX ?? null)}
        onTouchEnd={(e) => {
          const start = touchX.current;
          const end = e.changedTouches[0]?.clientX;
          touchX.current = null;
          if (start == null || end == null || Math.abs(end - start) < 40) return;
          go(end < start ? index + 1 : index - 1);
        }}
      >
        <Image
          key={current.path}
          src={mediaUrl(current.path)}
          alt={`${alt} — ${t("imageOf", { n: index + 1, total: count })}`}
          width={current.width ?? 1200}
          height={current.height ?? 800}
          sizes="(min-width: 1024px) 50rem, 100vw"
          unoptimized
          draggable={false}
          className="max-h-full w-auto max-w-full object-contain"
        />
        <Button
          type="button"
          variant="secondary"
          size="icon"
          className="absolute top-1/2 left-2 size-10 -translate-y-1/2 rounded-full bg-background/90 shadow"
          aria-label={t("prevImage")}
          onClick={() => go(index - 1)}
        >
          <ChevronLeft aria-hidden="true" />
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="icon"
          className="absolute top-1/2 right-2 size-10 -translate-y-1/2 rounded-full bg-background/90 shadow"
          aria-label={t("nextImage")}
          onClick={() => go(index + 1)}
        >
          <ChevronRight aria-hidden="true" />
        </Button>
        <span
          className="absolute top-2 right-2 rounded-full bg-background/90 px-2 py-0.5 text-xs font-medium tabular-nums shadow"
          aria-live="polite"
        >
          {index + 1} / {count}
        </span>
      </div>
      <div className="flex justify-center gap-1.5">
        {images.map((img, i) => (
          <button
            key={img.path}
            type="button"
            aria-label={t("goToImage", { n: i + 1 })}
            aria-current={i === index ? "true" : undefined}
            onClick={() => go(i)}
            className={cn(
              "h-2.5 rounded-full transition-all",
              i === index ? "w-6 bg-primary" : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60",
            )}
          />
        ))}
      </div>
    </div>
  );
}
