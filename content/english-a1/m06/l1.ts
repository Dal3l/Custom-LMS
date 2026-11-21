import {
  box,
  choose,
  drag,
  gaps,
  homework,
  lesson,
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

// 6.1 Streamer life — G: Present Simple he / she / it (-s / -es, has, goes). V: action verbs, streaming. Main format: reading (a profile) + video.
export default lesson("a1-6.1", "Streamer life", () => [
  section("Warm-up: Streaming facts", [
    box("Today you will…", "- talk about streamers and streaming\n- say *he plays, she watches, he has*\n- tell about another person's day"),
    trueFalse("Streaming: true or false? Guess! 🎮", [
      ["Twitch is a website for live videos.", true],
      ["Some streamers stream for 12 hours a day.", true],
      ["Streamers never talk to the people in the chat.", false],
      ["Some streamers play games, and some just talk, cook or draw.", true],
      ["You need a TV studio for streaming.", false],
    ]),
    text("Talk to your teacher.", "- Do you watch streams? Who's your favorite streamer? 📺\n- Is streaming a real job? 🤔"),
  ]),

  section("Vocabulary: Streaming", [
    words("Streaming", [
      ["a streamer", "🎮📹 a person who makes live videos"],
      ["stream — go live", "🔴 make a live video", "She goes live at 7 p.m."],
      ["a stream", "📺 a live video"],
      ["a viewer — a fan", "👀 a person who watches"],
      ["the chat", "💬 messages from viewers"],
      ["a follower", "➕ a person who follows you"],
      ["a schedule", "🗓️ the days and times of your streams"],
      ["edit videos", "✂️🎬"],
      ["answer questions", "❓➡️💬"],
      ["practice", "🔁 do it again and again · 🇬🇧 practise", "He practices every day."],
      ["relax", "😌 rest"],
      ["a setup", "🖥️🎧🎤 your computer, camera and microphone"],
    ]),
    match("Match.", [
      ["go", "live"],
      ["edit", "videos"],
      ["answer", "questions"],
      ["read", "the chat"],
      ["check", "the schedule"],
    ]),
    gaps("Complete.", "1. A person who watches a stream is a [viewer].\n2. Messages from viewers are in the [chat].\n3. Days and times of the streams: the [schedule].\n4. Computer + camera + microphone = your [setup]."),
  ]),

  section("Reading: Meet a streamer", [
    tip("Read the profile together. The student underlines every verb with -s / -es — that's today's grammar!"),
    quiz(
      "Read Nova's profile. Choose.",
      [
        { q: "Nova is from…", options: ["*Canada", "the USA", "Korea"] },
        { q: "She goes live at…", options: ["*7 p.m.", "7 a.m.", "noon"] },
        { q: "In the afternoon, she…", options: ["*practices and edits videos", "sleeps", "goes to school"] },
        { q: "Her cat…", options: ["*sits on her desk", "has a channel", "plays games"] },
      ],
      {
        read: [
          "## 🎮 Streamer of the week: Nova",
          "Nova is 24. She's from Toronto, Canada, and she's a full-time streamer. She has 200,000 followers!",
          "Nova gets up at 11 a.m. — very late! She has breakfast and checks her messages. In the afternoon, she practices new games and edits videos for YouTube. ✂️",
          "She goes live at 7 p.m. She plays games, talks to her viewers and answers questions in the chat. 💬 Her streams finish at midnight.",
          "Nova's cat, Pixel, always sits on her desk during streams. The viewers love him! 🐱",
          "After the stream, she relaxes, watches a series and goes to bed at 2 a.m. 😴",
        ].join("\n\n"),
      },
    ),
    trueFalse("Read again. True or false?", [
      ["Nova gets up early.", false],
      ["She edits videos for YouTube.", true],
      ["Her streams finish at 10 p.m.", false],
      ["She goes to bed at 2 a.m.", true],
    ]),
    text("Talk to your teacher.", "- Is Nova's day cool or tiring? 😎😵\n- What's good and bad about a streamer's life?\n- Can you get up at 11 and go to bed at 2? 😄"),
  ]),

  section("Grammar: he / she / it", [
    table("ps-he-she"),
    sort("Sort the verbs.", {
      "+ s": ["plays", "streams", "reads", "edits"],
      "+ es": ["watches", "goes", "does", "fixes"],
      "y → ies": ["studies", "tries"],
    }),
    choose(
      "Choose.",
      "1. Nova [*plays/play] games every day.\n2. She [*watches/watch] a series after the stream.\n3. Her cat [*sits/sit] on the desk.\n4. I [*play/plays] games on Saturday.\n5. He [*has/haves] 200 followers.",
    ),
    gaps("Write the he / she form.", "1. go → she [goes]\n2. have → he [has]\n3. study → she [studies]\n4. watch → he [watches]\n5. work → she [works]\n6. do → he [does]"),
    drag(
      "Complete Leo's day.",
      "Leo [gets] up at 8. He [has] breakfast and [goes] to school. After school, he [plays] football. In the evening, he [watches] streams.",
      ["get", "go", "have"],
    ),
  ]),

  section("Video: A day of a streamer", [
    video("Watch a day in the life of a Twitch streamer. What does he do?", "jejEoNwM0vE"),
    text("Talk to your teacher.", "- What does he do in the morning? And before the stream?\n- Say 3 things: *He gets up… He eats… He streams…*\n- Is his day like Nova's day?"),
    tip("Pause the video every 30–40 seconds and ask *What does he do?* The student answers with he + s."),
  ]),

  section("Let's talk: Their day", [
    text(
      "Tell about another person's day 🗣️",
      "Choose a person: your friend, a family member, a blogger or a character.\n\nTell your teacher about their day: *She gets up at… She goes to… In the evening she…*\n\nYour teacher guesses who it is (if it's a famous person)!",
    ),
    order("Put the words in order.", ["She goes live at 7 p.m.", "He has breakfast at 11.", "My brother watches streams every evening."]),
    text("Talk to your teacher.", "- Who in your family gets up first? Who goes to bed last? 🌅🌙\n- What does your best friend do after school or work?"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "She ___ games every day.", options: ["*plays", "play", "playes"] },
      { q: "He ___ to bed at 2.", options: ["*goes", "gos", "go"] },
      { q: "study → she …", options: ["*studies", "studys", "studyes"] },
      { q: "have → he …", options: ["*has", "haves", "have"] },
    ]),
    box("Word of the day: GG", "**GG** = *good game* 🎮🤝 — gamers say it at the end of a game.\n\n*We lost, but GG, everyone!*"),
  ]),

  homework(
    [
      gaps("Write the he / she form.", "1. play → [plays]\n2. watch → [watches]\n3. go → [goes]\n4. try → [tries]\n5. have → [has]"),
      choose("Choose.", "1. My sister [*reads/read] a lot.\n2. We [*stream/streams] on Friday.\n3. Our cat [*sleeps/sleep] all day.\n4. Dad [*fixes/fixs] computers."),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      video("Watch the grammar video: -s, -es, -ies.", "HOKSLfqf-F4"),
      gaps("After the video: write the he / she form.", "1. fly → [flies]\n2. kiss → [kisses]\n3. mix → [mixes]"),
    ],
    "Homework: Video",
  ),
  homework(
    [
      write("Write about a day of a person you know (a friend, a family member, a blogger). (40+ words)", 40, {
        read: "*Example:* My brother Arman is 19. He's a student. He gets up at 7 and has breakfast. He goes to university by bus. He studies IT. In the evening he plays football with his friends. He watches YouTube and goes to bed at midnight.",
      }),
      record("Record your answer: tell about your favorite blogger's or streamer's day (real or imagined).", 90),
    ],
    "Homework: Writing and speaking",
  ),
]);
