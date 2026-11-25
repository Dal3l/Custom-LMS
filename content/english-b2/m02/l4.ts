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
  text,
  tip,
  trueFalse,
  write,
} from "../../kit";

// 2.4 Revision 1–2 — points for every task, in the format of Cambridge B2 First: Use of English Parts 1, 2 and 3, Reading Part 5 (a long text, ~560 words), Listening Part 1 (eight short extracts, ~3:10), Speaking Part 1; grammar and vocabulary of modules 1–2. Project: an article "A story I'll never forget" (140–190 words).
export default lesson("b2-2.4", "Revision 1–2", () => [
  section("Warm-up: How much do you remember?", [
    box(
      "Today you will…",
      "- check what you've learned in modules 1 and 2 ✅\n- try real B2 First task types for points 🎓\n- start your project: *A story I'll never forget* ✍️",
    ),
    quiz("Modules 1–2: how much do you remember? 🧠", [
      { q: "How fast can people judge if a face looks trustworthy?", options: ["*in about a tenth of a second", "in about ten seconds", "in about a minute"] },
      { q: "What does Asel's name mean?", options: ["*honey", "golden", "light"] },
      { q: "Why did Leo's band's car break down?", options: ["*There was no oil in the engine.", "It ran out of gas.", "It was too old."] },
      { q: "What did Juliane Koepcke follow to find people?", options: ["*the water", "the sun", "the search planes"] },
      { q: "What does STOP mean for a lost hiker?", options: ["*stop, think, observe, plan", "stay, try, open, phone", "sit, talk, order, pray"] },
    ]),
    text(
      "Talk to your teacher.",
      "- Which lesson of modules 1–2 did you enjoy most? Why?\n- Which grammar point still feels difficult?\n- Tell me one new word or phrase you've used outside our lessons. 😊",
    ),
    tip("Every task gives points. Don't help during the tasks; check after each part and explain the exam tip. Score guide: 80%+ excellent; 65–80% good — review the weak topics in the next warm-ups; under 65% — go back to the grammar sections of modules 1–2."),
  ]),

  section("Use of English Part 1: Choose the word", [
    tip("Exam tip: Part 1 tests collocations and fixed phrases. Read the whole sentence — often the word AFTER the gap decides the answer (*take part IN, depend ON*)."),
    choose(
      "Read the text and choose the best word for each gap.",
      "The power of a first impression 🧠\n\nResearch shows that we [*form/do/build/take] first impressions of other people in a fraction of a second. These quick judgments can have a big [*effect/affect/result/reason] on our decisions — for example, on who we [*vote/elect/choose/pick] for in elections. Psychologists [*warn/notice/remind/advise] that our first impressions are often wrong. However, it is possible to [*change/turn/move/switch] someone's opinion of us, although it [*takes/makes/gets/does] time. The best advice is to [*pay/give/make/take] attention to the other person and show real interest in what they say. In the [*end/last/final/finish], people remember how we made them feel.",
    ),
  ]),

  section("Use of English Part 2: One word", [
    tip("Exam tip: Part 2 tests grammar words — auxiliaries, prepositions, articles, linkers. Read the whole text first, then think: what KIND of word is missing?"),
    gaps(
      "Read the text and write ONE word in each gap.",
      "Lost in the fog ⛰️\n\nLast autumn, my friend and I [had] been walking in the mountains for about four hours [when] the fog came down. It was [so] thick that we couldn't see the path. At first we wanted to keep walking, but then I remembered [what] a rescuer had told me: stop and think. We sat down, drank some water and sent our location to my brother. [Luckily], he called the rescue service at once. We waited for three hours, singing songs to keep warm. It was [such] a relief when we finally heard voices! The rescuers told us we had done exactly the right thing — if we [had] kept walking, we would have reached a dangerous cliff. Now I never go hiking [without] telling someone my route.",
    ),
  ]),

  section("Use of English Part 3: Word formation", [
    tip("Exam tip: decide first which part of speech you need (noun? adjective? adverb?), then check if it should be negative or plural."),
    gaps(
      "Read the text. Use the word in brackets to form a word that fits the gap.",
      "1. Juliane's [survival] in the jungle was a miracle. (survive)\n2. She was an extremely [determined] young woman. (determine)\n3. It was [impossible] to see the path in the fog. (possible)\n4. Many people find job interviews [stressful]. (stress)\n5. It's [unusual] to meet your primary school teacher in another country. (usual)\n6. The [similarities] between the two twins were amazing. (similar)\n7. He answered the difficult question [honestly]. (honest)\n8. Our [disappointment] was huge when we had to turn back. (disappoint)",
    ),
  ]),

  section("Use of English Part 4: Say it differently", [
    tip("Exam tip: use the word in capitals WITHOUT changing it, and write 2–5 words. Keep the meaning exactly the same — check tense and negatives."),
    gaps(
      "Complete the second sentence so that it means the same as the first. Use the word in capitals and 2–5 words.",
      "1. We started walking at 9 and the storm began at 1. (BEEN) → We [had been walking] for four hours when the storm began.\n2. Where is the station? (KNOW) → Do [you know where the station] is?\n3. The film was very boring, so I left. (SUCH) → It was [such a boring film] that I left.\n4. It was very cold, so we stayed inside. (SO) → It was [so cold that] we stayed inside.\n5. I'm sure I told you about it! (DID) → I [did tell you] about it!\n6. Can you help me? (WONDERING) → I [was wondering if/was wondering whether] you could help me.",
    ),
  ]),

  section("Reading Part 5: A long text", [
    tip("Exam tip: the questions follow the order of the text. Find the right paragraph, read it carefully, and choose the option that says the same thing in different words. 8 minutes."),
    quiz(
      "Read Daniyar's blog post and choose the right answer.",
      [
        { q: "How did Daniyar feel during his first week in Seoul?", options: ["*lonely and unsure of himself", "excited all the time", "bored"] },
        { q: "What does Daniyar say about his Korean before he arrived?", options: ["*He had overestimated how good it was.", "He had never studied it.", "It was better than his English."] },
        { q: "What does “it” refer to in “it changed everything” (paragraph 3)?", options: ["*the conversation with the old woman at the market", "the welcome evening", "his grandmother's phone call"] },
        { q: "Why did Daniyar start speaking Korean more?", options: ["*He stopped being afraid of making mistakes.", "His teachers made him.", "His friends didn't speak English."] },
        { q: "What is Daniyar's attitude to his early mistakes now?", options: ["*He finds them funny and useful.", "He's still embarrassed by them.", "He thinks they were unimportant."] },
        { q: "What is the main purpose of the blog post?", options: ["*to encourage others who are starting a life abroad", "to complain about life in Seoul", "to advertise his university"] },
      ],
      {
        read: [
          "## 🇰🇷 My first month in Seoul: what nobody tells you",
          "*by Daniyar*",
          "Before I came to Seoul, I'd been imagining my new life for years. I had watched so many Korean series that I thought I knew exactly what to expect: friendly neighbors, delicious food on every corner and a city that never sleeps. Some of that was true. What nobody had told me was how lonely the first week would be. I'd been looking forward to independence, but when I closed the door of my tiny dormitory room on the first night, the silence was so loud that I called my grandmother twice before midnight.",
          "The biggest shock was the language. I'd been studying Korean for four years, and I had passed all my exams with good grades, so I was sure I would be fine. I wasn't. People spoke so fast, used so much slang and swallowed so many sounds that I understood about half of what I heard. Worse, whenever I tried to speak, my mind went blank. I started answering everything with \"yes\" and a smile, which once resulted in me accidentally signing up for a 6 a.m. running club.",
          "Then, at the end of my second week, something happened. I was at a market near the university, trying to buy fruit, when an old woman who was selling apples asked me where I was from. I explained, very slowly and with many mistakes, that I came from Almaty — and that the name of my city is often translated as \"father of apples\". She laughed so much that she had to sit down. Then she gave me an apple for free, corrected my grammar, and made me repeat the sentence until I said it properly. It changed everything. For the first time, I realized that people weren't waiting for my mistakes; they were waiting for me to try.",
          "After that, I made a rule: no more \"yes and a smile\". If I didn't understand, I asked. If I didn't know a word, I described it. Yes, I made mistakes — I once told my professor that I was \"very delicious\" instead of \"very full\". But every mistake was a lesson that I've never forgotten, and now I tell those stories at parties, where they've become my most popular jokes.",
          "One month later, I still don't understand everything. But I have a Korean friend, Ji-woo, who corrects me without making me feel stupid; a Brazilian friend, Lucas, who cooks better than anyone I know; and a lady at the market who keeps the best apples for me. I'm no longer the boy who sat alone in his room on the first night.",
          "So, if you're about to start a new life somewhere, here's my advice. The first weeks will probably be harder than you expect — and that's completely normal. Don't hide behind a smile. Talk to people, make mistakes, laugh at them, and keep going. One day you'll realize you've stopped counting the days until you go home, and started counting the days until your next adventure. ✈️",
        ].join("\n\n"),
      },
    ),
    gaps(
      "Find words in the blog post.",
      "1. a building where students live: a [dormitory]\n2. informal words used by a group of people: [slang]\n3. by mistake: [accidentally]\n4. joined, put your name on a list: signed [up]\n5. said what was wrong and how to say it right: [corrected]\n6. hit by a feeling of surprise: a [shock]",
    ),
  ]),

  section("Listening Part 1: Eight short extracts", [
    tip("Exam tip: you hear eight different situations. Read the question and the options before each extract — they tell you what to listen for. In the exam you hear each extract twice."),
    ...listening(
      "Listen to eight short extracts. Choose the right answer for each one.",
      "**1.**\n\n**Woman:** How was the job interview? You look exhausted.\n\n**Man:** It went on for two hours! But honestly, I think it went well. They asked me so many questions that I lost count. The best moment was when I asked about their plans for next year — the manager smiled and said it was a great question. So now I just have to wait until Friday.\n\n**Woman:** Fingers crossed!\n\n**2.**\n\n**Girl:** I didn't think I'd like camping, but I loved it. The tent leaked on the first night, and we'd been walking for six hours that day, so I was ready to go home. But the next morning the view from the hill was so beautiful that I forgot about everything else. We sat there for an hour, just watching the clouds. I've already booked another trip for next month.\n\n**3.**\n\n**Man:** Did you see the documentary about Juliane Koepcke? What I found most impressive wasn't that she survived the fall. It was that she stayed so calm afterwards. She remembered her father's advice and just kept going. I'm not sure I could have done the same. I panic when I lose my keys!\n\n**4.**\n\n**Woman:** I'm calling about the flat on Abai Avenue. I saw the advert yesterday. Could you tell me whether it's still available? And I was wondering if pets are allowed — I've got a small, very quiet cat. Please call me back on this number. Thank you!\n\n**5.**\n\n**Boy:** My grandad's always telling me stories about his travels. Apparently, he once missed a flight in Istanbul, met a stranger in the airport café, and they ended up traveling together for a month. That stranger became my grandmother! They've been married for fifty years now, and he still says missing that flight was the luckiest mistake of his life.\n\n**6.**\n\n**Man:** You'd think a name is just a name. But when I moved to Canada, everyone kept saying mine wrong. In the end I started using a nickname. It was easier, but sometimes I feel I lost a small part of myself. My mum still refuses to use the nickname — she says she didn't choose it.\n\n**7.**\n\n**Woman:** Our team leader is very easy-going, which is great most of the time. But last week we missed a deadline because nobody checked the final version. I do like him — I just wish he were a bit more organized. Maybe I should offer to make a checklist for the team.\n\n**8.**\n\n**Man:** Welcome to the city museum. Before we start, a few things. Photos are allowed, but please don't use flash. The tour takes about an hour, and we'll finish in the café on the top floor, where you get a free coffee with your ticket.",
    ),
    quiz("Listen and choose.", [
      { q: "1. How does the man feel about the interview?", options: ["*positive", "nervous", "angry"] },
      { q: "2. What made the girl change her mind about camping?", options: ["*the view in the morning", "a new tent", "a short walk"] },
      { q: "3. What impressed the man most about Juliane Koepcke?", options: ["*how calm she stayed", "how far she fell", "how fast she walked"] },
      { q: "4. Why is the woman calling?", options: ["*to ask about renting a flat", "to sell a flat", "to complain about a neighbor"] },
      { q: "5. Who did the boy's grandfather meet in Istanbul?", options: ["*his future wife", "an old school friend", "a famous traveler"] },
      { q: "6. How does the man feel about using a nickname?", options: ["*It's practical, but he has mixed feelings.", "He's very happy with it.", "He hates it."] },
      { q: "7. What does the woman think of her team leader?", options: ["*She likes him but thinks he should be more organized.", "She thinks he's too strict.", "She wants a new job."] },
      { q: "8. What is included in the ticket?", options: ["*a free coffee", "a guidebook", "a photo"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["1. The man will find out the result on Friday.", true],
      ["2. The girl never wants to go camping again.", false],
      ["3. The man thinks he would stay calm like Juliane.", false],
      ["5. The boy's grandparents have been married for fifty years.", true],
      ["6. The man's mother uses his nickname.", false],
      ["8. Visitors can take photos with flash.", false],
    ]),
  ]),

  section("Grammar check", [
    choose(
      "Choose the right answer.",
      "1. Who [*told/did tell] you about the party?\n2. Do you know where [*the museum is/is the museum]?\n3. A: I've never been to Japan. B: [*Haven't you?/Didn't you?]\n4. I [*do/am] like your idea — it's just a bit expensive.\n5. We [*had been driving/have been driving] for hours when the car broke down.\n6. By the time we arrived, the film [*had started/had been starting].\n7. It was [*such/so] a long day that I fell asleep at eight.\n8. The view was [*so/such] beautiful that nobody spoke.",
    ),
    gaps(
      "Complete with one or two words.",
      "1. What are you interested [in]?\n2. A: I don't eat meat. B: Neither [do] I.\n3. [Didn't] you get my message? I sent it yesterday!\n4. She was tired because she [had been] working all day.\n5. I was [wondering] if you could help me.\n6. [Luckily/Fortunately], someone found my wallet.",
    ),
    trueFalse("Correct or not?", [
      ["Who did call you last night?", false],
      ["Could you tell me what time it starts?", true],
      ["We had been waiting for an hour when the bus came.", true],
      ["It was so a strange day.", false],
      ["A: I love jazz. B: So do I.", true],
      ["Do you know where does she live?", false],
    ]),
  ]),

  section("Vocabulary check", [
    match("Match the words and the meanings.", [
      ["open-minded", "happy to listen to new ideas"],
      ["down to earth", "practical and not arrogant"],
      ["get stranded", "be stuck with no way to leave"],
      ["out of the blue", "suddenly and unexpectedly"],
      ["a search party", "a group looking for someone who's lost"],
      ["be named after", "get the same name as someone"],
    ]),
    sort("Sort the words and phrases. 🧩", {
      "🧑 personality": ["short-tempered", "a people person", "level-headed"],
      "🧳 travel trouble": ["break down", "miss a connection", "take a wrong turn"],
      "🍀 chance and luck": ["a stroke of luck", "in the nick of time", "what are the odds"],
    }),
    drag(
      "Complete the story.",
      "I'll never forget my trip to Turkey. We had been [traveling] for twelve hours when our flight was [diverted] to another city because of a storm. We were [stranded] at the airport all night. Then, out of the [blue], a woman asked if we spoke Russian. It was my old classmate! What are the [odds]? She was so [easy-going] that the long night became a party. 🎉",
      ["travel", "left", "luck"],
    ),
  ]),

  section("Speaking Part 1: Questions about you", [
    text(
      "Answer your teacher's questions 🗣️",
      "In B2 First Speaking Part 1, the examiner asks you questions about yourself. Answer with 2–3 sentences, give a reason or an example.\n\n- What do people usually notice first about you?\n- Who in your family are you most similar to? In what way?\n- Tell me about a journey you remember well.\n- Have you ever had a lucky escape?\n- What would you like to change about your daily routine?\n- Do you prefer spending free time alone or with other people? Why?",
    ),
    tip("About 2 minutes. Give feedback on extending answers (*because…, for example…, actually…*) and on the grammar of modules 1–2."),
  ]),

  section("Writing: plan your article", [
    order(
      "Put the parts of a good article in the right order.",
      [[
        "a title that makes people want to read",
        "a hook: a question or a surprising first sentence",
        "the background: where, when, who, what had been happening",
        "the main event, told with linkers and vivid details",
        "the ending: what happened in the end",
        "what you learned — and a final thought for the reader",
      ].join("\n")],
      "lines",
    ),
    tip("Brainstorm the project story together: the student tells it in 1 minute, you help find a hook and a strong last sentence."),
  ]),

  section("Your result and the project", [
    trueFalse("Check yourself. Can you do it? True or false? ✅", [
      ["I can ask every kind of question, including indirect questions.", true],
      ["I can react naturally: Have you? So do I. I DO like it!", true],
      ["I can describe personality with compound adjectives and idioms.", true],
      ["I can tell a story with the Past Perfect Continuous.", true],
      ["I can use so / such… that and comment adverbs in a story.", true],
    ]),
    tip("This list is for reflection: if the student wants to say “false”, talk about it and plan review. Count the points from today's tasks together."),
    box(
      "✍️ Project: A story I'll never forget",
      "Write an **article** (140–190 words) for an English-language website, *“Stories that changed me”*.\n\n**Include:**\n- a hook in the first sentence\n- background with *had been + -ing*\n- what happened — with linkers (*the moment, eventually, in the end*)\n- *so… that* or *such… that*\n- what you learned or how it changed you\n\n🎧 Or record it as a 2–3 minute audio story.",
    ),
  ]),

  homework(
    [
      choose(
        "Choose.",
        "1. Which team [*won/did win] the match?\n2. I wonder [*if/that] she's coming.\n3. A: She can't swim. B: [*Can't she?/Doesn't she?]\n4. We [*had been living/had lived] there for ten years when we moved.\n5. It was [*so/such] cold that the river froze.\n6. [*Apparently/Hopefully], he's getting married next month — his sister told me.",
      ),
      gaps(
        "Word formation.",
        "1. He has a great sense of [humor/humour]. (humorous)\n2. Her [kindness] surprised everyone. (kind)\n3. The trip was a complete [disaster]. (disastrous)\n4. It was a [breathtaking] view. (breath)\n5. She's very [self-confident] — she's not afraid of anything. (confidence)\n6. The [rescuers] arrived just in time. (rescue)",
      ),
      order("Make sentences.", [
        "Do you know what time the shop closes?",
        "We had been walking for hours.",
        "It was such a beautiful day.",
        "Luckily, nobody was hurt.",
        "Who did you go to the concert with?",
      ]),
    ],
    "Homework: Review",
  ),
  homework(
    [
      write("Project: write your article “A story I'll never forget” (140–190 words).", 140),
      record("Project (option): record your story as an audio story (2–3 minutes). 🎧", 180),
    ],
    "Homework: Project",
  ),
]);
