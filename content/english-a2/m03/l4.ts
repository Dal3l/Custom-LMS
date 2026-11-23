import {
  box,
  choose,
  gaps,
  homework,
  lesson,
  listening,
  match,
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

// 3.4 Practical English: Shopping for clothes — the fitting room, sizes, returning things; It looks / feels great on you. Role-play. No new grammar tenses.
export default lesson("a2-3.4", "Practical: Shopping for clothes", () => [
  section("Warm-up: What's your shopping style?", [
    box("Today you will…", "- shop for clothes: *Can I try it on? Have you got it in a bigger size?*\n- say *It looks great! It feels comfortable.* 👗👟\n- return something to a shop"),
    picture("A clothes shop", ["photos/shop-clothes.jpg"], "A clothes shop in Mallorca, Spain 🇪🇸"),
    text(
      "Quiz: What's your shopping style? 🛍️",
      "Answer and explain — there are no wrong answers!\n\n1. You need new jeans. Do you go to a shop or buy them online? 💻🏬\n2. In a shop, do you know what you want, or do you look at everything for hours? ⏳\n3. A T-shirt is 70% off. Do you buy it, or do you think: “Do I really need it?” 🤔\n4. Your friend asks: “Does it look good?” It doesn't. What do you say? 😅\n\nMostly the first answers? You're a fast shopper ⚡. Mostly the second? You're a slow, careful shopper 🐢.",
    ),
    tip("Answer the questions too and compare: *I'm a slow shopper — I look at everything for hours!* Ask about the student's best bargain or worst buy."),
  ]),

  section("Vocabulary: In a clothes shop", [
    words("Shopping for clothes", [
      ["a size: small, medium, large", "S · M · L · XL", "What size are you? — Medium."],
      ["try on", "👕➡️🪞", "Can I try it on?"],
      ["a fitting room", "🚪🪞 🇺🇸 a dressing room"],
      ["it fits", "✅ the size is right", "These jeans fit perfectly."],
      ["it suits you", "😍 it looks good on you (color, style)"],
      ["too tight — too loose", "🤏 too small — 🎈 too big"],
      ["on sale — a discount", "🏷️ cheaper than usual — 20% off"],
      ["a bargain", "🤑 something very cheap and good"],
      ["the checkout — a cashier", "💳 where you pay — the person there"],
      ["a receipt", "🧾 the paper that shows you paid"],
      ["return — a refund", "↩️ take it back — 💵 you get your money back"],
      ["exchange", "🔁 change it for another size or color"],
    ]),
    match("Match.", [
      ["try", "it on"],
      ["a fitting", "room"],
      ["on", "sale"],
      ["pay by", "card"],
      ["a size", "bigger"],
      ["get a", "refund"],
    ]),
    quiz("Choose.", [
      { q: "The size is right. It…", options: ["*fits", "suits", "tries"] },
      { q: "The color looks great on you. It…", options: ["*suits you", "fits you", "sells you"] },
      { q: "Too small:", options: ["*too tight", "too loose", "too long"] },
      { q: "The paper that shows you paid:", options: ["*a receipt", "a refund", "a discount"] },
      { q: "You get your money back. You get…", options: ["*a refund", "an exchange", "a bargain"] },
    ]),
    gaps(
      "Complete.",
      "1. Can I [try] these jeans on? 👖\n2. Where's the fitting [room], please? 🚪\n3. It's too small. Have you got it in a [bigger] size?\n4. What [size] are you? — Medium.\n5. This dress is 50% off — it's a [bargain]! 🤑\n6. I'd like to [return] this shirt. ↩️\n7. Have you got the [receipt]? 🧾\n8. Can I [exchange] it for a smaller size? 🔁",
    ),
  ]),

  section("Useful phrases: It looks great!", [
    table("looks-feels"),
    sort("Customer or shop assistant? Who says it? Sort. 🛍️👩‍💼", {
      "🛍️ Customer": ["Can I try it on?", "Have you got it in black?", "I'll take it.", "Can I pay by card?"],
      "👩‍💼 Shop assistant": ["What size are you?", "The fitting rooms are over there.", "Do you have the receipt?", "Would you like a bag?"],
    }),
    choose(
      "Choose.",
      "1. That jacket [*looks/looks like] great on you!\n2. You look [*like/as] a rock star in that jacket! 🎸\n3. These shoes feel very [*comfortable/comfortably].\n4. 70% off? That sounds [*amazing/amazingly]!\n5. The jeans are the right size. They [*fit/suit] perfectly.\n6. Red really [*suits/fits] you — it's your color!\n7. It's too [*tight/loose]. I need a bigger size.\n8. This perfume [*smells/sounds] nice.",
    ),
    gaps(
      "Complete the phrases.",
      "1. Excuse me, can I [try] this on?\n2. Have you got it [in] a smaller size?\n3. How much [is] this T-shirt?\n4. I'll [take] it, thanks!\n5. Can I pay [by] card?\n6. I'd like to return this. It doesn't [fit].",
    ),
  ]),

  section("Dialogue: In the fitting room", [
    tip("Read the dialogue with the student: you are the shop assistant. Then change roles."),
    trueFalse(
      "Read the dialogue. True or false?",
      [
        ["Mia wants to try on a jacket.", true],
        ["The first jacket was too loose.", false],
        ["They have the jacket in a large size.", true],
        ["The jacket is on sale.", true],
        ["Mia pays in cash.", false],
      ],
      {
        read: [
          "## 🛍️ In the shop",
          "**Mia:** Excuse me, can I try on this jacket?",
          "**Assistant:** Of course. What size are you?",
          "**Mia:** Medium, I think.",
          "**Assistant:** Here you are. The fitting rooms are over there, on the left.",
          "**Mia:** Thanks! … Hmm, it's a bit tight. Have you got it in a large?",
          "**Assistant:** Let me check… Yes, here you are.",
          "**Mia:** That's better! It fits perfectly. How do I look?",
          "**Assistant:** It looks great on you! And it's on sale today — 30% off.",
          "**Mia:** Really? That sounds amazing! I'll take it. Can I pay by card?",
          "**Assistant:** Sure. Would you like a bag?",
          "**Mia:** No, thanks — I'll wear it now! 😄",
        ].join("\n\n"),
      },
    ),
    order(
      "Put the dialogue in order.",
      ["Can I help you?\nYes, have you got these jeans in a smaller size?\nWhat size are you?\nSmall, please.\nHere you are. The fitting room is on the right."],
      "lines",
    ),
  ]),

  section("Listening: I'd like to return this", [
    ...listening(
      "Listen. Dana takes some shoes back to a shop.",
      "**Assistant:** Hello! Can I help you?\n\n**Dana:** Hi! I'd like to return these shoes, please. I bought them on Saturday.\n\n**Assistant:** Oh, what's the problem with them?\n\n**Dana:** They look nice, but they don't feel comfortable. They're too tight. I walked for ten minutes and my feet hurt! 😣\n\n**Assistant:** I'm sorry about that. Have you got the receipt?\n\n**Dana:** Yes, here it is.\n\n**Assistant:** Thank you. Would you like a refund, or would you like to exchange them for a bigger size?\n\n**Dana:** Hmm… Have you got them in a 39?\n\n**Assistant:** Let me check… Yes, we have. Do you want to try them on?\n\n**Dana:** Yes, please! … Oh, these feel much better. I'll exchange them, thank you!\n\n**Assistant:** No problem. Enjoy your new shoes!",
    ),
    quiz("Listen and choose.", [
      { q: "When did Dana buy the shoes?", options: ["*on Saturday", "yesterday", "last month"] },
      { q: "What's the problem?", options: ["*They're too tight.", "They're too loose.", "She doesn't like the color."] },
      { q: "What size does Dana want?", options: ["*39", "37", "40"] },
      { q: "What does Dana do in the end?", options: ["*She exchanges the shoes.", "She gets a refund.", "She keeps the old shoes."] },
    ]),
    gaps(
      "Listen again. Complete the phrases.",
      "1. I'd like to [return] these shoes, please.\n2. They don't feel [comfortable].\n3. Have you got the [receipt]?\n4. Would you like a [refund]?\n5. Have you got them [in] a 39?\n6. Do you want to [try] them on?",
    ),
  ]),

  section("Video: Shopping for clothes", [
    video("Watch an easy shopping conversation. What does the customer buy? What size?", "kdQYKdbAiFs"),
    text("Talk to your teacher.", "- What phrases from today's lesson do you hear? 👂\n- Is the shop assistant helpful? Why?"),
  ]),

  section("Let's talk: Shop role-play", [
    text(
      "Role-play: the clothes shop 🎭",
      "**1. Buying.** The customer wants a hoodie, jeans or sneakers. Ask about the size, the color and the price; try it on; it's too tight / too loose; ask for another size; buy it.\n\n**2. Returning.** The customer comes back the next day: *I'd like to return this… It doesn't fit / I don't like the color…* The assistant asks for the receipt and offers a refund or an exchange.\n\nThen change roles! Use *It looks / feels… Can I…? Have you got…?* 🛍️",
    ),
    text("Talk to your teacher.", "- Do you like shopping for clothes? Why / why not? 🛍️\n- What was your best bargain? 🤑\n- Do you return things to shops? What was the last thing?\n- Online or in a shop: where do you buy clothes? Why? 💻🏬"),
    tip("*If you have time:* “Fashion police” 🚓 — show 3 outfits (photos from a shop website); the student says what looks good, what doesn't and what suits the teacher! *That jacket would look great on you!*"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "Can I ___ it on?", options: ["*try", "fit", "wear"] },
      { q: "That jacket looks ___ on you!", options: ["*great", "greatly", "like great"] },
      { q: "You get your money back:", options: ["*a refund", "a receipt", "a size"] },
      { q: "🇺🇸 dressing room = 🇬🇧 …", options: ["*fitting room", "living room", "changing table"] },
    ]),
    box("Word of the day: haul", "**a haul** 🛍️🛍️ = a lot of things you bought — and a popular video type: people show what they bought.\n\n*She posted a huge clothing haul on TikTok.*"),
  ]),

  homework(
    [
      gaps(
        "Complete.",
        "1. S, M, L — these are [sizes]. 👕\n2. It's too small. It's too [tight]. 🤏\n3. You try on clothes in a [fitting/dressing] room. 🚪\n4. 20% off — the shoes are on [sale]. 🏷️\n5. Keep your [receipt] — you need it to return things. 🧾\n6. I want my money back. I'd like a [refund]. 💵",
      ),
      choose(
        "Choose.",
        "1. These jeans [*fit/suit] well — the size is right.\n2. Green [*suits/fits] you!\n3. The cake tastes [*delicious/deliciously].\n4. You look [*like/as] your mom in that photo!\n5. Have you got it [*in/on] blue?\n6. I'd like to [*exchange/change for] it for a bigger size.",
      ),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      video("Watch another shopping conversation.", "ad8a2BiXulw"),
      write("Write 4 phrases from the video that you can use in a shop.", null),
    ],
    "Homework: Video",
  ),
  homework(
    [
      trueFalse(
        "Read the online review. True or false?",
        [
          ["Aru bought the hoodie online.", true],
          ["The hoodie was too big.", false],
          ["Returning it was easy.", true],
          ["She got a refund.", false],
          ["She likes the new color.", true],
        ],
        {
          read: "⭐⭐⭐⭐ **Easy returns!** — *I ordered a hoodie online in size S, but it was too tight. 😕 Returning it was very easy: I printed the label and took it to the post office. I didn't want a refund — I exchanged it for an M in a different color. The gray one looks much better on me than the pink! The only problem: delivery took 10 days.* — Aru",
        },
      ),
    ],
    "Homework: Reading",
  ),
  homework(
    [
      write("Write an email to an online shop. You want to return or exchange something: what is it, when did you buy it, what's the problem, what do you want? (40+ words)", 40, {
        read: "*Example:* Dear Style Shop, I bought a black jacket (size M) on your website on 3 March. It looks nice, but it's too tight. Could I exchange it for a size L, please? If you don't have it, I'd like a refund. Thank you! Best wishes, Dana Seitova",
      }),
      record("Record a “haul” video or voice message: show or describe 3 clothes you have. Say how they look and feel. (1 minute)", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
