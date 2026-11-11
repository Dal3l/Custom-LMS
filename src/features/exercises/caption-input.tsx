"use client";

import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";

export function CaptionInput({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const t = useTranslations("exercises.media");
  return (
    <Input
      value={value}
      onChange={(e) => onChange(e.target.value.slice(0, 300))}
      placeholder={t("captionPlaceholder")}
      aria-label={t("caption")}
    />
  );
}

export function Caption({ text }: { text: string }) {
  return text ? <p className="text-sm text-muted-foreground">{text}</p> : null;
}
