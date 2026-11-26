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
  video,
  words,
  write,
} from "../../kit";

// 9.3 The perfect heist — skills lesson (as in the programme): no new grammar; review of past deduction (must / might / can't have) and modal passives (could have been prevented). V: theft and investigation (a heist, break in, a burglar, a security guard, an alarm, disguised as, a reward, a lead, a cold case, a mastermind); rob vs steal. S: suggest your own theory. Main format: art crime true / false + a long reading (the Isabella Stewart Gardner Museum theft, 1990, ~580 words) + CBS News video about the theft + a long listening (Zarina's true-crime podcast with Laura, who has visited the museum, ~3:15) + "build your theory".
// Facts checked: in the early hours of 18 March 1990, after St Patrick's Day celebrations, two men dressed as Boston police officers were let into the Isabella Stewart Gardner Museum by a young night guard, against the museum's rules; they handcuffed the two guards and tied them up in the basement; they spent 81 minutes inside and took 13 works, including Rembrandt's only seascape, "The Storm on the Sea of Galilee", Vermeer's "The Concert", works by Degas and Manet, an ancient Chinese bronze vessel and a bronze eagle from the top of a Napoleonic flag; they also took the security videotapes; the stolen works are valued at around $500 million; some much more valuable works, such as Titian's "The Rape of Europa", were left behind; Isabella Stewart Gardner's will said the collection must stay as she had arranged it, so the empty frames still hang in the museum; the museum's reward is $10 million (raised from $5 million in 2017); in 2013 the FBI said it believed it knew who the thieves were — members of a criminal organization, now dead — but the art has never been found. Characters: Zarina (podcaster), Laura (from Manchester; visited Boston).
export default lesson("b2-9.3", "The perfect heist", () => [
  section("Warm-up: Art crime", [
    box(
      "Today you will…",
      "- investigate the biggest unsolved art theft in history 🖼️🕵️\n- make deductions from real clues: they must have… they can't have… 🔍\n- build your own theory — and defend it 💬",
    ),
    trueFalse("Art crime: true or false? Guess first. 🖼️", [
      ["Famous stolen paintings are easy to sell.", false],
      ["Most stolen works of art are never found.", true],
      ["In one famous theft, the thieves were dressed as police officers.", true],
      ["Some museums leave empty frames on the wall where stolen paintings used to hang.", true],
      ["Museums never offer rewards for information about stolen art.", false],
    ]),
    text(
      "Talk to your teacher.",
      "- Why would anyone steal a painting that is too famous to sell? 🤔\n- What would you do if you found a stolen masterpiece in your grandmother's attic?\n- Do you know any films or series about heists? Which is your favorite? 🎬",
    ),
    tip("The reading confirms the answers. Collect the student's ideas about *why* people steal famous art (ransom, a private collector, a trade with the police…) — they'll need them for their theory at the end."),
  ]),

  section("Vocabulary: Heists and investigations", [
    words("Heists and investigations", [
      ["a heist", "💰 a big, carefully planned robbery"],
      ["rob — steal", "🏦 rob a place / a person — 💎 steal a thing", "They robbed a bank. They stole the money."],
      ["break in (to)", "🚪 enter a building illegally, often by force"],
      ["a security guard", "💂 a person who protects a building"],
      ["an alarm", "🚨 a device that makes a loud noise to warn people"],
      ["disguised as", "🎭 dressed to look like someone else"],
      ["a reward", "🎁 money offered for help or information"],
      ["a lead", "🧵 a piece of information that might help solve a crime"],
      ["a cold case", "🧊 an old crime that hasn't been solved"],
      ["a mastermind", "🧠 the person who plans a clever crime"],
    ]),
    match("Match.", [
      ["The thieves were disguised", "as police officers."],
      ["They broke into the museum", "at 1:24 a.m."],
      ["The museum is offering", "a reward of $10 million."],
      ["The police followed every lead,", "but found nothing."],
      ["After thirty years, it's still", "a cold case."],
      ["Who was the mastermind", "behind the heist?"],
    ]),
    gaps(
      "rob or steal? Complete with the right form.",
      "1. Two men [robbed] a bank in the city center yesterday.\n2. Someone [stole] my bike from outside the gym.\n3. The thieves [stole] thirteen works of art.\n4. He was [robbed] on his way home — they took his phone and wallet.\n5. Thirteen paintings were [stolen] from the museum.\n6. Have you ever been [robbed]?",
    ),
    quiz("Choose the right word.", [
      { q: "The thieves ___ the museum at night.", options: ["*broke into", "broke down", "broke up"] },
      { q: "The police have no new ___ — the trail has gone cold.", options: ["*leads", "rewards", "alarms"] },
      { q: "Somebody ___ my wallet on the bus!", options: ["*stole", "robbed", "broke"] },
      { q: "The ___ planned everything, but never entered the building.", options: ["*mastermind", "security guard", "witness"] },
    ]),
  ]),

  section("Reading: Thirteen empty frames", [
    tip("A long text (~580 words). First reading — 5 minutes: *What are the biggest unanswered questions about the theft?* Then the tasks. Ask the student to note every clue — they'll need them for the listening and the final task."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["The guard let the thieves in because they looked like police officers.", true],
        ["The thieves were inside the museum for about three hours.", false],
        ["The thieves took the most valuable painting in the museum.", false],
        ["The empty frames are still on the walls today.", true],
        ["The reward has never changed since 1990.", false],
        ["None of the stolen works has been found.", true],
      ],
      {
        read: [
          "## 🖼️ Thirteen empty frames",
          "Boston, 1:24 a.m., 18 March 1990. The city was quiet after a long night of St Patrick's Day parties. At the side door of the Isabella Stewart Gardner Museum, two men in police uniforms rang the bell. They told the young night guard that they had been called about a disturbance. The guard was not supposed to let anyone in at night. But they were police officers — or so it seemed. He opened the door.",
          "Within minutes, the guard and his colleague had been handcuffed, their eyes and mouths covered with tape, and they had been tied up in the basement. The \"officers\" were thieves. For the next 81 minutes, they walked through the museum and took thirteen works of art. Among them were Rembrandt's only seascape, The Storm on the Sea of Galilee, and The Concert by Vermeer, an artist who left fewer than forty known paintings. Several paintings were cut out of their frames with a knife. Then the men loaded everything into a car and drove away. The whole collection is valued today at around half a billion dollars.",
          "It should have been the beginning of a quick investigation. Instead, it became the most famous unsolved art theft in history. And the clues only made the mystery deeper.",
          "First, the choice of works was strange. The thieves walked past some of the museum's most valuable treasures, including a famous painting by Titian, but took a few small sketches by Degas and a bronze eagle from the top of an old French flag. Why? They can't have been experts in art — or perhaps they were stealing to order, for someone with very particular taste. Second, the motion sensors showed that nobody had entered one of the rooms from which a painting by Manet disappeared. How could it have been taken? Third, the thieves seemed to know exactly how the museum's security worked. They must have studied the building carefully. Had someone helped them from inside?",
          "The museum has a special rule, too. When Isabella Stewart Gardner died in 1924, her will said that her collection must stay exactly as she had arranged it. Nothing may be moved, added or sold. So, more than thirty years later, the empty frames still hang on the walls, waiting for their paintings to come home. Visitors stand in front of them in silence.",
          "Over the years, the FBI has followed hundreds of leads. Paintings have been \"seen\" in Ireland, in France, in Philadelphia. Criminals in prison have offered information in exchange for freedom. In 2013, the FBI announced that it believed it knew who the thieves were: members of a criminal organization from New England, now dead. But knowing who probably did it is not the same as finding the art. In 2017, the museum doubled its reward to $10 million for information leading to the return of the works. It is still waiting.",
          "Where are the paintings now? They might be hidden in an attic or a basement, wrapped in old blankets. They might have been sold and resold among criminals as a kind of underground currency. Or, the most painful possibility, they could have been destroyed. Until one of them appears, thirteen empty frames will keep asking the same question. 🕵️",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "How did the thieves get into the museum?", options: ["*The guard opened the door because they looked like police.", "They broke a window.", "They hid inside before closing time."] },
      { q: "Which clue suggests the thieves weren't art experts?", options: ["*They left valuable works and took small, less valuable ones.", "They took everything.", "They took only paintings."] },
      { q: "What is strange about the Manet painting?", options: ["*The sensors showed nobody had entered that room.", "It was found the next day.", "It was the most valuable work."] },
      { q: "Why are the empty frames still on the walls?", options: ["*Gardner's will says the collection must stay as she arranged it.", "The museum hopes to sell them.", "The FBI asked the museum to keep them."] },
      { q: "What did the FBI announce in 2013?", options: ["*It believed it knew who the thieves were.", "It had found the paintings.", "It had closed the case."] },
    ]),
    gaps(
      "Find words in the article.",
      "1. a situation where people are noisy or fighting: a [disturbance]\n2. a painting of the sea: a [seascape]\n3. quick drawings: [sketches]\n4. devices that notice movement: motion [sensors]\n5. a legal document that says what happens to your things when you die: a [will]\n6. money used in a country (or, here, among criminals): [currency]",
    ),
    order("Put the events of that night in order.", [[
      "Two men in police uniforms rang the bell at the side door.",
      "The young guard let them in.",
      "The guards were handcuffed and tied up in the basement.",
      "The thieves spent 81 minutes taking thirteen works of art.",
      "They loaded everything into a car and drove away.",
    ].join("\n")], "lines"),
  ]),

  section("Video: When half a billion dollars' worth of art vanished", [
    video("Watch: CBS Sunday Morning — When half a billion dollars' worth of art vanished.", "WTbhFNXFyJ0"),
    text(
      "After the video: talk about it.",
      "- What new details did you learn from the video?\n- How do people at the museum feel about the empty frames?\n- If you could ask the thieves one question, what would it be? 🤔",
    ),
    tip("Ask for deductions based on the video: *The thieves must have… The guard shouldn't have… The paintings might have been…* — review of modules 5 and 9."),
  ]),

  section("Listening: True crime", [
    tip("A long listening — about 3 minutes 15 seconds. Zarina's podcast has a true-crime special about the Gardner theft. Her guest is Laura, who visited the museum in Boston. First listen: *Which theory does Laura find most likely?* Second listen: the tasks."),
    ...listening(
      "Listen to Zarina's true-crime podcast about the Gardner theft.",
      "**Zarina:** Welcome to a special episode: true crime! Today, the greatest art theft of all time. My guest is Laura, who has actually been to the museum. Laura, what was it like?\n\n**Laura:** Honestly, I wasn't ready for it. I was visiting a friend in Boston, and she said, \"You have to see the empty frames.\" I thought, how exciting can an empty frame be? But when you stand in front of the place where the Rembrandt used to hang, and there's just the old wallpaper inside the frame… it's very powerful. It's like a missing person. Our guide said that visitors sometimes leave flowers under the frames, as if someone had died.\n\n**Zarina:** That gives me goosebumps. So let's play detective. The thieves were inside for eighty-one minutes. Is that a lot?\n\n**Laura:** It's a lot. Professional thieves usually want to be in and out in a few minutes. So either they were very relaxed — they must have known that nobody was coming — or they didn't really know what they were looking for.\n\n**Zarina:** And they took some strange things. A bronze eagle from the top of a flag!\n\n**Laura:** Exactly. Some people think they must have been stealing to order. Imagine a rich collector who says, \"Bring me the Vermeer, the Rembrandt and that eagle.\" But most experts don't believe in the secret billionaire with a hidden gallery. That's more of a film thing.\n\n**Zarina:** Then why steal paintings you can't sell?\n\n**Laura:** That's the key question. One theory is that criminals don't steal famous art to sell it. They use it as a kind of insurance. If they get arrested one day, they can say, \"I know where the Rembrandt is,\" and try to get a shorter sentence.\n\n**Zarina:** So the paintings might be sitting in a garage somewhere, waiting for someone to get arrested?\n\n**Laura:** Possibly. It sounds crazy, but it has happened with other stolen paintings.\n\n**Zarina:** That's clever. And terrible.\n\n**Laura:** It is. And then there's the guard. He was only twenty-three, and he broke the rules by opening the door. Some people have wondered whether he might have been involved. But he always said he was innocent, and he was never charged. I think he just made a mistake that anyone could have made at one in the morning.\n\n**Zarina:** What about the Manet that disappeared from a room nobody entered?\n\n**Laura:** That's the creepiest part. The motion sensors recorded the thieves in the other rooms, but not in that one. Either the sensors didn't work properly, or someone had been in there earlier. Or there's an explanation nobody has thought of yet.\n\n**Zarina:** So, Laura, what's your theory?\n\n**Laura:** I think the FBI is probably right about who did it — local criminals who weren't art experts. That would explain the strange choices and the knife cuts. I think the paintings must have been passed from one criminal to another, maybe as payment for something. And I really hope they haven't been destroyed.\n\n**Zarina:** Do you think they'll ever be found?\n\n**Laura:** I do, actually. Ten million dollars is a lot of money. One day, someone's grandchild will open a box in an attic, and there it'll be.\n\n**Zarina:** And if that grandchild is listening right now…\n\n**Laura:** Call the museum! And please, don't hang it in the kitchen.",
    ),
    quiz("Listen and choose.", [
      { q: "How did Laura feel when she saw the empty frames?", options: ["*She found them surprisingly powerful.", "She was bored.", "She was angry with the museum."] },
      { q: "What does the long time inside the museum suggest, according to Laura?", options: ["*They knew nobody was coming, or didn't know what they wanted.", "They were professionals.", "They were looking for the guards."] },
      { q: "What is the “insurance” theory?", options: ["*Criminals keep the art to exchange for a shorter sentence.", "The museum got insurance money.", "The thieves sold the art to an insurance company."] },
      { q: "What does Laura think about the young guard?", options: ["*He made a mistake that anyone could have made.", "He must have helped the thieves.", "He should have been sent to prison."] },
      { q: "Does Laura think the paintings will be found?", options: ["*Yes, one day.", "No, never.", "They've already been destroyed."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Laura visited the museum with a friend who lived in Boston.", true],
      ["Most experts believe in a secret billionaire collector.", false],
      ["The guard was twenty-three.", true],
      ["The guard was charged with helping the thieves.", false],
      ["The sensors didn't record anyone in the Manet room.", true],
      ["Laura thinks the thieves were art experts.", false],
    ]),
    gaps(
      "Complete the sentences from the podcast.",
      "1. It's like a [missing] person.\n2. They must have [known] that nobody was coming.\n3. They use it as a kind of [insurance].\n4. He might have been [involved].\n5. He was never [charged].\n6. The paintings must have been [passed] from one criminal to another.",
    ),
    choose(
      "Review: module 9 grammar. Choose.",
      "1. They [*must have known/must know] that nobody was coming.\n2. They [*can't have been/mustn't have been] art experts — they cut the paintings with a knife.\n3. The guard [*shouldn't have opened/couldn't have opened] the door.\n4. The paintings [*might have been passed/might have passed] from one criminal to another.\n5. The theft [*could have been prevented/could prevent] with better security.\n6. I hope they [*haven't been destroyed/haven't destroyed].",
    ),
  ]),

  section("Let's talk: Your theory", [
    sort("Sort the clues: what do they suggest? 🧩", {
      "🎓 the thieves were NOT experts": [
        "They cut some paintings out of their frames.",
        "They left a very valuable Titian behind.",
        "They took a bronze eagle from a flag.",
        "They stayed inside for 81 minutes.",
      ],
      "🗺️ the thieves were well prepared": [
        "They had police uniforms.",
        "They knew how to get past the night guard.",
        "They took the security videotapes.",
        "They chose the night after St Patrick's Day.",
      ],
    }),
    text(
      "🕵️ Build your theory",
      "Prepare a 1–2 minute theory about the Gardner theft:\n\n- **Who** do you think the thieves were? (experts? local criminals? someone inside?)\n- **Why** did they take those works?\n- **Where** are the paintings now?\n\nUse: *They must have… They can't have… They might have been… The guard should(n't) have… The paintings could have been…*\n\nYour teacher plays a skeptical detective and asks: *What's your evidence? How do you explain the Manet?* 😉",
    ),
    tip("Push for evidence-based reasoning — every claim needs a clue. This is good practice for 9.4's formal debate. Give feedback on past modals of deduction and modal passives."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "They ___ a bank and ___ $2 million.", options: ["*robbed / stole", "stole / robbed", "robbed / robbed"] },
      { q: "An old crime that has never been solved is a ___ case.", options: ["*cold", "frozen", "closed"] },
      { q: "The thieves were ___ as police officers.", options: ["*disguised", "dressed up", "hidden"] },
      { q: "The paintings ___ have been destroyed — nobody knows.", options: ["*might", "must", "can't"] },
    ]),
    box(
      "Phrase of the day: crime doesn't pay",
      "🚔 An old saying: in the end, criminals don't really profit from their crimes. The Gardner thieves stole half a billion dollars of art — and could never sell it.\n\n*Do you think the saying is true?*",
    ),
  ]),

  homework(
    [
      gaps(
        "Complete with one word.",
        "1. The museum is offering a [reward] for information.\n2. The thieves broke [in] through the side door.\n3. The police followed every [lead], but found nothing.\n4. The security [guard] was tied up in the basement.\n5. Who was the [mastermind] behind the plan?\n6. The [alarm] didn't go off.",
      ),
      drag(
        "Complete the summary of the Gardner theft.",
        "In 1990, two men disguised as police officers were [let] into the museum by a young guard. They stole thirteen works of art, which are [valued] at about $500 million. The empty frames still [hang] on the walls. The FBI believes the thieves are now [dead]. The museum is offering a [reward] of $10 million. The works have never been [found].",
        ["stolen", "alive", "price"],
      ),
      order("Make sentences.", [
        "The thieves must have studied the building.",
        "They can't have been art experts.",
        "The paintings might have been hidden in an attic.",
        "The guard shouldn't have opened the door.",
        "The theft could have been prevented.",
      ]),
    ],
    "Homework: Vocabulary and grammar",
  ),
  homework(
    [
      write("Write an article (140–190 words) for a website called “Unsolved”: tell the story of the Gardner theft (or another unsolved mystery) and give your own theory. Use at least four past modals (must have, can't have, might have been…) and two modal passives.", 140),
      record("Record your theory about the Gardner theft (1–2 minutes). 🕵️🎙️", 120),
    ],
    "Homework: Writing and speaking",
  ),
]);
