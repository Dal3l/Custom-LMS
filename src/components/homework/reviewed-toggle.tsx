"use client";

import { CircleCheck, Loader2, Undo2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTransition } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { setHomeworkReviewed } from "@/features/homework/actions";
import { useRouter } from "@/i18n/navigation";

/** "Mark as reviewed" for one student's homework (or undo it). */
export function ReviewedToggle({
  homeworkId,
  studentId,
  reviewed,
  classId,
}: {
  homeworkId: string;
  studentId: string;
  reviewed: boolean;
  /** after "Mark as reviewed": back to this class's Homework tab */
  classId: string;
}) {
  const t = useTranslations("homework.review");
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  function toggle() {
    startTransition(async () => {
      const r = await setHomeworkReviewed(homeworkId, studentId, !reviewed);
      if (!r.ok) return void toast.error(t("failed"));
      toast.success(reviewed ? t("unmarkedToast") : t("markedToast"));
      // Checked: back to the class's homework, to the next work waiting for a check.
      if (reviewed) router.refresh();
      else router.push(`/classes/${classId}?tab=homework`);
    });
  }

  return (
    <Button size={reviewed ? "default" : "lg"} variant={reviewed ? "outline" : "default"} onClick={toggle} disabled={pending}>
      {pending ? (
        <Loader2 className="animate-spin" aria-hidden="true" />
      ) : reviewed ? (
        <Undo2 aria-hidden="true" />
      ) : (
        <CircleCheck aria-hidden="true" />
      )}
      {reviewed ? t("unmark") : t("markReviewed")}
    </Button>
  );
}
