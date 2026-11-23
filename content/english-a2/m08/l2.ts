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

// 8.2 Good advice — G: should / shouldn't for advice. V: everyday problems and solutions. Say it right: silent letters (should, could, would…). S: ask for and give advice. Main format: a lifehack quiz + reading (an advice column) + listening (a radio phone-in). No video in class.
export default lesson("a2-8.2", "Good advice", () => [
  section("Warm-up: Lifehack or myth?", [
    box("Today you will…", "- give advice: *You should… You shouldn't…* 💡\n- ask for advice: *What should I do?*\n- be an “agony aunt” — a person who answers problems 💌"),
    quiz("Does it really work? Guess — then check! 🤔", [
      { q: "📱💧 Your phone fell in water. You should put it in a bag of rice.", options: ["*Myth — experts (and Apple) say don't do it.", "It works — always do it!"] },
      { q: "📱🥛 Put your phone in an empty glass to make the music louder.", options: ["*It works — the glass makes the sound bigger.", "Myth — nothing happens."] },
      { q: "👖❄️ Put your jeans in the freezer to clean them.", options: ["*Myth — it doesn't really kill the bacteria.", "It works — no need to wash them!"] },
      { q: "🧅😢 Put the onion in the fridge before you cut it — you'll cry less.", options: ["*It works — cold onions make fewer tears.", "Myth — you'll cry more."] },
    ]),
    text(
      "Talk to your teacher.",
      "- Who do you go to when you need advice? Why that person? 🤔\n- What's the best advice you've ever got? Who gave it to you? 💡\n- Do you like getting advice — or do you prefer to decide alone? 😄\n- Do you have a favorite lifehack? Share it!",
    ),
    tip("Let the student guess before checking. The rice myth is popular: Apple's official advice says not to put a wet iPhone in rice. Ask: *What do people in your family do when a phone falls in water?*"),
  ]),

  section("Vocabulary: Problems and solutions", [
    words("Problems and advice", [
      ["be stressed (out)", "😫 worried, too much to do"],
      ["can't sleep", "😳🌙", "I can't sleep before exams."],
      ["feel lonely", "😔 sad because you're alone"],
      ["be broke", "💸❌ have no money (informal)"],
      ["argue with (someone)", "😤🗣️", "I always argue with my brother."],
      ["get on someone's nerves", "😠 annoy someone", "My flatmate gets on my nerves!"],
      ["ask for advice — give advice", "🙋💡 — 💁💡 (advice — no plural! some advice)"],
      ["a tip", "💡 a small, useful piece of advice"],
      ["avoid", "🙅 stay away from", "You should avoid coffee in the evening."],
      ["calm down", "😌 stop being angry or stressed"],
      ["talk it over", "🗣️🤝 discuss a problem"],
      ["a solution", "✅🔑 the answer to a problem"],
    ]),
    match("Match.", [
      ["ask for", "advice"],
      ["feel", "lonely"],
      ["calm", "down"],
      ["talk it", "over"],
      ["get on someone's", "nerves"],
      ["find a", "solution"],
    ]),
    sort("Problem or advice? Sort. 😫💡", {
      "😫 problem": ["I can't sleep.", "I'm broke.", "I feel lonely.", "My sister gets on my nerves."],
      "💡 advice": ["You should go to bed earlier.", "You should make a budget.", "You should join a club.", "You should talk it over."],
    }),
    gaps(
      "Complete.",
      "1. I have three exams this week. I'm really [stressed]. 😫\n2. I have no money until Friday — I'm [broke]! 💸\n3. I moved to a new city and I don't know anyone. I feel [lonely]. 😔\n4. My brother plays loud music all night — he gets on my [nerves]! 😠\n5. Can I ask you for some [advice]? 🙋\n6. Here's a [tip]: drink water before you check your phone in the morning. 💡\n7. You should [avoid] sugar before bed. 🙅🍬\n8. Don't shout. Sit down and [calm] down. 😌",
    ),
  ]),

  section("Reading: Ask Anna", [
    tip("Read one letter at a time. Before reading Anna's answer, ask the student: *What should he / she do?* Then compare with Anna's advice — who gave better advice? 😄"),
    trueFalse(
      "Read the letters and the answers. True or false?",
      [
        ["Arman can't sleep because he plays games late.", true],
        ["Anna says Arman should play games in bed.", false],
        ["Zarina's flatmate never washes the dishes.", true],
        ["Anna thinks Zarina should move out immediately.", false],
        ["Ben feels lonely in his new city.", true],
        ["Anna says Ben should join a club or a team.", true],
      ],
      {
        read: [
          "## 💌 Ask Anna — your problems, my advice",
          "**Arman, 19:** *I can't sleep. I go to bed at 1 a.m. after playing games, and then I lie awake for hours. In the morning I'm a zombie. 🧟 What should I do?*",
          "**Anna:** *You should stop playing an hour before bed — the light from the screen keeps your brain awake. You shouldn't drink energy drinks or coffee after 4 p.m. And try to go to bed at the same time every night — even on weekends!*",
          "**Zarina, 23:** *My flatmate never washes the dishes. The kitchen is a disaster! 🍝🍽️ It really gets on my nerves, but I don't want to argue.*",
          "**Anna:** *You shouldn't wait until you explode! 💥 You should talk it over calmly — maybe over a cup of tea. Make a cleaning plan together. Don't move out yet — first try to find a solution.*",
          "**Ben, 27:** *I moved to Almaty for work three months ago. I don't know anyone here, and I feel lonely in the evenings. 😔*",
          "**Anna:** *That's normal — you shouldn't worry! You should join a club or a sports team — running clubs, board games, language exchanges. Say yes to every invitation from colleagues. And you should learn some Kazakh — people will love it!* 😊",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "When should Arman stop playing, says Anna?", options: ["*an hour before bed", "at midnight", "after dinner"] },
      { q: "What shouldn't Arman drink after 4 p.m.?", options: ["*coffee and energy drinks", "water", "tea with honey"] },
      { q: "What does Anna suggest for Zarina?", options: ["*Make a cleaning plan together.", "Move out tomorrow.", "Wash the dishes herself."] },
      { q: "How long has Ben lived in Almaty?", options: ["*for three months", "for three years", "since last week"] },
    ]),
    text("Talk to your teacher.", "- Which advice is the best, do you think? Which one would you change?\n- Have you ever had a problem like Arman's, Zarina's or Ben's? What did you do?"),
  ]),

  section("Grammar: should / shouldn't", [
    quiz("Notice the rule 🔍 Look: “You should stop playing an hour before bed. You shouldn't drink coffee after 4 p.m. What should I do?” Which is true?", [
      { q: "should is for…", options: ["*advice — it's a good idea", "rules — you must", "the past"] },
      { q: "After should we use…", options: ["*the verb without to: should stop", "to + verb: should to stop", "-ing: should stopping"] },
      { q: "“What should I do?” — the question is…", options: ["*question word + should + person + verb", "What I should do?", "What do I should do?"] },
    ]),
    table("should"),
    choose(
      "Choose.",
      "1. You look tired. You [*should/should to] go to bed.\n2. You [*shouldn't/don't should] eat so much sugar.\n3. What [*should I/I should] wear to the interview?\n4. I think you [*should/shouldn't] tell her the truth. It's important.\n5. You [*shouldn't/should] drive when you're tired. It's dangerous!\n6. [*Should I/Do I should] call him?\n7. I don't think you [*should/shouldn't] buy it. It's too expensive.\n8. He [*should/shoulds] see a doctor.",
    ),
    gaps(
      "Give advice with should or shouldn't.",
      "1. “I'm always tired.” — You [should] sleep more. 😴\n2. “I've got a test tomorrow.” — You [shouldn't/should not] stay up late. 📚\n3. “I'm broke.” — You [shouldn't/should not] buy new clothes this month. 💸\n4. “I feel lonely.” — You [should] call your friends. 📞\n5. “My tooth hurts.” — You [should] see a dentist. 🦷\n6. “I'm stressed.” — You [should] go for a walk. 🚶\n7. “I always argue with my sister.” — You [should] talk it over. 🗣️\n8. “I eat fast food every day.” — You [shouldn't/should not] eat so much fast food. 🍔",
    ),
    drag(
      "Complete the chat.",
      "A: I have a job interview tomorrow and I'm so nervous! 😰 What [should] I do?\nB: First, you should [go] to bed early tonight.\nA: OK. What should I [wear]?\nB: You [should] wear something smart, but comfortable.\nA: Should I [take] my CV?\nB: Yes, you [should]! And you shouldn't [be] late — leave home early.\nA: Should I ask questions?\nB: Yes — but you [shouldn't] ask about the salary first! 😄",
      ["to go", "wearing", "musts"],
    ),
    order("Make sentences and questions.", [
      "You should drink more water.",
      "You shouldn't go to bed so late.",
      "What should I do?",
      "Should I call her?",
      "I don't think you should buy it.",
    ]),
  ]),

  section("Say it right: should", [
    box(
      "🗣️ Say it right: silent letters",
      "In **should**, **could** and **would**, the **l** is silent! 🤫\n\n*should* /ʃʊd/ · *could* /kʊd/ · *would* /wʊd/\n\n**shouldn't** /ˈʃʊdnt/ — almost no sound between **d** and **n**.\n\nMore silent letters: *lis**t**en, **w**rite, **k**now, ha**l**f, We**d**nesday* 🤯",
    ),
    quiz("Which letter is silent? Choose.", [
      { q: "should", options: ["*l", "d", "h"] },
      { q: "listen", options: ["*t", "s", "n"] },
      { q: "know", options: ["*k", "w", "n"] },
      { q: "half", options: ["*l", "h", "f"] },
    ]),
    tip("Read the words aloud with the student — exaggerate the silence: *shou-🤫-d*. Then the student gives you 3 pieces of advice fast with *should / shouldn't*."),
  ]),

  section("Listening: The advice show", [
    ...listening(
      "Listen to a radio show. Two listeners call and ask for advice.",
      "**Host:** You're listening to “Help Line” on City Radio. Our first caller is Tom. Hi, Tom, what's the problem?\n\n**Tom:** Hi! It's my parents. I'm twenty, and they want me to study law. But I want to be a chef. 👨‍🍳 Every dinner, we argue about it.\n\n**Host:** That's difficult. Have you told them why you want to be a chef?\n\n**Tom:** Not really. I just get angry and leave the table.\n\n**Host:** I think you should talk it over calmly. You should show them you're serious — maybe cook a special dinner for them! And you should find a cooking course and show them the plan. Parents worry about money and the future.\n\n**Tom:** Cook for them… That's a great idea! Thanks!\n\n**Host:** Our next caller is Dana. Hi, Dana!\n\n**Dana:** Hi! My problem is my phone. I check it all the time — even at night. I can't focus on my studies. 📱\n\n**Host:** You're not alone, Dana! You should turn off your notifications. And you shouldn't sleep with your phone next to you — buy an old alarm clock instead. ⏰\n\n**Dana:** An alarm clock? Like my grandma's? 😄\n\n**Host:** Exactly! And when you study, you should put your phone in another room.\n\n**Dana:** OK, I'll try. Thank you!\n\n**Host:** Good luck to both of you. More advice after the news!",
    ),
    quiz("Listen and choose.", [
      { q: "What do Tom's parents want him to study?", options: ["*law", "cooking", "medicine"] },
      { q: "What does Tom do when they argue?", options: ["*He gets angry and leaves the table.", "He cooks dinner.", "He calls the radio."] },
      { q: "What does the host suggest for Tom?", options: ["*Cook a special dinner for his parents.", "Leave home.", "Study law."] },
      { q: "What's Dana's problem?", options: ["*She checks her phone all the time.", "She can't sleep because of noise.", "She argues with her parents."] },
      { q: "What should Dana buy?", options: ["*an alarm clock", "a new phone", "a lamp"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Tom is twenty years old.", true],
      ["Tom has explained to his parents why he wants to be a chef.", false],
      ["The host says parents worry about money and the future.", true],
      ["The host says Dana should sleep with her phone next to her.", false],
      ["Dana should put her phone in another room when she studies.", true],
    ]),
  ]),

  section("Let's talk: Advice circle", [
    text(
      "Advice circle 💬",
      "Think of a real small problem in your life (or invent one!): sleep, money, work, a flatmate, learning English, motivation… Tell your teacher.\n\nYour teacher gives 2 pieces of advice. Do you agree? *That's a good idea! / I don't think that will work, because…*\n\nThen your teacher tells you a problem — your turn to help! 🦸",
    ),
    text(
      "Talk to your teacher.",
      "- What advice would you give your 15-year-old self? 🧒\n- What advice do your parents always give you? Do you follow it? 😄\n- What should a person do to learn English faster? Give 3 tips! 🇬🇧\n- Is it better to ask friends or the internet for advice? Why?",
    ),
    tip("*If you have time:* “Bad advice” game 😈 — give terrible advice to problems: *I'm broke. — You should buy a Ferrari!* The student corrects it with good advice."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "You ___ go to bed earlier.", options: ["*should", "should to", "shoulds"] },
      { q: "___ I call her?", options: ["*Should", "Do I should", "I should"] },
      { q: "have no money (informal) =", options: ["*be broke", "be lonely", "be stressed"] },
      { q: "In should, the ___ is silent.", options: ["*l", "d", "sh"] },
    ]),
    box("Word of the day: an agony aunt", "**an agony aunt** 💌 = a person who answers readers' problems in a magazine or online.\n\n*If Anna is an agony aunt, what's a man called? An agony uncle!* 😄"),
  ]),

  homework(
    [
      gaps(
        "Complete.",
        "1. I have no money. I'm [broke]. 💸\n2. My flatmate gets on my [nerves]. 😠\n3. Can you give me some [advice]? 💡\n4. You should [avoid] coffee in the evening. 🙅☕\n5. Let's talk it [over]. 🗣️\n6. Please calm [down]! 😌",
      ),
      match("Match the problems and the advice.", [
        ["I can't sleep.", "You shouldn't use your phone in bed."],
        ["I'm always late.", "You should set two alarms."],
        ["I feel lonely.", "You should join a club."],
        ["I'm broke.", "You should make a budget."],
        ["I've got a headache.", "You should drink some water."],
        ["I'm stressed about my exams.", "You should make a study plan."],
      ]),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      video("Watch: giving advice with should and shouldn't.", "OxO7YB-lNS0"),
      choose(
        "Choose.",
        "1. You [*should/should to] try this café!\n2. He [*shouldn't/doesn't should] work so much.\n3. What [*should we/we should] do this weekend?\n4. I think you [*should/shouldn't] apologize. You were wrong.\n5. [*Should/Do] I buy the red one or the blue one?\n6. You [*shouldn't/should] text and drive!",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      write("Be an agony aunt! Answer this letter with 4–5 pieces of advice: “I want to learn English, but I never have time. I work all day and I'm tired in the evening. What should I do? — Aliya” (60+ words)", 60, {
        read: "*Example start:* Dear Aliya, Don't worry — you can learn English even when you're busy! First, you should listen to English podcasts on your way to work… You shouldn't…",
      }),
      record("Record a voice message: tell your teacher about a real (small) problem and ask for advice. Your teacher will reply with advice! (1 minute)", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
