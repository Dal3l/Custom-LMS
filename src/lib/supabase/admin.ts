import "server-only";
import { createClient } from "@supabase/supabase-js";
import { getSupabaseEnv } from "@/lib/env";
import type { Database } from "./database.types";

/**
 * Supabase client with the secret key: bypasses RLS and can manage users.
 * Server only. Use it only after checking on the server that the signed-in
 * user is allowed to do the action.
 */
export function createAdminClient() {
  const { url } = getSupabaseEnv();
  const secret = process.env.SUPABASE_SECRET_KEY;
  if (!secret) {
    throw new Error("Missing SUPABASE_SECRET_KEY. See .env.example.");
  }
  return createClient<Database>(url, secret, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  });
}
