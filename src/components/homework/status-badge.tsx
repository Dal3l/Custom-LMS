"use client";

import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import type { HomeworkStatus } from "@/features/homework/status";
import { cn } from "@/lib/utils";

const STYLE: Record<HomeworkStatus, string> = {
  new: "border-sky-300 bg-sky-50 text-sky-800",
  in_progress: "border-amber-300 bg-amber-50 text-amber-800",
  submitted: "border-emerald-300 bg-emerald-50 text-emerald-800",
  overdue: "border-red-300 bg-red-50 text-red-800",
};

export function HomeworkStatusBadge({ status }: { status: HomeworkStatus }) {
  const t = useTranslations("homework.status");
  return (
    <Badge variant="outline" className={cn(STYLE[status])}>
      {t(status)}
    </Badge>
  );
}
