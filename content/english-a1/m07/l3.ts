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
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 7.3 There's an app for that — skills lesson: app reviews, app actions (download, log in, share), review of can. Main format: reading (reviews) + video.
export default lesson("a1-7.3", "There's an app for that", () => [
  section("Warm-up: Problem → app", [
    box("Today you will…", "- read app reviews ⭐\n- use app words: *download, log in, share…*\n- recommend an app to a friend"),
    match("You have a problem. What app can help? Match. 📲", [
      ["I'm lost in a new city. 🗺️", "a map app"],
      ["I don't understand a word. 🤔", "a translator app"],
      ["I want to learn English. 📚", "a language app"],
      ["I can't sleep. 😴", "a sleep sounds app"],
      ["I want to send money to a friend. 💸", "a bank app"],
    ]),
    text("Talk to your teacher.", "- What apps are on your phone's first screen? 📱\n- What app can't you live without? 😅"),
  ]),

  section("Vocabulary: App actions", [
    words("App actions", [
      ["download — install", "⬇️ put an app on your phone", "Download the app — it's free!"],
      ["sign up", "✍️ make a new account"],
      ["log in — log out", "🔑 — 🚪", "I can't log in!"],
      ["a password", "🔒", "Don't share your password!"],
      ["share", "🔁 send to other people"],
      ["save", "💾"],
      ["search", "🔍"],
      ["update", "🔄 get a new version"],
      ["delete", "🗑️"],
      ["free — paid", "🆓 — 💳"],
      ["useful — useless", "👍 helps you — 👎 doesn't help"],
      ["a review — stars", "⭐⭐⭐⭐⭐ what people think about an app"],
    ]),
    order("Put the steps in order.", ["Search for the app.\nDownload it.\nSign up with your email.\nLog in.\nUse the app!"], "lines"),
    gaps("Complete.", "1. I don't have an account. I want to sign [up].\n2. I can't log [in]. I don't remember my [password].\n3. The app is old. I need to [update] it.\n4. I don't use this app. I can [delete] it. 🗑️"),
  ]),

  section("Reading: App reviews", [
    tip("Read the reviews like in an app store. Ask: *How many stars? What can the app do? What's the problem?*"),
    quiz(
      "Read the reviews. Choose.",
      [
        { q: "Which app can help you study?", options: ["*FocusTree", "SnapChef", "TrainNow"] },
        { q: "SnapChef can…", options: ["*find recipes from a photo", "teach English", "plant trees"] },
        { q: "What's the problem with TrainNow?", options: ["*it isn't free and it has a lot of ads", "it can't count steps", "it's slow"] },
        { q: "Which app has the most stars?", options: ["*FocusTree", "SnapChef", "TrainNow"] },
      ],
      {
        read: [
          "## 📲 Top apps this week",
          "**🌳 FocusTree** ⭐⭐⭐⭐⭐\n*Great for studying! You can't use your phone for 25 minutes — and a tree grows. 🌱 If you open Instagram, your tree dies! 😱 Now I can do my homework fast.* — **dana_k**",
          "**🍳 SnapChef** ⭐⭐⭐⭐\n*So useful! You take a photo of the food in your fridge, and the app can find recipes. 🥚🧀 It can't cook for you, of course! The free version has ads.* — **leo_cooks**",
          "**🏃 TrainNow** ⭐⭐\n*It can count your steps and make a plan for the gym. But it isn't free — and the free version has too many ads! You can't use it without the internet.* — **arman.fit**",
        ].join("\n\n"),
      },
    ),
    trueFalse("Read again. True or false?", [
      ["In FocusTree, your tree dies if you open Instagram.", true],
      ["SnapChef can cook for you.", false],
      ["You can use TrainNow without the internet.", false],
    ]),
    text("Talk to your teacher.", "- Which app do you want to download? Why?\n- Which app is useless for you? 👎\n- Do you read reviews before you download an app?"),
  ]),

  section("Video: Study apps", [
    video("Watch the first 3 minutes. What study apps do you see? What can they do?", "GoAOIFSyznE"),
    text("Talk to your teacher.", "- What apps are in the video? Do you know them?\n- Which one can help you with English? 📚\n- Are study apps useful or a waste of time? 🤔"),
  ]),

  section("Review: can and app words", [
    choose(
      "Choose.",
      "1. With this app, you [*can/cans] learn Spanish.\n2. I [*can't/don't can] log in. 😟\n3. [*Can/Does] the app work without the internet?\n4. You can [*download/downloads] it for free.",
    ),
    drag(
      "Complete the review.",
      "⭐⭐⭐⭐ LinguaPal is great! You [can] [download] it for free. You [sign] up with your email. It [can] check your pronunciation. But you [can't] use it without the internet.",
      ["cans", "delete", "log"],
    ),
  ]),

  section("Let's talk: Recommend an app", [
    text(
      "Recommend an app 📲",
      "Tell your teacher about an app you like:\n\n- *The app is called…*\n- *You can… with it.*\n- *It's free / paid.*\n- *It's useful because…*\n- *The problem is…*\n- *I give it ⭐⭐⭐⭐.*",
    ),
    text(
      "Invent an app 💡",
      "Invent a new app! What's its name? What can it do? What can't it do? Who needs it?\n\n*My app is called HomeworkBot. It can… It can't…* 😄",
    ),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "make a new account =", options: ["*sign up", "log out", "update"] },
      { q: "🗑️ =", options: ["*delete", "save", "share"] },
      { q: "It helps you. It's…", options: ["*useful", "useless", "paid"] },
    ]),
    box("Word of the day: app", "**There's an app for that!** 📲 — a popular phrase: today you can find an app for any problem.\n\n*Can't sleep? There's an app for that!*"),
  ]),

  homework(
    [
      match("Match.", [
        ["download", "an app"],
        ["log", "in"],
        ["sign", "up"],
        ["share", "a photo"],
        ["forget", "a password"],
      ]),
      gaps("Write the word.", "1. ⭐⭐⭐ what people think about an app: a [review]\n2. 🆓 it costs no money: [free]\n3. 🔄 get a new version: [update]"),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      ...listening(
        "Listen. Mia recommends an app to Leo.",
        "**Leo:** Mia, my English is terrible. 😩 What can I do?\n\n**Mia:** Download WordUp! It's an app for English words.\n\n**Leo:** Is it free?\n\n**Mia:** Yes, it is! You sign up with your email, and you learn five new words every day.\n\n**Leo:** Can it check my pronunciation?\n\n**Mia:** Yes, it can! You say the word, and the app listens. 🎤\n\n**Leo:** Can I use it without the internet? I'm often on the bus.\n\n**Mia:** No, you can't. But you can download the lessons first!\n\n**Leo:** Cool! I can download it now. Thanks! 📲",
      ),
      quiz("Listen and choose.", [
        { q: "WordUp is…", options: ["*free", "paid", "a game"] },
        { q: "How many new words a day?", options: ["*five", "ten", "fifteen"] },
        { q: "Can it check pronunciation?", options: ["*Yes, it can.", "No, it can't."] },
      ]),
    ],
    "Homework: Listening",
  ),
  homework(
    [
      write("Write a review of your favorite app: What can it do? Is it free? What's good and bad? How many stars? (35+ words)", 35, {
        read: "*Example:* ⭐⭐⭐⭐ I love Duolingo! It's free and it's fun. You can learn a lot of languages. It can check your answers and your pronunciation. The problem is the green owl — it sends a lot of notifications! 🦉😅",
      }),
      record("Record your answer: recommend an app to your teacher. What can it do? Why is it useful?", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
