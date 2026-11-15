"use client";

import {
  Circle,
  Eraser,
  Hand,
  Highlighter,
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
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useBoards, visibleItems } from "./boards";
import {
  BOARD_COLORS,
  eraseStroke,
  MARKER_COLOR,
  moveItem,
  strokePath,
  thinPoints,
  toPoint,
  touches,
  type BoardItem,
  type BoardItemData,
  type Point,
  type Tool,
} from "./items";

const W = 1000;

/** Board items: from the class (live, saved) or, without a class, kept on this screen only. */
function useBoardItems(board: string) {
  const api = useBoards();
  const [local, setLocal] = useState<BoardItem[]>([]);
  useEffect(() => {
    api?.load(board);
  }, [api, board]);
  const shared = api?.items(board);
  const items = api ? (shared ? visibleItems(api, board, shared) : []) : local;
  return {
    items,
    loading: Boolean(api && !shared),
    userId: api?.userId ?? "me",
    canRemoveAll: api ? api.isTeacher : true,
    add: (data: BoardItemData) =>
      api
        ? api.add(board, data)
        : setLocal((l) => [...l, { id: crypto.randomUUID(), authorId: "me", data, createdAt: new Date().toISOString() }]),
    remove: (id: string) => (api ? api.remove(board, id) : setLocal((l) => l.filter((i) => i.id !== id))),
    update: (id: string, data: BoardItemData) =>
      api ? api.update(board, id, data) : setLocal((l) => l.map((i) => (i.id === id ? { ...i, data } : i))),
    clear: () => (api ? api.clear(board) : setLocal([])),
  };
}

export type BoardState = ReturnType<typeof useBoardItems>;

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
        <text {...common} x={d.at[0] * W} y={d.at[1] * h} fill={d.color} fontSize={30} dominantBaseline="hanging" fontFamily="inherit">
          {d.text}
        </text>
      );
  }
}

/** Eraser size: a share of the board's width. */
const ERASER = 0.018;

type Gesture =
  | { kind: "draw"; data: BoardItemData }
  | { kind: "erase"; path: Point[] }
  | { kind: "move"; id: string; from: Point; original: BoardItemData; current: BoardItemData }
  | { kind: "pan"; x: number; y: number; panX: number; panY: number };

/**
 * A drawing surface (aspect = height / width). `tool` null = just looking
 * (touch scrolls the page). Optional `children` are drawn underneath (a PDF page).
 */
