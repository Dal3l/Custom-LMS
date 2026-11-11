"use client";

import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { EXERCISE_GROUPS, EXERCISE_TYPES, type ExerciseTypeId } from "@/features/exercises/catalog";
import { EXERCISE_ICONS } from "@/features/exercises/icons";
import { cn } from "@/lib/utils";

/** "+ Exercise" window: all types grouped, with icon, name and a short description. */
export function ExercisePicker({
  open,
  onOpenChange,
  onPick,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onPick: (type: ExerciseTypeId) => void;
}) {
  const t = useTranslations("exercises");
  const tb = useTranslations("builder");
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90svh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>{tb("chooseExercise")}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-5">
          {EXERCISE_GROUPS.map((group) => (
            <section key={group} className="flex flex-col gap-2">
              <h3 className="text-sm font-medium text-muted-foreground">{t(`groups.${group}`)}</h3>
              <ul className="grid gap-2 sm:grid-cols-2">
                {EXERCISE_TYPES.filter((type) => type.group === group).map((type) => {
                  const Icon = EXERCISE_ICONS[type.icon];
                  return (
                    <li key={type.id}>
                      <button
                        type="button"
                        disabled={!type.available}
                        onClick={() => onPick(type.id)}
                        className={cn(
                          "flex h-full w-full items-start gap-3 rounded-xl border p-3 text-left transition-colors",
                          type.available
                            ? "hover:border-primary hover:bg-accent focus-visible:outline-2 focus-visible:outline-ring"
                            : "cursor-not-allowed opacity-60",
                        )}
                      >
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                          <Icon className="size-5" aria-hidden="true" />
                        </span>
                        <span className="flex min-w-0 flex-col gap-0.5">
                          <span className="flex items-center gap-2 font-medium">
                            {t(`types.${type.id}.name`)}
                            {!type.available && <Badge variant="outline">{t("soon")}</Badge>}
                          </span>
                          <span className="text-sm text-muted-foreground">{t(`types.${type.id}.description`)}</span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
