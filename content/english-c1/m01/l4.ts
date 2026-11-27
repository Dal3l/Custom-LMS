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

// 1.4 Practical: Networking with confidence — functional language: opening a conversation, keeping it going, moving from small talk to business, leaving gracefully; softening requests (I was wondering whether…, It might be worth…, Would you be open to…?). Role play "a networking evening". Main format: conversation openers + a column (~720 words) + a long listening (Dana at a book fair in London, ~3:30) + role play; TED-Ed video at home.
// Characters: Kenji (team leader at a tech company in Almaty — "no meetings after two"), Dana (works remotely for a Barcelona publisher), new: Marco (an editor from Milan), Priya (a literary agent in London).
// Warm-up format: sort the openers — after a memory experiment in 1.3.
export default lesson("c1-1.4", "Practical: Networking with confidence", () => [
  section("Warm-up: Great opener or conversation killer?", [
    box(
      "Today you will…",
      "- start a conversation with a stranger — and keep it going 👋\n- move from small talk to business politely: *I was wondering whether… It might be worth…* 🎯\n- leave a conversation gracefully — and network at a “conference” 🍷",
    ),
    sort("You're at a conference. Great opener or conversation killer? Sort. 🧩", {
      "👍 great opener": ["I really enjoyed your talk — especially the part about remote teams.", "Is this your first time at this conference?", "Mind if I join you? I don't know anyone here yet.", "How do you know the organizers?", "That's a great badge design — are you a designer?"],
      "👎 conversation killer": ["So, what's your salary?", "Here's my card. Call me.", "This conference is so boring, isn't it?", "I've been talking to people for an hour and nobody is useful.", "You look tired."],
    }),
    text(
      "Talk to your teacher.",
      "- Do you enjoy meeting new people at events, or do you find it exhausting? Why?\n- What's the best way to start a conversation with a stranger, in your opinion?\n- Have you ever met someone by chance who later became important in your life or work?",
    ),
    tip("If the student doesn't go to conferences, any event works: a wedding, a parents' meeting, a course, a party where you only know the host. The language is the same."),
  ]),

  section("Reading: Networking for people who hate networking", [
    tip("A column (~720 words). First reading — 5 minutes: *What's Kenji's main piece of advice?* Then the tasks."),
    trueFalse(
      "Read the column. True or false?",
      [
        ["Kenji used to enjoy networking events.", false],
        ["At his first conference, Kenji spent a lot of time alone.", true],
        ["Kenji thinks you should talk to as many people as possible.", false],
        ["He suggests asking people how they got into their work.", true],
        ["According to Kenji, it's rude to end a conversation.", false],
        ["Kenji's colleague Aliya got a project after a short conversation in a queue.", true],
      ],
      {
        read: [
          "## 🍷 Networking for people who hate networking",
          "*by Kenji, a team leader at a tech company in Almaty*",
          "I should begin with a confession: for years, I hated networking. The word itself made me want to hide. I imagined people in expensive suits handing out business cards like playing cards, laughing too loudly at each other's jokes, and calculating, every few seconds, whether the person in front of them was \"useful\". I'm an engineer. I tend to prefer problems I can solve with a laptop.",
          "At my first big conference, I spent most of the coffee breaks pretending to read important messages on my phone. I would walk confidently towards the coffee, collect a cup, and walk confidently back to the wall, where I'd stay until the next session started. By the end of the second day, I had drunk eleven coffees and spoken to exactly one person, who turned out to be the man repairing the projector.",
          "What changed my mind wasn't a course or a book. It was a colleague who was, quite simply, brilliant at it. I asked her what her secret was, expecting a list of tricks. She laughed and said, \"I don't network. I'm just curious about people.\"",
          "That small change of perspective made an enormous difference. If you go to an event to \"network\", you're looking for useful people, and everyone can feel it. If you go to find out what other people are working on, you're simply having conversations — and conversations are something most of us know how to do.",
          "Here are the things I've learned since then.",
          "**Lower the target.** You don't need to talk to everyone. I now aim for two or three real conversations per event. Ten minutes with one interesting person is worth more than thirty cards from strangers you'll never remember. And if you're an introvert, like me, it's perfectly acceptable to take a short break outside between conversations. Nobody is counting.",
          "**Use the situation.** The easiest opener is something you are both experiencing. \"What did you think of that last talk?\" \"Is this your first time here?\" Even \"Do you know if there's any more coffee?\" works. Nobody expects you to be original in the first sentence.",
          "**Ask \"how\", not \"what\".** \"What do you do?\" gets a job title. \"How did you get into that?\" gets a story — and stories are where real conversations begin. People tend to light up when you ask about the path, not the position.",
          "**Move to business gently — or not at all.** If there is something you'd like to discuss, there's no need to be shy, but there's also no need to be pushy. \"I was wondering whether you'd be open to a quick call next week?\" is much easier to say yes to than \"We should work together.\" And if the moment isn't right, it's perfectly fine to simply enjoy the conversation and follow up later.",
          "**Leave well.** Many people stay in a conversation far too long because they don't know how to leave. It's not rude to end a conversation; it's rude to end it badly. \"I won't keep you — it's been great talking to you\" is warm, honest and gives both of you the freedom to move on. If you'd like to stay in touch, say so: \"Shall we swap details?\"",
          "**Follow up within two days.** A short message — \"Great to meet you at the conference; here's the article I mentioned\" — turns a pleasant chat into a connection. Without it, even the best conversation fades.",
          "My favorite networking story isn't mine. Last year, Aliya, one of the designers in my team, was standing in a queue for lunch at a design festival. The woman in front of her was struggling to read the menu without her glasses, so Aliya read it to her. They chatted for five minutes about bad lighting at conferences. Two weeks later, the woman — who ran a design agency — emailed Aliya and offered her a freelance project. \"I didn't network,\" Aliya told me. \"I read a menu.\"",
          "That, I think, is the real lesson. The best connections don't usually come from strategy. They come from being curious, kind and present — and from not hiding by the wall with your eleventh coffee. ☕",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What changed Kenji's attitude to networking?", options: ["*A colleague said she was just curious about people.", "He read a book about networking.", "He took a course on public speaking."] },
      { q: "Why does Kenji prefer “How did you get into that?” to “What do you do?”", options: ["*It gets a story, not just a job title.", "It's more polite.", "It's shorter."] },
      { q: "What does Kenji say about leaving a conversation?", options: ["*It's fine to leave, if you do it warmly.", "You should wait until the other person leaves.", "You should always give a reason."] },
      { q: "What is the real lesson of the column?", options: ["*Good connections come from curiosity and kindness.", "You need a clear strategy.", "Always bring business cards."] },
    ]),
    gaps(
      "Find words and phrases in the column.",
      "1. a way of thinking about something: [perspective]\n2. trying too hard to make people do what you want: [pushy]\n3. contact someone again after meeting them: [follow] up\n4. exchange (phone numbers, emails): [swap] details\n5. become happy and excited: [light] up\n6. continue to communicate: stay in [touch]",
    ),
  ]),

  section("Language: The four moves", [
    table("networking"),
    sort("Too direct, or softened? Sort. 🧩", {
      "💥 too direct": ["Give me your email.", "We should work together.", "I need to talk to your boss.", "Send me the report tomorrow.", "Call me next week."],
      "🌸 softened": ["I was wondering whether you'd be open to a quick call.", "It might be worth us talking about a project.", "Would it be possible to meet your manager?", "Could you possibly send me the report?", "Shall we swap details?"],
    }),
    choose(
      "Choose the most natural option.",
      "1. I was wondering [*whether you'd/if you will] be interested in a short meeting.\n2. It might be [*worth/value] us having a quick chat about it.\n3. Would you be [*open to/opened to] a call next week?\n4. Sorry to [*interrupt/interrupting], but are you Priya?\n5. I [*won't keep/don't hold] you any longer — it's been lovely talking to you.\n6. I'd better let you [*mingle/mixing] — I'm sure lots of people want to talk to you.",
    ),
    gaps(
      "Make the requests softer. Complete.",
      "1. Send me your portfolio. → I was [wondering] whether you could send me your portfolio.\n2. Let's meet. → Would you be [open] to meeting for a coffee?\n3. Introduce me to your editor. → Would it be [possible] to introduce me to your editor?\n4. We should discuss the contract. → It might be [worth] discussing the contract.\n5. I'm leaving now. → I [won't] keep you any longer.\n6. Give me your number. → Shall we [swap/exchange] details?",
    ),
    order("Make polite sentences.", [
      "I was wondering whether you'd be open to a quick call.",
      "It might be worth us talking about this next week.",
      "Do you mind if I join you?",
      "How did you get into publishing?",
      "It's been great talking to you.",
    ]),
    tip("Say it right: softeners sound polite only with the right tone — a slight rise and a relaxed pace: *I was ↗wondering whether you'd be ↗open to a quick call.* A flat, fast delivery sounds sarcastic. Practice the sentences from the table twice: first neutral, then warm."),
  ]),

  section("Vocabulary: Making connections", [
    words("Networking", [
      ["break the ice", "🧊 make people feel relaxed at the start of a conversation", "A joke about the coffee helped to break the ice."],
      ["mingle", "🍸 move around and talk to different people at an event"],
      ["build rapport", "🤝 create a good, friendly relationship"],
      ["a mutual acquaintance", "👥 a person you both know"],
      ["an elevator pitch", "🛗 a very short description of who you are and what you do (30 seconds)"],
      ["follow up", "📩 contact someone again after a first meeting"],
      ["put in a good word for someone", "💬 say good things about someone to help them"],
      ["touch base", "📞 talk briefly to find out how things are"],
      ["hit it off", "✨ like each other immediately"],
      ["a cold email", "🥶 an email to someone you've never met"],
    ]),
    match("Match the beginnings and endings.", [
      ["We discovered we had a mutual…", "…acquaintance — we both know Laura!"],
      ["We hit…", "…it off immediately and talked for an hour."],
      ["I'll put in a good…", "…word for you with my manager."],
      ["Let's touch…", "…base next month and see how the project is going."],
      ["A funny question is a great way to break…", "…the ice."],
      ["Prepare a 30-second elevator…", "…pitch before the conference."],
    ]),
    quiz("Choose the right phrase.", [
      { q: "You've just met someone and you both know Laura. Laura is…", options: ["*a mutual acquaintance", "an elevator pitch", "a cold email"] },
      { q: "You write to a CEO you've never met. It's…", options: ["*a cold email", "a follow-up", "a rapport"] },
      { q: "At a party, you walk around and talk to different people. You…", options: ["*mingle", "touch base", "hit it off"] },
      { q: "A colleague recommends you to her boss. She…", options: ["*puts in a good word for you", "breaks the ice", "follows up"] },
    ]),
  ]),

  section("Listening: At the book fair", [
    tip("A long listening — about 3 minutes 30 seconds. Dana (an editor who works for a publisher in Barcelona) is at a book fair in London. She meets Marco, an editor from Milan, and Priya, a literary agent. First listen: *Does Dana get what she wants?* Second listen: the tasks. Ask the student to notice the four moves."),
    ...listening(
      "Listen to Dana at a book fair in London.",
      "**Dana:** Sorry — mind if I share your table? Every other seat in this café seems to be taken.\n\n**Marco:** Please, go ahead. It's like this every year. I'm Marco, by the way.\n\n**Dana:** Dana. Nice to meet you. Is this your first time at the fair?\n\n**Marco:** My eighth, I'm afraid. I'm an editor in Milan, mostly translated fiction. And you?\n\n**Dana:** I'm with a publisher in Barcelona. Well, I'm with them, but I actually work from Almaty.\n\n**Marco:** Almaty! That's not something you hear every day. How did that happen?\n\n**Dana:** It's a long story. I went for a month and stayed four years. The job became remote, and I found a flat round the corner from the best bakery in the city. After that, there was no going back.\n\n**Marco:** That's a better reason than most people have for where they live. So what brings you to London?\n\n**Dana:** We're looking for Central Asian writers to translate into Spanish. There's some wonderful new fiction coming out in Kazakh and Russian, and nobody outside the region knows about it.\n\n**Marco:** Interesting. You should talk to Priya Shah — she's an agent, and she's been building exactly that kind of list. Oh — there she is. Priya!\n\n**Priya:** Marco! I've been looking for you all morning. Hello.\n\n**Marco:** Priya, this is Dana. She's with a publisher in Barcelona but lives in Almaty, and she's looking for Central Asian writers.\n\n**Priya:** Really? Then we should definitely talk. How did you get into publishing, Dana?\n\n**Dana:** By accident, honestly. I studied languages, did some translation work, and one of the books I translated did quite well. The publisher asked if I'd like to edit, and I've been doing it ever since.\n\n**Priya:** That's how most of the best editors I know started — by accident. I represent a few writers from the region. There's one novelist from Shymkent whose first book has just been published in Kazakh, and I'm trying to find the right publishers abroad.\n\n**Dana:** That sounds exactly like what we're looking for. I was wondering whether you'd be open to sending me a sample? Even a few chapters in Russian would be enough for me to read.\n\n**Priya:** Of course. Do you read Kazakh as well?\n\n**Dana:** Slowly. I've been taking lessons for three years. My teacher says I speak Kazakh like a polite tourist.\n\n**Priya:** That's more than most editors can say. Look, I'm rushing to a meeting in five minutes, but it might be worth us having a proper call next week. Would Tuesday or Wednesday suit you?\n\n**Dana:** Wednesday would be perfect. Morning in London is afternoon in Almaty, so anytime before noon works for me.\n\n**Priya:** Great. Shall we swap details? Here's my card.\n\n**Dana:** Thank you. And here's mine. I'll email you this evening, so you have everything in writing.\n\n**Priya:** Lovely. Marco, thank you — you've done me a favor.\n\n**Marco:** I'll expect a dinner for this. Both of you.\n\n**Priya:** Deal. Lovely to meet you, Dana. Talk on Wednesday!\n\n**Dana:** Looking forward to it.\n\n**Marco:** Well, that was the most productive coffee of the week.\n\n**Dana:** I owe you one. Seriously — what can I do in return? Are you looking for anything in particular this year?\n\n**Marco:** Since you ask… Spanish-language crime fiction. Short, dark, preferably with a detective who has a terrible personal life.\n\n**Dana:** I know at least three. I'll put in a good word with our rights team and send you some titles.\n\n**Marco:** Perfect. Now, I won't keep you any longer — I'm sure you've got a busy afternoon.\n\n**Dana:** I have, unfortunately. It's been really great talking to you, Marco. Thanks again.\n\n**Marco:** My pleasure. Enjoy the fair — and good luck with the novelist from Shymkent!",
    ),
    quiz("Listen and choose.", [
      { q: "How does Dana start the conversation with Marco?", options: ["*She asks if she can share his table.", "She asks about his talk.", "She gives him her card."] },
      { q: "Why is Dana at the book fair?", options: ["*to find Central Asian writers to translate into Spanish", "to sell her own novel", "to find a new job"] },
      { q: "How did Dana get into publishing?", options: ["*by accident, through translation work", "she studied publishing at university", "Marco helped her"] },
      { q: "What do Dana and Priya agree to do?", options: ["*have a call on Wednesday", "meet for dinner tonight", "sign a contract"] },
      { q: "How does Dana thank Marco?", options: ["*She offers to recommend Spanish crime fiction to him.", "She buys him lunch.", "She introduces him to her boss."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["This is Marco's first time at the book fair.", false],
      ["Dana went to Almaty for a month and stayed four years.", true],
      ["Priya represents a novelist from Shymkent.", true],
      ["Dana can't read Kazakh at all.", false],
      ["Priya has plenty of time to talk.", false],
      ["Dana promises to email Priya the same evening.", true],
    ]),
    gaps(
      "Complete the phrases from the conversation.",
      "1. Sorry — [mind] if I share your table?\n2. So what [brings] you to London?\n3. How did you get [into] publishing, Dana?\n4. I was wondering [whether/if] you'd be open to sending me a sample?\n5. It might be [worth] us having a proper call next week.\n6. Now, I won't [keep] you any longer.",
    ),
  ]),

  section("Role play: The networking evening", [
    text(
      "A networking evening 🍷",
      "You're at an evening event for professionals in your city. You have **one goal** — choose a card:\n\n- **A.** You're starting a small business (choose what) and you need a good designer.\n- **B.** You'd like to find a mentor in your field.\n- **C.** You're organizing a charity concert and need a venue.\n- **D.** You want to work abroad next year and need contacts.\n\nYour teacher plays different guests. In each conversation:\n\n1. 👋 **open** — use the situation\n2. 🔄 **keep it going** — ask *how*, not only *what*\n3. 🎯 **get to the point softly** — *I was wondering whether… / It might be worth…*\n4. 🚪 **leave gracefully** — and swap details\n\nThen swap roles: you're the guest, your teacher has the goal.",
    ),
    drag(
      "Complete the conversation with the words.",
      "A: Mind if I [join] you? I don't know anyone here yet.\nB: Of course. Is this your first [time] at one of these evenings?\nA: It is. So how did you get [into] event planning?\nB: Completely by accident, actually!\nA: I was [wondering] whether you'd be open to a quick call next week. I'm organizing a charity concert.\nB: Sure. Shall we [swap] details?\nA: Great. I won't [keep] you any longer — it's been lovely talking to you.",
      ["share", "for", "hold"],
    ),
    tip("Play 3–4 short conversations (2–3 minutes each), with different guests: a friendly one, a very busy one, one who talks too much (so the student practices leaving). Give feedback on the four moves first, then on language. In a group: half the class has goals, half are guests; rotate every three minutes."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "I was wondering ___ you'd be open to a quick call.", options: ["*whether", "that", "what"] },
      { q: "A joke about the queue helped to break the ___.", options: ["*ice", "silence", "wall"] },
      { q: "We hit it ___ immediately.", options: ["*off", "up", "on"] },
      { q: "I ___ keep you any longer.", options: ["*won't", "don't", "wouldn't"] },
    ]),
    box(
      "Phrase of the day: It's not what you know, it's who you know",
      "🤝 A popular saying about careers. Kenji and Aliya would add: *…and how curious you are about them.*\n\n*Do you agree with the saying? Is it fair?*",
    ),
  ]),

  homework(
    [
      video("Watch: TED-Ed — Networking for the networking averse (Lisa Green Chau).", "garadDEgkwU"),
      choose(
        "Choose the most natural option.",
        "1. [*Mind if I/Do I can] join you?\n2. So, what [*brings/carries] you here?\n3. How did you get [*into/onto] journalism?\n4. I was wondering [*whether/what] you'd be free for a coffee.\n5. It might be [*worth/worthy] contacting her directly.\n6. Would Tuesday [*suit/fit] you?\n7. I'd better [*let you mingle/let you to mingle].\n8. Let's keep in [*touch/contact].",
      ),
      order("Make sentences.", [
        "Would you be open to meeting next week?",
        "I'll put in a good word for you.",
        "Shall we swap details before you go?",
        "What did you think of the last talk?",
        "Let's touch base after the holidays.",
      ]),
    ],
    "Homework: Language",
  ),
  homework(
    [
      write(
        "You met someone interesting at a conference. Write a follow-up email (220–260 words): remind them who you are and where you met, mention something from your conversation, explain what you'd like (a call, advice, a collaboration) — politely and clearly — and suggest a next step.",
        220,
        { read: "*Useful:* It was a pleasure meeting you at… · As I mentioned… · I was wondering whether you'd be open to… · It might be worth… · Would… suit you? · I look forward to hearing from you." },
      ),
      record("Record your elevator pitch (30–60 seconds): who you are, what you do or study, and what you're looking for. Make it sound natural, not memorized! 🛗", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
