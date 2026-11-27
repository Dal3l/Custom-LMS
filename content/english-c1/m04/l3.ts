import {
  box,
  choose,
  drag,
  gaps,
  homework,
  lesson,
  listening,
  match,
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

// 4.3 Is work good for us? — skills lesson: no new grammar; review of future forms and probability (4.1) and be to (4.2). V: meaning and motivation at work (fulfilling, a sense of purpose, burnout, autonomy, intrinsic / extrinsic motivation…). S: "The ideal working week in 20 years". Main format: work facts (true / false) + a long reading (what work gives us besides money, ~830 words) + Dan Pink's TED talk + a long listening (Zarina's podcast: Asel, Ruslan and Kenji on the ideal working week, ~3:30).
// Facts checked: John Maynard Keynes, "Economic Possibilities for our Grandchildren" (1930) — predicted that in about a hundred years people might work around fifteen hours a week; Marie Jahoda, Paul Lazarsfeld & Hans Zeisel, the Marienthal study (published 1933) — an Austrian village after its factory closed: people lost their sense of time, walked more slowly, and social life shrank; Jahoda later described the "latent functions" of work: time structure, social contact, a shared purpose, status / identity and regular activity. YouGov (2015) — 37% of British workers said their job did not make a meaningful contribution to the world; David Graeber, a 2018 book about pointless jobs. Csikszentmihalyi & LeFevre (1989) — people reported "flow" more often at work than in their free time, yet still said they would rather be doing something else ("the paradox of work"). Gallup, State of the Global Workplace (2023) — about 23% of employees worldwide were engaged at work. "Karoshi" — Japanese for death from overwork. "Robot" — from the Czech "robota" (forced labor), first used in Karel Čapek's play R.U.R. (1920).
// Warm-up format: true / false facts — after a sort in 4.2. Characters: Zarina (her podcast), Asel (two bakeries), Ruslan (mountain safety center), Kenji (tech).
export default lesson("c1-4.3", "Is work good for us?", () => [
  section("Warm-up: Work facts", [
    box(
      "Today you will…",
      "- find out what work gives us — besides money 💼\n- hear three very different people describe their ideal working week 🗓️\n- design the ideal working week of 20 years from now 🔮",
    ),
    trueFalse("Work facts: true or false? 🤔", [
      ["In 1930, the economist Keynes predicted that people would one day work about fifteen hours a week.", true],
      ["The word “robot” comes from a Spanish word meaning “happy worker”.", false],
      ["Japanese has a word for death caused by working too much.", true],
      ["In a 2015 poll, more than a third of British workers said their job made no meaningful contribution to the world.", true],
      ["According to a 2023 Gallup report, most employees in the world feel very engaged at work.", false],
    ]),
    text(
      "Talk to your teacher.",
      "- Which fact surprised you most?\n- If you won enough money never to work again, would you stop working? What would you do instead?\n- What do you like most about your work or studies — apart from the money or the grades?",
    ),
    tip("“Robot” comes from the Czech *robota* — forced labor — and was first used in Karel Čapek's play *R.U.R.* (1920). Gallup's 2023 report found only about 23% of employees worldwide engaged. Keep the “would you stop working?” question for the reading."),
  ]),

  section("Vocabulary: Meaning and motivation", [
    words("Meaning at work", [
      ["fulfilling", "🌟 making you feel happy and satisfied", "Nursing is hard, but it's incredibly fulfilling."],
      ["a sense of purpose", "🧭 the feeling that what you do matters"],
      ["burnout", "🔥 extreme tiredness and stress from working too much"],
      ["autonomy", "🗽 the freedom to make your own decisions"],
      ["intrinsic motivation", "💛 doing something because you enjoy it or find it meaningful"],
      ["extrinsic motivation", "💰 doing something for a reward, like money or grades"],
      ["a dead-end job", "🧱 a job with no chance of progress"],
      ["make a difference", "🌍 have a positive effect"],
      ["job satisfaction", "😊 how happy you are with your job"],
      ["mastery", "🎻 great skill, being very good at something"],
      ["workaholic", "💼 a person who works too much and can't stop"],
      ["meaningful", "✨ important, with real value"],
    ]),
    match("Match the sentences and the words.", [
      ["“I paint because I love it — nobody pays me.”", "intrinsic motivation"],
      ["“I only study for the bonus my parents promised.”", "extrinsic motivation"],
      ["“I've been doing the same thing for ten years. There's no future here.”", "a dead-end job"],
      ["“After six months of 70-hour weeks, I couldn't get out of bed.”", "burnout"],
      ["“My boss lets me decide how and when I work.”", "autonomy"],
      ["“He checks emails on holiday and at his daughter's birthday.”", "workaholic"],
    ]),
    gaps(
      "Complete with a word from the list above.",
      "1. Teachers often say their job is tiring but deeply [fulfilling].\n2. Many people want a job where they can make a [difference].\n3. Research suggests that [autonomy] — freedom to decide — increases motivation.\n4. It takes years of practice to achieve [mastery] in any skill.\n5. Job [satisfaction] depends on more than salary.\n6. Volunteering gave her a strong sense of [purpose].",
    ),
  ]),

  section("Word building: work words", [
    gaps(
      "Complete with the right form of the word in brackets.",
      "1. Rising [productivity] means we can make more in less time. (produce)\n2. Long-term [unemployment] can damage people's health. (employ)\n3. Many young people want work that is [meaningful]. (meaning)\n4. She found her job deeply [fulfilling]. (fulfill)\n5. [Motivation] falls when people have no control over their work. (motivate)\n6. The new system has made routine tasks [unnecessary]. (necessary)",
    ),
    sort("Intrinsic or extrinsic motivation? Sort. 🧩", {
      "💛 intrinsic": ["enjoying the work itself", "wanting to get better at something", "feeling that your work matters", "curiosity"],
      "💰 extrinsic": ["a bonus", "a promotion", "fear of losing your job", "praise from your boss"],
    }),
  ]),

  section("Reading: What work gives us", [
    tip("A long text (~830 words). First reading — 7 minutes: *According to the article, what does work give us besides money?* Then the tasks. Ask the student to find three ways of talking about the future and one example of be to."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Keynes believed people would eventually need to work much less.", true],
        ["In Marienthal, unemployed people suddenly had more energy and more hobbies.", false],
        ["Jahoda argued that a job gives us more than an income.", true],
        ["In the 1989 study, people reported more flow at work than in their free time.", true],
        ["The people in the 1989 study said they preferred being at work.", false],
        ["The writer concludes that work is always good for us.", false],
      ],
      {
        read: [
          "## 💼 What work gives us",
          "In 1930, at the start of the Great Depression, the British economist John Maynard Keynes wrote a short, surprisingly cheerful essay called *Economic Possibilities for our Grandchildren*. Thanks to technology, he argued, people a century later would be so productive that they would need to work only around fifteen hours a week. The real challenge of the future would not be poverty but leisure: how to fill all that free time wisely.",
          "We are now very close to the date Keynes had in mind, and most of us are not working fifteen hours a week. In many countries, productivity has indeed risen enormously — but instead of working less, people have, for the most part, chosen to consume more, or have had little choice at all. Keynes's prediction, it seems, was right about the machines and wrong about us.",
          "Perhaps he misunderstood something else, too: what work actually means to people. Around the same time that Keynes was writing his essay, a group of young researchers in Vienna — Marie Jahoda, Paul Lazarsfeld and Hans Zeisel — traveled to Marienthal, a small village whose main factory had closed. Almost everyone had lost their job. What the researchers found, published in 1933, was not a community enjoying its free time, but one slowly falling apart. People lost their sense of time; days blurred into one another. The researchers famously noticed that men walked more slowly through the village, and that they often stopped for no particular reason. Clubs and newspapers that had once been popular lost their members. Free time, without work around it, had become empty time.",
          "Years later, Jahoda tried to explain why. Work, she argued, does not only give us an income. It also has what she called *latent functions*: hidden benefits that we rarely notice until they are gone. It gives our days a structure. It connects us with people outside our family. It gives us a shared purpose, a status, a sense of identity — the answer to the question \"What do you do?\" — and a reason to get up and be active. Lose your job, and you lose all of these at once.",
          "This might suggest that any work is better than none. But that conclusion is too simple. In 2015, a YouGov poll asked British workers whether their jobs made a meaningful contribution to the world. Thirty-seven percent said no. A few years later, the anthropologist David Graeber wrote a provocative book about what he saw as pointless jobs — work that even the people doing it secretly believed should not exist. Graeber's examples were often funny, but his conclusion was serious: being paid to do something meaningless can be deeply damaging, even when the salary is good.",
          "There is also a strange paradox at the heart of modern work. In 1989, the psychologists Mihaly Csikszentmihalyi and Judith LeFevre gave people pagers that beeped at random moments during the week. Each time, they recorded what they were doing and how they felt. The researchers were especially interested in *flow*: the state of deep, enjoyable concentration in which time seems to disappear. To their surprise, people experienced flow more often at work than during their free time, when many of them were watching television. Yet at work, they still said they would rather be somewhere else. We seem to underestimate what work gives us, even while we are receiving it.",
          "So is work good for us? The honest answer appears to be: it depends on the work. Work that gives us structure, people, purpose and a chance to get better at something tends to be good for us — often better than we realize. Work that is meaningless, insecure or endless tends to harm us, sometimes seriously. Japanese even has a word, *karoshi*, for death from overwork. The difference is not simply between working and not working, but between work that fits a human life and work that consumes it.",
          "As automation spreads, these questions are likely to become more urgent, not less. If machines are set to take over more routine tasks, we may finally get some of the free time Keynes imagined. Whether that feels like freedom or like Marienthal will depend on what we put in its place. A society in which fewer people are to work full-time will need to find other ways to provide structure, connection and purpose — through education, volunteering, community, creative work, or forms of work we haven't invented yet.",
          "Keynes, at least, saw the challenge clearly. \"For the first time since his creation,\" he wrote, \"man will be faced with his real, his permanent problem — how to use his freedom.\" Nearly a century later, that problem is still waiting for us. 🕰️",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What was Keynes “right about the machines and wrong about us”?", options: ["*Productivity grew, but people didn't choose to work much less.", "Machines didn't improve.", "People stopped working completely."] },
      { q: "What did the Marienthal study show?", options: ["*Without work, free time became empty and the community suffered.", "Unemployed people were happier.", "The factory reopened quickly."] },
      { q: "What are the “latent functions” of work?", options: ["*hidden benefits like structure, contact, purpose and identity", "a high salary and bonuses", "the tasks written in a contract"] },
      { q: "What is the “paradox of work” in the 1989 study?", options: ["*People felt flow more at work but still wished they were elsewhere.", "People worked more but earned less.", "People were bored at work but happy to stay."] },
      { q: "What is the writer's final answer to the question “Is work good for us?”", options: ["*It depends on the kind of work.", "Always yes.", "Always no."] },
    ]),
    gaps(
      "Find words in the article.",
      "1. free time: [leisure]\n2. became unclear, mixed together: [blurred]\n3. hidden, existing but not obvious: [latent]\n4. intended to make people react or argue: [provocative]\n5. a situation that seems impossible because it has two opposite facts: a [paradox]\n6. needing attention quickly: [urgent]",
    ),
  ]),

  section("Video: The puzzle of motivation", [
    video("Watch: Dan Pink — The puzzle of motivation (TED). Watch at least the first 10 minutes.", "rrkrvAUbU9Y"),
    text(
      "After the video: talk about it.",
      "- What is the “candle problem”, and what happened when people were offered money?\n- According to Pink, what three things motivate people in creative work?\n- How does the talk connect with the reading — Jahoda's latent functions, or Graeber's pointless jobs?\n- Think of your own work or studies: what motivates you more — rewards or something else?",
    ),
    tip("Pink's three elements — autonomy, mastery and purpose — map well onto the vocabulary of the lesson. Ask the student to give one example of each from their own life. Note: Pink's talk is from 2009; some of the studies he mentions have been discussed and debated since — a good point for critical thinking."),
  ]),

  section("Listening: The ideal working week", [
    tip("A long listening — about 3 minutes 30 seconds. Zarina's podcast: Asel, Ruslan and Kenji describe their ideal working week twenty years from now. First listen: *Who wants to work less — and who doesn't?* Second listen: the tasks."),
    ...listening(
      "Listen to Zarina's podcast about the ideal working week.",
      "**Zarina:** Welcome back! Today's question: what will the ideal working week look like in twenty years? I've invited three people with very different jobs. Asel runs two bakeries, Ruslan runs a mountain safety center, and Kenji leads a team at a tech company. Asel, you start at four in the morning, don't you?\n\n**Asel:** Four, sometimes earlier. Bread doesn't wait for anyone.\n\n**Zarina:** So in twenty years, will you be working less?\n\n**Asel:** I hope I'll be working differently. By then, I'll have been baking for more than a quarter of a century, and I'm sure my back will have something to say about four a.m. But I can't imagine not working. When I left the bank, people thought I was looking for a quieter life. I wasn't. I was looking for work that felt like mine.\n\n**Zarina:** Kenji, your team has some famous rules.\n\n**Kenji:** Famous is a strong word. We have no meetings after two, and nobody is expected to answer messages after seven. In twenty years, I'm fairly sure most office workers will be working four days a week — some countries and companies are already on the verge of it. The technology is bound to make routine work faster. The question is whether we use that time to rest or just to do more.\n\n**Zarina:** Which do you think it will be?\n\n**Kenji:** Honestly? If nobody makes a decision, we'll just do more. That's what happened in the past. Productivity went up, and working hours mostly didn't go down. So I think the four-day week is likely to happen only where people actively choose it.\n\n**Zarina:** Ruslan, you've been very quiet.\n\n**Ruslan:** Mountain rescuers don't really have working weeks. When someone's lost, it doesn't matter if it's Sunday or two in the morning.\n\n**Zarina:** That sounds exhausting.\n\n**Ruslan:** It can be. Burnout is a real problem in rescue teams. A few years ago, one of our best people left because he hadn't had a proper weekend in months. That was a turning point for me. Now we have a rota: everyone has two days a month when they are not to be called, whatever happens. It was to have been a temporary system, but we've kept it.\n\n**Zarina:** So what would your ideal week be?\n\n**Ruslan:** Fewer emergencies, because people have learned to be safe. That's the real goal. If our courses work, in twenty years we'll be spending more time teaching and less time rescuing. That would be the best possible future for my job — that it's needed less.\n\n**Zarina:** That's beautiful. Asel, what would make your week better?\n\n**Asel:** Honestly, the boring parts. Ordering flour, checking invoices, chasing suppliers. If a machine could do all that, I'd be delighted. I want more time with the dough and with the customers. That's the part that gives me a sense of purpose.\n\n**Kenji:** That's exactly what technology should do. Take the boring parts and leave the meaningful ones.\n\n**Ruslan:** As long as it doesn't take the meaningful ones by mistake.\n\n**Zarina:** One last question for all of you. If you won the lottery tomorrow, would you stop working?\n\n**Asel:** No. I'd open a third bakery.\n\n**Kenji:** I'd take a year off — and then come back, probably bored.\n\n**Ruslan:** I'd buy a new helicopter for the rescue team. And then I'd go back to work on Monday.\n\n**Zarina:** So none of you would stop.\n\n**Asel:** I think that's the answer to your question, Zarina. The ideal working week isn't the one with the fewest hours. It's the one where the hours mean something.\n\n**Zarina:** Thank you all. And on that note, I'm going to stop working for today.",
    ),
    quiz("Listen and choose.", [
      { q: "What does Asel say about her future?", options: ["*She hopes to work differently, but can't imagine not working.", "She plans to retire early.", "She wants to go back to the bank."] },
      { q: "Why does Kenji think working hours might not go down?", options: ["*In the past, higher productivity mostly led to more work, not less.", "Technology is too slow.", "People don't like free time."] },
      { q: "What made Ruslan change the rules in his team?", options: ["*One of his best people left because of burnout.", "The government asked him to.", "There were fewer emergencies."] },
      { q: "What is Ruslan's ideal future for his job?", options: ["*that rescues are needed less because people are safer", "more helicopters", "a four-day week"] },
      { q: "What would Asel like technology to do?", options: ["*take over the boring administrative tasks", "bake the bread", "talk to customers"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Asel usually starts work at about four in the morning.", true],
      ["Kenji thinks the four-day week will happen automatically.", false],
      ["Ruslan's team members have two days a month when they can't be called.", true],
      ["Ruslan's rota was always meant to be permanent.", false],
      ["Kenji would stop working forever if he won the lottery.", false],
      ["Ruslan would buy a helicopter for the rescue team.", true],
    ]),
    gaps(
      "Complete the sentences from the podcast.",
      "1. By then, I'll have [been] baking for more than a quarter of a century.\n2. Some countries and companies are already on the [verge] of it.\n3. The technology is [bound] to make routine work faster.\n4. The four-day week is [likely] to happen only where people actively choose it.\n5. Everyone has two days a month when they are not [to] be called.\n6. It was to [have] been a temporary system, but we've kept it.",
    ),
  ]),

  section("Module review: the future and be to", [
    choose(
      "Choose.",
      "1. We're on the verge of [*launching/launch] a new product.\n2. The new rules are [*to come/coming to] into force in January.\n3. The meeting was [*to have taken/to take] place yesterday, but it was postponed.\n4. With all this rain, the match is [*bound to/due to] be canceled.\n5. By 2040, she [*will have been running/will run] the company for twenty years.\n6. Employees [*are not to/are not] smoke inside the building.\n7. The minister is [*due to/bound for] arrive at noon.\n8. If we [*are to/will be to] succeed, we must work together.",
    ),
    drag(
      "Complete the announcement with the words.",
      "From next month, all staff are [to] take one learning day per month. The new system is [due] to start on 1 March and is [set] to continue for at least a year. The scheme was [to] have begun in January, but it was delayed. We are on the [verge] of a big change in how we work — and we are [bound] to make some mistakes along the way!",
      ["about", "sure", "brink"],
    ),
  ]),

  section("Let's talk: The ideal working week in 20 years", [
    text(
      "Design the future 🔮",
      "Work alone or with your teacher. Design **the ideal working week in 20 years** for one job (yours, a job you'd like, or one from the lesson).\n\n- How many hours and days? When? Where?\n- Which tasks will machines do? Which will humans keep?\n- How will people find structure, purpose and connection — Jahoda's “hidden benefits”?\n- What rules will there be? *Employees are to… / Nobody is to…*\n\nPresent your plan in **2–3 minutes**. Use: *By 2045, … will have… / … is bound to… / … is likely to… / We're on the verge of…*\n\nThen discuss: **Would you prefer more free time or more meaningful work — if you could only have one?**",
    ),
    tip("Encourage the student to use evidence from the reading, the video and the podcast. Ask challenging follow-ups: *But what about people whose jobs disappear? Who pays?* In a group: teams design weeks for different jobs, then vote for the most realistic and the most attractive."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "Which prediction did Keynes make in 1930?", options: ["*a working week of about fifteen hours", "the end of all work", "a seven-day working week"] },
      { q: "Doing something because you enjoy it is ___ motivation.", options: ["*intrinsic", "extrinsic", "latent"] },
      { q: "Extreme exhaustion from working too much is ___.", options: ["*burnout", "mastery", "autonomy"] },
      { q: "Pink's three keys to motivation are autonomy, mastery and ___.", options: ["*purpose", "money", "pressure"] },
    ]),
    box(
      "Phrase of the day: work to live, or live to work?",
      "⚖️ Do you work so that you can enjoy your life — or is work the center of your life? Asel's answer: *the ideal week is the one where the hours mean something.*\n\n*Which are you — and which would you like to be?*",
    ),
  ]),

  homework(
    [
      gaps(
        "Module 4 review: complete the sentences.",
        "1. Scientists are on the [verge/brink] of a major discovery.\n2. The new bridge is [due] to open next spring.\n3. Prices are [set] to rise again this year.\n4. With his talent, he's [bound] to succeed.\n5. All visitors [are] to sign in at reception.\n6. The concert was to [have] taken place last week, but it was canceled.\n7. By 2030, I will have [been] working here for fifteen years.\n8. If we are [to] finish on time, we need help.",
      ),
      match("Match the words and the meanings.", [
        ["fulfilling", "making you feel satisfied"],
        ["burnout", "exhaustion from overwork"],
        ["autonomy", "freedom to decide"],
        ["a dead-end job", "a job with no future"],
        ["mastery", "great skill"],
        ["workaholic", "someone who can't stop working"],
      ]),
      trueFalse("Correct or not?", [
        ["We're on the verge of a breakthrough.", true],
        ["The train is due arriving at six.", false],
        ["Employees are not to use their phones in meetings.", true],
        ["The meeting was to have taken place on Monday.", true],
        ["He's bound to winning.", false],
      ]),
    ],
    "Homework: Module review",
  ),
  homework(
    [
      write(
        "Essay (220–260 words): “In the future, people will need work for meaning more than for money.” Discuss, using ideas from the reading, the video and the podcast.",
        220,
        { read: "*Plan:* introduction · what work gives us besides money · why some work doesn't · what may change in the future · your conclusion. Useful: *is bound to / is likely to / is set to / There's every chance that… / If society is to…*" },
      ),
      record("Record a 1–2 minute answer: “If you won enough money never to work again, what would your ideal week look like?” 🎤", 120),
    ],
    "Homework: Writing and speaking",
  ),
]);
