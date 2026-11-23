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

// 5.3 Jobs of the future — skills lesson: reading (which jobs are changing), a long listening (a careers podcast, ~2.5 min), a short BBC video, writing a short article; review of module 5.
export default lesson("a2-5.3", "Jobs of the future", () => [
  section("Warm-up: Old job or new job?", [
    box("Today you will…", "- read and listen about how jobs are changing 🤖💼\n- talk about your dream job — and your real one\n- write a short article: *My job in 2040*"),
    sort("Did this job exist 30 years ago? Sort. 🕰️", {
      "🕰️ yes, it's an old job": ["a nurse", "a pilot", "a plumber", "a teacher", "a journalist"],
      "🆕 no, it's a new job": ["a YouTuber", "an app developer", "a drone pilot", "a social media manager", "an AI trainer"],
    }),
    text(
      "Talk to your teacher.",
      "- What did you want to be when you were 7? Why? 👩‍🚀👨‍🚒\n- What do your parents do? Did their jobs exist 50 years ago?\n- What part of your work or study is boring? Could a robot do it? 🤖\n- Is it more important for you to love your job or to earn a lot? 💖💰",
    ),
    tip("Tell the student what you wanted to be as a child — it always gets a laugh and opens the topic. Don't correct mistakes in this part."),
  ]),

  section("Vocabulary: Work and careers", [
    words("Work and careers", [
      ["a career", "📈 the jobs you do in your life"],
      ["a skill", "🛠️ something you can do well", "Communication is an important skill."],
      ["creative", "🎨💡 good at new ideas"],
      ["a degree", "🎓 what you get after university"],
      ["a salary", "💵 the money you get every month"],
      ["in demand", "🔥 many companies need these people", "Nurses are in demand everywhere."],
      ["automate", "🤖⚙️ machines do the work instead of people"],
      ["retrain", "📚🔁 learn new skills for a new job"],
      ["work remotely", "🏠💻 work from home or anywhere"],
      ["a freelancer", "🧑‍💻 works for different clients, not one company"],
      ["a care worker", "🤝👵 helps old or sick people"],
      ["at risk", "⚠️ in danger", "Some jobs are at risk because of AI."],
    ]),
    match("Match.", [
      ["work", "remotely"],
      ["get", "a degree"],
      ["earn", "a good salary"],
      ["learn", "new skills"],
      ["in", "demand"],
      ["a care", "worker"],
    ]),
    gaps(
      "Complete.",
      "1. I work from home. I work [remotely]. 🏠\n2. She has ideas all the time. She's very [creative]. 🎨\n3. Doctors are always in [demand]. 🔥\n4. His [salary] is $2,000 a month. 💵\n5. Many factories [automate] work with robots. 🤖\n6. I'm 40, but I'm going to [retrain] as a programmer. 📚\n7. A [freelancer] works for different clients. 🧑‍💻\n8. Speaking English is a useful [skill]. 🛠️",
    ),
  ]),

  section("Reading: Will a robot take your job?", [
    tip("Read the article in parts. After each part, ask: *Do you agree? Do you know someone with a job like this?* Ask the student to find all the predictions with *will* and *might*."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Experts think all jobs will disappear.", false],
        ["Jobs with the same tasks every day are more at risk.", true],
        ["Robots are very good at caring for people.", false],
        ["Plumbers and electricians will probably be in demand.", true],
        ["Some jobs of the future don't exist today.", true],
        ["The writer thinks you should stop learning after university.", false],
      ],
      {
        read: [
          "## 🤖💼 Will a robot take your job?",
          "Every week there's a new headline: *“AI will take our jobs!”* Is it true? Experts don't agree, but most of them think **some** jobs will change a lot, some might disappear, and many new jobs will appear.",
          "**⚠️ Which jobs are at risk?** Jobs where people do the same tasks again and again. Machines can already scan products in shops, answer simple questions in call centers and drive trucks in some places. In the future, many of these jobs might be automated.",
          "**✅ Which jobs are safer?** Jobs that need people: care workers, nurses, teachers and psychologists. A robot can give you medicine, but can it hold your hand? 🤝 Jobs with your hands are also safer — plumbers and electricians will probably be in demand for a long time. Every house is different!",
          "**🆕 New jobs.** Ten years ago, nobody was an “AI trainer”. Today it's a real job! In 2040 there will probably be jobs we can't imagine now — maybe *space tourism guide* or *robot repairer*? 🚀🔧",
          "**🎓 So what can you do?** Never stop learning. Creative thinking, communication and languages — like English! — will always be useful. 😉",
        ].join("\n\n"),
      },
    ),
    sort("Safer or at risk? Sort (from the article). ⚠️✅", {
      "⚠️ more at risk": ["a cashier", "a call center worker", "a truck driver", "a factory worker"],
      "✅ safer": ["a nurse", "a plumber", "a teacher", "a psychologist"],
    }),
    quiz("Read again. Choose.", [
      { q: "Why are plumbers safer?", options: ["*Every house is different.", "They earn a lot.", "Robots don't like water."] },
      { q: "What is an example of a new job today?", options: ["*an AI trainer", "a robot repairer", "a space tourism guide"] },
      { q: "What will always be useful, says the writer?", options: ["*creative thinking, communication and languages", "a good car", "a degree in IT"] },
      { q: "“Can it hold your hand?” — the writer means robots…", options: ["*can't give people real care", "are very strong", "are too expensive"] },
    ]),
  ]),

  section("Listening: Career Talk podcast", [
    tip("A longer listening — about 2–3 minutes. First listen for the general idea: *What are the three tips?* Then listen again for the details. Pause after each caller if needed."),
    ...listening(
      "Listen to a radio podcast. Listeners ask a career coach about the future.",
      "**Host:** Good evening and welcome to “Career Talk”! In the studio with me is career coach Emma Clark. Emma, people are worried about the future of work. What do you say to them?\n\n**Emma:** Hello! Well, first of all — don't panic. Jobs have always changed. A hundred years ago, many people worked on farms. Today most people work in offices and shops. In twenty years, a lot of jobs will look different again. That's normal.\n\n**Host:** Our first caller is Tom. Hi, Tom!\n\n**Tom:** Hi! I'm 19, and I want to be a translator. But my friends say AI will translate everything soon. Should I choose something else?\n\n**Emma:** Good question, Tom. AI will probably do simple translations — menus, instructions. But people will still need translators for books, films, business meetings and difficult situations. My advice: become a translator **plus** something else. For example, a translator who knows a lot about medicine or law. Those people will always be in demand.\n\n**Tom:** That makes sense. Thanks!\n\n**Host:** Next caller — Saule.\n\n**Saule:** Hi! I'm 35, and I work in a bank. My job is mostly checking documents. I think a computer might do it soon. I'm a bit scared, to be honest.\n\n**Emma:** I understand. You have one big advantage: you know the bank and you know the customers. Why don't you learn how to work **with** the new technology? Many banks need people who understand both finance and AI. It might be the best time to retrain!\n\n**Saule:** I never thought about it like that. Maybe I'll ask my manager about a course.\n\n**Host:** Emma, let's finish with your three tips for everyone.\n\n**Emma:** Sure. One: keep learning — a new skill every year. Two: work on the things robots can't do well — talking to people, creative ideas, teamwork. And three: speak at least one foreign language. It will open many doors! 🚪\n\n**Host:** Thank you, Emma! That's all for tonight.",
    ),
    quiz("Listen and choose.", [
      { q: "What does Emma say first?", options: ["*Don't panic — jobs have always changed.", "Robots will take all jobs.", "Study IT."] },
      { q: "What does Tom want to be?", options: ["*a translator", "a banker", "a doctor"] },
      { q: "What's Emma's advice for Tom?", options: ["*Be a translator plus something else.", "Choose a different job.", "Learn to code."] },
      { q: "What does Saule do at work?", options: ["*She checks documents.", "She translates books.", "She teaches English."] },
      { q: "What might Saule do?", options: ["*ask her manager about a course", "leave the bank", "become a translator"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["A hundred years ago, many people worked on farms.", true],
      ["Tom is 21.", false],
      ["Emma thinks AI will do simple translations.", true],
      ["Saule is a little scared about her job.", true],
      ["Emma's first tip is to learn a new skill every year.", true],
      ["Emma says foreign languages aren't important now.", false],
    ]),
  ]),

  section("Video: Will robots take our jobs?", [
    video("Watch a short BBC News video (under 2 minutes). Which jobs does it talk about?", "skG3okhx2TU"),
    text("Talk to your teacher.", "- Which jobs from the video will change, do you think?\n- Are you worried about AI and jobs? Why / why not? 🤔"),
  ]),

  section("Review: Module 5", [
    choose(
      "Choose.",
      "1. I think robots [*will do/do will] more jobs in the future.\n2. It's cloudy. It [*might/might to] rain.\n3. The phone's ringing! — I [*'ll get/'m going to get] it!\n4. AI [*won't/doesn't will] replace teachers, I think.\n5. I don't know yet. I [*might/will definitely] study law.\n6. We decided last month: we [*'re going to/'ll] move to Almaty.\n7. Don't worry, I [*won't/might not to] tell anyone.\n8. She'll [*probably/probable] get the job.",
    ),
    gaps(
      "Complete with will, won't, might or might not.",
      "1. In 2050, most cars [will] drive themselves. (sure)\n2. I [might] become a teacher — I'm not sure yet. (maybe)\n3. Robots [won't/will not] replace nurses. (sure, no)\n4. It [might not] snow tomorrow — the forecast isn't sure. (maybe not)\n5. Your bag is heavy — I['ll/will] carry it! (an offer)\n6. I promise I [won't/will not] be late again! (a promise)\n7. AI [will] probably change many jobs. (sure)\n8. They [might] move abroad next year. (maybe)",
    ),
    drag(
      "Complete the opinion.",
      "I think my job [will] change a lot. AI [might] do some of my tasks, but I don't think it [will] replace me — people [will] always need real teachers! I'm going to learn new [skills] every year. Maybe I'[ll] even work remotely from the beach! 🏖️",
      ["won't", "going", "skill"],
    ),
  ]),

  section("Writing: My job in 2040", [
    box(
      "✍️ A short article",
      "- **40+ words**\n- a title: *My job in 2040*\n- predictions: *I'll probably… · I might… · I won't…*\n- a reason: *because…*\n- an ending with your opinion: *I think it will be…*",
    ),
    write(
      "Write a short article for a school website: “My job in 2040”. What job will you have? What will a normal day be like? What will be different from today? (40+ words)",
      40,
      {
        read: "*Example start:* In 2040, I'll probably be a vet. 🐾 I'll work in a small clinic, but robots will help me with…",
      },
    ),
    tip("Check together: a title? At least 3 predictions with *will / might*? A reason with *because*? An opinion at the end? Read the best sentence aloud. 🌟"),
  ]),

  section("Let's talk: Will AI take your job?", [
    text(
      "Your job, your future 💼",
      "Talk about **your** job or the job you want:\n\n- What do you do every day at work / school? Which part could a robot do? 🤖\n- Which part will never be automated? Why?\n- What new skill will you need in 5 years?\n- Do you use AI at work or for study now? For what? 💻\n- Would you work remotely from another country? Where? 🌍",
    ),
    text(
      "Agree or disagree? 🤔",
      "- “In the future, everyone will be a freelancer.”\n- “A degree won't be important — skills will.”\n- “AI will make people lazy.”\n- “People will work less and have more free time.”",
    ),
    tip("*If you have time:* “Job interview 2050” 🚀 — you interview the student for a job of the future (robot repairer, Mars tour guide, AI trainer): *Why are you the best person for this job? What skills do you have?*"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "machines do the work instead of people =", options: ["*automate", "retrain", "remote"] },
      { q: "many companies need these people =", options: ["*in demand", "at risk", "creative"] },
      { q: "the money you get every month =", options: ["*a salary", "a career", "a degree"] },
      { q: "I'm not sure, but I ___ study law.", options: ["*might", "will definitely", "won't"] },
    ]),
    box("Word of the day: future-proof", "**future-proof** 🛡️ = something that will still be useful in the future.\n\n*Learning English is a future-proof skill!* 😉"),
  ]),

  homework(
    [
      gaps(
        "Write the word.",
        "1. 💵 the money you get every month: a [salary]\n2. 🎓 what you get after university: a [degree]\n3. 🏠💻 work from home: work [remotely]\n4. 🛠️ something you can do well: a [skill]\n5. 📚🔁 learn new skills for a new job: [retrain]\n6. ⚠️ in danger: at [risk]",
      ),
      trueFalse("From the lesson: true or false?", [
        ["Emma thinks people shouldn't panic about the future of work.", true],
        ["Tom wants to be a banker.", false],
        ["The article says plumbers will probably be in demand.", true],
        ["“AI trainer” is a job that exists today.", true],
        ["Emma says robots are good at teamwork.", false],
      ]),
    ],
    "Homework: Vocabulary and review",
  ),
  homework(
    [
      video("Watch: will or going to? (BBC, under 1 minute)", "T-L0BBB2icQ"),
      choose(
        "Choose.",
        "1. Look at the sky! It's [*going to/will] rain.\n2. I think people [*will/are going] live on Mars one day.\n3. — We have no milk! — Oh, I [*'ll/'m going to] buy some.\n4. I [*'m going to/'ll] study medicine — I applied last month.\n5. She [*might/might to] call you later.\n6. I promise I [*'ll/'m going to] help you tomorrow.",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      write("Write an email to Emma Clark, the career coach. Tell her about your job or studies and ask for advice about the future. (50+ words)", 50),
      record("Record your answer: What's your dream job? Will it still exist in 2050? Why / why not? (1 minute)", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
