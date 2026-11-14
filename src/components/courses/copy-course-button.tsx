"use client";

import { Copy, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTransition } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { copyLibraryCourse } from "@/features/courses/actions";
import { useRouter } from "@/i18n/navigation";

/** Copies a library course into the teacher's own courses and opens the copy. */
export function CopyCourseButton({ courseId }: { courseId: string }) {
  const t = useTranslations("library");
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  function copy() {
    startTransition(async () => {
      const result = await copyLibraryCourse(courseId);
      if (result.ok) {
        toast.success(t("copied"));
        router.push(`/courses/${result.data}`);
      } else {
        toast.error(t("copyFailed"));
      }
    });
  }

  return (
    <Button variant="outline" className="w-fit" onClick={copy} disabled={pending}>
      {pending ? <Loader2 className="animate-spin" aria-hidden="true" /> : <Copy aria-hidden="true" />}
      {t("copyToMine")}
    </Button>
  );
}
