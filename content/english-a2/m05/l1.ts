import {
  box,
  choose,
  drag,
  gaps,
  homework,
  lesson,
  listening,
  match,
  matchPictures,
  order,
  picture,
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

// 5.1 In 2050 — G: will / won't for predictions; I think / I don't think…will; definitely, probably. V: technology of the future. Say it right: 'll and won't. S: make predictions. Main format: photos (already real!) + reading (predictions from 1900) + listening + video.
export default lesson("a2-5.1", "In 2050", () => [
  section("Warm-up: Future or now?", [
    box("Today you will…", "- read predictions from 1900 — did they come true? 🔮\n- make predictions: *Robots will… People won't…*\n- imagine your life in 2050 🚀"),
    picture(
      "Future or now? 🤔",
      ["photos/fut-car.jpg", "photos/fut-drone.jpg", "photos/fut-robot.jpg", "photos/fut-farm.jpg"],
      "A car with no driver, a delivery drone, a robot with a human face, an indoor farm — all of them are real today!",
    ),
    text(
      "Talk to your teacher.",
      "- Would you get into a car with no driver? Why / why not? 🚗\n- Which of these do you want in your life? Which one scares you? 😬\n- What technology did your grandparents not have when they were young? What do they think about it now?\n- What's one thing you want someone to invent — fast? 💡",
    ),
    tip("Surprise moment: all four photos are real — self-driving taxis already work in some US cities, drones deliver medicine in Africa. Ask: *So what will be new in 2050?*"),
  ]),

  section("Vocabulary: Future technology", [
    words("Technology", [
      ["a self-driving car", "🚗🤖 a car with no driver"],
      ["a drone", "🛸 a small flying machine with no pilot"],
      ["a robot", "🤖", "Robots will do the housework."],
      ["artificial intelligence (AI)", "🧠💻 computers that think and learn"],
      ["a smart city", "🏙️📶 a city with technology everywhere"],
      ["solar power — renewable energy", "☀️⚡ energy from the sun, wind, water"],
      ["an electric car", "🔌🚗"],
      ["a virtual reality (VR) headset", "🥽"],
      ["space tourism", "🚀🧳 holidays in space"],
      ["climate change", "🌍🔥 the Earth is getting hotter"],
      ["disappear", "💨 stop existing", "Cash will disappear."],
      ["replace", "🔁 take the place of", "Will AI replace teachers?"],
    ]),
    matchPictures("Match the photos and the words.", [
      ["photos/fut-car.jpg", "a self-driving car"],
      ["photos/fut-drone.jpg", "a delivery drone"],
      ["photos/fut-robot.jpg", "a robot"],
      ["photos/fut-farm.jpg", "an indoor farm"],
      ["photos/fut-solar.jpg", "solar power"],
    ]),
    match("Match.", [
      ["artificial", "intelligence"],
      ["space", "tourism"],
      ["climate", "change"],
      ["a smart", "city"],
      ["renewable", "energy"],
      ["a VR", "headset"],
    ]),
    gaps(
      "Complete.",
      "1. This car has no driver. It's a [self-driving] car. 🚗\n2. A [drone] brought my pizza — through the window! 🛸🍕\n3. ChatGPT is an example of artificial [intelligence]. 🧠\n4. Solar and wind power are [renewable] energy. ☀️\n5. Will AI [replace] teachers? I hope not! 🔁\n6. Maybe cash will [disappear] — we pay with phones. 💨\n7. Holidays in space: space [tourism] 🚀\n8. The Earth is getting hotter because of climate [change]. 🌍",
    ),
  ]),

  section("Reading: The future — from 1900", [
    tip("Before reading, ask: *What did people in 1900 think the year 2000 would be like?* Read one prediction at a time and vote: came true or not? 🗳️"),
    trueFalse(
      "Read the article. True or false?",
      [
        ["John Elfreth Watkins wrote his predictions in 1900.", true],
        ["He thought people would send photos over long distances.", true],
        ["He thought cars would be more expensive than horses.", false],
        ["He thought three letters would disappear from the alphabet.", true],
        ["His prediction about mosquitoes came true.", false],
        ["About half of his predictions came true, people say.", true],
      ],
      {
        read: [
          "## 🔮 What will happen in the next 100 years? (1900)",
          "In December 1900, an American engineer, **John Elfreth Watkins**, wrote an article for a magazine: “What May Happen in the Next Hundred Years”. He made 28 predictions about the year 2000. How many came true? Let's look at some of them.",
          "**📸 “Photographs will be telegraphed from any distance.”** He meant: you will send photos to the other side of the world. ✅ Today we send them in a second!",
          "**📺 “Man will see around the world.”** Cameras will connect people thousands of kilometers away. ✅ Video calls, anyone?",
          "**🚗 “Automobiles will be cheaper than horses are today.”** ✅ In 1900, a car was a toy for rich people. Today, millions of families have one.",
          "**🍲 Ready-cooked meals will be bought from shops.** ✅ Hello, food delivery!",
          "**🔤 “There will be no C, X or Q in our everyday alphabet.”** ❌ He thought we wouldn't need them. We still have all 26 letters!",
          "**🦟 Mosquitoes and flies will practically disappear.** ❌ Sorry, John — they are still here.",
          "People say about half of his predictions came true. Not bad for 1900! So what will people think about **our** predictions in 2125? 🤔",
        ].join("\n\n"),
      },
    ),
    sort("Did it come true? Sort. ✅❌", {
      "✅ came true": ["sending photos far away", "video calls", "cheap cars", "ready-cooked meals"],
      "❌ didn't come true": ["no C, X or Q", "no mosquitoes", "no flies", "fewer letters in the alphabet"],
    }),
    quiz("Read again. Choose.", [
      { q: "What was Watkins's job?", options: ["*an engineer", "a scientist", "a teacher"] },
      { q: "How many predictions did he make?", options: ["*28", "100", "12"] },
      { q: "“Man will see around the world” is like…", options: ["*video calls", "planes", "photos"] },
      { q: "In 1900, a car was…", options: ["*a toy for rich people", "cheaper than a horse", "very popular"] },
    ]),
  ]),

  section("Grammar: will / won't", [
    quiz("Notice the rule 🔍 Look: “Photographs will be telegraphed… There will be no C, X or Q… Robots will do the housework.” Which is true?", [
      { q: "These sentences are…", options: ["*predictions — what we think about the future", "plans with a time and a place", "facts about the past"] },
      { q: "After will we use…", options: ["*the verb without to: will be, will do", "to + verb: will to be", "verb-ing: will being"] },
      { q: "will not = …", options: ["*won't", "willn't", "don't will"] },
    ]),
    table("will"),
    choose(
      "Choose.",
      "1. In 2050, people [*will live/live will] longer.\n2. Robots [*will do/will doing] the housework.\n3. I think cash [*will disappear/will to disappear].\n4. Cars [*won't/willn't] need drivers.\n5. [*Will/Do] we live on Mars? — No, we won't.\n6. I don't think AI [*will replace/won't replace] teachers.\n7. She'll [*probably/probable] be a doctor.\n8. Everyone [*will have/will has] a robot at home.",
    ),
    gaps(
      "Make predictions with will or won't.",
      "1. people / travel to Mars → People [will travel] to Mars.\n2. we / not / use cash → We [won't use/will not use] cash.\n3. robots / cook for us → Robots [will cook] for us.\n4. children / not / go to school → Children [won't go/will not go] to school.\n5. you / live in a smart city? → [Will you live] in a smart city?\n6. it / be hotter → It [will be] hotter.\n7. I / be famous → I [will be/'ll be] famous! 😎\n8. AI / not / replace doctors → AI [won't replace/will not replace] doctors.",
    ),
    drag(
      "Complete the predictions.",
      "In 2050, most cars [will] drive themselves. People [won't] need a driving license. Drones will [bring] our shopping. I [think] we will work only four days a week. I don't think people [will] stop meeting in real life — we'll [always] need friends! Will robots be our friends too? Maybe. They'll [probably] be good listeners! 🤖",
      ["won't", "brings", "probable"],
    ),
    order("Make predictions.", [
      "Robots will do the housework.",
      "I think we will live longer.",
      "People won't use cash.",
      "Will we travel to space?",
      "I don't think cars will fly.",
    ]),
  ]),

  section("Say it right: 'll and won't", [
    box(
      "🗣️ Say it right",
      "In speech, **will** is short: *I'll /aɪl/ · you'll · she'll · we'll · it'll /ˈɪtəl/*\n\n**won't** /wəʊnt/ sounds like “**oh**” + nt — not like **want** /wɒnt/!\n\n*I won't go.* = I will not go. · *I want to go.* = I'd like to go. 🤯",
    ),
    quiz("won't or want? Choose what you hear (your teacher says it).", [
      { q: "“I ___ to go.” (I'd like to)", options: ["*want", "won't"] },
      { q: "“I ___ go.” (I will not)", options: ["*won't", "want"] },
      { q: "“They ___ a robot.” (they'd like one)", options: ["*want", "won't"] },
      { q: "“It ___ rain tomorrow.” (it will not)", options: ["*won't", "want"] },
    ]),
    tip("Say *won't* and *want* in random order — the student points to “oh” 🟠 or “o” 🔵. Then the student says them and you guess!"),
  ]),

  section("Listening: Will we really…?", [
    ...listening(
      "Listen. Dana and Arman talk about the future.",
      "**Dana:** I read an article about life in 2050. It says we'll all have robot helpers at home.\n\n**Arman:** Really? I don't think that will happen. Robots are too expensive.\n\n**Dana:** They're expensive now, but they'll be cheaper. Phones were expensive too!\n\n**Arman:** OK, maybe. But I'm sure people won't stop driving. I love my car!\n\n**Dana:** In 2050, your car will drive itself. You'll sit and watch films. 🎬\n\n**Arman:** Hmm, that sounds nice, actually. What about school? Will kids still go to school?\n\n**Dana:** I think they will. But they'll probably learn with AI teachers too.\n\n**Arman:** AI teachers won't be as good as real ones. They won't understand jokes! 😄\n\n**Dana:** And what about you? Where will you be in 2050?\n\n**Arman:** I'll be 48! I'll probably live in the mountains with three dogs. 🐕🐕🐕 And you?\n\n**Dana:** I'll definitely live by the sea. Maybe on a boat! ⛵",
    ),
    quiz("Listen and choose.", [
      { q: "Where did Dana read about 2050?", options: ["*in an article", "in a book", "on TikTok"] },
      { q: "Why doesn't Arman believe in robot helpers?", options: ["*They're too expensive.", "They're dangerous.", "He doesn't like robots."] },
      { q: "How old will Arman be in 2050?", options: ["*48", "50", "38"] },
      { q: "Where will Dana live, she says?", options: ["*by the sea", "in the mountains", "in a smart city"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Arman loves driving his car.", true],
      ["Dana thinks children won't go to school.", false],
      ["Arman thinks AI teachers will be better than real ones.", false],
      ["Arman wants to live with three dogs.", true],
      ["Dana might live on a boat.", true],
    ]),
  ]),

  section("Video: Life in the city in 2050", [
    video("Watch a 2-minute video: your life in a city in 2050. Write down 3 predictions.", "TiIFzV4d2NE"),
    text("Talk to your teacher.", "- Which prediction from the video do you like? Which one don't you believe? 🤔\n- Will your city look like this in 2050? Why / why not?"),
  ]),

  section("Let's talk: Time capsule 2050", [
    text(
      "Your time capsule ⏳",
      "Make 5 predictions about **your life** in 2050 — and say how sure you are:\n\n*I'll definitely… · I'll probably… · I might… · I probably won't… · I definitely won't…*\n\n- Where will you live? 🏡\n- What will your job be? 💼\n- What will you do on a typical day?\n- Who will be in your family? 👨‍👩‍👧\n- What will you think about today's technology? 😄\n\nYour teacher writes them down — read them again in 2050! 📜",
    ),
    text(
      "Agree or disagree? Say why. 🤔",
      "- In 2050, people will work only 3 days a week.\n- Kids won't learn to write with a pen.\n- Everyone will speak English — or use a translator in their ear.\n- People will be happier than today.\n- We'll have holidays on the Moon. 🌕",
    ),
    tip("*If you have time:* “Bad predictions” — read famous wrong predictions: *“The horse is here to stay, but the automobile is only a novelty”* (a famous quote, often said to be from a bank president in 1903). The student makes the worst possible prediction for 2050! 😂"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "Robots ___ do the housework.", options: ["*will", "are will", "will to"] },
      { q: "will not = …", options: ["*won't", "want", "willn't"] },
      { q: "I don't think it ___ rain.", options: ["*will", "won't", "is"] },
      { q: "a car with no driver =", options: ["*a self-driving car", "an electric car", "a smart car"] },
    ]),
    box("Word of the day: sci-fi", "**sci-fi** 🚀👽 = science fiction — films and books about the future, space and technology.\n\n*Video calls were sci-fi in 1900. Now they're normal!*"),
  ]),

  homework(
    [
      gaps(
        "Write the word.",
        "1. 🛸 a small flying machine with no pilot: a [drone]\n2. 🧠💻 computers that think: artificial [intelligence]\n3. ☀️ energy from the sun: solar [power]\n4. 🔌🚗 an [electric] car\n5. 🚀🧳 holidays in space: space [tourism]\n6. 🔁 take the place of: [replace]",
      ),
      match("Match.", [
        ["climate", "change"],
        ["a smart", "city"],
        ["a self-driving", "car"],
        ["renewable", "energy"],
        ["virtual", "reality"],
        ["space", "tourism"],
      ]),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      video("Watch the grammar video: predictions with will / won't.", "OXZpUfLN-aw"),
      choose(
        "Choose.",
        "1. I think it [*will be/will is] sunny tomorrow.\n2. People [*won't/don't will] use keys.\n3. [*Will/Are] you be at home tonight?\n4. She'll [*definitely/definite] pass the exam.\n5. I don't think he [*will come/won't come].\n6. We [*'ll/'re] probably live on the Moon one day.",
      ),
      gaps(
        "Complete with will or won't and the verb.",
        "1. In 2050, people [will live] to 100. (live)\n2. I [won't forget/will not forget] your birthday! (not forget)\n3. [Will robots cook] for us? (robots / cook)\n4. It [will be/'ll be] hot this summer. (be)\n5. Cash [will disappear] soon, I think. (disappear)\n6. Don't worry, you [won't be/will not be] late. (not be)",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      write("Write a letter to yourself in 2050: What will your life be like? What will the world be like? Use will, won't, probably, definitely. (60+ words)", 60, {
        read: "*Example:* Dear me in 2050, You'll be 45! I think you'll live in a small house near the sea with two cats. 🐈🐈 You'll probably work from home — maybe with a robot assistant. You won't drive a car, because cars will drive themselves. I hope you'll still speak English and travel a lot. Will you remember this letter? 😄",
      }),
      record("Record your answer: make 5 predictions about the world in 2050. Do you think life will be better or worse? (1 minute)", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
