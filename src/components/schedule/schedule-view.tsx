"use client";

import { CalendarDays, ChevronLeft, ChevronRight, Clock, MoreHorizontal, Pencil, Play, Plus, Repeat, Trash2, Video, X } from "lucide-react";
import { useFormatter, useTranslations } from "next-intl";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cancelOccurrence, deleteEvent, moveOccurrence } from "@/features/schedule/actions";
import { addDays, localDate, localTime, type ScheduleEvent } from "@/features/schedule/occurrences";
import type { ScheduleClass } from "@/features/schedule/queries";
import { Link, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { EventForm } from "./event-form";

/** An occurrence as sent from the server (dates as text). */
export type Slot = {
  eventId: string;
  classId: string;
  occursOn: string;
  start: string;
  end: string;
  moved: boolean;
  repeating: boolean;
};

export const CLASS_COLORS = [
  "border-l-blue-500 bg-blue-50 text-blue-950",
  "border-l-emerald-500 bg-emerald-50 text-emerald-950",
  "border-l-violet-500 bg-violet-50 text-violet-950",
  "border-l-amber-500 bg-amber-50 text-amber-950",
  "border-l-rose-500 bg-rose-50 text-rose-950",
  "border-l-cyan-500 bg-cyan-50 text-cyan-950",
  "border-l-lime-500 bg-lime-50 text-lime-950",
  "border-l-fuchsia-500 bg-fuchsia-50 text-fuchsia-950",
];

/**
 * The Schedule page: upcoming lessons, a week or month calendar in the
 * viewer's time zone; the teacher adds lessons, moves or cancels one date,
 * edits or deletes a series.
 */
export function ScheduleView({
  view,
  anchor,
  today,
  days,
  slots,
  upcoming,
  events,
  classes,
  timeZone,
  isTeacher,
}: {
  view: "week" | "month";
  /** the date the calendar shows (YYYY-MM-DD) */
  anchor: string;
  today: string;
  /** the calendar's days (a week, or whole weeks around the month) */
  days: string[];
  slots: Slot[];
  upcoming: Slot[];
  events: ScheduleEvent[];
  classes: Record<string, ScheduleClass>;
  timeZone: string;
  isTeacher: boolean;
}) {
  const t = useTranslations("schedule");
  const format = useFormatter();
  const [adding, setAdding] = useState<string | null>(null);
  const [open, setOpen] = useState<Slot | null>(null);
  const byDay = new Map<string, Slot[]>();
  for (const s of slots) {
    const d = localDate(new Date(s.start), timeZone);
    byDay.set(d, [...(byDay.get(d) ?? []), s]);
  }
  const step = view === "week" ? 7 : 0;
  const prev = view === "week" ? addDays(anchor, -step) : shiftMonth(anchor, -1);
  const next = view === "week" ? addDays(anchor, step) : shiftMonth(anchor, 1);
  const href = (v: string, d: string) => `/schedule?view=${v}&date=${d}`;
  const month = anchor.slice(0, 7);
  const dayName = (d: string, style: "short" | "long") =>
    format.dateTime(new Date(`${d}T12:00:00Z`), { weekday: style, day: "numeric", month: style === "long" ? "long" : "short", timeZone: "UTC" });
  const title =
    view === "week"
      ? `${format.dateTime(new Date(`${days[0]}T12:00:00Z`), { day: "numeric", month: "short", timeZone: "UTC" })} – ${format.dateTime(new Date(`${days[6]}T12:00:00Z`), { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" })}`
      : format.dateTime(new Date(`${anchor}T12:00:00Z`), { month: "long", year: "numeric", timeZone: "UTC" });
  const classList = Object.values(classes);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end gap-3">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-semibold">{t("title")}</h1>
          <p className="text-muted-foreground">{t("subtitle", { zone: timeZone.replaceAll("_", " ") })}</p>
        </div>
        {isTeacher && classList.length > 0 && (
          <Button onClick={() => setAdding(today)}>
            <Plus aria-hidden="true" />
            {t("newLesson")}
          </Button>
        )}
      </div>

      <section className="flex flex-col gap-2" aria-label={t("upcoming")}>
        <h2 className="font-medium">{t("upcoming")}</h2>
        {upcoming.length === 0 ? (
          <p className="rounded-2xl border border-dashed p-4 text-sm text-muted-foreground">
            {isTeacher ? (classList.length ? t("noUpcomingTeacher") : t("noClasses")) : t("noUpcomingStudent")}
          </p>
        ) : (
          <ul className="flex flex-col gap-2">
            {upcoming.map((s) => (
              <li key={`${s.eventId}|${s.occursOn}`}>
                <SlotButton slot={s} cls={classes[s.classId]} timeZone={timeZone} withDate onOpen={() => setOpen(s)} />
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="flex flex-col gap-3" aria-label={t("calendar")}>
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex gap-1 rounded-lg bg-muted p-1" role="group" aria-label={t("viewLabel")}>
            {(["week", "month"] as const).map((v) => (
              <Link
                key={v}
                href={href(v, anchor)}
                aria-current={view === v ? "page" : undefined}
                className={cn("rounded-md px-3 py-1 text-sm font-medium", view === v ? "bg-background shadow-sm" : "text-muted-foreground")}
              >
                {t(`view.${v}`)}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-1">
            <Button asChild variant="ghost" size="icon-sm" aria-label={t("previous")}>
              <Link href={href(view, prev)}>
                <ChevronLeft aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon-sm" aria-label={t("next")}>
              <Link href={href(view, next)}>
                <ChevronRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href={href(view, today)}>{t("today")}</Link>
            </Button>
          </div>
          <h2 className="ml-auto font-medium first-letter:uppercase">{title}</h2>
        </div>

        {view === "week" ? (
          <ol className="grid gap-2 lg:grid-cols-7">
            {days.map((d) => (
              <li key={d} className={cn("flex flex-col gap-1.5 rounded-2xl border bg-card p-2 lg:min-h-24", d === today && "border-primary ring-1 ring-primary/30")}>
                <div className="flex items-center justify-between px-1">
                  <span className={cn("text-sm font-medium first-letter:uppercase", d === today && "text-primary")}>{dayName(d, "short")}</span>
                  {isTeacher && classList.length > 0 && (
                    <Button variant="ghost" size="icon-sm" className="size-7 text-muted-foreground" aria-label={t("addOn", { day: dayName(d, "long") })} onClick={() => setAdding(d)}>
                      <Plus aria-hidden="true" />
                    </Button>
                  )}
                </div>
                {(byDay.get(d) ?? []).map((s) => (
                  <SlotButton key={`${s.eventId}|${s.occursOn}`} slot={s} cls={classes[s.classId]} timeZone={timeZone} onOpen={() => setOpen(s)} />
                ))}
              </li>
            ))}
          </ol>
        ) : (
          <div className="overflow-hidden rounded-2xl border bg-card">
            <div className="grid grid-cols-7 border-b text-center text-xs font-medium text-muted-foreground">
              {days.slice(0, 7).map((d) => (
                <span key={d} className="py-1.5 first-letter:uppercase">
                  {format.dateTime(new Date(`${d}T12:00:00Z`), { weekday: "short", timeZone: "UTC" })}
                </span>
              ))}
            </div>
            <ol className="grid grid-cols-7">
              {days.map((d) => {
                const list = byDay.get(d) ?? [];
                return (
                  <li key={d} className={cn("flex min-h-20 flex-col gap-1 border-r border-b p-1 [&:nth-child(7n)]:border-r-0", d.slice(0, 7) !== month && "bg-muted/40 text-muted-foreground")}>
                    <Link
                      href={href("week", d)}
                      className={cn("w-fit rounded-full px-1.5 text-xs tabular-nums hover:bg-accent", d === today && "bg-primary text-primary-foreground")}
                      aria-label={dayName(d, "long")}
                    >
                      {Number(d.slice(8))}
                    </Link>
                    {list.slice(0, 3).map((s) => (
                      <button
                        key={`${s.eventId}|${s.occursOn}`}
                        type="button"
                        onClick={() => setOpen(s)}
                        className={cn("truncate rounded border-l-2 px-1 text-left text-[11px] leading-5", CLASS_COLORS[classes[s.classId]?.color ?? 0])}
                        title={classes[s.classId]?.name}
                      >
                        {localTime(new Date(s.start), timeZone)} {classes[s.classId]?.name}
                      </button>
                    ))}
                    {list.length > 3 && <span className="px-1 text-[11px] text-muted-foreground">{t("more", { count: list.length - 3 })}</span>}
                  </li>
                );
              })}
            </ol>
          </div>
        )}
      </section>

      <Dialog open={adding !== null} onOpenChange={(o) => !o && setAdding(null)}>
        <DialogContent className="max-h-[90svh] overflow-y-auto sm:max-w-md">
          {adding !== null && (
            <EventForm classes={classList} defaultDate={adding} timeZone={timeZone} onDone={() => setAdding(null)} />
          )}
        </DialogContent>
      </Dialog>

      <SlotDialog
        slot={open}
        cls={open ? classes[open.classId] : undefined}
        event={open ? events.find((e) => e.id === open.eventId) : undefined}
        classes={classList}
        timeZone={timeZone}
        isTeacher={isTeacher}
        onClose={() => setOpen(null)}
      />
    </div>
  );
}

function shiftMonth(date: string, by: number): string {
  const [y, m] = date.split("-").map(Number);
  const d = new Date(Date.UTC(y, m - 1 + by, 1));
  return d.toISOString().slice(0, 10);
}

function SlotButton({
  slot,
  cls,
  timeZone,
  withDate,
  onOpen,
}: {
  slot: Slot;
  cls?: ScheduleClass;
  timeZone: string;
  withDate?: boolean;
  onOpen: () => void;
}) {
  const t = useTranslations("schedule");
  const format = useFormatter();
  const start = new Date(slot.start);
  const when = `${localTime(start, timeZone)}–${localTime(new Date(slot.end), timeZone)}`;
  return (
    <button
      type="button"
      onClick={onOpen}
      className={cn("flex w-full flex-col rounded-lg border-l-4 px-2 py-1.5 text-left text-sm transition-shadow hover:shadow-sm", CLASS_COLORS[cls?.color ?? 0])}
    >
      <span className="flex items-center gap-1 text-xs font-medium tabular-nums opacity-80">
        {withDate && <span className="first-letter:uppercase">{format.dateTime(start, { weekday: "short", day: "numeric", month: "short", timeZone })} ·</span>}
        {when}
        {slot.repeating && <Repeat className="size-3" aria-label={t("repeats")} />}
        {slot.moved && <span>· {t("moved")}</span>}
      </span>
      <span className="truncate font-medium">{cls?.name ?? "—"}</span>
    </button>
  );
}

/** One lesson: when, which class; start / join; the teacher moves, cancels, edits. */
function SlotDialog({
  slot,
  cls,
  event,
  classes,
  timeZone,
  isTeacher,
  onClose,
}: {
  slot: Slot | null;
  cls?: ScheduleClass;
  event?: ScheduleEvent;
  classes: { id: string; name: string }[];
  timeZone: string;
  isTeacher: boolean;
  onClose: () => void;
}) {
  const t = useTranslations("schedule");
  const format = useFormatter();
  const router = useRouter();
  const [mode, setMode] = useState<"view" | "move" | "edit">("view");
  const [confirm, setConfirm] = useState<"cancel" | "delete" | null>(null);
  const [pending, startTransition] = useTransition();
  const [moveDate, setMoveDate] = useState("");
  const [moveTime, setMoveTime] = useState("");
  const [moveDuration, setMoveDuration] = useState(60);
  const close = () => {
    setMode("view");
    onClose();
  };
  if (!slot) return null;
  const start = new Date(slot.start);
  const end = new Date(slot.end);
  const minutes = Math.round((end.getTime() - start.getTime()) / 60_000);
  const lessonHref = cls ? (cls.lessonId ? `/classes/${cls.id}/lessons/${cls.lessonId}` : `/classes/${cls.id}`) : "/classes";

  function run(action: () => Promise<{ ok: boolean }>, done: string) {
    startTransition(async () => {
      const r = await action();
      setConfirm(null);
      if (!r.ok) return void toast.error(t("failed"));
      toast.success(done);
      router.refresh();
      close();
    });
  }

  return (
    <>
      <Dialog open onOpenChange={(o) => !o && close()}>
        <DialogContent className="max-h-[90svh] overflow-y-auto sm:max-w-md">
          {mode === "edit" && event ? (
            <EventForm classes={classes} event={event} defaultDate={event.startsOn} timeZone={timeZone} onDone={close} />
          ) : mode === "move" ? (
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                run(
                  () => moveOccurrence({ eventId: slot.eventId, occursOn: slot.occursOn, date: moveDate, time: moveTime, durationMin: moveDuration }),
                  t("movedToast"),
                );
              }}
            >
              <DialogHeader>
                <DialogTitle>{t("moveTitle")}</DialogTitle>
                <DialogDescription>{t("moveHint")}</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="move-date">{t("date")}</Label>
                  <Input id="move-date" type="date" value={moveDate} required onChange={(e) => setMoveDate(e.target.value)} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="move-time">{t("time")}</Label>
                  <Input id="move-time" type="time" value={moveTime} required onChange={(e) => setMoveTime(e.target.value)} />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="move-duration">{t("durationMinutes")}</Label>
                <Input id="move-duration" type="number" min={10} max={480} value={moveDuration} onChange={(e) => setMoveDuration(Number(e.target.value) || 60)} className="w-28" />
              </div>
              <Button type="submit" disabled={pending}>
                {t("move")}
              </Button>
            </form>
          ) : (
            <div className="flex flex-col gap-4">
              <DialogHeader>
                <DialogTitle className="truncate pr-6">{cls?.name}</DialogTitle>
                <DialogDescription className="flex flex-col gap-1 text-foreground">
                  <span className="flex items-center gap-2 first-letter:uppercase">
                    <CalendarDays className="size-4 text-muted-foreground" aria-hidden="true" />
                    {format.dateTime(start, { weekday: "long", day: "numeric", month: "long", timeZone })}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="size-4 text-muted-foreground" aria-hidden="true" />
                    {localTime(start, timeZone)}–{localTime(end, timeZone)} · {t("minutes", { count: minutes })}
                    {slot.moved && ` · ${t("moved")}`}
                  </span>
                  {event?.weekdays && (
                    <span className="flex items-center gap-2">
                      <Repeat className="size-4 text-muted-foreground" aria-hidden="true" />
                      {t("everyWeek", { days: event.weekdays.map((d) => t(`day.${d as 1 | 2 | 3 | 4 | 5 | 6 | 7}`)).join(", ") })}
                    </span>
                  )}
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-wrap gap-2">
                <Button asChild>
                  <Link href={lessonHref}>
                    <Play aria-hidden="true" />
                    {isTeacher ? t("startLesson") : t("join")}
                  </Link>
                </Button>
                {cls?.callUrl && (
                  <Button asChild variant="outline">
                    <a href={cls.callUrl} target="_blank" rel="noopener noreferrer">
                      <Video aria-hidden="true" />
                      {t("call")}
                    </a>
                  </Button>
                )}
                <div className="ml-auto">
                  {isTeacher && (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon" aria-label={t("actions")}>
                          <MoreHorizontal aria-hidden="true" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onSelect={() => {
                            setMoveDate(localDate(start, timeZone));
                            setMoveTime(localTime(start, timeZone));
                            setMoveDuration(minutes);
                            setMode("move");
                          }}
                        >
                          <Clock aria-hidden="true" />
                          {t("moveThis")}
                        </DropdownMenuItem>
                        {slot.repeating && (
                          <DropdownMenuItem onSelect={() => setConfirm("cancel")}>
                            <X aria-hidden="true" />
                            {t("cancelThis")}
                          </DropdownMenuItem>
                        )}
                        {event && (
                          <DropdownMenuItem onSelect={() => setMode("edit")}>
                            <Pencil aria-hidden="true" />
                            {slot.repeating ? t("editSeries") : t("edit")}
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuItem variant="destructive" onSelect={() => setConfirm("delete")}>
                          <Trash2 aria-hidden="true" />
                          {slot.repeating ? t("deleteSeries") : t("delete")}
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      <AlertDialog open={confirm !== null} onOpenChange={(o) => !o && setConfirm(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{confirm === "cancel" ? t("cancelTitle") : slot.repeating ? t("deleteSeriesTitle") : t("deleteTitle")}</AlertDialogTitle>
            <AlertDialogDescription>{confirm === "cancel" ? t("cancelText") : t("deleteText")}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t("back")}</AlertDialogCancel>
            <AlertDialogAction
              variant="destructive"
              disabled={pending}
              onClick={() =>
                confirm === "cancel"
                  ? run(() => cancelOccurrence({ eventId: slot.eventId, occursOn: slot.occursOn }), t("cancelledToast"))
                  : run(() => deleteEvent(slot.eventId), t("deletedToast"))
              }
            >
              {confirm === "cancel" ? t("cancelThis") : t("delete")}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
