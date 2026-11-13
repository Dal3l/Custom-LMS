"use client";

import { MoreHorizontal, Pencil, Trash2, User, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import { useActionState, useEffect, useState, useTransition } from "react";
import { toast } from "sonner";
import { SubmitButton } from "@/components/auth/form-bits";
import { ConfirmDelete } from "@/components/courses/confirm-delete";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteClass, updateClass, type ClassFormState } from "@/features/classes/actions";
import type { ClassRow } from "@/features/classes/queries";
import { useRouter } from "@/i18n/navigation";
import { CallButton } from "./call-button";
import { ClassFormFields } from "./class-form-fields";

export function ClassHeader({
  cls,
  isTeacher,
  teacherName,
}: {
  cls: ClassRow;
  isTeacher: boolean;
  teacherName: string;
}) {
  const t = useTranslations("classes");
  const router = useRouter();
  const [editing, setEditing] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const [pending, startTransition] = useTransition();
  const Icon = cls.kind === "group" ? Users : User;

  function remove() {
    startTransition(async () => {
      const result = await deleteClass(cls.id);
      if (result.ok) {
        toast.success(t("deleted"));
        router.replace("/classes");
      } else {
        toast.error(t(`errors.${result.error}`));
      }
    });
  }

  return (
    <header className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-primary">
          <Icon className="size-6" aria-hidden="true" />
        </span>
        <div className="flex min-w-0 flex-col gap-1">
          <h1 className="text-2xl font-semibold break-words">{cls.name}</h1>
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <Badge variant="secondary">{t(`kind.${cls.kind}`)}</Badge>
            {!isTeacher && teacherName && <span>{t("teacher", { name: teacherName })}</span>}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {cls.call_url && <CallButton url={cls.call_url} />}
        {isTeacher && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon-lg" aria-label={t("moreActions")} disabled={pending}>
                <MoreHorizontal aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onSelect={() => setEditing(true)}>
                <Pencil aria-hidden="true" />
                {t("editClass")}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive" onSelect={() => setConfirming(true)}>
                <Trash2 aria-hidden="true" />
                {t("deleteClass")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>

      {isTeacher && (
        <>
          <Dialog open={editing} onOpenChange={setEditing}>
            <DialogContent className="sm:max-w-lg">
              {editing && <EditClassForm cls={cls} onDone={() => setEditing(false)} />}
            </DialogContent>
          </Dialog>
          <ConfirmDelete
            open={confirming}
            onOpenChange={setConfirming}
            title={t("deleteTitle")}
            description={t("deleteText", { name: cls.name })}
            onConfirm={remove}
          />
        </>
      )}
    </header>
  );
}

const initial: ClassFormState = { status: "idle" };

function EditClassForm({ cls, onDone }: { cls: ClassRow; onDone: () => void }) {
  const t = useTranslations("classes");
  const [state, action] = useActionState(updateClass, initial);
  useEffect(() => {
    if (state.status === "success") {
      toast.success(t("saved"));
      onDone();
    }
  }, [state, onDone, t]);

  return (
    <form action={action} className="flex flex-col gap-4" noValidate>
      <input type="hidden" name="id" value={cls.id} />
      <DialogHeader>
        <DialogTitle>{t("editClass")}</DialogTitle>
      </DialogHeader>
      {state.formError && (
        <Alert variant="destructive">
          <AlertDescription>{t(`errors.${state.formError}`)}</AlertDescription>
        </Alert>
      )}
      <ClassFormFields state={state} defaults={cls} />
      <DialogFooter>
        <Button type="button" variant="outline" onClick={onDone}>
          {t("cancel")}
        </Button>
        <div className="sm:w-40">
          <SubmitButton>{t("save")}</SubmitButton>
        </div>
      </DialogFooter>
    </form>
  );
}
