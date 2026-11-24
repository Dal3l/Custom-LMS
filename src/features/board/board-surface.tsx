"use client";

import {
  Circle,
  Eraser,
  Hand,
  Highlighter,
  ImagePlus,
  Loader2,
  LocateFixed,
  Maximize,
  Minus,
  Pencil,
  Square,
  Trash2,
  Type,
  Undo2,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useId, useRef, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { boardImageUrl, upsertItem, useBoards, visibleItems } from "./boards";
import { MAX_IMAGE_BYTES, prepareImage } from "./image";
import {
  BOARD_COLORS,
  contentBox,
  cornerOf,
  eraseStroke,
  fitView,
  itemBox,
  MARKER_COLOR,
  MAX_TEXT,
  MAX_ZOOM,
  MIN_TEXT,
  MIN_ZOOM,
  moveItem,
  resizeItem,
  START_VIEW,
  stepZoom,
  strokePath,
  TEXT_SIZE,
  textBox,
  textSize,
  thinPoints,
  toPoint,
  touches,
  zoomAt,
  type BoardItem,
  type BoardItemData,
  type Box,
  type Corner,
  type Point,
  type Tool,
  type View,
} from "./items";

const W = 1000;

/** One change to a board; several made at once are taken back with one "undo". */
export type BoardChange = { add: BoardItemData } | { remove: string } | { update: string; data: BoardItemData } | { clear: true };

/**
 * Board items: from the class (live, saved) or, without a class, kept on this
 * screen only. Changes go through `change`, which remembers how to take them
 * back: `undo` takes back the last one (drawing, erasing, moving, resizing,
 * editing text, clearing). With nothing left to take back, it removes one's
 * own last item, as before.
 */
function useBoardItems(board: string) {
  const api = useBoards();
  const [local, setLocal] = useState<BoardItem[]>([]);
  const history = useRef<(() => void)[][]>([]);
  const [steps, setSteps] = useState(0);
  useEffect(() => {
    api?.load(board);
  }, [api, board]);
  const shared = api?.items(board);
  const items = api ? (shared ? visibleItems(api, board, shared) : []) : local;
  const userId = api?.userId ?? "me";

  const raw = {
    add: (data: BoardItemData, onSaved: (id: string) => void): string => {
      if (api) return api.add(board, data, onSaved);
      const id = crypto.randomUUID();
      setLocal((l) => [...l, { id, authorId: "me", data, createdAt: new Date().toISOString() }]);
      return id;
    },
    remove: (id: string) => (api ? api.remove(board, id) : setLocal((l) => l.filter((i) => i.id !== id))),
    update: (id: string, data: BoardItemData) =>
      api ? api.update(board, id, data) : setLocal((l) => l.map((i) => (i.id === id ? { ...i, data } : i))),
    restore: (item: BoardItem) => (api ? api.restore(board, item) : setLocal((l) => upsertItem(l, item))),
    clear: () => (api ? api.clear(board) : setLocal([])),
  };

  function change(changes: BoardChange[]) {
    const back: (() => void)[] = [];
    for (const c of changes) {
      if ("add" in c) {
        const ref = { id: "" };
        ref.id = raw.add(c.add, (id) => {
          ref.id = id;
        });
        back.push(() => raw.remove(ref.id));
      } else if ("remove" in c) {
        const item = items.find((i) => i.id === c.remove);
        raw.remove(c.remove);
        if (item) back.push(() => raw.restore(item));
      } else if ("update" in c) {
        const item = items.find((i) => i.id === c.update);
        raw.update(c.update, c.data);
        if (item) back.push(() => raw.update(item.id, item.data));
      } else {
        const all = items;
        raw.clear();
        back.push(() => all.forEach(raw.restore));
      }
    }
    if (back.length === 0) return;
    history.current = [...history.current.slice(-99), back];
    setSteps(history.current.length);
  }

  const mine = items.filter((i) => i.authorId === userId);
  function undo() {
    const last = history.current.pop();
    setSteps(history.current.length);
    if (last) return [...last].reverse().forEach((f) => f());
    if (mine.length) raw.remove(mine[mine.length - 1]!.id);
  }

  return {
    items,
    loading: Boolean(api && !shared),
    userId,
    canRemoveAll: api ? api.isTeacher : true,
    change,
    undo,
    canUndo: steps > 0 || mine.length > 0,
    uploadImage: (file: Blob, ext: string) => (api ? api.uploadImage(file, ext) : Promise.resolve(URL.createObjectURL(file))),
  };
}

export type BoardState = ReturnType<typeof useBoardItems>;

// The text's real width on screen (in board units), for its frame.
let measureCtx: CanvasRenderingContext2D | null = null;
let measureFont = "";
function measure(text: string, size: number): number | undefined {
  if (typeof document === "undefined") return undefined;
  measureCtx ??= document.createElement("canvas").getContext("2d");
  if (!measureCtx) return undefined;
  measureFont ||= getComputedStyle(document.body).fontFamily || "sans-serif";
  measureCtx.font = `${size}px ${measureFont}`;
  return measureCtx.measureText(text).width;
}

/** The frame of a text (measured) or a picture. */
function frameOf(d: BoardItemData, aspect: number): Box {
  return d.kind === "text" ? textBox(d, aspect, measure(d.text, textSize(d))) : itemBox(d, aspect);
}

const resizable = (d: BoardItemData) => d.kind === "text" || d.kind === "image";

function BoardImage({ id, data, h }: { id: string; data: Extract<BoardItemData, { kind: "image" }>; h: number }) {
  const [url, setUrl] = useState<string | null>(data.src.startsWith("blob:") ? data.src : null);
  useEffect(() => {
    let off = false;
    void boardImageUrl(data.src).then((u) => {
      if (!off) setUrl(u);
    });
    return () => {
      off = true;
    };
  }, [data.src]);
  const box = { "data-item": id, x: data.at[0] * W, y: data.at[1] * h, width: data.w * W, height: data.h * h };
  return url ? <image {...box} href={url} preserveAspectRatio="none" /> : <rect {...box} fill="#f4f4f5" />;
}

function ItemShape({ item, h }: { item: BoardItem; h: number }) {
  const d = item.data;
  const common = { "data-item": item.id };
  switch (d.kind) {
    case "pen":
    case "marker":
      return (
        <path
          {...common}
          d={strokePath(d.points, W, h)}
          fill="none"
          stroke={d.color}
          strokeWidth={d.kind === "marker" ? 18 : 3.5}
          strokeOpacity={d.kind === "marker" ? 0.4 : 1}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
    case "line":
      return <line {...common} x1={d.from[0] * W} y1={d.from[1] * h} x2={d.to[0] * W} y2={d.to[1] * h} stroke={d.color} strokeWidth={3.5} strokeLinecap="round" />;
    case "rect": {
      const x = Math.min(d.from[0], d.to[0]) * W;
      const y = Math.min(d.from[1], d.to[1]) * h;
      return <rect {...common} x={x} y={y} width={Math.abs(d.to[0] - d.from[0]) * W} height={Math.abs(d.to[1] - d.from[1]) * h} fill="none" stroke={d.color} strokeWidth={3.5} />;
    }
    case "ellipse":
      return (
        <ellipse
          {...common}
          cx={((d.from[0] + d.to[0]) / 2) * W}
          cy={((d.from[1] + d.to[1]) / 2) * h}
          rx={(Math.abs(d.to[0] - d.from[0]) / 2) * W}
          ry={(Math.abs(d.to[1] - d.from[1]) / 2) * h}
          fill="none"
          stroke={d.color}
          strokeWidth={3.5}
        />
      );
    case "text":
      return (
        <text {...common} x={d.at[0] * W} y={d.at[1] * h} fill={d.color} fontSize={textSize(d)} dominantBaseline="hanging" fontFamily="inherit">
          {d.text}
        </text>
      );
    case "image":
      return <BoardImage id={item.id} data={d} h={h} />;
  }
}

/** Eraser size: a share of the board's width (on screen). */
const ERASER = 0.018;
/** How near (in screen pixels) a corner of the frame must be to grab it. */
const HANDLE = 14;

type Gesture =
  | { kind: "draw"; data: BoardItemData }
  | { kind: "erase"; path: Point[] }
  | { kind: "move"; id: string; from: Point; original: BoardItemData; current: BoardItemData }
  | { kind: "resize"; id: string; corner: Corner; box: Box; original: BoardItemData; current: BoardItemData }
  | { kind: "pan"; x: number; y: number; view: View };

type Typing = { id: string | null; at: Point; text: string; size: number; color: string };

/**
 * A drawing surface (aspect = height / width of its frame). `tool` null = just
 * looking (touch scrolls the page). With `view` and `onView` the board is
 * endless: the frame shows part of it, moved with the hand (or two fingers)
 * and zoomed. Without them it is one sheet, e.g. a PDF page (`children` are
 * drawn underneath).
 *
 * Text and pictures: one click with the hand or the text tool shows a frame
 * whose corners make them bigger or smaller; a double click on text lets you
 * change it. Ctrl/⌘+Z takes back the last change; Delete removes the selected
 * thing; a pasted or dropped picture goes onto the board (`onImage`).
 */
export function BoardSurface({
  board,
  state,
  aspect,
  tool,
  color,
  label,
  view,
  onView,
  onImage,
  children,
}: {
  board: string;
  state: BoardState;
  aspect: number;
  /** null = just looking (touch scrolls the page) */
  tool: Tool | null;
  color: string;
  label: string;
  view?: View;
  onView?: (view: View) => void;
  onImage?: (file: File) => void;
  children?: React.ReactNode;
}) {
  const t = useTranslations("board");
  const h = W * aspect;
  const endless = Boolean(view && onView);
  const v = view ?? START_VIEW;
  const frame = useRef<HTMLDivElement>(null);
  const [gesture, setGesture] = useState<Gesture | null>(null);
  const [typing, setTyping] = useState<Typing | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [frameW, setFrameW] = useState(0);
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const pinch = useRef<{ dist: number; fx: number; fy: number; view: View } | null>(null);
  const lastTap = useRef<{ id: string | null; at: number }>({ id: null, at: 0 });
  const dots = `dots${useId().replace(/[^a-z0-9]/gi, "")}`;

  useEffect(() => {
    const el = frame.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setFrameW(el.clientWidth));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Ctrl/⌘ + wheel (or a pinch on a touchpad) zooms an endless board around the pointer.
  useEffect(() => {
    const el = frame.current;
    if (!el || !view || !onView) return;
    const wheel = (e: WheelEvent) => {
      if (!e.ctrlKey && !e.metaKey) return;
      e.preventDefault();
      const b = el.getBoundingClientRect();
      onView(zoomAt(view, view.zoom * Math.exp(-e.deltaY * 0.01), (e.clientX - b.left) / b.width, (e.clientY - b.top) / b.height));
    };
    el.addEventListener("wheel", wheel, { passive: false });
    return () => el.removeEventListener("wheel", wheel);
  }, [view, onView]);

  /** Screen pixels per board unit. */
  const scale = frameW ? (frameW * v.zoom) / W : 1;

  function share(clientX: number, clientY: number): [number, number] {
    const b = frame.current!.getBoundingClientRect();
    return [(clientX - b.left) / b.width, (clientY - b.top) / b.height];
  }
  function pointOf(e: { clientX: number; clientY: number }): Point {
    const [fx, fy] = share(e.clientX, e.clientY);
    return endless ? toPoint(v.x + fx / v.zoom, v.y + fy / v.zoom, true) : toPoint(fx, fy);
  }

  const canChange = (item: BoardItem) => item.authorId === state.userId || state.canRemoveAll;
  const selectable = tool === "hand" || tool === "text";
  const selectedItem = selectable && selected ? state.items.find((i) => i.id === selected && canChange(i) && resizable(i.data)) : undefined;

  /** The topmost item one may change under p (text by its measured frame). */
  function hitTest(p: Point): BoardItem | undefined {
    const r = 0.012 / v.zoom;
    return [...state.items].reverse().find((i) => {
      if (!canChange(i)) return false;
      if (i.data.kind !== "text") return touches(i.data, p, r, aspect);
      const b = frameOf(i.data, aspect);
      return p[0] >= b.x0 - r && p[0] <= b.x1 + r && p[1] >= b.y0 - r / aspect && p[1] <= b.y1 + r / aspect;
    });
  }

  /** The corner of the selected thing's frame under p, if any. */
  function cornerAt(p: Point): Corner | null {
    if (!selectedItem || !frameW) return null;
    const box = frameOf(selectedItem.data, aspect);
    for (const c of ["nw", "ne", "sw", "se"] as const) {
      const [cx, cy] = cornerOf(box, c);
      if (Math.abs(p[0] - cx) * frameW * v.zoom <= HANDLE && Math.abs(p[1] - cy) * frameW * aspect * v.zoom <= HANDLE) return c;
    }
    return null;
  }

  /** What the eraser does to the items (pieces left, or [] = gone), for the preview and the end. */
  function erased(path: Point[]): Map<string, BoardItemData[]> {
    const out = new Map<string, BoardItemData[]>();
    const radius = ERASER / v.zoom;
    for (const item of state.items) {
      if (!canChange(item)) continue;
      const d = item.data;
      if (d.kind === "pen" || d.kind === "marker") {
        const pieces = eraseStroke(d.points, path, radius + (d.kind === "marker" ? 0.009 : 0.002), aspect);
        if (pieces.length !== 1 || pieces[0]!.length !== d.points.length) {
          out.set(item.id, pieces.map((points) => ({ ...d, points })));
        }
      } else if (path.some((p) => touches(d, p, radius, aspect))) {
        out.set(item.id, []);
      }
    }
    return out;
  }

  function startEditing(item: BoardItem) {
    if (item.data.kind !== "text") return;
    setSelected(null);
    setTyping({ id: item.id, at: item.data.at, text: item.data.text, size: textSize(item.data), color: item.data.color });
  }

  function finishText() {
    const tp = typing;
    setTyping(null);
    if (!tp) return;
    const text = tp.text.trim().slice(0, 500);
    if (tp.id) {
      const item = state.items.find((i) => i.id === tp.id);
      if (!item || item.data.kind !== "text") return;
      if (!text) state.change([{ remove: tp.id }]);
      else if (text !== item.data.text) state.change([{ update: tp.id, data: { ...item.data, text } }]);
      setSelected(tp.id);
    } else if (text) {
      state.change([{ add: { kind: "text", color: tp.color, at: tp.at, text, size: tp.size } }]);
    }
  }

  function down(e: React.PointerEvent) {
    if (!tool) return;
    // No page focus change or text selection: the board handles the click itself.
    e.preventDefault();
    if (typing) return finishText();
    frame.current?.focus({ preventScroll: true });
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (endless && pointers.current.size === 2) {
      // Two fingers: move and zoom the board instead of drawing.
      setGesture(null);
      const [a, b] = [...pointers.current.values()] as [{ x: number; y: number }, { x: number; y: number }];
      const [fx, fy] = share((a.x + b.x) / 2, (a.y + b.y) / 2);
      pinch.current = { dist: Math.hypot(a.x - b.x, a.y - b.y) || 1, fx, fy, view: v };
      return;
    }
    if (pointers.current.size > 1) return;
    (e.currentTarget as Element).setPointerCapture?.(e.pointerId);
    const p = pointOf(e);
    if (endless && e.button === 1) return setGesture({ kind: "pan", x: e.clientX, y: e.clientY, view: v });

    if (tool === "hand" || tool === "text") {
      const corner = cornerAt(p);
      if (corner && selectedItem) {
        const box = frameOf(selectedItem.data, aspect);
        return setGesture({ kind: "resize", id: selectedItem.id, corner, box, original: selectedItem.data, current: selectedItem.data });
      }
      const hit = hitTest(p);
      const now = e.timeStamp;
      const twice = hit && lastTap.current.id === hit.id && now - lastTap.current.at < 450;
      lastTap.current = { id: hit?.id ?? null, at: now };
      if (hit && twice && hit.data.kind === "text") return startEditing(hit);
      if (tool === "text") {
        if (hit && hit.data.kind === "text") return setSelected(hit.id);
        setSelected(null);
        const size = Math.round(Math.min(MAX_TEXT, Math.max(MIN_TEXT, TEXT_SIZE / v.zoom)));
        return setTyping({ id: null, at: p, text: "", size, color });
      }
      if (hit) {
        setSelected(resizable(hit.data) ? hit.id : null);
        return setGesture({ kind: "move", id: hit.id, from: p, original: hit.data, current: hit.data });
      }
      setSelected(null);
      if (endless) setGesture({ kind: "pan", x: e.clientX, y: e.clientY, view: v });
      return;
    }
    if (tool === "eraser") return setGesture({ kind: "erase", path: [p] });
    if (tool === "pen" || tool === "marker") {
      setGesture({ kind: "draw", data: { kind: tool, color: tool === "marker" ? MARKER_COLOR : color, points: [p] } });
    } else {
      setGesture({ kind: "draw", data: { kind: tool, color, from: p, to: p } });
    }
  }

  function move(e: React.PointerEvent) {
    if (pointers.current.has(e.pointerId)) pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const pz = pinch.current;
    if (pz && onView && pointers.current.size >= 2) {
      const [a, b] = [...pointers.current.values()] as [{ x: number; y: number }, { x: number; y: number }];
      const [fx, fy] = share((a.x + b.x) / 2, (a.y + b.y) / 2);
      const zoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, (pz.view.zoom * Math.hypot(a.x - b.x, a.y - b.y)) / pz.dist));
      const px = pz.view.x + pz.fx / pz.view.zoom, py = pz.view.y + pz.fy / pz.view.zoom;
      onView({ x: px - fx / zoom, y: py - fy / zoom, zoom });
      return;
    }
    if (!gesture) return;
    if (gesture.kind === "pan") {
      const b = frame.current!.getBoundingClientRect();
      const g = gesture.view;
      onView?.({ ...g, x: g.x - (e.clientX - gesture.x) / b.width / g.zoom, y: g.y - (e.clientY - gesture.y) / b.height / g.zoom });
      return;
    }
    const p = pointOf(e);
    if (gesture.kind === "erase") return setGesture({ ...gesture, path: [...gesture.path, p] });
    if (gesture.kind === "move") {
      return setGesture({ ...gesture, current: moveItem(gesture.original, p[0] - gesture.from[0], p[1] - gesture.from[1], endless) });
    }
    if (gesture.kind === "resize") {
      return setGesture({ ...gesture, current: resizeItem(gesture.original, gesture.box, gesture.corner, p, aspect, endless) });
    }
    const d = gesture.data;
    if ("points" in d) setGesture({ kind: "draw", data: { ...d, points: [...d.points, p] } });
    else if ("to" in d) setGesture({ kind: "draw", data: { ...d, to: p } });
  }

  function up(e: React.PointerEvent) {
    pointers.current.delete(e.pointerId);
    if (pinch.current) {
      if (pointers.current.size < 2) pinch.current = null;
      return;
    }
    const g = gesture;
    setGesture(null);
    if (!g) return;
    if (g.kind === "draw") {
      const d = g.data;
      if ("points" in d) state.change([{ add: { ...d, points: thinPoints(d.points) } }]);
      else if ("to" in d && (d.from[0] !== d.to[0] || d.from[1] !== d.to[1])) state.change([{ add: d }]);
    }
    if (g.kind === "erase") {
      const changes: BoardChange[] = [];
      for (const [id, pieces] of erased(g.path)) {
        changes.push({ remove: id }, ...pieces.map((data) => ({ add: data })));
        if (id === selected) setSelected(null);
      }
      state.change(changes);
    }
    if ((g.kind === "move" || g.kind === "resize") && g.current !== g.original) state.change([{ update: g.id, data: g.current }]);
  }

  function cancel(e: React.PointerEvent) {
    pointers.current.delete(e.pointerId);
    pinch.current = null;
    setGesture(null);
  }

  function keyDown(e: React.KeyboardEvent) {
    if (e.target !== frame.current) return;
    if ((e.ctrlKey || e.metaKey) && !e.shiftKey && e.key.toLowerCase() === "z") {
      e.preventDefault();
      state.undo();
    } else if ((e.key === "Delete" || e.key === "Backspace") && selectedItem) {
      e.preventDefault();
      state.change([{ remove: selectedItem.id }]);
      setSelected(null);
    } else if (e.key === "Enter" && selectedItem?.data.kind === "text") {
      e.preventDefault();
      startEditing(selectedItem);
    }
  }

  const pictureOf = (files: FileList | undefined | null) => [...(files ?? [])].find((f) => f.type.startsWith("image/"));

  // What is drawn: saved items with the gesture in progress applied.
  const preview = gesture?.kind === "erase" ? erased(gesture.path) : null;
  const shown: BoardItem[] = state.items.flatMap((item) => {
    if (typing?.id === item.id) return [];
    if ((gesture?.kind === "move" || gesture?.kind === "resize") && gesture.id === item.id) return [{ ...item, data: gesture.current }];
    const pieces = preview?.get(item.id);
    if (pieces) return pieces.map((data, i) => ({ ...item, id: `${item.id}:${i}`, data }));
    return [item];
  });
  if (gesture?.kind === "draw") shown.push({ id: "draft", authorId: state.userId, data: gesture.data, createdAt: "" });

  // The frame around the selected text or picture (with the gesture applied).
  const selectedShown = selectedItem && shown.find((i) => i.id === selectedItem.id);
  const selBox = selectedShown ? frameOf(selectedShown.data, aspect) : null;
  const handle = 10 / scale;

  return (
    <div
      ref={frame}
      tabIndex={-1}
      className="relative w-full overflow-hidden outline-none"
      style={{ aspectRatio: `${1 / aspect}` }}
      onKeyDown={keyDown}
      onPaste={(e) => {
        const file = pictureOf(e.clipboardData?.files);
        if (file && onImage) {
          e.preventDefault();
          onImage(file);
        }
      }}
      onDragOver={(e) => onImage && e.dataTransfer.types.includes("Files") && e.preventDefault()}
      onDrop={(e) => {
        const file = pictureOf(e.dataTransfer?.files);
        if (file && onImage) {
          e.preventDefault();
          onImage(file);
        }
      }}
    >
      {children}
      <svg
        viewBox={endless ? `${v.x * W} ${v.y * h} ${W / v.zoom} ${h / v.zoom}` : `0 0 ${W} ${h}`}
        preserveAspectRatio="none"
        role="img"
        aria-label={label}
        data-board={board}
        className={cn(
          "absolute inset-0 size-full select-none",
          tool ? "touch-none" : "pointer-events-none",
          tool === "hand" ? (gesture ? "cursor-grabbing" : "cursor-grab") : tool === "eraser" ? "cursor-cell" : tool === "text" ? "cursor-text" : tool && "cursor-crosshair",
        )}
        onPointerDown={down}
        onPointerMove={move}
        onPointerUp={up}
        onPointerCancel={cancel}
      >
        {endless && (
          <>
            <defs>
              <pattern id={dots} width={50} height={50} patternUnits="userSpaceOnUse">
                <circle cx={25} cy={25} r={1.4 / Math.sqrt(v.zoom)} fill="#d4d4d8" />
              </pattern>
            </defs>
            <rect x={v.x * W} y={v.y * h} width={W / v.zoom} height={h / v.zoom} fill={`url(#${dots})`} pointerEvents="none" />
          </>
        )}
        {shown.map((item) => (
          <ItemShape key={item.id} item={item} h={h} />
        ))}
        {selBox && (
          <g data-selection="" pointerEvents="none">
            <rect
              x={selBox.x0 * W - 4 / scale}
              y={selBox.y0 * h - 4 / scale}
              width={(selBox.x1 - selBox.x0) * W + 8 / scale}
              height={(selBox.y1 - selBox.y0) * h + 8 / scale}
              fill="none"
              stroke="#2563eb"
              strokeDasharray="6 4"
              vectorEffect="non-scaling-stroke"
            />
            {(["nw", "ne", "sw", "se"] as const).map((c) => {
              const [cx, cy] = cornerOf(selBox, c);
              return (
                <rect
                  key={c}
                  x={cx * W - handle / 2}
                  y={cy * h - handle / 2}
                  width={handle}
                  height={handle}
                  fill="#fff"
                  stroke="#2563eb"
                  strokeWidth={1.5}
                  vectorEffect="non-scaling-stroke"
                />
              );
            })}
          </g>
        )}
      </svg>
      {typing && (
        <input
          autoFocus
          aria-label={t("textPlaceholder")}
          placeholder={t("textPlaceholder")}
          value={typing.text}
          maxLength={500}
          onChange={(e) => setTyping({ ...typing, text: e.target.value })}
          onBlur={finishText}
          onKeyDown={(e) => {
            if (e.key === "Enter") finishText();
            if (e.key === "Escape") {
              e.stopPropagation();
              setTyping(null);
            }
          }}
          className="absolute z-10 rounded-sm border border-dashed border-primary bg-background/80 px-0.5 leading-tight outline-none"
          style={{
            left: `${(typing.at[0] - v.x) * v.zoom * 100}%`,
            top: `${(typing.at[1] - v.y) * v.zoom * 100}%`,
            fontSize: `${Math.max(12, typing.size * scale)}px`,
            color: typing.color,
            width: `${Math.max(8, typing.text.length + 2)}ch`,
            maxWidth: "90%",
          }}
        />
      )}
      {state.loading && <span className="sr-only">{t("loading")}</span>}
    </div>
  );
}

const TOOL_ICONS: Record<Tool, typeof Pencil> = {
  hand: Hand,
  pen: Pencil,
  marker: Highlighter,
  line: Minus,
  rect: Square,
  ellipse: Circle,
  text: Type,
  eraser: Eraser,
};

/** Tools above a board: what to draw with, colour, picture, undo, zoom, clear (teacher). */
export function BoardToolbar({
  tools,
  tool,
  onTool,
  color,
  onColor,
  state,
  view,
  onView,
  aspect = 0.625,
  onImage,
  imageBusy = false,
  onBringHere,
}: {
  tools: Tool[];
  tool: Tool | null;
  onTool: (tool: Tool | null) => void;
  color: string;
  onColor: (color: string) => void;
  state: BoardState;
  view?: View;
  onView?: (view: View) => void;
  aspect?: number;
  onImage?: (file: File) => void;
  imageBusy?: boolean;
  /** The teacher: "Bring students here" — their boards move to this view. */
  onBringHere?: () => void;
}) {
  const t = useTranslations("board");
  const file = useRef<HTMLInputElement>(null);
  const showColors = tools.some((x) => x !== "marker" && x !== "eraser");
  return (
    <div className="flex flex-wrap items-center gap-1" role="toolbar" aria-label={t("tools")}>
      {tools.map((x) => {
        const Icon = TOOL_ICONS[x];
        return (
          <Button key={x} type="button" size="icon-sm" variant={tool === x ? "default" : "ghost"} aria-pressed={tool === x} aria-label={t(`tool.${x}`)} title={t(`tool.${x}`)} onClick={() => onTool(x)}>
            <Icon aria-hidden="true" />
          </Button>
        );
      })}
      {onImage && (
        <>
          <Button type="button" size="icon-sm" variant="ghost" aria-label={t("image")} title={t("image")} disabled={imageBusy} onClick={() => file.current?.click()}>
            {imageBusy ? <Loader2 className="animate-spin" aria-hidden="true" /> : <ImagePlus aria-hidden="true" />}
          </Button>
          <input
            ref={file}
            type="file"
            accept="image/png,image/jpeg,image/webp,image/gif"
            className="hidden"
            aria-label={t("image")}
            onChange={(e) => {
              const f = e.target.files?.[0];
              e.target.value = "";
              if (f) onImage(f);
            }}
          />
        </>
      )}
      {showColors && (
        <span className="mx-1 flex items-center gap-1" role="radiogroup" aria-label={t("color")}>
          {BOARD_COLORS.map((c) => (
            <button
              key={c}
              type="button"
              role="radio"
              aria-checked={color === c}
              aria-label={t(`colors.${c.slice(1)}` as "colors.111827")}
              onClick={() => onColor(c)}
              className={cn("size-6 rounded-full border-2", color === c ? "border-foreground" : "border-transparent")}
              style={{ backgroundColor: c }}
            />
          ))}
        </span>
      )}
      <Button type="button" size="icon-sm" variant="ghost" aria-label={t("undo")} title={t("undo")} disabled={!state.canUndo} onClick={() => state.undo()}>
        <Undo2 aria-hidden="true" />
      </Button>
      {view && onView && (
        <span className="mx-1 flex items-center gap-0.5" role="group" aria-label={t("zoom")}>
          <Button type="button" size="icon-sm" variant="ghost" aria-label={t("zoomOut")} title={t("zoomOut")} disabled={view.zoom <= MIN_ZOOM} onClick={() => onView(zoomAt(view, stepZoom(view.zoom, -1)))}>
            <ZoomOut aria-hidden="true" />
          </Button>
          <span className="w-10 text-center text-xs tabular-nums">{Math.round(view.zoom * 100)}%</span>
          <Button type="button" size="icon-sm" variant="ghost" aria-label={t("zoomIn")} title={t("zoomIn")} disabled={view.zoom >= MAX_ZOOM} onClick={() => onView(zoomAt(view, stepZoom(view.zoom, 1)))}>
            <ZoomIn aria-hidden="true" />
          </Button>
          <Button type="button" size="icon-sm" variant="ghost" aria-label={t("fit")} title={t("fit")} onClick={() => onView(fitView(contentBox(state.items.map((i) => i.data), aspect)))}>
            <Maximize aria-hidden="true" />
          </Button>
        </span>
      )}
      {onBringHere && (
        <Button type="button" size="sm" variant="outline" className="mx-1" title={t("bringHereHint")} onClick={onBringHere}>
          <LocateFixed aria-hidden="true" />
          <span className="max-sm:sr-only">{t("bringHere")}</span>
        </Button>
      )}
      {state.canRemoveAll && (
        <Button type="button" size="icon-sm" variant="ghost" aria-label={t("clear")} title={t("clear")} disabled={state.items.length === 0} onClick={() => state.change([{ clear: true }])}>
          <Trash2 aria-hidden="true" />
        </Button>
      )}
    </div>
  );
}

export { useBoardItems };

/** A whole board with its toolbar (the lesson whiteboard, whiteboard blocks): endless, with pictures. */
export function Whiteboard({ board, label, aspect = 0.625 }: { board: string; label: string; aspect?: number }) {
  const t = useTranslations("board");
  const state = useBoardItems(board);
  const api = useBoards();
  const [tool, setTool] = useState<Tool | null>("pen");
  const [color, setColor] = useState<string>(BOARD_COLORS[1]);
  // A student: the teacher's "Bring students here" moves this board to the teacher's view
  // (also when it made the board open just now).
  const incoming = api?.incomingView ?? null;
  const [view, setView] = useState<View>(() =>
    incoming && incoming.board === board && Date.now() - incoming.at < 15_000 ? incoming.view : START_VIEW,
  );
  const [seenIncoming, setSeenIncoming] = useState(incoming);
  if (incoming !== seenIncoming) {
    setSeenIncoming(incoming);
    if (incoming?.board === board) setView(incoming.view);
  }
  const [busy, setBusy] = useState(false);
  const bring = api?.isTeacher ? api.bringHere : undefined;

  async function bringHere() {
    if (!bring) return;
    if (await bring(board, view)) toast.success(t("broughtHere"));
    else toast.error(t("bringHereFailed"));
  }

  async function addImage(file: File) {
    if (busy) return;
    if (file.size > 4 * MAX_IMAGE_BYTES) return void toast.error(t("imageTooBig"));
    setBusy(true);
    try {
      const img = await prepareImage(file);
      if (!img) return void toast.error(img === null && file.size > MAX_IMAGE_BYTES ? t("imageTooBig") : t("imageFailed"));
      const src = await state.uploadImage(img.blob, img.ext);
      if (!src) return void toast.error(t("imageFailed"));
      // In the middle of what is on screen, about 40% of its width (small pictures stay small).
      const w = Math.min(0.4, img.width / 1000) / view.zoom;
      const hh = (w * img.height) / (img.width * aspect);
      const at = toPoint(view.x + (1 / view.zoom - w) / 2, view.y + (1 / view.zoom - hh) / 2, true);
      state.change([{ add: { kind: "image", src, at, w: Math.round(w * 10000) / 10000, h: Math.round(hh * 10000) / 10000 } }]);
      setTool("hand");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <BoardToolbar
        tools={["hand", "pen", "marker", "line", "rect", "ellipse", "text", "eraser"]}
        tool={tool}
        onTool={setTool}
        color={color}
        onColor={setColor}
        state={state}
        view={view}
        onView={setView}
        aspect={aspect}
        onImage={(f) => void addImage(f)}
        imageBusy={busy}
        onBringHere={bring ? () => void bringHere() : undefined}
      />
      <div className="overflow-hidden rounded-xl border bg-white">
        <BoardSurface
          board={board}
          state={state}
          aspect={aspect}
          tool={tool}
          color={color}
          label={label}
          view={view}
          onView={setView}
          onImage={(f) => void addImage(f)}
        />
      </div>
    </div>
  );
}
