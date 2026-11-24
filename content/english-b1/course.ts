// English B1 — the course loaded into the library (see docs/courses/english-b1/).
// Loaded with: node --env-file=.env.local scripts/content/run.mjs english-b1
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
import l31 from "./m03/l1";
import l32 from "./m03/l2";
import l33 from "./m03/l3";
import l34 from "./m03/l4";
import l41 from "./m04/l1";
import l42 from "./m04/l2";
import l43 from "./m04/l3";
import l44 from "./m04/l4";
import l51 from "./m05/l1";
import l52 from "./m05/l2";
import l53 from "./m05/l3";
import l54 from "./m05/l4";
import l61 from "./m06/l1";
import l62 from "./m06/l2";
import l63 from "./m06/l3";
import l64 from "./m06/l4";
import l71 from "./m07/l1";
import l72 from "./m07/l2";
import l73 from "./m07/l3";
import l74 from "./m07/l4";
import l81 from "./m08/l1";
import l82 from "./m08/l2";
import l83 from "./m08/l3";
import l84 from "./m08/l4";
import l91 from "./m09/l1";
import l92 from "./m09/l2";
import l93 from "./m09/l3";
import l94 from "./m09/l4";
import l101 from "./m10/l1";
import l102 from "./m10/l2";
import l103 from "./m10/l3";
import l104 from "./m10/l4";
import l111 from "./m11/l1";
import l112 from "./m11/l2";
import l113 from "./m11/l3";
import l114 from "./m11/l4";
import l121 from "./m12/l1";
import l122 from "./m12/l2";
import l123 from "./m12/l3";
import l124 from "./m12/l4";

export const course: CourseFile = {
  id: "10811520-58c5-4bfa-aa9e-f2ef58411c7c",
  title: "English B1",
  language: "en",
  level: "B1",
  cover: "cover.png",
  firstModule: 0,
  description:
    "English after A2 for teens (14+) and adults: work and study, media and fake news, relationships, dilemmas and the future. An entry test + 12 modules × 4 lessons, 60 minutes each + homework. Ready for the Cambridge B1 Preliminary format.",
  modules: [
    { title: "Start: A2 check", lessons: [l01] },
    { title: "Who I am now", lessons: [l11, l12, l13, l14] },
    { title: "Stories", lessons: [l21, l22, l23, l24] },
    { title: "Then and now", lessons: [l31, l32, l33, l34] },
    { title: "Future you", lessons: [l41, l42, l43, l44] },
    { title: "Work and study", lessons: [l51, l52, l53, l54] },
    { title: "Media", lessons: [l61, l62, l63, l64] },
    { title: "Relationships", lessons: [l71, l72, l73, l74] },
    { title: "What if?", lessons: [l81, l82, l83, l84] },
    { title: "Who said what?", lessons: [l91, l92, l93, l94] },
    { title: "Mysteries", lessons: [l101, l102, l103, l104] },
    { title: "Changing the world", lessons: [l111, l112, l113, l114] },
    { title: "Looking back", lessons: [l121, l122, l123, l124] },
  ],
};
