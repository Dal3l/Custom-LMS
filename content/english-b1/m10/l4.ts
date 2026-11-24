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
  write,
} from "../../kit";

// 10.4 Revision 9–10 — points for every task, in the format of B1 Preliminary: Reading Parts 1, 3, 5 and 6, Listening Parts 2 and 3, Writing Part 1 (an email), Speaking Parts 1 and 4. Grammar: reported statements, questions and requests, reporting verbs; must / might / can't (present and past). Project: “A detective story”.
export default lesson("b1-10.4", "Revision 9–10", () => [
  section("Warm-up: Who said it?", [
    box(
      "Today you will…",
      "- check what you've learned in modules 9 and 10 ✅\n- try B1 Preliminary tasks for points 🎓\n- start your project: *A detective story* 🕵️",
    ),
    match("Who said it? Match the reported words and the characters. 🗣️", [
      ["She said she would open a second bakery.", "Asel"],
      ["He said he had been to space in 1961 and said “Let's go!”", "Yuri Gagarin"],
      ["He told everyone that it can't have been pirates.", "Kenji"],
      ["She told the cat it shouldn't eat chocolate!", "Laura"],
      ["He asked the professors if he could practice Korean every day.", "Daniyar"],
      ["Her boss told her the coffee at the café was terrible.", "Dana"],
    ]),
    text(
      "Talk to your teacher.",
      "- What's the most useful thing you've learned in modules 9 and 10?\n- Report one thing your teacher told you in the last few lessons. 😄\n- What do you think must have been the hardest part of these modules for you?",
    ),
    tip("Every task gives points. Don't help during the tasks; check after each part. Score guide: 85%+ excellent; 70–85% good — review weak topics in the warm-ups; under 70% — repeat the grammar sections of the weak lessons."),
  ]),

  section("Reading Part 1: Short messages", [
    quiz("Read the messages. What do they say? Choose the right answer.", [
      { q: "💬 Laura → Asel: “Mochi is fine! The vet said she must have eaten only a small piece. Thanks for the new cake!”", options: ["*The cat is OK after eating some cake.", "The cat needs an operation.", "Asel's cake was stolen again."] },
      { q: "📌 “The museum asks visitors not to touch the ancient objects. Photos are allowed without flash.”", options: ["*You can take photos, but without flash.", "Photos are not allowed at all.", "You can touch the objects."] },
      { q: "📧 “Mr. Park asked me to remind everyone that the meeting has moved to 3 p.m.”", options: ["*The meeting is now at 3 p.m.", "Mr. Park can't come to the meeting.", "The meeting is cancelled."] },
      { q: "💬 Leo → Dana: “Someone took my bike from outside the gym. It can't have been a mistake — I locked it!”", options: ["*Leo thinks his bike was stolen.", "Leo forgot where he left his bike.", "Leo lent his bike to someone."] },
      { q: "📌 “Lost: a blue phone with a mountain cover. If found, please call 701 233 4590.”", options: ["*Someone has lost a phone and wants it back.", "Someone found a phone.", "A shop is selling phones."] },
    ]),
  ]),

  section("Reading Part 3: A long text", [
    quiz(
      "Read the text and the questions. Choose the right answer.",
      [
        { q: "Why did Ruslan's team go out at night?", options: ["*A hiker's family reported that he hadn't come home.", "They were training.", "There was a storm warning."] },
        { q: "What clue helped them most?", options: ["*a message the hiker had sent at 4 p.m.", "footprints in the snow", "a witness at the bus stop"] },
        { q: "What did Ruslan think when he saw the broken branch?", options: ["*The hiker must have left the path there.", "An animal must have broken it.", "It can't have been important."] },
        { q: "How was the hiker when they found him?", options: ["*cold and tired, but not badly hurt", "seriously injured", "missing"] },
        { q: "What does Ruslan say at the end?", options: ["*Always tell someone where you're going.", "Never go hiking alone in summer.", "Rescuers don't need clues."] },
      ],
      {
        read: [
          "## 🔦 A night in the mountains",
          "At 9 p.m. last Saturday, Ruslan's mountain rescue team got a call. A young man's family said he had gone hiking alone and hadn't come home. His phone was switched off.",
          "\"The first thing we do is look for clues,\" Ruslan explains. \"His sister told us he had sent her a message at 4 p.m. with a photo of a waterfall. We knew that waterfall — so he must have been on the eastern path at that time.\"",
          "The team set off with torches. After two hours, Ruslan noticed a broken branch next to the path. \"It was fresh, so it can't have been broken long before. He must have left the path there — maybe to take a shortcut.\" They followed the slope down and heard a weak voice calling for help.",
          "The hiker had slipped and hurt his ankle, and his phone battery had died. He was cold and tired, but not badly hurt. \"He was lucky,\" says Ruslan. \"I know how he felt — the same thing happened to me two years ago. My advice is simple: always tell someone exactly where you're going, and take a power bank.\"",
        ].join("\n\n"),
      },
    ),
  ]),

  section("Reading Part 5: Choose the word", [
    choose(
      "Read the text and choose the best word for each gap.",
      "The mystery of the missing painting 🖼️\n\nLast month, a small painting disappeared from our town museum. The guard [*said/told/asked] he had heard nothing during the night. The police asked him [*if/that/what] the alarm had worked. He told them it [*had/has/was] been switched off for repairs. The thief must [*have/had/be] known about the repairs. A week later, a woman [*told/said/spoke] the police she had seen a man with a large package. The painting was found in his garage — he [*can't/mustn't/needn't] have planned it very well!",
    ),
  ]),

  section("Reading Part 6: One word", [
    gaps(
      "Read the message. Write ONE word in each gap.",
      "Hi Zarina!\n\nI loved your podcast about the Mary Celeste! My grandma asked me [if] I had listened to it — she's a big fan now! 😄 She said she [had] never heard of the ship before.\n\nI think Kenji is right: it can't [have] been pirates. The crew must have [been] very scared. My dad told me [to] read a book about it — he says it's brilliant.\n\nCould you do a podcast about the Nazca Lines next? They [must] be the strangest drawings in the world!\n\nMadina",
    ),
  ]),

  section("Grammar check", [
    choose(
      "Choose the right answer.",
      "1. “I'm busy.” → She said she [*was/is been] busy.\n2. He [*told/said] me he would call.\n3. “Where do you live?” → She asked me where [*I lived/did I live].\n4. “Don't be late!” → He told us [*not to be/don't be] late.\n5. “I'll help you.” → She [*offered/refused] to help me.\n6. The lights are on. They [*must/can't] be at home.\n7. He [*can't have/must have] eaten it — he hates fish!\n8. The ground is wet. It [*must have/might] rained.",
    ),
    gaps(
      "Complete with the right form.",
      "1. “I can swim.” → He said he [could] swim.\n2. “Have you finished?” → She asked [if I had] finished.\n3. “Please wait.” → They asked us [to wait].\n4. I'm not sure. She [might] be at the gym. (possible, now)\n5. He looks very happy. He [must have] passed the exam. (almost sure, past)\n6. She [can't have] seen me — I was hiding! (almost sure not, past)",
    ),
    drag(
      "Complete the report.",
      "The police [asked] the witness what she had seen. She [told] them she had seen a man near the bank. She said he [was] wearing a red jacket. The detective thought the thief [must] have planned everything. But he [can't] have known about the camera — it was hidden! The police [told] the public not to worry.",
      ["said", "says", "mustn't"],
    ),
    order("Make sentences.", [
      "She told me she was tired.",
      "He asked me where I lived.",
      "It must have rained last night.",
      "They can't be at home.",
      "The doctor advised me to rest.",
    ]),
  ]),

  section("Vocabulary check", [
    match("Match the words and the meanings.", [
      ["gossip", "talk about other people's private lives"],
      ["whisper", "speak very quietly"],
      ["a witness", "a person who saw what happened"],
      ["an alibi", "proof you were somewhere else"],
      ["a clue", "information that helps solve a mystery"],
      ["ancient", "very, very old"],
      ["misquote", "repeat someone's words wrongly"],
      ["decode", "understand a secret code"],
    ]),
    sort("Sort the words. 🧩", {
      "🗣️ reporting verbs": ["advise", "refuse", "promise", "warn"],
      "🕵️ investigation": ["evidence", "suspect", "fingerprints", "footprints"],
      "🗿 history": ["archaeologist", "theory", "remains", "legend"],
    }),
    quiz("Choose the right word.", [
      { q: "Can you ___ on a message to your brother?", options: ["*pass", "give", "take"] },
      { q: "She ___ me not to swim there — it's dangerous.", options: ["*warned", "offered", "promised"] },
      { q: "The ship was found ___, with nobody on board.", options: ["*abandoned", "ancient", "shiny"] },
      { q: "That cloud looks ___ a rabbit!", options: ["*like", "as", "same"] },
    ]),
  ]),

  section("Listening Part 2: Six short conversations", [
    tip("Like B1 Preliminary Listening Part 2: six short conversations about people's opinions and feelings."),
    ...listening(
      "Listen to six short conversations. Choose the right answer for each one.",
      "**1.**\n\n**Woman:** How was the detective film?\n\n**Man:** The story was clever, but the ending was disappointing. I'd guessed who the thief was after ten minutes!\n\n**2.**\n\n**Madina:** Did you like Zarina's podcast?\n\n**Leo:** Loved it! I'd never heard of the Mary Celeste before. Now I want to read everything about it.\n\n**3.**\n\n**Man:** You look worried. What's wrong?\n\n**Dana:** My boss asked me to present the book cover to the client tomorrow. I've never presented to a client before!\n\n**4.**\n\n**Woman:** Did you hear the rumor about the office closing?\n\n**Kenji:** I did, but I don't believe it. The manager told us last week that the company was doing really well.\n\n**5.**\n\n**Saule:** Daniyar, you're smiling a lot today.\n\n**Daniyar:** I got an email from the university in Seoul, Grandma! They said I've been shortlisted!\n\n**6.**\n\n**Man:** What did you think of the museum?\n\n**Woman:** The ancient objects were amazing, but there were far too many people. I could hardly see anything.",
    ),
    quiz("Listen and choose.", [
      { q: "1. What did the man think of the film's ending?", options: ["*It was disappointing.", "It was surprising.", "It was too long."] },
      { q: "2. How does Leo feel about the podcast?", options: ["*He loved it and wants to learn more.", "He found it boring.", "He had heard it all before."] },
      { q: "3. Why is Dana worried?", options: ["*She has to present to a client for the first time.", "She lost her job.", "She's late for work."] },
      { q: "4. What does Kenji think about the rumor?", options: ["*He doesn't believe it.", "He's sure it's true.", "He started it."] },
      { q: "5. Why is Daniyar happy?", options: ["*He's been shortlisted by the university.", "He passed his driving test.", "He's going on holiday."] },
      { q: "6. What was the problem at the museum?", options: ["*It was too crowded.", "The objects were boring.", "It was closed."] },
    ]),
  ]),

  section("Listening Part 3: Complete the notes", [
    tip("Like B1 Preliminary Listening Part 3: one speaker, complete the notes with one or two words or a number."),
    ...listening(
      "Listen to a guide at a museum. Complete the notes.",
      "**Guide:** Welcome to the Mystery Museum! Today's tour lasts about ninety minutes. We'll start in the Ancient Hall, where you can see objects that are more than three thousand years old. Please remember that you aren't allowed to touch anything, and photos can only be taken without flash. In the second room, you'll see a copy of the famous Voynich manuscript — the original is in the USA. Then, at eleven thirty, there's a special show called \"Be a Detective\", where children and adults can solve a crime using real clues. The museum café is on the ground floor, next to the gift shop. And if you lose anything, please go to the information desk at the main entrance. Enjoy your visit!",
    ),
    gaps(
      "Complete the notes.",
      "1. Length of the tour: about [90/ninety] minutes\n2. Objects in the Ancient Hall: more than [3,000/3000/three thousand] years old\n3. Photos: only without [flash]\n4. In the second room: a copy of the Voynich [manuscript]\n5. The detective show starts at [11:30/eleven thirty]\n6. Lost something? Go to the information [desk]",
    ),
  ]),

  section("Writing Part 1: An email", [
    write(
      "Read the email and the notes. Write your answer (100 words).",
      100,
      {
        read: "📧 **From: Leo**\n\nHi! Guess what — someone took my bike from outside the gym yesterday! 😠 *(← Say how you feel about it)*\n\nThe police asked me lots of questions, but I don't think they'll find it. *(← Give your opinion)*\n\nWhat do you think I should do now? *(← Give advice)*\n\nAlso, do you want to come to the Mystery Museum with me on Saturday? *(← Answer and suggest a time)*\n\nLeo",
      },
    ),
  ]),

  section("Speaking Parts 1 and 4", [
    text(
      "Part 1: Questions about you 🗣️",
      "Answer your teacher's questions with 2–3 sentences:\n\n- Who do you usually tell your news to first? What did you tell them last?\n- What's the best advice someone has given you?\n- Do you like mysteries — in books, films or real life?\n- What do you think your best friend must be doing right now?",
    ),
    text(
      "Part 4: Your opinion",
      "- Why do people love gossip so much? Is it always bad?\n- Should we believe everything famous people say? Why / why not?\n- Will technology solve all the world's mysteries one day? 🔍",
    ),
    tip("Part 1: about 2 minutes. Part 4: about 2–3 minutes; ask *Why?* and *Can you give an example?* Give feedback on reported speech and modals of deduction."),
  ]),

  section("Your result and the project", [
    trueFalse("Check yourself. Can you do it? True or false? ✅", [
      ["I can report what someone said: She said she was…", true],
      ["I can report questions: He asked me where I lived.", true],
      ["I can take and pass on a phone message.", true],
      ["I can guess about now: It must be… It can't be…", true],
      ["I can guess about the past: It must have… It might have…", true],
    ]),
    tip("This list is for reflection: if the student wants to say “false”, talk about it and plan review. Count the points from today's tasks together."),
    box(
      "🕵️ Project: A detective story",
      "Write (or record) a short detective story.\n\n**Include:**\n- a mystery: something disappears or something strange happens\n- 2–3 witnesses: report what they said (*She told the detective that…*)\n- clues and deductions (*He must have… She can't have…*)\n- a surprising solution! 🎉\n\n📝 Written: 150+ words · 🎧 or a 2–3 minute audio story",
    ),
  ]),

  homework(
    [
      gaps(
        "Review: complete with one word.",
        "1. She [told] me she was tired.\n2. He asked me [if] I liked jazz.\n3. The teacher told us [not] to talk.\n4. It must [have] rained last night.\n5. That [can't] be true — it's impossible!\n6. She [advised] me to see a doctor.",
      ),
      choose(
        "Choose.",
        "1. “I'm hungry.” → He said he [*was/is being] hungry.\n2. “Can you help?” → She asked if I [*could/can] help.\n3. “Please sit down.” → He asked us [*to sit/sit] down.\n4. The door is open. Someone [*must have/can't have] left it open.\n5. He [*might/must] be at home — I'm not sure.\n6. She [*can't have/must have] written it — she was in hospital!",
      ),
      trueFalse("Correct or not?", [
        ["She said me she was tired.", false],
        ["He asked me where did I live.", false],
        ["They told us not to worry.", true],
        ["It must have been a mistake.", true],
        ["He can't be at work — it's Sunday.", true],
        ["She mustn't be the thief — she was with me.", false],
      ]),
    ],
    "Homework: Review",
  ),
  homework(
    [
      write("Project: A detective story (150+ words). Include a mystery, 2–3 witnesses (reported speech), clues and deductions, and a surprising solution.", 150),
      record("Project (option): Record your detective story as an audio story (2–3 minutes). 🎧", 180),
    ],
    "Homework: Project",
  ),
]);
