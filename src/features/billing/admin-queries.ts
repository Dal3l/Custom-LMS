import "server-only";
import { createAdminClient } from "@/lib/supabase/admin";
import { accessOf, type AccessState } from "./plans";

// For the admin page only (the page checks is_admin before calling these).

export type AdminTeacherRow = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  plan: string;
  trialEndsAt: string;
  paidUntil: string | null;
  promoCode: string | null;
  note: string;
  students: number;
  access: AccessState;
};

export async function listTeachersForAdmin(): Promise<AdminTeacherRow[]> {
  const admin = createAdminClient();
  const [{ data: subs }, { data: links }, users] = await Promise.all([
    admin
      .from("subscriptions")
      .select("teacher_id, plan, trial_ends_at, paid_until, promo_code, note, created_at, profile:profiles!subscriptions_teacher_id_fkey(full_name, is_admin, created_at)")
      .order("created_at", { ascending: false }),
    admin.from("teacher_students").select("teacher_id"),
    listAllUsers(),
  ]);
  const studentCount = new Map<string, number>();
  for (const l of links ?? []) studentCount.set(l.teacher_id, (studentCount.get(l.teacher_id) ?? 0) + 1);
  const email = new Map(users.map((u) => [u.id, u.email ?? ""]));

  return (subs ?? []).map((s) => ({
    id: s.teacher_id,
    name: s.profile?.full_name ?? "",
    email: email.get(s.teacher_id) ?? "",
    createdAt: s.profile?.created_at ?? s.created_at,
    plan: s.plan,
    trialEndsAt: s.trial_ends_at,
    paidUntil: s.paid_until,
    promoCode: s.promo_code,
    note: s.note,
    students: studentCount.get(s.teacher_id) ?? 0,
    access: accessOf(s, s.profile?.is_admin ?? false),
  }));
}

async function listAllUsers() {
  const admin = createAdminClient();
  const out: { id: string; email?: string }[] = [];
  for (let page = 1; page <= 50; page++) {
    const { data, error } = await admin.auth.admin.listUsers({ page, perPage: 1000 });
    if (error || !data) break;
    out.push(...data.users.map((u) => ({ id: u.id, email: u.email })));
    if (data.users.length < 1000) break;
  }
  return out;
}

export async function listPromoCodes() {
  const { data } = await createAdminClient()
    .from("promo_codes")
    .select("code, extra_days, max_uses, uses, active, created_at")
    .order("created_at", { ascending: false });
  return data ?? [];
}
