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
  table,
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 1.2 I do care! — G: auxiliary verbs: emphatic do / does / did (I DO care), short answers that disagree (I do, actually), echo questions (Did you? Have they?), so / neither and "I do too / I don't either", question tags with rising and falling intonation. V: personality idioms (a people person, down to earth, a team player…). S: react in a lively way, disagree politely. Main format: ranking annoying conversation habits + a long reading (introverts, extroverts and ambiverts, ~540 words) + a long listening (Madina and her grandmother Saule do a personality quiz, ~3:10). Video at home (Susan Cain, TED).
// Facts checked: Carl Jung — introversion / extraversion in "Psychological Types" (1921); Susan Cain — "Quiet: The Power of Introverts in a World That Can't Stop Talking" (2012) and her TED talk (2012); Adam Grant (2013, Psychological Science) — in a study of call-center sales staff, ambiverts earned more in sales than both strong introverts and strong extroverts.
export default lesson("b2-1.2", "I do care!", () => [
  section("Warm-up: Conversation killers", [
    box(
      "Today you will…",
      "- react in a lively, natural way: *Did you? So do I! I DO like it!* 🗣️\n- talk about personality with idioms: *She's a real people person.* 🧩\n- find out if you're an introvert, an extrovert — or something in between",
    ),
    order(
      "Rank these conversation habits from the MOST annoying (top) to the LEAST annoying (bottom). There's no right answer — then compare with your teacher! 😤",
      [[
        "checking your phone while someone is talking",
        "interrupting all the time",
        "turning every story into a story about yourself",
        "never asking the other person a question",
        "giving one-word answers: “Yeah.” “OK.” “Fine.”",
        "finishing other people's sentences",
      ].join("\n")],
      "lines",
    ),
    text(
      "Talk to your teacher.",
      "- Which habit annoys you most? Who does it — be careful with names! 😄\n- Be honest: which of these habits do *you* sometimes have?\n- What makes someone a really good person to talk to?",
    ),
    tip("The order task has no single correct answer — the checking shows one possible order. Use it to start the discussion: *Why did you put it first?*"),
  ]),

  section("Grammar: Auxiliaries that bring a conversation to life", [
    quiz("Notice the rule 🔍 Look: “You don't care about me!” — “I DO care!” · “I went to Seoul last year.” — “Did you?” · “I love jazz.” — “So do I.”", [
      { q: "Why does the speaker say “I do care” and not “I care”?", options: ["*to disagree strongly and add emphasis", "because it's a question", "because it's in the past"] },
      { q: "“Did you?” in the second example shows…", options: ["*interest or surprise", "that the speaker doesn't believe it at all", "a grammar mistake"] },
      { q: "In “So do I”, the auxiliary “do” agrees with…", options: ["*the verb in the first sentence (love — present simple)", "the subject “I”", "nothing — it's always “do”"] },
    ]),
    table("auxiliaries"),
    choose(
      "Choose the best reply.",
      "1. A: You never listen to me! B: I [*do/am] listen! I just didn't hear you.\n2. A: I've never been to a rock concert. B: [*Haven't you?/Don't you?] We must go together! 🎸\n3. A: I'm exhausted. B: So [*am/do] I. Let's go home.\n4. A: I can't swim. B: Neither [*can/do] I.\n5. A: Madina didn't come to the party. B: [*Didn't she?/Wasn't she?] Why not?\n6. A: You don't like cats, do you? B: I [*do, actually/don't, actually]! I've got two.\n7. A: Kenji has got a new job. B: [*Has he?/Is he?] Where?\n8. A: I didn't enjoy the film. B: Neither [*did/didn't] I.",
    ),
    drag(
      "Complete with auxiliaries.",
      "A: You don't really like my cooking, [do] you?\nB: I [do] like it! I just wasn't hungry.\nA: You said that last time too.\nB: [Did] I? Well, it was true then as well.\nA: Hmm. My sister loves it.\nB: So [does] her husband — he eats everything! 😄\nA: You've never cooked for me, [have] you?\nB: No, I [haven't]. But I will on Saturday. I promise!",
      ["don't", "am", "has"],
    ),
    gaps(
      "Emphasize! Rewrite with do / does / did.",
      "1. I like your new haircut. → I [do like] your new haircut — it really suits you!\n2. She works hard. → She [does work] hard, even if her boss doesn't think so.\n3. We tried to call you! → We [did try] to call you — five times!\n4. He looks tired. → He [does look] tired. Is he OK?\n5. I remember her name. → I [do remember] her name… it's on the tip of my tongue!\n6. They enjoyed the trip. → They [did enjoy] the trip, despite the rain.",
    ),
    tip("Say it right: in emphatic sentences the auxiliary is stressed — *I DO care.* In question tags the voice goes down ↘ when you're sure (*It's cold, isn't it?* ↘) and up ↗ when you really ask (*You're coming, aren't you?* ↗). Drill both."),
  ]),

  section("Vocabulary: Personality idioms", [
    words("Personality idioms", [
      ["a people person", "🤝 someone who enjoys and is good at being with people"],
      ["down to earth", "🌱 practical, honest and not arrogant"],
      ["a team player", "⚽ someone who works well with others"],
      ["a know-it-all", "🤓 someone who thinks they know everything"],
      ["a couch potato", "🛋️ someone who watches TV a lot and doesn't exercise"],
      ["the life and soul of the party", "🎉 the most fun and lively person at a party (UK)"],
      ["have a heart of gold", "💛 be very kind and generous"],
      ["thick-skinned — thin-skinned", "🛡️ not easily upset by criticism — 🥀 easily upset"],
      ["set in your ways", "🪨 not willing to change your habits"],
      ["a dark horse", "🐎 someone with hidden talents that surprise people"],
      ["keep yourself to yourself", "🔒 be private, not share much about your life"],
      ["have your head in the clouds", "☁️ be a dreamer, not practical"],
    ]),
    match("Match the people and the idioms.", [
      ["My uncle eats the same breakfast every day and won't try anything new.", "set in his ways"],
      ["She doesn't care what people say about her work.", "thick-skinned"],
      ["Nobody knew he could sing — then he won the talent show!", "a dark horse"],
      ["He tells everyone how to do their job — even the doctor.", "a know-it-all"],
      ["My neighbor helps everyone and never asks for anything.", "has a heart of gold"],
      ["She remembers everyone's name and loves meeting new people.", "a people person"],
    ]),
    quiz("Choose the right idiom.", [
      { q: "He's famous, but he's very ___ — he still takes the bus and chats with everyone.", options: ["*down to earth", "set in his ways", "a couch potato"] },
      { q: "She's quiet at work and never talks about her private life. She ___.", options: ["*keeps herself to herself", "is the life and soul of the party", "is a know-it-all"] },
      { q: "We need someone who can work with others — a real ___.", options: ["*team player", "dark horse", "couch potato"] },
      { q: "He's always dreaming about becoming a rock star. He ___.", options: ["*has his head in the clouds", "is down to earth", "is thick-skinned"] },
    ]),
    gaps(
      "Complete with a word from the idioms.",
      "1. Don't take his jokes personally — he's not mean, he's just a bit of a [know]-it-all.\n2. She cried when her boss criticized her report. She's very [thin]-skinned.\n3. He works well with everyone. He's a real team [player].\n4. Grandma gives all her money to charity. She has a heart of [gold].\n5. At parties, Leo is always the life and [soul] of the party.\n6. My brother never leaves the sofa. He's such a couch [potato]! 🛋️",
    ),
  ]),

  section("Reading: Quiet, loud — or both?", [
    tip("A long text (~540 words). First reading — 5 minutes: *Which type are you — and does the article agree with your idea of yourself?* Then the tasks."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Carl Jung described introversion and extraversion more than 100 years ago.", true],
        ["According to the article, introverts are usually shy.", false],
        ["Extroverts often feel full of energy after spending time with people.", true],
        ["Susan Cain says schools and offices are often designed for extroverts.", true],
        ["In Adam Grant's study, the best salespeople were strong extroverts.", false],
        ["The writer thinks personality types are fixed boxes.", false],
      ],
      {
        read: [
          "## 🔋 Quiet, loud — or both?",
          "Picture two friends leaving a party at midnight. One of them feels fantastic: \"That was brilliant! Shall we go somewhere else?\" The other one feels completely drained and wants nothing more than a quiet room and a cup of tea. Neither of them is strange. They are simply showing the difference between an extrovert and an introvert.",
          "**Where it all began.** The words were made popular by the Swiss psychiatrist Carl Jung in his book *Psychological Types*, published in 1921. Jung believed that some people direct their energy mainly outward — towards other people and activities — while others direct it inward, towards their own thoughts and feelings. A century later, psychologists still use these ideas, although they now measure them very differently.",
          "**It's about energy, not shyness.** One of the biggest misunderstandings is that introverts are shy. Shyness is a fear of being judged by others. Introversion is about where you get your energy. Many introverts are confident speakers and good leaders — they just need time alone afterwards to recharge. And some extroverts are actually quite shy: they love being around people, but they're nervous about what others think of them.",
          "**The power of introverts.** In 2012, the American writer Susan Cain published *Quiet: The Power of Introverts in a World That Can't Stop Talking*, and her TED talk on the same subject has been watched millions of times. Cain argues that many schools and offices are designed for extroverts: open-plan offices, endless group work, meetings where the loudest person wins. As a result, she says, we lose the ideas of quiet people, who often think more carefully before they speak. She doesn't say introverts are better — she says we need both.",
          "**Meet the ambivert.** Most of us, however, are not at either extreme. Psychologists use the word *ambivert* for people who are somewhere in the middle: they enjoy a party, but they also enjoy a quiet weekend with a book. A famous study by the organizational psychologist Adam Grant, published in 2013, looked at people working in sales at a call center. You might expect the most talkative, outgoing people to sell the most. They didn't. The ambiverts did better than both strong extroverts and strong introverts. Grant's explanation was simple: ambiverts know when to talk and when to listen.",
          "**So, which one are you?** Online quizzes love to put people in boxes, but real personality is more complicated. You might be the life and soul of the party with your old friends and keep yourself to yourself at work. You might love speaking in public and still need a whole Sunday alone to recover. Your personality can also change a little over time, with age, jobs and experience.",
          "Perhaps the most useful thing is not to find the right label but to understand what gives you energy and what takes it away. If you're an introvert, it's OK to leave the party early. If you're an extrovert, it's OK to need people. And if you're somewhere in between — congratulations: you might just be a better salesperson than you think. 😉",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What is the main difference between introverts and extroverts, according to the article?", options: ["*where they get their energy", "how intelligent they are", "how shy they are"] },
      { q: "What does Susan Cain criticize?", options: ["*schools and offices designed mainly for loud people", "extroverts in general", "people who work alone"] },
      { q: "Why did ambiverts sell more in Grant's study?", options: ["*They knew when to talk and when to listen.", "They talked the most.", "They worked longer hours."] },
      { q: "What is the writer's final advice?", options: ["*Understand what gives you energy and what takes it away.", "Find the right label for yourself.", "Try to become an extrovert."] },
    ]),
    gaps(
      "Find words in the article.",
      "1. very tired, with no energy left: [drained]\n2. get your energy back: [recharge]\n3. a wrong idea about something: a [misunderstanding]\n4. an office with no walls between desks: an [open-plan] office\n5. friendly and confident with people: [outgoing]\n6. a word that describes and classifies someone: a [label]",
    ),
  ]),

  section("Listening: Grandma takes a personality quiz", [
    tip("A long listening — about 3 minutes 10 seconds. Madina (now a designer with her own studio) and her grandmother Saule do a magazine quiz together. First listen: *What result does Saule get — and does she agree?* Second listen: the tasks. Ask the student to catch echo questions and emphatic *do / did*."),
    ...listening(
      "Listen to Madina and her grandmother Saule doing a personality quiz.",
      "**Madina:** Grandma, listen to this. It's a quiz in my magazine: \"Introvert, extrovert or ambivert?\" Let's do it for you.\n\n**Saule:** For me? Madina, I'm seventy-one. I know who I am.\n\n**Madina:** Do you? Then it'll be easy! Question one: \"After a big family celebration, you feel: A, full of energy; B, happy but tired; or C, like you need a week in a quiet room.\"\n\n**Saule:** Hmm. B. I do love our family celebrations, but after twenty people and three kinds of plov, I need a rest.\n\n**Madina:** Fair enough. Question two: \"At a party where you don't know anyone, you…\"\n\n**Saule:** I don't go to parties where I don't know anyone.\n\n**Madina:** You did last month! At the neighbors' wedding.\n\n**Saule:** Did I? Oh, yes. Well, I talked to the musicians. They were very nice young men.\n\n**Madina:** So that's A: \"You talk to everyone.\" Grandma, you're an extrovert!\n\n**Saule:** I'm not! I spent the first hour sitting in the corner with my tea.\n\n**Madina:** Okay, B, then. Question three: \"Your friends would describe you as…\" A, the life and soul of the party; B, a good listener; C, someone who keeps herself to herself.\n\n**Saule:** A good listener. Everyone tells me their problems. Your father, your aunt, the woman at the market…\n\n**Madina:** That's true. Even I do it. Question four: \"When you have a problem, you prefer to…\" A, talk about it immediately; B, think about it alone first.\n\n**Saule:** B, definitely. Your grandfather was the opposite. He had to talk about everything straight away — at two o'clock in the morning sometimes!\n\n**Madina:** Was he really like that?\n\n**Saule:** He was. He was a real people person. He could make friends with a bus stop. I was the quiet one, and it worked very well. He talked, I listened, and then I told him what to do.\n\n**Madina:** Ha! Last question: \"A perfect Sunday is…\" A, a big lunch with lots of friends; B, a walk and a long phone call with one good friend; C, a book and complete silence.\n\n**Saule:** Can I choose two?\n\n**Madina:** No, you can't.\n\n**Saule:** Then B. But only if the phone call is with your great-aunt in Canada. We talk for two hours every Sunday.\n\n**Madina:** Do you? I didn't know that! Okay, results. Mostly B's: \"You're an ambivert. You enjoy people, but you need time alone to recharge. You're a great listener and people trust you.\"\n\n**Saule:** Well, that's not bad. Although I don't think a magazine can tell me who I am.\n\n**Madina:** It can't, but it's fun. And it's quite accurate, isn't it?\n\n**Saule:** It is, a little. What about you? You're an extrovert, aren't you? You talk to all your clients for hours.\n\n**Madina:** I do talk a lot at work. But after work I just want to draw on my own with headphones on. Maybe I'm an ambivert too.\n\n**Saule:** So am I, apparently. It runs in the family!\n\n**Madina:** Then let's have a quiet evening. Just the two of us, and some tea.\n\n**Saule:** And maybe a few cakes from Asel's bakery?\n\n**Madina:** Grandma, you're definitely not a quiet person when there are cakes.",
    ),
    quiz("Listen and choose.", [
      { q: "How does Saule feel after big family celebrations?", options: ["*happy but tired", "full of energy", "like she needs a week alone"] },
      { q: "What did Saule do at the neighbors' wedding?", options: ["*She sat in the corner at first, then talked to the musicians.", "She danced all night.", "She left early."] },
      { q: "How was Madina's grandfather different from Saule?", options: ["*He needed to talk about problems immediately.", "He was very quiet.", "He didn't like people."] },
      { q: "What is Saule's quiz result?", options: ["*an ambivert", "an introvert", "an extrovert"] },
      { q: "What does Madina do after work?", options: ["*She draws alone with headphones on.", "She meets her clients.", "She goes to parties."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Saule is seventy-one.", true],
      ["People often tell Saule about their problems.", true],
      ["Madina knew about Saule's Sunday phone calls.", false],
      ["Saule's sister lives in Canada.", true],
      ["Saule thinks a magazine can tell her exactly who she is.", false],
      ["They decide to go to a party in the evening.", false],
    ]),
    gaps(
      "Complete what they said. Listen again if you need.",
      "1. Madina: [Do] you? Then it'll be easy!\n2. Saule: I [do] love our family celebrations.\n3. Saule: [Did] I? Oh, yes.\n4. Saule: He was a real people [person].\n5. Madina: It's quite accurate, [isn't] it?\n6. Saule: So [am] I, apparently.",
    ),
  ]),

  section("Let's talk: React!", [
    text(
      "The reaction game 🎭",
      "Your teacher makes surprising statements about themselves (true or invented). React quickly and naturally — then ask a follow-up question:\n\n- *I've met a famous rock star.* → **Have you? Who?**\n- *I don't drink coffee.* → **Don't you? Neither do I! / I do — three cups a day!**\n- *I can't stand musicals.* → **Can't you? I love them!**\n\nThen swap: you make five statements. Finally, discuss:\n- Are you an introvert, an extrovert or an ambivert? Give examples.\n- Which idiom from today describes you — and someone in your family?",
    ),
    tip("Keep the pace fast. Correct auxiliaries (*Do you? → Have you?*) and intonation. In a group: students play in pairs, then report the most surprising fact they heard."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "A: I've never seen snow. B: ___? Really?", options: ["*Haven't you", "Didn't you", "Don't you"] },
      { q: "A: I'm not hungry. B: Neither ___ I.", options: ["*am", "do", "have"] },
      { q: "You think I don't care? I ___ care!", options: ["*do", "am", "does"] },
      { q: "She's not arrogant at all — she's very ___.", options: ["*down to earth", "big-headed", "a know-it-all"] },
    ]),
    box(
      "Phrase of the day: still waters run deep",
      "🌊 **Still waters run deep** — quiet people often have deep thoughts and strong feelings.\n\n*Do you know someone who is a “still water”?*",
    ),
  ]),

  homework(
    [
      video("Watch: Susan Cain — The power of introverts (TED). Watch at least the first 7 minutes.", "c0KYU2j0TM4"),
      text(
        "After the video: think and answer in the next lesson.",
        "- What does Susan Cain say about schools and group work?\n- Do you agree that the world is designed for extroverts? Give an example from your life.",
      ),
      choose(
        "Choose.",
        "1. A: I don't like horror films. B: Neither [*do/am] I.\n2. A: Kenji was late again. B: [*Was he?/Did he?] That's not like him.\n3. A: You can't cook! B: I [*can/do] cook — I just don't want to!\n4. A: I'll be there at six. B: So [*will/am] I.\n5. It's a lovely day, [*isn't it/is it]?\n6. You haven't seen my keys, [*have you/haven't you]?\n7. A: I've been to Japan twice. B: [*Have you?/Did you?] Lucky you!\n8. A: She doesn't eat meat. B: [*Doesn't she?/Isn't she?] I didn't know.",
      ),
    ],
    "Homework: Video and grammar",
  ),
  homework(
    [
      gaps(
        "Complete the idioms.",
        "1. She loves meeting new people — she's a real [people] person.\n2. He's very practical and not arrogant at all — really down to [earth].\n3. My grandad won't try anything new. He's set in his [ways].\n4. He watches TV all day. He's a couch [potato].\n5. Nobody knew she could paint so well — she's a dark [horse]!\n6. He tells everyone how to do everything. What a know-[it-all]!",
      ),
      write("Write an email to a friend (140–190 words) describing a person in your family or a friend: their personality, a typical situation that shows it, and why you like them (or find them difficult!). Use at least three idioms from the lesson and two emphatic forms (I do…, she did…).", 140),
      record("Record a 1-minute answer: “Are you an introvert, an extrovert or an ambivert? How do you know?” 🎙️", 75),
    ],
    "Homework: Writing and speaking",
  ),
]);
