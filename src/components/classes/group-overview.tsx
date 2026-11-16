"use client";

import { Check, Circle, Minus, Table2, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import type { ClassStudent } from "@/features/classes/queries";
import { checkMode } from "@/features/exercises/catalog";
import type { StudentAnswers } from "@/features/lessons/answers-shared";
import type { StudentSection } from "@/features/lessons/queries";
import { exerciseNumber } from "@/features/lessons/sections";
import { cellStatus, correctCount } from "@/features/live/overview";
import { cn } from "@/lib/utils";
import { ToolButton } from "./lesson-tools";

/**
 * "Overview": a table of students × exercises — who answered what, right or not,
 * updated live. Tapping a cell opens that student's answer at that exercise.
 */
export function GroupOverview({
  students,
  sections,
  answers,
  onPick,
}: {
  students: ClassStudent[];
  sections: StudentSection[];
  answers: StudentAnswers;
  onPick: (studentId: string, sectionId: string, exerciseId: string) => void;
}) {
  const t = useTranslations("live");
  const [open, setOpen] = useState(false);
  // Only exercises with answers to check.
  const rows = sections.flatMap((s, si) =>
    s.exercises
      .map((e, ei) => ({ exercise: e, sectionId: s.id, number: exerciseNumber(si, ei) }))
      .filter((c) => checkMode(c.exercise.type) !== null),
  );

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <ToolButton label={t("overview")}>
          <Table2 aria-hidden="true" />
        </ToolButton>
      </SheetTrigger>
      <SheetContent side="right" className="w-full gap-0 sm:max-w-2xl">
        <SheetHeader>
          <SheetTitle>{t("overviewTitle")}</SheetTitle>
          <SheetDescription>{t("overviewHint")}</SheetDescription>
        </SheetHeader>
        <div className="min-h-0 flex-1 overflow-auto px-4 pb-4">
          {rows.length === 0 ? (
            <p className="py-8 text-center text-muted-foreground">{t("overviewEmpty")}</p>
          ) : (
            // Exercises go down, students across: easy to read even with many
            // exercises. The header row and the exercise column stay in place
            // while scrolling; their solid background hides what scrolls under.
            <table className="w-full border-separate border-spacing-0 text-sm">
              <thead>
                <tr>
                  <th className="sticky top-0 left-0 z-20 bg-popover p-1 text-left font-medium">{t("exercise")}</th>
                  {students.map((s) => (
                    <th
                      key={s.id}
                      scope="col"
                      title={s.fullName || t("noName")}
                      className="sticky top-0 z-10 max-w-28 min-w-16 bg-popover p-1 text-center leading-tight font-medium break-words"
                    >
                      {s.fullName || t("noName")}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((c) => (
                  <tr key={c.exercise.id}>
                    <th
                      scope="row"
                      title={c.exercise.title || undefined}
                      className="sticky left-0 z-10 max-w-40 truncate bg-popover p-1 pr-2 text-left font-normal"
                    >
                      <span className="font-medium tabular-nums">{c.number}</span>
                      {c.exercise.title && <span className="ml-1.5 text-muted-foreground">{c.exercise.title}</span>}
                    </th>
                    {students.map((s) => {
                      const status = cellStatus(answers[s.id]?.[c.exercise.id]);
                      const label = `${s.fullName || t("noName")}, ${c.number}: ${
                        status.kind === "partial" ? t("cell.partial", { right: status.right, total: status.total }) : t(`cell.${status.kind}`)
                      }`;
                      return (
                        <td key={s.id} className="p-1">
                          <button
                            type="button"
                            aria-label={label}
                            title={label}
                            onClick={() => {
                              setOpen(false);
                              onPick(s.id, c.sectionId, c.exercise.id);
                            }}
                            className={cn(
                              "flex h-9 w-full min-w-10 items-center justify-center rounded-md border text-xs font-medium tabular-nums hover:ring-2 hover:ring-ring/40",
                              status.kind === "correct" && "border-emerald-300 bg-emerald-50 text-emerald-700",
                              status.kind === "wrong" && "border-red-300 bg-red-50 text-red-700",
                              status.kind === "partial" && "border-amber-300 bg-amber-50 text-amber-800",
                              status.kind === "unchecked" && "border-sky-200 bg-sky-50 text-sky-700",
                              status.kind === "none" && "text-muted-foreground",
                            )}
                          >
                            {status.kind === "correct" && <Check className="size-4" aria-hidden="true" />}
                            {status.kind === "wrong" && <X className="size-4" aria-hidden="true" />}
                            {status.kind === "partial" && `${status.right}/${status.total}`}
                            {status.kind === "unchecked" && <Circle className="size-3 fill-current" aria-hidden="true" />}
                            {status.kind === "none" && <Minus className="size-4" aria-hidden="true" />}
                          </button>
                        </td>
                      );
                    })}
                  </tr>
                ))}
                <tr>
                  <th scope="row" className="sticky left-0 z-10 bg-popover p-1 text-left font-medium">
                    {t("total")}
                  </th>
                  {students.map((s) => (
                    <td key={s.id} className="p-1 text-center font-medium tabular-nums">
                      {correctCount(answers[s.id])}/{rows.length}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
