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
  write,
} from "../../kit";

// 12.4 Final revision — the last lesson of English B2 (as in the programme): review of the grammar and vocabulary of the whole course; the final project "My next step" (a 3-minute talk or video about the student's plans with English); an optional final debate about the future ("This house believes that in twenty years, nobody will need to learn foreign languages"). Main format: "where are they now?" match (the course characters) + a big grammar and vocabulary review + a long listening (the last episode of Zarina's podcast: messages from Madina, Daniyar, Asel, Ruslan, Leo and Dana, ~3:20) + the final debate (optional) + the final project. No new facts.
// Characters (consistent with the whole course): Madina — designer with her own studio; Daniyar — studies engineering in Seoul, chose the summer internship at Kenji's company (12.1); Asel — left a bank job for her bakeries, bike delivery (11.4); Ruslan — got lost in the mountains, became a rescuer, safety center (11.2); Leo — musician, got his dad's guitar back (6.2, 9.1); Dana — works remotely for a Barcelona publisher, stayed in Almaty (4.2, 10.1); Zarina — podcaster.
export default lesson("b2-12.4", "Final revision", () => [
  section("Warm-up: Where are they now?", [
    box(
      "Today you will…",
      "- say goodbye to the characters of the course 👋\n- review the grammar and vocabulary of the whole of B2 🧠\n- present your final project: “My next step” 🚀",
    ),
    match("Remember the characters? Match each one with their story. 👥", [
      ["Daniyar", "studies engineering in Seoul and chose a summer internship at home"],
      ["Leo", "sold his dad's guitar — and got it back"],
      ["Asel", "left a well-paid bank job to open bakeries"],
      ["Ruslan", "got lost in the mountains and became a rescuer"],
      ["Madina", "runs a design studio and made the festival posters"],
      ["Dana", "works remotely for a publisher in Barcelona"],
    ]),
    text(
      "Talk to your teacher.",
      "- Which character's story did you like most? Why?\n- Which lesson of the course do you remember best?\n- What can you do in English now that you couldn't do at the start? 🎉",
    ),
    tip("Celebrate! Look back at the entry test (lesson 0) if you have the results — the difference is usually impressive. Today is review plus the final project."),
  ]),

  section("Grammar review: the whole course", [
    choose(
      "Choose. (One sentence from each module!)",
      "1. Do you know where [*the station is/is the station]? (1)\n2. We [*had been walking/have been walking] for hours when it started to snow. (2)\n3. She is said [*to have written/to write] the song in one night. (3)\n4. By 2050, the population [*will have reached/will reach] ten billion. (4)\n5. I [*needn't have bought/didn't need buy] so much food. (5)\n6. My car [*is being repaired/is repairing] at the moment. (6)\n7. He apologized [*for being/to be] late. (7)\n8. If I [*had slept/slept] more last night, I'd feel better now. (8)",
    ),
    choose(
      "Choose. (Modules 9–12)",
      "1. She [*can't have seen/mustn't have seen] us — she didn't say hello. (9)\n2. This is the town [*in which/in that] I grew up. (10)\n3. [*Having lived/Lived] abroad, he speaks three languages. (10)\n4. [*What I need/That I need] is a long holiday. (11)\n5. Never [*have I seen/I have seen] such a crowd. (11)\n6. [*Despite/Although] the rain, we went out. (12)\n7. I left early [*so as not to/so not to] miss the bus. (12)\n8. The more you practice, the [*better/more better] you get. (12)",
    ),
    gaps(
      "Say it differently. Use the word in capitals and 2–5 words.",
      "1. I'm sure he forgot. (MUST) → He [must have forgotten].\n2. People believe the thief escaped. (BELIEVED) → The thief [is believed to have escaped].\n3. Someone cut my hair yesterday. (HAD) → I [had my hair cut] yesterday.\n4. “I didn't take it,” he said. (DENIED) → He [denied taking/denied having taken] it.\n5. I regret not learning to swim. (WISH) → I [wish I had learned/wish I had learnt] to swim.\n6. It's very rare for us to meet such people. (RARELY) → [Rarely do we meet] such people.",
    ),
    sort("Which grammar? Sort the sentences. 🧩", {
      "⏪ talking about the past": [
        "She must have missed the train.",
        "I should have called you.",
        "We had been waiting for an hour.",
        "He is said to have left the country.",
      ],
      "🔮 talking about the future": [
        "By June, I'll have finished the course.",
        "This time next year, I'll be living abroad.",
        "Prices are bound to go up.",
        "I was going to call you, but I forgot.",
      ],
    }),
    tip("“I was going to call you” is the future in the past (4.2) — it was a future plan, seen from the past. Discuss any sentence the student puts in the other group. For any mistakes today, look back at the table in that module."),
  ]),

  section("Vocabulary review", [
    match("Match the expressions and the meanings.", [
      ["a people person", "someone who loves being with others"],
      ["against all odds", "although it seemed impossible"],
      ["make ends meet", "have just enough money"],
      ["take it with a pinch of salt", "not completely believe it"],
      ["go with your gut", "decide by feeling"],
      ["agree to disagree", "accept different opinions and stop arguing"],
    ]),
    quiz("Choose the right word.", [
      { q: "After a week of not speaking, they finally made ___.", options: ["*up", "out", "off"] },
      { q: "The video went ___ — a million views in a day.", options: ["*viral", "virus", "visual"] },
      { q: "He didn't do it — he has a perfect ___.", options: ["*alibi", "motive", "verdict"] },
      { q: "Don't beat around the ___ — just tell me!", options: ["*bush", "tree", "point"] },
    ]),
    gaps(
      "Word formation review. Use the word in brackets.",
      "1. Her [determination] helped her survive. (determine)\n2. The story was completely [unbelievable]. (believe)\n3. It was a [disappointing] result. (disappoint)\n4. The medicine was [ineffective]. (effect)\n5. She gave a very [persuasive] speech. (persuade)\n6. We need more [affordable] housing. (afford)",
    ),
    drag(
      "Complete the summary of the course.",
      "In this course, we made first [impressions], heard stories of people who survived against all [odds], and debated whether money can buy [happiness]. We learned how rumors spread, why witnesses get it [wrong], and what makes a city happy. Finally, we discovered the [power] of words — and how to [persuade] people politely. 🎓",
      ["impression", "chances", "persuasion"],
    ),
  ]),

  section("Listening: One year later", [
    tip("A long listening — about 3 minutes 20 seconds. The last episode of Zarina's podcast: she has collected messages from the people who appeared in her show this year. First listen: *What's next for each of them?* Second listen: the tasks."),
    ...listening(
      "Listen to the last episode of Zarina's podcast.",
      "**Zarina:** Welcome to the last episode of the year! Instead of one guest, I asked some old friends of the show to send me a message: what has this year taught you, and what's your next step? Let's start with Madina.\n\n**Madina:** Hi, Zarina! This year taught me that the clients with the most confusing briefs often become the best clients — once you learn to ask the right questions. My next step? I'm hiring my first full-time designer. And Dana has finally agreed to share an office with me, so I'll have someone to pay for my coffee.\n\n**Zarina:** Next, from Seoul, Daniyar.\n\n**Daniyar:** Hello! What this year taught me is that the sensible choice isn't always the right one. I said no to a big company in Seoul and spent the summer at Kenji's company in Almaty, building an app for Ruslan's rescue team. It was the best decision I've ever made. In September, I'll be back in Seoul for my studies — and I've promised Grandma I'll go to bed before midnight. Mostly.\n\n**Zarina:** Asel, from the bakery.\n\n**Asel:** Hello, everyone! The city gave us the money for the bikes, and we now deliver to more than two hundred homes every morning. The street in front of the bakery is car-free now, and we've put tables outside. If someone had told me ten years ago, when I was sitting in a bank, that I'd be this happy covered in flour, I wouldn't have believed them. Next step: a third bakery. Don't tell my accountant yet.\n\n**Zarina:** Ruslan, from the mountains.\n\n**Ruslan:** Hi. The safety center opened in the spring, and more than four hundred young people have done our course. The number of rescues on the main trail has gone down, which is exactly what we wanted. Not only that, but some of our students now want to become rescuers themselves. What I've learned is that one bad night can become the start of something good. And please — always tell someone where you're going.\n\n**Zarina:** Dana, our designer in Almaty.\n\n**Dana:** Hi! This year taught me that home can be the place you were trying to leave. I stayed in Almaty, found a flat around the corner from Asel's bakery and designed twelve book covers for Barcelona without leaving my desk. Next step: a trip to Barcelona in spring — as a visitor this time. And yes, Leo, you can use my living room.\n\n**Zarina:** And finally, Leo.\n\n**Leo:** Hey! This year, I got my dad's guitar back, lost my voice, found my voice, and played the biggest concert of my life. Next spring we're recording a new album in Dana's living room, because her flat has the best acoustics in the city — and she's never home in the mornings. Despite everything that went wrong, it's been the best year ever.\n\n**Zarina:** And what about me? This year taught me that every person has a story worth hearing, as long as you ask good questions and really listen. My next step is a new season — and I'd love to hear your stories too. So, wherever you are, whatever your next step is: be curious, be brave, and keep talking. Thank you for listening. Goodbye!",
    ),
    quiz("Listen and choose.", [
      { q: "What is Madina's next step?", options: ["*hiring her first full-time designer", "moving to Barcelona", "closing her studio"] },
      { q: "What did Daniyar learn this year?", options: ["*The sensible choice isn't always the right one.", "Big companies are always best.", "Sleep isn't important."] },
      { q: "What has happened to Asel's bike delivery?", options: ["*It delivers to more than two hundred homes every morning.", "It stopped in winter.", "The city refused the money."] },
      { q: "What has the safety center achieved, according to Ruslan?", options: ["*Fewer rescues on the main trail.", "More accidents.", "Nothing yet."] },
      { q: "Where will Leo's band record the new album?", options: ["*in Dana's living room", "in Seoul", "in a big studio"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Madina and Dana are going to share an office.", true],
      ["Daniyar spent the summer working in Seoul.", false],
      ["The street in front of Asel's bakery is now car-free.", true],
      ["More than four hundred young people have done Ruslan's course.", true],
      ["Leo says it has been a terrible year.", false],
      ["Zarina is starting a new season of the podcast.", true],
    ]),
    order("Put the messages in the order you heard them.", [[
      "Madina is hiring her first full-time designer.",
      "Daniyar talks about his summer at Kenji's company.",
      "Asel describes the bike deliveries.",
      "Ruslan talks about the safety center.",
      "Dana plans a trip to Barcelona.",
      "Leo describes the best year ever.",
    ].join("\n")], "lines"),
    gaps(
      "Complete the sentences from the podcast.",
      "1. [What] this year taught me is that the sensible choice isn't always the right one.\n2. If someone had told me ten years ago, I [wouldn't] have believed them.\n3. Not [only] that, but some of our students now want to become rescuers.\n4. [Despite] everything that went wrong, it's been the best year ever.\n5. Every person has a story worth hearing, as [long] as you ask good questions.\n6. Be curious, be brave, and keep [talking].",
    ),
  ]),

  section("Final debate (optional)", [
    tip("TEACHER NOTES — the final debate of the course (optional, as in the programme). Use the FULL format from 9.4 if you have time, or the standard format if not. Motion: “This house believes that in twenty years, nobody will need to learn foreign languages.” It's a perfect ending: the student argues about the value of what they've just done for a year! Coin toss for sides as usual. Scoring sheet from 9.4 (/30). If there's no time, skip to the final project — it's the main task today."),
    table("debate-full"),
    sort("Which side does each argument support? Sort. 🧩", {
      "🤖 for: nobody will need to learn languages": [
        "AI translation is getting better and faster every year.",
        "Earphones can already translate conversations in real time.",
        "Learning a language takes years of hard work.",
        "Most information online can be translated instantly.",
      ],
      "🗣️ against: people will still learn languages": [
        "Learning a language changes the way you think.",
        "Friendships and humor are hard to translate.",
        "Technology can fail, run out of battery or make mistakes.",
        "Speaking someone's language shows respect.",
      ],
    }),
  ]),

  section("Final project: My next step", [
    box(
      "🚀 Final project: My next step",
      "Prepare a **3-minute talk** (or record a video) about your plans with English.\n\n**Include:**\n- 🔙 where you started and what you can do now (*When I started, I couldn't… Now I can…*)\n- 🎯 your next step: an exam (B2 First?), study abroad, a job, travel, C1, a hobby in English…\n- ⚖️ a decision you have to make (*Although…, whereas…*)\n- 🔮 your future (*By this time next year, I'll have… I'll be…*)\n- 💥 one memorable ending (a cleft sentence or an inversion: *What I've learned is… / Never have I…*)\n\nUse the pitch structure from 11.4 and the speech tools from 11.3!",
    ),
    order(
      "Put the parts of your talk in order.",
      [[
        "A hook: a short story or a surprising fact about your English.",
        "Where you started and what you can do now.",
        "Your next step and why it matters to you.",
        "A decision or a challenge ahead.",
        "Your future in English.",
        "One memorable final sentence.",
      ].join("\n")],
      "lines",
    ),
    tip("Give 10 minutes to prepare in class (or do it at home and present at the end). Record the talk if possible — it's a lovely “before and after” with the entry test recording. Feedback: celebrate first, then one thing to keep working on at C1."),
  ]),

  section("Plan your talk", [
    text(
      "📝 Notes for “My next step”",
      "Write short notes (not full sentences!) for each part:\n\n- 🪝 **Hook:** …\n- 🔙 **Then and now:** When I started… / Now I can…\n- 🎯 **Next step:** …, because…\n- ⚖️ **A decision:** Although…, … / whereas…\n- 🔮 **The future:** By this time next year, I'll have… / I'll be…\n- 💥 **Final line:** What I've learned is… / Never have I…\n\nThen give your talk to your teacher. Look at your notes, not a script — and don't forget the pause before your final line! ⏸️",
    ),
  ]),

  section("Your B2 result", [
    trueFalse("Check yourself. Can you do it? True or false? ✅", [
      ["I can talk about the past, present and future with a wide range of tenses.", true],
      ["I can make deductions, talk about regrets and imagine different pasts.", true],
      ["I can report what people say and write formal emails, essays, reviews and reports.", true],
      ["I can take part in a debate with arguments, evidence and rebuttals.", true],
      ["I can give a short persuasive talk and answer questions calmly.", true],
      ["I know the format of Cambridge B2 First.", true],
    ]),
    box(
      "🎓 Congratulations — you've finished English B2!",
      "You've read about first impressions and fake news, comebacks and heists, happy cities and speeches that changed history. You've debated, pitched, persuaded and written. 🎉\n\n**What's next?** Keep reading, listening and speaking in English every day. And when you're ready — C1 is waiting, with advanced inversion and emphasis, the subjunctive, academic writing and longer, richer texts.\n\n*What I hope you'll remember is not every rule — but that you can say what you really think, in English.* 💬",
    ),
  ]),

  homework(
    [
      write("Final project (written version): “My next step” (140–190 words). Describe where you started, what you can do now, your next step and your plans with English. Use at least five structures from the course (a cleft sentence, an inversion, a mixed conditional, a participle clause, a linker of contrast…).", 140),
      record("Final project: record your 3-minute talk “My next step”. 🎤🚀", 200),
    ],
    "Homework: Final project",
  ),
  homework(
    [
      choose(
        "Final review. Choose.",
        "1. I wish I [*had started/started] learning English earlier.\n2. She [*must have been/must be] tired after the flight yesterday.\n3. The museum, [*which/that] opened in 1990, is free.\n4. Not only [*did he win/he won], but he also broke the record.\n5. [*Although/Despite] it was hard, I enjoyed the course.\n6. By next year, I [*will have passed/will pass] B2 First.",
      ),
      gaps(
        "Complete with one word.",
        "1. It was my teacher [who] encouraged me to keep going.\n2. [Having] finished the course, I feel much more confident.\n3. I'll keep practicing [so] that I don't forget.\n4. Rarely [do] I miss a chance to speak English now.\n5. The more I read, the [more] I understand.\n6. [What] I've learned most is to say what I think.",
      ),
      order("Make sentences.", [
        "What I've learned is to never give up.",
        "Never have I enjoyed a course so much.",
        "Having finished the course, I feel ready.",
        "Although it was hard, it was worth it.",
        "By next year, I'll have passed the exam.",
      ]),
    ],
    "Homework: Final review",
  ),
]);
