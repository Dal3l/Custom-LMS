import { z } from "zod";

// Content parts shared by gap exercises: text pieces and gap placeholders.
// Gap placeholders never carry the right answers.
const gapId = z.string().regex(/^g\d{1,3}$/);
export const textPartSchema = z.object({ t: z.literal("text"), text: z.string().max(5000) });
export const sourceSchema = z.string().max(10000);
export const gapIdSchema = gapId;
