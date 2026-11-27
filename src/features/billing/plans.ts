// Plans, prices and access rules. Pure functions: tested in tests/billing.test.ts.

export const PLAN_IDS = ["small", "medium", "large"] as const;
export type PaidPlan = (typeof PLAN_IDS)[number];
export type PlanId = "trial" | PaidPlan;

/** Students a teacher can have on each plan; prices in tenge per month. */
export const PLANS: Record<PaidPlan, { students: number; monthly: number }> = {
  small: { students: 10, monthly: 4990 },
  medium: { students: 25, monthly: 8990 },
  large: { students: 50, monthly: 13990 },
};

export const TRIAL_STUDENTS = 10;

/** Pay for several months at once: a discount in percent. */
export const PERIODS = [
  { months: 1, discount: 0 },
  { months: 3, discount: 5 },
  { months: 6, discount: 10 },
  { months: 12, discount: 20 },
] as const;
export type PeriodMonths = (typeof PERIODS)[number]["months"];

/** Where to send the money (a Kaspi transfer for now). */
export const PAYMENT_PHONE = "+7 700 304 87 55";
export const PAYMENT_WHATSAPP = "https://wa.me/77003048755";

/** The total for a period, rounded to 10 tenge. */
export function periodPrice(plan: PaidPlan, months: PeriodMonths): number {
  const period = PERIODS.find((p) => p.months === months)!;
  const total = PLANS[plan].monthly * months * (1 - period.discount / 100);
  return Math.round(total / 10) * 10;
}

export type Subscription = { plan: string; trial_ends_at: string; paid_until: string | null };

export type AccessState =
  | { state: "admin" }
  | { state: "trial"; endsAt: string; daysLeft: number }
  | { state: "active"; endsAt: string; daysLeft: number; plan: PaidPlan }
  | { state: "expired" };

const DAY = 24 * 60 * 60 * 1000;

function isPaidPlan(plan: string): plan is PaidPlan {
  return (PLAN_IDS as readonly string[]).includes(plan);
}

/**
 * A teacher's access now. Paid time wins over the trial; a teacher without a
 * subscription row (shouldn't happen) has no access. Days left are rounded up:
 * "1 day left" until the very end.
 */
export function accessOf(sub: Subscription | null, isAdmin: boolean, now: Date = new Date()): AccessState {
  if (isAdmin) return { state: "admin" };
  if (!sub) return { state: "expired" };
  const t = now.getTime();
  if (sub.paid_until && new Date(sub.paid_until).getTime() > t) {
    const end = new Date(sub.paid_until).getTime();
    return {
      state: "active",
      endsAt: sub.paid_until,
      daysLeft: Math.ceil((end - t) / DAY),
      plan: isPaidPlan(sub.plan) ? sub.plan : "small",
    };
  }
  const trialEnd = new Date(sub.trial_ends_at).getTime();
  if (trialEnd > t) return { state: "trial", endsAt: sub.trial_ends_at, daysLeft: Math.ceil((trialEnd - t) / DAY) };
  return { state: "expired" };
}

export function hasAccess(access: AccessState): boolean {
  return access.state !== "expired";
}

/** How many students the teacher may have (Infinity for the admin, 0 when expired). */
export function studentLimit(access: AccessState): number {
  switch (access.state) {
    case "admin":
      return Infinity;
    case "trial":
      return TRIAL_STUDENTS;
    case "active":
      return PLANS[access.plan].students;
    case "expired":
      return 0;
  }
}

/** A new paid-until date: adds months to the current paid time, or from now if it's over. */
export function extendPaidUntil(paidUntil: string | null, months: number, now: Date = new Date()): string {
  const base = paidUntil && new Date(paidUntil) > now ? new Date(paidUntil) : new Date(now);
  const out = new Date(base);
  out.setUTCMonth(out.getUTCMonth() + months);
  return out.toISOString();
}

/** Promo codes: capital letters, digits and dashes (stored in upper case). */
export const PROMO_RE = /^[A-Z0-9-]{3,32}$/;
export function normalizePromo(code: string): string {
  return code.trim().toUpperCase();
}
