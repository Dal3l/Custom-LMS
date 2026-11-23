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

// 4.1 What are you going to do? — G: be going to (plans, intentions; predictions from what we see). V: goals and new habits. Say it right: gonna. S: talk about your plans. Main format: a card game + reading (goal posts) + a long listening (a podcast, ~2.5 min). No video in class.
export default lesson("a2-4.1", "What are you going to do?", () => [
  section("Warm-up: My next 12 months", [
    box("Today you will…", "- talk about your plans and goals: *I'm going to…* 🎯\n- talk about good and bad habits\n- be a “goal coach” for your teacher 💪"),
    text(
      "Game: Choose 3 cards 🃏",
      "Which 3 cards are about you this year? Choose and explain — in any English you can!\n\n🏃 get fit · 💰 save money · 🚗 learn to drive · 📵 spend less time on my phone · 🎸 start a new hobby · ✈️ travel somewhere new · 📚 read more books · 😴 go to bed earlier · 🧑‍🍳 learn to cook · 💼 find a (better) job · 🎓 pass an important exam · 🗣️ speak English better\n\n*I chose “save money” because I want to buy…*",
    ),
    text(
      "Talk to your teacher.",
      "- Do you make plans for the new year — or do you just live? 😄\n- What's a habit you are proud of? And one you want to stop? 🙈\n- Who in your family or among your friends always does what they plan? How do they do it?",
    ),
    tip("Choose your 3 cards too and tell the student about them — it makes the talk real. Don't teach *going to* yet: just listen. If the student says *I will…* or *I want…*, that's fine for now."),
  ]),

  section("Vocabulary: Goals and habits", [
    words("Goals and habits", [
      ["get fit", "🏃 become healthy and strong", "I'm going to get fit this year."],
      ["save money (for…)", "💰", "She's saving money for a car."],
      ["learn to drive", "🚗"],
      ["take up (a hobby)", "🎸 start a new hobby", "I'm going to take up yoga."],
      ["give up — quit", "🚭 stop doing something", "He gave up sugar."],
      ["spend less time on…", "📵⏳", "I want to spend less time on TikTok."],
      ["get a part-time job", "💼 work some hours a week"],
      ["pass an exam — fail an exam", "✅🎓 — ❌"],
      ["keep a diary / a journal", "📓 write about your day"],
      ["a goal — achieve a goal", "🎯 — 🏆"],
      ["stick to (a plan)", "💪 don't stop", "It's easy to start, but difficult to stick to it."],
      ["a challenge", "🔥 something difficult — a 30-day challenge"],
    ]),
    match("Match.", [
      ["get", "fit"],
      ["save", "money"],
      ["take up", "a hobby"],
      ["pass", "an exam"],
      ["keep", "a diary"],
      ["stick", "to a plan"],
    ]),
    sort("Health, money or study? Sort. 🏃💰📚", {
      "🏃 health": ["get fit", "give up sugar", "go to bed earlier"],
      "💰 money": ["save money", "get a part-time job", "spend less on clothes"],
      "📚 study": ["pass an exam", "read more books", "learn new words every day"],
    }),
    gaps(
      "Complete.",
      "1. I want to be healthy, so I'm going to get [fit]. 🏃\n2. I'm saving [money] for a new laptop. 💰\n3. She's going to take [up] the guitar. 🎸\n4. He wants to give [up] fast food. 🍔❌\n5. I spend too much time [on] my phone. 📱\n6. My goal is to [pass] the exam in June. 🎓\n7. It's easy to start a diet, but difficult to [stick] to it. 💪\n8. Every evening I write in my [diary/journal]. 📓",
    ),
  ]),

  section("Reading: My goals for this year", [
    tip("Three posts from a goals app. Before reading, ask the student to guess: *What goals do people usually have?* After reading: *Whose goal is the most difficult? Whose is the most useful?*"),
    trueFalse(
      "Read the posts. True or false?",
      [
        ["Timur is going to run a marathon in September.", false],
        ["Timur is going to run three times a week.", true],
        ["Madina is saving money for a trip.", true],
        ["Madina is going to stop buying coffee in cafés.", true],
        ["Jake is going to delete all his apps.", false],
        ["Jake is going to read before bed.", true],
      ],
      {
        read: [
          "## 🎯 GoalUp — this year's goals",
          "**timur_runs** 🏃 *Last year I couldn't run for 5 minutes. This year I'm going to run a half marathon — 21 km! It's in October in Almaty. I'm going to run three times a week and I'm going to stop eating chips. 😅 My sister is going to run with me, so I can't stop!*",
          "**madina_saves** 💰 *I'm going to visit Japan next spring! 🇯🇵 I need $2,000, so I'm saving money. I'm not going to buy coffee in cafés anymore — I'm going to make it at home. And I'm going to sell my old clothes online. So far I have $640!*",
          "**jake.offline** 📵 *My screen time was 7 hours a day. 😱 So I'm going to delete TikTok and Instagram — not all apps, just these two! I'm going to read before bed and keep my phone in the kitchen at night. Am I going to miss it? Probably. Ask me in a month!*",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "How long is Timur's race?", options: ["*21 km", "5 km", "42 km"] },
      { q: "Who is going to run with Timur?", options: ["*his sister", "his friend", "his dad"] },
      { q: "How much money does Madina have now?", options: ["*$640", "$2,000", "$1,360"] },
      { q: "Where is Jake going to keep his phone at night?", options: ["*in the kitchen", "under his pillow", "in his bag"] },
    ]),
    text("Talk to your teacher.", "- Which goal is the most difficult, do you think? Why?\n- Do you have a goal like Timur's, Madina's or Jake's?\n- What's your screen time? Are you happy with it? 📱"),
  ]),

  section("Grammar: be going to", [
    quiz("Notice the rule 🔍 Look at the posts: “I'm going to run… I'm not going to buy coffee… Am I going to miss it?” Which is true?", [
      { q: "We use going to for…", options: ["*plans we decided before now", "things that happened yesterday", "things we do every day"] },
      { q: "The form is…", options: ["*am / is / are + going to + verb", "going to + verb-ing", "will + going to"] },
      { q: "“Am I going to miss it?” — in the question, am / is / are goes…", options: ["*before the person", "after going to", "at the end"] },
    ]),
    table("going-to"),
    choose(
      "Choose.",
      "1. I'm going to [*learn/learning] to drive this summer.\n2. She [*is/are] going to start a blog.\n3. We [*aren't/don't] going to move this year.\n4. [*Are/Do] you going to buy a new phone?\n5. What [*are you going/you are going] to do after school?\n6. He's going [*to take/take] up boxing.\n7. Look at those clouds! It's going to [*rain/raining]. 🌧️\n8. My parents [*are going to/is going to] visit us in May.",
    ),
    gaps(
      "Write sentences with going to.",
      "1. I / get fit → I'm [going to get] fit.\n2. she / save money → She's [going to save] money.\n3. we / not / eat fast food → We [aren't going to eat/are not going to eat] fast food.\n4. they / travel to Japan → They're [going to travel] to Japan.\n5. he / not / play games every night → He [isn't going to play/is not going to play] games every night.\n6. you / take up a hobby? → Are you [going to take] up a hobby?\n7. what / you / do this weekend? → What [are you going to do] this weekend?\n8. I / not / give up! → I'm [not going to give] up!",
    ),
    drag(
      "Complete the chat.",
      "A: So, what [are] you going to do this summer?\nB: I'm going [to] get a part-time job. I'm [going] to save money for a car.\nA: Cool! Are you going to learn to [drive] too?\nB: Yes, I [am]! My dad is going to [teach] me. 😬\nA: Good luck to him! 😄 I'm not going [to] do anything — I'm going to sleep all summer!\nB: That's not a plan, that's a dream! 😂",
      ["going to", "be", "teaching", "do"],
    ),
    order("Make sentences.", [
      "I'm going to learn to cook.",
      "She isn't going to buy any new clothes.",
      "Are you going to take the exam in June?",
      "What are you going to do after school?",
      "It's going to be a difficult year.",
    ]),
  ]),

  section("Say it right: gonna", [
    box(
      "🗣️ Say it right",
      "In fast, informal English, **going to** + verb often sounds like **“gonna”** /ˈɡʌnə/:\n\n*I'm going to call you.* → “I'm **gonna** call you.”\n\n*What are you going to do?* → “Whatcha **gonna** do?”\n\nYou can **say** it and **hear** it in songs and films — but **write** *going to* in emails and exams. ✍️",
    ),
    gaps(
      "Write it the full way.",
      "1. “I'm gonna call you.” → I'm [going to] call you.\n2. “She's gonna be late.” → She's [going to] be late.\n3. “We're gonna win!” → We're [going to] win!\n4. “Are you gonna eat that?” → Are you [going to] eat that?\n5. “It's gonna rain.” → It's [going to] rain.\n6. “I'm not gonna lie…” → I'm not [going to] lie…",
    ),
    tip("Say the sentences slowly with *going to*, then fast with *gonna* — the student repeats both. Ask: *Do you know a song with “gonna”?* (e.g. “Never Gonna Give You Up” 😄)"),
  ]),

  section("Listening: The 30-day challenge", [
    tip("This listening is longer — about 2–3 minutes. Play it once for the general idea (*Who is going to do what?*), then again for the details. It's OK to pause."),
    ...listening(
      "Listen to a podcast. Two guests talk about their 30-day challenges.",
      "**Host:** Hello and welcome to “Small Steps”, the podcast about changing your life one small step at a time. It's the first of the month, so today we're talking about 30-day challenges. My guests are Kate and Arman. Hi, both!\n\n**Kate:** Hi!\n\n**Arman:** Hello!\n\n**Host:** Kate, let's start with you. What's your challenge this month?\n\n**Kate:** Well, I'm going to wake up at six o'clock every day — even on Saturdays and Sundays. 😴 At the moment I get up at eight, and I'm always late. I'm always running for the bus with a coffee in my hand!\n\n**Host:** Six a.m.? That's a big change! What are you going to do with the extra time?\n\n**Kate:** I'm going to do yoga for twenty minutes, and then I'm going to have a real breakfast — not a cookie in the car. And I'm going to read a little. Last year I didn't finish a single book!\n\n**Host:** Do you think you can stick to it?\n\n**Kate:** Honestly? I'm not sure. But my plan is to go to bed at ten. No phone in bed — my phone is going to sleep in the kitchen! 📱\n\n**Host:** Good luck! Arman, what about you?\n\n**Arman:** My challenge is about money. I'm a student, and every month my money disappears — I don't know where! 💸 So, for thirty days, I'm not going to buy anything I don't really need. No takeaway coffee, no new clothes, no games online.\n\n**Host:** Nothing at all?\n\n**Arman:** Only food, transport and things for university. And I'm going to write down every tenge I spend in an app. At the end of the month, I'm going to look at the numbers. My goal is to save fifty thousand tenge.\n\n**Host:** And what are you going to do with the money?\n\n**Arman:** I'm going to buy a ticket to see my favorite band in Almaty in the summer. 🎸\n\n**Host:** Great motivation! OK, listeners, what's your 30-day challenge? Send us a message, and in thirty days Kate and Arman are going to come back and tell us how it went. Bye for now!",
    ),
    quiz("Listen and choose.", [
      { q: "What time does Kate get up now?", options: ["*at eight", "at six", "at ten"] },
      { q: "How long is Kate going to do yoga?", options: ["*twenty minutes", "an hour", "ten minutes"] },
      { q: "Where is Kate's phone going to sleep?", options: ["*in the kitchen", "next to her bed", "in her bag"] },
      { q: "How much money does Arman want to save?", options: ["*50,000 tenge", "15,000 tenge", "500,000 tenge"] },
      { q: "What is Arman going to buy with the money?", options: ["*a concert ticket", "new clothes", "a game"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Kate is often late in the morning.", true],
      ["Kate is going to get up at six only on weekdays.", false],
      ["Kate finished a lot of books last year.", false],
      ["Arman is a student.", true],
      ["Arman is going to write down all the money he spends.", true],
      ["Kate and Arman are going to come back to the podcast in a week.", false],
    ]),
  ]),

  section("Let's talk: Goal coach", [
    text(
      "Role-play: the goal coach 💪",
      "**1.** Tell your teacher 3 real goals for the next 3 months.\n\n**2.** Your teacher is your coach and asks: *How are you going to do it? When are you going to start? What's going to be difficult? Who's going to help you?*\n\n**3.** Change roles: now you are the coach! 🧑‍🏫",
    ),
    text(
      "Talk to your teacher.",
      "- What time do you go to bed and get up? Are you going to change anything? 😴\n- What's your screen time? How much is “too much” for you? 📱\n- Did you ever try a challenge (no sugar, 10,000 steps, a new word every day)? How did it go?\n- What are you going to do this weekend? Is it a plan or a dream? 😄",
    ),
    tip("*If you have time:* “Prediction time” 🔮 — look out of the window or at photos on your phone: *It's going to rain. That bus is going to be late. My cat is going to jump on the table!* Use *going to* for things you can see."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "I'm going to ___ fit.", options: ["*get", "getting", "gets"] },
      { q: "___ you going to take the exam?", options: ["*Are", "Do", "Will"] },
      { q: "start a new hobby =", options: ["*take up", "give up", "stick to"] },
      { q: "“gonna” in an email → …", options: ["*going to", "gonna", "goin to"] },
    ]),
    box("Word of the day: procrastinate", "**procrastinate** 🛋️⏳ = do something later… and later… and later.\n\n*I'm going to start my diet — tomorrow! I'm a professional procrastinator.* 😅"),
  ]),

  homework(
    [
      gaps(
        "Complete the phrases.",
        "1. get [fit] 🏃\n2. [save] money 💰\n3. take [up] a hobby 🎸\n4. learn to [drive] 🚗\n5. [pass] an exam 🎓\n6. keep a [diary/journal] 📓",
      ),
      match("Match the opposites.", [
        ["start", "stop"],
        ["take up", "give up"],
        ["pass", "fail"],
        ["save money", "spend money"],
        ["get up early", "get up late"],
        ["more time", "less time"],
      ]),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      video("Watch the grammar video: the future with be going to.", "IpmmTWcjVbM"),
      choose(
        "Choose.",
        "1. I'm going [*to visit/visit] my aunt.\n2. They [*aren't/isn't] going to come.\n3. [*Is/Are] he going to call you?\n4. We're going to [*have/having] a party!\n5. What [*is/are] she going to wear?\n6. Look! That glass is going to [*fall/falls]!",
      ),
      gaps(
        "Complete with going to and the verb.",
        "1. I [am going to study/'m going to study] medicine. (study)\n2. My brother [is going to buy/'s going to buy] a car. (buy)\n3. We [are not going to stay/aren't going to stay/'re not going to stay] at home. (not stay)\n4. [Are you going to watch] the match? (you / watch)\n5. She [is going to start/'s going to start] a new job. (start)\n6. It [is going to snow/'s going to snow] — look at the sky! (snow)",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      trueFalse(
        "Read the message. True or false?",
        [
          ["Dana is going to work in a summer camp.", true],
          ["She is going to teach English.", false],
          ["The camp is in the mountains.", true],
          ["She is going to stay there for two months.", false],
          ["Dana is going to buy a new phone with the money.", false],
        ],
        { read: "💬 **Dana:** Big news! This summer I'm going to work in a children's camp in the mountains near Almaty. ⛺ I'm going to teach swimming and organize games. It's only for four weeks, but I'm going to earn some money! I'm going to save it for my driving lessons. 🚗 Are you going to do anything this summer?" },
      ),
    ],
    "Homework: Reading",
  ),
  homework(
    [
      write("Write a post for a goals app: 3 goals for the next 3 months. How are you going to achieve them? What's going to be difficult? (60+ words)", 60, {
        read: "*Example:* My first goal is to get fit. I'm going to walk 10,000 steps a day and go to the swimming pool on Saturdays. My second goal is to read 3 books in English — I'm going to read 10 pages every evening. My last goal is to spend less time on my phone. That's going to be the most difficult! 😅",
      }),
      record("Record your answer: What are you going to do next weekend and next summer? (1 minute)", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
