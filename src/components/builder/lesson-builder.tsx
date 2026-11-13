"use client";

import { closestCenter, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors, type DragEndEvent } from "@dnd-kit/core";
import { SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { Eye, Loader2, MoreHorizontal, Pencil, Plus, Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useId, useRef, useState } from "react";
import { toast } from "sonner";
import { ConfirmDelete } from "@/components/courses/confirm-delete";
import { InlineTitle } from "@/components/courses/inline-title";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { ExerciseTypeId } from "@/features/exercises/catalog";
import {
  createExercise,
  createSection,
  deleteExercise,
  deleteSection,
  duplicateExercise,
  moveExercise,
  renameSection,
  reorderExercises,
  reorderSections,
  saveExercise,
  type BuilderResult,
} from "@/features/lessons/actions";
import type { BuilderExercise, BuilderSection } from "@/features/lessons/queries";
import { SaveQueue } from "@/features/lessons/save-queue";
import { exerciseNumber } from "@/features/lessons/sections";
import { moveItem } from "@/features/courses/outline";
import { useRouter } from "@/i18n/navigation";
import { AddSectionDialog } from "./add-section-dialog";
import { BuilderContext } from "./builder-context";
import { ExerciseCard } from "./exercise-card";
import { ExercisePicker } from "./exercise-picker";
import { SaveStatus } from "./save-status";
import { SectionNav } from "./section-nav";

type Confirm = { kind: "section"; id: string } | { kind: "exercise"; id: string } | null;

/**
 * The lesson builder. The browser holds the working copy of the lesson:
 * structure changes are sent right away, text edits go through the autosave queue.
 */
export function LessonBuilder({
  userId,
  courseId,
  lessonId,
  initialSections,
  initialSectionId,
}: {
  /** The teacher; their files are uploaded into a folder named after this id. */
  userId: string;
  courseId: string;
  lessonId: string;
  initialSections: BuilderSection[];
  initialSectionId: string | null;
}) {
  const t = useTranslations("builder");
  const [sections, setSections] = useState(initialSections);
  const [activeId, setActiveId] = useState<string | null>(
    initialSections.find((s) => s.id === initialSectionId)?.id ?? initialSections[0]?.id ?? null,
  );
  const [renamingId, setRenamingId] = useState<string | null>(null);
  const [addingSection, setAddingSection] = useState(false);
  const [picking, setPicking] = useState(false);
  const [creating, setCreating] = useState(false);
  const [confirm, setConfirm] = useState<Confirm>(null);
  const [queue] = useState(() => new SaveQueue());
  // Latest version of each edited exercise, read by the autosave when it runs.
  const latest = useRef(new Map<string, BuilderExercise>());
  const dndId = useId();
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  const activeIndex = sections.findIndex((s) => s.id === activeId);
  const active = activeIndex >= 0 ? sections[activeIndex]! : null;

  // Warn before leaving with unsaved edits; save everything when the tab is hidden.
  useEffect(() => {
    const beforeUnload = (e: BeforeUnloadEvent) => {
      if (queue.hasUnsaved()) {
        e.preventDefault();
      }
    };
    const hidden = () => {
      if (document.visibilityState === "hidden") void queue.flushAll();
    };
    window.addEventListener("beforeunload", beforeUnload);
    document.addEventListener("visibilitychange", hidden);
    return () => {
      window.removeEventListener("beforeunload", beforeUnload);
      document.removeEventListener("visibilitychange", hidden);
      void queue.flushAll();
    };
  }, [queue]);

  // Save everything first, then open the student view of the current section.
  const router = useRouter();
  const [opening, setOpening] = useState(false);
  async function openPreview() {
    setOpening(true);
    await queue.flushAll();
    const section = activeId ? `?section=${activeId}` : "";
    router.push(`/courses/${courseId}/lessons/${lessonId}/preview${section}`);
  }

  // Remember the open section in the address, so a reload opens the same place.
  function select(id: string) {
    setActiveId(id);
    const url = new URL(window.location.href);
    url.searchParams.set("section", id);
    window.history.replaceState(null, "", url);
  }

  async function call<T>(action: Promise<BuilderResult<T>>, okMessage?: string): Promise<T | null> {
    const result = await action;
    if (!result.ok) {
      toast.error(t("error"));
      return null;
    }
    if (okMessage) toast.success(okMessage);
    return result.data;
  }

  const patchSection = (id: string, fn: (s: BuilderSection) => BuilderSection) =>
    setSections((ss) => ss.map((s) => (s.id === id ? fn(s) : s)));

  // --- Sections ------------------------------------------------------------
  async function addSection(title: string) {
    const created = await call(createSection(lessonId, title));
    if (!created) return;
    setSections((ss) => [...ss, { ...created, exercises: [] }]);
    select(created.id);
    setAddingSection(false);
  }

  async function rename(id: string, title: string) {
    const before = sections;
    patchSection(id, (s) => ({ ...s, title }));
    if ((await call(renameSection(id, title), t("saved"))) === null) setSections(before);
  }

  async function reorder(from: number, to: number) {
    const before = sections;
    const next = moveItem(sections, from, to);
    setSections(next);
    if ((await call(reorderSections(lessonId, next.map((s) => s.id)))) === null) setSections(before);
  }

  // --- Exercises -----------------------------------------------------------
  async function addExercise(type: ExerciseTypeId) {
    if (!active) return;
    setPicking(false);
    setCreating(true);
    const created = await call(createExercise(active.id, type));
    setCreating(false);
    if (!created) return;
    patchSection(active.id, (s) => ({ ...s, exercises: [...s.exercises, created] }));
  }

  // Finds the exercise by id in any section (it may have been moved meanwhile).
  type Patch = Partial<BuilderExercise> | ((current: BuilderExercise) => Partial<BuilderExercise>);

  function updateExercise(exerciseId: string, patch: Patch) {
    setSections((ss) =>
      ss.map((s) =>
        s.exercises.some((e) => e.id === exerciseId)
          ? {
              ...s,
              exercises: s.exercises.map((e) => {
                if (e.id !== exerciseId) return e;
                // A function patch is applied to the newest version (e.g. after a slow upload).
                const next = { ...e, ...(typeof patch === "function" ? patch(e) : patch) };
                latest.current.set(exerciseId, next);
                return next;
              }),
            }
          : s,
      ),
    );
    queue.schedule(exerciseId, async () => {
      const current = latest.current.get(exerciseId);
      if (!current) return true;
      const { type, title, content, key } = current;
      // Plain JSON only: editors may build objects React cannot send to the server as data.
      const payload = JSON.parse(JSON.stringify({ title, content, key })) as { title: string; content: unknown; key: unknown };
      const result = await saveExercise(exerciseId, type, payload);
      // Only a network/server problem is worth retrying; report anything else once.
      if (!result.ok && result.error !== "generic") {
        toast.error(t("error"));
        return true;
      }
      return result.ok;
    });
  }

  async function duplicate(sectionId: string, exercise: BuilderExercise) {
    await queue.flush(exercise.id); // copy what the teacher sees, not an older version
    const newId = await call(duplicateExercise(exercise.id), t("copied"));
    if (!newId) return;
    patchSection(sectionId, (s) => {
      const i = s.exercises.findIndex((e) => e.id === exercise.id);
      const exercises = s.exercises.slice();
      exercises.splice(i + 1, 0, { ...exercise, id: newId });
      return { ...s, exercises };
    });
  }

  async function move(fromSection: string, exercise: BuilderExercise, toSection: string) {
    await queue.flush(exercise.id);
    if ((await call(moveExercise(exercise.id, toSection), t("moved"))) === null) return;
    setSections((ss) =>
      ss.map((s) =>
        s.id === fromSection
          ? { ...s, exercises: s.exercises.filter((e) => e.id !== exercise.id) }
          : s.id === toSection
            ? { ...s, exercises: [...s.exercises, exercise] }
            : s,
      ),
    );
  }

  async function reorderInActive({ active: dragged, over }: DragEndEvent) {
    if (!active || !over || dragged.id === over.id) return;
    const from = active.exercises.findIndex((e) => e.id === dragged.id);
    const to = active.exercises.findIndex((e) => e.id === over.id);
    if (from < 0 || to < 0) return;
    const before = sections;
    const exercises = moveItem(active.exercises, from, to);
    patchSection(active.id, (s) => ({ ...s, exercises }));
    if ((await call(reorderExercises(active.id, exercises.map((e) => e.id)))) === null) setSections(before);
  }

  // --- Deleting ------------------------------------------------------------
  async function confirmDelete() {
    if (!confirm) return;
    const target = confirm;
    setConfirm(null);
    const before = sections;
    if (target.kind === "section") {
      const remaining = sections.filter((s) => s.id !== target.id);
      sections.find((s) => s.id === target.id)?.exercises.forEach((e) => queue.drop(e.id));
      setSections(remaining);
      if (activeId === target.id) setActiveId(remaining[0]?.id ?? null);
      if ((await call(deleteSection(target.id), t("deleted"))) === null) setSections(before);
    } else {
      queue.drop(target.id);
      setSections((ss) => ss.map((s) => ({ ...s, exercises: s.exercises.filter((e) => e.id !== target.id) })));
      if ((await call(deleteExercise(target.id), t("deleted"))) === null) setSections(before);
    }
  }

  const confirmText = (() => {
    if (!confirm) return { title: "", description: "" };
    if (confirm.kind === "section") {
      const s = sections.find((x) => x.id === confirm.id);
      return { title: t("deleteSectionTitle", { title: s?.title ?? "" }), description: t("deleteSectionText") };
    }
    const si = sections.findIndex((s) => s.exercises.some((e) => e.id === confirm.id));
    const ei = si >= 0 ? sections[si]!.exercises.findIndex((e) => e.id === confirm.id) : 0;
    return { title: t("deleteExerciseTitle", { number: exerciseNumber(si, ei) }), description: t("deleteExerciseText") };
  })();

  return (
    <BuilderContext value={{ userId }}>
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-end gap-3">
        <SaveStatus queue={queue} />
        <Button variant="outline" size="sm" onClick={openPreview} disabled={opening}>
          {opening ? <Loader2 className="animate-spin" aria-hidden="true" /> : <Eye aria-hidden="true" />}
          {t("preview")}
        </Button>
      </div>

      <div className="grid grid-cols-[minmax(0,1fr)] gap-4 md:grid-cols-[14rem_minmax(0,1fr)] md:items-start lg:grid-cols-[16rem_minmax(0,1fr)]">
        <div className="min-w-0 md:sticky md:top-20">
          <SectionNav
            sections={sections.map((s) => ({ id: s.id, title: s.title, count: s.exercises.length }))}
            activeId={activeId}
            renamingId={renamingId}
            onSelect={select}
            onAdd={() => setAddingSection(true)}
            onRenameStart={setRenamingId}
            onRename={rename}
            onDelete={(id) => setConfirm({ kind: "section", id })}
            onReorder={reorder}
          />
        </div>

        <section className="flex min-w-0 flex-col gap-4">
          {!active ? (
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed px-6 py-12 text-center">
              <p className="text-muted-foreground">{t("noSections")}</p>
              <Button onClick={() => setAddingSection(true)}>
                <Plus aria-hidden="true" />
                {t("addSection")}
              </Button>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-2">
                <span className="text-xl font-semibold tabular-nums text-muted-foreground">{activeIndex + 1}.</span>
                <InlineTitle
                  value={active.title}
                  editing={renamingId === `header:${active.id}`}
                  onEditingChange={(on) => setRenamingId(on ? `header:${active.id}` : null)}
                  onSave={(title) => rename(active.id, title.slice(0, 100))}
                  className="text-xl font-semibold"
                />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-8 shrink-0" aria-label={t("moreActions")}>
                      <MoreHorizontal aria-hidden="true" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onSelect={() => setRenamingId(`header:${active.id}`)}>
                      <Pencil aria-hidden="true" />
                      {t("rename")}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem variant="destructive" onSelect={() => setConfirm({ kind: "section", id: active.id })}>
                      <Trash2 aria-hidden="true" />
                      {t("delete")}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {active.exercises.length === 0 && (
                <p className="rounded-2xl border border-dashed p-6 text-center text-muted-foreground">{t("noExercises")}</p>
              )}

              <DndContext id={dndId} sensors={sensors} collisionDetection={closestCenter} onDragEnd={reorderInActive}>
                <SortableContext items={active.exercises.map((e) => e.id)} strategy={verticalListSortingStrategy}>
                  <ol className="flex flex-col gap-4">
                    {active.exercises.map((exercise, i) => (
                      <ExerciseCard
                        key={exercise.id}
                        exercise={exercise}
                        number={exerciseNumber(activeIndex, i)}
                        otherSections={sections.filter((s) => s.id !== active.id).map(({ id, title }) => ({ id, title }))}
                        onChange={(patch) => updateExercise(exercise.id, patch)}
                        onBlur={() => void queue.flush(exercise.id)}
                        onDuplicate={() => duplicate(active.id, exercise)}
                        onMove={(to) => move(active.id, exercise, to)}
                        onDelete={() => setConfirm({ kind: "exercise", id: exercise.id })}
                      />
                    ))}
                  </ol>
                </SortableContext>
              </DndContext>

              <div>
                <Button variant="outline" onClick={() => setPicking(true)} disabled={creating}>
                  {creating ? <Loader2 className="animate-spin" aria-hidden="true" /> : <Plus aria-hidden="true" />}
                  {t("addExercise")}
                </Button>
              </div>
            </>
          )}
        </section>
      </div>

      <AddSectionDialog open={addingSection} onOpenChange={setAddingSection} onAdd={addSection} />
      <ExercisePicker open={picking} onOpenChange={setPicking} onPick={addExercise} />
      <ConfirmDelete
        open={confirm !== null}
        onOpenChange={(open) => !open && setConfirm(null)}
        title={confirmText.title}
        description={confirmText.description}
        onConfirm={confirmDelete}
      />
    </div>
    </BuilderContext>
  );
}

