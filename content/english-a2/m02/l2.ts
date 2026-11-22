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

// 2.2 And then… — G: when / while, Past Continuous vs Past Simple. V: story words (suddenly, at first…) and feelings. Say it right: linking (was_eating). S: tell a story. Main format: a game (story dice) + a short story + listening.
export default lesson("a2-2.2", "And then…", () => [
  section("Warm-up: Story dice", [
    box("Today you will…", "- tell a story: *I was walking home when suddenly…* ⚡\n- use *when* and *while*\n- use story words: *at first, suddenly, a few minutes later…*"),
    text(
      "Game: Story dice 🎲",
      "Your teacher “throws the dice” — chooses 3 pictures. Make a short story with them!\n\n🌧️ rain · 🐶 a dog · 📱 a phone · 🚌 a bus · 🎂 a cake · 🔑 keys · 🏃 run · 🌙 night · 🎁 a present · 🚲 a bike · 🍕 pizza · 👻 a strange noise\n\n*Example:* 🌧️ 🐶 🔑 → *Last Friday it was raining. I lost my keys, and a dog found them!*",
    ),
    tip("Use the numbers 1–12: the student says 3 numbers, you name the pictures. Tell a story first yourself, then the student. Don't correct grammar now — just enjoy the stories."),
    text("Talk to your teacher.", "- Who tells the best stories in your family? 👵\n- Do you like stories: films, books, podcasts, TikTok “storytime”? 🎬📚🎧"),
  ]),

  section("Vocabulary: Telling a story", [
    words("Story words", [
      ["at first", "1️⃣ at the beginning", "At first, everything was fine."],
      ["suddenly", "⚡ very fast, you don't expect it", "Suddenly, the lights went off."],
      ["a few minutes later", "⏱️"],
      ["immediately", "⚡ = at once, right now"],
      ["finally", "🏁 after a long time", "Finally, the bus came."],
      ["notice", "👀 see something for the first time", "I noticed a man in a red hat."],
      ["realize", "💡🧠 understand", "I realized it was the wrong bus!"],
      ["shout — scream", "📢 — 😱"],
      ["drop", "🫳📱 let something fall", "I dropped my phone."],
      ["knock on the door", "🚪✊"],
    ]),
    words("Feelings", [
      ["scared", "😨 = afraid"],
      ["surprised", "😲"],
      ["embarrassed", "😳 you feel silly in front of people"],
      ["relieved", "😮‍💨 happy because a problem ended"],
      ["confused", "😕 you don't understand"],
    ]),
    match("Match the feelings.", [
      ["😨", "scared"],
      ["😲", "surprised"],
      ["😳", "embarrassed"],
      ["😮‍💨", "relieved"],
      ["😕", "confused"],
    ]),
    sort("Beginning, middle or end of a story? Sort.", {
      "1️⃣ beginning": ["at first", "one day", "last summer"],
      "⚡ middle": ["suddenly", "a few minutes later", "then"],
      "🏁 end": ["finally", "in the end"],
    }),
    gaps("Complete.", "1. I [dropped] my phone, and the screen broke. 📱💔\n2. Somebody [knocked] on the door at midnight. 🚪\n3. Then I [realized] — it was my birthday! 🎂\n4. I fell on the stairs in front of everyone. I was so [embarrassed]! 😳"),
  ]),

  section("Reading: The wrong door", [
    tip("Before reading, look at the title and ask: *What happened, do you think?* After reading, ask: *How did Dan feel at the beginning? And at the end?*"),
    order(
      "Read the story. Then put the events in order.",
      ["Dan was coming home late.\nHis key didn't work.\nHe noticed a woman in the kitchen.\nHe realized it was the wrong building.\nThe woman gave him a cup of tea."],
      "lines",
      {
        read: [
          "## 🚪 The wrong door",
          "It was a cold night in January. Dan was coming home late after a long day at work. It was snowing, and he was very tired. 😴",
          "At first, everything was normal. He went into his building, walked up to the third floor and tried to open his door. But his key didn't work! He tried again and again. 🔑❌",
          "Suddenly, the door opened. A woman in pajamas was standing there. Behind her, Dan noticed a big dog. The dog was looking at him… and it wasn't smiling. 🐕",
          "“What are you doing in my flat?” Dan asked. The woman was very surprised. “Your flat? This is MY flat!” she said.",
          "Then Dan realized his mistake. All the buildings on his street look the same — he was in building 7, not building 9! He was so embarrassed. 😳",
          "Luckily, the woman laughed. “It's OK,” she said. “It happens! Come in, have a cup of tea — it's cold outside.” Now Dan and Olga are good friends. And the dog likes him too! 🍵🐶",
        ].join("\n\n"),
      },
    ),
    trueFalse("Read again. True or false?", [
      ["It was raining that night.", false],
      ["Dan's key didn't open the door.", true],
      ["The woman was wearing pajamas.", true],
      ["Dan lives in building 7.", false],
    ]),
    quiz("Read again. Choose.", [
      { q: "How did Dan feel when he realized his mistake?", options: ["*embarrassed", "relieved", "scared"] },
      { q: "Why did Dan go to the wrong building?", options: ["*All the buildings on his street look the same.", "He was reading his phone.", "Somebody changed the number."] },
    ]),
  ]),

  section("Grammar: when / while", [
    quiz("Notice the rule 🔍 Look: “Dan was coming home late. … Suddenly, the door opened.” Which action was long and which was short?", [
      { q: "“was coming home” is…", options: ["*a long action — it was in progress", "a short action — it happened at one moment"] },
      { q: "“the door opened” is…", options: ["*a short action — it interrupts the long action", "a long action"] },
    ]),
    table("when-while"),
    choose(
      "Choose.",
      "1. I was sleeping [*when/while] the phone rang.\n2. [*While/When] we were having dinner, the lights went off.\n3. She [*was walking/walked] to school when she saw an accident.\n4. When he [*opened/was opening] the door, the dog ran in.\n5. They were talking [*while/when] the teacher was writing.",
    ),
    gaps(
      "Past Simple or Past Continuous? Write the verbs.",
      "1. I [was cooking] dinner when the phone rang. (cook)\n2. While we were walking in the park, it [started] to rain. (start)\n3. When she [saw] the spider, she screamed. (see)\n4. He [was driving] home when he noticed the police car. (drive)",
    ),
    drag(
      "Complete the story.",
      "Last summer I [was] swimming in the sea [when] I saw something big in the water! At first I [was] scared. [While] I was swimming to the beach, I [realized] — it was a dolphin! 🐬",
      ["did", "realizing", "during"],
    ),
    order("Make sentences.", ["I was walking home when it started to rain.", "While she was sleeping, someone knocked on the door.", "We were watching a film when the lights went off."]),
  ]),

  section("Say it right: was_eating", [
    box(
      "🗣️ Say it right: linking",
      "When a word ends with a consonant and the next word starts with a vowel, we join them:\n\n**was_eating** → /wəˈziːtɪŋ/ · **were_on** → /wərɒn/ · **woke_up** → /wəʊˈkʌp/\n\n*I was_eating an_apple when_I heard_it.*",
    ),
    quiz("Which word links with the word before it? Choose.", [
      { q: "I was + …", options: ["*eating", "running"] },
      { q: "She woke + …", options: ["*up", "late"] },
      { q: "It happened when + …", options: ["*I was sleeping", "my mom called"] },
    ]),
    tip("Say the sentences slowly, then fast, linking the words: *He was_eating. I woke_up at_eight.* The student repeats. Then the student reads the first paragraph of the Dan story with linking."),
  ]),

  section("Listening: Storytime podcast", [
    ...listening(
      "Listen to a podcast. Two people tell funny stories.",
      "**Host:** Welcome to Storytime! Today's topic: embarrassing moments. Kate, you first!\n\n**Kate:** OK! Last year I was waiting for a bus. I was listening to music, and I was singing along… quite loudly. 🎧🎤 Suddenly, I noticed that everyone was looking at me. I took off my headphones — and they started clapping! I was so embarrassed! 😳\n\n**Host:** Ha-ha! What song was it?\n\n**Kate:** Don't ask! 😄\n\n**Host:** Sam, your turn.\n\n**Sam:** Well, I was having a video call with my new boss. I was wearing a nice shirt… and my pajama trousers. 👔🩳 While we were talking, my cat jumped on the table. I stood up to catch her — and my boss saw everything!\n\n**Host:** Oh no! What did he say?\n\n**Sam:** He laughed and said, “Nice pajamas!” Luckily, he has a great sense of humor.",
    ),
    quiz("Listen and choose.", [
      { q: "What was Kate doing when people started clapping?", options: ["*singing at a bus stop", "dancing in the street", "playing the guitar"] },
      { q: "What was Sam wearing?", options: ["*a nice shirt and pajama trousers", "a suit", "only pajamas"] },
      { q: "Why did Sam stand up?", options: ["*to catch his cat", "to answer the door", "to get some coffee"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Kate was listening to a podcast.", false],
      ["Sam's boss was angry.", false],
    ]),
  ]),

  section("Video: A story on the road", [
    video("Watch a travel story with the Past Simple and the Past Continuous. What problems did the travelers have?", "rgHYy90qj2w"),
    text("Talk to your teacher.", "- What problems happened in the video? 🧳\n- Find 2 sentences with *when* or *while*. Say them."),
  ]),

  section("Let's talk: Tell a story", [
    text(
      "Your story 🎙️",
      "Tell a short story about one of these. Use *at first, suddenly, when, while, in the end* and say how you felt.\n\n- an embarrassing moment 😳\n- a time you were really scared 😨\n- a lucky day 🍀\n- a strange thing you saw in the street 👀\n\n*It was… I was… when suddenly… At first I felt… In the end…*",
    ),
    tip("Give 1 minute to prepare. While the student is telling the story, react like a friend: *No way! Really? And then what?* — and teach these reactions at the end."),
    text("Talk to your teacher.", "- What do you say when a friend tells a story? *Really? No way! Oh no!* 😮\n- Do you tell stories well? What makes a story interesting?"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "I ___ TV when you called.", options: ["*was watching", "watched", "were watching"] },
      { q: "___ I was cooking, he was cleaning.", options: ["*While", "When", "During"] },
      { q: "😮‍💨 happy because a problem ended =", options: ["*relieved", "embarrassed", "confused"] },
    ]),
    box("Word of the day: plot twist", "**a plot twist** 🌀 = something surprising in a story that changes everything.\n\n*Plot twist: the woman in the wrong flat became Dan's best friend!*"),
  ]),

  homework(
    [
      match("Match.", [
        ["knock", "on the door"],
        ["drop", "your phone"],
        ["realize", "your mistake"],
        ["a few minutes", "later"],
      ]),
      gaps("Write the feeling.", "1. I saw a big spider. I was [scared]. 😨\n2. I found my keys! I was so [relieved]. 😮‍💨\n3. I didn't understand the map. I was [confused]. 😕\n4. My friends had a party for me! I was [surprised]. 😲"),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      video("Watch the grammar video: when and while.", "VnsFJsmAmgk"),
      choose("Choose.", "1. He was reading [*when/while] the lights went off.\n2. I [*was running/ran] when I fell.\n3. While she [*was waiting/waited] for the bus, she called her mom.\n4. When the teacher came in, we [*stopped/were stopping] talking."),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      trueFalse(
        "Read the story. True or false?",
        [
          ["Nurlan was jogging in the morning.", true],
          ["He found a wallet on a bench.", true],
          ["The wallet belonged to a teacher.", false],
          ["Nurlan got a reward.", true],
        ],
        {
          read: "🍀 **A lucky morning.** Last Saturday Nurlan was jogging in the park. While he was running past a bench, he noticed a black wallet on it. There was a lot of money inside and a driver's license. Nurlan called the number on a business card in the wallet. A man answered — he was a doctor, and he was looking for his wallet everywhere! He was so relieved. When they met, the doctor gave Nurlan two tickets to a football match as a thank-you. ⚽",
        },
      ),
    ],
    "Homework: Reading",
  ),
  homework(
    [
      write("Write a story: “An embarrassing (or lucky) moment”. Use when, while, suddenly, in the end. Say how you felt. (60+ words)", 60, {
        read: "*Example:* Last winter I was walking to school. It was snowing and I was listening to music. Suddenly, I slipped on the ice and fell — right in front of my class! At first I was very embarrassed. 😳 While I was standing up, my friend came and helped me. In the end, we laughed about it all day.",
      }),
      record("Record your story (1–2 minutes). Tell it like a podcast: “Welcome to my storytime!”", 120),
    ],
    "Homework: Writing and speaking",
  ),
]);
