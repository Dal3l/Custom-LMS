"use client";

import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import type { HomeworkStatus } from "@/features/homework/status";
import { cn } from "@/lib/utils";

const STYLE: Record<HomeworkStatus, string> = {
  new: "border-sky-300 bg-sky-50 text-sky-800",
  in_progress: "border-amber-300 bg-amber-50 text-amber-800",
  submitted: "border-violet-300 bg-violet-50 text-violet-800",
  reviewed: "border-emerald-300 bg-emerald-50 text-emerald-800",
  overdue: "border-red-300 bg-red-50 text-red-800",
};

/** `forTeacher`: "Handed in" reads "Waiting for a check" for the teacher. */
export function HomeworkStatusBadge({ status, forTeacher = false }: { status: HomeworkStatus; forTeacher?: boolean }) {
  const t = useTranslations("homework.status");
  return (
    <Badge variant="outline" className={cn(STYLE[status])}>
      {forTeacher && status === "submitted" ? t("toCheck") : t(status)}
    </Badge>
  );
}
