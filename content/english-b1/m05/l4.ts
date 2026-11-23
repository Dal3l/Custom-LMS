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

// 5.4 Practical: Emails that work — formal vs informal emails: starting, the reason for writing, requests, apologies, finishing. B1 Preliminary Writing Part 1 (an email with notes, ~100 words). Main format: a British Council video + model emails + a voicemail to answer by email + an email written in class.
export default lesson("b1-5.4", "Practical: Emails that work", () => [
  section("Warm-up: Your inbox", [
    box(
      "Today you will…",
      "- write emails that sound right: formal 👔 or informal 😊\n- ask, apologize and finish politely ✉️\n- write an email like in the **B1 Preliminary** exam (Part 1) 🎓",
    ),
    text(
      "Talk to your teacher.",
      "- How many emails or work messages do you get a day? Which ones do you hate answering? 📥\n- Have you ever sent a message to the wrong person — or in the wrong style? What happened? 😬\n- What makes an email annoying: too long, too short, too formal, too many emojis…?",
    ),
    tip("If the student works, ask them to show (or describe) a real email they had to write in English recently. Note typical problems — too direct, too informal, no greeting."),
  ]),

  section("Video: Formal and informal", [
    tip("British Council, about 3 minutes. Before watching: *What's the difference between writing to a friend and writing to a company?* After watching, the student lists the phrases they remember."),
    video("Watch: English for emails — formal and informal language.", "3-QoPcJHQws"),
    text(
      "After the video: talk to your teacher.",
      "- Which formal phrases did you notice? Which informal ones?\n- In your language, are formal emails very different from informal ones? How?",
    ),
  ]),

  section("Phrases: Formal or informal?", [
    table("emails"),
    sort("Formal or informal? Sort the phrases. 👔😊", {
      "👔 formal": ["Dear Mr. Brown,", "I am writing to ask about…", "I would be grateful if you could…", "I apologize for the delay.", "I look forward to hearing from you.", "Kind regards,"],
      "😊 informal": ["Hi Leo!", "Just a quick message to say…", "Can you send me…?", "Sorry for not writing sooner!", "Write soon!", "Love,"],
    }),
    match("Match the formal and informal phrases.", [
      ["I am writing to inform you…", "Just to let you know…"],
      ["Could you please send me…?", "Can you send me…?"],
      ["I apologize for…", "Sorry for…"],
      ["I look forward to hearing from you.", "Write soon!"],
      ["Please find attached…", "I've attached…"],
      ["Kind regards,", "Best,"],
    ]),
    choose(
      "Choose the right phrase for a FORMAL email.",
      "1. [*Dear Ms. Lee,/Hey Ms. Lee!]\n2. [*I am writing to/I'm just writing to] ask about the English course.\n3. [*Could you please tell me/Tell me] the price?\n4. [*I would be grateful if/It'd be cool if] you could send me a timetable.\n5. [*I apologize for/Sorry about] the late reply.\n6. [*Please find attached/Here's] my CV.\n7. [*I look forward to hearing from you./Write back soon!]\n8. [*Kind regards,/Lots of love,]",
    ),
  ]),

  section("Reading: Two emails", [
    quiz(
      "Read the two emails. Choose the right answer.",
      [
        { q: "Why is Dana writing to the studio?", options: ["*to ask about the start date and documents", "to complain about her salary", "to say she can't take the job"] },
        { q: "What does Dana need to know?", options: ["*what time to arrive and what to bring", "how to get a visa", "the name of her manager's dog"] },
        { q: "Why does Dana write to Leo?", options: ["*to thank him and invite him for coffee", "to ask for money", "to complain about the studio"] },
        { q: "Which email has contractions (I'm, can't) and emojis?", options: ["*the email to Leo", "the email to the studio", "both"] },
      ],
      {
        read: [
          "## 📧 Email 1",
          "**To:** Mr. Park, Pixel Studio · **Subject:** Start date — Junior Designer position",
          "Dear Mr. Park,\n\nThank you very much for offering me the position of Junior Designer. I am delighted to accept.\n\nI am writing to ask about my first day on 1 February. Could you please tell me what time I should arrive? I would also be grateful if you could let me know which documents I need to bring.\n\nI apologize for asking so many questions. I look forward to working with your team.\n\nKind regards,\nDana Sadykova",
          "## 💬 Email 2",
          "**To:** Leo · **Subject:** GUESS WHAT 🎉",
          "Hi Leo!\n\nJust a quick message to say THANK YOU! I got the job at the studio! 🎨 I can't believe it. I start on 1 February.\n\nYou introduced me, so I owe you a big coffee. Are you free on Saturday? Let me know!\n\nTalk soon,\nDana 😊",
        ].join("\n\n"),
      },
    ),
    trueFalse("Read again. True or false?", [
      ["Dana has accepted the job.", true],
      ["Dana uses “Hi” in the email to Mr. Park.", false],
      ["Dana uses short forms like “I'm” in the formal email.", false],
      ["Dana asks Leo to meet on Saturday.", true],
      ["Both emails have a clear reason for writing at the start.", true],
    ]),
  ]),

  section("Practice: Write it right", [
    gaps(
      "Complete the formal email with one word in each gap.",
      "Dear Sir or [Madam],\n\nI am [writing] to complain about an order I placed on your website. Unfortunately, the lamp arrived [damaged]. I would be grateful [if] you could send me a replacement. Please find [attached] a photo of the lamp.\n\nI look forward to [hearing] from you.\n\nKind [regards],\nKenji [Tanaka]",
    ),
    drag(
      "Complete the informal email.",
      "Hi Mia!\n\n[Sorry] for not writing sooner — work has been crazy! 😅 Just a [quick] message to say I'm coming to Tbilisi next month! [Can] you recommend a nice place to stay? Also, are you [free] on the 12th? Let's [catch] up over dinner. 🍷\n\n[Write] soon!\nAsel",
      ["Apologize", "Could", "grateful", "Regards"],
    ),
    gaps(
      "Make it formal. Rewrite the underlined idea in a formal way (one or two words).",
      "1. Hey! → [Dear] Mr. Smith,\n2. I'm writing to ask… → I [am] writing to ask…\n3. Can you send me the price? → [Could] you please send me the price?\n4. Sorry for the delay! → I [apologize/apologise] for the delay.\n5. Here's my CV. → Please find [attached] my CV.\n6. Write soon! → I look forward to [hearing] from you.",
    ),
    order(
      "Put the formal email in order.",
      [[
        "Dear Ms. Kim,",
        "I am writing to ask about the evening Korean course.",
        "Could you please tell me how much it costs?",
        "I would also be grateful if you could send me the timetable.",
        "I look forward to hearing from you.",
        "Kind regards, Daniyar Nurlanov",
      ].join("\n")],
      "lines",
    ),
    trueFalse("Email tips. True or false? 💡", [
      ["A clear subject line helps the reader.", true],
      ["Use emojis in formal emails to look friendly.", false],
      ["Say why you're writing in the first sentence or two.", true],
      ["In a formal email, write “I'm” and “can't”.", false],
      ["Check spelling and names before you press Send.", true],
    ]),
    match("Match the subject lines and the emails.", [
      ["Question about the June course", "asking a school for information"],
      ["Order #4815 — damaged screen", "complaining to an online shop"],
      ["Sorry I missed the meeting!", "apologizing to a colleague"],
      ["Party on Saturday? 🎉", "inviting a friend"],
      ["Application: Junior Designer", "applying for a job"],
      ["Thanks for everything!", "thanking someone for help"],
    ]),
  ]),

  section("Listening: A voicemail", [
    tip("A short voicemail (about 30 seconds). The student listens, takes notes, then answers it by email in the next section — like in real life!"),
    ...listening(
      "Listen to Laura's voicemail. Take notes.",
      "**Laura:** Hi, it's Laura from the English Club! I'm calling because we're organizing a speaking evening next month, and we'd love you to come and help. It's on Thursday the fifteenth, from seven to nine, at the City Library — the big room on the second floor. We need a few volunteers to lead small conversation groups. You don't need any experience — just bring your energy! Could you send me an email by Monday to say if you can come? And if you have any ideas for topics, please write them too. Oh, and there'll be free pizza! 🍕 Thanks — bye!",
    ),
    gaps(
      "Complete your notes.",
      "1. Event: a speaking [evening]\n2. Day and date: Thursday the [15th/fifteenth]\n3. Time: from 7 to [9/nine]\n4. Place: the City [Library], 2nd floor\n5. Laura needs: volunteers to lead conversation [groups]\n6. Reply by: [Monday]",
    ),
    quiz("Listen again. Choose.", [
      { q: "Do volunteers need experience?", options: ["*No, they don't.", "Yes, at least one year.", "Only teachers can help."] },
      { q: "How should you answer Laura?", options: ["*by email", "by phone", "in person"] },
      { q: "What else does Laura ask for?", options: ["*ideas for topics", "money for pizza", "a CV"] },
      { q: "What will there be at the event?", options: ["*free pizza", "a concert", "an exam"] },
    ]),
  ]),

  section("Writing: Answer Laura", [
    box(
      "✍️ B1 Preliminary, Writing Part 1",
      "Answer the message and use **all the notes**. About **100 words**.\n\nIs it formal or informal? Laura is a friendly club organizer → **neutral / friendly**: *Hi Laura, Thanks for your message…*",
    ),
    write(
      "Write an email to Laura (100 words). Use all the notes.",
      100,
      {
        read: "📝 **Your notes:**\n\n- Say yes or no — and why ✅\n- Suggest two topics for the conversation groups 💡\n- Ask a question about the evening ❓\n- Offer to bring something 🍰",
      },
    ),
  ]),

  section("Wrap-up", [
    text(
      "Talk to your teacher.",
      "- Which phrases from today will you use in your next real email?\n- Is it easier for you to write formal or informal emails? Why?",
    ),
    quiz("Quick quiz. Choose.", [
      { q: "A formal ending:", options: ["*I look forward to hearing from you.", "Write soon!", "Bye!"] },
      { q: "A formal start for an unknown person:", options: ["*Dear Sir or Madam,", "Hi there!", "Hey!"] },
      { q: "Informal: “Sorry for…” = Formal:", options: ["*I apologize for…", "My bad…", "Oops…"] },
      { q: "In formal emails we usually…", options: ["*don't use contractions or emojis", "use lots of emojis", "write in capitals"] },
    ]),
    box(
      "Phrase of the day: Reply all? 😱",
      "📧 **Reply all** — sends your answer to EVERYONE in the email. Be careful!\n\n*She clicked “reply all” by mistake, and 300 people read her joke about the boss.* 😬",
    ),
  ]),

  homework(
    [
      gaps(
        "Complete the phrases.",
        "1. I am [writing] to ask about your summer courses.\n2. I would be [grateful] if you could send me more information.\n3. Please find [attached] my application.\n4. I [apologize/apologise] for the late reply.\n5. I look forward to [hearing] from you.\n6. Kind [regards],",
      ),
      choose(
        "Formal or informal? Choose the best phrase for each email.",
        "1. To your boss: [*Could you please check my report?/Check my report!]\n2. To a friend: [*Hey! How are you?/Dear Sir,]\n3. To a hotel: [*I would like to book a room./Gimme a room.]\n4. To your cousin: [*Love, Mia/Yours faithfully, Mia]\n5. To a company: [*I am interested in the position./I want the job lol.]\n6. To a friend: [*See you soon!/I look forward to your reply.]",
      ),
    ],
    "Homework: Phrases",
  ),
  homework(
    [
      write("Formal email (100+ words): You want to join a language course abroad. Write to the school: ask about prices, dates and accommodation, and say what level you are.", 100),
      write("Informal email (80+ words): Tell a friend about the course you're planning to do. Ask if they want to join you.", 80),
      record("Record 1 minute: leave a voicemail for Laura. Say you can come to the speaking evening and suggest a topic. 📞", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
