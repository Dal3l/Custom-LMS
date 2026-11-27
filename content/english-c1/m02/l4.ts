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
  write,
} from "../../kit";

// 2.4 Revision 1–2 — points for every task, in the format of Cambridge C1 Advanced: Use of English Part 1 (multiple-choice cloze) and Part 2 (open cloze), Reading Part 5 (a long text, ~730 words, multiple choice), Listening Part 1 (three short extracts, two questions each, ~3:00); grammar and vocabulary of modules 1–2; Speaking Part 1. Project: an essay "Should we always play it safe?" (220–260 words).
// Characters: Madina writes about her grandmother Saule (in English B2, Saule said her only regret was not traveling when she was young).
// Warm-up format: a quiz about modules 1–2 — after sort + vote in 2.3.
export default lesson("c1-2.4", "Revision 1–2", () => [
  section("Warm-up: How much do you remember?", [
    box(
      "Today you will…",
      "- check what you've learned in modules 1 and 2 ✅\n- try real **C1 Advanced** task types for points 🎓\n- plan your project essay: *Should we always play it safe?* ✍️",
    ),
    quiz("Modules 1–2: how much do you remember? 🧠", [
      { q: "What is the “end of history illusion”?", options: ["*We expect to change much less in the future than we have changed in the past.", "We forget history quickly.", "We think the world will end soon."] },
      { q: "In Loftus and Palmer's study, what did the word “smashed” change?", options: ["*people's estimates of speed and their memory of broken glass", "the color of the cars", "the number of people in the film"] },
      { q: "What is loss aversion?", options: ["*Losses feel stronger than equal gains.", "We hate losing games.", "We avoid buying things."] },
      { q: "Why did Ruslan turn back two hundred meters from the summit?", options: ["*His time limit had passed and the weather was changing.", "He was injured.", "His group refused to continue."] },
      { q: "Who wins an Oxford-style debate?", options: ["*the side that changes more minds", "the side with more votes at the end", "the side that speaks longest"] },
    ]),
    text(
      "Talk to your teacher.",
      "- Which lesson of modules 1–2 did you find most interesting? Why?\n- Which grammar point still feels difficult: perfect forms, habits, inversion or the unreal past?\n- Tell me one word or phrase from the modules that you've already used outside our lessons. 😊",
    ),
    tip("Every task gives points. Don't help during the tasks; check after each part and explain the exam tip. Score guide: 80%+ excellent; 65–80% good — review the weak topics in the next warm-ups; under 65% — go back to the grammar sections of modules 1–2."),
  ]),

  section("Use of English Part 1: Multiple-choice cloze", [
    tip("Exam tip: Part 1 tests collocations, fixed phrases, phrasal verbs and fine differences in meaning. Read the whole sentence: often the words AROUND the gap decide the answer (*take something FOR granted, AT stake*)."),
    choose(
      "Read the text and choose the best word for each gap.",
      "The comfort trap 🛋️\n\nMost of us like to think that we [*weigh/count/measure/judge] up the pros and cons carefully before making important decisions. In reality, we are strongly [*biased/leaned/bent/tilted] towards what we already have. Psychologists have long [*argued/claimed/stated/told] that losses hurt more than equal gains, and this simple fact goes a long way towards explaining why so many people stay in jobs they no longer enjoy. When a lot is at [*stake/risk/danger/bet], we tend to play it [*safe/sure/secure/certain], even when the odds are in our [*favor/side/support/advantage]. Of course, caution has its place; nobody wants to take [*unnecessary/needless/pointless/useless] risks with their health or savings. But it is worth remembering that doing nothing is also a choice — and one that we may come to [*regret/repent/mourn/apologize] far more deeply in the long run.",
    ),
  ]),

  section("Use of English Part 2: Open cloze", [
    tip("Exam tip: Part 2 tests grammar words — auxiliaries, prepositions, pronouns, linkers, and parts of fixed phrases (*as if, had it not been, for the sake OF*). Read the whole text first; check that your word fits both the grammar and the meaning."),
    gaps(
      "Read the text and write ONE word in each gap.",
      "A memory that wasn't mine 🧠\n\nFor years, I [had] been absolutely certain that I had fallen into a river at the age of six. I could describe the cold water and the red jacket I [was] wearing. It was only when my mother showed me an old photo album [that] I discovered the truth: it was my cousin who had fallen in. I had heard the story [so] many times that I had made it my own. [Had] it not been for that album, I would still believe it today. Since then, I have tried to hold my memories a little more lightly. After [all], our brains are storytellers, not cameras, and it's high time I accepted [that] some of my favorite stories might not be entirely true. [As] for my cousin, he still hasn't forgiven me for stealing his adventure.",
    ),
  ]),

  section("Use of English Part 3: Word formation", [
    tip("Exam tip: at C1, you often need a prefix AND a suffix (*un-…-able, ir-…-ible, over-, mis-*) or a change inside the word (*long → length*). Decide the part of speech first, then check whether the meaning is negative."),
    gaps(
      "Read the text. Use the word in brackets to form a word that fits the gap.",
      "Why we misremember 🧩\n\nMost people are [surprisingly] confident about their memories. (surprise) Yet research has repeatedly shown that eyewitness accounts can be highly [unreliable]. (rely) The problem is not [dishonesty] — people genuinely believe what they say. (honest) Rather, every act of remembering involves a [reconstruction] of the past. (construct) Small details are [unintentionally] changed to fit what we expect. (intention) Even our most vivid memories can be [inaccurate]. (accurate) Psychologists stress that this is not a [weakness] of memory but part of how it works. (weak) Its [flexibility] allows us to learn and to imagine the future. (flexible)",
    ),
  ]),

  section("Reading Part 5: A long text", [
    tip("Exam tip: the questions follow the order of the text. Questions often test the writer's attitude, the purpose of a paragraph, or the meaning of a phrase. Find the right paragraph, read it carefully, and check why the other options are wrong. 12 minutes."),
    quiz(
      "Read the article. Choose the best answer.",
      [
        { q: "1. In the first paragraph, Madina suggests that her grandmother's announcement was…", options: ["*completely unexpected by the family", "something everyone had predicted", "a joke that nobody believed", "a decision the family had made together"] },
        { q: "2. What does Madina mean by “a regret she had been polishing for fifty years”?", options: ["*Saule had thought about this regret for a very long time.", "Saule had cleaned the same object for years.", "Saule regretted cleaning so much.", "Saule had tried to forget her regret."] },
        { q: "3. How did the family first react to Saule's plan?", options: ["*They tried to talk her out of it.", "They offered to go with her.", "They laughed and ignored it.", "They were delighted."] },
        { q: "4. Why does Madina mention the list on the fridge?", options: ["*to show how carefully Saule had prepared", "to show that Saule was forgetful", "to criticize Saule's planning", "to explain why the trip was postponed"] },
        { q: "5. What did Saule learn on the trip, according to her postcards?", options: ["*that the world was kinder than she had feared", "that travel was too tiring for her", "that she should have stayed at home", "that young people travel badly"] },
        { q: "6. What is Madina's main point in the final paragraph?", options: ["*Her grandmother's trip changed the way she thinks about her own choices.", "Everyone should travel when they are old.", "Her grandmother will never travel again.", "It's better to travel when you are young."] },
      ],
      {
        read: [
          "## ✈️ My grandmother's late adventure",
          "*by Madina, a designer in Almaty*",
          "My grandmother Saule has always been the calm center of our family. She is the person who remembers everyone's birthday, who knows which cousin is not speaking to which aunt, and who has made the same Sunday dumplings for as long as I can remember. So when, at a family dinner last spring, she put down her spoon and announced that she was going to Italy — alone, for three weeks — the silence that followed was so complete that you could hear the fridge.",
          "Nobody had seen it coming. Yet, looking back, the signs had been there for years. Whenever someone came back from a trip, she would ask for every detail: the food, the buildings, the way people greeted each other in the street. And she had told me more than once that her only real regret was that she had never traveled when she was young. She had always been waiting for the right moment: when the children were older, when there was more money, when my grandfather retired. Then my grandfather was ill, and then he was gone, and the right moment never arrived. It was, I realize now, a regret she had been polishing for fifty years — turning it over, examining it, never quite putting it away.",
          "Our reaction was not our proudest moment. My father, who is usually the most reasonable person I know, spoke to her as though she were a teenager planning to run away from home. My aunt sent articles about pickpockets. Even I, who had left a safe job offer to open my own studio, heard myself asking whether it might be wiser to go on an organized tour, \"just to be safe\". She listened to all of us very politely. Then she said, \"Had I listened to sensible advice my whole life, I would never have married your grandfather,\" and went back to her dumplings.",
          "What we didn't know was how carefully she had prepared. A few days later, I noticed a list on her fridge, written in her small, neat handwriting. It included the address of every hotel, the times of every train, the phone number of the embassy, a list of her medicines in Italian, and — underlined twice — \"Ask Madina to show me the maps on the phone.\" She had been planning for months. She had simply not told anyone until there was nothing left for us to argue about.",
          "She left in September. For three weeks, the family group chat was busier than it had been for years. She sent photographs of churches, plates of pasta and, to our great surprise, one of herself at a cooking class in Bologna, wearing an apron and laughing with a group of Australian students. She also sent postcards — real ones, by post — which arrived long after she had come home. In one of them, she wrote: \"I was afraid that the world would be dangerous and unfriendly. It is mostly full of people who want to help an old lady find the right platform.\"",
          "Not everything went smoothly, of course. In Florence, she got on the wrong train and ended up in a small town she had never heard of. Instead of panicking, she had lunch there, decided it was the most beautiful place she had seen, and caught the next train two hours later. \"I'd rather get lost than never go anywhere,\" she told me on the phone.",
          "She came back thinner, browner and completely unrepentant. She had lost one umbrella and gained a lifelong friendship with a retired teacher from Naples, with whom she now exchanges voice messages in a mixture of English, Russian and enthusiastic hand gestures. When my father asked whether she would do it again, she said, \"Of course not. Next time I'm going to Japan.\"",
          "I have thought about her trip a great deal since then. It has made me wonder how many of my own careful decisions are really sensible, and how many are simply ways of waiting for a right moment that may never come. My grandmother didn't take a reckless risk; she took a calculated one, decades later than she should have. But she took it. And every time I hesitate now, I hear her voice, very calm, over a plate of dumplings: \"Should you wait for the perfect moment, my dear, you will be waiting a long time.\" 🥟",
        ].join("\n\n"),
      },
    ),
    gaps(
      "Find words and phrases in the article.",
      "1. said something publicly and officially: [announced]\n2. based on good judgment, sensible: [reasonable]\n3. thieves who steal from pockets and bags: [pickpockets]\n4. not sorry at all: [unrepentant]\n5. showing a lot of interest and excitement: [enthusiastic]\n6. stop for a moment because you're not sure: [hesitate]",
    ),
  ]),

  section("Listening Part 1: Three short extracts", [
    tip("Exam tip: you hear three different extracts with two speakers each. There are two questions for each extract. Read the questions before you listen — they usually test opinion, attitude, purpose or agreement. In the exam you hear each extract twice."),
    ...listening(
      "Listen to three extracts. Choose the right answer for each question.",
      "**1.**\n\n**Woman:** Did you finish that book about memory I lent you?\n\n**Man:** I did, and to be honest, it's made me slightly uneasy. I'd always assumed my childhood memories were basically accurate. Now I'm not sure about any of them.\n\n**Woman:** I found it reassuring, actually. It explains why my brother and I remember every family holiday differently. Neither of us is lying — we've just been editing.\n\n**Man:** That's a generous way of putting it. My problem is that I'm a teacher. I spend all day telling students to trust evidence, and now I discover that my own memory is unreliable evidence.\n\n**Woman:** But that's exactly what makes it useful. You could use the book in class. Get them to write down a memory and then check it with their parents.\n\n**Man:** Hmm. Suppose they discover something their parents would rather they didn't know?\n\n**Woman:** Then you'll have a very lively parents' evening.\n\n**Man:** Exactly what I'm afraid of. I think I'll start with something safer, like their first day at school.\n\n**Woman:** Coward.\n\n**2.**\n\n**Student A:** So, have you decided about the gap year?\n\n**Student B:** I keep changing my mind. Part of me thinks it's high time I did something unpredictable. I've done exactly what was expected of me since I was twelve.\n\n**Student A:** And the other part?\n\n**Student B:** The other part keeps doing the sums. Were I to take a year off, I'd lose my place on the course and have to apply again. My parents act as if I were throwing my life away.\n\n**Student A:** For what it's worth, I don't think a year is very long. Had I taken one, I'd probably have chosen a different degree.\n\n**Student B:** That's what worries me. What if I come back and realize I don't want this degree at all?\n\n**Student A:** Then surely it's better to find out now than in five years.\n\n**Student B:** I suppose so. It's just that everyone else seems so sure about what they want.\n\n**Student A:** Seems is the key word. Most of them are just better at pretending than you are.\n\n**Student B:** That's oddly comforting. Maybe I'll talk to my tutor about deferring the place instead of giving it up.\n\n**3.**\n\n**Guide:** So, how did you find the climb today? You were very quiet at the top.\n\n**Tourist 2:** I was trying not to look down! Honestly, I didn't expect to be so frightened. I'm usually quite calm.\n\n**Guide:** Fear isn't a bad thing up there. It keeps you careful. The people who worry me are the ones who feel nothing at all.\n\n**Tourist 2:** That's comforting, I suppose. Though I'd rather have been a bit less careful and a bit more relaxed.\n\n**Guide:** It gets easier. The first time is always the worst, because your brain doesn't know what to expect. By the third climb, you'll have stopped noticing half the things that scared you today.\n\n**Tourist 2:** Third climb? You're very optimistic.\n\n**Tourist 2:** Did you feel like this when you started?\n\n**Guide:** Worse. On my first climb, I held the rope so tightly that my hands hurt for two days. My instructor kept saying, \"Relax your shoulders,\" as if that were the easiest thing in the world.\n\n**Tourist 2:** And now?\n\n**Guide:** Now I'm the one saying it. I've been doing this for fifteen years. Everybody says what you said after the first one. Most of them come back.",
    ),
    quiz("Listen and choose.", [
      { q: "Extract 1. How does the man feel after reading the book?", options: ["*uncertain about his own memories", "bored by the topic", "angry with the writer"] },
      { q: "Extract 1. What does the woman suggest?", options: ["*using the book with his students", "returning the book", "asking his brother about their holidays"] },
      { q: "Extract 2. Why is Student B unsure about the gap year?", options: ["*It might mean losing a place on the course.", "Their friends don't want to go.", "They can't afford it."] },
      { q: "Extract 2. What is Student A's opinion?", options: ["*It's better to find out early if the degree is wrong.", "A gap year is a waste of time.", "Student B should listen to their parents."] },
      { q: "Extract 3. What does the guide say about fear?", options: ["*It helps people stay careful.", "It is always dangerous.", "It disappears after the first climb."] },
      { q: "Extract 3. What does the guide predict?", options: ["*The tourist will probably climb again.", "The tourist will never climb again.", "The next climb will be harder."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Extract 1: The woman and her brother remember family holidays in the same way.", false],
      ["Extract 1: The man is a teacher.", true],
      ["Extract 2: Student B has always done what was expected.", true],
      ["Extract 2: Student A took a gap year.", false],
      ["Extract 3: The tourist expected to feel frightened.", false],
      ["Extract 3: The guide has been working for fifteen years.", true],
    ]),
    gaps(
      "Complete the sentences from the extracts.",
      "1. I'd always [assumed] my childhood memories were basically accurate.\n2. Suppose they discover something their parents would [rather] they didn't know?\n3. It's high time I [did] something unpredictable.\n4. [Were] I to take a year off, I'd lose my place on the course.\n5. [Had] I taken one, I'd probably have chosen a different degree.\n6. By the third climb, you'll have [stopped] noticing half the things that scared you today.",
    ),
  ]),

  section("Grammar check", [
    choose(
      "Choose the correct option.",
      "1. By the time she retires, she [*will have been teaching/will teach] for forty years.\n2. [*Having lived/Living] in Seoul for years, he found Almaty very quiet.\n3. My flatmate [*will/would] leave his shoes in the hall — it drives me mad!\n4. When we were kids, we [*would/used] spend every summer at Grandma's.\n5. [*Had I known/If I knew] you were ill, I would have visited you.\n6. [*Should you/Would you] need anything, just call reception.\n7. It's high time we [*left/leave] — it's nearly midnight.\n8. I'd rather you [*didn't mention/don't mention] it to anyone.",
    ),
    gaps(
      "Use of English Part 4: complete the second sentence so that it means the same as the first. Use the word in brackets.",
      "1. I'm sure she has forgotten our meeting. (must) → She [must have forgotten] our meeting.\n2. If you have any problems, call me. (should) → [Should you have] any problems, call me.\n3. Without your help, I would have failed. (for) → Had it [not been for your help/not been for you], I would have failed.\n4. You really should start looking for a job now. (time) → It's [time you started looking/high time you started looking] for a job.\n5. My brother is always borrowing my things, which annoys me. (forever) → My brother [is forever borrowing/'s forever borrowing] my things.\n6. I'd prefer you not to smoke here. (rather) → I'd [rather you didn't smoke] here.",
    ),
    trueFalse("Correct or not?", [
      ["Having finished the report, she went home.", true],
      ["Hadn't I missed the bus, I'd have been on time.", false],
      ["I would have a dog when I was a child.", false],
      ["Were it not for the map, we'd be lost.", true],
      ["He talks as if he knew everything.", true],
      ["It's time we go.", false],
    ]),
  ]),

  section("Vocabulary check", [
    match("Match the words and the meanings.", [
      ["in hindsight", "looking back now"],
      ["meticulous", "careful about every detail"],
      ["hazy", "not clear (about a memory)"],
      ["build rapport", "create a good relationship"],
      ["a calculated risk", "a risk you've thought about carefully"],
      ["foolhardy", "taking stupid risks"],
      ["outweigh", "be more important than"],
      ["take the plunge", "finally do something risky"],
    ]),
    quiz("Choose the right word.", [
      { q: "We hit it ___ immediately and talked all night.", options: ["*off", "up", "on"] },
      { q: "His name is on the ___ of my tongue.", options: ["*tip", "end", "edge"] },
      { q: "We caught the train by the skin of our ___.", options: ["*teeth", "nose", "hands"] },
      { q: "After a few months abroad, she started to find her ___.", options: ["*feet", "way", "place"] },
    ]),
    sort("Which module? Sort the words and phrases. 🧩", {
      "🪞 Module 1: who we are": ["a sense of belonging", "set in your ways", "self-effacing", "ring a bell", "break the ice"],
      "🎲 Module 2: risk and reward": ["push your luck", "a safety net", "a close shave", "throw caution to the wind", "a slippery slope"],
    }),
  ]),

  section("Speaking Part 1: Questions about you", [
    text(
      "Answer your teacher's questions 🗣️",
      "Answer in 3–4 sentences each — give reasons and examples.\n\n- How have you changed in the last five years?\n- What kind of habits do you find hardest to change?\n- What's your earliest memory? How sure are you that it's accurate?\n- Would you describe yourself as someone who takes risks?\n- What's a decision you're glad you made — or wish you hadn't?",
    ),
    tip("About 3 minutes. In the exam, Part 1 is short and personal; good answers are extended naturally (*Actually… / To be honest… / I'd say…*) without becoming a speech. Feedback: range of grammar from modules 1–2, and natural extension."),
  ]),

  section("Writing: plan your essay", [
    order(
      "Put the parts of a C1 essay in the right order.",
      [[
        "Introduction: present the topic and why it matters, and say what you will discuss",
        "First point: the main argument for one side, with an example",
        "Second point: the main argument for the other side, with an example",
        "Evaluation: which arguments are stronger, and why",
        "Conclusion: your clear opinion, with a final thought for the reader",
      ].join("\n")],
      "lines",
    ),
    tip("Brainstorm the project together: 3 minutes for ideas on both sides, then the student chooses examples (from the modules: Asel, Ruslan, Kenji, Honnold, Saule — or from life). Remind them of the C1 essay length: 220–260 words, formal register, no contractions."),
  ]),

  section("Your result and the project", [
    trueFalse("Check yourself. Can you do it? True or false? ✅", [
      ["I can look back from any point in time with perfect forms.", true],
      ["I can describe habits and typical behavior, including annoying ones.", true],
      ["I can start, continue and end a networking conversation politely.", true],
      ["I can use conditionals without if: Had I known… Should you need…", true],
      ["I can use the unreal past: It's high time… I'd rather you… as if…", true],
      ["I can take part in an Oxford-style debate and handle Points of Information.", true],
    ]),
    tip("This list is for reflection: if the student wants to say “false”, talk about it and plan review. Count the points from today's tasks together."),
    box(
      "✍️ Project: Should we always play it safe?",
      "Write an **essay** (220–260 words) for your teacher.\n\n**Include:**\n- arguments on both sides, with examples\n- at least two conditionals without *if* (*Had…, Were it not for…, Should…*)\n- the unreal past (*It's high time…, I'd rather…, as if…*)\n- risk vocabulary from module 2\n- a clear conclusion with your own opinion\n\n🎧 Option: record it as a 3-minute talk.",
    ),
  ]),

  homework(
    [
      choose(
        "Choose.",
        "1. By next month, I [*will have saved/will save] enough for the trip.\n2. He [*keeps/tends] forgetting his keys.\n3. [*Had we not/Hadn't we] left early, we'd have missed the plane.\n4. Suppose you [*were/are] offered a job abroad — would you take it?\n5. Do you [*recall/remind] where we parked?\n6. It's about time you [*apologized/apologize].",
      ),
      gaps(
        "Word formation. Complete with the right form of the word in brackets.",
        "1. Her [stubbornness] helped her through the first difficult year. (stubborn)\n2. It was a [risky] decision, but it paid off. (risk)\n3. Memory is less [reliable] than we think. (rely)\n4. The [unpredictability] of the weather makes climbing dangerous. (predict)\n5. She spoke with real [enthusiasm] about her trip. (enthusiastic)\n6. The rescue was a remarkable [achievement]. (achieve)",
      ),
      order("Make sentences.", [
        "Had I known the truth, I would have told you.",
        "It's high time we talked about it.",
        "She's forever losing her phone.",
        "By then I'll have been living here for ten years.",
        "I'd rather you didn't tell anyone.",
      ]),
    ],
    "Homework: Review",
  ),
  homework(
    [
      write("Project: write your essay “Should we always play it safe?” (220–260 words).", 220),
      record("Project (option): record your essay as a 3-minute talk — don't read it word for word. 🎧", 180),
    ],
    "Homework: Project",
  ),
]);
