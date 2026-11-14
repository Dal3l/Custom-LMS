"use client";

import { CloudOff, Loader2, UserRound } from "lucide-react";
import { useTranslations } from "next-intl";
import type { ClassStudent } from "@/features/classes/queries";
import type { StudentAnswers } from "@/features/lessons/answers-shared";
import type { StudentSection } from "@/features/lessons/queries";
import type { LiveStatus, StudentPresence } from "@/features/live/types";
import { initials } from "@/lib/initials";
import { cn } from "@/lib/utils";

/**
 * Above the lesson for the teacher: connection state and the class's students —
 * who is online, in which section, how many exercises they answered. Picking a
 * student shows their answers live; "My view" lets the teacher try the lesson.
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
}: {
  students: ClassStudent[];
  sections: StudentSection[];
  lessonId: string;
  online: Map<string, StudentPresence>;
  status: LiveStatus;
  answers: StudentAnswers;
  viewing: string | null;
  onView: (studentId: string | null) => void;
}) {
  const t = useTranslations("live");
  const sectionNumber = (id: string | null) => {
    const i = sections.findIndex((s) => s.id === id);
    return i >= 0 ? i + 1 : null;
  };

  return (
    <section className="flex flex-col gap-2 rounded-2xl border bg-card p-3" aria-label={t("studentsLabel")}>
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-sm font-medium">{t("studentsTitle")}</h2>
        <ConnectionBadge status={status} />
      </div>
      {students.length === 0 ? (
        <p className="text-sm text-muted-foreground">{t("noStudents")}</p>
      ) : (
        <div className="-mx-3 flex gap-2 overflow-x-auto px-3 pb-1" role="group" aria-label={t("whoseAnswers")}>
          <Chip active={viewing === null} onClick={() => onView(null)} label={t("myView")}>
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted">
              <UserRound className="size-4" aria-hidden="true" />
            </span>
            <span className="text-sm font-medium">{t("myView")}</span>
          </Chip>
          {students.map((s) => {
            const p = online.get(s.id);
            const here = p?.lessonId === lessonId;
            const n = here ? sectionNumber(p?.sectionId ?? null) : null;
            const where = !p ? t("offline") : here ? (n ? t("inSection", { n }) : t("inLesson")) : t("elsewhere");
            const count = Object.keys(answers[s.id] ?? {}).length;
            const name = s.fullName || t("noName");
            return (
              <Chip key={s.id} active={viewing === s.id} onClick={() => onView(s.id)} label={`${name}: ${where}`}>
                <span className="relative flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-medium text-primary">
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
                  <span className="max-w-32 truncate text-sm font-medium">{name}</span>
                  <span className="text-xs text-muted-foreground">
                    {where} · {t("answered", { count })}
                  </span>
                </span>
              </Chip>
            );
          })}
        </div>
      )}
    </section>
  );
}

function Chip({
  active,
  onClick,
  label,
  children,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      aria-label={label}
      onClick={onClick}
      className={cn(
        "flex min-h-12 shrink-0 items-center gap-2 rounded-xl border px-2 py-1.5 transition-colors hover:bg-accent",
        active && "border-primary bg-primary/5 ring-2 ring-primary/30",
      )}
    >
      {children}
    </button>
  );
}

export function ConnectionBadge({ status }: { status: LiveStatus }) {
  const t = useTranslations("live");
  if (status === "offline") {
    return (
      <span className="flex items-center gap-1 text-xs font-medium text-destructive" role="status">
        <CloudOff className="size-3.5" aria-hidden="true" />
        {t("offlineStatus")}
      </span>
    );
  }
  if (status === "connecting") {
    return (
      <span className="flex items-center gap-1 text-xs text-muted-foreground" role="status">
        <Loader2 className="size-3.5 animate-spin" aria-hidden="true" />
        {t("connecting")}
      </span>
    );
  }
  return (
    <span className="flex items-center gap-1.5 text-xs text-muted-foreground" role="status">
      <span className="size-2 rounded-full bg-emerald-500" aria-hidden="true" />
      {t("online")}
    </span>
  );
}
