"use client";

import { useTranslations } from "next-intl";
import { Whiteboard } from "@/features/board/board-surface";
import { blockBoard } from "@/features/board/items";
import type { ExerciseViewerProps } from "../../client-types";
import { Caption } from "../../caption-input";
import type { WhiteboardContent } from "./schema";

export function WhiteboardViewer({ content, exerciseId }: ExerciseViewerProps<WhiteboardContent>) {
  const t = useTranslations("exercises.whiteboard");
  return (
    <div className="flex flex-col gap-2">
      <Caption text={content.caption} />
      <Whiteboard board={blockBoard(exerciseId ?? "00000000-0000-0000-0000-000000000000")} label={t("label")} />
    </div>
  );
}
