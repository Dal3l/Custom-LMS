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
  video,
  words,
  write,
} from "../../kit";

// 4.1 By 2050, we'll have… — G: Future Perfect (will have done; by + time, by the time + present), Future Perfect Continuous (will have been doing — mostly to recognize), Future Continuous review (will be doing); probability: bound to, (un)likely to, set to, there's a good chance that, I doubt. V: technology and the future (automate, cutting-edge, obsolete, renewable energy…). S: make your own predictions. Main format: a "future numbers" quiz + a long reading (2050 — what experts are fairly sure about, ~560 words) + a long listening (a radio show: "Where will you be in 2035?" with Madina, Daniyar, Saule and Leo, ~3:20). Video at home.
// Facts checked: UN World Population Prospects 2022 — about 9.7 billion people in 2050; UN (2018) — about 68% of people will live in cities by 2050; India overtook China as the most populous country in 2023 (UN estimate); the EU aims to be climate-neutral by 2050; Kazakhstan's strategy aims at carbon neutrality by 2060; the share of people aged 65+ is projected to grow fast (about 1 in 6 people by 2050, UN).
export default lesson("b2-4.1", "By 2050, we'll have…", () => [
  section("Warm-up: Future numbers", [
    box(
      "Today you will…",
      "- look at what experts are fairly sure about for 2050 🔮\n- say what will have happened by then: *By 2050, cities will have grown.* ⏳\n- talk about how likely things are: *bound to, unlikely to, there's a good chance…* 🎲",
    ),
    quiz("Guess the numbers! 🔢 (Based on United Nations projections and official goals.)", [
      { q: "How many people are expected to live on Earth in 2050?", options: ["*about 9.7 billion", "about 6 billion", "about 15 billion"] },
      { q: "What share of people are expected to live in cities by 2050?", options: ["*about 68%", "about 30%", "about 95%"] },
      { q: "Which country became the world's most populous in 2023?", options: ["*India", "China", "the USA"] },
      { q: "By which year does the European Union aim to be climate-neutral?", options: ["*2050", "2030", "2100"] },
      { q: "By which year does Kazakhstan aim to reach carbon neutrality?", options: ["*2060", "2025", "2040"] },
    ]),
    text(
      "Talk to your teacher.",
      "- Which number surprised you most?\n- How old will you be in 2050? What do you think you'll be doing? 😄\n- Name one thing that is bound to change by then — and one thing that won't change at all.",
    ),
    tip("Let the student guess first, then react. Encourage *I'll be… / I'll have…* naturally — that's today's grammar."),
  ]),

  section("Vocabulary: Technology and the future", [
    words("Technology and the future", [
      ["automate", "🤖 make a machine do work that people used to do"],
      ["artificial intelligence (AI)", "🧠 computer systems that can learn and make decisions"],
      ["cutting-edge", "✨ the newest and most advanced"],
      ["obsolete — outdated", "📼 no longer used — 🕰️ old-fashioned"],
      ["self-driving", "🚗 able to drive without a person"],
      ["renewable energy", "☀️🌬️ energy from the sun, wind, water"],
      ["a breakthrough", "🚀 an important new discovery"],
      ["wearable technology", "⌚ devices you wear, like smart watches"],
      ["keep up with", "🏃 stay up to date with changes"],
      ["phase out", "📉 stop using something gradually"],
      ["data privacy", "🔒 keeping personal information safe"],
      ["a projection", "📈 a calculation of what will probably happen"],
    ]),
    match("Match.", [
      ["renewable", "energy"],
      ["cutting-edge", "technology"],
      ["a self-driving", "car"],
      ["phase out", "petrol cars"],
      ["keep up", "with new technology"],
      ["data", "privacy"],
    ]),
    gaps(
      "Complete with a word from the list.",
      "1. Cassette players are almost [obsolete] now. 📼\n2. Many factories have [automated] their production lines.\n3. The new battery is a real [breakthrough] in science.\n4. It's hard for my grandma to keep [up] with new apps.\n5. Some countries plan to phase [out] coal completely.\n6. The UN's [projection] is that cities will keep growing.\n7. My smart watch is a type of [wearable] technology. ⌚\n8. Who should protect our data [privacy] — governments or companies?",
    ),
  ]),

  section("Reading: 2050 — what we can (almost) be sure about", [
    tip("A long text (~560 words). First reading — 5 minutes: *Is the writer optimistic or pessimistic about 2050?* Then the tasks. Ask the student to underline every *will have + 3rd form* and *will be + -ing*."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["According to the writer, most long-term predictions are completely reliable.", false],
        ["The UN expects the world population to keep growing until 2050.", true],
        ["By 2050, fewer people will be living in cities than today.", false],
        ["The writer thinks working life will look exactly the same in 2050.", false],
        ["The share of older people in the population is expected to grow.", true],
        ["The writer believes our choices today will shape 2050.", true],
      ],
      {
        read: [
          "## 🔮 2050: what we can (almost) be sure about",
          "Predicting the future is a dangerous business. Experts have been wrong about almost everything, from flying cars to the end of books. But some trends are so strong and so slow to change that we can talk about them with some confidence. Here are five things that are very likely to have happened by 2050 — and a few that are anyone's guess.",
          "**1. There will be more of us.** According to the United Nations, the world's population, which passed eight billion in 2022, is projected to reach about 9.7 billion by 2050. Most of the growth will be happening in Africa and parts of Asia, while populations in many European countries and in East Asia will have started to shrink.",
          "**2. We'll be living in cities.** Today, a little over half of humanity lives in towns and cities. By 2050, that figure is expected to have reached about two thirds. Some cities that are medium-sized today are bound to have become giants, and many will be struggling with traffic, housing and heat. On the other hand, cities are also where new ideas, jobs and services appear first.",
          "**3. We'll be older.** Thanks to better medicine and smaller families, the number of people over 65 is growing faster than any other age group. By 2050, around one in six people in the world is likely to be over 65. That will change everything from pensions to the way we design buses and buildings.",
          "**4. Energy will have changed.** Many countries have promised to cut their carbon emissions dramatically. The European Union aims to have become climate-neutral by 2050, and Kazakhstan has set itself the goal of carbon neutrality by 2060. Whether they will have reached these goals is uncertain, but the move towards solar and wind power is unlikely to stop: in many places, renewables are already the cheapest way to produce electricity.",
          "**5. Work will look different.** Artificial intelligence and automation are set to take over many routine tasks, from writing simple reports to driving lorries. That doesn't necessarily mean mass unemployment — new technology has always destroyed some jobs and created others — but by 2050 many of us will be doing jobs that don't exist yet, and lifelong learning will have become normal rather than unusual.",
          "**And the big unknowns?** Will we be traveling in self-driving cars? Will AI have become smarter than humans? Will people have settled on Mars? There's a good chance that you've read confident answers to these questions. Treat them with care. Breakthroughs are almost impossible to predict, and so are disasters, wars and pandemics, which can change the direction of a whole century in a few months.",
          "Perhaps the most useful way to think about 2050 is not as something that will happen to us, but as something we are building now. The children who will be running the world in 2050 are already at school. The houses they will be living in are being designed today. The choices we make this decade — about energy, education and technology — will have shaped their world long before they are old enough to vote. In other words: the future isn't something to guess. It's something to work on. 🌍",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Where will most population growth happen?", options: ["*in Africa and parts of Asia", "in Europe", "in East Asia"] },
      { q: "Why is the move to renewable energy unlikely to stop?", options: ["*Renewables are already the cheapest option in many places.", "All countries have reached their goals.", "Coal has been banned everywhere."] },
      { q: "What does the writer say about AI and jobs?", options: ["*Many people will do jobs that don't exist yet.", "Everyone will lose their job.", "Nothing will change."] },
      { q: "Why should we be careful with confident predictions?", options: ["*Breakthroughs and disasters are almost impossible to predict.", "Experts are always wrong.", "The UN changes its numbers every year."] },
      { q: "What is the writer's main message?", options: ["*The future depends on the choices we make now.", "2050 will be a disaster.", "We should stop making predictions."] },
    ]),
    gaps(
      "Find words in the article.",
      "1. become smaller: [shrink]\n2. a number (often a percentage): a [figure]\n3. having a lot of difficulties: [struggling]\n4. money people receive after they stop working: [pensions]\n5. a situation when many people have no job: mass [unemployment]\n6. found a new home in a place: [settled]",
    ),
  ]),

  section("Grammar: By 2050, we'll have…", [
    quiz("Notice the rule 🔍 Look: “By 2050, that figure is expected to have reached two thirds.” · “Many of us will be doing jobs that don't exist yet.” · “The choices we make will have shaped their world.”", [
      { q: "“will have shaped” describes an action…", options: ["*finished before a point in the future", "in progress at a point in the future", "happening now"] },
      { q: "“will be doing” describes an action…", options: ["*in progress at a point in the future", "finished before a point in the future", "in the past"] },
      { q: "Which word often goes with the Future Perfect?", options: ["*by (by 2050, by the time…)", "since", "ago"] },
    ]),
    table("future-perfect"),
    choose(
      "Future Perfect or Future Continuous? Choose.",
      "1. By the end of this year, I [*'ll have finished/'ll be finishing] my degree. 🎓\n2. This time tomorrow, we [*'ll be flying/'ll have flown] to Seoul. ✈️\n3. By 2030, they [*will have built/will be building] the new metro line.\n4. Don't call at nine — I [*'ll be having/'ll have had] dinner.\n5. By the time you arrive, the film [*will have started/will start].\n6. In June, I [*'ll have been working/'ll be working] here for ten years.\n7. Will you [*have finished/be finishing] the report by Friday?\n8. Next week I [*'ll be lying/'ll have lain] on a beach. 🏖️",
    ),
    gaps(
      "Complete with the Future Perfect (will have + 3rd form).",
      "1. By 2050, the population [will have reached] (reach) almost ten billion.\n2. By the time we get there, everyone [will have left] (leave). 😢\n3. I [won't have finished/will not have finished] (not finish) the book by Monday.\n4. [Will you have saved] (you / save) enough money by summer?\n5. By next year, Daniyar [will have lived] (live) in Seoul for two years.\n6. By then, scientists [will have found] (find) new ways to store energy.",
    ),
  ]),

  section("Grammar: How likely is it?", [
    table("probability"),
    choose(
      "Choose the best phrase.",
      "1. Look at those clouds. It's [*bound to/unlikely to] rain. ☔ (almost certain)\n2. Robots are [*unlikely to/bound to] replace all teachers. (probably not)\n3. There's [*a good chance/no chance] that prices will go up. (probably yes)\n4. I [*doubt/bet] he'll come — he's always late. (I don't think so)\n5. The new law is [*set to/doubt to] come into force next year. (planned)\n6. It's [*highly unlikely/bound] that people will live on Mars by 2030.",
    ),
    sort("How likely is it? Sort the sentences. 🎲", {
      "✅ almost certain": ["Cities are bound to grow.", "Prices will definitely rise.", "There's no doubt that AI will change work.", "It's certain to happen."],
      "❌ probably not": ["I doubt we'll have flying cars.", "Robots are unlikely to replace doctors.", "There's little chance of snow.", "It probably won't happen."],
    }),
    drag(
      "Complete Daniyar's predictions.",
      "By 2030, I [will] have finished my degree in Seoul. I'm [bound] to miss my family, but I'll [be] working as an engineer — maybe in Almaty, maybe in Korea. There's a good [chance] that I'll be designing electric buses. I [doubt] I'll ever be rich, but I'm [likely] to be happy. By then, my grandma will have learned to send voice messages! 😄",
      ["sure", "have", "unlikely"],
    ),
    order("Make sentences.", [
      "By 2050, the world will have changed a lot.",
      "This time next year, I'll be studying abroad.",
      "Cities are bound to get bigger.",
      "I doubt we'll have flying cars.",
      "There's a good chance it will rain.",
    ]),
    tip("Say it right: *will have* is usually *'ll have* /əl əv/ — *By then, I'll've finished.* In questions, stress the main verb: *Will you have FINISHED by Friday?*"),
  ]),

  section("Listening: Where will you be in 2035?", [
    tip("A long listening — about 3 minutes 20 seconds. A radio show asks people about their lives in 2035: Madina, Daniyar, Saule and Leo. First listen: *Who is the most optimistic? Who's the funniest?* Second listen: the tasks."),
    ...listening(
      "Listen to a radio show: four people talk about their lives in 2035.",
      "**Host:** Good evening and welcome to Future Talk. Tonight's question is simple: where will you be in 2035? Our first guest is Madina, a designer from Almaty. Madina, ten years from now — what will you be doing?\n\n**Madina:** If everything goes to plan, I'll be running a bigger studio — maybe fifteen people — and we'll be working for clients all over the world. By then, I'll have moved to a flat with a big window and a view of the mountains. That's my dream.\n\n**Host:** Will AI have taken your job by then?\n\n**Madina:** I doubt it. AI is bound to change design — it already has. In ten years, it'll probably be doing all the boring parts, like resizing images. But clients will still want a human who understands them. At least, I hope so!\n\n**Host:** Thank you. Next, Daniyar, who's calling from Seoul.\n\n**Daniyar:** Hello! In 2035, I'll be twenty-eight. I'll have finished my degree, of course, and I'll have been working as an engineer for about five years. There's a good chance I'll be designing transport — electric buses or trains. And I'd love to be doing it back home in Kazakhstan.\n\n**Host:** Do you think cities will be very different?\n\n**Daniyar:** Definitely. More electric transport, more people. But traffic is bound to be a problem for a long time. Honestly, I'm more worried about whether I'll have learned to cook by then. At the moment I eat ramen every day.\n\n**Host:** Ha! Our third guest is Saule, Daniyar's grandmother. Saule, what will you be doing in 2035?\n\n**Saule:** I'll be eighty, God willing. I'll be sitting in my garden, telling everyone what to do. By then, I hope I'll have become a great-grandmother.\n\n**Host:** And technology? Will you be using AI?\n\n**Saule:** My granddaughter says I'll be talking to my fridge. I doubt that very much. Although, ten years ago I didn't think I'd ever use video calls, and now I call my sister in Canada every Sunday. So who knows?\n\n**Host:** Finally, Leo, a musician. Leo, where will you be?\n\n**Leo:** Hopefully, on a stage! By 2035, our band will have released three albums — at least that's the plan. We'll have played at a big festival abroad. And I'll still be playing the same old guitar, because a good guitar is never obsolete.\n\n**Host:** Some people say AI will be writing all the music by then.\n\n**Leo:** It's likely to write a lot of background music, sure. But people go to concerts to feel something together, in the same room. A computer is unlikely to replace that. When Queen played at Live Aid, people didn't care whether every note was perfect.\n\n**Host:** One last question for everyone: one thing that's bound to be the same in 2035?\n\n**Madina:** People will still be late for meetings.\n\n**Daniyar:** My grandma will still be making the best plov in Almaty.\n\n**Saule:** And my grandson will still be eating ramen.\n\n**Leo:** And rock music will still be alive. Definitely.\n\n**Host:** Thank you all. Let's meet again in 2035 and see who was right!",
    ),
    quiz("Listen and choose.", [
      { q: "What does Madina hope she'll be doing in 2035?", options: ["*running a bigger studio with international clients", "working for a big agency", "teaching design"] },
      { q: "What does Madina think AI will do in design?", options: ["*the boring parts, like resizing images", "everything", "nothing at all"] },
      { q: "What is Daniyar worried about?", options: ["*whether he'll have learned to cook", "finding a job", "traffic in Seoul"] },
      { q: "What did Saule think ten years ago?", options: ["*that she would never use video calls", "that she'd talk to her fridge", "that she'd move to Canada"] },
      { q: "Why does Leo think AI is unlikely to replace concerts?", options: ["*People go to concerts to feel something together.", "AI can't play the guitar.", "Concerts are too expensive for AI."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Madina wants a flat with a view of the mountains.", true],
      ["Daniyar will be twenty-eight in 2035.", true],
      ["Daniyar thinks traffic will disappear soon.", false],
      ["Saule hopes to have become a great-grandmother by 2035.", true],
      ["Leo plans to buy a new guitar.", false],
      ["Leo mentions Queen at Live Aid.", true],
    ]),
    gaps(
      "Complete what they said. Listen again if you need.",
      "1. Madina: I'll [be] running a bigger studio.\n2. Madina: By then, I'll have [moved] to a flat with a big window.\n3. Daniyar: I'll have been [working] as an engineer for about five years.\n4. Daniyar: Traffic is [bound] to be a problem for a long time.\n5. Saule: I [doubt] that very much.\n6. Leo: A computer is [unlikely] to replace that.",
    ),
  ]),

  section("Let's talk: My 2035", [
    text(
      "You in 2035 🔮",
      "Talk for 2 minutes about your life in ten years. Then interview your teacher.\n\n- **finished by then**: *By 2035, I'll have… (finished, moved, learned…)*\n- **in progress**: *I'll be living / working / studying…*\n- **how likely**: *I'm bound to… / There's a good chance… / I doubt…*\n- **the world**: one thing that's likely to change, one thing that's unlikely to change\n\nFinally, write ONE prediction about the world in 2035 on the board. Check it in ten years! 😄",
    ),
    tip("Push for a mix of future perfect, future continuous and probability phrases. Typical mistakes: *By 2035 I will finish* → *will have finished*; *I'm bound to will…* → *I'm bound to…*."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "By next June, I ___ here for five years.", options: ["*'ll have worked", "'ll work", "work"] },
      { q: "This time tomorrow, I ___ on the beach.", options: ["*'ll be lying", "'ll have lain", "lie"] },
      { q: "It's ___ to rain — look at the sky!", options: ["*bound", "unlikely", "doubt"] },
      { q: "Cassette players are almost ___ now.", options: ["*obsolete", "cutting-edge", "wearable"] },
    ]),
    box(
      "Phrase of the day: the best way to predict the future is to create it",
      "🔮 A famous idea, often credited to management thinker Peter Drucker (and others). Instead of guessing the future, build it.\n\n*What are you creating now for your future?*",
    ),
  ]),

  homework(
    [
      video("Watch: BBC Learning English — Future perfect or future perfect continuous?", "iISY9FgeYpU"),
      choose(
        "Choose.",
        "1. By 2040, scientists [*will have found/will be finding] a cure.\n2. At 8 p.m. I [*'ll be watching/'ll have watched] the match.\n3. By the time you read this, I [*'ll have left/'ll leave].\n4. Prices are [*bound/likely] to go up — it's certain.\n5. I [*doubt/bet] it'll snow in May.\n6. In 2030, she [*'ll have been teaching/'ll teach] for twenty years.\n7. The concert is [*set/due to] start at seven.\n8. [*There's a good chance/It's bound] that we'll win.",
      ),
      gaps(
        "Complete with the Future Perfect or the Future Continuous.",
        "1. By Friday, I [will have read/'ll have read] the whole book. (read)\n2. Don't call at 7 — I [will be driving/'ll be driving] home. (drive)\n3. By the time he's 30, he [will have visited/'ll have visited] 40 countries. (visit)\n4. This time next month, we [will be living/'ll be living] in our new flat. (live)\n5. [Will you have finished] the project by June? (you / finish)\n6. I [won't have saved/will not have saved] enough money by summer. (not save)",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      match("Match.", [
        ["automate", "make machines do the work"],
        ["obsolete", "no longer used"],
        ["cutting-edge", "the newest and most advanced"],
        ["phase out", "stop using gradually"],
        ["renewable energy", "energy from the sun and wind"],
        ["keep up with", "stay up to date"],
      ]),
      write("Write a letter to yourself in 2035 (140–190 words). Say what you think you'll have done by then, what you'll be doing, and what the world is likely or unlikely to be like. Use the Future Perfect, the Future Continuous and at least three probability phrases.", 140),
      record("Record a 1-minute prediction: “One thing that is bound to change in my town by 2035.” 🎙️", 75),
    ],
    "Homework: Writing and speaking",
  ),
]);
