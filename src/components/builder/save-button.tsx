"use client";

import { CircleCheck, CloudOff, Loader2, Save } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState, useSyncExternalStore } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import type { SaveQueue } from "@/features/lessons/save-queue";

/**
 * "Save" at the bottom of a section. Everything saves by itself anyway; the
 * button saves right now and shows clearly that nothing is left unsaved.
 */
export function SaveButton({ queue }: { queue: SaveQueue }) {
  const t = useTranslations("builder");
  const status = useSyncExternalStore(queue.subscribe, queue.getStatus, () => "saved" as const);
  const [busy, setBusy] = useState(false);

  async function save() {
    setBusy(true);
    await queue.flushAll();
    setBusy(false);
    if (queue.getStatus() === "saved") toast.success(t("saved"));
    else toast.error(t("saveError"));
  }

  if (status === "saved" && !busy) {
    return (
      <Button variant="ghost" disabled className="text-emerald-700 disabled:opacity-100">
        <CircleCheck aria-hidden="true" />
        {t("allSaved")}
      </Button>
    );
  }
  return (
    <Button onClick={save} disabled={busy}>
      {busy ? (
        <Loader2 className="animate-spin" aria-hidden="true" />
      ) : status === "error" ? (
        <CloudOff aria-hidden="true" />
      ) : (
        <Save aria-hidden="true" />
      )}
      {t("save")}
    </Button>
  );
}
