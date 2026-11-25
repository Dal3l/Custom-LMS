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

// 4.4 Revision 3–4 — points for every task, in the format of Cambridge B2 First: Use of English Parts 3 and 4, Reading Part 6 (a gapped text with missing sentences, ~520 words), Listening Part 2 (sentence completion, one speaker, ~3:10), Speaking Part 3 (a discussion task); grammar and vocabulary of modules 3–4. Project: an essay "Will technology make us happier?" (140–190 words). Warm-up format: sorting (4.3 had matching).
// Facts checked: rescue and delivery drones are used for search and rescue in mountains and at sea, and to deliver medical supplies (for example Zipline in Rwanda, blood deliveries since 2016); thermal cameras find people by body heat at night; drones are usually limited by battery life (often 20–40 minutes of flight). Ruslan — the mountain rescuer from B1 2.2 and B2 2.3 (got lost himself, found by 50+ volunteers after a night search); here he flies his team's drone.
export default lesson("b2-4.4", "Revision 3–4", () => [
  section("Warm-up: Which module?", [
    box(
      "Today you will…",
      "- check what you remember from modules 3–4 🧠\n- try four more parts of the B2 First exam 📝\n- plan your essay “Will technology make us happier?” ✍️",
    ),
    sort("Sort the sentences: which grammar do they show? 🧩", {
      "🎨 Module 3: -ing, infinitives, perfect / passive forms": [
        "It's worth trying again.",
        "She is said to have written it in one night.",
        "My teacher encouraged me to enter the competition.",
        "I heard him play the guitar.",
      ],
      "🔮 Module 4: future forms": [
        "By 2050, we'll have built cities on the sea.",
        "This time tomorrow, I'll be flying to Seoul.",
        "We were going to move, but we changed our minds.",
        "Prices are bound to go up.",
      ],
    }),
    tip("Every task gives points. Don't help during the tasks; check after each part and explain the exam tip. Score guide: 80%+ excellent; 65–80% good — review the weak topics in the next warm-ups; under 65% — go back to the grammar sections of modules 3–4."),
  ]),

  section("Use of English Part 1: Choose the word", [
    tip("Exam tip: Part 1 tests collocations, phrasal verbs and fixed phrases. Read the whole sentence — often the word AFTER the gap decides the answer (*come up WITH, worth -ING*)."),
    choose(
      "Read the text and choose the best word for each gap.",
      "Where do good ideas come from? 💡\n\nMany great inventors say their best ideas came to them when they weren't [*trying/making/doing/looking] to think at all — in the shower, on a walk or in a dream. Scientists believe this happens because a relaxed brain makes new [*connections/joins/links/ties] more easily. So if you're stuck on a problem, it may be worth [*taking/making/giving/doing] a break. Some people [*keep/hold/stay/save] a notebook by their bed so they can write ideas down at night. Others prefer to sleep [*on/at/in/with] it and decide in the morning. Of course, inspiration alone is not [*enough/plenty/much/many]. Most breakthroughs [*come/go/get/turn] after years of hard work. As Thomas Edison is said to have put it, genius is one percent inspiration and ninety-nine percent [*perspiration/sweating/effort/work].",
    ),
  ]),

  section("Use of English Part 2: One word", [
    tip("Exam tip: Part 2 tests grammar words — auxiliaries, prepositions, articles, linkers. Read the whole text first, then think: what KIND of word is missing?"),
    gaps(
      "Read the text and write ONE word in each gap.",
      "Life in 2050 🔮\n\nBy 2050, the world [will] have changed in ways we can hardly imagine. Experts say that most of us will [be] living in cities, and many people will be doing jobs that don't exist [yet]. Robots are likely [to] do much of the boring work. However, there is no [point] trying to predict everything. Fifty years ago, nobody imagined that we [would] carry computers in our pockets. Prices are bound to go up, and the climate will continue to change, [so] we need to prepare. The future is not something that just happens [to] us — it depends on the choices we make today.",
    ),
  ]),

  section("Use of English Part 3: Word formation", [
    tip("Exam tip: decide first which part of speech you need (noun? adjective? adverb?), then check if it should be negative or plural."),
    gaps(
      "Read the sentences. Use the word in brackets to form a word that fits the gap.",
      "1. The idea came to her in a flash of [inspiration]. (inspire)\n2. Some old jobs will soon be completely [unnecessary]. (necessary)\n3. He has a very [forgetful] grandmother. (forget)\n4. The new phone is very [affordable] — almost everyone can buy one. (afford)\n5. Ballmer [underestimated] the iPhone. (estimate)\n6. Electric cars are becoming more and more [popular]. (popularity)\n7. Scientists made an [unexpected] discovery. (expect)\n8. Her [creativity] impressed the judges. (create)",
    ),
  ]),

  section("Use of English Part 4: Say it differently", [
    tip("Exam tip: use the word in capitals WITHOUT changing it, and write 2–5 words. Keep the meaning exactly the same — check tense and negatives."),
    gaps(
      "Complete the second sentence so that it means the same as the first. Use the word in capitals and 2–5 words.",
      "1. People say that he wrote the song in ten minutes. (SAID) → He [is said to have written] the song in ten minutes.\n2. It's useless to argue with him. (POINT) → There's [no point arguing/no point in arguing] with him.\n3. I'll finish the report before Friday. (HAVE) → By Friday, I [will have finished] the report.\n4. We planned to go to Spain, but we didn't. (GOING) → We [were going to go] to Spain.\n5. He'll very probably be late. (BOUND) → He [is bound to be] late.\n6. My mum said I could go to the concert. (LET) → My mum [let me go] to the concert.",
    ),
  ]),

  section("Reading Part 6: Missing sentences", [
    tip("Exam tip: read the whole text first. Then look at the words BEFORE and AFTER each gap — pronouns (*this, they, it*), linkers (*however, but*) and repeated ideas show which sentence fits. 8 minutes."),
    drag(
      "Read the article. Six sentences are missing. Drag the right sentence into each gap. There is one extra sentence you don't need.",
      [
        "## 🌐 The day I switched off my phone for a month",
        "by Laura Bennett",
        "Last spring, I noticed something that frightened me. I was standing in the kitchen, waiting for the kettle to boil, and I had already taken my phone out of my pocket three times. Three times in two minutes. [That's when I decided to try an experiment.] For thirty days, I would use an old phone that could only make calls and send texts.",
        "The first week was harder than I had expected. My hand kept reaching for my pocket on its own. [I felt as if I had lost a part of my body.] Without maps on my phone, I got lost twice in a city I have lived in for ten years. I missed a friend's party because the invitation was in a group chat I couldn't see.",
        "But by the second week, something had changed. I started noticing things I had never seen before: the old man who feeds the birds outside my flat, the smell of the bakery on the corner, the faces of people on the bus. [Most of them, of course, were looking at their phones.] I also started reading again — real paper books, three of them in a month.",
        "The biggest surprise was my sleep. For years, I had looked at a screen until the moment I closed my eyes. Now I read for half an hour and fell asleep easily. [Within ten days, I was waking up before my alarm.] My colleagues said I looked less tired, and one asked if I had been on holiday.",
        "Not everything was positive, though. Work was more difficult, as I had to wait until I was at my computer to answer emails. [Some friends were annoyed that I couldn't answer their messages quickly.] And I'll admit that I felt a little left out when everyone was talking about a video I hadn't seen.",
        "So, did I go back? Yes — but not in the same way. I've deleted social media apps from my phone, and I leave it in another room at night. [It's not about giving up technology completely.] It's about deciding when technology works for me, and not the other way round. 📵",
      ].join("\n\n"),
      ["I had always been a very good sleeper."],
    ),
    quiz("Read again. Choose.", [
      { q: "What made Laura start the experiment?", options: ["*She noticed how often she checked her phone.", "Her phone broke.", "Her doctor told her to."] },
      { q: "Which problem did she have in the first week?", options: ["*She missed a party.", "She lost her job.", "She couldn't make calls."] },
      { q: "What was the biggest surprise for her?", options: ["*how much better she slept", "how many books she bought", "how kind people were"] },
      { q: "What is her conclusion?", options: ["*We should decide when to use technology.", "We should stop using phones.", "Phones are not a problem."] },
    ]),
    gaps(
      "Find words in the article.",
      "1. you boil water in it: a [kettle]\n2. stretching your arm to take something: [reaching]\n3. people you work with: [colleagues]\n4. a little angry: [annoyed]\n5. not included by the others: left [out]\n6. removed from a phone or computer: [deleted]",
    ),
  ]),

  section("Listening Part 2: Sentence completion", [
    tip("Exam tip: you hear one speaker. Read the sentences first and guess what KIND of word is missing (a number? a noun? a place?). You write the words you actually hear — usually 1–3 words. In the exam you hear it twice."),
    ...listening(
      "Listen to Ruslan, a mountain rescuer, talking about rescue drones.",
      "**Ruslan:** Hello, everyone, and thanks for inviting me. My name's Ruslan, and I work with a mountain rescue team near Almaty. Some of you may know my story: a few years ago, I got lost in these mountains myself, and more than fifty volunteers spent a night looking for me. So when our team got its first drone, I offered to learn how to fly it. I know exactly how it feels to wait in the dark.\n\nI'll be honest: at first, many of the older rescuers didn't trust it. They'd been finding lost people for thirty years without any gadgets, and they thought the drone was just an expensive toy. That changed one night in October. A young hiker had fallen and hurt his leg, and his phone battery was dead. It was dark, it was cold, and the area was huge. We sent the drone up with a thermal camera, which sees the heat of a human body. It found him in eleven minutes. Without it, we would have been searching until morning, and in those temperatures, that could have been too late.\n\nSo what can a drone actually do? First, it's fast. A drone can check a valley in a few minutes, while a team on foot needs hours. Second, it can go where people can't — over rivers, along cliffs, into places where there's a risk of avalanches. Third, it can carry small things. We've used ours to drop a radio, a warm blanket and some water to people who were waiting for us.\n\nBut drones aren't magic, and I always say this to young volunteers. The biggest problem is the battery. Ours can fly for about thirty minutes, and in the cold, it's even less. We always carry at least four spare batteries. The other problem is the weather. In strong wind or heavy snow, the drone simply can't fly, and unfortunately, that's often exactly when people get into trouble.\n\nAnd of course, a drone can find a person, but it can't carry them down the mountain. That's still our job. I think that's important. Technology helps us, but it doesn't replace people. A drone has never made a cup of hot tea for a frightened hiker. We have.\n\nWhat about the future? I'm sure that in ten years' time, rescue drones will be much more common. By then, batteries will have improved, and some drones will probably be flying for two or three hours. There's a good chance that drones will be bringing medicine to villages in the mountains, too — that's already happening in some countries. But I doubt that a robot will ever do my whole job.\n\nIf any of you are interested in volunteering, our team trains new people every spring. You don't need any special experience. You need to be fit, calm and a good team player. In the first year, you'll be learning first aid, map reading and how to work safely on snow and ice. By the end of it, you'll have taken part in at least ten training searches with the team, and you'll have spent quite a few cold nights in a tent. It's hard work, but I promise it's worth it. And please, before you go hiking, always tell someone your route. It makes our job so much easier. Thank you.",
    ),
    gaps(
      "Listen and complete the sentences. Write 1–3 words.",
      "1. A few years ago, Ruslan himself got [lost] in the mountains.\n2. At first, older rescuers thought the drone was an expensive [toy].\n3. The drone found the hiker in [eleven minutes/11 minutes].\n4. The camera on the drone sees the [heat] of a human body.\n5. The team has used the drone to drop a radio, a warm [blanket] and some water.\n6. The drone can fly for about [thirty minutes/30 minutes].\n7. The team always carries at least [four spare batteries/4 spare batteries].\n8. The team trains new volunteers every [spring].",
    ),
    trueFalse("Listen again. True or false?", [
      ["Ruslan once needed rescuing himself.", true],
      ["The young hiker's phone was working.", false],
      ["Drones can fly in any weather.", false],
      ["Ruslan thinks drones will replace rescuers.", false],
      ["He thinks drone batteries will have improved in ten years.", true],
      ["You need special experience to join the team.", false],
    ]),
  ]),

  section("Grammar check", [
    choose(
      "Choose the right answer.",
      "1. It's no use [*crying/to cry] about it now.\n2. She seems [*to have forgotten/to forget] our meeting yesterday.\n3. They made us [*wait/to wait] for an hour.\n4. I saw her [*crossing/to cross] the street when I was in the café.\n5. By the time you arrive, we [*'ll have finished/'ll finish] dinner.\n6. Don't call at eight — I'll [*be having/have had] dinner then.\n7. I was [*about to/going] leave when the phone rang.\n8. He promised he [*would/will] call, but he didn't.",
    ),
    trueFalse("Correct or not?", [
      ["There's no point to worry about it.", false],
      ["The bridge is believed to have been built in 1890.", true],
      ["My parents didn't let me to go out.", false],
      ["By next June, I'll have been working here for five years.", true],
      ["We were supposed to meet at six, but she was late.", true],
      ["It's bound to raining tomorrow.", false],
    ]),
  ]),

  section("Grammar check: one or two words", [
    gaps(
      "Complete with one or two words.",
      "1. I can't help [laughing] when I see that video. (laugh)\n2. The castle is thought [to have been] built in the 12th century.\n3. My parents encouraged me [to learn] a second language. (learn)\n4. This time next week, I ['ll be lying/will be lying] on a beach. (lie)\n5. By the time she retires, she [will have taught] thousands of students. (teach)\n6. We [were going] to have a picnic, but it rained.",
    ),
  ]),

  section("Vocabulary check", [
    match("Match the words and the meanings.", [
      ["writer's block", "when you can't think of anything to write"],
      ["on the tip of my tongue", "almost remembered, but not quite"],
      ["cutting-edge", "the newest and most advanced"],
      ["fall through", "(a plan) fail, not happen"],
      ["have second thoughts", "start to doubt a decision"],
      ["in hindsight", "looking back, when you know what happened"],
    ]),
    quiz("Choose the right word.", [
      { q: "Sorry, your birthday completely slipped my ___.", options: ["*mind", "head", "memory"] },
      { q: "Don't decide now — sleep ___ it.", options: ["*on", "with", "over"] },
      { q: "The match was called ___ because of the storm.", options: ["*off", "out", "up"] },
      { q: "Video cassettes are now completely ___.", options: ["*obsolete", "cutting-edge", "renewable"] },
    ]),
    drag(
      "Complete the story.",
      "Last year, I was [going] to start a business with a friend. We had a brilliant idea — it came to us in a [flash] of inspiration. But two weeks before the start, my friend [backed] out. At first I was [devastated]. But in [hindsight], it was the best thing that could have happened. Now I work for a [cutting-edge] tech company, and I love it. 🚀",
      ["about", "fad", "broke"],
    ),
  ]),

  section("Speaking Part 3: Talk together", [
    text(
      "Discuss with your teacher 🗣️",
      "In B2 First Speaking Part 3, you and your partner discuss a question together for about two minutes, then decide.\n\n**Question:** *How might these technologies change our lives in the next 20 years?*\n\n- 🤖 artificial intelligence\n- 🚗 self-driving cars\n- 🚁 drones\n- ⌚ wearable technology\n- ☀️ renewable energy\n\nThen decide together: **Which will change our lives the most?**\n\nUseful: *What do you think about…? That's a good point, but… I'd say it's likely to… Shall we agree on…?*",
    ),
    tip("About 3 minutes. Don't dominate: let the student lead, ask *What about you?*, and check that they react to your ideas (*That's true, but…*) and use future forms and probability phrases."),
  ]),

  section("Writing: plan your essay", [
    order(
      "Put the parts of a good essay in the right order.",
      [[
        "an introduction: the question in your own words and why it matters",
        "the first argument (for), with a reason and an example",
        "the second argument (against), with a reason and an example",
        "a third point — perhaps your own idea",
        "a conclusion: your opinion and a final thought",
      ].join("\n")],
      "lines",
    ),
    box(
      "✍️ Project: Will technology make us happier?",
      "Write an **essay** (140–190 words) for your teacher.\n\n*Will technology make us happier in the future?*\n\n**Notes — write about:**\n1. health and medicine\n2. free time and relationships\n3. your own idea\n\n**Include:** future forms (*will have…, will be -ing*), probability phrases (*is bound to, there's a good chance, I doubt*), linkers (*however, on the other hand, in conclusion*).",
    ),
    tip("Brainstorm the essay together: the student gives one argument for and one against, you help find an example for each. Remind them that in the exam, the third point is their own idea."),
  ]),

  section("Your result", [
    trueFalse("Check yourself. Can you do it? True or false? ✅", [
      ["I can use perfect and passive forms: is said to have done, being asked.", true],
      ["I can use -ing after expressions (it's worth, there's no point) and verb + object + infinitive.", true],
      ["I can talk about the future with the Future Perfect and Future Continuous.", true],
      ["I can talk about plans that changed: was going to, was about to.", true],
      ["I can say how likely something is: bound to, unlikely to, I doubt.", true],
    ]),
    tip("This list is for reflection: if the student wants to say “false”, talk about it and plan review. Count the points from today's tasks together."),
  ]),

  homework(
    [
      choose(
        "Choose.",
        "1. It's worth [*visiting/to visit] the old town.\n2. He is believed [*to have left/to leave] the country last year.\n3. My teacher persuaded me [*to try/try] again.\n4. By 2030, I [*'ll have graduated/'ll graduate] from university.\n5. We [*were going to/are going to] buy a house, but prices went up.\n6. She's [*unlikely/bound] to come — she's very busy.",
      ),
      gaps(
        "Word formation.",
        "1. That was a very [imaginative] story. (imagine)\n2. The [prediction] turned out to be wrong. (predict)\n3. His plan was completely [unrealistic]. (real)\n4. This old machine is now [useless]. (use)\n5. Wind is a [renewable] source of energy. (renew)\n6. She answered [confidently]. (confident)",
      ),
      order("Make sentences.", [
        "There's no point in waiting any longer.",
        "By the time we get there, the film will have started.",
        "I was about to call you.",
        "He is said to have been very shy as a child.",
        "There's a good chance that it will snow.",
      ]),
    ],
    "Homework: Review",
  ),
  homework(
    [
      write("Project: write your essay “Will technology make us happier?” (140–190 words).", 140),
      record("Project (option): record your essay as a 2-minute talk. 🎙️", 120),
    ],
    "Homework: Project",
  ),
]);
