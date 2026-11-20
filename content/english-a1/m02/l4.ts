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
  write,
} from "../../kit";

// 2.4 Revision 1–2 — skills tasks with scores (vocabulary, grammar, reading, listening, speaking and writing) + the project "My profile + my things".
export default lesson("a1-2.4", "Revision 1–2", () => [
  section("Warm-up: How much do you remember?", [
    box(
      "Today you will…",
      "- review modules 1 and 2: *be, my / your / his / her, a / an, this / that / these / those, plurals*\n- check your vocabulary, grammar, reading and listening — get points! ⭐\n- start your project: **My profile + my things**",
    ),
    tip("The tasks in this lesson check themselves and give points. Don't help during the tasks — help after: look at the mistakes together and repeat the rules."),
    text(
      "Talk to your teacher. Quick questions — answer fast! ⚡",
      "- What's your name? How do you spell it?\n- How old are you? Where are you from?\n- What's your job, or what do you study?\n- What's in your bag today?\n- What's your favorite thing? What color is it?",
    ),
  ]),

  section("Vocabulary", [
    match("Match the countries and the nationalities.", [
      ["Japan", "Japanese"],
      ["Brazil", "Brazilian"],
      ["the UK", "British"],
      ["Kazakhstan", "Kazakh"],
      ["Germany", "German"],
    ]),
    matchPictures("Match the pictures and the words.", [
      ["photos/obj-wallet.jpg", "a wallet"],
      ["photos/obj-headphones.jpg", "headphones"],
      ["photos/obj-backpack.jpg", "a backpack"],
      ["photos/obj-laptop.jpg", "a laptop"],
      ["photos/obj-keys.jpg", "keys"],
    ]),
    sort("Sort the words.", {
      Jobs: ["doctor", "engineer", "designer", "student"],
      Things: ["charger", "umbrella", "wallet", "notebook"],
      Colors: ["purple", "brown", "gray", "yellow"],
    }),
    gaps("Write the numbers in words.", "1. 13 → [thirteen]\n2. 20 → [twenty]\n3. 15 → [fifteen]\n4. 18 → [eighteen]"),
  ]),

  section("Grammar", [
    choose(
      "be: choose.",
      "1. I [*'m/'s/'re] from Almaty.\n2. She [am/*is/are] a designer.\n3. [Is/*Are] you a student? — Yes, I [*am/'m].\n4. They [*aren't/isn't] from Spain.",
    ),
    choose(
      "my / your / his / her / our / their: choose.",
      "1. Leo is my friend. [*His/Her] name is cool.\n2. Mia and Kenji are gamers. [Our/*Their] team is Nova.\n3. What's [*your/you] email?\n4. Aigerim is from Astana. [His/*Her] last name is Bekova.",
    ),
    gaps("a or an?", "1. She's [an] engineer.\n2. It's [a] power bank.\n3. This is [an] umbrella.\n4. I'm [a] student."),
    choose(
      "this / that / these / those: choose.",
      "1. 👇 [*These/This] are my keys.\n2. 👉 [*That/Those] is my bus!\n3. 👉 Are [*those/that] your sneakers?\n4. 👇 What's [*this/these]?",
    ),
    gaps("Write the plural.", "1. phone → [phones]\n2. box → [boxes]\n3. child → [children]\n4. person → [people]\n5. city → [cities]"),
    drag(
      "Complete the text.",
      "Hi! [I'm] Zhan. I'm [a] student. [My] favorite thing is my laptop. [It's] old but cool. [These] are my headphones. [They're] big and black.",
      ["I", "an", "Those"],
    ),
  ]),

  section("Reading", [
    trueFalse(
      "Read the profile. True or false?",
      [
        ["Sofia is from Italy.", false],
        ["She's 19.", true],
        ["She's an artist.", false],
        ["Her laptop is new.", true],
        ["Her friends' names are Ana and Luis.", true],
      ],
      {
        read: [
          "## 👤 Sofia_draws",
          "Hi! I'm Sofia. I'm 19 and I'm from Spain — from Barcelona. 🇪🇸",
          "I'm a design student. My favorite thing is my laptop. It's new and it's silver. My drawing app is on it. 🎨",
          "These are my favorite headphones — they're pink and very big! And that's my old backpack in the photo. It's green.",
          "These people are my friends, Ana and Luis. They're from Mexico. 🇲🇽",
          "DM me! 💬",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Sofia is from…", options: ["*Barcelona", "Madrid", "Mexico City"] },
      { q: "Her headphones are…", options: ["*pink and big", "black and small", "green"] },
      { q: "Her backpack is…", options: ["new and pink", "*old and green", "big and silver"] },
    ]),
  ]),

  section("Listening", [
    tip("Read the script to the student once at normal speed, then again more slowly."),
    ...listening(
      "Listen. Two students meet at an English club.",
      "**Leo:** Hi! I'm Leo. What's your name?\n\n**Dana:** Hi, Leo! I'm Dana. D-A-N-A.\n\n**Leo:** Nice to meet you, Dana! Where are you from?\n\n**Dana:** I'm from Kazakhstan, from Astana. And you?\n\n**Leo:** I'm from Brazil. I'm sixteen. How old are you?\n\n**Dana:** I'm fifteen. Oh, cool headphones! Are they new?\n\n**Leo:** Yes, they are! They're blue — my favorite color. And what's that?\n\n**Dana:** It's my water bottle. It's old, but I love it.\n\n**Leo:** What's your email? Let's be friends!\n\n**Dana:** dana dot k at mail dot kz.",
    ),
    quiz("Listen and choose.", [
      { q: "Dana is from…", options: ["*Astana", "Almaty", "Brazil"] },
      { q: "Leo is…", options: ["fifteen", "*sixteen", "seventeen"] },
      { q: "Leo's headphones are…", options: ["*new and blue", "old and blue", "new and black"] },
      { q: "Dana's water bottle is…", options: ["new", "*old", "blue"] },
    ]),
    gaps("Listen again. Write Dana's email.", "Email: [dana.k@mail.kz]"),
  ]),

  section("Speaking and writing", [
    text(
      "Speaking: tell your teacher about you and your things 🗣️",
      "Talk for 1 minute:\n\n- your name, age, country and city\n- your job or what you study\n- 3 things in your bag: *This is my… It's… These are my…*\n\nYour teacher asks 3 questions. Answer them!",
    ),
    order("Put the words in order.", ["What's your favorite thing?", "These are my new sneakers.", "Where are you from?"]),
    tip("Look at the points for each task together. Find the most difficult part (be? plurals? this / these?) and go back to it in the next lesson."),
  ]),

  section("Project: My profile + my things", [
    box(
      "Your project 🚀",
      "Make a profile page — like in an app or on social media:\n\n1. **About me:** name, age, country, city, job or study\n2. **My things:** 3–5 favorite things with photos or pictures. Describe them: color, big / small, new / old\n3. **My bag:** what's in your bag today?\n\nStart now with your teacher — finish it at home!",
    ),
    text(
      "Plan your project. Talk to your teacher.",
      "- What's your nickname or username? 😎\n- What 3–5 things are in your project?\n- Photos or drawings? 📸🎨",
    ),
  ]),

  homework(
    [
      write("Project: My profile + my things. Write about you and your 3–5 favorite things. Add photos in a message to your teacher if you like. (50+ words)", 50, {
        read: "*Example:* Hi! I'm Dana. I'm 15 and I'm from Astana, Kazakhstan. I'm a student. These are my favorite things. This is my phone. It's black and new. The case is pink. These are my earbuds. They're small and white. And this is my old water bottle. It's green. My bag is big — my laptop, my keys and my notebook are in it!",
      }),
      record("Project video: present your profile and show your favorite things (1–2 minutes).", 120),
    ],
    "Homework: Project",
  ),
  homework(
    [
      quiz(
        "Read the post. Choose.",
        [
          { q: "Kenji is…", options: ["*a gamer from Japan", "a student from China", "a designer from Korea"] },
          { q: "His keyboard is…", options: ["*old and white", "new and black", "small and pink"] },
          { q: "Those things on the shelf are…", options: ["*his game boxes", "his headphones", "his sunglasses"] },
        ],
        { read: "## 🎮 My desk — by Kenji\n\nHi! I'm Kenji. I'm 17 and I'm a gamer from Osaka, Japan. This is my desk. That's my new monitor — it's very big! This keyboard is old and white, but it's my favorite. And those boxes on the shelf? They're my old games. 😄" },
      ),
    ],
    "Homework: Reading",
  ),
  homework(
    [
      gaps("Review: complete.", "1. [Are] you from Japan? — No, I'm [not].\n2. [Those] are my friends, Ana and Luis. 👉\n3. I have two [children]. 👧👦\n4. She's [an] artist."),
      trueFalse("True or false?", [
        ["one woman → two women", true],
        ["one watch → two watchs", false],
        ["This are my keys.", false],
        ["That's my bus.", true],
      ]),
    ],
    "Homework: Review",
  ),
]);
