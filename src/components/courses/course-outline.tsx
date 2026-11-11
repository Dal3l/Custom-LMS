"use client";

import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useDroppable,
  useSensor,
  useSensors,
  type CollisionDetection,
  type DragEndEvent,
  type DragOverEvent,
  type DragStartEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  ClipboardCheck,
  Copy,
  FileText,
  GripVertical,
  MoreHorizontal,
  Pencil,
  Plus,
  Trash2,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useId, useState, useTransition } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  createLesson,
  createModule,
  deleteLesson,
  deleteModule,
  duplicateLesson,
  duplicateModule,
  renameLesson,
  renameModule,
  reorderLessons,
  reorderModules,
  setLessonTest,
  type ActionResult,
} from "@/features/courses/actions";
import {
  findLessonModule,
  moveItem,
  moveLesson,
  removeLesson,
  updateLesson,
  type OutlineLesson,
  type OutlineModule,
} from "@/features/courses/outline";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { ConfirmDelete } from "./confirm-delete";
import { InlineTitle } from "./inline-title";

// Drag ids carry a prefix so modules, lessons and module drop zones can be told apart.
const M = "m:";
const L = "l:";
const ZONE = "z:";
const strip = (id: string | number) => String(id).slice(2);

type Pending = { kind: "module" | "lesson"; id: string } | null;

