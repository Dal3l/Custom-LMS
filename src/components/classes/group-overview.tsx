"use client";

import { Check, Circle, Minus, Table2, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import type { ClassStudent } from "@/features/classes/queries";
import { checkMode } from "@/features/exercises/catalog";
import type { StudentAnswers } from "@/features/lessons/answers-shared";
import type { StudentSection } from "@/features/lessons/queries";
import { exerciseNumber } from "@/features/lessons/sections";
import { cellStatus, correctCount } from "@/features/live/overview";
import { cn } from "@/lib/utils";

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
  const columns = sections.flatMap((s, si) =>
    s.exercises
      .map((e, ei) => ({ exercise: e, sectionId: s.id, number: exerciseNumber(si, ei) }))
      .filter((c) => checkMode(c.exercise.type) !== null),
  );

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button type="button" size="sm" variant="outline">
          <Table2 aria-hidden="true" />
          <span className="max-sm:sr-only">{t("overview")}</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full gap-0 sm:max-w-2xl">
        <SheetHeader>
          <SheetTitle>{t("overviewTitle")}</SheetTitle>
          <SheetDescription>{t("overviewHint")}</SheetDescription>
        </SheetHeader>
        <div className="min-h-0 flex-1 overflow-auto px-4 pb-4">
          {columns.length === 0 ? (
            <p className="py-8 text-center text-muted-foreground">{t("overviewEmpty")}</p>
          ) : (
            <table className="w-full border-separate border-spacing-1 text-sm">
              <thead>
                <tr>
                  <th className="sticky left-0 bg-background text-left font-medium">{t("studentsTitle")}</th>
                  {columns.map((c) => (
                    <th key={c.exercise.id} className="min-w-10 text-center font-medium tabular-nums text-muted-foreground">
                      {c.number}
                    </th>
                  ))}
                  <th className="px-1 text-center font-medium">{t("total")}</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s) => (
                  <tr key={s.id}>
                    <th scope="row" className="sticky left-0 max-w-36 truncate bg-background pr-2 text-left font-medium">
                      {s.fullName || t("noName")}
                    </th>
                    {columns.map((c) => {
                      const status = cellStatus(answers[s.id]?.[c.exercise.id]);
                      const label = `${s.fullName || t("noName")}, ${c.number}: ${
                        status.kind === "partial" ? t("cell.partial", { right: status.right, total: status.total }) : t(`cell.${status.kind}`)
                      }`;
                      return (
                        <td key={c.exercise.id} className="p-0">
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
                    <td className="px-1 text-center font-medium tabular-nums">
                      {correctCount(answers[s.id])}/{columns.length}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
