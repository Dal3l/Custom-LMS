"use client";

import { CalendarDays, Pencil, Video } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { ClassRow } from "@/features/classes/queries";
import { EditClassForm } from "./class-header";

/** The class's "Settings" tab: name, format, call link (editable) and the schedule (later). */
export function ClassSettings({ cls }: { cls: ClassRow }) {
  const t = useTranslations("classes");
  const [editing, setEditing] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <section className="flex flex-col gap-3 rounded-2xl border bg-card p-4" aria-label={t("settingsTitle")}>
        <div className="flex items-center gap-2">
          <h2 className="flex-1 font-medium">{t("settingsTitle")}</h2>
          <Button variant="outline" size="sm" onClick={() => setEditing(true)}>
            <Pencil aria-hidden="true" />
            {t("editClass")}
          </Button>
        </div>
        <dl className="grid gap-2 text-sm sm:grid-cols-[10rem_1fr]">
          <dt className="text-muted-foreground">{t("nameLabel")}</dt>
          <dd className="font-medium break-words">{cls.name}</dd>
          <dt className="text-muted-foreground">{t("kindLabel")}</dt>
          <dd>{t(`kind.${cls.kind}`)}</dd>
          <dt className="text-muted-foreground">{t("callUrlLabel")}</dt>
          <dd className="flex items-center gap-1 break-all">
            {cls.call_url ? (
              <>
                <Video className="size-4 shrink-0 text-primary" aria-hidden="true" />
                {cls.call_url}
              </>
            ) : (
              <span className="text-muted-foreground">{t("noCallLink")}</span>
            )}
          </dd>
        </dl>
      </section>
      <section className="flex items-start gap-3 rounded-2xl border border-dashed p-4" aria-label={t("scheduleTitle")}>
        <CalendarDays className="mt-0.5 size-5 text-muted-foreground" aria-hidden="true" />
        <div>
          <h2 className="font-medium">{t("scheduleTitle")}</h2>
          <p className="text-sm text-muted-foreground">{t("scheduleSoon")}</p>
        </div>
      </section>
      <Dialog open={editing} onOpenChange={setEditing}>
        <DialogContent className="sm:max-w-lg">{editing && <EditClassForm cls={cls} onDone={() => setEditing(false)} />}</DialogContent>
      </Dialog>
    </div>
  );
}
