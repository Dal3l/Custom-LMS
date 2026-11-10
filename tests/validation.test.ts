import { describe, expect, it } from "vitest";
import {
  fieldErrors,
  profileSchema,
  resetPasswordSchema,
  signInSchema,
  signUpSchema,
} from "@/lib/validation/auth";

const validSignUp = {
  fullName: "Анна Иванова",
  email: "  Anna@Example.com ",
  password: "12345678",
  role: "teacher",
  timezone: "Asia/Almaty",
};

describe("signUpSchema", () => {
  it("accepts valid data and normalises the email", () => {
    const result = signUpSchema.parse(validSignUp);
    expect(result.email).toBe("anna@example.com");
    expect(result.role).toBe("teacher");
  });

  it("requires a role", () => {
    const result = signUpSchema.safeParse({ ...validSignUp, role: "" });
    expect(result.success).toBe(false);
    if (!result.success) expect(fieldErrors(result.error).role).toBe("roleRequired");
  });

  it("does not accept other roles (e.g. admin)", () => {
    expect(signUpSchema.safeParse({ ...validSignUp, role: "admin" }).success).toBe(false);
  });

  it("rejects short passwords", () => {
    const result = signUpSchema.safeParse({ ...validSignUp, password: "1234567" });
    expect(result.success).toBe(false);
    if (!result.success) expect(fieldErrors(result.error).password).toBe("passwordTooShort");
  });

  it("falls back to UTC for an unknown time zone", () => {
    expect(signUpSchema.parse({ ...validSignUp, timezone: "Mars/Olympus" }).timezone).toBe("UTC");
  });

  it("reports a bad email and an empty name", () => {
    const result = signUpSchema.safeParse({ ...validSignUp, email: "nope", fullName: "  " });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(fieldErrors(result.error)).toMatchObject({
        email: "emailInvalid",
        fullName: "nameRequired",
      });
    }
  });
});

describe("signInSchema", () => {
  it("only needs a non-empty password", () => {
    expect(signInSchema.safeParse({ email: "a@b.co", password: "x" }).success).toBe(true);
    expect(signInSchema.safeParse({ email: "a@b.co", password: "" }).success).toBe(false);
  });
});

describe("resetPasswordSchema", () => {
  it("requires matching passwords", () => {
    const result = resetPasswordSchema.safeParse({ password: "12345678", confirm: "12345679" });
    expect(result.success).toBe(false);
    if (!result.success) expect(fieldErrors(result.error).confirm).toBe("passwordsDontMatch");
  });
});

describe("profileSchema", () => {
  it("accepts supported locales and real time zones", () => {
    expect(profileSchema.safeParse({ fullName: "A", locale: "kk", timezone: "UTC" }).success).toBe(true);
  });

  it("rejects unknown locales and time zones", () => {
    expect(profileSchema.safeParse({ fullName: "A", locale: "de", timezone: "UTC" }).success).toBe(false);
    const result = profileSchema.safeParse({ fullName: "A", locale: "ru", timezone: "Nowhere/City" });
    expect(result.success).toBe(false);
    if (!result.success) expect(fieldErrors(result.error).timezone).toBe("timezoneInvalid");
  });
});
