"use client";

import { BookA, FolderPlus, GraduationCap, MoreHorizontal, Search, Trash2, UserMinus, UserPlus } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { RegisterForm } from "@/components/classes/register-student-dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { deleteStudentAccount, removeFromMyStudents } from "@/features/classes/actions";
import type { MyClass, MyStudent } from "@/features/students/queries";
import { Link, useRouter } from "@/i18n/navigation";
import { initials } from "@/lib/initials";
import { ClassPicker } from "./class-picker";

/**
 * The Students page: everyone the teacher teaches, with their classes; "Add a
 * student" (account + message with login and password → into a class).
 */
export function StudentsDirectory({
  students,
  classes,
  timeZones,
  defaultTimeZone,
}: {
  students: MyStudent[];
  classes: MyClass[];
  timeZones: string[];
  defaultTimeZone: string;
}) {
  const t = useTranslations("students");
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [adding, setAdding] = useState(false);
  const [placing, setPlacing] = useState<MyStudent | null>(null);
  const [deleting, setDeleting] = useState<MyStudent | null>(null);
  const [pending, startTransition] = useTransition();
  const q = query.trim().toLowerCase();
  const shown = students.filter((s) => !q || s.fullName.toLowerCase().includes(q) || s.classes.some((c) => c.name.toLowerCase().includes(q)));

  function remove(s: MyStudent) {
    startTransition(async () => {
      const r = await removeFromMyStudents(s.id);
      if (!r.ok) return void toast.error(t("failed"));
      toast.success(t("removed", { name: s.fullName || t("noName") }));
      router.refresh();
    });
  }

  function deleteAccount(s: MyStudent) {
    startTransition(async () => {
      const r = await deleteStudentAccount(s.id);
      setDeleting(null);
      if (!r.ok) return void toast.error(r.error === "otherTeacher" ? t("otherTeacher") : t("failed"));
      toast.success(t("accountDeleted", { name: s.fullName || t("noName") }));
      router.refresh();
    });
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end gap-3">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-semibold">{t("title")}</h1>
          <p className="text-muted-foreground">{t("subtitle", { count: students.length })}</p>
        </div>
        <Button onClick={() => setAdding(true)}>
          <UserPlus aria-hidden="true" />
          {t("addStudent")}
        </Button>
      </div>

      {students.length > 5 && (
        <div className="relative">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <Input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t("search")} aria-label={t("search")} className="pl-9" />
        </div>
      )}

      {students.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed px-6 py-14 text-center">
          <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-primary">
            <GraduationCap className="size-6" aria-hidden="true" />
          </span>
          <h2 className="font-medium">{t("emptyTitle")}</h2>
          <p className="max-w-md text-muted-foreground">{t("emptyText")}</p>
        </div>
      ) : (
        <ul className="flex flex-col divide-y rounded-2xl border bg-card" aria-label={t("title")}>
          {shown.map((s) => (
            <li key={s.id} className="flex items-center gap-3 p-3">
              <Avatar className="size-10">
                <AvatarFallback>{initials(s.fullName)}</AvatarFallback>
              </Avatar>
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <span className="truncate font-medium">{s.fullName || t("noName")}</span>
                {s.classes.length > 0 ? (
                  <span className="flex flex-wrap gap-1">
                    {s.classes.map((c) => (
                      <Link
                        key={c.id}
                        href={`/classes/${c.id}`}
                        className="rounded-full border bg-background px-2 py-0.5 text-xs transition-colors hover:bg-accent"
                      >
                        {c.name}
                      </Link>
                    ))}
                  </span>
                ) : (
                  <span className="text-sm text-amber-700">{t("noClass")}</span>
                )}
              </div>
              {/* Wide screens: the actions right on the student's row. */}
              <div className="flex shrink-0 items-center gap-1.5 max-md:hidden">
                {s.classes[0] && (
                  <Button size="sm" variant="outline" asChild>
                    <Link href={`/classes/${s.classes[0].id}/students/${s.id}`}>
                      <BookA aria-hidden="true" />
                      {t("progress")}
                    </Link>
                  </Button>
                )}
                <Button size="sm" variant="outline" onClick={() => setPlacing(s)} disabled={pending}>
                  <FolderPlus aria-hidden="true" />
                  {t("toClass")}
                </Button>
                {s.classes.length === 0 && (
                  <Button size="sm" variant="outline" onClick={() => remove(s)} disabled={pending}>
                    <UserMinus aria-hidden="true" />
                    {t("removeFromList")}
                  </Button>
                )}
                <Button
                  size="icon-sm"
                  variant="ghost"
                  className="text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                  onClick={() => setDeleting(s)}
                  disabled={pending}
                  aria-label={`${t("deleteAccount")}: ${s.fullName || t("noName")}`}
                  title={t("deleteAccount")}
                >
                  <Trash2 aria-hidden="true" />
                </Button>
              </div>
              {/* Phones: the same actions in the "…" menu. */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    aria-label={t("actions", { name: s.fullName || t("noName") })}
                    disabled={pending}
                  >
                    <MoreHorizontal aria-hidden="true" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onSelect={() => setPlacing(s)}>
                    <FolderPlus aria-hidden="true" />
                    {t("toClass")}
                  </DropdownMenuItem>
                  {s.classes[0] && (
                    <DropdownMenuItem asChild>
                      <Link href={`/classes/${s.classes[0].id}/students/${s.id}`}>
                        <BookA aria-hidden="true" />
                        {t("progress")}
                      </Link>
                    </DropdownMenuItem>
                  )}
                  {s.classes.length === 0 && (
                    <DropdownMenuItem onSelect={() => remove(s)}>
                      <UserMinus aria-hidden="true" />
                      {t("removeFromList")}
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem variant="destructive" onSelect={() => setDeleting(s)}>
                    <Trash2 aria-hidden="true" />
                    {t("deleteAccount")}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          ))}
        </ul>
      )}

      <Dialog open={adding} onOpenChange={setAdding}>
        <DialogContent className="max-h-[90svh] overflow-y-auto sm:max-w-lg">
          {adding && (
            <RegisterForm
              timeZones={timeZones}
              defaultTimeZone={defaultTimeZone}
              onClose={() => {
                setAdding(false);
                router.refresh();
              }}
              after={(studentId, fullName) => (
                <ClassPicker studentId={studentId} studentName={fullName} classes={classes} onDone={() => setAdding(false)} />
              )}
            />
          )}
        </DialogContent>
      </Dialog>

      <AlertDialog open={deleting !== null} onOpenChange={(open) => !open && setDeleting(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t("deleteTitle", { name: deleting?.fullName || t("noName") })}</AlertDialogTitle>
            <AlertDialogDescription>{t("deleteText")}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t("cancel")}</AlertDialogCancel>
            <AlertDialogAction variant="destructive" disabled={pending} onClick={() => deleting && deleteAccount(deleting)}>
              {t("deleteForGood")}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Dialog open={placing !== null} onOpenChange={(open) => !open && setPlacing(null)}>
        <DialogContent className="max-h-[90svh] overflow-y-auto sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{t("toClassTitle", { name: placing?.fullName || t("noName") })}</DialogTitle>
            <DialogDescription>{t("toClassHint")}</DialogDescription>
          </DialogHeader>
          {placing && <ClassPicker studentId={placing.id} studentName={placing.fullName} classes={classes} onDone={() => setPlacing(null)} />}
        </DialogContent>
      </Dialog>
    </div>
  );
}
