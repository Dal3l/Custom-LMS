import {
  box,
  choose,
  drag,
  gaps,
  homework,
  lesson,
  listening,
  match,
  matchPictures,
  order,
  quiz,
  record,
  section,
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 2.3 Urban legends — skills lesson: true or myth? (reading with real facts), a legend told as a story (listening), a video; writing a picture story (A2 Key Part 7); review of module 2.
export default lesson("a2-2.3", "Urban legends", () => [
  section("Warm-up: True or myth?", [
    box("Today you will…", "- read about famous stories: are they true or myths? 🤔\n- listen to a classic urban legend 👻\n- write a story from pictures (like in the A2 Key exam)"),
    quiz("Vote! True or myth? Guess — we check later. 🗳️", [
      { q: "A goldfish can only remember things for 3 seconds. 🐠", options: ["*Myth", "True"] },
      { q: "Lightning never hits the same place twice. ⚡", options: ["*Myth", "True"] },
      { q: "You can see the Great Wall of China from the Moon. 🌕", options: ["*Myth", "True"] },
      { q: "Once, people found an alligator in a New York sewer. 🐊", options: ["*True", "Myth"] },
    ]),
    tip("Let the student choose, but don't press “Check” yet — check after the reading. It's OK to guess wrong — that's the fun! Ask: *Who told you that? Where did you hear it?*"),
    text("Talk to your teacher.", "- Do you believe everything you read online? 📱\n- What “facts” did you believe when you were a child? 😄"),
  ]),

  section("Vocabulary: True or false?", [
    words("Stories and facts", [
      ["an urban legend", "🏙️👻 a strange story that many people tell, but often it isn't true"],
      ["a myth", "❌ an idea that many people believe, but it's wrong"],
      ["a rumor", "🗣️ a story people tell, nobody knows if it's true · 🇬🇧 rumour"],
      ["a hoax", "🎭 a trick: a fake story or photo"],
      ["fake — real", "❌ — ✅", "The photo was fake."],
      ["believe", "🤝 think something is true", "I don't believe it!"],
      ["prove", "🔬 show that something is true"],
      ["go viral", "📈 spread very fast online", "The video went viral."],
      ["a scientist", "👩‍🔬"],
      ["a sewer", "🕳️ pipes under the street for dirty water"],
    ]),
    match("Match.", [
      ["a hoax", "a trick, a fake story"],
      ["go viral", "spread very fast online"],
      ["prove", "show that it's true"],
      ["a rumor", "a story — nobody knows if it's true"],
      ["a myth", "a wrong idea that many people believe"],
    ]),
    gaps("Complete.", "1. The video went [viral] — 10 million views in one day! 📈\n2. It wasn't a real photo. It was [fake]. ❌\n3. Scientists can [prove] it with tests. 🔬\n4. I don't [believe] you! 🤨"),
  ]),

  section("Reading: Myth busters", [
    tip("Read one fact at a time and come back to the votes from the warm-up. Count the points: how many did the student guess? 🏆"),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Goldfish can remember things for months.", true],
        ["Lightning hits the Empire State Building about once a year.", false],
        ["A Chinese astronaut said he couldn't see the Great Wall from space.", true],
        ["The teenagers in New York were shoveling snow when they found the alligator.", true],
        ["The famous 1934 photo of Nessie was real.", false],
      ],
      {
        read: [
          "## 🔍 Myth busters: 5 famous stories",
          "**🐠 Goldfish have a 3-second memory.** MYTH! Scientists tested goldfish many times. The fish learned to find food, push buttons and swim through small mazes. They remembered these things for weeks and even months.",
          "**⚡ Lightning never strikes the same place twice.** MYTH! Lightning often hits tall buildings again and again. The Empire State Building in New York gets hit more than 20 times every year!",
          "**🧱 You can see the Great Wall of China from the Moon.** MYTH! The wall is very long, but it's not very wide. In 2003, Yang Liwei, the first Chinese astronaut, was flying around the Earth. He looked for the wall, but he couldn't see it.",
          "**🐊 An alligator lived in a New York sewer.** TRUE — once! In February 1935, some teenagers in Harlem were shoveling snow into a sewer when they noticed something moving. It was an alligator! The New York Times wrote about it the next day. Nobody knows how it got there.",
          "**🦕 There's a monster in Loch Ness.** Probably a MYTH. In 1934, a photo of “Nessie” — a long neck in a Scottish lake — became world-famous. But in 1994, people learned the truth: it was a toy submarine with a model head! People are still looking for Nessie today. 🔭",
        ].join("\n\n"),
      },
    ),
    matchPictures("Match the photos and the stories.", [
      ["photos/legend-goldfish.jpg", "a 3-second memory?"],
      ["photos/legend-lightning.jpg", "never in the same place twice?"],
      ["photos/legend-wall.jpg", "seen from space?"],
      ["photos/legend-alligator.jpg", "in a New York sewer"],
      ["photos/legend-nessie.jpg", "a monster in the lake?"],
    ]),
    quiz("Read again. Choose.", [
      { q: "Why can't you see the Great Wall from space?", options: ["*It isn't very wide.", "It's too short.", "It's under the clouds."] },
      { q: "What was the Nessie photo really?", options: ["*a toy with a model head", "a big fish", "a boat"] },
      { q: "When did the teenagers find the alligator?", options: ["*in winter", "in summer", "at night"] },
    ]),
    text("Talk to your teacher.", "- How many did you guess right in the warm-up? 🏆\n- Which fact surprised you the most? 😲\n- Do you know other “facts” that are myths?"),
  ]),

  section("Listening: The ghost on the road", [
    ...listening(
      "Listen to a famous urban legend. It's a story people tell in many countries. 👻",
      "**Storyteller:** This story happened — they say — on a dark, rainy night. A young man was driving home from a party. It was late, and the road was empty.\n\nSuddenly, he saw a girl. She was standing at the side of the road. She was wearing a white dress, and she was very wet. 🌧️\n\nHe stopped the car. “Can I help you?” he asked. “Please take me home,” the girl said quietly. She gave him an address and got into the back seat.\n\nWhile he was driving, he tried to talk to her, but she didn't say anything. It was very cold in the car. ❄️\n\nWhen they arrived at the address, he turned around… The back seat was empty! The girl wasn't there.\n\nHe knocked on the door of the house. An old woman opened it. He told her about the girl. The woman looked at him sadly. “That was my daughter,” she said. “She died on that road twenty years ago. Tonight is her birthday. Every year, somebody brings her home…” 👻",
    ),
    quiz("Listen and choose.", [
      { q: "Where was the man going?", options: ["*home from a party", "to work", "to the airport"] },
      { q: "What was the girl wearing?", options: ["*a white dress", "a black coat", "a red hat"] },
      { q: "What did the man notice in the car?", options: ["*It was very cold.", "The radio was on.", "The girl was crying."] },
      { q: "Who opened the door?", options: ["*an old woman", "the girl", "an old man"] },
    ]),
    order("Put the story in order.", ["A man was driving home.\nHe saw a girl at the side of the road.\nShe got into the car.\nThe back seat was empty.\nAn old woman opened the door."], "lines"),
    tip("This is one of the most famous urban legends in the world — “the vanishing hitchhiker”. Ask: *Do you believe it? Do you know a similar story from your country?*"),
  ]),

  section("Video: The truth in urban legends", [
    video("Watch the first 4–5 minutes. This is slow, clear English for learners. Why do people tell urban legends?", "MgSNI_RpZUY"),
    text("Talk to your teacher.", "- Why do people tell urban legends, in the video? 🤔\n- Which legend from the video do you remember?"),
  ]),

  section("Review: Module 2", [
    choose(
      "Choose.",
      "1. The man [*was driving/drove] home when he saw a girl.\n2. [*While/When] he was driving, she didn't say anything.\n3. When they arrived, he [*turned/was turning] around.\n4. The teenagers [*were shoveling/shoveled] snow when they noticed the alligator.\n5. What [*were/was] you doing at 10 last night?",
    ),
    gaps(
      "Complete with the right form.",
      "1. It [was raining] when I left the house. (rain)\n2. While she was reading, the cat [jumped] on the table. (jump)\n3. I [wasn't listening/was not listening], so I didn't hear the question. (not listen)\n4. When the film [ended], we went home. (end)",
    ),
    drag(
      "Retell the legend.",
      "It was a dark night. A man [was] driving home [when] he saw a girl. She [was] standing by the road. He [stopped] the car. [While] he was driving, she didn't say a word. [Suddenly], she disappeared! 👻",
      ["did", "during", "were"],
    ),
  ]),

  section("Writing: A picture story", [
    box(
      "✍️ A2 Key, Writing Part 7: a story from 3 pictures",
      "- **35+ words**\n- write about **all 3 pictures**\n- Past Simple + Past Continuous: *It was raining when…*\n- story words: *at first, suddenly, in the end*",
    ),
    write(
      "Look at the pictures and write the story. (35+ words)\n\n1️⃣ 🌧️🚶‍♀️📱 Mia — rain — walking home\n2️⃣ 🐶🗑️ a little wet dog behind a bin\n3️⃣ 🏠🐶❤️ Mia's home — the dog on the sofa",
      35,
      {
        read: "*Example start:* It was raining, and Mia was walking home from school. Suddenly, she heard a noise…",
      },
    ),
    tip("Check together: all 3 pictures? 35+ words? Past Continuous for the background (*It was raining*), Past Simple for the events? Give 1 point for each ✅ — like the exam."),
  ]),

  section("Let's talk: Storyteller", [
    text(
      "Tell a legend 🕯️",
      "Retell “The ghost on the road” in your own words — like you're telling it at night by a campfire. 🔥\n\nOR tell a legend, a rumor or a strange story from your city or country.\n\n*They say… One night… Suddenly… Nobody knows…*",
    ),
    text("Talk to your teacher.", "- How can you check if a story online is true? 🔍\n- Did you ever share something fake by mistake? 😅\n- Why do fake stories go viral so fast? 📈"),
    tip("*If you have time:* “Two facts and a myth” — the student says 3 “facts” about themselves or the world, one is a myth. You guess with *Really? Can you prove it?*"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "a trick, a fake story =", options: ["*a hoax", "a scientist", "a sewer"] },
      { q: "The video ___ viral.", options: ["*went", "made", "did"] },
      { q: "It ___ when I left the house.", options: ["*was raining", "rained", "were raining"] },
    ]),
    box("Word of the day: take it with a pinch of salt", "**take something with a pinch of salt** 🧂 = don't believe it 100%.\n\n*He says he saw Nessie. I take it with a pinch of salt!*"),
  ]),

  homework(
    [
      gaps("Complete.", "1. a story that many people tell, but often isn't true: an urban [legend]\n2. ❌ not real: [fake]\n3. 🎭 a trick, a fake photo: a [hoax]\n4. 📈 spread very fast online: go [viral]"),
      trueFalse("From the lesson: true or myth?", [
        ["Goldfish remember things for only 3 seconds.", false],
        ["Lightning can hit the same building many times.", true],
        ["You can see the Great Wall from the Moon.", false],
      ]),
    ],
    "Homework: Vocabulary and reading",
  ),
  homework(
    [
      video("Watch: BBC Learning English — what is “fake news”?", "8X5B93C6OKI"),
      write("Write 3 tips: How can we check if a story online is real?", null),
    ],
    "Homework: Video",
  ),
  homework(
    [
      choose("Choose.", "1. While I [*was walking/walked] home, I saw a strange light.\n2. She [*was sleeping/slept] when the phone rang.\n3. When he heard the noise, he [*called/was calling] the police.\n4. [*Were/Did] you watching the news?"),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      write("Write an urban legend or a strange story (real or invented). Start with: “It was a dark night…” (60+ words)", 60),
      record("Record your legend — tell it in a scary voice! 👻 (1–2 minutes)", 120),
    ],
    "Homework: Writing and speaking",
  ),
]);
