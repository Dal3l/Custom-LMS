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

// 1.2 Famous firsts — G: irregular verbs; subject questions (Who invented…?). V: inventions, records. Say it right: bought / thought / taught /ɔː/. Main format: reading (a timeline) + video.
export default lesson("a2-1.2", "Famous firsts", () => [
  section("Warm-up: Which came first?", [
    box("Today you will…", "- learn irregular past forms: *went, flew, made…*\n- ask *Who invented…? What happened in…?*\n- tell the story of a famous “first” 🏆"),
    order("Put the inventions in order: the oldest first ⏳", ["the telephone\nthe airplane\nthe first person in space\nthe first text message\nthe first YouTube video"], "lines"),
    tip("Let the student guess the order before checking. Answers: telephone 1876 → airplane 1903 → space 1961 → text message 1992 → YouTube video 2005."),
    text("Talk to your teacher.", "- Which invention is the most important for you? Why?\n- What can't you live without: your phone, the internet or planes? 📱🌐✈️"),
  ]),

  section("Vocabulary: Inventions and records", [
    words("Inventions and records", [
      ["invent — an invention — an inventor", "💡", "Bell invented the telephone."],
      ["discover", "🔍 find something that exists", "Columbus didn't discover America first!"],
      ["the first person to…", "🥇", "Gagarin was the first person to fly into space."],
      ["fly — flew", "✈️"],
      ["send — sent", "📤", "He sent the first text message."],
      ["build — built", "🏗️"],
      ["become — became", "🔄 = started to be", "He became famous."],
      ["upload", "⬆️📹 put a video on the internet"],
      ["a spaceship — a rocket", "🚀"],
      ["a record", "🏆 the best / first / fastest ever"],
      ["famous", "⭐ everyone knows him / her"],
      ["take off — land", "🛫 — 🛬"],
    ]),
    matchPictures("Match the photos and the “firsts”.", [
      ["photos/first-flight.jpg", "the first airplane flight"],
      ["photos/gagarin.jpg", "the first person in space"],
      ["photos/moon.jpg", "people on the Moon"],
      ["photos/bell-phone.jpg", "an early telephone"],
    ]),
    gaps("Write the word.", "1. A person who invents things: an [inventor]\n2. Put a video on YouTube: [upload] it\n3. A plane goes up: it takes [off]\n4. A plane comes down: it [lands]"),
  ]),

  section("Reading: Famous firsts", [
    tip("Read the timeline one fact at a time. Ask: *When did it happen? Who did it?* The student finds all the irregular verbs."),
    quiz(
      "Read the timeline. Choose.",
      [
        { q: "Who invented the telephone?", options: ["*Alexander Graham Bell", "the Wright brothers", "Neil Papworth"] },
        { q: "How long was the first airplane flight?", options: ["*12 seconds", "12 minutes", "2 hours"] },
        { q: "Where did Gagarin's rocket take off?", options: ["*at Baikonur, Kazakhstan", "in Moscow", "in the USA"] },
        { q: "What did the first text message say?", options: ["*Merry Christmas", "Hello, world", "Come here"] },
        { q: "Who uploaded the first YouTube video?", options: ["*Jawed Karim", "Steve Jobs", "Neil Armstrong"] },
      ],
      {
        read: [
          "## 🏆 Famous firsts",
          "**📞 1876 — the telephone.** Alexander Graham Bell made the first phone call. His first words were: *“Mr. Watson, come here — I want to see you.”*",
          "**✈️ 1903 — the first flight.** The Wright brothers, Orville and Wilbur, built a plane in the USA. It flew for only 12 seconds — but it changed the world.",
          "**🚀 1961 — the first person in space.** On 12 April, Yuri Gagarin flew around the Earth. His rocket took off from Baikonur, in Kazakhstan. He said “Poyekhali!” — “Let's go!” The flight took 108 minutes.",
          "**🌕 1969 — people on the Moon.** Neil Armstrong and Buzz Aldrin walked on the Moon. Armstrong was the first.",
          "**💬 1992 — the first text message.** Neil Papworth sent it from a computer to a phone. It said: *“Merry Christmas.”*",
          "**▶️ 2005 — the first YouTube video.** Jawed Karim, one of the founders of YouTube, uploaded “Me at the zoo”. It's 19 seconds long — about elephants! 🐘",
        ].join("\n\n"),
      },
    ),
    trueFalse("Read again. True or false?", [
      ["The Wright brothers built their plane in the UK.", false],
      ["Gagarin's flight took 108 minutes.", true],
      ["Buzz Aldrin was the first person on the Moon.", false],
      ["The first YouTube video is about elephants.", true],
    ]),
  ]),

  section("Grammar: Irregular verbs", [
    quiz("Notice the rule 🔍 Look at the timeline: *Bell made… It flew… He said…* Which is true?", [
      { q: "made, flew, said are…", options: ["*irregular — no -ed, we learn them", "regular — with -ed", "present forms"] },
    ]),
    table("irregular"),
    match("Match: verb → past.", [
      ["fly", "flew"],
      ["build", "built"],
      ["send", "sent"],
      ["become", "became"],
      ["think", "thought"],
      ["find", "found"],
    ]),
    gaps("Write the past.", "1. go → [went]\n2. see → [saw]\n3. take → [took]\n4. buy → [bought]\n5. come → [came]\n6. say → [said]"),
    drag(
      "Complete the story.",
      "In 1961, Yuri Gagarin [flew] into space. His rocket [took] off from Baikonur. After the flight, he [became] very famous. He [went] to many countries and [met] a lot of people.",
      ["flied", "taked", "goed"],
    ),
  ]),

  section("Grammar: Who invented it?", [
    table("subject-q"),
    choose(
      "Choose.",
      "1. Who [*invented/did invent] the telephone?\n2. What [*happened/did happen] in 1969?\n3. What did Bell [*invent/invented]?\n4. Who [*sent/did send] the first text message?",
    ),
    order("Make questions.", ["Who flew into space first?", "What did the Wright brothers build?", "Who uploaded the first YouTube video?"]),
    quiz("Choose the right question for the answer.", [
      { q: "— Bell did.", options: ["*Who made the first phone call?", "Who did Bell call?", "What did Bell make?"] },
      { q: "— Mr. Watson.", options: ["*Who did Bell call?", "Who called Mr. Watson?", "What happened?"] },
    ]),
  ]),

  section("Say it right: bought, thought", [
    box("🗣️ Say it right", "These past forms rhyme — they have the same long sound **/ɔː/** (like in *door*):\n\n**bought · thought · brought · taught · caught · fought**\n\nThe letters **-ought / -aught** are silent “gh”: *thought* = /θɔːt/"),
    sort("Same sound /ɔː/ or not? Sort. 🗣️", {
      "/ɔː/ like door": ["bought", "thought", "taught", "caught"],
      "different sound": ["flew", "said", "made"],
    }),
  ]),

  section("Video: The first person in space", [
    video("Watch a NASA video about Yuri Gagarin. What happened on 12 April 1961?", "DULAzpmmJkg"),
    text("Talk to your teacher.", "- What did you learn about Gagarin's flight?\n- Do you want to go to space? Why / why not? 🚀"),
    video("Fun! Watch the first YouTube video ever — 19 seconds. What does Jawed say?", "jNQXAC9IVRw"),
  ]),

  section("Let's talk: Quiz show", [
    text(
      "Quiz show: famous firsts 🎤",
      "Make 3 questions about the timeline for your teacher: *Who…? What…? When…?*\n\n*Who flew for 12 seconds? What did Papworth send?*\n\nThen your teacher asks you. Who gets more points? 🏆",
    ),
    text("Talk to your teacher.", "- What's the most important invention of the last 20 years? 📱🤖\n- What “first” do you remember in your life? (first phone, first trip, first concert…)\n- What do you want to be the first in your family to do? 🥇"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "fly → …", options: ["*flew", "flied", "flown"] },
      { q: "Who ___ the airplane?", options: ["*built", "did build", "build"] },
      { q: "bought = /bɔːt/ — it rhymes with…", options: ["*thought", "out", "boat"] },
    ]),
    box("Word of the day: OG", "**OG** 😎 = *original* — the first, the classic one (slang).\n\n*“Me at the zoo” is the OG YouTube video!*"),
  ]),

  homework(
    [
      gaps("Write the past.", "1. build → [built]\n2. send → [sent]\n3. become → [became]\n4. think → [thought]\n5. find → [found]"),
      match("Match the questions and the answers.", [
        ["Who invented the telephone?", "Bell."],
        ["What did Papworth send?", "A text message."],
        ["Who walked on the Moon first?", "Armstrong."],
        ["What happened in 1903?", "The first flight."],
      ]),
    ],
    "Homework: Vocabulary and grammar",
  ),
  homework(
    [
      video("Watch: the Past Simple of irregular verbs.", "rVrrpC2xqI0"),
      choose("Choose.", "1. Who [*made/did make] the first call?\n2. What did they [*build/built]?\n3. She [*took/taked] a lot of photos."),
    ],
    "Homework: Grammar video",
  ),
  homework(
    [
      ...listening(
        "Listen to a short podcast about Valentina Tereshkova.",
        "**Host:** Today's famous first: Valentina Tereshkova. In 1963, she became the first woman in space. Before that, she worked in a factory, and she loved skydiving. 🪂 She flew for almost three days and went around the Earth 48 times! After the flight, she became a famous politician. Her call sign in space was “Chaika” — “Seagull”. 🐦",
      ),
      quiz("Listen and choose.", [
        { q: "When did Tereshkova fly into space?", options: ["*in 1963", "in 1961", "in 1969"] },
        { q: "What did she love before?", options: ["*skydiving", "football", "painting"] },
        { q: "How many times did she go around the Earth?", options: ["*48", "18", "4"] },
      ]),
    ],
    "Homework: Listening",
  ),
  homework(
    [
      write("Write about a “first” in your life or a famous “first” you like: What happened? When? Who did it? (50+ words)", 50, {
        read: "*Example:* My first concert was in 2022. I went with my sister to see a K-pop band in Almaty. We bought the tickets online and waited for three hours! The show was amazing — we sang and danced all night. I lost my voice, but I didn't care. 😄",
      }),
      record("Record a 1-minute “famous first” story: tell about an invention or a person. Use irregular verbs.", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
