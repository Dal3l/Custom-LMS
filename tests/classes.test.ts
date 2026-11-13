import { describe, expect, it } from "vitest";
import { generateInviteToken, generatePassword, INVITE_TOKEN_RE } from "@/features/classes/credentials";
import { classSchema, registerStudentSchema } from "@/features/classes/schemas";

describe("generatePassword", () => {
  it("makes three groups of four readable characters", () => {
    for (let i = 0; i < 200; i++) {
      expect(generatePassword()).toMatch(/^[a-hjkmnp-z2-9]{4}-[a-hjkmnp-z2-9]{4}-[a-hjkmnp-z2-9]{4}$/);
    }
  });

  it("never uses look-alike characters", () => {
    const all = Array.from({ length: 300 }, () => generatePassword()).join("");
    expect(all).not.toMatch(/[01ilo]/);
  });

  it("is random", () => {
    const set = new Set(Array.from({ length: 100 }, () => generatePassword()));
    expect(set.size).toBe(100);
  });

  it("skips biased bytes (rejection sampling)", () => {
    // 248..255 would wrap around unevenly and must be skipped; 0 maps to "a".
    const random = (n: number) => new Uint8Array(n).fill(0).map((_, i) => (i % 2 === 0 ? 255 : 0));
    expect(generatePassword(random)).toBe("aaaa-aaaa-aaaa");
  });

  it("is long enough for Supabase (at least 8 characters)", () => {
    expect(generatePassword().length).toBeGreaterThanOrEqual(8);
  });
});

describe("generateInviteToken", () => {
  it("is URL-safe and matches the database rule", () => {
    for (let i = 0; i < 200; i++) {
      const token = generateInviteToken();
      expect(token).toHaveLength(24);
      expect(token).toMatch(INVITE_TOKEN_RE);
    }
  });

  it("is unique", () => {
    const set = new Set(Array.from({ length: 200 }, () => generateInviteToken()));
    expect(set.size).toBe(200);
  });
});

describe("classSchema", () => {
  it("accepts a class without a call link", () => {
    expect(classSchema.parse({ name: "  Айгерим  ", kind: "individual", call_url: "" })).toEqual({
      name: "Айгерим",
      kind: "individual",
      call_url: null,
    });
  });

  it("accepts https call links only", () => {
    expect(classSchema.parse({ name: "G", kind: "group", call_url: "https://zoom.us/j/123" }).call_url).toBe(
      "https://zoom.us/j/123",
    );
    for (const bad of ["http://zoom.us/j/1", "javascript:alert(1)", "zoom.us/j/1"]) {
      const r = classSchema.safeParse({ name: "G", kind: "group", call_url: bad });
      expect(r.success).toBe(false);
      expect(r.error?.issues[0]?.message).toBe("callUrlInvalid");
    }
  });

  it("requires a name and falls back to individual", () => {
    expect(classSchema.safeParse({ name: " ", kind: "group", call_url: "" }).error?.issues[0]?.message).toBe(
      "nameRequired",
    );
    expect(classSchema.parse({ name: "A", kind: "weird", call_url: "" }).kind).toBe("individual");
  });
});

describe("registerStudentSchema", () => {
  it("normalises the email and checks the time zone", () => {
    expect(
      registerStudentSchema.parse({ fullName: " Адель ", email: " Adel@Mail.KZ ", timezone: "Asia/Almaty" }),
    ).toEqual({ fullName: "Адель", email: "adel@mail.kz", timezone: "Asia/Almaty" });
    const bad = registerStudentSchema.safeParse({ fullName: "A", email: "nope", timezone: "Mars/Base" });
    expect(bad.error?.issues.map((i) => i.message)).toEqual(["emailInvalid", "timezoneInvalid"]);
  });
});
