import { ChevronLeft } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { HomeworkReview } from "@/components/homework/homework-review";
import { Button } from "@/components/ui/button";
import { idSchema } from "@/features/classes/schemas";
import { getHomeworkReview } from "@/features/homework/queries";
import { markHomeworkNotificationsRead } from "@/features/notifications/actions";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { requireProfile } from "@/lib/auth";

/** The teacher checks one student's homework: answers, tries, comments. */
export default async function HomeworkReviewPage({ params }: PageProps<"/[locale]/homework/[homeworkId]/[studentId]">) {
  const { locale, homeworkId, studentId } = (await params) as { locale: Locale; homeworkId: string; studentId: string };
  setRequestLocale(locale);
  const profile = await requireProfile(locale);
  if (profile.role !== "teacher" || !idSchema.safeParse(homeworkId).success || !idSchema.safeParse(studentId).success) {
    notFound();
  }
  const review = await getHomeworkReview(homeworkId, studentId);
  if (!review) notFound();
  // Seen now: "<student> handed in this homework".
  await markHomeworkNotificationsRead([homeworkId], studentId);
  return (
    <HomeworkReview
      review={review}
      studentHref={(id) => `/homework/${review.id}/${id}`}
      header={
        <Button asChild variant="ghost" size="sm" className="-ml-2 w-fit text-muted-foreground">
          <Link href={`/classes/${review.classId}?tab=homework`}>
            <ChevronLeft aria-hidden="true" />
            {review.className}
          </Link>
        </Button>
      }
    />
  );
}
