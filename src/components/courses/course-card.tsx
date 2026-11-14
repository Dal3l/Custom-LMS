import { getLocale, getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { languageName } from "@/features/courses/languages";
import type { CourseListItem } from "@/features/courses/queries";
import { Link } from "@/i18n/navigation";
import { CourseCover } from "./course-cover";

export async function CourseCard({ course, href }: { course: CourseListItem; href?: string }) {
  const [t, locale] = await Promise.all([getTranslations("courses"), getLocale()]);
  return (
    <Link href={href ?? `/courses/${course.id}`} className="group block h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-ring">
      <Card className="h-full gap-3 rounded-2xl p-3 transition-shadow group-hover:shadow-md">
        <CourseCover path={course.cover_path} language={course.language} />
        <div className="flex flex-col gap-2 px-1 pb-1">
          <h2 className="line-clamp-2 font-semibold">{course.title}</h2>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{languageName(course.language, locale)}</Badge>
            {course.level && <Badge variant="outline">{course.level}</Badge>}
          </div>
          <p className="text-sm text-muted-foreground">
            {t("modulesCount", { count: course.moduleCount })} · {t("lessonsCount", { count: course.lessonCount })}
          </p>
        </div>
      </Card>
    </Link>
  );
}
