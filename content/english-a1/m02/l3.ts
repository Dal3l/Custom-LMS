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
  order,
  picture,
  quiz,
  record,
  section,
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 2.3 Lost and found — skills lesson: describing a lost thing, dialogues at a lost and found office; revision of module 2. Main format: video.
export default lesson("a1-2.3", "Lost and found", () => [
  section("Warm-up: Oh no, where's my phone?", [
    box("Today you will…", "- describe a lost thing: color, big / small, new / old\n- ask for help at a lost and found office\n- review *this / that / these / those* and plurals"),
    picture("Lost and found", ["photos/lost-box.jpg"], "What things are in the box?"),
    text(
      "Talk to your teacher.",
      "- What things do people often lose? 🔑📱🕶️\n- What do you often lose?\n- Where is a lost and found in your city? (a school, a mall, an airport…) 🏫✈️\n- Is there an app for lost things on your phone? 📍",
    ),
    tip("Quick review of 2.2: show 2–3 things — *What color is it? Is it new or old? What are these?*"),
  ]),

  section("Vocabulary: At the lost and found", [
    words("At the lost and found", [
      ["lost and found", "📦 a place for lost things · 🇬🇧 lost property", "Go to the lost and found!"],
      ["lose — I lose my phone", "😱 you don't know where it is"],
      ["lost", "my lost phone = I don't know where it is", "My wallet is lost."],
      ["find", "🔍 you see it again — yay!", "I can't find my keys."],
      ["Can I help you?", "🙂 a worker asks you"],
      ["I can't find my…", "😟 you say it when you lose something", "I can't find my phone."],
      ["What does it look like?", "❓ = What color is it? Is it big or small?"],
      ["Is this your…?", "❓ the worker shows you a thing", "Is this your umbrella?"],
      ["That's it!", "🎉 = Yes, it's my thing!"],
      ["Thank you so much!", "🙏 a big thank you"],
    ]),
    match("Match the questions and the answers.", [
      ["Can I help you?", "Yes, please. I can't find my wallet."],
      ["What does it look like?", "It's small and brown."],
      ["Is this your wallet?", "Yes! That's it!"],
      ["What's in it?", "My ID card and some money."],
    ]),
    matchPictures("What is lost? Match.", [
      ["photos/obj-wallet.jpg", "a wallet"],
      ["photos/obj-bottle.jpg", "water bottles"],
      ["photos/obj-laptop.jpg", "a laptop"],
      ["photos/obj-earbuds.jpg", "earbuds"],
    ]),
  ]),

  section("Video: Lost and found", [
    tip("Watch the video once without the tasks, then again with them. Pause and ask: *What is lost? What does it look like?*"),
    video("Watch the video. A person reports a lost wallet.", "55DUJfo2O1I"),
    quiz("Watch again. Choose.", [
      { q: "What is lost?", options: ["*a wallet", "a phone", "a dog"] },
      { q: "Where is the person?", options: ["*at a police station", "at a supermarket", "at school"] },
    ]),
    text("Talk to your teacher.", "- What does the wallet look like?\n- What's in the wallet?\n- Is the person happy at the end? 😊"),
  ]),

  section("Dialogue: My phone is lost!", [
    tip("Read the dialogue with the student: you are the worker. Then change roles."),
    gaps(
      "Read the dialogue and complete the form.",
      "Lost and found — report\nThing: [phone/a phone]\nColor of the phone: [black]\nColor of the case: [blue]\nOld or new? [new]\nOwner's name: [Daniyar]",
      {
        read: [
          "## 📱 At the mall",
          "**Worker:** Hi! Can I help you?",
          "**Daniyar:** Yes, please. I can't find my phone!",
          "**Worker:** OK. What does it look like?",
          "**Daniyar:** It's black and it's new. The case is blue.",
          "**Worker:** Is it big or small?",
          "**Daniyar:** It's big.",
          "**Worker:** Hmm… We have a lot of phones. Is this your phone?",
          "**Daniyar:** No, it isn't. That phone is white.",
          "**Worker:** And those phones, there?",
          "**Daniyar:** Yes! That's it — the black phone in the blue case!",
          "**Worker:** What's your name, please?",
          "**Daniyar:** Daniyar. D-A-N-I-Y-A-R.",
          "**Worker:** Here you are.",
          "**Daniyar:** Thank you so much! 🙏",
        ].join("\n\n"),
      },
    ),
    trueFalse("True or false?", [
      ["Daniyar's phone is old.", false],
      ["The case is blue.", true],
      ["The first phone is Daniyar's phone.", false],
    ]),
    order(
      "Put the dialogue in order.",
      ["Can I help you?\nYes, please. I can't find my backpack.\nWhat does it look like?\nIt's big and green.\nIs this your backpack?\nYes, that's it! Thank you so much!"],
      "lines",
    ),
  ]),

  section("Review: Describe it", [
    choose(
      "Choose.",
      "1. I can't find my keys. [*They're/It's] on a red keychain.\n2. 👉 Are [*those/that] your sunglasses?\n3. My umbrella [*is/are] black and big.\n4. 👇 Is [*this/these] your wallet?",
    ),
    drag(
      "Complete the description.",
      "I can't find my [headphones]. [They're] big and white. [The] case is gray. [These] are my old headphones, so the new ones are very important!",
      ["It's", "That"],
    ),
    gaps("Write the plural.", "1. one key → two [keys]\n2. one glass → two [glasses]\n3. one child → three [children]\n4. one battery → two [batteries]"),
  ]),

  section("Let's talk: At the lost and found", [
    text(
      "Role-play: the lost and found 📦",
      "**Student A:** You lose a thing (a phone, keys, a backpack, sunglasses…). Describe it: color, big / small, new / old, what's in it.\n\n**Student B:** You're the worker. Ask: *Can I help you? What does it look like? What's your name? How do you spell it?* Show things: *Is this your…?*\n\nThen change roles!",
    ),
    text(
      "Talk to your teacher.",
      "- Imagine you lose your phone. What do you do? 📱\n- What's the most important thing in your bag?\n- Is it a good idea to write your name on your things? ✍️",
    ),
    tip("*If you have time:* the student draws or chooses a thing on the board, you ask *What does it look like?* and draw it from the description. Compare the pictures — fun!"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "The worker asks:", options: ["*What does it look like?", "What it looks like?", "What looks it like?"] },
      { q: "You see your lost thing. You say:", options: ["*That's it!", "Here you are.", "Sorry?"] },
      { q: "🇬🇧 lost and found =", options: ["*lost property", "lost house", "find office"] },
    ]),
    box("Word of the day: tracker", "**a tracker** = a small thing for your keys or bag. Your phone shows where it is 📍\n\n*My keys have a tracker, so I never lose them!*"),
  ]),

  homework(
    [
      gaps("Complete the phrases.", "1. Can I [help] you?\n2. I can't [find] my wallet.\n3. What does it [look] like?\n4. Is this [your] bag?\n5. Thank you so [much]!"),
      match("Match.", [
        ["lose", "find"],
        ["big", "small"],
        ["new", "old"],
        ["this", "these"],
      ]),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      ...listening(
        "Listen. Emma calls the lost and found at a train station.",
        "**Worker:** Hello, lost and found. Can I help you?\n\n**Emma:** Hi! Yes, please. I can't find my bag. It's on the train, I think.\n\n**Worker:** OK. What does it look like?\n\n**Emma:** It's a small backpack. It's purple.\n\n**Worker:** Is it new?\n\n**Emma:** No, it's old. My laptop and my keys are in it.\n\n**Worker:** One moment… Yes! A purple backpack with a laptop and keys. Is your name Emma?\n\n**Emma:** Yes, it is! Emma Clark.\n\n**Worker:** Great. Come to the station, please.\n\n**Emma:** Thank you so much!",
      ),
      quiz("Listen and choose.", [
        { q: "Emma's backpack is…", options: ["*small and purple", "big and black", "new and blue"] },
        { q: "In the backpack:", options: ["*a laptop and keys", "a phone and a wallet", "sunglasses"] },
        { q: "Emma's last name is…", options: ["*Clark", "Clarke", "Brown"] },
      ]),
      video("Bonus: a slow English program about lost and found.", "KTXbtR-pRnE"),
    ],
    "Homework: Listening and video",
  ),
  homework(
    [
      write("You lose a thing. Write a post for a lost and found group: What is it? What does it look like? (25+ words)", 25, {
        read: "*Example:* Help! I can't find my sunglasses. They're black and big. The case is brown. They're new — a birthday present. They're in the park, I think. Please DM me!",
      }),
      record("Record a phone call to the lost and found: say hello, say what you lose and describe it.", 90),
    ],
    "Homework: Writing and speaking",
  ),
]);
