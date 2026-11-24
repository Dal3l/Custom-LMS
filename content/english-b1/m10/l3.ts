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
  picture,
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

// 10.3 Unsolved mysteries — skills lesson, no new grammar: review of present and past deduction. V: history and mysteries (ancient, a theory, a mystery, prove…). S: suggest your own explanation. Main format: a "where in the world?" photo quiz + a long reading (four mysteries: Stonehenge, the Nazca Lines, the Voynich manuscript, the Mary Celeste, ~440 words) + a TED-Ed video + a podcast about the Mary Celeste (~1.5 min) + an explanation written in class.
// Facts checked: Stonehenge — started about 5,000 years ago, bluestones from Wales (~240 km), lines up with the summer and winter solstice sun; Nazca Lines — Peru, made about 2,000 years ago, best seen from the air, the hummingbird about 90 m long; Voynich manuscript — about 240 pages, unknown script, the parchment dated to the early 1400s, kept at Yale University; Mary Celeste — found sailing empty in the Atlantic in 1872, a lifeboat missing, the crew never found.
export default lesson("b1-10.3", "Unsolved mysteries", () => [
  section("Warm-up: Where in the world?", [
    box(
      "Today you will…",
      "- explore four of the world's greatest mysteries 🗿📜\n- listen to theories about a ghost ship 🚢\n- suggest your own explanation 🕵️",
    ),
    picture("Three famous mysteries.", ["photos/stonehenge.jpg", "photos/nazca-hummingbird.jpg", "photos/voynich.jpg"]),
    quiz("Where in the world? Guess! 🌍", [
      { q: "Stonehenge — a circle of giant stones", options: ["*England", "Greece", "Egypt"] },
      { q: "The Nazca Lines — huge drawings in the desert", options: ["*Peru", "Mexico", "Morocco"] },
      { q: "The Voynich manuscript — a book nobody can read. Today it's kept in…", options: ["*a university library in the USA", "a museum in Paris", "a church in Rome"] },
      { q: "The hummingbird in the photo is about 90 meters long. How can you see it best?", options: ["*from a plane", "from the road", "from a boat"] },
    ]),
    text(
      "Talk to your teacher.",
      "- Which of these three would you most like to visit? Why?\n- Do you know any mysteries from your country's history? 🇰🇿\n- Do you think every mystery has a scientific explanation — or not? 🤔",
    ),
    tip("Let the student guess first with *It must be… It might be…* before checking. If they know Kazakhstan's own mysteries (e.g. the Steppe Geoglyphs in Turgai, seen from space), they're a great link!"),
  ]),

  section("Vocabulary: History and mysteries", [
    words("History and mysteries", [
      ["ancient", "🏛️ very, very old (thousands of years)"],
      ["a theory", "💭 an idea that tries to explain something"],
      ["prove", "✅ show that something is true", "Nobody can prove it."],
      ["an archaeologist", "⛏️ a scientist who studies ancient people and objects"],
      ["dig — dug — dug", "🕳️ make a hole in the ground"],
      ["a code", "🔐 a secret system of writing"],
      ["decode", "🔓 understand a code"],
      ["the crew", "⚓ the people who work on a ship or plane"],
      ["abandoned", "🏚️ left, with nobody there"],
      ["a legend", "📖 an old story that may not be true"],
      ["mysterious", "❓ strange and hard to explain"],
      ["remains", "🦴 parts that are left after something has gone"],
    ]),
    match("Match.", [
      ["an ancient", "civilization"],
      ["a popular", "theory"],
      ["decode", "a message"],
      ["prove", "your idea"],
      ["the ship's", "crew"],
      ["an abandoned", "house"],
    ]),
    gaps(
      "Complete with a word from the list above.",
      "1. The pyramids were built by an [ancient] civilization. 🏛️\n2. [Archaeologists] are digging near the old city. ⛏️\n3. There are many [theories] about how Stonehenge was built, but nobody knows for sure.\n4. Nobody has been able to [decode] the strange writing.\n5. The [crew] of the ship disappeared without a trace. ⚓\n6. The village was [abandoned] 100 years ago — nobody lives there now. 🏚️\n7. You can't [prove] it — you have no evidence!\n8. The [remains] of an old castle were found under the car park.",
    ),
    sort("Real or myth? Sort these famous mysteries. 🔍🐉", {
      "🔍 real places / objects": ["Stonehenge", "the Nazca Lines", "the Voynich manuscript", "the ship Mary Celeste"],
      "🐉 legends (not proved)": ["the Loch Ness monster", "the lost city of Atlantis", "Bigfoot", "the Yeti"],
    }),
  ]),

  section("Reading: Four mysteries", [
    tip("A long text (~440 words). First reading — 4 minutes: *Which mystery is the strangest, in your opinion?* Then the tasks. Ask the student to underline all modals of deduction in the text."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Some of Stonehenge's stones came from Wales, about 240 km away.", true],
        ["The Nazca Lines are easy to see from the ground.", false],
        ["Experts have finally decoded the Voynich manuscript.", false],
        ["The Voynich manuscript is about 600 years old.", true],
        ["The Mary Celeste was found with nobody on board.", true],
        ["The crew of the Mary Celeste were found a year later.", false],
      ],
      {
        read: [
          "## 🗿 Four mysteries nobody has solved",
          "**🪨 Stonehenge, England.** People started building this circle of giant stones about 5,000 years ago. Some of the smaller stones, called bluestones, came from hills in Wales — about 240 kilometers away. How did people without modern machines move them so far? They must have used wooden sledges, ropes and hundreds of workers. But WHY did they build it? The stones line up with the sun on the longest and shortest days of the year, so it might have been a calendar, a temple or a place for ceremonies. Archaeologists still argue.",
          "**🐦 The Nazca Lines, Peru.** In the desert of southern Peru, there are hundreds of giant drawings: a monkey, a spider, a hummingbird about 90 meters long. They were made about 2,000 years ago by moving dark stones to show the lighter ground below. The strange thing is that you can only really see them from the air. Who were they for? They might have been messages to the gods in the sky, or paths for ceremonies. They can't have been made for airplanes — but some people still believe that! 😄",
          "**📜 The Voynich manuscript.** This book has about 240 pages full of strange writing and pictures of plants that don't exist, stars and swimming women. Scientists tested the parchment and found that it was made in the early 1400s. But nobody — not even codebreakers from the Second World War — has been able to read it. It might be a secret code, an unknown language… or a clever joke. Today it's kept in a library at Yale University in the USA.",
          "**🚢 The Mary Celeste.** In December 1872, sailors on another ship saw the Mary Celeste sailing strangely in the Atlantic Ocean. When they climbed on board, they found nobody. The crew's clothes and personal things were still there, and there was food and water for six months. But the lifeboat was missing. The crew must have left the ship in a hurry — but why? They were never seen again.",
          "Some mysteries might be solved one day with new technology. Others might stay mysteries forever. And maybe that's what makes them so fascinating. ✨",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "How might people have moved the stones of Stonehenge?", options: ["*with wooden sledges, ropes and many workers", "with trucks", "with magic"] },
      { q: "Why might Stonehenge have been a calendar?", options: ["*The stones line up with the sun on special days.", "It has numbers on the stones.", "It was built in 365 days."] },
      { q: "How were the Nazca Lines made?", options: ["*by moving dark stones to show lighter ground", "by painting the desert", "by digging deep holes"] },
      { q: "What was missing from the Mary Celeste?", options: ["*the lifeboat", "the food", "the crew's clothes"] },
    ]),
    gaps(
      "Find words in the article.",
      "1. a simple vehicle that slides on the ground: a [sledge]\n2. special events, often religious: [ceremonies]\n3. old material for writing, made from animal skin: [parchment]\n4. people who try to break secret codes: [codebreakers]\n5. very quickly, because there's little time: in a [hurry]\n6. extremely interesting: [fascinating]",
    ),
  ]),

  section("Video: The world's most mysterious book", [
    tip("TED-Ed, about 5 minutes, about the Voynich manuscript. Before watching: *If you found a book nobody could read, what would you do?* After the video, ask which theory the student believes."),
    video("Watch: The world's most mysterious book — TED-Ed.", "8NS4CbBJQ84"),
    text(
      "After the video: talk to your teacher.",
      "- What theories about the book did the video mention? Which one do you believe?\n- Why do you think nobody has decoded it yet?\n- If you could solve one mystery from today's lesson, which would it be? 🔐",
    ),
  ]),

  section("Listening: The ghost ship", [
    tip("About 1.5 minutes. Zarina and Kenji discuss theories about the Mary Celeste on a podcast. First listen: *How many theories do they mention?* (three)"),
    ...listening(
      "Listen to a podcast. Zarina and Kenji discuss what happened to the Mary Celeste.",
      "**Zarina:** Welcome to \"Mystery Hour\"! Today: the Mary Celeste — the ghost ship. Kenji, what do you think happened?\n\n**Kenji:** Well, the most popular old theory is pirates. But I don't believe it. Pirates usually take everything valuable — but the crew's things were all still there. So it can't have been pirates.\n\n**Zarina:** Agreed. Another theory is that the crew got sick or went crazy from bad food.\n\n**Kenji:** Hmm, but there was plenty of fresh water and food on board. I don't think so.\n\n**Zarina:** So what's your theory?\n\n**Kenji:** I like the alcohol theory. The ship was carrying barrels of strong alcohol. Some barrels were later found empty. The captain might have smelled alcohol and thought the ship was going to explode. He must have panicked and told everyone to get into the lifeboat.\n\n**Zarina:** And then?\n\n**Kenji:** Maybe they tied the lifeboat to the ship with a rope, to wait and see. But the rope might have broken in a storm, and the ship sailed away without them.\n\n**Zarina:** Wow. So the ship was fine, but the people in the little boat were lost at sea. That's so sad.\n\n**Kenji:** It is. But it's only a theory. We'll probably never know for sure.\n\n**Zarina:** And that's why we love mysteries! Thanks, Kenji.",
    ),
    quiz("Listen and choose.", [
      { q: "Why does Kenji think it can't have been pirates?", options: ["*The crew's valuable things were still there.", "There were no pirates in 1872.", "The ship was too big."] },
      { q: "Why doesn't he believe the “bad food” theory?", options: ["*There was plenty of food and water on board.", "The crew never ate on the ship.", "The food was tested."] },
      { q: "What was the ship carrying?", options: ["*barrels of strong alcohol", "gold", "passengers"] },
      { q: "In Kenji's theory, what happened to the rope?", options: ["*It might have broken in a storm.", "The captain cut it.", "Pirates took it."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Kenji believes the pirate theory.", false],
      ["Some barrels were later found empty.", true],
      ["In Kenji's theory, the captain was afraid of an explosion.", true],
      ["Kenji says his theory is definitely true.", false],
      ["Zarina thinks the story is sad.", true],
    ]),
  ]),

  section("Review: deduction", [
    choose(
      "Choose the right form.",
      "1. The stones are very heavy. Moving them [*must have been/must be yesterday] very difficult.\n2. The Nazca Lines [*can't have been/must have been] made for airplanes — there were no planes then!\n3. The book [*might be/must have] a secret code.\n4. The crew [*must have left/must leave] in a hurry.\n5. It [*can't have been/must have been] pirates — nothing was taken.\n6. Stonehenge [*might have been/might be built] a calendar.\n7. Look at that strange light in the sky — it [*must be/must have been] a plane.\n8. Nobody can read the book. The writer [*might have invented/might invent] a new language.",
    ),
    drag(
      "Complete the archaeologist's notes.",
      "We found an ancient pot under the old house. It [must] be at least 2,000 years old — look at the style! It [can't] be Roman, because the Romans never came here. The people who made it [might] have used it for water or for food. There's black on the bottom, so it must [have] been used for cooking. The owners must have [left] in a hurry, because the pot was still full of seeds. 🏺 Our theory [might] change when we find more objects.",
      ["mustn't", "has", "leave"],
    ),
  ]),

  section("Let's talk: Your theory", [
    text(
      "Talk to your teacher 🕵️",
      "Choose one mystery from today. Present your own theory in 1–2 minutes:\n\n- What do we know for sure? (facts)\n- What must / might / can't have happened? (deductions)\n- What's your favorite theory and why?\n- What evidence would prove it?\n\nYour teacher plays a skeptic: *But how can you be sure? What about…?* 🤨\n\n**Then:** Should we try to solve every mystery — or are some mysteries better left unsolved?",
    ),
    tip("Push the student to separate facts from theories and to use all three levels of certainty. Being a skeptic makes the student defend their ideas — great speaking practice."),
  ]),

  section("Writing: My explanation", [
    order(
      "Put the example explanation in order.",
      [[
        "The Mary Celeste was found sailing with nobody on board.",
        "It can't have been pirates, because nothing valuable was taken.",
        "The captain might have thought the ship was going to explode.",
        "The crew must have jumped into the lifeboat in a hurry.",
        "In my opinion, the lifeboat must have been lost in a storm.",
      ].join("\n")],
      "lines",
    ),
    write("Choose one mystery from the lesson. Write your explanation (100 words): what we know, what must / might / can't have happened, and your own theory.", 100),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "very, very old =", options: ["*ancient", "abandoned", "mysterious"] },
      { q: "an idea that tries to explain something =", options: ["*a theory", "a crew", "a code"] },
      { q: "It ___ been pirates — nothing was stolen.", options: ["*can't have", "must have", "might"] },
      { q: "Where are the Nazca Lines?", options: ["*Peru", "England", "the USA"] },
    ]),
    box(
      "Phrase of the day: it's a mystery to me",
      "🤷 **It's a mystery to me** = I really don't understand it.\n\n*How my little brother always finds my chocolate is a mystery to me!* 🍫",
    ),
  ]),

  homework(
    [
      gaps(
        "Complete.",
        "1. The pyramids are [ancient] buildings.\n2. There's a [theory] that Stonehenge was a calendar.\n3. Nobody can [decode] the Voynich manuscript.\n4. The [crew] of the Mary Celeste disappeared.\n5. The ship was [abandoned] in the middle of the ocean.\n6. [Archaeologists] found old coins in the field.",
      ),
      choose(
        "Choose.",
        "1. The stones [*must have been/must be yesterday] moved by many people.\n2. The book [*can't have been/must have been] written last year — it's 600 years old!\n3. The lines [*might have been/might be] paths for ceremonies.\n4. They [*must have left/must leave] in a hurry.\n5. It [*can't/mustn't] be a real dragon in the photo!\n6. The crew [*might have got/might get] into the lifeboat.",
      ),
      match("Match the mysteries and the facts.", [
        ["Stonehenge", "lines up with the sun on special days"],
        ["The Nazca Lines", "best seen from the air"],
        ["The Voynich manuscript", "a book nobody can read"],
        ["The Mary Celeste", "a ship found with nobody on board"],
        ["Ötzi", "a 5,300-year-old iceman"],
        ["The Loch Ness monster", "a legend from Scotland"],
      ]),
    ],
    "Homework: Vocabulary and grammar",
  ),
  homework(
    [
      write("Find information about a mystery from your country or region (or invent one!). Write about it (100+ words): what happened, the theories, and what you think must or might have happened.", 100),
      record("Record a 1-minute “Mystery Hour” podcast: tell one mystery and give your theory. 🎙️", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
