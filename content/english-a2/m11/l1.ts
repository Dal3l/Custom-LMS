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
  table,
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 11.1 The person who… — a READING lesson: three real stories of inspiring people (Marie Curie, Malala Yousafzai, Mick Jagger & Keith Richards of the Rolling Stones). G: who / which / that / where (defining relative clauses). V: character. Say it right: weak "that". S: describe a person who inspires you. No video in class.
export default lesson("a2-11.1", "The person who…", () => [
  section("Warm-up: Who are they?", [
    box("Today you will…", "- read about three people who changed the world — or the music 🌍🎸\n- describe people and things: *the woman who… the song which…*\n- talk about a person who inspires you ✨"),
    picture("Who are they? What do you know about them?", ["photos/curie.jpg", "photos/malala.jpg", "photos/stones-1964.jpg"], "A scientist, an activist and a rock band arriving in Amsterdam in 1964"),
    text(
      "Talk to your teacher.",
      "- Do you know any of these people? What did they do? 🤔\n- Who is a person you really admire — famous or from your life? Why? ✨\n- Who was your hero when you were a child? Is it the same person now?\n- What makes a person “inspiring” for you: talent, courage, kindness, hard work…?",
    ),
    tip("The third photo is the Rolling Stones at Schiphol Airport, 1964 — the second “music easter egg” of the course 🎸. Let the student guess all three before reading."),
  ]),

  section("Vocabulary: Character", [
    words("Describing people", [
      ["brave", "🦁 not afraid"],
      ["determined", "🎯💪 doesn't stop until they succeed"],
      ["talented", "🌟 very good at something naturally"],
      ["hard-working", "🐝"],
      ["curious", "🔍 wants to know and learn everything"],
      ["generous", "🎁 likes giving to others"],
      ["honest", "🤝 tells the truth"],
      ["creative", "🎨💡 has new ideas"],
      ["inspiring", "✨ makes you want to do great things"],
      ["an activist", "📢 fights for a cause, e.g. education, nature"],
      ["a scientist — an inventor", "🔬 — 💡"],
      ["achieve", "🏆 succeed after hard work", "She achieved her dream."],
    ]),
    match("Match the words and the meanings.", [
      ["brave", "not afraid"],
      ["curious", "wants to know everything"],
      ["generous", "likes giving to others"],
      ["determined", "never stops trying"],
      ["honest", "tells the truth"],
      ["talented", "naturally very good at something"],
    ]),
    gaps(
      "Complete.",
      "1. She wasn't afraid to speak. She was very [brave]. 🦁\n2. He asks questions all the time — he's very [curious]. 🔍\n3. My grandma gives everything to her grandchildren. She's so [generous]. 🎁\n4. She practiced every day for 10 years. She's very [determined]. 🎯\n5. He plays five instruments — he's really [talented]. 🌟\n6. Her story is so [inspiring] — I want to try harder now! ✨\n7. She fights for clean rivers — she's an [activist]. 📢\n8. After years of hard work, he [achieved] his dream. 🏆",
    ),
  ]),

  section("Reading: People who changed the world", [
    tip("A long text in three parts. Read one person at a time. After each part, ask: *What did they do? What kind of person are they?* The student finds all the sentences with *who / which / where*."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Marie Curie was the first woman who won a Nobel Prize.", true],
        ["She won two Nobel Prizes in the same science.", false],
        ["Malala started writing a blog when she was 11.", true],
        ["Malala won the Nobel Peace Prize when she was 25.", false],
        ["Mick and Keith met again at a train station in 1961.", true],
        ["The name of the band comes from a song by Muddy Waters.", true],
      ],
      {
        read: [
          "## ✨ People who changed the world (and the radio!)",
          "**🔬 Marie Curie — the woman who won two Nobel Prizes.** Marie was born in Warsaw, Poland, in 1867. At that time, women couldn't study at university in her city, so she moved to Paris. She was a curious, hard-working scientist who studied radioactivity. In 1903 she became the first woman who won a Nobel Prize — for physics. In 1911 she won a second one — for chemistry. She is still the only person who has won Nobel Prizes in two different sciences.",
          "**📚 Malala Yousafzai — the girl who wanted to go to school.** Malala was born in Pakistan in 1997. When she was only 11, she started writing a blog for the BBC about life in her valley, where some people wanted to stop girls going to school. She spoke bravely about girls' education, and in 2012 she was attacked on her school bus. She survived, and she didn't stop. In 2014, when she was 17, she won the Nobel Peace Prize — the youngest person who has ever won it. 🕊️",
          "**🎸 Mick Jagger and Keith Richards — the friends who met at a train station.** Mick and Keith went to the same primary school in Dartford, England, but then they lost touch. In 1961, they met again on a platform at Dartford station. Mick was carrying records by American blues musicians — Chuck Berry and Muddy Waters — which Keith loved too. They started talking about music and never stopped! In 1962 they started a band. They took the name from a Muddy Waters song, “Rollin' Stone”.",
          "In 1965, Keith woke up in the middle of the night with a guitar riff in his head. He recorded it on a small cassette player that was next to his bed, and went back to sleep. In the morning, the tape had the riff — and then about 40 minutes of Keith snoring! 😴 That riff became “(I Can't Get No) Satisfaction”, the song which made the Rolling Stones world-famous. They played concerts for more than 60 years. 🤘",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Why did Marie move to Paris?", options: ["*Women couldn't study at university in her city.", "She wanted to be a musician.", "Her family lived there."] },
      { q: "What did Malala write about for the BBC?", options: ["*life in her valley and girls' education", "music and films", "science"] },
      { q: "What was Mick carrying at the station?", options: ["*records by blues musicians", "a guitar", "a cassette player"] },
      { q: "What was on Keith's tape after the riff?", options: ["*about 40 minutes of snoring", "a new song", "nothing"] },
    ]),
    text("Talk to your teacher.", "- Which story is the most inspiring for you? Why?\n- Which person was the bravest? The most determined? 🦁🎯\n- Have you ever had an idea in the middle of the night? What was it? 😄"),
  ]),

  section("Grammar: who, which, that, where", [
    quiz("Notice the rule 🔍 Look: “the woman who won two Nobel Prizes… the song which made them famous… her valley, where some people…” Which is true?", [
      { q: "We use who for…", options: ["*people", "things", "places"] },
      { q: "We use which for…", options: ["*things", "people", "places"] },
      { q: "We use where for…", options: ["*places", "people", "times"] },
    ]),
    table("who-which"),
    choose(
      "Choose.",
      "1. Marie Curie was a scientist [*who/which] won two Nobel Prizes.\n2. “Satisfaction” is the song [*which/who] made the Stones famous.\n3. Dartford is the town [*where/which] Mick and Keith met.\n4. Malala is the girl [*who/where] wanted to go to school.\n5. I have a friend [*who/which] speaks five languages.\n6. This is the café [*where/who] we first met.\n7. Is this the book [*that/who] you told me about?\n8. A cassette player is a machine [*which/who] plays tapes. 📼",
    ),
    gaps(
      "Complete with who, which or where.",
      "1. A pilot is a person [who/that] flies planes. ✈️\n2. A library is a place [where] you can borrow books. 📚\n3. A fridge is a thing [which/that] keeps food cold. 🧊\n4. The Beatles were the band [who/that/which] started Beatlemania. 🎸\n5. Liverpool is the city [where] the Beatles were born. 🏙️\n6. I don't like people [who/that] are never on time. ⏰\n7. This is the phone [which/that] I bought last week. 📱\n8. Do you know a shop [where] I can buy cheap headphones? 🎧",
    ),
    match("Match the beginnings and the endings.", [
      ["A dentist is a person", "who looks after your teeth."],
      ["A museum is a place", "where you can see old things."],
      ["A key is a thing", "which opens a door."],
      ["A fan is a person", "who loves a band or a team."],
      ["An airport is a place", "where planes take off and land."],
      ["A charger is a thing", "which gives power to your phone."],
    ]),
    drag(
      "Complete the text about a musician.",
      "My favorite musician is my uncle Daniyar, [who] plays the dombra. 🪕 He lives in a small village [where] everyone knows him. He has an old dombra [which] his grandfather made. He knows songs [that] are 100 years old! He's the person [who] taught me to love music. Last year he played at a concert [where] there were 2,000 people. It was the day [which] I'll never forget! 🎶",
      ["whose", "what"],
    ),
    order("Make sentences.", [
      "She's the woman who won two Nobel Prizes.",
      "This is the song which made them famous.",
      "That's the town where they met.",
      "He's the friend who helped me.",
      "It's a machine which plays tapes.",
    ]),
  ]),

  section("Say it right: that", [
    box(
      "🗣️ Say it right",
      "**that** has two sounds:\n\n**/ðæt/** — strong, when we point: *Look at **that**! 👉*\n\n**/ðət/** — weak, in the middle of a sentence: *the song **that** made them famous* → “the song **thət** made…”\n\nThe weak **that** is fast and quiet — the important words are the noun and the verb.",
    ),
    quiz("Strong /ðæt/ or weak /ðət/? Choose.", [
      { q: "Is THAT your bag? 👉", options: ["*strong /ðæt/", "weak /ðət/"] },
      { q: "It's the phone THAT I bought.", options: ["*weak /ðət/", "strong /ðæt/"] },
      { q: "I know THAT! 😄", options: ["*strong /ðæt/", "weak /ðət/"] },
      { q: "He's the man THAT helped me.", options: ["*weak /ðət/", "strong /ðæt/"] },
    ]),
    tip("Read the pairs; the student shows 👉 for strong and ✋ for weak. Then the student describes 3 objects in the room with a weak *that*: *It's the lamp that I bought in IKEA.*"),
  ]),

  section("Listening: Who am I?", [
    ...listening(
      "Listen. Dana and Arman play “Who am I?”. Guess the answers before they do!",
      "**Dana:** OK, my turn. I'm thinking of a person who was born in Liverpool. He was in a band which changed music forever. He wrote a song which is called “Imagine”.\n\n**Arman:** Easy! John Lennon! 🎸\n\n**Dana:** Correct! One point. Your turn.\n\n**Arman:** OK. I'm thinking of a place where it's very cold. It's the place where penguins live, and where there are no cities at all. 🐧\n\n**Dana:** Antarctica!\n\n**Arman:** Yes! Next: I'm thinking of a thing which you use every day. It's a thing which wakes you up in the morning — but you can also call people with it.\n\n**Dana:** A phone!\n\n**Arman:** Right! OK, last one — a difficult one. I'm thinking of a woman who was born in Poland. She was a scientist who won two Nobel Prizes.\n\n**Dana:** Hmm… Marie Curie!\n\n**Arman:** Wow, you're good! Three points for you, zero for me. 😄",
    ),
    quiz("Listen and choose.", [
      { q: "Where was the first person born?", options: ["*in Liverpool", "in London", "in Poland"] },
      { q: "What song did he write?", options: ["*“Imagine”", "“Satisfaction”", "“Yesterday”"] },
      { q: "What lives in the cold place?", options: ["*penguins", "polar bears", "camels"] },
      { q: "What's the final score?", options: ["*Dana 3, Arman 0", "Dana 2, Arman 1", "Dana 1, Arman 2"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["John Lennon was in a band which changed music.", true],
      ["There are many cities in the cold place.", false],
      ["The thing wakes you up in the morning.", true],
      ["The last person was born in France.", false],
      ["Arman guessed all the answers.", false],
    ]),
  ]),

  section("Let's talk: A person who inspires me", [
    text(
      "Talk to your teacher ✨",
      "Tell your teacher about a person who inspires you — famous or from your life (a parent, a teacher, a friend, a musician…):\n\n- Who is it? *It's my grandmother, who…*\n- What did they do? What are they like? (brave, determined, generous…)\n- What's something which they taught you?\n- Is there a place where you always think of them?\n\nYour teacher asks follow-up questions — then tells you about their hero!",
    ),
    text(
      "Game: Definitions ⏱️",
      "Explain a word without saying it — use *who, which, where*. Your teacher guesses!\n\n*It's a person who… · It's a thing which… · It's a place where…*\n\nIdeas: a chef · a passport · a stadium · a neighbor · a hotel · a guitar · a teacher · a beach",
    ),
    tip("*If you have time:* “My playlist” 🎶 — the student describes 3 songs with *which / that*: *It's the song which I listen to when I'm sad… the song that reminds me of summer 2020…*"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "She's the woman ___ won two Nobel Prizes.", options: ["*who", "which", "where"] },
      { q: "It's the song ___ made them famous.", options: ["*which", "who", "where"] },
      { q: "That's the café ___ we met.", options: ["*where", "which", "who"] },
      { q: "never stops trying =", options: ["*determined", "generous", "honest"] },
    ]),
    box("Word of the day: a role model", "**a role model** 🌟 = a person you want to be like.\n\n*Marie Curie is a role model for many young scientists.*"),
  ]),

  homework(
    [
      gaps(
        "Write the word.",
        "1. 🦁 not afraid: [brave]\n2. 🔍 wants to know everything: [curious]\n3. 🎁 likes giving to others: [generous]\n4. 🤝 tells the truth: [honest]\n5. ✨ makes you want to do great things: [inspiring]\n6. 🌟 a person you want to be like: a role [model]",
      ),
      match("Match.", [
        ["Marie Curie", "won two Nobel Prizes"],
        ["Malala Yousafzai", "won the Nobel Peace Prize at 17"],
        ["Keith Richards", "recorded a riff in the night"],
        ["Mick Jagger", "was carrying blues records"],
        ["Muddy Waters", "sang “Rollin' Stone”"],
        ["Dartford", "the town where Mick and Keith met"],
      ]),
    ],
    "Homework: Vocabulary and reading",
  ),
  homework(
    [
      video("Watch: relative pronouns who, which, that.", "QmMGo265bWk"),
      gaps(
        "Complete with who, which or where.",
        "1. A chef is a person [who/that] cooks in a restaurant.\n2. A stadium is a place [where] you can watch football.\n3. A passport is a document [which/that] you need to travel.\n4. My best friend is the person [who/that] knows all my secrets.\n5. This is the hotel [where] we stayed last summer.\n6. Do you have a song [which/that] always makes you happy?",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      write("Write about a person who inspires you. Who are they? What did they do? What are they like? What have they taught you? Use who, which and where. (70+ words)", 70, {
        read: "*Example:* The person who inspires me most is my mom. She's a doctor who works in a children's hospital. She's the most hard-working and generous person I know. When I was little, she had a job which was very difficult — she worked at night and studied in the day. 📚 She taught me that you can achieve anything if you're determined. My favorite place is the kitchen, where we talk every evening. ❤️",
      }),
      record("Record your answer: Describe a famous person you admire — but don't say their name! Your teacher will guess. (1 minute)", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
