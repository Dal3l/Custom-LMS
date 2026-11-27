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

// 3.3 The science of deception — skills lesson: no new grammar; review of hedging and distancing (3.1) and comment adverbs / intensifiers (3.2). V: deception and detection (give yourself away, a telltale sign, a poker face, see through someone…). S: "two truths and a lie" at C1. Main format: the game + myths quiz + a long reading (what science says about catching liars, ~830 words) + TED-Ed video + a long listening (Zarina's podcast with a former police interviewer, ~3:30).
// Facts checked: Bond & DePaulo (2006), a meta-analysis of many studies — people detect lies with about 54% accuracy (chance is 50%), and are better at recognizing truths than lies ("truth bias"); the Global Deception Research Team (2006) — in 58 countries, the most common belief about liars was that they avoid eye contact; research does not support gaze aversion as a reliable cue. The polygraph — developed by John Larson, a police officer in Berkeley, California, in 1921; it measures heart rate, breathing and sweating, not lies; a 2003 report by the US National Research Council concluded that its scientific basis was weak; polygraph results are not accepted as evidence in many courts. Aldert Vrij and colleagues — "cognitive load": lying is mentally harder, so tasks like telling a story in reverse order made lies easier to spot (2008). England and Wales — the PEACE model of investigative interviewing (1992): Preparation and planning, Engage and explain, Account, Closure, Evaluation.
// Warm-up format: the game "two truths and a lie" (the programme asks for it here) — after a match in 3.2.
export default lesson("c1-3.3", "The science of deception", () => [
  section("Warm-up: Two truths and a lie", [
    box(
      "Today you will…",
      "- play “two truths and a lie” — C1 style 🕵️\n- find out what science says about catching liars (spoiler: we're terrible at it) 🔬\n- hear how a police interviewer learned to find the truth without pressure 🎙️",
    ),
    text(
      "Two truths and a lie — C1 version 🎭",
      "Prepare three statements about your life: two true, one false. Make them **detailed** — at C1, a lie needs good details!\n\n- Use different structures: *I'd always assumed… / Had it not been for… / I'm said to have…*\n- Add a comment adverb: *Admittedly… / Frankly… / Embarrassingly…*\n\nYour teacher can ask **up to five questions** — then guesses the lie. Then swap.\n\nWhile you play, notice: **how did you decide** who was lying? Eye contact? Hesitation? Details?",
    ),
    trueFalse("Lie myths: true or false? 🤔", [
      ["Liars usually avoid eye contact.", false],
      ["Most people can spot a lie only a little better than by guessing.", true],
      ["A polygraph measures whether a person is lying.", false],
      ["People tend to believe others are telling the truth more often than not.", true],
      ["Lying is usually mentally harder than telling the truth.", true],
    ]),
    tip("Keep your answers about the myths for after the reading — it explains all five. Ask the student which clues they used in the game; most people say eye contact or nervousness. The reading shows why these clues are unreliable."),
  ]),

  section("Vocabulary: Lies and lie detection", [
    words("Deception and detection", [
      ["give yourself away", "🫣 show your secret by accident", "He gave himself away when he mentioned a detail only the thief could know."],
      ["a telltale sign", "🚩 a small sign that shows the truth"],
      ["a poker face", "🃏 a face that shows no emotion"],
      ["see through someone", "🔍 understand that someone is lying"],
      ["keep a straight face", "😐 not laugh or smile when something is funny"],
      ["fidget", "🤲 make small nervous movements"],
      ["a false confession", "⛓️ admitting a crime you didn't commit"],
      ["a cover story", "📖 an invented explanation to hide the truth"],
      ["inconsistent", "🔀 changing, not matching (about a story)"],
      ["plausible", "🤔 seeming reasonable and possibly true"],
      ["gullible", "🎣 too ready to believe things"],
      ["get away with", "🏃 not be caught or punished"],
    ]),
    match("Match the sentences and the phrases.", [
      ["“I couldn't stop laughing during his serious speech.”", "keep a straight face"],
      ["“Her hands kept moving the whole interview.”", "fidget"],
      ["“His first version and his second version didn't match.”", "inconsistent"],
      ["“She knew immediately I wasn't really ill.”", "see through someone"],
      ["“He copied his essay and the teacher never noticed.”", "get away with"],
      ["“The story sounds possible — it could be true.”", "plausible"],
    ]),
    gaps(
      "Complete with a word or phrase from the list above.",
      "1. A blush can be a telltale [sign] that someone is embarrassed.\n2. She has the perfect poker [face] — you never know what she's thinking.\n3. Under pressure, some innocent people make false [confessions].\n4. The spy had a perfect cover [story]: she was “a tourist”.\n5. He gave himself [away] by smiling at the wrong moment.\n6. Don't be so [gullible] — of course the email isn't from your bank!",
    ),
  ]),

  section("Word building: deceive, deception, deceptive", [
    gaps(
      "Complete with the right form of the word in brackets.",
      "1. The study looked at how people detect [deception]. (deceive)\n2. Appearances can be [deceptive]. (deceive)\n3. Her story was completely [believable] — nobody doubted it. (believe)\n4. The witness gave an [inaccurate] description of the car. (accurate)\n5. There were several [inconsistencies] in his account. (consistent)\n6. The judge questioned the [reliability] of the evidence. (rely)\n7. He was found guilty of [dishonesty]. (honest)\n8. The detective was [suspicious] of the perfect alibi. (suspect)",
    ),
  ]),

  section("Reading: Can you really spot a liar?", [
    tip("A long text (~830 words). First reading — 7 minutes: *What actually works when we want to find out the truth?* Then the tasks. Ask the student to find four hedging expressions and two comment adverbs."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Professionals such as police officers are much better at detecting lies than other people.", false],
        ["The belief that liars avoid eye contact was found in many countries.", true],
        ["The first polygraph was developed by a police officer.", true],
        ["A polygraph can directly measure lies.", false],
        ["Asking people to tell their story backwards can make lies easier to spot.", true],
        ["The writer thinks the best interviews involve a lot of pressure.", false],
        ["The writer suggests that our trusting nature is mostly a good thing.", true],
      ],
      {
        read: [
          "## 🕵️ Can you really spot a liar?",
          "Most of us believe, at least privately, that we can tell when someone is lying. We think we know the signs: the shifty eyes, the nervous hands, the slightly too long pause before the answer. Television detectives have trained us well. Unfortunately, decades of research suggest that we are, to put it mildly, overconfident.",
          "In 2006, the psychologists Charles Bond and Bella DePaulo combined the results of a large number of studies in which people had to judge whether others were lying or telling the truth. The average accuracy was about 54 percent. Since guessing would give you 50 percent, this is only slightly better than tossing a coin. Perhaps more surprisingly, groups that might be expected to do better — police officers, judges, customs officers — generally did not perform much better than students. They did, however, tend to be more confident.",
          "The research also found a strong *truth bias*: people were noticeably better at recognizing truths than lies, because they tended to assume that others were being honest. This is arguably not a weakness but a feature of social life. If we suspected every statement, conversation would be exhausting and friendships impossible. The price we pay for trusting each other is that we are relatively easy to fool.",
          "Why are we so bad at it? One reason is that we look for the wrong clues. In 2006, an international team of researchers asked people in 58 countries how you can tell when someone is lying. The most common answer, almost everywhere, was that liars avoid eye contact. Yet study after study has found that gaze aversion is not a reliable sign of lying at all. Many liars, aware of the stereotype, deliberately look you in the eye. Many honest people look away because they are shy, thinking hard, or come from a culture where steady eye contact is considered rude. Nervousness is equally misleading: an innocent person accused of something serious has every reason to be nervous.",
          "If people are unreliable, perhaps machines can do better. The best-known attempt is the polygraph, often called a lie detector. The first modern version was developed in 1921 by John Larson, a police officer in Berkeley, California. A polygraph measures things like heart rate, breathing and sweating. The idea is that lying causes stress, and stress causes physical changes. The problem is that the machine does not detect lies; it detects arousal — and arousal can have many causes, including fear of the machine itself. In 2003, a major report by the US National Research Council concluded that the scientific basis of polygraph testing was weak. Polygraph results are not accepted as evidence in many courts, although the tests are still used in some countries for job screening and investigations.",
          "So is there anything that actually works? The most promising research seems to focus not on the liar's body, but on their mind. Lying, it turns out, is often harder work than telling the truth. A liar has to invent a story, remember it, keep it consistent, watch the listener's reaction and control their own behavior — all at the same time. The psychologist Aldert Vrij and his colleagues have argued that interviewers can use this *cognitive load*. In one study published in 2008, people were asked to tell their story in reverse order, starting from the end. Liars found this much harder than truth-tellers, and observers became noticeably better at telling them apart.",
          "Other approaches focus on details. Truthful accounts tend to contain more sensory details and more information that could, at least in theory, be checked: names, times, places. Liars often keep their stories vague, because every detail is a risk. Asking open questions and simply letting people talk can therefore reveal more than any amount of pressure.",
          "This matters, because pressure can be dangerous. Aggressive interrogation has been linked to false confessions, in which innocent people admit to crimes they did not commit, sometimes simply to make the pressure stop. Partly for this reason, police in England and Wales introduced a different approach in 1992, known as the PEACE model. Instead of trying to break a suspect, interviewers are trained to plan carefully, build rapport, and let the person give a full account before challenging inconsistencies. The aim is to gather information, not to obtain a confession.",
          "None of this will turn you into a human lie detector. The honest conclusion from the research is that nobody — no expert, no machine — can reliably see through a lie by watching. What we can do is ask better questions, listen to the details, and accept that sometimes we will be fooled. Frankly, that may be a reasonable price for living among people we are willing to trust. 🤝",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What did Bond and DePaulo find about professionals?", options: ["*They were not much more accurate, but more confident.", "They were much more accurate than students.", "They refused to take part."] },
      { q: "Why does the writer say the truth bias is “not a weakness but a feature”?", options: ["*Trusting people makes social life possible.", "It helps us catch liars.", "It only affects children."] },
      { q: "Why is eye contact a poor clue?", options: ["*Liars may look at you on purpose, and honest people may look away.", "Eyes can't be seen clearly.", "Only police can read eye contact."] },
      { q: "What does a polygraph actually measure?", options: ["*signs of physical arousal, such as heart rate and sweating", "lies", "brain activity"] },
      { q: "What is the main idea behind the PEACE model?", options: ["*gathering information through planning and rapport, not pressure", "making suspects confess quickly", "using lie detectors in interviews"] },
    ]),
    gaps(
      "Find words in the article.",
      "1. too sure of yourself: [overconfident]\n2. looking away (two words): gaze [aversion]\n3. a fixed, simple idea about a group of people: a [stereotype]\n4. a state of excitement or stress in the body: [arousal]\n5. not clear or detailed: [vague]\n6. aggressive questioning by police: [interrogation]",
    ),
  ]),

  section("Video: The language of lying", [
    video("Watch: TED-Ed — The language of lying (Noah Zandan).", "H0-WkpmTPrM"),
    text(
      "After the video: talk about it.",
      "- What patterns in liars' **language** does the video describe?\n- How is this approach different from looking at body language?\n- The article says no method is fully reliable. Does the video agree? What would the article's writer say about it?\n- Would you feel comfortable if your emails were analyzed for signs of lying? Why / why not?",
    ),
    tip("Encourage critical comparison with hedging: *The video seems to suggest that… However, the article would appear to… It may well be that…* Point out that the patterns are averages, not proof — a good C1 discussion point."),
  ]),

  section("Listening: The interviewer", [
    tip("A long listening — about 3 minutes 30 seconds. Zarina's podcast: a former police detective talks about how interviews have changed. First listen: *What was wrong with the old way of interviewing?* Second listen: the tasks."),
    ...listening(
      "Listen to Zarina's podcast with a former police detective.",
      "**Zarina:** My guest today spent thirty years as a police detective, and for the last ten of them he trained other officers in how to interview witnesses and suspects. Welcome.\n\n**Detective:** Thank you. It's a pleasure to be on the other side of the questions for once.\n\n**Zarina:** Let's start with the obvious one. Can you tell when someone's lying?\n\n**Detective:** Honestly? No. And I'm deeply suspicious of anyone who says they can. When I started, I was utterly convinced I could. I'd watch for nervous hands, for people who wouldn't look at me. I thought I had a sixth sense.\n\n**Zarina:** What changed your mind?\n\n**Detective:** A case early in my career. A young man was brought in about a burglary. He was sweating, fidgeting, couldn't look me in the eye. Every telltale sign in the book. I was certain he'd done it, and I pushed him hard. After four hours, he was ready to say whatever I wanted. Fortunately, my sergeant stopped the interview. Two days later, we caught the real burglar. The young man had been terrified, that's all. He'd never been in a police station before.\n\n**Zarina:** That must have been a shock.\n\n**Detective:** To say the least. I went home that night and thought, how many times have I been wrong without finding out? It's not a comfortable question.\n\n**Zarina:** So what did you do differently?\n\n**Detective:** Over time, the whole approach changed — not just mine. In England and Wales, the police introduced a model called PEACE in the early nineties. The idea is simple, though it's admittedly hard to do well. You prepare carefully, you explain to the person what's going to happen, and then you let them talk. You ask open questions: \"Tell me everything you did that evening.\" And you don't interrupt.\n\n**Zarina:** Why not interrupt?\n\n**Detective:** Because a full account gives you information. Truthful people tend to remember all kinds of small details — what the weather was like, who said what, a song on the radio. Someone who's invented a story often keeps it short, because every detail is something you could check. Then, at the end, you go back to the parts that don't fit and ask about them calmly.\n\n**Zarina:** I read about asking people to tell the story backwards.\n\n**Detective:** Yes, that's one technique researchers have tested. If you've lived through something, you can usually go through it in any order. If you've memorized a script, going backwards is surprisingly hard. But I want to be careful here — none of these techniques is a lie detector. They just make it a little more likely that inconsistencies come out.\n\n**Zarina:** What about real lie detectors? Polygraphs?\n\n**Detective:** We never relied on them. A polygraph measures stress. Innocent people can be stressed; experienced liars can be very calm. It's a machine that seems scientific, which is arguably more dangerous than no machine at all.\n\n**Zarina:** Do you ever play two truths and a lie at parties?\n\n**Detective:** My family won't let me. Not because I'm good at it — because I ask too many questions. My daughter says it feels like an interrogation.\n\n**Zarina:** And are you good at it?\n\n**Detective:** I'm about average. Fifty-something percent, like everybody else. The difference is that now I know it.\n\n**Zarina:** What's the one thing you'd like listeners to remember?\n\n**Detective:** That nervous doesn't mean guilty. And that if you really want the truth, the best tool isn't suspicion. It's patience. Let people talk. Most of the time, they'll tell you more than you ever needed to know.\n\n**Zarina:** That's lovely. Thank you so much.\n\n**Detective:** Thank you. And for the record — everything I've said today was true. Probably.",
    ),
    quiz("Listen and choose.", [
      { q: "What did the detective believe when he started his career?", options: ["*that he could easily tell when people were lying", "that all suspects were guilty", "that polygraphs were perfect"] },
      { q: "What happened in the burglary case?", options: ["*He pushed an innocent young man who was simply terrified.", "He caught the burglar immediately.", "The young man escaped."] },
      { q: "Why is it important not to interrupt, according to the detective?", options: ["*A full account gives you details you can check.", "Interrupting is rude.", "Suspects stop talking."] },
      { q: "What does he say about polygraphs?", options: ["*They measure stress and can seem more scientific than they are.", "They are always accurate.", "They are useful in every case."] },
      { q: "What is his main message?", options: ["*Nervous doesn't mean guilty, and patience is the best tool.", "Never trust anyone.", "Use pressure to get the truth."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["The detective trained other officers for the last ten years of his career.", true],
      ["His sergeant stopped the interview with the young man.", true],
      ["The young man had been in a police station many times.", false],
      ["The PEACE model is easy to do well, according to the detective.", false],
      ["He says telling a story backwards is a reliable lie detector.", false],
      ["The detective says his accuracy is about average.", true],
    ]),
    gaps(
      "Complete the sentences from the podcast.",
      "1. I'm [deeply] suspicious of anyone who says they can.\n2. When I started, I was [utterly] convinced I could.\n3. Every [telltale] sign in the book.\n4. That must have been a shock. — To say the [least].\n5. The idea is simple, though it's [admittedly] hard to do well.\n6. It's a machine that seems scientific, which is [arguably] more dangerous than no machine at all.",
    ),
  ]),

  section("Module review: hedging and attitude", [
    choose(
      "Choose.",
      "1. The suspect is believed [*to have left/to leave] the country last week.\n2. It would [*appear/appears] that the witness was mistaken.\n3. There [*are thought to be/are thought being] several versions of the story.\n4. [*Admittedly/Utterly], I was nervous — but I wasn't lying.\n5. The interview was long, to say the [*least/less].\n6. I was [*absolutely/very] terrified.\n7. It's [*highly/utterly] unlikely that he did it.\n8. The polygraph result [*may well/may good] be wrong.",
    ),
    drag(
      "Complete the report with the words.",
      "The witness is [said] to have seen a man near the bank at midnight. [Apparently], he was wearing a red jacket. However, it would [appear] that the street lights were not working that night, so her description [may] well be inaccurate. [Admittedly], she is a reliable witness in other ways. To be [fair], she has always said she isn't completely sure.",
      ["says", "certainly", "honest"],
    ),
  ]),

  section("Collocations: truth and lies", [
    sort("Which verb goes with which noun? Sort. 🧩", {
      "tell": ["a lie", "the truth", "a story", "a fib"],
      "make": ["a confession", "an accusation", "a statement", "a claim"],
    }),
  ]),

  section("Let's talk: Should we try to catch liars?", [
    text(
      "Discuss 🗣️",
      "- After today, would you still trust your instinct about who is lying? Why / why not?\n- Should employers be allowed to use lie detectors or AI that “reads” faces in job interviews?\n- The detective says patience is the best tool. Is that true in families and friendships too?\n- Is a world where we trust too much better or worse than a world where we suspect everyone?\n\nUse: *It would appear that… / Research seems to suggest… / Admittedly… / Frankly… / to say the least*",
    ),
    tip("Push for extended answers with evidence from the reading, the video and the podcast. In a group: a mini-debate on question 2 (two minutes per side, with one Point of Information each) — a short warm-up for the next debate in 5.3."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "How accurate are people at detecting lies, on average?", options: ["*about 54%", "about 80%", "about 30%"] },
      { q: "He gave himself ___ by smiling.", options: ["*away", "out", "up"] },
      { q: "Her story was ___ — the details kept changing.", options: ["*inconsistent", "plausible", "gullible"] },
      { q: "I couldn't keep a straight ___!", options: ["*face", "head", "look"] },
    ]),
    box(
      "Phrase of the day: the truth will out",
      "🌅 In the end, the truth always becomes known (an old phrase — Shakespeare uses it in The Merchant of Venice). The detective would add: *…if you're patient enough to listen.*\n\n*Do you believe the truth always comes out in the end?*",
    ),
  ]),

  homework(
    [
      gaps(
        "Module 3 review: complete the sentences.",
        "1. The thief is believed [to have escaped] through the window. (escape)\n2. It would [appear/seem] that the report was wrong.\n3. There are said [to be] hundreds of fake accounts.\n4. [Admittedly/Granted], I made a mistake — but it wasn't intentional.\n5. I was [utterly/absolutely/completely] exhausted after the interview.\n6. It's [highly] unlikely that he'll confess.\n7. The film was disappointing, to put it [mildly].\n8. The soup is a [tad/bit/little] too salty.",
      ),
      sort("Which helps to find the truth, and which doesn't? Sort. 🧩", {
        "✅ more helpful": ["asking open questions", "letting people talk without interrupting", "checking details like times and places", "asking for the story in reverse order"],
        "❌ not reliable": ["watching for eye contact", "noticing nervous hands", "using pressure for hours", "trusting a polygraph", "following your gut feeling"],
      }),
      trueFalse("Correct or not?", [
        ["He is said to have lied to the police.", true],
        ["I was very exhausted after the trip.", false],
        ["It's highly unlikely that they'll win.", true],
        ["Admittedly, the price is a tad high.", true],
        ["There is thought being a problem with the data.", false],
      ]),
    ],
    "Homework: Module review",
  ),
  homework(
    [
      write(
        "Essay (220–260 words): “Lie detectors and AI face-reading should never be used in job interviews or in court.” Do you agree? Use evidence from the lesson, hedging expressions and at least two comment adverbs.",
        220,
        { read: "*Plan:* introduction · how these technologies are supposed to work · what research suggests · arguments for using them · your conclusion. Useful: *It would appear that… / Research seems to suggest… / Admittedly… / It is highly unlikely that…*" },
      ),
      record("Record your own “two truths and a lie” (1–2 minutes) with detailed stories. Your teacher will guess the lie next lesson! 🎤", 120),
    ],
    "Homework: Writing and speaking",
  ),
]);
