import {
  box,
  choose,
  gaps,
  homework,
  lesson,
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

// 7.1 I can do it! — G: can / can't (ability). V: skills. Main format: photos + reading (a skills-swap post) + a life hacks video.
export default lesson("a1-7.1", "I can do it!", () => [
  section("Warm-up: Cool skills", [
    box("Today you will…", "- name skills: *cook, code, drive, edit videos…*\n- say *I can… / I can't…*\n- ask *Can you…?* and talk about your skills 💪"),
    picture("Look at the photos.", ["photos/skill-juggle.jpg", "photos/skill-skate.jpg", "photos/skill-chess.jpg"]),
    text(
      "Talk about the photos.",
      "- What do the people do in the photos? 🤹🛹♟️\n- Which skill is the most difficult? Which is the coolest? 😎\n- Which one do you want to learn?",
    ),
  ]),

  section("Vocabulary: Skills", [
    words("Skills", [
      ["swim", "🏊", "I can swim."],
      ["drive (a car)", "🚗"],
      ["ride a bike", "🚲"],
      ["cook", "🍳"],
      ["code", "💻 write programs"],
      ["edit videos", "🎬✂️"],
      ["draw", "✏️"],
      ["sing", "🎤"],
      ["dance", "💃"],
      ["play the guitar / the piano", "🎸 / 🎹 · music: play THE guitar"],
      ["play chess / football", "♟️ / ⚽ · games and sports: no “the”"],
      ["speak (English, Kazakh…)", "🗣️", "I can speak three languages."],
      ["skateboard", "🛹"],
      ["juggle", "🤹"],
      ["well — a little — not at all", "👍 — 🤏 — 👎", "I can swim well. I can cook a little."],
    ]),
    matchPictures("Match the photos and the skills.", [
      ["photos/skill-guitar.jpg", "play the guitar"],
      ["photos/skill-swim.jpg", "swim"],
      ["photos/skill-drive.jpg", "drive"],
      ["photos/skill-code.jpg", "code"],
      ["photos/skill-juggle.jpg", "juggle"],
      ["photos/skill-chess.jpg", "play chess"],
    ]),
    sort("play the… or play…? Sort.", {
      "play the…": ["guitar", "piano", "drums", "violin"],
      "play…": ["chess", "football", "tennis", "video games"],
    }),
  ]),

  section("Grammar: can / can't", [
    tip("Show it with gestures: *I can swim* 🏊 *I can't fly* 🙅. Note the pronunciation: 🇺🇸 *can't* sounds like “kænt”, 🇬🇧 like “kaːnt”."),
    table("can"),
    choose(
      "Choose.",
      "1. She [*can swim/cans swim] very well.\n2. I [*can't/don't can] drive.\n3. [*Can you/Do you can] play the piano?\n4. Can he cook? — Yes, he [*can/does].\n5. We can [*speak/to speak] English.",
    ),
    gaps("Look and write can or can't.", "1. 🐟 A fish [can] swim.\n2. 🐧 A penguin [can't/cannot] fly.\n3. 🦜 A parrot [can] talk.\n4. 🐱 A cat [can't/cannot] speak English. 😄"),
    order("Make sentences.", ["I can play the guitar.", "She can't ride a bike.", "Can you speak Chinese?"]),
  ]),

  section("Reading: Skill swap", [
    tip("A “skill swap” is when people teach each other: I teach you guitar, you teach me cooking. Read the posts and find a good pair!"),
    quiz(
      "Read the posts from a skill swap app. Choose.",
      [
        { q: "Who can code?", options: ["*Arman", "Mia", "Sofia"] },
        { q: "What can't Mia do?", options: ["*edit videos", "play the guitar", "sing"] },
        { q: "Sofia can teach…", options: ["*cooking", "chess", "coding"] },
        { q: "A good pair for Arman (he wants to learn guitar):", options: ["*Mia", "Sofia", "nobody"] },
      ],
      {
        read: [
          "## 🔄 SkillSwap — teach a skill, learn a skill!",
          "**Arman, 17** 💻 *I can code — I make apps and websites. I can't play any music, but I really want to learn the guitar! 🎸*",
          "**Mia, 16** 🎸 *I can play the guitar and sing. I can't edit videos, and I need it for my YouTube channel! 🎬 Can you help me?*",
          "**Sofia, 19** 🍳 *I can cook very well — Italian, Japanese, Kazakh food! I can't swim at all. 😅 Can you teach me?*",
        ].join("\n\n"),
      },
    ),
    trueFalse("Read again. True or false?", [
      ["Arman can play the guitar.", false],
      ["Mia can sing.", true],
      ["Sofia can swim well.", false],
    ]),
    text("Talk to your teacher.", "- Who is a good pair for Mia? Who can help her? 🤝\n- What can you teach in SkillSwap? What do you want to learn?\n- Is a skill swap a good idea? 💡"),
  ]),

  section("Video: Life hacks", [
    video("Watch a life hacks video. Which hacks can you do? 🤯", "mT4Ca5AX9Y0"),
    text("Talk to your teacher.", "- Which hack is the best? Which is useless? 😄\n- Do you know a cool life hack? Show it! 💡"),
  ]),

  section("Let's talk: Find someone who…", [
    text(
      "Game: Find someone who… 🔍",
      "Ask your teacher, then answer yourself: *Can you…?*\n\n- … speak three languages? 🗣️\n- … cook a pizza? 🍕\n- … play a musical instrument? 🎸\n- … swim 1 km? 🏊\n- … edit videos? 🎬\n- … juggle? 🤹\n- … touch your nose with your tongue? 👅😄\n\nAnswer: *Yes, I can! / No, I can't. / I can … a little.*",
    ),
    text("Talk to your teacher.", "- What's your best skill? 🏆\n- What can your grandparents do that you can't?\n- What skill do you want to learn this year?"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "She ___ drive.", options: ["*can't", "don't can", "cans not"] },
      { q: "___ you swim?", options: ["*Can", "Do can", "Are"] },
      { q: "I can play ___ guitar.", options: ["*the", "a", "—"] },
    ]),
    box("Word of the day: life hack", "**a life hack** 💡 = a clever, easy way to do something.\n\n*Life hack: put your phone in a glass — it's a speaker!* 🔊"),
  ]),

  homework(
    [
      gaps("Write the skill.", "1. 🏊 [swim]\n2. 🍳 [cook]\n3. 💃 [dance]\n4. 🚲 ride a [bike]\n5. 🎬 edit [videos]"),
      choose("Choose.", "1. My dad [*can/cans] fix cars.\n2. [*Can you/You can] help me?\n3. I can play [*chess/the chess]."),
    ],
    "Homework: Vocabulary and grammar",
  ),
  homework(
    [
      video("Watch the grammar video: can and can't.", "8GS0HI9b1o8"),
      trueFalse("Correct or not?", [
        ["He can to swim.", false],
        ["Can she speak French?", true],
        ["I can't drive.", true],
        ["She cans cook.", false],
      ]),
    ],
    "Homework: Video",
  ),
  homework(
    [
      write("Write a SkillSwap post: What can you do? What can't you do? What do you want to learn? (35+ words)", 35, {
        read: "*Example:* Hi! I'm Dana, 15. I can draw and I can edit videos — I make TikToks! I can speak Kazakh, Russian and a little English. I can't cook at all 😅 and I can't play the guitar. Can you teach me?",
      }),
      record("Record your answer: 3 things you can do, 3 things you can't do, and one skill you want to learn.", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
