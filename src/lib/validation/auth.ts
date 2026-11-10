import { z } from "zod";
import { locales } from "@/i18n/routing";
import { isValidTimeZone } from "@/lib/timezones";

// Error messages are translation keys from the "validation" namespace.
export const PASSWORD_MIN_LENGTH = 8;

const email = z.string().trim().toLowerCase().max(254, "emailInvalid").pipe(z.email("emailInvalid"));
const password = z
  .string()
  .min(PASSWORD_MIN_LENGTH, "passwordTooShort")
  .max(72, "passwordTooLong");
const fullName = z.string().trim().min(1, "nameRequired").max(100, "nameTooLong");
export const roleSchema = z.enum(["teacher", "student"], { error: "roleRequired" });
export const localeSchema = z.enum(locales);
const timezone = z.string().refine(isValidTimeZone, "timezoneInvalid");

export const signInSchema = z.object({
  email,
  password: z.string().min(1, "passwordRequired"),
});

export const signUpSchema = z.object({
  fullName,
  email,
  password,
  role: roleSchema,
  timezone: timezone.catch("UTC"),
});

export const forgotPasswordSchema = z.object({ email });

export const resetPasswordSchema = z
  .object({ password, confirm: z.string() })
  .refine((v) => v.password === v.confirm, { message: "passwordsDontMatch", path: ["confirm"] });

export const profileSchema = z.object({
  fullName,
  locale: localeSchema,
  timezone,
});

export type ValidationKey =
  | "emailInvalid"
  | "passwordTooShort"
  | "passwordTooLong"
  | "passwordRequired"
  | "passwordsDontMatch"
  | "nameRequired"
  | "nameTooLong"
  | "roleRequired"
  | "timezoneInvalid";

/** Turns a zod error into { field: translationKey } (first error per field). */
export function fieldErrors(error: z.ZodError): Record<string, ValidationKey> {
  const result: Record<string, ValidationKey> = {};
  for (const issue of error.issues) {
    const field = String(issue.path[0] ?? "form");
    if (!(field in result)) result[field] = issue.message as ValidationKey;
  }
  return result;
}
