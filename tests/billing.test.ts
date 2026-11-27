import { describe, expect, it } from "vitest";
import {
  accessOf,
  extendPaidUntil,
  hasAccess,
  normalizePromo,
  periodPrice,
  PROMO_RE,
  studentLimit,
} from "@/features/billing/plans";

const now = new Date("2026-12-01T12:00:00Z");
const days = (n: number) => new Date(now.getTime() + n * 86_400_000).toISOString();

describe("prices", () => {
  it("one month is the monthly price", () => {
    expect(periodPrice("small", 1)).toBe(4990);
    expect(periodPrice("medium", 1)).toBe(8990);
    expect(periodPrice("large", 1)).toBe(13990);
  });

  it("longer periods get the discount, rounded to 10 tenge", () => {
    expect(periodPrice("small", 3)).toBe(14220); // 14 971 × 0.95 = 14 221.5
    expect(periodPrice("medium", 6)).toBe(48550); // 53 940 × 0.9 = 48 546
    expect(periodPrice("large", 12)).toBe(134300); // 167 880 × 0.8 = 134 304
  });
});

describe("access", () => {
  it("the trial gives access and 10 students", () => {
    const a = accessOf({ plan: "trial", trial_ends_at: days(10), paid_until: null }, false, now);
    expect(a).toEqual({ state: "trial", endsAt: days(10), daysLeft: 10 });
    expect(studentLimit(a)).toBe(10);
  });

  it("days left are rounded up until the very end", () => {
    const a = accessOf({ plan: "trial", trial_ends_at: days(0.1), paid_until: null }, false, now);
    expect(a.state === "trial" && a.daysLeft).toBe(1);
  });

  it("after the trial without payment, access ends", () => {
    const a = accessOf({ plan: "trial", trial_ends_at: days(-1), paid_until: null }, false, now);
    expect(a.state).toBe("expired");
    expect(hasAccess(a)).toBe(false);
    expect(studentLimit(a)).toBe(0);
  });

  it("paid time wins over the trial, and the plan sets the limit", () => {
    const a = accessOf({ plan: "medium", trial_ends_at: days(5), paid_until: days(40) }, false, now);
    expect(a.state).toBe("active");
    expect(studentLimit(a)).toBe(25);
  });

  it("paid time that is over falls back to the trial date", () => {
    const a = accessOf({ plan: "large", trial_ends_at: days(-60), paid_until: days(-1) }, false, now);
    expect(a.state).toBe("expired");
  });

  it("the admin always has access, without a limit", () => {
    const a = accessOf(null, true, now);
    expect(hasAccess(a)).toBe(true);
    expect(studentLimit(a)).toBe(Infinity);
  });

  it("no subscription row means no access", () => {
    expect(accessOf(null, false, now).state).toBe("expired");
  });
});

describe("extending paid time", () => {
  it("adds months to paid time that hasn't ended", () => {
    expect(extendPaidUntil("2026-12-20T00:00:00.000Z", 1, now)).toBe("2027-01-20T00:00:00.000Z");
  });

  it("counts from now when paid time is over or missing", () => {
    expect(extendPaidUntil(null, 3, now)).toBe("2027-03-01T12:00:00.000Z");
    expect(extendPaidUntil("2026-01-01T00:00:00.000Z", 1, now)).toBe("2027-01-01T12:00:00.000Z");
  });
});

describe("promo codes", () => {
  it("are upper-cased and trimmed", () => {
    expect(normalizePromo("  start-2026 ")).toBe("START-2026");
  });

  it("allow only letters, digits and dashes", () => {
    expect(PROMO_RE.test("START2026")).toBe(true);
    expect(PROMO_RE.test("НОВЫЙ")).toBe(false);
    expect(PROMO_RE.test("A B")).toBe(false);
    expect(PROMO_RE.test("AB")).toBe(false);
  });
});
