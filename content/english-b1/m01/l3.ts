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

// 1.3 Generation gaps — skills lesson, no new grammar: review of the Present Perfect (Continuous) and state verbs. V: generations, work and money. S: a debate. Main format: a long reading (three generations of one family, ~420 words) + a video + a short article written in class (B1 Preliminary, Writing Part 2). Long listening at home (radio phone-in, ~2.5 min).
export default lesson("b1-1.3", "Generation gaps", () => [
  section("Warm-up: Then and now", [
    box(
      "Today you will…",
      "- read about three generations of one family 👵👨👧\n- discuss: is life easier for young people today? 🤔\n- write a short article — like in the B1 Preliminary exam ✍️",
    ),
    text(
      "Talk to your teacher.",
      "- What's one thing your parents' generation does better than yours? And one thing they do worse?\n- What advice from an older person has really helped you? And what advice did you ignore? 😅\n- What do you think people your age will be criticized for in 30 years?",
    ),
    tip("Keep it personal and light — the debate comes later. Note the student's opinions: you'll use them as arguments in the debate."),
  ]),

  section("Vocabulary: Generations", [
    words("Generations, work and money", [
      ["a generation gap", "👵↔️👧 differences between older and younger people"],
      ["Baby Boomers", "👴 people born about 1946–1964"],
      ["Generation X (Gen X)", "🧑 born about 1965–1980"],
      ["millennials (Gen Y)", "🧑‍💻 born about 1981–1996"],
      ["Gen Z", "📱 born about 1997–2012"],
      ["a stereotype", "🏷️ a fixed, often wrong idea about a group", "The stereotype is that young people are lazy."],
      ["work-life balance", "⚖️ time for work AND for your own life"],
      ["tech-savvy", "💻 good with technology"],
      ["afford", "💰 have enough money for something", "I can't afford a flat in the center."],
      ["financially independent", "🏦 not needing money from your parents"],
      ["look down on", "👇 think you're better than someone", "Don't look down on people with different jobs."],
      ["have a point", "☝️ be partly right", "OK, you have a point."],
    ]),
    match("Match.", [
      ["work-life", "balance"],
      ["a generation", "gap"],
      ["financially", "independent"],
      ["look down", "on someone"],
      ["have", "a point"],
      ["tech-", "savvy"],
    ]),
    sort("Sort the ideas. Which ones are often said about older people, and which about younger people? 🏷️", {
      "👴 Often said about older people": ["They can't use technology.", "They're stuck in their ways.", "They had it easy.", "They don't understand mental health."],
      "📱 Often said about younger people": ["They're addicted to their phones.", "They change jobs too often.", "They don't want to work hard.", "They can't call anyone on the phone.", "They spend too much on coffee."],
    }),
    gaps(
      "Complete with a word or phrase from the list above.",
      "1. My grandpa can't use a smartphone, but my little sister is very [tech-savvy]. 📱\n2. Young people today can't [afford] to buy a house.\n3. I don't want to work twelve hours a day. I want a good work-life [balance]. ⚖️\n4. It's a [stereotype] that all old people hate technology.\n5. My parents and I disagree about everything — there's a big generation [gap].\n6. She's 25 and she still lives with her parents. She isn't financially [independent] yet.\n7. You shouldn't look down [on] people who didn't go to university.\n8. I don't agree with everything you said, but you have a [point].",
    ),
  ]),

  section("Reading: Three generations, one table", [
    tip("A long text (~420 words). First reading — 3 minutes: *Who do you agree with most?* Then the tasks. Encourage the student to guess unknown words from context before asking."),
    quiz(
      "Read the article. Who says it? Saule (68), Arman (45) or Madina (19)?",
      [
        { q: "“I've had the same employer for over twenty years.”", options: ["*Arman", "Saule", "Madina"] },
        { q: "“We didn't have much, but we didn't need much.”", options: ["*Saule", "Arman", "Madina"] },
        { q: "“I've been earning my own money since I was sixteen.”", options: ["*Madina", "Arman", "Saule"] },
        { q: "“My children think I'm too worried about money.”", options: ["*Arman", "Saule", "Madina"] },
        { q: "“Being online all the time is exhausting.”", options: ["*Madina", "Arman", "Saule"] },
        { q: "“I've been learning to use video calls this year.”", options: ["*Saule", "Madina", "Arman"] },
      ],
      {
        read: [
          "## 👵👨👧 Three generations, one table",
          "*Every Sunday, the Nurlanov family has lunch together: grandma Saule, her son Arman and his daughter Madina. We asked them the same question: is life easier now than it was when you were young?*",
          "**👵 Saule, 68, retired teacher**",
          "\"When I was Madina's age, life was simpler. We didn't have much, but we didn't need much. Everyone in our street knew each other, and children played outside until dark. Of course, it wasn't all good — there were no washing machines, and I remember queuing for hours for bread. Young people today have so many opportunities, but they seem more anxious than we were. Maybe it's the phones. I'm not against technology, though — I've been learning to use video calls this year so I can talk to my sister in Canada. It's wonderful!\"",
          "**👨 Arman, 45, engineer**",
          "\"My generation was in the middle of everything. We grew up without the internet and then we had to learn it all at work. I've had the same employer for over twenty years — that's very unusual now. For me, a stable job was the most important thing, because the 1990s were so difficult. My children think I'm too worried about money, and maybe they have a point. But I don't understand why young people change jobs every year. Where's the loyalty?\"",
          "**👧 Madina, 19, student and freelance designer**",
          "\"People say we're lazy, but that's a stereotype. I've been earning my own money since I was sixteen — first in a café, now designing logos online. It's true that we change jobs more often, but that's because companies don't look after people like they used to. Also, we care about work-life balance. My dad worked so much that he missed half of my childhood. I don't want that. The hardest thing for my generation? Being online all the time is exhausting, and we can't afford a home of our own. Grandma's generation got a flat from their employer! For us, that's a dream.\"",
          "*So, who's right? Probably all of them. Every generation faces different problems — and every generation thinks the next one has it easier.*",
        ].join("\n\n"),
      },
    ),
    trueFalse("Read again. True or false?", [
      ["Saule thinks young people today are less anxious than her generation.", false],
      ["Saule doesn't like modern technology at all.", false],
      ["Arman learned to use the internet at work.", true],
      ["Arman thinks changing jobs often shows loyalty.", false],
      ["Madina has been working since she was sixteen.", true],
      ["Madina thinks it's easy for young people to buy a home.", false],
    ]),
    gaps(
      "Find words in the article.",
      "1. not working anymore because of age: [retired]\n2. waiting in a line: [queuing/queueing]\n3. chances to do things: [opportunities]\n4. worried and nervous: [anxious]\n5. the company you work for: your [employer]\n6. working for different clients, not for one company: [freelance]",
    ),
    text(
      "Talk to your teacher.",
      "- Who do you agree with most — Saule, Arman or Madina? Why?\n- Is Arman right about loyalty? Is it good to stay in one job for twenty years? 💼\n- Is Madina's generation really more anxious? What do you think causes it?",
    ),
  ]),

  section("Video: Millennials vs Gen Z", [
    tip("About 7 minutes. Before watching, ask: *What do you think the differences are?* Stop after 3 minutes if time is short. The video is about American generations — ask the student if it's the same in their country."),
    video("Watch: Millennials vs Generation Z — how do they compare?", "aqdm6aBUZII"),
    text(
      "After the video: talk to your teacher.",
      "- Which ideas in the video were true for you or people you know? Which were just stereotypes?\n- Are generations in your country similar to the ones in the video? What's different?\n- Which generation would you like to be part of, if you could choose? Why? 🤔",
    ),
  ]),

  section("Review: the grammar of the module", [
    gaps(
      "Complete. Use the Present Perfect or the Present Perfect Continuous.",
      "1. My grandpa [has been working/'s been working] in his garden all morning. (work)\n2. I [have known/'ve known] my neighbors for twenty years. (know)\n3. Prices [have been going/'ve been going] up all year. (go)\n4. How many jobs [have you had]? (you / have)\n5. She [has been living/'s been living] abroad since 2021. (live)\n6. We [have visited/'ve visited] our grandparents three times this month. (visit)\n7. Young people [have been talking/'ve been talking] more about mental health lately. (talk)\n8. He [has had/'s had] the same phone for six years! (have)",
    ),
    choose(
      "Choose.",
      "1. My grandma [*has been learning/learns] to use video calls since March.\n2. I [*'ve known/'ve been knowing] my best friend for fifteen years.\n3. He [*'s had/'s been having] the same job since 2003.\n4. Young people today [*seem/are seeming] more anxious.\n5. How long [*have you been saving/are you saving] for a flat?\n6. My parents [*don't understand/aren't understanding] why I change jobs.\n7. We [*'ve been arguing/argue now] about this for hours!\n8. She [*'s visited/'s been visiting] her grandparents twice this month.",
    ),
    drag(
      "Complete Madina's post.",
      "I [have] been working as a freelancer [since] I was sixteen, and I've [been] saving for a flat for two years. My dad [thinks] I'm crazy — he's [had] the same job for twenty years! I [believe] that every generation has its own problems. I've [learned] a lot from my grandma, too: she's been [using] video calls all year! 📱",
      ["has", "for", "being", "is thinking"],
    ),
  ]),

  section("Let's talk: The debate", [
    match("Match the phrases and what they do.", [
      ["In my opinion…", "give your opinion"],
      ["For example…", "give an example"],
      ["That's true, but…", "agree a little, then disagree"],
      ["I'm afraid I disagree.", "disagree politely"],
      ["You have a point.", "say someone is partly right"],
      ["What I mean is…", "explain again"],
    ]),
    text(
      "Debate: Life is easier for young people today. 🗣️⚖️",
      "Your teacher takes one side, you take the other. Then change sides!\n\n**For** 👍: more opportunities, technology, travel, education online, more freedom…\n**Against** 👎: can't afford a home, stress and social media, unstable jobs, competition…\n\n**Useful:**\n- *In my opinion… / I strongly believe that…*\n- *That's true, but… / You have a point, however…*\n- *For example… / Look at…*\n- *I'm afraid I disagree.*",
    ),
    tip("Give the student 2 minutes to prepare 3 arguments. Each side speaks for 1 minute, then free discussion. After changing sides, ask: *Which side was easier to defend? What do you really think?* Write down 3–4 good phrases the student used and 2–3 mistakes to correct at the end."),
  ]),

  section("Writing: An article", [
    box(
      "✍️ Writing an article (B1 Preliminary, Part 2)",
      "An article is for a magazine or a website. It should be **interesting** for the reader.\n\n1. A **title** that catches attention.\n2. Start with a **question** to the reader: *Have you ever wondered…?*\n3. Give your **opinion** with **reasons** and **examples**.\n4. Finish with a strong last sentence.\n\nAbout **100 words**.",
    ),
    order(
      "Put the example article in order.",
      [[
        "Have you ever heard your parents say, “When I was your age…”?",
        "Every generation believes the next one has an easier life.",
        "In some ways, they're right: today we have the internet, cheap flights and online courses.",
        "On the other hand, homes are more expensive than ever, and many young people feel anxious.",
        "So is life easier now? I think it's just different — and every generation has its own battles.",
      ].join("\n")],
      "lines",
    ),
    write(
      "Write an article for a student website: “Is life easier for young people today than for their parents?” (100+ words)",
      100,
    ),
  ]),

  section("Wrap-up", [
    trueFalse("What did we learn? True or false?", [
      ["Madina has been working since she was sixteen.", true],
      ["Arman thinks a stable job is very important.", true],
      ["Saule has been learning to use video calls.", true],
      ["“OK, you have a point” means “You're completely wrong.”", false],
      ["We say “I've known her for years”, not “I've been knowing her”.", true],
    ]),
    quiz("Quick quiz. Choose.", [
      { q: "a fixed, often wrong idea about a group =", options: ["*a stereotype", "a generation", "an opportunity"] },
      { q: "I can't ___ a new car.", options: ["*afford", "look after", "spend"] },
      { q: "good with technology =", options: ["*tech-savvy", "down-to-earth", "retired"] },
      { q: "OK, you ___ a point.", options: ["*have", "make", "do"] },
    ]),
    box(
      "Phrase of the day: OK, boomer",
      "😏 **OK, boomer** — a joke phrase that young people use when an older person says something old-fashioned.\n\n⚠️ It can sound rude — use it only with friends who have a sense of humor!",
    ),
  ]),

  homework(
    [
      ...listening(
        "Listen to a radio phone-in. Listeners call about the generation gap.",
        "**Host:** Good evening and welcome to \"Talk Back\". Tonight's question: what's the biggest difference between you and your parents' generation? The lines are open. Our first caller is Ben. Hi, Ben!\n\n**Ben:** Hi! I'm twenty-three, and for me it's money. My parents bought their first house when they were twenty-five. I've been working full-time for two years, and I still can't afford to rent a flat on my own. I share with three other people.\n\n**Host:** That's tough. Do your parents understand?\n\n**Ben:** My mom does. My dad keeps saying, \"Just work harder.\" But I've been working really hard! It's just more expensive now.\n\n**Host:** Thanks, Ben. Next we have Kate.\n\n**Kate:** Hello! I'm fifty-two, and I'd like to defend my generation a bit. Young people say we had it easy, but we worked very long hours, and nobody talked about mental health. If you felt stressed, you just kept quiet. I think it's great that young people talk about it now.\n\n**Host:** So something has improved?\n\n**Kate:** Definitely. My daughter has taught me a lot. I've been doing yoga with her every Saturday since last spring. Ten years ago I thought yoga was silly!\n\n**Host:** Wonderful. And our last caller tonight — Arman.\n\n**Arman:** Hi there. I'm forty-five. For me, the biggest difference is communication. When I was young, if you wanted to meet friends, you called their home phone and their mom answered! Now my kids send messages all day, but they don't actually call anyone. My son gets nervous when the phone rings!\n\n**Host:** Ha! I think a lot of listeners recognize that.\n\n**Arman:** But to be fair, I've been texting more too. It's quicker!\n\n**Host:** Thank you all. Keep your messages coming — after the news, we'll read some of them.",
      ),
      quiz("Listen and choose.", [
        { q: "What's the biggest difference for Ben?", options: ["*money and housing", "music", "communication"] },
        { q: "How many people does Ben share a flat with?", options: ["*three", "two", "nobody — he lives with his parents"] },
        { q: "What does Kate think has improved?", options: ["*People talk about mental health.", "Working hours are shorter.", "Houses are cheaper."] },
        { q: "What does Kate do with her daughter?", options: ["*yoga every Saturday", "cooking classes", "running"] },
        { q: "What does Arman say about his son?", options: ["*He gets nervous when the phone rings.", "He never sends messages.", "He calls his friends every day."] },
      ]),
      trueFalse("Listen again. True or false?", [
        ["Ben's parents bought a house in their twenties.", true],
        ["Ben's dad understands why Ben can't afford a flat.", false],
        ["Kate thinks her generation had an easy life.", false],
        ["Kate started doing yoga last spring.", true],
        ["Arman has been sending more text messages too.", true],
      ]),
    ],
    "Homework: Listening",
  ),
  homework(
    [
      gaps(
        "Complete.",
        "1. There's a big generation [gap] between me and my grandparents.\n2. I'd love a better work-life [balance]. ⚖️\n3. My brother can fix any computer — he's very tech-[savvy].\n4. We can't [afford] a holiday this year. 💸\n5. She doesn't need money from her parents — she's financially [independent].\n6. He's [retired] now, but he still goes to the office sometimes.",
      ),
      write("Interview an older person (a parent, a grandparent, a neighbor). Ask: Was life easier when you were young? What has changed? Write their answers and your opinion. (100+ words)", 100),
      record("Record your answer: Which generation has it easiest — and why? Give two reasons and an example. (1–2 minutes) 🎤", 120),
    ],
    "Homework: Vocabulary, writing and speaking",
  ),
]);
