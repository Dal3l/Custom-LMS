import { ChevronLeft, Construction } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getCourseTree } from "@/features/courses/queries";
import { idSchema } from "@/features/courses/schemas";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { requireRole } from "@/lib/auth";

// Step 1.2 turns this page into the lesson builder.
export default async function LessonPage({
  params,
}: PageProps<"/[locale]/courses/[courseId]/lessons/[lessonId]">) {
  const { locale, courseId, lessonId } = (await params) as {
    locale: Locale;
    courseId: string;
    lessonId: string;
  };
  setRequestLocale(locale);
  const profile = await requireRole(locale, "teacher");
  if (!idSchema.safeParse(courseId).success || !idSchema.safeParse(lessonId).success) notFound();
  const tree = await getCourseTree(courseId);
  if (!tree || tree.course.owner_id !== profile.id) notFound();
  const mod = tree.modules.find((m) => m.lessons.some((l) => l.id === lessonId));
  const lesson = mod?.lessons.find((l) => l.id === lessonId);
  if (!mod || !lesson) notFound();
  const t = await getTranslations("courses");

  return (
    <div className="flex flex-col gap-6">
      <Link
        href={`/courses/${courseId}`}
        className="flex w-fit items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ChevronLeft className="size-4" aria-hidden="true" />
        {tree.course.title}
      </Link>
      <div className="flex flex-col gap-1">
        <p className="text-sm text-muted-foreground">{mod.title}</p>
        <h1 className="flex flex-wrap items-center gap-2 text-2xl font-semibold">
          {lesson.title}
          {lesson.is_test && <Badge variant="secondary">{t("testBadge")}</Badge>}
        </h1>
      </div>
      <Card className="rounded-2xl border-dashed">
        <CardContent className="flex flex-col items-center gap-3 py-10 text-center">
          <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-primary">
            <Construction className="size-6" aria-hidden="true" />
          </span>
          <p className="max-w-md text-muted-foreground">{t("lessonBuilderSoon")}</p>
        </CardContent>
      </Card>
    </div>
  );
}
