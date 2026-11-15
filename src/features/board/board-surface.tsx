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
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useBoards, visibleItems } from "./boards";
import {
  BOARD_COLORS,
  MARKER_COLOR,
  strokePath,
  thinPoints,
  toPoint,
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
    clear: () => (api ? api.clear(board) : setLocal([])),
  };
}

export type BoardState = ReturnType<typeof useBoardItems>;

function ItemShape({ item, h, onErase }: { item: BoardItem; h: number; onErase?: () => void }) {
  const d = item.data;
  const common = {
    "data-item": item.id,
    onPointerDown: onErase
      ? (e: React.PointerEvent) => {
          e.stopPropagation();
          onErase();
        }
      : undefined,
    style: onErase ? { cursor: "pointer" } : undefined,
  };
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
  children,
}: {
  board: string;
  state: BoardState;
  aspect: number;
  tool: Tool | null;
  color: string;
  label: string;
  children?: React.ReactNode;
}) {
  const t = useTranslations("board");
  const h = W * aspect;
  const svg = useRef<SVGSVGElement>(null);
  const [draft, setDraft] = useState<BoardItemData | null>(null);
  const [typing, setTyping] = useState<{ at: Point; text: string } | null>(null);

  function pointOf(e: React.PointerEvent): Point {
    const box = svg.current!.getBoundingClientRect();
    return toPoint((e.clientX - box.left) / box.width, (e.clientY - box.top) / box.height);
  }

  function down(e: React.PointerEvent) {
    if (!tool || tool === "eraser") return;
    const p = pointOf(e);
    if (tool === "text") {
      setTyping({ at: p, text: "" });
      return;
    }
    (e.target as Element).setPointerCapture?.(e.pointerId);
    if (tool === "pen" || tool === "marker") setDraft({ kind: tool, color: tool === "marker" ? MARKER_COLOR : color, points: [p] });
    else setDraft({ kind: tool, color, from: p, to: p });
  }

  function move(e: React.PointerEvent) {
    if (!draft) return;
    const p = pointOf(e);
    if ("points" in draft) setDraft({ ...draft, points: [...draft.points, p] });
    else if ("to" in draft) setDraft({ ...draft, to: p });
  }

  function up() {
    if (!draft) return;
    if ("points" in draft) state.add({ ...draft, points: thinPoints(draft.points) });
    else if ("to" in draft && (draft.from[0] !== draft.to[0] || draft.from[1] !== draft.to[1])) state.add(draft);
    setDraft(null);
  }

  function finishText() {
    if (typing?.text.trim()) state.add({ kind: "text", color, at: typing.at, text: typing.text.trim().slice(0, 500) });
    setTyping(null);
  }

  const canErase = (item: BoardItem) => item.authorId === state.userId || state.canRemoveAll;

  return (
    <div className="relative w-full" style={{ aspectRatio: `${1 / aspect}` }}>
      {children}
      <svg
        ref={svg}
        viewBox={`0 0 ${W} ${h}`}
        preserveAspectRatio="none"
        role="img"
        aria-label={label}
        data-board={board}
        className={cn("absolute inset-0 size-full", tool ? "touch-none" : "pointer-events-none", tool && tool !== "eraser" && "cursor-crosshair")}
        onPointerDown={down}
        onPointerMove={move}
        onPointerUp={up}
        onPointerCancel={() => setDraft(null)}
      >
        {state.items.map((item) => (
          <ItemShape
            key={item.id}
            item={item}
            h={h}
            onErase={tool === "eraser" && canErase(item) ? () => state.remove(item.id) : undefined}
          />
        ))}
        {draft && <ItemShape item={{ id: "draft", authorId: state.userId, data: draft, createdAt: "" }} h={h} />}
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
      {state.loading && <span className="sr-only">{t("loading")}</span>}
    </div>
  );
}

const TOOL_ICONS: Record<Tool, typeof Pencil> = {
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
  allowView = false,
}: {
  tools: Tool[];
  tool: Tool | null;
  onTool: (tool: Tool | null) => void;
  color: string;
  onColor: (color: string) => void;
  state: BoardState;
  /** a "just look / scroll" button (PDF notes) */
  allowView?: boolean;
}) {
  const t = useTranslations("board");
  const mine = state.items.filter((i) => i.authorId === state.userId);
  const showColors = tools.some((x) => x !== "marker" && x !== "eraser");
  return (
    <div className="flex flex-wrap items-center gap-1" role="toolbar" aria-label={t("tools")}>
      {allowView && (
        <Button type="button" size="icon-sm" variant={tool === null ? "default" : "ghost"} aria-pressed={tool === null} aria-label={t("tool.view")} title={t("tool.view")} onClick={() => onTool(null)}>
          <Hand aria-hidden="true" />
        </Button>
      )}
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
  return (
    <div className="flex flex-col gap-2">
      <BoardToolbar
        tools={["pen", "marker", "line", "rect", "ellipse", "text", "eraser"]}
        tool={tool}
        onTool={setTool}
        color={color}
        onColor={setColor}
        state={state}
        allowView
      />
      <div className="overflow-hidden rounded-xl border bg-white">
        <BoardSurface board={board} state={state} aspect={aspect} tool={tool} color={color} label={label} />
      </div>
    </div>
  );
}
