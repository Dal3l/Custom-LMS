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

// 6.1 Made in… — G: the passive in the Present and Past Simple (is made, was invented by…). V: production and materials (grow, produce, ship, cotton, factory…). Say it right: weak was / were in passives. S: describe how something is made. Main format: an inventions quiz + a reading (the journey of a T-shirt, ~380 words) + a "How is it made?" game. Video at home.
export default lesson("b1-6.1", "Made in…", () => [
  section("Warm-up: Who invented it?", [
    box(
      "Today you will…",
      "- find out where things come from and how they're made 🏭\n- use the passive: *It **is made** in… It **was invented** by…* ⚙️\n- explain how your favorite food or thing is made 🍫",
    ),
    quiz("Inventions quiz 💡 Choose the right answer!", [
      { q: "Paper was invented in…", options: ["*China", "Egypt", "Greece"] },
      { q: "The World Wide Web was invented by…", options: ["*Tim Berners-Lee", "Bill Gates", "Steve Jobs"] },
      { q: "Chess probably comes from…", options: ["*India", "Russia", "Spain"] },
      { q: "The telephone was patented in 1876 by…", options: ["*Alexander Graham Bell", "Thomas Edison", "Nikola Tesla"] },
      { q: "The modern pizza comes from…", options: ["*Naples, Italy", "New York, USA", "Paris, France"] },
    ]),
    text(
      "Talk to your teacher.",
      "- Look at your clothes and your phone. Do you know where they were made? Check the labels! 🏷️\n- Which invention could you NOT live without? Who do you think invented it?\n- Do you care where things are made when you buy them? Why / why not?",
    ),
    tip("Read the quiz questions aloud with weak *was* (/wəz/) — the student hears the passive before learning it. After the quiz, ask the student to check the label of something they're wearing: *It was made in…*"),
  ]),

  section("Vocabulary: From field to shop", [
    words("Production", [
      ["grow — grew — grown", "🌱 make plants come up from the ground", "Cotton is grown in India and China."],
      ["produce", "🏭 make, often in large amounts"],
      ["a factory", "🏭 a building where things are made by machines and workers"],
      ["raw materials", "🪨 natural things used to make products (wood, cotton, oil…)"],
      ["cotton — wool — leather", "🌿 from a plant — 🐑 from sheep — 🐄 from animal skin"],
      ["dye", "🎨 change the color of cloth"],
      ["sew — sewed — sewn", "🧵 join cloth with a needle and thread"],
      ["ship", "🚢 send goods, often by sea"],
      ["a label", "🏷️ a small piece of paper or cloth with information"],
      ["recycle", "♻️ make something new from used things"],
      ["handmade", "✋ made by hand, not by machines"],
      ["export — import", "📤 sell to another country — 📥 buy from another country"],
    ]),
    match("Match.", [
      ["grow", "cotton"],
      ["dye", "the cloth blue"],
      ["sew", "a shirt"],
      ["ship", "goods by sea"],
      ["recycle", "plastic bottles"],
      ["read", "the label"],
    ]),
    gaps(
      "Complete with a word from the list above.",
      "1. This scarf is made of [wool] — it comes from sheep. 🐑\n2. My bag is real [leather].\n3. These jeans were [dyed] blue with natural colors.\n4. The [label] says “Made in Bangladesh”. 🏷️\n5. Most of our clothes are [shipped] from Asia.\n6. This bowl isn't from a factory — it's [handmade]. ✋\n7. Kazakhstan [exports] oil and wheat to many countries.\n8. These shoes are made from [recycled] plastic bottles. ♻️",
    ),
    quiz("Choose the right word.", [
      { q: "Wood, cotton and oil are ___.", options: ["*raw materials", "labels", "factories"] },
      { q: "Coffee isn't ___ in Kazakhstan — it's too cold.", options: ["*grown", "sewn", "dyed"] },
      { q: "The car ___ employs 2,000 workers.", options: ["*factory", "label", "material"] },
      { q: "Many countries ___ cheap clothes from Asia.", options: ["*import", "grow", "sew"] },
    ]),
    sort("Natural or made by people? Sort the materials. 🌿🏭", {
      "🌿 natural": ["cotton", "wool", "wood", "silk", "leather"],
      "🏭 made by people": ["plastic", "nylon", "glass", "steel", "polyester"],
    }),
  ]),

  section("Reading: The journey of a T-shirt", [
    tip("A text of ~380 words. First reading: *How many countries does one T-shirt visit?* Then the tasks. Ask the student to highlight every passive (*is grown, was made…*) — the next grammar."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["The T-shirt in the article visited only one country.", false],
        ["Cotton is grown in countries like India, China and the USA.", true],
        ["The cloth is dyed after the T-shirt is sewn.", false],
        ["Most of the sewing is done by machines without people.", false],
        ["According to WWF, a lot of water is used to make one cotton T-shirt.", true],
        ["The writer suggests buying fewer, better clothes.", true],
      ],
      {
        read: [
          "## 👕 The journey of a T-shirt",
          "Look at the label on your T-shirt. It probably says \"Made in Bangladesh\" or \"Made in China\". But that's only part of the story. A simple cotton T-shirt can travel thousands of kilometers before it's sold in your local shop.",
          "**1. The field.** It all starts with cotton, a plant that is grown in warm countries — the biggest producers include India, China and the USA. The cotton is picked, sometimes by machines, sometimes by hand, and then it's cleaned.",
          "**2. The mill.** Next, the cotton is sent to a mill, where it is spun into thread. The thread is then made into cloth. This is often done in a different country from where the cotton was grown.",
          "**3. The dye house.** Then the cloth is dyed. Huge amounts of water and chemicals are used. In fact, according to WWF, about 2,700 liters of water are needed to make just one cotton T-shirt — that's what one person drinks in more than two years! 💧",
          "**4. The factory.** After that, the cloth is shipped to a clothing factory. Bangladesh is one of the biggest clothing exporters in the world. Here, the pieces are cut and sewn together. Machines help, but most of the sewing is still done by people — usually young women who often work long hours for low wages.",
          "**5. The shop.** Finally, the T-shirts are packed, shipped by sea to Europe, America or Asia, and delivered to shops. You buy one for a few dollars… and wear it maybe ten times.",
          "So what can we do? We don't have to stop buying clothes. But we can buy fewer, better things, look after them, buy second-hand, and recycle what we don't wear. Next time you buy a T-shirt, remember: it was probably made by many hands in many countries. 🌍",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What happens at the mill?", options: ["*Cotton is spun into thread and made into cloth.", "The T-shirts are sewn.", "Cotton is grown."] },
      { q: "How much water is needed for one cotton T-shirt, according to WWF?", options: ["*about 2,700 liters", "about 27 liters", "about 270 liters"] },
      { q: "Who usually sews the T-shirts?", options: ["*mostly young women", "robots", "the designers"] },
      { q: "What does the writer suggest?", options: ["*buy fewer, better clothes and recycle", "stop buying clothes", "only buy clothes made in Europe"] },
    ]),
    order(
      "Put the journey of a T-shirt in order.",
      [[
        "Cotton is grown and picked.",
        "It is spun into thread and made into cloth.",
        "The cloth is dyed.",
        "The pieces are cut and sewn together.",
        "The T-shirts are shipped to shops and sold.",
      ].join("\n")],
      "lines",
    ),
  ]),

  section("Grammar: The passive", [
    quiz("Notice the rule 🔍 Look: “Cotton is grown in warm countries.” “The cloth is dyed.” “It was probably made by many hands.”", [
      { q: "What's more important in these sentences?", options: ["*the thing and the action, not who does it", "the person who does it", "the time"] },
      { q: "How do we make the passive?", options: ["*be + 3rd form (is grown, was made)", "have + 3rd form", "be + -ing"] },
      { q: "When do we add “by…”?", options: ["*when it's important to say who did it", "always", "never"] },
    ]),
    table("passive"),
    choose(
      "Active or passive? Choose.",
      "1. Coffee [*is grown/grows] in Brazil and Vietnam. ☕\n2. The Eiffel Tower [*was built/built] in 1889.\n3. My grandma [*made/was made] this scarf by hand.\n4. Millions of phones [*are sold/sell] every day. 📱\n5. The first Harry Potter book [*was written/wrote] by J.K. Rowling.\n6. Tea [*isn't grown/doesn't grow] in the UK, but people drink a lot of it.\n7. Where [*was/did] your bag made?\n8. Our office [*is cleaned/cleans] every evening.",
    ),
    gaps(
      "Complete with the passive (Present or Past Simple).",
      "1. English [is spoken] all over the world. (speak)\n2. This bridge [was built] in 1962. (build)\n3. These cars [are made] in Germany. (make)\n4. The thief [was caught] at the airport. (catch)\n5. Rice [is grown] in many Asian countries. (grow)\n6. The museum [was opened] by the president. (open)\n7. Our letters [are delivered] at 10 every morning. (deliver) ✉️\n8. Where [was] the film shot? — In New Zealand. (shoot)",
    ),
    sort("Present or past passive? Sort. 🕐", {
      "Present (is / are + 3rd form)": ["Chocolate is made from cocoa.", "Cars are produced here.", "The shop is cleaned daily.", "Tea is grown in India."],
      "Past (was / were + 3rd form)": ["The bridge was built in 1962.", "These photos were taken in Paris.", "The phone was invented in 1876.", "The cakes were eaten at once."],
    }),
    drag(
      "Complete the history of chocolate.",
      "Chocolate [is] made from cocoa beans, which [are] grown in hot countries like Ghana and Côte d'Ivoire. Thousands of years ago, cocoa [was] used by people in Central America to make a bitter drink. In the 1500s, it [was] brought to Europe, where sugar [was] added. The first chocolate bar [was] produced in England in the 1840s. Today, millions of tons of chocolate [are] eaten every year! 🍫",
      ["be", "has", "did"],
    ),
    order("Make passive sentences.", [
      "This T-shirt was made in Bangladesh.",
      "Coffee is grown in Brazil.",
      "The museum was opened in 1990.",
      "These phones are produced in China.",
      "Where was your bag made?",
    ]),
  ]),

  section("Say it right: was, were", [
    box(
      "🗣️ Say it right",
      "In passive sentences, **was** and **were** are weak:\n\n**was** → /wəz/ · **were** → /wə/\n\n*It **was** made in China.* → “It **wəz** made in China.”\n*They **were** built in 1900.* → “They **wə** built…”\n\nThe stress goes on the **main verb**: *It was MADE in CHINA.*",
    ),
    quiz("Where's the main stress? Choose.", [
      { q: "It was invented in 1876.", options: ["*inVENted and 1876", "was"] },
      { q: "They were built by hand.", options: ["*BUILT and HAND", "were"] },
      { q: "Coffee is grown in Brazil.", options: ["*GROWN and BraZIL", "is"] },
      { q: "The film was shot in Norway.", options: ["*SHOT and NORway", "was"] },
    ]),
    tip("Read each sentence with weak *was / were* and strong main words. The student repeats, then makes 3 sentences about things in the room: *My phone was made in… This table was bought…*"),
  ]),

  section("Let's talk: How is it made?", [
    text(
      "Game: How is it made? 🍞🧀",
      "Choose a card and explain the process in 1 minute using the passive. Your teacher guesses or asks questions.\n\n🃏 bread · 🃏 cheese · 🃏 plov (or your favorite national dish) · 🃏 a smartphone · 🃏 paper · 🃏 a cup of tea\n\n*First, the… is / are… Then it's… After that… Finally, it's…*\n\nThen your teacher chooses a card for you to guess!",
    ),
    text(
      "Talk to your teacher.",
      "- What's something that is made or grown in your country that you're proud of? 🇰🇿\n- Would you pay more for clothes that were made in good conditions? How much more?\n- Do you buy second-hand clothes? Why / why not? ♻️\n- What's the most interesting factory or workshop you've ever visited (or would like to visit)?",
    ),
    tip("In the game, help with process linkers (*first, then, after that, finally*) and keep the passive: if the student says “They put milk…”, ask *What happens to the milk? — It's heated…*"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "Rice ___ in Asia.", options: ["*is grown", "grows by", "is grow"] },
      { q: "The telephone ___ by Bell.", options: ["*was invented", "invented", "is invented"] },
      { q: "join cloth with a needle =", options: ["*sew", "dye", "ship"] },
      { q: "sell to another country =", options: ["*export", "import", "recycle"] },
    ]),
    box(
      "Phrase of the day: made to last",
      "💪 **made to last** = made very well, so it stays good for a long time.\n\n*My grandfather's watch is 60 years old and still works — it was made to last!*",
    ),
  ]),

  homework(
    [
      video("Watch: present and past passives — 6 Minute Grammar.", "nI5zaB6QL-o"),
      choose(
        "Choose.",
        "1. The Mona Lisa [*was painted/painted] by Leonardo da Vinci.\n2. Spanish [*is spoken/speaks] in many countries.\n3. These cakes [*were made/made] by my sister this morning.\n4. My brother [*fixed/was fixed] the car himself.\n5. Paper [*is made/makes] from wood.\n6. When [*was/did] your house built?\n7. Thousands of emails [*are sent/send] every second.\n8. The match [*was watched/watched] by millions of people.",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      gaps(
        "Complete.",
        "1. This sweater is made of [wool].\n2. Cotton is [grown] in warm countries.\n3. Always read the [label] before you wash new clothes.\n4. These bags are made from [recycled] materials.\n5. Most of our fruit is [imported] from abroad.\n6. This dress was [sewn] by my grandma. 🧵",
      ),
      write("Describe how something from your country is made — a food, a drink or a handmade thing (100+ words). Use the passive: is made, is grown, was invented, is mixed…", 100, {
        read: "*Example:* Baursaks are a traditional food in Kazakhstan. They are made from simple ingredients: flour, milk, eggs, sugar and yeast. 🍩 First, the dough is mixed and left for an hour. Then it's rolled out and cut into small pieces. After that, the pieces are fried in hot oil until they're golden. Baursaks are usually served with tea…",
      }),
      record("Record 1 minute: Choose an object in your room. Where was it made? What is it made of? How do you think it was made? 🎤", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
