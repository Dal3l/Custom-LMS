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

// 4.4 Revision 3–4 — skills tasks with scores + the project "My family and my home".
export default lesson("a1-4.4", "Revision 3–4", () => [
  section("Warm-up: Odd one out", [
    box(
      "Today you will…",
      "- review modules 3 and 4: *have / has, 's, days and time, there is / there are, in / on / under…*\n- check your vocabulary, grammar, reading and listening — get points! ⭐\n- start your project: **My family and my home**",
    ),
    quiz("Odd one out! Which word is different? 🤔", [
      { q: "aunt · uncle · cousin · sofa", options: ["*sofa", "aunt", "cousin"] },
      { q: "Monday · Friday · kitchen · Sunday", options: ["*kitchen", "Monday", "Sunday"] },
      { q: "funny · kind · tall · smart", options: ["*tall", "funny", "kind"] },
      { q: "bed · wardrobe · lamp · parrot", options: ["*parrot", "bed", "lamp"] },
      { q: "Gen Z · Millennials · Boomers · Gen Wi-Fi", options: ["*Gen Wi-Fi", "Gen Z", "Boomers"] },
    ]),
    tip("Like in 2.4, the tasks check themselves and give points. Don't help during the tasks — go through the mistakes together after."),
  ]),

  section("Vocabulary", [
    sort("Sort the words.", {
      "👨‍👩‍👧 Family": ["grandma", "cousin", "uncle", "twins"],
      "🏠 Home": ["wardrobe", "balcony", "mirror", "kitchen"],
      "💭 Character": ["shy", "friendly", "lazy", "smart"],
    }),
    matchPictures("Match the pictures and the words.", [
      ["photos/pet-dog.jpg", "a dog"],
      ["photos/room-bathroom.jpg", "a bathroom"],
      ["photos/smart-robot.jpg", "a robot vacuum"],
      ["photos/gen-flip.jpg", "a flip phone"],
      ["photos/tiny-portland.jpg", "a tiny house"],
    ]),
    gaps("Write the time and the day.", "1. 9:30 → nine [thirty] / half [past] nine\n2. The day after Tuesday → [Wednesday]\n3. Saturday + Sunday = the [weekend]"),
  ]),

  section("Grammar", [
    choose(
      "have / has / don't / doesn't: choose.",
      "1. My cousin [have/*has] a parrot.\n2. We [*have/has] a big family.\n3. [*Does/Do] she have glasses?\n4. He [don't/*doesn't] have a beard.\n5. Do you have a pet? — Yes, I [*do/does].",
    ),
    gaps("Write with 's.", "1. the room of my sister → my [sister's] room\n2. the cat of Lily → [Lily's] cat\n3. the car of my dad → my [dad's] car"),
    choose(
      "there is / there are: choose.",
      "1. [*There's/There are] a lamp on my desk.\n2. [There's/*There are] two windows.\n3. [*Is there/Are there] a balcony?\n4. There aren't [some/*any] plants.",
    ),
    choose(
      "Where is it? Choose.",
      "1. The keys are [*in/on] my bag. 📦\n2. The cat is [*under/on] the bed. ⬇️\n3. The desk is [*between/behind] the bed and the window. ↔️\n4. Let's meet [*on/at] Friday.\n5. The film is [*at/on] 7 o'clock.",
    ),
    drag(
      "Complete the text.",
      "Hi! I'm Arman. I [have] a brother and a sister. My [sister's] name is Dana. We live in a flat. [There are] three bedrooms. [There's] a big TV in the living room. Our cat [has] a bed [under] the sofa. 🐱",
      ["has got", "There is", "on"],
    ),
  ]),

  section("Reading", [
    trueFalse(
      "Read the post. True or false?",
      [
        ["Mia's family is small.", true],
        ["Mia has a brother.", false],
        ["Their flat is in London.", false],
        ["There's a smart speaker in the kitchen.", true],
        ["The family meets on Sunday.", true],
      ],
      {
        read: [
          "## 🏠 My family & my home — by Mia",
          "Hi! I'm Mia. I'm 16 and I'm from Berlin, Germany. My family is small: my mom, my dad, me and our hamster, Pepper. 🐹 I don't have brothers or sisters — I'm an only child.",
          "My mom is a doctor. She has short dark hair and she's very kind. My dad is tall and funny. He's a Millennial, but he has old cassettes! 📼",
          "We live in a flat in the city. There are two bedrooms, a living room and a kitchen. There's a smart speaker in the kitchen — Dad loves it! My room is small. There's a bed, a desk and a big poster of BTS. 💜",
          "On Sunday, my grandparents come to us at 2 o'clock. We have lunch together. It's my favorite day! 🍲",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Pepper is…", options: ["*a hamster", "Mia's sister", "a cat"] },
      { q: "Mia's mom has…", options: ["*short dark hair", "long blond hair", "glasses"] },
      { q: "The grandparents come at…", options: ["*2 o'clock", "12 o'clock", "half past two"] },
    ]),
  ]),

  section("Listening", [
    tip("Read the script once at normal speed, then once more slowly."),
    ...listening(
      "Listen. Dana and Leo make plans.",
      "**Dana:** Hi, Leo! Are you free on Saturday?\n\n**Leo:** Sorry, I can't. On Saturday I'm with my grandparents. It's my grandma's birthday! 🎂\n\n**Dana:** Oh, cool! How about Sunday?\n\n**Leo:** Sunday is good. What time?\n\n**Dana:** Let's meet at four o'clock. Come to my house! There's a new game console in the living room. 🎮\n\n**Leo:** Great! Is your dog at home? He's very big! 😅\n\n**Dana:** Yes, he is, but he's friendly. Don't worry!\n\n**Leo:** OK! See you on Sunday!",
    ),
    quiz("Listen and choose.", [
      { q: "On Saturday, Leo is with…", options: ["*his grandparents", "Dana", "his cousin"] },
      { q: "They meet on…", options: ["*Sunday", "Saturday", "Friday"] },
      { q: "What time?", options: ["*4:00", "2:00", "4:30"] },
      { q: "The game console is…", options: ["*in the living room", "in Dana's bedroom", "in the kitchen"] },
    ]),
  ]),

  section("Speaking and writing", [
    text(
      "Speaking: tell your teacher 🗣️",
      "Talk for 1–2 minutes:\n\n- your family (real, made up or from a TV show): *I have… She has…*\n- one person: what does he / she look like? What's he / she like?\n- your home: *There's… There are…*\n\nYour teacher asks 3 questions!",
    ),
    order("Put the words in order.", ["Does your sister have a pet?", "There are two posters on the wall.", "Are you free on Friday?"]),
    match("Match the questions and the answers.", [
      ["Do you have a brother?", "No, I don't. I'm an only child."],
      ["What's she like?", "She's funny and kind."],
      ["Is there a balcony?", "Yes, there is."],
      ["What time is it?", "It's half past six."],
    ]),
  ]),

  section("Project: My family and my home", [
    box(
      "Your project 🚀",
      "Make a page like Mia's post — about you (real or a made-up character):\n\n1. **My family:** who's in it? Describe 2 people — look and character. Pets?\n2. **My home:** flat or house? What rooms? What's in your room?\n3. **Our day:** a family day or time: *On Sunday at 2 o'clock we…*\n\nAdd photos or drawings. Start now — finish at home!",
    ),
    text("Plan your project. Talk to your teacher.", "- Real family or a made-up family? 🙂\n- What photos or drawings can you add? 📸\n- What's the most interesting thing about your home?"),
  ]),

  homework(
    [
      write("Project: My family and my home. Write about your family (real or made up) and your home. (60+ words)", 60, {
        read: "*Example:* Hi! I'm Arman. I'm 15 and I'm from Almaty. I have a big family: my mom, my dad, my sister Dana and our dog, Rex. Dana is 12. She has long dark hair and she's very funny. We live in a flat. There are three bedrooms and a big kitchen. My room is small but cozy. There's a desk next to the window and there are two posters on the wall. On Sunday we have dinner with our grandparents at 6 o'clock.",
      }),
      record("Project video: present your family and your home (1–2 minutes).", 120),
    ],
    "Homework: Project",
  ),
  homework(
    [
      gaps("Review: complete.", "1. My dad [has] a beard.\n2. [Does] your sister have a cat?\n3. [Is] there a TV in your room?\n4. There [are] two chairs.\n5. Let's meet [on] Monday."),
      trueFalse("Correct or not?", [
        ["She have a dog.", false],
        ["There are some plants on the balcony.", true],
        ["Is there any books?", false],
        ["My brother's room is big.", true],
      ]),
      matchPictures("Review: match the photos.", [
        ["photos/room-kitchen.jpg", "a kitchen"],
        ["photos/pet-cat.jpg", "a cat"],
        ["photos/gen-cassette.jpg", "a cassette"],
      ]),
    ],
    "Homework: Review",
  ),
]);
