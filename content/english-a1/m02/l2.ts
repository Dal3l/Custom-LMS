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
  quiz,
  record,
  picture,
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

// 2.2 These are my favorites — G: these / those, plural nouns, the. V: colors, big / small, new / old. Main format: listening (an unboxing).
export default lesson("a1-2.2", "These are my favorites", () => [
  section("Warm-up: Favorite things", [
    box("Today you will…", "- say colors and *big / small, new / old*\n- talk about two or more things: *these, those*\n- show and describe your favorite things"),
    tip("Quick review of 2.1: point to things in the room — *What's this? What's that?* The student answers *It's a… / It's an…*"),
    picture("Colors everywhere!", ["photos/warm-colors.jpg"], "Umbrellas over a street in Hungary. How many colors do you see? 🌈"),
    quiz("Color quiz! Guess. 🎨", [
      { q: "🇯🇵 The flag of Japan is red and…", options: ["*white", "blue", "green"] },
      { q: "Pikachu ⚡ is…", options: ["*yellow", "pink", "blue"] },
      { q: "Shrek is…", options: ["*green", "purple", "orange"] },
      { q: "🇰🇿 The flag of Kazakhstan is blue and…", options: ["*yellow", "red", "black"] },
      { q: "🦓 A zebra is black and…", options: ["*white", "brown", "gray"] },
    ]),
    tip("Let the student guess — the colors come next in the vocabulary."),
    text("Talk to your teacher.", "- What's your favorite thing? Why is it special for you? 👟🎧\n- What's an old thing you love? Why? 🧸\n- Do you watch unboxing videos? Are they fun or boring? 📦"),
  ]),

  section("Vocabulary: Colors and describing words", [
    words("Colors", [
      ["black", "⚫", "My phone is black."],
      ["white", "⚪"],
      ["red", "🔴"],
      ["blue", "🔵"],
      ["green", "🟢"],
      ["yellow", "🟡"],
      ["orange", "🟠"],
      ["purple", "🟣"],
      ["pink", "🩷"],
      ["brown", "🟤"],
      ["gray", "🩶 🇬🇧 grey"],
      ["What color is it?", "❓ 🇬🇧 What colour is it?", "What color is your bag? — It's blue."],
    ]),
    words("Describing words", [
      ["big", "🐘", "My backpack is big."],
      ["small", "🐭", "My earbuds are small."],
      ["new", "✨ you buy it today", "This is my new phone."],
      ["old", "🕰️ you have it for a long time", "My laptop is old."],
      ["favorite", "❤️ you like it more than the others · 🇬🇧 favourite", "These are my favorite sneakers."],
      ["cool", "😎 very good, nice"],
      ["sneakers", "👟 🇬🇧 trainers"],
      ["a hoodie", "🧥 a warm top with a hood"],
      ["a case", "📱 a phone case — it's on your phone"],
    ]),
    match("Match the opposites.", [
      ["big", "small"],
      ["new", "old"],
      ["black", "white"],
    ]),
    quiz("What color is it? Choose.", [
      { q: "🍌 A banana is…", options: ["*yellow", "blue", "purple"] },
      { q: "🌲 A tree is…", options: ["*green", "pink", "gray"] },
      { q: "☁️ A rain cloud is…", options: ["*gray", "orange", "red"] },
      { q: "🔴 + ⚪ =", options: ["*pink", "brown", "green"] },
    ]),
    gaps("Complete with big, small, new or old.", "1. 🐘 An elephant is [big].\n2. 🐭 A mouse is [small].\n3. ✨ I buy a phone today. It's [new].\n4. 🕰️ My grandpa's watch is very [old]."),
  ]),

  section("Listening: Unboxing", [
    tip("Read the script with the student first, or read it to them. Then do the tasks. You can show the script with the eye button."),
    ...listening(
      "Listen. Mia opens her new things. What are they?",
      "**Mia:** Hi, guys! Welcome back to my channel! Today is an unboxing day! 📦\n\n**Mia:** OK, what's this? Oh, wow! It's a new phone case. It's purple — my favorite color!\n\n**Mia:** And these are… earbuds! They're white and very small. So cute!\n\n**Mia:** What are those? There, on the table. Oh, they're my new sneakers! They're white and green. I love them!\n\n**Mia:** And the last box… It's a hoodie. The hoodie is big and black. Perfect for winter!\n\n**Mia:** These are my favorite things this month. What are your favorites? Write in the comments! Bye! 👋",
    ),
    quiz("Listen and choose.", [
      { q: "The phone case is…", options: ["*purple", "pink", "black"] },
      { q: "The earbuds are…", options: ["black and big", "*white and small", "green"] },
      { q: "The sneakers are…", options: ["*white and green", "red", "black and white"] },
      { q: "The hoodie is…", options: ["small and blue", "*big and black", "new and pink"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Mia's favorite color is purple.", true],
      ["The sneakers are on the table.", true],
      ["The hoodie is for summer.", false],
    ]),
    text("Talk to your teacher.", "- What do you think: are Mia's things cool? 😎\n- What's in your perfect unboxing box? 🎁\n- What color is your favorite hoodie or T-shirt?"),
  ]),

  section("Grammar: these / those, plural nouns", [
    tip("Hold one pen: *this pen*. Hold two pens: *these pens*. Point at things far away: *that window, those windows*."),
    table("these-those"),
    choose(
      "Choose.",
      "1. 👇 [*These/Those] are my keys.\n2. 👉 [These/*Those] sneakers are cool!\n3. 👇 What are [*these/those]? — They're earbuds.\n4. 👉 [That/*Those] are my headphones, on the bed.\n5. 👇 [*This/These] is my new hoodie.",
    ),
    gaps("Make it plural: this → these, that → those.", "1. this phone → [these] phones\n2. that bag → [those] bags\n3. this key → [these] keys\n4. that hoodie → [those] hoodies"),
    table("plurals"),
    sort("Sort the plurals.", {
      "+ s": ["phones", "keys", "bags", "laptops"],
      "+ es": ["glasses", "watches", "boxes", "brushes"],
      "y → ies": ["batteries", "cities"],
      "different": ["people", "children", "men", "women"],
    }),
    gaps("Write the plural.", "1. one box → two [boxes]\n2. one watch → three [watches]\n3. one child → two [children]\n4. one person → five [people]\n5. one battery → two [batteries]\n6. one woman → three [women]"),
  ]),

  section("Grammar: the", [
    table("a-the"),
    choose(
      "a / an or the? Choose.",
      "1. I have [*a/the] new phone. [a/*The] phone is black.\n2. This is [*an/the] umbrella. [an/*The] umbrella is red.\n3. Look at [a/*the] sun! ☀️\n4. I'm from [a/*the] USA.",
    ),
    drag(
      "Complete Mia's post.",
      "📦 I have [a] new hoodie. [The] hoodie is black. And I have [an] old cap. [The] cap is red.",
      ["those", "these"],
    ),
  ]),

  section("Let's talk: Show and tell", [
    text(
      "Show and tell 📸",
      "Show 3 favorite things (or photos of them). Say:\n\n*This is my… It's new / old. It's black / blue…*\n\n*These are my… They're…*\n\nYour teacher asks: *What color is it? Is it new?*",
    ),
    text(
      "Talk to your teacher.",
      "- What's your favorite thing from a shop or an app this year? 🛍️\n- Big phone or small phone? Why?\n- New things or old things — what do you like more?\n- What color is popular with your friends?",
    ),
    tip("*If you have time:* a guessing game — the student describes a thing in the room (*It's small. It's black. It's on the table.*), you guess. Then change roles."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "👇 ___ are my earbuds.", options: ["*These", "This", "That"] },
      { q: "one child → two ___", options: ["*children", "childs", "childes"] },
      { q: "one box → two ___", options: ["*boxes", "boxs", "boxies"] },
      { q: "I have a cat. ___ cat is white.", options: ["*The", "A", "An"] },
    ]),
    box("Word of the day: haul", "**haul** = a video or a post about things you buy 🛍️\n\n*Watch my back-to-school haul!*"),
  ]),

  homework(
    [
      match("Match the plural.", [
        ["one person", "two people"],
        ["one child", "two children"],
        ["one man", "two men"],
        ["one watch", "two watches"],
        ["one city", "two cities"],
      ]),
      gaps("What color is it?", "1. 🍌 [yellow]\n2. 🍅 [red]\n3. 🐸 [green]\n4. 🍇 [purple]"),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      choose(
        "this, that, these or those?",
        "1. 👇 [*These/Those] are my new sneakers.\n2. 👉 Look at [these/*those] cars!\n3. 👇 [*This/These] is my hoodie.\n4. 👉 [*That/Those] is my school.",
      ),
      order("Put the words in order.", ["These are my favorite sneakers.", "Those people are my friends.", "The phone case is purple."]),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      trueFalse(
        "Read the comment under Mia's video. True or false?",
        [
          ["Leo's headphones are new.", false],
          ["His sneakers are red.", true],
          ["His favorite things are two cats.", false],
        ],
        { read: "💬 **leo_games:** Cool video, Mia! 😎 These are my favorite things: my old headphones (they're black and very big!), my red sneakers and my small white laptop. And my cat, of course! 🐱" },
      ),
      video("Watch the video: this, that, these and those.", "V1KaU2vDvf0"),
      video("Fun! Watch a real unboxing. What color is the new phone?", "VdNl4J3iRZA"),
    ],
    "Homework: Reading and video",
  ),
  homework(
    [
      write("Write a post: My favorite things. Describe 3 things — color, big / small, new / old. (30+ words)", 30, {
        read: "*Example:* These are my favorite things. This is my phone. It's new and it's blue. These are my headphones. They're big and white. And this is my hoodie. The hoodie is old, but I love it!",
      }),
      record("Record a mini unboxing: show 2–3 things and describe them. “What's this? It's a… It's…”", 90),
    ],
    "Homework: Writing and speaking",
  ),
]);
