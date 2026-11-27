"use client";

import { MoreHorizontal } from "lucide-react";
import { useFormatter, useTranslations } from "next-intl";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { adminAddTrialDays, adminExtend, adminStopAccess, type AdminResult } from "@/features/billing/actions";
import type { AdminTeacherRow } from "@/features/billing/admin-queries";
import { PERIODS, PLAN_IDS, PLANS, periodPrice, type PaidPlan, type PeriodMonths } from "@/features/billing/plans";

export function AdminTeachers({ teachers }: { teachers: AdminTeacherRow[] }) {
  const t = useTranslations("admin");
  const [paying, setPaying] = useState<AdminTeacherRow | null>(null);
  const [filter, setFilter] = useState("");
  const shown = teachers.filter((x) => `${x.name} ${x.email}`.toLowerCase().includes(filter.trim().toLowerCase()));

  return (
    <section className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-lg font-semibold">{t("teachers", { count: teachers.length })}</h2>
        <Input
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder={t("search")}
          aria-label={t("search")}
          className="sm:max-w-64"
        />
      </div>
      <div className="flex flex-col gap-2">
        {shown.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} onPay={() => setPaying(teacher)} />
        ))}
        {shown.length === 0 && <p className="text-muted-foreground">{t("noTeachers")}</p>}
      </div>
      {paying && <PaymentDialog teacher={paying} onClose={() => setPaying(null)} />}
    </section>
  );
}

function TeacherCard({ teacher, onPay }: { teacher: AdminTeacherRow; onPay: () => void }) {
  const t = useTranslations("admin");
  const tb = useTranslations("billing");
  const format = useFormatter();
  const [pending, start] = useTransition();
  const date = (iso: string) => format.dateTime(new Date(iso), { day: "numeric", month: "short", year: "numeric" });
  const { access } = teacher;

  function run(action: () => Promise<AdminResult>, done: string) {
    start(async () => {
      const result = await action();
      if (result.ok) toast.success(done);
      else toast.error(t(`errors.${result.error}`));
    });
  }

  let status: string;
  if (access.state === "admin") status = tb("state.admin");
  else if (access.state === "trial") status = t("trialUntil", { date: date(access.endsAt), count: access.daysLeft });
  else if (access.state === "active") status = t("paidUntil", { plan: tb(`plans.${access.plan}`), date: date(access.endsAt) });
  else status = t("expiredSince", { date: date(teacher.paidUntil ?? teacher.trialEndsAt) });

  return (
    <Card className="rounded-2xl py-4">
      <CardContent className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 flex-col gap-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold">{teacher.name || t("noName")}</span>
            <Badge variant={access.state === "expired" ? "destructive" : "secondary"}>{tb(`state.${access.state}`)}</Badge>
          </div>
          <span className="truncate text-sm text-muted-foreground">{teacher.email}</span>
          <span className="text-sm">{status}</span>
          <span className="text-sm text-muted-foreground">
            {t("meta", { students: teacher.students, date: date(teacher.createdAt) })}
            {teacher.promoCode ? ` · ${t("promo", { code: teacher.promoCode })}` : ""}
          </span>
          {teacher.note && <span className="text-xs whitespace-pre-line text-muted-foreground">{teacher.note}</span>}
        </div>
        {access.state !== "admin" && (
          <div className="flex shrink-0 items-center gap-2">
            <Button onClick={onPay} disabled={pending}>
              {t("recordPayment")}
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label={t("more")} disabled={pending}>
                  <MoreHorizontal aria-hidden="true" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onSelect={() => run(() => adminAddTrialDays(teacher.id, 7), t("trialAdded"))}>
                  {t("addTrial7")}
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => run(() => adminAddTrialDays(teacher.id, 30), t("trialAdded"))}>
                  {t("addTrial30")}
                </DropdownMenuItem>
                <DropdownMenuItem
                  variant="destructive"
                  onSelect={() => {
                    if (window.confirm(t("stopConfirm"))) run(() => adminStopAccess(teacher.id), t("stopped"));
                  }}
                >
                  {t("stopAccess")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function PaymentDialog({ teacher, onClose }: { teacher: AdminTeacherRow; onClose: () => void }) {
  const t = useTranslations("admin");
  const tb = useTranslations("billing");
  const format = useFormatter();
  const [plan, setPlan] = useState<PaidPlan>(teacher.access.state === "active" ? teacher.access.plan : "small");
  const [months, setMonths] = useState<PeriodMonths>(1);
  const [note, setNote] = useState("");
  const [pending, start] = useTransition();
  const price = periodPrice(plan, months);

  function save() {
    start(async () => {
      const result = await adminExtend({ teacherId: teacher.id, plan, months, note });
      if (result.ok) {
        toast.success(t("paymentSaved"));
        onClose();
      } else toast.error(t(`errors.${result.error}`));
    });
  }

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("recordPayment")}</DialogTitle>
          <DialogDescription>{t("recordPaymentFor", { name: teacher.name || teacher.email })}</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="pay-plan">{t("plan")}</Label>
            <NativeSelect id="pay-plan" value={plan} onChange={(e) => setPlan(e.target.value as PaidPlan)} className="w-full">
              {PLAN_IDS.map((p) => (
                <NativeSelectOption key={p} value={p}>
                  {tb(`plans.${p}`)} · {tb("upToStudents", { count: PLANS[p].students })}
                </NativeSelectOption>
              ))}
            </NativeSelect>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="pay-months">{t("period")}</Label>
            <NativeSelect
              id="pay-months"
              value={String(months)}
              onChange={(e) => setMonths(Number(e.target.value) as PeriodMonths)}
              className="w-full"
            >
              {PERIODS.map((p) => (
                <NativeSelectOption key={p.months} value={p.months}>
                  {tb("months", { count: p.months })}
                  {p.discount ? ` (−${p.discount}%)` : ""}
                </NativeSelectOption>
              ))}
            </NativeSelect>
          </div>
          <p className="text-sm">{t("expectedSum", { sum: `${format.number(price)} ₸` })}</p>
          <div className="flex flex-col gap-2">
            <Label htmlFor="pay-note">{t("note")}</Label>
            <Input id="pay-note" value={note} onChange={(e) => setNote(e.target.value)} maxLength={200} placeholder={t("notePlaceholder")} />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            {t("cancel")}
          </Button>
          <Button onClick={save} disabled={pending}>
            {t("save")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
