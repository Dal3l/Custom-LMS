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
  write,
} from "../../kit";

// 9.4 Practical: Taking messages — on the phone, voice messages and work chats: Could I leave a message? Can I take a message? Could you spell that? He asked you to call him back. Spelling names, saying numbers. S: role-plays. Main format: a chat-abbreviations warm-up + a BBC video + three phone calls with notes (~1 min) + role-play cards.
export default lesson("b1-9.4", "Practical: Taking messages", () => [
  section("Warm-up: Message decoder", [
    box(
      "Today you will…",
      "- take and leave messages on the phone 📞\n- spell names and say numbers clearly 🔤\n- pass messages on: *Leo called. He said he'd be late.* 💬",
    ),
    match("Chat and email abbreviations. What do they mean? 💬", [
      ["ASAP", "as soon as possible"],
      ["BTW", "by the way"],
      ["FYI", "for your information"],
      ["BRB", "be right back"],
      ["TBH", "to be honest"],
      ["ETA", "estimated time of arrival"],
    ]),
    text(
      "Talk to your teacher.",
      "- Which of these do you use? Which ones are OK in a work chat, and which only with friends? 💼😄\n- Do you prefer calls, voice messages or texts? Why?\n- Have you ever forgotten to pass on an important message? What happened? 😬",
    ),
    tip("Ask the student to write a short message using three abbreviations, then “translate” it into full English. Note: in formal emails, avoid most of them (FYI and ASAP are common at work, but not with clients)."),
  ]),

  section("Video: Taking telephone messages", [
    tip("BBC Learning English, about 5 minutes. Before watching: *What information do you need when you take a message?* (name, number, reason, when to call back…)"),
    video("Watch: English at Work — taking telephone messages.", "Qo6VHK5n_LU"),
    text(
      "After the video: talk to your teacher.",
      "- What went wrong in the video? What should the person do better?\n- Which useful phrases did you hear? Write down three.",
    ),
  ]),

  section("Phrases: On the phone", [
    table("phone-messages"),
    sort("Who says it — the caller or the receiver? Sort. 📞🎧", {
      "📞 the caller": ["Could I speak to Ms. Kim, please?", "Could I leave a message?", "Could you ask her to call me back?", "Thanks for your help."],
      "🎧 the receiver": ["I'm afraid she's not available.", "Can I take a message?", "Could you spell that, please?", "I'll make sure she gets the message."],
    }),
    match("Match the questions and the answers.", [
      ["Who's calling, please?", "It's Kenji Tanaka."],
      ["Could you spell your surname?", "T-A-N-A-K-A."],
      ["What's your number?", "Seven-oh-one, two-three-four, five-six-seven-eight."],
      ["Can I take a message?", "Yes, please. Tell her I'll be late."],
      ["When is a good time to call back?", "After three o'clock."],
      ["Is it urgent?", "Not really, tomorrow is fine."],
    ]),
    choose(
      "Choose the best phrase.",
      "1. [*Could I speak to/Give me] Mr. Park, please?\n2. I'm afraid he's [*not available/not here, bye] at the moment.\n3. [*Can I take a message?/What do you want?]\n4. [*Could you spell that, please?/Spell it!]\n5. [*Let me read that back to you./I didn't hear anything.]\n6. [*Could you ask him to call me back?/Tell him call me.]\n7. [*I'll make sure he gets the message./Maybe I'll remember.]\n8. [*Thanks for your help./OK, that's all, finished.]",
    ),
    quiz("Spelling and numbers. How do people usually say it?", [
      { q: "The number 0 in a phone number (British English):", options: ["*“oh”", "“zero-zero”", "“nothing”"] },
      { q: "“double” in a phone number means…", options: ["*two of the same number (double five = 55)", "multiply by two", "the number 2"] },
      { q: "To spell a name clearly, you can say…", options: ["*“B for Bravo, A for Alpha…”", "the name louder", "the name faster"] },
      { q: "The @ in an email address is…", options: ["*“at”", "“and”", "“about”"] },
    ]),
  ]),

  section("Listening: Three calls", [
    tip("Three short phone calls (~1 minute in total). The student takes notes like a real receptionist. First listen: *Who is calling whom?* Second listen: complete the notes."),
    ...listening(
      "Listen to three phone calls. Take notes.",
      "**1.**\n\n**Receptionist:** Pixel Studio, good morning.\n\n**Man:** Hello, could I speak to Dana Sadykova, please?\n\n**Receptionist:** I'm afraid she's in a meeting. Can I take a message?\n\n**Man:** Yes, please. My name is Tom Baker, from Green Books. Could you tell her that the book cover is approved, and ask her to call me back after two?\n\n**Receptionist:** Of course. Could you give me your number?\n\n**Man:** It's seven-oh-one, four-five-five, two-eight-nine-one.\n\n**Receptionist:** Let me read that back: seven-oh-one, four-five-five, two-eight-nine-one. I'll make sure she gets the message.\n\n**2.**\n\n**Asel:** Hello, Asel's Bakery!\n\n**Woman:** Hi, I'd like to order a birthday cake for Saturday. Chocolate, for twenty people.\n\n**Asel:** Lovely. What name is it for?\n\n**Woman:** Laura. L-A-U-R-A. It's a surprise party, so please don't call my friend Kenji — call only me!\n\n**Asel:** Don't worry, I know Kenji! I won't say a word. 🤫\n\n**3.**\n\n**Leo:** Hi Madina, it's Leo. I'm calling about Saturday. I've got the guitar — but the party starts at seven, right? Can you text me the address? And FYI, I'll be a bit late — ETA seven fifteen. Thanks!",
    ),
    gaps(
      "Complete the notes.",
      "📝 Message 1 — for: Dana · from: Tom [Baker], Green Books\nThe book cover is [approved]. Please call back after [2/two] p.m.\nNumber: 701 [455] 2891\n\n📝 Message 2 — order: a [chocolate] cake for [20/twenty] people, Saturday · name: [Laura]",
    ),
    quiz("Listen and choose.", [
      { q: "1. Why can't Dana answer the phone?", options: ["*She's in a meeting.", "She's on holiday.", "She's ill."] },
      { q: "2. Why must Asel not call Kenji?", options: ["*It's a surprise party for him.", "He doesn't like cake.", "He's abroad."] },
      { q: "3. What does Leo ask Madina to do?", options: ["*text him the address", "bring the guitar", "buy a cake"] },
      { q: "3. What time will Leo probably arrive?", options: ["*7:15", "7:00", "8:00"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Tom Baker works for a publisher called Green Books.", true],
      ["The receptionist reads the number back to check it.", true],
      ["Laura orders a vanilla cake.", false],
      ["Asel doesn't know Kenji.", false],
      ["Leo leaves a voice message for Madina.", true],
    ]),
  ]),

  section("Practice: Pass it on", [
    drag(
      "Complete the call.",
      "A: Good afternoon, City Library.\nB: Hello, could I [speak] to Mrs. Ahmed, please?\nA: I'm [afraid] she's not available right now. Can I [take] a message?\nB: Yes, please. It's Daniyar Nurlanov. Could you ask her to [call] me back?\nA: Of course. Could you [spell] your surname?\nB: N-U-R-L-A-N-O-V.\nA: Thanks. I'll make [sure] she gets the message.",
      ["say", "sorry", "give"],
    ),
    gaps(
      "Pass the messages on. Use reported speech.",
      "1. Tom: “The cover is approved.” → Tom called. He said the cover [was] approved.\n2. Tom: “Please call me back after two.” → He asked you [to call] him back after two.\n3. Leo: “I'll be a bit late.” → Leo said he [would be/'d be] a bit late.\n4. Leo: “Can you text me the address?” → He asked if you [could] text him the address.\n5. Laura: “Don't call Kenji!” → Laura told Asel [not to call] Kenji.\n6. Mom: “I've bought the tickets.” → Your mom said she [had bought] the tickets.",
    ),
    order(
      "Put the phone call in order.",
      [[
        "Good morning, Asel's Bakery.",
        "Hi, could I speak to Asel, please?",
        "I'm afraid she's out. Can I take a message?",
        "Yes, please. Could you tell her that Laura called about the cake?",
        "Of course. I'll make sure she gets the message.",
      ].join("\n")],
      "lines",
    ),
    trueFalse("Tips for taking a message. True or false? 💡", [
      ["Always write down the caller's name and number.", true],
      ["Never ask people to spell their names — it's rude.", false],
      ["Read the number back to check it.", true],
      ["Ask when is a good time to call back.", true],
      ["Pass the message on next week.", false],
    ]),
    write("You took a phone message for your colleague Ali: a client, Maria Lopez, called. She can't come to the meeting tomorrow and asks if they can meet on Friday at 11. Her number is 701 233 4590. Write a note for Ali (40+ words). Use reported speech.", 40),
  ]),

  section("Role-play: On the phone", [
    text(
      "Role-play cards 📞",
      "Sit back to back (or turn off the camera) — on the phone you can't see the other person!\n\n**Card A:** Call a hotel. You want to speak to the manager about your booking (name: your name; dates: 12–15 May). The manager isn't there — leave a message.\n\n**Card B:** You're the receptionist at a language school. Someone calls for a teacher who is in class. Take a message: name, number, reason, best time to call back.\n\n**Card C:** Leave a voice message for a friend: change your plans for the weekend and ask them to call you back.",
    ),
    text(
      "Then: pass it on!",
      "After each call, the person who took the message tells a third person (your teacher in another role): *Mr. … called. He said… He asked you to…*",
    ),
    tip("Use real names that need spelling and long phone numbers. If the student doesn't check the details, “give” a wrong number on purpose and see if they read it back. Give feedback on politeness, spelling and reported speech."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "The caller says:", options: ["*Could I leave a message?", "Can I take a message?", "Who's calling?"] },
      { q: "The receiver says:", options: ["*Could you spell that, please?", "Could I speak to…?", "Thanks for your help."] },
      { q: "ASAP =", options: ["*as soon as possible", "after six at the party", "as simple as possible"] },
      { q: "“Call me back.” → He asked you ___ him back.", options: ["*to call", "call", "calling"] },
    ]),
    box(
      "Phrase of the day: I'll get back to you",
      "🔁 **I'll get back to you.** = I'll answer you later (when I have the information).\n\n*“Can you come on Friday?” — “I'm not sure yet. I'll get back to you tomorrow.”*",
    ),
  ]),

  homework(
    [
      gaps(
        "Complete the phrases.",
        "1. Could I [speak] to the manager, please?\n2. I'm afraid she's not [available].\n3. Can I [take] a message?\n4. Could you [spell] your name, please?\n5. Let me read that [back] to you.\n6. I'll make [sure] he gets the message.",
      ),
      choose(
        "Choose.",
        "1. Leo called. He said he [*would/will] be late.\n2. She asked you [*to call/call] her back.\n3. Tom said the cover [*was/is being] approved.\n4. He asked if you [*could/can't] send the file.\n5. Your mom told me [*not to forget/don't forget] the bread.\n6. They said they [*had/have] already left.",
      ),
      match("Match the abbreviations and their meanings.", [
        ["ASAP", "as soon as possible"],
        ["BTW", "by the way"],
        ["FYI", "for your information"],
        ["TBH", "to be honest"],
        ["ETA", "estimated time of arrival"],
        ["BRB", "be right back"],
      ]),
    ],
    "Homework: Phrases",
  ),
  homework(
    [
      write("Write three messages you took for family members or colleagues this week (real or imagined). For each one: who called, what they said, what they asked (60+ words in total). Use reported speech.", 60),
      record("Record a 1-minute voice message for a friend: say you can't meet tomorrow, explain why, suggest another day and ask them to call you back. 📞", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
