import {
  box,
  choose,
  gaps,
  homework,
  lesson,
  listening,
  match,
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

// 4.2 You are to report… — G: be to (official plans, rules and orders, What am I to…?, if + be to), was / were to (fate), was / were to have done (a plan that didn't happen), be about to / be on the point of; headline style (Minister to visit…). V: career and formal register (comply with, be entitled to, prior to, a notice period…). S: explain rules "officially" and "like a human". Main format: official or friendly? + a long reading (the "right to disconnect", ~760 words) + a long listening (Dias's first day: Aliya explains the handbook, ~3:40).
// Facts checked: France — a law in force since 1 January 2017 requires companies with 50 or more employees to negotiate rules on employees' right to disconnect from work email and phones outside working hours; Portugal — a 2021 law generally forbids employers (with 10 or more employees) from contacting workers outside working hours, with exceptions for emergencies; Australia — a "right to disconnect" for employees came into force on 26 August 2024 (for small businesses a year later): employees can refuse to read or answer work contact outside hours unless the refusal is unreasonable.
// Warm-up format: sort (official notice or friendly version?) — after a match in 4.1. Characters: Kenji (his rule: no meetings after two), Aliya (a designer in his team), Dias (new — a junior developer on his first day).
export default lesson("c1-4.2", "You are to report…", () => [
  section("Warm-up: Official or friendly?", [
    box(
      "Today you will…",
      "- read about countries that gave workers the right to switch off 📵\n- use formal *be to*: *Employees are to… You are not to… The launch was to have taken place…* 📜\n- explain rules “officially” — and then like a human 🙂",
    ),
    sort("Official notice or friendly version? Sort. 🧩", {
      "📜 official": [
        "Employees are to wear their badges at all times.",
        "Visitors are not to enter without an escort.",
        "All staff are to complete the training prior to 30 June.",
        "The office is to remain closed until further notice.",
        "Requests for leave are to be submitted two weeks in advance.",
      ],
      "🙂 friendly": [
        "Don't forget your badge!",
        "Please wait at reception — someone will come and get you.",
        "Could everyone do the training before the end of June?",
        "We're closed for now — we'll let you know when we reopen.",
        "If you want a holiday, just tell us two weeks before.",
      ],
    }),
    text(
      "Talk to your teacher.",
      "- What rules does your workplace, school or family have? Which are written down, and which aren't?\n- Which rule do you find most annoying? Which do you think is the most useful?\n- Do you answer work or study messages in the evening or at the weekend? Should you have to?",
    ),
    tip("Ask the student to match the pairs mentally (the first official sentence goes with the first friendly one, and so on). Point out the features of the official style: *be to*, passives, formal words like *prior to* and *until further notice*."),
  ]),

  section("Grammar: be to — plans, orders and fate", [
    quiz("Notice the rule 🔍 Look: “The minister is to visit Almaty next week.” · “You are not to leave the building.” · “The launch was to have taken place in May.”", [
      { q: "“The minister is to visit Almaty” is…", options: ["*an official plan", "a wish", "a past event"] },
      { q: "“You are not to leave the building” is…", options: ["*a formal order", "a suggestion", "a question"] },
      { q: "“The launch was to have taken place in May.” Did it take place in May?", options: ["*No — the plan didn't happen.", "Yes.", "We don't know."] },
    ]),
    table("be-to"),
    choose(
      "Choose the correct option.",
      "1. The president [*is to/is about] visit three countries next month.\n2. Passengers [*are not to/are not] leave their bags unattended.\n3. What [*am I to/I am to] do if the alarm goes off?\n4. If we [*are to/will] finish on time, we need two more people.\n5. Nobody knew then that she [*was to become/was becoming] a famous architect.\n6. The concert [*was to have taken/was to take] place on Friday, but it was canceled.\n7. We were [*about to/about] leave when the phone rang.\n8. I was on the [*point of/point to] calling you!",
    ),
    gaps(
      "Rewrite the sentences with be to.",
      "1. The government plans to build a new hospital. → The government [is to build] a new hospital.\n2. You mustn't use your phone during the exam. → You [are not to use] your phone during the exam.\n3. What should I tell the client? → What [am I to tell] the client?\n4. They planned to open in May, but they didn't. → They [were to have opened] in May.\n5. Later in life, he became the company's director. (fate) → He [was to become] the company's director.\n6. If we want to win, we need to train harder. → If we [are to win], we need to train harder.",
    ),
    match("Headlines: match the headline and its full meaning.", [
      ["MINISTER TO VISIT ALMATY", "The minister is going to visit Almaty (officially planned)."],
      ["BAKERY CHAIN TO OPEN TEN NEW BRANCHES", "A bakery chain is planning to open ten new branches."],
      ["STAFF TO GET FOUR-DAY WEEK", "Employees are going to have a four-day week."],
      ["CONCERT TO GO AHEAD DESPITE RAIN", "The concert will happen even though it's raining."],
      ["MUSEUM TO CLOSE FOR REPAIRS", "The museum will be closed while it is repaired."],
      ["TEENAGERS NOT TO BE CHARGED", "The teenagers will not face legal charges."],
    ]),
    tip("Say it right: in *be to*, *to* is weak and *be* is usually contracted in speech: *The minister's tə VISit… You're NOT tə LEAVE…* In *was to have taken*, everything is fast except the main verb: /wəz tə həv TEIkən/."),
  ]),

  section("Vocabulary: Formal and neutral", [
    words("Work and formal register", [
      ["comply with", "📏 obey a rule or law (formal)", "All staff are to comply with the safety rules."],
      ["be entitled to", "🎫 have the right to"],
      ["prior to", "⏪ before (formal)"],
      ["commence", "▶️ begin (formal)"],
      ["terminate", "⏹️ end (a contract, formal)"],
      ["in accordance with", "📋 following (a rule or agreement)"],
      ["a notice period", "📆 the time between saying you'll leave a job and actually leaving"],
      ["on probation", "🧪 in a trial period at the start of a job"],
      ["onboarding", "🚪 helping a new employee start their job"],
      ["a performance review", "📊 a meeting to discuss how well you do your job"],
      ["be promoted", "⬆️ get a higher position"],
      ["hand in your notice", "✉️ tell your employer you're leaving"],
    ]),
    match("Match the formal and the neutral words.", [
      ["commence", "start"],
      ["terminate", "end"],
      ["prior to", "before"],
      ["comply with", "follow"],
      ["be entitled to", "have the right to"],
      ["in accordance with", "according to"],
    ]),
    gaps(
      "Complete with a word or phrase from the list above.",
      "1. New employees are on [probation] for the first three months.\n2. She handed in her [notice] and left after a month.\n3. All employees are [entitled] to 24 days of paid holiday.\n4. My notice [period] is four weeks, so I can start in March.\n5. After two years, he was [promoted] to team leader.\n6. Our [onboarding] program helps new people settle in during their first week.",
    ),
  ]),

  section("Grammar check: what happened?", [
    sort("Did it happen? Sort the sentences. 🧩", {
      "✅ it happened (later)": ["She was to become a famous designer.", "It was the first of many trips he was to make.", "They were to meet again twenty years later.", "This was to change everything."],
      "❌ it didn't happen": ["The launch was to have taken place in May.", "We were to have met at six, but he forgot.", "She was to have started in June, but she got ill.", "The bridge was to have opened last year."],
    }),
  ]),

  section("Reading: The right to switch off", [
    tip("A long text (~760 words). First reading — 6 minutes: *Why did Kenji's team introduce the “no meetings after two” rule?* Then the tasks. Ask the student to find four examples of be to."),
    trueFalse(
      "Read the blog post. True or false?",
      [
        ["The French law of 2017 bans all work emails after 6 p.m.", false],
        ["Portugal's law allows some exceptions for emergencies.", true],
        ["Australia's law came into force in 2024.", true],
        ["Kenji's rule was originally planned as a three-month trial.", true],
        ["The team's productivity fell after the rule was introduced.", false],
        ["Aliya thinks laws alone are enough to change working culture.", false],
      ],
      {
        read: [
          "## 📵 The right to switch off",
          "*by Aliya, a designer, for our company blog*",
          "When I joined the company three years ago, I had a phone that never slept. Messages arrived at breakfast, during dinner and, on one memorable occasion, at 2 a.m. on my birthday. Nobody expected me to answer at 2 a.m., of course. But nobody said I didn't have to, either. And so, like most of my colleagues, I answered — quickly, apologetically, and with a growing feeling that my evenings didn't fully belong to me.",
          "I'm far from the only one. In the last decade, several countries have decided that this is not just a personal problem but a legal one. The best-known example is France. Since 1 January 2017, French companies with fifty or more employees have been required to negotiate rules about how and when staff can be contacted outside working hours. The law doesn't ban evening emails; instead, it says that employers and employees are to agree on the boundaries together. The idea, often summed up as the *right to disconnect*, quickly spread.",
          "In 2021, Portugal went further. Its new law generally forbids employers with ten or more workers from contacting them outside working hours, with exceptions for genuine emergencies. In August 2024, Australia introduced its own version: employees are now entitled to refuse to read or respond to work messages outside their hours, unless refusing would be unreasonable. Smaller businesses were given an extra year to prepare.",
          "Supporters argue that constant availability damages health, family life and, ironically, productivity. Critics reply that rigid rules don't suit everyone. A parent who prefers to leave at three and finish work at nine, after the children are asleep, may not want the law to tell them when they are allowed to send an email. Others point out that in global companies, someone's evening is always someone else's morning.",
          "Our own story is smaller, but it taught us a lot. Two years ago, Kenji, our team leader, noticed that our afternoons had disappeared. Meetings started at nine and kept multiplying until six, and the actual work — designing, coding, thinking — had been pushed into the evenings. He proposed an experiment: no internal meetings after 2 p.m. It was to have been a three-month trial, with a review at the end. Nobody, least of all Kenji, expected it to last.",
          "The rules were written up in our usual slightly pompous style: \"Meetings are not to be scheduled after 14:00. Requests for urgent discussion are to be made in writing.\" In plain English: if it's after two, send a message, and let people answer when they can. We were also asked not to expect replies after seven in the evening, unless there was a real emergency — and we had a long, funny discussion about what counts as one. (A client changing their mind about a font does not.)",
          "The first month was strange. People kept trying to sneak in \"quick calls\" at four. But gradually, something changed. Mornings became busier and more focused, because everyone knew the afternoon was protected. The number of evening messages dropped. Our designs got better — or at least, that's what our clients said — and, to Kenji's slight embarrassment, we started finishing projects earlier, not later. At the review, nobody voted to go back. The trial that was to have ended after three months is now simply \"how we work\".",
          "What I have learned from all this is that laws can help, but they can't do everything. France's law didn't stop French workers from sending emails; it started conversations about when they should. In our case, it wasn't a rule from the government that made the difference, but a rule we agreed on ourselves — and, more importantly, a leader who followed it. If Kenji had sent us messages at midnight while telling us not to, the rule would have died in a week.",
          "So if your company is to change its culture, I'd suggest starting with a small, clear rule, a fixed trial period, and an honest review. And if you are a manager, remember that your behavior is the real policy. People will do what you do, not what the handbook says.",
          "As for my phone, it still doesn't sleep. But at seven o'clock, I'm allowed to. 🌙",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What did Aliya feel about her evenings before the rule?", options: ["*They didn't fully belong to her.", "They were too quiet.", "They were well organized."] },
      { q: "What do critics of right-to-disconnect laws say?", options: ["*Strict rules don't suit everyone's way of working.", "Workers should answer at any time.", "The laws are too weak."] },
      { q: "Why did Kenji propose the rule?", options: ["*Meetings had pushed the real work into the evenings.", "Clients complained.", "The law required it."] },
      { q: "What, according to Aliya, made the rule work?", options: ["*the team agreed on it, and the leader followed it himself", "a government inspection", "high fines"] },
    ]),
    gaps(
      "Find words and phrases in the blog post.",
      "1. in a way that says sorry: [apologetically]\n2. the limits of what is acceptable: [boundaries]\n3. in an unexpected way that seems strange: [ironically]\n4. too strict, impossible to change: [rigid]\n5. too formal and serious, trying to sound important: [pompous]\n6. enter secretly or quietly (two words): sneak [in]",
    ),
  ]),

  section("Listening: The first day", [
    tip("A long listening — about 3 minutes 40 seconds. Dias, a new junior developer, has his first day. Aliya shows him the company handbook — and explains what it really means. First listen: *What surprises Dias most?* Second listen: the tasks. Ask the student to note examples of be to."),
    ...listening(
      "Listen to Aliya explaining the company rules to Dias on his first day.",
      "**Aliya:** Welcome, Dias! Kenji was to have met you himself this morning, but his flight from Astana was delayed, so you've got me instead. Sorry.\n\n**Dias:** No problem at all. Thanks for meeting me.\n\n**Aliya:** OK, first things first: the handbook. It's forty pages long and written in what we call \"lawyer English\". I'm going to read you the important bits and then translate them into human.\n\n**Dias:** Please.\n\n**Aliya:** Rule one: \"All employees are to wear their identification badges at all times while on the premises.\" Translation: wear your badge, or the security guard will look at you very sadly every morning.\n\n**Dias:** Got it.\n\n**Aliya:** Rule two: \"New employees are on probation for a period of three months, during which either party may terminate the contract with one week's notice.\" Translation: for three months, we're getting to know each other. Don't panic. Nobody has been fired on probation for as long as I've been here.\n\n**Dias:** That's reassuring.\n\n**Aliya:** Rule three, my favorite: \"Internal meetings are not to be scheduled after 14:00. Requests for urgent discussion are to be submitted in writing.\" Translation: no meetings after two. If you need something in the afternoon, send a message. People will reply when they can.\n\n**Dias:** Wait — no meetings at all after two? At my last company, the meetings started at four and went on until seven.\n\n**Aliya:** I know. We were like that too. It was to have been a three-month trial, and now it's been two years. You'll see — the afternoons are when real work happens here.\n\n**Dias:** What if there's an emergency?\n\n**Aliya:** Then it's an emergency. You'll know. A client changing their mind about a button color is not an emergency. We had a long debate about that.\n\n**Dias:** What about evenings?\n\n**Aliya:** \"Employees are not expected to respond to work communications after 19:00, except in cases of genuine urgency.\" Translation: after seven, switch off. Seriously. If Kenji sees you answering emails at midnight, he'll be more worried than impressed.\n\n**Dias:** OK. That's… unusual. In a good way.\n\n**Aliya:** Rule five: \"Each employee is entitled to one day per month for professional development, to be agreed in advance with their team leader.\" Translation: once a month, you get a day to learn something. A course, a conference, a book. Last month I learned to make animations.\n\n**Dias:** That's amazing. What am I to do with my first one?\n\n**Aliya:** Talk to Kenji. He'll probably suggest something about AI — he's a bit obsessed at the moment. And the last important rule: \"Performance reviews are to take place every six months.\" Translation: twice a year, you sit with Kenji and talk about what's going well and what isn't. It's not as scary as it sounds. He asks you to review him too.\n\n**Dias:** He does?\n\n**Aliya:** He does. Last time I told him his slides had too many words on them. He said thank you and changed them.\n\n**Dias:** I was about to ask if I could take notes, actually. This is a lot.\n\n**Aliya:** Of course. And don't worry — if you are to remember only one thing today, remember this: ask questions. Nobody here expects you to know everything.\n\n**Dias:** Thank you. Can I ask one more?\n\n**Aliya:** Go ahead.\n\n**Dias:** Where's the coffee?\n\n**Aliya:** Ah. The most important question. Follow me. It's from Asel's bakery — and every Friday, there are pastries.",
    ),
    quiz("Listen and choose.", [
      { q: "Why didn't Kenji meet Dias?", options: ["*His flight was delayed.", "He was in a meeting.", "He was ill."] },
      { q: "What does Aliya mean by “lawyer English”?", options: ["*very formal language", "English for lawyers", "bad English"] },
      { q: "What surprises Dias about the meeting rule?", options: ["*At his last company, meetings went on until seven.", "There are no meetings at all.", "Meetings start at four."] },
      { q: "What is the professional development day for?", options: ["*learning something new", "meeting clients", "working from home"] },
      { q: "What does Aliya say is the most important thing to remember?", options: ["*to ask questions", "to wear the badge", "not to answer emails"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["The handbook is forty pages long.", true],
      ["Many people have been fired during probation.", false],
      ["The meeting rule was originally planned as a three-month trial.", true],
      ["Kenji is impressed when people answer emails at midnight.", false],
      ["In performance reviews, employees can also give Kenji feedback.", true],
      ["There are pastries every Monday.", false],
    ]),
    gaps(
      "Complete the sentences from the conversation.",
      "1. Kenji was to [have] met you himself this morning.\n2. All employees are [to] wear their identification badges at all times.\n3. Internal meetings are not to be [scheduled] after 14:00.\n4. Each employee is [entitled] to one day per month for professional development.\n5. What am I [to] do with my first one?\n6. I was [about] to ask if I could take notes, actually.",
    ),
  ]),

  section("Let's talk: Official and human", [
    text(
      "Rules — two ways 📜🙂",
      "Choose a place: your workplace, your school, your home, a gym, a library, or your own imaginary company.\n\n1. Write **four rules** in official style: *Members are to… Visitors are not to… Requests are to be submitted…*\n2. Read them aloud as an announcement.\n3. Now explain each rule “like a human”, the way Aliya did: *Translation: …*\n\nThen discuss:\n- Should there be a **legal right to disconnect** in your country? Why / why not?\n- Which is better: one clear rule for everyone, or flexible agreements for each person?",
    ),
    tip("Make it fun: the official version can be pompous; the human version should be warm and natural. Note *be to* and formal vocabulary; correct *are to wearing* → *are to wear*. In a group: one student reads the official version, another translates."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "Employees ___ wear badges at all times.", options: ["*are to", "are about to", "are on the point to"] },
      { q: "The meeting ___ taken place on Monday, but it was postponed.", options: ["*was to have", "is to have", "was to"] },
      { q: "If we ___ succeed, we need more money.", options: ["*are to", "will", "were about to"] },
      { q: "“Prior to” means…", options: ["*before", "after", "instead of"] },
    ]),
    box(
      "Phrase of the day: work-life balance",
      "⚖️ The right amount of time for work and for the rest of your life. Kenji's version: *no meetings after two.*\n\n*What's one rule that would improve your work-life balance?*",
    ),
  ]),

  homework(
    [
      choose(
        "Choose.",
        "1. The prime minister [*is to/is about to] meet the president on Friday.\n2. Students [*are not to/are not to be] use phones during exams.\n3. What [*are we to/we are to] do now?\n4. The bridge [*was to have opened/was to open] last year, but there were delays.\n5. Little did she know that she [*was to marry/was marrying] him ten years later.\n6. We were [*about to/to about] give up when we found the solution.\n7. If you [*are to/will] get the job, you need to improve your English.\n8. The new rules are [*to come/coming to] into force next month.",
      ),
      gaps(
        "Rewrite the headlines as full sentences with be to.",
        "1. PRESIDENT TO VISIT JAPAN → The president [is to visit] Japan.\n2. FACTORY TO CLOSE IN MAY → The factory [is to close] in May.\n3. SCHOOLS TO GET NEW COMPUTERS → Schools [are to get] new computers.\n4. PRICES NOT TO RISE → Prices [are not to rise].\n5. STAR TO WRITE MEMOIR → The star [is to write] a memoir.\n6. STAFF TO WORK FROM HOME ON FRIDAYS → Staff [are to work] from home on Fridays.",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      match("Match the formal and the neutral words.", [
        ["commence", "start"],
        ["terminate", "end"],
        ["prior to", "before"],
        ["comply with", "follow"],
        ["in accordance with", "following"],
        ["be entitled to", "have the right to"],
      ]),
      write(
        "You work for a company (real or imaginary). Write a staff notice (220–260 words) introducing a new rule about working hours or communication. Explain the rule in formal style, give the reasons, explain exceptions, and say when it will be reviewed.",
        220,
        { read: "*Useful:* With effect from… · Employees are to… · are not to… · prior to… · in accordance with… · The new policy is to be reviewed after… · Should you have any questions, please…" },
      ),
      record("Record a 1–2 minute answer: “Should there be a law that gives workers the right to switch off after work?” 🎤", 120),
    ],
    "Homework: Writing and speaking",
  ),
]);
