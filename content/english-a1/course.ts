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
    { title: "People in my life", lessons: [l31, l32, l33, l34] },
    { title: "My space", lessons: [l41, l42, l43, l44] },
    { title: "Day by day", lessons: [l51, l52, l53, l54] },
    { title: "Habits", lessons: [l61, l62, l63, l64] },
    { title: "Skills and tech", lessons: [l71, l72, l73, l74] },
    { title: "Likes", lessons: [l81, l82, l83, l84] },
    { title: "My city", lessons: [l91, l92, l93, l94] },
    { title: "Right now", lessons: [l101, l102, l103, l104] },
  ],
};
