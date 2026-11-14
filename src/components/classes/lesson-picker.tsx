"use client";

import {
  BookOpen,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleDashed,
  ClipboardCheck,
  FileText,
  ListOrdered,
  Loader2,
  Play,
  Radio,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState, useTransition } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  getPickerOutline,
  listPickerCourses,
  openClassLesson,
  type PickerCourse,
  type PickerOutline,
} from "@/features/classes/lesson-actions";

type Source = "mine" | "library";

/**
 * "Open lesson": My courses / Library → course → lesson. Lessons already done in
 * this class have a check mark. With `courseId` it starts on that course
 * ("Next lesson").
 */
export function LessonPicker({
  classId,
  courseId,
  label,
  variant = "default",
  size = "default",
  icon = "play",
}: {
  classId: string;
  courseId?: string;
  label: string;
  variant?: "default" | "outline";
  size?: "default" | "lg";
  /** "list": the course's lessons ("Lessons of the course"). */
  icon?: "play" | "list";
}) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} size={size}>
          {icon === "list" ? <ListOrdered aria-hidden="true" /> : <Play aria-hidden="true" />}
          {label}
        </Button>
      </DialogTrigger>
      <DialogContent className="flex max-h-[85svh] flex-col gap-4 sm:max-w-lg">
        {open && <PickerBody classId={classId} initialCourseId={courseId ?? null} />}
      </DialogContent>
    </Dialog>
  );
}

function PickerBody({ classId, initialCourseId }: { classId: string; initialCourseId: string | null }) {
  const t = useTranslations("classLessons");
  const [source, setSource] = useState<Source>("mine");
  const [courseId, setCourseId] = useState<string | null>(initialCourseId);
  const [courses, setCourses] = useState<Partial<Record<Source, PickerCourse[]>>>({});
  const [outline, setOutline] = useState<PickerOutline | null>(null);
  const [opening, startOpening] = useTransition();
  const [openingId, setOpeningId] = useState<string | null>(null);

  // Course lists are loaded once per tab.
  useEffect(() => {
    if (courseId || courses[source]) return;
    let cancelled = false;
    void listPickerCourses(source).then((r) => {
      if (cancelled) return;
      if (r.ok) setCourses((c) => ({ ...c, [source]: r.data }));
      else toast.error(t("loadFailed"));
    });
    return () => {
      cancelled = true;
    };
  }, [source, courseId, courses, t]);

  useEffect(() => {
    if (!courseId) return;
    let cancelled = false;
    void getPickerOutline(classId, courseId).then((r) => {
      if (cancelled) return;
      if (r.ok) setOutline(r.data);
      else {
        toast.error(t("loadFailed"));
        setCourseId(null);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [classId, courseId, t]);

  function open(lessonId: string) {
    setOpeningId(lessonId);
    startOpening(async () => {
      const result = await openClassLesson(classId, lessonId);
      // On success the page changes; we only get here on errors.
      if (result && !result.ok) {
        toast.error(t(`errors.${result.error}`));
        setOpeningId(null);
      }
    });
  }

  const spinner = (
    <div className="flex justify-center py-10" role="status" aria-label={t("loading")}>
      <Loader2 className="size-6 animate-spin text-muted-foreground" aria-hidden="true" />
    </div>
  );

  if (courseId) {
    // The outline shown belongs to the chosen course; anything else is still loading.
    const current = outline?.course.id === courseId ? outline : null;
    return (
      <>
        <DialogHeader>
          <Button
            variant="ghost"
            size="sm"
            className="-ml-2 w-fit text-muted-foreground"
            onClick={() => setCourseId(null)}
          >
            <ChevronLeft aria-hidden="true" />
            {t("allCourses")}
          </Button>
          <DialogTitle>{current?.course.title ?? t("pickLesson")}</DialogTitle>
          <DialogDescription>{t("pickLessonHint")}</DialogDescription>
        </DialogHeader>
        <div className="-mx-6 min-h-0 flex-1 overflow-y-auto px-6">
          {!current ? (
            spinner
          ) : current.modules.every((m) => m.lessons.length === 0) ? (
            <p className="py-8 text-center text-muted-foreground">{t("noLessonsInCourse")}</p>
          ) : (
            <div className="flex flex-col gap-4 pb-1">
              {current.modules.map((m) =>
                m.lessons.length === 0 ? null : (
                  <section key={m.id} className="flex flex-col gap-1">
                    <h3 className="px-1 text-sm font-medium text-muted-foreground">{m.title}</h3>
                    <ul className="flex flex-col gap-1">
                      {m.lessons.map((l) => (
                        <li key={l.id}>
                          <button
                            type="button"
                            disabled={opening}
                            onClick={() => open(l.id)}
                            className="flex min-h-12 w-full items-center gap-3 rounded-xl border px-3 py-2 text-left transition-colors hover:border-primary/60 hover:bg-accent disabled:opacity-60"
                          >
                            {l.finished ? (
                              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                                <Check className="size-4" aria-label={t("done")} />
                              </span>
                            ) : l.started ? (
                              <CircleDashed className="size-5 shrink-0 text-amber-600" aria-label={t("notFinished")} />
                            ) : l.isTest ? (
                              <ClipboardCheck className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
                            ) : (
                              <FileText className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
                            )}
                            <span className="min-w-0 flex-1 break-words">{l.title}</span>
                            {l.live && (
                              <Badge>
                                <Radio aria-hidden="true" />
                                {t("live")}
                              </Badge>
                            )}
                            {opening && openingId === l.id ? (
                              <Loader2 className="size-4 shrink-0 animate-spin" aria-hidden="true" />
                            ) : (
                              <ChevronRight className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                            )}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </section>
                ),
              )}
            </div>
          )}
        </div>
      </>
    );
  }

  const list = courses[source];
  return (
    <>
      <DialogHeader>
        <DialogTitle>{t("openLesson")}</DialogTitle>
        <DialogDescription>{t("pickCourseHint")}</DialogDescription>
      </DialogHeader>
      <Tabs value={source} onValueChange={(v) => setSource(v as Source)}>
        <TabsList className="w-full">
          <TabsTrigger value="mine">{t("myCourses")}</TabsTrigger>
          <TabsTrigger value="library">{t("library")}</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="-mx-6 min-h-0 flex-1 overflow-y-auto px-6">
        {!list ? (
          spinner
        ) : list.length === 0 ? (
          <p className="py-8 text-center text-muted-foreground">
            {source === "mine" ? t("noMyCourses") : t("noLibraryCourses")}
          </p>
        ) : (
          <ul className="flex flex-col gap-2 pb-1">
            {list.map((c) => (
              <li key={c.id}>
                <button
                  type="button"
                  onClick={() => setCourseId(c.id)}
                  className="flex min-h-14 w-full items-center gap-3 rounded-xl border px-3 py-2 text-left transition-colors hover:border-primary/60 hover:bg-accent"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                    <BookOpen className="size-5" aria-hidden="true" />
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="font-medium break-words">{c.title}</span>
                    <span className="text-sm text-muted-foreground">
                      {[c.language.toUpperCase(), c.level, t("lessonsCount", { count: c.lessonCount })]
                        .filter(Boolean)
                        .join(" · ")}
                    </span>
                  </span>
                  <ChevronRight className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
