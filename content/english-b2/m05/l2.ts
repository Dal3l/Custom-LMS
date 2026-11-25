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
  words,
  write,
} from "../../kit";

// 5.2 You're supposed to… — G: be supposed to, be allowed to, be obliged / required to, have no choice but to; make / let + bare infinitive, be made to (passive). V: work (be promoted, resign, be laid off, a perk, overtime, a dress code, flexible hours, work-life balance, a pay rise, a probation period). S: compare rules in different workplaces; design the rules of a dream company. Main format: sorting perks and duties + a long reading (the world's biggest four-day week trial, ~560 words) + a long listening (Zarina's podcast "Rules at work" with Kenji, Laura and Asel, ~3:15) + "design a company" discussion. No video in this lesson (module 5: videos in 5.1, 5.3 and at home in 5.1, 5.4).
// Facts checked: the UK four-day week pilot ran from June to December 2022 with 61 companies and about 2,900 employees, organized by the non-profit 4 Day Week Global with the think tank Autonomy and researchers from the University of Cambridge and Boston College; 56 of the 61 companies (92%) continued the four-day week afterwards, 18 made it permanent; company revenue stayed broadly the same; the number of staff leaving fell by 57%; 39% of employees said they were less stressed; the "100-80-100" model: 100% pay, 80% time, 100% productivity; Iceland's public-sector trials (2015–2019) with about 2,500 workers were reported as a success and led to most of the country's workforce gaining the right to shorter hours.
export default lesson("b2-5.2", "You're supposed to…", () => [
  section("Warm-up: Perk or duty?", [
    box(
      "Today you will…",
      "- talk about rules at work — the official ones and the real ones 📋\n- learn about the world's biggest four-day week experiment 📅\n- design the rules for your dream company 🏢",
    ),
    sort("Is it a perk (a nice extra) or a duty (something you have to do)? Sort. 🧩", {
      "🎁 a perk": [
        "free lunch at the office",
        "a company phone you can use at home",
        "a gym membership paid by the company",
        "an extra day off on your birthday",
      ],
      "📋 a duty": [
        "writing a report every Friday",
        "wearing a uniform",
        "answering customers' emails within 24 hours",
        "attending the Monday meeting",
      ],
    }),
    text(
      "Talk to your teacher.",
      "- What's the best perk you've ever had (at work, school or university)?\n- What's the strangest rule you've ever had to follow?\n- Would you prefer a higher salary or a four-day week? Why? 🤔",
    ),
    tip("Accept other answers in the sort if the student explains (a uniform might be a perk if it's free and stylish!). Note the student's mistakes with *must / have to* — today's grammar builds on them."),
  ]),

  section("Vocabulary: Work", [
    words("Work", [
      ["be promoted", "⬆️ get a higher position at work"],
      ["resign", "🚪 leave your job by your own decision", "She resigned after ten years."],
      ["be laid off", "📉 lose your job because the company doesn't need you any more"],
      ["a perk", "🎁 an extra advantage of a job (free lunch, a car…)"],
      ["overtime", "🌙 extra hours of work after the normal time"],
      ["a dress code", "👔 rules about what clothes to wear"],
      ["flexible hours", "🕐 you can choose when you start and finish"],
      ["work-life balance", "⚖️ time for work AND time for your life"],
      ["a pay rise", "💵 an increase in salary"],
      ["a probation period", "🧪 the first months of a job, when they check if you're suitable"],
    ]),
    match("Match.", [
      ["She worked hard and was", "promoted to manager."],
      ["The factory closed and 200 workers were", "laid off."],
      ["I'm tired of working", "overtime every weekend."],
      ["Our office has a strict", "dress code — suits only."],
      ["After a year, I asked for", "a pay rise."],
      ["He didn't like the new boss, so he", "resigned."],
    ]),
    gaps(
      "Complete with a word from the list.",
      "1. Free coffee is a nice [perk], but I'd prefer a higher salary.\n2. With [flexible] hours, I can take my kids to school.\n3. I never see my friends — my work-life [balance] is terrible.\n4. During the [probation] period, you can't take a holiday.\n5. If you work [overtime], you get paid extra.\n6. Congratulations! I heard you've been [promoted]! 🎉",
    ),
    quiz("Choose the right word.", [
      { q: "He didn't choose to leave — he was laid ___.", options: ["*off", "out", "down"] },
      { q: "Can I ask for a pay ___?", options: ["*rise", "up", "grow"] },
      { q: "She ___ because she found a better job.", options: ["*resigned", "was laid off", "was promoted"] },
      { q: "Jeans are not allowed — there's a dress ___.", options: ["*code", "rule", "law"] },
    ]),
  ]),

  section("Reading: Work less, do more?", [
    tip("A long text (~560 words). First reading — 5 minutes: *Was the experiment a success? Why?* Then the tasks."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["In the UK trial, employees got less pay for working four days.", false],
        ["Most companies continued the four-day week after the trial.", true],
        ["Fewer people left their jobs during the trial.", true],
        ["Companies were allowed to organize the shorter week in their own way.", true],
        ["The writer says the four-day week works for every kind of job.", false],
        ["In Iceland, the trials led to shorter hours for many workers.", true],
      ],
      {
        read: [
          "## 📅 Work less, do more? The four-day week experiment",
          "For more than a hundred years, the five-day working week has seemed as natural as the weather. You're supposed to work from Monday to Friday, rest at the weekend, and repeat until you retire. But in 2022, sixty-one companies in Britain decided to test a different idea.",
          "From June to December, around 2,900 employees moved to a four-day week. The rules were simple but surprising: workers kept 100% of their pay, worked 80% of their usual time, and promised to keep 100% of their productivity. The experiment was organized by a non-profit group called 4 Day Week Global, together with researchers from the University of Cambridge and Boston College.",
          "The companies were very different: banks, software firms, restaurants, a fish-and-chip shop, charities. Each one was allowed to organize the shorter week in its own way. Some closed the office every Friday. Others let staff choose their free day, or made them work shorter days instead. In some places, everyone had to be available on Mondays; in others, teams were made to plan their work so that nobody was needed on their day off.",
          "To make it work, many companies had no choice but to change their habits. Long meetings were cut to thirty minutes or replaced by short messages. Some offices introduced \"focus time\" — two hours every morning when nobody was allowed to send emails or chat. One manager said: \"We realized how much of our week was spent talking about work instead of doing it.\"",
          "The results were impressive. At the end of the trial, 56 of the 61 companies decided to continue with the four-day week, and 18 made it permanent. Company income stayed broadly the same. The number of employees leaving their jobs fell by more than half, and 39% of workers said they felt less stressed. People used their extra day for family, exercise, hobbies and, as one worker put it, \"doing the boring things — shopping, cleaning — so the weekend is a real weekend\".",
          "Britain wasn't the first. Between 2015 and 2019, Iceland ran trials with around 2,500 public-sector workers, and afterwards most of the country's workforce gained the right to ask for shorter hours. Similar experiments have since taken place in many other countries.",
          "So should we all switch tomorrow? Not so fast. Critics point out that the companies in the trial chose to take part, so they were probably more enthusiastic than average. And a four-day week is much easier in an office than in a hospital, a school or a factory, where somebody is obliged to be there every day. For nurses, teachers and bus drivers, the answer may be different — shorter shifts, more staff or more flexible hours.",
          "Still, the experiment raises an interesting question. If many of us could do the same work in four days, what were we doing on the fifth? Perhaps the real lesson isn't about the number of days at all. It's about how much of our working time is actually spent working. ⏰",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What does “100-80-100” mean?", options: ["*100% pay, 80% time, 100% productivity", "100 companies, 80 continued, 100 workers", "100 hours, 80 meetings, 100 emails"] },
      { q: "How did many companies make the shorter week work?", options: ["*They cut meetings and created focus time.", "They hired more workers.", "They worked longer hours on four days."] },
      { q: "What did workers often do on their extra day?", options: ["*boring jobs, so the weekend felt free", "a second job", "extra training for work"] },
      { q: "What is one criticism of the trial?", options: ["*The companies chose to take part, so they were probably enthusiastic.", "Workers were paid less.", "It was too long."] },
      { q: "What is the writer's final idea?", options: ["*The real question is how much of our work time we actually work.", "Everyone should switch to a four-day week now.", "Five days is the natural working week."] },
    ]),
    gaps(
      "Find words in the article.",
      "1. stop working because you are old: [retire]\n2. how much work someone produces: [productivity]\n3. organizations that help people, not for profit: [charities]\n4. lasting forever, not temporary: [permanent]\n5. a period of work time, e.g. in a hospital: a [shift]\n6. very interested and excited: [enthusiastic]",
    ),
  ]),

  section("Grammar: You're supposed to…", [
    quiz("Notice the rule 🔍 Look: “You're supposed to work from Monday to Friday.” · “Each one was allowed to organize the week in its own way.” · “Many companies had no choice but to change their habits.” · “Somebody is obliged to be there every day.”", [
      { q: "“You're supposed to work Monday to Friday” means…", options: ["*that's the rule or expectation", "you want to", "it's impossible"] },
      { q: "“They were allowed to organize it” means…", options: ["*they had permission", "they had to", "they refused"] },
      { q: "“They had no choice but to change” means…", options: ["*they had to — there was no other option", "they chose not to change", "they changed a little"] },
    ]),
    table("obligation"),
    choose(
      "Choose.",
      "1. We're [*supposed to/allowed] start at nine, but the boss never comes before ten. 😄\n2. Are we [*allowed to/supposed] use our phones in the exam?\n3. By law, employers are [*obliged to/allowed to] give workers a break.\n4. The bus didn't come, so we had no choice but [*to walk/walking].\n5. You [*weren't supposed to/weren't allowed] tell anyone! It was a secret!\n6. Visitors are [*required to/supposed] show their passports.\n7. In my first job, I [*wasn't allowed to/wasn't let to] leave before six.\n8. You're [*not supposed to/not obliged] eat at your desk, but everyone does.",
    ),
    gaps(
      "Complete with the right form: be supposed to, be allowed to, be obliged to, have no choice but to.",
      "1. Sorry, you [aren't allowed to/are not allowed to] park here. 🚫\n2. The meeting [was supposed to] finish at five, but it went on until seven.\n3. The shop lost money, so they [had no choice but to] close.\n4. Companies [are obliged to/are required to] pay taxes.\n5. When I was a child, I [wasn't allowed to/was not allowed to] watch TV after eight.\n6. What are we [supposed to] do now? Nobody told us!",
    ),
  ]),

  section("Grammar: make, let and be made to", [
    choose(
      "Choose.",
      "1. My first boss made me [*redo/to redo] the report three times.\n2. Our manager lets us [*work/to work] from home on Fridays.\n3. I was made [*to wait/wait] for two hours at the office.\n4. They don't let [*us leave/us to leave] early.\n5. The teacher made the whole class [*stay/to stay] after school.\n6. We were [*allowed to/let to] choose our day off.",
    ),
    gaps(
      "Rewrite the sentences. Use the word in capitals.",
      "1. The boss forced us to work late. (MADE) → The boss [made us work] late.\n2. They allow us to wear jeans. (LET) → They [let us wear] jeans.\n3. They made me sign a contract. (WAS) → I [was made to sign] a contract.\n4. We couldn't do anything else — we had to sell the car. (CHOICE) → We had [no choice but to sell] the car.\n5. The rule says we start at eight. (SUPPOSED) → We [are supposed to start/'re supposed to start] at eight.\n6. My parents didn't let me go out on school nights. (ALLOWED) → I [wasn't allowed to go/was not allowed to go] out on school nights.",
    ),
    drag(
      "Complete the email.",
      "Hi Sam,\n\nThe new job is going well, but the rules are strict! We're [supposed] to arrive at 8:30, and we aren't [allowed] to use our phones on the shop floor. On my first day, the manager [made] me read a 40-page handbook. The good news: they [let] us choose our shifts, and after the probation period we're [allowed] to work from home one day a week. Last week the computers crashed and we had no choice [but] to write everything by hand! 😅\n\nSpeak soon,\nDina",
      ["obliged", "let to", "must"],
    ),
    order("Make sentences.", [
      "We aren't allowed to use our phones.",
      "My boss made me stay late.",
      "I was made to wait for an hour.",
      "They let us choose our day off.",
      "We had no choice but to close the shop.",
    ]),
    tip("Say it right: *supposed to* is pronounced /səˈpəʊstə/ — the *d* disappears. Common mistakes: *make me to do* → *make me do*; *we were let to* → *we were allowed to*; but passive *I was made TO do*."),
  ]),

  section("Listening: Rules at work", [
    tip("A long listening — about 3 minutes 15 seconds. Zarina's podcast: Kenji (a tech company), Laura (an English teacher) and Asel (the owner of two bakeries) compare the rules at their workplaces. First listen: *Whose workplace has the strictest rules?* Second listen: the tasks."),
    ...listening(
      "Listen to Zarina's podcast about rules at work.",
      "**Zarina:** Welcome back to the podcast! Today we're talking about rules at work — the official ones, and the ones nobody follows. With me are Kenji, who works for a tech company, Laura, who teaches English, and Asel, who owns two bakeries. Kenji, let's start with you. What are the rules like in your office?\n\n**Kenji:** Honestly, there aren't many. We have flexible hours, so I can start any time between eight and eleven. There's no dress code — I've seen our director in shorts. And we're allowed to work from home three days a week.\n\n**Zarina:** That sounds like a dream.\n\n**Kenji:** Mostly, yes. But there's one rule we take very seriously: no meetings after two o'clock. The afternoons are for focused work. If you try to book a meeting at three, the calendar simply doesn't let you. At first I thought it was strange. Now I couldn't live without it.\n\n**Zarina:** Laura, I imagine a school is rather different.\n\n**Laura:** Very different! Teachers are supposed to arrive by a quarter to eight, and we're obliged to stay until the last lesson ends, even if we have no classes. We aren't allowed to use our phones in front of the students — which is fair, because the students aren't allowed to either.\n\n**Zarina:** Do you ever break the rules?\n\n**Laura:** Well, we're supposed to send parents a report every month. In reality, it's more like every six weeks. And once, in my first year, the director made me rewrite all my reports because I'd used too many exclamation marks. I'd written \"Great progress!!!\" about a boy who'd improved a lot. Apparently, that wasn't professional.\n\n**Zarina:** Ha! Asel, you're the boss. Do you make the rules?\n\n**Asel:** I do — and I've learned that rules are harder from the other side. When I opened the first bakery, I didn't have any written rules at all. I thought we were like a family. Then one morning, the baker didn't turn up, nobody had a key, and we had no choice but to open two hours late. After that, I wrote everything down.\n\n**Zarina:** What kind of rules do you have now?\n\n**Asel:** The serious ones are about safety and hygiene — everyone is required to wear a hairnet, and you're not allowed to come to work if you're ill. By law, we're obliged to keep the kitchen at a certain temperature. But I also have some nice rules. Everyone gets a free lunch, and on your birthday, you're not allowed to work at all — you get the day off, and we make you a cake.\n\n**Kenji:** Can I work for you?\n\n**Asel:** Only if you can get up at five a.m.\n\n**Kenji:** Then no, thank you.\n\n**Zarina:** One last question for everyone. If you could add one rule to your workplace, what would it be?\n\n**Laura:** No emails from parents after nine p.m.\n\n**Kenji:** Everyone is supposed to take a real lunch break, away from the computer.\n\n**Asel:** The last person to leave has to check the ovens. We nearly had a fire once. That's a rule I'd make everyone learn by heart.\n\n**Zarina:** Great answers. Thank you all, and see you next week!",
    ),
    quiz("Listen and choose.", [
      { q: "What rule does Kenji's company take very seriously?", options: ["*no meetings after two o'clock", "no shorts at work", "work from home every day"] },
      { q: "What did Laura's director make her do?", options: ["*rewrite her reports", "stay after the last lesson", "call the parents"] },
      { q: "Why did Asel start writing rules down?", options: ["*The bakery once opened two hours late.", "A customer complained.", "The law changed."] },
      { q: "What happens on employees' birthdays at Asel's bakeries?", options: ["*They get the day off and a cake.", "They work a shorter day.", "They get a pay rise."] },
      { q: "What rule would Laura add?", options: ["*no emails from parents after 9 p.m.", "a real lunch break", "checking the ovens"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Kenji is allowed to work from home three days a week.", true],
      ["Laura's school allows teachers to use phones in class.", false],
      ["Laura always sends the monthly reports on time.", false],
      ["At first, Asel didn't have any written rules.", true],
      ["At Asel's bakeries, you can't come to work if you're ill.", true],
      ["Kenji would like to start work at 5 a.m.", false],
    ]),
    gaps(
      "Complete the sentences from the podcast.",
      "1. We're [allowed] to work from home three days a week.\n2. The calendar simply doesn't [let] you.\n3. Teachers are [supposed] to arrive by a quarter to eight.\n4. The director [made] me rewrite all my reports.\n5. We had no choice [but] to open two hours late.\n6. Everyone is [required] to wear a hairnet.",
    ),
  ]),

  section("Let's talk: Your dream company", [
    text(
      "Design a company 🏢",
      "You're starting a company together (a café, an app, a language school — you choose). Agree on **6 rules**:\n\n- 2 rules about **time** (hours, days, holidays)\n- 2 rules about **behavior** (phones, meetings, dress code)\n- 2 **perks** for employees\n\nUse: *Employees are (not) allowed to… · Everyone is supposed to… · We'll let people… · Nobody will be made to… · Managers are obliged to…*\n\nThen compare with Kenji's, Laura's and Asel's workplaces: whose rules are closest to yours?",
    ),
    tip("Disagree with at least one of the student's rules to make them defend it (*But what if a customer calls on Friday?*). Typical mistakes: *allow to somebody*, *make somebody to do*, *we are let*."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "My boss made me ___ it again.", options: ["*do", "to do", "doing"] },
      { q: "I was made ___ for an hour.", options: ["*to wait", "wait", "waiting"] },
      { q: "We're not ___ to smoke here.", options: ["*allowed", "let", "made"] },
      { q: "Free lunch at work is a nice ___.", options: ["*perk", "overtime", "probation"] },
    ]),
    box(
      "Phrase of the day: rules are made to be broken",
      "😏 People say this when they think a rule is silly — or when they want an excuse! Remember Laura's “monthly” reports?\n\n*Is there a rule you think is made to be broken?*",
    ),
  ]),

  homework(
    [
      choose(
        "Choose.",
        "1. Passengers are [*required/let] to wear seat belts.\n2. My parents never let me [*stay/to stay] up late.\n3. We [*weren't allowed/weren't let] to talk during the test.\n4. The road was closed, so we had no choice but [*to turn/turning] back.\n5. You're [*supposed to/allowed] reply within 24 hours, but nobody does.\n6. He was made [*to apologize/apologize] to the customer.",
      ),
      gaps(
        "Complete with one word.",
        "1. She worked so hard that she was [promoted] after a year.\n2. 300 workers were laid [off] when the factory closed.\n3. I need better work-life [balance].\n4. The company has a strict dress [code].\n5. I'm going to ask my boss for a pay [rise].\n6. Free gym membership is my favorite [perk].",
      ),
    ],
    "Homework: Grammar and vocabulary",
  ),
  homework(
    [
      sort("Which rule would you like at work or school? Sort. (There's no single right answer — compare with your teacher next lesson! 😄)", {
        "👍 I'd like this rule": ["no meetings after two", "a free lunch", "a day off on your birthday", "flexible hours"],
        "👎 I wouldn't like this rule": ["a strict dress code", "reports every Friday", "no phones all day", "starting at 7 a.m."],
      }),
      write("Write an email to a friend (140–190 words) about the rules at your work, school or university. What are you supposed to do? What aren't you allowed to do? Which rules do people break? Which rule would you change? Use at least five forms from today's lesson.", 140),
      record("Record a 1-minute answer: “Would you prefer a four-day week or a higher salary? Why?” 🎙️", 75),
    ],
    "Homework: Writing and speaking",
  ),
]);
