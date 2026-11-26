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
  write,
} from "../../kit";

// 8.4 Revision 7–8 — points for every task, in the format of Cambridge B2 First (as in the programme): Use of English Parts 3–4, Reading Part 5 (Zarina's column about burnout, ~390 words), Part 6 (the power of naps, missing sentences, ~310 words), Part 7 (four people who changed a habit, ~320 words), Listening Part 4 (an interview with a habit researcher, ~3:15), Speaking Part 2 (comparing two situations); grammar and vocabulary of modules 7–8. Project: an essay "Should the government decide what is healthy for us?" (140–190 words). Warm-up format: sorting (8.3 had a quiz).
// Facts checked: a NASA study of long-haul pilots (Rosekind and colleagues, 1995) — a planned nap of about 26 minutes improved performance by about 34% and alertness by about 54%; Phillippa Lally and colleagues (University College London, 2010) — forming a new habit took 66 days on average, with a range from 18 to 254 days, and missing one day didn't ruin the process; Peter Gollwitzer — "implementation intentions" (if–then plans: "If it's 7 a.m., then I'll go for a run") make people more likely to act; in 2018 the UK introduced a tax on sugary soft drinks (the "sugar tax"). Characters: Zarina (podcaster) writes the Part 5 column; the four people in Part 7 (Erlan, Sofia, Mark, Aruzhan) and the researcher (Dr. Ahmed) are invented.
export default lesson("b2-8.4", "Revision 7–8", () => [
  section("Warm-up: Which module?", [
    box(
      "Today you will…",
      "- check what you remember from modules 7–8 🧠\n- try Reading Parts 5, 6 and 7 and Listening Part 4 of B2 First 📝\n- plan your essay “Should the government decide what is healthy for us?” ✍️",
    ),
    sort("Sort the sentences: which grammar do they show? 🧩", {
      "🗣️ Module 7: reporting verbs and reported speech": [
        "She accused me of lying.",
        "He refused to apologize.",
        "She says she is tired.",
        "They asked me where I lived.",
      ],
      "🩺 Module 8: conditionals and wishes": [
        "If I had slept more, I would feel better.",
        "I wish you would stop interrupting.",
        "You'll get better as long as you rest.",
        "Take a jacket in case it gets cold.",
      ],
    }),
    tip("Every task gives points. Score guide: 80%+ excellent; 65–80% good — review the weak topics in the next warm-ups; under 65% — go back to the grammar sections of modules 7–8. Today has a lot of reading: keep to the times in the exam tips."),
  ]),

  section("Use of English Part 3: Word formation", [
    tip("Exam tip: decide first which part of speech you need (noun? adjective? adverb?), then check if it should be negative or plural."),
    gaps(
      "Read the sentences. Use the word in brackets to form a word that fits the gap.",
      "1. There was a [misunderstanding] between the two friends. (understand)\n2. Children are often more [resilient] than adults think. (resilience)\n3. She's very [trustworthy] — you can tell her anything. (trust)\n4. The doctor made a quick [diagnosis]. (diagnose)\n5. His answer was very [tactful]. (tact)\n6. Some bacteria have become [resistant] to antibiotics. (resist)\n7. The medicine was completely [ineffective]. (effect)\n8. She made a full [recovery]. (recover)",
    ),
  ]),

  section("Use of English Part 4: Say it differently", [
    tip("Exam tip: use the word in capitals WITHOUT changing it, and write 2–5 words. Keep the meaning exactly the same — check tense and negatives."),
    gaps(
      "Complete the second sentence so that it means the same as the first. Use the word in capitals and 2–5 words.",
      "1. “I didn't take your phone,” he said. (DENIED) → He [denied taking/denied having taken] my phone.\n2. “You broke the window!” she said to me. (ACCUSED) → She [accused me of breaking] the window.\n3. I didn't sleep, so I'm tired now. (WOULDN'T) → If I had slept, I [wouldn't be] tired now.\n4. I regret eating so much. (WISH) → I [wish I hadn't eaten] so much.\n5. You won't pass if you don't study. (UNLESS) → You won't pass [unless you study].\n6. Take your phone because you might get lost. (CASE) → Take your phone [in case you get] lost.",
    ),
  ]),

  section("Reading Part 5: A long text", [
    tip("Exam tip: the questions follow the order of the text. Find the right paragraph, read it carefully, and choose the option that says the same thing in different words. 7 minutes."),
    quiz(
      "Read Zarina's column and choose the right answer.",
      [
        { q: "1. How did Zarina feel before her burnout?", options: ["*She was proud of how busy she was.", "She was bored with her work.", "She wanted to stop the podcast."] },
        { q: "2. What was the first sign that something was wrong?", options: ["*She couldn't remember a guest's name.", "She lost her voice.", "She missed a recording."] },
        { q: "3. Why did Zarina find it hard to ask for help?", options: ["*She didn't want to look weak.", "Nobody offered to help.", "She didn't know anyone."] },
        { q: "4. What does “it” refer to in “it saved me” (paragraph 4)?", options: ["*her friend's honest message", "the doctor's advice", "the podcast break"] },
        { q: "5. What is Zarina's attitude to her work now?", options: ["*She still loves it but has clear limits.", "She has stopped working.", "She works even harder."] },
        { q: "6. What is the main purpose of the column?", options: ["*to warn readers and encourage them to rest before it's too late", "to advertise her podcast", "to complain about her listeners"] },
      ],
      {
        read: [
          "## 🎙️ The week I stopped",
          "by Zarina",
          "A year ago, if you had asked me how I was, I would have said, \"Busy!\" — and I would have said it with a smile. I was recording two podcast episodes a week, answering hundreds of messages, planning guests months in advance and sleeping about five hours a night. I thought being busy meant being successful. I wore my tiredness like a medal.",
          "The first sign that something was wrong was small. In the middle of a recording, I turned to my guest — a lovely woman I had known for years — and realized I couldn't remember her name. I laughed it off. A week later, I sat down to edit an episode and found myself staring at the screen for forty minutes without moving the mouse. I wasn't thinking about anything. I was just empty.",
          "I didn't tell anyone. I kept telling myself that if I worked a little harder, I would catch up and everything would be fine. Asking for help felt like admitting I wasn't good enough. Other people managed. Why couldn't I?",
          "Then my friend Madina sent me a message. She had listened to my latest episode and wrote, very gently, that I sounded exhausted and that she was worried about me. She didn't tell me what to do. She just asked if I was OK. I read it on the bus and started crying. It saved me, because for the first time I said it out loud — to her, and then to a doctor: I'm not OK.",
          "The doctor's diagnosis was simple: burnout. The treatment was simpler, and much harder: stop. I took a month off. I told my listeners the truth, expecting them to be disappointed. Instead, I received hundreds of kind messages — many from people who said they felt the same.",
          "Today, I still love my work, but I do it differently. I record one episode a week, not two. I don't answer messages after eight in the evening. I sleep seven or eight hours, and I've discovered that I have better ideas when I'm not exhausted. Who knew?",
          "If you recognize yourself in this column, please don't wait until you forget your best friend's name. Being busy isn't the same as being successful. Rest isn't a reward for finishing everything. It's what makes everything else possible.",
        ].join("\n\n"),
      },
    ),
    gaps(
      "Find words in the column.",
      "1. a prize you wear, e.g. for winning a race: a [medal]\n2. treated something as unimportant by laughing: laughed it [off]\n3. looking at something for a long time without moving: [staring]\n4. extremely tired: [exhausted]\n5. complete physical and mental tiredness from overwork: [burnout]\n6. know someone or something again because you have seen it before: [recognize]",
    ),
  ]),

  section("Reading Part 6: Missing sentences", [
    tip("Exam tip: read the whole text first. Then look at the words BEFORE and AFTER each gap — pronouns, linkers and repeated ideas show which sentence fits. One sentence is extra. 6 minutes."),
    drag(
      "Read the article. Six sentences are missing. Drag the right sentence into each gap. There is one extra sentence you don't need.",
      [
        "## 💤 In defense of the nap",
        "In many countries, a short sleep after lunch is a normal part of the day. [In others, it is seen as a sign of laziness.] But scientists are increasingly on the side of the nappers.",
        "One of the most famous studies was carried out by NASA in the 1990s. Researchers studied pilots on long international flights. [Some of them were allowed a planned nap of about forty minutes in the cockpit, while the others stayed awake.] The pilots who napped slept for about 26 minutes on average. Afterwards, their performance was about a third better, and their alertness improved by more than half.",
        "Why does a short nap help so much? Our energy naturally drops in the early afternoon, even if we haven't eaten a big lunch. [That's why so many people feel sleepy at around two or three o'clock.] A short sleep at this time can refresh the brain without affecting our sleep at night.",
        "The length of the nap is important, though. [Sleep for too long, and you may wake up feeling worse than before.] This is because after about half an hour, the brain moves into deeper sleep, and waking up from it is difficult. Most experts recommend a nap of between ten and thirty minutes.",
        "Some people even combine a nap with a cup of coffee. [It sounds strange, but there is a logic to it.] Caffeine takes about twenty minutes to start working, so if you drink a coffee and then nap immediately, you wake up just as the caffeine begins to work.",
        "Of course, a nap is not a cure for regular lack of sleep. [If you need a nap every single day, it might be a sign that you're not sleeping enough at night.] But for most of us, a short rest in the afternoon is not lazy. It's smart. 😴",
      ].join("\n\n"),
      ["Coffee is one of the most popular drinks in the world."],
    ),
    quiz("Read again. Choose.", [
      { q: "How long did the NASA pilots nap on average?", options: ["*about 26 minutes", "about 40 minutes", "about 2 hours"] },
      { q: "Why do many people feel sleepy at two or three o'clock?", options: ["*Our energy naturally drops in the early afternoon.", "They eat too much.", "They drink too little coffee."] },
      { q: "Why can a long nap make you feel worse?", options: ["*Waking up from deep sleep is difficult.", "You miss lunch.", "It stops the caffeine working."] },
      { q: "What might a daily need for naps mean?", options: ["*You're not sleeping enough at night.", "You're lazy.", "You drink too much coffee."] },
    ]),
  ]),

  section("Reading Part 7: Four people, four habits", [
    tip("Exam tip: read the questions first and underline the key words. Then find the same idea in DIFFERENT words in the texts. The questions are not in the order of the texts. 7 minutes."),
    quiz(
      "Read about four people who changed a habit. Which person…",
      [
        { q: "1. …was encouraged by a family member?", options: ["*Erlan", "Aruzhan", "Mark", "Sofia"] },
        { q: "2. …changed a habit because of a health warning?", options: ["*Mark", "Sofia", "Erlan", "Aruzhan"] },
        { q: "3. …failed several times before succeeding?", options: ["*Aruzhan", "Mark", "Sofia", "Erlan"] },
        { q: "4. …sleeps better because of the change?", options: ["*Sofia", "Erlan", "Aruzhan", "Mark"] },
        { q: "5. …saves money thanks to the new habit?", options: ["*Erlan", "Sofia", "Mark", "Aruzhan"] },
        { q: "6. …made a very specific plan?", options: ["*Aruzhan", "Erlan", "Sofia", "Mark"] },
        { q: "7. …admits they still sometimes break the rule?", options: ["*Sofia", "Mark", "Aruzhan", "Erlan"] },
        { q: "8. …has made new friends because of the change?", options: ["*Mark", "Aruzhan", "Erlan", "Sofia"] },
      ],
      {
        read: [
          "## 🔁 The habit that changed my life",
          "**Erlan.** For years, I lived on takeaways. I was too tired to cook after work, and anyway, I didn't know how. Then my sister gave me a cookbook for my birthday with a note: \"Twenty recipes. Twenty minutes each. No excuses.\" At first I was offended, but I tried one recipe, then another. Now I cook four or five evenings a week. I feel lighter, and I spend about half as much on food as I used to. My sister says I owe her dinner.",
          "**Sofia.** My problem was my phone. I used to scroll in bed until one or two in the morning, and then I couldn't fall asleep. Now my phone stays in the kitchen at night, and I read a paper book instead. I fall asleep much faster, and I don't wake up feeling exhausted. I won't pretend I'm perfect — on Friday nights, the phone sometimes finds its way back into the bedroom. But most nights, it works.",
          "**Mark.** Two years ago, my doctor told me that my blood pressure was too high and that I needed to exercise. I hated running, so I joined a walking group in the park instead. We meet three mornings a week, rain or shine. I've lost weight, my blood pressure is normal again, and, to my surprise, I've found a group of friends I'd never have met otherwise. We even go on walking holidays together now.",
          "**Aruzhan.** I wanted to start exercising for years. Every January, I'd buy new trainers, go to the gym twice and then give up. What finally worked was a very precise plan: \"If it's Monday, Wednesday or Friday and it's 7 a.m., I put on my trainers and go for a 20-minute run — even if I don't feel like it.\" No decisions, no excuses. It took about two months before it felt automatic. Now, if I miss a run, I feel strange all day.",
        ].join("\n\n"),
      },
    ),
  ]),

  section("Reading Part 7: words", [
    gaps(
      "Find words in the texts.",
      "1. food you buy cooked and eat at home: [takeaways]\n2. upset because someone was rude: [offended]\n3. the force of blood in your body: blood [pressure]\n4. in any weather: rain or [shine]\n5. very exact: [precise]\n6. done without thinking: [automatic]",
    ),
  ]),

  section("Listening Part 4: An interview", [
    tip("Exam tip: you hear one long interview and answer seven questions. Read the questions first — they follow the order of the interview. The right answer often uses different words from the recording. In the exam you hear it twice."),
    ...listening(
      "Listen to an interview with a researcher who studies habits.",
      "**Host:** My guest today is Dr. Ahmed, who studies how habits form. Dr. Ahmed, many people say it takes twenty-one days to form a new habit. Is that true?\n\n**Dr. Ahmed:** I'm afraid that's a myth. The number twenty-one seems to come from a book written in the nineteen-sixties, and it was never properly tested. In 2010, researchers at University College London followed people who were trying to form a new habit, like drinking water at lunch or doing a short exercise. On average, it took sixty-six days for the new behavior to become automatic. But the range was huge — from eighteen days to more than eight months.\n\n**Host:** Eight months! That's discouraging.\n\n**Dr. Ahmed:** It doesn't have to be. The same study found something very encouraging: missing a single day didn't ruin the process. People often think that if they break the chain once, they've failed and might as well give up. That's simply not true. What matters is getting back on track the next day.\n\n**Host:** Why do so many New Year's resolutions fail?\n\n**Dr. Ahmed:** Usually because they're too big and too vague. \"I'll get fit\" or \"I'll eat better\" isn't a plan; it's a wish. Our brains need something more concrete. One of the most effective techniques is what psychologists call an if–then plan. Instead of saying \"I'll exercise more\", you say, \"If it's seven a.m. on a Monday, then I'll go for a twenty-minute walk.\" The situation becomes the trigger, so you don't have to make a decision every time.\n\n**Host:** So it's a conditional sentence.\n\n**Dr. Ahmed:** Exactly! Your English teacher would be proud. Another useful idea is to attach the new habit to an old one. If you want to start stretching, do it straight after you brush your teeth, for example. The old habit reminds you of the new one.\n\n**Host:** What about willpower? Some people seem to have much more of it than others.\n\n**Dr. Ahmed:** Interestingly, the people who seem to have the most self-control often don't use much willpower at all. They design their lives so that they don't need it. If you don't want to eat biscuits, the most effective thing is not to fight the temptation every evening — it's not to buy them. If you want to read more, put the book on your pillow and the phone in another room.\n\n**Host:** Is it ever too late to change a habit?\n\n**Dr. Ahmed:** Never. I've worked with people in their eighties who've taken up swimming or learned a language. It may take a little longer, but the brain can change at any age. The key is to start small. Very small. One push-up. One page. One glass of water. It sounds ridiculous, but small habits grow.\n\n**Host:** Final question: what's one habit you're working on yourself?\n\n**Dr. Ahmed:** Going to bed earlier. If I'd started ten years ago, I'd probably be a much nicer person in the mornings.\n\n**Host:** Dr. Ahmed, thank you.",
    ),
    quiz("Listen and choose the best answer.", [
      { q: "1. What does Dr. Ahmed say about the “21 days” idea?", options: ["*It was never properly tested.", "It's true for most people.", "It comes from the 2010 study."] },
      { q: "2. How long did it take on average to form a habit in the 2010 study?", options: ["*66 days", "21 days", "8 months"] },
      { q: "3. What did the study find about missing a day?", options: ["*It didn't ruin the process.", "People had to start again.", "It made habits stronger."] },
      { q: "4. Why do New Year's resolutions often fail?", options: ["*They're too big and vague.", "People don't really want them.", "January is too cold."] },
      { q: "5. What is the purpose of an if–then plan?", options: ["*The situation triggers the action, so you don't have to decide.", "It gives you a reward.", "It makes you feel guilty."] },
      { q: "6. According to Dr. Ahmed, people with strong self-control…", options: ["*organize their lives so they don't need much willpower", "use more willpower than others", "never feel temptation"] },
      { q: "7. What is Dr. Ahmed's main advice for starting a habit?", options: ["*Start very small.", "Wait until you feel motivated.", "Change everything at once."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["The 21-day idea comes from a book written in the 1960s.", true],
      ["In the 2010 study, some people needed more than eight months.", true],
      ["Dr. Ahmed says you should start again if you miss one day.", false],
      ["Attaching a new habit to an old one can help.", true],
      ["Dr. Ahmed thinks people over eighty can't change their habits.", false],
    ]),
    gaps(
      "Complete the sentences from the interview.",
      "1. Missing a single day didn't [ruin] the process.\n2. What matters is getting back on [track] the next day.\n3. “I'll get fit” isn't a plan; it's a [wish].\n4. The situation becomes the [trigger].\n5. They design their lives so that they don't need [willpower].\n6. If I'd started ten years ago, I'd probably [be] a much nicer person in the mornings.",
    ),
  ]),

  section("Grammar check", [
    choose(
      "Choose the right answer.",
      "1. She denied [*breaking/to break] the vase.\n2. He promised [*to call/calling] me every day.\n3. My doctor says I [*need/needed] more sleep. (still true)\n4. They asked me where I [*lived/did I live].\n5. If I had studied harder, I [*would be/would have been] a doctor now.\n6. I wish my neighbor [*would stop/stopped] drilling at 7 a.m.!\n7. You won't recover [*unless/as long as] you rest.\n8. Take some water [*in case/if] you get thirsty on the way.",
    ),
    drag(
      "Complete the story.",
      "Last month my friend accused me [of] forgetting her birthday. I apologized [for] missing it and promised [to] make it up to her. She said she [was] still a bit upset. I wish I [had] written it in my calendar! If I were more organized, I would [have] remembered. Now I set reminders for everything, [in] case I forget again. 🎂",
      ["to", "about", "would"],
    ),
  ]),

  section("Vocabulary check", [
    match("Match the words and the meanings.", [
      ["fall out", "stop being friends after an argument"],
      ["a setback", "a problem that stops progress"],
      ["tactful", "careful not to upset people"],
      ["sleep-deprived", "without enough sleep"],
      ["a side effect", "an unwanted effect of a medicine"],
      ["a placebo", "a fake treatment"],
    ]),
    quiz("Choose the right word.", [
      { q: "Don't hold a ___ — it was a long time ago.", options: ["*grudge", "rumor", "setback"] },
      { q: "Most of our customers came by word of ___.", options: ["*mouth", "trust", "reputation"] },
      { q: "I've decided to cut ___ on sugar.", options: ["*down", "up", "off"] },
      { q: "Antibiotics don't work against ___.", options: ["*viruses", "bacteria", "infections"] },
    ]),
  ]),

  section("Speaking Part 2: Compare two situations", [
    text(
      "Talk for one minute 🗣️",
      "In B2 First Speaking Part 2, you compare two photos for about a minute and answer a question. Imagine these two photos:\n\n**Photo A:** 🏃‍♀️ A group of people running together in a park early in the morning.\n\n**Photo B:** 🧘 A woman sitting alone at home, doing yoga with an online video.\n\n**Question:** *Why might these people have chosen to exercise in these ways? Which is better for staying motivated?*\n\nUseful: *In the first picture… whereas in the second… Both pictures show… I'd say that… The people in A might… because…*",
    ),
    tip("Time it: one minute exactly. Don't describe everything — compare and speculate (*They might be…, It looks as if…*). Then ask the follow-up question: *Which would you prefer, and why?* (about 30 seconds)."),
  ]),

  section("Writing: plan your essay", [
    order(
      "Put the parts of an opinion essay in the right order.",
      [[
        "an introduction: the question in your own words and why it matters",
        "the first point from the notes, with a reason and an example",
        "the second point from the notes, with a reason and an example",
        "your own idea (the third point)",
        "a conclusion: your opinion, clearly stated",
      ].join("\n")],
      "lines",
    ),
    box(
      "✍️ Project: an essay",
      "**Should the government decide what is healthy for us?** Write an essay (140–190 words).\n\n**Notes — write about:**\n1. taxes on unhealthy products (for example, the UK's tax on sugary drinks)\n2. personal freedom\n3. your own idea\n\n**Use:** linkers (*however, on the other hand, in my view*), conditionals (*If…, people would…; as long as…; unless…*), and at least one piece of evidence.",
    ),
    tip("Brainstorm together: one argument for, one against, and the student's own idea (advertising for children? school food? free sports centers?). Remind: the conclusion must answer the question clearly."),
  ]),

  section("Your result", [
    trueFalse("Check yourself. Can you do it? True or false? ✅", [
      ["I can report what people said with verbs like accuse, deny, refuse and suggest.", true],
      ["I know when to change the tense in reported speech — and when not to.", true],
      ["I can have a tactful conversation and take criticism well.", true],
      ["I can use mixed conditionals and wishes about the past and the present.", true],
      ["I can use unless, as long as, provided and in case.", true],
      ["I can take part in a debate with evidence and rebuttals.", true],
    ]),
    tip("This list is for reflection: if the student wants to say “false”, talk about it and plan review. Count the points from today's tasks together."),
  ]),

  homework(
    [
      choose(
        "Choose.",
        "1. He admitted [*cheating/to cheat] in the game.\n2. She reminded me [*to buy/buying] milk.\n3. If we [*hadn't missed/didn't miss] the train, we'd be at home now.\n4. I wish I [*had learned/learned] to swim as a child.\n5. You can borrow it [*provided/unless] you're careful.\n6. Write it down [*in case/if] you forget.",
      ),
      gaps(
        "Word formation.",
        "1. Her [refusal] to apologize made things worse. (refuse)\n2. He's a very [forgiving] person — he never holds a grudge. (forgive)\n3. The [treatment] lasted six weeks. (treat)\n4. It was an [unexpected] comeback. (expect)\n5. She spoke [tactfully] about the problem. (tact)\n6. She spoke with great [confidence]. (confident)",
      ),
      order("Make sentences.", [
        "She apologized for being late.",
        "He said he was tired.",
        "If I had slept more, I would feel better.",
        "I wish you would listen to me.",
        "You won't get better unless you rest.",
      ]),
    ],
    "Homework: Review",
  ),
  homework(
    [
      write("Project: write your essay “Should the government decide what is healthy for us?” (140–190 words).", 140),
      record("Project (option): record your essay as a 2-minute talk. 🎙️", 120),
    ],
    "Homework: Project",
  ),
]);
