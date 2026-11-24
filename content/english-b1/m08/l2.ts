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

// 8.2 Real or imaginary? — G: Zero, First and Second Conditional together; unless, as long as, in case. V: shopping and saving (a discount, second-hand, haggle, a refund…). S: negotiate and agree on conditions. Main format: a superstitions warm-up + a listening (Laura buys a second-hand bike from Daniyar, ~1 min) + a market role-play. Video at home.
export default lesson("b1-8.2", "Real or imaginary?", () => [
  section("Warm-up: Superstitions", [
    box(
      "Today you will…",
      "- tell real possibilities from dreams: *If it **rains**, we**'ll**… / If I **lived** by the sea, I**'d**…* 🌧️🏖️\n- use *unless, as long as, in case* 🔑\n- haggle and agree on a deal 🤝",
    ),
    match("Old superstitions in English-speaking countries. Match the beginnings and the endings. 🍀", [
      ["If you break a mirror,", "you'll have seven years of bad luck."],
      ["If a black cat crosses your path,", "it's bad luck."],
      ["If you find a four-leaf clover,", "you'll have good luck."],
      ["If you walk under a ladder,", "it brings bad luck."],
      ["If your palm itches,", "you'll get some money soon."],
      ["If you spill salt,", "throw some over your left shoulder."],
    ]),
    text(
      "Talk to your teacher.",
      "- Do people in your country believe any of these? What other superstitions do you know? 🧂\n- Are you superstitious at all? Do you have a lucky number, a lucky item or a ritual before an exam? 🍀\n- If you found a four-leaf clover, what would you wish for?",
    ),
    tip("Share a superstition from your culture. Notice that most superstitions use *If + present, will / present* — that's today's grammar. Don't explain yet."),
  ]),

  section("Vocabulary: Shopping and saving", [
    words("Shopping and saving", [
      ["a discount", "🏷️ a lower price", "They gave me a 20% discount."],
      ["second-hand", "♻️ used before by someone else", "a second-hand bike"],
      ["haggle", "🗣️💵 argue about the price to make it lower"],
      ["a deal", "🤝 an agreement, often about money", "It's a deal!"],
      ["in good condition", "✨ not damaged, works well"],
      ["a refund", "💰 money back"],
      ["on sale", "🛍️ cheaper than usual for a short time"],
      ["overpriced", "💸 too expensive for what it is"],
      ["worth (it)", "✅ good enough for the price", "It's expensive, but it's worth it."],
      ["a budget", "📊 the amount of money you plan to spend"],
      ["a receipt", "🧾 a paper that shows what you paid"],
      ["pay in cash — pay by card", "💵 — 💳"],
    ]),
    match("Match.", [
      ["get", "a discount"],
      ["haggle", "over the price"],
      ["make", "a deal"],
      ["stay within", "your budget"],
      ["pay", "by card"],
      ["keep", "the receipt"],
    ]),
    gaps(
      "Complete with a word from the list above.",
      "1. I bought a [second]-hand sofa — it was half the price of a new one. 🛋️\n2. At the market, you can [haggle] — never pay the first price!\n3. This phone is [overpriced] — the same one is cheaper online.\n4. The jacket is old, but it's in good [condition].\n5. Everything in the shop is on [sale] this week — 30% off! 🛍️\n6. Our [budget] for the holiday is $1,000.\n7. It was expensive, but it was [worth] it — I use it every day.\n8. OK, 50 dollars? It's a [deal]! 🤝",
    ),
    quiz("Choose the right word.", [
      { q: "Can I pay by ___, or only in cash?", options: ["*card", "receipt", "deal"] },
      { q: "The shoes broke after a day, so I asked for a ___.", options: ["*refund", "discount", "budget"] },
      { q: "Students get a 10% ___ at this café.", options: ["*discount", "condition", "receipt"] },
      { q: "Keep the ___ in case you want to return it.", options: ["*receipt", "budget", "deal"] },
    ]),
  ]),

  section("Listening: The bike deal", [
    tip("About 1 minute. Daniyar sells his old bike to Laura to save money for Korea. First listen: *What's the final price?* Second listen: notice the conditionals and *unless / as long as / in case*."),
    ...listening(
      "Listen. Laura wants to buy Daniyar's second-hand bike.",
      "**Laura:** Hi! Are you Daniyar? I'm Laura — I messaged you about the bike.\n\n**Daniyar:** Hi! Yes, here it is. It's in really good condition. I'm selling it because I'm saving up for my studies in Korea.\n\n**Laura:** It looks great. How much do you want for it?\n\n**Daniyar:** Sixty thousand tenge.\n\n**Laura:** Hmm. That's a bit more than my budget. If you sold it for fifty, I'd take it today.\n\n**Daniyar:** Fifty is too low. If I sell it for fifty, my dad will say I'm a terrible businessman! 😄 How about fifty-five?\n\n**Laura:** Fifty-five… OK, as long as you include the lock and the lights.\n\n**Daniyar:** Deal! But I'll keep the helmet, unless you need one too.\n\n**Laura:** No, I have a helmet. Can I try it first, in case there's a problem with the brakes?\n\n**Daniyar:** Of course. If the brakes don't work, I'll give you your money back. They're fine, though — I fixed them last week.\n\n**Laura:** Perfect. Wow, it's so light! With a bike like this, I can ride to work every day. I'll take it! Can I pay by card?\n\n**Daniyar:** Cash would be better, but card is OK. Here's my number in case you have any questions.\n\n**Laura:** Thanks! Good luck in Korea!",
    ),
    gaps(
      "Complete what they said. Listen again if you need.",
      "1. Laura: If you sold it for fifty, I'd [take] it today.\n2. Daniyar: If I sell it for fifty, my dad [will] say I'm a terrible businessman!\n3. Laura: OK, as [long] as you include the lock and the lights.\n4. Daniyar: I'll keep the helmet, [unless] you need one too.\n5. Laura: Can I try it first, in [case] there's a problem with the brakes?\n6. Daniyar: If the brakes don't work, I'll give you your money [back].",
    ),
    quiz("Listen and choose.", [
      { q: "Why is Daniyar selling the bike?", options: ["*He's saving up for his studies in Korea.", "It's broken.", "He's bought a car."] },
      { q: "What was Daniyar's first price?", options: ["*60,000 tenge", "50,000 tenge", "55,000 tenge"] },
      { q: "What's the final price?", options: ["*55,000 tenge", "50,000 tenge", "60,000 tenge"] },
      { q: "What does Laura get with the bike?", options: ["*the lock and the lights", "a helmet", "a new seat"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["The bike is in bad condition.", false],
      ["Laura's budget was less than 60,000 tenge.", true],
      ["Laura needs a helmet.", false],
      ["Daniyar fixed the brakes last week.", true],
      ["Daniyar prefers card to cash.", false],
    ]),
  ]),

  section("Grammar: Real or imaginary?", [
    quiz("Notice the rule 🔍 Look: “If I sell it for fifty, my dad will say…” (Daniyar) · “If you sold it for fifty, I'd take it.” (Laura)", [
      { q: "Daniyar thinks selling for 50 is…", options: ["*a real possibility → If + present, will", "impossible", "a fact that's always true"] },
      { q: "Laura uses “If you sold… I'd…” because…", options: ["*she's imagining it — it's less likely", "it happened in the past", "it's always true"] },
      { q: "“If you heat ice, it melts.” This is…", options: ["*always true → If + present, present", "imaginary", "a plan"] },
    ]),
    table("conditionals"),
    choose(
      "Real (1st) or imaginary (2nd)? Choose.",
      "1. If it [*rains/rained] tomorrow, we'll stay at home. (The forecast says it might.)\n2. If I [*had/have] wings, I'd fly to work. 🪽\n3. If you [*study/studied] hard, you'll pass the exam.\n4. If I [*were/am] the president, I'd make public transport free.\n5. If you heat water to 100°C, it [*boils/would boil].\n6. If we [*leave/left] now, we'll catch the bus.\n7. If I [*spoke/speak] Chinese, I'd work in Shanghai.\n8. If she [*calls/called] me tonight, I'll tell her the news.",
    ),
    gaps(
      "Complete with the right form: zero, first or second conditional.",
      "1. If you mix red and yellow, you [get] orange. (get — always true)\n2. If I see Leo tomorrow, I [will tell/'ll tell] him. (tell — real plan)\n3. If I [lived] in Paris, I'd visit the Louvre every week. (live — a dream)\n4. If you [don't hurry/do not hurry], you'll miss the train. (not hurry)\n5. If I [were] taller, I'd play basketball. (be)\n6. If it [snows] this weekend, we'll go skiing. ⛷️ (snow)\n7. Plants [die] if you don't water them. (die — always true)\n8. What would you do if you [lost] your passport abroad? (lose)",
    ),
    sort("Real possibility or just a dream? Sort. 🎯💭", {
      "🎯 real (1st conditional)": ["If I finish early, I'll call you.", "If it's sunny, we'll have a picnic.", "If you need help, I'll come.", "If the price is OK, I'll buy it."],
      "💭 dream (2nd conditional)": ["If I were a millionaire, I'd buy an island.", "If I could fly, I'd never take the bus.", "If I lived on Mars, I'd be lonely.", "If cats could talk, they'd complain all day."],
    }),
  ]),

  section("Grammar: unless, as long as, in case", [
    table("unless-in-case"),
    choose(
      "Choose the right word.",
      "1. I won't go [*unless/in case] you come with me.\n2. Take a jacket [*in case/unless] it gets cold. 🧥\n3. You can borrow my laptop [*as long as/unless] you're careful with it.\n4. We'll miss the flight [*unless/as long as] we leave now.\n5. Write down my number [*in case/as long as] you get lost.\n6. I'll lend you the money [*as long as/in case] you pay me back next week.\n7. [*Unless/In case] you study, you won't pass.\n8. Bring some cash [*in case/unless] they don't take cards.",
    ),
    drag(
      "Complete the market conversation.",
      "Seller: This carpet is 40,000 tenge.\nKenji: Hmm. If you [gave] me a discount, I'd buy two.\nSeller: OK — 35,000 each, as [long] as you buy two today.\nKenji: Deal! Can I pay by card, or should I go to an ATM [in] case you don't take cards?\nSeller: Card is fine. And if you [come] back next week, I'll give you a free cushion! 🛋️\nKenji: Great — I [will] come back, [unless] I've spent all my money! 😄",
      ["give", "much", "would", "if"],
    ),
    order("Make sentences.", [
      "Take an umbrella in case it rains.",
      "I won't go unless you come too.",
      "You can stay as long as you're quiet.",
      "If I lived by the sea, I'd swim every day.",
      "If it rains tomorrow, we'll stay at home.",
    ]),
  ]),

  section("Let's talk: Let's make a deal", [
    text(
      "Role-play: At the market 🛍️",
      "One of you is a seller, the other is a buyer. Haggle until you agree on a price!\n\n🧥 a vintage leather jacket — 30,000 tenge\n🎸 a second-hand guitar — 80,000 tenge\n🚲 a bike in good condition — 60,000 tenge\n🪑 an old wooden chair — 15,000 tenge\n\n**Use:** *If you gave me a discount, I'd… I'll take it as long as… I won't pay more than… unless… It's a deal!* 🤝\n\nThen swap roles.",
    ),
    text(
      "Talk to your teacher.",
      "- Do you like haggling? Where is it normal to haggle in your country, and where is it rude?\n- Do you buy second-hand things? Which things would you never buy second-hand? ♻️\n- What do you always take with you when you travel, just in case?\n- What would you do if you had to live on half your budget for a month?",
    ),
    tip("Be a tough seller first — make the student work for a discount with conditions. Then swap. Note good conditional sentences and 2–3 mistakes (especially *will* after *if / unless / in case*)."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "If it ___ tomorrow, we'll cancel the picnic.", options: ["*rains", "will rain", "rained"] },
      { q: "If I ___ a dog, I'd call it Rex.", options: ["*had", "have", "will have"] },
      { q: "Take some water ___ you get thirsty.", options: ["*in case", "unless", "as long as"] },
      { q: "argue about the price =", options: ["*haggle", "refund", "budget"] },
    ]),
    box(
      "Phrase of the day: a steal",
      "🦹💰 **It's a steal!** = it's so cheap, it's almost like stealing it.\n\n*A leather jacket for 10 dollars? That's a steal!*",
    ),
  ]),

  homework(
    [
      video("Watch: “unless” vs “as long as” — English in a Minute.", "Or_Zm7QdSgc"),
      choose(
        "Choose.",
        "1. If you [*press/pressed] this button, the machine starts.\n2. If I [*see/saw] Dana tomorrow, I'll give her the book.\n3. If I [*were/am] you, I'd buy the cheaper one.\n4. We'll go to the beach [*unless/in case] it rains.\n5. Take your passport [*in case/as long as] they ask for ID.\n6. You can use my car [*as long as/unless] you fill it with petrol.\n7. If she [*had/has] more money, she'd travel more.\n8. I [*won't/wouldn't] tell anyone if you tell me your secret. 🤫",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      gaps(
        "Complete.",
        "1. I bought a [second]-hand car — it's ten years old but runs well.\n2. Everything is on [sale] — 50% off!\n3. At the market you can [haggle] over the price.\n4. This hotel is [overpriced] — the rooms are tiny!\n5. Keep the [receipt] in case you need to return it.\n6. It's expensive, but it's [worth] it.",
      ),
      write("Write a message to a friend (100+ words) about plans for the weekend. Use the first conditional for real plans (If the weather is good, we'll…), the second conditional for a dream (If we had more money, we'd…), and unless / in case / as long as.", 100),
      record("Record 1 minute: What would you do if you lived on a desert island for a month? What would you take with you, just in case? 🏝️", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
