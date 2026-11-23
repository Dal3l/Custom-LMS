import {
  box,
  choose,
  drag,
  gaps,
  homework,
  lesson,
  listening,
  match,
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

// 9.1 How much sugar? — a READING-focused lesson: two longer texts (hidden sugar; three food diaries). G: much / many, a lot of, a few / a little. V: food and nutrition. Say it right: lost syllables (vegetable, chocolate). No listening or video in class.
export default lesson("a2-9.1", "How much sugar?", () => [
  section("Warm-up: Guess the sugar!", [
    box("Today you will…", "- read about hidden sugar and real food diaries 📖\n- ask *How much…? How many…?* and use *a few, a little, a lot of*\n- talk honestly about what you eat 🍎🍫"),
    quiz("How many teaspoons of sugar? Guess! 🥄 (1 teaspoon = about 4 g)", [
      { q: "🥤 a can of cola (330 ml)", options: ["*about 9", "about 2", "about 20"] },
      { q: "🧃 a glass of orange juice (250 ml)", options: ["*about 5", "0 — it's fruit!", "about 15"] },
      { q: "🍅 a tablespoon of ketchup", options: ["*about 1", "0", "about 5"] },
      { q: "📋 The World Health Organization says it's better to eat less than ___ a day.", options: ["*about 6 teaspoons (25 g)", "about 20 teaspoons", "about 50 teaspoons"] },
    ]),
    tip("Let the student guess first — most people are shocked by the juice and the ketchup. Then ask: *How many teaspoons do you think you eat a day?* The first text explains the numbers."),
    text(
      "Talk to your teacher.",
      "- Do you have a sweet tooth? What's your favorite sweet thing? 🍫🍰\n- What did you eat and drink yesterday? Was it healthy?\n- Is it easy or difficult to eat healthily where you live? Why? 🥗",
    ),
  ]),

  section("Reading: Hidden sugar", [
    tip("A longer text (about 250 words). First reading: just the main idea — *Where does hidden sugar hide?* Second reading: details and numbers. The student can highlight new words."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["The WHO says adults should eat less than 25 g of free sugar a day.", true],
        ["A can of cola has about 35 g of sugar.", true],
        ["Fruit juice doesn't have any sugar.", false],
        ["Some salty foods also have sugar.", true],
        ["The writer says you must never eat sugar.", false],
        ["Food labels can help you find hidden sugar.", true],
      ],
      {
        read: [
          "## 🥄 Hidden sugar: where is it?",
          "Most of us know that cakes, sweets and chocolate have a lot of sugar. But did you know that many “healthy” foods have a lot of sugar too? Experts call it **hidden sugar**.",
          "The World Health Organization (WHO) says adults should eat less than 10% of their daily energy as “free sugar” — and less than 5% is even better. That's about **25 grams, or 6 teaspoons, a day**. It sounds like a lot, but it isn't.",
          "**🥤 Drinks.** A 330 ml can of cola has about 35 grams of sugar — that's 9 teaspoons, more than the whole day's limit! Many people don't know that fruit juice is also a problem. A glass of orange juice can have 5 teaspoons. It's better to eat an orange — it has fiber, and you can't eat four oranges as fast as you can drink a glass of juice! 🍊",
          "**🍅 Sauces.** Ketchup, barbecue sauce and some salad dressings have a lot of sugar. A tablespoon of ketchup has about a teaspoon of sugar.",
          "**🥣 “Healthy” breakfasts.** Some cereals, fruit yogurts and granola bars have as much sugar as a cookie. 🍪",
          "So what can you do? You don't have to stop eating sweets. Just read the labels: look for words like *sugar, syrup, honey* or words ending in *-ose* (glucose, fructose). Drink water, not juice. And enjoy your chocolate — a little, not a lot! 😉",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What is “hidden sugar”?", options: ["*sugar in foods that don't seem sweet", "sugar under the table", "sugar in cakes"] },
      { q: "Why is an orange better than orange juice?", options: ["*It has fiber, and you eat it more slowly.", "It's cheaper.", "It has more sugar."] },
      { q: "Which word on a label can mean sugar?", options: ["*fructose", "protein", "salt"] },
      { q: "What's the writer's advice about chocolate?", options: ["*Enjoy a little.", "Never eat it.", "Eat it instead of juice."] },
    ]),
    gaps(
      "Find the words in the text.",
      "1. sugar you can't see: [hidden] sugar\n2. the information on a food package: a [label]\n3. the maximum: the daily [limit]\n4. 🥣 a breakfast food with milk: [cereal/cereals]\n5. 🍅 ketchup and barbecue sauce are [sauces]\n6. a part of fruit that is good for your stomach: [fiber/fibre]\n7. “glucose” and “fructose” end in [-ose/ose]\n8. ⚡ what food gives your body: [energy]",
    ),
  ]),

  section("Vocabulary: Food and nutrition", [
    words("Food and nutrition", [
      ["have a sweet tooth", "🍫😋 love sweet food"],
      ["a snack — snack (on)", "🥜 a little food between meals"],
      ["junk food — fast food", "🍔🍟 unhealthy, quick food"],
      ["home-cooked", "🍲 made at home"],
      ["fresh — frozen", "🥬 — 🧊"],
      ["vegetables — fruit", "🥦🥕 — 🍎🍌 (fruit — usually uncountable)"],
      ["protein", "🍗🥚🫘 in meat, eggs, beans"],
      ["fat — fatty", "🧈 — 🍟 with a lot of fat"],
      ["salt — salty", "🧂"],
      ["a portion", "🍽️ the amount of food for one person"],
      ["skip a meal", "⏭️🍽️ not eat breakfast, lunch or dinner"],
      ["go on a diet", "🥗⚖️ eat less to lose weight"],
    ]),
    sort("Countable or uncountable? Sort. 🍎🥛", {
      "🍎 countable": ["apple", "egg", "cookie", "vegetable", "banana"],
      "🥛 uncountable": ["sugar", "water", "bread", "rice", "cheese"],
    }),
    match("Match.", [
      ["have a sweet", "tooth"],
      ["skip", "breakfast"],
      ["go on", "a diet"],
      ["junk", "food"],
      ["a big", "portion"],
      ["home-cooked", "meals"],
    ]),
  ]),

  section("Grammar: How much? How many?", [
    quiz("Notice the rule 🔍 Look at the text: “a lot of sugar… many healthy foods… a little, not a lot… How many teaspoons?” Which is true?", [
      { q: "We say How many with…", options: ["*things we can count: teaspoons, apples", "things we can't count: sugar, water", "all nouns"] },
      { q: "We say How much with…", options: ["*things we can't count: sugar, juice", "things we can count: eggs", "people"] },
      { q: "a little sugar / a few cookies means…", options: ["*some, but not much / not many", "a lot", "zero"] },
    ]),
    table("quantifiers"),
    choose(
      "Choose.",
      "1. How [*much/many] sugar do you eat?\n2. How [*many/much] eggs do we need?\n3. I drink [*a lot of/many] water every day.\n4. There's only [*a little/a few] milk left. 🥛\n5. I ate [*a few/a little] cookies with my tea. 🍪\n6. We don't have [*much/many] time.\n7. She doesn't eat [*many/much] vegetables.\n8. Can I have [*a little/a few] salt, please? 🧂",
    ),
    gaps(
      "Complete with much, many, a few or a little.",
      "1. How [much] water do you drink a day? 💧\n2. How [many] cups of coffee do you have? ☕\n3. I only had [a few] chips — just five! 🍟\n4. Add [a little] honey to your tea. 🍯\n5. There aren't [many] apples in the fridge. 🍎\n6. I don't eat [much] meat. 🥩\n7. We have [a few] minutes before the lesson. ⏰\n8. He puts [a little] sugar in his coffee — just half a teaspoon. 🥄",
    ),
    drag(
      "Complete the conversation.",
      "A: Let's make pancakes! 🥞 How [many] eggs do we have?\nB: Only [a] few — three, I think.\nA: That's enough. And how [much] milk?\nB: Not [much]. About a glass.\nA: OK. We need [a] little sugar and some flour.\nB: We have a [lot] of flour — two big bags!\nA: Great. And do we have [any] strawberries? 🍓\nB: Yes, [a] few. I'll wash them!",
      ["many of", "lots", "some"],
    ),
  ]),

  section("Reading: What I eat in a day", [
    tip("Three food diaries. The student reads and decides: *Who eats the healthiest? Who has the most hidden sugar? What advice would you give each person?*"),
    match(
      "Read the food diaries. Who…? Match.",
      [
        ["skips breakfast", "Leo"],
        ["drinks a lot of juice", "Madina"],
        ["eats a lot of protein", "Arman"],
        ["eats junk food at night", "Leo"],
        ["has fruit yogurt for breakfast", "Madina"],
        ["cooks at home", "Arman"],
      ],
      {
        read: [
          "## 🍽️ What I eat in a day",
          "**🎮 Leo, 20, student.** *I usually skip breakfast — I don't have time. At university I have a few energy drinks and a sandwich. Dinner is pasta with a lot of ketchup. 🍝 Then I play games until 2 a.m. and eat chips and a little chocolate… OK, a lot of chocolate. 😅*",
          "**🧘‍♀️ Madina, 28, office manager.** *I try to eat healthily! For breakfast I have a fruit yogurt and a big glass of orange juice. 🧃 For lunch — a salad. In the afternoon I drink two more juices and eat a granola bar. I don't eat much meat. I don't understand why I'm always hungry!*",
          "**🏋️ Arman, 35, trainer.** *I cook at home almost every day. Breakfast: eggs, bread and a little cheese. Lunch: chicken or beans with rice and a lot of vegetables. 🥦 I drink a lot of water — about two liters. I don't eat many sweets, but on Sundays I have a big piece of my mom's cake! 🍰*",
        ].join("\n\n"),
      },
    ),
    trueFalse("Read again. True or false?", [
      ["Leo has dinner with a lot of ketchup.", true],
      ["Madina eats a lot of meat.", false],
      ["Madina has a lot of hidden sugar in her day.", true],
      ["Arman drinks about two liters of water.", true],
      ["Arman never eats cake.", false],
    ]),
    text("Talk to your teacher.", "- Who has the healthiest day? Who has the most hidden sugar? Why?\n- Give one piece of advice to Leo, Madina and Arman. *You should… You shouldn't…* 💡\n- Whose day is the most like yours? 😅"),
  ]),

  section("Say it right: vegetable", [
    box(
      "🗣️ Say it right: lost syllables",
      "Some words are shorter than they look — a syllable disappears!\n\n**vegetable** → /ˈvedʒtəbəl/ “**VEJ**-ta-bl” (not ve-ge-ta-ble)\n\n**chocolate** → /ˈtʃɒklət/ “**CHOK**-let”\n\n**interesting** → “**IN**-tres-ting” · **comfortable** → “**KUMF**-ta-bl”",
    ),
    quiz("How many syllables do we say? Choose.", [
      { q: "vegetable", options: ["*3", "4", "2"] },
      { q: "chocolate", options: ["*2", "3", "4"] },
      { q: "interesting", options: ["*3", "4", "5"] },
      { q: "different", options: ["*2", "3", "4"] },
    ]),
    tip("Say the words the “spelling way” and the real way — the student chooses the real one. Then the student says: *I eat a lot of vegetables and a little chocolate* — fast and natural."),
  ]),

  section("Let's talk: You and your food", [
    text(
      "Talk to your teacher.",
      "- How many meals do you have a day? Do you ever skip meals? Why? ⏭️\n- How much water do you drink? How many cups of tea or coffee? ☕\n- What's your favorite snack? Is it healthy? 🥜🍫\n- What's a typical family dinner in your home? Who cooks? 🍲\n- Have you ever been on a diet? Did it work? 😅",
    ),
    text(
      "Game: Fridge check 🧊",
      "Imagine your fridge right now. Your teacher asks: *Is there any milk? How much? How many eggs are there? Are there any vegetables?*\n\nAnswer with *a lot of, a few, a little, not much, not many, no…*\n\nThen ask about your teacher's fridge! Whose fridge is healthier? 🏆",
    ),
    tip("*If you have time:* “Hidden sugar detective” 🔍 — if the student has any packaged food at home, look at the label together on camera and find the sugar."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "How ___ sugar?", options: ["*much", "many", "a few"] },
      { q: "I ate ___ cookies.", options: ["*a few", "a little", "much"] },
      { q: "love sweet food =", options: ["*have a sweet tooth", "skip a meal", "go on a diet"] },
      { q: "chocolate has ___ syllables when we say it.", options: ["*2", "3", "4"] },
    ]),
    box("Word of the day: a sugar rush", "**a sugar rush** 🍭⚡ = a short time of high energy after eating a lot of sugar… and then you feel tired! 😴\n\n*The kids ate a lot of cake at the party — now they have a sugar rush!*"),
  ]),

  homework(
    [
      gaps(
        "Complete.",
        "1. I love cakes and sweets — I have a sweet [tooth]. 🍫\n2. I didn't have time, so I [skipped] breakfast. ⏭️\n3. Burgers and fries are [junk] food. 🍔\n4. Meat, eggs and beans have a lot of [protein]. 🥚\n5. Chips are very [salty]. 🧂\n6. This [portion] is too big for one person! 🍽️",
      ),
      choose(
        "Choose.",
        "1. How [*many/much] bananas did you buy?\n2. There's [*a little/a few] coffee left.\n3. I don't drink [*much/many] juice.\n4. She has [*a few/a little] good friends.\n5. We ate [*a lot of/many] pizza!\n6. How [*much/many] does it cost?",
      ),
    ],
    "Homework: Vocabulary and grammar",
  ),
  homework(
    [
      video("Watch: much, many or a lot of? (English with Lucy)", "uQIuZ6YJ760"),
      ...listening(
        "Listen. Dana and Arman are at the supermarket.",
        "**Dana:** OK, we're making dinner for six people. How much rice do we need?\n\n**Arman:** About a kilo. And how many tomatoes?\n\n**Dana:** Let's take eight. And a few onions — three is enough.\n\n**Arman:** Do we need any cheese?\n\n**Dana:** Just a little — for the salad. Oh, and we need a lot of water. It's hot today!\n\n**Arman:** And dessert? Can I get some ice cream? 🍦\n\n**Dana:** Not too much! Remember the hidden sugar article? 😄\n\n**Arman:** One small box. OK, OK!",
      ),
      quiz("Listen and choose.", [
        { q: "How many people are coming to dinner?", options: ["*six", "eight", "three"] },
        { q: "How much rice do they need?", options: ["*about a kilo", "a little", "two kilos"] },
        { q: "How many onions do they take?", options: ["*three", "eight", "one"] },
        { q: "What does Arman want for dessert?", options: ["*ice cream", "cake", "chocolate"] },
      ]),
    ],
    "Homework: Video and listening",
  ),
  homework(
    [
      write("Write your food diary for yesterday: what did you eat and drink, how much / how many? Then give yourself one piece of advice. (60+ words)", 60, {
        read: "*Example:* Yesterday I had a lot of coffee — four cups! ☕ For breakfast I ate a few eggs and a little bread. I skipped lunch because I was busy. For dinner my mom made plov — I had a big portion. 🍛 In the evening I ate a lot of chocolate while I watched a series. 😅 My advice: I shouldn't skip lunch, and I should drink more water.",
      }),
      record("Record your answer: Do you eat healthily? What would you like to change about your diet? (1 minute)", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
