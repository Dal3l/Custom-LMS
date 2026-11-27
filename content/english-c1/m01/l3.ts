import {
  box,
  choose,
  drag,
  gaps,
  homework,
  lesson,
  listening,
  match,
  quiz,
  record,
  section,
  sort,
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 1.3 The unreliable self — skills lesson: no new grammar; review of perfect forms and habits (1.1–1.2). V: memory (vivid, hazy, recall, distort, ring a bell, jog someone's memory…). S: "Can we trust our memories?" Main format: a false-memory experiment as a warm-up + a long reading (how memory rewrites our past, ~830 words) + Elizabeth Loftus' TED talk + a long listening (Zarina's podcast with a memory researcher, ~3:30).
// Facts checked: the word-list illusion — Roediger & McDermott (1995), after Deese (1959): after hearing bed, rest, tired, dream… many people "remember" the word sleep, which was not on the list; Frederic Bartlett, "Remembering" (1932) — the "War of the Ghosts" story: Cambridge students retold it shorter and more familiar (e.g. canoes became boats); Loftus & Palmer (1974) — the verb "smashed" vs "hit" changed speed estimates, and a week later about a third of the "smashed" group said they had seen broken glass (there was none), against about one in seven in the "hit" group; Loftus & Pickrell (1995) — "lost in the mall": about a quarter of the 24 adults came to remember, fully or partly, an event that had never happened; Neisser & Harsch — students wrote about the Challenger disaster (January 1986) the day after and again about two and a half years later; many later accounts were very different, yet people were confident; Talarico & Rubin (2003) — 9/11 memories faded like everyday memories, but people's confidence and sense of vividness stayed high. Elizabeth Loftus, TED (2013) "How reliable is your memory?".
// Warm-up format: a memory experiment (the teacher reads a word list) — after a sort in 1.2.
export default lesson("c1-1.3", "The unreliable self", () => [
  section("Warm-up: A memory experiment", [
    box(
      "Today you will…",
      "- test your memory — and catch it lying to you 🧠\n- read and hear how scientists showed that memories can be changed, and even invented 🔬\n- discuss: can we trust what we remember? 🤔",
    ),
    text(
      "A memory experiment 🎧",
      "Your teacher will read a list of 15 words, slowly, only once. Don't write anything — just listen and try to remember as many words as you can.\n\nThen close your eyes for 30 seconds… and answer the questions below. Be honest!",
    ),
    tip(
      "Read slowly, about one word per second, only once: *bed, rest, awake, tired, dream, wake, snooze, blanket, doze, slumber, snore, nap, peace, yawn, drowsy.* Then wait 30 seconds and let the student do the quiz. The word **sleep** is NOT on the list — many people are sure they heard it (Roediger & McDermott, 1995). Reveal it after the quiz.",
    ),
    quiz("Which words were on the list? Choose “yes” or “no”.", [
      { q: "bed", options: ["*yes", "no"] },
      { q: "sleep", options: ["yes", "*no"] },
      { q: "snore", options: ["*yes", "no"] },
      { q: "pillow", options: ["yes", "*no"] },
    ]),
  ]),

  section("Vocabulary: Remembering and forgetting", [
    words("Memory", [
      ["vivid", "🌈 very clear and detailed (about a memory)", "I have a vivid memory of my first day at school."],
      ["hazy", "🌫️ not clear, vague"],
      ["recall", "🔙 remember (more formal)"],
      ["a flashbulb memory", "📸 a very clear memory of where you were when you heard important news"],
      ["distort", "🌀 change something so that it is no longer true or accurate"],
      ["reconstruct", "🧱 build again from pieces"],
      ["fill in the gaps", "🧩 add the missing parts"],
      ["ring a bell", "🔔 sound familiar"],
      ["slip your mind", "💨 be forgotten"],
      ["on the tip of my tongue", "👅 I almost remember it, but not quite"],
      ["jog someone's memory", "🏃 help someone remember"],
      ["a false memory", "🎭 a memory of something that never happened"],
    ]),
    match("Match the sentences and the phrases.", [
      ["“Her name… it starts with an A… no, wait!”", "on the tip of my tongue"],
      ["“Sorry, I forgot your birthday completely.”", "slip your mind"],
      ["“That song sounds familiar.”", "ring a bell"],
      ["“Look at this photo — maybe it'll help you remember.”", "jog someone's memory"],
      ["“I remember exactly where I was when I heard.”", "a flashbulb memory"],
      ["“I only remember bits of that holiday — I was three.”", "hazy"],
    ]),
    gaps(
      "Complete with a word from the list above.",
      "1. The more we retell a story, the more we [distort] it.\n2. Our brain doesn't play back memories like a video — it [reconstructs] them.\n3. When we can't remember details, we fill in the [gaps] with what seems likely.\n4. Can you [recall] the name of your first teacher?\n5. Her description of the day was so [vivid] that I felt I was there.\n6. He's sure he met the president, but it's probably a [false] memory.",
    ),
  ]),

  section("Vocabulary in context: Remember, remind or recall?", [
    choose(
      "Choose the right word.",
      "1. [*Remind/Remember] me to call Grandma tonight.\n2. I can't [*remember/remind] where I put my keys.\n3. This song [*reminds/remembers] me of our first holiday.\n4. Police asked witnesses to [*recall/remind] what they had seen.\n5. Do you [*remember/remind] meeting her before?\n6. She has a [*vivid/hazy] memory of that day — she can describe every detail.",
    ),
  ]),

  section("Reading: Your memory is a storyteller", [
    tip("A long text (~830 words). First reading — 7 minutes: *What does the writer mean by “a storyteller, not a camera”?* Then the tasks. Ask the student to find two habits (*tend to, will…*) and three perfect forms in the text."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Bartlett's students made the story shorter and more familiar.", true],
        ["In Loftus and Palmer's study, the verb in the question changed people's answers.", true],
        ["The people in the “smashed” group had actually seen broken glass.", false],
        ["In the “lost in the mall” study, everyone remembered the invented event.", false],
        ["The Challenger study compared what students wrote at two different times.", true],
        ["After 9/11, people's confidence in their memories decreased quickly.", false],
        ["The writer thinks that an unreliable memory is completely useless.", false],
      ],
      {
        read: [
          "## 🧠 Your memory is a storyteller, not a camera",
          "Most of us tend to think of memory as a kind of recording. Something happens, our brain films it, and later, when we want to remember, we simply press play. The picture may get a little faded, but what we see is, broadly speaking, what happened. It is a comforting idea. It is also, according to almost a century of research, wrong.",
          "One of the first people to show this was the British psychologist Frederic Bartlett. In his book *Remembering*, published in 1932, he described what happened when he asked students at Cambridge to read a Native American folk tale called *The War of the Ghosts* and then to retell it, sometimes many times over months or years. The story was strange to them, with unfamiliar details and a puzzling ending. With each retelling, it changed. It became shorter. The strange parts disappeared or were explained. Canoes turned into boats. Without realizing it, the students had been rebuilding the story to fit what they already knew. Memory, Bartlett concluded, is not reproduction but reconstruction.",
          "Forty years later, the American psychologist Elizabeth Loftus took the idea further. In a famous experiment from 1974, she and John Palmer showed people films of car accidents and then asked them how fast the cars had been going. The only difference was one word in the question. When people were asked how fast the cars were going when they \"smashed\" into each other, they gave higher speeds than people who were asked about cars that \"hit\" each other. A week later, the participants were asked whether they had seen any broken glass. There had been none. Yet about a third of the \"smashed\" group said yes, compared with about one in seven of the \"hit\" group. A single verb had quietly added glass to the scene.",
          "Changing details is one thing. Could someone be made to remember an event that had never happened at all? In the 1990s, Loftus and her student Jacqueline Pickrell tried. They gave 24 adults short descriptions of four events from their childhood, collected with the help of relatives. Three were true. The fourth — getting lost in a shopping mall at the age of five and being rescued by an elderly person — had been invented. After being asked to think about the events over a couple of interviews, about a quarter of the participants came to remember the false event, fully or partly. Some of them even added details of their own.",
          "Perhaps, you might think, this only happens with small, unimportant memories. Surely we remember the big moments correctly — the ones we describe as \"burned into\" our minds? Psychologists call these *flashbulb memories*. On the day after the space shuttle *Challenger* exploded in January 1986, the psychologist Ulric Neisser and his colleague Nicole Harsch asked students to write down how they had heard the news. About two and a half years later, they asked the same students again. Many of the new accounts were very different from the originals: different places, different people, different sources of the news. And yet the students were often highly confident that their later versions were true.",
          "Something similar happened after the attacks of 11 September 2001. Jennifer Talarico and David Rubin asked students to record their memories of hearing the news, and also an ordinary memory from the same days. Over the following months, both kinds of memory became less consistent at about the same rate. The difference was in how they *felt*. The everyday memories felt less and less vivid. The flashbulb memories went on feeling clear and certain — even as they changed. In other words, the feeling of certainty is not a reliable sign of accuracy.",
          "Why would the brain work like this? One answer is that remembering exactly was never its main job. A memory system that reconstructs, combines and updates is very good at helping us learn, imagine the future and make sense of our lives. It lets us take the lessons of last winter and apply them to next winter. The price is that our past is always being slightly rewritten by our present.",
          "This has serious consequences. Eyewitness evidence has been shown to be much less reliable than courts once assumed, and Loftus has spent much of her career explaining this to judges and juries. But it also has personal ones. The story we tell about our childhood, our first love, or the argument we had with our brother is not a record. It is a version — and probably not the only one.",
          "None of this means that memory is useless. Most of what we remember is roughly right, and we couldn't live without it. It simply means that we should hold our memories a little more lightly. When you and a friend remember the same evening differently, it is quite possible that neither of you is lying. You are both storytellers, and you have both been editing. 📖",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What did Bartlett conclude about memory?", options: ["*We rebuild memories to fit what we already know.", "We remember strange stories better.", "Students have poor memories."] },
      { q: "What did the “broken glass” question show?", options: ["*The wording of a question can add false details to a memory.", "People don't notice details in films.", "Car accidents are hard to remember."] },
      { q: "What is surprising about flashbulb memories?", options: ["*They change but still feel certain.", "They never change.", "They are only about happy events."] },
      { q: "According to the writer, why might the brain reconstruct memories?", options: ["*It helps us learn, imagine and make sense of life.", "It saves energy during sleep.", "It protects us from bad memories."] },
      { q: "What is the writer's final advice?", options: ["*Hold your memories a little more lightly.", "Write down everything that happens.", "Don't trust your friends' memories."] },
    ]),
    gaps(
      "Find words in the article.",
      "1. less bright, less clear (about a picture): [faded]\n2. confusing, hard to understand: [puzzling]\n3. people who take part in an experiment: [participants]\n4. stories or descriptions of events: [accounts]\n5. the quality of being correct and exact: [accuracy]\n6. a person who saw a crime or accident: an [eyewitness/eye-witness]",
    ),
    match("Match the researchers and the findings.", [
      ["Bartlett (1932)", "a strange story became shorter and more familiar"],
      ["Loftus and Palmer (1974)", "one verb changed speed estimates"],
      ["Loftus and Pickrell (1995)", "a quarter remembered being lost in a mall"],
      ["Neisser and Harsch", "Challenger memories changed over two and a half years"],
      ["Talarico and Rubin (2003)", "memories faded but confidence stayed high"],
      ["Roediger and McDermott (1995)", "people “heard” a word that wasn't on the list"],
    ]),
  ]),

  section("Video: How reliable is your memory?", [
    video("Watch: Elizabeth Loftus — How reliable is your memory? (TED). Watch at least the first 10 minutes.", "PB2OegI6wvI"),
    text(
      "After the video: talk about it.",
      "- What real case does Loftus begin with? What went wrong?\n- Which of her experiments from the article does she describe? Did you learn anything new?\n- Loftus says memory works “a little bit more like a Wikipedia page”. What does she mean?\n- Should courts still use eyewitness evidence? With what precautions?",
    ),
    tip("The talk is about 17 minutes — watch the first 10 in class and the rest at home if there's time. Ask the student to retell the first case in 4–5 sentences, using past perfect: *He had been… The victim had…*"),
  ]),

  section("Listening: The memory detective", [
    tip("A long listening — about 3 minutes 30 seconds. Zarina's podcast: Dr. Hart, a psychologist who studies memory. First listen: *What surprising story does Zarina tell about her own family?* Second listen: the tasks."),
    ...listening(
      "Listen to Zarina's podcast. Her guest is Dr. Hart, a memory researcher.",
      "**Zarina:** Welcome back. Today's guest is Dr. Hart, a psychologist who has been studying memory for over twenty years. Dr. Hart, welcome.\n\n**Dr. Hart:** Thank you. Though I should warn you, I've talked about memory so much that I can't remember what I said in my last interview.\n\n**Zarina:** Perfect. Let me start with a confession. Last New Year, my brother and I had an argument about our childhood. I've always remembered that I broke our grandmother's favorite vase, and I'd felt guilty about it for twenty years. Then my brother said, \"No, that was me.\" And he's sure. Which of us is lying?\n\n**Dr. Hart:** Very possibly neither of you. This happens all the time in families. We tend to hear a story so often that we start to place ourselves in it. If your mother used to tell the vase story at every family dinner, both of you may have absorbed it and built your own version.\n\n**Zarina:** But I can see it! The blue flowers, the pieces on the carpet.\n\n**Dr. Hart:** I don't doubt it. But a vivid memory isn't necessarily an accurate one. Our brain fills in the gaps with details that seem likely. And the more often you remember something, the more chances it has to change. Every time you recall a memory, you rebuild it, a bit like retelling a joke. You keep the main structure, but the details drift.\n\n**Zarina:** That's slightly terrifying.\n\n**Dr. Hart:** It is, a little. But it's also what makes us flexible. If memory were a perfect recording, we'd struggle to learn from experience. We'd remember every single day separately instead of building general knowledge: kitchens tend to have knives, dogs tend to bark, my brother will always take the last biscuit.\n\n**Zarina:** That last one is definitely accurate.\n\n**Dr. Hart:** I believe you.\n\n**Zarina:** So can we ever know what really happened?\n\n**Dr. Hart:** Sometimes. Photos, diaries, letters, other witnesses — they all help. But even photos can mislead. There have been studies where researchers showed people altered photographs, for example a picture of them as a child in a hot-air balloon, and some of them went on to describe the balloon ride in detail.\n\n**Zarina:** Even though it had never happened.\n\n**Dr. Hart:** Even though it had never happened. Which is why I'm always a little cautious when someone says, \"I remember it as if it were yesterday.\"\n\n**Zarina:** What about very important moments? I've always assumed I'd remember my wedding day perfectly.\n\n**Dr. Hart:** You'll remember that it happened, of course, and the main points. But in ten years, you'll probably have changed several details without noticing. What tends to stay is the emotion. You might forget who sat where, but you won't forget how you felt.\n\n**Zarina:** Is there anything we can do to protect our memories?\n\n**Dr. Hart:** A few things. Write things down soon after they happen — not to stop the memory changing, but so you can compare later. Be careful with leading questions, especially with children: \"What color was the man's hat?\" assumes there was a hat. And be humble. When you disagree with someone about the past, start from the idea that you might both be partly wrong.\n\n**Zarina:** That would have saved a lot of arguments in my family.\n\n**Dr. Hart:** In every family, I suspect.\n\n**Zarina:** One last question. Do you trust your own memory?\n\n**Dr. Hart:** For important things, I keep notes. For everything else — I trust it about as much as I trust a good friend who loves telling stories. Mostly right, often entertaining, occasionally completely invented.\n\n**Zarina:** Dr. Hart, thank you. And to my brother: I'm still sure it was me.",
    ),
    quiz("Listen and choose.", [
      { q: "What did Zarina and her brother argue about?", options: ["*who broke their grandmother's vase", "who was their grandmother's favorite", "what color the vase was"] },
      { q: "How does Dr. Hart explain their disagreement?", options: ["*They both heard the story so often that they built their own versions.", "Her brother has a bad memory.", "Zarina was too young to remember."] },
      { q: "Why does Dr. Hart say an imperfect memory is useful?", options: ["*It lets us build general knowledge from experience.", "It helps us forget bad things.", "It makes us better storytellers."] },
      { q: "What tends to stay in long-term memories, according to Dr. Hart?", options: ["*the emotion", "who sat where", "the exact words"] },
      { q: "What is a “leading question”?", options: ["*a question that assumes a fact, like “What color was the hat?”", "a question asked by a leader", "the first question in an interview"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Dr. Hart has been studying memory for over twenty years.", true],
      ["Dr. Hart says one of them must be lying.", false],
      ["Every time we recall a memory, we rebuild it.", true],
      ["In some studies, altered photos led people to describe events that never happened.", true],
      ["Dr. Hart says you'll remember every detail of your wedding.", false],
      ["Dr. Hart doesn't keep any notes.", false],
    ]),
    gaps(
      "Complete the sentences from the podcast.",
      "1. I'd felt [guilty] about it for twenty years.\n2. A vivid memory isn't necessarily an [accurate] one.\n3. Our brain fills in the [gaps] with details that seem likely.\n4. My brother [will] always take the last biscuit.\n5. In ten years, you'll probably have [changed] several details.\n6. Be careful with [leading] questions, especially with children.",
    ),
  ]),

  section("Module review: perfect forms and habits", [
    choose(
      "Choose.",
      "1. I [*'d always believed/always believed] that memories were like recordings — until I read the article.\n2. By the end of the year, she [*'ll have been working/'ll work] here for a decade.\n3. [*Having heard/Hearing] the story so many times, I started to believe it was mine.\n4. My grandmother [*would/used] tell the same story at every dinner.\n5. He [*keeps forgetting/keeps forget] where he parked.\n6. People [*tend to/tend] remember emotions better than details.\n7. I seem [*to have lost/to lose] my glasses — have you seen them?\n8. Back then, I [*would never have guessed/never would guess] the truth.",
    ),
    drag(
      "Complete the paragraph with the words.",
      "My grandfather [would] tell us the same war story every New Year. He [kept] changing small details, and we [used] to laugh about it. [Having] heard it so many times, I could tell it myself. Years later, I found his diary. It turned out he [had] been a cook, not a pilot! By then, though, the story [had] become part of who he was.",
      ["will", "use", "has"],
    ),
  ]),

  section("Let's talk: Can we trust our memories?", [
    text(
      "Discuss 🗣️",
      "- Tell a story from your childhood that your family remembers differently. Who do you think is right — and why?\n- Have you ever been completely sure about something and then found out you were wrong?\n- Should courts convict people mainly on eyewitness evidence? Why / why not?\n- Would you take a pill to erase a painful memory? What might you lose?\n\nUse: *I'd always assumed… / It turned out that… / In hindsight… / I tend to… / It could be that…*",
    ),
    tip("Push for extended answers (1–2 minutes each) and for language from the module: perfect forms, habits, memory vocabulary. Challenge the student's view politely: *But what if…? Isn't it possible that…?* In a group: split into pairs for the first two questions, then discuss the last two all together."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "His name is on the ___ of my tongue!", options: ["*tip", "edge", "end"] },
      { q: "Does the name “Ji-woo” ring a ___?", options: ["*bell", "phone", "memory"] },
      { q: "Sorry, your email completely slipped my ___.", options: ["*mind", "memory", "head"] },
      { q: "A question that assumes the answer is a ___ question.", options: ["*leading", "loaded", "closing"] },
    ]),
    box(
      "Phrase of the day: memory is a storyteller",
      "📖 *“Memory works a little bit more like a Wikipedia page: you can go in there and change it — but so can other people.”* — Elizabeth Loftus, TED\n\n*Which of your memories would you most like to check?*",
    ),
  ]),

  homework(
    [
      gaps(
        "Module 1 review: complete with the right form of the verb in brackets.",
        "1. By the time I was twenty, I [had lived/'d lived] in four countries. (live)\n2. [Having spent] a year in Seoul, he spoke fluent Korean. (spend)\n3. My aunt [will spend/'ll spend] hours in her garden — she loves it. (spend — typical behavior)\n4. He's always [complaining] about the weather. (complain)\n5. I didn't [use] to like coffee, but now I love it. (use)\n6. By next summer, we [will have been living/'ll have been living] here for five years. (live)\n7. She claims [to have seen] a ghost in the castle. (see)\n8. People [tend to] trust confident speakers. (tend)",
      ),
      sort("Memory phrases: remembering or forgetting? Sort. 🧩", {
        "🔔 remembering": ["ring a bell", "jog someone's memory", "recall", "a vivid memory", "a flashbulb memory"],
        "💨 forgetting": ["slip your mind", "a hazy memory", "fade", "go blank"],
      }),
      trueFalse("Correct or not?", [
        ["Having been told the truth, she finally understood.", true],
        ["I would have long hair when I was young.", false],
        ["He keeps to interrupt me.", false],
        ["By June, I'll have finished all my exams.", true],
        ["She's forever losing her phone.", true],
      ]),
    ],
    "Homework: Module review",
  ),
  homework(
    [
      write(
        "Essay (220–260 words): “Eyewitness evidence should never be enough to convict someone of a crime.” Discuss, using ideas from the article, the TED talk and the podcast.",
        220,
        { read: "*Plan:* introduction (why the question matters) · arguments for · arguments against · your conclusion. Useful: *Research has shown that… / It could be argued that… / Having considered both sides, I…*" },
      ),
      record("Record a 2-minute story: your earliest memory. How sure are you about the details? Which parts might you have “filled in” later? 🎤", 150),
    ],
    "Homework: Writing and speaking",
  ),
]);
