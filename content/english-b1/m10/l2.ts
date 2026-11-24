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

// 10.2 What must have happened? — G: modals of deduction about the past: must have / might have / could have / can't have + 3rd form (first steps). V: incidents and investigations (evidence, a suspect, a witness, footprints…). S: solve a mystery. Main format: lateral-thinking puzzles + a TED-Ed video (Ötzi, the 5,300-year-old iceman) + a listening (the case of the missing birthday cake, ~1 min) + a detective game. Video at home.
// Facts checked (Ötzi): found in 1991 by hikers in the Alps near the Austria–Italy border; about 5,300 years old; an arrowhead in his shoulder found in 2001; now in a museum in Bolzano, Italy.
export default lesson("b1-10.2", "What must have happened?", () => [
  section("Warm-up: Lateral thinking", [
    box(
      "Today you will…",
      "- solve mysteries about the past 🕵️\n- use *must have, might have, can't have*: *He **must have** fallen.* ⏪\n- investigate the case of the missing cake 🎂",
    ),
    text(
      "Puzzles: What happened? 🧩",
      "Your teacher reads a strange situation. Ask Yes / No questions to find out what happened!\n\n1. 🏢 A man lives on the 10th floor. Every morning he takes the lift down. In the evening, he takes the lift to the 7th floor and walks up — except on rainy days, when he goes straight to the 10th. Why?\n\n2. 🍹 A man walks into a café and asks for a glass of water. The waiter suddenly shouts “BOO!” very loudly. The man says “Thank you!” and leaves happily. Why?\n\n3. 🐠 Romeo and Juliet are found on the floor. There's water and broken glass around them. Nobody is arrested. What happened?",
    ),
    text(
      "Talk to your teacher.",
      "- Do you like puzzles and mysteries? Which kind — riddles, detective films, escape rooms? 🔐\n- Have you ever come home and found something strange — and had to work out what had happened?",
    ),
    tip("Answers: 1) He's short — he can only reach the button for floor 7, but on rainy days he has an umbrella to press 10. 2) He had hiccups; the shock stopped them. 3) Romeo and Juliet are goldfish — the bowl fell and broke. 🐠 While the student guesses, model past deduction: *He must have… They can't have…*"),
  ]),

  section("Vocabulary: Investigations", [
    words("Investigations", [
      ["evidence", "🧾 facts or things that show what happened"],
      ["a suspect", "🕴️ a person who might have done something wrong"],
      ["a witness", "👀 a person who saw what happened"],
      ["footprints", "👣 marks left by feet"],
      ["fingerprints", "🖐️ marks left by fingers"],
      ["investigate", "🔍 try to find out the truth about something"],
      ["solve (a mystery / a case)", "✅ find the answer"],
      ["an alibi", "🗓️ proof that you were somewhere else"],
      ["a crumb", "🍰 a very small piece of bread or cake"],
      ["disappear — vanish", "💨 stop being seen"],
      ["break in", "🚪💥 enter a building by force", "Someone broke in last night."],
      ["get away with (something)", "😏 do something wrong and not be punished"],
    ]),
    match("Match.", [
      ["find", "fingerprints"],
      ["solve", "the case"],
      ["have", "an alibi"],
      ["follow", "the footprints"],
      ["interview", "a witness"],
      ["collect", "evidence"],
    ]),
    gaps(
      "Complete with a word from the list above.",
      "1. The police are [investigating] the robbery. 🔍\n2. There were muddy [footprints] all over the kitchen floor. 👣\n3. A [witness] saw a man in a red jacket at 10 p.m.\n4. He can't be the thief — he has an [alibi]: he was at the cinema.\n5. The detective finally [solved] the mystery. ✅\n6. There were cake [crumbs] on the dog's nose! 🐶🍰\n7. Someone broke [in] through the back window.\n8. The thief thought he could get [away] with it, but the police caught him.",
    ),
  ]),

  section("Video: A 5,300-year-old mystery", [
    tip("TED-Ed, about 5 minutes. In 1991, hikers found a frozen body in the Alps — it was 5,300 years old! Before watching: *What can scientists learn from a body so old?* Pause before the end: *What do you think happened to him?*"),
    video("Watch: A 5,300-year-old murder mystery — TED-Ed.", "mRa0Gi_mRjs"),
    quiz("After the video: what do you remember?", [
      { q: "Where was Ötzi found?", options: ["*in the Alps, in the ice", "in a desert", "in the sea"] },
      { q: "How old is he?", options: ["*about 5,300 years", "about 530 years", "about 53,000 years"] },
      { q: "What did scientists find in his shoulder?", options: ["*an arrowhead", "a stone", "a coin"] },
    ]),
    text(
      "After the video: talk to your teacher.",
      "- What do you think happened to Ötzi? Use *He must have… He might have… He can't have…*\n- Why do you think people are so interested in mysteries from the past?",
    ),
  ]),

  section("Grammar: must have, might have, can't have", [
    quiz("Notice the rule 🔍 Look: “Ötzi must have been very cold.” “He might have been a traveler.” “He can't have died naturally — there was an arrow in his shoulder.”", [
      { q: "Are these sentences about now or the past?", options: ["*the past", "now", "the future"] },
      { q: "How do we make them?", options: ["*modal + have + 3rd form", "modal + 3rd form", "modal + -ing"] },
      { q: "“He can't have died naturally” means…", options: ["*I'm almost sure he didn't die naturally.", "He wasn't allowed to die.", "Maybe he died naturally."] },
    ]),
    table("past-deduction"),
    choose(
      "Choose the right form.",
      "1. The streets are wet. It [*must have rained/must rain] last night. 🌧️\n2. She didn't answer. She [*might have been/might be yesterday] asleep.\n3. He [*can't have stolen/must have stolen] it — he was with me all evening!\n4. I can't find my keys. I [*must have left/must leave] them at work. 🔑\n5. They [*might have missed/can't have missed] the bus — they're very late.\n6. You [*can't have finished/must have finish] already! You started five minutes ago.\n7. Dana looks so happy. She [*must have got/must get] the job!\n8. The window is broken. Someone [*must have broken/can't have broken] in.",
    ),
    gaps(
      "Complete with must have, might have or can't have + the verb in brackets.",
      "1. The ground is white. It [must have snowed] in the night. (snow)\n2. Leo isn't here. He [might have forgotten] about the meeting. (forget)\n3. She [can't have seen] the film — it only came out today! (see)\n4. There's no milk left. Someone [must have drunk] it. (drink)\n5. The lights were off. They [might have gone] to bed early. (go)\n6. He [can't have eaten] the whole cake — he doesn't like chocolate! (eat)\n7. You look really tired. You [must have worked] late. (work)\n8. I'm not sure why she left. She [might have felt] ill. (feel)",
    ),
    sort("Now or in the past? Sort. ⏰⏪", {
      "⏰ now": ["She must be tired.", "He can't be at home.", "They might be lost.", "It could be true."],
      "⏪ in the past": ["She must have been tired.", "He can't have been at home.", "They might have got lost.", "It could have been true."],
    }),
    drag(
      "Complete the detective's report about Ötzi.",
      "Ötzi [must] have died about 5,300 years ago. He [can't] have died naturally, because scientists found an arrowhead in his shoulder. He might [have] been running away from someone. He must have [eaten] a big meal not long before he died. The ice must have [kept] his body safe for thousands of years. 🧊 He [might] have been a traveler crossing the mountains.",
      ["mustn't", "has", "eat", "keep"],
    ),
    order("Make sentences.", [
      "It must have rained last night.",
      "She might have missed the bus.",
      "He can't have stolen the money.",
      "They must have left early.",
      "I might have lost my keys at the café.",
    ]),
  ]),

  section("Listening: The case of the missing cake", [
    tip("About 1 minute. Remember Kenji's surprise party (module 9)? Something went wrong with the cake! First listen: *Who or what took the cake?* Second listen: the clues."),
    ...listening(
      "Listen. On the day of Kenji's party, the birthday cake disappears. Laura, Leo and Asel investigate.",
      "**Laura:** Everyone! The cake has disappeared! I left it on the kitchen table an hour ago, and now there's only an empty box!\n\n**Asel:** What? I made that cake myself! Someone must have taken it.\n\n**Leo:** Don't look at me! I've been outside blowing up balloons all afternoon. 🎈\n\n**Laura:** That's true, I saw you. So it can't have been Leo. Dana was decorating the living room with me…\n\n**Asel:** Wait. Look at the floor. There are crumbs all the way to the balcony. And these little footprints… They're not human.\n\n**Leo:** They must have been made by an animal! Laura, where's your cat?\n\n**Laura:** Mochi? She's sleeping on the balcony… Oh no. She's got chocolate on her face! 😱\n\n**Asel:** Well, she can't have eaten a whole cake — she's tiny!\n\n**Leo:** True. Look — half the cake is here, under the balcony chair. She must have pulled the box off the table and dragged it outside.\n\n**Laura:** Chocolate is bad for cats! I'll call the vet. Mochi might have eaten too much.\n\n**Asel:** And I'll go back to the bakery and get another cake. We have one hour!\n\n**Leo:** Mystery solved. Detective Leo strikes again! 🕵️",
    ),
    quiz("Listen and choose.", [
      { q: "Where did Laura leave the cake?", options: ["*on the kitchen table", "on the balcony", "in the fridge"] },
      { q: "Why can't it have been Leo?", options: ["*He was outside blowing up balloons.", "He doesn't like cake.", "He wasn't at the party."] },
      { q: "What clues did Asel find?", options: ["*crumbs and small animal footprints", "fingerprints on the box", "a note"] },
      { q: "What will Asel do?", options: ["*get another cake from the bakery", "call the police", "clean the floor"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Dana was decorating the living room.", true],
      ["The footprints were human.", false],
      ["The cat had chocolate on her face.", true],
      ["The cat ate the whole cake.", false],
      ["Laura will call the vet because chocolate is bad for cats.", true],
    ]),
    gaps(
      "Complete what they said. Listen again if you need.",
      "1. Asel: Someone must have [taken] it.\n2. Laura: So it can't have [been] Leo.\n3. Leo: They must have been [made] by an animal!\n4. Asel: She can't have [eaten] a whole cake.\n5. Leo: She must have [pulled] the box off the table.\n6. Laura: Mochi might have eaten too [much].",
    ),
  ]),

  section("Let's talk: The detective agency", [
    text(
      "Game: Solve the case 🕵️",
      "Your teacher describes a scene. Explain what must / might / can't have happened — with reasons!\n\n🏠 **Case 1:** You come home. The door is open, the TV is on, there's a half-eaten sandwich on the table, and your neighbor's dog is sitting on the sofa.\n\n🏢 **Case 2:** Your colleague arrives at work at 11. Her hair is wet, she's wearing one black shoe and one brown shoe, and she's holding flowers.\n\n🚗 **Case 3:** A car is in the middle of a field. There are no roads near it, no tracks, and nobody inside.\n\nThen invent a case for your teacher! 😄",
    ),
    text(
      "Talk to your teacher.",
      "- What's the strangest thing that has ever happened to you? Explain it — or let your teacher guess!\n- Do you know any famous unsolved mysteries? What do you think happened?\n- Would you like to be a detective? What would be the best and worst parts? 🕵️",
    ),
    tip("For Case 3 there's no fixed answer — accept creative ideas (*It might have been dropped by a helicopter! It must have been there before the field was planted…*). Correct *must have + 3rd form* and the weak *have* /əv/."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "The road is wet. It ___ rained.", options: ["*must have", "must", "can't have"] },
      { q: "He ___ taken it — he was abroad.", options: ["*can't have", "must have", "might"] },
      { q: "I'm not sure. She ___ forgotten.", options: ["*might have", "must", "can't"] },
      { q: "proof you were somewhere else =", options: ["*an alibi", "a witness", "a suspect"] },
    ]),
    box(
      "Phrase of the day: caught red-handed",
      "🔴✋ **caught red-handed** = caught while doing something wrong.\n\n*Mochi was caught red-handed — with chocolate on her face!* 🐱🍫",
    ),
  ]),

  homework(
    [
      video("Watch: past modals of deduction — could have, must have, can't have, might have.", "2aaMn_5tkUA"),
      choose(
        "Choose.",
        "1. The grass is wet. It [*must have rained/can't have rained] last night.\n2. She [*can't have written/must have write] this — she doesn't speak French.\n3. He's not here. He [*might have gone/might go yesterday] home.\n4. The cake is gone. The kids [*must have eaten/must eat] it.\n5. You [*can't have been/must be] at the party — I didn't see you there.\n6. They [*might have taken/might taken] the wrong train.",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      gaps(
        "Complete.",
        "1. The police found his [fingerprints] on the glass.\n2. A [witness] saw everything from her window.\n3. He has an [alibi] — he was at work.\n4. The detective [solved] the case in two days.\n5. The thief broke [in] through the window.\n6. There were [footprints] in the snow.",
      ),
      write("Write a short mystery story (100+ words) and explain what must / might / can't have happened. Start: “When I woke up, everything in my room was different…”", 100, {
        read: "*Example:* When I woke up, everything in my room was different. My books were on the floor, the window was open, and there was a strange green feather on my bed. 🪶 Someone must have come in during the night. But nothing was missing, so it can't have been a thief. Then I heard a noise on the wardrobe… It was a parrot! It must have escaped from my neighbor's flat and flown through the window…",
      }),
      record("Record 1 minute: Tell a real or invented mystery and ask your teacher to guess what happened. 🎤", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