export function CourseOutline({ courseId, initial }: { courseId: string; initial: OutlineModule[] }) {
  const t = useTranslations("courses");
  const [modules, setModules] = useState(initial);
  // Server data wins whenever it changes (after any save), see React "storing info from previous renders".
  const [lastInitial, setLastInitial] = useState(initial);
  if (initial !== lastInitial) {
    setLastInitial(initial);
    setModules(initial);
  }

  const [editing, setEditing] = useState<string | null>(null); // id being renamed
  const [toDelete, setToDelete] = useState<Pending>(null);
  const [dragFrom, setDragFrom] = useState<string | null>(null); // module a lesson was dragged from
  const [, startTransition] = useTransition();
  // Stable id so the drag-and-drop accessibility labels match between server and browser.
  const dndId = useId();

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  /** Runs a save; on failure shows an error and restores the server state. */
  function run<T>(action: () => Promise<ActionResult<T>>, onOk?: (data: T) => void, okMessage?: string) {
    startTransition(async () => {
      const result = await action();
      if (result.ok) {
        if (okMessage) toast.success(okMessage);
        onOk?.(result.data);
      } else {
        toast.error(t(`errors.${result.error}`));
        setModules(initial);
      }
    });
  }

  // --- Modules -------------------------------------------------------------
  function addModule() {
    const title = t("newModuleTitle", { n: modules.length + 1 });
    run(() => createModule(courseId, title), (id) => setEditing(id));
  }

  function renameModuleLocal(id: string, title: string) {
    setModules((ms) => ms.map((m) => (m.id === id ? { ...m, title } : m)));
    run(() => renameModule(id, title), undefined, t("saved"));
  }

  // --- Lessons -------------------------------------------------------------
  function addLesson(moduleId: string) {
    const count = modules.reduce((n, m) => n + m.lessons.length, 0);
    const title = t("newLessonTitle", { n: count + 1 });
    run(() => createLesson(moduleId, title), (id) => setEditing(id));
  }

  function renameLessonLocal(id: string, title: string) {
    setModules((ms) => updateLesson(ms, id, { title }));
    run(() => renameLesson(id, title), undefined, t("saved"));
  }

  function toggleTest(lesson: OutlineLesson) {
    setModules((ms) => updateLesson(ms, lesson.id, { is_test: !lesson.is_test }));
    run(() => setLessonTest(lesson.id, !lesson.is_test), undefined, t("saved"));
  }

  function confirmDelete() {
    if (!toDelete) return;
    const { kind, id } = toDelete;
    setToDelete(null);
    if (kind === "module") {
      setModules((ms) => ms.filter((m) => m.id !== id));
      run(() => deleteModule(id), undefined, t("deleted"));
    } else {
      setModules((ms) => removeLesson(ms, id));
      run(() => deleteLesson(id), undefined, t("deleted"));
    }
  }

  // --- Drag and drop -------------------------------------------------------
  // Modules only collide with modules; lessons with lessons and module drop zones.
  const collision: CollisionDetection = (args) => {
    const prefix = String(args.active.id).slice(0, 2);
    const droppableContainers = args.droppableContainers.filter((c) => {
      const p = String(c.id).slice(0, 2);
      return prefix === M ? p === M : p === L || p === ZONE;
    });
    return closestCenter({ ...args, droppableContainers });
  };

  function onDragStart({ active }: DragStartEvent) {
    if (String(active.id).startsWith(L)) {
      setDragFrom(findLessonModule(modules, strip(active.id))?.id ?? null);
    }
  }

  // Lessons hop between modules while dragging, so the gap opens where they will land.
  function onDragOver({ active, over }: DragOverEvent) {
    if (!over || !String(active.id).startsWith(L)) return;
    const lessonId = strip(active.id);
    const overId = String(over.id);
    const current = findLessonModule(modules, lessonId);
    const target = overId.startsWith(ZONE)
      ? modules.find((m) => m.id === strip(overId))
      : findLessonModule(modules, strip(overId));
    if (!current || !target || current.id === target.id) return;
    const index = overId.startsWith(L) ? target.lessons.findIndex((l) => l.id === strip(overId)) : undefined;
    setModules((ms) => moveLesson(ms, lessonId, target.id, index));
  }

  function onDragEnd({ active, over }: DragEndEvent) {
    const activeId = String(active.id);
    setDragFrom(null);
    if (!over) {
      setModules(initial);
      return;
    }
    const overId = String(over.id);

    if (activeId.startsWith(M)) {
      const from = modules.findIndex((m) => m.id === strip(activeId));
      const to = modules.findIndex((m) => m.id === strip(overId));
      if (from === to || to < 0) return;
      const next = moveItem(modules, from, to);
      setModules(next);
      run(() => reorderModules(courseId, next.map((m) => m.id)));
      return;
    }

    const lessonId = strip(activeId);
    const target = findLessonModule(modules, lessonId);
    if (!target) return;
    let lessons = target.lessons;
    if (overId.startsWith(L)) {
      const from = lessons.findIndex((l) => l.id === lessonId);
      const to = lessons.findIndex((l) => l.id === strip(overId));
      if (to >= 0) lessons = moveItem(lessons, from, to);
    }
    setModules((ms) => ms.map((m) => (m.id === target.id ? { ...m, lessons } : m)));

    // Nothing to save if the lesson ended where it started.
    const finalOrder = lessons.map((l) => l.id).join();
    const savedOrder = initial.find((m) => m.id === target.id)?.lessons.map((l) => l.id).join();
    if (dragFrom === target.id && finalOrder === savedOrder) return;
    run(() => reorderLessons(target.id, lessons.map((l) => l.id)));
  }

  const pendingTitle =
    toDelete?.kind === "module"
      ? modules.find((m) => m.id === toDelete.id)?.title
      : modules.flatMap((m) => m.lessons).find((l) => l.id === toDelete?.id)?.title;

  return (
    <section className="flex flex-col gap-4">
      {modules.length === 0 && (
        <p className="rounded-xl border border-dashed p-6 text-center text-muted-foreground">{t("noModules")}</p>
      )}

      <DndContext
        id={dndId}
        sensors={sensors}
        collisionDetection={collision}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDragEnd={onDragEnd}
        onDragCancel={() => {
          setDragFrom(null);
          setModules(initial);
        }}
      >
        <SortableContext items={modules.map((m) => M + m.id)} strategy={verticalListSortingStrategy}>
          <ol className="flex flex-col gap-4">
            {modules.map((mod) => (
              <ModuleCard
                key={mod.id}
                courseId={courseId}
                module={mod}
                editing={editing}
                setEditing={setEditing}
                onRename={(title) => renameModuleLocal(mod.id, title)}
                onDuplicate={() => run(() => duplicateModule(mod.id), undefined, t("copied"))}
                onDelete={() => setToDelete({ kind: "module", id: mod.id })}
                onAddLesson={() => addLesson(mod.id)}
                onRenameLesson={renameLessonLocal}
                onDuplicateLesson={(id) => run(() => duplicateLesson(id), undefined, t("copied"))}
                onDeleteLesson={(id) => setToDelete({ kind: "lesson", id })}
                onToggleTest={toggleTest}
              />
            ))}
          </ol>
        </SortableContext>
      </DndContext>

      <div>
        <Button variant="outline" onClick={addModule}>
          <Plus aria-hidden="true" />
          {t("addModule")}
        </Button>
      </div>

      <ConfirmDelete
        open={toDelete !== null}
        onOpenChange={(open) => !open && setToDelete(null)}
        title={
          toDelete?.kind === "module"
            ? t("deleteModuleTitle", { title: pendingTitle ?? "" })
            : t("deleteLessonTitle", { title: pendingTitle ?? "" })
        }
        description={toDelete?.kind === "module" ? t("deleteModuleText") : t("deleteLessonText")}
        onConfirm={confirmDelete}
      />
    </section>
  );
}

// ---------------------------------------------------------------------------

function DragHandle({
  attributes,
  listeners,
  setRef,
}: Pick<ReturnType<typeof useSortable>, "attributes" | "listeners"> & {
  setRef: (el: HTMLElement | null) => void;
}) {
  const t = useTranslations("courses");
  return (
    <button
      type="button"
      ref={setRef}
      {...attributes}
      {...listeners}
      aria-label={t("dragHandle")}
      className="flex size-8 shrink-0 cursor-grab touch-none items-center justify-center rounded-md text-muted-foreground hover:bg-accent active:cursor-grabbing"
    >
      <GripVertical className="size-4" aria-hidden="true" />
    </button>
  );
}

function RowMenu({ children }: { children: React.ReactNode }) {
  const t = useTranslations("courses");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="size-8 shrink-0" aria-label={t("moreActions")}>
          <MoreHorizontal aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">{children}</DropdownMenuContent>
    </DropdownMenu>
  );
}

