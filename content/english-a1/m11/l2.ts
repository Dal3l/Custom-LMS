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
  picture,
  quiz,
  record,
  section,
  table,
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 11.2 How much is it? — G: How much / How many; a lot of; numbers to 1000, prices. V: shopping, money. Main format: reading (an online shop) + listening + video.
export default lesson("a1-11.2", "How much is it?", () => [
  section("Warm-up: Money facts", [
    box("Today you will…", "- say big numbers and prices: *$350, 1,000 tenge*\n- ask *How much is it? How many…?*\n- talk about shopping, pocket money and presents 🎁"),
    trueFalse("Money: true or false? Guess! 💰", [
      ["Japan's money is the yen.", true],
      ["The UK uses the euro.", false],
      ["Kazakhstan's money is the tenge.", true],
      ["The first coins are more than 2,000 years old.", true],
      ["In the USA, you can pay with dollars only in cash.", false],
    ]),
    picture("Euro coins and banknotes", ["photos/money-euro.jpg"]),
    text("Talk to your teacher.", "- Do you pay with cash, a card or your phone? 💵💳📱\n- What do you buy online?"),
  ]),

  section("Vocabulary: Numbers and money", [
    box(
      "Big numbers",
      "**100** = a hundred / one hundred\n\n**250** = two hundred **and** fifty (🇺🇸 also: two hundred fifty)\n\n**999** = nine hundred and ninety-nine\n\n**1,000** = a thousand / one thousand\n\n**$4.99** = four ninety-nine · **€20** = twenty euros · **5,000 ₸** = five thousand tenge",
    ),
    words("Shopping and money", [
      ["cash — a card", "💵 — 💳", "Can I pay by card?"],
      ["a price", "🏷️", "What's the price?"],
      ["cheap — expensive", "💵 — 💸"],
      ["a sale — on sale", "🔖 lower prices", "These sneakers are on sale!"],
      ["a discount", "➖% 20% off"],
      ["pocket money", "👛 money from your parents every week · 🇺🇸 allowance"],
      ["save money — spend money", "🐷 — 🛍️", "I save my pocket money."],
      ["a present — a gift", "🎁"],
      ["a budget", "📊 how much money you can spend"],
      ["delivery", "📦🚚", "Delivery is free!"],
      ["add to cart", "🛒 in an online shop · 🇬🇧 add to basket"],
    ]),
    match("Match the numbers.", [
      ["150", "a hundred and fifty"],
      ["499", "four hundred and ninety-nine"],
      ["720", "seven hundred and twenty"],
      ["1,000", "a thousand"],
      ["$12.50", "twelve fifty"],
    ]),
    gaps("Write the number.", "1. three hundred and five → [305]\n2. six hundred and sixty → [660]\n3. a thousand → [1000/1,000]\n4. two hundred and eighteen → [218]"),
  ]),

  section("Reading: Online shop", [
    tip("Read the shop page like a real website. Ask: *How much is…? How many… are there? What's on sale?*"),
    quiz(
      "Read the online shop page. Choose.",
      [
        { q: "How much are the headphones now?", options: ["*$60", "$80", "$20"] },
        { q: "How many colors are there for the hoodie?", options: ["*three", "two", "five"] },
        { q: "Delivery is free…", options: ["*for orders over $50", "for every order", "on Monday"] },
        { q: "Which thing is NOT on sale?", options: ["*the hoodie", "the headphones", "the phone case"] },
      ],
      {
        read: [
          "## 🛍️ TeenStyle — online shop",
          "🎧 **Wireless headphones** — was $80 → now **$60** · SALE −25% · ⭐⭐⭐⭐⭐ (420 reviews)",
          "🧥 **Oversized hoodie** — **$35** · 3 colors: black, grey, pink · ⭐⭐⭐⭐",
          "📱 **Phone case with glitter** — was $15 → now **$10** · SALE · ⭐⭐⭐",
          "🎒 **Backpack** — **$45** · only 2 left! · ⭐⭐⭐⭐⭐",
          "📦 **Free delivery for orders over $50!** Delivery takes 3–5 days.",
        ].join("\n\n"),
      },
    ),
    text("Talk to your teacher.", "- You have $100. What do you buy? 🛒\n- Is it a good price for headphones? Is $35 for a hoodie expensive?\n- Do you read reviews before you buy? ⭐"),
  ]),

  section("Grammar: How much? How many?", [
    table("how-much"),
    choose(
      "Choose.",
      "1. How [*many/much] hoodies are there?\n2. How [*much/many] money do you have?\n3. How much [*is/are] the backpack?\n4. How much [is/*are] these sneakers?\n5. I have [*a lot of/a lot] friends.",
    ),
    drag(
      "Complete.",
      "1. How [much] is this cap? — It's $20.\n2. How [many] apples do we need? — Five.\n3. How much [are] the headphones? — $60.\n4. She has a [lot] of shoes! 👟👠",
      ["many of", "is", "lots"],
    ),
    order("Make questions.", ["How much is this T-shirt?", "How many presents do you have?", "How much milk do we need?"]),
  ]),

  section("Listening: A birthday present", [
    ...listening(
      "Listen. Leo and Mia buy a birthday present for their mom online.",
      "**Leo:** Mom's birthday is on Friday! What can we buy? 🎁\n\n**Mia:** How much money do we have?\n\n**Leo:** I have 30 dollars. And you?\n\n**Mia:** I have 25. So our budget is 55 dollars.\n\n**Leo:** Look, a nice bag! How much is it?\n\n**Mia:** It's 70 dollars. That's too expensive. 😕\n\n**Leo:** What about flowers and a book? The book is 18 dollars.\n\n**Mia:** And flowers are 25. That's 43 dollars. Great! And with the rest we can buy a cake! 🎂\n\n**Leo:** How many candles do we need?\n\n**Mia:** Ha-ha, don't ask! 😄",
    ),
    quiz("Listen and choose.", [
      { q: "How much money does Leo have?", options: ["*$30", "$25", "$55"] },
      { q: "How much is the bag?", options: ["*$70", "$43", "$18"] },
      { q: "What do they buy?", options: ["*flowers, a book and a cake", "a bag", "a phone"] },
    ]),
  ]),

  section("Let's talk: Money talk", [
    text(
      "Role-play: in a shop 🛍️",
      "**Student A — a shop assistant:** *Can I help you? It's… dollars. It's on sale!*\n\n**Student B — a customer:** *How much is this…? How much are these…? Can I pay by card?*\n\nUse things in your room as “products” and invent prices! Then change roles.",
    ),
    text(
      "Talk to your teacher.",
      "- Do you get pocket money? What do you spend it on? 👛\n- Do you save money? For what? 🐷\n- What's the best present for a friend? Is an expensive present always the best? 🎁\n- Online shopping or shops — what's better?",
    ),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "How ___ is it?", options: ["*much", "many", "lot"] },
      { q: "350 =", options: ["*three hundred and fifty", "thirty-five", "three thousand fifty"] },
      { q: "lower prices =", options: ["*a sale", "a budget", "delivery"] },
    ]),
    box("Word of the day: haul", "Remember **haul** from module 2? 🛍️ = a video about things you buy.\n\n*My back-to-school haul: $50, five things!* Today you can say the prices too!"),
  ]),

  homework(
    [
      gaps("Write the numbers in words.", "1. 200 → two [hundred]\n2. 1,000 → a [thousand]\n3. 115 → a hundred and [fifteen]"),
      choose("Choose.", "1. How [*many/much] books do you have?\n2. How [*much/many] sugar is there?\n3. How much [*are/is] the sneakers?"),
    ],
    "Homework: Vocabulary and grammar",
  ),
  homework(
    [
      video("Watch: How much and how many when you shop.", "MdFAcHeHNHM"),
      write("You have $100 in the TeenStyle shop. What do you buy? How much is it all together?", 20),
    ],
    "Homework: Video and practice",
  ),
  homework(
    [
      write("Write about money and you: Do you get pocket money? What do you buy? Do you save? What's on your wish list and how much is it? (40+ words)", 40, {
        read: "*Example:* I get 5,000 tenge a week. I spend some money on snacks and the bus. I save the rest for new headphones — they're 30,000 tenge! I don't buy a lot of clothes online, because delivery is expensive. My wish list: headphones, a game and a cap.",
      }),
      record("Record your answer: Describe the best present you have. How much is it, do you think? 🎁", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
