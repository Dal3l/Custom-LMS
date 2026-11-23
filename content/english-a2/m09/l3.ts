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

// 9.3 Blue zones — skills lesson with a LONG READING (the places where people live longest, real facts), a short video (one of two class videos in the module), writing advice for a long life; review of module 9. The listening is at home.
export default lesson("a2-9.3", "Blue zones", () => [
  section("Warm-up: Who lives to 100?", [
    box("Today you will…", "- read about the places where people live the longest 🌍👵👴\n- talk about healthy habits — and your grandparents' secrets\n- write advice for a long and happy life ✍️"),
    text(
      "Talk to your teacher.",
      "- Who's the oldest person you know or knew? How old? What were they like? 👵\n- What's the secret of a long life, do you think? Guess 3 things!\n- Would you like to live to 100? Why / why not? 🎂\n- What did your grandparents eat and do every day that people don't do now?",
    ),
    tip("Write the student's 3 guesses about the secrets of a long life on the board — after the reading, check how many were right! 🏆"),
  ]),

  section("Vocabulary: A long life", [
    words("Long life", [
      ["live to 100", "🎂💯"],
      ["a centenarian", "👵💯 a person who is 100 or older"],
      ["live longer — life expectancy", "📈 how long people usually live"],
      ["a habit — a healthy habit", "🔁 — 💚🔁"],
      ["beans — nuts — whole grains", "🫘 — 🥜 — 🌾"],
      ["plant-based", "🥦🫘 mostly vegetables, beans, fruit — little meat"],
      ["a garden — grow vegetables", "🌱🥕"],
      ["a community", "🏘️👥 people who live together and help each other"],
      ["a purpose (in life)", "🎯 a reason to get up in the morning"],
      ["stress — stressed", "😫"],
      ["a nap", "😴 a short sleep in the day"],
      ["a secret", "🤫🔑"],
    ]),
    matchPictures("The five blue zones. Match the photos.", [
      ["photos/bz-okinawa.jpg", "Okinawa, Japan"],
      ["photos/bz-sardinia.jpg", "Sardinia, Italy"],
      ["photos/bz-ikaria.jpg", "Ikaria, Greece"],
      ["photos/bz-nicoya.jpg", "Nicoya, Costa Rica"],
      ["photos/bz-lomalinda.jpg", "Loma Linda, California, USA"],
    ]),
    gaps(
      "Complete.",
      "1. My great-grandmother lived to 100 — she was a [centenarian]! 🎂\n2. Walking every day is a healthy [habit]. 🔁\n3. Her diet is [plant-based] — mostly vegetables and beans. 🥦\n4. Grandpa grows [vegetables] in his garden. 🥕\n5. In a village, people know and help each other — it's a strong [community]. 🏘️\n6. My grandma says her [purpose] in life is her family. 🎯\n7. A short sleep after lunch is a [nap]. 😴\n8. What's the [secret] of a happy life? 🤫",
    ),
  ]),

  section("Reading: The secrets of the blue zones", [
    tip("A long text (about 330 words). Read it in three parts: 1) what blue zones are, 2) the five places, 3) the common secrets. After each part, the student summarizes in one sentence. Then check the warm-up guesses!"),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Dan Buettner worked with National Geographic.", true],
        ["The name comes from blue circles on a map.", true],
        ["There are ten blue zones.", false],
        ["In Okinawa, people stop eating when they're about 80% full.", true],
        ["People in blue zones go to the gym every day.", false],
        ["All scientists agree that the blue zones numbers are perfect.", false],
      ],
      {
        read: [
          "## 🌍 The secrets of the blue zones",
          "**What are blue zones?** In the early 2000s, an American writer, **Dan Buettner**, worked with National Geographic and a team of scientists. They wanted to find the places in the world where people live the longest — and stay healthy. When they found these places, they drew blue circles on a map. That's why they're called **blue zones**. 🔵",
          "**The five places.** There are five blue zones: **Okinawa** in Japan, **Sardinia** in Italy, **Ikaria** in Greece, the **Nicoya** peninsula in Costa Rica and the town of **Loma Linda** in California, USA. In these places, many more people live to 100 than in most other parts of the world. In the mountains of Sardinia, there are a surprising number of men who are 100 or older. 👴",
          "**What's the secret?** The people in these places live very far from each other, but they have the same habits:",
          "**🚶 They move every day.** They don't go to the gym. They walk, work in their gardens, and do housework. Movement is a natural part of their day.",
          "**🫘 They eat a lot of plants.** Their food is mostly vegetables, beans, whole grains and nuts. They eat meat only a few times a month. In Okinawa, people say *hara hachi bu* before meals — it means “stop eating when you are 80% full”.",
          "**👫 They have strong communities.** Family is very important. In Okinawa, groups of friends called *moai* support each other for their whole lives.",
          "**🎯 They have a purpose.** In Okinawa they call it *ikigai*, in Nicoya *plan de vida* — a reason to get up in the morning.",
          "**😴 They rest.** In Ikaria, many people take a nap in the afternoon. They don't hurry.",
          "**A small warning.** Some scientists say that in some places, old birth records may not be correct, so a few people may be younger than they say. 🤔 But the healthy habits are a good idea for everyone!",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What do people in blue zones usually do instead of going to the gym?", options: ["*walk, garden and do housework", "run marathons", "swim every day"] },
      { q: "How often do they eat meat?", options: ["*only a few times a month", "every day", "never"] },
      { q: "What is a moai?", options: ["*a group of friends who support each other", "a kind of bean", "a Japanese garden"] },
      { q: "Where do many people take an afternoon nap?", options: ["*in Ikaria", "in Loma Linda", "in Nicoya"] },
    ]),
    match("Match the words from the text.", [
      ["hara hachi bu", "stop eating at 80% full"],
      ["moai", "friends for life"],
      ["ikigai", "a reason to get up in the morning"],
      ["plan de vida", "a life purpose (in Nicoya)"],
      ["a blue zone", "a place where people live very long"],
      ["a centenarian", "a person aged 100+"],
    ]),
    text("Talk to your teacher.", "- How many of your warm-up guesses were right? 🏆\n- Which habit is the easiest for you? Which is the most difficult? 🤔\n- Is your city a “blue zone” or a “red zone”? Why? 😄"),
  ]),

  section("Reading: A day in Okinawa", [
    tip("A second, shorter text — a typical day of an older woman in a village in Okinawa (a story based on the habits from the article). The student finds 5 blue zone habits in it."),
    order(
      "Read the story. Put Kama's day in order.",
      ["Kama wakes up at 6 and works in her garden.\nShe has a small breakfast with green tea.\nShe walks to her friend's house.\nShe takes a short nap after lunch.\nIn the evening, she meets her moai."],
      "lines",
      {
        read: [
          "## 🌺 A day in Okinawa",
          "Kama is 97, and she lives in a small village in the north of Okinawa. Every day she wakes up at 6 and works in her garden for an hour. She grows sweet potatoes, bitter melon and herbs. 🌱",
          "Breakfast is small: miso soup, a little tofu and green tea. 🍵 “Hara hachi bu,” she says before she eats — she always stops before she's full.",
          "Then she walks — slowly, but every day — to her friend's house, 2 kilometers away. They talk, laugh and drink more tea.",
          "After lunch, Kama takes a short nap. 😴 In the evening, she meets her moai — five friends. They have met every week for more than 70 years! They share food and news, and they help each other when someone is sick.",
          "“What's your ikigai?” we ask. Kama smiles: “My great-grandchildren. And my garden. Every morning, the vegetables are waiting for me!” 🥬",
        ].join("\n\n"),
      },
    ),
    trueFalse("Read again. True or false?", [
      ["Kama works in her garden every morning.", true],
      ["She eats a very big breakfast.", false],
      ["She walks to her friend's house.", true],
      ["Her moai has met every week for more than 70 years.", true],
      ["Kama's ikigai is her job.", false],
    ]),
    quiz("Which blue zone habits are in the story? Choose.", [
      { q: "She grows vegetables and walks every day. →", options: ["*She moves naturally.", "She goes to the gym.", "She rests."] },
      { q: "“Hara hachi bu” before she eats. →", options: ["*She doesn't eat too much.", "She eats a lot of meat.", "She skips meals."] },
      { q: "She meets her moai every week. →", options: ["*She has a strong community.", "She has a purpose.", "She sleeps a lot."] },
      { q: "“Every morning, the vegetables are waiting for me!” →", options: ["*She has a purpose — ikigai.", "She's lonely.", "She's stressed."] },
    ]),
  ]),

  section("Video: What are the secrets?", [
    video("Watch a short news report about the blue zones (under 4 minutes). Write down 2 habits you hear.", "xC893QsGWAs"),
    text("Talk to your teacher.", "- What habits from the video are the same as in the article? What's new?\n- Which habit would you like to start this week?"),
  ]),

  section("Review: Module 9", [
    choose(
      "Choose.",
      "1. People in blue zones don't eat [*much/many] meat.\n2. They eat [*a lot of/many] vegetables.\n3. How [*many/much] centenarians live in Sardinia?\n4. I don't get [*enough sleep/sleep enough].\n5. Most people today sit [*too much/too many].\n6. They eat [*a few/a little] nuts every day.\n7. I'm [*too/enough] busy to cook at home.\n8. Is your diet healthy [*enough/too]?",
    ),
    gaps(
      "Complete with much, many, a few, a little, too, too much or enough.",
      "1. In Okinawa, people don't eat [too much] — they stop at 80% full. 🍚\n2. How [many] blue zones are there? — Five.\n3. They eat meat only [a few] times a month. 🥩\n4. Put [a little] olive oil on the salad. 🫒\n5. I'm [too] tired to walk — I'll take the bus. 😩\n6. I don't drink [enough] water. 💧\n7. How [much] sugar is in this cake? 🍰\n8. There are [too many] cars in my city — the air is bad. 🚗",
    ),
    drag(
      "Complete the advice.",
      "Do you want to live to 100? Then don't sit [too] much — walk every day. Eat [a] lot of vegetables and only a [few] sweets. Don't drink too [much] coffee. Get [enough] sleep. And don't work too [many] hours — take a nap like the people in Ikaria! 😴",
      ["little", "very", "lots"],
    ),
  ]),

  section("Writing: Secrets of a long life", [
    box(
      "✍️ Advice for a long, happy life",
      "- **40+ words**\n- a title: *How to live to 100*\n- use *You should… · Don't eat too much… · Get enough… · Eat a lot of… / a little…*\n- add one idea from your grandparents or your culture 👵\n- an ending: *And the most important thing…*",
    ),
    write(
      "Write a short guide: “How to live to 100”. Use ideas from the blue zones and from your own family. (40+ words)",
      40,
      {
        read: "*Example start:* How to live to 100. First, you should walk every day — my grandpa walked to the bazaar every morning until he was 90…",
      },
    ),
    tip("Check together: at least 3 quantifiers (*much, many, a few, a little, enough, too much*)? Advice with *should*? A personal idea from the family? Read the best tip aloud. 🌟"),
  ]),

  section("Let's talk: Your habits", [
    text(
      "Talk to your teacher.",
      "- How many of the blue zone habits do you have already? Count them! 🔢\n- Do you have a “moai” — friends who will support you all your life? 👫\n- What's your ikigai — your reason to get up in the morning? 🎯\n- Would you like to live in a blue zone? What would you miss from your life now? 🏝️",
    ),
    tip("*If you have time:* “Blue zone in Kazakhstan” 🇰🇿 — the student designs a healthy town in their country: *There's a lot of… There isn't much… People don't… Everyone has…*"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "a person aged 100+ =", options: ["*a centenarian", "a community", "a habit"] },
      { q: "mostly vegetables, beans and fruit =", options: ["*plant-based", "junk food", "protein"] },
      { q: "Don't eat ___ sugar.", options: ["*too much", "too many", "enough much"] },
      { q: "How many blue zones are there?", options: ["*five", "three", "ten"] },
    ]),
    box("Word of the day: ikigai", "**ikigai** 🎯🌅 (Japanese) = your reason for living — what makes you want to get up in the morning.\n\n*My grandma's ikigai is her garden and her grandchildren!*"),
  ]),

  homework(
    [
      gaps(
        "Write the word.",
        "1. 🎂💯 a person aged 100+: a [centenarian]\n2. 🔁 something you do every day: a [habit]\n3. 😴 a short sleep in the day: a [nap]\n4. 🎯 a reason to get up: a [purpose]\n5. 🏘️ people who help each other: a [community]\n6. 🥦🫘 mostly plants: [plant-based]",
      ),
      trueFalse("From the lesson: true or false?", [
        ["There are five blue zones.", true],
        ["Loma Linda is in Italy.", false],
        ["People in Okinawa stop eating at 80% full.", true],
        ["In blue zones, people eat a lot of meat.", false],
        ["Moai are groups of friends.", true],
      ]),
    ],
    "Homework: Vocabulary and review",
  ),
  homework(
    [
      ...listening(
        "Listen. A journalist talks to Maria, 101, from a village in Sardinia.",
        "**Reporter:** Maria, you're 101 years old. What's your secret?\n\n**Woman:** My secret? I don't have one! 😄 I work in my garden every day. I grow tomatoes, beans and potatoes.\n\n**Reporter:** What do you eat?\n\n**Woman:** Simple food. Bread, vegetables, a little cheese, a lot of beans. Meat only on Sundays.\n\n**Reporter:** Do you live alone?\n\n**Woman:** No, no! I live with my daughter, and my grandchildren visit every day. In our village, old people are never alone.\n\n**Reporter:** Have you ever been stressed?\n\n**Woman:** Of course — I had six children! 😄 But I always laugh. And every afternoon, I sit outside with my neighbors and we talk.\n\n**Reporter:** Thank you, Maria!",
      ),
      quiz("Listen and choose.", [
        { q: "How old is Maria?", options: ["*101", "91", "110"] },
        { q: "When does Maria eat meat?", options: ["*only on Sundays", "every day", "never"] },
        { q: "Who does Maria live with?", options: ["*her daughter", "alone", "her neighbors"] },
        { q: "How many children did Maria have?", options: ["*six", "two", "ten"] },
        { q: "What does Maria do every afternoon?", options: ["*sits and talks with her neighbors", "takes a nap", "goes to the gym"] },
      ]),
    ],
    "Homework: Listening",
  ),
  homework(
    [
      write("Interview an older person in your family (or write about one): How old are they? What do they eat? What do they do every day? What's their secret? (60+ words)", 60),
      record("Record your answer: Which 3 blue zone habits are you going to try? Why? (1 minute)", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
