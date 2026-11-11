"use client";

import { CircleCheck, CloudOff, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useSyncExternalStore } from "react";
import type { SaveQueue } from "@/features/lessons/save-queue";
import { cn } from "@/lib/utils";

/** "Saved ✓" / "Saving…" / "No connection" indicator for the builder. */
export function SaveStatus({ queue }: { queue: SaveQueue }) {
  const t = useTranslations("builder");
  const status = useSyncExternalStore(queue.subscribe, queue.getStatus, () => "saved" as const);
  const map = {
    saved: { Icon: CircleCheck, text: t("saved"), cls: "text-muted-foreground" },
    saving: { Icon: Loader2, text: t("saving"), cls: "text-muted-foreground [&_svg]:animate-spin" },
    error: { Icon: CloudOff, text: t("saveError"), cls: "text-destructive" },
  } as const;
  const { Icon, text, cls } = map[status];
  return (
    <p className={cn("flex items-center gap-1.5 text-sm", cls)} role="status" aria-live="polite">
      <Icon className="size-4 shrink-0" aria-hidden="true" />
      <span className="truncate">{text}</span>
    </p>
  );
}
