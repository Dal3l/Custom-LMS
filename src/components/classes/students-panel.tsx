"use client";

import { MoreHorizontal, UserMinus } from "lucide-react";
import { useFormatter, useTranslations } from "next-intl";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { removeStudent } from "@/features/classes/actions";
import type { ClassStudent } from "@/features/classes/queries";
import { initials } from "@/lib/initials";

export function StudentsList({ classId, students }: { classId: string; students: ClassStudent[] }) {
  const t = useTranslations("classes");
  const format = useFormatter();
  const [pending, startTransition] = useTransition();
  const [removing, setRemoving] = useState<ClassStudent | null>(null);

  function remove(student: ClassStudent) {
    startTransition(async () => {
      const result = await removeStudent(classId, student.id);
      if (result.ok) toast.success(t("studentRemoved"));
      else toast.error(t(`errors.${result.error}`));
    });
  }

  if (students.length === 0) {
    return <p className="rounded-2xl border border-dashed p-6 text-center text-muted-foreground">{t("noStudents")}</p>;
  }

  return (
    <>
      <ul className="flex flex-col divide-y rounded-2xl border" aria-label={t("studentsTab")}>
        {students.map((s) => (
          <li key={s.id} className="flex items-center gap-3 p-3">
            <Avatar className="size-10">
              <AvatarFallback>{initials(s.fullName)}</AvatarFallback>
            </Avatar>
            <div className="flex min-w-0 flex-1 flex-col">
              <span className="truncate font-medium">{s.fullName || t("noName")}</span>
              <span className="text-sm text-muted-foreground">
                {t("joined", { date: format.dateTime(new Date(s.joinedAt), { dateStyle: "medium" }) })}
              </span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label={t("studentActions", { name: s.fullName })} disabled={pending}>
                  <MoreHorizontal aria-hidden="true" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem variant="destructive" onSelect={() => setRemoving(s)}>
                  <UserMinus aria-hidden="true" />
                  {t("removeStudent")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        ))}
      </ul>
      <AlertDialog open={removing !== null} onOpenChange={(o) => !o && setRemoving(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t("removeTitle")}</AlertDialogTitle>
            <AlertDialogDescription>{t("removeText", { name: removing?.fullName ?? "" })}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t("cancel")}</AlertDialogCancel>
            <AlertDialogAction variant="destructive" onClick={() => removing && remove(removing)}>
              {t("remove")}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
