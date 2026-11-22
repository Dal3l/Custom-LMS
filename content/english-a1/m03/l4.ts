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

// 3.4 Practical English: Let's meet! — days of the week, time, making plans in a messenger; no new grammar.
export default lesson("a1-3.4", "Practical: Let's meet!", () => [
  section("Warm-up: My day", [
    box("Today you will…", "- say the days of the week\n- ask and say the time\n- make plans with a friend: *Are you free on…? Let's…*"),
    sort("When do most people do it? Sort. 🕐", {
      "🌅 in the morning": ["☕ breakfast", "🪥 brush teeth"],
      "🌞 in the afternoon": ["🥪 lunch"],
      "🌙 in the evening": ["🍝 dinner", "📺 watch a series"],
    }),
    text("Talk to your teacher.", "- Morning person 🌅 or night person 🌙 — what are you?\n- What's your favorite day of the week? Why?"),
  ]),

  section("Days of the week", [
    table("days"),
    order("Put the days in order.", ["Monday\nTuesday\nWednesday\nThursday\nFriday\nSaturday\nSunday"], "lines"),
    gaps("What day is it?", "1. The day after Monday → [Tuesday]\n2. The day before Friday → [Thursday]\n3. The first day of the weekend → [Saturday]\n4. The day after Tuesday → [Wednesday]"),
    quiz("Choose.", [
      { q: "Let's meet ___ Friday.", options: ["*on", "at", "in"] },
      { q: "Saturday and Sunday = the…", options: ["*weekend", "week", "weekday"] },
      { q: "Wed =", options: ["*Wednesday", "Wednes", "Weekend"] },
    ]),
  ]),

  section("What time is it?", [
    table("time"),
    match("Match the times.", [
      ["3:00", "three o'clock"],
      ["9:30", "nine thirty / half past nine"],
      ["1:15", "one fifteen / quarter past one"],
      ["6:45", "six forty-five / quarter to seven"],
      ["11:05", "eleven oh five"],
    ]),
    gaps("Write the time in numbers.", "1. four o'clock → [4:00]\n2. half past eight → [8:30]\n3. ten fifteen → [10:15]\n4. quarter to six → [5:45]"),
    choose("at, on or in?", "1. The film is [*at/on/in] 7 o'clock.\n2. Are you free [at/*on/in] Saturday?\n3. I'm tired [at/on/*in] the evening.\n4. Let's meet [*at/on/in] half past five."),
    tip("Practice: draw clocks on the board, the student says the time. Then change roles. The easy way (*seven thirty*) is OK in all countries."),
  ]),

  section("Useful phrases: Making plans", [
    words("Making plans", [
      ["Are you free on…?", "🗓️ do you have time?", "Are you free on Saturday?"],
      ["Let's…", "👉 an idea for us", "Let's go to the cinema!"],
      ["How about…?", "💡 another idea", "How about Sunday?"],
      ["What time?", "⏰"],
      ["Sounds good! / Sounds great!", "👍 = yes, I like the idea"],
      ["Sorry, I can't.", "🙁 = no, I'm busy"],
      ["busy", "😵 = not free"],
      ["See you then!", "👋 = see you at the time and place"],
      ["the cinema", "🎬 🇺🇸 the movies"],
    ]),
    match("Match the questions and the answers.", [
      ["Are you free on Friday?", "Sorry, I can't. I'm busy."],
      ["How about Saturday?", "Sounds good!"],
      ["What time?", "At 6 o'clock."],
      ["Let's meet at the café.", "OK! See you then!"],
    ]),
    gaps("Complete.", "1. Are you [free] on Sunday?\n2. [Let's] go to the park!\n3. How [about] Monday?\n4. Sounds [good]!\n5. Sorry, I [can't/cannot]. I'm busy."),
  ]),

  section("Chat: Weekend plans", [
    tip("Read the chat with the student — you are Leo, the student is Aigerim. Then change roles."),
    gaps(
      "Read the chat. Complete the plan.",
      "📅 Day: [Saturday]\n⏰ Time: [3:30/three thirty/half past three]\n🎬 What: [the cinema/cinema/a film]\n📍 Where: [Mega/the mall/Mega mall]",
      {
        read: [
          "## 💬 Leo & Aigerim",
          "**Leo:** Hi! Are you free on Friday? 🎬 Let's go to the cinema!",
          "**Aigerim:** Sorry, I can't. I'm busy on Friday — I have a piano lesson. 🎹",
          "**Leo:** How about Saturday?",
          "**Aigerim:** Saturday is good! What time?",
          "**Leo:** The film is at 4 o'clock. Let's meet at half past three.",
          "**Aigerim:** Sounds great! Where?",
          "**Leo:** At Mega — the mall. Next to the cinema.",
          "**Aigerim:** OK! See you then! 👋",
        ].join("\n\n"),
      },
    ),
    trueFalse("True or false?", [
      ["Aigerim is free on Friday.", false],
      ["She has a piano lesson on Friday.", true],
      ["The film is at 4 o'clock.", true],
    ]),
    order(
      "Put the chat in order.",
      ["Hi! Are you free on Sunday?\nYes, I am. Why?\nLet's go to the park!\nSounds good! What time?\nAt 11 o'clock.\nOK! See you then!"],
      "lines",
    ),
  ]),

  section("Let's talk: Plan a meeting", [
    picture("My week", ["photos/meet-planner.jpg"], "Write your plans for the week — real or made up — in a planner or on the board."),
    text(
      "Role-play: let's meet! 💬",
      "1. Write 3 busy days in your planner: *Monday — gym, Wednesday — English…*\n2. Ask your teacher: *Are you free on…?* Find a free day!\n3. Choose a time and a place: *Let's meet at… How about…?*\n\nThen write the plan as a chat on the board.",
    ),
    text("Talk to your teacher.", "- What's your busy day? 😵\n- What do you do on the weekend? 🎉\n- Where do you meet friends in your city? A café, a mall, a park?"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "7:30 =", options: ["*seven thirty", "seven three", "thirty seven"] },
      { q: "___ you free on Monday?", options: ["*Are", "Is", "Do"] },
      { q: "You like the idea. You say:", options: ["*Sounds good!", "Sorry, I can't.", "What time?"] },
      { q: "The day after Wednesday is…", options: ["*Thursday", "Tuesday", "Friday"] },
    ]),
    box("Word of the day: hang out", "**hang out** = spend free time with friends 😎\n\n*Let's hang out on Saturday!*"),
  ]),

  homework(
    [
      gaps("Write the days.", "1. Mon → [Monday]\n2. Wed → [Wednesday]\n3. Thu → [Thursday]\n4. Sat → [Saturday]"),
      match("Match the times.", [
        ["2:00", "two o'clock"],
        ["5:30", "half past five"],
        ["8:15", "quarter past eight"],
        ["9:45", "quarter to ten"],
      ]),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      ...listening(
        "Listen to the voice message. Mia invites her friend.",
        "**Mia:** Hi, Dana! It's Mia. Are you free on Sunday? Let's go to the park! There's a food festival. 🍔 How about 12 o'clock? Let's meet at the bus stop. Text me! Bye!",
      ),
      quiz("Listen and choose.", [
        { q: "The day:", options: ["*Sunday", "Saturday", "Monday"] },
        { q: "Where?", options: ["*the park", "the cinema", "a café"] },
        { q: "What time?", options: ["*12:00", "2:00", "12:30"] },
      ]),
      video("Watch the video: telling the time.", "MLpSno7wZAs"),
    ],
    "Homework: Listening and video",
  ),
  homework(
    [
      write("Write a chat: invite a friend. Say the day, the time and the place. (25+ words)", 25, {
        read: "*Example:* — Hi! Are you free on Saturday? Let's go to the cinema! — Sorry, I can't. How about Sunday? — Sounds good! The film is at 5 o'clock. — OK! Let's meet at 4:30. See you then!",
      }),
      record("Record a voice message: invite your teacher to a café or a park. Say the day and the time.", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
