import {
  box,
  choose,
  gaps,
  homework,
  lesson,
  listening,
  match,
  matchPictures,
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

// 5.4 Practical English: At a coffee shop — Can I have…? / I'd like… (ready phrases), sizes, for here or to go; role-play. No new grammar.
export default lesson("a1-5.4", "Practical: At a coffee shop", () => [
  section("Warm-up: Coffee time ☕", [
    box("Today you will…", "- read a coffee shop menu\n- order a drink and food: *Can I have…? I'd like…*\n- answer the barista's questions\n- play “barista and guest” 🎭"),
    picture("Look at the photo.", ["photos/cafe-counter.jpg"], "A coffee shop in the USA 🇺🇸"),
    text(
      "Talk about the photo.",
      "- Who is the man? What's his job? 👨‍🍳\n- What's in his hand? 🥤\n- Is the café nice? Is it big or small?\n- Do you go to coffee shops? Which one is your favorite? ☕",
    ),
  ]),

  section("Vocabulary: The menu", [
    words("At a coffee shop", [
      ["a coffee shop — a café", "☕"],
      ["a barista", "🧑‍🍳 makes coffee"],
      ["a latte — a cappuccino — an espresso", "☕ coffee with a lot of milk — with milk foam — small and strong"],
      ["(a) tea — (a) hot chocolate", "🍵 — 🍫"],
      ["a smoothie", "🥤 fruit + ice"],
      ["a croissant — a muffin — a sandwich", "🥐 — 🧁 — 🥪"],
      ["small — medium — large", "S — M — L"],
      ["with milk / without sugar", "🥛 / 🚫🍬"],
      ["the menu", "📋"],
      ["the bill — the check", "🧾 🇬🇧 bill · 🇺🇸 check"],
      ["pay by card / in cash", "💳 / 💵"],
    ]),
    matchPictures("Match the photos.", [
      ["photos/cafe-cappuccino.jpg", "a cappuccino"],
      ["photos/cafe-croissant.jpg", "croissants"],
      ["photos/cafe-takeaway.jpg", "a coffee to go"],
      ["photos/cafe-barista.jpg", "a barista"],
    ]),
    table("menu"),
    quiz(
      "Read the menu. Choose.",
      [
        { q: "How much is a medium latte?", options: ["*$4.00", "$3.50", "$4.50"] },
        { q: "What's the cheapest drink?", options: ["*an espresso", "a tea", "a smoothie"] },
        { q: "How much is a croissant?", options: ["*$3.00", "$2.50", "$3.50"] },
      ]
    ),
  ]),

  section("Useful phrases: Ordering", [
    table("cafe"),
    match("Match the barista's questions and the answers.", [
      ["What can I get you?", "Can I have a cappuccino, please?"],
      ["What size?", "Medium, please."],
      ["Anything else?", "No, thanks. That's all."],
      ["For here or to go?", "To go, please."],
      ["Card or cash?", "Card, please."],
    ]),
    gaps("Complete the phrases.", "1. [Can] I have a latte, please?\n2. I'd [like] a muffin, please.\n3. For here or to [go]?\n4. Can I pay [by] card?\n5. No, [thanks]. That's all."),
    tip("Practice the polite tone: *Can I have…, please?* sounds friendly. *Give me…* sounds rude in English!"),
  ]),

  section("Video: Ordering coffee", [
    video("Watch the video. What does the customer order?", "hAnMiHb9Yhs"),
    text("Talk to your teacher.", "- What drink does the customer order? What size?\n- For here or to go?\n- What phrases from the table do you hear? 👂"),
  ]),

  section("Dialogue: At Bean There", [
    tip("Read the dialogue with the student: you are the barista. Then change roles."),
    gaps(
      "Read the dialogue. Complete Mia's order.",
      "🥤 Drink: [latte/a latte]\n📏 Size: [large]\n🥐 Food: [croissant/a croissant]\n🏠 For here or to go: [to go]\n💳 Pay: [card/by card]",
      {
        read: [
          "## ☕ At Bean There",
          "**Barista:** Hi! What can I get you?",
          "**Mia:** Hi! Can I have a latte, please?",
          "**Barista:** Sure. What size?",
          "**Mia:** Large, please. With oat milk.",
          "**Barista:** Anything else?",
          "**Mia:** Yes, I'd like a croissant, please.",
          "**Barista:** For here or to go?",
          "**Mia:** To go, please.",
          "**Barista:** OK. That's $7.50.",
          "**Mia:** Can I pay by card?",
          "**Barista:** Of course. And what's your name — for the cup?",
          "**Mia:** Mia. M-I-A.",
          "**Barista:** Thanks, Mia! Your latte is ready in two minutes. 😊",
        ].join("\n\n"),
      },
    ),
    trueFalse("True or false?", [
      ["Mia wants a small latte.", false],
      ["The order is $7.50.", true],
      ["Mia pays in cash.", false],
    ]),
    order(
      "Put the dialogue in order.",
      ["Hi! What can I get you?\nCan I have a tea, please?\nWhat size?\nSmall, please.\nFor here or to go?\nFor here, please."],
      "lines",
    ),
  ]),

  section("Let's talk: Barista and guest", [
    text(
      "Role-play: at a coffee shop 🎭",
      "**Student A — the barista:** greet the guest, ask *What size? Anything else? For here or to go?*, say the price from the menu.\n\n**Student B — the guest:** order a drink and food, pay.\n\nThen change roles! Try a difficult guest: *Can I have a large hot chocolate with no sugar and oat milk?* 😄",
    ),
    text(
      "Talk to your teacher.",
      "- Coffee or tea? ☕🍵\n- What's your usual order in a café?\n- How much is a latte in your city? Is it expensive? 💸\n- Do you write your name on the cup? Is your name easy for baristas? 😅",
    ),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "A polite order:", options: ["*Can I have a tea, please?", "Give me tea.", "I want tea now."] },
      { q: "🇬🇧 take away = 🇺🇸 …", options: ["*to go", "for here", "the check"] },
      { q: "$3.50 =", options: ["*three fifty", "three five", "thirty-five"] },
    ]),
    box("Word of the day: oat milk", "**oat milk** = milk from oats, not from a cow 🌾🥛 — very popular in coffee shops now.\n\n*A large oat latte, please!*"),
  ]),

  homework(
    [
      gaps("Write the word.", "1. 🥐 a [croissant]\n2. 🧁 a [muffin]\n3. 🧾 🇺🇸 the [check]\n4. S M L — small, [medium], large"),
      choose("Choose.", "1. [*Can/Do] I have a latte, please?\n2. I'd [*like/want] a muffin, please.\n3. For here or [*to go/to take]?"),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      ...listening(
        "Listen. Leo orders at a coffee shop.",
        "**Barista:** Good morning! What can I get you?\n\n**Leo:** Hi! Can I have a medium cappuccino, please?\n\n**Barista:** Sure. Anything else?\n\n**Leo:** Yes. I'd like a chicken sandwich, please.\n\n**Barista:** Eat in or take away?\n\n**Leo:** Eat in, please.\n\n**Barista:** That's ten dollars, please.\n\n**Leo:** Here you are.\n\n**Barista:** Thank you! Have a nice day!",
      ),
      quiz("Listen and choose.", [
        { q: "Leo's drink:", options: ["*a medium cappuccino", "a large latte", "a small tea"] },
        { q: "Leo's food:", options: ["*a sandwich", "a croissant", "a muffin"] },
        { q: "Eat in or take away?", options: ["*eat in", "take away"] },
        { q: "How much?", options: ["*$10", "$12", "$7.50"] },
      ]),
      video("Watch another slow coffee shop dialogue.", "HTM_jLz0gLE"),
    ],
    "Homework: Listening and video",
  ),
  homework(
    [
      write("Write a dialogue at a coffee shop: you order a drink and food. Use the menu from the lesson. (8+ lines)", 30),
      record("Record your order: say hello, order a drink (with a size) and food, say “to go” or “for here”.", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
