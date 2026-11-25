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

// 3.2 Worth trying — G: expressions + -ing (it's worth, there's no point, it's no use, can't help, have trouble / difficulty, spend time); adjective + preposition + -ing (good at, tired of, afraid of); verb + object + infinitive (encourage, persuade, warn, remind, advise, allow, get sb to) and make / let + bare infinitive. V: the brain and memory (memorize, recall, slip your mind, on the tip of your tongue, a photographic memory…); word formation (-able, -ive, -ful). S: discuss brain myths, give advice on learning. Main format: "brain myths — true or false?" + a long reading (five brain myths, ~560 words) + TED-Ed video (how memories form) + a long listening (a radio phone-in with a neuroscientist; callers Saule, Daniyar and Kenji, ~3:20).
// Facts checked: the "10% of the brain" myth — brain scans show activity across the whole brain; "left-brained / right-brained people" — a University of Utah study (Nielsen et al., 2013) of over 1,000 brain scans found no evidence of people using one side more; the "Mozart effect" — Rauscher et al. (1993): a small, short-lived improvement in a spatial task in college students; later studies often failed to repeat it; in 1998 the governor of Georgia (Zell Miller) proposed giving every newborn a classical music CD; "learning styles" — a 2008 review (Pashler et al.) found no good evidence that teaching to a preferred style improves learning; multitasking — in a driving study (Watson & Strayer, 2010) only about 2.5% of people could do two demanding tasks at once without getting worse ("supertaskers"); sleep helps memory (consolidation).
export default lesson("b2-3.2", "Worth trying", () => [
  section("Warm-up: Brain myths", [
    box(
      "Today you will…",
      "- find out which brain “facts” are actually myths 🧠\n- say what's worth doing — and what's pointless: *It's worth sleeping on it. There's no point cramming.* 💡\n- give advice: *My teacher encouraged me to read every day.*",
    ),
    trueFalse("Fact (true) or myth (false)? 🧠", [
      ["We only use about 10% of our brains.", false],
      ["Some people are “left-brained” (logical) and others are “right-brained” (creative).", false],
      ["Listening to Mozart makes babies more intelligent.", false],
      ["Sleep helps the brain store new memories.", true],
      ["Most people are bad at doing two difficult tasks at the same time.", true],
    ]),
    text(
      "Talk to your teacher.",
      "- Which myth did you believe? Where did you hear it?\n- What's your best trick for remembering things — names, words, passwords?\n- Is there something you keep forgetting, however hard you try? 😅",
    ),
    tip("Don't explain the myths — the reading does. Ask *Why do you think so?* for each answer to warm up discussion language."),
  ]),

  section("Vocabulary: Memory and the brain", [
    words("Memory and the brain", [
      ["memorize", "📝 learn something so you can remember it exactly"],
      ["recall", "🔁 remember something on purpose"],
      ["It slipped my mind.", "💨 I forgot (to do it)"],
      ["on the tip of my tongue", "👅 almost remembered, but not quite"],
      ["jog someone's memory", "🏃 help someone remember"],
      ["a photographic memory", "📸 the ability to remember everything you see"],
      ["short-term — long-term memory", "⏱️ for a few seconds — 🗄️ for a long time"],
      ["concentrate (on)", "🎯 give all your attention to something"],
      ["get distracted", "📱 stop paying attention because of something else"],
      ["cram", "📚 study a lot in a short time, just before an exam"],
      ["forgetful", "🙃 often forgetting things"],
      ["memorable", "⭐ worth remembering, easy to remember"],
    ]),
    match("Match the sentences and the meanings.", [
      ["Her name is on the tip of my tongue.", "I almost remember it."],
      ["Sorry, it completely slipped my mind.", "I forgot to do it."],
      ["Maybe this photo will jog your memory.", "It may help you remember."],
      ["He crammed all night for the exam.", "He studied a lot at the last minute."],
      ["I keep getting distracted by my phone.", "I can't keep my attention on my work."],
      ["She has a photographic memory.", "She remembers everything she sees."],
    ]),
    gaps(
      "Word formation: complete with the right form of the word in brackets.",
      "1. It was a truly [memorable] evening. (memory)\n2. My grandad is getting quite [forgetful]. (forget)\n3. The film was so [forgettable] — I can't remember the plot. (forget)\n4. She's a very [attentive] listener. (attend)\n5. Was the meeting [productive]? (produce)\n6. I need a [reliable] way to remember passwords. (rely)\n7. Thank you for being so [helpful]. (help)\n8. Our [concentration] drops after about 45 minutes. (concentrate)",
    ),
  ]),

  section("Reading: Five myths about your brain", [
    tip("A long text (~560 words). First reading — 5 minutes: *Which myth surprised you most?* Then the tasks. Ask the student to find five examples of -ing after an expression or a preposition."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Brain scans show that most of the brain is active during a normal day.", true],
        ["The Utah study found clear left-brained and right-brained people.", false],
        ["The original Mozart study was about babies.", false],
        ["A politician once suggested giving newborn babies classical music.", true],
        ["There is strong evidence for teaching to students' learning styles.", false],
        ["Very few people can do two demanding tasks at once without getting worse.", true],
      ],
      {
        read: [
          "## 🧠 Five myths about your brain — and what's worth believing instead",
          "Your brain weighs about one and a half kilos and contains around 86 billion nerve cells. It's hardly surprising that we find it mysterious — or that so many myths have grown up around it. Here are five you've probably heard.",
          "**1. \"We only use 10% of our brains.\"** This is perhaps the most famous myth of all, and films love it: take a magic pill and you can use the other 90%. Unfortunately, it's simply not true. Brain scans show that we use virtually all of our brain, even during sleep. Different areas are more active during different tasks, but there's no secret unused part waiting to be switched on.",
          "**2. \"Some people are left-brained, others are right-brained.\"** The idea is that logical people use the left side of the brain and creative people the right. It's true that some functions — language, for example — depend more on one side. But in 2013, researchers at the University of Utah looked at brain scans of over a thousand people and found no evidence that anyone uses one side more than the other overall. You're not a \"left-brain person\"; you're a whole-brain person.",
          "**3. \"Listening to Mozart makes children smarter.\"** In 1993, a small study found that college students did slightly better on a spatial task after listening to a Mozart sonata. The effect lasted about fifteen minutes. Somehow, this turned into the belief that classical music makes babies more intelligent — in 1998, the governor of the US state of Georgia even proposed giving every newborn a classical CD. Later studies often failed to find any effect at all. Music is wonderful, and learning an instrument is certainly worth doing, but playing Mozart to a baby won't turn it into a genius.",
          "**4. \"Everyone has a learning style.\"** Many people believe they are \"visual\" or \"auditory\" learners and should be taught in that way. People certainly have preferences. However, a large review in 2008 found no good evidence that teaching people in their preferred style helps them learn more. What does help is matching the method to the material: you learn a map by looking at it and a song by listening to it, whoever you are.",
          "**5. \"I'm good at multitasking.\"** Most of us believe we can do two things at once. In reality, the brain mostly switches quickly between tasks, and each switch costs time and accuracy. In one well-known driving study, only about 2.5% of people could talk on the phone while driving without getting worse at either task. Researchers called them \"supertaskers\". The odds are, you're not one of them.",
          "**So what is worth believing?** Here's what scientists agree on. Sleep is essential: during sleep, your brain replays and stores what you learned during the day, so there's no point staying up all night cramming. Spacing your study works better than doing it all at once: it's worth reviewing new words after a day, then a week, then a month. Testing yourself beats rereading your notes. And physical exercise helps the brain as well as the body.",
          "None of this is as exciting as a magic pill. But it has one big advantage: it actually works. 💪",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What really happens when we “multitask”?", options: ["*The brain switches quickly between tasks.", "The brain uses its unused 90%.", "Both sides of the brain work separately."] },
      { q: "What did the 1993 Mozart study really find?", options: ["*a small, short effect on a spatial task in students", "babies became smarter", "students remembered more words"] },
      { q: "According to the article, what helps us learn?", options: ["*matching the method to the material", "always using your learning style", "studying everything in one night"] },
      { q: "Which study tip is NOT in the article?", options: ["*Listen to classical music while you study.", "Space your study over time.", "Test yourself instead of rereading."] },
    ]),
    gaps(
      "Find words in the article.",
      "1. almost completely: [virtually]\n2. about space and position (a task): [spatial]\n3. suggested officially: [proposed]\n4. a very clever person: a [genius]\n5. exactness, being correct: [accuracy]\n6. absolutely necessary: [essential]",
    ),
  ]),

  section("Video: How memories form", [
    video("Watch: TED-Ed — How memories form and how we lose them.", "yOgAbKJGrTA"),
    text(
      "After the video: talk about it.",
      "- Explain in your own words how a memory is formed.\n- Why do we forget things? What helps us keep them?\n- Which study tips from the reading does the video support?",
    ),
    tip("Ask the student to retell the video in 4–5 sentences, using *It's worth…, There's no point…, It helps to…*."),
  ]),

  section("Grammar: It's worth trying", [
    quiz("Notice the rule 🔍 Look: “It's worth reviewing new words after a day.” · “There's no point staying up all night cramming.” · “I'm good at remembering faces.”", [
      { q: "After “it's worth” and “there's no point” we use…", options: ["*verb + -ing", "to + verb", "the base verb"] },
      { q: "After a preposition (at, of, in, about) we use…", options: ["*verb + -ing", "to + verb", "a past form"] },
      { q: "“It's worth reviewing” means…", options: ["*reviewing is useful", "reviewing is expensive", "you must review"] },
    ]),
    table("worth-no-point"),
    choose(
      "Choose.",
      "1. It's worth [*visiting/to visit] the museum — it's amazing.\n2. There's no point [*arguing/to argue] with him. He never listens.\n3. I can't help [*laughing/to laugh] when I see that video. 😂\n4. I had trouble [*remembering/to remember] her name.\n5. She's really good at [*solving/solve] puzzles.\n6. It's no use [*crying/to cry] about it now.\n7. I'm tired of [*being/be] told what to do.\n8. We spent the whole evening [*playing/to play] board games. 🎲",
    ),
    gaps(
      "Complete with the -ing form of the verb in brackets.",
      "1. Is this book worth [reading]? (read)\n2. There's no point [waiting] — the bus won't come. (wait)\n3. I'm not used to [getting] up so early. (get)\n4. She's afraid of [forgetting] her lines on stage. (forget)\n5. Thanks for [reminding] me! (remind)\n6. He's interested in [learning] how memory works. (learn)",
    ),
  ]),

  section("Grammar: She encouraged me to try", [
    table("object-infinitive"),
    choose(
      "Choose.",
      "1. My teacher encouraged me [*to read/reading] in English every day.\n2. The doctor advised him [*to sleep/sleep] more.\n3. My parents made me [*practice/to practice] the piano for an hour a day. 🎹\n4. Can you remind me [*to call/calling] my grandma?\n5. They didn't let us [*use/to use] our phones in the exam.\n6. She persuaded her brother [*to try/trying] the memory app.\n7. The guide warned us [*not to touch/to not touch] the plants.\n8. I finally got my dad [*to download/download] the app.",
    ),
    drag(
      "Complete Daniyar's post about his study habits.",
      "When I started learning Korean, my teacher [encouraged] me to test myself instead of rereading my notes. At first I didn't want to change, but she [persuaded] me to try. She also [made] me write ten new words every day. My grandma always [reminds] me to sleep properly before exams. And my friend Ji-woo [warned] me not to cram. Now nobody has to [tell] me — I know it works! 🇰🇷",
      ["let", "said", "suggested"],
    ),
    order("Make sentences.", [
      "It's worth learning a few words every day.",
      "There's no point cramming the night before.",
      "My teacher encouraged me to keep a diary.",
      "She reminded me to take my notebook.",
      "I can't help checking my phone.",
    ]),
    tip("Say it right: *worth* /wɜːθ/ — not /wɔːs/. And *it's no point* is wrong — it's *there's no point*. Drill: *It's worth it! There's no point!*"),
  ]),

  section("Listening: Ask the brain doctor", [
    tip("A long listening — about 3 minutes 20 seconds. A radio phone-in with the neuroscientist Dr. Gulnara Bekova. Callers: Saule (Madina's grandmother), Daniyar (in Seoul) and Kenji. First listen: *What problem does each caller have?* Second listen: the tasks."),
    ...listening(
      "Listen to a radio phone-in with a neuroscientist.",
      "**Host:** Good afternoon, and welcome to Ask the Brain Doctor. With me in the studio is the neuroscientist Dr. Gulnara Bekova. Our lines are open, and our first caller is Saule. Hello, Saule!\n\n**Saule:** Hello. I'm seventy-one, and my question is simple. Lately, I keep forgetting names. Yesterday I met a neighbor I've known for twenty years, and her name was on the tip of my tongue, but it just wouldn't come. Should I be worried?\n\n**Gulnara:** That's a very common experience, Saule, and it happens at every age — students have it too. Names are particularly hard because they're random: there's nothing in a person's face that tells you they're called Aigul or Natasha. On its own, a name slipping your mind isn't a sign of anything serious.\n\n**Saule:** That's a relief. Is it worth doing those brain-training games on the phone? My granddaughter downloaded one for me.\n\n**Gulnara:** They're fun, and there's no harm in playing them, but research suggests they mostly make you better at the games themselves. What's really worth doing is staying active and social. Walk every day, learn something new, keep meeting people. And when you meet someone new, say their name out loud a couple of times. It helps the memory stick.\n\n**Saule:** Walking and talking to people? I can do that.\n\n**Host:** Thank you, Saule. Our next caller is Daniyar, calling from Seoul. Hi, Daniyar.\n\n**Daniyar:** Hi! I'm an engineering student, and I study in Korean, which isn't my first language. My exams are in three weeks. My friends say the best way is to stay up all night before the exam. Is there any point doing that?\n\n**Gulnara:** I'm afraid your friends are wrong. Cramming all night might help you remember something the next morning, but you'll forget most of it within days. And without sleep, your brain doesn't have the chance to store what you learned. I'd encourage you to do the opposite: study a little every day, test yourself instead of rereading, and get proper sleep, especially the night before the exam.\n\n**Daniyar:** Test myself how?\n\n**Gulnara:** Close the book and try to explain the topic out loud, or write down everything you remember, then check. It feels harder than rereading, and that's exactly why it works.\n\n**Daniyar:** Okay. I'll try to persuade my friends to sleep too.\n\n**Host:** Good luck! One more call before the news. Kenji, go ahead.\n\n**Kenji:** Hello. I'm a team leader in IT, and I'm proud of being good at multitasking. I answer messages during meetings, I listen to podcasts while I code. But my colleague keeps telling me I make more mistakes when I do that. Who's right?\n\n**Gulnara:** I'm sorry, Kenji, but your colleague probably is. When you think you're multitasking, your brain is actually switching quickly between tasks, and every switch costs a little time and attention. Only a tiny percentage of people can do two demanding things at once without getting worse.\n\n**Kenji:** So what do you suggest?\n\n**Gulnara:** Try working in blocks. Turn off notifications for forty-five minutes, do one thing, then take a short break. Most people find they get more done, not less.\n\n**Kenji:** Fine. I'll try it — but if my inbox explodes, I'm blaming you.\n\n**Host:** Ha! Thank you all. Dr. Bekova, any final advice?\n\n**Gulnara:** Sleep, move and be curious. Your brain will thank you.",
    ),
    quiz("Listen and choose.", [
      { q: "Why are names hard to remember, according to Dr. Bekova?", options: ["*They're random — nothing in a face tells you the name.", "Because of age.", "Because people don't listen."] },
      { q: "What does she say about brain-training games?", options: ["*They mostly make you better at the games.", "They prevent memory loss.", "They're dangerous."] },
      { q: "What does she advise Daniyar to do?", options: ["*study a little every day and sleep properly", "stay up all night before the exam", "reread his notes many times"] },
      { q: "Why is testing yourself effective?", options: ["*It feels harder, and that's why it works.", "It's faster than reading.", "It's more fun."] },
      { q: "What does she suggest to Kenji?", options: ["*working in blocks without notifications", "listening to podcasts while coding", "answering messages in meetings"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Saule has known her neighbor for twenty years.", true],
      ["Saule's granddaughter downloaded a brain-training game for her.", true],
      ["Daniyar's exams are in three months.", false],
      ["Dr. Bekova agrees with Daniyar's friends.", false],
      ["Kenji's colleague says he makes more mistakes when multitasking.", true],
      ["Dr. Bekova suggests turning off notifications for two hours.", false],
    ]),
    gaps(
      "Complete what they said. Listen again if you need.",
      "1. Saule: Her name was on the [tip] of my tongue.\n2. Saule: Is it [worth] doing those brain-training games?\n3. Daniyar: Is there any [point] doing that?\n4. Gulnara: I'd [encourage] you to do the opposite.\n5. Daniyar: I'll try to [persuade] my friends to sleep too.\n6. Kenji: I'm proud of [being] good at multitasking.",
    ),
  ]),

  section("Let's talk: The best advice for learning", [
    text(
      "Give advice 🎓",
      "A friend is starting to learn a new language (or an instrument, or a sport). Give them advice for 2 minutes, then listen to your teacher's advice.\n\nUse:\n- *It's worth… / It's no use… / There's no point…*\n- *I'd encourage you to… / I'd advise you not to…*\n- *My teacher made me… / My parents never let me…*\n\nThen discuss:\n- Which piece of advice from today will you actually try?\n- What's the best advice a teacher ever gave you?",
    ),
    tip("In a group: students give advice in pairs and then share the most useful tip. Correct *It's worth to try* → *It's worth trying*, *advised me read* → *advised me to read*."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "This film isn't worth ___.", options: ["*watching", "to watch", "watch"] },
      { q: "She encouraged me ___ for the job.", options: ["*to apply", "applying", "apply"] },
      { q: "My parents made me ___ my room.", options: ["*clean", "to clean", "cleaning"] },
      { q: "His name is on the ___ of my tongue.", options: ["*tip", "top", "end"] },
    ]),
    box(
      "Phrase of the day: use it or lose it",
      "🧠 If you don't use a skill — a language, an instrument, your memory — you slowly lose it.\n\n*What skill would you like not to lose?*",
    ),
  ]),

  homework(
    [
      choose(
        "Choose.",
        "1. It's worth [*checking/to check] the weather before you go.\n2. There's no point [*worrying/worry] about it.\n3. My teacher advised me [*to read/reading] more.\n4. They let us [*leave/to leave] early.\n5. I'm looking forward to [*seeing/see] you.\n6. Can you remind me [*to buy/buying] milk?\n7. I had difficulty [*finding/to find] the café.\n8. She warned me [*not to be/to not be] late.",
      ),
      gaps(
        "Rewrite the sentences.",
        "1. “You should sleep more,” the doctor said to me. → The doctor advised me [to sleep] more.\n2. “Don't forget your keys!” Mum said to me. → Mum reminded me [not to forget] my keys.\n3. Reading this book is a good idea. → This book is worth [reading].\n4. Arguing with him is useless. → There's no point [arguing] with him.\n5. “Go on, try it!” my friend said. → My friend encouraged me [to try] it.\n6. My parents didn't allow me to stay out late. → My parents didn't let me [stay] out late.",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      match("Match the phrases and the meanings.", [
        ["slip your mind", "be forgotten"],
        ["jog someone's memory", "help someone remember"],
        ["cram", "study a lot at the last minute"],
        ["get distracted", "lose your attention"],
        ["recall", "remember on purpose"],
        ["memorable", "easy to remember"],
      ]),
      write("Write an article (140–190 words) for a student website: “Five tips for a better memory”. Use ideas from the lesson and your own experience. Use it's worth…, there's no point…, and at least two verbs like encourage / advise / remind someone to….", 140),
      record("Record a 1-minute answer: “What's the best way to learn new words?” 🎙️", 75),
    ],
    "Homework: Writing and speaking",
  ),
]);
