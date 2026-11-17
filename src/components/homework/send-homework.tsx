"use client";

import { CircleCheck, ClipboardCheck, ClipboardList, Loader2, Send, Trash2 } from "lucide-react";
import { useFormatter, useTranslations } from "next-intl";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { ClassStudent } from "@/features/classes/queries";
import { deleteHomework, sendHomework } from "@/features/homework/actions";
import type { SentHomework } from "@/features/homework/queries";
import { Link, useRouter } from "@/i18n/navigation";

/** Which students already got this exercise in some homework of the lesson. */
export function receivedBy(sent: SentHomework[], exerciseId: string): Set<string> {
  const ids = new Set<string>();
  for (const h of sent) if (h.exerciseIds.includes(exerciseId)) for (const s of h.studentIds) ids.add(s);
  return ids;
}

/**
 * "To homework": a check mark on each exercise of the lesson's Homework part,
 * and whether it was already sent (to everyone or to some of the students).
 */
export function HomeworkPick({
  checked,
  onChange,
  sentTo,
  students,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  /** how many students already got this exercise */
  sentTo: number;
  students: number;
}) {
  const t = useTranslations("homework");
  return (
    <span className="ml-auto flex shrink-0 items-center gap-2">
      {sentTo > 0 && (
        <span className="flex items-center gap-1 text-xs text-emerald-700">
          <CircleCheck className="size-3.5" aria-hidden="true" />
          {sentTo >= students ? t("sentAll") : t("sentSome", { done: sentTo, total: students })}
        </span>
      )}
      <Label className="flex cursor-pointer items-center gap-2 rounded-lg border px-2 py-1 text-sm font-normal">
        <Checkbox checked={checked} onCheckedChange={(v) => onChange(v === true)} />
        {t("pick")}
      </Label>
    </span>
  );
}

/**
 * Under the Homework sections: "Send homework · N" for the ticked exercises,
 * and, once something was sent, a button with how many handed it in that
 * opens the sent homework (answers, cancel).
 */
export function HomeworkFooter({
  picked,
  sent,
  answersHref,
  onOpen,
}: {
  picked: number;
  sent: SentHomework[];
  /** the lesson's Homework tab: the students' answers */
  answersHref: string | null;
  onOpen: () => void;
}) {
  const t = useTranslations("homework");
  const total = sent.reduce((n, h) => n + h.students, 0);
  const done = sent.reduce((n, h) => n + h.submitted, 0);
  const toCheck = sent.reduce((n, h) => n + h.toCheck, 0);
  return (
    <>
      {answersHref && (
        <Button asChild variant="outline">
          <Link href={answersHref}>
            <ClipboardCheck aria-hidden="true" />
            {t("answers")}
            {toCheck > 0 && (
              <span className="rounded-full bg-violet-600 px-1.5 text-xs text-white tabular-nums" aria-label={t("toCheckCount", { count: toCheck })}>
                {toCheck}
              </span>
            )}
          </Link>
        </Button>
      )}
      {sent.length > 0 && (
        <Button variant="outline" onClick={onOpen}>
          <ClipboardList aria-hidden="true" />
          {t("sentSummary", { done, total })}
        </Button>
      )}
      <Button onClick={onOpen} variant={picked === 0 && sent.length > 0 ? "secondary" : "default"}>
        <Send aria-hidden="true" />
        {t("sendPicked", { count: picked })}
      </Button>
    </>
  );
}

/**
 * Sending homework: the exercises the teacher ticked in the Homework sections,
 * to whom (groups), an optional due date. Also what was already sent from this
 * lesson and how many handed it in.
 */