type ModuleCardProps = {
  courseId: string;
  module: OutlineModule;
  editing: string | null;
  setEditing: (id: string | null) => void;
  onRename: (title: string) => void;
  onDuplicate: () => void;
  onDelete: () => void;
  onAddLesson: () => void;
  onRenameLesson: (id: string, title: string) => void;
  onDuplicateLesson: (id: string) => void;
  onDeleteLesson: (id: string) => void;
  onToggleTest: (lesson: OutlineLesson) => void;
};

function ModuleCard(props: ModuleCardProps) {
  const { module: mod, editing, setEditing } = props;
  const t = useTranslations("courses");
  const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition, isDragging } =
    useSortable({ id: M + mod.id });
  const { setNodeRef: setZoneRef, isOver } = useDroppable({ id: ZONE + mod.id });

  return (
    <li
      ref={setNodeRef}
      style={{ transform: CSS.Translate.toString(transform), transition }}
      className={cn("list-none", isDragging && "relative z-10 opacity-80")}
    >
      <Card className="gap-0 rounded-2xl py-0">
        <div className="flex items-center gap-1 border-b px-2 py-2 sm:px-3">
          <DragHandle attributes={attributes} listeners={listeners} setRef={setActivatorNodeRef} />
          <InlineTitle
            value={mod.title}
            editing={editing === mod.id}
            onEditingChange={(on) => setEditing(on ? mod.id : null)}
            onSave={props.onRename}
            className="font-semibold"
          />
          <span className="hidden shrink-0 text-sm text-muted-foreground sm:inline">
            {t("lessonsCount", { count: mod.lessons.length })}
          </span>
          <RowMenu>
            <DropdownMenuItem onSelect={() => setEditing(mod.id)}>
              <Pencil aria-hidden="true" />
              {t("rename")}
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={props.onDuplicate}>
              <Copy aria-hidden="true" />
              {t("duplicate")}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive" onSelect={props.onDelete}>
              <Trash2 aria-hidden="true" />
              {t("delete")}
            </DropdownMenuItem>
          </RowMenu>
        </div>

        <SortableContext items={mod.lessons.map((l) => L + l.id)} strategy={verticalListSortingStrategy}>
          <ol ref={setZoneRef} className={cn("flex min-h-12 flex-col p-2", isOver && "bg-accent/50")}>
            {mod.lessons.length === 0 && (
              <li className="px-3 py-2 text-sm text-muted-foreground">{t("noLessons")}</li>
            )}
            {mod.lessons.map((lesson) => (
              <LessonRow key={lesson.id} lesson={lesson} {...props} />
            ))}
          </ol>
        </SortableContext>

        <div className="px-2 pb-2">
          <Button variant="ghost" size="sm" onClick={props.onAddLesson} className="text-primary">
            <Plus aria-hidden="true" />
            {t("addLesson")}
          </Button>
        </div>
      </Card>
    </li>
  );
}

function LessonRow({ lesson, courseId, editing, setEditing, ...props }: ModuleCardProps & { lesson: OutlineLesson }) {
  const t = useTranslations("courses");
  const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition, isDragging } =
    useSortable({ id: L + lesson.id });
  const Icon = lesson.is_test ? ClipboardCheck : FileText;

  return (
    <li
      ref={setNodeRef}
      style={{ transform: CSS.Translate.toString(transform), transition }}
      className={cn(
        "flex items-center gap-1 rounded-lg px-1 py-1 hover:bg-accent/60",
        isDragging && "relative z-10 bg-card shadow-md",
      )}
    >
      <DragHandle attributes={attributes} listeners={listeners} setRef={setActivatorNodeRef} />
      <Icon className="size-4 shrink-0 text-primary" aria-hidden="true" />
      <InlineTitle
        value={lesson.title}
        editing={editing === lesson.id}
        onEditingChange={(on) => setEditing(on ? lesson.id : null)}
        onSave={(title) => props.onRenameLesson(lesson.id, title)}
        className="px-1"
      >
        <Link href={`/courses/${courseId}/lessons/${lesson.id}`} className="block truncate py-1 hover:underline">
          {lesson.title}
        </Link>
      </InlineTitle>
      {lesson.is_test && (
        <Badge variant="secondary" title={t("testHint")}>
          {t("testBadge")}
        </Badge>
      )}
      <RowMenu>
        <DropdownMenuItem onSelect={() => setEditing(lesson.id)}>
          <Pencil aria-hidden="true" />
          {t("rename")}
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => props.onDuplicateLesson(lesson.id)}>
          <Copy aria-hidden="true" />
          {t("duplicate")}
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => props.onToggleTest(lesson)}>
          <ClipboardCheck aria-hidden="true" />
          {lesson.is_test ? t("unmarkTest") : t("markTest")}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive" onSelect={() => props.onDeleteLesson(lesson.id)}>
          <Trash2 aria-hidden="true" />
          {t("delete")}
        </DropdownMenuItem>
      </RowMenu>
    </li>
  );
}
