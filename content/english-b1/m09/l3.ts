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
  video,
  words,
  write,
} from "../../kit";

// 9.3 Famous words — skills lesson, no new grammar: review of reported speech. V: speeches and quotes (a quote, a speech, inspire, misquote…). S: discuss a quote that inspires you. Main format: a film-quotes warm-up + a long reading (the stories behind four famous phrases: Gagarin, Armstrong, King, Malala, ~430 words) + a NASA video + a listening (famous quotes that nobody really said, ~1.5 min) + a short biography written in class.
// Facts checked: Gagarin, 12 April 1961, Baikonur, “Poyekhali!”; Armstrong, July 1969, about 600 million viewers (estimate), he said he meant “a man”; Martin Luther King, 28 August 1963, about 250,000 people, Mahalia Jackson's call; Malala, 12 July 2013 at the UN, her 16th birthday, Nobel Peace Prize 2014 at 17; misquotes — “Let them eat cake”, “Elementary, my dear Watson”, “Play it again, Sam”.
export default lesson("b1-9.3", "Famous words", () => [
  section("Warm-up: Famous film lines", [
    box(
      "Today you will…",
      "- discover the true stories behind famous words 🚀🌍\n- find out which famous quotes nobody ever said 🤯\n- talk about words that inspire you ✨",
    ),
    quiz("Which film is the line from? 🎬", [
      { q: "“May the Force be with you.”", options: ["*Star Wars", "Harry Potter", "The Matrix"] },
      { q: "“I'll be back.”", options: ["*The Terminator", "Titanic", "Jurassic Park"] },
      { q: "“To infinity and beyond!”", options: ["*Toy Story", "Finding Nemo", "Frozen"] },
      { q: "“Houston, we have a problem.”", options: ["*Apollo 13", "Interstellar", "Gravity"] },
      { q: "“Why so serious?”", options: ["*The Dark Knight", "Spider-Man", "Iron Man"] },
    ]),
    text(
      "Talk to your teacher.",
      "- Which film line do you and your friends often repeat? 😄\n- Is there a sentence someone said to you that you still remember years later? Who said it?\n- What famous words from your country's history does every child know?",
    ),
    tip("Make it fast and fun — say the lines dramatically! Then ask the student to report one: *Arnold Schwarzenegger said he would be back.* 😄"),
  ]),

  section("Vocabulary: Speeches and quotes", [
    words("Speeches and quotes", [
      ["a quote", "💬 words that someone said or wrote, repeated by others"],
      ["a speech — give a speech", "🎤 a formal talk to an audience"],
      ["inspire", "✨ give someone the wish to do something great", "Her words inspired millions."],
      ["memorable", "🧠 easy to remember, special"],
      ["improvise", "🎭 say something without preparing"],
      ["misquote", "❌💬 repeat someone's words wrongly"],
      ["an astronaut / a cosmonaut", "🧑‍🚀 a person who travels into space"],
      ["a launch", "🚀 the moment a rocket goes into the sky"],
      ["equal rights", "⚖️ the same rights for everyone"],
      ["education", "🎓 learning at school and university"],
      ["a historic moment", "📜 a very important moment in history"],
      ["mankind", "🌍 all people"],
    ]),
    match("Match.", [
      ["give", "a speech"],
      ["a historic", "moment"],
      ["fight for", "equal rights"],
      ["a famous", "quote"],
      ["inspire", "millions of people"],
      ["the right to", "education"],
    ]),
    gaps(
      "Complete with a word from the list above.",
      "1. The president gave a [speech] to thousands of people. 🎤\n2. Her story [inspired] me to start volunteering. ✨\n3. He didn't prepare — he [improvised] the whole talk!\n4. The first [launch] of the new rocket will be next month. 🚀\n5. Many people [misquote] that famous line — he never said it like that.\n6. Malala fights for every girl's right to [education]. 🎓\n7. The first Moon landing was a [historic] moment.\n8. It was a short but [memorable] speech — I still remember every word.",
    ),
    sort("Space or society? Sort the words. 🚀⚖️", {
      "🚀 space": ["astronaut", "launch", "rocket", "the Moon"],
      "⚖️ society": ["equal rights", "education", "freedom", "a protest"],
    }),
  ]),

  section("Reading: The stories behind famous words", [
    tip("A long text (~430 words). First reading: *Which story surprised you most?* Then the tasks. While checking, ask the student to report each person: *Gagarin said… Malala said that…*"),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Yuri Gagarin's rocket was launched from Baikonur, in today's Kazakhstan.", true],
        ["Neil Armstrong's words were watched live by about 6 million people.", false],
        ["Armstrong later said he had meant to say “one small step for a man”.", true],
        ["Martin Luther King read every word of his speech from his notes.", false],
        ["Malala gave her speech at the UN on her 16th birthday.", true],
        ["Malala won the Nobel Peace Prize when she was 25.", false],
      ],
      {
        read: [
          "## 🗣️ The stories behind famous words",
          "Some words become part of history. But the stories behind them are often more surprising than the words themselves.",
          "**🚀 “Poyekhali!” — Yuri Gagarin, 1961.** On 12 April 1961, a 27-year-old Soviet pilot sat in a tiny capsule on top of a rocket at Baikonur, in today's Kazakhstan. Nobody had ever been to space before. As the rocket launched, Gagarin said just one word: \"Poyekhali!\" — \"Let's go!\" He flew around the Earth once and landed safely about 108 minutes later. His simple, cheerful word is still repeated at launches today.",
          "**🌕 “One small step…” — Neil Armstrong, 1969.** In July 1969, an estimated 600 million people watched on TV as Neil Armstrong stepped onto the Moon. He said: \"That's one small step for man, one giant leap for mankind.\" Later, Armstrong said he had meant to say \"one small step for **a** man\" — but in the excitement, the little word \"a\" was lost (or maybe nobody could hear it). People still argue about it today!",
          "**✊ “I have a dream” — Martin Luther King Jr., 1963.** On 28 August 1963, about 250,000 people came to Washington, D.C., to march for equal rights for Black Americans. King had prepared a speech, but in the middle, the singer Mahalia Jackson called out: \"Tell them about the dream, Martin!\" King put his notes aside and improvised. The most famous part of his speech — \"I have a dream\" — was not in his notes at all.",
          "**📚 “One child, one teacher, one book, one pen…” — Malala Yousafzai, 2013.** As a schoolgirl in Pakistan, Malala wrote a blog about girls' right to go to school. In 2012, she was shot on her school bus because of her ideas. She survived, and on 12 July 2013 — her 16th birthday — she spoke at the United Nations in New York. She said that one child, one teacher, one book and one pen could change the world. A year later, at 17, she became the youngest person ever to win the Nobel Peace Prize.",
          "Four people, four very different moments. But they all show the same thing: sometimes the words that change the world are the simplest ones. ✨",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What does “Poyekhali!” mean?", options: ["*Let's go!", "Goodbye, Earth!", "I can see the Earth!"] },
      { q: "Why do people still argue about Armstrong's words?", options: ["*The word “a” was lost or not heard.", "He said something different on TV.", "Nobody heard him at all."] },
      { q: "Who encouraged King to talk about his dream?", options: ["*the singer Mahalia Jackson", "the president", "his wife"] },
      { q: "What did Malala write about as a schoolgirl?", options: ["*girls' right to go to school", "space travel", "her favorite books"] },
      { q: "What do all four stories show?", options: ["*Simple words can change the world.", "Speeches must be long.", "Only politicians make history."] },
    ]),
    gaps(
      "Find words in the article.",
      "1. a very small closed space for an astronaut: a [capsule]\n2. happy and positive: [cheerful]\n3. a very big jump: a giant [leap]\n4. walk in a big group to protest: [march]\n5. stayed alive after something terrible: [survived]\n6. the youngest person ever to [win] the Nobel Peace Prize",
    ),
  ]),

  section("Video: One small step", [
    tip("An official NASA video, about 2.5 minutes, with the real recording from 1969. Listen carefully for Armstrong's words — can the student hear the “a”?"),
    video("Watch: Apollo 11 — one small step on the Moon (NASA).", "w4wx_3XOrns"),
    text(
      "After the video: talk to your teacher.",
      "- Could you hear “for a man” or “for man”? 🎧\n- How do you think people felt watching it live in 1969?\n- If you could travel into space, would you go? What would YOU say first? 🚀",
    ),
  ]),

  section("Listening: They never said it!", [
    tip("About 1.5 minutes. Mr. Hall, the teacher from 4.3, talks about famous quotes that are usually misquoted. First listen: *How many misquotes does he mention?* (four) Second listen: the details."),
    ...listening(
      "Listen to a radio talk. Mr. Hall explains famous quotes that nobody really said.",
      "**Host:** Mr. Hall, you say many famous quotes are fake?\n\n**Mr. Hall:** Not fake exactly — misquoted. Let's start with a classic. Everyone believes that the French queen Marie Antoinette said \"Let them eat cake\" when she heard that poor people had no bread. But historians have found no evidence that she ever said it. The story appeared in books before she was even an adult!\n\n**Host:** Really? What else?\n\n**Mr. Hall:** Sherlock Holmes. People think he always says \"Elementary, my dear Watson.\" But in the original books by Arthur Conan Doyle, he never says those exact words. The phrase became famous later, in films.\n\n**Host:** I'm shocked! I was sure about that one.\n\n**Mr. Hall:** And there's the film Casablanca. Everybody quotes \"Play it again, Sam.\" But in the film, the character actually says \"Play it, Sam\" — there's no \"again\".\n\n**Host:** So why do these misquotes spread?\n\n**Mr. Hall:** Because the wrong version is often shorter or sounds better. And when millions of people repeat it, it starts to feel true. It's a bit like fake news — if you hear something many times, you believe it.\n\n**Host:** What's your advice?\n\n**Mr. Hall:** Before you share a quote, check where it comes from. Ask: who said it, when, and where is the original? And remember Armstrong — even a real quote can lose a small word!\n\n**Host:** Thank you, Mr. Hall.",
    ),
    quiz("Listen and choose.", [
      { q: "What did historians find about “Let them eat cake”?", options: ["*no evidence that Marie Antoinette said it", "a letter where she wrote it", "that she said it twice"] },
      { q: "Where did “Elementary, my dear Watson” become famous?", options: ["*in films", "in the original books", "in a newspaper"] },
      { q: "What does the character in Casablanca actually say?", options: ["*Play it, Sam.", "Play it again, Sam.", "Sing it, Sam."] },
      { q: "Why do misquotes spread, according to Mr. Hall?", options: ["*The wrong version is often shorter or sounds better.", "People don't like the original.", "Teachers teach them."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["The “cake” story appeared before Marie Antoinette was an adult.", true],
      ["Sherlock Holmes says “Elementary, my dear Watson” in every book.", false],
      ["The host was sure about the Sherlock Holmes quote.", true],
      ["Mr. Hall compares misquotes to fake news.", true],
      ["Mr. Hall's advice is to never share quotes.", false],
    ]),
  ]),

  section("Review: reported speech", [
    choose(
      "Choose the right form.",
      "1. Gagarin said that he [*felt/feels] fine during the flight.\n2. Armstrong said he [*had meant/means] to say “a man”.\n3. Mahalia Jackson told King [*to tell/tell] them about the dream.\n4. Malala said that education [*could/can't] change the world.\n5. The host asked Mr. Hall [*if/that] the quotes were fake.\n6. Mr. Hall told us [*to check/check] where quotes come from.\n7. People often ask me what my favorite quote [*is/was is].\n8. She [*told/said] me that the speech was amazing.",
    ),
    drag(
      "Complete the summary.",
      "In 1963, Mahalia Jackson [told] King to talk about his dream. He [said] he had a dream that one day all people would be equal. Years later, Malala [said] that one book and one pen [could] change the world. A journalist once asked her [if] she was afraid, and she said she [was] not.",
      ["say", "tells", "will", "that"],
    ),
    gaps(
      "Report the famous words.",
      "1. Gagarin: “I feel fine.” → Gagarin said he [felt] fine. (feel)\n2. Armstrong: “I meant to say ‘a man’.” → He said he [had meant] to say “a man”. (mean)\n3. Mahalia Jackson: “Tell them about the dream!” → She told King [to tell] them about the dream.\n4. Malala: “Education is our right.” → Malala said education [was] our right. (be)\n5. Mr. Hall: “Check the original.” → Mr. Hall told us [to check] the original.\n6. Host: “Are these quotes fake?” → The host asked if the quotes [were] fake.",
    ),
  ]),

  section("Let's talk: Words that inspire", [
    text(
      "Talk to your teacher ✨",
      "- Which of the four stories inspires you most? Why?\n- Do you have a favorite quote — from a book, a song, a film or a person you know? What does it mean to you?\n- Should schools teach famous speeches? Which one would you choose?\n- If you gave a speech to the whole world for one minute, what would you say? 🌍\n\nAt the end, report one thing your teacher said: *My teacher told me that…*",
    ),
    tip("Help the student explain WHY a quote matters to them — personal examples make the best conversation. Then do a 1-minute “speech to the world” — the student stands up if possible! 🎤"),
  ]),

  section("Writing: A short biography", [
    order(
      "Put the short biography in order.",
      [[
        "Yuri Gagarin was born in 1934 in a small village in Russia.",
        "As a young man, he learned to fly and became a pilot.",
        "In 1961, he became the first person to travel into space.",
        "When the rocket launched, he said, “Poyekhali!” — “Let's go!”",
        "Today, streets, schools and even a crater on the Moon are named after him.",
      ].join("\n")],
      "lines",
    ),
    write("Write a short biography (100 words) of a person whose words inspire you — famous or from your family. Say who they are, what they did, and what they said (use reported speech).", 100),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "repeat someone's words wrongly =", options: ["*misquote", "improvise", "inspire"] },
      { q: "Gagarin's famous word means…", options: ["*Let's go!", "Hello!", "Help!"] },
      { q: "“Tell them about the dream!” → She told him ___ them.", options: ["*to tell", "tell", "telling"] },
      { q: "“Is it true?” → He asked ___ it was true.", options: ["*if", "that", "what"] },
    ]),
    box(
      "Phrase of the day: in a nutshell",
      "🥜 **In a nutshell** = in a few words, very briefly.\n\n*In a nutshell, Malala said that education can change the world.*",
    ),
  ]),

  homework(
    [
      gaps(
        "Complete.",
        "1. Her [speech] at the UN was watched by millions.\n2. His words [inspired] a whole generation.\n3. That's not what he said — you [misquoted] him!\n4. The first Moon landing was a [historic] moment.\n5. She didn't use notes — she [improvised].\n6. Every child has the right to [education].",
      ),
      choose(
        "Choose.",
        "1. She said she [*was/is been] proud of her students.\n2. He asked me [*if I knew/did I know] the quote.\n3. The teacher told us [*to learn/learn] the speech.\n4. They said they [*would/will] watch the launch.\n5. She asked me where I [*had heard/did hear] it.\n6. My grandpa told me he [*had seen/sees] the Moon landing on TV.",
      ),
      match("Match the people and their famous words.", [
        ["Yuri Gagarin", "“Poyekhali!” — “Let's go!”"],
        ["Neil Armstrong", "“One small step for man…”"],
        ["Martin Luther King Jr.", "“I have a dream…”"],
        ["Malala Yousafzai", "“One child, one teacher, one book and one pen…”"],
        ["Mahalia Jackson", "“Tell them about the dream, Martin!”"],
        ["Sherlock Holmes (in films)", "“Elementary, my dear Watson.”"],
      ]),
    ],
    "Homework: Vocabulary and grammar",
  ),
  homework(
    [
      write("Ask an older family member: “What words from history or from your life do you remember?” Report their answer (100+ words).", 100),
      record("Record a 1-minute speech: “If I could say one thing to the whole world…” 🌍🎤", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
