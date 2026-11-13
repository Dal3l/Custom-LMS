"use client";

import { closestCenter, DndContext, KeyboardSensor, MouseSensor, TouchSensor, useSensor, useSensors, type DragEndEvent } from "@dnd-kit/core";
import { horizontalListSortingStrategy, rectSortingStrategy, SortableContext, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Check, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useId, useState } from "react";
import { cn } from "@/lib/utils";
import type { ExerciseViewerProps } from "../../client-types";
import type { OrderingAnswer, OrderingContent } from "./schema";

type Piece = OrderingContent["tasks"][number]["pieces"][number];

/**
 * Tap pieces in the right order: they move into the answer line. Tap a piece in
 * the line to send it back; drag pieces in the line to change their order.
 */
export function OrderingViewer({ content, answer, onAnswer, result }: ExerciseViewerProps<OrderingContent, OrderingAnswer>) {
  const t = useTranslations("exercises.ordering");
  const [values, setValues] = useState<Record<string, string[]>>(answer?.values ?? {});
  const several = content.tasks.length > 1;

  function set(taskId: string, ids: string[]) {
    const next = { ...values, [taskId]: ids };
    setValues(next);
    onAnswer?.({ values: next }, { check: false });
  }

  return (
    <ol className="flex flex-col gap-5">
      {content.tasks.map((task, i) => (
        <li key={task.id} className="flex flex-col gap-2">
          {several && <span className="text-sm font-medium tabular-nums text-muted-foreground">{i + 1}.</span>}
          <OrderTask
            pieces={task.pieces}
            mode={content.mode}
            order={values[task.id] ?? []}
            onChange={(ids) => set(task.id, ids)}
            disabled={!onAnswer}
            verdict={result?.parts[task.id]}
            label={several ? t(content.mode === "words" ? "sentence" : "list", { n: i + 1 }) : t("answer")}
          />
        </li>
      ))}
    </ol>
  );
}

function OrderTask({
  pieces,
  mode,
  order,
  onChange,
  disabled,
  verdict,
  label,
}: {
  pieces: Piece[];
  mode: OrderingContent["mode"];
  order: string[];
  onChange: (ids: string[]) => void;
  disabled: boolean;
  verdict: boolean | null | undefined;
  label: string;
}) {
  const t = useTranslations("exercises.ordering");
  const dndId = useId();
  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 4 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 150, tolerance: 6 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );
  const byId = new Map(pieces.map((p) => [p.id, p]));
  const chosen = order.filter((id) => byId.has(id));
  const left = pieces.filter((p) => !chosen.includes(p.id));
  const lines = mode === "lines";

  function onDragEnd({ active, over }: DragEndEvent) {
    if (!over || active.id === over.id) return;
    const from = chosen.indexOf(String(active.id));
    const to = chosen.indexOf(String(over.id));
    if (from < 0 || to < 0) return;
    const next = chosen.slice();
    next.splice(to, 0, next.splice(from, 1)[0]!);
    onChange(next);
  }

  return (
    <div className="flex flex-col gap-2">
      <DndContext id={dndId} sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
        <SortableContext items={chosen} strategy={lines ? verticalListSortingStrategy : chosen.length > 6 ? rectSortingStrategy : horizontalListSortingStrategy}>
          <div
            role="group"
            aria-label={label}
            className={cn(
              "flex min-h-14 gap-2 rounded-xl border-2 border-dashed p-2",
              lines ? "flex-col" : "flex-wrap items-center",
              verdict === true && "border-emerald-500 bg-emerald-50",
              verdict === false && "border-destructive bg-destructive/5",
            )}
          >
            {chosen.length === 0 && <span className="px-1 text-sm text-muted-foreground">{t(lines ? "emptyLines" : "emptyWords")}</span>}
            {chosen.map((id, n) => (
              <SortablePiece
                key={id}
                piece={byId.get(id)!}
                number={lines ? n + 1 : undefined}
                disabled={disabled}
                onTap={() => onChange(chosen.filter((x) => x !== id))}
              />
            ))}
            {verdict === true && <Check className="ml-auto size-5 shrink-0 self-center text-emerald-600" aria-label={t("right")} />}
            {verdict === false && <X className="ml-auto size-5 shrink-0 self-center text-destructive" aria-label={t("wrong")} />}
          </div>
        </SortableContext>
      </DndContext>
      {left.length > 0 && (
        <div className={cn("flex gap-2 rounded-xl bg-muted/40 p-2", lines ? "flex-col" : "flex-wrap")} role="group" aria-label={t("pieces")}>
          {left.map((p) => (
            <button
              key={p.id}
              type="button"
              disabled={disabled}
              onClick={() => onChange([...chosen, p.id])}
              className={cn(
                "touch-manipulation rounded-lg border bg-card px-3 py-1.5 text-left text-base font-medium shadow-sm transition-colors hover:border-primary hover:bg-accent disabled:cursor-default disabled:hover:border-border disabled:hover:bg-card",
                lines && "w-full font-normal",
              )}
            >
              {p.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function SortablePiece({ piece, number, disabled, onTap }: { piece: Piece; number?: number; disabled: boolean; onTap: () => void }) {
  const t = useTranslations("exercises.ordering");
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: piece.id, disabled });
  return (
    <button
      ref={setNodeRef}
      type="button"
      style={{ transform: CSS.Translate.toString(transform), transition }}
      {...attributes}
      {...listeners}
      disabled={disabled}
      onClick={onTap}
      aria-label={t("chosenPiece", { text: piece.text })}
      className={cn(
        "flex cursor-grab touch-manipulation items-start gap-2 rounded-lg border border-primary/40 bg-accent px-3 py-1.5 text-left text-base font-medium active:cursor-grabbing disabled:cursor-default",
        number !== undefined && "w-full font-normal",
        isDragging && "relative z-10 shadow-lg",
      )}
    >
      {number !== undefined && <span className="tabular-nums text-muted-foreground">{number}.</span>}
      <span>{piece.text}</span>
    </button>
  );
}
