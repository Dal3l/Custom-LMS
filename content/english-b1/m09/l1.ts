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
  words,
  write,
} from "../../kit";

// 9.1 She said she was… — G: reported statements (say / tell, tense back-shift, time and place words). V: communication and gossip (gossip, a rumor, pass on, whisper, mention…). Say it right: that is weak /ðət/. S: pass on a conversation. Main format: a "broken telephone" game + a reading (a group chat planning a surprise party, ~300 words) + a listening (Dana tells Laura about her first meeting with her boss, ~1 min).
export default lesson("b1-9.1", "She said she was…", () => [
  section("Warm-up: Broken telephone", [
    box(
      "Today you will…",
      "- pass on what other people said: *She said she **was** tired.* 🗣️➡️\n- learn the difference between *say* and *tell* 🤔\n- talk about gossip and rumors 🤫",
    ),
    text(
      "Game: Broken telephone 📞",
      "Your teacher whispers (or writes in the chat for 5 seconds) a long sentence. Repeat it as exactly as you can!\n\n*“My neighbor's cousin has bought a purple car and is driving it to Turkey next Tuesday with three cats.”*\n\nThen tell your teacher what they said, starting with: **You said that…** — what changed? 😄\n\nNow swap: you invent a crazy sentence for your teacher!",
    ),
    text(
      "Talk to your teacher.",
      "- Have you ever heard a rumor about yourself? Was it true? How did it start? 🤫\n- Who is the person in your family or group of friends who always knows all the news?\n- Is gossip always bad? Can it ever be useful?",
    ),
    tip("When the student reports your sentence, model the back-shift naturally (*Yes — I said my neighbor's cousin HAD bought…*). Don't explain the rule yet."),
  ]),

  section("Vocabulary: Communication", [
    words("Communication and gossip", [
      ["gossip", "🗣️👂 talk about other people's private lives", "Stop gossiping about your colleagues!"],
      ["a rumor (rumour)", "🌀 a story that may not be true"],
      ["pass on (a message)", "➡️ tell someone what another person said"],
      ["whisper", "🤫 speak very quietly"],
      ["mention", "💬 say something briefly", "She mentioned that she was moving."],
      ["explain", "🧑‍🏫 make something clear"],
      ["admit", "😳 say that something bad is true", "He admitted that he was wrong."],
      ["complain", "😠 say you're not happy"],
      ["announce", "📢 tell many people officially"],
      ["keep a secret", "🔐 not tell anyone"],
      ["spread (news)", "🌊 make it go to more people"],
      ["get the wrong end of the stick", "🪵 understand something completely wrong"],
    ]),
    match("Match.", [
      ["pass on", "a message"],
      ["keep", "a secret"],
      ["spread", "a rumor"],
      ["admit", "a mistake"],
      ["announce", "the winner"],
      ["whisper", "in someone's ear"],
    ]),
    gaps(
      "Complete with a word from the list above.",
      "1. Please pass [on] the message to your mom. ➡️\n2. Don't tell anyone — can you keep a [secret]? 🔐\n3. In the library, people [whisper] so they don't disturb others.\n4. She [mentioned] that she had a new job — just in one sentence!\n5. He finally [admitted] that he had broken the window. 😳\n6. The director will [announce] the winners at 6 p.m. 📢\n7. There's a [rumor/rumour] that our office is closing. Is it true?\n8. I thought she was angry, but I got the wrong end of the [stick] — she was just tired.",
    ),
    quiz("Choose the right word.", [
      { q: "Can you ___ me how this machine works?", options: ["*explain", "complain", "whisper"] },
      { q: "My neighbors always ___ about the noise from our flat.", options: ["*complain", "announce", "mention"] },
      { q: "Bad news ___ very fast in a small town.", options: ["*spreads", "keeps", "admits"] },
      { q: "They love to ___ about celebrities' private lives.", options: ["*gossip", "explain", "pass on"] },
    ]),
  ]),

  section("Reading: The secret group chat", [
    tip("A group chat (~300 words). First reading: *What are they planning? What's the problem?* Then the tasks. After checking, ask the student to report some messages: *Leo said that…*"),
    trueFalse(
      "Read the group chat. True or false?",
      [
        ["The friends are planning a surprise party for Kenji.", true],
        ["Laura has already booked a restaurant.", false],
        ["Asel will bring a cake.", true],
        ["Kenji knows about the party.", false],
        ["Dana thinks Kenji might have seen the chat.", true],
      ],
      {
        read: [
          "## 💬 Group chat: “K's SURPRISE 🎂🤫” (Kenji is NOT in this chat!)",
          "**Laura:** OK everyone, Kenji's birthday is next Saturday. I want to do a surprise party at my flat. Who's in? 🙋‍♀️",
          "**Leo:** I'm in! I can bring my guitar. I've learned a new song. 🎸",
          "**Dana:** Please no, Leo 😂 Just kidding. I'm in too. I'll make the decorations.",
          "**Asel:** I'll bring a cake from the bakery — chocolate, his favorite! 🍫",
          "**Laura:** Perfect. I haven't invited anyone from his work yet. Does anyone have his colleagues' numbers?",
          "**Leo:** I don't, but Madina knows one of them. I'll ask her.",
          "**Laura:** Great. The plan: everyone arrives at 7. I'll take Kenji for a walk in the mountains in the afternoon, and we'll come back at 8. 🏔️",
          "**Dana:** Wait. Problem! Yesterday Kenji asked me what I was doing on Saturday. I said I was busy, and he looked a bit sad. 😬",
          "**Asel:** He asked me the same thing! I told him I had to work.",
          "**Dana:** Do you think he knows? Maybe he saw this chat on someone's phone?!",
          "**Laura:** Impossible. Don't worry — he'll be sad for a few days and then super happy! 😄",
          "**Leo:** OK, I can keep a secret. Probably. 🤐",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Who said it?", [
      { q: "“I can bring my guitar.”", options: ["*Leo", "Dana", "Laura"] },
      { q: "“I'll make the decorations.”", options: ["*Dana", "Asel", "Leo"] },
      { q: "“I haven't invited anyone from his work yet.”", options: ["*Laura", "Asel", "Dana"] },
      { q: "“I told him I had to work.”", options: ["*Asel", "Leo", "Laura"] },
    ]),
  ]),

  section("Grammar: Reported statements", [
    quiz("Notice the rule 🔍 Look: Leo wrote: “I can bring my guitar.” → Leo said he could bring his guitar. · Asel wrote: “I'll bring a cake.” → Asel said she would bring a cake.", [
      { q: "What happens to the verb?", options: ["*It usually goes one step back in time (can → could, will → would).", "It doesn't change.", "It goes into the future."] },
      { q: "What happens to “I” and “my”?", options: ["*They change to he / she, his / her.", "They stay the same.", "They disappear."] },
      { q: "“said” or “told”? Leo ___ Laura he could bring his guitar.", options: ["*told (tell + a person)", "said (say + a person)"] },
    ]),
    table("reported-statements"),
    choose(
      "Choose the right form.",
      "1. “I'm tired.” → She said she [*was/is being] tired.\n2. “I work from home.” → He said he [*worked/works yesterday] from home.\n3. “I'll call you later.” → She said she [*would/will] call me later.\n4. “I can't swim.” → He said he [*couldn't/can't not] swim.\n5. “We're moving to Almaty.” → They said they [*were moving/moved tomorrow] to Almaty.\n6. “I've lost my keys.” → She said she [*had lost/has losing] her keys.\n7. He [*told/said] me he was busy.\n8. She [*said/told] that she loved the film.",
    ),
    gaps(
      "Report the sentences.",
      "1. Dana: “I'm making the decorations.” → Dana said she [was making] the decorations.\n2. Asel: “I'll bring a cake.” → Asel said she [would bring] a cake.\n3. Leo: “I can keep a secret.” → Leo said he [could keep] a secret.\n4. Laura: “I haven't invited anyone.” → Laura said she [hadn't invited/had not invited] anyone.\n5. Kenji: “I feel a bit sad.” → Kenji said he [felt] a bit sad.\n6. Madina: “I know one of his colleagues.” → Madina said she [knew] one of his colleagues.\n7. Leo: “I learned a new song.” → Leo said he [had learned/had learnt] a new song.\n8. Dana: “I don't want to cook.” → Dana said she [didn't want/did not want] to cook.",
    ),
    sort("say or tell? Sort. 🗣️", {
      "say": ["She ___ she was tired.", "He ___ goodbye.", "They ___ that it was late.", "What did she ___?"],
      "tell": ["She ___ me she was tired.", "He ___ us a story.", "Can you ___ me the time?", "Don't ___ anyone!"],
    }),
    drag(
      "Complete the report.",
      "Yesterday I met Kenji. He [told] me that he [was] a bit sad because nobody [was] free on Saturday. He [said] he [would] probably stay at home and watch films. I [told] him not to worry. I almost told him the secret! 😅",
      ["say", "is", "will"],
    ),
    order("Make sentences.", [
      "She said she was tired.",
      "He told me he would call later.",
      "They said they had finished.",
      "She told us she couldn't come.",
      "He said he was moving to Almaty.",
    ]),
  ]),

  section("Listening: Dana's first day", [
    tip("About 1 minute. Dana tells Laura about her first meeting with her new boss at the design studio. First listen: *Is Dana happy?* Second listen: notice how she reports what her boss said."),
    ...listening(
      "Listen. Dana tells Laura about her first day at the design studio.",
      "**Laura:** So? How was your first day?\n\n**Dana:** Amazing! And a bit scary. My boss, Mr. Park, met me at the door. He said he had seen my portfolio and that he really liked my illustrations.\n\n**Laura:** That's great! What else did he say?\n\n**Dana:** He told me I would work on a book cover project first. He said the client was a big publisher, so it was important. Then he said I could choose my own desk. I chose the one by the window, of course. ☀️\n\n**Laura:** Of course! And your colleagues?\n\n**Dana:** They're really nice. One of them, Ali, said he had been at the studio for five years and that Mr. Park was strict but fair. He told me not to worry if I made mistakes in the first month.\n\n**Laura:** That's kind of him.\n\n**Dana:** And then — the funny part. At lunch, everyone said they were going to a café, so I went with them. At the café, Mr. Park said he wanted to tell me something important. I was so nervous! And then he said… that the coffee there was terrible and I should never order it. 😂\n\n**Laura:** Ha! I like him already.\n\n**Dana:** Me too. Oh, and Laura — Kenji asked me again what I was doing on Saturday. I told him I had a work dinner. I hate lying!\n\n**Laura:** Just three more days! 🤫",
    ),
    quiz("Listen and choose.", [
      { q: "What did Mr. Park say about Dana's portfolio?", options: ["*He really liked her illustrations.", "It was too short.", "He hadn't seen it."] },
      { q: "What will Dana work on first?", options: ["*a book cover", "a website", "a logo"] },
      { q: "What did Ali tell Dana?", options: ["*not to worry about mistakes in the first month", "to leave early", "that Mr. Park was unfair"] },
      { q: "What “important thing” did Mr. Park tell Dana?", options: ["*The coffee at the café was terrible.", "She had a pay rise.", "She had to work on Saturday."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Dana chose the desk by the window.", true],
      ["Ali has worked at the studio for five years.", true],
      ["Ali said Mr. Park was unfair.", false],
      ["Dana told Kenji the truth about Saturday.", false],
      ["The party is in three days.", true],
    ]),
    gaps(
      "Complete what Dana reported. Listen again if you need.",
      "1. He said he [had] seen my portfolio.\n2. He told me I [would] work on a book cover project first.\n3. He said I [could] choose my own desk.\n4. Ali said Mr. Park [was] strict but fair.\n5. He told me [not] to worry.\n6. I [told] him I had a work dinner.",
    ),
  ]),

  section("Say it right: She said that…", [
    box(
      "🗣️ Say it right",
      "In reported speech, **that** is weak: **/ðət/** — very short, or we leave it out!\n\n*She said **that** she was tired* → “She said ðət she was tired” or “She said she was tired”.\n\nThe stress goes on the important words: *She SAID she was TIRED.*",
    ),
    quiz("Which sounds more natural in fast speech?", [
      { q: "He said that he was busy.", options: ["*He said /ðət/ he was busy.", "He said /ðæt/ he was busy."] },
      { q: "She told me she was leaving.", options: ["*She TOLD me she was LEAVING.", "SHE told ME SHE was leaving."] },
      { q: "They said they'd come.", options: ["*They said they'd /d/ come.", "They said they would — strong /wʊd/ — come."] },
      { q: "I told him I couldn't.", options: ["*I TOLD him I COULDn't.", "I told HIM I couldn't."] },
    ]),
  ]),

  section("Let's talk: Who said what?", [
    text(
      "Game: The reporter 🎙️",
      "1. Your teacher tells you 5 sentences about their week (*I've started a new book. I'm going to the dentist tomorrow…*).\n2. Then report them as if telling a friend: *My teacher said she had started… She told me she was going…*\n3. Swap roles!\n\n**Then talk:**\n- What's the best piece of advice anyone has ever told you?\n- Did your parents tell you anything as a child that turned out not to be true? 😄\n- What did you say to your best friend the last time you talked?",
    ),
    tip("Correct the back-shift and *say / tell* gently. Point out that if something is still true, we don't always need to change the tense: *She said she's from Almaty* is fine if she still is."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "“I'm hungry.” → He said he ___ hungry.", options: ["*was", "is being", "has"] },
      { q: "She ___ me she was busy.", options: ["*told", "said", "spoke"] },
      { q: "“I'll help.” → She said she ___ help.", options: ["*would", "will", "can"] },
      { q: "not tell anyone =", options: ["*keep a secret", "spread a rumor", "pass on"] },
    ]),
    box(
      "Phrase of the day: a little bird told me",
      "🐦 **A little bird told me…** = I'm not going to say who told me this secret!\n\n*“How do you know it's my birthday?” — “A little bird told me!”* 😉",
    ),
  ]),

  homework(
    [
      video("Watch: how to use reported speech — 6 Minute Grammar.", "L-wTVCByxzk"),
      choose(
        "Choose.",
        "1. “I like jazz.” → She said she [*liked/likes yesterday] jazz.\n2. “We're tired.” → They said they [*were/are being] tired.\n3. “I'll be late.” → He said he [*would/will] be late.\n4. “I can drive.” → She said she [*could/can't] drive.\n5. She [*told/said] us a funny story.\n6. He [*said/told] that he was hungry.\n7. “I've seen it.” → She said she [*had seen/has see] it.\n8. “I don't know.” → He said he [*didn't know/doesn't knew].",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      gaps(
        "Complete.",
        "1. Can you pass [on] this message to Leo?\n2. I promise I'll keep the [secret].\n3. He [admitted] that he had eaten the last cake.\n4. She [mentioned] that she was learning Spanish.\n5. Don't spread [rumors/rumours]!\n6. They [whispered] so the baby wouldn't wake up.",
      ),
      write("Write about a conversation you had this week (100+ words). Report what the other person said and what you said. Use said, told, and at least five reported statements.", 100, {
        read: "*Example:* Yesterday I called my grandma. She said she had been to the doctor and that everything was fine. 😊 She told me she was knitting a scarf for me and that it would be ready by winter. I said I would visit her on Sunday. She said she would cook my favorite soup. Then she told me I worked too much and that I should rest more…",
      }),
      record("Record 1 minute: Tell a friend about a funny or surprising thing someone said to you recently. Use reported speech. 🎤", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
