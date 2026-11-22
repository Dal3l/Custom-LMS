import {
  box,
  choose,
  drag,
  gaps,
  homework,
  lesson,
  listening,
  match,
  order,
  picture,
  quiz,
  record,
  section,
  sort,
  table,
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 5.2 Study and work online — G: don't; Do you…? Yes, I do.; What / Where / When do you…? V: work and study. Main format: listening (interviews).
export default lesson("a1-5.2", "Study and work online", () => [
  section("Warm-up: Guess my job", [
    box("Today you will…", "- talk about work and study online\n- say *I don't…*\n- ask *Do you…? What / Where / When do you…?*"),
    quiz("Guess my job! 🕵️", [
      { q: "💻 I work at home. I write code. I fix apps.", options: ["*a programmer", "a doctor", "a driver"] },
      { q: "🎨 I draw logos and websites. My clients are in different countries.", options: ["*a designer", "a teacher", "a cook"] },
      { q: "🎥 I make videos. I have 100,000 followers.", options: ["*a blogger", "an engineer", "a nurse"] },
      { q: "👩‍🏫 I teach English on Zoom. My students are in 5 countries.", options: ["*an online teacher", "a student", "a pilot"] },
    ]),
    text("Talk to your teacher.", "- Do you know people who work at home? What do they do? 🏠\n- Online lessons or lessons in a classroom — what do you like? 💻🏫"),
  ]),

  section("Vocabulary: Work and study", [
    words("Work and study", [
      ["work from home", "🏠💻", "I work from home on Monday."],
      ["work in an office", "🏢"],
      ["study online", "💻📚"],
      ["have a meeting", "👥 a work talk"],
      ["have a video call", "📹 Zoom, Teams, Google Meet"],
      ["take a course", "🎓 an online course", "I take an English course."],
      ["send emails", "📧"],
      ["check messages", "💬"],
      ["take a break", "☕ stop and rest a little"],
      ["a laptop — a headset", "💻 — 🎧🎤"],
      ["a colleague", "👥 a person from your work"],
      ["a client", "🤝 a person who pays for your work"],
    ]),
    picture("Work from home: two styles 😄", ["photos/work-home.jpg", "photos/work-bed.jpg"], "At a desk or in bed? 🤔"),
    match("Match.", [
      ["have a", "video call"],
      ["send", "emails"],
      ["take a", "break"],
      ["work from", "home"],
      ["study", "online"],
    ]),
    sort("School / university or work? Sort.", {
      "📚 Study": ["a teacher", "homework", "a course", "an exam"],
      "💼 Work": ["a colleague", "a client", "a meeting", "an office"],
    }),
  ]),

  section("Listening: Online life", [
    tip("Read the two interviews with the student, or read them as a podcast host. Pause after each one."),
    ...listening(
      "Listen to the podcast. Two people talk about their online life.",
      "**Host:** Hi! Today we talk about online life. Our first guest is Asel. Asel, what do you do?\n\n**Asel:** I'm a designer. I work from home. My clients are in the USA and in Germany.\n\n**Host:** When do you start work?\n\n**Asel:** I start at 11, because my clients are in a different time zone. I don't work in the morning. I go to the gym! 🏋️\n\n**Host:** Do you have meetings?\n\n**Asel:** Yes, I do. We have video calls every Monday.\n\n**Host:** Thanks! And our second guest is Tom. Tom, do you work?\n\n**Tom:** No, I don't. I'm a student. I study IT online.\n\n**Host:** Where do you study?\n\n**Tom:** At home or in a café. ☕ I don't like libraries!\n\n**Host:** Do you see your classmates?\n\n**Tom:** Not often. We chat online every day, and we meet on Saturday.",
    ),
    quiz("Listen and choose.", [
      { q: "Asel is…", options: ["*a designer", "a student", "a teacher"] },
      { q: "Asel starts work at…", options: ["*11", "9", "7"] },
      { q: "Tom studies…", options: ["*IT", "English", "design"] },
      { q: "Tom studies…", options: ["*at home or in a café", "in a library", "in an office"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Asel's clients are in the USA and Germany.", true],
      ["Asel works in the morning.", false],
      ["Tom has a job.", false],
      ["Tom and his classmates meet on Saturday.", true],
    ]),
  ]),

  section("Grammar: don't, Do you…?", [
    table("ps-questions"),
    choose(
      "Choose.",
      "1. I [*don't/doesn't] work on Sunday.\n2. [*Do/Are] you study online?\n3. Do you have meetings? — Yes, I [*do/am].\n4. Do they work from home? — No, they [*don't/aren't].",
    ),
    gaps("Make it negative ❌.", "1. I work in an office. → I [don't/do not] work in an office.\n2. We have a meeting. → We [don't/do not] have a meeting.\n3. They study online. → They [don't/do not] study online."),
    drag(
      "Complete the questions.",
      "1. [What] do you do? — I'm a programmer.\n2. [Where] do you work? — At home.\n3. [When] do you start? — At 10.\n4. [Do] you like your job? — Yes, I do!",
      ["Who", "Does"],
    ),
    order("Make questions.", ["Where do you study?", "When do you finish work?", "Do you have video calls?"]),
  ]),

  section("Let's talk: Interview", [
    text(
      "Interview your teacher 🎤",
      "Ask your teacher about their work. Use these questions:\n\n- *What do you do?*\n- *Where do you work?*\n- *When do you start and finish?*\n- *Do you work from home?*\n- *Do you have meetings?*\n- *Do you like your job?*\n\nThen your teacher asks you about your study or work!",
    ),
    text(
      "Talk to your teacher.",
      "- Work from home: good or bad? Why? 👍👎\n- Do you study better at home or at school?\n- What's your dream job? Is it online? 🌍",
    ),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "___ you work from home?", options: ["*Do", "Are", "Does"] },
      { q: "What do you do? =", options: ["*What's your job?", "What are you doing now?", "What's your name?"] },
      { q: "I ___ work on Sunday.", options: ["*don't", "not", "am not"] },
    ]),
    box("Word of the day: remote", "**remote** work = you work from home or from anywhere 🌍💻\n\n*I have a remote job. I work from Almaty, and my company is in London.*"),
  ]),

  homework(
    [
      gaps("Complete.", "1. I have a video [call] at 10.\n2. I send [emails] in the morning.\n3. Let's take a [break]! ☕\n4. I work [from] home on Friday."),
      match("Match the questions and the answers.", [
        ["What do you do?", "I'm a student."],
        ["Where do you study?", "At home."],
        ["When do you start?", "At 9 o'clock."],
        ["Do you like it?", "Yes, I do!"],
      ]),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      choose("Choose.", "1. [*Do/Are] you have a laptop?\n2. We [*don't/not] have lessons on Sunday.\n3. [*Where/What] do you work? — In an office.\n4. Do you study online? — No, I [*don't/do]."),
      trueFalse("Correct or not?", [
        ["I don't like video calls.", true],
        ["Do you works at home?", false],
        ["What you do?", false],
        ["When do you finish work?", true],
      ]),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      video("Watch the first 3 minutes: a day of a remote worker. When does he start work?", "lB3WPZNwYFA"),
      write("What things do you see in the video? Write 5 words: *a laptop, coffee…*", null),
    ],
    "Homework: Video",
  ),
  homework(
    [
      write("Write about your study or work: What do you do? Where? When? What do you like / don't like? (40+ words)", 40, {
        read: "*Example:* I'm a student. I study at school and I take an English course online. My lessons start at 8 and finish at 2. I do homework at home. I don't like early mornings, but I like my online course — we have video calls on Tuesday and Thursday.",
      }),
      record("Record your answers to 4 questions: What do you do? Where do you study or work? When do you start? Do you like it?", 90),
    ],
    "Homework: Writing and speaking",
  ),
]);
