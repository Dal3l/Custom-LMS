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
  table,
  text,
  tip,
  trueFalse,
  words,
  write,
} from "../../kit";

// 11.3 Amazing places — skills lesson with a LONG READING (four unusual places, real facts) and articles with place names (the Andes, but Lake Baikal); a radio travel show; writing about a place; review of module 11. No video in class.
export default lesson("a2-11.3", "Amazing places", () => [
  section("Warm-up: Where in the world?", [
    box("Today you will…", "- read about four places that look like another planet 🪐\n- learn when to say *the* with place names: *the Andes, but Lake Baikal*\n- describe an amazing place you know ✍️"),
    matchPictures("These places are real! Guess: which country? 🌍", [
      ["photos/place-uyuni.jpg", "Bolivia"],
      ["photos/place-zhangjiajie.jpg", "China"],
      ["photos/place-charyn.jpg", "Kazakhstan"],
      ["photos/place-pamukkale.jpg", "Turkey"],
      ["photos/world-baikal.jpg", "Russia"],
    ]),
    text(
      "Talk to your teacher.",
      "- Which place would you like to visit first? Why? ✈️\n- What's the most amazing place you've ever seen with your own eyes?\n- Do you prefer nature or cities when you travel? 🏞️🏙️\n- Is there a place in your country that foreigners don't know about — but should? 🤫",
    ),
    tip("Let the student guess the countries before checking. One is close to home — Charyn Canyon is about 200 km from Almaty. Ask: *Have you been there? Would you go?*"),
  ]),

  section("Vocabulary: Landscapes", [
    words("Landscapes", [
      ["a canyon", "🏜️ a very deep valley with a river"],
      ["a valley", "🏞️ low land between mountains"],
      ["a salt flat", "🧂⬜ a large flat area of salt"],
      ["a cliff — a rock", "🧗 — 🪨"],
      ["a hot spring", "♨️ hot water that comes out of the ground"],
      ["a mountain range", "🏔️🏔️🏔️ a line of mountains, e.g. the Alps"],
      ["a peninsula", "🗺️ land with water on three sides"],
      ["a national park", "🌲🦌 nature that the government protects"],
      ["breathtaking — stunning", "😮✨ very, very beautiful"],
      ["unique", "1️⃣ the only one like it in the world"],
      ["a reflection", "🪞 an image in water or a mirror"],
      ["protect", "🛡️ keep safe", "We must protect these places."],
    ]),
    match("Match the words and the meanings.", [
      ["a canyon", "a very deep valley with a river"],
      ["a hot spring", "hot water from the ground"],
      ["breathtaking", "very, very beautiful"],
      ["unique", "the only one like it"],
      ["a mountain range", "a line of mountains"],
      ["a reflection", "an image in water or a mirror"],
    ]),
    gaps(
      "Complete.",
      "1. The river made a deep [canyon] over millions of years. 🏜️\n2. After the rain, you can see the sky's [reflection] in the water. 🪞\n3. The view from the top was [breathtaking/stunning]! 😮\n4. People swim in the [hot] spring even in winter. ♨️\n5. This place is [unique] — there's nothing like it in the world. 1️⃣\n6. Animals live safely in the national [park]. 🦌\n7. The Alps are a [mountain] range in Europe. 🏔️\n8. Tourists must [protect] nature — don't leave rubbish! 🛡️",
    ),
  ]),

  section("Reading: Four places from another planet", [
    tip("A long text (about 330 words). Read one place at a time. After each one, the student says in one sentence why it's unique. Then: *Which place would you choose for your holiday?*"),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Salar de Uyuni is the largest salt flat in the world.", true],
        ["Salar de Uyuni is a mirror all year.", false],
        ["Zhangjiajie has thousands of stone pillars.", true],
        ["Charyn Canyon is in the Alps.", false],
        ["Pamukkale means “cotton castle” in Turkish.", true],
        ["In Pamukkale, you can walk on the terraces in your shoes.", false],
      ],
      {
        read: [
          "## 🪐 Four places that look like another planet",
          "**🪞 Salar de Uyuni, Bolivia.** High in **the Andes**, at about 3,650 meters, there's a white desert of salt — more than 10,000 km². It's the largest salt flat in the world. In the rainy season, a thin layer of water covers it, and it becomes a giant mirror. You can see the clouds under your feet! Photographers love it — and everyone takes funny photos here, because there's nothing to show how big or small things are. 📸",
          "**🏔️ Zhangjiajie, China.** In this national park in **Hunan**, thousands of tall stone pillars rise out of the forest. Some are more than 200 meters high, and they're often in the clouds. Many people say they inspired the floating mountains in the film *Avatar* — in 2010 the park even gave one pillar a new name: “Avatar Hallelujah Mountain”. 🎬",
          "**🏜️ Charyn Canyon, Kazakhstan.** About 200 kilometers east of **Almaty**, **the Charyn River** made a canyon that is about 150 kilometers long. Its most famous part is called **the Valley of Castles**, because the red rocks look like old castles and towers. People often call it “the little brother of **the Grand Canyon**”. At sunset, the rocks turn orange and pink. 🌅",
          "**♨️ Pamukkale, Turkey.** Its name means “cotton castle” in Turkish. White terraces cover the side of a hill, and warm water from hot springs runs down into small blue pools. It's on the UNESCO World Heritage list. To protect the terraces, visitors have to take off their shoes and walk barefoot. 👣",
          "These places are fragile. Too many tourists, rubbish and cars can damage them — so if you go, travel carefully and leave only footprints! 🌍",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Why do people take funny photos at Salar de Uyuni?", options: ["*Nothing shows how big or small things are.", "The salt is pink.", "There are many animals."] },
      { q: "How high are some pillars in Zhangjiajie?", options: ["*more than 200 meters", "about 20 meters", "about 2,000 meters"] },
      { q: "Why is a part of Charyn Canyon called the Valley of Castles?", options: ["*The rocks look like castles.", "There are real castles there.", "A king lived there."] },
      { q: "What must visitors do at Pamukkale?", options: ["*take off their shoes", "swim in every pool", "come only at night"] },
    ]),
    match("Which place? Match.", [
      ["a giant mirror in the rainy season", "Salar de Uyuni"],
      ["pillars that inspired a famous film", "Zhangjiajie"],
      ["“the little brother of the Grand Canyon”", "Charyn Canyon"],
      ["white terraces and warm pools", "Pamukkale"],
      ["about 3,650 meters high", "Salar de Uyuni"],
      ["about 200 km from Almaty", "Charyn Canyon"],
    ]),
  ]),

  section("Grammar: the Andes, Lake Baikal", [
    quiz("Notice the rule 🔍 Look at the text: “in the Andes… the Charyn River… the Grand Canyon… in Hunan… east of Almaty”. Which is true?", [
      { q: "With rivers and mountain ranges we use…", options: ["*the: the Andes, the Charyn River", "no the: Andes, Charyn River", "a: a Andes"] },
      { q: "With cities and regions we usually use…", options: ["*no the: Almaty, Hunan", "the: the Almaty", "a: an Almaty"] },
      { q: "Lake Baikal or the Lake Baikal?", options: ["*Lake Baikal", "the Lake Baikal", "a Lake Baikal"] },
    ]),
    table("the-places"),
    sort("the or no the? Sort. ✅❌", {
      "✅ the": ["the Nile", "the Alps", "the Pacific", "the Sahara", "the USA"],
      "❌ no the": ["Lake Baikal", "Mount Everest", "Kazakhstan", "Tokyo", "Africa"],
    }),
    choose(
      "Choose.",
      "1. [*The Amazon/Amazon] is in South America.\n2. I'd love to climb [*Mount Fuji/the Mount Fuji].\n3. [*The Alps/Alps] are in Europe.\n4. She lives in [*Almaty/the Almaty].\n5. We swam in [*the Caspian Sea/Caspian Sea].\n6. [*Lake Balkhash/The Lake Balkhash] is in Kazakhstan.\n7. Have you been to [*the UK/UK]?\n8. [*Asia/The Asia] is the biggest continent.",
    ),
    choose(
      "the or – (no article)? Choose.",
      "1. [*The/–] Danube is a river in Europe. 🌊\n2. [*–/The] Paris is the capital of France. 🗼\n3. They crossed [*the/–] Atlantic by boat. ⛵\n4. [*–/The] Mount Elbrus is the highest mountain in Europe. 🏔️\n5. We went skiing in [*the/–] Alps. ⛷️\n6. [*–/The] Lake Kolsai is very beautiful. 🏞️",
    ),
  ]),

  section("Listening: The travel show", [
    ...listening(
      "Listen to a radio travel show. Two travelers recommend places.",
      "**Host:** Welcome to “Go Anywhere”! Today two listeners tell us about the most amazing place they've ever visited. First, Aigerim.\n\n**Aigerim:** Hi! For me it's Charyn Canyon. I went there last spring with my friends. We drove from Almaty early in the morning — it took about three hours. We walked down into the Valley of Castles, and at the bottom there's the Charyn River. It was so quiet! You should go in spring or autumn — in summer it's too hot. 🥵\n\n**Host:** Thank you! And our second traveler, Ben.\n\n**Ben:** Hello! My place is Salar de Uyuni in Bolivia. I went in February, in the rainy season, so it was a mirror. It was breathtaking — the sky was above me and below me! But it's very high, so I had a headache on the first day. My advice: drink a lot of water and bring sunglasses — the white salt is very bright. 😎\n\n**Host:** Great tips! Which would you choose, listeners?",
    ),
    quiz("Listen and choose.", [
      { q: "How long did the drive from Almaty take?", options: ["*about three hours", "about one hour", "about six hours"] },
      { q: "When should you go to Charyn Canyon, says Aigerim?", options: ["*in spring or autumn", "in summer", "in winter"] },
      { q: "When did Ben go to Salar de Uyuni?", options: ["*in February", "in July", "in October"] },
      { q: "What problem did Ben have on the first day?", options: ["*a headache", "a cold", "sunburn"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Aigerim went to Charyn Canyon alone.", false],
      ["There's a river at the bottom of the canyon.", true],
      ["When Ben was there, Salar de Uyuni was a mirror.", true],
      ["Ben says you don't need sunglasses.", false],
      ["Ben advises drinking a lot of water.", true],
    ]),
  ]),

  section("Review: Module 11", [
    choose(
      "Choose.",
      "1. Charyn is the canyon [*which/who] people call “the little brother”.\n2. Pamukkale is a place [*where/which] you walk barefoot.\n3. Ben is the traveler [*who/which] went to Bolivia.\n4. Is this camera [*yours/your]?\n5. [*Nobody/Anybody] lives on the salt flat.\n6. [*The Andes/Andes] are in South America.\n7. I didn't buy [*anything/something] in the shop.\n8. That bag isn't mine. It's [*hers/her].",
    ),
    gaps(
      "Complete.",
      "1. A tourist is a person [who/that] travels for fun. 🧳\n2. A hot spring is a place [where] the water is warm. ♨️\n3. Is this map [yours]? (you) 🗺️\n4. I looked [everywhere], but I couldn't find my passport. 😩\n5. [the] Nile is the longest river in Africa. 🌊\n6. This photo is [ours] — we took it together! (we) 📸\n7. It's a place [which/that] everyone should see. ✨\n8. Is there [anything] to eat? I'm hungry! 🍽️",
    ),
    drag(
      "Complete the travel post.",
      "Last summer we went to [the] Altai Mountains. We stayed with a family [who] had a small farm. Their house was next to a lake [where] we swam every morning. The view was [breathtaking]! I didn't take [anything] with me except my camera. The best photo isn't [mine] — it's my brother's! 📸",
      ["which", "something", "my"],
    ),
  ]),

  section("Writing: An amazing place", [
    box(
      "✍️ Describe a place",
      "- **50+ words**\n- where it is: *It's in… about … km from…* (remember **the**!)\n- what's special: *It's a place where… / which…*\n- your experience or your dream: *I went there… / I'd love to…*\n- advice: *You should go in… Don't forget…*",
    ),
    write(
      "Write about an amazing place in your country (or anywhere) for a travel website. Where is it? What's special about it? When should people go? (50+ words)",
      50,
      {
        read: "*Example start:* Kolsai Lakes are three lakes in the Tian Shan mountains, about 300 km from Almaty. It's a place where…",
      },
    ),
    tip("Check together: *the* with rivers / mountain ranges, no *the* with lakes and cities? At least 2 relative clauses? Practical advice? Read the best sentence aloud. 🌟"),
  ]),

  section("Let's talk: Your amazing place", [
    text(
      "Talk to your teacher.",
      "- Describe a place which you love — your teacher guesses where it is. 🗺️\n- Should famous places limit the number of tourists? Why / why not? 🎟️\n- Would you visit a place only because it looks great on Instagram? 📸\n- What's one place in your country that every foreigner should see? Why?",
    ),
    tip("*If you have time:* “Travel agent” role-play — the student sells a trip to Charyn Canyon (or another place) to you, a very difficult customer: *Is it safe? Is it expensive? Why not the Grand Canyon?* 😄"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "___ Nile", options: ["*the", "–", "a"] },
      { q: "___ Lake Baikal", options: ["*–", "the", "a"] },
      { q: "very, very beautiful =", options: ["*breathtaking", "fragile", "unique"] },
      { q: "hot water from the ground =", options: ["*a hot spring", "a canyon", "a salt flat"] },
    ]),
    box("Word of the day: off the beaten track", "**off the beaten track** 🥾🗺️ = in a place where not many tourists go.\n\n*Charyn Canyon is a little off the beaten track — but it's worth it!*"),
  ]),

  homework(
    [
      gaps(
        "Write the word.",
        "1. 🏜️ a very deep valley with a river: a [canyon]\n2. ♨️ hot water from the ground: a hot [spring]\n3. 😮 very, very beautiful: [breathtaking/stunning]\n4. 1️⃣ the only one like it: [unique]\n5. 🪞 an image in water: a [reflection]\n6. 🛡️ keep safe: [protect]",
      ),
      choose(
        "Choose.",
        "1. [*The Volga/Volga] is the longest river in Europe.\n2. We visited [*Lake Kolsai/the Lake Kolsai].\n3. [*The Himalayas/Himalayas] are in Asia.\n4. My cousin lives in [*Astana/the Astana].\n5. Have you been to [*the Netherlands/Netherlands]?\n6. [*Mount Everest/The Mount Everest] is in Nepal and China.",
      ),
    ],
    "Homework: Vocabulary and grammar",
  ),
  homework(
    [
      trueFalse(
        "Read the review. True or false?",
        [
          ["Dana visited Pamukkale in summer.", false],
          ["She had to walk barefoot.", true],
          ["The water was cold.", false],
          ["She also visited old ruins near the terraces.", true],
          ["Dana thinks you should go early in the morning.", true],
        ],
        { read: "⭐⭐⭐⭐⭐ **Pamukkale — like walking on clouds!** — *We went in October, and the weather was perfect. You have to take off your shoes, so we walked barefoot on the white terraces — it felt soft and warm, because the water from the hot springs is warm! ♨️ Next to the terraces there are old Roman ruins — don't miss them. My advice: go early in the morning, before the tour buses arrive. 🚌* — Dana" },
      ),
    ],
    "Homework: Reading",
  ),
  homework(
    [
      write("Write about the most amazing place you've ever been to. Where is it? When did you go? What was it like? Would you go again? (60+ words)", 60),
      record("Record a 1-minute “travel vlog” about a place you love — real or from your dreams. 🎥", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
