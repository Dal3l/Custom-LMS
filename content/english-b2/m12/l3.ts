import {
  box,
  choose,
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
  write,
} from "../../kit";

// 12.3 B2 First practice — a mini mock exam (as in the programme): all four papers in the B2 First format with tips for each: Reading & Use of English (Parts 1–5, short versions), Writing (Part 1 essay + Part 2 choice — written at home), Listening (Part 1 short extracts, Part 4 interview with Leo, ~3:00 in total), Speaking (official Cambridge English sample video + Parts 1–4 practice). Warm-up: a quiz about the exam format.
// Facts checked: Cambridge B2 First has four papers: Reading and Use of English (1 hour 15 minutes, 7 parts, 52 questions), Writing (1 hour 20 minutes, 2 parts), Listening (about 40 minutes, 4 parts, 30 questions), Speaking (about 14 minutes, 4 parts, usually two candidates and two examiners); results are reported on the Cambridge English Scale: 160–179 = B2 (grade C 160–172, grade B 173–179), 180–190 = grade A (C1 level). Video: "B2 First Speaking test — Victoria and Edward" (official Cambridge English channel, "English with Cambridge"). Characters: Leo (musician) in Listening Part 4; the Reading Part 5 writer (Aruzhan, a mountain guide) is new.
export default lesson("b2-12.3", "B2 First practice", () => [
  section("Warm-up: Know your exam", [
    box(
      "Today you will…",
      "- review the format of Cambridge B2 First 📝\n- try a short version of every paper 🎯\n- collect the best exam tips from the whole course ✅",
    ),
    quiz("How well do you know B2 First? Guess. 📝", [
      { q: "How many papers are there in B2 First?", options: ["*four", "three", "five"] },
      { q: "How long is the Reading and Use of English paper?", options: ["*1 hour 15 minutes", "40 minutes", "2 hours"] },
      { q: "How long is the Speaking test?", options: ["*about 14 minutes", "about 1 hour", "about 5 minutes"] },
      { q: "Which score on the Cambridge English Scale means B2?", options: ["*160–179", "100–120", "200–220"] },
      { q: "Who usually takes the Speaking test together?", options: ["*two candidates with two examiners", "one candidate alone with a computer", "a whole class"] },
    ]),
    text(
      "Talk to your teacher.",
      "- Which paper do you think will be easiest for you? Which hardest? Why?\n- What do you do when you feel nervous before a test? 😬\n- Which exam tip from this course has helped you most?",
    ),
    tip("Today's tasks are short versions of each paper — about 60% of a real exam's difficulty in 60 minutes. Time each part. Don't explain answers during the tasks; go through them at the end. The writing tasks are for homework."),
  ]),

  section("Reading and Use of English: Parts 1–4", [
    tip("Exam tips: Part 1 — read the words AFTER the gap. Part 2 — think about what KIND of word is missing. Part 3 — decide the part of speech first, then check negatives and plurals. Part 4 — don't change the word in capitals, 2–5 words, keep the meaning. About 12 minutes for all four."),
    choose(
      "Part 1. Choose the best word for each gap.",
      "Learning to let go 🏔️\n\nWhen I first [*took/made/did/got] up climbing, I wanted to control everything. I checked the weather ten times and [*refused/denied/avoided/rejected] to climb if the forecast wasn't perfect. My instructor [*warned/told/said/advised] me that this attitude would stop me from enjoying the mountains. It took me years to [*realize/notice/know/understand] that she was right. Now I plan carefully, [*but/although/despite/whereas] I also accept that some things are out of my hands. I have never [*felt/been/had/made] happier in the mountains.",
    ),
    gaps(
      "Part 2. Write ONE word in each gap.",
      "Despite [being] nervous, I passed my exam. What helped me most [was] practice. Not only [did] I do every past paper, but I also recorded myself speaking. The teacher [who/that] prepared me was very strict, [which] I didn't like at first. Looking back, I'm grateful [for] her help.",
    ),
    gaps(
      "Part 3. Use the word in brackets to form a word that fits the gap.",
      "1. Her [explanation] was clear and simple. (explain)\n2. The weather was completely [unpredictable]. (predict)\n3. He spoke with great [confidence]. (confident)\n4. It was a [disappointing] result. (disappoint)\n5. The museum's [security] has improved. (secure)\n6. She's [extremely] talented. (extreme)",
    ),
    gaps(
      "Part 4. Complete the second sentence. Use the word in capitals and 2–5 words.",
      "1. I'm sure she forgot the meeting. (MUST) → She [must have forgotten] the meeting.\n2. I regret not studying harder. (WISH) → I [wish I had studied] harder.\n3. People say he is very rich. (SAID) → He [is said to be] very rich.\n4. You won't pass if you don't practice. (UNLESS) → You won't pass [unless you practice].\n5. I've never seen such a beautiful view. (NEVER) → [Never have I seen] such a beautiful view.\n6. Although it rained, we went out. (DESPITE) → [Despite the rain/Despite it raining], we went out.",
    ),
  ]),

  section("Reading Part 5: A text", [
    tip("Exam tip: the questions follow the order of the text. Underline the part of the text that answers each question, and choose the option that says the same thing in different words. About 8 minutes."),
    quiz(
      "Read the text and choose the right answer.",
      [
        { q: "1. How did Aruzhan feel during her first season as a guide?", options: ["*She worried about every possible problem.", "She was relaxed and confident.", "She was bored."] },
        { q: "2. What did the older guide teach her?", options: ["*to focus on the people, not only the route", "to walk faster", "to avoid difficult groups"] },
        { q: "3. What does “it” refer to in “it changed the way I work” (paragraph 3)?", options: ["*the conversation with the frightened tourist", "the storm", "the guidebook"] },
        { q: "4. What is Aruzhan's attitude to her job now?", options: ["*She enjoys it more and worries less.", "She wants to stop guiding.", "She finds it boring."] },
      ],
      {
        read: [
          "## 🏔️ The mountains taught me to listen",
          "by Aruzhan, mountain guide",
          "During my first season as a mountain guide, I hardly slept. I checked every route three times, carried twice as much equipment as I needed and imagined every possible disaster: storms, injuries, lost tourists. Although I knew the mountains well, I didn't yet know how to share them.",
          "An older guide noticed how stressed I was. One evening, he sat down next to me and said, \"You're looking at the path all the time. Look at your people.\" At first I didn't understand. The path was my job, wasn't it? It took me a whole summer to see what he meant.",
          "The turning point came on a cloudy afternoon in August. A woman in my group stopped and refused to go any further. I started explaining the weather forecast and the route, but she wasn't listening. So I stopped talking and asked her what was wrong. She told me she was terrified of heights and had only come because her son wanted to. We sat on a rock for twenty minutes while the others waited. Then, slowly, we walked on together. At the top, she cried — and then laughed. It changed the way I work. What people need from a guide is not only safety, but also someone who notices them.",
          "Today, I still plan carefully, but I worry far less. I've learned that the best days in the mountains are rarely the ones that go exactly as planned. They're the ones where someone discovers they can do more than they thought.",
        ].join("\n\n"),
      },
    ),
  ]),

  section("Reading Part 5: words", [
    gaps(
      "Find words in Aruzhan's text.",
      "1. almost not: [hardly]\n2. terrible events: [disasters]\n3. very frightened: [terrified]\n4. the moment when things change: the [turning] point\n5. sees, pays attention to: [notices]\n6. found out something new: [discovers]",
    ),
  ]),

  section("Listening: Parts 1 and 4", [
    tip("Exam tips: read the questions BEFORE you listen. In Part 1, each extract is a new situation. In Part 4, the questions follow the order of the interview, and the correct answer usually uses different words from the recording. In the exam you hear everything twice."),
    ...listening(
      "Part 1. Listen to three short extracts and choose the right answer for each.",
      "**1.**\n\n**Woman:** I was so sure I'd failed the interview. I forgot the name of the company's director, and I spilled water on the table. But they called this morning and offered me the job. Apparently, what they liked most was that I stayed calm and laughed about it.\n\n**2.**\n\n**Man:** The new cycle lanes have made a huge difference. I used to drive to work every day, and it took forty minutes. Now I cycle, and it takes twenty-five. I'm fitter, I'm saving money, and I actually arrive in a good mood.\n\n**3.**\n\n**Girl:** I wish I'd started revising earlier. I left everything to the last week, and now I'm studying until midnight every night. If I'd made a plan in September, I wouldn't be this stressed. Next year, I'm going to do things differently.\n\n**4.**\n\n**Man:** Welcome to the museum. Before we begin, please note that photos are allowed in all rooms except the special exhibition on the second floor. The tour lasts about an hour, and at the end you're welcome to visit the café, where your ticket gives you a ten percent discount.",
    ),
    quiz("Part 1. Listen and choose.", [
      { q: "1. Why did the woman get the job?", options: ["*She stayed calm when things went wrong.", "She knew the director's name.", "She had the best qualifications."] },
      { q: "2. What is the man's opinion of the cycle lanes?", options: ["*They've improved his daily life.", "They've made traffic worse.", "They're too dangerous."] },
      { q: "3. How does the girl feel?", options: ["*stressed and regretful", "relaxed and confident", "bored"] },
      { q: "4. Where are photos NOT allowed?", options: ["*in the special exhibition on the second floor", "in the café", "anywhere in the museum"] },
    ]),
    ...listening(
      "Part 4. Listen to an interview with Leo, a musician.",
      "**Host:** My guest today is Leo, a musician whose band played at this year's winter festival. Leo, it's been quite a year for you.\n\n**Leo:** It really has. A few years ago, the band almost broke up. Our album sold about three hundred copies, and our singer left. Now we're playing festivals, and I'm singing as well as playing guitar.\n\n**Host:** What changed?\n\n**Leo:** Our attitude, mainly. We stopped trying to be famous and started playing for fun again. Strangely, that's when people started listening.\n\n**Host:** You played your father's old guitar at the festival. Why was that important?\n\n**Leo:** I'd sold it years ago to buy a van, and I regretted it every day. Getting it back felt like getting a part of my family back. When my dad heard me play it on stage, he cried. Then he stole it from backstage for an hour to play it himself!\n\n**Host:** What's next for the band?\n\n**Leo:** We're recording a new album in the spring — in a friend's flat, not in an expensive studio. And this time, we're not worrying about how many copies it sells.\n\n**Host:** Any advice for young musicians?\n\n**Leo:** Don't wait to be discovered. Play wherever you can — cafés, markets, birthday parties. And look after your voice. I lost mine three days before the festival, and I've never drunk so much tea with honey in my life.",
    ),
    quiz("Part 4. Listen and choose.", [
      { q: "1. What happened to Leo's band a few years ago?", options: ["*It almost broke up.", "It won a prize.", "It moved abroad."] },
      { q: "2. Why do people listen to the band now, according to Leo?", options: ["*The band started playing for fun again.", "They found a famous singer.", "They spent more money on advertising."] },
      { q: "3. Why was the guitar important to Leo?", options: ["*Getting it back felt like getting part of his family back.", "It was very expensive.", "It was a present from his bandmates."] },
      { q: "4. Where will the band record the new album?", options: ["*in a friend's flat", "in an expensive studio", "at the festival"] },
      { q: "5. What is Leo's advice for young musicians?", options: ["*Play wherever you can and look after your voice.", "Wait for a record company to find you.", "Only play in big venues."] },
    ]),
    trueFalse("Part 4. Listen again. True or false?", [
      ["The band's first album sold about three hundred copies.", true],
      ["Leo only plays the guitar now.", false],
      ["Leo's father cried when he heard Leo play the guitar.", true],
      ["The band is worried about how many copies the new album will sell.", false],
      ["Leo lost his voice three days before the festival.", true],
    ]),
  ]),

  section("Speaking: Watch and practice", [
    video("Watch: Cambridge English — B2 First Speaking test (Victoria and Edward). Watch at least one part.", "EdeZp0n0JHw"),
    sort("What do good candidates do in the Speaking test? Sort. 🧩", {
      "👍 do": [
        "extend answers with reasons and examples",
        "react to what the partner says",
        "ask the examiner to repeat if you didn't understand",
        "use the full time in Part 2",
      ],
      "👎 don't": [
        "give one-word answers",
        "learn long answers by heart",
        "ignore your partner in Part 3",
        "stop talking after 20 seconds in Part 2",
      ],
    }),
    text(
      "🗣️ Speaking practice (about 12 minutes)",
      "**Part 1 (2 min):** *Where are you from? What do you enjoy about learning English? What are your plans for next year?*\n\n**Part 2 (1 min + 30 sec):** Imagine two photos: **A** — a student studying alone late at night; **B** — a group of friends studying together in a café. *Compare them and say which way of studying is more effective, and why.*\n\n**Part 3 (2 min + 1 min):** *How important are these things for success in an exam?* — 📅 a study plan · 😴 enough sleep · 👥 studying with others · 🧠 past papers · 🎧 listening to English every day. Then decide: *Which TWO are the most important?*\n\n**Part 4 (4 min):** *Is it better to take exams or to be assessed on coursework? Should schools teach students how to deal with stress? Will exams exist in 50 years?*",
    ),
    tip("Time each part exactly. In Part 3 the teacher plays the partner — interrupt the student once politely to check they can handle it (*Sorry, can I just add…?*). Give feedback with the four Speaking criteria: grammar and vocabulary, discourse management, pronunciation, interactive communication."),
  ]),

  section("Writing: the tasks", [
    box(
      "✍️ Writing tasks (homework, 80 minutes in total)",
      "**Part 1 (compulsory) — Essay:** *Some people say that exams are the best way to measure what students know. Do you agree?* Write about: 1) fairness, 2) stress, 3) your own idea. (140–190 words)\n\n**Part 2 — choose ONE (140–190 words):**\n- **Article:** *The best piece of advice I've ever received.*\n- **Review:** a book, film or series that changed the way you think.\n- **Report:** for your school or company — how to help people learn English more effectively.\n- **Email:** to an English-speaking friend who is coming to visit your city.",
    ),
    order(
      "Put your exam-day plan for Writing in order.",
      [[
        "Read both tasks and choose Part 2 quickly.",
        "Plan the essay for about five minutes.",
        "Write the essay in about 30 minutes.",
        "Plan and write Part 2 in about 35 minutes.",
        "Use the last ten minutes to check both texts.",
      ].join("\n")],
      "lines",
    ),
  ]),

  section("Your exam toolkit", [
    match("Match the paper and the best tip.", [
      ["Use of English Part 4", "Don't change the word in capitals."],
      ["Reading Part 6", "Look at the words before and after each gap."],
      ["Reading Part 7", "Underline key words in the questions first."],
      ["Listening Part 1", "Read the question before each extract."],
      ["Writing", "Plan, write, then count and proofread."],
      ["Speaking Part 3", "Talk WITH your partner and reach a decision."],
    ]),
    choose(
      "Grammar of the whole course. Choose.",
      "1. Who [*told/did tell] you about the exam?\n2. By June, I [*will have finished/will finish] the course.\n3. I [*needn't have worried/didn't need worry] — it was easy!\n4. The bridge [*is being built/is building] right now.\n5. She accused me [*of copying/to copy] her answers.\n6. If I had slept more, I [*would feel/would have felt] better now.\n7. He [*must have left/must leave] early — his coat isn't here.\n8. [*Having finished/Finished] the exam, she went home.",
    ),
    trueFalse("Check yourself. Can you do it? True or false? ✅", [
      ["I know what happens in each of the four papers.", true],
      ["I know how much time to spend on each part.", true],
      ["I can plan and write an essay in about 35 minutes.", true],
      ["I can speak for one minute in Speaking Part 2 without stopping.", true],
      ["I know my weakest part and how to practice it.", true],
    ]),
    tip("Count the points from today. Compare the student's results across parts and agree on a practice plan for the weakest one. If the student is planning to take the real exam, recommend official Cambridge practice tests."),
  ]),

  homework(
    [
      write("Writing Part 1 (essay): “Some people say that exams are the best way to measure what students know. Do you agree?” Write about fairness, stress and your own idea (140–190 words). Time yourself: 40 minutes.", 140),
      write("Writing Part 2: choose ONE task from the lesson (article, review, report or email), 140–190 words. Time yourself: 40 minutes.", 140),
      record("Speaking Part 2 practice: compare the two photos from the lesson (a student alone at night / friends in a café) for exactly one minute. 🎙️⏱️", 75),
    ],
    "Homework: Writing and speaking (exam practice)",
  ),
  homework(
    [
      choose(
        "Use of English Part 1 practice. Choose.",
        "1. Can you [*take/make] care of my cat while I'm away?\n2. I [*made/did] a mistake in the last question.\n3. She [*paid/gave] no attention to the warning.\n4. They [*reached/arrived] an agreement after hours of talks.\n5. We need to [*come/get] up with a better plan.\n6. He [*kept/held] his promise.",
      ),
      gaps(
        "Use of English Part 4 practice.",
        "1. It's possible that he missed the bus. (MIGHT) → He [might have missed] the bus.\n2. I'd like to live by the sea. (WISH) → I [wish I lived] by the sea.\n3. They made me wait for an hour. (MADE) → I [was made to wait] for an hour.\n4. Someone is repairing my car. (HAVING) → I'm [having my car repaired].\n5. She is too young to drive. (OLD) → She isn't [old enough to drive].\n6. He started learning Korean two years ago. (BEEN) → He [has been learning Korean] for two years.",
      ),
    ],
    "Homework: Use of English practice",
  ),
]);
