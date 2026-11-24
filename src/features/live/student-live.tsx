"use client";

import type { RealtimeChannel } from "@supabase/supabase-js";
import { useTranslations } from "next-intl";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { Radio, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { createClient } from "@/lib/supabase/client";
import {
  boardViewOf,
  classTopic,
  combineStatus,
  isNewlyOpened,
  type BoardMessage,
  type LiveMessage,
  type LiveStatus,
  type PointerMessage,
  type ResetMessage,
  type ShowMessage,
} from "./types";

export type StudentClass = { id: string; name: string; live: { lessonId: string; openedAt: string } | null };
type Location = { classId: string; lessonId: string | null; sectionId: string | null } | null;

type StudentLive = {
  status: LiveStatus;
  /** The lesson page reports where the student is (shared with the teacher). */
  setLocation: (location: Location) => void;
  /** The lesson page listens for the teacher's messages ("Show", pointer, reset). */
  onMessage: (listener: (message: LiveMessage) => void) => () => void;
};

const Ctx = createContext<StudentLive | null>(null);

export function useStudentLive() {
  return useContext(Ctx);
}

const lessonPath = (classId: string, lessonId: string) => `/classes/${classId}/lessons/${lessonId}`;

/** Opened within the last 3 hours (a lesson stays "current" until the next one). */
const isRecent = (openedAt: string) => Date.now() - new Date(openedAt).getTime() < 3 * 60 * 60 * 1000;

/** "A lesson is on in … — Join": for a student who came in after the lesson began. */
function JoinBanner({ name, href, onClose }: { name: string; href: string; onClose: () => void }) {
  const t = useTranslations("live");
  return (
    <div className="mb-4 flex items-center gap-3 rounded-2xl border border-primary/30 bg-primary/10 px-4 py-3" role="status">
      <Radio className="size-5 shrink-0 text-primary" aria-hidden="true" />
      <p className="min-w-0 flex-1 text-sm font-medium">{t("lessonOn", { name })}</p>
      <Button asChild size="sm">
        <Link href={href}>{t("join")}</Link>
      </Button>
      <Button type="button" variant="ghost" size="icon-sm" aria-label={t("hide")} onClick={onClose}>
        <X aria-hidden="true" />
      </Button>
    </div>
  );
}

/**
 * For students, on every page of the app: follows their classes live.
 *  - the teacher opens a lesson → it opens here too (or a notice with "Open");
 *  - the teacher finishes sections / the lesson → the page updates;
 *  - "Show to students" → the right section and exercise;
 *  - shares presence (online, which lesson and section) with the teacher.
 */
export function StudentLiveProvider({
  userId,
  classes,
  children,
}: {
  userId: string;
  classes: StudentClass[];
  children: React.ReactNode;
}) {
  const t = useTranslations("live");
  const router = useRouter();
  const pathname = usePathname();
  const [supabase] = useState(() => createClient());
  const [status, setStatus] = useState<LiveStatus>("connecting");
  // The lesson going on in each class (for "A lesson is on — join").
  const [liveNow, setLiveNow] = useState(
    () => new Map(classes.filter((c) => c.live).map((c) => [c.id, c.live!])),
  );
  const [dismissed, setDismissed] = useState<string | null>(null);

  const path = useRef(pathname);
  const location = useRef<Location>(null);
  const channels = useRef(new Map<string, RealtimeChannel>());
  const joined = useRef(new Set<string>());
  const listeners = useRef(new Set<(m: LiveMessage) => void>());
  const seen = useRef(new Map<string, string | null>());
  const names = useRef(new Map<string, string>());
  useEffect(() => {
    path.current = pathname;
  }, [pathname]);

  const classKey = classes.map((c) => c.id).join(",");

  const presence = useCallback(
    (classId: string) => {
      const loc = location.current?.classId === classId ? location.current : null;
      return { userId, lessonId: loc?.lessonId ?? null, sectionId: loc?.sectionId ?? null };
    },
    [userId],
  );

  useEffect(() => {
    if (!classKey) return;
    for (const c of classes) {
      names.current.set(c.id, c.name);
      if (!seen.current.has(c.id)) seen.current.set(c.id, c.live ? `${c.live.lessonId}@${c.live.openedAt}` : null);
    }
    const ids = classKey.split(",");
    const states = new Map<string, LiveStatus>();
    let wasOffline = false;
    const update = (key: string, s: LiveStatus) => {
      states.set(key, s);
      const all = combineStatus([...states.values()]);
      setStatus(all);
      if (all === "offline") wasOffline = true;
      // Back after a break: reload the page data so nothing is missed.
      if (all === "online" && wasOffline) {
        wasOffline = false;
        router.refresh();
      }
    };
    const toStatus = (s: string): LiveStatus =>
      s === "SUBSCRIBED" ? "online" : s === "CHANNEL_ERROR" || s === "TIMED_OUT" || s === "CLOSED" ? "offline" : "connecting";

    function openLesson(classId: string, lessonId: string) {
      const target = lessonPath(classId, lessonId);
      const here = path.current;
      if (here === target) return;
      if (here.startsWith(`/classes/${classId}`)) {
        toast.info(t("lessonOpened"));
        router.push(target);
      } else {
        toast(t("lessonStarted", { name: names.current.get(classId) ?? "" }), {
          duration: 60_000,
          action: { label: t("open"), onClick: () => router.push(target) },
        });
      }
    }

    function show(classId: string, message: ShowMessage) {
      const target = lessonPath(classId, message.lessonId);
      const here = path.current;
      if (here === target) {
        listeners.current.forEach((l) => l({ kind: "show", ...message, classId }));
      } else if (here.startsWith(`/classes/${classId}`)) {
        router.push(`${target}?section=${message.sectionId}&show=${message.exerciseId}`);
      } else {
        toast(t("teacherShows", { name: names.current.get(classId) ?? "" }), {
          duration: 30_000,
          action: {
            label: t("open"),
            onClick: () => router.push(`${target}?section=${message.sectionId}&show=${message.exerciseId}`),
          },
        });
      }
    }

    let cancelled = false;
    const created: RealtimeChannel[] = [];
    void (async () => {
      await supabase.realtime.setAuth();
      if (cancelled) return;
      for (const classId of ids) {
        const channel = supabase.channel(classTopic(classId), { config: { private: true, presence: { key: userId } } });
        channel.on("broadcast", { event: "show" }, ({ payload }) => show(classId, payload as ShowMessage));
        // Pointer and reset matter only on that lesson's page.
        const onLesson = (lessonId: string) => path.current === lessonPath(classId, lessonId);
        channel.on("broadcast", { event: "pointer" }, ({ payload }) => {
          const m = payload as PointerMessage;
          if (onLesson(m.lessonId)) listeners.current.forEach((l) => l({ kind: "pointer", ...m, classId }));
        });
        channel.on("broadcast", { event: "board" }, ({ payload }) => {
          const m = payload as BoardMessage;
          if (onLesson(m.lessonId)) listeners.current.forEach((l) => l({ kind: "board", ...m, classId }));
        });
        channel.on("broadcast", { event: "boardView" }, ({ payload }) => {
          const m = boardViewOf(payload);
          if (m && onLesson(m.lessonId)) listeners.current.forEach((l) => l({ kind: "boardView", ...m, classId }));
        });
        channel.on("broadcast", { event: "reset" }, ({ payload }) => {
          const m = payload as ResetMessage;
          if (onLesson(m.lessonId)) listeners.current.forEach((l) => l({ kind: "reset", ...m, classId }));
        });
        channel.subscribe((s) => {
          update(classId, toStatus(s));
          if (s === "SUBSCRIBED") {
            joined.current.add(classId);
            void channel.track(presence(classId));
          } else {
            joined.current.delete(classId);
          }
        });
        channels.current.set(classId, channel);
        created.push(channel);
      }
      const lessons = supabase
        .channel(`student-lessons:${userId}`)
        .on(
          "postgres_changes",
          { event: "*", schema: "public", table: "class_lessons", filter: `class_id=in.(${ids.join(",")})` },
          (change) => {
            const row = change.new as { class_id?: string; lesson_id?: string; status?: string; opened_at?: string };
            if (!row?.class_id || !row.lesson_id) return;
            const signature = isNewlyOpened(row, seen.current.get(row.class_id) ?? null);
            if (row.status === "live" && row.opened_at) {
              setLiveNow((prev) => new Map(prev).set(row.class_id!, { lessonId: row.lesson_id!, openedAt: row.opened_at! }));
            }
            if (signature) {
              seen.current.set(row.class_id, signature);
              openLesson(row.class_id, row.lesson_id);
              return;
            }
            // Sections finished, lesson finished…: refresh the class or lesson page.
            if (path.current.startsWith(`/classes/${row.class_id}`)) router.refresh();
          },
        )
        .subscribe((s) => update("lessons", toStatus(s)));
      created.push(lessons);
    })();

    const offline = () => update("browser", "offline");
    const online = () => update("browser", "online");
    window.addEventListener("offline", offline);
    window.addEventListener("online", online);
    // A phone that slept may have missed messages: reload the page data on waking up.
    let hiddenAt = 0;
    const visibility = () => {
      if (document.visibilityState === "hidden") hiddenAt = Date.now();
      else if (hiddenAt && Date.now() - hiddenAt > 20_000) router.refresh();
    };
    document.addEventListener("visibilitychange", visibility);
    const map = channels.current;
    const joinedSet = joined.current;
    return () => {
      joinedSet.clear();
      cancelled = true;
      window.removeEventListener("offline", offline);
      window.removeEventListener("online", online);
      document.removeEventListener("visibilitychange", visibility);
      created.forEach((c) => void supabase.removeChannel(c));
      map.clear();
    };
    // `classes` is represented by classKey; t/router are stable enough for a subscription.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [classKey, supabase, userId]);

  const setLocation = useCallback(
    (loc: Location) => {
      const prev = location.current;
      location.current = loc;
      for (const classId of new Set([prev?.classId, loc?.classId])) {
        if (!classId) continue;
        // Not joined yet: the join itself shares the latest location.
        const channel = channels.current.get(classId);
        if (channel && joined.current.has(classId)) void channel.track(presence(classId));
      }
    },
    [presence],
  );

  const onMessage = useCallback((listener: (m: LiveMessage) => void) => {
    listeners.current.add(listener);
    return () => {
      listeners.current.delete(listener);
    };
  }, []);

  const value = useMemo(() => ({ status, setLocation, onMessage }), [status, setLocation, onMessage]);

  // A lesson opened in the last hours that the student is not in yet.
  const join = [...liveNow.entries()].find(
    ([classId, l]) =>
      isRecent(l.openedAt) &&
      `${l.lessonId}@${l.openedAt}` !== dismissed &&
      !pathname.startsWith(lessonPath(classId, l.lessonId)),
  );
  return (
    <Ctx.Provider value={value}>
      {join && (
        <JoinBanner
          name={classes.find((c) => c.id === join[0])?.name ?? ""}
          href={lessonPath(join[0], join[1].lessonId)}
          onClose={() => setDismissed(`${join[1].lessonId}@${join[1].openedAt}`)}
        />
      )}
      {children}
    </Ctx.Provider>
  );
}
