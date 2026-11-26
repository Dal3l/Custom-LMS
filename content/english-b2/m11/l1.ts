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

// 11.1 What I love about it is… — G: cleft sentences for emphasis: What-clefts (What I need is…, What happened was…, What she did was call…), It-clefts (It was Madina who…, It's the colors that…), "The thing / reason / problem is…", "All I want is…". V: language and communication (get the message across, beat around the bush — review, get the wrong end of the stick, be on the same wavelength, jargon, a misunderstanding, articulate, a mixed message, spell it out, read between the lines). S: give your opinion with emphasis. Main format: a language quiz + a long reading (the curse of knowledge — why experts explain badly, ~550 words) + a long listening (Madina and Dana untangle a client's confusing brief, ~3:15) + "say it with emphasis". Video at home (BBC Learning English, using "what" for emphasis).
// Facts checked: Elizabeth Newton (Stanford, 1990): "tappers" tapped the rhythm of well-known songs (e.g. "Happy Birthday") and predicted that listeners would guess about half of them; listeners guessed only about 2.5% (3 out of 120); Chip and Dan Heath popularized the experiment and the term "the curse of knowledge" in "Made to Stick" (2007); by native speakers, Mandarin Chinese is the most spoken language; counting second-language speakers too, English is the most spoken language (Ethnologue); Daniel Oppenheimer (2006): texts written with needlessly complicated words made readers judge the writers as less intelligent. Characters: Madina (designer with her own studio), Dana (designer, works remotely for a Barcelona publisher).
export default lesson("b2-11.1", "What I love about it is…", () => [
  section("Warm-up: Words quiz", [
    box(
      "Today you will…",
      "- find out why clever people often explain things badly 🧠😵\n- add emphasis: What I need is… It was Madina who… 💥\n- say what you really think — clearly and strongly 🗣️",
    ),
    quiz("Words and communication quiz! Guess. 💬", [
      { q: "In a 1990 experiment, people tapped famous songs on a table. How many songs did listeners guess?", options: ["*about 2.5%", "about 50%", "about 25%"] },
      { q: "How many did the “tappers” expect listeners to guess?", options: ["*about 50%", "about 2.5%", "100%"] },
      { q: "Which language has the most native speakers?", options: ["*Mandarin Chinese", "English", "Spanish"] },
      { q: "Which language has the most speakers if you count second-language speakers too?", options: ["*English", "Mandarin Chinese", "Hindi"] },
    ]),
    text(
      "Talk to your teacher.",
      "- Why do you think the tappers were so wrong? 🤔\n- Think of a teacher who explained things really well. What did they do?\n- What's the hardest thing about explaining something you know well?",
    ),
    tip("The tapping experiment is the hook for the reading. Notice how you naturally answer: *What they forgot was… The problem is…* — today's grammar."),
  ]),

  section("Vocabulary: Language and communication", [
    words("Language and communication", [
      ["get the message across", "📨 make people understand what you mean"],
      ["get the wrong end of the stick", "🥢 misunderstand completely"],
      ["be on the same wavelength", "📡 understand each other easily"],
      ["jargon", "🤓 special words only experts understand"],
      ["articulate", "🗣️ able to express ideas clearly"],
      ["a mixed message", "🔀 a message that seems to mean two different things"],
      ["spell it out", "🔤 explain very clearly, in simple words"],
      ["read between the lines", "📖 understand what isn't said directly"],
      ["get to the point", "🎯 say the important thing directly"],
      ["a misunderstanding", "🌀 when people understand something differently"],
    ]),
    match("Match.", [
      ["The lecture was full of", "jargon — I understood nothing."],
      ["She's very articulate —", "she always finds the right words."],
      ["I think you got the wrong", "end of the stick."],
      ["We're on the same", "wavelength — we finish each other's sentences."],
      ["He never says it directly — you have to", "read between the lines."],
      ["Do I have to spell it", "out for you?"],
    ]),
    gaps(
      "Complete with a word from the list.",
      "1. A good teacher gets the message [across] without long speeches.\n2. Please get to the [point] — we only have five minutes.\n3. Smiling while saying “no” sends a [mixed] message.\n4. Doctors should avoid medical [jargon] with patients.\n5. It wasn't a lie, just a [misunderstanding].\n6. She's so [articulate] that everyone listens when she speaks.",
    ),
  ]),

  section("Reading: The curse of knowledge", [
    tip("A long text (~550 words). First reading — 5 minutes: *What is the curse of knowledge, and how can we beat it?* Then the tasks. Ask the student to underline sentences that start with What… or It is / was…"),
    trueFalse(
      "Read the article. True or false?",
      [
        ["The tappers predicted that listeners would guess about half of the songs.", true],
        ["Listeners guessed most of the songs correctly.", false],
        ["The tappers could hear the melody in their heads.", true],
        ["The curse of knowledge mostly affects people who know very little.", false],
        ["The writer suggests using concrete examples.", true],
        ["According to the writer, simple explanations are a sign of weak knowledge.", false],
      ],
      {
        read: [
          "## 🧠 The curse of knowledge",
          "In 1990, a Stanford psychology student named Elizabeth Newton carried out a simple experiment. She divided people into two groups: \"tappers\" and \"listeners\". Each tapper chose a well-known song — \"Happy Birthday\", for example — and tapped its rhythm on a table. The listener's job was to guess the song.",
          "Before they started, Newton asked the tappers to predict how many songs the listeners would guess. Their answer was about half. What actually happened was very different. Out of 120 songs, the listeners guessed just three — about 2.5%.",
          "Why were the tappers so wrong? It's what was happening in their heads that explains it. As they tapped, they could hear the melody, the words, perhaps even the instruments. To them, the song was obvious. What the listeners heard, however, was just a series of knocks, like someone trying to send a message in Morse code. The tappers simply couldn't imagine what it was like not to know the tune. Many of them were even frustrated with the listeners: How could anyone not recognize \"Happy Birthday\"?",
          "This effect is now known as the curse of knowledge, a phrase made popular by the writers Chip and Dan Heath in their book Made to Stick. Once we know something, it becomes very hard to imagine not knowing it. And that's what makes experts such bad explainers. The doctor who uses medical jargon, the IT specialist who says \"just reset your router\", the teacher who skips three steps because they seem obvious — none of them is trying to be unclear. The thing is, they've forgotten what it felt like to be a beginner.",
          "You can see the curse everywhere. Instructions for new phones are often written by the engineers who designed them. Company emails are full of abbreviations that only the writer understands. It even happens in families: parents teaching teenagers to drive often forget how many things they do without thinking. It's often the most intelligent people in a meeting who are the hardest to follow.",
          "So what can we do about it? The first step is simply to be aware of it. What good communicators do is imagine their audience before they speak: Who are these people? What do they already know? What don't they know? The second step is to be concrete. Abstract ideas (\"We need to improve customer satisfaction\") are easy to say and hard to understand. Concrete examples (\"Last week, a customer waited forty minutes for a reply\") stick. The third step is to test your message. Explain your idea to a friend who knows nothing about the subject, and watch their face. If they look confused, it isn't their fault.",
          "Some people believe that complicated language makes them sound clever. In fact, research on writing suggests the opposite: readers tend to judge simple, clear writers as more intelligent. What really shows deep knowledge is the ability to explain something simply.",
          "So next time you're explaining something you know well, remember the tappers. All you can hear is the beautiful song in your head. All your listener can hear is the knocking. 🎵",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What did the listeners hear?", options: ["*just a series of knocks", "the melody and the words", "nothing at all"] },
      { q: "Why did the tappers feel frustrated?", options: ["*They couldn't understand why the songs weren't obvious.", "The table was too noisy.", "They forgot the songs."] },
      { q: "What is the curse of knowledge?", options: ["*Once we know something, we can't imagine not knowing it.", "Knowing too many languages.", "Forgetting what we learned."] },
      { q: "Which is an example of a concrete message?", options: ["*“Last week, a customer waited forty minutes for a reply.”", "“We need to improve customer satisfaction.”", "“Communication is important.”"] },
      { q: "According to the writer, what shows deep knowledge?", options: ["*explaining something simply", "using complicated words", "talking for a long time"] },
    ]),
    gaps(
      "Find words in the article.",
      "1. the pattern of beats in music: [rhythm]\n2. the tune of a song: the [melody]\n3. a code of short and long signals: [Morse] code\n4. short forms of words (e.g. IT, ASAP): [abbreviations]\n5. general, not about real things: [abstract]\n6. about real, specific things: [concrete]",
    ),
  ]),

  section("Grammar: What I need is…", [
    quiz("Notice the rule 🔍 Look: “What actually happened was very different.” · “It's what was happening in their heads that explains it.” · “The thing is, they've forgotten what it felt like.” · “All you can hear is the song in your head.”", [
      { q: "Why do we use “What actually happened was…” instead of “Something different happened”?", options: ["*to emphasize the important information", "because it's shorter", "because it's informal"] },
      { q: "In “It was Madina who called”, we emphasize…", options: ["*Madina (not someone else)", "the call", "the time"] },
      { q: "“All I want is a holiday” means…", options: ["*I want only one thing: a holiday", "I want everything", "I want many holidays"] },
    ]),
    table("cleft-sentences"),
    choose(
      "Choose.",
      "1. [*What I need/That I need] is a long holiday. 🏖️\n2. It was Leo [*who/what] found the guitar. (not Madina)\n3. [*What happened was/It happened was] that the bus broke down.\n4. [*All I want/All what I want] is some peace and quiet.\n5. It's the colors [*that/what] I love about this painting.\n6. What she did [*was call/was called] the police immediately.\n7. [*The thing is/The thing it is], I don't have enough money.\n8. It [*was/were] my grandparents who taught me to cook.",
    ),
    gaps(
      "Rewrite the sentences with emphasis. Use the words in brackets.",
      "1. I need a coffee. (What) → [What I need is] a coffee.\n2. Madina designed the posters, not Dana. (It) → [It was Madina who] designed the posters.\n3. I love the mountains here. (What) → [What I love here is/What I love is] the mountains.\n4. I only want to sleep. (All) → [All I want is] to sleep.\n5. The weather annoyed me, not the delay. (It) → [It was the weather that/It was the weather which] annoyed me.\n6. He apologized immediately. (What he did) → [What he did was] apologize immediately.",
    ),
  ]),

  section("Grammar: Say it with emphasis", [
    sort("What-cleft or It-cleft? Sort. 🧩", {
      "❓ What-cleft (What… is / was…)": [
        "What I love is the view.",
        "What surprised me was the price.",
        "What we need is more time.",
        "What she said was true.",
      ],
      "👉 It-cleft (It is / was… who / that…)": [
        "It was Kenji who fixed it.",
        "It's the noise that I hate.",
        "It was in Seoul that they met.",
        "It was my mum who taught me.",
      ],
    }),
    drag(
      "Complete Madina's message.",
      "Dana, [what] I really need right now is your help! The client called again. [It] was the director who changed everything this time. What he wants [is] a completely new logo by Friday. The [thing] is, he still hasn't told us the colors. [All] I'm asking for is one clear email. It's the uncertainty [that] drives me crazy! 😩",
      ["that's", "which", "who"],
    ),
    order("Make sentences.", [
      "What I need is a long holiday.",
      "It was Leo who found the guitar.",
      "All I want is some peace and quiet.",
      "The thing is, I don't have time.",
      "What surprised me was the price.",
    ]),
    tip("Say it right: stress the emphasized part and pause after *is / was*: *What I NEED (pause) is a HOLiday.* *It was LEO who found it.* Typical mistakes: *What I need it is…* (no extra it!), *It was Madina which…* (people → who), *All what I want…* → *All I want…*."),
  ]),

  section("Listening: The impossible brief", [
    tip("A long listening — about 3 minutes 15 seconds. A client has sent Madina's studio a confusing brief. She and Dana try to work out what he really wants. First listen: *What was the real problem with the brief?* Second listen: the tasks."),
    ...listening(
      "Listen to Madina and Dana talking about a client's brief.",
      "**Madina:** Dana, have you got a minute? I need a second brain. Read this email from the new client.\n\n**Dana:** \"We want a logo that is modern but traditional, simple but rich, bright but calm.\" Oh dear. That's a mixed message if I've ever seen one.\n\n**Madina:** Exactly! And it gets worse. \"It should feel like our company but not look like our company.\" What does that even mean?\n\n**Dana:** I think you have to read between the lines. Who wrote it?\n\n**Madina:** The director. He's an engineer, very clever, and he uses words like \"synergy\" in every sentence. Last week he asked me to make the logo \"more vertical in spirit\". I've been thinking about it for three days.\n\n**Dana:** More vertical in spirit? I'd love to know what that means.\n\n**Madina:** So would I. That's the whole problem.\n\n**Dana:** Ah. The curse of knowledge. He knows exactly what he wants. What he doesn't know is how to explain it to people who aren't inside his head.\n\n**Madina:** That's what I thought. The last time I worked with him, I got the wrong end of the stick completely. I designed something very bright and modern, and it turned out that what he'd meant by \"modern\" was \"looks like it was designed this year\", not \"looks like a phone app\".\n\n**Dana:** So what you need is a conversation, not another email.\n\n**Madina:** Yes, but he's always busy. The thing is, every time I ask a question, he sends another paragraph full of jargon.\n\n**Dana:** Then don't ask him to explain. Show him things. What works for me with difficult clients is pictures. Collect ten logos you like — some traditional, some modern — and ask him to point. \"This one, yes. This one, no.\" People who can't explain what they want can usually recognize it.\n\n**Madina:** That's clever. Like the tapping experiment, but the other way round. He can't sing me the song, but he'll recognize it when he hears it.\n\n**Dana:** Exactly. You play the melody; he says yes or no.\n\n**Dana:** Exactly. And when he points, ask \"What do you like about it?\" It's usually one small thing — a color, a shape — that matters to him.\n\n**Madina:** And what if he still doesn't know?\n\n**Dana:** Then you spell it out for him. \"So, what I'm hearing is that you want a dark blue logo with a simple shape and an old-fashioned font. Is that right?\" Make him say yes or no.\n\n**Madina:** I like that. It puts the decision back on him.\n\n**Dana:** And one more thing. Put everything in writing afterwards, in simple words. Because it's always the client who says, three weeks later, \"I never said that.\"\n\n**Madina:** Oh, don't remind me. That happened last year with a hotel. It was the manager who changed his mind, but somehow it was my fault.\n\n**Dana:** Exactly. So: pictures, simple questions, written summary. All you need is twenty minutes of his time.\n\n**Madina:** Dana, what I love about working with you is that you make impossible things sound easy.\n\n**Dana:** And what I love about working with you is that you pay for the coffee.\n\n**Madina:** Fair enough. Two lattes?\n\n**Dana:** Large ones. This client deserves them.",
    ),
    quiz("Listen and choose.", [
      { q: "What is the problem with the client's brief?", options: ["*It asks for opposite things at the same time.", "It's too short.", "It's in the wrong language."] },
      { q: "Why does Dana think the director explains badly?", options: ["*He suffers from the curse of knowledge.", "He doesn't care.", "He's very new to the job."] },
      { q: "What went wrong last time Madina worked with him?", options: ["*She misunderstood what he meant by “modern”.", "She missed the deadline.", "He didn't pay."] },
      { q: "What is Dana's main advice?", options: ["*Show him pictures and let him choose.", "Send a longer email.", "Refuse the job."] },
      { q: "Why should Madina put everything in writing?", options: ["*Clients sometimes deny what they said later.", "The law requires it.", "The director can't hear well."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["The director is an engineer.", true],
      ["Dana suggests asking the director to explain in more detail.", false],
      ["Dana says people can usually recognize what they want.", true],
      ["Madina once had a problem with a hotel manager.", true],
      ["Dana says Madina needs two hours of the director's time.", false],
      ["Madina will pay for the coffee.", true],
    ]),
    gaps(
      "Complete the sentences from the conversation.",
      "1. [What] he doesn't know is how to explain it.\n2. So what you [need] is a conversation, not another email.\n3. The [thing] is, every time I ask a question, he sends another paragraph.\n4. It's usually one small thing [that] matters to him.\n5. It's always the client [who] says, “I never said that.”\n6. [All] you need is twenty minutes of his time.",
    ),
  ]),

  section("Let's talk: Say it with emphasis", [
    text(
      "💥 Strong opinions",
      "Answer with emphasis — use a cleft sentence each time:\n\n- What do you love most about your city? → *What I love most is…*\n- Who taught you the most important lesson of your life? → *It was my… who…*\n- What annoys you most about modern technology? → *What really annoys me is…*\n- What would make you happy right now? → *All I want is…*\n- What's the problem with learning languages? → *The thing is,…*\n\nThen explain something you know well (a hobby, a game, your job) to your teacher in 1 minute — and avoid the curse of knowledge! 😄",
    ),
    tip("For the explanation task, play an absolute beginner: ask *What does that word mean?* every time the student uses jargon. Then discuss: was it hard to imagine not knowing?"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "___ I need is a holiday.", options: ["*What", "That", "Which"] },
      { q: "It was Madina ___ made the posters.", options: ["*who", "what", "which"] },
      { q: "Special words that only experts understand = ___", options: ["*jargon", "slang", "abbreviation"] },
      { q: "To misunderstand completely = to get the wrong end of the ___", options: ["*stick", "story", "line"] },
    ]),
    box(
      "Phrase of the day: if you can't explain it simply, you don't understand it well enough",
      "🧠 This quote is often attributed to Albert Einstein — but there's no evidence he said it! (Remember the fake quotes in 4.3?) True or not, the idea fits today's lesson.\n\n*Who is the best explainer you know?*",
    ),
  ]),

  homework(
    [
      video("Watch: BBC Learning English — Using 'what' to give emphasis.", "-80zSEMCrgw"),
      choose(
        "Choose.",
        "1. [*What I hate/That I hate] is waiting.\n2. It was my sister [*who/which] told me the news.\n3. [*All I want/All what I want] is to go home.\n4. What he did [*was apologize/was apologized].\n5. It's the people [*that/what] make this city special.\n6. [*The problem is/The problem it is], we're late.",
      ),
      gaps(
        "Rewrite with emphasis.",
        "1. I love the food here. → What [I love here is/I love is] the food.\n2. Kenji fixed the computer, not Aliya. → It was [Kenji who] fixed the computer.\n3. I just need a quiet room. → All [I need is] a quiet room.\n4. The rain spoiled the trip. → It was [the rain that/the rain which] spoiled the trip.\n5. She resigned the next day. → What she did [was resign] the next day.\n6. We don't have enough time. → The [thing is], we don't have enough time.",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      match("Match.", [
        ["get the message across", "make people understand"],
        ["jargon", "experts' special words"],
        ["articulate", "able to express ideas clearly"],
        ["a mixed message", "a message with two meanings"],
        ["spell it out", "explain very simply"],
        ["read between the lines", "understand what isn't said"],
      ]),
      write("Write an article (140–190 words) for a student magazine: “How to explain anything to anyone”. Give three tips and an example. Use at least four cleft sentences (What… is…, It was… who…, All… is…, The thing is…).", 140),
      record("Record a 1-minute explanation of something you know well — for a complete beginner. No jargon! 🎙️", 75),
    ],
    "Homework: Writing and speaking",
  ),
]);
