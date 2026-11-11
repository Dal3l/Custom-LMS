"use client";

import { closestCenter, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors, type DragEndEvent } from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical, MoreHorizontal, Pencil, Plus, Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useId } from "react";
import { InlineTitle } from "@/components/courses/inline-title";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

type Section = { id: string; title: string; count: number };

type Props = {
  sections: Section[];
  activeId: string | null;
  renamingId: string | null;
  onSelect: (id: string) => void;
  onAdd: () => void;
  onRenameStart: (id: string | null) => void;
  onRename: (id: string, title: string) => void;
  onDelete: (id: string) => void;
  onReorder: (from: number, to: number) => void;
};

/** Section list: a column on wide screens, horizontal chips on phones. */
export function SectionNav(props: Props) {
  const t = useTranslations("builder");
  const dndId = useId();
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  function onDragEnd({ active, over }: DragEndEvent) {
    if (!over || active.id === over.id) return;
    const from = props.sections.findIndex((s) => s.id === active.id);
    const to = props.sections.findIndex((s) => s.id === over.id);
    if (from >= 0 && to >= 0) props.onReorder(from, to);
  }

  return (
    <nav aria-label={t("sectionsNav")}>
      {/* Phones: chips */}
      <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 md:hidden">
        {props.sections.map((s, i) => (
          <Button
            key={s.id}
            variant={s.id === props.activeId ? "default" : "secondary"}
            className="shrink-0 rounded-full"
            onClick={() => props.onSelect(s.id)}
            aria-current={s.id === props.activeId ? "true" : undefined}
          >
            {i + 1}. {s.title}
          </Button>
        ))}
        <Button variant="outline" className="shrink-0 rounded-full" onClick={props.onAdd}>
          <Plus aria-hidden="true" />
          {t("addSection")}
        </Button>
      </div>

      {/* Wide screens: sortable column */}
      <div className="hidden flex-col gap-2 md:flex">
        <h2 className="px-2 text-sm font-medium text-muted-foreground">{t("sections")}</h2>
        <DndContext id={dndId} sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
          <SortableContext items={props.sections.map((s) => s.id)} strategy={verticalListSortingStrategy}>
            <ol className="flex flex-col gap-1">
              {props.sections.map((s, i) => (
                <SectionItem key={s.id} section={s} index={i} {...props} />
              ))}
            </ol>
          </SortableContext>
        </DndContext>
        <Button variant="ghost" className="justify-start text-primary" onClick={props.onAdd}>
          <Plus aria-hidden="true" />
          {t("addSection")}
        </Button>
      </div>
    </nav>
  );
}

function SectionItem({ section, index, activeId, renamingId, onSelect, onRenameStart, onRename, onDelete }: Props & { section: Section; index: number }) {
  const t = useTranslations("builder");
  const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition, isDragging } = useSortable({
    id: section.id,
  });
  const active = section.id === activeId;

  return (
    <li
      ref={setNodeRef}
      style={{ transform: CSS.Translate.toString(transform), transition }}
      className={cn(
        "group flex items-center gap-1 rounded-lg pr-1",
        active ? "bg-accent text-accent-foreground" : "hover:bg-accent/60",
        isDragging && "relative z-10 bg-card shadow-md",
      )}
    >
      <button
        type="button"
        ref={setActivatorNodeRef}
        {...attributes}
        {...listeners}
        aria-label={t("dragHandle")}
        className="flex size-8 shrink-0 cursor-grab touch-none items-center justify-center rounded-md text-muted-foreground active:cursor-grabbing"
      >
        <GripVertical className="size-4" aria-hidden="true" />
      </button>
      <InlineTitle
        value={section.title}
        editing={renamingId === section.id}
        onEditingChange={(on) => onRenameStart(on ? section.id : null)}
        onSave={(title) => onRename(section.id, title.slice(0, 100))}
      >
        <button
          type="button"
          onClick={() => onSelect(section.id)}
          aria-current={active ? "true" : undefined}
          className="flex w-full min-w-0 items-center gap-2 py-1.5 text-left"
        >
          <span className="tabular-nums text-muted-foreground">{index + 1}.</span>
          <span className="truncate font-medium">{section.title}</span>
          <span className="ml-auto text-xs text-muted-foreground tabular-nums">{section.count}</span>
        </button>
      </InlineTitle>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="size-7 shrink-0" aria-label={t("moreActions")}>
            <MoreHorizontal aria-hidden="true" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onSelect={() => onRenameStart(section.id)}>
            <Pencil aria-hidden="true" />
            {t("rename")}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive" onSelect={() => onDelete(section.id)}>
            <Trash2 aria-hidden="true" />
            {t("delete")}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </li>
  );
}
