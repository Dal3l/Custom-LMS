"use client";

import { BookOpenCheck, Presentation } from "lucide-react";
import { useTranslations } from "next-intl";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { UserRole } from "@/lib/supabase/database.types";

const OPTIONS: { role: UserRole; Icon: typeof Presentation }[] = [
  { role: "teacher", Icon: Presentation },
  { role: "student", Icon: BookOpenCheck },
];

/** Two big cards: "Teacher" / "Student". Submits as the `role` form field. */
export function RolePicker({
  defaultValue,
  invalid,
}: {
  defaultValue?: string;
  invalid?: boolean;
}) {
  const t = useTranslations("roles");
  return (
    <RadioGroup
      name="role"
      defaultValue={defaultValue || undefined}
      className="grid grid-cols-1 gap-3 sm:grid-cols-2"
      aria-invalid={invalid || undefined}
      aria-describedby={invalid ? "role-error" : undefined}
      required
    >
      {OPTIONS.map(({ role, Icon }) => (
        <label
          key={role}
          htmlFor={`role-${role}`}
          className="flex cursor-pointer items-start gap-3 rounded-xl border bg-card p-4 transition-colors hover:bg-accent has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-accent"
        >
          <RadioGroupItem id={`role-${role}`} value={role} className="mt-1" />
          <span className="flex flex-col gap-1">
            <span className="flex items-center gap-2 font-medium">
              <Icon className="size-4 text-primary" aria-hidden="true" />
              {t(role)}
            </span>
            <span className="text-sm text-muted-foreground">{t(`${role}Description`)}</span>
          </span>
        </label>
      ))}
    </RadioGroup>
  );
}
