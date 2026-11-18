"use client";

import { AlertCircle, Check, CheckCheck, CloudOff, FileText, Loader2, MessageCircle, MoreHorizontal, Paperclip, RotateCcw, Send, Trash2, X } from "lucide-react";
import { useFormatter, useTranslations } from "next-intl";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import { deleteChatMessage } from "@/features/chat/actions";
import { MAX_FILE, readBy, type ChatData, type ChatMessage, type ChatPerson } from "@/features/chat/types";
import { useChat, type Outgoing } from "@/features/chat/use-chat";
import { cn } from "@/lib/utils";

/**
 * A class's chat: messages by day, own on the right; pictures and files;
 * "read" marks; live, with a "no connection" notice while offline.
 */
export function ClassChat({
  data,
  me,
  isTeacher,
  visible = true,
  onUnread,
  className,
}: {
  data: ChatData;
  me: string;
  /** the class teacher may delete any message */
  isTeacher: boolean;
  /** the chat is on screen: messages count as read */
  visible?: boolean;
  /** how many unread messages (for a badge while the chat is hidden) */
  onUnread?: (count: number) => void;
  className?: string;
}) {
  const t = useTranslations("chat");
  const format = useFormatter();
  const chat = useChat(data, me);
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loadingOlder, setLoadingOlder] = useState(false);
  const list = useRef<HTMLDivElement>(null);
  const fileInput = useRef<HTMLInputElement>(null);
  const stick = useRef(true);
  const group = Object.keys(data.people).length > 2;

  // Unread: others' messages after my mark.
  const myMark = chat.reads[me] ?? "";
  const unread = chat.messages.filter((m) => m.authorId !== me && !m.deletedAt && m.createdAt > myMark).length;
  useEffect(() => onUnread?.(visible ? 0 : unread), [unread, visible, onUnread]);
  useEffect(() => {
    if (visible && unread > 0) void chat.markRead();
  }, [visible, unread, chat]);

  // Keep the newest message in view (unless the user scrolled up to read).
  useLayoutEffect(() => {
    const el = list.current;
    if (el && stick.current) el.scrollTop = el.scrollHeight;
  }, [chat.messages.length, chat.outgoing.length, visible]);

  function submit(e?: React.FormEvent) {
    e?.preventDefault();
    if (!text.trim() && !file) return;
    stick.current = true;
    chat.send(text, file);
    setText("");
    setFile(null);
  }

  async function remove(m: ChatMessage) {
    const r = await deleteChatMessage(m.id);
    if (!r.ok) toast.error(t("failed"));
  }

  const dayOf = (iso: string) => format.dateTime(new Date(iso), { day: "numeric", month: "long", weekday: "short" });

  return (
    <div className={cn("flex min-h-0 flex-col", className)}>
      {chat.status === "offline" && (
        <p className="flex items-center gap-2 border-b bg-destructive/10 px-3 py-1.5 text-sm text-destructive" role="status">
          <CloudOff className="size-4" aria-hidden="true" />
          {t("offline")}
        </p>
      )}
      <div
        ref={list}
        className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto px-3 py-3"
        role="log"
        aria-label={t("messages")}
        onScroll={(e) => {
          const el = e.currentTarget;
          stick.current = el.scrollHeight - el.scrollTop - el.clientHeight < 80;
        }}
      >
        {chat.hasOlder && (
          <Button
            variant="ghost"
            size="sm"
            className="self-center text-muted-foreground"
            disabled={loadingOlder}
            onClick={async () => {
              stick.current = false;
              setLoadingOlder(true);
              await chat.loadOlder();
              setLoadingOlder(false);
            }}
          >
            {loadingOlder && <Loader2 className="animate-spin" aria-hidden="true" />}
            {t("older")}
          </Button>
        )}
        {chat.messages.length === 0 && chat.outgoing.length === 0 && (
          <div className="m-auto flex flex-col items-center gap-2 py-10 text-center text-muted-foreground">
            <MessageCircle className="size-8" aria-hidden="true" />
            <p>{t("empty")}</p>
          </div>
        )}
        {chat.messages.map((m, i) => {
          const day = dayOf(m.createdAt);
          const showDay = i === 0 || dayOf(chat.messages[i - 1]!.createdAt) !== day;
          return (
            <div key={m.id} className="flex flex-col">
              {showDay && <p className="my-2 self-center rounded-full bg-muted px-3 py-0.5 text-xs text-muted-foreground first-letter:uppercase">{day}</p>}
              <Bubble
                m={m}
                own={m.authorId === me}
                author={data.people[m.authorId]}
                group={group}
                read={readBy(m, chat.reads)}
                others={Object.keys(data.people).length - 1}
                canDelete={!m.deletedAt && (m.authorId === me || isTeacher)}
                onDelete={() => void remove(m)}
                fileUrl={chat.fileUrl}
              />
            </div>
          );
        })}
        {chat.outgoing.map((o) => (
          <Pending key={o.tempId} item={o} onRetry={() => chat.retry(o.tempId)} onDiscard={() => chat.discard(o.tempId)} />
        ))}
      </div>
      <form onSubmit={submit} className="flex flex-col gap-2 border-t p-2">
        {file && (
          <div className="flex items-center gap-2 rounded-lg bg-muted px-2 py-1 text-sm">
            <FileText className="size-4 shrink-0" aria-hidden="true" />
            <span className="min-w-0 flex-1 truncate">{file.name}</span>
            <Button type="button" variant="ghost" size="icon-sm" aria-label={t("removeFile")} onClick={() => setFile(null)}>
              <X aria-hidden="true" />
            </Button>
          </div>
        )}
        <div className="flex items-end gap-1">
          <input
            ref={fileInput}
            type="file"
            className="hidden"
            aria-label={t("attach")}
            onChange={(e) => {
              const f = e.target.files?.[0] ?? null;
              e.target.value = "";
              if (f && f.size > MAX_FILE) return void toast.error(t("tooBig"));
              setFile(f);
            }}
          />
          <Button type="button" variant="ghost" size="icon" aria-label={t("attach")} title={t("attach")} onClick={() => fileInput.current?.click()}>
            <Paperclip aria-hidden="true" />
          </Button>
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
                e.preventDefault();
                submit();
              }
            }}
            rows={1}
            maxLength={4000}
            placeholder={t("placeholder")}
            aria-label={t("message")}
            className="max-h-32 min-h-10 flex-1 resize-none"
          />
          <Button type="submit" size="icon" aria-label={t("send")} disabled={!text.trim() && !file}>
            <Send aria-hidden="true" />
          </Button>
        </div>
      </form>
    </div>
  );
}

