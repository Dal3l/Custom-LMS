import {
  box,
  choose,
  drag,
  gaps,
  homework,
  lesson,
  match,
  picture,
  quiz,
  record,
  section,
  sort,
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 4.3 Tiny houses — skills lesson: reading and video about tiny houses, a dream house; review of module 4. Main format: video + reading.
export default lesson("a1-4.3", "Tiny houses", () => [
  section("Warm-up: A tiny house", [
    box("Today you will…", "- read about life in a tiny house\n- review *there is / there are* and *in, on, under, next to…*\n- describe your dream house"),
    video("Watch a 1-minute tiny house tour. 🏡", "8pENzhIB_78"),
    text("Talk to your teacher.", "- Is the house nice? Is it cozy? 🪵\n- Big house or tiny house — what do you want? Why?"),
  ]),

  section("Vocabulary: Houses", [
    words("Houses", [
      ["tiny", "🐜 very, very small", "It's a tiny house."],
      ["cheap — expensive", "💰 not much money — 💸 a lot of money"],
      ["inside — outside", "🏠 in the house — 🌳 out of the house"],
      ["a loft", "⬆️ a small room under the roof — often for a bed"],
      ["a ladder", "🪜 you go up to the loft on it"],
      ["stairs", "🪜 🇬🇧 also: a staircase"],
      ["a roof", "🏠 the top of a house"],
      ["a garden", "🌷 🇺🇸 also: a yard"],
      ["in the forest / in the mountains", "🌲 / 🏔️"],
      ["by the sea / in the city", "🌊 / 🏙️"],
      ["on wheels", "🛞 you can move it!"],
    ]),
    match("Match the opposites.", [
      ["tiny", "big"],
      ["cheap", "expensive"],
      ["inside", "outside"],
      ["upstairs", "downstairs"],
    ]),
    sort("Where is it? Sort.", {
      "🏠 inside": ["bed", "sofa", "shower", "fridge"],
      "🌳 outside": ["garden", "roof", "trees", "car"],
    }),
  ]),

  section("Reading: Life in a tiny house", [
    picture("Two tiny houses in Oregon, USA 🇺🇸", ["photos/tiny-portland.jpg", "photos/tiny-oregon.jpg"]),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Kate's house is 15 square meters.", true],
        ["The house is in the city.", false],
        ["Kate's bed is in the loft.", true],
        ["There's a big bathroom.", false],
        ["Kate has a dog.", true],
      ],
      {
        read: [
          "## 🏡 My life in 15 m²",
          "Hi! I'm Kate. I'm 28 and I'm a designer. I live in a tiny house — it's only 15 square meters! It's on wheels, and now it's in the forest, next to a small lake. 🌲",
          "Inside, there's a kitchen, a small bathroom and a sofa. There isn't a bedroom — my bed is in the loft, under the roof. There's a ladder to the loft. 🪜",
          "There are big windows, so the house is light. There's a desk between two windows — that's my office! 💻",
          "There aren't any shelves for books. My books are on my tablet! 📱",
          "My dog, Bo, has a bed under the stairs. He loves the forest! 🐶",
          "Is it small? Yes. But it's cheap, it's cozy, and I'm happy! 😊",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Kate's job is…", options: ["*a designer", "a teacher", "a doctor"] },
      { q: "Her desk is…", options: ["*between two windows", "in the loft", "under the stairs"] },
      { q: "Where are her books?", options: ["*on her tablet", "on shelves", "under the bed"] },
      { q: "Bo's bed is…", options: ["*under the stairs", "next to the lake", "in the loft"] },
    ]),
    text("Talk to your teacher.", "- What's good about a tiny house? What's bad? 👍👎\n- Can you live in 15 m²? Can your family? 😅\n- What 5 things are in your tiny house? What isn't there?"),
  ]),

  section("Review: Module 4", [
    choose(
      "Choose.",
      "1. [*There's/There are] a ladder to the loft.\n2. [Is there/*Are there] any shelves?\n3. There aren't [some/*any] books.\n4. The desk is [*between/next] two windows.\n5. Bo's bed is [*under/on] the stairs.",
    ),
    drag(
      "Complete the text.",
      "My dream house is [by] the sea. [There's] a big garden. [There are] three bedrooms. My room is [upstairs]. [Is there] a pool? Yes, of course! 🏊",
      ["Are there", "under"],
    ),
    gaps("Complete with is, are, isn't or aren't.", "1. There [isn't/is not] a bedroom in Kate's house. ❌\n2. There [are] big windows. ✅\n3. [Is] there a lake? — Yes, there is. ✅\n4. There [aren't/are not] any shelves. ❌"),
  ]),

  section("Let's talk: My dream house", [
    text(
      "Design your dream house 🏰",
      "Draw your dream house on the board. Then describe it:\n\n- Where is it? *in the mountains, by the sea, in the city…*\n- Is it big or tiny?\n- What rooms are there?\n- What's in your room?\n- Is there a pool? A cinema? A garden? 🎬🏊🌷",
    ),
    text(
      "Talk to your teacher.",
      "- Where do people live in your country — in flats or in houses? 🏢🏠\n- Is a house in the city expensive?\n- Forest, sea, mountains or city — what's the best place for a home? Why?",
    ),
    tip("*If you have time:* the teacher describes a dream house, the student draws it. Compare!"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "very, very small =", options: ["*tiny", "cozy", "cheap"] },
      { q: "You go up to the loft on a…", options: ["*ladder", "roof", "garden"] },
      { q: "🇺🇸 yard = 🇬🇧 …", options: ["*garden", "balcony", "hall"] },
    ]),
    box("Word of the day: minimalism", "**minimalism** = living with only a few things ✨\n\n*Tiny houses are popular with people who like minimalism.*"),
  ]),

  homework(
    [
      gaps("Write the word.", "1. 🪜 You go up on it: a [ladder]\n2. 🏠 The top of a house: a [roof]\n3. 💸 It costs a lot of money: [expensive]\n4. 🌷 Flowers are in it: a [garden]"),
      match("Match.", [
        ["in the", "forest"],
        ["by the", "sea"],
        ["on", "wheels"],
        ["under the", "roof"],
      ]),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      video("Watch: the smallest tiny house! How many rooms are there?", "nuDOv4kMahU"),
      write("Write 3 sentences about the house in the video: “There's… There are… There isn't…”", null),
    ],
    "Homework: Video",
  ),
  homework(
    [
      write("Write about your dream house. Where is it? What rooms and things are there? (40+ words)", 40, {
        read: "*Example:* My dream house is in the mountains. It's a wooden house with a big garden. There are three bedrooms and a big kitchen. My room is upstairs. There's a big window next to my bed. There's a cinema room downstairs! There isn't a TV in the kitchen.",
      }),
      record("Record your answer: show your drawing and describe your dream house.", 120),
    ],
    "Homework: Writing and speaking",
  ),
]);
