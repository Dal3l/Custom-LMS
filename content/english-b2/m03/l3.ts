import {
  box,
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

// 3.3 Genius or hard work? — skills lesson and the FIRST DEBATE of the course (short format). No new grammar; review of perfect / passive forms, -ing after expressions, verb + object + infinitive. V: talent and practice (gifted, natural ability, deliberate practice, put in the hours…), debate language. Main format: sorting arguments + a long reading (talent vs 10,000 hours, ~570 words) + TED-Ed video (practicing effectively) + a long listening (a model debate at Daniyar's university debate club in Seoul, ~3:30) + the student's own debate by the rules.
// Debate rules (see docs/courses/english-b2/program.md, "Дебаты"): motion → preparation (2–3 arguments, PEEL) → opening speeches → rebuttal preparation → rebuttals → questions → closing speeches (no new arguments) → verdict and feedback. Short version for this first debate: prep 5 min, openings 1.5 min, rebuttal prep 1 min, rebuttals 1 min, questions 2 min, closings 1 min.
// Facts checked: K. Anders Ericsson et al. (1993) — a study of violin students at a music academy in Berlin: the best students had practiced far more (on average about 10,000 hours by age 20) than less accomplished students; Malcolm Gladwell's "Outliers" (2008) made the "10,000-hour rule" popular and used the Beatles' Hamburg club years (1960–62) as an example; Ericsson later said the rule was oversimplified (the number is an average, and the quality of practice matters); Macnamara, Hambrick & Oswald (2014) meta-analysis — deliberate practice explained about 26% of the differences in games, 21% in music, 18% in sports, 4% in education and under 1% in professions; David Epstein, "Range" (2019) — many top performers tried several activities before specializing.
export default lesson("b2-3.3", "Genius or hard work?", () => [
  section("Warm-up: Talent or practice?", [
    box(
      "Today you will…",
      "- read what science says about talent and practice 🎻\n- watch a model debate — and learn the rules ⚖️\n- take part in your **first real debate**: *This house believes that hard work matters more than talent.* 🎤",
    ),
    sort("Which side does each argument support? Sort. 🧩", {
      "🌟 talent matters more": [
        "Some children play music by ear before any lessons.",
        "Two people can practice the same amount and get very different results.",
        "Height and body type matter in many sports.",
        "Some people learn languages much faster than others.",
      ],
      "💪 hard work matters more": [
        "The best violin students had practiced the most hours.",
        "Many “natural talents” started training very young.",
        "Without practice, talent is never discovered.",
        "Good habits can be learned by anyone.",
      ],
    }),
    text(
      "Talk to your teacher.",
      "- What's something you're good at? Is it talent, practice — or both?\n- Think of a famous musician, athlete or scientist. What made them great?\n- In lesson 3.1 you said whether creativity is a talent or a habit. Have you changed your mind? 🤔",
    ),
    tip("The sort has a “correct” side for each argument, but discuss any disagreement — that's debate practice already. Keep the arguments: the student can use them later."),
  ]),

  section("Vocabulary: Talent and practice", [
    words("Talent and practice", [
      ["gifted — talented", "🌟 having a natural ability"],
      ["a natural ability", "🧬 something you can do well without being taught"],
      ["a child prodigy", "👶🎻 a very young person with an extraordinary talent"],
      ["deliberate practice", "🎯 focused practice on your weaknesses, with feedback"],
      ["put in the hours", "⏳ work or practice for a long time"],
      ["reach your potential", "📈 become as good as you can be"],
      ["persevere — perseverance", "💪 keep trying in spite of difficulties"],
      ["a late bloomer", "🌸 someone who becomes successful later than usual"],
      ["specialize", "🔬 focus on one area only"],
      ["an advantage — a disadvantage", "✅ something that helps — ❌ something that makes things harder"],
    ]),
    match("Match.", [
      ["put in", "the hours"],
      ["reach your", "potential"],
      ["a child", "prodigy"],
      ["deliberate", "practice"],
      ["a late", "bloomer"],
      ["have a natural", "ability"],
    ]),
    gaps(
      "Complete with a word from the list.",
      "1. Mozart was a child [prodigy] — he composed music at five. 🎹\n2. You won't improve unless you put in the [hours].\n3. She only started painting at 50 — a real late [bloomer]. 🌸\n4. Being tall is an [advantage] in basketball.\n5. With [perseverance], he finally passed the exam on his fourth try.\n6. Good teachers help students reach their [potential].",
    ),
  ]),

  section("Reading: Born or made?", [
    tip("A long text (~570 words). First reading — 5 minutes: *What is the writer's final answer — talent or practice?* Then the tasks. Ask the student to mark arguments they can use in the debate."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Ericsson's study looked at violin students in Berlin.", true],
        ["Gladwell invented the idea of deliberate practice.", false],
        ["Ericsson said that 10,000 hours is a magic number for everyone.", false],
        ["The 2014 analysis found that practice matters more in games than in professions.", true],
        ["According to Epstein, many top performers tried several activities first.", true],
        ["The writer thinks talent doesn't exist at all.", false],
      ],
      {
        read: [
          "## 🎻 Born or made? The truth about talent",
          "We love stories of geniuses. Mozart composing at five, a teenage chess champion, a guitarist who could play anything after hearing it once. These stories suggest that greatness is a gift: either you're born with it, or you aren't. But since the 1990s, a growing number of scientists have argued that we've been looking at the wrong thing.",
          "**The violin study.** In 1993, the psychologist Anders Ericsson and his colleagues studied violin students at a music academy in Berlin. Teachers divided them into groups: the future stars, the very good, and those likely to become music teachers. The researchers then asked how much each student had practiced since childhood. The difference was striking. By the age of twenty, the best students had spent, on average, around 10,000 hours practicing alone — far more than the others. Ericsson's conclusion was that what looks like talent is often the result of years of what he called *deliberate practice*: focused, effortful work on exactly the things you can't do yet, usually with a teacher's feedback.",
          "**The 10,000-hour rule.** In 2008, the writer Malcolm Gladwell made this idea famous in his best-seller *Outliers*. Among his examples were the Beatles, who played hundreds of exhausting, all-night shows in Hamburg clubs between 1960 and 1962 before they became famous. The \"10,000-hour rule\" became a popular slogan: practice for 10,000 hours, and you'll become an expert at anything.",
          "Ericsson himself was not happy. He pointed out that 10,000 was an average, not a magic number, that some fields need far more practice and others less, and that the *kind* of practice matters much more than the number of hours. Playing the same easy song a thousand times will not make you a great guitarist.",
          "**The case for talent.** Other researchers went further. In 2014, a team led by Brooke Macnamara combined the results of dozens of studies. They found that practice explained a large part of the differences between people in some fields — about a quarter in games like chess, about a fifth in music, slightly less in sports — but only a small part in education, and almost none in professional work. In other words, practice matters a lot, but it isn't the whole story. Genes, the age you start, the quality of your teachers, your health, even luck, all play a role.",
          "**A third view.** The journalist David Epstein has offered another angle. In his book *Range* (2019), he shows that many top performers didn't specialize early at all. They tried several sports, instruments or subjects before choosing one — and their wide experience later helped them think creatively. Not every champion is made by early, narrow training.",
          "**So, born or made?** Probably both — and the question may be less important than it seems. Nobody becomes excellent without enormous effort, and effort is something we can control. Talent might decide how fast you improve, but practice decides whether you improve at all. Perhaps the most useful lesson is this: when you see someone who makes something look easy, remember the thousands of hours you didn't see. 🎶",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What is “deliberate practice”?", options: ["*focused work on things you can't do yet, with feedback", "practicing for exactly 10,000 hours", "playing your favorite pieces many times"] },
      { q: "Why does the writer mention the Beatles?", options: ["*as Gladwell's example of thousands of hours of practice", "as an example of natural talent", "because they studied in Berlin"] },
      { q: "Why was Ericsson unhappy with the “10,000-hour rule”?", options: ["*It was oversimplified.", "It was too strict.", "It was about music only."] },
      { q: "What did Macnamara's team find?", options: ["*Practice matters, but it isn't the whole story.", "Practice explains everything.", "Practice doesn't matter at all."] },
      { q: "What is the writer's conclusion?", options: ["*Both talent and effort matter, but effort is in our control.", "Talent is the only thing that matters.", "Everyone can become a genius."] },
    ]),
    gaps(
      "Find words in the article.",
      "1. very noticeable, surprising: [striking]\n2. needing a lot of effort: [effortful]\n3. a short, memorable phrase: a [slogan]\n4. extremely tiring: [exhausting]\n5. a different way of looking at something: an [angle]\n6. extremely large: [enormous]",
    ),
  ]),

  section("Video: How to practice effectively", [
    video("Watch: TED-Ed — How to practice effectively… for just about anything.", "f2O6mQkFiiw"),
    text(
      "After the video: talk about it.",
      "- What happens in the brain when we practice, according to the video?\n- Which practice tips from the video do you already use? Which will you try?\n- Does the video support the “hard work” side of the debate? How could you use it as **evidence**?",
    ),
    tip("Point out: a video or study is *evidence* — the E in PEEL (next section). Ask the student to note one fact from the video for the debate."),
  ]),

  section("How a debate works", [
    table("debate-format"),
    tip("TEACHER NOTES — running the debate. ONE-TO-ONE: the student and the teacher toss a coin for sides (not their own opinion). Or the student prepares BOTH sides and gives both openings (good for practice). IN A GROUP: two teams of 2–3 (Proposition / Opposition); each student speaks at least once (opening, rebuttal or closing); the others are judges with the scoring sheet. TIMES today (short version): preparation 5 min · openings 1.5 min each · rebuttal prep 1 min · rebuttals 1 min each · questions 2 min (answers max 20 sec) · closings 1 min each · verdict 3 min. Use the lesson Timer for every stage. Rules: one speaker at a time, no new arguments in the closing, argue with the idea, not the person."),
    order(
      "Put the stages of a debate in the right order.",
      [[
        "The motion is announced and sides are chosen.",
        "Both sides prepare 2–3 main arguments.",
        "Opening speeches: Proposition, then Opposition.",
        "Short preparation for the rebuttal.",
        "Rebuttals: each side answers the other side's arguments.",
        "Questions to each other.",
        "Closing speeches — no new arguments.",
        "The judges decide, and the teacher gives feedback.",
      ].join("\n")],
      "lines",
    ),
    drag(
      "Build an argument with PEEL. Complete.",
      "[Point]: Hard work matters more than talent, because skills are [built] over time.\n[Evidence]: For [example], in Ericsson's study, the best violinists had practiced around 10,000 hours by the age of twenty.\n[Explain]: This shows that what we call talent is often thousands of hours of practice that nobody sees.\n[Link]: That's why we believe that hard work, not talent, is the key to success.",
      ["Opinion", "Example only", "born"],
    ),
    table("debate-language"),
  ]),

  section("Listening: A model debate", [
    tip("A long listening — about 3 minutes 30 seconds. A short debate at Daniyar's university debate club in Seoul. First listen: *Which side wins, and why?* Second listen: the tasks. Ask the student to note phrases for each stage."),
    ...listening(
      "Listen to a short debate at a university debate club.",
      "**Chair:** Good evening, everyone, and welcome to the debate club. Tonight's motion is: This house believes that hard work matters more than talent. Speaking for the motion is Daniyar. Speaking against it is Ji-woo. Each speaker has ninety seconds for an opening speech. Daniyar, please begin.\n\n**Daniyar:** Thank you. Tonight I'll argue that hard work matters more than talent, for two reasons. First, skills are built, not born. In a famous study of violin students in Berlin, the best players weren't simply the most gifted; they had practiced for around ten thousand hours by the age of twenty, far more than the others. What looks like talent is often years of work that nobody sees. Second, hard work is something we can control. You can't choose your genes, but you can choose to practice. When I came to Korea, my Korean was weak. I wasn't talented; I studied every day, and now I'm studying engineering in Korean. That's why I believe that effort, not talent, is the key. Thank you.\n\n**Chair:** Thank you, Daniyar. Ji-woo, your opening speech.\n\n**Ji-woo:** Thank you. My opponent has told us a lovely story, but I'd like to look at the bigger picture. My first argument is that practice doesn't explain everything. In 2014, researchers combined dozens of studies and found that practice explains only part of the differences between people — around a fifth in music, and even less in many other fields. Two people can practice the same amount and end up at completely different levels. My second argument is that talent decides how far hard work can take you. In basketball, a hard-working player who is one meter sixty will rarely beat a hard-working player who is two meters tall. Talent sets the limits; hard work only helps you reach them. For these reasons, I oppose the motion.\n\n**Chair:** Thank you. We now have one minute to prepare rebuttals. … Time's up. Daniyar, your rebuttal.\n\n**Daniyar:** My opponent claims that practice explains only a fifth of the differences in music. But a fifth is still a lot — and it's the part we can change. Also, the basketball example is about height, not talent. Height is a physical fact, not a skill. In most areas of life — languages, music, science — there's no height limit.\n\n**Chair:** Ji-woo.\n\n**Ji-woo:** Daniyar says hard work is the part we can change. I agree — but the motion isn't about what we can change; it's about what matters more. And with all due respect, my opponent's own story shows talent too. Not everyone could learn Korean so quickly. Maybe Daniyar is more talented at languages than he thinks.\n\n**Chair:** Thank you. Now, two minutes of questions. Ji-woo, you may ask first.\n\n**Ji-woo:** Daniyar, if hard work matters more, why don't all hard-working people become champions?\n\n**Daniyar:** Because the quality of practice matters, not just the quantity. Good teachers and feedback make a huge difference. My question: Ji-woo, can you name a world champion who never practiced?\n\n**Ji-woo:** Of course not — but I'm not saying practice doesn't matter. I'm saying it isn't enough.\n\n**Chair:** Closing speeches, one minute each. No new arguments, please.\n\n**Ji-woo:** To sum up, practice is important, but research shows it can't explain everything. Talent sets the limits. I urge you to oppose the motion.\n\n**Daniyar:** In conclusion, talent may give you a head start, but only hard work gets you to the finish line. And it's the only part we control. Please support the motion.\n\n**Chair:** Thank you both. The judges have voted… and by a small margin, the winner is Ji-woo, for the stronger use of evidence. But Daniyar, that was a very good rebuttal on the basketball example. Well done, both of you.",
    ),
    quiz("Listen and choose.", [
      { q: "What is the motion?", options: ["*Hard work matters more than talent.", "Talent matters more than hard work.", "Everyone can become a champion."] },
      { q: "What personal example does Daniyar use?", options: ["*learning Korean", "playing the violin", "playing basketball"] },
      { q: "What is Ji-woo's second argument?", options: ["*Talent sets the limits of what hard work can achieve.", "Practice is useless.", "Studies are often wrong."] },
      { q: "How does Daniyar answer the basketball example?", options: ["*Height is a physical fact, not a skill.", "Basketball isn't important.", "Short players can practice more."] },
      { q: "Why does Ji-woo win?", options: ["*She used evidence better.", "She spoke longer.", "Daniyar broke the rules."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Each opening speech is ninety seconds long.", true],
      ["Ji-woo says that practice doesn't matter at all.", false],
      ["Ji-woo suggests that Daniyar might be talented at languages.", true],
      ["New arguments are allowed in the closing speeches.", false],
      ["The judges praised Daniyar's rebuttal.", true],
    ]),
    gaps(
      "Complete the debate phrases from the recording.",
      "1. Tonight I'll [argue] that hard work matters more than talent.\n2. My [opponent] claims that practice explains only a fifth of the differences.\n3. With all due [respect], my opponent's own story shows talent too.\n4. To sum [up], practice is important, but it can't explain everything.\n5. I [urge] you to oppose the motion.\n6. In [conclusion], talent may give you a head start.",
    ),
  ]),

  section("Your debate", [
    text(
      "⚖️ This house believes that hard work matters more than talent",
      "**1. Sides** (1 min): toss a coin — Proposition (for) or Opposition (against).\n\n**2. Preparation** (5 min): find **2 arguments**. For each, write a short PEEL plan: Point → Evidence / Example (the reading, the video, your life) → Explain → Link. Guess one argument the other side will use.\n\n**3. Opening speeches** (1.5 min each): *Tonight I'll argue that… My first argument is… My second argument is…*\n\n**4. Rebuttal prep** (1 min) → **Rebuttals** (1 min each): *My opponent claims that…, but… That may be true, however…*\n\n**5. Questions** (2 min, answers up to 20 seconds): *If…, then why…? Can you give an example of…?*\n\n**6. Closing speeches** (1 min each, no new arguments): *To sum up… For these reasons, I urge you to support / oppose the motion.*\n\n**7. Verdict**: the judges (or the teacher) score each speaker 1–5 for: arguments · evidence · rebuttal · language · delivery.",
    ),
    tip("Use the Timer tool for each stage — strict timing is half the fun. Afterwards give feedback in this order: 1) the strongest argument, 2) one rebuttal that worked, 3) two language points (debate phrases, -ing / infinitive forms). One-to-one: the teacher plays the other side but keeps the level reasonable — the aim is for the student to practice, not to lose badly!"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "In a closing speech you should…", options: ["*sum up, without new arguments", "add your best new argument", "ask questions"] },
      { q: "The E in PEEL stands for…", options: ["*evidence / example", "emotion", "ending"] },
      { q: "“My opponent ___ that practice is enough, but…”", options: ["*claims", "agrees", "proves"] },
      { q: "A very young person with extraordinary talent is a child ___.", options: ["*prodigy", "genius-maker", "bloomer"] },
    ]),
    box(
      "Phrase of the day: practice makes perfect",
      "🎯 If you practice a lot, you'll become very good. Many coaches prefer: *perfect practice makes perfect* — the quality of practice matters!\n\n*Which version do you agree with?*",
    ),
  ]),

  homework(
    [
      gaps(
        "Complete with one word.",
        "1. She's a gifted pianist — a real child [prodigy].\n2. To get better, you have to put in the [hours].\n3. With hard work, anyone can reach their [potential].\n4. My opponent [claims] that talent is everything.\n5. To sum [up], both sides made good points.\n6. For these reasons, I [urge] you to support the motion.",
      ),
      match("Match the debate stages and the phrases.", [
        ["opening", "Tonight I'll argue that…"],
        ["giving evidence", "For example, a study in 2014 showed…"],
        ["rebuttal", "My opponent claims that…, but…"],
        ["polite disagreement", "With all due respect, …"],
        ["question", "If that's true, then why…?"],
        ["closing", "To sum up, … I urge you to support the motion."],
      ]),
    ],
    "Homework: Vocabulary and debate language",
  ),
  homework(
    [
      write("Write an essay (140–190 words): “Hard work matters more than talent.” Do you agree? Give two arguments with evidence and answer one argument from the other side.", 140, {
        read: "*Plan:* 1) introduction — the question and your opinion · 2) argument 1 (PEEL) · 3) argument 2 (PEEL) · 4) the other side's argument and your answer · 5) conclusion.",
      }),
      record("Record your opening speech for the debate (about 1.5 minutes), using PEEL. ⚖️🎤", 120),
      record("Record a 1-minute answer: “What's a skill you'd like to put 1,000 hours into? Why?” 🎙️", 75),
    ],
    "Homework: Writing and speaking",
  ),
]);
