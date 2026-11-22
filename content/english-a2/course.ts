// English A2 — the course loaded into the library (see docs/courses/english-a2/).
// Loaded with: node --env-file=.env.local scripts/content/run.mjs english-a2
import type { CourseFile } from "../../scripts/content/load";
import l01 from "./m00/l0";
import l11 from "./m01/l1";
import l12 from "./m01/l2";
import l13 from "./m01/l3";
import l14 from "./m01/l4";
import l21 from "./m02/l1";
import l22 from "./m02/l2";
import l23 from "./m02/l3";
import l24 from "./m02/l4";

export const course: CourseFile = {
  id: "5b0c2f7e-8a41-4d6e-9c3b-2e7a1f6d4a92",
  title: "English A2",
  language: "en",
  level: "A2",
  cover: "cover.png",
  firstModule: 0,
  description:
    "English after A1 for teens (12+) and adults: stories about the past, plans and the future, experiences, advice and rules. An entry test + 12 modules × 4 lessons, 60 minutes each + homework. Ready for the Cambridge A2 Key format.",
  modules: [
    { title: "Start: A1 check", lessons: [l01] },
    { title: "Back in time", lessons: [l11, l12, l13, l14] },
    { title: "Stories", lessons: [l21, l22, l23, l24] },
  ],
};
