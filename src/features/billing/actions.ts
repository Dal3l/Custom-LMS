"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { getProfile } from "@/lib/auth";
import { createAdminClient } from "@/lib/supabase/admin";
import { extendPaidUntil, normalizePromo, PLAN_IDS, PROMO_RE } from "./plans";

// The teacher redeems a promo code; the admin manages access and promo codes.
// Every action checks the signed-in user first; the secret key is used only after.

export type PromoResult = { ok: true } | { ok: false; error: "invalid" | "already_used" | "used_up" | "generic" };

export async function redeemPromo(code: string): Promise<PromoResult> {
  const profile = await getProfile();
  if (profile?.role !== "teacher") return { ok: false, error: "generic" };
  const value = normalizePromo(typeof code === "string" ? code : "");
  if (!PROMO_RE.test(value)) return { ok: false, error: "invalid" };
  const { data, error } = await createAdminClient().rpc("redeem_promo_code", { p_teacher: profile.id, p_code: value });
  if (error) return { ok: false, error: "generic" };
  if (data === "ok") {
    revalidatePath("/[locale]", "layout");
    return { ok: true };
  }
  if (data === "already_used" || data === "used_up" || data === "invalid") return { ok: false, error: data };
  return { ok: false, error: "generic" };
}

// ---------------------------------------------------------------------------
// Admin
// ---------------------------------------------------------------------------

export type AdminResult = { ok: true } | { ok: false; error: "forbidden" | "invalid" | "exists" | "generic" };

async function requireAdmin() {
  const profile = await getProfile();
  return profile?.is_admin ? profile : null;
}

const idSchema = z.uuid();

const extendSchema = z.object({
  teacherId: idSchema,
  plan: z.enum(PLAN_IDS),
  months: z.number().int().min(1).max(24),
  note: z.string().max(500),
});

/** Records a payment: sets the plan and adds months of paid access. */
export async function adminExtend(input: { teacherId: string; plan: string; months: number; note: string }): Promise<AdminResult> {
  if (!(await requireAdmin())) return { ok: false, error: "forbidden" };
  const parsed = extendSchema.safeParse(input);
  if (!parsed.success) return { ok: false, error: "invalid" };
  const { teacherId, plan, months, note } = parsed.data;
  const admin = createAdminClient();
  const { data: sub } = await admin.from("subscriptions").select("paid_until, note").eq("teacher_id", teacherId).maybeSingle();
  if (!sub) return { ok: false, error: "invalid" };
  const line = note.trim();
  const { error } = await admin
    .from("subscriptions")
    .update({
      plan,
      paid_until: extendPaidUntil(sub.paid_until, months),
      note: (line ? `${new Date().toISOString().slice(0, 10)}: ${line}\n${sub.note}` : sub.note).slice(0, 500),
    })
    .eq("teacher_id", teacherId);
  if (error) return { ok: false, error: "generic" };
  revalidatePath("/[locale]/admin", "page");
  return { ok: true };
}

/** Adds free trial days (e.g. when a teacher asks for more time). */
export async function adminAddTrialDays(teacherId: string, days: number): Promise<AdminResult> {
  if (!(await requireAdmin())) return { ok: false, error: "forbidden" };
  if (!idSchema.safeParse(teacherId).success || !Number.isInteger(days) || days < 1 || days > 365) {
    return { ok: false, error: "invalid" };
  }
  const admin = createAdminClient();
  const { data: sub } = await admin.from("subscriptions").select("trial_ends_at").eq("teacher_id", teacherId).maybeSingle();
  if (!sub) return { ok: false, error: "invalid" };
  const base = Math.max(new Date(sub.trial_ends_at).getTime(), Date.now());
  const { error } = await admin
    .from("subscriptions")
    .update({ trial_ends_at: new Date(base + days * 86_400_000).toISOString() })
    .eq("teacher_id", teacherId);
  if (error) return { ok: false, error: "generic" };
  revalidatePath("/[locale]/admin", "page");
  return { ok: true };
}

/** Ends paid access now (e.g. a mistake or a refund). */
export async function adminStopAccess(teacherId: string): Promise<AdminResult> {
  if (!(await requireAdmin())) return { ok: false, error: "forbidden" };
  if (!idSchema.safeParse(teacherId).success) return { ok: false, error: "invalid" };
  const now = new Date().toISOString();
  const admin = createAdminClient();
  const { data: sub } = await admin.from("subscriptions").select("trial_ends_at").eq("teacher_id", teacherId).maybeSingle();
  if (!sub) return { ok: false, error: "invalid" };
  const { error } = await admin
    .from("subscriptions")
    .update({ paid_until: null, plan: "trial", trial_ends_at: new Date(sub.trial_ends_at) > new Date() ? now : sub.trial_ends_at })
    .eq("teacher_id", teacherId);
  if (error) return { ok: false, error: "generic" };
  revalidatePath("/[locale]/admin", "page");
  return { ok: true };
}

const promoSchema = z.object({
  code: z.string().transform(normalizePromo).pipe(z.string().regex(PROMO_RE)),
  extraDays: z.number().int().min(1).max(365),
  maxUses: z.number().int().min(1).max(100000).nullable(),
});

export async function adminCreatePromo(input: { code: string; extraDays: number; maxUses: number | null }): Promise<AdminResult> {
  if (!(await requireAdmin())) return { ok: false, error: "forbidden" };
  const parsed = promoSchema.safeParse(input);
  if (!parsed.success) return { ok: false, error: "invalid" };
  const { error } = await createAdminClient()
    .from("promo_codes")
    .insert({ code: parsed.data.code, extra_days: parsed.data.extraDays, max_uses: parsed.data.maxUses });
  if (error) return { ok: false, error: error.code === "23505" ? "exists" : "generic" };
  revalidatePath("/[locale]/admin", "page");
  return { ok: true };
}

export async function adminSetPromoActive(code: string, active: boolean): Promise<AdminResult> {
  if (!(await requireAdmin())) return { ok: false, error: "forbidden" };
  const value = normalizePromo(typeof code === "string" ? code : "");
  if (!PROMO_RE.test(value)) return { ok: false, error: "invalid" };
  const { error } = await createAdminClient().from("promo_codes").update({ active: Boolean(active) }).eq("code", value);
  if (error) return { ok: false, error: "generic" };
  revalidatePath("/[locale]/admin", "page");
  return { ok: true };
}
