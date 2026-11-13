import { z } from "zod";

/** Short random id for questions, options and statements. */
export const itemIdSchema = z.string().regex(/^[a-z0-9]{6,12}$/);
export function newItemId(): string {
  return crypto.randomUUID().replace(/-/g, "").slice(0, 8);
}
