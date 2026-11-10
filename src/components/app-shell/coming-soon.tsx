import { Construction } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Card, CardContent } from "@/components/ui/card";
import type { NavKey } from "./nav-items";

type Section = Exclude<NavKey, "dashboard">;

/** Development stage (SPEC.md §13) in which each section arrives. */
const STAGE: Record<Section, number> = {
  classes: 2,
  courses: 1,
  library: 1,
  homework: 3,
  schedule: 5,
  vocabulary: 4,
  trainer: 4,
};

export async function ComingSoon({ section }: { section: Section }) {
  const t = await getTranslations();
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">{t(`nav.${section}`)}</h1>
      <Card className="rounded-2xl border-dashed">
        <CardContent className="flex flex-col items-center gap-3 py-10 text-center">
          <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-primary">
            <Construction className="size-6" aria-hidden="true" />
          </span>
          <h2 className="font-medium">{t("placeholder.title")}</h2>
          <p className="max-w-md text-muted-foreground">{t(`placeholder.${section}`)}</p>
          <p className="text-sm text-muted-foreground">{t("placeholder.stage", { stage: STAGE[section] })}</p>
        </CardContent>
      </Card>
    </div>
  );
}
