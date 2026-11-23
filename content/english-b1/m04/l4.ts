import {
  box,
  choose,
  drag,
  gaps,
  homework,
  lesson,
  listening,
  match,
  picture,
  quiz,
  record,
  section,
  sort,
  text,
  tip,
  trueFalse,
  write,
} from "../../kit";

// 4.4 Revision 3–4 — points for every task, in the format of B1 Preliminary (other parts than in 2.4): Reading Parts 3, 4 and 6, Listening Part 4 (an interview), Writing Part 2 (an article), Speaking Parts 1–2. Grammar: used to / would, be / get used to, future forms, Future Continuous, time clauses, likely to / might. Project: “A letter to future me”.
export default lesson("b1-4.4", "Revision 3–4", () => [
  section("Warm-up: Past and future", [
    box(
      "Today you will…",
      "- check what you've learned in modules 3 and 4 ✅\n- try new parts of the **B1 Preliminary** exam 🎓\n- start your project: *A letter to future me* ✉️",
    ),
    text(
      "Game: Hot seat 🔥",
      "Pick a card and talk for 1 minute without stopping! Your teacher times you. ⏱️\n\n🃏 Something I used to do as a child\n🃏 Something I'm getting used to now\n🃏 What I'll be doing this time next year\n🃏 A complaint I made (or wanted to make)\n🃏 A job robots will probably do in 20 years\n\nThen your teacher takes a card. 😄",
    ),
    text(
      "Talk to your teacher.",
      "- Which habit from your childhood have you kept — and which one have you happily lost? 🔄\n- Which lesson in these two modules made you think the most? Why?\n- Be honest: are you more nostalgic about the past or excited about the future?",
    ),
    tip("Every task gives points. Don't help during the tasks; check the answers after each part. Score guide: 85%+ excellent; 70–85% good — review the weak topics in the next warm-ups; under 70% — repeat the grammar sections of the weak lessons. Tell the student that Reading Parts 3 and 4 are the longest in the real exam: they should read the questions first."),
  ]),

  section("Reading Part 1: Short messages", [
    quiz("Read the messages. What do they say? Choose the right answer.", [
      { q: "📌 “Returns: bring the item and your receipt within 30 days. No refunds on sale items.”", options: ["*You can't get your money back for things bought in the sale.", "You can return anything at any time.", "You don't need a receipt."] },
      { q: "💬 Dana → Leo: “I'll be in a meeting until 3. Call me as soon as you get the tickets!”", options: ["*Dana wants Leo to call after he buys the tickets.", "Dana will call Leo at 3.", "Dana has already got the tickets."] },
      { q: "🏫 “From September, all Year 10 students will be learning a second language. Choose Spanish, Chinese or German by 1 June.”", options: ["*Students must choose a language before June.", "Students can't choose their language.", "Classes start on 1 June."] },
      { q: "📱 “Phone-free zone: please switch off your phone in the reading room. Calls can be made in the hall.”", options: ["*You can make calls outside the reading room.", "Phones are not allowed in the building.", "You can use your phone quietly in the reading room."] },
      { q: "💬 Kenji → team: “The app test is likely to finish late on Friday. Don't book anything before 8!”", options: ["*The team will probably work late on Friday.", "The test has been cancelled.", "Kenji is sure the test will finish early."] },
    ]),
  ]),

  section("Reading Part 3: A long text", [
    quiz(
      "Read the text and the questions. Choose the right answer.",
      [
        { q: "Why did Asel decide to change her career?", options: ["*She wanted a job where she could see people's faces.", "She lost her job at the bank.", "Her parents told her to."] },
        { q: "What was the hardest part of retraining?", options: ["*studying while working full-time", "the cost of the course", "finding a teacher"] },
        { q: "How does Asel feel about her old colleagues now?", options: ["*She's grateful to them.", "She's angry with them.", "She never thinks about them."] },
        { q: "What is Asel's plan for the next year?", options: ["*to open a small bakery with a friend", "to go back to the bank", "to take a gap year"] },
        { q: "What would be the best title for the text?", options: ["*From numbers to bread", "A day at the bank", "Why you shouldn't change jobs"] },
      ],
      {
        read: [
          "## 🥖 From numbers to bread",
          "For eight years, Asel used to work in a bank. She was good at her job and got promoted twice, but she wasn't happy. \"I spent all day looking at numbers on a screen,\" she says. \"I wanted a job where I could see people's faces when they enjoyed something I'd made.\"",
          "At 31, she decided to retrain as a baker. For a year, she worked at the bank during the day and studied at a cooking school three evenings a week and on Saturdays. \"That was the hardest part — I was exhausted all the time. I used to fall asleep on the bus home!\" She also had to get used to earning much less money in her first job at a bakery, where she started at five in the morning.",
          "Some people thought she was crazy. \"My parents were worried, and a few friends said I'd regret it.\" But she's grateful to her old colleagues: \"They organized a goodbye party and still come to buy my bread every Friday!\"",
          "Now Asel is planning her next step. Next spring she and a friend are opening a small bakery near the river. \"This time next year, I'll be getting up at four and making bread for the whole neighborhood. It's bound to be hard work, but I've never been so sure about anything.\"",
        ].join("\n\n"),
      },
    ),
  ]),

  section("Reading Part 4: Missing sentences", [
    drag(
      "Read the text. Put the missing sentences in the gaps. There are two extra sentences.",
      "The town that went phone-free 📵\n\nLast year, the small town of Greystone tried an experiment: one phone-free day every month. [It started with a simple idea from a local teacher.] She noticed that families in the café never talked to each other. On the first phone-free Sunday, many people felt lost. [Some of them checked their empty pockets every few minutes.] But by lunchtime, something had changed. [People were playing games, chatting and walking in the park.] The local shops were busier than usual. [The owners say they've never sold so many board games.] Now the phone-free day happens every month. [Other towns are likely to try the idea soon.] And the teacher? [She's already planning the next step: a phone-free week.]",
      ["Everybody hated the idea and left the town.", "Phones were invented in the nineteenth century."],
    ),
  ]),

  section("Reading Part 6: One word", [
    gaps(
      "Read the message. Write ONE word in each gap.",
      "Hi Kenji!\n\nI hope you're getting used [to] life with your new project! I'm writing because I'm visiting Almaty next month. I'll call you as soon [as] I arrive. My flight lands [at] 6 p.m. on Friday.\n\nI'm so excited — I've never [been] to Kazakhstan before. Will you [be] working on Saturday? If not, maybe we could go to the mountains. I know you've just taken [up] climbing, so you can show me your skills! 😄\n\nWhen I was a kid, I [used] to dream about seeing snow-covered mountains. It's [likely] to be cold, so I'll bring a warm coat.\n\nSee you soon,\nLeo",
    ),
  ]),

  section("Grammar check", [
    choose(
      "Choose the right answer.",
      "1. When I was little, we [*would/used] spend every summer at the lake.\n2. I [*used to/am used to] have long hair, but I cut it last year.\n3. She's from Spain, so she isn't used to [*the cold/be cold].\n4. I'll call you when I [*get/will get] to the station.\n5. This time tomorrow I [*'ll be flying/fly] to Istanbul.\n6. The concert [*starts/is starting to] at 8 p.m. — here are the tickets.\n7. AI is [*likely/probably] to change many jobs.\n8. A: I'm thirsty. B: I [*'ll get/'m getting tomorrow] you some water.",
    ),
    gaps(
      "Complete with the right form of the verb in brackets.",
      "1. We [didn't use to have/did not use to have] a car when I was a child. (not / have)\n2. It took me months to get used to [working] at night. (work)\n3. Don't call at 9 — I [will be having/'ll be having] a meeting. (have)\n4. As soon as I [find] a job, I'll move to Astana. (find)\n5. I [am meeting/'m meeting] my old classmates on Saturday — we booked a table. (meet)\n6. I think robots [will do/'ll do] most housework one day. (do)\n7. Are you used to [living] alone? (live)\n8. My grandpa [used to work] as a pilot. (work)",
    ),
  ]),

  section("Vocabulary check", [
    drag(
      "Complete the text.",
      "When Laura moved to Almaty, she felt [homesick] at first. She wasn't used to the [culture] shock, but slowly she started to fit [in]. Now she's [planning] a new English course, because she thinks AI is unlikely to [replace] good teachers. She's [likely] to stay for many years!",
      ["nostalgic", "out", "bound"],
    ),
    match("Match the words and the meanings.", [
      ["homesick", "sad because you're far from home"],
      ["nostalgic", "happy and sad when you remember the past"],
      ["a refund", "your money back"],
      ["faulty", "doesn't work properly"],
      ["get promoted", "get a better position at work"],
      ["a scholarship", "money to pay for your studies"],
      ["automate", "make a machine do the job"],
      ["fall behind", "make less progress than others"],
    ]),
    sort("Sort the words. 🧩", {
      "📱 technology": ["scroll through", "notifications", "log in", "unplug"],
      "🎓 education": ["curriculum", "assess", "a degree", "drop out"],
      "🛍️ complaints": ["receipt", "replacement", "warranty", "damaged"],
    }),
    quiz("Choose the right word.", [
      { q: "It took her a year to ___ in at the new school.", options: ["*fit", "grow", "set"] },
      { q: "My grandparents ___ me up.", options: ["*brought", "grew", "took"] },
      { q: "Is AI a threat or an ___?", options: ["*opportunity", "unemployment", "efficient"] },
      { q: "I'm afraid this phone is ___ — it keeps switching off.", options: ["*faulty", "nostalgic", "homesick"] },
    ]),
  ]),

  section("Listening Part 4: An interview", [
    tip("Like B1 Preliminary Listening Part 4: one longer interview, six questions. In the exam, students hear it twice. Give 1 minute to read the questions first."),
    ...listening(
      "Listen to an interview with Ben, who moved from London to a small village in Norway. Choose the right answers.",
      "**Interviewer:** Ben, three years ago you left London for a tiny village in Norway. Why?\n\n**Ben:** Well, I used to work in a big office in London, and I was always tired and stressed. I spent two hours a day on the train. When my company said I could work from anywhere, I decided to try something completely different.\n\n**Interviewer:** Why Norway?\n\n**Ben:** I'd been there on a hiking trip with friends — the trip where we got lost in the snow! Strangely, I fell in love with the mountains that day.\n\n**Interviewer:** What was hard to get used to?\n\n**Ben:** The darkness in winter. In December, the sun is up for only a few hours. At first I felt quite down. But the locals taught me to enjoy it: candles, warm drinks, and skiing under the northern lights. Now I'm used to it, and I actually love winter.\n\n**Interviewer:** Do you miss anything about London?\n\n**Ben:** Good Indian food! And my friends, of course. But I see them online every week, and two of them are visiting me in March.\n\n**Interviewer:** And the language?\n\n**Ben:** I'm getting better. I take lessons twice a week, and my neighbors are very patient. I'm not fluent yet, but I can have a normal conversation in the village shop.\n\n**Interviewer:** What are your plans?\n\n**Ben:** This time next year, I'll be running small hiking tours for tourists. I'm doing a mountain guide course at the moment. As soon as I get my certificate, I'll start.\n\n**Interviewer:** Any advice for people who want to move abroad?\n\n**Ben:** Don't expect it to be easy. It's likely to be hard for the first year. But if you're patient, it might be the best decision of your life.",
    ),
    gaps(
      "Complete what Ben said. Listen again if you need.",
      "1. I used to work in a big [office] in London.\n2. At first I felt quite [down].\n3. Now I'm [used] to it, and I actually love winter.\n4. I'm not [fluent] yet.\n5. This time next year, I'll be [running] small hiking tours.\n6. As soon as I get my [certificate], I'll start.",
    ),
    quiz("Listen and choose.", [
      { q: "Why did Ben leave London?", options: ["*He was tired and stressed.", "He lost his job.", "His family moved."] },
      { q: "How did Ben first get to know Norway?", options: ["*on a hiking trip", "for work", "through a Norwegian friend"] },
      { q: "What was hard to get used to?", options: ["*the darkness in winter", "the food", "the people"] },
      { q: "What does Ben miss about London?", options: ["*Indian food and his friends", "the office", "the trains"] },
      { q: "How good is Ben's Norwegian now?", options: ["*He can have a normal conversation in the shop.", "He's fluent.", "He doesn't speak any."] },
      { q: "What will Ben be doing this time next year?", options: ["*running hiking tours", "working in London", "teaching English"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Ben used to travel two hours a day to work.", true],
      ["Ben has always loved winter.", false],
      ["Two friends are visiting him in March.", true],
      ["He takes language lessons every day.", false],
      ["He thinks moving abroad is easy.", false],
    ]),
  ]),

  section("Writing Part 2: An article", [
    box(
      "✍️ B1 Preliminary, Writing Part 2: an article",
      "Answer the questions in the task, give **examples** and **reasons**, and make it interesting for the reader. About **100 words**.\n\n✅ a title · ✅ a question to the reader · ✅ your opinion with reasons · ✅ a strong ending",
    ),
    write("You see this notice on an English-language website: “Articles wanted! How will our lives be different in 20 years? What will be better and what will be worse?” Write your article (100 words).", 100),
  ]),

  section("Speaking Parts 1–2", [
    text(
      "Part 1: Questions about you 🗣️",
      "Answer your teacher's questions with 2–3 sentences each:\n\n- Where did you grow up? What did you use to do there as a child?\n- What's something new you're getting used to at the moment?\n- What will you be doing this weekend?\n- How do you think your job or studies will change in the future?",
    ),
    picture("Part 2: Describe the photo.", ["photos/retro-payphone.jpg"]),
    text(
      "Part 2: Talk about the photo for 1 minute 📸",
      "Describe the photo: **where** it is, **what** you can see, the **weather** and the **atmosphere**. Then say: *How did people use to use this? Do you think we'll still have them in 10 years?*\n\n*Useful: In the foreground… In the background… It looks like… People used to…*",
    ),
  ]),

  section("Your result and the project", [
    trueFalse("Check yourself. Can you do it? True or false? ✅", [
      ["I can talk about past habits with used to and would.", true],
      ["I can say what I'm used to and what I'm getting used to.", true],
      ["I can complain politely and ask for a refund.", true],
      ["I can choose the right future form.", true],
      ["I can say how sure I am about the future.", true],
    ]),
    tip("This list is for reflection: if the student wants to say “false” for any line, talk about it and plan review. Then count the points from today's tasks together."),
    box(
      "✉️ Project: A letter to future me",
      "Write a letter to yourself to open in **five years**.\n\n**Include:**\n- your life now and how it has changed (*I used to… Now I'm used to…*)\n- what you think you'll be doing (*In five years I'll be living… I'll probably… I might…*)\n- your plans and promises (*As soon as I…, I'll… I'm going to…*)\n- a question for your future self 🤔\n\n📝 Written: 150+ words · 🎥 or record it as a video message (2–3 minutes). Save it somewhere safe!",
    ),
  ]),

  homework(
    [
      gaps(
        "Review: complete with one word.",
        "1. I used [to] play the violin.\n2. She isn't used to [getting] up early.\n3. I'll call you as [soon] as I land.\n4. This time next week we'll [be] lying on the beach.\n5. AI is likely [to] change medicine.\n6. I'd like a [refund], please.\n7. It took me a long time to get used [to] the food.\n8. He dropped [out] of college after a year.",
      ),
      choose(
        "Choose.",
        "1. When I was a child, I [*would/am used to] walk to school.\n2. I'm getting used to [*driving/drive] on the right.\n3. The train [*leaves/will leaving] at 10:15.\n4. I'll text you when I [*arrive/will arrive].\n5. Robots [*might/are bound] help in hospitals — we'll see.\n6. [*Did you use to/Were you used to] have a pet?",
      ),
    ],
    "Homework: Review",
  ),
  homework(
    [
      write("Project: A letter to future me (150+ words). Use used to, be used to, the Future Continuous, when / as soon as, and likely to / might.", 150),
      record("Project (option): Record your letter as a video or audio message to your future self (2–3 minutes). 🎥", 180),
    ],
    "Homework: Project",
  ),
  homework(
    [
      trueFalse("Correct or not?", [
        ["I used to living in Paris.", false],
        ["I'm used to working at night.", true],
        ["I'll call you when I will arrive.", false],
        ["This time tomorrow I'll be sitting on the plane.", true],
        ["We would have a dog when I was young.", false],
        ["AI is likely to change many jobs.", true],
        ["The film starts at 8 tonight.", true],
        ["I probably won't come to the party.", true],
      ]),
    ],
    "Homework: Grammar check",
  ),
]);
