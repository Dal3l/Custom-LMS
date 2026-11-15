"use client";

import { Video } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

/** Opens the class's Zoom / Meet link in a new tab. */
/** `compact`: only the icon on phones (the top bar). */
export function CallButton({ url, size = "default", compact = false }: { url: string; size?: "default" | "sm" | "lg"; compact?: boolean }) {
  const t = useTranslations("classes");
  return (
    <Button asChild size={size}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Video aria-hidden="true" />
        <span className={compact ? "max-sm:sr-only" : undefined}>{t("call")}</span>
      </a>
    </Button>
  );
}
