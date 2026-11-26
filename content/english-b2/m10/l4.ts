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
  tip,
  trueFalse,
  write,
} from "../../kit";

// 10.4 Revision 9–10 — points for every task, in the format of Cambridge B2 First (as in the programme): Use of English Parts 1–4, Listening Parts 1–4 (four shorter recordings: four short extracts; a walking-tour guide — sentence completion; five people who moved to a new city; an interview with a lawyer); grammar and vocabulary of modules 9–10. Project: a report "How to improve our neighborhood" (140–190 words, with headings). Warm-up format: "find and correct the mistake" (10.3 had sorting).
// No new facts: the listening speakers are invented (the guide, the five speakers, Ms. Park the lawyer). Almaty details in the walking tour are general (the Green Bazaar, the mountains, trees planted in the city's early years); no exact figures.
export default lesson("b2-10.4", "Revision 9–10", () => [
  section("Warm-up: Find and correct the mistake", [
    box(
      "Today you will…",
      "- check what you remember from modules 9–10 🧠\n- try all four parts of B2 First Listening 🎧\n- plan a report: “How to improve our neighborhood” 📋",
    ),
    gaps(
      "Each sentence has one mistake. Write the correct word or words. 🔍",
      "1. He mustn't have stolen it — he was in Seoul. → He [can't/couldn't] have stolen it.\n2. The accident could have prevented. → The accident could have [been] prevented.\n3. She's the neighbor who's dog barks all night. → She's the neighbor [whose] dog barks all night.\n4. I have two brothers, both of them live abroad. → I have two brothers, both of [whom] live abroad.\n5. Lived in Japan for years, he speaks Japanese well. → [Having] lived in Japan for years, he speaks Japanese well.\n6. This is the city in that I was born. → This is the city in [which] I was born.",
    ),
    tip("Every task gives points. Score guide: 80%+ excellent; 65–80% good — review the weak topics in the next warm-ups; under 65% — go back to the grammar sections of modules 9–10. Today has four listenings — read the questions before each one."),
  ]),

  section("Use of English Part 1: Choose the word", [
    tip("Exam tip: Part 1 tests collocations and fixed phrases. Read the whole sentence — often the word AFTER the gap decides the answer."),
    choose(
      "Read the text and choose the best word for each gap.",
      "The street that changed 🌳\n\nFive years ago, our street was full of traffic and nobody [*paid/gave/made/took] attention to anyone else. Then the city decided to [*close/shut/stop/end] it to cars. At first, many residents were against the [*idea/thought/opinion/view]. Shopkeepers were [*afraid/scared/nervous/worried] of losing customers, and some people [*complained/argued/disagreed/blamed] that the change was unfair. But within a year, the street had [*come/become/turned/got] to life. Children played outside, neighbors [*got/made/took/had] to know each other, and the cafés put tables on the sidewalk. Today, almost nobody would [*vote/elect/choose/pick] to bring the cars back.",
    ),
  ]),

  section("Use of English Part 2: One word", [
    tip("Exam tip: Part 2 tests grammar words — prepositions, pronouns, auxiliaries, linkers. Read the whole text first."),
    gaps(
      "Read the text and write ONE word in each gap.",
      "An unsolved mystery 🕵️\n\nThe painting, [which] had been missing for thirty years, was found in an old garage. The man [whose] house it was said he had no idea how it had got there. Police believe the thief must [have] hidden it in the 1990s. Several people were questioned, but none [of] them was arrested. [Having] examined the painting, experts confirmed that it was genuine. It is now [being] cleaned at the museum, [where] it will be shown again next year. The case, however, remains a mystery to [which] nobody has the answer.",
    ),
  ]),

  section("Use of English Part 3: Word formation", [
    tip("Exam tip: decide which part of speech you need, then check if it should be negative or plural."),
    gaps(
      "Read the sentences. Use the word in brackets to form a word that fits the gap.",
      "1. The jury found him [innocent] of the crime. (innocence)\n2. The police are still looking for [witnesses]. (witness)\n3. The thieves wore [disguises]. (disguise)\n4. The [residents] of the street voted for the plan. (reside)\n5. It's an [unusual] neighborhood — no cars at all. (usual)\n6. Public transport here is cheap and [reliable]. (rely)\n7. Moving abroad was a big [adjustment] for the family. (adjust)\n8. The city has become much more [crowded]. (crowd)",
    ),
  ]),

  section("Use of English Part 4: Say it differently", [
    tip("Exam tip: use the word in capitals WITHOUT changing it, and write 2–5 words. Keep the meaning exactly the same."),
    gaps(
      "Complete the second sentence so that it means the same as the first. Use the word in capitals and 2–5 words.",
      "1. I'm sure he forgot about the meeting. (MUST) → He [must have forgotten] about the meeting.\n2. It's impossible that she saw us. (CAN'T) → She [can't have seen] us.\n3. They should have told him about his rights. (BEEN) → He [should have been told] about his rights.\n4. I live in this flat. It has a balcony. (WHICH) → The flat [in which I live/which I live in] has a balcony.\n5. After he had finished work, he went home. (HAVING) → [Having finished work], he went home.\n6. The neighbor's dog barks all night. I don't like him. (WHOSE) → I don't like the neighbor [whose dog barks] all night.",
    ),
  ]),

  section("Listening Part 1: Short extracts", [
    tip("Exam tip: you hear different short situations. Read the question and the options before each extract. In the exam there are eight extracts; here — four."),
    ...listening(
      "Listen to four short extracts and choose the right answer for each.",
      "**1.**\n\n**Woman:** Did you hear? Someone broke into the café on the corner last night. But the strange thing is, they didn't take any money. They only took the coffee machine.\n\n**Man:** The coffee machine? They must have really needed coffee.\n\n**Woman:** Or they must have known it was worth more than the money in the till.\n\n**2.**\n\n**Man:** Honestly, I wasn't sure about moving to the suburbs. I thought I'd miss the city. But having lived here for six months, I can't imagine going back. It's quiet, the air is clean, and my commute is only twenty minutes by train.\n\n**3.**\n\n**Woman:** Good evening, everyone. Before we start tonight's meeting, a quick reminder: the proposal to turn the car park into a community garden will be voted on next Thursday. Anyone wishing to speak at that meeting should register by Monday.\n\n**4.**\n\n**Boy:** I really should have checked the weather before we went hiking. We got caught in a storm, and we didn't have proper jackets. Luckily, a family who were camping nearby let us shelter in their tent until it stopped.",
    ),
    quiz("Listen and choose.", [
      { q: "1. What was stolen from the café?", options: ["*the coffee machine", "the money", "nothing"] },
      { q: "2. How does the man feel about living in the suburbs now?", options: ["*He's very happy there.", "He misses the city.", "He finds the commute too long."] },
      { q: "3. What is the purpose of the announcement?", options: ["*to remind people about a vote and how to register to speak", "to open a new car park", "to cancel a meeting"] },
      { q: "4. What does the boy regret?", options: ["*not checking the weather", "going camping", "meeting the family"] },
    ]),
  ]),

  section("Listening Part 2: Sentence completion", [
    tip("Exam tip: you hear one speaker. Read the sentences first and guess what kind of word is missing. Write the words you hear — usually 1–3 words."),
    ...listening(
      "Listen to a guide at the start of a walking tour of Almaty's old center.",
      "**Guide:** Good morning, everyone, and welcome to our walking tour of old Almaty. My name is Bakhyt, and I've been a guide here for twelve years. Our tour takes about two hours, and we'll walk around four kilometers, so I hope you're wearing comfortable shoes.\n\nWe'll start here, in front of the cathedral, which was built almost entirely of wood. Then we'll walk through the park, where many of the trees were planted by the city's first residents. Planted more than a century ago, some of them are now taller than the buildings around them.\n\nAfter that, we'll go to the Green Bazaar, the market at which locals have shopped for generations. You'll have thirty minutes there to try dried fruit, cheese and fresh bread. Please don't buy too much — we still have a long way to go!\n\nOur last stop is a quiet street on which several old wooden houses have survived. Many of them were going to be knocked down, but local residents campaigned to save them. Having been restored, they are now cafés and small galleries.\n\nA few practical things: please stay together, and if you get lost, call the number on your ticket. We'll finish at around twelve o'clock, next to the metro station. Any questions? No? Then let's go!",
    ),
    gaps(
      "Listen and complete the sentences. Write 1–3 words.",
      "1. Bakhyt has been a guide for [twelve years/12 years].\n2. The tour is about [four kilometers/4 kilometers/four kilometres] long.\n3. The cathedral was built almost entirely of [wood].\n4. At the Green Bazaar, the group will have [thirty minutes/30 minutes].\n5. The old wooden houses are now cafés and small [galleries].\n6. If you get lost, call the number on your [ticket].",
    ),
  ]),

  section("Listening Part 3: Five speakers", [
    tip("Exam tip: five people talk about the same topic. Listen for the MAIN point of each speaker; the options often contain words that every speaker mentions."),
    ...listening(
      "Listen to five people talking about moving to a new city.",
      "**Speaker 1:** When I moved to Berlin, I didn't know a single person. What saved me was a running club. Every Saturday morning, twenty strangers, most of whom are now my friends. I'd tell anyone moving abroad: find a hobby with other people in it.\n\n**Speaker 2:** For me, the language was everything. Having studied German at school, I thought I'd be fine. I wasn't. For the first month I understood almost nothing. But I took evening classes, and by the end of the year I was dreaming in German.\n\n**Speaker 3:** Honestly, the hardest part wasn't the city. It was coming home again after five years. Everyone expected me to be the same person, and I wasn't. Nobody warns you about that.\n\n**Speaker 4:** I chose my neighborhood very carefully. I wanted a place in which I could walk everywhere — the shops, the park, my office. It cost a bit more, but I've never regretted it. I haven't used a car in three years.\n\n**Speaker 5:** I should have saved more money before I moved. Rent was much higher than I'd expected, and for the first few months I could hardly afford to go out. Now I tell everyone: prepare your budget first, and then pack your bags.",
    ),
    quiz("Listen. What is the MAIN point each speaker makes?", [
      { q: "Speaker 1", options: ["*Joining a group activity helped them make friends.", "Running is the best way to see a city.", "Berlin is a lonely city."] },
      { q: "Speaker 2", options: ["*Learning the language properly made the difference.", "School language classes are enough.", "German is impossible to learn."] },
      { q: "Speaker 3", options: ["*Returning home was harder than moving abroad.", "They never want to go home.", "The new city was very difficult."] },
      { q: "Speaker 4", options: ["*Choosing a walkable neighborhood was worth the cost.", "Cars are necessary in a big city.", "They regret paying more rent."] },
      { q: "Speaker 5", options: ["*They regret not planning their money better.", "Rent was cheaper than expected.", "They went out every night."] },
    ]),
  ]),

  section("Listening Part 4: An interview", [
    tip("Exam tip: one long interview, questions in order. The right answer often uses different words from the recording."),
    ...listening(
      "Listen to an interview with a lawyer.",
      "**Host:** My guest today is Ms. Park, a criminal lawyer. Ms. Park, why did you choose this job?\n\n**Ms. Park:** Because of a television series, to be honest! I watched courtroom dramas as a teenager and thought it looked exciting. The reality is very different. Most of my work is reading documents, not giving dramatic speeches.\n\n**Host:** What's the most difficult part?\n\n**Ms. Park:** Defending people when the public has already decided they're guilty. Everyone deserves a fair trial. Guilt must be proved in court, not on social media.\n\n**Host:** Have you ever defended someone you thought was guilty?\n\n**Ms. Park:** My job isn't to decide that. My job is to make sure the evidence is tested properly. Several times, evidence that looked certain turned out to be wrong — a witness who must have been confused, a camera that recorded the wrong time.\n\n**Host:** What advice would you give a young person who wants to become a lawyer?\n\n**Ms. Park:** Read a lot, learn to write clearly, and practice debating. The ability to listen to the other side and answer calmly is more important than a loud voice.",
    ),
    quiz("Listen and choose.", [
      { q: "1. Why did Ms. Park first become interested in law?", options: ["*She watched courtroom dramas on TV.", "Her parents were lawyers.", "She was a witness in a trial."] },
      { q: "2. What does most of her work involve?", options: ["*reading documents", "giving speeches", "talking to journalists"] },
      { q: "3. What does she find most difficult?", options: ["*defending people the public has already judged", "long working hours", "talking to judges"] },
      { q: "4. What does she say her job is?", options: ["*to make sure the evidence is tested properly", "to decide who is guilty", "to win every case"] },
      { q: "5. What advice does she give young people?", options: ["*Read, write clearly and practice debating.", "Watch more TV dramas.", "Speak loudly in court."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Ms. Park says real legal work is like a TV drama.", false],
      ["She believes everyone deserves a fair trial.", true],
      ["She thinks guilt should be decided on social media.", false],
      ["Sometimes evidence that looked certain turned out to be wrong.", true],
      ["She says a loud voice is the most important skill.", false],
    ]),
  ]),

  section("Grammar check", [
    choose(
      "Choose the right answer.",
      "1. The door was open. Someone [*must have forgotten/can't have forgotten] to lock it.\n2. She [*can't have written/must have written] this — she doesn't speak English.\n3. Phones [*must be switched/must switch] off in court.\n4. The fire [*could have been prevented/could prevent] with an alarm.\n5. This is the café [*in which/in that] we met.\n6. I have three sisters, all of [*whom/them] are teachers.\n7. [*Having finished/Finished] her work, she went home.\n8. The man [*standing/stood] by the window is my boss.",
    ),
    drag(
      "Complete the story.",
      "Last week, the bike [which] I had left outside the library disappeared. The thief must [have] cut the lock. A woman [whose] window faces the street said she had seen a man in a red jacket. [Having] checked the CCTV, the police found him the next day. The bike, [found] in his garage, was returned to me. It should have [been] locked to something stronger! 🚲",
      ["that's", "who's", "being"],
    ),
  ]),

  section("Vocabulary check", [
    match("Match the words and the meanings.", [
      ["an alibi", "proof you were somewhere else"],
      ["a verdict", "the decision of a court"],
      ["a heist", "a big, planned robbery"],
      ["a tenant", "a person who rents a home"],
      ["homesick", "missing home"],
      ["pedestrianize", "close a street to cars"],
    ]),
    sort("Sort the words. 🧩", {
      "⚖️ crime and justice": ["a suspect", "a jury", "a fine", "a motive"],
      "🏙️ the city": ["a commuter", "rush hour", "a cycle lane", "urban sprawl"],
      "🌍 living abroad": ["settle in", "fit in", "customs", "bilingual"],
    }),
  ]),

  section("Writing: plan your report", [
    order(
      "Put the parts of a B2 First report in the right order.",
      [[
        "a title and an introduction: the aim of the report",
        "a heading and a section about the main problems",
        "a heading and a section with suggestions",
        "a heading and a recommendation: the most important change",
        "a short conclusion",
      ].join("\n")],
      "lines",
    ),
    box(
      "✍️ Project: a report",
      "**How to improve our neighborhood** — write a report (140–190 words) for your local council.\n\n**Use headings**, for example: *Introduction · Current problems · Suggestions · Recommendation*.\n\n**Useful language:** *The aim of this report is to… · Many residents, most of whom…, complain that… · A street in which… · Having spoken to local people, I… · I would strongly recommend…*\n\n**Style:** formal and clear — no contractions, no emojis.",
    ),
    tip("A report is the only B2 First text type with headings. Brainstorm together: two problems, two suggestions, one recommendation. Use ideas from 10.1 (ideal neighborhood) and 10.3 (happy cities)."),
  ]),

  section("Your result", [
    trueFalse("Check yourself. Can you do it? True or false? ✅", [
      ["I can make deductions about the past: must have, can't have, might have.", true],
      ["I can use the passive with modals: should have been, could be.", true],
      ["I can use relative clauses with prepositions, whose and most of which.", true],
      ["I can use participle clauses: Having lived…, Built in…, the man standing…", true],
      ["I can take part in a full formal debate.", true],
      ["I can write a report with headings.", true],
    ]),
    tip("This list is for reflection: if the student wants to say “false”, talk about it and plan review. Count the points from today's tasks together."),
  ]),

  homework(
    [
      choose(
        "Choose.",
        "1. He [*might have missed/must miss] the bus — I'm not sure.\n2. The case [*will be heard/will hear] next month.\n3. The man [*to whom/to who] I spoke was very helpful.\n4. We visited two cities, [*both of which/both of them] were beautiful.\n5. [*Not knowing/Not knew] what to say, she smiled.\n6. [*Opened/Opening] in 1924, the theater is the oldest in the city.",
      ),
      gaps(
        "Word formation.",
        "1. The [robbery] happened at midnight. (rob)\n2. The judge gave a fair [judgment/judgement]. (judge)\n3. The city needs more [affordable] housing. (afford)\n4. She has a very [international] background. (nation)\n5. The museum has excellent [security]. (secure)\n6. The [pollution] in winter is terrible. (pollute)",
      ),
      order("Make sentences.", [
        "She must have forgotten her keys.",
        "The thief should have been caught.",
        "This is the house in which I grew up.",
        "Having lived abroad, he speaks three languages.",
        "The woman standing by the door is my aunt.",
      ]),
    ],
    "Homework: Review",
  ),
  homework(
    [
      write("Project: write your report “How to improve our neighborhood” (140–190 words), with headings.", 140),
      record("Project (option): present your report as a 2-minute talk to the local council. 🎙️🏛️", 120),
    ],
    "Homework: Project",
  ),
]);
