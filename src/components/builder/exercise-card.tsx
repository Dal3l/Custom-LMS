"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ArrowRightLeft, Copy, GripVertical, MoreHorizontal, Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { exerciseMeta } from "@/features/exercises/catalog";
import { EXERCISE_UI } from "@/features/exercises/client";
import { EXERCISE_ICONS } from "@/features/exercises/icons";
import type { BuilderExercise } from "@/features/lessons/queries";
import { cn } from "@/lib/utils";

export function ExerciseCard({
  exercise,
  number,
  otherSections,
  onChange,
  onBlur,
  onDuplicate,
  onMove,
  onDelete,
}: {
  exercise: BuilderExercise;
  number: string;
  otherSections: { id: string; title: string }[];
  onChange: (patch: Partial<Pick<BuilderExercise, "title" | "content" | "key">>) => void;
  /** Save right away when the teacher leaves the exercise. */
  onBlur: () => void;
  onDuplicate: () => void;
  onMove: (sectionId: string) => void;
  onDelete: () => void;
}) {
  const t = useTranslations("builder");
  const te = useTranslations("exercises");
  const meta = exerciseMeta(exercise.type);
  const ui = EXERCISE_UI[meta?.id ?? "text"];
  const Icon = meta ? EXERCISE_ICONS[meta.icon] : EXERCISE_ICONS.text;
  const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition, isDragging } = useSortable({
    id: exercise.id,
  });

  return (
    <li
      ref={setNodeRef}
      style={{ transform: CSS.Translate.toString(transform), transition }}
      className={cn("list-none", isDragging && "relative z-10 opacity-90")}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) onBlur();
      }}
    >
      <Card className="gap-3 rounded-2xl px-3 py-3 sm:px-4" aria-label={`${number} ${meta ? te(`types.${meta.id}.name`) : ""}`}>
        <div className="flex items-center gap-2">
          <button
            type="button"
            ref={setActivatorNodeRef}
            {...attributes}
            {...listeners}
            aria-label={t("dragHandle")}
            className="flex size-8 shrink-0 cursor-grab touch-none items-center justify-center rounded-md text-muted-foreground hover:bg-accent active:cursor-grabbing"
          >
            <GripVertical className="size-4" aria-hidden="true" />
          </button>
          <Badge variant="secondary" className="tabular-nums">
            {number}
          </Badge>
          <span className="flex min-w-0 flex-1 items-center gap-1.5 text-sm text-muted-foreground">
            <Icon className="size-4 shrink-0" aria-hidden="true" />
            <span className="truncate">{meta ? te(`types.${meta.id}.name`) : exercise.type}</span>
          </span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="size-8" aria-label={t("moreActions")}>
                <MoreHorizontal aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onSelect={onDuplicate}>
                <Copy aria-hidden="true" />
                {t("duplicate")}
              </DropdownMenuItem>
              {otherSections.length > 0 && (
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <ArrowRightLeft aria-hidden="true" />
                    {t("moveTo")}
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    {otherSections.map((s) => (
                      <DropdownMenuItem key={s.id} onSelect={() => onMove(s.id)}>
                        {s.title}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              )}
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive" onSelect={onDelete}>
                <Trash2 aria-hidden="true" />
                {t("delete")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Input
          value={exercise.title}
          onChange={(e) => onChange({ title: e.target.value.slice(0, 500) })}
          placeholder={t("instructionPlaceholder")}
          aria-label={t("instruction")}
          className="font-medium"
        />

        {ui && (
          <ui.Editor
            value={{ content: exercise.content, key: exercise.key }}
            onChange={(v) => onChange({ content: v.content as BuilderExercise["content"], key: v.key as BuilderExercise["key"] })}
          />
        )}
      </Card>
    </li>
  );
}
