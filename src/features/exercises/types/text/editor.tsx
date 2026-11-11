"use client";

import { EditorContent, useEditor, useEditorState, type Editor } from "@tiptap/react";
import {
  Bold,
  Heading2,
  Heading3,
  Highlighter,
  Italic,
  List,
  ListOrdered,
  Underline,
  type LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import type { ExerciseEditorProps } from "../../client-types";
import { textExtensions } from "./extensions";
import { HIGHLIGHT_COLORS, type TextContent, type TextDoc } from "./schema";

export function TextEditor({ value, onChange }: ExerciseEditorProps<TextContent, null>) {
  const t = useTranslations("exercises.text");
  // Tiptap keeps the callbacks it was created with; always call the newest onChange.
  const onChangeRef = useRef(onChange);
  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);
  const editor = useEditor({
    extensions: textExtensions,
    content: value.content.doc,
    immediatelyRender: false, // avoids a server/browser mismatch
    editorProps: {
      attributes: {
        class: "rich-text min-h-24 rounded-b-lg px-3 py-2 outline-none",
        "aria-label": t("placeholder"),
      },
    },
    onUpdate: ({ editor }) => onChangeRef.current({ content: { doc: editor.getJSON() as TextDoc }, key: null }),
  });

  return (
    <div className="rounded-lg border bg-background focus-within:ring-3 focus-within:ring-ring/50">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}

function Toolbar({ editor }: { editor: Editor | null }) {
  const t = useTranslations("exercises.text");
  const state = useEditorState({
    editor,
    selector: ({ editor: e }) =>
      e
        ? {
            h2: e.isActive("heading", { level: 2 }),
            h3: e.isActive("heading", { level: 3 }),
            bold: e.isActive("bold"),
            italic: e.isActive("italic"),
            underline: e.isActive("underline"),
            bullet: e.isActive("bulletList"),
            ordered: e.isActive("orderedList"),
            highlight: e.isActive("highlight"),
          }
        : null,
  });

  const buttons: { key: string; label: string; Icon: LucideIcon; active?: boolean; run: (e: Editor) => void }[] = [
    { key: "h2", label: t("heading"), Icon: Heading2, active: state?.h2, run: (e) => e.chain().focus().toggleHeading({ level: 2 }).run() },
    { key: "h3", label: t("subheading"), Icon: Heading3, active: state?.h3, run: (e) => e.chain().focus().toggleHeading({ level: 3 }).run() },
    { key: "bold", label: t("bold"), Icon: Bold, active: state?.bold, run: (e) => e.chain().focus().toggleBold().run() },
    { key: "italic", label: t("italic"), Icon: Italic, active: state?.italic, run: (e) => e.chain().focus().toggleItalic().run() },
    { key: "underline", label: t("underline"), Icon: Underline, active: state?.underline, run: (e) => e.chain().focus().toggleUnderline().run() },
    { key: "bullet", label: t("bulletList"), Icon: List, active: state?.bullet, run: (e) => e.chain().focus().toggleBulletList().run() },
    { key: "ordered", label: t("orderedList"), Icon: ListOrdered, active: state?.ordered, run: (e) => e.chain().focus().toggleOrderedList().run() },
  ];

  return (
    <div className="flex flex-wrap items-center gap-0.5 border-b p-1" role="toolbar" aria-label={t("toolbar")}>
      {buttons.map(({ key, label, Icon, active, run }) => (
        <Button
          key={key}
          type="button"
          variant="ghost"
          size="icon"
          className={cn("size-8", active && "bg-accent text-accent-foreground")}
          aria-label={label}
          aria-pressed={Boolean(active)}
          title={label}
          disabled={!editor}
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => editor && run(editor)}
        >
          <Icon aria-hidden="true" />
        </Button>
      ))}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className={cn("size-8", state?.highlight && "bg-accent text-accent-foreground")}
            aria-label={t("highlight")}
            title={t("highlight")}
            disabled={!editor}
          >
            <Highlighter aria-hidden="true" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="min-w-0">
          <div className="flex gap-1 p-1">
            {HIGHLIGHT_COLORS.map((color, i) => (
              <DropdownMenuItem
                key={color}
                className="size-8 justify-center p-0"
                aria-label={t(`color${i + 1}` as "color1")}
                onSelect={() => editor?.chain().focus().setHighlight({ color }).run()}
              >
                <span className="size-5 rounded-full border" style={{ backgroundColor: color }} />
              </DropdownMenuItem>
            ))}
          </div>
          <DropdownMenuItem onSelect={() => editor?.chain().focus().unsetHighlight().run()}>
            {t("noHighlight")}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
