"use client";

import { Video } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

/** Opens the class's Zoom / Meet link in a new tab. */
export function CallButton({ url, size = "default" }: { url: string; size?: "default" | "sm" | "lg" }) {
  const t = useTranslations("classes");
  return (
    <Button asChild size={size}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Video aria-hidden="true" />
        {t("call")}
      </a>
    </Button>
  );
}
