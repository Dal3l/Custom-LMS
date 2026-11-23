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

// 4.2 My week ahead — G: Present Continuous for arrangements (I'm meeting Ali on Friday) vs be going to. V: events and appointments. Say it right: weak "are" (What are you doing?). S: find a time to meet. Main format: a game + reading (a calendar) + listening (a phone call) + video.
export default lesson("a2-4.2", "My week ahead", () => [
  section("Warm-up: Two plans and a lie", [
    box("Today you will…", "- talk about your arrangements: *I'm meeting… on Friday* 📅\n- ask *What are you doing this weekend?*\n- find a time to meet — when everyone is busy! 😅"),
    text(
      "Game: Two plans and a lie 🤥",
      "Your teacher says 3 plans for this week. Two are true, one is a lie. Ask questions and find the lie!\n\n*Who are you going with? What time? Where?*\n\nThen it's your turn: tell your teacher 3 plans for your week — one is a lie. 😄",
    ),
    text(
      "Talk to your teacher.",
      "- What's the busiest day of your week? Why? 📅\n- Do you use a calendar app, a paper planner or just your memory? 🧠\n- Who is the most organized person in your family? And the least? 😄\n- What's the best part of your week? Something you always wait for?",
    ),
    tip("Make your “lie” funny but possible: *I'm having dinner with a famous actor on Thursday.* Use the Present Continuous naturally (*I'm meeting… I'm going…*) — don't explain it yet."),
  ]),

  section("Vocabulary: My week", [
    words("Events and appointments", [
      ["an appointment", "🩺 a fixed time with a doctor, dentist…", "I have a dentist appointment at 10."],
      ["a meeting", "💼👥 at work or school"],
      ["a deadline", "⏰📄 the last day to finish something"],
      ["a job interview", "🤝💼"],
      ["a wedding", "💍👰🤵"],
      ["a birthday party", "🎂🎉"],
      ["a match — a game", "⚽ 🇺🇸 a game"],
      ["book a table / tickets", "📞🍽️ / 🎫 reserve"],
      ["be free — be busy", "🟢 — 🔴", "Are you free on Friday?"],
      ["invite — accept an invitation", "💌 — ✅"],
      ["cancel", "❌📅 say an event isn't happening", "They canceled the match because of the rain."],
      ["move (a meeting) to…", "📅➡️📅 change the day or time"],
    ]),
    match("Match.", [
      ["a dentist", "appointment"],
      ["a job", "interview"],
      ["book", "a table"],
      ["accept", "an invitation"],
      ["a birthday", "party"],
      ["move the meeting", "to Monday"],
    ]),
    sort("Work / study or free time? Sort. 💼🎉", {
      "💼 work / study": ["a meeting", "a deadline", "a job interview", "an exam"],
      "🎉 free time": ["a wedding", "a match", "a birthday party", "a concert"],
    }),
    gaps(
      "Complete.",
      "1. I'm going to the dentist. I have an [appointment] at 10. 🩺\n2. The [deadline] for the project is Friday! ⏰\n3. Are you [free] on Saturday evening? 🟢\n4. Sorry, I can't. I'm very [busy] this week. 🔴\n5. It's raining, so they [canceled/cancelled] the match. ❌\n6. Let's [book] a table at the new café. 📞\n7. My cousin is getting married — I'm going to her [wedding]! 💍\n8. Can we [move] the meeting to Tuesday? 📅",
    ),
  ]),

  section("Reading: Aigerim's week", [
    tip("Read the calendar together like a real phone screen. Ask fast questions: *What's she doing on Tuesday evening? When is she free?* Then compare with the student's real week."),
    quiz(
      "Read Aigerim's calendar. Choose.",
      [
        { q: "When is Aigerim seeing the dentist?", options: ["*on Monday morning", "on Wednesday", "on Friday afternoon"] },
        { q: "Who is she playing tennis with?", options: ["*Dana", "her boss", "her mom"] },
        { q: "What's happening on Thursday?", options: ["*a job interview", "a wedding", "a concert"] },
        { q: "Where is she flying on Saturday?", options: ["*to Istanbul", "to Almaty", "to Seoul"] },
        { q: "When is she free?", options: ["*on Wednesday evening", "on Tuesday evening", "on Friday evening"] },
      ],
      {
        read: [
          "## 📅 Aigerim's week",
          "**Monday** · 9:00 — dentist 🩺 (don't be late!) · 18:00 — English lesson 🇬🇧",
          "**Tuesday** · 19:00 — tennis with Dana 🎾",
          "**Wednesday** · 17:00 — project deadline ⏰ · evening — free! 🛋️",
          "**Thursday** · 11:00 — job interview at TechHub 🤝 (wear the blue jacket!)",
          "**Friday** · 20:00 — dinner with Mom and Dad at Café Saya 🍽️ (table booked)",
          "**Saturday** · 7:30 — flight to Istanbul ✈️ with Madina — 3 days! 🇹🇷",
          "**Sunday** · Istanbul — boat trip on the Bosphorus ⛴️",
        ].join("\n\n"),
      },
    ),
    trueFalse("Read again. True or false?", [
      ["Aigerim is having an English lesson on Monday evening.", true],
      ["She's playing tennis on Wednesday.", false],
      ["Her project deadline is on Wednesday.", true],
      ["She's having dinner with her parents on Friday.", true],
      ["She's going to Istanbul alone.", false],
      ["She's taking a boat trip on Sunday.", true],
    ]),
  ]),

  section("Grammar: I'm meeting Ali on Friday", [
    quiz("Notice the rule 🔍 Look: “She's playing tennis with Dana on Tuesday. She's flying to Istanbul on Saturday.” Which is true?", [
      { q: "These sentences are about…", options: ["*the future — plans with a fixed time", "now — at this moment", "the past"] },
      { q: "Why the Present Continuous?", options: ["*It's an arrangement: in the calendar, with a time, other people, a ticket", "It's a habit", "It's a fact about the world"] },
    ]),
    table("pc-future"),
    choose(
      "Choose.",
      "1. I [*'m meeting/meet] Dana at 7 tonight.\n2. What [*are you doing/do you do] this weekend?\n3. We [*'re flying/fly] to Turkey next Monday — we have the tickets!\n4. She [*isn't coming/doesn't coming] to the party on Saturday.\n5. [*Are you working/Do you work] tomorrow?\n6. My parents [*are visiting/visits] us next week.\n7. I [*'m going to/'m] learn Spanish one day. (a plan, no date)\n8. Sorry, I can't — I [*'m having/have] dinner with my grandma tonight.",
    ),
    gaps(
      "Write about Aigerim's week. Use the Present Continuous.",
      "1. On Monday she [is seeing/'s seeing] the dentist. (see)\n2. On Tuesday she [is playing/'s playing] tennis with Dana. (play)\n3. On Thursday she [is having/'s having] a job interview. (have)\n4. On Friday she [is having/'s having] dinner with her parents. (have)\n5. On Saturday she [is flying/'s flying] to Istanbul. (fly)\n6. Madina [is going/'s going] with her. (go)\n7. On Sunday they [are taking/'re taking] a boat trip. (take)\n8. On Wednesday evening she [isn't doing/is not doing/'s not doing] anything! (not do)",
    ),
    drag(
      "Complete the chat.",
      "A: Hi! What [are] you doing on Saturday?\nB: I'm [working] in the morning. Why?\nA: We're [having] a barbecue in the evening. Do you want to come? 🍖\nB: Sounds great! Who's [coming]?\nA: Dana and Leo. Leo [is] bringing his guitar. 🎸\nB: Perfect! I'm not [doing] anything in the evening.\nA: Great! We're [meeting] at the park at 6.\nB: See you [there]! 👋",
      ["do", "work", "are"],
    ),
    order("Make sentences.", [
      "What are you doing this weekend?",
      "I'm meeting my friends on Friday.",
      "We're flying to Dubai next month.",
      "Is she coming to the party?",
      "They aren't playing the match on Sunday.",
    ]),
  ]),

  section("Say it right: What are you doing?", [
    box(
      "🗣️ Say it right",
      "In questions, **are** is weak and short: **/ə/**.\n\n*What are you doing?* → “What-**ə**-you doing?” → fast: “**Whatcha** doing?”\n\n*Where are you going?* → “Where-**ə**-you going?”\n\nIn short answers, it's strong: *Are you coming? — Yes, I **am**! /æm/*",
    ),
    quiz("Weak or strong? Choose.", [
      { q: "What ARE you doing tonight? → are is…", options: ["*weak /ə/", "strong /ɑː/"] },
      { q: "Are you coming? — Yes, we ARE. → are is…", options: ["*strong /ɑː/", "weak /ə/"] },
      { q: "Where ARE they going? → are is…", options: ["*weak /ə/", "strong /ɑː/"] },
      { q: "Who ARE you meeting? → are is…", options: ["*weak /ə/", "strong /ɑː/"] },
    ]),
    tip("Ask the student fast: *What are you doing tonight? Tomorrow? On Saturday?* — the student answers and asks you back with the weak *are*. Then speed up! ⚡"),
  ]),

  section("Listening: Are you free on Friday?", [
    ...listening(
      "Listen. Mia calls Leo. They want to meet, but they're very busy.",
      "**Mia:** Hi, Leo! Are you free this week? I want to show you my photos from the trip!\n\n**Leo:** Hi, Mia! Hmm, let me check… Today I'm working until eight. 😩\n\n**Mia:** And tomorrow?\n\n**Leo:** Tomorrow I'm playing football with the guys at six. What about Thursday?\n\n**Mia:** No, sorry, I'm having a meeting with my project team on Thursday. And on Friday I'm going to my cousin's birthday party.\n\n**Leo:** OK… Saturday? I'm not doing anything in the afternoon.\n\n**Mia:** Oh no, on Saturday I'm flying to Astana to see my grandma. I'm coming back on Sunday morning.\n\n**Leo:** Sunday afternoon, then?\n\n**Mia:** Yes! Sunday at four is perfect. Let's meet at the new café near the park.\n\n**Leo:** Great! I'm booking a table now. See you on Sunday!\n\n**Mia:** See you! Don't forget — four o'clock! ⏰",
    ),
    quiz("Listen and choose.", [
      { q: "Why does Mia want to meet?", options: ["*to show her trip photos", "to plan a party", "to play football"] },
      { q: "What is Leo doing tomorrow?", options: ["*playing football", "working until eight", "going to a party"] },
      { q: "Where is Mia going on Saturday?", options: ["*to Astana", "to a party", "to the café"] },
      { q: "When are they meeting?", options: ["*on Sunday at four", "on Saturday afternoon", "on Friday at six"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Leo is working until eight today.", true],
      ["Mia is having a meeting on Thursday.", true],
      ["Leo is going to a birthday party on Friday.", false],
      ["Mia is visiting her grandma.", true],
      ["Mia is booking a table.", false],
    ]),
  ]),

  section("Video: Weekend plans", [
    video("Watch: people in London talk about their weekend plans (BBC Real Easy English). Write down 3 plans you hear.", "lrTRNbC3BDQ"),
    text("Talk to your teacher.", "- Which plan from the video is the most interesting for you? Why?\n- Are your weekends usually planned or spontaneous? 🎲"),
  ]),

  section("Let's talk: Find a time!", [
    text(
      "Game: Find a time 📅",
      "**1.** Write your real plans for next week: 3–5 arrangements (lessons, work, sport, meetings, family…).\n\n**2.** Your teacher wants to meet you for a coffee ☕ (or a film, a walk…). Your teacher asks: *Are you free on…? What are you doing on…?*\n\n**3.** Answer with your real plans: *Sorry, I'm… on Tuesday. How about…?*\n\n**4.** Find a time when you are both free! 🎉",
    ),
    tip("Make your own week very busy, so it's hard to find a time — the student has to ask and suggest a lot. Then change roles: the student invites you."),
    text(
      "Talk to your teacher.",
      "- What are you doing this weekend? Who with? 🎉\n- Do you like having every day planned, or do you like free days? Why?\n- When did you last cancel a plan? Why? 😅\n- Is it OK to cancel plans an hour before? How do you feel when a friend does it? 😤",
    ),
    tip("*If you have time:* “The perfect Saturday” — the student plans a perfect Saturday for you both, with times: *At 10 we're having breakfast at… At 12 we're going to…* You can say *Sorry, I can't!* to one thing."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "What ___ you doing tonight?", options: ["*are", "do", "is"] },
      { q: "I ___ Ali at 6. (an arrangement)", options: ["*'m meeting", "meet", "met"] },
      { q: "the last day to finish something =", options: ["*a deadline", "an appointment", "a meeting"] },
      { q: "Sorry, I'm ___ on Friday.", options: ["*busy", "free", "booked"] },
    ]),
    box("Word of the day: FOMO", "**FOMO** 😰📱 = **F**ear **O**f **M**issing **O**ut — when you think other people are having fun without you.\n\n*I'm staying at home tonight, but I'm getting FOMO from everyone's stories!*"),
  ]),

  homework(
    [
      gaps(
        "Complete.",
        "1. I have a doctor's [appointment] at 3. 🩺\n2. Can you [book] tickets for the concert? 🎫\n3. Are you [free] tonight? 🟢\n4. The [deadline] is tomorrow! ⏰\n5. She [canceled/cancelled] the meeting. ❌\n6. Thanks for the invitation! I [accept] with pleasure. ✅",
      ),
      match("Match.", [
        ["a job", "interview"],
        ["a wedding", "💍"],
        ["a deadline", "⏰"],
        ["a match", "⚽"],
        ["busy", "🔴"],
        ["free", "🟢"],
      ]),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      video("Watch: be going to or the Present Continuous? (BBC, 1 minute)", "K7jtbc8jYGc"),
      choose(
        "Choose.",
        "1. I [*'m meeting/meet] Sara tomorrow at 10.\n2. [*Are you coming/Do you come] to my party on Saturday?\n3. We [*'re having/have] a test on Monday.\n4. He [*isn't working/doesn't working] next week.\n5. One day I'm [*going to/going] write a book.\n6. What time [*is she arriving/she is arriving]?",
      ),
      gaps(
        "Complete with the Present Continuous.",
        "1. I [am meeting/'m meeting] my friends tonight. (meet)\n2. We [are flying/'re flying] to Dubai on Friday. (fly)\n3. She [is not coming/isn't coming/'s not coming] to the lesson tomorrow. (not come)\n4. What [are you doing] on Sunday? (you / do)\n5. They [are getting/'re getting] married in June! (get)\n6. My dad [is driving/'s driving] us to the airport. (drive)",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      write("Write a message to a friend: invite them to something this weekend (a film, a party, a match…). Say what, when, where and who's coming. (35+ words)", 35, {
        read: "*Example:* Hi Dana! Are you free on Saturday? We're having a picnic in the park at 2. Arman and Leo are coming, and Leo is bringing his speaker. 🎶 I'm making sandwiches — can you bring some fruit? Let me know! 😊",
      }),
      record("Record your answer: describe your next week — what are you doing and when? (1 minute)", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
