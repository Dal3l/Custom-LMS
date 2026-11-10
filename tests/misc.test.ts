import { describe, expect, it } from "vitest";
import { authErrorKey } from "@/features/auth/errors";
import { initials } from "@/lib/initials";
import { isValidTimeZone, listTimeZones } from "@/lib/timezones";

describe("authErrorKey", () => {
  it("maps known Supabase codes", () => {
    expect(authErrorKey("invalid_credentials")).toBe("invalidCredentials");
    expect(authErrorKey("email_not_confirmed")).toBe("emailNotConfirmed");
    expect(authErrorKey("over_email_send_rate_limit")).toBe("rateLimited");
  });

  it("falls back to a generic message", () => {
    expect(authErrorKey(undefined)).toBe("generic");
    expect(authErrorKey("something_new")).toBe("generic");
  });
});

describe("initials", () => {
  it("takes up to two letters", () => {
    expect(initials("Анна Иванова")).toBe("АИ");
    expect(initials("Әйгерім")).toBe("Ә");
    expect(initials("  ")).toBe("?");
    expect(initials("a b c")).toBe("AB");
  });
});

describe("time zones", () => {
  it("validates IANA names", () => {
    expect(isValidTimeZone("Asia/Almaty")).toBe(true);
    expect(isValidTimeZone("Europe/Moscow")).toBe(true);
    expect(isValidTimeZone("Mars/Base")).toBe(false);
    expect(isValidTimeZone("")).toBe(false);
  });

  it("lists UTC and common zones", () => {
    const zones = listTimeZones();
    expect(zones).toContain("UTC");
    expect(zones).toContain("Asia/Almaty");
  });
});
