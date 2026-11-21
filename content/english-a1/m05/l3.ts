import {
  box,
  choose,
  drag,
  gaps,
  homework,
  lesson,
  match,
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

// 5.3 Screen time — skills lesson: a screen time report, apps, in / on / at with time; review of Present Simple. Main format: reading (a report) + a survey.
export default lesson("a1-5.3", "Screen time", () => [
  section("Warm-up: You and your phone", [
    box("Today you will…", "- read a screen time report\n- say *in the morning, on Monday, at 7*\n- talk about your phone habits 📱"),
    text(
      "Talk to your teacher. Be honest! 😄",
      "- What's the first thing you do in the morning? Do you check your phone? 📱\n- How many hours a day do you use your phone? Guess!\n- What app do you use every day?\n- Do you use your phone in bed? 🛏️\n- Is your phone in your hand right now? 👀",
    ),
    tip("Ask the student to check the real screen time on their phone (Settings → Screen Time / Digital Wellbeing). Only if they want to share!"),
  ]),

  section("Vocabulary: Apps and habits", [
    picture("Apps, apps, apps…", ["photos/screen-apps.jpg"], "What apps do you know? What apps do you have?"),
    words("Phone habits", [
      ["screen time", "📱⏱️ time with your phone or computer", "My screen time is 5 hours a day."],
      ["use an app", "📲", "I use TikTok every day."],
      ["scroll", "👆 move down, down, down…", "I scroll Instagram in bed."],
      ["post", "📸 put a photo or a video online"],
      ["like — comment — share", "❤️ — 💬 — 🔁"],
      ["a notification", "🔔 a message from an app"],
      ["turn off", "📴 = stop it", "I turn off my phone at 10."],
      ["an hour — hours", "⏱️ 60 minutes"],
      ["a day — a week", "📅", "3 hours a day"],
      ["too much", "⚠️ more than is good", "It's too much!"],
    ]),
    match("Match.", [
      ["scroll", "TikTok or Instagram"],
      ["turn off", "your phone"],
      ["post", "a photo"],
      ["check", "notifications"],
      ["use", "an app"],
    ]),
    sort("Good habit or bad habit? Sort. 🤔", {
      "👍 Good habit": ["turn off notifications", "no phone at dinner", "read a book in bed"],
      "👎 Bad habit": ["scroll in bed at 2 a.m.", "check the phone every 5 minutes", "use the phone in class"],
    }),
  ]),

  section("Reading: My screen time report", [
    tip("Read the report like a real phone screen. Ask: *How many hours? What app is number 1?*"),
    quiz(
      "Read Aidar's weekly report. Choose.",
      [
        { q: "Aidar's screen time is…", options: ["*6 hours a day", "6 hours a week", "2 hours a day"] },
        { q: "His number 1 app is…", options: ["*TikTok", "YouTube", "WhatsApp"] },
        { q: "When is his screen time the biggest?", options: ["*on Saturday", "on Monday", "on Wednesday"] },
        { q: "He picks up his phone…", options: ["*95 times a day", "9 times a day", "59 times a day"] },
      ],
      {
        read: [
          "## 📱 Weekly report — Aidar's phone",
          "**Daily average: 6 hours** ⬆️ 20% from last week",
          "**Top apps:**\n1. TikTok — 2 h 30 min 🎵\n2. YouTube — 1 h 30 min ▶️\n3. Telegram — 1 h 💬\n4. Games — 1 h 🎮",
          "**Most screen time:** Saturday — 9 hours 😱\n**Least screen time:** Wednesday — 3 hours",
          "**Pickups:** 95 times a day\n**Notifications:** 210 a day 🔔",
          "**First pickup:** 6:45 in the morning",
        ].join("\n\n"),
      },
    ),
    trueFalse("Read again. True or false?", [
      ["His screen time is up from last week.", true],
      ["He uses YouTube more than TikTok.", false],
      ["He has 210 notifications a day.", true],
      ["He checks his phone first at 9 o'clock.", false],
    ]),
    text("Talk to your teacher.", "- What do you think about Aidar's screen time? Is it too much? 🤔\n- What's your top app?\n- What can Aidar do? Give him 2 ideas! 💡"),
  ]),

  section("Grammar: in / on / at", [
    table("in-on-at"),
    choose(
      "in, on or at?",
      "1. I check my phone [*in/on/at] the morning.\n2. My screen time is big [in/*on/at] Saturday.\n3. I turn off my phone [in/on/*at] 10 o'clock.\n4. I don't use my phone [in/on/*at] night.\n5. We have a video call [in/*on/at] Monday evening.",
    ),
    drag(
      "Complete.",
      "I wake up [at] 7. [In] the morning I don't use my phone. [On] Friday I play games with my friends [at] night.",
      ["to", "by"],
    ),
    gaps("Write in, on or at.", "1. [in] the afternoon\n2. [on] Sunday\n3. [at] half past five\n4. [in] the evening\n5. [at] night"),
  ]),

  section("Video: Teens ditch screens", [
    video("Watch the news story: some teens stop using smartphones. Why?", "f7v5GX3WQrU"),
    text("Talk to your teacher.", "- What do the teens do without smartphones?\n- Is it a good idea? Can you do it? 📵\n- One day without a phone — what do you do?"),
    tip("This is real news English — fast! It's OK to understand only some words: *phone, teens, flip phone, friends*. Watch twice."),
  ]),

  section("Let's talk: Phone survey", [
    text(
      "Survey: phone habits 📊",
      "Ask your teacher, then answer yourself:\n\n1. *What time do you check your phone in the morning?*\n2. *Do you use your phone in bed?*\n3. *Do you use your phone at dinner?*\n4. *What app do you use every day?*\n5. *Do you turn off notifications?*\n\nWho is more “phone addicted”? 😄",
    ),
    text(
      "Mini-challenge 🏆",
      "Choose one challenge for this week:\n\n- 📵 no phone at dinner\n- 🌙 no phone after 11 p.m.\n- 🔕 turn off notifications from one app\n\nTell your teacher about it in the next lesson!",
    ),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "___ the evening", options: ["*in", "on", "at"] },
      { q: "___ Friday", options: ["*on", "in", "at"] },
      { q: "👆 move down, down, down… =", options: ["*scroll", "post", "share"] },
    ]),
    box("Word of the day: digital detox", "**digital detox** = a time with no phone and no internet 📵🌳\n\n*This weekend I do a digital detox in the mountains!*"),
  ]),

  homework(
    [
      gaps("Complete.", "1. I [scroll] TikTok in bed. 👆\n2. I [turn] off my phone at 11. 📴\n3. My screen time is 4 hours a [day].\n4. I get 100 [notifications] a day. 🔔"),
      choose("in, on or at?", "1. [*at/on] 9 o'clock\n2. [*on/in] Tuesday\n3. [*in/at] the morning\n4. [*at/in] night"),
    ],
    "Homework: Vocabulary and grammar",
  ),
  homework(
    [
      trueFalse(
        "Read the tips. True or false?",
        [
          ["Tip 1: Your phone isn't in your bedroom at night.", true],
          ["Tip 2: Check notifications every 5 minutes.", false],
          ["Tip 3: Use a real alarm clock.", true],
        ],
        { read: "## 📵 3 tips for less screen time\n\n1. **Phone out of the bedroom.** Charge your phone in the kitchen at night. 🔌\n\n2. **Turn off notifications.** You check your phone — your phone doesn't check you! 🔕\n\n3. **Buy an alarm clock.** ⏰ Then you don't need your phone in the morning." },
      ),
      write("Check your screen time this week. Write: How many hours a day? What are your top 3 apps? Is it too much?", 20),
    ],
    "Homework: Reading",
  ),
  homework(
    [
      write("Write about your phone habits. When do you use your phone? What apps? What's good and what's bad? (40+ words)", 40, {
        read: "*Example:* My screen time is about 5 hours a day. I check my phone at 7 in the morning — it's my alarm. I use Instagram and YouTube every day. I don't use my phone at dinner — it's a family rule. On Saturday my screen time is big because I play games. I think it's too much!",
      }),
      record("Record your answer: tell about your mini-challenge. Is it easy or difficult?", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
