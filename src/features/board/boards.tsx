"use client";

import type { RealtimeChannel } from "@supabase/supabase-js";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { isItemData, isPersonalBoard, type BoardItem, type BoardItemData } from "./items";

/**
 * Drawings of a class lesson: loads each board when it is shown, saves new
 * items, removes items, and receives everyone else's changes live (one
 * connection for all boards). Without it (the teacher's preview) boards are
 * drawn locally and not kept.
 */
type BoardsApi = {
  userId: string;
  isTeacher: boolean;
  /** Personal boards (PDF notes): whose items to show besides one's own. */
  otherUserId: string | null;
  items: (board: string) => BoardItem[] | undefined;
  load: (board: string) => void;
  add: (board: string, data: BoardItemData) => void;
  remove: (board: string, id: string) => void;
  clear: (board: string) => void;
};

const Ctx = createContext<BoardsApi | null>(null);
export const useBoards = () => useContext(Ctx);

type Row = { id: string; board: string; author_id: string; data: unknown; created_at: string };
const toItem = (r: Row): BoardItem | null =>
  isItemData(r.data) ? { id: r.id, authorId: r.author_id, data: r.data, createdAt: r.created_at } : null;

export function BoardsProvider({
  classId,
  userId,
  isTeacher,
  otherUserId,
  children,
}: {
  classId: string;
  userId: string;
  isTeacher: boolean;
  otherUserId: string | null;
  children: React.ReactNode;
}) {
  const [supabase] = useState(() => createClient());
  const [boards, setBoards] = useState<Map<string, BoardItem[]>>(new Map());
  const loading = useRef(new Set<string>());

  const put = useCallback((board: string, fn: (items: BoardItem[]) => BoardItem[]) => {
    setBoards((prev) => {
      const current = prev.get(board);
      if (!current) return prev; // not shown here: it is loaded fresh when opened
      return new Map(prev).set(board, fn(current));
    });
  }, []);

  useEffect(() => {
    let channel: RealtimeChannel | null = null;
    let cancelled = false;
    void (async () => {
      await supabase.realtime.setAuth();
      if (cancelled) return;
      channel = supabase
        .channel(`boards:${classId}:${userId}`)
        .on(
          "postgres_changes",
          { event: "INSERT", schema: "public", table: "board_items", filter: `class_id=eq.${classId}` },
          (change) => {
            const item = toItem(change.new as Row);
            const board = (change.new as Row).board;
            if (item) put(board, (items) => (items.some((i) => i.id === item.id) ? items : [...items, item]));
          },
        )
        .on(
          "postgres_changes",
          { event: "DELETE", schema: "public", table: "board_items", filter: `class_id=eq.${classId}` },
          (change) => {
            const old = change.old as Partial<Row>;
            if (old.board && old.id) put(old.board, (items) => items.filter((i) => i.id !== old.id));
          },
        )
        .subscribe((status) => {
          // Back after a break: boards on screen are loaded again.
          if (status === "SUBSCRIBED") {
            setBoards((prev) => {
              for (const board of prev.keys()) loading.current.delete(board);
              return new Map();
            });
          }
        });
    })();
    return () => {
      cancelled = true;
      if (channel) void supabase.removeChannel(channel);
    };
  }, [supabase, classId, userId, put]);

  const api = useMemo<BoardsApi>(
    () => ({
      userId,
      isTeacher,
      otherUserId,
      items: (board) => boards.get(board),
      load: (board) => {
        if (boards.has(board) || loading.current.has(board)) return;
        loading.current.add(board);
        void supabase
          .from("board_items")
          .select("id, board, author_id, data, created_at")
          .eq("class_id", classId)
          .eq("board", board)
          .order("created_at")
          .then(({ data }) => {
            loading.current.delete(board);
            const items = (data ?? []).map(toItem).filter((i): i is BoardItem => i !== null);
            setBoards((prev) => new Map(prev).set(board, items));
          });
      },
      add: (board, data) => {
        const temp: BoardItem = { id: `local-${crypto.randomUUID()}`, authorId: userId, data, createdAt: new Date().toISOString() };
        put(board, (items) => [...items, temp]);
        void supabase
          .from("board_items")
          .insert({ class_id: classId, board, data })
          .select("id, board, author_id, data, created_at")
          .single()
          .then(({ data: row }) => {
            const saved = row ? toItem(row as Row) : null;
            put(board, (items) => {
              const rest = items.filter((i) => i.id !== temp.id && i.id !== saved?.id);
              return saved ? [...rest, saved] : rest;
            });
          });
      },
      remove: (board, id) => {
        put(board, (items) => items.filter((i) => i.id !== id));
        if (!id.startsWith("local-")) void supabase.from("board_items").delete().eq("id", id);
      },
      clear: (board) => {
        put(board, () => []);
        void supabase.from("board_items").delete().eq("class_id", classId).eq("board", board);
      },
    }),
    [boards, supabase, classId, userId, isTeacher, otherUserId, put],
  );

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

/** Items of a board as this person should see them (personal boards: own + the other side's). */
export function visibleItems(api: BoardsApi, board: string, items: BoardItem[]): BoardItem[] {
  if (!isPersonalBoard(board)) return items;
  return items.filter((i) => i.authorId === api.userId || i.authorId === api.otherUserId);
}
