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

// 5.3 Dream job vs real job — skills lesson, no new grammar: review of need to / allowed to / supposed to, could / managed to. V: careers and satisfaction (fulfilling, job security, a pay cut, take a risk…). S: discuss money vs meaning. Main format: a long listening (a radio show: two people who changed careers, ~2.3 min) + a BBC "6 Minute English" video + a reading (advice before changing careers, ~380 words) + an article written in class.
export default lesson("b1-5.3", "Dream job vs real job", () => [
  section("Warm-up: Dreams", [
    box(
      "Today you will…",
      "- hear two people who left safe jobs for their dream jobs 🎢\n- discuss: money or meaning — what matters more? 💸❤️\n- write an article about your dream job ✍️",
    ),
    text(
      "Game: Would you take it? 💼",
      "Your teacher reads job offers. Say YES or NO — and why!\n\n1. 💰💰💰 A huge salary, but you work every weekend.\n2. 🏝️ A job on a tropical island, but the pay is very low.\n3. 🎮 Testing games all day, but in a tiny dark office.\n4. 🧑‍💻 Work from home, but you never meet your colleagues.\n5. 🐼 Looking after pandas, but you have to move to another country.\n\nWhich one is closest to your dream job?",
    ),
    text(
      "Talk to your teacher.",
      "- What did you want to be when you were seven? What happened to that dream? 🚀\n- If money wasn't a problem, what would you do every day?\n- Do you know anyone who changed careers completely? Were they happier afterwards?",
    ),
    tip("Share your own childhood dream job — it always makes students smile. Keep note of the student's answer to “If money wasn't a problem…” — you'll come back to it in the debate."),
  ]),

  section("Vocabulary: Careers", [
    words("Careers and satisfaction", [
      ["fulfilling", "🌟 makes you feel happy and useful", "Teaching is hard but very fulfilling."],
      ["job security", "🔒 knowing you won't lose your job"],
      ["a pay cut", "✂️💰 earning less money than before"],
      ["take a risk", "🎲 do something that might fail"],
      ["follow your passion", "❤️ do what you really love"],
      ["a nine-to-five job", "🕘 a normal office job with fixed hours"],
      ["quit", "🚪 leave a job (informal)", "She quit her job to travel."],
      ["start from scratch", "🧱 begin again from nothing"],
      ["make a living", "🍞 earn enough money to live", "Can you make a living as an artist?"],
      ["a calling", "🔔 a job you feel you were born to do"],
      ["satisfied (with)", "😌 happy with what you have"],
      ["a safety net", "🪢 money or help you can use if things go wrong"],
    ]),
    match("Match.", [
      ["take", "a risk"],
      ["follow", "your passion"],
      ["make", "a living"],
      ["start", "from scratch"],
      ["take", "a pay cut"],
      ["quit", "your job"],
    ]),
    gaps(
      "Complete with a word or phrase from the list above.",
      "1. She left the bank and started her own business — she really took a [risk]. 🎲\n2. Nursing is hard, but it's very [fulfilling].\n3. In my old job I had good job [security], but I was bored.\n4. He moved to a new country and had to start from [scratch].\n5. It's hard to make a [living] as a musician.\n6. I took a [pay] cut, but I'm much happier now.\n7. Before you quit, save some money as a safety [net]. 🪢\n8. For her, medicine isn't just a job — it's a [calling].",
    ),
    quiz("Choose the right word.", [
      { q: "He's an actor, but he can't ___ a living from it, so he also works in a café.", options: ["*make", "do", "take"] },
      { q: "She ___ her job and moved to Bali.", options: ["*quit", "cut", "followed"] },
      { q: "I'm not ___ with my job — I want something more interesting.", options: ["*satisfied", "fulfilling", "secure"] },
      { q: "Opening a restaurant is a big ___ — many close in the first year.", options: ["*risk", "calling", "safety net"] },
    ]),
    sort("Safe job or dream job? Sort the ideas. 🔒❤️", {
      "🔒 safe job": ["job security", "a regular salary", "a nine-to-five routine", "a pension", "paid holidays"],
      "❤️ dream job": ["following your passion", "taking risks", "a fulfilling job", "being your own boss", "starting from scratch"],
    }),
  ]),

  section("Listening: I quit!", [
    tip("A long listening — over 2 minutes. You know both people! Asel (the bank → baker story in 4.4) and Ruslan (the hiker who went missing in 2.2). First listen: *What did they do before, and what do they do now?* Second listen: the tasks."),
    ...listening(
      "Listen to a radio show. Asel and Ruslan talk about changing careers.",
      "**Host:** Good afternoon, and welcome to \"Second Chances\". Today: two people who quit safe jobs to follow their passion. Asel, you used to work in a bank. Now you bake bread.\n\n**Asel:** That's right. I was in the bank for eight years. I had a good salary, job security, a nine-to-five routine — everything my parents wanted for me. But I wasn't satisfied. I spent all day with numbers. So I retrained as a baker, and this spring my friend and I opened a small bakery by the river.\n\n**Host:** How's it going?\n\n**Asel:** Honestly? It's hard. I have to get up at four every morning, and I took a big pay cut — I earn about half of my old salary. In the first month, the oven broke twice and we couldn't open for a whole weekend. I nearly gave in. But now we have regular customers, and on Saturdays there's a queue outside. When someone tells me my bread reminds them of their grandmother's, that's worth more than money. ❤️\n\n**Host:** Ruslan, your story is different. Our listeners might remember you — you went missing in the mountains last year.\n\n**Ruslan:** Yes, that's me! I hurt my leg and spent a night alone by a river. The volunteers who found me were amazing. At that time I was an accountant. I was good at it, but I didn't feel I was helping anyone.\n\n**Host:** And that night changed everything?\n\n**Ruslan:** Completely. When I got over my injury, I joined the mountain rescue team as a volunteer. Then I decided to do it professionally. I had to start from scratch: first aid courses, climbing training, rescue exams. It took me a year, and I wasn't able to work full-time, so I lived on my savings. That was my safety net.\n\n**Host:** Do you regret it?\n\n**Ruslan:** Never. Last month we managed to find two lost tourists before a storm. I'll never earn what I earned as an accountant, but I've found my calling.\n\n**Host:** What advice would you give to people who want to change careers?\n\n**Asel:** Don't quit tomorrow! Save money first, and try your new job part-time. I worked at a bakery on weekends for a year before I left the bank.\n\n**Ruslan:** And talk to people who already do the job. They'll tell you the truth — the good and the bad.\n\n**Host:** Asel, Ruslan, thank you both.",
    ),
    quiz("Listen and choose.", [
      { q: "Why did Asel leave the bank?", options: ["*She wasn't satisfied with her job.", "She lost her job.", "Her parents wanted her to."] },
      { q: "What problem did the bakery have in the first month?", options: ["*The oven broke twice.", "Nobody came.", "Her friend left."] },
      { q: "What was Ruslan's job before?", options: ["*an accountant", "a mountain guide", "a doctor"] },
      { q: "How did Ruslan live while he was training?", options: ["*on his savings", "on his parents' money", "on a bank loan"] },
      { q: "What is Asel's advice?", options: ["*Save money and try the new job part-time first.", "Quit as soon as possible.", "Never change careers."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Asel earns more money now than in the bank.", false],
      ["There's often a queue outside the bakery on Saturdays.", true],
      ["Ruslan felt his accountant job helped many people.", false],
      ["Ruslan joined the rescue team as a volunteer first.", true],
      ["It took Ruslan a month to retrain.", false],
      ["Ruslan's team found two lost tourists before a storm.", true],
    ]),
    gaps(
      "Complete what they said. Listen again if you need.",
      "1. Asel: I had a good salary, job [security], a nine-to-five routine.\n2. Asel: I took a big pay [cut].\n3. Ruslan: When I got [over] my injury, I joined the rescue team.\n4. Ruslan: I had to start from [scratch].\n5. Ruslan: That was my safety [net].\n6. Ruslan: I've found my [calling].",
    ),
  ]),

  section("Video: Are you unhappy at work?", [
    tip("BBC Learning English, about 6 minutes. Before watching: *What makes people unhappy at work?* After watching, compare with Asel's and Ruslan's stories."),
    video("Watch: Are you unhappy at work? — 6 Minute English.", "V2eW5jGQe8I"),
    text(
      "After the video: talk to your teacher.",
      "- What reasons for being unhappy at work did the video mention? Do you agree?\n- Which new words or phrases did you notice? Write down three. ✍️\n- What makes YOU happy or unhappy in your work or studies?",
    ),
  ]),

  section("Reading: Before you quit", [
    tip("A text of ~380 words. First reading: *Which question is the most important, in your opinion?* Then the tasks."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["The writer says you should never change careers.", false],
        ["According to the article, a bad manager can make a good job feel terrible.", true],
        ["The writer suggests trying the new job before you quit.", true],
        ["You need to know exactly how much money you need each month.", true],
        ["The writer thinks your family's opinion is the most important thing.", false],
      ],
      {
        read: [
          "## 🚪 Five questions to ask before you quit",
          "Every year, millions of people dream of leaving their jobs and following their passion. Some of them become happier than ever. Others regret it within months. What's the difference? Before you write that resignation letter, ask yourself these five questions.",
          "**1. Is it the job — or something else?** Sometimes we hate our job because of one difficult manager, a long commute or too much overtime. A good job with a bad manager can feel terrible. Changing teams or companies might solve the problem without starting from scratch.",
          "**2. Have I tried it?** Your dream job might look perfect on social media, but what is a normal Tuesday like? Try it first: volunteer, take a weekend course, or work part-time. Asel, a former bank worker who now runs a bakery, worked at a bakery every weekend for a year before she quit. \"I needed to know if I could get up at four every day,\" she says.",
          "**3. How much money do I really need?** Write down exactly what you spend each month. Then build a safety net — experts often suggest saving enough for at least six months. A pay cut is easier when you're prepared.",
          "**4. What will I miss?** Job security, colleagues, a regular salary, a pension… Be honest. Freedom is wonderful, but being self-employed also means paying for your own holidays and sick days.",
          "**5. Whose dream is it?** Is this really your passion, or do you want to impress someone? Your parents, friends and partner will have opinions — listen to them, but in the end, you're the one who needs to get up every morning and do the work.",
          "Changing careers is a risk, but staying in a job you hate is a risk too: a risk to your health and happiness. The key is not to jump without looking. Prepare, test the water, and then — if your answer is still yes — go for it. 🚀",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What might solve the problem without a career change?", options: ["*changing teams or companies", "a longer holiday", "working overtime"] },
      { q: "Why did Asel work at a bakery on weekends?", options: ["*to see if she could get up at four every day", "because she needed money", "because the bank told her to"] },
      { q: "How much money do experts often suggest saving?", options: ["*enough for at least six months", "a year's salary", "nothing"] },
      { q: "What does “test the water” mean here?", options: ["*try something carefully before you decide", "go swimming", "check if the water is clean"] },
    ]),
  ]),

  section("Review: work and ability", [
    choose(
      "Choose the right form.",
      "1. Asel [*has to/is allowed to] get up at four every morning.\n2. In the first month, they [*couldn't/didn't manage] open for a whole weekend.\n3. Ruslan [*managed to/could] find two lost tourists last month.\n4. You [*needn't/aren't allowed to] quit tomorrow — prepare first.\n5. Ruslan [*wasn't able to/couldn't to] work full-time while he trained.\n6. You're [*supposed to/allowed to] give your manager a month's notice before you leave.\n7. When she was a child, Asel [*could/managed to] bake simple cakes.\n8. Self-employed people [*have to/don't have to] pay for their own holidays.",
    ),
    drag(
      "Complete Ruslan's message to a friend.",
      "Hi! Big news — I passed my last rescue exam! I [had] to study every night for months, but I [managed] to pass with a high score. 🎉 I [couldn't] believe it when I saw the results. Now I'm [allowed] to go on real rescue missions. I don't [need] to work in an office anymore — no more numbers! I'm [supposed] to start on Monday. Wish me luck! 🏔️",
      ["could", "able", "needn't", "allow"],
    ),
  ]),

  section("Let's talk: Money or meaning?", [
    text(
      "Discuss: Money or meaning? 💸❤️",
      "- Would you take a 50% pay cut to do a job you love? Why / why not?\n- Asel says a happy customer is worth more than money. Do you agree?\n- Is job security more important than passion? Does it depend on your age? On your family?\n- Is it a good idea to turn your hobby into your job — or does it kill the fun? 🎨\n- Remember your answer to “If money wasn't a problem…”? What would you need to do to make it real?",
    ),
    tip("Challenge the student's answers from both sides: *But what about your family? What if it fails?* / *But aren't you wasting your life?* Push for *I'd have to… I'd need to… I'd be able to…*"),
  ]),

  section("Writing: An article", [
    order(
      "Put the example article in order.",
      [[
        "My dream job? A wildlife photographer.",
        "Since I was a child, I've loved animals and cameras.",
        "You need to be patient — sometimes you wait for days to get one photo.",
        "The pay isn't great, and you're often cold and wet.",
        "But imagine seeing a snow leopard in the mountains — that would be worth everything!",
      ].join("\n")],
      "lines",
    ),
    write("Write an article for a student website (100 words): “My dream job.” What is it? What do you need to do it? What are the good and bad sides? Would you take the risk?", 100),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "earning less than before =", options: ["*a pay cut", "a safety net", "a perk"] },
      { q: "begin again from nothing =", options: ["*start from scratch", "make a living", "take a risk"] },
      { q: "a job you feel you were born to do =", options: ["*a calling", "a deadline", "a shift"] },
      { q: "makes you feel happy and useful =", options: ["*fulfilling", "exhausted", "self-employed"] },
    ]),
    box(
      "Phrase of the day: Do what you love…",
      "❤️ **Choose a job you love, and you will never have to work a day in your life.** — a popular saying.\n\nDo you believe it? Asel and Ruslan say: you'll still work hard — but it feels different. 😉",
    ),
  ]),

  homework(
    [
      gaps(
        "Complete.",
        "1. She quit her job to follow her [passion].\n2. It's not easy to make a [living] as an actor.\n3. I want a job that's [fulfilling], not just well-paid.\n4. He took a [risk] and opened a restaurant.\n5. Save money first — you need a safety [net].\n6. After the move, they had to start from [scratch].",
      ),
      quiz("Choose the right word.", [
        { q: "A teacher who loves their job finds it ___.", options: ["*fulfilling", "exhausting only", "secure"] },
        { q: "Civil servants usually have good job ___.", options: ["*security", "risk", "scratch"] },
        { q: "I ___ my job last month — I'm going to travel!", options: ["*quit", "made", "took"] },
        { q: "Are you ___ with your salary?", options: ["*satisfied", "fulfilling", "determined"] },
      ]),
      choose(
        "Review: choose.",
        "1. I [*managed to/could] get the job after three interviews!\n2. You [*don't need to/aren't allowed to] have a degree for this job.\n3. When I was a student, I [*could/managed to] sleep until noon. 😄\n4. Employees [*aren't allowed to/needn't] smoke in the building.\n5. I was [*supposed to/able to] send the report yesterday, but I forgot.\n6. She [*had to/could] work two jobs to pay the rent.",
      ),
    ],
    "Homework: Vocabulary and grammar",
  ),
  homework(
    [
      write("Interview someone about their job (a parent, a friend, a neighbor). Ask: What do you need to do? What do you love / hate about it? Would you change careers? Write a short report (100+ words).", 100),
      record("Record 1–2 minutes: Would you rather have a safe job you don't love or a risky job you love? Explain why with examples. 🎤", 120),
    ],
    "Homework: Writing and speaking",
  ),
]);
