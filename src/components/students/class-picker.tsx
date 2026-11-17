"use client";

import { Check, Loader2, Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addStudentToClass, createClassForStudent } from "@/features/classes/actions";
import type { MyClass } from "@/features/students/queries";
import { useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

/**
 * Where a student goes: one of the teacher's classes, or a new class made for
 * them (individual by default, named after the student).
 */
export function ClassPicker({
  studentId,
  studentName,
  classes,
  onDone,
}: {
  studentId: string;
  studentName: string;
  classes: MyClass[];
  onDone: () => void;
}) {
  const t = useTranslations("students");
  const tc = useTranslations("classes");
  const router = useRouter();
  const [creating, setCreating] = useState(classes.length === 0);
  const [name, setName] = useState(studentName);
  const [kind, setKind] = useState<"individual" | "group">("individual");
  const [pending, startTransition] = useTransition();
  const [busy, setBusy] = useState<string | null>(null);

  function add(cls: MyClass) {
    setBusy(cls.id);
    startTransition(async () => {
      const r = await addStudentToClass(studentId, cls.id);
      setBusy(null);
      if (!r.ok) return void toast.error(r.error === "classFull" ? tc("errors.classFull") : t("failed"));
      toast.success(t("addedToClass", { name: studentName, cls: cls.name }));
      router.refresh();
      onDone();
    });
  }

  function create(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    setBusy("new");
    startTransition(async () => {
      const r = await createClassForStudent(studentId, name.trim(), kind);
      setBusy(null);
      if (!r.ok) return void toast.error(t("failed"));
      toast.success(t("classCreated", { cls: name.trim() }));
      router.refresh();
      onDone();
    });
  }

  return (
    <section className="flex flex-col gap-3 rounded-xl border p-3" aria-label={t("whereTitle")}>
      <h3 className="font-medium">{t("whereTitle")}</h3>
      {classes.length > 0 && (
        <ul className="flex max-h-56 flex-col gap-1 overflow-y-auto" aria-label={t("existingClasses")}>
          {classes.map((c) => {
            const member = c.studentIds.includes(studentId);
            const full = c.kind === "individual" && c.studentIds.length > 0 && !member;
            return (
              <li key={c.id} className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-accent/50">
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="truncate font-medium">{c.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {tc(`kind.${c.kind}`)} · {t("studentsCount", { count: c.studentIds.length })}
                    {full && ` · ${t("taken")}`}
                  </span>
                </span>
                {member ? (
                  <span className="flex items-center gap-1 text-sm text-emerald-700">
                    <Check className="size-4" aria-hidden="true" />
                    {t("alreadyIn")}
                  </span>
                ) : (
                  <Button size="sm" variant="outline" disabled={pending || full} onClick={() => add(c)} aria-label={t("addToNamed", { cls: c.name })}>
                    {busy === c.id ? <Loader2 className="animate-spin" aria-hidden="true" /> : <Plus aria-hidden="true" />}
                    {t("add")}
                  </Button>
                )}
              </li>
            );
          })}
        </ul>
      )}
      {creating ? (
        <form onSubmit={create} className="flex flex-col gap-2 rounded-lg bg-muted/40 p-2">
          <Label htmlFor="new-class-name">{t("newClassName")}</Label>
          <Input id="new-class-name" value={name} maxLength={100} onChange={(e) => setName(e.target.value)} />
          <div className="flex gap-2" role="radiogroup" aria-label={tc("kindLabel")}>
            {(["individual", "group"] as const).map((k) => (
              <button
                key={k}
                type="button"
                role="radio"
                aria-checked={kind === k}
                onClick={() => setKind(k)}
                className={cn(
                  "flex-1 rounded-lg border px-3 py-1.5 text-sm",
                  kind === k ? "border-primary bg-primary/10 font-medium text-primary" : "bg-card hover:bg-accent",
                )}
              >
                {tc(`kind.${k}`)}
              </button>
            ))}
          </div>
          <Button type="submit" disabled={pending || !name.trim()}>
            {busy === "new" ? <Loader2 className="animate-spin" aria-hidden="true" /> : <Plus aria-hidden="true" />}
            {t("createClass")}
          </Button>
        </form>
      ) : (
        <Button variant="ghost" className="w-fit" onClick={() => setCreating(true)}>
          <Plus aria-hidden="true" />
          {t("newClass")}
        </Button>
      )}
    </section>
  );
}
