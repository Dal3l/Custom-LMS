"use client";

import { Eraser, Hand, Highlighter, Loader2, Pencil, Undo2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { BoardSurface, useBoardItems } from "@/features/board/board-surface";
import { BOARD_COLORS, fileBoard, type Tool } from "@/features/board/items";
import { cn } from "@/lib/utils";

type PdfDoc = {
  numPages: number;
  getPage: (n: number) => Promise<{
    getViewport: (o: { scale: number }) => { width: number; height: number };
    render: (o: { canvasContext: CanvasRenderingContext2D; viewport: unknown }) => { promise: Promise<void> };
  }>;
};

/** pdf.js is large, so it is loaded only when a PDF is on the page. */
async function openPdf(url: string): Promise<PdfDoc> {
  const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");
  pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
  return (await pdfjs.getDocument({ url }).promise) as unknown as PdfDoc;
}

/**
 * A PDF shown right in the lesson, page by page. With `exerciseId` (a lesson),
 * pen and marker notes can be drawn on the pages: in a class they are saved and
 * the teacher sees the student's notes (and the other way round).
 */
export function PdfViewer({ url, title, exerciseId }: { url: string; title: string; exerciseId?: string }) {
  const t = useTranslations("exercises.file");
  const [doc, setDoc] = useState<PdfDoc | null>(null);
  const [failed, setFailed] = useState(false);
  const [tool, setTool] = useState<Tool | null>(null);
  const [color, setColor] = useState<string>(BOARD_COLORS[2]);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    let cancelled = false;
    openPdf(url).then(
      (d) => !cancelled && setDoc(d),
      () => !cancelled && setFailed(true),
    );
    return () => {
      cancelled = true;
    };
  }, [url]);

  if (failed) return <p className="text-sm text-muted-foreground">{t("previewFailed")}</p>;
  if (!doc) {
    return (
      <div className="flex h-40 items-center justify-center rounded-xl border bg-muted" role="status" aria-label={t("loading")}>
        <Loader2 className="size-6 animate-spin text-muted-foreground" aria-hidden="true" />
      </div>
    );
  }

  const tools: { id: Tool | null; Icon: typeof Pencil; label: string }[] = [
    { id: null, Icon: Hand, label: t("notes.view") },
    { id: "pen", Icon: Pencil, label: t("notes.pen") },
    { id: "marker", Icon: Highlighter, label: t("notes.marker") },
    { id: "eraser", Icon: Eraser, label: t("notes.eraser") },
  ];

  return (
    <div className="flex flex-col gap-2">
      {exerciseId && (
        <div className="sticky top-16 z-[8] flex flex-wrap items-center gap-1 self-start rounded-lg border bg-background/95 p-1 shadow-sm backdrop-blur" role="toolbar" aria-label={t("notes.tools")}>
          {tools.map(({ id, Icon, label }) => (
            <Button key={label} type="button" size="icon-sm" variant={tool === id ? "default" : "ghost"} aria-pressed={tool === id} aria-label={label} title={label} onClick={() => setTool(id)}>
              <Icon aria-hidden="true" />
            </Button>
          ))}
          {tool === "pen" &&
            BOARD_COLORS.slice(0, 4).map((c) => (
              <button
                key={c}
                type="button"
                aria-label={t("notes.color")}
                aria-pressed={color === c}
                onClick={() => setColor(c)}
                className={cn("size-6 rounded-full border-2", color === c ? "border-foreground" : "border-transparent")}
                style={{ backgroundColor: c }}
              />
            ))}
          <UndoLast board={fileBoard(exerciseId, lastPage)} label={t("notes.undo")} />
        </div>
      )}
      <div className="flex max-h-[80vh] flex-col gap-3 overflow-y-auto rounded-xl border bg-muted p-2" aria-label={title}>
        {Array.from({ length: doc.numPages }, (_, i) => (
          <PdfPage
            key={i}
            doc={doc}
            page={i + 1}
            exerciseId={exerciseId}
            tool={tool}
            color={color}
            onDraw={() => setLastPage(i + 1)}
            label={t("page", { n: i + 1 })}
          />
        ))}
      </div>
    </div>
  );
}

function UndoLast({ board, label }: { board: string; label: string }) {
  const state = useBoardItems(board);
  const mine = state.items.filter((i) => i.authorId === state.userId);
  return (
    <Button type="button" size="icon-sm" variant="ghost" aria-label={label} title={label} disabled={!mine.length} onClick={() => mine.length && state.change([{ remove: mine[mine.length - 1]!.id }])}>
      <Undo2 aria-hidden="true" />
    </Button>
  );
}

/** One page: drawn when it comes near the screen, with the notes on top. */
function PdfPage({
  doc,
  page,
  exerciseId,
  tool,
  color,
  onDraw,
  label,
}: {
  doc: PdfDoc;
  page: number;
  exerciseId?: string;
  tool: Tool | null;
  color: string;
  onDraw: () => void;
  label: string;
}) {
  const box = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const [aspect, setAspect] = useState(1.414);
  const [visible, setVisible] = useState(page <= 2);

  useEffect(() => {
    if (visible || !box.current) return;
    const io = new IntersectionObserver((e) => e.some((x) => x.isIntersecting) && setVisible(true), { rootMargin: "600px" });
    io.observe(box.current);
    return () => io.disconnect();
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    let cancelled = false;
    void (async () => {
      const p = await doc.getPage(page);
      const base = p.getViewport({ scale: 1 });
      if (cancelled || !canvas.current || !box.current) return;
      setAspect(base.height / base.width);
      const scale = (box.current.clientWidth / base.width) * Math.min(window.devicePixelRatio || 1, 2);
      const viewport = p.getViewport({ scale });
      canvas.current.width = viewport.width;
      canvas.current.height = viewport.height;
      const ctx = canvas.current.getContext("2d");
      if (ctx) await p.render({ canvasContext: ctx, viewport }).promise;
    })();
    return () => {
      cancelled = true;
    };
  }, [visible, doc, page]);

  const pageCanvas = <canvas ref={canvas} className="absolute inset-0 size-full" aria-hidden="true" />;
  return (
    // shrink-0: in the scrolling column a page must keep its full height.
    <div ref={box} className="w-full shrink-0 overflow-hidden rounded-md bg-white shadow-sm" onPointerUp={onDraw}>
      {exerciseId ? (
        <NotesLayer board={fileBoard(exerciseId, page)} aspect={aspect} tool={tool} color={color} label={label}>
          {pageCanvas}
        </NotesLayer>
      ) : (
        <div className="relative w-full" style={{ aspectRatio: `${1 / aspect}` }} role="img" aria-label={label}>
          {pageCanvas}
        </div>
      )}
    </div>
  );
}

function NotesLayer({
  board,
  aspect,
  tool,
  color,
  label,
  children,
}: {
  board: string;
  aspect: number;
  tool: Tool | null;
  color: string;
  label: string;
  children: React.ReactNode;
}) {
  const state = useBoardItems(board);
  return (
    <BoardSurface board={board} state={state} aspect={aspect} tool={tool} color={color} label={label}>
      {children}
    </BoardSurface>
  );
}
