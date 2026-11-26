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
  table,
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 8.3 The placebo effect — skills lesson and a DEBATE (standard format from the programme): "This house believes that alternative medicine does more harm than good". No new grammar; review of mixed conditionals, wishes and alternatives to if. V: medicine and evidence (a placebo, the nocebo effect, conventional / alternative medicine, a remedy, herbal, a double-blind trial, evidence-based, skeptical, a sugar pill, wishful thinking). Main format: a placebo quiz + a long reading (the strange power of fake medicine, ~570 words) + TED-Ed video (the power of the placebo effect) + a long listening (a radio discussion: a doctor and Saule, who uses herbal remedies, ~3:15) + the student's debate.
// Facts checked: Henry Beecher, "The Powerful Placebo" (1955), estimated that about a third of patients responded to placebos (later criticized as too high); Beecher said that in the Second World War, when morphine ran short, a nurse injected salt water into a wounded soldier and his pain eased; in a double-blind trial neither patients nor doctors know who gets the real treatment; four placebo pills a day worked better than two in a 1999 analysis of ulcer studies (de Craen et al.); Waber, Shiv, Carmon and Ariely (JAMA, 2008): a "pill" described as costing $2.50 reduced pain more than the same pill described as costing $0.10; J. Bruce Moseley and colleagues (New England Journal of Medicine, 2002): patients who had fake knee surgery improved as much as those who had real arthroscopic surgery; Ted Kaptchuk and colleagues (2010): patients with irritable bowel syndrome improved even when they were told openly that their pills were placebos; the nocebo effect: negative expectations can cause real unpleasant symptoms; placebos mainly affect symptoms such as pain and nausea — they don't cure infections or shrink tumors; Australia's National Health and Medical Research Council (2015) found no reliable evidence that homeopathy is effective for any health condition; Johnson and colleagues (Journal of the National Cancer Institute, 2018): patients with curable cancers who chose only alternative medicine had about 2.5 times the risk of death of patients who had conventional treatment. Characters: Saule (71, swims every morning — 8.1).
export default lesson("b2-8.3", "The placebo effect", () => [
  section("Warm-up: Fake pills, real effects?", [
    box(
      "Today you will…",
      "- discover how fake medicine can make people feel better 💊🧠\n- weigh the evidence for and against alternative medicine 🔬\n- hold a debate: does alternative medicine do more harm than good? ⚖️",
    ),
    quiz("The placebo quiz! Guess. 💊", [
      { q: "Which works better: two sugar pills a day or four?", options: ["*four", "two", "There's no difference."] },
      { q: "Which fake painkiller reduced pain more in a 2008 study?", options: ["*the one described as expensive", "the one described as cheap", "Neither had any effect."] },
      { q: "Can a placebo work if you KNOW it's a placebo?", options: ["*Sometimes, yes.", "Never.", "Only for children."] },
      { q: "What is the “nocebo effect”?", options: ["*feeling bad side effects because you expect them", "a medicine that doesn't work", "a fake doctor"] },
    ]),
    text(
      "Talk to your teacher.",
      "- Have you ever felt better after taking a medicine — and then found out it couldn't have worked? 🤔\n- What remedies does your family use for a cold? Do they work?\n- Do you trust traditional or herbal remedies? Why (not)?",
    ),
    tip("Don't explain the answers yet — the reading does. Collect the student's family remedies (honey, hot tea, mustard plasters…) — useful for the debate."),
  ]),

  section("Vocabulary: Medicine and evidence", [
    words("Medicine and evidence", [
      ["a placebo", "💊 a fake treatment with no active ingredient"],
      ["the nocebo effect", "😣 feeling worse because you expect to"],
      ["conventional — alternative medicine", "🏥 normal scientific medicine — 🌿 treatments outside it (homeopathy, etc.)"],
      ["a (herbal) remedy", "🌿 something that treats an illness (made from plants)"],
      ["a double-blind trial", "🙈🙈 neither patients nor doctors know who gets the real medicine"],
      ["evidence-based", "📊 based on scientific proof"],
      ["skeptical", "🤨 not easily convinced"],
      ["a sugar pill", "🍬 a pill with no medicine in it"],
      ["wishful thinking", "🌈 believing something because you want it to be true"],
      ["an active ingredient", "🧪 the part of a medicine that does the work"],
    ]),
    match("Match.", [
      ["In a double-blind trial,", "even the doctors don't know who gets the placebo."],
      ["Half the patients received", "a sugar pill."],
      ["She's skeptical about", "homeopathy."],
      ["My grandmother swears by", "herbal remedies."],
      ["Good doctors practice", "evidence-based medicine."],
      ["I'd love to believe it, but it's", "wishful thinking."],
    ]),
    gaps(
      "Complete with a word from the list.",
      "1. The pills had no active [ingredient] — they were just sugar.\n2. Some patients feel side effects because of the [nocebo] effect.\n3. Is acupuncture conventional or [alternative] medicine?\n4. I'm [skeptical] — show me the evidence!\n5. Honey and lemon is my favorite [remedy] for a sore throat. 🍯\n6. Scientists compared the new drug with a [placebo].",
    ),
    quiz("Choose the right word.", [
      { q: "Neither the doctors nor the patients knew — it was a ___ trial.", options: ["*double-blind", "half-blind", "blind-folded"] },
      { q: "Homeopathy is a kind of ___ medicine.", options: ["*alternative", "conventional", "evidence-based"] },
      { q: "She expected headaches from the pills — and got them. Classic ___ effect!", options: ["*nocebo", "placebo", "side"] },
      { q: "“This tea will cure everything!” — sorry, that's just ___ thinking.", options: ["*wishful", "skeptical", "positive"] },
    ]),
  ]),

  section("Reading: The strange power of fake medicine", [
    tip("A long text (~570 words). First reading — 5 minutes: *What can placebos do — and what can't they do?* Then check the warm-up quiz. Ask the student to note evidence for both sides of the debate."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Beecher's story is about soldiers in the Second World War.", true],
        ["In a double-blind trial, the patients know whether they're getting a placebo.", false],
        ["Patients who had fake knee surgery improved as much as those who had the real operation.", true],
        ["In Kaptchuk's study, patients were tricked into taking placebos.", false],
        ["Placebos can cure infections.", false],
        ["Patients who used only alternative medicine for curable cancers had a higher risk of death.", true],
      ],
      {
        read: [
          "## 💊 The strange power of fake medicine",
          "During the Second World War, according to a story told by the American doctor Henry Beecher, a field hospital ran out of morphine. A badly wounded soldier needed it urgently. Desperate, a nurse injected him with salt water, telling him it was a powerful painkiller. To everyone's surprise, the soldier calmed down, and his pain seemed to ease. After the war, Beecher began to study this strange phenomenon. In 1955, he published a famous paper called \"The Powerful Placebo\".",
          "A placebo is a fake treatment — a sugar pill, an injection of salt water — with no active ingredient. Yet people who receive one often feel better. That's why new medicines are tested in double-blind trials: one group gets the real medicine, another gets a placebo, and neither the patients nor the doctors know who gets which. A medicine is only useful if it works better than the placebo.",
          "Over the years, researchers have discovered just how strange the placebo effect can be. Four sugar pills a day work better than two. Injections work better than pills. In one study, volunteers were given a fake painkiller; those told it cost $2.50 a pill felt less pain than those told it had been discounted to ten cents. Even surgery can be a placebo: in 2002, patients with knee pain who had a fake operation — the surgeon made small cuts in the skin but did nothing inside — improved as much as patients who had the real operation.",
          "Most surprising of all, placebos can work even when people know they're taking them. In 2010, a team led by Ted Kaptchuk at Harvard gave patients with a painful stomach condition a bottle of pills clearly labeled \"placebo\". The researchers explained honestly that the pills contained no medicine. Even so, many of the patients reported feeling significantly better.",
          "How is this possible? The brain plays a big part in how we experience symptoms such as pain, nausea and tiredness. When we expect to feel better — because of the pill, the doctor's white coat or the ritual of treatment — the brain can actually reduce these feelings. The opposite is also true: if people expect side effects, they often get them. This is called the nocebo effect.",
          "But placebos have clear limits. They can change how we feel, but they don't kill bacteria, heal broken bones or shrink tumors. And this is where the debate about alternative medicine begins. Many alternative treatments, such as homeopathy, have been tested carefully and found to work no better than placebos. In 2015, a major Australian review found no reliable evidence that homeopathy is effective for any health condition.",
          "Supporters argue that if a remedy makes people feel better, it doesn't matter why. Patients often spend more time with alternative practitioners, who listen to them, and that alone can help. Critics reply that the danger is not the sugar pill itself, but what happens when people use it instead of real treatment. A 2018 study found that patients with curable cancers who chose only alternative medicine were about two and a half times more likely to die than those who had conventional treatment.",
          "The placebo effect shows how powerful the mind can be. The question is how to use that power honestly — and how to make sure that hope never replaces medicine that works. 🧠",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Why are double-blind trials important?", options: ["*They show whether a medicine works better than a placebo.", "They're cheaper.", "They're faster."] },
      { q: "Which is true about placebos?", options: ["*Expensive fake pills can work better than cheap ones.", "Pills always work better than injections.", "Two pills work better than four."] },
      { q: "What did Kaptchuk's patients know?", options: ["*that their pills contained no medicine", "nothing about the pills", "that the pills were very expensive"] },
      { q: "What can placebos NOT do?", options: ["*kill bacteria or shrink tumors", "reduce pain", "reduce nausea"] },
      { q: "What do critics say is the real danger of alternative medicine?", options: ["*people using it instead of effective treatment", "the sugar pills themselves", "its high price"] },
    ]),
    gaps(
      "Find words in the article.",
      "1. very worried and ready to try anything: [desperate]\n2. become less strong (pain): [ease]\n3. the feeling that you might be sick: [nausea]\n4. a set of actions always done in the same way: a [ritual]\n5. people who practice a type of medicine: [practitioners]\n6. can be cured: [curable]",
    ),
  ]),

  section("Video: The power of the placebo effect", [
    video("Watch: TED-Ed — The power of the placebo effect (Emma Bryce).", "z03FQGlGgo0"),
    text(
      "After the video: talk about it.",
      "- What new information did the video add to the reading?\n- If placebos can help, should doctors ever give them to patients? Is it honest? 🤔\n- Which side of the debate does the video help more?",
    ),
    tip("Ask the student to note one fact from the video as evidence for the debate. Practice the review grammar: *If doctors were allowed to give placebos, … / Unless patients know, …*"),
  ]),

  section("Listening: Grandma's remedies", [
    tip("A long listening — about 3 minutes 15 seconds. A radio discussion: Dr. Omarov, a family doctor, and Saule, who has used herbal remedies all her life. First listen: *Where do they agree and where do they disagree?* Second listen: the tasks."),
    ...listening(
      "Listen to a radio discussion about alternative medicine.",
      "**Host:** Good morning. Today's question: does alternative medicine help, or harm? My guests are Dr. Omarov, a family doctor, and Saule, who has used herbal remedies all her life. Saule, let's start with you.\n\n**Saule:** Thank you. My grandmother was the village healer, so I grew up with herbs. When my children had a cold, I gave them honey, ginger and a hot drink, not tablets. And when my knee started hurting a few years ago, I tried acupuncture. Honestly, it helped.\n\n**Host:** Dr. Omarov, does it bother you when patients use remedies like these?\n\n**Dr. Omarov:** Not at all, in most cases. Honey and lemon for a sore throat? Perfect. Hot tea, rest and a lot of love are excellent treatment for a cold. Many herbal teas are harmless and pleasant. If something makes a patient feel better and does no harm, I'm happy.\n\n**Host:** But?\n\n**Dr. Omarov:** But there are two problems. The first is that \"natural\" doesn't always mean \"safe\". Some herbs interact with real medicines. One of my patients was taking a herbal supplement that stopped her heart medicine from working properly. If she hadn't mentioned it, I wouldn't have known. So my rule is: tell your doctor everything you're taking.\n\n**Saule:** That's fair. I always tell my doctor about my teas. Although she sometimes rolls her eyes.\n\n**Dr. Omarov:** The second problem is much more serious. Some people use alternative treatments instead of conventional medicine for serious illnesses. I once had a patient who refused treatment for a serious infection because a website told him that garlic would cure it. By the time he came back, he was in hospital. If he'd come to us a week earlier, he wouldn't have needed an operation.\n\n**Saule:** Well, I would never do that. If I had something serious, I'd go straight to the doctor. Herbs are for small things. Supposing I broke my leg — I wouldn't put chamomile on it!\n\n**Host:** Saule, why do you think so many people are attracted to alternative medicine?\n\n**Saule:** Partly because of time. When I go to the clinic, the doctor has ten minutes and looks at the computer. When I went to the acupuncturist, she spent an hour with me. She asked about my sleep, my family, my swimming. I felt listened to.\n\n**Dr. Omarov:** She's absolutely right, and that's something we doctors need to learn. Feeling listened to is part of healing. Studies on the placebo effect show that a warm, attentive doctor can actually reduce symptoms. I wish I had more time with each patient.\n\n**Host:** So, Dr. Omarov, does alternative medicine do more harm than good?\n\n**Dr. Omarov:** It depends how it's used. Alongside real medicine, for small problems, it's mostly harmless and sometimes comforting. Instead of real medicine, for serious illnesses, it can be dangerous.\n\n**Saule:** I agree, as long as people keep their common sense. My grandmother used to say, \"Herbs for the small things, doctors for the big things, and your own head for everything.\"\n\n**Host:** Your grandmother sounds very wise. Thank you both.",
    ),
    quiz("Listen and choose.", [
      { q: "Why did Saule grow up with herbal remedies?", options: ["*Her grandmother was the village healer.", "She studied medicine.", "There were no doctors in her village."] },
      { q: "What is the doctor's first problem with herbal remedies?", options: ["*Some herbs interact with real medicines.", "They're too expensive.", "They taste bad."] },
      { q: "What happened to the patient who trusted a website?", options: ["*He ended up in hospital.", "He was cured by garlic.", "He changed doctors."] },
      { q: "Why, according to Saule, are people attracted to alternative medicine?", options: ["*Practitioners spend more time listening to them.", "It's always cheaper.", "It works better."] },
      { q: "What do Saule and the doctor agree on in the end?", options: ["*Remedies for small things, doctors for serious illnesses.", "Alternative medicine should be banned.", "Herbs can cure everything."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Saule tried acupuncture for her knee.", true],
      ["The doctor thinks honey and lemon are dangerous.", false],
      ["Saule tells her doctor about her herbal teas.", true],
      ["The doctor wishes he had more time with each patient.", true],
      ["Saule would treat a broken leg with chamomile.", false],
    ]),
    choose(
      "Review: module 8 grammar. Choose.",
      "1. If she [*hadn't mentioned/didn't mention] it, I wouldn't have known.\n2. If he'd come a week earlier, he [*wouldn't have needed/wouldn't need] an operation.\n3. I wish I [*had/would have] more time with each patient.\n4. It's mostly harmless, [*as long as/unless] people keep their common sense.\n5. [*Supposing/Unless] I broke my leg — I wouldn't put chamomile on it!\n6. Tell your doctor everything, [*otherwise/in case] the medicines may not work properly.",
    ),
  ]),

  section("Debate: getting ready", [
    tip("TEACHER NOTES — the third debate of the course, STANDARD format (as in 5.3). Times: motion and sides 1 min · preparation 5–7 min · openings 2 min each · rebuttal prep 1 min · rebuttals 1.5 min each · questions 2–3 min (answers up to 20 sec) · closings 1 min each · verdict 3 min. ONE-TO-ONE: toss a coin for sides; play the other side at a level that challenges the student. IN A GROUP: two teams of 2–3, everyone speaks at least once, the others judge (arguments · evidence · rebuttal · language · delivery, 1–5 each). Important: the topic touches people's families and beliefs — keep it respectful; argue with the evidence, not with anyone's grandmother. 😊"),
    table("debate-language"),
    sort("Which side does each argument support? Sort. 🧩", {
      "👍 for the motion (more harm than good)": [
        "Many alternative treatments work no better than placebos.",
        "Some herbs interact dangerously with real medicines.",
        "People may delay effective treatment for serious illnesses.",
        "Patients who used only alternative medicine for curable cancers had a higher risk of death.",
      ],
      "👎 against the motion": [
        "If a remedy makes people feel better, that has real value.",
        "Many herbal remedies are harmless and comforting.",
        "Alternative practitioners often spend more time listening to patients.",
        "Most people use it alongside conventional medicine, not instead of it.",
      ],
    }),
    drag(
      "Build an argument with PEEL. Complete.",
      "[Point]: Alternative medicine does more harm than good, because people may use it [instead] of effective treatment.\n[Evidence]: A 2018 [study] found that patients with curable cancers who chose only alternative medicine were about 2.5 times more likely to die.\n[Explain]: This shows that the real [danger] isn't the remedy itself, but the treatment people miss.\n[Link]: That's why we [believe] that alternative medicine does more harm than good.",
      ["opinion", "together", "rumor"],
    ),
  ]),

  section("Your debate", [
    text(
      "⚖️ This house believes that alternative medicine does more harm than good",
      "**1. Motion and sides** (1 min): toss a coin — Proposition (for) or Opposition (against).\n\n**2. Preparation** (5–7 min): find **2–3 arguments** with PEEL. Use evidence from the reading, the video and the radio discussion. Think: what will the other side say?\n\n**3. Opening speeches** (2 min each).\n\n**4. Rebuttal prep** (1 min) → **Rebuttals** (1.5 min each): *My opponent claims that…, but… That may be true; however…*\n\n**5. Questions** (2–3 min, answers up to 20 seconds).\n\n**6. Closing speeches** (1 min each, no new arguments).\n\n**7. Verdict** (3 min): scores 1–5 for arguments · evidence · rebuttal · language · delivery.\n\n💡 Use module 8 grammar: *If people hadn't trusted…, they wouldn't… · As long as patients tell their doctor… · Unless there is evidence…*",
    ),
    tip("Feedback order: 1) the strongest argument, 2) the best use of evidence, 3) one rebuttal that worked, 4) two language points. Compare with 5.3: is the student more confident with timing and rebuttals? Next: the full formal debate in 9.4."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "A fake treatment with no active ingredient is a ___.", options: ["*placebo", "remedy", "dose"] },
      { q: "In a ___ trial, neither doctors nor patients know who gets the real medicine.", options: ["*double-blind", "blind-double", "secret"] },
      { q: "Feeling side effects because you expect them is the ___ effect.", options: ["*nocebo", "placebo", "domino"] },
      { q: "I'm ___ — I need to see the evidence.", options: ["*skeptical", "desperate", "curable"] },
    ]),
    box(
      "Phrase of the day: an apple a day keeps the doctor away",
      "🍎 An old proverb (from Wales, 1860s): healthy habits prevent illness. Is there any evidence? A 2015 study found that apple eaters didn't visit the doctor much less often… but they did use fewer prescription medicines. 😄\n\n*What's your favorite health proverb?*",
    ),
  ]),

  homework(
    [
      gaps(
        "Complete with one word.",
        "1. The new medicine was compared with a [placebo].\n2. Good medicine should be evidence-[based].\n3. My grandmother uses [herbal] remedies for everything.\n4. Thinking a sugar pill will cure cancer is [wishful] thinking.\n5. The pill had no active [ingredient].\n6. I'm [skeptical] about miracle diets.",
      ),
      match("Match the debate stages and the phrases.", [
        ["opening", "Tonight I'll argue that…"],
        ["evidence", "A 2018 study found that…"],
        ["rebuttal", "My opponent claims that…, but…"],
        ["polite disagreement", "That may be true; however, …"],
        ["question", "If that's true, then why…?"],
        ["closing", "For these reasons, I urge you to support the motion."],
      ]),
    ],
    "Homework: Vocabulary and debate language",
  ),
  homework(
    [
      write("Write an essay (140–190 words): “Alternative medicine does more harm than good.” Do you agree? Give two arguments with evidence and answer one argument from the other side.", 140, {
        read: "Plan: 1) introduction — the question and your opinion · 2) argument 1 (PEEL) · 3) argument 2 (PEEL) · 4) the other side's argument and your answer · 5) conclusion.",
      }),
      record("Record your closing speech for today's debate (about 1 minute). ⚖️🎤", 75),
      record("Record a 1-minute answer: “What remedies does your family use? Do you think they work — or is it the placebo effect?” 🎙️", 75),
    ],
    "Homework: Writing and speaking",
  ),
]);
