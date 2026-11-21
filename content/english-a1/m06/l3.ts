import {
  box,
  choose,
  drag,
  gaps,
  homework,
  lesson,
  match,
  quiz,
  record,
  section,
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 6.3 Celebrity routines — skills lesson: reading real, widely reported facts about famous people's routines; review of module 6. Main format: reading + video.
export default lesson("a1-6.3", "Celebrity routines", () => [
  section("Warm-up: Famous days", [
    box("Today you will…", "- read about the routines of famous people\n- compare their day and your day\n- review *he / she + s, doesn't, always / never*"),
    text(
      "Talk to your teacher.",
      "- What time do famous people get up, do you think? Early or late? ⏰\n- What does a famous footballer do every day? ⚽\n- What does a president do in the evening? 🏛️\n- Do you want a famous person's life? Why / why not? 🤔",
    ),
  ]),

  section("Vocabulary: Routines", [
    words("Routines", [
      ["early — late", "🌅 at 5 a.m. — 🌙 at 1 a.m."],
      ["a nap", "😴 a short sleep in the day"],
      ["work out", "🏋️ do exercise in a gym", "He works out every morning."],
      ["cardio", "🏃 running, cycling — your heart works fast"],
      ["a CEO", "💼 the boss of a big company"],
      ["a president", "🏛️ the leader of a country"],
      ["emails", "📧", "She reads emails at 6 a.m."],
      ["a snack", "🥜 a little food between meals"],
      ["healthy", "🥗 good for your body"],
      ["busy", "😵 a lot of work"],
    ]),
    match("Match.", [
      ["work", "out"],
      ["take a", "nap"],
      ["get up", "early"],
      ["read", "emails"],
      ["a healthy", "snack"],
    ]),
  ]),

  section("Reading: How do they start the day?", [
    tip("These are facts from interviews and news articles — famous people's routines can change. Read one person at a time and ask: *What time does he get up? What does he do first?*"),
    quiz(
      "Read about four famous people. Choose.",
      [
        { q: "Who gets up at about 4 a.m. and does cardio?", options: ["*Dwayne Johnson", "Barack Obama", "Cristiano Ronaldo"] },
        { q: "Who reads emails before 4 a.m.?", options: ["*Tim Cook", "Dwayne Johnson", "Barack Obama"] },
        { q: "Who sleeps a few times a day?", options: ["*Cristiano Ronaldo", "Tim Cook", "Dwayne Johnson"] },
        { q: "Who finishes the day late?", options: ["*Barack Obama", "Tim Cook", "Dwayne Johnson"] },
      ],
      {
        read: [
          "## ⏰ How famous people start the day",
          "**🏋️ Dwayne “The Rock” Johnson** is an actor. He gets up very early — at about 4 a.m. First he does cardio, then he works out in the gym. He calls his gym the “Iron Paradise”. He often posts his workouts online.",
          "**💼 Tim Cook** is the CEO of Apple. In interviews, he says he gets up before 4 a.m. He reads emails and messages from Apple customers first. Then he goes to the gym.",
          "**⚽ Cristiano Ronaldo** is a famous footballer. Newspapers say he doesn't sleep one long time at night. He sleeps a few times a day — about 90 minutes each time. He eats healthy food and trains every day.",
          "**🏛️ Barack Obama** was the US president from 2009 to 2017. He's a “night owl” 🦉 — he likes working late in the evening. As president, his day usually finished late — at about 1 a.m.",
        ].join("\n\n"),
      },
    ),
    trueFalse("Read again. True or false?", [
      ["The Rock works out in the evening.", false],
      ["Tim Cook reads emails from customers.", true],
      ["Ronaldo sleeps 8 hours at night.", false],
      ["Obama is a night owl.", true],
    ]),
    text("Talk to your teacher.", "- Whose routine is the most interesting for you? Why?\n- Are you an early bird 🐦 or a night owl 🦉?\n- Can you get up at 4 a.m.? 😅"),
  ]),

  section("Video: I tried celebrity routines", [
    video("Watch the first 3–4 minutes. A YouTuber tries the morning routines of famous people. What does she do?", "dfGWPhHnd94"),
    text("Talk to your teacher.", "- What time does she get up?\n- What's easy and what's difficult for her? 😵\n- Do you want to try a celebrity routine? Which one?"),
  ]),

  section("Review: Module 6", [
    choose(
      "Choose.",
      "1. The Rock [*gets/get] up at 4 a.m.\n2. Ronaldo [*doesn't/don't] sleep 8 hours at night.\n3. [*Does/Do] Tim Cook read emails?\n4. Obama [*often works/works often] late.\n5. I [*never get/get never] up at 4!",
    ),
    gaps("Complete with the right form.", "1. Tim Cook [goes] to the gym. (go)\n2. Ronaldo [trains] every day. (train)\n3. The Rock [doesn't] work out in the evening. (not)\n4. [Does] Obama go to bed early? — No, he doesn't."),
    drag(
      "Compare: me and The Rock.",
      "The Rock [gets] up at 4. I [get] up at 8. He [works] out every day. I [sometimes] work out. He [doesn't] eat fast food, but I do! 🍔",
      ["get", "work", "don't"],
    ),
  ]),

  section("Let's talk: Me and a celebrity", [
    text(
      "Compare your routine 🆚",
      "Choose one famous person from the text. Compare:\n\n*He gets up at 4, but I get up at 8. He works out every day — I never work out! We both… 😄*",
    ),
    text(
      "Invent a routine 🦸",
      "Invent a day for your favorite singer, gamer or character: *She gets up at noon. She has pizza for breakfast…*\n\nYour teacher asks: *What does she do in the evening? Does she…?*",
    ),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "a short sleep in the day =", options: ["*a nap", "a snack", "cardio"] },
      { q: "a person who works late at night =", options: ["*a night owl", "an early bird", "a CEO"] },
      { q: "He ___ get up late.", options: ["*doesn't", "don't", "isn't"] },
    ]),
    box("Word of the day: early bird", "**an early bird** 🐦🌅 = a person who gets up early.\n\n*The early bird catches the worm.* — a famous English saying: people who start early are successful!"),
  ]),

  homework(
    [
      gaps("Complete.", "1. A short sleep in the day: a [nap]\n2. The boss of a big company: a [CEO]\n3. He gets up at 5. He's an early [bird].\n4. He works out in the [gym]."),
      trueFalse("From the lesson: true or false?", [
        ["Tim Cook is the CEO of Apple.", true],
        ["The Rock calls his gym the “Iron Paradise”.", true],
        ["As president, Obama's day finished at 9 p.m.", false],
      ]),
    ],
    "Homework: Vocabulary and reading",
  ),
  homework(
    [
      video("Watch: morning routines of successful people. Write down 3 habits.", "mc7XC1psZCM"),
      write("Write 3 habits from the video: *He / She always… often… never…*", null),
    ],
    "Homework: Video",
  ),
  homework(
    [
      write("Compare your routine with a famous person's routine. (40+ words)", 40, {
        read: "*Example:* Tim Cook gets up before 4 a.m., but I get up at 7:30. He reads emails first, and I check Instagram first! 😅 He goes to the gym, but I don't — I go to school. He's an early bird, and I'm a night owl. I usually go to bed at midnight.",
      }),
      record("Record your answer: Are you an early bird or a night owl? Describe your morning.", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
