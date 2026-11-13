import { z } from "zod";
import { isValidTimeZone } from "@/lib/timezones";

// Error messages are keys from the "classes.errors" namespace.

export const classKindSchema = z.enum(["individual", "group"]);
export type ClassKind = z.infer<typeof classKindSchema>;

const callUrl = z
  .string()
  .trim()
  .max(500, "callUrlInvalid")
  .transform((v) => (v === "" ? null : v))
  .pipe(
    z
      .url({ protocol: /^https$/, error: "callUrlInvalid" })
      .nullable(),
  );

export const classSchema = z.object({
  name: z.string().trim().min(1, "nameRequired").max(100, "nameTooLong"),
  kind: classKindSchema.catch("individual"),
  call_url: callUrl,
});

export const registerStudentSchema = z.object({
  fullName: z.string().trim().min(1, "nameRequired").max(100, "nameTooLong"),
  email: z.string().trim().toLowerCase().max(254, "emailInvalid").pipe(z.email("emailInvalid")),
  timezone: z.string().refine(isValidTimeZone, "timezoneInvalid"),
});

export const idSchema = z.uuid();
