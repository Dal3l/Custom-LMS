"use client";

import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragStartEvent,
} from "@dnd-kit/core";
import { useTranslations } from "next-intl";
import { createContext, useContext, useId, useState } from "react";
import { cn } from "@/lib/utils";
import { verdictClass } from "./result-styles";

// Shared "put words into places" mechanics for drag exercises. Two ways that work
// everywhere: drag a word onto a place, or tap a word and then tap the place.
// Tapping a word that is already placed sends it back to the word bank.

export const BANK = "__bank";

type PlaceContext = {
  selected: string | null;
  select: (id: string | null) => void;
  place: (itemId: string, target: string | null) => void;
  disabled: boolean;
};
const Ctx = createContext<PlaceContext | null>(null);
const usePlace = () => {
  const value = useContext(Ctx);
  if (!value) throw new Error("PlaceArea missing");
  return value;
};

export function PlaceArea({
  onPlace,
  disabled = false,
  children,
}: {
  /** target null = back to the word bank */
  onPlace: (itemId: string, target: string | null) => void;
  disabled?: boolean;
  children: React.ReactNode;
}) {
  const id = useId();
  const [selected, setSelected] = useState<string | null>(null);
  const [dragging, setDragging] = useState<{ id: string; label: React.ReactNode } | null>(null);
  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 4 } }),
    // A short hold before dragging, so taps and page scrolling keep working on phones.
    useSensor(TouchSensor, { activationConstraint: { delay: 150, tolerance: 6 } }),
    useSensor(KeyboardSensor),
  );

  const place = (itemId: string, target: string | null) => {
    setSelected(null);
    onPlace(itemId, target);
  };

  function onDragStart({ active }: DragStartEvent) {
    setSelected(null);
    setDragging({ id: String(active.id), label: (active.data.current as { label?: React.ReactNode })?.label });
  }
  function onDragEnd({ active, over }: DragEndEvent) {
    setDragging(null);
    if (!over) return;
    place(String(active.id), over.id === BANK ? null : String(over.id));
  }

  return (
    <Ctx value={{ selected, select: setSelected, place, disabled }}>
      <DndContext id={id} sensors={sensors} onDragStart={onDragStart} onDragEnd={onDragEnd} onDragCancel={() => setDragging(null)}>
        {children}
        <DragOverlay dropAnimation={null}>
          {dragging && <span className={chipClass(false, true)}>{dragging.label}</span>}
        </DragOverlay>
      </DndContext>
    </Ctx>
  );
}

function chipClass(selected: boolean, lifted = false) {
  return cn(
    "inline-flex min-h-9 cursor-grab touch-manipulation items-center gap-1 rounded-lg border bg-card px-3 py-1 text-base font-medium shadow-sm transition-colors select-none active:cursor-grabbing",
    selected && "border-primary bg-primary text-primary-foreground ring-3 ring-ring/40",
    lifted && "shadow-lg ring-3 ring-ring/40",
  );
}

/** A word (or picture) that can be moved. `slot` = the place it currently sits in. */
export function Chip({
  id,
  label,
  slot = null,
  verdict,
  children,
}: {
  id: string;
  /** what is shown while dragging and read by screen readers */
  label: React.ReactNode;
  slot?: string | null;
  verdict?: boolean | null;
  children?: React.ReactNode;
}) {
  const t = useTranslations("exercises.place");
  const { selected, select, place, disabled } = usePlace();
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({ id, data: { label }, disabled });
  const isSelected = selected === id;

  function onClick() {
    if (disabled) return;
    if (slot) {
      // Tapped a placed word: put the selected word here instead, or send this one back.
      if (selected && selected !== id) place(selected, slot);
      else place(id, null);
      return;
    }
    select(isSelected ? null : id);
  }

  return (
    <button
      ref={setNodeRef}
      type="button"
      {...attributes}
      {...listeners}
      onClick={onClick}
      disabled={disabled}
      aria-pressed={slot ? undefined : isSelected}
      aria-label={slot ? t("placedWord", { word: String(label) }) : String(label)}
      className={cn(
        chipClass(isSelected),
        slot && verdict !== undefined && verdict !== null && verdictClass(verdict),
        isDragging && "opacity-30",
        disabled && "cursor-default",
      )}
    >
      {children ?? label}
    </button>
  );
}

/** A place a word goes into (a gap, the right side of a pair, a column). */
export function Slot({
  id,
  label,
  verdict,
  className,
  children,
}: {
  id: string;
  label: string;
  verdict?: boolean | null;
  className?: string;
  children?: React.ReactNode;
}) {
  const { selected, place, disabled } = usePlace();
  const { setNodeRef, isOver } = useDroppable({ id, disabled });
  const empty = !children || (Array.isArray(children) && children.length === 0);
  const ready = Boolean(selected) && !disabled;

  return (
    <span
      ref={setNodeRef}
      role="group"
      aria-label={label}
      onClick={(e) => {
        // Clicks on a word inside are handled by the word itself.
        if (e.target === e.currentTarget && selected && !disabled) place(selected, id);
      }}
      className={cn(
        "inline-flex min-h-10 min-w-24 flex-wrap items-center gap-1 rounded-lg border-2 border-dashed p-0.5 align-middle transition-colors",
        empty && "border-input",
        !empty && "border-transparent",
        ready && "cursor-pointer border-primary/60 bg-accent/40",
        isOver && "border-primary bg-accent",
        empty && verdict === false && "border-destructive",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** The word bank: words not placed yet. Dropping a word here takes it back. */
export function Bank({ children, empty }: { children: React.ReactNode; empty?: boolean }) {
  const t = useTranslations("exercises.place");
  const { selected, place, disabled } = usePlace();
  const { setNodeRef, isOver } = useDroppable({ id: BANK, disabled });
  return (
    <div
      ref={setNodeRef}
      role="group"
      aria-label={t("bank")}
      onClick={(e) => {
        if (e.target === e.currentTarget && selected) place(selected, null);
      }}
      className={cn(
        "flex min-h-14 flex-wrap items-center gap-2 rounded-xl border bg-muted/40 p-2",
        isOver && "border-primary bg-accent/60",
      )}
    >
      {empty ? <span className="px-1 text-sm text-muted-foreground">{t("bankEmpty")}</span> : children}
    </div>
  );
}

/** One-line hint for students on how to place words. */
export function PlaceHint() {
  const t = useTranslations("exercises.place");
  return <p className="text-xs text-muted-foreground">{t("hint")}</p>;
}
