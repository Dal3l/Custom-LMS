import {
  box,
  choose,
  gaps,
  homework,
  lesson,
  listening,
  match,
  order,
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

// 11.4 Practical English: Ordering food — I'd like… / Can we have the check? (UK bill), a menu, a delivery app; role-play "waiter — guest". No new grammar.
export default lesson("a1-11.4", "Practical: Ordering food", () => [
  section("Warm-up: Eat out or order in?", [
    box("Today you will…", "- read a menu 📋\n- order food: *I'd like… Can I have…?*\n- ask for the check 🧾\n- order food in a delivery app 📱🛵"),
    text(
      "Talk to your teacher.",
      "- Do you often eat in restaurants or cafés? 🍽️\n- Do you order food in apps? Which app? 📱\n- What do you usually order? 🍕🍣🍔\n- Restaurant or delivery — what's better? Why?",
    ),
    tip("Quick review of 5.4 (the coffee shop): *Can I have… / I'd like… / For here or to go?* — the student remembers the phrases."),
  ]),

  section("Vocabulary: At a restaurant", [
    words("At a restaurant", [
      ["a waiter — a waitress", "🧑‍🍳 🇺🇸 also: a server"],
      ["the menu", "📋"],
      ["a starter — a main course — a dessert", "🥗 — 🍝 — 🍰 🇺🇸 appetizer · entrée"],
      ["a table for two", "🍽️👥", "A table for two, please."],
      ["Are you ready to order?", "📝 the waiter asks"],
      ["I'd like…", "🙂 = I want… (polite)", "I'd like the chicken soup, please."],
      ["the check — the bill", "🧾 🇺🇸 check · 🇬🇧 bill"],
      ["a tip", "💵 extra money for the waiter"],
      ["delicious", "😋"],
      ["a delivery app", "📱🛵"],
      ["a courier", "🚴 brings your food"],
      ["My order is late.", "⏰😕"],
    ]),
    table("restaurant"),
    match("Match the waiter's questions and the answers.", [
      ["Are you ready to order?", "Yes. I'd like the pasta, please."],
      ["Anything to drink?", "Can I have an orange juice?"],
      ["How is everything?", "Delicious, thank you!"],
      ["Would you like a dessert?", "No, thanks. Can we have the check, please?"],
    ]),
  ]),

  section("Dialogue: At the restaurant", [
    tip("Read the dialogue with the student: you are the waiter. Then change roles."),
    gaps(
      "Read the dialogue. Complete the order.",
      "🍽️ Table for: [two/2]\n🥗 Aigerim's starter: [tomato soup/soup]\n🍝 Arman's main course: [chicken burger/burger]\n🥤 Drinks: two [lemonades]\n💰 Total: $[38]",
      {
        read: [
          "## 🍽️ At “Green Garden”",
          "**Waiter:** Good evening! A table for two?",
          "**Aigerim:** Yes, please.",
          "**Waiter:** Here's the menu. Are you ready to order?",
          "**Aigerim:** Yes. I'd like the tomato soup and the vegetable pasta, please.",
          "**Arman:** And I'd like the chicken burger with fries. 🍔",
          "**Waiter:** And to drink?",
          "**Arman:** Can we have two lemonades, please?",
          "**…later…**",
          "**Waiter:** How is everything?",
          "**Aigerim:** Delicious, thank you! 😋",
          "**Waiter:** Would you like a dessert?",
          "**Arman:** No, thanks. Can we have the check, please?",
          "**Waiter:** Sure. That's 38 dollars.",
          "**Aigerim:** Can we pay by card?",
          "**Waiter:** Of course!",
        ].join("\n\n"),
      },
    ),
    trueFalse("True or false?", [
      ["Arman orders a vegetable pasta.", false],
      ["They don't order a dessert.", true],
      ["They pay in cash.", false],
    ]),
    order(
      "Put the dialogue in order.",
      ["Hi! Are you ready to order?\nYes. I'd like a pizza, please.\nAnything to drink?\nA water, please.\nHow is everything?\nGreat, thanks! Can I have the check?"],
      "lines",
    ),
  ]),

  section("Listening: Delivery problem", [
    ...listening(
      "Listen. Leo calls the delivery app support.",
      "**Support:** Hello, FoodGo support. How can I help you?\n\n**Leo:** Hi! I have a problem with my order. It's very late — 50 minutes! 😕\n\n**Support:** I'm sorry about that. What's your order number?\n\n**Leo:** It's 4-7-2-9.\n\n**Support:** Thank you. OK, I can see your order: two pizzas and a cola. The courier is near your house now. It's snowing, so he's slow.\n\n**Leo:** Oh, OK. And one more thing: there aren't any napkins in my last order.\n\n**Support:** Sorry! We can give you a discount: 20% off your next order.\n\n**Leo:** Great, thank you!",
    ),
    quiz("Listen and choose.", [
      { q: "What's the problem?", options: ["*The order is late.", "The food is cold.", "The pizza is wrong."] },
      { q: "What's in the order?", options: ["*two pizzas and a cola", "a burger and fries", "sushi"] },
      { q: "Why is the courier slow?", options: ["*It's snowing.", "His bike is broken.", "He's lost."] },
      { q: "What does Leo get?", options: ["*20% off the next order", "a free pizza", "his money back"] },
    ]),
  ]),

  section("Video: At the restaurant", [
    video("Watch an A1 restaurant conversation. What do they order?", "lvw_ht29FXE"),
    text("Talk to your teacher.", "- What do the people order?\n- What phrases from the lesson do you hear? 👂"),
  ]),

  section("Let's talk: Waiter and guest", [
    text(
      "Role-play: at a restaurant 🎭",
      "Make a menu together on the board: 2 starters, 3 main courses, 2 desserts, drinks — with prices!\n\n**Student A — the waiter:** *Good evening! Are you ready to order? Anything to drink? How is everything?*\n\n**Student B — the guest:** *I'd like… Can I have…? Can we have the check, please?*\n\nThen change roles! 🍽️",
    ),
    text("Talk to your teacher.", "- Do people give tips in your country? How much? 💵\n- What's the best restaurant in your city?\n- What's your perfect dinner: starter, main course and dessert? 😋"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "🇬🇧 the bill = 🇺🇸 …", options: ["*the check", "the menu", "the tip"] },
      { q: "A polite order:", options: ["*I'd like the soup, please.", "Give me soup.", "Soup!"] },
      { q: "🍰 at the end of a meal =", options: ["*a dessert", "a starter", "a main course"] },
    ]),
    box("Word of the day: food coma", "**a food coma** 😴🍝 = you feel sleepy after a big meal.\n\n*Three pizzas? I'm in a food coma now!*"),
  ]),

  homework(
    [
      gaps("Complete.", "1. A [table] for two, please.\n2. I'd [like] the fish, please.\n3. Can we have the [check/bill], please?\n4. Extra money for the waiter: a [tip]"),
      choose("Choose.", "1. [*Are/Do] you ready to order?\n2. Can I [*have/has] a lemonade?\n3. How [*is/are] everything?"),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      video("Watch another restaurant conversation for beginners.", "txcyuBCSTq4"),
      write("Write 3 useful phrases from the video.", null),
    ],
    "Homework: Video",
  ),
  homework(
    [
      write("Write a dialogue at a restaurant: you, a friend and a waiter. Order a starter, a main course and drinks, and ask for the check. (10+ lines)", 45, {
        read: "*Example:* — Good evening! Are you ready to order? — Yes. I'd like the mushroom soup, please. — And for you? — Can I have the steak with potatoes? — Anything to drink? — Two waters, please. … — How is everything? — Delicious! — Would you like a dessert? — No, thanks. Can we have the check, please?",
      }),
      record("Record your answer: order your perfect dinner in a restaurant. 🍽️", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
