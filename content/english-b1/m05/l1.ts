import {
  box,
  choose,
  drag,
  gaps,
  homework,
  lesson,
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
  words,
  write,
} from "../../kit";

// 5.1 What does it take? — G: need to / don't need to / needn't, be allowed to, be supposed to (+ review of have to / mustn't). V: work (deadline, overtime, shifts, qualifications…). Say it right: needn't, mustn't — silent t. S: discuss jobs and their rules; game "What's my job?". Main format: a reading (four unusual jobs, ~400 words) + a guessing game. No video.
export default lesson("b1-5.1", "What does it take?", () => [
  section("Warm-up: Hard jobs", [
    box(
      "Today you will…",
      "- talk about what different jobs need: skills, rules, sacrifices 💼\n- use *need to, needn't, be allowed to, be supposed to* 📋\n- play “What's my job?” 🕵️",
    ),
    text(
      "Talk to your teacher.",
      "- Which job do you think is the hardest in the world? Why — the stress, the hours, the responsibility? 🏋️\n- What's a rule at your work or school that you think is silly? What rule would you add? 📏\n- Would you do a job you love for half the money? Where's your limit? 💸",
    ),
    tip("Push for reasons and examples. If the student works, ask about real rules at their workplace (dress code, phones, breaks) — it prepares the grammar naturally."),
  ]),

  section("Vocabulary: Work", [
    words("Work", [
      ["a deadline", "⏰ the time when work must be finished", "The deadline for the report is Friday."],
      ["work overtime", "🌙 work more hours than usual"],
      ["work shifts", "🔄 work at different times (day, night)", "Nurses often work night shifts."],
      ["qualifications", "📜 exams and certificates you have passed"],
      ["experience", "🧳 knowledge from doing a job"],
      ["responsibility", "🏋️ a duty to look after something or someone"],
      ["under pressure", "😰 with a lot of stress to do something", "I work well under pressure."],
      ["a dress code", "👔 rules about what clothes to wear"],
      ["flexible hours", "🕐 you can choose when you start and finish"],
      ["a salary — a wage", "💰 money per year/month — money per hour/week"],
      ["self-employed", "🧑‍💻 working for yourself, not for a company"],
      ["a perk", "🎁 an extra good thing in a job (free lunch, a gym…)"],
    ]),
    match("Match.", [
      ["meet", "a deadline"],
      ["work", "overtime"],
      ["work under", "pressure"],
      ["have", "flexible hours"],
      ["earn", "a good salary"],
      ["need", "qualifications"],
    ]),
    gaps(
      "Complete with a word from the list above.",
      "1. I have to finish this by 5 p.m. — the [deadline] is today! ⏰\n2. Doctors in hospitals often work night [shifts]. 🌙\n3. Our company has a strict dress [code]: suits and ties only. 👔\n4. I can start at 8 or 10 — I have flexible [hours].\n5. She works for herself. She's [self-employed].\n6. Free coffee and a gym at the office are nice [perks]. 🎁\n7. Pilots have a lot of [responsibility] — hundreds of lives are in their hands.\n8. He doesn't have a degree, but he has ten years of [experience].",
    ),
    quiz("Choose the right word.", [
      { q: "Waiters often get a ___ per hour, plus tips.", options: ["*wage", "perk", "deadline"] },
      { q: "We had a big project, so I worked ___ every day last week.", options: ["*overtime", "self-employed", "flexible"] },
      { q: "You need special ___ to work as a pilot.", options: ["*qualifications", "perks", "shifts"] },
      { q: "Air traffic controllers work under a lot of ___.", options: ["*pressure", "salary", "dress code"] },
    ]),
    sort("Good or bad side of a job? Sort. 👍👎", {
      "👍 good side": ["flexible hours", "a good salary", "free lunch", "working from home", "friendly colleagues"],
      "👎 bad side": ["night shifts", "tight deadlines", "a strict dress code", "unpaid overtime", "a long commute"],
    }),
  ]),

  section("Reading: Not your usual job", [
    tip("Four short texts (~400 words). First reading: *Which job would you most like to try? Which one never?* Then the tasks. Ask the student to highlight *need to, don't need to, allowed to, supposed to* — the next grammar."),
    trueFalse(
      "Read about four people and their jobs. True or false?",
      [
        ["Marat needs to have perfect English for his job.", true],
        ["Marat is allowed to drink coffee on duty.", false],
        ["Aliya didn't need a university degree to become a wildlife vet.", false],
        ["Tom doesn't need to be good at computer games.", false],
        ["Tom is supposed to write reports, but he finds them boring.", true],
        ["Saida needs to work at heights.", true],
      ],
      {
        read: [
          "## 💼 Not your usual job",
          "**✈️ Marat, 38, air traffic controller.** \"My job is to keep planes safe in the sky and on the ground. You need to stay calm under huge pressure, and you need to have excellent English — it's the international language of aviation. We work shifts, including nights, and we aren't allowed to work more than two hours without a break. We aren't allowed to have our phones in the control room, and of course no alcohol before a shift. I need to pass a medical test every year. It's stressful, but I love it.\"",
          "**🦁 Aliya, 31, wildlife vet.** \"People think I play with cute animals all day. In fact, I spent six years at university, and I still need to read new research every week. I work in a national park, so I don't need to wear a uniform — just boots and old clothes! 🥾 But I'm not allowed to go near large animals alone: there are always two of us. The worst part? Sometimes you can't save an animal. That's very hard.\"",
          "**🎮 Tom, 24, video game tester.** \"Everyone thinks it's a dream job. And it's fun, but you need to be very patient. You don't just play — you play the same level two hundred times to find mistakes. You need to be good at games, but you also need to write clear reports for the developers. I'm supposed to write one after every session, but honestly, sometimes I forget because they're so boring! 😅 The perks are great, though: flexible hours, and I needn't wear anything formal.\"",
          "**⚡ Saida, 27, wind turbine technician.** \"I repair wind turbines — some are over a hundred meters tall. You need to be fit and not afraid of heights! We're supposed to climb in pairs, and we have to check the weather every morning: we aren't allowed to climb when the wind is too strong. You don't need a university degree, but you need special qualifications and safety training. When I'm at the top, the view is incredible. 🌬️\"",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Who says it?", [
      { q: "“You play the same level two hundred times.”", options: ["*Tom", "Marat", "Saida"] },
      { q: "“There are always two of us.”", options: ["*Aliya", "Tom", "Marat"] },
      { q: "“We check the weather every morning.”", options: ["*Saida", "Aliya", "Tom"] },
      { q: "“I need to pass a medical test every year.”", options: ["*Marat", "Saida", "Aliya"] },
    ]),
    match("Match the people and the rules of their jobs.", [
      ["Marat", "no phones in the control room"],
      ["Aliya", "never near large animals alone"],
      ["Tom", "a report after every session"],
      ["Saida", "no climbing in strong wind"],
      ["Marat and Saida", "special training and tests"],
      ["Aliya and Tom", "no formal clothes"],
    ]),
  ]),

  section("Grammar: Rules and freedom", [
    quiz("Notice the rule 🔍 Look: “You need to stay calm.” “I don't need to wear a uniform.” “We aren't allowed to work more than two hours.” “I'm supposed to write a report, but sometimes I forget.”", [
      { q: "“I don't need to wear a uniform” means…", options: ["*It isn't necessary.", "It's not allowed.", "It's a good idea."] },
      { q: "“We aren't allowed to…” means…", options: ["*It's against the rules.", "It's not necessary.", "We don't want to."] },
      { q: "“I'm supposed to write a report” means…", options: ["*It's expected, but Tom doesn't always do it.", "He loves writing reports.", "He's not allowed to write it."] },
    ]),
    table("obligation"),
    choose(
      "Choose the right phrase.",
      "1. You [*don't need to/aren't allowed to] bring food — lunch is free. 🍝\n2. Passengers [*aren't allowed to/don't need to] smoke on the plane. 🚭\n3. I'm [*supposed to/allowed to] be at work at 9, but the bus was late again.\n4. You [*needn't/mustn't] worry — everything's fine.\n5. Students [*are allowed to/need to] use dictionaries in this exam — it's OK.\n6. Do I [*need to/needn't] book a table, or can we just come?\n7. We [*were supposed to/were allowed to] finish yesterday, but we didn't.\n8. You [*mustn't/don't have to] touch the paintings in the museum.",
    ),
    gaps(
      "Rewrite the sentences. Use the word in brackets.",
      "1. It isn't necessary to come early. → You [needn't] come early. (needn't)\n2. It's OK to wear jeans on Fridays. → We [are allowed to/'re allowed to] wear jeans on Fridays. (allowed)\n3. You can't park here. → You [aren't allowed to/are not allowed to] park here. (allowed)\n4. It's necessary to have a visa. → You [need to] have a visa. (need)\n5. The plan was to leave at 6, but we left at 8. → We [were supposed to] leave at 6. (supposed)\n6. It isn't necessary to print the ticket. → You [don't need to/do not need to] print the ticket. (need)\n7. Is it OK to take photos here? → [Are we allowed to] take photos here? (allowed)\n8. Everyone expects you to say thank you. → You [are supposed to/'re supposed to] say thank you. (supposed)",
    ),
    sort("Necessary, not necessary or not allowed? Sort. ✅🆗⛔", {
      "✅ necessary": ["You need to show your passport.", "Drivers have to stop at red lights.", "Pilots need to pass medical tests."],
      "🆗 not necessary": ["You needn't print the ticket.", "We don't have to wear a uniform.", "You don't need to book."],
      "⛔ not allowed": ["You aren't allowed to smoke here.", "You mustn't use your phone in the exam.", "Visitors can't feed the animals."],
    }),
    drag(
      "Complete the new employee's questions.",
      "A: Do I [need] to wear a suit?\nB: No, you [needn't]. Smart-casual is fine. But you're [supposed] to wear your ID card all the time.\nA: Are we [allowed] to work from home?\nB: Yes, on Fridays. But you [aren't] allowed to take the office laptop abroad.\nA: And lunch? Do I [have] to bring my own?\nB: No — it's free! It's one of the best perks here. 😄",
      ["needs", "must", "allow", "don't"],
    ),
    order("Make sentences.", [
      "You needn't bring anything.",
      "We aren't allowed to use our phones in class.",
      "I'm supposed to start work at nine.",
      "Do I need to book in advance?",
      "Visitors are allowed to take photos.",
    ]),
  ]),

  section("Say it right: needn't, mustn't", [
    box(
      "🗣️ Say it right",
      "The first **t** in **mustn't** is silent: **/ˈmʌsənt/** — “*MUS-ent*”.\n\nIn **needn't** — **/ˈniːdənt/** — the final **t** is very soft, often you hardly hear it.\n\n*You **mustn't** be late.* · *You **needn't** worry.*",
    ),
    quiz("Listen to your teacher. Which is natural?", [
      { q: "mustn't", options: ["*/ˈmʌsənt/ — MUS-ent", "/ˈmʌstənt/ — MUST-ent"] },
      { q: "You needn't worry.", options: ["*/ˈniːdənt/ — soft t", "/ˈniːd nɒt/ — need not (very formal)"] },
      { q: "You mustn't touch it!", options: ["*stress on MUST", "stress on touch only"] },
      { q: "We aren't allowed to park here.", options: ["*/əˈlaʊd/ — like 'aloud'", "/əˈləʊd/ — like 'a load'"] },
    ]),
    tip("Model each sentence, then drill fast: *You mustn't… You needn't… We aren't allowed to…* The student completes with real rules from their life."),
  ]),

  section("Let's talk: What's my job?", [
    text(
      "Game: What's my job? 🕵️",
      "Your teacher thinks of a job. Ask up to 15 Yes / No questions to guess it:\n\n*Do you need to wear a uniform? Are you allowed to work from home? Do you have to work shifts? Do you need a degree? Are you supposed to… ? Do you work under pressure?*\n\nThen swap — you think of a job and your teacher asks. 🎯",
    ),
    text(
      "Talk to your teacher.",
      "- What do you need to do in your job or studies that you'd happily stop? What do you love?\n- Which perk would make you accept a lower salary: flexible hours, working from home, a 4-day week…? 🎁\n- Should employees be allowed to use their phones at work? Why / why not?\n- What are you supposed to do this week that you haven't done yet? Be honest! 😅",
    ),
    tip("*If you have time:* “Rules for a perfect workplace” — together, write five rules for an ideal company using the target phrases (*Employees are allowed to… Nobody needs to… Managers are supposed to…*)."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "It's not necessary. =", options: ["*You needn't do it.", "You mustn't do it.", "You aren't allowed to do it."] },
      { q: "It's against the rules. =", options: ["*You aren't allowed to do it.", "You don't need to do it.", "You're supposed to do it."] },
      { q: "the time when work must be finished =", options: ["*a deadline", "a shift", "a perk"] },
      { q: "working for yourself =", options: ["*self-employed", "overtime", "flexible"] },
    ]),
    box(
      "Phrase of the day: snowed under",
      "⚖️ **I'm snowed under** = I have too much work.\n\n*Sorry, I can't come tonight — I'm snowed under with work this week.* ❄️📚",
    ),
  ]),

  homework(
    [
      choose(
        "Choose.",
        "1. You [*needn't/mustn't] pay — the concert is free.\n2. Children [*aren't allowed to/don't need to] swim here without an adult.\n3. I [*was supposed to/was allowed to] call my mom yesterday, but I forgot. 😬\n4. Do we [*need to/needn't] bring our passports?\n5. Employees [*are allowed to/are supposed to not] take a one-hour lunch break.\n6. You [*mustn't/don't need to] tell anyone — it's a secret!\n7. We [*don't need to/aren't allowed to] hurry — we have plenty of time.\n8. Students [*are supposed to/allowed to] switch off their phones in class.",
      ),
      gaps(
        "Complete.",
        "1. The [deadline] for the project is next Monday.\n2. Nurses often work night [shifts].\n3. She has flexible [hours], so she can pick up her kids.\n4. A free gym is a nice [perk].\n5. He works for himself — he's [self-employed].\n6. I work well under [pressure].",
      ),
    ],
    "Homework: Grammar and vocabulary",
  ),
  homework(
    [
      write("Write about a job you know well (your job, a parent's job, or a dream job) — 100+ words. What do you need to do? What are you allowed / not allowed to do? What are you supposed to do? What are the perks?", 100, {
        read: "*Example:* My mom is a primary school teacher. She needs to be at school at 7:45 every morning, and she's supposed to check all the homework the same day — but with 30 kids, that's impossible! 😅 Teachers aren't allowed to use their phones in class, and they need to be very patient. The perks? Long summer holidays, and the kids sometimes bring her flowers. 💐 She doesn't need to wear a uniform, but…",
      }),
      record("Record 1 minute: Describe the rules at your work or school. Which rules are useful, and which would you change? 🎤", 60),
      match("Match the jobs and the rules.", [
        ["a surgeon", "needs to wash their hands for several minutes"],
        ["a pilot", "isn't allowed to drink alcohol before a flight"],
        ["a chef", "is supposed to wear a hat in the kitchen"],
        ["a librarian", "needs to know where every book is"],
        ["a freelancer", "doesn't need to go to an office"],
        ["a referee", "isn't allowed to support one team"],
      ]),
    ],
    "Homework: Writing and speaking",
  ),
]);
