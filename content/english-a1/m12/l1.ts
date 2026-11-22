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
  table,
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 12.1 Where were you? — G: was / were (+ − ?); yesterday, last…, ago. Main format: reading (weekend chats) + listening.
export default lesson("a1-12.1", "Where were you?", () => [
  section("Warm-up: Where was I?", [
    box("Today you will…", "- talk about the past: *I was… We were…*\n- use *yesterday, last weekend, two days ago*\n- say where you were 📍"),
    quiz("Read and guess: Where was I? 🕵️", [
      { q: "There were a lot of books. It was very quiet. 🤫", options: ["*at the library", "at a concert", "at the gym"] },
      { q: "There was a big screen and a lot of popcorn. 🍿", options: ["*at the cinema", "at school", "at the bank"] },
      { q: "It was hot. There was sand and water. ☀️🌊", options: ["*at the beach", "at the museum", "at the supermarket"] },
      { q: "There was loud music and a lot of people. They were happy and dancing. 🎉", options: ["*at a party", "at the doctor's", "at the library"] },
    ]),
    tip("This is the first lesson about the past! Start with the warm-up as a guessing game — the grammar comes later."),
    text("Talk to your teacher.", "- Where were you yesterday evening? 🌙\n- Was it a good day?"),
  ]),

  section("Vocabulary: Time in the past", [
    words("Time in the past", [
      ["yesterday", "⏮️ the day before today", "I was at home yesterday."],
      ["yesterday morning / evening", "🌅 / 🌙"],
      ["last night", "🌙 yesterday evening and night"],
      ["last weekend / week / month / year", "📅", "Where were you last weekend?"],
      ["… ago", "⏪ two days ago, a week ago, five years ago"],
      ["in 2020 / in May", "🗓️"],
      ["at home — at school — at work", "🏠 — 🏫 — 💼"],
      ["at a party — at a concert", "🎉 — 🎤"],
      ["at my grandma's", "👵🏠 at my grandma's house"],
      ["on holiday", "🏖️ 🇺🇸 on vacation"],
    ]),
    order("Put in order: from the past to now ⏪➡️", ["a year ago\nlast month\nlast week\nyesterday\ntoday"], "lines"),
    match("Match.", [
      ["the day before today", "yesterday"],
      ["7 days ago", "last week"],
      ["yesterday evening", "last night"],
      ["Saturday and Sunday before", "last weekend"],
    ]),
  ]),

  section("Grammar: was / were", [
    table("was-were"),
    choose(
      "Choose.",
      "1. I [*was/were] at home yesterday.\n2. We [was/*were] at the cinema last night.\n3. She [*wasn't/weren't] at school on Monday.\n4. [*Were/Was] you at the party?\n5. Was it good? — Yes, it [*was/were]!",
    ),
    gaps("Complete with was, were, wasn't or weren't.", "1. My friends [were] at the beach. ✅\n2. It [was] sunny and hot. ✅\n3. I [wasn't] with them. ❌\n4. We [weren't] at home last weekend. ❌"),
    drag(
      "Complete the dialogue.",
      "A: Where [were] you last Saturday?\nB: I [was] at a concert! 🎤\nA: Cool! [Was] it good?\nB: Yes, it [was]. My friends [were] there too.",
      ["are", "is"],
    ),
  ]),

  section("Reading: Weekend chat", [
    picture("Last weekend…", ["photos/w-sun.jpg", "photos/fan-concert.jpg"]),
    trueFalse(
      "Read the group chat. True or false?",
      [
        ["Dana was at the beach last weekend.", true],
        ["The weather at the beach was cold.", false],
        ["Arman was at a concert.", true],
        ["Leo was at a party.", false],
        ["Leo's grandma was 80 on Sunday.", true],
      ],
      {
        read: [
          "## 💬 Class chat — Monday morning",
          "**Dana:** Hi, guys! Where were you last weekend? I was at the beach with my family! ☀️ It was sunny and hot — 30 degrees!",
          "**Arman:** Lucky you! 😎 I was at a concert on Saturday. It was amazing! There were 20,000 people! 🎤",
          "**Leo:** I wasn't at a concert or at the beach… 😅 I was at my grandma's on Sunday. It was her birthday — she was 80! 🎂",
          "**Dana:** Aww! Was it a big party?",
          "**Leo:** Yes, it was! There were 30 people. The cake was delicious! 😋",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "How many people were at the concert?", options: ["*20,000", "30", "80"] },
      { q: "How was the cake?", options: ["*delicious", "terrible", "small"] },
    ]),
  ]),

  section("Listening: Where were you?", [
    ...listening(
      "Listen. Mia calls Leo on Monday.",
      "**Mia:** Leo! Where were you yesterday? You weren't at the gym!\n\n**Leo:** Sorry, Mia! I was ill. I was in bed all day. 🤒\n\n**Mia:** Oh no! Were you at the doctor's?\n\n**Leo:** Yes, I was. It was only a cold. I'm OK now.\n\n**Mia:** Good! And where were you last Friday? Your phone was off!\n\n**Leo:** I was at the cinema with my brother. The film was very long — three hours! 🍿\n\n**Mia:** Three hours?! Was it good?\n\n**Leo:** Hmm… it was OK. 😅",
    ),
    quiz("Listen and choose.", [
      { q: "Where was Leo yesterday?", options: ["*in bed", "at the gym", "at the cinema"] },
      { q: "Was he at the doctor's?", options: ["*Yes, he was.", "No, he wasn't."] },
      { q: "Where was he last Friday?", options: ["*at the cinema", "at a party", "at home"] },
      { q: "How long was the film?", options: ["*three hours", "two hours", "one hour"] },
    ]),
  ]),

  section("Let's talk: Where were you?", [
    text(
      "Game: Find someone who was… 🔍",
      "Ask your teacher, then answer yourself:\n\n*Where were you…*\n- *… yesterday at 8 p.m.?*\n- *… last Saturday?*\n- *… on your last birthday?*\n- *… a year ago in summer?*\n- *… at 7 a.m. today?* 😴\n\n*Were you at home? Was it fun? Who were you with?*",
    ),
    text("Talk to your teacher.", "- What was the best day of last month? Why? 🌟\n- Were you on holiday last summer? Where?\n- Was your last weekend boring or fun?"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "They ___ at the party.", options: ["*were", "was", "are"] },
      { q: "___ you at home yesterday?", options: ["*Were", "Was", "Did"] },
      { q: "the day before today =", options: ["*yesterday", "tomorrow", "last week"] },
    ]),
    box("Word of the day: throwback", "**a throwback** 📸⏪ = an old photo or memory you share. Next lesson is all about it!\n\n*#ThrowbackThursday — me ten years ago!*"),
  ]),

  homework(
    [
      gaps("Complete with was or were.", "1. I [was] tired yesterday.\n2. My parents [were] at work.\n3. The film [was] great!\n4. [Were] you at school last Monday?"),
      choose("Choose.", "1. She [*wasn't/weren't] at home.\n2. We [*were/was] on holiday last July.\n3. Two days [*ago/last] I was at the dentist."),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      video("Watch the A1 lesson: was and were.", "lBT0dun2LK8"),
      trueFalse("Correct or not?", [
        ["I were at home.", false],
        ["Was she at the party?", true],
        ["They wasn't tired.", false],
        ["We were at the beach last weekend.", true],
      ]),
    ],
    "Homework: Video",
  ),
  homework(
    [
      write("Write a message to the class chat: Where were you last weekend? Who were you with? How was it? (35+ words)", 35, {
        read: "*Example:* Hi, everyone! Last Saturday I was at the mall with my friends. It was fun! There were a lot of people. On Sunday I was at home. It was rainy and I was tired. My weekend wasn't exciting, but it was relaxing! 😌",
      }),
      record("Record your answer: Where were you yesterday at 9 a.m., at 3 p.m. and at 8 p.m.?", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