export function BoardSurface({
  board,
  state,
  aspect,
  tool,
  color,
  label,
  zoom = 1,
  children,
}: {
  board: string;
  state: BoardState;
  aspect: number;
  /** null = just looking (touch scrolls the page) */
  tool: Tool | null;
  color: string;
  label: string;
  /** 1 = the whole board; more = closer (the hand moves around) */
  zoom?: number;
  children?: React.ReactNode;
}) {
  const t = useTranslations("board");
  const h = W * aspect;
  const frame = useRef<HTMLDivElement>(null);
  const svg = useRef<SVGSVGElement>(null);
  const [gesture, setGesture] = useState<Gesture | null>(null);
  const [typing, setTyping] = useState<{ at: Point; text: string } | null>(null);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  // A new zoom starts from the top-left corner again.
  const [panZoom, setPanZoom] = useState(zoom);
  if (panZoom !== zoom) {
    setPanZoom(zoom);
    setPan({ x: 0, y: 0 });
  }

  // Keeps the view inside the board while moving around (called from handlers).
  const clampPan = (x: number, y: number) => {
    const box = frame.current?.getBoundingClientRect();
    if (!box) return { x: 0, y: 0 };
    return {
      x: Math.min(0, Math.max(box.width * (1 - zoom), x)),
      y: Math.min(0, Math.max(box.height * (1 - zoom), y)),
    };
  };
  const view = zoom === 1 ? { x: 0, y: 0 } : pan;

  function pointOf(e: React.PointerEvent): Point {
    const box = svg.current!.getBoundingClientRect();
    return toPoint((e.clientX - box.left) / box.width, (e.clientY - box.top) / box.height);
  }

  const canChange = (item: BoardItem) => item.authorId === state.userId || state.canRemoveAll;

  /** What the eraser does to the items (pieces left, or [] = gone), for the preview and the end. */
  function erased(path: Point[]): Map<string, BoardItemData[]> {
    const out = new Map<string, BoardItemData[]>();
    const radius = ERASER / zoom;
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

  function down(e: React.PointerEvent) {
    if (!tool) return;
    const p = pointOf(e);
    if (tool === "text") {
      // Keeps the text box focused (a click would otherwise take the focus away).
      e.preventDefault();
      setTyping({ at: p, text: "" });
      return;
    }
    (e.currentTarget as Element).setPointerCapture?.(e.pointerId);
    if (tool === "eraser") return setGesture({ kind: "erase", path: [p] });
    if (tool === "hand") {
      const hit = [...state.items].reverse().find((i) => canChange(i) && touches(i.data, p, 0.012 / zoom, aspect));
      if (hit) return setGesture({ kind: "move", id: hit.id, from: p, original: hit.data, current: hit.data });
      if (zoom > 1) return setGesture({ kind: "pan", x: e.clientX, y: e.clientY, panX: view.x, panY: view.y });
      return;
    }
    if (tool === "pen" || tool === "marker") {
      setGesture({ kind: "draw", data: { kind: tool, color: tool === "marker" ? MARKER_COLOR : color, points: [p] } });
    } else {
      setGesture({ kind: "draw", data: { kind: tool, color, from: p, to: p } });
    }
  }

  function move(e: React.PointerEvent) {
    if (!gesture) return;
    if (gesture.kind === "pan") {
      setPan(clampPan(gesture.panX + e.clientX - gesture.x, gesture.panY + e.clientY - gesture.y));
      return;
    }
    const p = pointOf(e);
    if (gesture.kind === "erase") return setGesture({ ...gesture, path: [...gesture.path, p] });
    if (gesture.kind === "move") {
      return setGesture({ ...gesture, current: moveItem(gesture.original, p[0] - gesture.from[0], p[1] - gesture.from[1]) });
    }
    const d = gesture.data;
    if ("points" in d) setGesture({ kind: "draw", data: { ...d, points: [...d.points, p] } });
    else if ("to" in d) setGesture({ kind: "draw", data: { ...d, to: p } });
  }

  function up() {
    const g = gesture;
    setGesture(null);
    if (!g) return;
    if (g.kind === "draw") {
      const d = g.data;
      if ("points" in d) state.add({ ...d, points: thinPoints(d.points) });
      else if ("to" in d && (d.from[0] !== d.to[0] || d.from[1] !== d.to[1])) state.add(d);
    }
    if (g.kind === "erase") {
      for (const [id, pieces] of erased(g.path)) {
        state.remove(id);
        for (const piece of pieces) state.add(piece);
      }
    }
    if (g.kind === "move" && g.current !== g.original) state.update(g.id, g.current);
  }

  function finishText() {
    if (typing?.text.trim()) state.add({ kind: "text", color, at: typing.at, text: typing.text.trim().slice(0, 500) });
    setTyping(null);
  }

  // What is drawn: saved items with the gesture in progress applied.
  const preview = gesture?.kind === "erase" ? erased(gesture.path) : null;
  const shown: BoardItem[] = state.items.flatMap((item) => {
    if (gesture?.kind === "move" && gesture.id === item.id) return [{ ...item, data: gesture.current }];
    const pieces = preview?.get(item.id);
    if (pieces) return pieces.map((data, i) => ({ ...item, id: `${item.id}:${i}`, data }));
    return [item];
  });
  if (gesture?.kind === "draw") shown.push({ id: "draft", authorId: state.userId, data: gesture.data, createdAt: "" });

  return (
    <div ref={frame} className="relative w-full overflow-hidden" style={{ aspectRatio: `${1 / aspect}` }}>
      <div
        className="absolute inset-0 origin-top-left"
        style={zoom === 1 ? undefined : { transform: `translate(${view.x}px, ${view.y}px) scale(${zoom})` }}
      >
        {children}
        <svg
          ref={svg}
          viewBox={`0 0 ${W} ${h}`}
          preserveAspectRatio="none"
          role="img"
          aria-label={label}
          data-board={board}
          className={cn(
            "absolute inset-0 size-full",
            tool ? "touch-none" : "pointer-events-none",
            tool === "hand" ? (gesture ? "cursor-grabbing" : "cursor-grab") : tool === "eraser" ? "cursor-cell" : tool === "text" ? "cursor-text" : tool && "cursor-crosshair",
          )}
          onPointerDown={down}
          onPointerMove={move}
          onPointerUp={up}
          onPointerCancel={() => setGesture(null)}
        >
          {shown.map((item) => (
            <ItemShape key={item.id} item={item} h={h} />
          ))}
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
              if (e.key === "Escape") setTyping(null);
            }}
            className="absolute z-10 w-48 rounded-md border bg-background px-2 py-1 text-sm shadow"
            style={{ left: `${typing.at[0] * 100}%`, top: `${typing.at[1] * 100}%` }}
          />
        )}
      </div>
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

