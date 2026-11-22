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

// 3.2 Describe them — G: Do you have…? / doesn't have; possessive 's. V: appearance and character. Main format: listening.
export default lesson("a1-3.2", "Describe them", () => [
  section("Warm-up: Who is it?", [
    box("Today you will…", "- describe a person: hair, eyes, character\n- ask *Do you have…? Does she have…?*\n- say whose it is: *Leo's phone, my sister's room*"),
    quiz("Guess the character! 🕵️", [
      { q: "He's yellow. He has a wife, Marge, and three children. He's lazy and funny. 🍩", options: ["*Homer Simpson", "SpongeBob", "Shrek"] },
      { q: "He's small and yellow. He has one or two eyes and big glasses. He loves bananas. 🍌", options: ["*a Minion", "Pikachu", "Homer Simpson"] },
      { q: "She has very, very long blond hair. She lives in a tower. 🏰", options: ["*Rapunzel", "Elsa", "Moana"] },
      { q: "He has a red and blue suit. He's from New York. 🕸️", options: ["*Spider-Man", "Batman", "Superman"] },
    ]),
    tip("After the quiz the student describes a character, you guess. Then change roles."),
  ]),

  section("Vocabulary: What does he look like?", [
    words("Appearance", [
      ["tall — short", "🦒 — 🐧", "My brother is tall."],
      ["long hair — short hair", "💇", "She has long hair."],
      ["straight hair — curly hair", "〰️ — ➰"],
      ["blond hair — dark hair — red hair", "👱 — 🧑 — 👩‍🦰"],
      ["blue / brown / green eyes", "👀", "He has brown eyes."],
      ["glasses", "👓", "She has glasses."],
      ["a beard", "🧔"],
      ["What does he look like?", "❓ = tall or short? hair? eyes?", "What does she look like? — She's tall. She has dark hair."],
    ]),
    words("Character", [
      ["funny", "😂", "My uncle is very funny."],
      ["kind", "🤗 he helps people"],
      ["smart", "🧠"],
      ["friendly", "👋 he talks to everyone"],
      ["shy", "🙈 she doesn't talk a lot with new people"],
      ["lazy", "🛋️ he doesn't like work"],
      ["What's he like?", "❓ = his character: funny? kind?", "What's she like? — She's smart and kind."],
    ]),
    sort("Look or character? Sort.", {
      "👀 Look": ["tall", "curly hair", "blue eyes", "a beard"],
      "💭 Character": ["funny", "kind", "shy", "lazy"],
    }),
    match("Match the opposites.", [
      ["tall", "short"],
      ["long hair", "short hair"],
      ["straight hair", "curly hair"],
      ["shy", "friendly"],
    ]),
    choose(
      "Choose.",
      "1. She [*has/is] long hair.\n2. He [has/*is] tall.\n3. My cousin [*has/is] glasses.\n4. They [have/*are] funny.",
    ),
  ]),

  section("Listening: My favorite blogger", [
    tip("Read the script once or twice. The student can look at the words above while listening."),
    ...listening(
      "Listen. Dana and Arman talk about their favorite bloggers.",
      "**Dana:** Who's your favorite blogger, Arman?\n\n**Arman:** Max Play. He's a gamer from Canada.\n\n**Dana:** What does he look like?\n\n**Arman:** He's tall. He has short dark hair and glasses. And he has a beard!\n\n**Dana:** What's he like?\n\n**Arman:** He's very funny and kind. He's my favorite! And who's your favorite?\n\n**Dana:** Lily Cooks. She's a food blogger from the UK.\n\n**Dana:** She has long red hair and green eyes. She's smart and friendly.\n\n**Arman:** Does she have a pet?\n\n**Dana:** Yes, she does! She has a cat. The cat's name is Muffin. Muffin is in all her videos! 🐱",
    ),
    quiz("Listen and choose.", [
      { q: "Max Play is…", options: ["*a gamer from Canada", "a food blogger", "Dana's brother"] },
      { q: "Max has…", options: ["*short dark hair and glasses", "long red hair", "blond hair"] },
      { q: "Lily has…", options: ["*long red hair and green eyes", "short hair and a beard", "blue eyes"] },
      { q: "Muffin is…", options: ["*Lily's cat", "Max's dog", "Dana's sister"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Max is short.", false],
      ["Max is funny and kind.", true],
      ["Lily is from Canada.", false],
    ]),
  ]),

  section("Grammar: Do you have…? doesn't have", [
    table("do-you-have"),
    choose(
      "Choose.",
      "1. [*Do/Does] you have a pet?\n2. [Do/*Does] she have glasses?\n3. He [don't/*doesn't] have a beard.\n4. I [*don't/doesn't] have a brother.\n5. Does Max have a beard? — Yes, he [do/*does].",
    ),
    gaps(
      "Complete the short answers.",
      "1. Do you have a sister? — Yes, I [do].\n2. Does Lily have a cat? — Yes, she [does].\n3. Does Max have long hair? — No, he [doesn't/does not].\n4. Do they have a dog? — No, they [don't/do not].",
    ),
    order("Make questions.", ["Do you have a pet?", "Does she have blue eyes?", "Does your brother have glasses?"]),
  ]),

  section("Grammar: Leo's phone", [
    table("possessive-s"),
    gaps("Whose is it? Write with 's.", "1. the cat of Lily → [Lily's] cat\n2. the room of my sister → my [sister's] room\n3. the phone of Arman → [Arman's] phone\n4. the car of my dad → my [dad's] car"),
    drag(
      "Complete.",
      "Muffin is [Lily's] cat. Max is [Arman's] favorite blogger. My [brother's] room is small, but my [parents'] room is big.",
      ["Lily", "brothers"],
    ),
  ]),

  section("Let's talk: Guess who!", [
    text(
      "Game: Guess who! 🕵️",
      "Think of a famous person or a character. Your teacher asks yes / no questions:\n\n*Is it a man? Is he tall? Does he have glasses? Does she have long hair?*\n\nAnswer: *Yes, he does. / No, she doesn't.* Then change roles!",
    ),
    text(
      "Talk to your teacher.",
      "- Who's your favorite blogger or singer? What does he / she look like? 🎤\n- What's your best friend like? Funny? Kind? 🤗\n- What's a good friend like, for you?",
    ),
    tip("Don't ask the student to describe your or their own appearance — describe celebrities, characters, friends."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "___ she have a dog?", options: ["*Does", "Do", "Is"] },
      { q: "He ___ have glasses.", options: ["*doesn't", "don't", "isn't"] },
      { q: "the bag of Mia =", options: ["*Mia's bag", "Mias bag", "bag Mia"] },
      { q: "“What's she like?” is about…", options: ["*her character", "her hair", "her phone"] },
    ]),
    box("Word of the day: vibe", "**vibe** = the feeling a person or a place gives you ✨\n\n*She has a cool vibe. This café has a good vibe.*"),
  ]),

  homework(
    [
      gaps("Write the word.", "1. 🦒 not short → [tall]\n2. 😂 he makes you laugh → [funny]\n3. 🙈 she doesn't talk a lot → [shy]\n4. 👓 [glasses]\n5. 🧔 a [beard]"),
      sort("Sort.", {
        "He's…": ["tall", "kind", "smart"],
        "He has…": ["a beard", "blue eyes", "curly hair"],
      }),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      choose("Choose.", "1. [*Does/Do] your sister have long hair?\n2. They [*don't/doesn't] have a pet.\n3. My [*friend's/friends] name is Ali.\n4. Do you have a cat? — No, I [*don't/doesn't]."),
      trueFalse("Correct or not?", [
        ["She doesn't have glasses.", true],
        ["He don't have a beard.", false],
        ["Does she has a cat?", false],
        ["This is my mom's car.", true],
      ]),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      video("Watch the video: describing people.", "CU3Wqb3eadc"),
      write("Write 5 new words or phrases from the video.", null),
    ],
    "Homework: Video",
  ),
  homework(
    [
      write("Describe your favorite blogger, singer or character: look and character. Don't write the name! (30+ words)", 30, {
        read: "*Example:* She's a singer from the USA. She's tall. She has long blond hair and blue eyes. She's smart and kind. She has a lot of cats! Who is it? 🎤",
      }),
      record("Record a riddle: describe a famous person or a character. Your teacher guesses who it is!", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
