import { describe, expect, it } from "vitest";
import { generateInviteToken, generatePassword, INVITE_TOKEN_RE, PASSWORD_WORDS } from "@/features/classes/credentials";
import { sortClassLessons, toggleDoneSection } from "@/features/classes/class-lessons";
import { classSchema, registerStudentSchema } from "@/features/classes/schemas";

describe("generatePassword", () => {
  it("is a simple word and four digits", () => {
    for (let i = 0; i < 200; i++) {
      const password = generatePassword();
      const match = /^([a-z]+)(\d{4})$/.exec(password);
      expect(match).not.toBeNull();
      expect(PASSWORD_WORDS).toContain(match![1]);
    }
  });

  it("is long enough for sign-in rules (at least 8 characters)", () => {
    for (let i = 0; i < 200; i++) expect(generatePassword().length).toBeGreaterThanOrEqual(8);
  });

  it("varies", () => {
    const set = new Set(Array.from({ length: 50 }, () => generatePassword()));
    expect(set.size).toBeGreaterThan(40);
  });

  it("skips biased bytes (rejection sampling)", () => {
    // 255 is above the fair limit for both choices and must be skipped; 0 picks the first word and digit 0.
    const random = (n: number) => new Uint8Array(n).map((_, i) => (i % 2 === 0 ? 255 : 0));
    expect(generatePassword(random)).toBe(`${PASSWORD_WORDS[0]}0000`);
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

describe("sortClassLessons", () => {
  it("puts the lesson going on first, then the newest", () => {
    const items = [
      { id: "a", status: "open" as const, openedAt: "2026-11-01T10:00:00Z" },
      { id: "b", status: "open" as const, openedAt: "2026-11-05T10:00:00Z" },
      { id: "c", status: "live" as const, openedAt: "2026-10-01T10:00:00Z" },
    ];
    expect(sortClassLessons(items).map((i) => i.id)).toEqual(["c", "b", "a"]);
    expect(items.map((i) => i.id)).toEqual(["a", "b", "c"]); // not changed in place
  });
});

describe("toggleDoneSection", () => {
  it("adds and removes a section without duplicates", () => {
    expect(toggleDoneSection([], "a", true)).toEqual(["a"]);
    expect(toggleDoneSection(["a"], "a", true)).toEqual(["a"]);
    expect(toggleDoneSection(["a", "b"], "a", false)).toEqual(["b"]);
    expect(toggleDoneSection(["b"], "a", false)).toEqual(["b"]);
  });
});
