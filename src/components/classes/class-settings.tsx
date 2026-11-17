"use client";

import { CalendarDays, Pencil, Plus, Video } from "lucide-react";
import { useFormatter, useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { EventForm } from "@/components/schedule/event-form";
import type { ClassRow } from "@/features/classes/queries";
import type { ScheduleEvent } from "@/features/schedule/occurrences";
import { Link } from "@/i18n/navigation";
import { EditClassForm } from "./class-header";

/** The class's "Settings" tab: name, format, call link (editable) and the class's schedule. */
export function ClassSettings({
  cls,
  events,
  timeZone,
  today,
}: {
  cls: ClassRow;
  events: ScheduleEvent[];
  timeZone: string;
  today: string;
}) {
  const t = useTranslations("classes");
  const ts = useTranslations("schedule");
  const format = useFormatter();
  const [editing, setEditing] = useState(false);
  const [adding, setAdding] = useState(false);
  const [changing, setChanging] = useState<ScheduleEvent | null>(null);
  const day = (d: string) => format.dateTime(new Date(`${d}T12:00:00Z`), { day: "numeric", month: "short", timeZone: "UTC" });
  const describe = (e: ScheduleEvent) => {
    const zone = e.timeZone !== timeZone ? ` (${e.timeZone.replaceAll("_", " ")})` : "";
    if (!e.weekdays) return ts("once", { date: day(e.startsOn), time: e.localTime + zone });
    const days = e.weekdays.map((d) => ts(`day.${d as 1 | 2 | 3 | 4 | 5 | 6 | 7}`)).join(", ");
    const span = e.until ? ts("sinceUntil", { from: day(e.startsOn), to: day(e.until) }) : ts("since", { from: day(e.startsOn) });
    return `${ts("weekly", { days, time: e.localTime + zone })} · ${span} · ${ts("minutes", { count: e.durationMin })}`;
  };
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
      <section className="flex flex-col gap-3 rounded-2xl border bg-card p-4" aria-label={ts("classSchedule")}>
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="flex flex-1 items-center gap-2 font-medium">
            <CalendarDays className="size-5 text-muted-foreground" aria-hidden="true" />
            {ts("classSchedule")}
          </h2>
          <Button variant="outline" size="sm" onClick={() => setAdding(true)}>
            <Plus aria-hidden="true" />
            {ts("addLesson")}
          </Button>
        </div>
        {events.length === 0 ? (
          <p className="text-sm text-muted-foreground">{ts("classNoEvents")}</p>
        ) : (
          <ul className="flex flex-col gap-1">
            {events.map((e) => (
              <li key={e.id}>
                <button type="button" onClick={() => setChanging(e)} className="w-full rounded-lg px-2 py-1.5 text-left text-sm hover:bg-accent">
                  {describe(e)}
                </button>
              </li>
            ))}
          </ul>
        )}
        <Link href="/schedule" className="w-fit text-sm text-primary underline-offset-2 hover:underline">
          {ts("openSchedule")}
        </Link>
      </section>
      <Dialog open={adding || changing !== null} onOpenChange={(o) => !o && (setAdding(false), setChanging(null))}>
        <DialogContent className="max-h-[90svh] overflow-y-auto sm:max-w-md">
          {(adding || changing) && (
            <EventForm
              classes={[{ id: cls.id, name: cls.name }]}
              classId={cls.id}
              event={changing ?? undefined}
              defaultDate={today}
              timeZone={timeZone}
              onDone={() => {
                setAdding(false);
                setChanging(null);
              }}
            />
          )}
        </DialogContent>
      </Dialog>
      <Dialog open={editing} onOpenChange={setEditing}>
        <DialogContent className="sm:max-w-lg">{editing && <EditClassForm cls={cls} onDone={() => setEditing(false)} />}</DialogContent>
      </Dialog>
    </div>
  );
}
