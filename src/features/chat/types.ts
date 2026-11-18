// Chat data shared by the server and the browser.

export type ChatMessage = {
  id: string;
  classId: string;
  authorId: string;
  body: string;
  filePath: string | null;
  fileName: string | null;
  fileType: string | null;
  fileSize: number | null;
  createdAt: string;
  deletedAt: string | null;
};

export type ChatPerson = { id: string; name: string; isTeacher: boolean };

export type ChatData = {
  classId: string;
  messages: ChatMessage[];
  /** who has read up to when: user id → time */
  reads: Record<string, string>;
  people: Record<string, ChatPerson>;
  /** there may be older messages than these */
  hasOlder: boolean;
};

export const PAGE = 50;
export const MAX_FILE = 20 * 1024 * 1024;

export const MESSAGE_COLUMNS = "id, class_id, author_id, body, file_path, file_name, file_type, file_size, created_at, deleted_at";

export type MessageRow = {
  id: string;
  class_id: string;
  author_id: string;
  body: string;
  file_path: string | null;
  file_name: string | null;
  file_type: string | null;
  file_size: number | null;
  created_at: string;
  deleted_at: string | null;
};

export function toMessage(r: MessageRow): ChatMessage {
  return {
    id: r.id,
    classId: r.class_id,
    authorId: r.author_id,
    body: r.body,
    filePath: r.file_path,
    fileName: r.file_name,
    fileType: r.file_type,
    fileSize: r.file_size,
    createdAt: r.created_at,
    deletedAt: r.deleted_at,
  };
}

/** Adds / replaces messages by id, keeps them in time order. */
export function mergeMessages(list: ChatMessage[], more: ChatMessage[]): ChatMessage[] {
  const byId = new Map(list.map((m) => [m.id, m]));
  for (const m of more) byId.set(m.id, m);
  return [...byId.values()].sort((a, b) => a.createdAt.localeCompare(b.createdAt) || a.id.localeCompare(b.id));
}

/** How many of the others have read a message (their mark is at or after it). */
export function readBy(message: ChatMessage, reads: Record<string, string>): number {
  return Object.entries(reads).filter(([user, at]) => user !== message.authorId && at >= message.createdAt).length;
}

/** A file name safe for storage paths. */
export function safeFileName(name: string): string {
  const clean = name.normalize("NFKD").replace(/[^\w.-]+/g, "_").replace(/_+/g, "_").slice(-100);
  return clean || "file";
}
