"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { MESSAGE_COLUMNS, mergeMessages, PAGE, safeFileName, toMessage, type ChatData, type ChatMessage, type MessageRow } from "./types";

export type ChatStatus = "connecting" | "online" | "offline";
/** A message being sent (shown right away) or that failed. */
export type Outgoing = { tempId: string; body: string; file: File | null; failed: boolean; createdAt: string };

/**
 * A class chat in the browser: live new / deleted messages and read marks,
 * reconnecting by itself (and catching up on what was missed), sending with
 * a file, marking as read, loading older messages.
 */
export function useChat(initial: ChatData, me: string) {
  const [supabase] = useState(() => createClient());
  const [messages, setMessages] = useState<ChatMessage[]>(initial.messages);
  const [reads, setReads] = useState<Record<string, string>>(initial.reads);
  const [hasOlder, setHasOlder] = useState(initial.hasOlder);
  const [status, setStatus] = useState<ChatStatus>("connecting");
  const [outgoing, setOutgoing] = useState<Outgoing[]>([]);
  const classId = initial.classId;
  // The newest message we have (for catching up after a reconnect).
  const latest = useRef(initial.messages.at(-1)?.createdAt ?? null);
  useEffect(() => {
    const newest = messages.at(-1)?.createdAt;
    if (newest) latest.current = newest;
  }, [messages]);

  const add = useCallback((more: ChatMessage[]) => setMessages((list) => mergeMessages(list, more)), []);

  /** After (re)connecting: everything since the last message we have, and the read marks. */
  const catchUp = useCallback(async () => {
    let q = supabase.from("chat_messages").select(MESSAGE_COLUMNS).eq("class_id", classId).order("created_at").limit(200);
    if (latest.current) q = q.gte("created_at", latest.current);
    const [{ data }, { data: r }] = await Promise.all([q, supabase.from("chat_reads").select("user_id, last_read_at").eq("class_id", classId)]);
    if (data) add((data as MessageRow[]).map(toMessage));
    if (r) setReads(Object.fromEntries(r.map((x) => [x.user_id, x.last_read_at])));
  }, [supabase, classId, add]);

  useEffect(() => {
    let cancelled = false;
    let channel: ReturnType<typeof supabase.channel> | null = null;
    void (async () => {
      await supabase.realtime.setAuth();
      if (cancelled) return;
      channel = supabase
        .channel(`chat:${classId}`)
        .on("postgres_changes", { event: "INSERT", schema: "public", table: "chat_messages", filter: `class_id=eq.${classId}` }, (p) =>
          add([toMessage(p.new as MessageRow)]),
        )
        .on("postgres_changes", { event: "UPDATE", schema: "public", table: "chat_messages", filter: `class_id=eq.${classId}` }, (p) =>
          add([toMessage(p.new as MessageRow)]),
        )
        .on("postgres_changes", { event: "*", schema: "public", table: "chat_reads", filter: `class_id=eq.${classId}` }, (p) => {
          const row = p.new as { user_id?: string; last_read_at?: string };
          if (row.user_id && row.last_read_at) setReads((r) => ({ ...r, [row.user_id!]: row.last_read_at! }));
        })
        .subscribe((s) => {
          if (s === "SUBSCRIBED") {
            setStatus("online");
            void catchUp();
          } else if (s === "CHANNEL_ERROR" || s === "TIMED_OUT" || s === "CLOSED") setStatus("offline");
        });
    })();
    const online = () => void catchUp();
    const offline = () => setStatus("offline");
    window.addEventListener("online", online);
    window.addEventListener("offline", offline);
    return () => {
      cancelled = true;
      window.removeEventListener("online", online);
      window.removeEventListener("offline", offline);
      if (channel) void supabase.removeChannel(channel);
    };
  }, [supabase, classId, add, catchUp]);

  const deliver = useCallback(
    async (item: Outgoing) => {
      try {
        let file: { file_path: string; file_name: string; file_type: string; file_size: number } | null = null;
        if (item.file) {
          const path = `${classId}/${me}/${crypto.randomUUID()}-${safeFileName(item.file.name)}`;
          const { error } = await supabase.storage.from("chat-files").upload(path, item.file, { contentType: item.file.type || undefined });
          if (error) throw error;
          file = { file_path: path, file_name: item.file.name.slice(0, 200), file_type: (item.file.type || "application/octet-stream").slice(0, 100), file_size: item.file.size };
        }
        const { data, error } = await supabase
          .from("chat_messages")
          .insert({ class_id: classId, body: item.body, ...(file ?? {}) })
          .select(MESSAGE_COLUMNS)
          .single();
        if (error || !data) throw error;
        add([toMessage(data as MessageRow)]);
        setOutgoing((o) => o.filter((x) => x.tempId !== item.tempId));
      } catch {
        setOutgoing((o) => o.map((x) => (x.tempId === item.tempId ? { ...x, failed: true } : x)));
      }
    },
    [supabase, classId, me, add],
  );

  const send = useCallback(
    (body: string, file: File | null) => {
      const item: Outgoing = { tempId: crypto.randomUUID(), body: body.trim(), file, failed: false, createdAt: new Date().toISOString() };
      if (!item.body && !file) return;
      setOutgoing((o) => [...o, item]);
      void deliver(item);
    },
    [deliver],
  );

  const retry = useCallback(
    (tempId: string) => {
      const item = outgoing.find((o) => o.tempId === tempId);
      if (!item) return;
      setOutgoing((o) => o.map((x) => (x.tempId === tempId ? { ...x, failed: false } : x)));
      void deliver({ ...item, failed: false });
    },
    [outgoing, deliver],
  );

  const discard = useCallback((tempId: string) => setOutgoing((o) => o.filter((x) => x.tempId !== tempId)), []);

  /** "I've read up to now" (only moves forward). */
  const lastMarked = useRef(reads[me] ?? "");
  const markRead = useCallback(async () => {
    const newest = messages.at(-1);
    if (!newest || newest.createdAt <= lastMarked.current) return;
    const at = new Date().toISOString();
    lastMarked.current = at;
    setReads((r) => ({ ...r, [me]: at }));
    await supabase.from("chat_reads").upsert({ class_id: classId, last_read_at: at });
  }, [supabase, classId, me, messages]);

  const loadOlder = useCallback(async () => {
    const oldest = messages[0];
    if (!oldest) return;
    const { data } = await supabase
      .from("chat_messages")
      .select(MESSAGE_COLUMNS)
      .eq("class_id", classId)
      .lt("created_at", oldest.createdAt)
      .order("created_at", { ascending: false })
      .limit(PAGE + 1);
    const rows = (data ?? []) as MessageRow[];
    setHasOlder(rows.length > PAGE);
    add(rows.slice(0, PAGE).map(toMessage));
  }, [supabase, classId, messages, add]);

  /** A short-lived link to a file (the bucket is private). */
  const fileUrl = useCallback(
    async (path: string) => (await supabase.storage.from("chat-files").createSignedUrl(path, 3600)).data?.signedUrl ?? null,
    [supabase],
  );

  return { messages, reads, hasOlder, status, outgoing, send, retry, discard, markRead, loadOlder, fileUrl };
}
