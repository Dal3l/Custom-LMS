"use client";

import { BookA, Presentation, Timer, TimerOff } from "lucide-react";
import { useTranslations } from "next-intl";
import { forwardRef, useEffect, useState, useTransition } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Whiteboard } from "@/features/board/board-surface";
import { lessonBoard } from "@/features/board/items";
import { setLessonTimer } from "@/features/classes/lesson-actions";
import { useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

/** A square tool button with its name as a tooltip (the column of lesson tools). */
export const ToolButton = forwardRef<
  HTMLButtonElement,
  { label: string; pressed?: boolean; children: React.ReactNode } & React.ComponentProps<typeof Button>
>(function ToolButton({ label, pressed, children, className, ...props }, ref) {
  return (
    <Button
      ref={ref}
      type="button"
      variant={pressed ? "default" : "outline"}
      size="icon"
      aria-label={label}
      aria-pressed={pressed}
      title={label}
      className={cn("relative size-10 shrink-0 bg-card max-xl:size-9", pressed && "bg-primary", className)}
      {...props}
    >
      {children}
    </Button>
  );
});

/** The whiteboard button. The teacher's press opens the board for the class too. */
export function BoardTool({ open, onOpen }: { open: boolean; onOpen: () => void }) {
  const t = useTranslations("board");
  return (
    <ToolButton label={t("lessonBoard")} pressed={open} onClick={onOpen}>
      <Presentation aria-hidden="true" />
    </ToolButton>
  );
}

/**
 * The lesson whiteboard in a big window. Rendered once per page (the tool
 * buttons appear in two places: a column on wide screens, a row on narrow ones).
 */
export function BoardDialog({
  lessonId,
  open,
  onOpenChange,
}: {
  lessonId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const t = useTranslations("board");
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[95svh] w-[calc(100vw-1rem)] max-w-5xl overflow-y-auto p-3 sm:max-w-5xl sm:p-4">
        <DialogHeader>
          <DialogTitle>{t("lessonBoard")}</DialogTitle>
          <DialogDescription>{t("lessonBoardHint")}</DialogDescription>
        </DialogHeader>
        {open && <Whiteboard board={lessonBoard(lessonId)} label={t("lessonBoard")} />}
      </DialogContent>
    </Dialog>
  );
}

/** Ready-made times, in seconds. */
const PRESETS = [15, 30, 45, 60, 120, 180, 300, 600, 900];

/** Seconds left until `endsAt` (updated every second), or null. */
function useSecondsLeft(endsAt: string | null) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    if (!endsAt) return;
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, [endsAt]);
  if (!endsAt) return null;
  return Math.max(0, Math.ceil((new Date(endsAt).getTime() - now) / 1000));
}

export function formatSeconds(total: number) {
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const mm = h ? String(m).padStart(2, "0") : String(m);
  return `${h ? `${h}:` : ""}${mm}:${String(s).padStart(2, "0")}`;
}

/** The lesson timer: the teacher starts and stops it; everybody sees the countdown. */
export function TimerTool({
  endsAt,
  teacher,
}: {
  endsAt: string | null;
  /** set for the teacher: the timer can be started there */
  teacher?: { classId: string; lessonId: string };
}) {
  const t = useTranslations("timer");
  const router = useRouter();
  const left = useSecondsLeft(endsAt);
  const [pending, startTransition] = useTransition();
  const running = left !== null && left > 0;
  const over = left === 0;

  // A short signal when the time is over.
  const [beeped, setBeeped] = useState<string | null>(null);
  if (over && endsAt && beeped !== endsAt) {
    setBeeped(endsAt);
    try {
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      osc.connect(ctx.destination);
      osc.frequency.value = 880;
      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    } catch {
      /* no sound available */
    }
  }

  const [customMin, setCustomMin] = useState("");
  const [customSec, setCustomSec] = useState("");
  const custom = (Number(customMin) || 0) * 60 + (Number(customSec) || 0);

  function set(seconds: number | null) {
    if (!teacher) return;
    startTransition(async () => {
      const r = await setLessonTimer(teacher.classId, teacher.lessonId, seconds);
      if (r.ok) router.refresh();
      else toast.error(t("failed"));
    });
  }

  if (!teacher && left === null) return null;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <ToolButton label={running ? t("running", { time: formatSeconds(left) }) : t("title")} pressed={running} disabled={pending}>
          <Timer aria-hidden="true" />
          {(running || over) && (
            <span
              className={cn(
                "absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full px-1 text-[10px] font-semibold tabular-nums",
                over ? "bg-destructive text-white" : "bg-background text-foreground ring-1 ring-border",
              )}
              aria-hidden="true"
            >
              {formatSeconds(left ?? 0)}
            </span>
          )}
        </ToolButton>
      </PopoverTrigger>
      <PopoverContent side="right" align="start" className="w-64">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium">{t("title")}</p>
          {left !== null && (
            <p className={cn("text-center text-4xl font-semibold tabular-nums", over && "text-destructive")} role="timer">
              {over ? t("over") : formatSeconds(left)}
            </p>
          )}
          {teacher && (
            <>
              <div className="grid grid-cols-3 gap-2">
                {PRESETS.map((sec) => (
                  <Button key={sec} type="button" variant="outline" size="sm" onClick={() => set(sec)} disabled={pending}>
                    {sec < 60 ? t("seconds", { s: sec }) : t("minutes", { m: sec / 60 })}
                  </Button>
                ))}
              </div>
              {/* Any time: minutes and seconds. */}
              <form
                className="flex items-end gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (custom >= 5) set(custom);
                }}
              >
                <label className="flex flex-1 flex-col gap-1 text-xs text-muted-foreground">
                  {t("min")}
                  <Input
                    type="number"
                    inputMode="numeric"
                    min={0}
                    max={180}
                    value={customMin}
                    onChange={(e) => setCustomMin(e.target.value.slice(0, 3))}
                    className="h-8"
                  />
                </label>
                <label className="flex flex-1 flex-col gap-1 text-xs text-muted-foreground">
                  {t("sec")}
                  <Input
                    type="number"
                    inputMode="numeric"
                    min={0}
                    max={59}
                    value={customSec}
                    onChange={(e) => setCustomSec(e.target.value.slice(0, 2))}
                    className="h-8"
                  />
                </label>
                <Button type="submit" size="sm" disabled={pending || custom < 5 || custom > 3 * 60 * 60}>
                  {t("start")}
                </Button>
              </form>
              {left !== null && (
                <Button type="button" variant="ghost" size="sm" onClick={() => set(null)} disabled={pending}>
                  <TimerOff aria-hidden="true" />
                  {t("stop")}
                </Button>
              )}
            </>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}

/** Words of the lesson and the flash-card trainer — coming in stage 4. */
export function DictionaryTool() {
  const t = useTranslations("tools");
  return (
    <Popover>
      <PopoverTrigger asChild>
        <ToolButton label={t("dictionary")}>
          <BookA aria-hidden="true" />
        </ToolButton>
      </PopoverTrigger>
      <PopoverContent side="right" align="start" className="w-64 text-sm">
        <p className="font-medium">{t("dictionary")}</p>
        <p className="mt-1 text-muted-foreground">{t("dictionarySoon")}</p>
      </PopoverContent>
    </Popover>
  );
}
