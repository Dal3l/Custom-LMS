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

// 7.4 Practical English: Tech support — It doesn't work. / I can't log in. / Can you help me? A support chat and a phone call; role-play. No new grammar.
export default lesson("a1-7.4", "Practical: Tech support", () => [
  section("Warm-up: Tech problems", [
    box("Today you will…", "- say what's wrong: *It doesn't work. I can't log in.*\n- ask for help: *Can you help me?*\n- chat with tech support 💬🛠️"),
    text(
      "Talk to your teacher.",
      "- What tech problems do you often have? 📱💻\n- What do you do when your phone doesn't work? Restart it? Call a friend? 😅\n- Who helps you with tech problems at home? 👨‍👩‍👧\n- Do you remember all your passwords? 🔒",
    ),
    tip("A fun start: ask the student to show the “angry face” they make when the Wi-Fi is slow. 😄"),
  ]),

  section("Vocabulary: What's the problem?", [
    words("Tech problems", [
      ["It doesn't work.", "🚫⚙️", "My laptop doesn't work."],
      ["I can't log in.", "🔑❌"],
      ["I forgot my password.", "🔒🤷 (forgot = past of forget)"],
      ["The screen is frozen.", "🧊📱 nothing moves"],
      ["slow", "🐢", "The Wi-Fi is very slow."],
      ["broken", "💔 it doesn't work, you need to fix it"],
      ["restart", "🔄 turn off and turn on again"],
      ["charge", "🔌🔋", "Charge your phone."],
      ["click — tap", "🖱️ — 👆"],
      ["an error", "⚠️ a message about a problem"],
      ["tech support", "🛠️💬 people who help with tech problems"],
    ]),
    table("tech-problems"),
    match("Match the problems and the help.", [
      ["My phone battery is at 1%. 🪫", "Charge it."],
      ["I forgot my password.", "Click “Forgot password?”"],
      ["The screen is frozen.", "Restart your phone."],
      ["I can't hear you on Zoom.", "Check your microphone."],
    ]),
    gaps("Complete.", "1. My laptop doesn't [work].\n2. I can't log [in].\n3. I [forgot] my password.\n4. Turn it off and [on] again."),
  ]),

  section("Chat: Help!", [
    tip("Read the chat together: you are the support agent, the student is the user. Then change roles."),
    gaps(
      "Read the support chat. Complete the ticket.",
      "🎫 App: [StudyBox]\n😟 Problem: can't [log in]\n📧 Email: [aigerim.b@mail.kz]\n🛠️ Solution: a new [password]",
      {
        read: [
          "## 💬 StudyBox Support",
          "**Bot:** Hi! I'm Max from StudyBox Support. How can I help you? 🙂",
          "**Aigerim:** Hi! I can't log in to my account. 😟",
          "**Bot:** I'm sorry about that. What happens?",
          "**Aigerim:** I write my password, but I see an error: “Wrong password”.",
          "**Bot:** OK. Can you tell me your email address, please?",
          "**Aigerim:** It's aigerim.b@mail.kz.",
          "**Bot:** Thank you. I can send you a link for a new password. Can you check your email?",
          "**Aigerim:** Yes… I can see it! I can make a new password now. 🎉",
          "**Bot:** Great! Can I help you with anything else?",
          "**Aigerim:** No, thanks. That's all. Thank you so much!",
          "**Bot:** You're welcome! Have a nice day! 👋",
        ].join("\n\n"),
      },
    ),
    trueFalse("True or false?", [
      ["Aigerim's laptop is broken.", false],
      ["She sees an error message.", true],
      ["Max sends her a link for a new password.", true],
    ]),
    order(
      "Put the chat in order.",
      ["Hi! How can I help you?\nMy app doesn't work. The screen is frozen.\nCan you restart your phone, please?\nOK… Yes, it works now!\nGreat! Anything else?\nNo, thanks. That's all!"],
      "lines",
    ),
  ]),

  section("Listening: A support call", [
    ...listening(
      "Listen. Leo calls internet support.",
      "**Support:** Hello, FastNet support. My name is Sara. How can I help you?\n\n**Leo:** Hi! My internet doesn't work. I can't open any websites.\n\n**Support:** I'm sorry to hear that. Can you see the lights on your router?\n\n**Leo:** Yes, I can. The light is red. 🔴\n\n**Support:** OK. Can you turn off the router, wait one minute and turn it on again?\n\n**Leo:** OK… one minute… Now the light is green! 🟢\n\n**Support:** Great! Can you open a website now?\n\n**Leo:** Yes! It works! Thank you, Sara!\n\n**Support:** You're welcome. Have a good day!",
    ),
    quiz("Listen and choose.", [
      { q: "What's the problem?", options: ["*The internet doesn't work.", "The phone is broken.", "He can't log in."] },
      { q: "At first, the router light is…", options: ["*red", "green", "blue"] },
      { q: "What does Leo do?", options: ["*restarts the router", "buys a new router", "charges his phone"] },
    ]),
  ]),

  section("Let's talk: Tech support role-play", [
    text(
      "Role-play: user and support 🎭",
      "**Student A — the user:** choose a problem card:\n\n- 📱 *My phone is frozen.*\n- 🔒 *I can't log in to my game account.*\n- 🐢 *The Wi-Fi is very slow.*\n- 🔇 *My friends can't hear me on video calls.*\n\n**Student B — tech support:** *How can I help you? Can you…? Try to… Can I help you with anything else?*\n\nThen change roles!",
    ),
    text("Talk to your teacher.", "- What's the worst tech problem for you? 😱\n- Chatbot support or a real person — which is better? 🤖🙋\n- Are you the “tech support” for your family? 😄"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "The support agent says:", options: ["*How can I help you?", "What do you want?", "Give me your problem."] },
      { q: "Nothing moves on the screen. It's…", options: ["*frozen", "slow", "free"] },
      { q: "turn off and turn on again =", options: ["*restart", "update", "delete"] },
    ]),
    box("Word of the day: Have you tried turning it off and on again?", "**Have you tried turning it off and on again?** 🔄😄 — the most famous tech support question! It's a joke, but it often works."),
  ]),

  homework(
    [
      gaps("Complete.", "1. My phone battery is at 2%. I need to [charge] it.\n2. The Wi-Fi is very [slow]. 🐢\n3. Nothing moves. The screen is [frozen].\n4. I can't remember it. I [forgot] my password."),
      choose("Choose.", "1. My laptop [*doesn't/don't] work.\n2. [*Can you/You can] help me, please?\n3. How can I [*help/helps] you?"),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      video("Watch: English for account problems. Write 3 useful phrases.", "hFfSSNqDWvQ"),
      write("Write 3 useful phrases from the video.", null),
    ],
    "Homework: Video",
  ),
  homework(
    [
      write("Write a support chat: you have a tech problem, and the support agent helps you. (8+ lines)", 35, {
        read: "*Example:* — Hi! How can I help you? — Hi! I can't hear my friends in the game chat. 🎧 — Can you check your headphones? — They work. — OK. Can you open “Settings” and check the microphone? — Oh! It's off. Now it works! Thank you! — You're welcome!",
      }),
      record("Record a voice message to tech support: say what doesn't work and ask for help.", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
