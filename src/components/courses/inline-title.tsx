"use client";

import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Props = {
  value: string;
  editing: boolean;
  onEditingChange: (editing: boolean) => void;
  onSave: (title: string) => void;
  /** Called instead of onSave when the user cancels (Escape or an empty title). */
  onCancel?: () => void;
  /** Save even if the title was not changed (used for brand-new items). */
  saveUnchanged?: boolean;
  className?: string;
  /** What to show when not editing (e.g. a link). Defaults to the plain title. */
  children?: React.ReactNode;
};

/**
 * Title that turns into a text field while `editing` is true.
 * The ✓ button, Enter or clicking elsewhere saves; Escape cancels.
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
  onCancel,
  saveUnchanged,
  className,
}: Omit<Props, "editing" | "children">) {
  const t = useTranslations("courses");
  const [draft, setDraft] = useState(value);
  const [done, setDone] = useState(false);

  function finish(save: boolean) {
    if (done) return; // blur fires after Enter / ✓ — handle only once
    setDone(true);
    const title = draft.trim().slice(0, 200);
    onEditingChange(false);
    if (save && title && (saveUnchanged || title !== value)) onSave(title);
    else if (!save || !title) onCancel?.();
  }

  return (
    <div className="flex min-w-0 flex-1 items-center gap-1">
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
      <Button
        type="button"
        size="icon"
        className="size-8 shrink-0"
        aria-label={t("save")}
        // Keep focus in the field so blur does not fire before the click.
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => finish(true)}
      >
        <Check aria-hidden="true" />
      </Button>
    </div>
  );
}
