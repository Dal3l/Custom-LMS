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

// 9.1 They must have been planning it — G: past deduction: must have done / must have been doing (almost certain), can't / couldn't have done (impossible), might / may / could have done (possible), should have done (expectation: The parcel should have arrived by now); must have done (deduction) vs had to do (obligation). V: crime and investigation (a suspect, a witness, evidence, a clue, an alibi, fingerprints, CCTV footage, a motive, solve a case, get away with). S: make deductions from clues. Main format: a quiz about the theft of the Mona Lisa + a long reading (the mystery of D. B. Cooper, ~560 words) + a long listening (after the winter festival, Leo's dad's guitar disappears — Leo and Madina work out what happened, ~3:15) + a "detective" speaking game. Video at home (BBC Learning English).
// Facts checked: the Mona Lisa was stolen from the Louvre on 21 August 1911 by Vincenzo Peruggia, an Italian who had worked at the museum; the poet Guillaume Apollinaire was arrested and Pablo Picasso was questioned; the painting was recovered in Florence in December 1913, when Peruggia tried to sell it to an art dealer; the theft made it much more famous. D. B. Cooper: on 24 November 1971 a man who called himself Dan Cooper hijacked Northwest Orient Flight 305 (Portland to Seattle), said he had a bomb, demanded $200,000 and four parachutes, released the passengers in Seattle and jumped from the rear stairs of the Boeing 727 at night over south-west Washington; the name "D. B." came from a press mistake; in 1980 an eight-year-old boy found about $5,800 of the ransom money on the bank of the Columbia River; afterwards a device (the "Cooper vane") was added to Boeing 727s so the rear stairs couldn't open in flight; the FBI stopped actively investigating in 2016. Characters: Leo (his dad's guitar — 5.1, 6.2), Madina; the winter festival (6.1–8.2).
export default lesson("b2-9.1", "They must have been planning it", () => [
  section("Warm-up: The day the Mona Lisa disappeared", [
    box(
      "Today you will…",
      "- solve (or try to solve!) famous mysteries 🕵️\n- make deductions about the past: He must have… She can't have… They might have… 🔍\n- play detective with your teacher 🧩",
    ),
    quiz("The Mona Lisa mystery. Guess! 🖼️", [
      { q: "In 1911, the Mona Lisa was stolen from the Louvre. Who took it?", options: ["*an Italian man who had worked at the museum", "a famous French painter", "a gang of professional thieves"] },
      { q: "Which famous artist was questioned by the police?", options: ["*Pablo Picasso", "Claude Monet", "Salvador Dalí"] },
      { q: "When was the painting found?", options: ["*two years later, in Florence", "the next day, in Paris", "never"] },
      { q: "What happened to the Mona Lisa's fame after the theft?", options: ["*It became much more famous.", "People forgot about it.", "It was moved to Italy forever."] },
    ]),
    text(
      "Talk to your teacher.",
      "- How do you think the thief got the painting out of the museum? 🤔\n- Why would someone steal a painting that is too famous to sell?\n- Do you like detective stories or true-crime podcasts? Which ones?",
    ),
    tip("Answers: Vincenzo Peruggia, who had worked at the Louvre, walked out with it under his clothes; the poet Apollinaire was arrested and Picasso questioned; it was found in Florence in 1913. Encourage guesses like *He must have… / He might have…* — today's grammar."),
  ]),

  section("Vocabulary: Crime and investigation", [
    words("Crime and investigation", [
      ["a suspect", "🕴️ a person the police think may have committed a crime"],
      ["a witness", "👀 a person who saw what happened"],
      ["evidence", "📁 facts or objects that show what happened (uncountable!)"],
      ["a clue", "🔎 a piece of information that helps solve a mystery"],
      ["an alibi", "📍 proof that you were somewhere else"],
      ["fingerprints", "🖐️ marks your fingers leave on things"],
      ["CCTV footage", "📹 video from security cameras"],
      ["a motive", "💭 the reason someone commits a crime"],
      ["solve a case", "✅ find out who did it"],
      ["get away with (it)", "🏃 not be caught or punished"],
    ]),
    match("Match.", [
      ["The police found his fingerprints", "on the window."],
      ["She has a perfect alibi —", "she was in Seoul that day."],
      ["The CCTV footage showed", "two men in police uniforms."],
      ["What was his motive?", "Money? Revenge?"],
      ["Three witnesses saw", "a red car drive away."],
      ["He thought he'd got away", "with it — until the DNA test."],
    ]),
    gaps(
      "Complete with a word from the list.",
      "1. The detective found an important [clue] under the sofa.\n2. There isn't enough [evidence] to arrest him.\n3. The police have three [suspects], but no proof.\n4. After twenty years, the case is still not [solved].\n5. Nobody saw anything — there were no [witnesses].\n6. Without a [motive], it's hard to understand why he did it.",
    ),
  ]),

  section("Reading: The man who jumped", [
    tip("A long text (~560 words). First reading — 5 minutes: *What are the two main theories about what happened to Cooper?* Then the tasks. Ask the student to find every must have / can't have / might have."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["The hijacker's real name was D. B. Cooper.", false],
        ["The passengers were allowed to leave the plane in Seattle.", true],
        ["Cooper jumped during the day, in good weather.", false],
        ["Some of the ransom money was found by a child.", true],
        ["The FBI has finally solved the case.", false],
        ["Boeing changed the design of the 727 after the hijacking.", true],
      ],
      {
        read: [
          "## 🪂 The man who jumped",
          "On the afternoon of 24 November 1971, the day before Thanksgiving, a quiet man in a dark suit bought a one-way ticket from Portland to Seattle. He gave his name as Dan Cooper. He sat at the back of the plane, ordered a drink, lit a cigarette and passed a note to a flight attendant. She put it in her pocket without reading it. \"Miss,\" he said calmly, \"you'd better look at that note. I have a bomb.\"",
          "Cooper opened his briefcase just enough for her to see wires and red sticks. His demands were simple: $200,000 in cash and four parachutes, delivered when the plane landed in Seattle. The airline agreed. In Seattle, the money and parachutes were brought on board, and the 36 passengers were allowed to leave. Then the plane took off again, heading south towards Mexico, with only Cooper and the crew on board.",
          "At about eight o'clock that evening, somewhere over the forests of south-west Washington, Cooper lowered the stairs at the back of the plane and jumped into the darkness. It was raining, the temperature was below freezing, and he was wearing a business suit and light shoes. He was never seen again.",
          "Because of a mistake in a news report, the hijacker became known as \"D. B. Cooper\". The FBI began one of the biggest searches in its history. Investigators studied more than eight hundred suspects. A few things seemed clear. Cooper must have known something about planes: he knew that the rear stairs of a Boeing 727 could be opened during flight, and he asked the pilots to fly low and slowly. He must have been planning the crime for weeks. And yet he chose the parachute without a working reserve and jumped in terrible conditions. Some experts believe that an experienced parachutist would never have done that — so he can't have been a professional.",
          "Did he survive? Many investigators think he must have died. Landing at night, in a forest, in a suit, would have been extremely dangerous. But then, why was his body never found? Others believe he might have landed safely, walked to a road and disappeared into a new life. Nobody has ever proved either theory.",
          "Then, in 1980, an eight-year-old boy who was having a picnic with his family on the banks of the Columbia River found three packets of old twenty-dollar bills in the sand — about $5,800. The serial numbers matched Cooper's ransom money. How did it get there? The money might have been carried by the river after he landed. It could have been buried by someone else. Or Cooper might have dropped it as he fell. The discovery raised more questions than it answered.",
          "In 2016, after 45 years, the FBI announced that it was no longer actively investigating the case. It remains the only unsolved airline hijacking in American history. One thing did change because of Cooper, though: a small device, nicknamed the \"Cooper vane\", was fitted to Boeing 727s so that the rear stairs could not be opened in flight.",
          "Was he a genius or a fool? Did he get away with it, or die in the forest that night? We may never know. That, perhaps, is exactly why people are still talking about him. 🕵️",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Why do investigators think Cooper must have known about planes?", options: ["*He knew the rear stairs could be opened in flight.", "He was a pilot for the airline.", "He built the plane."] },
      { q: "Why do some experts think he wasn't a professional parachutist?", options: ["*He chose a bad parachute and jumped in terrible conditions.", "He was too old.", "He was afraid of heights."] },
      { q: "What did the boy find in 1980?", options: ["*about $5,800 of the ransom money", "Cooper's briefcase", "a parachute"] },
      { q: "What happened in 2016?", options: ["*The FBI stopped actively investigating.", "Cooper was identified.", "More money was found."] },
      { q: "What is the “Cooper vane”?", options: ["*a device that stops the rear stairs opening in flight", "a type of parachute", "a famous suspect"] },
    ]),
    gaps(
      "Find words in the article.",
      "1. a woman who looks after passengers on a plane: a flight [attendant]\n2. money demanded for returning someone or something: a [ransom]\n3. took control of a plane by force: [hijacked]\n4. a second parachute in case the first doesn't work: a [reserve]\n5. the unique numbers on banknotes: [serial] numbers\n6. put in the ground and covered: [buried]",
    ),
  ]),

  section("Grammar: He must have known", [
    quiz("Notice the rule 🔍 Look: “He must have known something about planes.” · “He can't have been a professional.” · “He might have landed safely.” · “He must have been planning the crime for weeks.”", [
      { q: "“He must have known” means…", options: ["*I'm almost sure he knew", "he was obliged to know", "maybe he knew"] },
      { q: "“He can't have been a professional” means…", options: ["*I'm almost sure he wasn't", "he wasn't allowed to be", "maybe he wasn't"] },
      { q: "“He might have landed safely” means…", options: ["*it's possible that he landed safely", "he certainly landed safely", "he should have landed safely"] },
    ]),
    table("past-deduction"),
    choose(
      "Choose.",
      "1. The ground is wet. It [*must have rained/can't have rained] last night. 🌧️\n2. She [*can't have seen/must have seen] me — she didn't say hello. (I'm sure she didn't)\n3. I can't find my keys. I [*might have left/must leave] them at work.\n4. He [*must have been driving/must drive] very fast — he arrived in ten minutes.\n5. They [*can't have finished/must have finished] already — they only started five minutes ago!\n6. The parcel [*should have arrived/must arrive] yesterday. Let's call the shop.\n7. Her phone was off, so I [*had to/must have] send an email. (obligation)\n8. You [*must have been/had to be] tired after such a long flight.",
    ),
    gaps(
      "Rewrite the sentences with must have, can't have or might have.",
      "1. I'm sure he forgot. → He [must have forgotten].\n2. It's impossible that she stole it — she was in Seoul. → She [can't have stolen/couldn't have stolen] it.\n3. Perhaps they missed the bus. → They [might have missed/may have missed/could have missed] the bus.\n4. I'm sure they were sleeping when we called. → They [must have been sleeping] when we called.\n5. It's impossible that he wrote this — he can't speak French. → He [can't have written/couldn't have written] this.\n6. Maybe the thief used a ladder. → The thief [might have used/may have used/could have used] a ladder.",
    ),
  ]),

  section("Grammar: Play detective", [
    match("Clue → deduction. Match.", [
      ["The window is broken from the outside.", "Someone must have broken in."],
      ["The dog didn't bark.", "The thief must have been someone the dog knew."],
      ["There are no fingerprints.", "The thief must have worn gloves."],
      ["He was in Seoul that day.", "He can't have done it."],
      ["There's mud on her shoes.", "She might have been in the garden."],
      ["The safe wasn't damaged.", "The thief must have known the code."],
    ]),
    sort("must have done (deduction) or had to do (obligation)? Sort. 🧩", {
      "🔍 must have done = I'm sure it happened": [
        "She must have missed the train — she's not here.",
        "They must have been very happy with the result.",
        "He must have forgotten our meeting.",
        "You must have worked hard to pass that exam.",
      ],
      "📋 had to do = it was necessary": [
        "She had to take a taxi because the train was canceled.",
        "We had to wait for two hours.",
        "He had to show his passport.",
        "I had to work late yesterday.",
      ],
    }),
    drag(
      "Complete the detective's notes.",
      "The thief [must] have entered through the back door — it was open. He can't [have] come through the window; it was locked from the inside. The dog didn't bark, so it [must] have been someone it knew. The neighbor [might] have seen something — we need to ask her. The thief must have been [wearing] gloves, because there are no fingerprints. The money should have [been] in the safe, but it's gone. 🕵️",
      ["has", "can", "wear"],
    ),
    order("Make sentences.", [
      "He must have known about planes.",
      "She can't have stolen the money.",
      "They might have landed safely.",
      "The thief must have been wearing gloves.",
      "The parcel should have arrived yesterday.",
    ]),
    tip("Say it right: *must have* /ˈmʌstəv/, *can't have* /ˈkɑːntəv/ (US /ˈkæntəv/), *might have* /ˈmaɪtəv/. Stress the main verb: *He must have KNOWN.* Typical mistakes: *He mustn't have done it* → *He can't have done it*; *He must stole it* → *He must have stolen it*."),
  ]),

  section("Listening: The missing guitar", [
    tip("A long listening — about 3 minutes 15 seconds. After the winter festival, Leo's dad's old guitar — the one Leo got back in 6.2 — has disappeared from backstage. Leo and Madina try to work out what happened. First listen: *Where was the guitar in the end?* Second listen: the tasks."),
    ...listening(
      "Listen to Leo and Madina looking for the missing guitar.",
      "**Leo:** Madina, it's gone. Dad's guitar. It's not in the case, it's not on the stage, it's not anywhere.\n\n**Madina:** Okay. Calm down. Let's think about this logically. When did you last see it?\n\n**Leo:** At the end of our set. I played the last song, the crowd went crazy — thank you, by the way, for screaming in the front row — and I put it in its case behind the stage.\n\n**Madina:** And you're sure you put it in the case?\n\n**Leo:** Absolutely sure. I remember closing it. Then the stage manager told us to leave the backstage area because the next band needed space. So I left the case next to the drums and went to say hello to Dad.\n\n**Madina:** So someone must have taken it between the end of your set and now. That's about an hour. Who was backstage?\n\n**Leo:** Everyone! The next band, the sound technicians, the organizers, the volunteers… And people in the audience could see the backstage area through a gap in the curtain.\n\n**Madina:** Could someone have taken it by mistake? Another guitarist with a similar case?\n\n**Leo:** I thought about that. But the next band's guitarist plays a bright red electric guitar. Nobody could confuse the two.\n\n**Madina:** Okay. But the case is still there, and it's empty. If a thief had taken it, they'd have taken the whole case. Why would someone open it, take the guitar out and leave the case behind? That's strange.\n\n**Leo:** Maybe they wanted to hide it under a coat.\n\n**Madina:** It's a big guitar, Leo. They can't have hidden it under a coat. Somebody would have noticed.\n\n**Leo:** True. Wait — the case was open when I came back. So someone must have looked inside.\n\n**Madina:** Who knew the guitar was special?\n\n**Leo:** Only the band. And my dad. And I said it on stage before the last song: \"This guitar belonged to my dad. He's here tonight.\" Everyone heard.\n\n**Madina:** So whoever took it must have heard you. They knew it was valuable.\n\n**Leo:** Oh no. They might have sold it already.\n\n**Madina:** In an hour? Unlikely. Let's ask the stage manager. She was watching the backstage area all night.\n\n**Leo:** Good idea.\n\n**Madina:** Excuse me! Hi — we're looking for a guitar. Old, brown, a bit scratched. It was in a black case next to the drums.\n\n**Leo:** It's my dad's. It's very important to me.\n\n**Madina:** … She says she saw an older man take it out of the case about forty minutes ago. He said he was the owner. He had a festival wristband, so she didn't stop him.\n\n**Leo:** An older man? Who would… Oh. Oh, no. I think I know.\n\n**Madina:** You do?\n\n**Leo:** My dad. He must have wanted to play it. He hasn't held it for years. I bet he's sitting somewhere with it right now.\n\n**Madina:** Look! Over there, by the food tent. Is that him?\n\n**Leo:** It is! He's playing it. And there's a crowd around him. Dad! Dad, you could have told me!\n\n**Madina:** Leo, look at his face. He's so happy. I think you can forgive him.\n\n**Leo:** You're right. Mystery solved. And honestly, he plays it better than I do.",
    ),
    quiz("Listen and choose.", [
      { q: "Where did Leo leave the guitar?", options: ["*in its case next to the drums", "on the stage", "in the car"] },
      { q: "Why does Madina think a thief can't have taken it?", options: ["*A thief would have taken the whole case.", "There was a guard.", "The guitar was too old."] },
      { q: "Why does Madina say the person must have known the guitar was valuable?", options: ["*Leo said it on stage before the last song.", "It had a price on it.", "The stage manager told everyone."] },
      { q: "What did the stage manager see?", options: ["*an older man taking the guitar out of the case", "a young man running away", "nothing at all"] },
      { q: "Who had taken the guitar?", options: ["*Leo's dad", "the next band", "a volunteer"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Madina was in the front row during Leo's set.", true],
      ["The guitar case had disappeared too.", false],
      ["Leo told the audience that the guitar belonged to his dad.", true],
      ["The older man had a festival wristband.", true],
      ["Leo's dad was playing the guitar by the food tent.", true],
      ["Leo is angry with his dad at the end.", false],
    ]),
    gaps(
      "Complete the deductions from the conversation.",
      "1. So someone [must] have taken it between the end of your set and now.\n2. They can't have [hidden] it under a coat.\n3. So someone must have [looked] inside.\n4. They [might] have sold it already.\n5. He must have [wanted] to play it.\n6. Dad, you [could] have told me!",
    ),
  ]),

  section("Let's play: Detective", [
    text(
      "🕵️ Solve the mystery",
      "Your teacher describes a strange situation. Ask yes / no questions, then explain what happened with **must have, can't have, might have, could have**.\n\n**Mystery 1:** A man is found in a field with a pack on his back. He is dead. There are no footprints around him. What happened?\n\n**Mystery 2:** A woman walks into a café, asks for a glass of water. The waiter points a toy gun at her. She says “Thank you” and leaves happy. Why?\n\n**Mystery 3:** Your own mystery! Tell your teacher about something strange that happened to you (a lost object, a strange message…). Your teacher makes deductions.",
    ),
    tip("Classic lateral-thinking puzzles. Answers: 1 — his parachute didn't open (the “pack”); 2 — she had hiccups, and the fright cured them. Insist on full deductions before the answer: *He can't have walked there — there are no footprints. He must have fallen from the sky!*"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "The lights are off. They ___ gone to bed.", options: ["*must have", "can't have", "had to"] },
      { q: "She ___ have written it — she can't speak Korean.", options: ["*can't", "must", "should"] },
      { q: "Proof that you were somewhere else is an ___.", options: ["*alibi", "evidence", "motive"] },
      { q: "The train ___ have left at 9, but it was late.", options: ["*should", "must", "can't"] },
    ]),
    box(
      "Phrase of the day: the plot thickens",
      "🧩 Said when a situation becomes more complicated and mysterious — like the Cooper case after the money was found in 1980.\n\n*What's the most mysterious thing that has ever happened to you?*",
    ),
  ]),

  homework(
    [
      video("Watch: BBC Learning English — Modals in the past.", "1PY6xIDkIj4"),
      choose(
        "Choose.",
        "1. The door is open. Someone [*must have opened/can't have opened] it.\n2. He [*can't have eaten/must have eaten] the whole cake — it's still in the fridge!\n3. I'm not sure where she is. She [*might have gone/must go] to the gym.\n4. They [*must have been waiting/must wait] for hours — they look so tired.\n5. The film [*should have started/must start] at 8, but it started late.\n6. I [*had to/must have] get up early yesterday for my flight.",
      ),
      gaps(
        "Complete with must have / can't have / might have + the verb.",
        "1. Her eyes are red. She [must have been crying/must have cried]. (cry)\n2. He [can't have stolen/couldn't have stolen] the money — he was with me all day. (steal)\n3. I don't know why she's late. She [might have missed/may have missed/could have missed] the bus. (miss)\n4. You [must have been] exhausted after the marathon! (be)\n5. They [can't have finished/couldn't have finished] the project already. (finish)\n6. The thief [might have climbed/may have climbed/could have climbed] over the wall. (climb)",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      match("Match.", [
        ["a suspect", "a person who may have done it"],
        ["a witness", "a person who saw it"],
        ["a clue", "information that helps solve a mystery"],
        ["an alibi", "proof you were somewhere else"],
        ["a motive", "the reason for a crime"],
        ["get away with it", "not be caught"],
      ]),
      write("Write a short mystery story (140–190 words): something strange happens (a lost object, a strange visitor, a missing pet…). A character investigates, makes deductions and solves it. Use at least five past modals (must have, can't have, might have, should have).", 140),
      record("Record a 1-minute answer: “What do you think happened to D. B. Cooper? Explain your theory.” 🎙️🪂", 75),
    ],
    "Homework: Writing and speaking",
  ),
]);
