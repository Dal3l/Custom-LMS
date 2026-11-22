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

// 11.3 Food trends — skills lesson: viral food, healthy eating; review of module 11. ★ slaps. Main format: reading + video.
export default lesson("a1-11.3", "Food trends", () => [
  section("Warm-up: Famous food", [
    box("Today you will…", "- read about food trends from social media 📱🍜\n- describe food: *sweet, spicy, delicious…*\n- talk about your favorite food — *it slaps!* 😋"),
    matchPictures("Match the food. 😋", [
      ["photos/food-sushi.jpg", "sushi 🇯🇵"],
      ["photos/food-bubbletea.jpg", "bubble tea 🇹🇼"],
      ["photos/food-pizza.jpg", "pizza 🇮🇹"],
      ["photos/food-avocado.jpg", "avocado toast"],
    ]),
    text("Talk to your teacher.", "- Which food do you like? Which do you want to try? 🤔\n- What food is popular on TikTok or Instagram now?"),
  ]),

  section("Vocabulary: Describing food", [
    words("Describing food", [
      ["delicious — tasty", "😋 very good"],
      ["sweet — salty — sour — spicy", "🍬 — 🧂 — 🍋 — 🌶️"],
      ["healthy — unhealthy", "🥗 — 🍟"],
      ["fresh", "🥬 new, not old"],
      ["homemade", "🏠🍳 made at home"],
      ["a recipe", "📝 how to cook something", "Can you send me the recipe?"],
      ["viral", "📈 very popular on the internet, very fast"],
      ["try", "🤔🍴 eat something for the first time", "I want to try bubble tea!"],
      ["vegetarian — vegan", "🥦 no meat — 🌱 no food from animals"],
      ["It slaps!", "🔥 slang: it's really good!", "This burger slaps!"],
    ]),
    sort("Sort the food.", {
      "🍬 Sweet": ["chocolate", "ice cream", "cake", "honey"],
      "🌶️ Spicy": ["chili", "curry", "hot wings"],
      "🍋 Sour": ["lemon", "lime"],
    }),
    match("Match.", [
      ["healthy", "unhealthy"],
      ["sweet", "salty"],
      ["fresh", "old"],
      ["homemade", "from a shop"],
    ]),
  ]),

  section("Reading: Viral food", [
    tip("Read one trend at a time. Ask: *Where is it from? What's in it? Is it healthy? Do you want to try it?*"),
    quiz(
      "Read the article. Choose.",
      [
        { q: "Where is bubble tea from?", options: ["*Taiwan", "Japan", "Italy"] },
        { q: "What's inside Dubai chocolate?", options: ["*pistachio cream and crispy pastry", "strawberries", "coffee"] },
        { q: "Which trend is healthy?", options: ["*avocado toast", "Dubai chocolate", "none of them"] },
        { q: "Why are there queues for Dubai chocolate?", options: ["*there isn't much in the shops", "it's free", "it's very cheap"] },
      ],
      {
        read: [
          "## 📈 Food that went viral",
          "**🧋 Bubble tea** comes from Taiwan. It's sweet milk tea with little black “pearls” — tapioca balls. You drink it with a big straw. Now there are bubble tea shops all over the world! It's delicious, but there's a lot of sugar in it. 🍬",
          "**🥑 Avocado toast** is very popular on Instagram. It's bread with avocado, salt and lemon — sometimes with an egg on top. It's healthy and easy to make at home. 📸 People love taking photos of it!",
          "**🍫 Dubai chocolate** is a big chocolate bar with pistachio cream and crispy pastry inside. A video about it went viral on TikTok — millions of people watched it! Now a lot of shops make it, but sometimes there isn't much in the shops and there are long queues. Is it worth it? People say it slaps! 🔥",
        ].join("\n\n"),
      },
    ),
    trueFalse("Read again. True or false?", [
      ["There's a lot of sugar in bubble tea.", true],
      ["Avocado toast is difficult to make.", false],
      ["Dubai chocolate went viral on TikTok.", true],
    ]),
    text("Talk to your teacher.", "- Which trend do you want to try? Which one isn't for you? 🤔\n- Are food trends healthy? 🥗🍫\n- Do you wait in a long queue for food? For what? 😅"),
  ]),

  section("Video: Food trends", [
    video("Watch the first 3–4 minutes. A YouTuber makes TikTok food trends. Which food does he make?", "u5Glr8CCoMU"),
    text("Talk to your teacher.", "- Which food from the video do you want to try? 😋\n- Which looks strange? 🤢\n- Is it easy or difficult to cook?"),
  ]),

  section("Review: Module 11", [
    choose(
      "Choose.",
      "1. There [*is/are] a lot of sugar in bubble tea.\n2. How [*many/much] eggs do you need?\n3. Is there [*any/some] milk?\n4. How much [*is/are] the chocolate bar?",
    ),
    drag(
      "Complete the recipe.",
      "🥑 Avocado toast: You need [some] bread, an [avocado], some salt and a [little] lemon. How [many] eggs? One! Put the avocado [on] the bread. Enjoy! 😋",
      ["any", "much", "a"],
    ),
    gaps("Complete with How much or How many.", "1. [How many] people are there?\n2. [How much] water do you drink?\n3. [How much] is it?"),
  ]),

  section("Let's talk: My favorite food", [
    text(
      "Food review 🎤",
      "Be a food blogger! Tell your teacher about your favorite food or dish:\n\n- *What is it? Where is it from?*\n- *What's in it?*\n- *Is it sweet, spicy, salty?*\n- *Is it healthy?*\n- *Where can you eat it? How much is it?*\n- *Give it stars: ⭐⭐⭐⭐⭐ — it slaps!*",
    ),
    text("Talk to your teacher.", "- What's a traditional dish from your country? 🍲\n- What food do tourists love in your country?\n- Can you invent a new food trend? 😄"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "🌶️ =", options: ["*spicy", "sweet", "sour"] },
      { q: "very popular on the internet =", options: ["*viral", "fresh", "homemade"] },
      { q: "“This pizza slaps!” =", options: ["*This pizza is really good!", "This pizza is bad.", "This pizza is hot."] },
    ]),
    box("Word of the day: foodie", "**a foodie** 🍜📸 = a person who loves food and tries new dishes.\n\n*I'm a foodie — I try every new café in my city!*"),
  ]),

  homework(
    [
      gaps("Complete.", "1. 🍋 Lemons are [sour].\n2. 🌶️ Chili is [spicy].\n3. 🥗 Salad is [healthy].\n4. 📝 How to cook it: a [recipe]"),
      ...listening(
        "Listen. Two friends try a new café.",
        "**Dana:** Wow, look at the menu! Bubble tea, Dubai chocolate, matcha cake…\n\n**Arman:** I want to try the Dubai chocolate. How much is it?\n\n**Dana:** It's 6 dollars. That's a lot for chocolate!\n\n**Arman:** But it's viral! 😄 And you?\n\n**Dana:** I'd like a mango bubble tea. It's 4 dollars.\n\n**Arman:** … Mmm, this chocolate slaps! 🔥\n\n**Dana:** My bubble tea is OK, but it's very sweet.",
      ),
      quiz("Listen and choose.", [
        { q: "Arman tries…", options: ["*Dubai chocolate", "matcha cake", "bubble tea"] },
        { q: "How much is Dana's bubble tea?", options: ["*$4", "$6", "$10"] },
        { q: "What does Dana think about her drink?", options: ["*It's very sweet.", "It slaps!", "It's spicy."] },
      ]),
    ],
    "Homework: Vocabulary and listening",
  ),
  homework(
    [
      write("Write a food review of your favorite dish or café. (40+ words)", 40, {
        read: "*Example:* ⭐⭐⭐⭐⭐ My favorite dish is beshbarmak. It's a traditional Kazakh dish with meat, pasta and onions. It isn't spicy, it's salty and very tasty. My grandma makes it — it's homemade and it slaps! 🔥 It isn't very healthy, but it's delicious.",
      }),
      record("Record a food review video: show (or describe) your favorite food and give it stars. ⭐", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
