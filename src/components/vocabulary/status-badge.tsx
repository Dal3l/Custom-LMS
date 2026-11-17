"use client";

import { useTranslations } from "next-intl";
import { wordStatus } from "@/features/trainer/ladder";
import { cn } from "@/lib/utils";

/** Learning / learned / time to review (learned, but it is time to check it). */
export function StatusBadge({ stage, due }: { stage: number; due: string }) {
  const t = useTranslations("vocabulary.status");
  const status = wordStatus(stage, due);
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium",
        status === "learning" && "border-sky-200 bg-sky-50 text-sky-800",
        status === "learned" && "border-emerald-200 bg-emerald-50 text-emerald-800",
        status === "review" && "border-amber-200 bg-amber-50 text-amber-900",
      )}
    >
      {t(status)}
    </span>
  );
}
