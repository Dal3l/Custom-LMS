import { User, Users } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { ClassListItem } from "@/features/classes/queries";
import { Link } from "@/i18n/navigation";
import { CallButton } from "./call-button";

export async function ClassCard({ item, isTeacher }: { item: ClassListItem; isTeacher: boolean }) {
  const t = await getTranslations("classes");
  const Icon = item.kind === "group" ? Users : User;
  return (
    <Card className="h-full gap-3 rounded-2xl p-4 transition-shadow hover:shadow-md">
      <Link href={`/classes/${item.id}`} className="flex items-start gap-3 rounded-xl focus-visible:outline-2 focus-visible:outline-ring">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <div className="flex min-w-0 flex-col gap-1">
          <h2 className="line-clamp-2 font-semibold">{item.name}</h2>
          <p className="text-sm text-muted-foreground">
            {isTeacher ? t("studentsCount", { count: item.studentCount }) : item.teacherName}
          </p>
        </div>
      </Link>
      <div className="mt-auto flex items-center justify-between gap-2">
        <Badge variant="secondary">{t(`kind.${item.kind}`)}</Badge>
        {!isTeacher && item.call_url && <CallButton url={item.call_url} size="sm" />}
      </div>
    </Card>
  );
}
