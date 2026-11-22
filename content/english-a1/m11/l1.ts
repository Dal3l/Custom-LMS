import {
  box,
  choose,
  gaps,
  homework,
  lesson,
  matchPictures,
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

// 11.1 What's in your fridge? — G: countable / uncountable; some / any (review). V: food. Main format: photos + reading (a fridge challenge) + video.
export default lesson("a1-11.1", "What's in your fridge?", () => [
  section("Warm-up: Fridge photo", [
    box("Today you will…", "- name food and drinks 🍎🧀🥛\n- say *There's some milk. There aren't any eggs.*\n- tell what's in your fridge"),
    picture("Look at the photo.", ["photos/food-fridge.jpg"], "A big family fridge"),
    text(
      "Talk about the photo.",
      "- What can you see in the fridge? Say 5 things! 👀\n- Is it a healthy fridge? 🥦\n- Is your fridge full or empty right now? 😅\n- What's always in your fridge?",
    ),
  ]),

  section("Vocabulary: Food", [
    words("Food and drinks", [
      ["an apple — a banana — an orange", "🍎 — 🍌 — 🍊"],
      ["a tomato — a potato — a carrot", "🍅 — 🥔 — 🥕"],
      ["an egg", "🥚"],
      ["bread", "🍞", "There's some bread."],
      ["cheese — butter", "🧀 — 🧈"],
      ["milk — juice — water", "🥛 — 🧃 — 💧"],
      ["meat — chicken — fish", "🥩 — 🍗 — 🐟"],
      ["rice — pasta", "🍚 — 🍝"],
      ["yogurt", "🥣"],
      ["sugar — salt", "🍬 — 🧂"],
      ["fruit — vegetables", "🍓🍇 — 🥦🥒"],
      ["leftovers", "🍱 food from yesterday's dinner"],
    ]),
    matchPictures("Match the photos.", [
      ["photos/food-bread.jpg", "bread"],
      ["photos/food-eggs.jpg", "eggs"],
      ["photos/food-market.jpg", "fruit"],
      ["photos/food-fridge.jpg", "a fridge"],
    ]),
    sort("Where is it? Sort.", {
      "🧊 In the fridge": ["milk", "cheese", "yogurt", "butter"],
      "🧺 Not in the fridge": ["bread", "rice", "sugar", "pasta"],
    }),
  ]),

  section("Grammar: Countable and uncountable", [
    tip("Simple test: can you say *two…*? *Two apples* ✅ — countable. *Two milks* ❌ — uncountable."),
    table("countable"),
    sort("Countable or uncountable? Sort.", {
      "🔢 Countable": ["apple", "egg", "tomato", "banana", "carrot"],
      "💧 Uncountable": ["milk", "cheese", "rice", "water", "bread"],
    }),
    choose(
      "Choose.",
      "1. There [*is/are] some milk.\n2. There [is/*are] some eggs.\n3. Is there [*any/some] juice? 🧃\n4. There aren't [some/*any] bananas.\n5. I'd like [*an/a] apple.",
    ),
    gaps("Complete with a, an, some or any.", "1. There's [some] cheese.\n2. Are there [any] tomatoes?\n3. I have [an] orange.\n4. There isn't [any] butter.\n5. Can I have [a] banana?"),
  ]),

  section("Reading: The fridge challenge", [
    tip("“Fridge challenge” = cook something only with the food in your fridge. Read the posts and decide who can cook the best dinner."),
    quiz(
      "Read the posts. Choose.",
      [
        { q: "Who has a lot of vegetables?", options: ["*Asel", "Tim", "Dana"] },
        { q: "What isn't there in Tim's fridge?", options: ["*any food — only drinks", "any drinks", "any sauce"] },
        { q: "What can Dana cook?", options: ["*an omelette", "pizza", "a salad"] },
      ],
      {
        read: [
          "## 🧊 #FridgeChallenge — What's in your fridge?",
          "**asel.cooks** 🥦 *My fridge is full! There are some tomatoes, carrots and a big cucumber. There's some chicken and some yogurt. There isn't any bread, but there's some rice. Dinner idea: chicken and rice with vegetables! 🍗🍚*",
          "**tim_student** 😅 *Help! There isn't any food in my fridge. There's some cola, there's a bottle of water and… ketchup. There aren't any eggs. I think it's pizza delivery again! 🍕*",
          "**dana.k** 🍳 *There are six eggs, there's some cheese and some milk. There aren't any vegetables, but there's a tomato. I can make an omelette with cheese and tomato! Easy!*",
        ].join("\n\n"),
      },
    ),
    trueFalse("Read again. True or false?", [
      ["There's some bread in Asel's fridge.", false],
      ["There's some ketchup in Tim's fridge.", true],
      ["There are six eggs in Dana's fridge.", true],
      ["Dana has a lot of vegetables.", false],
    ]),
    text("Talk to your teacher.", "- Whose fridge is like your fridge? 😄\n- Who can cook the best dinner? Why?\n- What can you cook with the food in your fridge right now?"),
  ]),

  section("Video: Fridge tour", [
    video("Watch the first 2–3 minutes of a fridge tour. What food can you see?", "8U0AEymg57s"),
    text("Talk to your teacher.", "- What food is in her fridge? Say 5 things.\n- Is it healthy? Is it like your fridge?"),
    tip("Natural English — pause and ask *What's this? Is there any…? Are there any…?*"),
  ]),

  section("Let's talk: Fridge challenge", [
    text(
      "Your fridge challenge 🧊",
      "Imagine you open your fridge now. Tell your teacher:\n\n*There's some… There are some… There isn't any… There aren't any…*\n\nYour teacher asks: *Is there any cheese? Are there any eggs?* Then together, think of a dinner you can cook! 🍳",
    ),
    text("Talk to your teacher.", "- What's your favorite food? Your least favorite? 😋🤢\n- Who cooks in your family?\n- What food do you always buy? 🛒"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "Uncountable:", options: ["*milk", "apple", "egg"] },
      { q: "There isn't ___ cheese.", options: ["*any", "some", "a"] },
      { q: "a ___ of water", options: ["*bottle", "piece", "loaf"] },
    ]),
    box("Word of the day: snack", "**a snack** 🍿🥜 = a little food between meals.\n\n*I'm hungry! Is there a snack in the fridge?*"),
  ]),

  homework(
    [
      gaps("Write the food.", "1. 🍞 [bread]\n2. 🧀 [cheese]\n3. 🥚 an [egg]\n4. 🥕 a [carrot]\n5. 🍚 [rice]"),
      choose("Choose.", "1. There [*are/is] some apples.\n2. Is there [*any/a] milk?\n3. There [*isn't/aren't] any butter."),
    ],
    "Homework: Vocabulary and grammar",
  ),
  homework(
    [
      video("Watch: countable and uncountable nouns, some and any.", "gjLHkGOzmdY"),
      trueFalse("Correct or not?", [
        ["There are some milk.", false],
        ["Is there any juice?", true],
        ["I have two breads.", false],
        ["There aren't any eggs.", true],
      ]),
    ],
    "Homework: Video",
  ),
  homework(
    [
      write("Write your #FridgeChallenge post: What's in your fridge? What isn't there? What can you cook? (35+ words)", 35, {
        read: "*Example:* There's some milk, some cheese and some yogurt in my fridge. There are some eggs and two tomatoes. There isn't any meat, and there aren't any apples. I can cook an omelette! 🍳",
      }),
      record("Record a “fridge tour” (real or imagined): open your fridge and say what's in it. 🧊", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