export function SendHomeworkDialog({
  open,
  onOpenChange,
  classId,
  lessonId,
  chosen,
  hasHomework,
  builderHref,
  students,
  sent,
  onSent,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  classId: string;
  lessonId: string;
  /** ticked exercises, in the lesson's order */
  chosen: string[];
  /** the lesson has a Homework part */
  hasHomework: boolean;
  builderHref: string | null;
  students: ClassStudent[];
  sent: SentHomework[];
  onSent: () => void;
}) {
  const t = useTranslations("homework");
  const format = useFormatter();
  const router = useRouter();
  // Who already has every ticked exercise: not ticked by default, marked "already got it".
  const received = students.filter((s) => chosen.length > 0 && chosen.every((e) => receivedBy(sent, e).has(s.id))).map((s) => s.id);
  const fresh = () => new Set(students.map((s) => s.id).filter((id) => !received.includes(id)));
  const [to, setTo] = useState<Set<string>>(fresh);
  const [wasOpen, setWasOpen] = useState(open);
  if (open !== wasOpen) {
    setWasOpen(open);
    if (open) setTo(fresh());
  }
  const [due, setDue] = useState("");
  const [pending, startTransition] = useTransition();
  const date = (iso: string) => format.dateTime(new Date(iso), { dateStyle: "medium", timeStyle: "short" });

  function send() {
    startTransition(async () => {
      const r = await sendHomework({
        classId,
        lessonId,
        exerciseIds: chosen,
        studentIds: students.filter((s) => to.has(s.id)).map((s) => s.id),
        dueAt: due ? new Date(due).toISOString() : null,
      });
      if (r.ok) {
        toast.success(t("sent"));
        setDue("");
        onSent();
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90svh] overflow-y-auto sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t("sendTitle")}</DialogTitle>
          <DialogDescription>{hasHomework ? t("sendHint") : t("noHomeworkPart")}</DialogDescription>
        </DialogHeader>
        {!hasHomework ? (
          builderHref && (
            <Button asChild variant="outline" className="w-fit">
              <Link href={builderHref}>{t("openBuilder")}</Link>
            </Button>
          )
        ) : (
          <div className="flex flex-col gap-4">
            <p className="rounded-lg bg-muted px-3 py-2 text-sm">
              {chosen.length ? t("chosenCount", { count: chosen.length }) : t("chooseFirst")}
            </p>
            {(students.length > 1 || received.length > 0) && (
              <section className="flex flex-col gap-2" aria-label={t("to")}>
                <h3 className="text-sm font-medium">{t("to")}</h3>
                {students.map((s) => (
                  <Label key={s.id} className="flex items-center gap-2 font-normal">
                    <Checkbox
                      checked={to.has(s.id)}
                      onCheckedChange={(v) => {
                        const next = new Set(to);
                        if (v === true) next.add(s.id);
                        else next.delete(s.id);
                        setTo(next);
                      }}
                    />
                    {s.fullName || t("noName")}
                    {received.includes(s.id) && <span className="text-xs text-muted-foreground">· {t("alreadyGot")}</span>}
                  </Label>
                ))}
              </section>
            )}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="homework-due">{t("due")}</Label>
              <Input id="homework-due" type="datetime-local" value={due} onChange={(e) => setDue(e.target.value)} />
              <p className="text-xs text-muted-foreground">{t("dueHint")}</p>
            </div>
            {students.length === 0 && <p className="text-sm text-muted-foreground">{t("noStudents")}</p>}
            <Button onClick={send} disabled={pending || chosen.length === 0 || to.size === 0 || students.length === 0}>
              {pending ? <Loader2 className="animate-spin" aria-hidden="true" /> : <Send aria-hidden="true" />}
              {t("send", { count: chosen.length })}
            </Button>
          </div>
        )}

        {sent.length > 0 && (
          <section className="flex flex-col gap-2" aria-label={t("alreadySent")}>
            <h3 className="text-sm font-medium">{t("alreadySent")}</h3>
            <ul className="flex flex-col gap-2">
              {sent.map((h) => (
                <li key={h.id} className="flex items-center gap-2 rounded-lg border p-2 text-sm">
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span>
                      {t("sentOn", { date: date(h.createdAt) })} · {t("exercisesCount", { count: h.exerciseIds.length })}
                    </span>
                    <span className="text-muted-foreground">
                      {t("handedIn", { done: h.submitted, total: h.students })}
                      {h.dueAt && ` · ${t("dueOn", { date: date(h.dueAt) })}`}
                    </span>
                  </span>
                  {h.firstStudentId && (
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/homework/${h.id}/${h.firstStudentId}`}>{t("openAnswers")}</Link>
                    </Button>
                  )}
                  <Button type="button" variant="ghost" size="icon-sm" aria-label={t("remove")} title={t("remove")} disabled={pending} onClick={() => remove(h.id)}>
                    <Trash2 aria-hidden="true" />
                  </Button>
                </li>
              ))}
            </ul>
          </section>
        )}
      </DialogContent>
    </Dialog>
  );
}