/** Tools above a board: what to draw with, colour, undo, clear (teacher). */
export function BoardToolbar({
  tools,
  tool,
  onTool,
  color,
  onColor,
  state,
  zoom,
  onZoom,
}: {
  tools: Tool[];
  tool: Tool | null;
  onTool: (tool: Tool | null) => void;
  color: string;
  onColor: (color: string) => void;
  state: BoardState;
  zoom?: number;
  onZoom?: (zoom: number) => void;
}) {
  const t = useTranslations("board");
  const mine = state.items.filter((i) => i.authorId === state.userId);
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
      <Button type="button" size="icon-sm" variant="ghost" aria-label={t("undo")} title={t("undo")} disabled={mine.length === 0} onClick={() => mine.length && state.remove(mine[mine.length - 1]!.id)}>
        <Undo2 aria-hidden="true" />
      </Button>
      {zoom !== undefined && onZoom && (
        <span className="mx-1 flex items-center gap-0.5" role="group" aria-label={t("zoom")}>
          <Button type="button" size="icon-sm" variant="ghost" aria-label={t("zoomOut")} title={t("zoomOut")} disabled={zoom <= 1} onClick={() => onZoom(Math.max(1, zoom - 0.5))}>
            <ZoomOut aria-hidden="true" />
          </Button>
          <span className="w-10 text-center text-xs tabular-nums">{Math.round(zoom * 100)}%</span>
          <Button type="button" size="icon-sm" variant="ghost" aria-label={t("zoomIn")} title={t("zoomIn")} disabled={zoom >= 3} onClick={() => onZoom(Math.min(3, zoom + 0.5))}>
            <ZoomIn aria-hidden="true" />
          </Button>
        </span>
      )}
      {state.canRemoveAll && (
        <Button type="button" size="icon-sm" variant="ghost" aria-label={t("clear")} title={t("clear")} disabled={state.items.length === 0} onClick={() => state.clear()}>
          <Trash2 aria-hidden="true" />
        </Button>
      )}
    </div>
  );
}

export { useBoardItems };

/** A whole board with its toolbar (the lesson whiteboard, whiteboard blocks). */
export function Whiteboard({ board, label, aspect = 0.625 }: { board: string; label: string; aspect?: number }) {
  const state = useBoardItems(board);
  const [tool, setTool] = useState<Tool | null>("pen");
  const [color, setColor] = useState<string>(BOARD_COLORS[1]);
  const [zoom, setZoom] = useState(1);
  return (
    <div className="flex flex-col gap-2">
      <BoardToolbar
        tools={["hand", "pen", "marker", "line", "rect", "ellipse", "text", "eraser"]}
        tool={tool}
        onTool={setTool}
        color={color}
        onColor={setColor}
        state={state}
        zoom={zoom}
        onZoom={setZoom}
      />
      <div className="overflow-hidden rounded-xl border bg-white">
        <BoardSurface board={board} state={state} aspect={aspect} tool={tool} color={color} label={label} zoom={zoom} />
      </div>
    </div>
  );
}
