import {
  box,
  choose,
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

// 8.1 Love it or hate it — G: like / love / hate / don't mind + -ing. V: music genres, series, hobbies, trends. ★ I'm obsessed with…, it's a vibe. Main format: listening (a podcast) + video.
export default lesson("a1-8.1", "Love it or hate it", () => [
  section("Warm-up: Guess the genre", [
    box("Today you will…", "- name music genres and hobbies\n- say *I love… / I don't mind… / I hate…* + -ing\n- talk about trends: *I'm obsessed with… It's a vibe!* ✨"),
    quiz("Guess the music genre! 🎵", [
      { q: "🎤 Fast words, strong beats. Artists: Eminem, Drake.", options: ["*hip-hop / rap", "classical", "jazz"] },
      { q: "🎸 Electric guitars, drums, loud! Bands: Queen, Imagine Dragons.", options: ["*rock", "K-pop", "country"] },
      { q: "🎻 Orchestras, violins and pianos. Composers: Mozart, Beethoven.", options: ["*classical", "rock", "electronic"] },
      { q: "🇰🇷 Groups, cool dances, colorful videos. Artists: BTS, BLACKPINK.", options: ["*K-pop", "jazz", "rock"] },
      { q: "🎧 DJs, no real instruments, big parties.", options: ["*electronic / EDM", "classical", "country"] },
    ]),
    text("Talk to your teacher.", "- What music is on your playlist right now? 🎧\n- What music do your parents like? Do you like it too?"),
  ]),

  section("Vocabulary: Things we love", [
    words("Music, series and hobbies", [
      ["pop — rock — hip-hop — K-pop", "🎵 music genres"],
      ["classical — jazz — electronic", "🎻 🎷 🎧"],
      ["a series — a show", "📺 🇬🇧 also: a TV programme", "I love watching this series."],
      ["anime", "🇯🇵 Japanese cartoons"],
      ["a reality show", "🏝️ real people on TV"],
      ["a trend", "📈 something popular now"],
      ["a playlist", "🎶 your list of songs"],
      ["dance — dancing", "💃"],
      ["listen to music — listening to music", "🎧"],
      ["take photos — taking photos", "📸"],
      ["go shopping — going shopping", "🛍️"],
      ["I'm obsessed with…", "🤩 I love it very, very much", "I'm obsessed with this song!"],
      ["It's a vibe!", "✨ = it's very cool, it has a good feeling"],
      ["cringe", "😬 embarrassing, not cool"],
    ]),
    sort("Music, TV or hobby? Sort.", {
      "🎵 Music": ["K-pop", "jazz", "rock", "a playlist"],
      "📺 TV": ["anime", "a series", "a reality show"],
      "🎨 Hobbies": ["dancing", "taking photos", "going shopping"],
    }),
    match("Match.", [
      ["listen", "to music"],
      ["take", "photos"],
      ["go", "shopping"],
      ["watch", "a series"],
      ["play", "video games"],
    ]),
  ]),

  section("Grammar: love / like / hate + -ing", [
    table("like-ing"),
    gaps("Write the -ing form.", "1. read → [reading]\n2. dance → [dancing]\n3. swim → [swimming]\n4. watch → [watching]\n5. take → [taking]\n6. shop → [shopping]"),
    choose(
      "Choose.",
      "1. I love [*dancing/dance] to K-pop.\n2. She [*doesn't mind/don't mind] cooking.\n3. He hates [*getting/gets] up early.\n4. We [*like/likes] watching anime.\n5. My mom [*loves/love] listening to jazz.",
    ),
    order("Make sentences.", ["I don't mind doing homework.", "She loves taking photos.", "They hate going shopping."]),
  ]),

  section("Listening: Love it or hate it?", [
    tip("Read the podcast script with energy, like two radio hosts! Pause after each trend: *Do you love it or hate it?*"),
    ...listening(
      "Listen to the podcast. Dana and Leo talk about trends.",
      "**Dana:** Hi, everyone! Welcome to “Love it or hate it” — the podcast about trends! I'm Dana.\n\n**Leo:** And I'm Leo! First trend: K-pop dance challenges. Dana?\n\n**Dana:** I love them! I love dancing, and the songs are a vibe! 💃 Leo?\n\n**Leo:** Hmm, I don't mind watching them. But I hate dancing — I'm a terrible dancer! 😅\n\n**Dana:** Ha-ha! OK, trend number two: reality shows.\n\n**Leo:** I hate them. They're cringe! 😬\n\n**Dana:** Really? I don't mind watching them on Friday evening. But I'm not obsessed.\n\n**Leo:** And trend number three: old cameras for photos. 📸\n\n**Dana:** I'm obsessed with my old camera! I love taking photos with it.\n\n**Leo:** Me too! I like taking photos of my cat with it. 🐱\n\n**Dana:** That's all for today! Love it or hate it? Write in the comments!",
    ),
    quiz("Listen and choose.", [
      { q: "Dana ___ K-pop dance challenges.", options: ["*loves", "hates", "doesn't mind"] },
      { q: "Leo ___ dancing.", options: ["*hates", "loves", "likes"] },
      { q: "What does Leo think about reality shows?", options: ["*They're cringe.", "They're a vibe.", "He's obsessed with them."] },
      { q: "Dana is obsessed with…", options: ["*her old camera", "reality shows", "dancing"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Leo doesn't mind watching dance challenges.", true],
      ["Dana watches reality shows on Friday evening.", true],
      ["Leo takes photos of his dog.", false],
    ]),
  ]),

  section("Video: Music genres", [
    video("Watch the video about music genres. Which genre do you like?", "mOHX1ADX1Pg"),
    text("Talk to your teacher.", "- Which genres are in the video?\n- Which genre do you love? Which do you hate? 🎵\n- What music do you listen to when you study? When you're sad? At the gym?"),
  ]),

  section("Let's talk: Love it or hate it?", [
    text(
      "Game: Love it or hate it? 😍😐😡",
      "Your teacher says a thing. Answer fast and say why!\n\n*pineapple on pizza 🍍🍕 · Mondays · K-pop · horror films 👻 · getting up early · selfies · cleaning your room · video calls · rainy days ☔ · anime*\n\n*I love it! / I don't mind it. / I hate it! It's cringe! 😬*",
    ),
    text(
      "Talk to your teacher.",
      "- What are you obsessed with right now? 🤩\n- What's a vibe for you? ✨\n- What trend is cringe for you?\n- What do you love doing on the weekend? What do you hate doing?",
    ),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "I love ___ .", options: ["*dancing", "dance", "to dancing"] },
      { q: "😐 = I ___ cooking.", options: ["*don't mind", "love", "hate"] },
      { q: "swim → …", options: ["*swimming", "swiming", "swimmming"] },
    ]),
    box("Word of the day: obsessed", "**I'm obsessed with…** 🤩 = I love it a lot, I think about it all the time.\n\n*I'm obsessed with this new series — I watch it every day!*"),
  ]),

  homework(
    [
      gaps("Write the -ing form.", "1. play → [playing]\n2. write → [writing]\n3. run → [running]\n4. listen → [listening]"),
      choose("Choose.", "1. My dad [*hates/hate] shopping.\n2. I don't mind [*cooking/cook].\n3. Do you like [*reading/read] books?"),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      video("Watch the A1 video: like, love, hate + -ing.", "C-B9FARgh0s"),
      trueFalse("Correct or not?", [
        ["I love swim.", false],
        ["She likes taking photos.", true],
        ["He don't mind cooking.", false],
        ["We hate getting up early.", true],
      ]),
    ],
    "Homework: Video",
  ),
  homework(
    [
      write("Write a “Love it or hate it” post about 4 trends or things. Use love, like, don't mind, hate + -ing. (40+ words)", 40, {
        read: "*Example:* 😍 I love listening to K-pop — it's a vibe! 🙂 I like watching anime with my brother. 😐 I don't mind doing homework in the evening. 😡 But I hate getting up early on Monday! What about you?",
      }),
      record("Record your own mini-podcast: “Love it or hate it?” — talk about 3 trends.", 90),
    ],
    "Homework: Writing and speaking",
  ),
]);
