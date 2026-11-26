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

// 9.4 Practical: A formal debate — the FULL debate of the course (programme, «Дебаты»): preparation 5–7 min, openings 2 min, rebuttal prep 1 min, rebuttals 1.5 min, cross-examination 2–3 min (answers up to 20 sec), closings 1 min, verdict and feedback 3–5 min; judging with a scoring sheet. Functional language of argument: introducing an argument, giving evidence, rebutting, conceding a point, cross-examining, summing up; spotting weak arguments (fallacies). Link to B2 First Speaking Parts 3–4. Main format: "spot the weak argument" match + a medium-long reading (how to win a debate without shouting — ethos, pathos, logos, steelmanning, ~420 words) + a long listening (a full model debate at Daniyar's club in Seoul: prisons — rehabilitation or punishment?, ~3:30) + the student's formal debate. Video at home (BBC Learning English, how to disagree).
// Facts checked: Aristotle's "Rhetoric" (4th century BC) describes three ways to persuade: ethos (the speaker's credibility), pathos (emotion) and logos (logic and evidence); "steelmanning" — presenting the strongest version of the other side's argument (the opposite of a "straw man"); common fallacies: ad hominem, straw man, slippery slope, bandwagon, false choice, appeal to emotion. In the model debate the speakers use careful, general claims (e.g. Norway is known for prisons focused on rehabilitation and has one of the lowest reoffending rates in Europe). Characters: Daniyar, Lucas (his friend from Brazil, 7.1), Chair (the club's chair, as in 3.3).
export default lesson("b2-9.4", "Practical: A formal debate", () => [
  section("Warm-up: Spot the weak argument", [
    box(
      "Today you will…",
      "- learn to spot weak arguments (and avoid them!) 🚩\n- master the language of a formal debate 🎤\n- hold a full debate with judges and a scoring sheet ⚖️",
    ),
    match("These arguments are weak. Match each one with the trick it uses. 🚩", [
      ["“Don't listen to her plan — she can't even park her car.”", "attacking the person, not the idea"],
      ["“Everyone believes it, so it must be true.”", "following the crowd"],
      ["“If we allow phones at lunch, soon students will use them in every exam!”", "a slippery slope"],
      ["“Either we ban all cars, or the planet dies.”", "a false choice"],
      ["“So you're saying criminals should never be punished?” (Nobody said that.)", "a straw man — changing the other side's argument"],
      ["“Think of the poor children!” (with no evidence)", "an appeal to emotion only"],
    ]),
    text(
      "Talk to your teacher.",
      "- Have you heard arguments like these on TV, online or at home? 😄\n- Which trick is the most common in advertising? In politics?\n- What makes an argument really strong?",
    ),
    tip("These are classic fallacies. Teach the student to name them in the debate politely: *With respect, that's not what we said.* / *That's a false choice — there are other options.*"),
  ]),

  section("Vocabulary: The language of debate", [
    words("The language of debate", [
      ["a motion", "📜 the statement that is debated (This house believes that…)"],
      ["the proposition — the opposition", "👍 the side for the motion — 👎 the side against"],
      ["a rebuttal", "🛡️ a reply that shows the other side's argument is wrong"],
      ["cross-examination", "❓ asking the other side short, direct questions"],
      ["concede a point", "🤝 admit that the other side is right about something"],
      ["a counter-argument", "↩️ an argument against another argument"],
      ["back up (an argument)", "📊 support it with evidence"],
      ["persuasive", "🎯 able to make people agree"],
      ["a fallacy", "🚩 a mistake in reasoning"],
      ["the burden of proof", "⚖️ the duty to prove a claim"],
    ]),
    match("Match.", [
      ["Tonight's motion is:", "This house would ban homework."],
      ["The opposition's rebuttal", "was very strong."],
      ["I'm happy to concede", "that point, but…"],
      ["Can you back up", "that claim with evidence?"],
      ["Her speech was calm and", "very persuasive."],
      ["The burden of proof", "is on the proposition."],
    ]),
    gaps(
      "Complete with a word from the list.",
      "1. Each side has two minutes for [cross-examination].\n2. Every strong argument needs a [counter-argument] — be ready for it.\n3. Saying “everyone thinks so” is a [fallacy], not evidence.\n4. The [proposition] speaks first and supports the motion.\n5. In the [rebuttal], you answer what the other side said.\n6. A good debater can [concede] a small point and still win.",
    ),
  ]),

  section("Reading: How to win a debate without shouting", [
    tip("A medium-long text (~420 words). First reading — 4 minutes: *What are ethos, pathos and logos?* Then the tasks. These tips are the checklist for today's debate."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Aristotle described three ways to persuade people.", true],
        ["According to the writer, emotion should never be used in a debate.", false],
        ["Steelmanning means making the other side's argument look weak.", false],
        ["Signposting helps the judges follow your speech.", true],
        ["Conceding a small point can make you more persuasive.", true],
        ["In cross-examination, you should ask long, complicated questions.", false],
      ],
      {
        read: [
          "## 🎤 How to win a debate without shouting",
          "Watch a debate on television and you might think that the winner is the person who talks loudest and interrupts most. In a formal debate, the opposite is usually true. Judges reward clear thinking, good evidence and respect for the other side. Here's how the best debaters do it.",
          "**Use all three tools.** More than two thousand years ago, the Greek philosopher Aristotle described three ways to persuade an audience. Ethos is your credibility: do people trust you? Speak calmly, admit what you don't know, and use reliable sources. Pathos is emotion: a short, real example — one person's story — can make an abstract argument come alive. Logos is logic and evidence: facts, numbers, studies, clear reasons. Weak debaters use only one tool. Strong debaters use all three, with logos at the center.",
          "**Signpost your speech.** Judges are listening carefully, but they can't read your notes. Tell them where you're going: \"I have two arguments. First… Second… Now let me turn to my opponent's case.\" This simple habit makes you sound organized and confident.",
          "**Steelman, don't straw-man.** A straw man is a weak, twisted version of the other side's argument, which is easy to knock down. Judges notice it immediately. Instead, try steelmanning: describe the other side's argument in its strongest form, and then explain why you still disagree. \"My opponent makes a fair point: prison does protect society from dangerous people. But…\" It shows that you've really listened — and it makes your rebuttal much more powerful.",
          "**Concede the small, win the big.** You don't have to win every point. If the other side is right about something minor, say so: \"I'm happy to concede that point.\" Then move on to the issue that really matters. Paradoxically, admitting a small weakness makes you more believable.",
          "**Ask short questions.** In cross-examination, the best questions are short and specific: \"How many people does that affect?\" \"Can you give one example?\" Long, complicated questions give the other side time to escape. And when you answer, answer directly. A clear \"Yes, but…\" is better than a long speech that avoids the question.",
          "**Finish strong.** In the closing speech, don't add new arguments. Remind the judges of the main clash — the one question the debate came down to — and explain why your side won it. End with one memorable sentence.",
          "And finally: argue with the idea, never the person. You can disagree completely and still shake hands at the end. That isn't just good manners. It's what makes a debate worth having. 🤝",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What is ethos?", options: ["*the speaker's credibility", "emotion", "numbers and facts"] },
      { q: "Why is steelmanning powerful?", options: ["*It shows you've listened and makes your rebuttal stronger.", "It's faster.", "It confuses the judges."] },
      { q: "What should you do in the closing speech?", options: ["*Remind judges of the main clash and why you won it.", "Add your best new argument.", "Ask questions."] },
      { q: "What makes a good cross-examination question?", options: ["*It's short and specific.", "It's long and detailed.", "It's funny."] },
    ]),
    order(
      "Put the parts of a good opening speech in order.",
      [[
        "Greet the judges and state the motion.",
        "Say which side you're on and how many arguments you have.",
        "Present your first argument with evidence (PEEL).",
        "Present your second argument with evidence (PEEL).",
        "Briefly answer one argument you expect from the other side.",
        "Sum up in one memorable sentence.",
      ].join("\n")],
      "lines",
    ),
  ]),

  section("How a formal debate works", [
    table("debate-full"),
    table("argument-language"),
    tip("TEACHER NOTES — the FULL format of the course. ONE-TO-ONE: toss a coin for sides; the student can also give BOTH openings (one for each side) as preparation. IN A GROUP: two teams of 2–3; speakers: first speaker — opening, second — rebuttal, third (or first again) — closing; everyone asks at least one cross-examination question. JUDGES (the other students or the teacher) use the scoring sheet: arguments, evidence, rebuttal, cross-examination, language, delivery — 1–5 each, total /30. Use the Timer tool for every stage and be strict: half a minute over = −1 point. Feedback (3–5 min): 1) the main clash, 2) the strongest argument on each side, 3) the best rebuttal or question, 4) two language points, 5) one thing to try next time. Remind everyone: argue with the idea, not the person."),
    choose(
      "Choose the best phrase for each stage.",
      "1. (Opening) [*Tonight I'll argue that/Listen to me, because] prisons should focus on rehabilitation.\n2. (Evidence) [*Research suggests that/Everyone knows that] education reduces reoffending.\n3. (Rebuttal) [*My opponent claims that…, but/My opponent is stupid because] the numbers show the opposite.\n4. (Conceding) [*I'm happy to concede that point, but/You're completely wrong, and] it doesn't change our case.\n5. (Cross-examination) [*Can you give one example?/Why don't you just admit you've lost?]\n6. (Closing) [*To sum up, the main clash was/And another new argument is]…",
    ),
    drag(
      "Complete the rebuttal.",
      "Thank you, Chair. My [opponent] claims that prison stops crime by frightening people. I'm happy to [concede] that some people are deterred. However, the [evidence] suggests that most crimes are not planned, so people don't think about prison first. Furthermore, my opponent didn't [back] up the claim with any numbers. [To] sum up, fear alone does not keep our streets safe. I [urge] you to support the motion.",
      ["enemy", "admit to", "proof of"],
    ),
  ]),

  section("Listening: A full debate", [
    tip("A long listening — about 3 minutes 30 seconds. A full debate at Daniyar's university debate club in Seoul (shortened for the recording). Motion: This house believes that prisons should focus on rehabilitation rather than punishment. Daniyar speaks for the motion, Lucas against. First listen: *What is the main clash?* Second listen: the tasks and the phrases."),
    ...listening(
      "Listen to a formal debate about prisons.",
      "**Chair:** Good evening, and welcome. Tonight's motion is: This house believes that prisons should focus on rehabilitation rather than punishment. For the motion, Daniyar. Against, Lucas. Daniyar, your opening speech. Two minutes.\n\n**Daniyar:** Thank you, Chair. Tonight I'll argue that prisons should focus on helping people change, for two reasons. First, it works better. Most prisoners will be released one day. If they leave prison with no education, no job and no hope, many will return to crime. Countries that focus on education and training, like Norway, are known for some of the lowest reoffending rates in Europe. Second, rehabilitation protects future victims. Every person who doesn't reoffend means fewer crimes and fewer victims. So this isn't about being kind to criminals. It's about being smart for society. Thank you.\n\n**Chair:** Thank you. Lucas, your opening speech.\n\n**Lucas:** Thank you, Chair. My opponent makes a fair point: we all want fewer crimes. But I'll argue that punishment must come first, for two reasons. First, justice for victims. If someone has destroyed a family, that family needs to see that the crime has consequences. A prison that feels like a college sends the wrong message. Second, deterrence. Many people obey the law partly because they don't want to go to prison. If prison stops being a punishment, we remove that reason. Thank you.\n\n**Chair:** One minute to prepare rebuttals… Daniyar, your rebuttal.\n\n**Daniyar:** My opponent claims that prison must feel like a punishment. But losing your freedom already is a punishment — the most serious one we have. Nobody chooses prison because the classes are good. As for deterrence, most crimes are committed by people who are angry, desperate or not thinking clearly, so the type of prison isn't really in their minds.\n\n**Chair:** Lucas.\n\n**Lucas:** I'm happy to concede that education in prison is useful. But my opponent talks about Norway as if every country could copy it. Norway is a small, rich country. In many countries, prisons are overcrowded and underfunded. Should the money go to prisoners before schools and hospitals?\n\n**Chair:** Cross-examination. Lucas first.\n\n**Lucas:** Daniyar, would you say the same to a victim's family?\n\n**Daniyar:** Yes. I'd say: I want to make sure this never happens to another family.\n\n**Daniyar:** Lucas, can you name one study showing that harsher prisons reduce crime?\n\n**Lucas:** Not tonight, no. But common sense says that consequences matter.\n\n**Chair:** Closing speeches. No new arguments. Lucas.\n\n**Lucas:** To sum up, the main clash tonight is about justice. Rehabilitation has a place, but victims deserve to see that crimes are punished. I urge you to oppose the motion.\n\n**Chair:** Daniyar.\n\n**Daniyar:** In conclusion, both sides want fewer victims. The question is how. We've shown that rehabilitation reduces reoffending, while our opponent admitted he has no evidence for harsher prisons. Punish by taking freedom. Rehabilitate to protect the future. Please support the motion.\n\n**Chair:** Thank you both. The judges' scores… Daniyar, twenty-four out of thirty; Lucas, twenty-two. The motion is carried. Lucas, excellent opening and a very fair concession. Daniyar, that cross-examination question was decisive. Well done, both.",
    ),
    quiz("Listen and choose.", [
      { q: "What are Daniyar's two arguments?", options: ["*It works better, and it protects future victims.", "It's cheaper, and prisoners are nice people.", "Norway is rich, and prisons are old."] },
      { q: "What are Lucas's two arguments?", options: ["*justice for victims and deterrence", "cost and overcrowding", "education and training"] },
      { q: "What does Lucas concede?", options: ["*Education in prison is useful.", "Norway's system is perfect.", "Deterrence doesn't work."] },
      { q: "Which question was decisive, according to the Chair?", options: ["*Daniyar asking for a study showing harsher prisons reduce crime", "Lucas asking about victims' families", "the Chair's question about money"] },
      { q: "What was the result?", options: ["*The motion was carried — Daniyar won by two points.", "Lucas won.", "It was a draw."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Daniyar says rehabilitation is about being kind to criminals.", false],
      ["Lucas steelmans Daniyar's point at the start of his opening.", true],
      ["Daniyar says losing freedom is already a punishment.", true],
      ["Lucas gives a study to support deterrence.", false],
      ["New arguments were allowed in the closing speeches.", false],
      ["Each speaker was scored out of thirty.", true],
    ]),
    gaps(
      "Complete the debate phrases from the recording.",
      "1. My opponent makes a fair [point]: we all want fewer crimes.\n2. My opponent [claims] that prison must feel like a punishment.\n3. I'm happy to [concede] that education in prison is useful.\n4. To sum up, the main [clash] tonight is about justice.\n5. I [urge] you to oppose the motion.\n6. The motion is [carried].",
    ),
  ]),

  section("Your formal debate", [
    text(
      "⚖️ The full debate",
      "**Choose a motion** (or your teacher chooses):\n\n- *This house believes that prisons should focus on rehabilitation rather than punishment.*\n- *This house would lower the voting age to 16.*\n- *This house believes that social media does more harm than good.*\n\n**1. Sides** (1 min) — coin toss.\n**2. Preparation** (5–7 min) — 2–3 arguments with PEEL; steelman the other side; plan 2 questions.\n**3. Opening speeches** (2 min each).\n**4. Rebuttal prep** (1 min) → **Rebuttals** (1.5 min each).\n**5. Cross-examination** (2–3 min; answers up to 20 seconds).\n**6. Closing speeches** (1 min each) — the main clash, no new arguments.\n**7. Verdict and feedback** (3–5 min) — scoring sheet: arguments · evidence · rebuttal · cross-examination · language · delivery (1–5 each, /30).",
    ),
    tip("Before starting, agree on the scoring sheet together so the student knows how they'll be judged. Record the debate (with permission) if you can — listening back is a powerful way to improve. Compare with 3.3, 5.3 and 8.3: what has improved most?"),
  ]),

  section("Debating and the B2 First exam", [
    text(
      "🎓 From debate to exam",
      "Debate skills help a lot in **B2 First Speaking Parts 3 and 4**:\n\n- **Part 3** (discussion with a partner): give a reason and an example, react to your partner (*That's a good point, but…*), and reach a decision together.\n- **Part 4** (opinion questions): give an opinion, back it up, consider the other side (*Some people would say…, however…*).\n\n**Practice:** your teacher asks two Part 4 questions:\n1. *Do you think prison is the best way to deal with young people who commit crimes?*\n2. *Should schools teach students how to debate?*\n\nAnswer each in about 45 seconds — with an opinion, a reason, an example and the other side.",
    ),
    sort("Is it good for the exam or not? Sort. 🧩", {
      "✅ good in Parts 3–4": [
        "giving a reason and an example",
        "reacting to what your partner said",
        "considering the other side",
        "inviting your partner to speak",
      ],
      "❌ not good": [
        "giving one-word answers",
        "interrupting your partner all the time",
        "repeating the same idea",
        "speaking only to the examiner and ignoring your partner",
      ],
    }),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "The statement that is debated is the ___.", options: ["*motion", "rebuttal", "verdict"] },
      { q: "“I'm happy to ___ that point, but…”", options: ["*concede", "conceive", "confess"] },
      { q: "Attacking the person instead of the idea is a ___.", options: ["*fallacy", "fact", "motion"] },
      { q: "Short, direct questions to the other side are called cross-___.", options: ["*examination", "questioning", "rebuttal"] },
    ]),
    box(
      "Phrase of the day: agree to disagree",
      "🤝 To accept that two people have different opinions and stop arguing — politely. Not every debate ends with everyone agreeing, and that's fine.\n\n*Is there a topic where you and a friend have agreed to disagree?*",
    ),
  ]),

  homework(
    [
      video("Watch: BBC Learning English — How to… disagree.", "40LgX2hk3vo"),
      gaps(
        "Complete with one word.",
        "1. Tonight's [motion] is: This house would ban zoos.\n2. The [opposition] speaks against the motion.\n3. Can you back [up] that claim with evidence?\n4. Her rebuttal was calm and very [persuasive].\n5. I'm happy to [concede] that point, but it doesn't change our case.\n6. “Everyone says so” is a [fallacy], not evidence.",
      ),
      match("Match the debate stages and the phrases.", [
        ["opening", "Tonight I'll argue that…, for two reasons."],
        ["steelmanning", "My opponent makes a fair point: …"],
        ["rebuttal", "My opponent claims that…, but…"],
        ["conceding", "I'm happy to concede that…"],
        ["cross-examination", "Can you give one example?"],
        ["closing", "To sum up, the main clash tonight was…"],
      ]),
    ],
    "Homework: Debate language",
  ),
  homework(
    [
      write("Write an essay (140–190 words) on the motion you debated in class. Present your side's two best arguments with evidence, steelman the other side, and explain why you still disagree.", 140, {
        read: "Plan: 1) introduction — the motion and your opinion · 2) argument 1 (PEEL) · 3) argument 2 (PEEL) · 4) the strongest counter-argument and your answer · 5) conclusion with one memorable sentence.",
      }),
      record("Record your opening speech for the debate (2 minutes). Signpost clearly: “I have two arguments. First… Second…” ⚖️🎤", 150),
    ],
    "Homework: Writing and speaking",
  ),
]);
