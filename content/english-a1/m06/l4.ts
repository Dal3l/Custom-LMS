import {
  box,
  choose,
  drag,
  gaps,
  homework,
  lesson,
  listening,
  match,
  matchPictures,
  order,
  quiz,
  record,
  section,
  sort,
  text,
  tip,
  trueFalse,
  write,
} from "../../kit";

// 6.4 Revision 5–6 — skills tasks with scores + the project "My usual day" (a story or a video).
export default lesson("a1-6.4", "Revision 5–6", () => [
  section("Warm-up: Find the mistake", [
    box(
      "Today you will…",
      "- review modules 5 and 6: *Present Simple, don't / doesn't, Do / Does…?, always / never, in / on / at*\n- check your vocabulary, grammar, reading and listening — get points! ⭐\n- start your project: **My usual day**",
    ),
    trueFalse("Correct or not? Find the mistakes! 🔍", [
      ["She play games every day.", false],
      ["I don't drink coffee.", true],
      ["Does he works from home?", false],
      ["We often go to the cinema.", true],
      ["I get up in 7 o'clock.", false],
      ["He always is late.", false],
    ]),
    tip("Like in other revision lessons, tasks give points. After the warm-up, ask the student to correct the wrong sentences out loud."),
  ]),

  section("Vocabulary", [
    sort("Sort the words.", {
      "🌅 Routine": ["get up", "have a shower", "go to bed", "get dressed"],
      "💻 Work and study": ["a meeting", "a colleague", "a course", "send emails"],
      "☕ Café": ["a latte", "a croissant", "to go", "medium"],
    }),
    matchPictures("Match the pictures and the words.", [
      ["photos/day-alarm.jpg", "an alarm clock"],
      ["photos/work-home.jpg", "work from home"],
      ["photos/cafe-cappuccino.jpg", "a cappuccino"],
      ["photos/hab-run.jpg", "do sport"],
      ["photos/screen-apps.jpg", "apps"],
    ]),
    match("Match.", [
      ["have", "a video call"],
      ["take", "a break"],
      ["turn off", "notifications"],
      ["go", "live"],
      ["do", "homework"],
    ]),
  ]),

  section("Grammar", [
    choose(
      "Choose.",
      "1. I [*get/gets] up at 7.\n2. My mom [*works/work] from home.\n3. We [*don't/doesn't] have lessons on Sunday.\n4. She [*doesn't/don't] eat meat.\n5. [*Do/Does] you play games?\n6. [*Does/Do] your brother cook?",
    ),
    gaps("Write the he / she form.", "1. watch → [watches]\n2. go → [goes]\n3. study → [studies]\n4. have → [has]"),
    choose("in, on or at?", "1. [*on/in/at] Monday\n2. [*at/on/in] 8 o'clock\n3. [*in/on/at] the evening\n4. [*at/in/on] night"),
    drag(
      "Complete the text.",
      "My sister Dana [is] a designer. She [works] from home. She [usually] starts at 10. She [doesn't] like early mornings! [On] Friday she meets friends [at] a café.",
      ["work", "in", "don't"],
    ),
    order("Make questions.", ["What time do you get up?", "How often does she do sport?", "Where do you work?"]),
  ]),

  section("Reading", [
    trueFalse(
      "Read the post. True or false?",
      [
        ["Marat is a nurse.", true],
        ["He works at night.", true],
        ["He has breakfast at 8 a.m.", true],
        ["He never sleeps in the day.", false],
        ["On his free days he goes to the mountains.", true],
      ],
      {
        read: [
          "## 🌙 My upside-down day — by Marat",
          "I'm a nurse in a hospital in Almaty. I work at night, so my day is upside down! 🙃",
          "I start work at 8 p.m. and I finish at 7 a.m. At 8 a.m. I come home and have breakfast — but for me it's dinner! 😄",
          "Then I sleep from 9 a.m. to 3 p.m. My family is very quiet in the day. 🤫",
          "In the afternoon, I go to the gym or I cook. I usually have lunch with my wife at 5.",
          "I work four nights a week. On my free days, I always go to the mountains with my friends. 🏔️",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Marat finishes work at…", options: ["*7 a.m.", "8 p.m.", "3 p.m."] },
      { q: "He sleeps from…", options: ["*9 a.m. to 3 p.m.", "11 p.m. to 7 a.m.", "8 p.m. to 8 a.m."] },
      { q: "How many nights a week does he work?", options: ["*four", "five", "seven"] },
    ]),
  ]),

  section("Listening", [
    tip("Read the script at normal speed once, then once more slowly."),
    ...listening(
      "Listen. Mia asks Leo about his week.",
      "**Mia:** Leo, you're always busy! What do you do every week?\n\n**Leo:** Well, I go to school from Monday to Friday. On Monday and Wednesday, I have football practice at 5. ⚽\n\n**Mia:** And on Tuesday?\n\n**Leo:** On Tuesday, I have an online English course. We have a video call at 7 p.m.\n\n**Mia:** Do you work?\n\n**Leo:** Yes, I do! On Saturday, I work in a coffee shop. I make lattes! ☕\n\n**Mia:** Cool! And on Sunday?\n\n**Leo:** On Sunday, I sleep. I never get up before 12! 😴",
    ),
    quiz("Listen and choose.", [
      { q: "Leo has football practice on…", options: ["*Monday and Wednesday", "Tuesday and Thursday", "Saturday"] },
      { q: "His English course is on…", options: ["*Tuesday", "Friday", "Sunday"] },
      { q: "On Saturday, he…", options: ["*works in a coffee shop", "plays football", "sleeps"] },
      { q: "On Sunday, he gets up…", options: ["*after 12", "at 7", "at 9"] },
    ]),
  ]),

  section("Speaking and writing", [
    text(
      "Speaking: tell your teacher 🗣️",
      "Talk for 1–2 minutes:\n\n- your usual weekday: times, school / work, after school / work\n- one person in your family: *He / She usually… never…*\n- your habits: *I always… I sometimes… I never…*\n\nYour teacher asks 3 questions!",
    ),
    match("Match the questions and the answers.", [
      ["What do you do?", "I'm a student."],
      ["How often do you do sport?", "Twice a week."],
      ["Does she work from home?", "Yes, she does."],
      ["Can I have a latte, please?", "Sure! What size?"],
    ]),
  ]),

  section("Project: My usual day", [
    box(
      "Your project 🚀",
      "Make a story or a short video: **My usual day** (or **A day of…** — a family member, a friend, a character).\n\n1. **Morning:** what time? what do you do first?\n2. **Day:** school, work, online study, lunch\n3. **Evening:** hobbies, screen time, dinner, bed\n4. **Habits:** *I always… I never…*\n5. **Weekend:** how is it different?\n\nAdd photos, or film it like a “day in the life” video! 🎥",
    ),
    text("Plan your project. Talk to your teacher.", "- Story or video? 📝🎥\n- About you or about another person?\n- What's the most interesting part of your day?"),
  ]),

  homework(
    [
      write("Project: My usual day (or a day of another person). (70+ words)", 70, {
        read: "*Example:* I usually get up at 7. I have a shower and I have breakfast with my mom — usually eggs and tea. I go to school by bus. My lessons start at 8:30 and finish at 2. After school, I have lunch and I do homework. On Monday and Thursday, I go to the gym. In the evening, I chat with friends and watch a series. I never go to bed before 11! On the weekend, I get up late and meet my friends in a café.",
      }),
      record("Project video: “A day in my life” — tell or show your usual day (1–2 minutes).", 120),
    ],
    "Homework: Project",
  ),
  homework(
    [
      gaps("Review: complete.", "1. She [doesn't/does not] like coffee.\n2. [Does] he work on Saturday?\n3. I get up [at] 7.\n4. We meet [on] Friday.\n5. He [watches] TV every evening. (watch)"),
      choose("Choose.", "1. I [*always have/have always] breakfast.\n2. Can I [*have/has] a tea, please?\n3. How often [*does/do] she cook?"),
      quiz("Choose.", [
        { q: "🇬🇧 take away = 🇺🇸 …", options: ["*to go", "for here", "the check"] },
        { q: "My screen time ___ 5 hours a day.", options: ["*is", "are", "has"] },
      ]),
    ],
    "Homework: Review",
  ),
]);
