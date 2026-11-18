"use server";

import { z } from "zod";
import { getProfile } from "@/lib/auth";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";
import { MESSAGE_COLUMNS, PAGE, toMessage, type ChatData, type MessageRow } from "./types";

const id = z.uuid();

/**
 * A class's chat for the signed-in user: the latest messages, read marks and
 * the class's people (names). Only for the class's teacher and students (RLS).
 */
export async function loadChat(classId: string): Promise<ChatData | null> {
  const profile = await getProfile();
  if (!profile || !id.safeParse(classId).success) return null;
  const supabase = await createClient();
  const { data: cls } = await supabase.from("classes").select("id, teacher_id").eq("id", classId).maybeSingle();
  if (!cls) return null;
  const [{ data: rows }, { data: reads }] = await Promise.all([
    supabase.from("chat_messages").select(MESSAGE_COLUMNS).eq("class_id", classId).order("created_at", { ascending: false }).limit(PAGE + 1),
    supabase.from("chat_reads").select("user_id, last_read_at").eq("class_id", classId),
  ]);
  // Names: students may not read each other's profiles, so the server looks
  // them up — only after RLS showed this user the class.
  const admin = createAdminClient();
  const { data: members } = await admin.from("class_members").select("student_id").eq("class_id", classId);
  const ids = [cls.teacher_id, ...(members ?? []).map((m) => m.student_id)];
  const { data: profiles } = await admin.from("profiles").select("id, full_name").in("id", ids);
  const list = (rows ?? []) as MessageRow[];
  return {
    classId,
    messages: list.slice(0, PAGE).reverse().map(toMessage),
    hasOlder: list.length > PAGE,
    reads: Object.fromEntries((reads ?? []).map((r) => [r.user_id, r.last_read_at])),
    people: Object.fromEntries(
      (profiles ?? []).map((p) => [p.id, { id: p.id, name: p.full_name, isTeacher: p.id === cls.teacher_id }]),
    ),
  };
}

/** Deletes a message: its author, or the class teacher. It stays as "message deleted". */
export async function deleteChatMessage(messageId: string): Promise<{ ok: boolean }> {
  const profile = await getProfile();
  if (!profile || !id.safeParse(messageId).success) return { ok: false };
  const supabase = await createClient();
  const { data: m } = await supabase
    .from("chat_messages")
    .select("id, author_id, file_path, class:classes(teacher_id)")
    .eq("id", messageId)
    .maybeSingle();
  if (!m || (m.author_id !== profile.id && m.class?.teacher_id !== profile.id)) return { ok: false };
  const admin = createAdminClient();
  const { error } = await admin
    .from("chat_messages")
    .update({ deleted_at: new Date().toISOString(), body: "", file_path: null, file_name: null, file_type: null, file_size: null })
    .eq("id", messageId);
  if (error) return { ok: false };
  if (m.file_path) await admin.storage.from("chat-files").remove([m.file_path]);
  return { ok: true };
}

/** Unread messages per class for the signed-in user. */
export async function chatUnread(): Promise<Record<string, number>> {
  const supabase = await createClient();
  const { data } = await supabase.rpc("my_chat_unread");
  return Object.fromEntries((data ?? []).map((r: { class_id: string; unread: number }) => [r.class_id, Number(r.unread)]));
}
