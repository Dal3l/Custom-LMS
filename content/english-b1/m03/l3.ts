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
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 3.3 Life before smartphones — skills lesson, no new grammar: review of used to / would / be used to / get used to. V: technology and habits, phrasal verbs with technology (log in, switch off, scroll through…). S: discuss what we've lost and gained. Main format: a long listening (a grandmother and her grandson, ~2 min) + a reading (a phone-free week experiment, ~380 words) + a story written in class (B1 Preliminary, Writing Part 2). Video at home.
export default lesson("b1-3.3", "Life before smartphones", () => [
  section("Warm-up: Your phone and you", [
    box(
      "Today you will…",
      "- listen to a grandmother and her grandson compare their worlds 👵📱\n- read about a week without a phone 📵\n- discuss what technology has given us — and taken away 🤔",
    ),
    quiz("Guess the year! 📅", [
      { q: "The first text message (SMS) was sent in…", options: ["*1992", "1982", "2002"] },
      { q: "YouTube started in…", options: ["*2005", "1999", "2011"] },
      { q: "The first iPhone came out in…", options: ["*2007", "2001", "2012"] },
      { q: "Instagram started in…", options: ["*2010", "2004", "2016"] },
    ]),
    text(
      "Talk to your teacher.",
      "- Be honest: how many hours a day do you spend on your phone? Do you think it's too much? 📱\n- What's the first thing you do with your phone in the morning — and the last thing at night?\n- If your phone disappeared for a week, what would be the hardest part? And what might be the best part?",
    ),
    tip("Ask the student to check their screen time in the phone settings (if they're comfortable sharing). Share yours too — it's usually a surprise for both!"),
  ]),

  section("Vocabulary: Technology and habits", [
    words("Technology and habits", [
      ["scroll through", "📜 move up and down a screen, looking quickly", "I scrolled through Instagram for an hour."],
      ["switch off", "📴 turn off; also: stop thinking about work", "I can't switch off on holiday."],
      ["log in / log out", "🔐 enter / leave an account"],
      ["go online", "🌐 start using the internet"],
      ["keep up to date", "📰 know the latest news", "I keep up to date with the news on my phone."],
      ["addicted (to)", "🎰 can't stop doing something", "He's addicted to video games."],
      ["notifications", "🔔 small messages from apps on your screen"],
      ["screen time", "⏱️ the time you spend looking at screens"],
      ["distracted", "🐿️ not able to focus on something", "I get distracted by my phone when I study."],
      ["face to face", "👥 in person, not online"],
      ["a landline", "☎️ a phone at home, with a wire"],
      ["unplug", "🔌 take a break from technology", "We unplugged for a whole weekend."],
    ]),
    match("Match.", [
      ["scroll", "through social media"],
      ["switch", "off your phone"],
      ["keep up", "to date with the news"],
      ["meet", "face to face"],
      ["turn off", "notifications"],
      ["be addicted", "to games"],
    ]),
    quiz("Choose the right word.", [
      { q: "I can't concentrate — I'm too ___.", options: ["*distracted", "addicted", "unplugged"] },
      { q: "Don't forget to ___ out of your account on a shared computer.", options: ["*log", "switch", "scroll"] },
      { q: "I read the news every morning to keep up to ___.", options: ["*date", "time", "face"] },
      { q: "Let's ___ this weekend — no phones, no laptops!", options: ["*unplug", "log in", "go online"] },
    ]),
    sort("Healthy or unhealthy phone habits? Sort. 💚⚠️", {
      "💚 healthy": ["turning off notifications", "leaving your phone in another room at night", "phone-free meals", "setting a screen time limit"],
      "⚠️ unhealthy": ["checking your phone as soon as you wake up", "scrolling in bed for hours", "texting while walking", "using your phone during conversations"],
    }),
    gaps(
      "Complete with a word or phrase from the list above.",
      "1. I lost two hours last night scrolling [through] videos. 😩\n2. I can't focus — I'm always [distracted] by my phone.\n3. My screen [time] was seven hours yesterday!\n4. I've turned off all my [notifications], and I feel calmer. 🔕\n5. It's nice to talk face to [face], not only on messengers.\n6. On holiday I try to switch [off] completely.\n7. My grandparents still have a [landline] at home. ☎️\n8. Some teenagers are [addicted] to social media.",
    ),
  ]),

  section("Listening: Two worlds", [
    tip("A long listening — about 2 minutes. Saule (from module 1!) talks to her grandson Daniyar for a school project. First listen: *Who thinks life was better in the past?* Second listen: the tasks."),
    ...listening(
      "Listen. Daniyar, 16, interviews his grandmother Saule for a school project.",
      "**Daniyar:** OK, Grandma, it's recording. So, my first question: how did you use to talk to your friends when you were my age?\n\n**Saule:** Face to face, of course! We used to meet in the yard every evening. If I wanted to see my best friend, I would just go to her flat and knock on the door.\n\n**Daniyar:** Without messaging first? That's so strange! I'd never do that.\n\n**Saule:** Ha! And we didn't use to have a phone at home until I was fifteen. When we finally got a landline, I used to talk for hours, and my father would shout, \"Get off the phone, someone might be calling us!\" 😄\n\n**Daniyar:** How did you find information? Like, for homework?\n\n**Saule:** The library. We used to spend whole afternoons there. If the book you needed was taken, you had to wait a week. Now you just ask your phone, don't you?\n\n**Daniyar:** Yes, or AI. So, what's the biggest difference, do you think?\n\n**Saule:** Hmm. I think we were more patient. We were used to waiting — for letters, for photos, for the one TV program we liked. You're used to getting everything immediately.\n\n**Daniyar:** That's true. I get annoyed if a video takes three seconds to load. 😅\n\n**Saule:** But I don't think everything used to be better. When my sister moved to Canada in 1995, we couldn't afford to call her. We wrote letters, and each one took a month to arrive. Now I see her face every Sunday on a video call. That's a miracle for me.\n\n**Daniyar:** You learned video calls last year, right?\n\n**Saule:** Yes, and it took me a while to get used to it. At first I used to hold the phone too close, and my sister could only see my nose! 😂\n\n**Daniyar:** Last question. If you could give my generation one piece of advice, what would it be?\n\n**Saule:** Look up from your screens sometimes. Talk to people face to face. And be bored once in a while — that's when you get your best ideas.\n\n**Daniyar:** Thanks, Grandma. I think I'll get an A for this!\n\n**Saule:** You'd better. Now, put that phone down and help me make dinner.",
    ),
    gaps(
      "Complete what Saule said. Listen again if you need.",
      "1. We used to meet in the [yard] every evening.\n2. We didn't use to have a [phone] at home until I was fifteen.\n3. We used to spend whole afternoons in the [library].\n4. We were used to [waiting] — for letters, for photos.\n5. It took me a while to get [used] to it.\n6. Be [bored] once in a while — that's when you get your best ideas.",
    ),
    quiz("Listen and choose.", [
      { q: "How did Saule use to see her best friend?", options: ["*She went to her flat and knocked on the door.", "She called her on the landline.", "She wrote her letters."] },
      { q: "Why did Saule's father shout?", options: ["*She was on the phone for too long.", "She came home late.", "She didn't do her homework."] },
      { q: "According to Saule, her generation was more…", options: ["*patient", "creative", "hard-working"] },
      { q: "Why couldn't Saule call her sister in 1995?", options: ["*It was too expensive.", "Her sister had no phone.", "They had argued."] },
      { q: "What is Saule's advice?", options: ["*Look up from your screens and talk to people.", "Use AI for homework.", "Don't use video calls."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Saule's family had a landline when she was ten.", false],
      ["Saule used to spend afternoons in the library.", true],
      ["Daniyar gets annoyed when videos load slowly.", true],
      ["Saule thinks everything was better in the past.", false],
      ["Saule got used to video calls immediately.", false],
      ["At first her sister could only see Saule's nose.", true],
    ]),
  ]),

  section("Reading: My week without a phone", [
    tip("A long text (~380 words). Before reading: *Could YOU live without a phone for a week? What would happen?* Then read and do the tasks. Ask: *Which day was the hardest for Madina? Why?*"),
    trueFalse(
      "Read Madina's diary. True or false?",
      [
        ["Madina did the experiment because of a university class.", true],
        ["On the first day she checked her pocket many times.", true],
        ["She got lost because she had never used a paper map before.", false],
        ["By Wednesday she was getting used to life without a phone.", true],
        ["She read a whole book during the week.", true],
        ["After the experiment, she stopped using her phone completely.", false],
      ],
      {
        read: [
          "## 📵 My week without a phone",
          "*by Madina, 19 — a design student (and Saule's granddaughter!)*",
          "Our media teacher gave us a challenge: one week without a smartphone. I laughed. I use my phone for everything — work, study, music, maps, my bank, my friends. But I said yes. Here's what happened.",
          "**Monday.** Terrible. I reached for my pocket about fifty times. Every time I was bored for one second, my hand looked for the phone. I felt anxious all day, as if I'd forgotten something important.",
          "**Tuesday.** I got lost on the way to a new client's office. I used to know my city well, but I'd stopped paying attention years ago — the map always told me where to go. I had to ask two people for directions. Both were really kind. When did I last talk to a stranger?",
          "**Wednesday.** Something changed. I wasn't checking my pocket anymore. I was getting used to it! On the bus, instead of scrolling, I looked out of the window and noticed buildings I'd never seen before, although I've lived here all my life.",
          "**Thursday.** I met my friends in a café. Usually we all sit with our phones on the table and check them constantly. This time, I had nothing to check, so I really listened. We talked for three hours. One friend said, \"You seem different today.\"",
          "**Friday and Saturday.** I finished a whole novel — the first book I've read in a year. I also slept better. Without my phone in bed, I fell asleep in twenty minutes instead of two hours.",
          "**Sunday.** I got my phone back. 247 notifications. I scrolled through them, and you know what? Almost nothing was important.",
          "**So what now?** I'm not going to throw my phone away — I need it for my work. But I've changed some habits. I've turned off most notifications, my phone sleeps in the kitchen, not in my bed, and when I'm with friends, it stays in my bag. My grandma says I'm finally becoming normal. 😄",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Why did Madina feel anxious on Monday?", options: ["*She kept looking for her phone.", "She was late for class.", "She lost her bag."] },
      { q: "What did Madina realize on Tuesday?", options: ["*She had stopped paying attention to her city.", "Paper maps are useless.", "Strangers are unfriendly."] },
      { q: "What was different about the café on Thursday?", options: ["*Madina really listened to her friends.", "Nobody came.", "The café had no Wi-Fi."] },
      { q: "Which new habit did Madina NOT mention?", options: ["*She deleted all her social media.", "Her phone sleeps in the kitchen.", "She has turned off most notifications."] },
    ]),
    choose(
      "Review: choose the right form.",
      "1. Madina [*used to/is used to] know her city well.\n2. On Wednesday she was [*getting/get] used to life without a phone.\n3. She [*isn't used to/didn't use to] talking to strangers.\n4. Saule [*would/used] go to her friend's flat without calling.\n5. Daniyar is used to [*getting/get] everything immediately.\n6. It took Saule a while to get used to [*video calls/use video calls].\n7. People [*used to/are used to] write letters to friends abroad.\n8. Are you used to [*reading/read] on paper?",
    ),
  ]),

  section("Let's talk: Lost and gained", [
    match("Match the problems and the tips.", [
      ["I can't sleep at night.", "Leave your phone in the kitchen."],
      ["I check my phone 100 times a day.", "Turn off notifications."],
      ["I can't focus when I study.", "Put your phone in another room."],
      ["I never talk to my family at dinner.", "Make meals phone-free."],
      ["I spend hours on social media.", "Set a daily time limit."],
      ["I never notice my city.", "Look out of the window, not at the screen."],
    ]),
    drag(
      "Complete Madina's post.",
      "A week without my phone? I [used] to think it was impossible! At first I [wasn't] used to being bored, but by Wednesday I was [getting] used to it. I [would] reach for my pocket every five minutes on Monday. Now I'm used to [leaving] my phone in the kitchen at night. My grandma [used] to say phones were bad for me — maybe she was right! 📵",
      ["use", "leave", "didn't", "get"],
    ),
    sort("What have smartphones given us, and what have they taken away? Sort. ➕➖", {
      "➕ gained": ["video calls with family far away", "maps in your pocket", "learning anything online", "keeping up to date with news"],
      "➖ lost": ["patience", "talking to strangers", "deep focus", "good sleep"],
    }),
    text(
      "Discuss: Smartphones — friend or enemy? 🤔",
      "- Do you agree with your sort? What would you add to each list?\n- Saule says boredom gives you the best ideas. Do you agree? When did you last feel bored?\n- Madina changed three habits. Which one could you try this week? Which is impossible for you?\n- Should schools ban phones in class? Why / why not? 🏫",
    ),
    tip("Push the student to give reasons and examples (*For example… because…*). Challenge them gently: if they say phones are bad, ask about video calls with family; if they say phones are great, ask about sleep and focus."),
  ]),

  section("Writing: A story", [
    box(
      "✍️ B1 Preliminary, Writing Part 2: a story",
      "You get the **first sentence**. Continue the story in about **100 words**.\n\n✅ Use past tenses: *was doing / did / had done*\n✅ Use linkers: *suddenly, as soon as, by the time, in the end*\n✅ Add feelings: *I couldn't believe it! I was so nervous…*\n✅ Give it a clear ending.",
    ),
    order(
      "Put the example story in order.",
      [[
        "When I woke up, my phone was dead — and I had no charger.",
        "I had an important interview at ten, but I didn't know the address by heart.",
        "As soon as I got to the city center, I asked a woman in a bakery for help.",
        "She didn't just show me the way — she walked with me to the office!",
        "In the end, I got the job, and I still buy bread at her bakery every week.",
      ].join("\n")],
      "lines",
    ),
    write("Continue the story (100 words): “When I looked in my bag, I realized my phone wasn't there…”", 100),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "I'm ___ to waiting — it's normal for me.", options: ["*used", "use", "using"] },
      { q: "When I was a kid, I ___ play in the yard every day.", options: ["*would", "am used to", "get used to"] },
      { q: "move quickly through a screen =", options: ["*scroll through", "log out", "switch off"] },
      { q: "in person, not online =", options: ["*face to face", "on the go", "on screen"] },
    ]),
    box(
      "Phrase of the day: FOMO",
      "😰 **FOMO** = **F**ear **O**f **M**issing **O**ut — the worry that others are having fun without you.\n\n*I keep checking Instagram because of FOMO.* And the opposite? **JOMO** — the **J**oy of missing out! 😌",
    ),
  ]),

  homework(
    [
      video("Watch: Life before the internet.", "o_nb7LlLGzc"),
      text(
        "After the video: answer in your notebook or tell your teacher next time.",
        "- Which thing from the video surprised you most?\n- Which “old” habit would you like to bring back?\n- Which one are you happy we don't need anymore?",
      ),
      gaps(
        "Complete.",
        "1. I spend too much screen [time] on my phone.\n2. Let's turn [off] our phones during dinner.\n3. I always get [distracted] when I study with my phone nearby.\n4. We should meet face to [face] — not just text.\n5. I need to [unplug] this weekend — no screens!\n6. He's [addicted] to his phone — he checks it every minute.",
      ),
    ],
    "Homework: Video and vocabulary",
  ),
  homework(
    [
      write("Try a mini-experiment: no phone for 3 hours (or one evening). Write a short diary (100+ words): what did you do, how did you feel, what did you notice?", 100),
      record("Record 1–2 minutes: Interview an older person (or imagine one): How did they use to talk to friends, find information and spend free time? 🎤", 120),
    ],
    "Homework: Writing and speaking",
  ),
]);
