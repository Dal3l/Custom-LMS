"use client";

import { ChevronLeft, ChevronRight, CloudOff, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ClassStudent } from "@/features/classes/queries";
import type { StudentAnswers } from "@/features/lessons/answers-shared";
import type { StudentSection } from "@/features/lessons/queries";
import type { LiveStatus, StudentPresence } from "@/features/live/types";
import { initials } from "@/lib/initials";
import { cn } from "@/lib/utils";

/**
 * For the teacher: connection state and the class's students — who is online,
 * in which section, how many exercises they answered. Picking a student shows
 * their answers live. On wide screens it sits in the top bar next to the
 * lesson's title (`inHeader`); on narrow ones, above the lesson. When the
 * students don't fit, arrows scroll the row.
 */
export function LiveStudentsBar({
  students,
  sections,
  lessonId,
  online,
  status,
  answers,
  viewing,
  onView,
  inHeader = false,
}: {
  students: ClassStudent[];
  sections: StudentSection[];
  lessonId: string;
  online: Map<string, StudentPresence>;
  status: LiveStatus;
  answers: StudentAnswers;
  viewing: string | null;
  onView: (studentId: string | null) => void;
  inHeader?: boolean;
}) {
  const t = useTranslations("live");
  const sectionNumber = (id: string | null) => {
    const i = sections.findIndex((s) => s.id === id);
    return i >= 0 ? i + 1 : null;
  };

  return (
    // Kept at the top with the sections while scrolling (see LessonPlayer's stickyTop).
    // One slim row: connection state and the students.
    <section className="flex min-w-0 flex-1 items-center gap-2" aria-label={t("studentsLabel")}>
      <ConnectionBadge status={status} dotOnly={inHeader} />
      {students.length === 0 ? (
        <p className="truncate text-sm text-muted-foreground">{t("noStudents")}</p>
      ) : (
        <ScrollRow label={t("whoseAnswers")}>
          {students.map((s) => {
            const p = online.get(s.id);
            const here = p?.lessonId === lessonId;
            const n = here ? sectionNumber(p?.sectionId ?? null) : null;
            const where = !p ? t("offline") : here ? (n ? t("inSection", { n }) : t("inLesson")) : t("elsewhere");
            const count = Object.keys(answers[s.id] ?? {}).length;
            const name = s.fullName || t("noName");
            return (
              <Chip key={s.id} active={viewing === s.id} onClick={() => onView(s.id)} label={`${name}: ${where}`} slim={inHeader}>
                <span className="relative flex size-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-medium text-primary">
                  {initials(s.fullName)}
                  <span
                    className={cn(
                      "absolute -right-0.5 -bottom-0.5 size-3 rounded-full border-2 border-card",
                      !p ? "bg-muted-foreground/40" : here ? "bg-emerald-500" : "bg-amber-400",
                    )}
                    aria-hidden="true"
                  />
                </span>
                <span className="flex min-w-0 flex-col text-left">
                  <span className="max-w-32 truncate text-sm leading-tight font-medium">{name}</span>
                  <span className="truncate text-xs leading-tight text-muted-foreground">
                    {where} · {t("answered", { count })}
                  </span>
                </span>
              </Chip>
            );
          })}
        </ScrollRow>
      )}
    </section>
  );
}

/**
 * A row that scrolls sideways without a scrollbar: soft edges and round arrow
 * buttons show that there are more students to the left or right.
 */
function ScrollRow({ label, children }: { label: string; children: React.ReactNode }) {
  const t = useTranslations("live");
  const ref = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ left: false, right: false });

  const measure = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const left = el.scrollLeft > 2;
    const right = el.scrollLeft + el.clientWidth < el.scrollWidth - 2;
    setEdges((e) => (e.left === left && e.right === right ? e : { left, right }));
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    for (const child of el.children) observer.observe(child);
    return () => observer.disconnect();
  }, [measure, children]);

  function scroll(direction: 1 | -1) {
    const el = ref.current;
    if (el) el.scrollBy({ left: direction * Math.max(160, el.clientWidth * 0.8), behavior: "smooth" });
  }

  // Soft edges where more students are hidden.
  const fade = `linear-gradient(to right, ${edges.left ? "transparent, #000 2.5rem" : "#000"}, ${edges.right ? "#000 calc(100% - 2.5rem), transparent" : "#000"})`;

  return (
    <div className="relative flex min-w-0 flex-1 items-center">
      <div
        ref={ref}
        onScroll={measure}
        role="group"
        aria-label={label}
        className="flex min-w-0 flex-1 gap-2 overflow-x-auto px-0.5 py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ maskImage: fade, WebkitMaskImage: fade }}
      >
        {children}
      </div>
      {edges.left && <ArrowButton side="left" label={t("previousStudents")} onClick={() => scroll(-1)} />}
      {edges.right && <ArrowButton side="right" label={t("moreStudents")} onClick={() => scroll(1)} />}
    </div>
  );
}

function ArrowButton({ side, label, onClick }: { side: "left" | "right"; label: string; onClick: () => void }) {
  const Icon = side === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      className={cn(
        "absolute top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-full border bg-background text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-foreground",
        side === "left" ? "left-0" : "right-0",
      )}
    >
      <Icon className="size-4" aria-hidden="true" />
    </button>
  );
}

function Chip({
  active,
  onClick,
  label,
  slim,
  children,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  slim: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      aria-label={label}
      onClick={onClick}
      className={cn(
        "flex shrink-0 items-center gap-2 rounded-xl border bg-card px-2 transition-colors hover:bg-accent",
        slim ? "h-10 py-0.5" : "min-h-10 py-1",
        active && "border-primary bg-primary/5 ring-2 ring-primary/30",
      )}
    >
      {children}
    </button>
  );
}

export function ConnectionBadge({ status, dotOnly = false }: { status: LiveStatus; dotOnly?: boolean }) {
  const t = useTranslations("live");
  if (status === "offline") {
    return (
      <span className="flex shrink-0 items-center gap-1 text-xs font-medium text-destructive" role="status" title={t("offlineStatus")}>
        <CloudOff className="size-3.5" aria-hidden="true" />
        <span className={dotOnly ? "sr-only" : undefined}>{t("offlineStatus")}</span>
      </span>
    );
  }
  if (status === "connecting") {
    return (
      <span className="flex shrink-0 items-center gap-1 text-xs text-muted-foreground" role="status" title={t("connecting")}>
        <Loader2 className="size-3.5 animate-spin" aria-hidden="true" />
        <span className={dotOnly ? "sr-only" : undefined}>{t("connecting")}</span>
      </span>
    );
  }
  return (
    <span className="flex shrink-0 items-center gap-1.5 text-xs text-muted-foreground" role="status" title={t("online")}>
      <span className="size-2 rounded-full bg-emerald-500" aria-hidden="true" />
      <span className={dotOnly ? "sr-only" : "max-sm:sr-only"}>{t("online")}</span>
    </span>
  );
}