function Bubble({
  m,
  own,
  author,
  group,
  read,
  others,
  canDelete,
  onDelete,
  fileUrl,
}: {
  m: ChatMessage;
  own: boolean;
  author?: ChatPerson;
  group: boolean;
  read: number;
  others: number;
  canDelete: boolean;
  onDelete: () => void;
  fileUrl: (path: string) => Promise<string | null>;
}) {
  const t = useTranslations("chat");
  const format = useFormatter();
  const time = format.dateTime(new Date(m.createdAt), { hour: "2-digit", minute: "2-digit" });
  return (
    <div className={cn("group flex max-w-[85%] items-start gap-1", own ? "self-end flex-row-reverse" : "self-start")}>
      <div
        className={cn(
          "flex min-w-0 flex-col gap-1 rounded-2xl px-3 py-2 text-sm",
          own ? "rounded-br-sm bg-primary text-primary-foreground" : "rounded-bl-sm bg-muted",
          m.deletedAt && "bg-transparent text-muted-foreground italic ring-1 ring-border",
        )}
      >
        {!own && (group || author?.isTeacher) && (
          <span className={cn("text-xs font-medium", author?.isTeacher ? "text-primary" : "text-muted-foreground")}>
            {author?.name ? author.name : author?.isTeacher ? t("teacherName") : t("someone")}
            {author?.isTeacher && author.name && ` · ${t("teacher")}`}
          </span>
        )}
        {m.deletedAt ? (
          <span>{t("deleted")}</span>
        ) : (
          <>
            {m.filePath && <Attachment path={m.filePath} name={m.fileName ?? ""} type={m.fileType ?? ""} size={m.fileSize ?? 0} own={own} fileUrl={fileUrl} />}
            {m.body && <p className="break-words whitespace-pre-wrap">{m.body}</p>}
          </>
        )}
        <span className={cn("flex items-center justify-end gap-1 text-[11px]", own ? "text-primary-foreground/80" : "text-muted-foreground")}>
          {time}
          {own && !m.deletedAt && (read > 0 ? (
            <span className="flex items-center gap-0.5" title={group ? t("readCount", { count: read, total: others }) : t("read")}>
              <CheckCheck className="size-3.5" aria-label={group ? t("readCount", { count: read, total: others }) : t("read")} />
              {group && <span className="tabular-nums">{read}</span>}
            </span>
          ) : (
            <Check className="size-3.5" aria-label={t("sent")} />
          ))}
        </span>
      </div>
      {canDelete && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon-sm" className="opacity-60 group-hover:opacity-100" aria-label={t("actions")}>
              <MoreHorizontal aria-hidden="true" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align={own ? "end" : "start"}>
            <DropdownMenuItem variant="destructive" onSelect={onDelete}>
              <Trash2 aria-hidden="true" />
              {t("delete")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
}

/** A picture shown in the chat; any other file as a link with its name and size. */
function Attachment({
  path,
  name,
  type,
  size,
  own,
  fileUrl,
}: {
  path: string;
  name: string;
  type: string;
  size: number;
  own: boolean;
  fileUrl: (path: string) => Promise<string | null>;
}) {
  const t = useTranslations("chat");
  const [url, setUrl] = useState<string | null>(null);
  useEffect(() => {
    let alive = true;
    void fileUrl(path).then((u) => alive && setUrl(u));
    return () => {
      alive = false;
    };
  }, [path, fileUrl]);
  const kb = size < 1024 * 1024 ? t("kb", { n: Math.max(1, Math.round(size / 1024)) }) : t("mb", { n: (size / 1024 / 1024).toFixed(1) });
  if (type.startsWith("image/")) {
    return url ? (
      <a href={url} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg">
        {/* eslint-disable-next-line @next/next/no-img-element -- a short-lived private link */}
        <img src={url} alt={name} className="max-h-60 w-auto max-w-full object-contain" />
      </a>
    ) : (
      <span className="flex h-24 w-40 items-center justify-center rounded-lg bg-black/5">
        <Loader2 className="size-4 animate-spin" aria-hidden="true" />
      </span>
    );
  }
  return (
    <a
      href={url ?? undefined}
      target="_blank"
      rel="noopener noreferrer"
      download={name}
      className={cn("flex items-center gap-2 rounded-lg px-2 py-1.5", own ? "bg-primary-foreground/15" : "bg-background")}
    >
      <FileText className="size-5 shrink-0" aria-hidden="true" />
      <span className="flex min-w-0 flex-col">
        <span className="truncate font-medium">{name}</span>
        <span className="text-[11px] opacity-80">{kb}</span>
      </span>
    </a>
  );
}

function Pending({ item, onRetry, onDiscard }: { item: Outgoing; onRetry: () => void; onDiscard: () => void }) {
  const t = useTranslations("chat");
  return (
    <div className="flex max-w-[85%] flex-col items-end gap-1 self-end">
      <div className={cn("flex flex-col gap-1 rounded-2xl rounded-br-sm px-3 py-2 text-sm", item.failed ? "bg-destructive/10 text-destructive" : "bg-primary/70 text-primary-foreground")}>
        {item.file && (
          <span className="flex items-center gap-1">
            <FileText className="size-4" aria-hidden="true" />
            {item.file.name}
          </span>
        )}
        {item.body && <p className="break-words whitespace-pre-wrap">{item.body}</p>}
        {!item.failed && (
          <span className="flex items-center justify-end gap-1 text-[11px]">
            <Loader2 className="size-3 animate-spin" aria-hidden="true" />
            {t("sending")}
          </span>
        )}
      </div>
      {item.failed && (
        <span className="flex items-center gap-1 text-xs text-destructive" role="alert">
          <AlertCircle className="size-3.5" aria-hidden="true" />
          {t("notSent")}
          <Button variant="ghost" size="sm" className="h-6 px-2" onClick={onRetry}>
            <RotateCcw aria-hidden="true" />
            {t("retry")}
          </Button>
          <Button variant="ghost" size="icon-sm" className="size-6" aria-label={t("discard")} onClick={onDiscard}>
            <X aria-hidden="true" />
          </Button>
        </span>
      )}
    </div>
  );
}
