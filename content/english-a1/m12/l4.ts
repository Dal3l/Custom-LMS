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
  sort,
  text,
  tip,
  trueFalse,
  video,
  write,
} from "../../kit";

// 12.4 Final revision — review of the whole A1 course; final project: a video business card "Me in English".
export default lesson("a1-12.4", "Final revision", () => [
  section("Warm-up: The big A1 quiz", [
    box(
      "Today you will…",
      "- review the whole A1 course — 12 modules! 🎉\n- check your vocabulary, grammar, reading and listening — get points! ⭐\n- start your final project: **Me in English** 🎥",
    ),
    quiz("The big A1 quiz! One question from every module 🏆", [
      { q: "1️⃣ She ___ from Brazil.", options: ["*is", "are", "am"] },
      { q: "2️⃣ 👉 ___ are my keys, there on the table.", options: ["*Those", "This", "That"] },
      { q: "3️⃣ My brother ___ a cat.", options: ["*has", "have", "is"] },
      { q: "4️⃣ ___ a sofa in the living room.", options: ["*There's", "There are", "It have"] },
      { q: "5️⃣ I ___ coffee in the morning.", options: ["*drink", "drinks", "am drink"] },
      { q: "6️⃣ He ___ plays video games.", options: ["*often", "is often", "oftens"] },
      { q: "7️⃣ ___ you swim?", options: ["*Can", "Do can", "Are"] },
      { q: "8️⃣ I love ___ !", options: ["*dancing", "dance to", "dances"] },
      { q: "9️⃣ ___ left at the bank.", options: ["*Turn", "Turns", "To turn"] },
      { q: "🔟 Look! It ___ .", options: ["*'s snowing", "snows", "snowing"] },
      { q: "1️⃣1️⃣ How ___ apples do we need?", options: ["*many", "much", "lot"] },
      { q: "1️⃣2️⃣ We ___ at the cinema yesterday.", options: ["*were", "was", "are"] },
    ]),
    tip("Celebrate! This is the last lesson of A1. Look at the score together and remember the hardest topics."),
  ]),

  section("Vocabulary", [
    sort("Sort the words.", {
      "👨‍👩‍👧 People": ["cousin", "grandma", "colleague", "neighbor"],
      "🏙️ Places": ["pharmacy", "museum", "kitchen", "bus stop"],
      "🍎 Food": ["cheese", "bread", "rice", "carrot"],
      "👕 Clothes": ["hoodie", "scarf", "sneakers", "jacket"],
    }),
    matchPictures("Match the pictures from the course.", [
      ["photos/place-big-ben.jpg", "the UK"],
      ["photos/obj-headphones.jpg", "headphones"],
      ["photos/gen-flip.jpg", "a flip phone"],
      ["photos/tr-tram.jpg", "a tram"],
      ["photos/food-sushi.jpg", "sushi"],
      ["photos/old-landline.jpg", "a landline"],
    ]),
    match("Match the opposites.", [
      ["cheap", "expensive"],
      ["busy", "quiet"],
      ["early", "late"],
      ["love", "hate"],
      ["always", "never"],
    ]),
  ]),

  section("Grammar", [
    choose(
      "Choose the right form.",
      "1. I usually [*get/'m getting] up at 7, but today I [get/*'m getting] up at 10! 😴\n2. She [*can/cans] speak three languages.\n3. There [*aren't/isn't] any eggs.\n4. Yesterday we [*were/are] at the beach.\n5. My sister [*doesn't/don't] like coffee.\n6. [*Does/Do] he live near you?",
    ),
    drag(
      "Complete Dana's profile.",
      "Hi! I['m] Dana. I'm 16 and I [live] in Almaty. I [have] a brother and a cat. I can [play] the guitar. I love [singing]! Right now I'm [learning] English. Last summer I [was] in London! 🇬🇧",
      ["am live", "has", "sing", "were"],
    ),
    gaps("Complete.", "1. How [much] is this hoodie?\n2. She's [an] engineer.\n3. These are my [friends'] bikes. (friends)\n4. I [went] to the cinema last Saturday. (go)"),
    order("Make sentences.", ["What are you doing right now?", "Where were you last weekend?", "How often do you play sport?"]),
  ]),

  section("Reading", [
    trueFalse(
      "Read Leo's post. True or false?",
      [
        ["Leo is from Brazil.", true],
        ["He lives in Astana now.", true],
        ["He can't speak Russian.", false],
        ["He usually works from home.", false],
        ["Right now he is in a café.", true],
      ],
      {
        read: [
          "## 🌍 One year in Kazakhstan — by Leo",
          "Hi! I'm Leo, I'm 19 and I'm from São Paulo, Brazil. 🇧🇷 A year ago, I was a student in Brazil. Now I live in Astana! I study IT at university here.",
          "My life is very different now. In Brazil, it was hot all year. Here, it's −25° in winter! 🥶 But I love the snow.",
          "I can speak Portuguese, English and a little Russian. I usually go to university by bus, and on Saturday I play football with my friends. ⚽",
          "Right now, I'm sitting in a café near the Baiterek. It's snowing outside, and I'm drinking hot chocolate. ☕ Life is good!",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "A year ago, Leo was…", options: ["*a student in Brazil", "in Astana", "a footballer"] },
      { q: "What does he do on Saturday?", options: ["*He plays football.", "He works.", "He goes to the café."] },
      { q: "What's the weather like right now?", options: ["*It's snowing.", "It's hot.", "It's raining."] },
    ]),
  ]),

  section("Listening", [
    tip("Read the script once at normal speed, then once more slowly."),
    ...listening(
      "Listen. Aigerim meets a new student at an English club.",
      "**Aigerim:** Hi! I'm Aigerim. Are you new here?\n\n**Kenji:** Yes, I am. I'm Kenji. Nice to meet you!\n\n**Aigerim:** Nice to meet you too! Where are you from?\n\n**Kenji:** I'm from Osaka, Japan. I'm here for a year — I study at the university.\n\n**Aigerim:** Cool! What do you do in your free time?\n\n**Kenji:** I love cooking! I can make really good sushi. 🍣 And I often go to the mountains on the weekend.\n\n**Aigerim:** Me too! Last weekend I was at Big Almaty Lake. It was beautiful!\n\n**Kenji:** Wow! Can we go together next time?\n\n**Aigerim:** Sure! Let's go on Saturday!",
    ),
    quiz("Listen and choose.", [
      { q: "Kenji is from…", options: ["*Osaka", "Tokyo", "Seoul"] },
      { q: "Kenji can make…", options: ["*sushi", "pizza", "beshbarmak"] },
      { q: "Where was Aigerim last weekend?", options: ["*at Big Almaty Lake", "at the cinema", "at home"] },
      { q: "When do they want to go?", options: ["*on Saturday", "on Sunday", "tomorrow"] },
    ]),
  ]),

  section("Speaking: Me in 2 minutes", [
    text(
      "Speaking: tell your teacher about you 🗣️",
      "Talk for 2 minutes — use everything from A1!\n\n- **Me:** name, age, country, city, job or study\n- **My family and home:** *I have… There's…*\n- **My day:** *I usually… I never…*\n- **My skills and likes:** *I can… I love… I hate…*\n- **Right now:** *I'm wearing… I'm feeling…*\n- **The past:** *Last weekend I was…*",
    ),
    match("Match the questions and the answers.", [
      ["What do you do?", "I'm a student."],
      ["What are you doing?", "I'm doing my homework."],
      ["Where were you yesterday?", "I was at my grandma's."],
      ["What can you do?", "I can play the piano."],
    ]),
  ]),

  section("Final project: Me in English", [
    box(
      "Your final project 🎥🏆",
      "Make a 1–2 minute video business card: **Me in English**\n\n1. **Hello!** Name, age, where you're from\n2. **My life:** family, home, study or work\n3. **My usual day** and my habits\n4. **My skills and hobbies:** *I can… I love…*\n5. **My city:** a favorite place and how to get there\n6. **A memory:** *Last summer I was…* / a throwback\n7. **My plans:** *I want to…* — and why you love English! 💜\n\nYou can show photos, your room, your city. Smile — you speak English now! 😊",
    ),
    text("Plan your video. Talk to your teacher.", "- Where do you want to film? 🎥\n- What photos or things can you show?\n- What's the most interesting thing about you?"),
  ]),

  homework(
    [
      write("Final project: write the text for your video “Me in English”. (90+ words)", 90, {
        read: "*Example:* Hi! My name is Dana. I'm 16 and I'm from Almaty, Kazakhstan. I live with my parents, my brother and our cat, Barsik. I'm a student. I usually get up at 7 and go to school by bus. After school, I often play the guitar — I love music! I can sing and I can edit videos. My favorite place in Almaty is Kok-Tobe — take the cable car from the center! Last summer I was at the sea with my family. It was amazing. Now I'm learning English because I want to travel the world! 🌍",
      }),
      record("Final project video: Me in English (1–2 minutes). 🎥🏆", 120),
      video("Inspiration: how to introduce yourself in English.", "rNh3VYiNZL8"),
    ],
    "Homework: Final project",
  ),
  homework(
    [
      gaps("Final review: complete.", "1. She [is] my best friend.\n2. He [has] two sisters.\n3. I [don't] like mornings.\n4. Look! They [are] dancing!\n5. We [were] at the park yesterday."),
      trueFalse("Correct or not?", [
        ["She cans swim.", false],
        ["How many people are there?", true],
        ["I was at home last night.", true],
        ["He don't live here.", false],
      ]),
      box("🎉 Congratulations!", "You finished **English A1**! 🏆 You can introduce yourself, talk about your life, your day, your city, your likes and your past. Next stop: **A2**! 🚀"),
    ],
    "Homework: Review",
  ),
]);
