// Pure helpers for the course outline (modules → lessons). No React, easy to test.

export type OutlineLesson = { id: string; title: string; is_test: boolean };
export type OutlineModule = { id: string; title: string; lessons: OutlineLesson[] };

export function moveItem<T>(list: T[], from: number, to: number): T[] {
  if (from === to || from < 0 || to < 0 || from >= list.length || to >= list.length) return list;
  const copy = list.slice();
  const [item] = copy.splice(from, 1);
  copy.splice(to, 0, item!);
  return copy;
}

export function findLessonModule(modules: OutlineModule[], lessonId: string): OutlineModule | undefined {
  return modules.find((m) => m.lessons.some((l) => l.id === lessonId));
}

/** Moves a lesson to `toModuleId` at position `toIndex` (end if omitted). */
export function moveLesson(
  modules: OutlineModule[],
  lessonId: string,
  toModuleId: string,
  toIndex?: number,
): OutlineModule[] {
  const from = findLessonModule(modules, lessonId);
  const target = modules.find((m) => m.id === toModuleId);
  if (!from || !target) return modules;
  const lesson = from.lessons.find((l) => l.id === lessonId)!;

  if (from.id === toModuleId) {
    const oldIndex = from.lessons.indexOf(lesson);
    const newIndex = Math.min(toIndex ?? from.lessons.length - 1, from.lessons.length - 1);
    return modules.map((m) => (m.id === from.id ? { ...m, lessons: moveItem(m.lessons, oldIndex, newIndex) } : m));
  }

  return modules.map((m) => {
    if (m.id === from.id) return { ...m, lessons: m.lessons.filter((l) => l.id !== lessonId) };
    if (m.id === toModuleId) {
      const lessons = m.lessons.slice();
      lessons.splice(Math.min(toIndex ?? lessons.length, lessons.length), 0, lesson);
      return { ...m, lessons };
    }
    return m;
  });
}

export function updateLesson(
  modules: OutlineModule[],
  lessonId: string,
  patch: Partial<OutlineLesson>,
): OutlineModule[] {
  return modules.map((m) => ({
    ...m,
    lessons: m.lessons.map((l) => (l.id === lessonId ? { ...l, ...patch } : l)),
  }));
}

export function removeLesson(modules: OutlineModule[], lessonId: string): OutlineModule[] {
  return modules.map((m) => ({ ...m, lessons: m.lessons.filter((l) => l.id !== lessonId) }));
}

/** Default title for a new item: "Lesson 4" when there are 3 already. */
export function nextNumber(count: number): number {
  return count + 1;
}
