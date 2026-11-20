// English A1 — the course loaded into the library (see docs/courses/english-a1/).
// Loaded with: node --env-file=.env.local scripts/content/run.mjs english-a1
import type { CourseFile } from "../../scripts/content/load";
import l11 from "./m01/l1";
import l12 from "./m01/l2";
import l13 from "./m01/l3";
import l14 from "./m01/l4";
import l21 from "./m02/l1";
import l22 from "./m02/l2";
import l23 from "./m02/l3";
import l24 from "./m02/l4";

export const course: CourseFile = {
  id: "ed41ba8e-00d0-46e3-8314-6ed35197aeff",
  title: "English A1",
  language: "en",
  level: "A1",
  description:
    "English from zero for teens (12+) and adults: modern topics — social media, generations, AI, streaming, apps. 12 modules × 4 lessons, 60 minutes each + homework.",
  modules: [
    { title: "Hello, world!", lessons: [l11, l12, l13, l14] },
    { title: "My stuff", lessons: [l21, l22, l23, l24] },
  ],
};
