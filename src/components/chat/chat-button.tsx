"use client";

import { Loader2, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { loadChat } from "@/features/chat/actions";
import type { ChatData } from "@/features/chat/types";
import { ClassChat } from "./class-chat";

/**
 * "Chat" in a lesson's top bar: the number of unread messages, the class's
 * chat in a side panel. The chat keeps listening while closed, so the number
 * stays current.
 */
export function ChatButton({
  classId,
  className,
  me,
  isTeacher,
  initialUnread,
}: {
  classId: string;
  className: string;
  me: string;
  isTeacher: boolean;
  initialUnread: number;
}) {
  const t = useTranslations("chat");
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<ChatData | null>(null);
  const [unread, setUnread] = useState(initialUnread);

  useEffect(() => {
    let alive = true;
    void loadChat(classId).then((d) => alive && setData(d));
    return () => {
      alive = false;
    };
  }, [classId]);

  const label = unread > 0 ? t("buttonUnread", { count: unread }) : t("button");
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <Button variant="outline" size="sm" className="relative" aria-label={label} title={label} onClick={() => setOpen(true)}>
        <MessageCircle aria-hidden="true" />
        <span className="max-md:sr-only">{t("button")}</span>
        {unread > 0 && (
          <span className="absolute -top-1.5 -right-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-semibold text-white tabular-nums" aria-hidden="true">
            {unread > 99 ? "99+" : unread}
          </span>
        )}
      </Button>
      <SheetContent side="right" className="w-full gap-0 p-0 sm:max-w-md" forceMount>
        <SheetHeader className="border-b">
          <SheetTitle>{t("title", { name: className })}</SheetTitle>
          <SheetDescription className="sr-only">{t("hint")}</SheetDescription>
        </SheetHeader>
        {data ? (
          <ClassChat data={data} me={me} isTeacher={isTeacher} visible={open} onUnread={setUnread} className="flex-1" />
        ) : (
          <div className="flex flex-1 items-center justify-center">
            <Loader2 className="size-5 animate-spin text-muted-foreground" aria-hidden="true" />
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
