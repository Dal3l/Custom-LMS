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
  /** Returns the item's temporary id; `onSaved` gets its real id once it is saved. */
  add: (board: string, data: BoardItemData, onSaved?: (id: string) => void) => string;
  remove: (board: string, id: string) => void;
  /** moved, resized, text changed */
  update: (board: string, id: string, data: BoardItemData) => void;
  /** an erased item back (undo) */
  restore: (board: string, item: BoardItem) => void;
  clear: (board: string) => void;
  /** Saves a picture for the boards of this class; its path, or null. */
  uploadImage: (file: Blob, ext: string) => Promise<string | null>;
};

const Ctx = createContext<BoardsApi | null>(null);
export const useBoards = () => useContext(Ctx);

/**
 * Sends a query. Supabase queries only run when awaited (`then`), so a
 * fire-and-forget call must still call `then`.
 */
function run(query: PromiseLike<unknown>) {
  query.then(undefined, () => undefined);
}

/** What an erased item becomes (never drawn: it is not valid item data). */
const ERASED = { kind: "erased" };

type Row = { id: string; board: string; author_id: string; data: unknown; created_at: string };
const toItem = (r: Row): BoardItem | null =>
  isItemData(r.data) ? { id: r.id, authorId: r.author_id, data: r.data, createdAt: r.created_at } : null;

/** Puts an item in its place (by time), replacing an older copy. */
export function upsertItem(items: BoardItem[], item: BoardItem): BoardItem[] {
  if (items.some((i) => i.id === item.id)) return items.map((i) => (i.id === item.id ? item : i));
  const at = items.findIndex((i) => i.createdAt > item.createdAt);
  return at < 0 ? [...items, item] : [...items.slice(0, at), item, ...items.slice(at)];
}

export const BOARD_IMAGES = "board-images";

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
  // Items taken back (undo) before they were saved: erased as soon as they are.
  const dropped = useRef(new Set<string>());

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
          { event: "UPDATE", schema: "public", table: "board_items", filter: `class_id=eq.${classId}` },
          (change) => {
            const row = change.new as Row;
            const item = toItem(row);
            // An erased item comes as an update to "erased": take it off the board.
            // An item brought back (undo) comes as an update too: put it back.
            put(row.board, (items) => (item ? upsertItem(items, item) : items.filter((i) => i.id !== row.id)));
          },
        )
        // Deletions can't be filtered, and only the item's id arrives (the table is
        // protected by RLS): remove that id wherever it is shown.
        .on("postgres_changes", { event: "DELETE", schema: "public", table: "board_items" }, (change) => {
          const id = (change.old as Partial<Row>).id;
          if (!id) return;
          setBoards((prev) => {
            let changed = false;
            const next = new Map(prev);
            for (const [board, items] of prev) {
              if (items.some((i) => i.id === id)) {
                next.set(board, items.filter((i) => i.id !== id));
                changed = true;
              }
            }
            return changed ? next : prev;
          });
        })
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

  // Safety net: boards on screen are compared with the server every few seconds,
  // so a live message lost on a weak connection still shows up.
  const shownBoards = [...boards.keys()].join("|");
  useEffect(() => {
    if (!shownBoards) return;
    const keys = shownBoards.split("|");
    const timer = setInterval(() => {
      if (document.visibilityState === "hidden") return;
      for (const board of keys) {
        void supabase
          .from("board_items")
          .select("id, board, author_id, data, created_at")
          .eq("class_id", classId)
          .eq("board", board)
          .order("created_at")
          .then(({ data, error }) => {
            if (error || !data) return;
            const fresh = data.map(toItem).filter((i): i is BoardItem => i !== null);
            setBoards((prev) => {
              const current = prev.get(board);
              if (!current) return prev;
              // Keep drawings still being saved here (temporary ids).
              const pending = current.filter((i) => i.id.startsWith("local-"));
              const same =
                pending.length === 0 &&
                current.length === fresh.length &&
                current.every((i, n) => i.id === fresh[n]!.id && JSON.stringify(i.data) === JSON.stringify(fresh[n]!.data));
              return same ? prev : new Map(prev).set(board, [...fresh, ...pending]);
            });
          });
      }
    }, 8000);
    return () => clearInterval(timer);
  }, [shownBoards, supabase, classId]);

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
      add: (board, data, onSaved) => {
        const temp: BoardItem = { id: `local-${crypto.randomUUID()}`, authorId: userId, data, createdAt: new Date().toISOString() };
        put(board, (items) => [...items, temp]);
        void supabase
          .from("board_items")
          .insert({ class_id: classId, board, data })
          .select("id, board, author_id, data, created_at")
          .single()
          .then(({ data: row }) => {
            const saved = row ? toItem(row as Row) : null;
            if (saved && dropped.current.delete(temp.id)) {
              run(supabase.from("board_items").update({ data: ERASED }).eq("id", saved.id));
              put(board, (items) => items.filter((i) => i.id !== temp.id && i.id !== saved.id));
              return;
            }
            if (saved) onSaved?.(saved.id);
            put(board, (items) => {
              const rest = items.filter((i) => i.id !== temp.id && i.id !== saved?.id);
              return saved ? [...rest, saved] : rest;
            });
          });
        return temp.id;
      },
      // Erasing marks the item as erased (an update reaches everyone reliably;
      // deletions can't be filtered by class and sometimes don't arrive).
      remove: (board, id) => {
        put(board, (items) => items.filter((i) => i.id !== id));
        if (id.startsWith("local-")) dropped.current.add(id);
        else run(supabase.from("board_items").update({ data: ERASED }).eq("id", id));
      },
      restore: (board, item) => {
        if (item.id.startsWith("local-")) return;
        put(board, (items) => upsertItem(items, item));
        run(supabase.from("board_items").update({ data: item.data }).eq("id", item.id));
      },
      update: (board, id, data) => {
        put(board, (items) => items.map((i) => (i.id === id ? { ...i, data } : i)));
        if (!id.startsWith("local-")) run(supabase.from("board_items").update({ data }).eq("id", id));
      },
      clear: (board) => {
        put(board, () => []);
        run(supabase.from("board_items").update({ data: ERASED }).eq("class_id", classId).eq("board", board));
      },
      uploadImage: async (file, ext) => {
        const path = `${classId}/${userId}/${crypto.randomUUID()}.${ext}`;
        const { error } = await supabase.storage.from(BOARD_IMAGES).upload(path, file, { contentType: file.type });
        return error ? null : path;
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

// Pictures live in a private bucket: shown through short-lived links, kept here.
const imageLinks = new Map<string, { url: string; until: number }>();

/** A link to show a board picture (a local picture is shown as it is). */
export async function boardImageUrl(src: string): Promise<string | null> {
  if (src.startsWith("blob:")) return src;
  const cached = imageLinks.get(src);
  if (cached && cached.until > Date.now()) return cached.url;
  const { data } = await createClient().storage.from(BOARD_IMAGES).createSignedUrl(src, 3600);
  if (!data) return null;
  imageLinks.set(src, { url: data.signedUrl, until: Date.now() + 50 * 60 * 1000 });
  return data.signedUrl;
}
