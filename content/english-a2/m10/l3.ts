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
  words,
  write,
} from "../../kit";

// 10.3 Learning hacks — skills lesson with a LONG LISTENING (a podcast with a polyglot, ~2.5 min), a short reading (a list of hacks), writing your best hack; lots of talk about how the student learns English; review of module 10. No video in class.
export default lesson("a2-10.3", "Learning hacks", () => [
  section("Warm-up: Myth or fact?", [
    box("Today you will…", "- listen to a person who speaks five languages 🗣️🌍\n- find learning hacks that really work\n- share your own best hack ✍️"),
    quiz("Myth or fact? Guess! 🤔", [
      { q: "Sleep helps you remember new words. 😴", options: ["*Fact — your brain saves new information while you sleep.", "Myth — sleep makes you forget."] },
      { q: "Adults can't learn a new language well. 👴", options: ["*Myth — adults can learn very well, often faster at the start.", "Fact — only children can learn."] },
      { q: "20 minutes every day is better than 3 hours once a week. ⏱️", options: ["*Fact — short, regular practice works better.", "Myth — long lessons are always better."] },
      { q: "You must speak perfectly before you start speaking. 🗣️", options: ["*Myth — mistakes are part of learning!", "Fact — wait until it's perfect."] },
    ]),
    text(
      "Talk to your teacher.",
      "- How long have you learned English? What's the most difficult part for you? 🇬🇧\n- What has helped you the most so far — and what didn't work at all? 🤔\n- Do you know anyone who speaks 3+ languages? How did they learn?",
    ),
    tip("Let the student vote before checking. These are well-known findings about learning: sleep helps memory, and short regular practice beats long, rare sessions. Ask: *Did any answer surprise you?*"),
  ]),

  section("Vocabulary: Learning a language", [
    words("Learning a language", [
      ["memorize", "🧠 learn by heart"],
      ["review — revise", "🔁 study again · 🇬🇧 revise"],
      ["make progress", "📈 get better"],
      ["make a mistake", "❌ (not “do a mistake”!)"],
      ["fluent — fluently", "🗣️💨 speak easily, without stopping"],
      ["an accent", "🗣️🌍 the way you pronounce words"],
      ["a native speaker", "🇬🇧👤 English is their first language"],
      ["look up a word", "🔍📖 find it in a dictionary"],
      ["flashcards", "🃏 cards with a word and its meaning"],
      ["subtitles", "💬🎬 words at the bottom of a film"],
      ["shadowing", "🗣️🎧 repeat after a speaker at the same time"],
      ["give up", "🏳️ stop trying"],
    ]),
    match("Match.", [
      ["make", "progress"],
      ["make a", "mistake"],
      ["look up", "a word"],
      ["a native", "speaker"],
      ["speak", "fluently"],
      ["watch with", "subtitles"],
    ]),
    sort("Helpful or not helpful for learning? Sort. 👍👎", {
      "👍 helpful": ["20 minutes every day", "speaking from the first week", "learning phrases", "sleeping well"],
      "👎 not helpful": ["only grammar exercises", "waiting until you're perfect", "3 hours once a month", "giving up after mistakes"],
    }),
    gaps(
      "Complete.",
      "1. I don't know this word — I'll look it [up]. 🔍\n2. Everyone makes [mistakes] — it's normal! ❌\n3. She speaks Spanish [fluently] — she lived in Madrid for 5 years. 🗣️\n4. I [review/revise] my new words every evening. 🔁\n5. I watch series in English with English [subtitles]. 💬\n6. He has a strong Russian [accent], but people understand him. 🌍\n7. Don't give [up]! You're making great progress! 💪\n8. I write new words on [flashcards]. 🃏",
    ),
  ]),

  section("Listening: The polyglot podcast", [
    tip("A long listening — about 2.5 minutes. First listen: *How many languages does Kenji speak? What are his 3 best hacks?* Second listen: details. Let the student take notes."),
    ...listening(
      "Listen to a podcast. Kenji speaks five languages. He shares his learning hacks.",
      "**Host:** Hello and welcome to “Language Lab”! My guest today is Kenji. Kenji, how many languages do you speak?\n\n**Kenji:** Five: Japanese, English, Korean, Spanish and now a little Kazakh! 😄\n\n**Host:** Amazing! Were you good at languages at school?\n\n**Kenji:** No, not at all! I was really bad at English at school. I was bored in the lessons because we only did grammar exercises. I started to enjoy English when I was sixteen — I wanted to understand my favorite rock songs.\n\n**Host:** So music was your first hack?\n\n**Kenji:** Yes! I listened to songs again and again and tried to sing along. Then I looked up the words I didn't know. I learned a lot of words that way — and some very strange ones! 🎸\n\n**Host:** What's your second hack?\n\n**Kenji:** Little and often. I study for twenty minutes every day — on the bus, in a queue, before bed. I use flashcards on my phone. It's much better than studying for three hours on Sunday and then forgetting everything.\n\n**Host:** And number three?\n\n**Kenji:** Speak from the first week! Many people wait until they feel ready. But you never feel ready! I make a lot of mistakes, and that's OK. People are usually friendly and patient. In Almaty, everyone is so happy when I try to speak Kazakh — they always help me.\n\n**Host:** Is there anything that didn't work for you?\n\n**Kenji:** Yes — apps only. I used a language app for a year, and I won a lot of points, but I couldn't have a real conversation! Apps are good, but you need to talk to people too.\n\n**Host:** Final question: what's your advice for someone who wants to give up?\n\n**Kenji:** Don't compare yourself with other people. Compare yourself with you one year ago. You've made more progress than you think!\n\n**Host:** Thank you, Kenji! Or should I say… rakhmet?\n\n**Kenji:** Rakhmet! 😄",
    ),
    quiz("Listen and choose.", [
      { q: "How many languages does Kenji speak?", options: ["*five", "three", "seven"] },
      { q: "Why was Kenji bored in English lessons at school?", options: ["*They only did grammar exercises.", "The teacher was boring.", "He didn't like English songs."] },
      { q: "Why did he start to enjoy English?", options: ["*He wanted to understand rock songs.", "He moved to the USA.", "He had a new teacher."] },
      { q: "How long does Kenji study every day?", options: ["*twenty minutes", "three hours", "one hour"] },
      { q: "What didn't work for Kenji?", options: ["*using only an app", "singing songs", "speaking from the first week"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Kenji was very good at English at school.", false],
      ["He looked up the words from songs.", true],
      ["He studies for three hours every Sunday.", false],
      ["He thinks you should wait until you feel ready to speak.", false],
      ["People in Almaty help him when he speaks Kazakh.", true],
      ["His advice is to compare yourself with you one year ago.", true],
    ]),
    gaps(
      "Listen again. Complete Kenji's phrases.",
      "1. I was really [bad] at English at school.\n2. I started to [enjoy] English when I was sixteen.\n3. I listened to songs again and [again].\n4. Little and [often]!\n5. You never feel [ready]!\n6. You've made more [progress] than you think!",
    ),
  ]),

  section("Reading: 6 hacks that work", [
    match(
      "Read the hacks. Match each hack and why it works.",
      [
        ["Change your phone to English.", "You see useful words 100 times a day."],
        ["Learn phrases, not single words.", "You can use them in real conversations."],
        ["Use flashcards with spaced repetition.", "You review words just before you forget them."],
        ["Try shadowing.", "It helps your accent and speed."],
        ["Talk to yourself in English.", "You practice speaking every day — for free!"],
        ["Sleep well after studying.", "Your brain saves new words at night."],
      ],
      {
        read: [
          "## 💡 6 learning hacks that really work",
          "**1. 📱 Change your phone to English.** You look at your phone a hundred times a day — so you'll see words like *settings, delete, share* again and again.",
          "**2. 💬 Learn phrases, not single words.** Don't learn just *decision* — learn *make a decision*. Then you can use it in a real conversation.",
          "**3. 🃏 Use flashcards with spaced repetition.** Apps like Anki show you a word just before you forget it. Your teacher's word trainer works the same way!",
          "**4. 🎧 Try shadowing.** Play a short audio and repeat at the same time as the speaker. It feels strange, but it's great for your accent and speed.",
          "**5. 🗣️ Talk to yourself.** Describe what you're doing: *Now I'm making tea. The water is boiling…* Nobody hears your mistakes!",
          "**6. 😴 Sleep well.** Your brain saves new words while you sleep. So study a little in the evening — and then go to bed!",
        ].join("\n\n"),
      },
    ),
    trueFalse("Read again. True or false?", [
      ["The text says to learn single words, not phrases.", false],
      ["Spaced repetition shows a word just before you forget it.", true],
      ["Shadowing feels normal from the first day.", false],
      ["Talking to yourself is a free way to practice.", true],
      ["The text says it's good to study in the evening and then sleep.", true],
    ]),
    quiz("Which hack is best for…? Choose.", [
      { q: "a person with a bad accent", options: ["*shadowing", "changing your phone language", "sleeping well"] },
      { q: "a person who forgets words fast", options: ["*flashcards with spaced repetition", "talking to yourself", "shadowing"] },
      { q: "a person who has nobody to talk to", options: ["*talking to yourself", "flashcards", "changing your phone language"] },
      { q: "a person who knows words but can't use them in conversations", options: ["*learning phrases, not single words", "sleeping well", "changing your phone language"] },
    ]),
  ]),

  section("Review: Module 10", [
    choose(
      "Choose.",
      "1. Kenji speaks five languages [*fluently/fluent].\n2. He was [*bored/boring] in English lessons.\n3. Grammar exercises can be [*boring/bored].\n4. He decided [*to learn/learning] Kazakh.\n5. He enjoys [*singing/to sing] English songs.\n6. People in Almaty listen to him [*patiently/patient].\n7. I'm [*interested/interesting] in learning Korean.\n8. Don't speak too [*fast/fastly] — I can't understand!",
    ),
    gaps(
      "Complete with the right form.",
      "1. She learns words very [quickly]. (quick)\n2. The podcast was really [interesting]. (interest-)\n3. I want [to improve] my accent. (improve)\n4. I don't mind [making] mistakes. (make)\n5. He speaks English [well]. (good)\n6. I was [surprised] — Kenji learned English from rock songs! (surpris-)\n7. We finished [reading] the text. (read)\n8. Study [regularly] — 20 minutes a day! (regular)",
    ),
    drag(
      "Complete the advice.",
      "If you want [to] learn a language, study [regularly], not only on Sundays. Don't be [embarrassed] about mistakes. Enjoy [listening] to songs and podcasts. And speak [confidently] — people will understand you! 😊 You'll be [surprised] how fast you learn!",
      ["embarrassing", "confident", "listen"],
    ),
  ]),

  section("Writing: My best learning hack", [
    order("Make sentences.", [
      "I enjoy watching series in English.",
      "She speaks Spanish fluently.",
      "I want to improve my accent.",
      "Don't be embarrassed about mistakes.",
      "Kenji learned English quickly.",
    ]),
    box(
      "✍️ My best learning hack",
      "- **40+ words**\n- the hack: *My best hack is…*\n- how to do it: *Every day I… I enjoy… I want to…*\n- why it works: *because…*\n- one adverb and one -ed / -ing adjective ✨",
    ),
    write(
      "Write about your best way to learn English (or another skill). What do you do? How often? Why does it work for you? (40+ words)",
      40,
      {
        read: "*Example start:* My best hack is watching series in English. Every evening I watch one episode with English subtitles. At first it was confusing, but now…",
      },
    ),
    tip("Check together: an adverb? An -ed / -ing adjective? want to / enjoy -ing? A clear reason? Add the best hack to a “class hacks” list! 🌟"),
  ]),

  section("Let's talk: You as a learner", [
    text(
      "Talk to your teacher.",
      "- Which of Kenji's hacks do you already use? Which one will you try this week? 🎯\n- What's the most embarrassing mistake you've made in English? 😳😄\n- Do you prefer learning with apps, books, series, songs or people? Why?\n- What do you want to be able to do in English in one year? (watch films without subtitles, travel, work…)\n- When did you last feel proud of your English? 💪",
    ),
    tip("*If you have time:* try shadowing together — play 20 seconds of any listening from the course and repeat at the same time. It's funny the first time! 😄"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "find a word in a dictionary =", options: ["*look it up", "give up", "make up"] },
      { q: "We say: ___ a mistake.", options: ["*make", "do", "have"] },
      { q: "speak easily, without stopping =", options: ["*fluently", "carefully", "slowly"] },
      { q: "I enjoy ___ podcasts.", options: ["*listening to", "to listen to", "listen"] },
    ]),
    box("Word of the day: a polyglot", "**a polyglot** 🗣️🌍 = a person who speaks many languages.\n\n*Kenji is a polyglot — he speaks five languages!*"),
  ]),

  homework(
    [
      gaps(
        "Write the word.",
        "1. 🧠 learn by heart: [memorize/memorise]\n2. 📈 get better: make [progress]\n3. 🃏 cards with words: [flashcards]\n4. 💬🎬 words at the bottom of a film: [subtitles]\n5. 🏳️ stop trying: give [up]\n6. 🗣️🌍 a person who speaks many languages: a [polyglot]",
      ),
      choose(
        "Choose.",
        "1. I [*made/did] a lot of mistakes.\n2. She speaks [*fluently/fluent].\n3. The lesson was [*interesting/interested].\n4. I want [*to try/trying] shadowing.\n5. He finished [*studying/to study] at midnight.\n6. Study [*regularly/regular]!",
      ),
    ],
    "Homework: Vocabulary and review",
  ),
  homework(
    [
      text("Try a learning hack for 5 days 🧪", "Choose one hack from the lesson (change your phone to English, shadowing, 20 minutes a day, talking to yourself…). Do it for 5 days, then write about it below."),
      write("My 5-day experiment: Which hack did you try? What did you do every day? How did you feel? Will you continue? (50+ words)", 50),
    ],
    "Homework: A learning experiment",
  ),
  homework(
    [
      write("Write a message to Kenji: tell him which of his hacks you liked and ask him one question. (35+ words)", 35),
      record("Record a 1-minute “shadowing” of any listening from this course — or tell your teacher about your English learning story. (1 minute)", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
