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

// 10.2 Bored or boring? — a READING lesson about Beatlemania (real facts) with the module's class video (the Beatles' official Ed Sullivan Show clip). G: -ed / -ing adjectives; want / hope / decide to, enjoy / love / finish -ing. V: feelings. Say it right: -ed endings. S: talk about a film or a concert. No listening in class.
export default lesson("a2-10.2", "Bored or boring?", () => [
  section("Warm-up: Who are they?", [
    box("Today you will…", "- read about the most exciting moment in pop music history 🎸🤩\n- say *excited* or *exciting*, *bored* or *boring*\n- tell your teacher about a great (or terrible!) film or concert 🎬"),
    picture("New York, 7 February 1964 ✈️", ["photos/beatles-jfk.jpg"], "Four young men from England arrive at JFK Airport. Do you know who they are?"),
    text(
      "Talk to your teacher.",
      "- Who are they, do you think? Why are so many people at the airport? 🤔\n- What music did your parents or grandparents love when they were young? Do you like it? 🎶\n- Have you ever been to a big concert? How did you feel — excited, tired, deaf? 😄\n- Is there a band or singer you'd scream for? 😱",
    ),
    tip("If the student doesn't know — it's the Beatles! Let them guess first. If they know a Beatles song, ask them to hum it. 🎵 A little secret: this lesson is the course author's small tribute to a favorite band. 🎸"),
  ]),

  section("Reading: Beatlemania", [
    tip("A longer text (about 300 words). Read it in parts. After each part, ask: *How did the fans feel? How did the Beatles feel?* — and point out the -ed / -ing words."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["The Beatles came from Liverpool.", true],
        ["About 73 million people watched them on The Ed Sullivan Show.", true],
        ["The fans at Shea Stadium were quiet and relaxed.", false],
        ["The Beatles couldn't hear their own music at some concerts.", true],
        ["They decided to stop touring in 1966.", true],
        ["Their last live show was in a big stadium.", false],
      ],
      {
        read: [
          "## 🎸 Beatlemania: the most exciting years in pop music",
          "In the early 1960s, four young men from **Liverpool**, in England — John, Paul, George and Ringo — started a band. They called it **the Beatles**. Their songs were short, happy and very catchy, and soon all of Britain was singing them.",
          "On **7 February 1964**, the Beatles flew to New York for the first time. About **3,000 excited fans** were waiting at the airport, screaming and holding signs. The band were surprised — they didn't expect it! ✈️",
          "Two days later, they played on **The Ed Sullivan Show**, a popular TV program. About **73 million Americans** watched — one of the biggest TV audiences ever at that time. People say that on that evening, the streets of America were very quiet: everyone was at home in front of the TV! 📺",
          "This was **Beatlemania**. At concerts, the fans were so excited that they screamed for the whole show. In August 1965, the Beatles played at **Shea Stadium** in New York for about **55,000 people** — a record then. The screaming was so loud that the band couldn't hear their own music! 😱",
          "For the Beatles, the tours were exciting at first, but later they became tiring — and a little boring. They wanted to make more interesting music in the studio. So in **1966**, they decided to stop touring.",
          "But there was one surprise. On **30 January 1969**, they went up on the roof of their office in London and played a concert — their last show ever. Shocked people in the street looked up at the sky. The police came and stopped it after about 40 minutes. 🚓",
          "The Beatles broke up in 1970, but their music still amazes people all over the world. Not bad for four boys from Liverpool! 🇬🇧",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "How many fans were waiting at the airport?", options: ["*about 3,000", "about 73 million", "about 55,000"] },
      { q: "Why were the American streets quiet on 9 February 1964?", options: ["*Everyone was watching the Beatles on TV.", "It was a holiday.", "It was snowing."] },
      { q: "Why did the Beatles stop touring?", options: ["*Tours became tiring and they wanted to work in the studio.", "Nobody came to their concerts.", "The police stopped them."] },
      { q: "Where was their last concert?", options: ["*on the roof of their office in London", "at Shea Stadium", "on The Ed Sullivan Show"] },
    ]),
    gaps(
      "Find the words in the text.",
      "1. songs that are easy to remember: [catchy] songs 🎵\n2. the people who watch a show: the [audience] 👥\n3. a trip with many concerts in different cities: a [tour] 🚌\n4. the place where musicians record songs: a [studio] 🎙️\n5. a very big sports place for concerts too: a [stadium] 🏟️\n6. stop being a band: [break] up 💔\n7. the top of a building: the [roof] 🏠\n8. very loud shouting: [screaming] 😱",
    ),
  ]),

  section("Grammar: bored or boring?", [
    quiz("Notice the rule 🔍 Look at the text: “3,000 excited fans… the tours were exciting at first… later they became tiring.” Which is true?", [
      { q: "excited (-ed) describes…", options: ["*how a person feels", "the thing that makes us feel it", "the time"] },
      { q: "exciting (-ing) describes…", options: ["*the thing or situation that makes us feel it", "how a person feels", "the past"] },
      { q: "“I'm boring” means…", options: ["*people don't enjoy talking to me 😅", "I have nothing to do", "I'm tired"] },
    ]),
    table("ed-ing"),
    choose(
      "Choose.",
      "1. The fans were very [*excited/exciting]. 🤩\n2. The concert was really [*exciting/excited].\n3. I'm [*bored/boring]. Let's do something!\n4. This film is so [*boring/bored]. 😴\n5. I'm [*interested/interesting] in old rock music.\n6. The news was very [*surprising/surprised]. 😲\n7. After the tour, the band was [*tired/tiring].\n8. Was the book [*interesting/interested]?",
    ),
    gaps(
      "Complete with -ed or -ing.",
      "1. I was [amazed] when I saw them live! (amaz-) 🤩\n2. The museum was really [interesting]. (interest-)\n3. We were [bored] — the lesson was very long. (bor-)\n4. That horror film was [frightening]! (frighten-) 😱\n5. She was [disappointed] — her favorite band canceled the concert. (disappoint-) 😞\n6. The end of the film was really [surprising]. (surpris-) 😲\n7. Ten hours on a bus is [tiring]. (tir-) 😩\n8. I'm [confused] — can you explain it again? (confus-) 😕",
    ),
  ]),

  section("Video: The Beatles on The Ed Sullivan Show", [
    video("Watch the Beatles on The Ed Sullivan Show, 9 February 1964 (official video, 2.5 minutes). Look at the fans! 😱", "jenWdylTtzs"),
    picture("The Beatles in the studio of The Ed Sullivan Show, 1964", ["photos/beatles-sullivan.jpg", "photos/beatles-fans.jpg"], "On TV in New York — and fans at a Beatles concert in the Netherlands, 1964"),
    text(
      "Talk to your teacher.",
      "- How do the fans feel? How do you know? 😱🤩\n- Do you like the song? Is it catchy? 🎵\n- Is there a band or singer today with fans like this? Who?\n- Why do you think fans scream at concerts? 🤔",
    ),
  ]),

  section("Grammar: want to, enjoy -ing", [
    table("verb-patterns"),
    sort("+ to or + -ing? Sort the verbs. 🔤", {
      "+ to (want to go)": ["want", "hope", "decide", "need", "would like"],
      "+ -ing (enjoy going)": ["enjoy", "finish", "don't mind", "keep", "practice"],
    }),
    choose(
      "Choose.",
      "1. The Beatles decided [*to stop/stopping] touring.\n2. They enjoyed [*recording/to record] in the studio.\n3. I want [*to learn/learning] the guitar. 🎸\n4. Do you enjoy [*listening/to listen] to old music?\n5. We hope [*to see/seeing] them live one day.\n6. He finished [*writing/to write] the song at 3 a.m.\n7. I don't mind [*waiting/to wait] in the queue.\n8. She'd like [*to go/going] to Liverpool.",
    ),
    drag(
      "Complete the message.",
      "Hi Kate! I've just watched a documentary about the Beatles. I really enjoyed [watching] it! 🎬 Now I want [to] visit Liverpool. I hope [to] see the Cavern Club, where they played at the start. My brother doesn't mind [driving] — he loves [listening] to their songs too. We decided [to] go next summer. I need [to] save some money first! Do you want [to] come? 🎸",
      ["watch", "drive", "listen"],
    ),
    order("Make sentences.", [
      "I enjoy listening to old music.",
      "They decided to stop touring.",
      "We hope to see the concert.",
      "She finished writing the song.",
      "I don't mind waiting.",
    ]),
  ]),

  section("Say it right: -ed adjectives", [
    box(
      "🗣️ Say it right: -ed has 3 sounds",
      "**/d/** — bore**d**, surprise**d**, tire**d**, amaze**d**\n\n**/t/** — relax**ed**, shock**ed**, impress**ed**\n\n**/ɪd/** — only after **t** or **d**: excit**ed**, interest**ed**, disappoint**ed**\n\n⚠️ *bored* = **one** syllable: /bɔːd/ — not “bor-ed”!",
    ),
    sort("/d/, /t/ or /ɪd/? Sort. 🗣️", {
      "/d/": ["bored", "surprised", "tired"],
      "/t/": ["relaxed", "shocked", "impressed"],
      "/ɪd/": ["excited", "interested", "disappointed"],
    }),
    tip("Say the words in random order — the student holds up 1, 2 or 3 fingers for /d/, /t/, /ɪd/. Then: *I was so ___ when…* with real stories."),
  ]),

  section("Let's talk: Exciting or boring?", [
    text(
      "Tell your teacher about a film, a series or a concert 🎬🎤",
      "Choose one — the best or the worst!\n\n- What was it? When did you watch / go?\n- Was it exciting, boring, frightening, surprising…? Why?\n- How did you feel at the end — amazed, disappointed, confused? 🤔\n- Would you recommend it? *I enjoyed… I didn't enjoy…*\n\nYour teacher asks questions and then tells you about theirs!",
    ),
    text(
      "Talk to your teacher.",
      "- What do you enjoy doing at the weekend? What do you hate doing? 😄\n- What's something you want to learn this year? Something you hope to do one day? 🎯\n- What's the most boring thing you have to do every week? 😴\n- What music makes you feel excited? Relaxed? Sad? 🎶",
    ),
    tip("*If you have time:* “Song quiz” 🎵 — play 10 seconds of 3 famous songs from different decades (any style). The student guesses the decade and says how the song makes them feel: *This song is relaxing. I'm bored by this one!*"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "The concert was ___!", options: ["*exciting", "excited", "excite"] },
      { q: "I'm ___ in music.", options: ["*interested", "interesting", "interest"] },
      { q: "They decided ___ touring.", options: ["*to stop", "stopping", "stop"] },
      { q: "I enjoy ___ to music.", options: ["*listening", "to listen", "listen"] },
    ]),
    box("Word of the day: an earworm", "**an earworm** 🐛👂 = a song that you can't stop hearing in your head.\n\n*“I Want to Hold Your Hand” is a real earworm — I've sung it all day!* 🎵"),
  ]),

  homework(
    [
      gaps(
        "Complete with -ed or -ing.",
        "1. The film was so [boring] that I fell asleep. 😴\n2. I was [surprised] to see my teacher at the concert! 😲\n3. Their new song is [amazing]! 🤩\n4. We were very [tired] after the long trip. 😩\n5. History is really [interesting] for me. 📚\n6. He was [disappointed] with his exam results. 😞",
      ),
      choose(
        "Choose.",
        "1. I'd like [*to visit/visiting] London.\n2. She keeps [*calling/to call] me at night! 📞\n3. They want [*to buy/buying] tickets.\n4. Have you finished [*reading/to read] the book?\n5. I need [*to practice/practicing] more.\n6. We enjoyed [*meeting/to meet] your friends.",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      video("Watch: Bored or boring? -ed and -ing adjectives (engVid).", "4J9vt7dbdvs"),
      ...listening(
        "Listen. A radio host tells the story of the Beatles' last concert.",
        "**Host:** It's lunchtime in London, the thirtieth of January, 1969. It's cold and windy. People in Savile Row, a street in the center of the city, are going to work and to lunch. Suddenly, they hear loud music. Where is it coming from? They look up… and they're shocked! On the roof of a building, four musicians are playing rock and roll. It's the Beatles! 🎸 They haven't played live for more than two years. Office workers open their windows. People climb onto other roofs to see. Soon the street is full of excited people — and the traffic stops. After about forty minutes, the police arrive and ask the band to stop. At the end, John Lennon says into the microphone: “I hope we passed the audition!” Everybody laughs. It's the last time the Beatles ever play live together.",
      ),
      quiz("Listen and choose.", [
        { q: "What was the weather like?", options: ["*cold and windy", "hot and sunny", "rainy"] },
        { q: "Where did the Beatles play?", options: ["*on the roof of a building", "in a stadium", "in the street"] },
        { q: "How long did they play before the police came?", options: ["*about 40 minutes", "about 4 hours", "about 10 minutes"] },
        { q: "What did John Lennon say at the end?", options: ["*“I hope we passed the audition!”", "“Thank you, London!”", "“Goodbye forever!”"] },
      ]),
    ],
    "Homework: Video and listening",
  ),
  homework(
    [
      write("Write a short review of a film, series or concert. Was it exciting or boring? How did you feel? Would you recommend it? Use -ed / -ing adjectives and enjoy / want / hope. (60+ words)", 60, {
        read: "*Example:* Last week I watched a documentary about Queen. It was amazing! 🎤 I was really surprised — I didn't know their songs were so different. The concert at the end was very exciting, and I was almost crying. 😢 The middle part was a bit boring, but I enjoyed watching it. Now I want to listen to all their albums. I'd definitely recommend it!",
      }),
      record("Record your answer: What's your favorite song? How does it make you feel? Why do you love it? (1 minute)", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
