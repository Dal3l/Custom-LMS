import { z } from "zod";
import type { ExerciseDefinition } from "../../definition";
import { captionSchema } from "../../media";

// A whiteboard block inside a lesson: in a class everyone draws on it together
// (saved in board_items), elsewhere it is a scratch board.
export const whiteboardContentSchema = z.object({ caption: captionSchema });
export type WhiteboardContent = z.infer<typeof whiteboardContentSchema>;

export const whiteboardDefinition: ExerciseDefinition<WhiteboardContent, null> = {
  id: "whiteboard",
  contentSchema: whiteboardContentSchema,
  keySchema: null,
  create: () => ({ content: { caption: "" }, key: null }),
};
