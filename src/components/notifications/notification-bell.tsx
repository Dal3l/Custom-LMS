"use client";

import { Bell, CheckCheck, ClipboardCheck, ClipboardList, MessageSquare, Send } from "lucide-react";
import { useFormatter, useNow, useTranslations } from "next-intl";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { listNotifications, markNotificationsRead } from "@/features/notifications/actions";
import { notificationHref, type NotificationItem, type NotificationKind } from "@/features/notifications/links";
import { Link, usePathname } from "@/i18n/navigation";
import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";

const ICON: Record<NotificationKind, typeof Bell> = {
  homework_assigned: ClipboardList,
  homework_updated: ClipboardList,
  homework_comment: MessageSquare,
  homework_reviewed: ClipboardCheck,
  homework_submitted: Send,
};

/**
 * The bell in the top bar: how many unread notifications, the list in a
 * popover. Updates live; after a lost connection it reloads the list.
 */
export function NotificationBell({ userId, initialUnread }: { userId: string; initialUnread: number }) {
  const t = useTranslations("notifications");
  const format = useFormatter();
  const now = useNow({ updateInterval: 60_000 });
  const pathname = usePathname();
  const [supabase] = useState(() => createClient());
  const [open, setOpen] = useState(false);
  const [unread, setUnread] = useState(initialUnread);
  const [items, setItems] = useState<NotificationItem[] | null>(null);
  const request = useRef(0);

  const refresh = useCallback(async () => {
    const id = ++request.current;
    try {
      const r = await listNotifications();
      // Only the latest answer counts (several refreshes may overlap).
      if (id !== request.current) return;
      setItems(r.items);
      setUnread(r.unread);
    } catch {
      // Offline: keep what we have; the next event or reconnect reloads.
    }
  }, []);

  // A page may have just marked some as read (e.g. the homework it shows).
  useEffect(() => {
    const timer = setTimeout(() => void refresh(), 300);
    return () => clearTimeout(timer);
  }, [pathname, refresh]);

  // Live: any change to my notifications reloads them. Reconnecting reloads too.
  useEffect(() => {
    let cancelled = false;
    let channel: ReturnType<typeof supabase.channel> | null = null;
    void (async () => {
      await supabase.realtime.setAuth();
      if (cancelled) return;
      channel = supabase
        .channel(`notifications:${userId}`)
        .on("postgres_changes", { event: "*", schema: "public", table: "notifications", filter: `user_id=eq.${userId}` }, () => {
          void refresh();
        })
        .subscribe((status) => {
          if (status === "SUBSCRIBED") void refresh();
        });
    })();
    const onFocus = () => void refresh();
    window.addEventListener("focus", onFocus);
    window.addEventListener("online", onFocus);
    return () => {
      cancelled = true;
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("online", onFocus);
      if (channel) void supabase.removeChannel(channel);
    };
  }, [supabase, userId, refresh]);

  function message(n: NotificationItem) {
    const values = { lesson: n.lessonTitle, student: n.studentName || t("noName") };
    switch (n.kind) {
      case "homework_assigned":
        return t("assigned", values);
      case "homework_updated":
        return t("updated", values);
      case "homework_comment":
        return t("comment", values);
      case "homework_reviewed":
        return t("reviewed", values);
      case "homework_submitted":
        return t("submitted", values);
    }
  }

  function readAll() {
    setUnread(0);
    setItems((list) => list?.map((n) => ({ ...n, read: true })) ?? null);
    void markNotificationsRead().then(refresh);
  }

  const label = unread > 0 ? t("labelUnread", { count: unread }) : t("label");

  return (
    <Popover
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (next) void refresh();
      }}
    >
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative size-10" aria-label={label} title={label}>
          <Bell className="size-5" aria-hidden="true" />
          {unread > 0 && (
            <span
              className="absolute top-1 right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-600 px-1 text-[10px] leading-none font-semibold text-white tabular-nums"
              aria-hidden="true"
            >
              {unread > 99 ? "99+" : unread}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-[min(24rem,calc(100vw-1.5rem))] p-0">
        <div className="flex items-center gap-2 border-b px-3 py-2">
          <h2 className="flex-1 text-sm font-semibold">{t("title")}</h2>
          {unread > 0 && (
            <Button variant="ghost" size="sm" onClick={readAll}>
              <CheckCheck aria-hidden="true" />
              {t("readAll")}
            </Button>
          )}
        </div>
        {items === null ? (
          <p className="px-3 py-8 text-center text-sm text-muted-foreground">{t("loading")}</p>
        ) : items.length === 0 ? (
          <p className="px-3 py-8 text-center text-sm text-muted-foreground">{t("empty")}</p>
        ) : (
          <ul className="max-h-[min(28rem,70svh)] overflow-y-auto py-1" aria-label={t("title")}>
            {items.map((n) => {
              const Icon = ICON[n.kind];
              return (
                <li key={n.id}>
                  <Link
                    href={notificationHref(n)}
                    onClick={() => {
                      setOpen(false);
                      if (!n.read) {
                        setUnread((c) => Math.max(0, c - 1));
                        void markNotificationsRead([n.id]).then(refresh);
                      }
                    }}
                    className={cn("flex gap-3 px-3 py-2.5 text-sm transition-colors hover:bg-accent", !n.read && "bg-primary/5")}
                  >
                    <span
                      className={cn(
                        "mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full",
                        n.read ? "bg-muted text-muted-foreground" : "bg-primary/10 text-primary",
                      )}
                    >
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                      <span className={cn("break-words", !n.read && "font-medium")}>{message(n)}</span>
                      <span className="text-xs text-muted-foreground">
                        {n.className} · {format.relativeTime(new Date(n.createdAt), now)}
                      </span>
                    </span>
                    {!n.read && (
                      <span className="mt-2 size-2 shrink-0 rounded-full bg-primary">
                        <span className="sr-only">{t("unread")}</span>
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </PopoverContent>
    </Popover>
  );
}
