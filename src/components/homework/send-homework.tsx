"use client";

import { ClipboardList, Loader2, Send, Trash2 } from "lucide-react";
import { useFormatter, useTranslations } from "next-intl";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { ToolButton } from "@/components/classes/lesson-tools";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import type { ClassStudent } from "@/features/classes/queries";
import { exerciseMeta } from "@/features/exercises/catalog";
import { deleteHomework, sendHomework } from "@/features/homework/actions";
import type { SentHomework } from "@/features/homework/queries";
import type { StudentSection } from "@/features/lessons/queries";
import { Link, useRouter } from "@/i18n/navigation";

/**
 * The teacher's "Homework" tool in a class lesson: the lesson's homework part
 * (built in the lesson builder) with check boxes; send to the class with an
 * optional due date. Also lists what was already sent and how many handed in.
 */
export function SendHomeworkTool({
  classId,
  lessonId,
  builderHref,
  sections,
  students,
  sent,
}: {
  classId: string;
  lessonId: string;
  /** the lesson builder, when the teacher owns the course */
  builderHref: string | null;
  sections: StudentSection[];
  students: ClassStudent[];
  sent: SentHomework[];
}) {
  const t = useTranslations("homework");
  const te = useTranslations("exercises.types");
  const format = useFormatter();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const all = sections.flatMap((s) => s.exercises.map((e) => e.id));
  const [chosen, setChosen] = useState<Set<string>>(() => new Set(all));
  const [to, setTo] = useState<Set<string>>(() => new Set(students.map((s) => s.id)));
  const [due, setDue] = useState("");
  const [pending, startTransition] = useTransition();

  function toggle(set: Set<string>, value: string, on: boolean) {
    const next = new Set(set);
    if (on) next.add(value);
    else next.delete(value);
    return next;
  }

  function send() {
    startTransition(async () => {
      const r = await sendHomework({
        classId,
        lessonId,
        // In the lesson's order.
        exerciseIds: all.filter((id) => chosen.has(id)),
        studentIds: students.filter((s) => to.has(s.id)).map((s) => s.id),
        dueAt: due ? new Date(due).toISOString() : null,
      });
      if (r.ok) {
        toast.success(t("sent"));
        setDue("");
        router.refresh();
      } else toast.error(t("sendFailed"));
    });
  }

  function remove(homeworkId: string) {
    startTransition(async () => {
      const r = await deleteHomework(homeworkId);
      if (r.ok) {
        toast.success(t("removed"));
        router.refresh();
      } else toast.error(t("sendFailed"));
    });
  }

  return (
    <>
      <ToolButton label={t("tool")} onClick={() => setOpen(true)}>
        <ClipboardList aria-hidden="true" />
      </ToolButton>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-full gap-0 sm:max-w-md">
          <SheetHeader>
            <SheetTitle>{t("sendTitle")}</SheetTitle>
            <SheetDescription>{t("sendHint")}</SheetDescription>
          </SheetHeader>
          <div className="flex min-h-0 flex-1 flex-col gap-5 overflow-y-auto px-4 pb-4">
            {all.length === 0 ? (
              <div className="flex flex-col gap-2 rounded-xl border border-dashed p-4 text-sm text-muted-foreground">
                <p>{t("noHomeworkPart")}</p>
                {builderHref && (
                  <Button asChild variant="outline" size="sm" className="w-fit">
                    <Link href={builderHref}>{t("openBuilder")}</Link>
                  </Button>
                )}
              </div>
            ) : (
              <>
                <section className="flex flex-col gap-2" aria-label={t("exercises")}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">{t("exercises")}</h3>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setChosen(chosen.size === all.length ? new Set() : new Set(all))}
                    >
                      {chosen.size === all.length ? t("none") : t("all")}
                    </Button>
                  </div>
                  {sections.map((s, si) => (
                    <div key={s.id} className="flex flex-col gap-1">
                      <p className="text-xs font-medium text-muted-foreground">
                        {si + 1}. {s.title}
                      </p>
                      {s.exercises.map((e, ei) => {
                        const meta = exerciseMeta(e.type);
                        const name = e.title || (meta ? te(`${meta.id}.name`) : e.type);
                        return (
                          <Label key={e.id} className="flex items-center gap-2 rounded-lg border p-2 font-normal">
                            <Checkbox checked={chosen.has(e.id)} onCheckedChange={(v) => setChosen(toggle(chosen, e.id, v === true))} />
                            <span className="text-muted-foreground tabular-nums">
                              {si + 1}.{ei + 1}
                            </span>
                            <span className="min-w-0 flex-1 truncate">{name}</span>
                          </Label>
                        );
                      })}
                    </div>
                  ))}
                </section>
                {students.length > 1 && (
                  <section className="flex flex-col gap-2" aria-label={t("to")}>
                    <h3 className="text-sm font-medium">{t("to")}</h3>
                    {students.map((s) => (
                      <Label key={s.id} className="flex items-center gap-2 font-normal">
                        <Checkbox checked={to.has(s.id)} onCheckedChange={(v) => setTo(toggle(to, s.id, v === true))} />
                        {s.fullName || t("noName")}
                      </Label>
                    ))}
                  </section>
                )}
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="homework-due">{t("due")}</Label>
                  <Input id="homework-due" type="datetime-local" value={due} onChange={(e) => setDue(e.target.value)} />
                  <p className="text-xs text-muted-foreground">{t("dueHint")}</p>
                </div>
                <Button onClick={send} disabled={pending || chosen.size === 0 || to.size === 0 || students.length === 0}>
                  {pending ? <Loader2 className="animate-spin" aria-hidden="true" /> : <Send aria-hidden="true" />}
                  {t("send", { count: chosen.size })}
                </Button>
                {students.length === 0 && <p className="text-sm text-muted-foreground">{t("noStudents")}</p>}
              </>
            )}

            {sent.length > 0 && (
              <section className="flex flex-col gap-2" aria-label={t("alreadySent")}>
                <h3 className="text-sm font-medium">{t("alreadySent")}</h3>
                <ul className="flex flex-col gap-2">
                  {sent.map((h) => (
                    <li key={h.id} className="flex items-center gap-2 rounded-lg border p-2 text-sm">
                      <span className="flex min-w-0 flex-1 flex-col">
                        <span>
                          {t("sentOn", { date: format.dateTime(new Date(h.createdAt), { dateStyle: "medium", timeStyle: "short" }) })}
                          {" · "}
                          {t("exercisesCount", { count: h.exerciseIds.length })}
                        </span>
                        <span className="text-muted-foreground">
                          {t("handedIn", { done: h.submitted, total: h.students })}
                          {h.dueAt && ` · ${t("dueOn", { date: format.dateTime(new Date(h.dueAt), { dateStyle: "medium", timeStyle: "short" }) })}`}
                        </span>
                      </span>
                      <Button type="button" variant="ghost" size="icon-sm" aria-label={t("remove")} title={t("remove")} disabled={pending} onClick={() => remove(h.id)}>
                        <Trash2 aria-hidden="true" />
                      </Button>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
