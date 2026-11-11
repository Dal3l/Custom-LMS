"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Props = {
  value: string;
  editing: boolean;
  onEditingChange: (editing: boolean) => void;
  onSave: (title: string) => void;
  className?: string;
  /** What to show when not editing (e.g. a link). Defaults to the plain title. */
  children?: React.ReactNode;
};

/**
 * Title that turns into a text field while `editing` is true.
 * Enter or leaving the field saves, Escape cancels.
 */
export function InlineTitle({ value, editing, children, className, ...rest }: Props) {
  if (!editing) {
    return <span className={cn("min-w-0 flex-1 truncate", className)}>{children ?? value}</span>;
  }
  // Mounted fresh each time editing starts, so the draft always begins at the current title.
  return <TitleInput value={value} className={className} {...rest} />;
}

function TitleInput({
  value,
  onEditingChange,
  onSave,
  className,
}: Omit<Props, "editing" | "children">) {
  const t = useTranslations("courses");
  const [draft, setDraft] = useState(value);

  function finish(save: boolean) {
    const title = draft.trim();
    onEditingChange(false);
    if (save && title && title !== value) onSave(title.slice(0, 200));
  }

  return (
    <Input
      autoFocus
      aria-label={t("titleField")}
      value={draft}
      maxLength={200}
      onChange={(e) => setDraft(e.target.value)}
      onFocus={(e) => e.currentTarget.select()}
      onBlur={() => finish(true)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          finish(true);
        } else if (e.key === "Escape") {
          e.preventDefault();
          finish(false);
        }
      }}
      className={cn("h-8 min-w-0 flex-1", className)}
    />
  );
}
