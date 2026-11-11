import { z } from "zod";
import type { ExerciseDefinition } from "../../definition";

// Rich text as Tiptap/ProseMirror JSON, limited to the formatting the editor offers.
export const HIGHLIGHT_COLORS = ["#fef08a", "#bbf7d0", "#bfdbfe", "#fbcfe8"] as const;

const markSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("bold") }),
  z.object({ type: z.literal("italic") }),
  z.object({ type: z.literal("underline") }),
  z.object({
    type: z.literal("highlight"),
    attrs: z.object({ color: z.enum(HIGHLIGHT_COLORS).nullable().optional() }).optional(),
  }),
]);

type Node = {
  type: string;
  attrs?: Record<string, unknown>;
  content?: Node[];
  marks?: z.infer<typeof markSchema>[];
  text?: string;
};

const BLOCKS = ["paragraph", "heading", "bulletList", "orderedList", "listItem", "blockquote"] as const;

const nodeSchema: z.ZodType<Node> = z.lazy(() =>
  z.union([
    z.object({
      type: z.literal("text"),
      text: z.string().min(1).max(20000),
      marks: z.array(markSchema).max(10).optional(),
    }),
    z.object({ type: z.literal("hardBreak") }),
    z.object({
      type: z.enum(BLOCKS),
      attrs: z
        .object({
          level: z.union([z.literal(2), z.literal(3)]).optional(),
          start: z.number().int().min(0).max(10000).optional(),
          type: z.string().max(10).nullable().optional(),
        })
        .optional(),
      content: z.array(nodeSchema).max(2000).optional(),
    }),
  ]),
);

export const textDocSchema = z.object({
  type: z.literal("doc"),
  content: z.array(nodeSchema).max(2000),
});
export type TextDoc = z.infer<typeof textDocSchema>;

export const textContentSchema = z.object({ doc: textDocSchema });
export type TextContent = z.infer<typeof textContentSchema>;

export const textDefinition: ExerciseDefinition<TextContent, null> = {
  id: "text",
  contentSchema: textContentSchema,
  keySchema: null,
  create: () => ({ content: { doc: { type: "doc", content: [{ type: "paragraph" }] } }, key: null }),
};
