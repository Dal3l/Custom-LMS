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

// 8.1 School and work rules — G: have to / don't have to, must / mustn't. V: work and study. Say it right: have to /ˈhæftə/. S: talk about rules at work, at school and at home. Main format: a sign game + reading (rules in three jobs) + a long listening (first day at work, ~2 min). No video in class.
export default lesson("a2-8.1", "School and work rules", () => [
  section("Warm-up: What does the sign say?", [
    box("Today you will…", "- talk about rules: *You have to… You mustn't… You don't have to…* 📋\n- talk about rules at your work, school and home\n- design the perfect workplace 🏢"),
    quiz("What does the sign mean? Choose.", [
      { q: "📵 (in a cinema)", options: ["*Don't use your phone.", "Phones are free here.", "Call your friends."] },
      { q: "🚭 (in a café)", options: ["*No smoking.", "Smoking is OK.", "Buy cigarettes here."] },
      { q: "🐕❌ (at a shop door)", options: ["*No dogs inside.", "Dogs are welcome.", "Buy dog food here."] },
      { q: "⛑️ (at a building site)", options: ["*Wear a helmet.", "Helmets for sale.", "No helmets."] },
      { q: "🤫 (in a library)", options: ["*Be quiet.", "Sing here.", "Talk on the phone."] },
    ]),
    text(
      "Talk to your teacher.",
      "- What rule at school did you hate the most? Why? 🏫\n- What rules do you have at work or at school now? Which one is the strangest? 💼\n- Does your family have rules at home? (no phones at dinner, take off your shoes…) 🏠\n- Are you a person who follows rules or breaks them? 😇😈",
    ),
    tip("Tell the student about a strange rule from your own school days — it always works. Write their rules on the board in simple English; after the grammar, you'll make them better: *We have to… We mustn't…*"),
  ]),

  section("Vocabulary: Work and study", [
    words("Work and study", [
      ["a uniform — a dress code", "👔 clothes everyone wears — rules about clothes", "Our office has a strict dress code."],
      ["be on time — be late", "⏰✅ — ⏰❌"],
      ["a shift — a night shift", "🕐 working time — 🌙 working at night"],
      ["a break — a lunch break", "☕ a short rest"],
      ["a day off", "🛋️ a day with no work"],
      ["work overtime", "⏳💼 work more hours than usual"],
      ["a manager — an employee", "👩‍💼 the boss — 👨‍💻 a worker"],
      ["allowed — not allowed", "✅ you can — ❌ you can't", "Phones aren't allowed in the exam."],
      ["get permission", "🙋✅ ask and get a yes"],
      ["strict — relaxed", "😠📏 a lot of rules — 😎 not many rules"],
      ["a fine", "💸 money you pay when you break a rule"],
      ["follow the rules — break the rules", "📋✅ — 📋❌"],
    ]),
    match("Match.", [
      ["a night", "shift"],
      ["a lunch", "break"],
      ["work", "overtime"],
      ["get", "permission"],
      ["a dress", "code"],
      ["follow", "the rules"],
    ]),
    sort("Strict or relaxed? Sort. 😠😎", {
      "😠 strict": ["You have to wear a suit.", "You mustn't be late — never!", "Phones aren't allowed.", "You have to ask permission to leave."],
      "😎 relaxed": ["You can wear jeans.", "You don't have to start at 9.", "You can work from home.", "You can bring your dog."],
    }),
    gaps(
      "Complete.",
      "1. Nurses often work at night. They have night [shifts]. 🌙\n2. In our school, everyone wears the same clothes — a [uniform]. 👔\n3. I worked 10 hours yesterday — 2 hours [overtime]. ⏳\n4. Tomorrow is my day [off]! 🛋️\n5. Our teacher is very [strict] — no phones, no talking! 😠\n6. Smoking isn't [allowed] in the building. 🚭\n7. If you park here, you'll get a [fine]. 💸\n8. Please be on [time] — the meeting starts at 9! ⏰",
    ),
  ]),

  section("Reading: Rules at work", [
    tip("Three people talk about the rules in their jobs. After each one, ask: *Is this rule fair? Would you like this job?*"),
    trueFalse(
      "Read the texts. True or false?",
      [
        ["Nurses in Sara's hospital mustn't wear rings at work.", true],
        ["Sara doesn't have to work at night.", false],
        ["Max has to wear a suit to work.", false],
        ["Max can bring his dog to the office.", true],
        ["Pilots mustn't drink alcohol for 8 hours before a flight.", true],
        ["Ali doesn't have to do any tests.", false],
      ],
      {
        read: [
          "## 📋 Rules at work",
          "**🩺 Sara, nurse** — *In our hospital, we have to wear a uniform, and we mustn't wear rings, watches or long nails — it's for hygiene. I have to work night shifts twice a week. It's hard, but you get used to it. The most important rule: we have to wash our hands all the time!* 🧼",
          "**💻 Max, app developer** — *My company is very relaxed. We don't have to wear suits — I wear jeans and a hoodie. 👕 We don't have to start at 9: you can come at 8 or at 11, but you have to work 8 hours. And I can bring my dog, Pixel, to the office! 🐶 The only strict rule: we mustn't talk about our new apps outside the company.*",
          "**✈️ Ali, pilot** — *My job has a lot of rules. I mustn't drink alcohol for at least 8 hours before a flight. I have to do medical tests every year and training in a flight simulator twice a year. Before every flight, we have to check the plane with a long checklist. It sounds boring, but rules keep everyone safe.* 🛫",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Why mustn't Sara wear rings at work?", options: ["*for hygiene", "because they're expensive", "because her boss doesn't like them"] },
      { q: "How many hours does Max have to work?", options: ["*8 hours", "6 hours", "10 hours"] },
      { q: "What's Max's dog's name?", options: ["*Pixel", "Max", "Bo"] },
      { q: "What do pilots have to do before every flight?", options: ["*check the plane with a checklist", "do a medical test", "train in a simulator"] },
    ]),
    text("Talk to your teacher.", "- Which job has the most rules? Which rules are the most important?\n- Would you like to work in Max's company? Why / why not? 🐶💻"),
  ]),

  section("Grammar: have to, must, mustn't", [
    quiz("Notice the rule 🔍 Look: “We have to wear a uniform. We don't have to wear suits. We mustn't talk about our apps.” Which is true?", [
      { q: "have to = …", options: ["*it's necessary, it's a rule", "it's not necessary", "it's not allowed"] },
      { q: "don't have to = …", options: ["*it's not necessary — you can choose", "it's not allowed", "it's a strong rule"] },
      { q: "mustn't = …", options: ["*it's not allowed — don't do it!", "it's not necessary", "it's a good idea"] },
    ]),
    table("have-to-must"),
    sort("mustn't or don't have to? Sort. ⛔🆓", {
      "⛔ mustn't (not allowed)": ["use your phone in the exam", "smoke in the hospital", "drive without a license", "be late for a flight"],
      "🆓 don't have to (not necessary)": ["wear a suit at Max's office", "start work at 9", "pay for the museum on Sundays", "come to the party — it's OK"],
    }),
    choose(
      "Choose.",
      "1. In my school we [*have to/has to] wear a uniform.\n2. She [*has to/have to] work on Saturdays.\n3. You [*mustn't/don't have to] smoke here — it's a hospital!\n4. It's Sunday! I [*don't have to/mustn't] get up early. 😴\n5. [*Do/Does] you have to work tomorrow?\n6. He [*doesn't have to/don't have to] wear a tie.\n7. You [*must/have] wear a seatbelt in a car.\n8. Yesterday I [*had to/must] stay late at work.",
    ),
    gaps(
      "Complete with have to, has to, don't have to, doesn't have to or mustn't.",
      "1. Pilots [have to] do medical tests every year. ✅\n2. Max [doesn't have to/does not have to] wear a suit. 🆓\n3. You [mustn't/must not] use your phone during the exam. ⛔\n4. Sara [has to] wash her hands all the time. ✅\n5. Children [don't have to/do not have to] pay — it's free for them! 🆓\n6. You [mustn't/must not] park here — it's for ambulances. ⛔\n7. [Do] you [have] to wear a uniform at work?\n8. We [don't have to/do not have to] start at 9 — we can come at 10. 🆓",
    ),
    drag(
      "Complete the chat.",
      "A: How's your new job?\nB: Great! I [don't] have to wear a suit — jeans are OK! 👖\nA: Lucky! Do you have [to] start early?\nB: No, I don't. But I [have] to work 8 hours a day.\nA: Do you have to work at weekends?\nB: No, I [don't]. But last Saturday I [had] to come in — there was a problem. 😩\nA: And can you use your phone at work?\nB: Yes, but we [mustn't] post photos of the office. It's a secret project! 🤫\nA: Ooh! Does your boss [have] to know everything?\nB: Yes, she [has] to. She's the boss!",
      ["must", "musted", "doesn't"],
    ),
    order("Make sentences.", [
      "You have to wear a uniform.",
      "We don't have to work on Sundays.",
      "You mustn't use your phone here.",
      "Does she have to work at night?",
      "I had to get up at five yesterday.",
    ]),
  ]),

  section("Say it right: have to", [
    box(
      "🗣️ Say it right",
      "**have to** sounds like **“hafta”** /ˈhæftə/ — the **v** becomes **f**!\n\n**has to** → **“hasta”** /ˈhæstə/\n\n**had to** → **“hadta”** /ˈhættə/\n\n*I have to go!* → “I **hafta** go!” · *She has to work.* → “She **hasta** work.”",
    ),
    quiz("How does it sound? Choose.", [
      { q: "I have to leave.", options: ["*I hafta leave.", "I hav-to leave.", "I have-too leave."] },
      { q: "He has to work.", options: ["*He hasta work.", "He haz-to work.", "He has-two work."] },
      { q: "We have to wait.", options: ["*We hafta wait.", "We hav-to wait.", "We haff-two wait."] },
      { q: "She had to go.", options: ["*She hadta go.", "She had-two go.", "She ha-to go."] },
    ]),
    tip("Say the sentences slowly, then fast with *hafta / hasta*. Then a game: the student says 5 things they *have to* do this week — fast! ⚡"),
  ]),

  section("Listening: First day at work", [
    tip("A long listening — about 2 minutes. First listen: *Is the company strict or relaxed?* Second listen: the details — times, rules, names."),
    ...listening(
      "Listen. It's Mia's first day at a new job in a café chain office. Her manager explains the rules.",
      "**Woman:** Good morning, Mia! Welcome to Green Bean Coffee. I'm Laura, your manager. Let me explain how things work here.\n\n**Mia:** Thank you! I'm a bit nervous.\n\n**Woman:** Don't worry, we're quite relaxed. First — working hours. You don't have to come at exactly nine. You can start between eight and ten, but you have to work eight hours a day.\n\n**Mia:** Great! And what about lunch?\n\n**Woman:** You have a one-hour lunch break. And coffee is free for employees, of course! ☕ You mustn't take more than three cups a day, though — that's the rule. 😄\n\n**Mia:** Ha! OK. Is there a dress code?\n\n**Woman:** Not really. You don't have to wear a suit. Just look neat. But on Fridays, when we visit our cafés, you have to wear the green company T-shirt.\n\n**Mia:** Can I work from home sometimes?\n\n**Woman:** Yes, on Wednesdays everyone works from home. But you have to answer messages during working hours.\n\n**Mia:** And what's the most important rule?\n\n**Woman:** Hmm… You mustn't share our new recipes with anyone outside the company. They're top secret! 🤫 And one more thing — every Monday at ten we have a team meeting. You mustn't be late for that one!\n\n**Mia:** Got it. Monday at ten, three coffees a day, and keep the secrets!\n\n**Woman:** Perfect. You'll be fine. Let's go and meet the team!",
    ),
    quiz("Listen and choose.", [
      { q: "What time can Mia start work?", options: ["*between eight and ten", "at exactly nine", "at eleven"] },
      { q: "How long is the lunch break?", options: ["*one hour", "thirty minutes", "two hours"] },
      { q: "What do employees have to wear on Fridays?", options: ["*a green company T-shirt", "a suit", "a uniform"] },
      { q: "When does everyone work from home?", options: ["*on Wednesdays", "on Fridays", "on Mondays"] },
      { q: "When is the team meeting?", options: ["*every Monday at ten", "every Friday at nine", "every day at eight"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Laura is Mia's manager.", true],
      ["Employees have to pay for coffee.", false],
      ["Employees mustn't drink more than three coffees a day.", true],
      ["Mia has to wear a suit every day.", false],
      ["When people work from home, they don't have to answer messages.", false],
      ["The new recipes are a secret.", true],
    ]),
  ]),

  section("Let's talk: Rules, rules, rules", [
    text(
      "Talk about your rules 📋",
      "Tell your teacher about the rules where **you** work or study (or where you studied):\n\n- What do you **have to** do? (wear something, be on time, work at weekends…)\n- What **don't** you **have to** do?\n- What **mustn't** you do?\n- Which rule is the most useful? Which is the most stupid? 🤪\n\nThen your teacher tells you about their work!",
    ),
    text(
      "Design the perfect workplace 🏢",
      "You're the boss! Make 6 rules for your perfect company or school:\n\n*Employees don't have to… Everyone has to… Nobody must… You can…*\n\nYour teacher is a new employee and asks: *Do I have to…? Can I…?* 😄",
    ),
    tip("*If you have time:* family rules — *What rules did you have to follow as a child? Which rules will you have for your own kids (or have now)?* This often brings great stories."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "It's not necessary = …", options: ["*You don't have to.", "You mustn't.", "You have to."] },
      { q: "It's not allowed = …", options: ["*You mustn't.", "You don't have to.", "You should."] },
      { q: "She ___ wear a uniform.", options: ["*has to", "have to", "has"] },
      { q: "Yesterday I ___ work late.", options: ["*had to", "must", "have to"] },
    ]),
    box("Word of the day: work-life balance", "**work-life balance** ⚖️ = a good mix of work and free time.\n\n*Max's company has a great work-life balance: flexible hours, and you can bring your dog!* 🐶"),
  ]),

  homework(
    [
      gaps(
        "Write the word.",
        "1. 👔 clothes everyone wears: a [uniform]\n2. 🌙 working at night: a night [shift]\n3. 🛋️ a day with no work: a day [off]\n4. 💸 money you pay when you break a rule: a [fine]\n5. 😠 a lot of rules: [strict]\n6. ⏳ work more hours than usual: work [overtime]",
      ),
      match("Match the signs and the rules.", [
        ["📵", "You mustn't use your phone."],
        ["🚭", "You mustn't smoke."],
        ["⛑️", "You have to wear a helmet."],
        ["🆓🎟️", "You don't have to pay."],
        ["🤫", "You have to be quiet."],
        ["🐕❌", "Dogs aren't allowed."],
      ]),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      video("Watch: have to and must (BBC — The Grammar Gameshow).", "O-jJPd5ZYo4"),
      choose(
        "Choose.",
        "1. You [*mustn't/don't have to] touch the paintings in the museum.\n2. Tomorrow is a holiday — we [*don't have to/mustn't] go to work.\n3. He [*has to/have to] wear glasses for driving.\n4. [*Do/Have] you have to show your passport?\n5. Last year I [*had to/must] take the bus every day.\n6. Students [*mustn't/don't have to] cheat in exams!",
      ),
      gaps(
        "Complete with the right form of have to, don't have to or mustn't.",
        "1. Nurses [have to] wash their hands all the time. ✅\n2. It's free! You [don't have to/do not have to] pay. 🆓\n3. You [mustn't/must not] swim here — it's dangerous! ⛔\n4. My brother [has to] get up at 6 for work. ✅\n5. She [doesn't have to/does not have to] work on Sundays. 🆓\n6. Last week we [had to] work overtime. ✅ (past)",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      write("Write about the rules at your work or school (or your last school): 3 things you have to do, 2 things you don't have to do and 2 things you mustn't do. Which rule would you change? (60+ words)", 60, {
        read: "*Example:* At my university, we have to be on time for lectures and we have to wear a student card. We have to write a lot of essays! 📚 We don't have to wear a uniform, and we don't have to go to every lecture. We mustn't use our phones in exams, and we mustn't eat in the library. I'd change the library rule — studying is hungry work! 😄",
      }),
      record("Record your answer: What's the strangest rule you've ever had at school, at work or at home? (1 minute)", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
