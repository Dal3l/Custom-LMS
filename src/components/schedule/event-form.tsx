"use client";

import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { saveEvent } from "@/features/schedule/actions";
import { isoWeekday, type ScheduleEvent } from "@/features/schedule/occurrences";
import { useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const DURATIONS = [30, 45, 60, 90];
const WEEKDAYS = [1, 2, 3, 4, 5, 6, 7];

/**
 * A lesson time for a class: date, time, length; optionally every week on
 * chosen days (until a date). Times are in the teacher's own time zone.
 */
export function EventForm({
  classes,
  event,
  classId,
  defaultDate,
  timeZone,
  onDone,
}: {
  classes: { id: string; name: string }[];
  /** editing this event (its whole series) */
  event?: ScheduleEvent;
  /** preselected class (from the class page) */
  classId?: string;
  defaultDate: string;
  timeZone: string;
  onDone: () => void;
}) {
  const t = useTranslations("schedule");
  const router = useRouter();
  const [cls, setCls] = useState(event?.classId ?? classId ?? classes[0]?.id ?? "");
  const [date, setDate] = useState(event?.startsOn ?? defaultDate);
  const [time, setTime] = useState(event?.localTime ?? "18:00");
  const [duration, setDuration] = useState(event?.durationMin ?? 60);
  const [repeat, setRepeat] = useState(Boolean(event?.weekdays));
  const [days, setDays] = useState<number[]>(event?.weekdays ?? [isoWeekday(event?.startsOn ?? defaultDate)]);
  // Until the teacher picks days themselves, the series repeats on the chosen date's weekday.
  const [daysTouched, setDaysTouched] = useState(Boolean(event?.weekdays));
  const [until, setUntil] = useState(event?.until ?? "");
  const [pending, startTransition] = useTransition();

  function submit(e: React.FormEvent) {
    e.preventDefault();
    startTransition(async () => {
      const r = await saveEvent({
        id: event?.id,
        classId: cls,
        date,
        time,
        durationMin: duration,
        weekdays: repeat ? (days.length ? days : [isoWeekday(date)]) : null,
        until: repeat && until ? until : null,
      });
      if (!r.ok) return void toast.error(t("failed"));
      toast.success(event ? t("savedToast") : t("createdToast"));
      router.refresh();
      onDone();
    });
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-4">
      <DialogHeader>
        <DialogTitle>{event ? t("editTitle") : t("newTitle")}</DialogTitle>
        <DialogDescription>{t("timeZoneHint", { zone: timeZone.replaceAll("_", " ") })}</DialogDescription>
      </DialogHeader>
      {!event && !classId && (
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="event-class">{t("class")}</Label>
          <NativeSelect id="event-class" value={cls} onChange={(e) => setCls(e.target.value)} className="w-full">
            {classes.map((c) => (
              <NativeSelectOption key={c.id} value={c.id}>
                {c.name}
              </NativeSelectOption>
            ))}
          </NativeSelect>
        </div>
      )}
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="event-date">{repeat ? t("startsOn") : t("date")}</Label>
          <Input
            id="event-date"
            type="date"
            value={date}
            required
            onChange={(e) => {
              setDate(e.target.value);
              if (!daysTouched && /^\d{4}-\d{2}-\d{2}$/.test(e.target.value)) setDays([isoWeekday(e.target.value)]);
            }}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="event-time">{t("time")}</Label>
          <Input id="event-time" type="time" value={time} required onChange={(e) => setTime(e.target.value)} />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="event-duration">{t("duration")}</Label>
        <div className="flex flex-wrap items-center gap-2">
          {DURATIONS.map((d) => (
            <Button key={d} type="button" size="sm" variant={duration === d ? "default" : "outline"} aria-pressed={duration === d} onClick={() => setDuration(d)}>
              {t("minutes", { count: d })}
            </Button>
          ))}
          <Input
            id="event-duration"
            type="number"
            min={10}
            max={480}
            value={duration}
            onChange={(e) => setDuration(Math.max(10, Math.min(480, Number(e.target.value) || 0)))}
            className="w-24"
            aria-label={t("durationMinutes")}
          />
        </div>
      </div>
      <Label className="flex cursor-pointer items-center gap-2 font-normal">
        <Checkbox checked={repeat} onCheckedChange={(v) => setRepeat(v === true)} />
        {t("repeatWeekly")}
      </Label>
      {repeat && (
        <div className="flex flex-col gap-3 rounded-xl bg-muted/50 p-3">
          <div className="flex flex-wrap gap-1.5" role="group" aria-label={t("weekdays")}>
            {WEEKDAYS.map((d) => (
              <button
                key={d}
                type="button"
                aria-pressed={days.includes(d)}
                onClick={() => {
                  setDaysTouched(true);
                  setDays((ds) => (ds.includes(d) ? ds.filter((x) => x !== d) : [...ds, d].sort()));
                }}
                className={cn(
                  "size-10 rounded-full border text-sm font-medium transition-colors",
                  days.includes(d) ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:bg-accent",
                )}
              >
                {t(`day.${d as 1 | 2 | 3 | 4 | 5 | 6 | 7}`)}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="event-until">{t("until")}</Label>
            <Input id="event-until" type="date" value={until} min={date} onChange={(e) => setUntil(e.target.value)} className="w-fit" />
          </div>
        </div>
      )}
      <Button type="submit" disabled={pending || !cls}>
        {pending && <Loader2 className="animate-spin" aria-hidden="true" />}
        {event ? t("save") : t("create")}
      </Button>
    </form>
  );
}
