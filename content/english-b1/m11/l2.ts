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

// 11.2 Both, either, neither — G: both / either / neither (… and / or / nor), so do I / neither do I. V: the environment and consumer choices; word formation (-ful, -less, -able, re-). S: compare options and choose. Main format: an eco true/false warm-up + a TED-Ed video (which bag should you use?) + a reading (eco choices, ~420 words) + a long listening (Asel and Madina make the bakery greener, ~2.5 min).
// Facts checked: glass can be recycled again and again; plastic bottles can take hundreds of years to break down; only a small part of all plastic ever made has been recycled; trains usually produce much less CO₂ per passenger than planes; bottled water has a much bigger footprint than tap water; paper and cotton bags must be reused many times to be better than a plastic bag.
export default lesson("b1-11.2", "Both, either, neither", () => [
  section("Warm-up: Eco quiz", [
    box(
      "Today you will…",
      "- compare everyday choices: paper or plastic? train or plane? 🌍\n- use both, either, neither: **Neither** option is perfect. ⚖️\n- help Asel make her bakery greener 🥖♻️",
    ),
    trueFalse("Eco quiz 🌱 True or false? Guess first!", [
      ["Glass can be recycled again and again without losing quality.", true],
      ["A plastic bottle can take hundreds of years to break down.", true],
      ["Most of the plastic ever made has been recycled.", false],
      ["A paper bag is always better for the environment than a plastic bag.", false],
      ["A train journey usually produces less CO₂ per passenger than a plane.", true],
    ]),
    text(
      "Talk to your teacher.",
      "- Which answer surprised you most? Why?\n- What's one thing you already do for the environment? And one thing you'd find hard to change? 🌍\n- Who's “greener” in your family — the young people or the older people?",
    ),
    tip("Give the answers briefly after the quiz — especially the surprising one about paper bags: they need a lot of energy and water to make, so they must be reused several times. The video explains it."),
  ]),

  section("Vocabulary: Green choices", [
    words("The environment and choices", [
      ["reusable", "🔁 can be used again and again"],
      ["disposable / single-use", "🗑️ used once and thrown away"],
      ["recycle — recycling", "♻️ make new things from used materials"],
      ["waste", "🗑️ things we throw away; also: use badly", "Don't waste water!"],
      ["the environment", "🌍 nature: air, water, land, animals"],
      ["a carbon footprint", "👣💨 the amount of CO₂ your activities produce"],
      ["sustainable", "🌱 can continue without damaging nature"],
      ["harmful", "☠️ causing damage"],
      ["packaging", "📦 boxes, plastic, paper around things you buy"],
      ["a compromise", "🤝 a solution where everyone gets part of what they want"],
      ["second-hand", "♻️👕 used before by someone else"],
      ["reduce", "📉 make smaller or less", "Reduce, reuse, recycle!"],
    ]),
    match("Match.", [
      ["reduce", "your carbon footprint"],
      ["recycle", "glass bottles"],
      ["avoid", "single-use plastic"],
      ["buy", "second-hand clothes"],
      ["take", "a reusable bag"],
      ["find", "a compromise"],
    ]),
    gaps(
      "Complete with a word from the list above.",
      "1. I always take a [reusable] bottle to the gym. 🔁\n2. Some cafés don't use [disposable] cups anymore — bring your own!\n3. Flying often makes your carbon [footprint] much bigger. ✈️\n4. Too much [packaging] — this tiny phone came in a huge box! 📦\n5. Some chemicals are [harmful] to fish and birds.\n6. Fast fashion isn't [sustainable] — clothes are thrown away too quickly.\n7. Please don't [waste] food — save it for tomorrow.\n8. I buy [second]-hand books — they're cheaper and greener. 📚",
    ),
    sort("Word formation: positive or negative? Sort. ➕➖", {
      "➕ positive": ["useful", "harmless", "reusable", "careful", "recyclable"],
      "➖ negative": ["useless", "harmful", "careless", "wasteful", "unsustainable"],
    }),
  ]),

  section("Video: Which bag should you use?", [
    tip("TED-Ed, about 5 minutes. Before watching: *Plastic, paper or cotton — which bag is the greenest?* Let the student vote, then watch and compare."),
    video("Watch: Which bag should you use? — TED-Ed.", "3_fjEc4aQVk"),
    text(
      "After the video: talk to your teacher.",
      "- Was your guess right? What surprised you?\n- What's the most important thing to do with ANY bag, according to the video?\n- Which bags do you use? Will you change anything? 🛍️",
    ),
  ]),

  section("Reading: Which is greener?", [
    tip("A text of ~420 words with four everyday choices. First reading: *Which choice is the easiest to change for you?* Then the tasks. Notice *both, either, neither* in the text."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["The article says neither paper nor cotton bags are good if you use them only once.", true],
        ["According to the article, both trains and planes have the same carbon footprint.", false],
        ["Bottled water has a bigger footprint than tap water.", true],
        ["The writer says e-readers are always greener than paper books.", false],
        ["The main idea is that using things for a long time is often the greenest choice.", true],
      ],
      {
        read: [
          "## 🌍 Which is greener? Four everyday choices",
          "We make hundreds of small choices every day. Some are greener than others — but the answers aren't always what you'd expect.",
          "**🛍️ Paper or plastic?** Many people think paper bags are the green choice. But making a paper bag needs a lot of water and energy, and a cotton bag needs even more. So neither paper nor cotton is automatically better. Both are good only if you use them many times. The greenest bag? The one you already have — just keep using it!",
          "**🚆 Train or plane?** If you're traveling a few hundred kilometers, you can usually go either by train or by plane. The plane might be faster, but a train journey usually produces much less CO₂ per passenger. For long journeys across oceans, there's often no choice — but for shorter trips, the train is both greener and more relaxing. You can read, work or watch the view instead of waiting at an airport.",
          "**💧 Tap or bottled water?** In many cities, tap water is safe to drink. Bottled water has a much bigger footprint: the plastic, the factory, the trucks… If your tap water is clean, a reusable bottle is both cheaper and greener. If it isn't, a water filter at home is better than buying hundreds of small bottles.",
          "**📚 E-book or paper book?** This one is tricky. An e-reader takes a lot of energy and materials to make. If you read only a few books a year, paper books might be greener — especially second-hand ones or books from a library. If you read a lot, the e-reader can be the better choice. Neither option is perfect; it depends on you.",
          "**So what's the lesson?** Often, the greenest choice isn't buying something new and \"eco\". It's using what you have for longer, sharing, borrowing and repairing. Your grandparents probably knew that already! 👵♻️",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Why isn't a paper bag automatically greener?", options: ["*It needs a lot of water and energy to make.", "It's more expensive.", "It can't be recycled."] },
      { q: "Besides being greener, why is the train good for shorter trips?", options: ["*You can relax, read or work.", "It's always faster.", "It's always cheaper."] },
      { q: "What should you do if your tap water isn't clean?", options: ["*use a water filter at home", "buy bottled water every day", "drink juice instead"] },
      { q: "When might paper books be greener than an e-reader?", options: ["*if you read only a few books a year", "if you read a lot", "never"] },
    ]),
  ]),

  section("Grammar: both, either, neither", [
    quiz("Notice the rule 🔍 Look: “Neither paper nor cotton is automatically better.” “Both are good only if you use them many times.” “You can go either by train or by plane.”", [
      { q: "“both” means…", options: ["*the two things", "one of the two", "none of the two"] },
      { q: "“either… or…” means…", options: ["*one or the other", "both", "neither"] },
      { q: "“neither… nor…” means…", options: ["*not one and not the other", "both", "one of them"] },
    ]),
    table("both-either-neither"),
    choose(
      "Choose the right word.",
      "1. [*Both/Either] my parents recycle everything.\n2. You can pay [*either/both] by card or in cash.\n3. [*Neither/Both] of the bags is perfect.\n4. I like [*both/either] tea and coffee. ☕🍵\n5. We can go [*either/neither] today or tomorrow — you choose.\n6. [*Neither/Either] Leo nor Dana has a car.\n7. A: I don't eat meat. B: [*Neither do I./So do I.]\n8. A: I love hiking. B: [*So do I!/Neither do I!]",
    ),
    gaps(
      "Complete with both, either, neither, and, or, nor, so.",
      "1. [Both] trains and buses are greener than cars.\n2. You can take [either] the paper bag or the cotton one.\n3. [Neither] of my brothers likes vegetables. 🥦\n4. She speaks both Kazakh [and] English.\n5. We can meet either on Friday [or] on Saturday.\n6. Neither plastic [nor] paper is perfect.\n7. A: I recycle glass. B: [So] do I!\n8. A: I don't have a car. B: [Neither] do I.",
    ),
    drag(
      "Complete Asel's notes for the bakery.",
      "Bags: we can use [either] paper bags or cotton bags. [Neither] option is perfect, but [both] are better if customers reuse them. Cups: [neither] plastic [nor] paper cups — customers bring their own! Bread: we can give old bread to [either] the food bank or the animal shelter. 🥖",
      ["and", "so", "too"],
    ),
    order("Make sentences.", [
      "Both options are expensive.",
      "Neither of them came to the party.",
      "You can choose either tea or coffee.",
      "Neither plastic nor paper is perfect.",
      "I don't drive. Neither do I.",
    ]),
  ]),

  section("Listening: A greener bakery", [
    tip("A long listening — about 2.5 minutes. Asel wants to make her bakery greener; Madina, who's a designer, helps her. First listen: *What three changes do they decide on?* Second listen: the details."),
    ...listening(
      "Listen. Asel and Madina talk about making the bakery greener.",
      "**Asel:** Madina, thanks for coming! I need your help. Some customers have complained about all the plastic in my bakery. I want to change, but I don't know where to start.\n\n**Madina:** OK, let's look at the biggest things first. What do you use most?\n\n**Asel:** Bags, definitely. We give out about three hundred plastic bags a week. I was thinking of switching to paper.\n\n**Madina:** Hmm. Paper isn't always greener — it takes a lot of energy to make. What if you offered both? Small paper bags for one or two items, and cotton bags with your logo that people can buy and reuse. I could design them for you! 🎨\n\n**Asel:** Oh, I love that! And if customers bring their own bag, I could give them a small discount.\n\n**Madina:** Perfect. What about cups for coffee?\n\n**Asel:** We use paper cups with plastic lids. Neither the cups nor the lids can be recycled here.\n\n**Madina:** Then you could either sell reusable cups or give a discount to people who bring their own. Some cafés do both.\n\n**Asel:** Let's do both too! And there's one more problem: food waste. At the end of the day, we usually have ten or fifteen loaves left. I hate throwing them away.\n\n**Madina:** There's a food bank near the station which collects bread every evening. Or there's an app where people can buy unsold food at half price.\n\n**Asel:** I could use either… or both! Half the bread for the food bank, half on the app.\n\n**Madina:** And one more thing — delivery. Do you deliver cakes?\n\n**Asel:** Yes, and each cake comes in a plastic box with lots of tape.\n\n**Madina:** Either use cardboard boxes, which can be recycled, or ask regular customers to return the boxes for a small discount. Both ideas save money in the end.\n\n**Asel:** I like the second one. My regular customers are mostly neighbors, so it's easy for them to bring the boxes back. And what about the coffee grounds? We throw away a whole bag every day.\n\n**Madina:** My grandma uses coffee grounds in her garden! Plants love them. You could put a box by the door with a sign: \"Free for gardeners\".\n\n**Asel:** That's brilliant. Saule will be my first customer! 😄\n\n**Madina:** Great. So: cotton bags, reusable cups, no wasted bread, returnable boxes and free coffee for plants.\n\n**Asel:** And what about you? Are you going to pay for your coffee today? 😄\n\n**Madina:** Only if it's in a reusable cup!",
    ),
    quiz("Listen and choose.", [
      { q: "How many plastic bags does the bakery give out a week?", options: ["*about 300", "about 30", "about 3,000"] },
      { q: "What will Madina design?", options: ["*cotton bags with the bakery's logo", "a new website", "paper cups"] },
      { q: "What's the problem with the coffee cups?", options: ["*Neither the cups nor the lids can be recycled there.", "They're too expensive.", "Customers don't like them."] },
      { q: "What will Asel do with the leftover bread?", options: ["*give half to the food bank and sell half on an app", "throw it away", "eat it herself"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Some customers complained about the plastic in the bakery.", true],
      ["Madina thinks paper bags are always greener.", false],
      ["Customers who bring their own bag will get a discount.", true],
      ["The food bank is near the station.", true],
      ["Asel will choose only one solution for the bread.", false],
      ["Madina will pay for her coffee only if it's in a reusable cup.", true],
      ["Regular customers will be able to return the cake boxes for a discount.", true],
    ]),
    gaps(
      "Complete what they said. Listen again if you need.",
      "1. Madina: What if you offered [both]?\n2. Asel: [Neither] the cups nor the lids can be recycled here.\n3. Madina: You could [either] sell reusable cups or give a discount.\n4. Madina: Some cafés do [both].\n5. Madina: There's a food bank [which] collects bread every evening.\n6. Asel: I could use either… or [both]!",
    ),
  ]),

  section("Let's talk: Tough choices", [
    text(
      "Discuss: Which would you choose? ⚖️",
      "For each pair, say what's good and bad about **both** options — then choose **either** one, or say **neither**!\n\n- 🚗 a car OR 🚲 a bike + public transport\n- 👕 cheap new clothes OR 👔 fewer, better second-hand clothes\n- 🏖️ one long holiday by plane OR ⛰️ several short trips by train\n- 📱 a new phone every two years OR 🔧 repairing your old one\n\n*Both… are… / Neither… is… / I'd choose either… or… / So do I! / Neither do I!*",
    ),
    tip("Ask follow-up questions and agree / disagree with the student using *So do I / Neither do I / Really? I don't.* Push for reasons and compromises."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "___ my sisters live in Almaty. (the two)", options: ["*Both", "Either", "Neither"] },
      { q: "You can sit ___ here or there.", options: ["*either", "neither", "both"] },
      { q: "A: I'm not hungry. B: ___", options: ["*Neither am I.", "So am I.", "Either am I."] },
      { q: "can be used again and again =", options: ["*reusable", "disposable", "harmful"] },
    ]),
    box(
      "Phrase of the day: Reduce, reuse, recycle",
      "♻️ **Reduce, reuse, recycle** — the “three Rs” of the environment, in order of importance:\n\n1️⃣ **Reduce** — buy less\n2️⃣ **Reuse** — use things again\n3️⃣ **Recycle** — when you can't do 1 or 2",
    ),
  ]),

  homework(
    [
      video("Watch: how to use both, either and neither.", "E6sthu2Cgw8"),
      choose(
        "Choose.",
        "1. [*Both/Either] of my friends are vegetarian.\n2. You can have [*either/both] cake or ice cream — not both!\n3. [*Neither/Both] of the films was good. 😴\n4. She can speak [*both/either] French and Spanish.\n5. A: I don't like spiders. B: [*Neither do I./So do I.]\n6. A: I love summer. B: [*So do I./Neither do I.]\n7. [*Neither/Either] Asel nor Madina wanted plastic bags.\n8. We can go [*either/neither] by train or by bus.",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      gaps(
        "Complete.",
        "1. Take a [reusable] bag when you go shopping.\n2. Flying increases your carbon [footprint].\n3. Too much plastic [packaging] is bad for the environment.\n4. These chemicals are [harmful] to animals.\n5. Don't [waste] water — turn off the tap!\n6. I buy [second]-hand clothes.",
      ),
      write("Write a short article (100+ words): “Three small changes that make a big difference.” Suggest three green changes for families in your city. Use both / either / neither at least three times.", 100, {
        read: "*Example:* Many people think that saving the planet is difficult. But small changes can help. First, you can go to work either by bike or by public transport — both are cheaper and greener than driving. 🚲 Second, neither plastic nor paper bags are perfect, so take a reusable bag every time you go shopping. Third…",
      }),
      record("Record 1 minute: Compare two options — e.g. train or plane for your next trip. Say what's good about both and what you'd choose. 🎤", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
