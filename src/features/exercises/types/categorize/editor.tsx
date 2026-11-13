"use client";

import { Plus, Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { FieldDescription } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { ExerciseEditorProps } from "../../client-types";
import { newItemId } from "../../item-id";
import { buildCategorize, itemsOf, MAX_GROUPS, type CategorizeContent, type CategorizeKey } from "./schema";

type Group = CategorizeKey["groups"][number];

export function CategorizeEditor({ value, onChange }: ExerciseEditorProps<CategorizeContent, CategorizeKey>) {
  const t = useTranslations("exercises.categorize");
  const key = value.key!;
  const emit = (groups: Group[]) => onChange(buildCategorize({ ...key, groups }));
  const patch = (id: string, p: Partial<Group>) => emit(key.groups.map((g) => (g.id === id ? { ...g, ...p } : g)));

  return (
    <div className="flex flex-col gap-2">
      <FieldDescription>{t("hint")}</FieldDescription>
      <div className="grid gap-2 sm:grid-cols-2">
        {key.groups.map((g, i) => (
          <div key={g.id} className="flex flex-col gap-1.5 rounded-lg border p-2">
            <div className="flex items-center gap-1">
              <Input
                value={g.title}
                onChange={(e) => patch(g.id, { title: e.target.value.slice(0, 100) })}
                placeholder={t("titlePlaceholder", { n: i + 1 })}
                aria-label={t("title", { n: i + 1 })}
                className="font-medium"
              />
              {key.groups.length > 2 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="size-8 shrink-0"
                  aria-label={t("removeGroup", { n: i + 1 })}
                  onClick={() => emit(key.groups.filter((x) => x.id !== g.id))}
                >
                  <Trash2 aria-hidden="true" />
                </Button>
              )}
            </div>
            <Textarea
              value={g.items}
              onChange={(e) => patch(g.id, { items: e.target.value.slice(0, 5000) })}
              placeholder={t("itemsPlaceholder")}
              aria-label={t("items", { n: i + 1 })}
              rows={4}
            />
            <span className="text-xs text-muted-foreground">{t("count", { count: itemsOf(g.items).length })}</span>
          </div>
        ))}
      </div>
      {key.groups.length < MAX_GROUPS && (
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="w-fit"
          onClick={() => emit([...key.groups, { id: newItemId(), title: "", items: "" }])}
        >
          <Plus aria-hidden="true" />
          {t("addGroup")}
        </Button>
      )}
    </div>
  );
}
