import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";

// The same extensions for editing and viewing, matching textDocSchema.
export const textExtensions = [
  StarterKit.configure({
    heading: { levels: [2, 3] },
    code: false,
    codeBlock: false,
    strike: false,
    horizontalRule: false,
    link: false,
  }),
  Highlight.configure({ multicolor: true }),
];
