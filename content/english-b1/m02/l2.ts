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

// 2.2 Breaking news — G: narrative tenses together (Past Continuous / Simple / Perfect); time linkers (as soon as, by the time, while, eventually, in the end, meanwhile). V: news verbs (rescue, escape, discover, survive…). S: retell a news story. Main format: a long listening (a radio news bulletin with three stories, ~2.3 min) + a storytelling game. No video in class.
export default lesson("b1-2.2", "Breaking news", () => [
  section("Warm-up: In the news", [
    box(
      "Today you will…",
      "- understand and retell news stories 📰\n- use three past tenses together to tell a story 🎬\n- link a story with *as soon as, by the time, eventually…* 🔗",
    ),
    match("Headline game 📰 Match the two halves of each headline.", [
      ["Cat travels 200 km", "to find its old home"],
      ["Grandmother, 82,", "finishes her first marathon"],
      ["Lost wallet returned", "with a thank-you note inside"],
      ["Storm closes airport", "for two days"],
      ["Teenager invents", "a robot that cleans beaches"],
      ["Police find stolen painting", "in a garage"],
    ]),
    text(
      "Talk to your teacher.",
      "- How do you usually get the news — TV, apps, Telegram, friends? Do you trust it? 📱\n- What's a news story you remember from this year? Why did it stay in your head?\n- Good news or bad news: which do people share more online? Why do you think so?",
    ),
    tip("Ask for details about the story the student remembers: *What exactly happened? What had happened before?* Note the tenses they use — you'll come back to them."),
  ]),

  section("Vocabulary: News verbs", [
    words("News verbs", [
      ["rescue", "🚁 save someone from danger", "Firefighters rescued a family from the building."],
      ["escape", "🏃 get away from a dangerous place", "A tiger escaped from the zoo."],
      ["survive", "💪 stay alive after something dangerous", "All the passengers survived."],
      ["discover", "🔍 find something for the first time"],
      ["injure", "🤕 hurt someone", "Two people were injured in the accident."],
      ["arrest", "👮 (police) take someone to the police station"],
      ["steal — stole — stolen", "🦹 take something that isn't yours"],
      ["search (for)", "🔦 look carefully for someone or something", "Hundreds of people searched for the missing boy."],
      ["go missing", "❓ disappear; nobody knows where someone is"],
      ["report", "📢 tell people officially about something"],
      ["a witness", "👀 a person who saw what happened"],
      ["reward", "💰 money you get for helping", "The owner offered a reward for the lost dog."],
    ]),
    quiz("Choose the right word.", [
      { q: "The police ___ the thief at the airport.", options: ["*arrested", "rescued", "survived"] },
      { q: "Firefighters ___ a cat from a burning house.", options: ["*rescued", "escaped", "stole"] },
      { q: "Nobody knows how she ___ five days in the snow.", options: ["*survived", "discovered", "searched"] },
      { q: "Scientists have ___ a new planet.", options: ["*discovered", "injured", "arrested"] },
    ]),
    match("Match the headlines and the verbs.", [
      ["“Firefighters save cat from tree”", "rescue"],
      ["“Monkey runs away from zoo”", "escape"],
      ["“Man lives after 5 days in the desert”", "survive"],
      ["“Scientists find new species of frog”", "discover"],
      ["“Police catch bank thief”", "arrest"],
      ["“Hiker disappears in mountains”", "go missing"],
      ["“Painting taken from museum”", "steal"],
      ["“Two hurt in car accident”", "injure"],
    ]),
    gaps(
      "Complete the news with one word.",
      "1. A teenager has been [rescued] from the sea by a surfer. 🏄\n2. Three prisoners [escaped] from the prison last night.\n3. Amazingly, the driver [survived] the crash without a scratch.\n4. A farmer [discovered] a box of old coins in his field. 🪙\n5. Police are [searching] for a man in a red jacket.\n6. A [witness] said she had seen the car at 10 p.m.\n7. The family is offering a [reward] of $500 for their lost dog. 🐕\n8. A 10-year-old boy went [missing] on Sunday but was found safe the next day.",
    ),
  ]),

  section("Listening: The evening news", [
    tip("A long listening — over 2 minutes, three stories. First listen: *What is each story about? Good news or bad news?* Second listen: the tasks. Then show the script and find one example of each tense: Past Continuous, Past Simple, Past Perfect."),
    ...listening(
      "Listen to the evening news on City Radio. There are three stories.",
      "**Reporter:** Good evening. This is City Radio, and here is the news.\n\nOur first story: a hiker who went missing in the mountains near Almaty has been found alive. Twenty-four-year-old Ruslan Akhmetov set off on Saturday morning for a one-day walk. He had told his family he would be back by eight in the evening. When he didn't come home, his sister called the rescue service. More than fifty volunteers searched for him all night. Eventually, on Sunday afternoon, a helicopter spotted him near a river. He had fallen and hurt his leg, and his phone battery had died. Ruslan said he had survived by drinking river water and staying in one place. Doctors say he will be fine.\n\nNext, a story with a happy ending for one café owner. On Tuesday morning, while Dina Seitova was opening her café, she noticed that the back door was broken. Someone had stolen the coffee machine during the night! As soon as she posted the news on social media, hundreds of people shared it. By the time the police arrived, a witness had already called with information. The thief had tried to sell the machine online. Police arrested a 30-year-old man on Wednesday, and the machine is now back in the café. Customers have been coming in all week to show their support.\n\nAnd finally: a dog called Rex has surprised everyone in the town of Kokshetau. Rex had escaped from his garden in March and was missing for three months. His owners had put up posters and offered a reward, but nobody called. Then, last Friday, while the family was having dinner, they heard scratching at the door. It was Rex — thin and dirty, but very happy. Nobody knows where he had been. His owners say he is now eating everything in the fridge.\n\nThat's all from us. More news at nine.",
    ),
    quiz("Listen and choose.", [
      { q: "How long was Ruslan missing?", options: ["*about a day and a half", "a week", "three days"] },
      { q: "How did the rescuers find Ruslan?", options: ["*A helicopter spotted him.", "He called his sister.", "A dog found him."] },
      { q: "What did the thief steal from Dina's café?", options: ["*the coffee machine", "money", "the front door"] },
      { q: "How did the police find the thief?", options: ["*A witness called with information.", "They saw him on camera.", "He came back to the café."] },
      { q: "How long was Rex missing?", options: ["*three months", "three weeks", "one year"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Ruslan had planned a one-day walk.", true],
      ["Ruslan's phone had stopped working.", true],
      ["Dina noticed the broken door when she was closing the café.", false],
      ["The thief had tried to sell the machine online.", true],
      ["Someone called the family about Rex after they put up posters.", false],
      ["The family knows exactly where Rex had been.", false],
    ]),
  ]),

  section("Grammar: Telling a story", [
    quiz("Notice the rule 🔍 Look: “While Dina was opening her café, she noticed that the back door was broken. Someone had stolen the coffee machine.”", [
      { q: "“was opening” — what is it?", options: ["*the background: an action in progress", "the main event", "something earlier"] },
      { q: "“noticed” — what is it?", options: ["*a main event of the story", "the background", "something earlier"] },
      { q: "“had stolen” — what is it?", options: ["*something that happened earlier, before she noticed", "the background", "the next event"] },
    ]),
    table("narrative-tenses"),
    choose(
      "Choose the right tense.",
      "1. It [*was snowing/had snowed] heavily when we left the house. ❄️\n2. While I [*was cooking/cooked], the lights suddenly went out.\n3. When I got to the party, Leo [*had already gone/was already going] home.\n4. She [*opened/was opening] the letter and started to cry.\n5. We [*were walking/had walked] along the beach when we saw a dolphin. 🐬\n6. He was tired because he [*had been/was being] awake all night.\n7. As soon as the alarm [*rang/had been ringing], everyone ran outside.\n8. The road was closed because there [*had been/was being] an accident.",
    ),
    sort("Background, main event or earlier? Sort the sentences from the news. 🎬", {
      "🌄 background (Past Continuous)": ["Dina was opening her café.", "The family was having dinner.", "Volunteers were searching all night."],
      "⚡ main event (Past Simple)": ["A helicopter spotted him.", "They heard scratching at the door.", "Police arrested a man."],
      "⏪ earlier (Past Perfect)": ["He had fallen and hurt his leg.", "Someone had stolen the coffee machine.", "Rex had escaped from his garden."],
    }),
    gaps(
      "Complete the story. Use the Past Simple, Past Continuous or Past Perfect.",
      "Last winter I [was driving] home from work. (drive) It [was getting] dark and it was very cold. (get) Suddenly I [saw] a small dog in the middle of the road. (see) I [stopped] the car and got out. (stop) The dog was shaking — it [had lost/'d lost] its way in the snow. (lose) I [took] it home and put up posters. (take) Two days later, a girl [called] me — she [had searched/'d searched] everywhere for her dog! (call / search)",
    ),
  ]),

  section("Linking a story", [
    table("time-linkers"),
    choose(
      "Choose the right linker.",
      "1. [*As soon as/While] I heard the news, I called my mom.\n2. [*By the time/As soon as] we got to the cinema, the film had started.\n3. [*While/By the time] we were waiting for the bus, it started to rain.\n4. We looked for the hotel for hours and [*eventually/meanwhile] found it.\n5. I was in the kitchen. [*Meanwhile/Eventually], my brother was eating my cake in the living room! 🍰\n6. There were lots of problems, but [*in the end/as soon as] the trip was great.\n7. [*As soon as/Meanwhile] the plane landed, everyone turned on their phones.\n8. [*By the time/While] the firefighters arrived, the neighbors had put out the fire.",
    ),
    drag(
      "Complete the news story.",
      "A woman has found her lost wedding ring — inside a carrot! 🥕 Mary Grams [had] lost the ring in her garden in 2004. She [was] working in the garden [when] it fell off her finger. She looked everywhere, but she never found it. Thirteen years later, her daughter-in-law [was] picking carrots [when] she noticed something strange. A carrot [had] grown through the ring! [As soon as] Mary saw it, she recognized her ring. [In the end], it fit perfectly.",
      ["has", "while", "meanwhile", "were"],
    ),
    order("Put the story in the right order.", [
      [
        "Last summer my friend and I were camping by a lake.",
        "While we were sleeping, we heard a strange noise outside the tent.",
        "As soon as I opened the tent, I saw a big brown bear!",
        "It had found the food that we had left outside.",
        "We stayed very quiet, and eventually the bear walked away.",
      ].join("\n"),
    ], "lines"),
  ]),

  section("Let's talk: Newsroom", [
    text(
      "Game: The news reporter 🎙️",
      "Your teacher gives you a headline. You have 1 minute to prepare, then tell the story like a reporter (1 minute). Use all three past tenses and two linkers!\n\n- 📰 *“Grandmother, 82, finishes marathon”*\n- 📰 *“Lost phone found in fish's stomach”*\n- 📰 *“Wedding guests rescue swimmer”*\n- 📰 *“Parrot calls the police”* 🦜\n\nYour teacher asks questions: *What had happened before? What was she doing when…?*",
    ),
    text(
      "Talk to your teacher.",
      "- Tell a story you've heard recently — from the news, a friend or social media. Was it true? How do you know? 🤔\n- Do you think news today is too negative? Would you read a “good news only” app?\n- Have you ever been a witness to something unusual? What happened?",
    ),
    tip("In the reporter game, change roles too — you tell a story and make 3 tense mistakes on purpose; the student catches them. *If you have time:* the student invents their own crazy headline for you."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "While I ___ TV, the doorbell rang.", options: ["*was watching", "had watched", "watched"] },
      { q: "By the time we arrived, the shop ___.", options: ["*had closed", "was closing", "closes"] },
      { q: "save someone from danger =", options: ["*rescue", "arrest", "discover"] },
      { q: "in the end, after a long time =", options: ["*eventually", "meanwhile", "while"] },
    ]),
    box(
      "Phrase of the day: breaking news",
      "🚨 **breaking news** = very new, important news, happening right now.\n\n*We interrupt this program with breaking news…*",
    ),
  ]),

  homework(
    [
      video("Watch: narrative tenses — 6 Minute Grammar.", "3mi5OI23A6w"),
      choose(
        "Choose.",
        "1. When I woke up, the sun [*was shining/had shined] and the birds were singing.\n2. I [*was having/had had] a shower when someone knocked on the door.\n3. She couldn't get in because she [*had forgotten/was forgetting] her key.\n4. They [*met/were meeting] in 2015 and got married a year later.\n5. By the time I found my phone, the call [*had ended/was ending].\n6. While we [*were driving/drove] to the airport, we realized we had no passports!\n7. He [*had never seen/was never seeing] the sea before that trip.\n8. As soon as the teacher [*left/had been leaving], the students started talking.",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      sort("Good news or bad news? Sort the headlines. 😊😟", {
        "😊 good news": ["Lost dog returns home after 3 months", "All passengers survive plane landing on river", "Teen finds $10,000 and returns it", "Café gets its coffee machine back"],
        "😟 bad news": ["Thieves steal paintings from museum", "Two injured in bus crash", "Hiker goes missing in storm", "Storm closes airport for two days"],
      }),
      gaps(
        "Complete.",
        "1. The thief [escaped] through the window. 🪟\n2. A diver [rescued] a whale from fishing nets. 🐋\n3. Police [arrested] the man at the airport.\n4. Nobody knows how he [survived] three days in the forest.\n5. A [witness] saw everything from her balcony.\n6. The boy went [missing] after school but was found at a friend's house.",
      ),
      write("Write a short news story (100+ words) for a school or city website. Choose a headline from the lesson or invent your own. Use all three past tenses and at least two linkers (as soon as, by the time, while, eventually…).", 100, {
        read: "*Example:* **Parrot calls the police** 🦜 A parrot called Coco helped police catch a thief on Monday night. While the owners were sleeping, a man broke into their flat through the kitchen window. He had already taken a laptop when Coco started to shout “Police! Police!” As soon as the man heard it, he ran away — but he dropped the laptop. By the time the police arrived, the neighbors had already described him. Eventually, officers found him in a park nearby…",
      }),
      record("Record a 1-minute news report about something that happened in your town, school or family this month. 🎙️", 60),
    ],
    "Homework: Vocabulary, writing and speaking",
  ),
]);
