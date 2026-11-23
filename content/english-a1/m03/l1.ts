import {
  box,
  choose,
  drag,
  gaps,
  homework,
  lesson,
  match,
  order,
  picture,
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

// 3.1 Modern families — G: have / has (+ UK have got). V: family, pets. Main format: reading (three short posts) + photos.
export default lesson("a1-3.1", "Modern families", () => [
  section("Warm-up: Family photos", [
    box("Today you will…", "- name family members and pets\n- say *I have… / She has…*\n- talk about your family (only what you want to share 🙂)"),
    picture("Look at the photos.", ["photos/fam-grandma.jpg", "photos/pet-dog.jpg", "photos/pet-cat.jpg"]),
    text(
      "Talk about the photos.",
      "- Photo 1: Who are they, do you think? 👵👧\n- Who is your favorite person in your family? Why? ❤️\n- Is a pet a family member? Why / why not? 🐶🐱\n- What's a “modern family” for you? Are friends family too? 🤔",
    ),
    tip("Keep it light: the student doesn't have to talk about their real family. Made-up families and famous TV families are fine."),
  ]),

  section("Vocabulary: Family", [
    words("Family", [
      ["mother — mom", "👩 🇬🇧 mum", "My mom is a doctor."],
      ["father — dad", "👨"],
      ["parents", "👩👨 mother + father"],
      ["sister", "👧", "I have a sister."],
      ["brother", "👦"],
      ["grandmother — grandma", "👵"],
      ["grandfather — grandpa", "👴"],
      ["grandparents", "👵👴 grandmother + grandfather"],
      ["aunt", "👩 your mom's or dad's sister"],
      ["uncle", "👨 your mom's or dad's brother"],
      ["cousin", "🧒 your aunt's or uncle's child"],
      ["son — daughter", "👦 a boy — 👧 a girl (of parents)"],
      ["husband — wife", "🤵👰"],
      ["twins", "👯 two children, the same birthday", "Mei and Jin are twins."],
      ["an only child", "☝️ no brothers or sisters", "I'm an only child."],
    ]),
    sort("Boy 👦 or girl 👧? Sort.", {
      "👦 / 👨": ["brother", "uncle", "son", "grandpa", "husband"],
      "👧 / 👩": ["sister", "aunt", "daughter", "grandma", "wife"],
    }),
    gaps(
      "Complete the family words.",
      "1. My mom's mother is my [grandmother/grandma].\n2. My dad's brother is my [uncle].\n3. My aunt's son is my [cousin].\n4. My mom and dad are my [parents].\n5. Two children with the same birthday are [twins].",
    ),
  ]),

  section("Vocabulary: Pets", [
    words("Pets", [
      ["a dog", "🐶", "Our dog is a family member!"],
      ["a cat", "🐱"],
      ["a hamster", "🐹"],
      ["a parrot", "🦜 a bird — it can say words!"],
      ["a fish", "🐠 two fish (not fishes)"],
      ["a rabbit", "🐰"],
      ["a turtle", "🐢"],
      ["a pet", "🐾 an animal at home"],
    ]),
    sort("Fly, swim or walk? Sort the pets.", {
      "🪽 fly": ["parrot"],
      "🌊 swim": ["fish", "turtle"],
      "🐾 walk / run": ["dog", "cat", "hamster", "rabbit"],
    }),
    quiz("Which pet? Choose.", [
      { q: "It says “Hello!” 🗣️", options: ["*a parrot", "a fish", "a turtle"] },
      { q: "It's very slow. 🐌", options: ["*a turtle", "a rabbit", "a dog"] },
      { q: "It's small and it lives in water.", options: ["*a fish", "a hamster", "a cat"] },
      { q: "It has long ears. 👂", options: ["*a rabbit", "a parrot", "a fish"] },
    ]),
  ]),

  section("Reading: Meet the families", [
    tip("Read one post at a time. After each post ask: *How many people? Any pets?*"),
    quiz(
      "Read the posts. Choose.",
      [
        { q: "Aruzhan's family is…", options: ["*big", "small", "only two people"] },
        { q: "Who lives with Aruzhan's family?", options: ["*her grandparents", "her cousin", "her aunt"] },
        { q: "Tom is…", options: ["*an only child", "a twin", "a dad"] },
        { q: "Mei and Jin's parrot…", options: ["*says “Hello!”", "is very slow", "lives in water"] },
      ],
      {
        read: [
          "## 👨‍👩‍👧‍👦 #MyFamily",
          "**aruzhan_07:** My family is big! I have two brothers and a sister. My grandparents live with us too. And we have a cat, Barsik. He's the boss! 😼",
          "**tom.plays:** I'm an only child. I live with my mom and our dog, Biscuit. Biscuit has a red ball — it's his favorite thing. He's my best friend! 🐶",
          "**mei_and_jin:** We're twins! 👯 We have a little brother, and our grandma has a parrot, Kiwi. Kiwi says “Hello!” to everyone. 🦜",
        ].join("\n\n"),
      },
    ),
    trueFalse("Read again. True or false?", [
      ["Aruzhan has two sisters.", false],
      ["The cat's name is Barsik.", true],
      ["Biscuit has a red ball.", true],
      ["Mei and Jin have a big sister.", false],
    ]),
    text("Talk to your teacher.", "- Which family is like your family?\n- Is a pet a family member? Why? 🐾\n- Big family or small family — what's better? 🤔"),
  ]),

  section("Grammar: have / has", [
    tip("Show on the board: *I have — he has*. Students often say *he have* — correct it every time with a smile."),
    table("have-has"),
    choose(
      "have or has? Choose.",
      "1. I [*have/has] a sister.\n2. Tom [have/*has] a dog.\n3. We [*have/has] a cat.\n4. My grandma [have/*has] a parrot.\n5. They [*have/has] two brothers.",
    ),
    gaps("Write have or has.", "1. Aruzhan [has] two brothers.\n2. The twins [have] a little brother.\n3. My uncle [has] a big dog.\n4. You [have] a cool family!"),
    drag(
      "🇬🇧 have got: complete.",
      "1. I['ve got] a cousin in London.\n2. She['s got] a hamster.\n3. They['ve got] a turtle.",
      ["has got", "'m got"],
    ),
    order("Put the words in order.", ["My sister has a rabbit.", "We have two cats.", "I have an uncle in Almaty."]),
  ]),

  section("Let's talk: My family tree", [
    text(
      "Draw a family tree 🌳",
      "Draw your family tree on the board — real or made up (a famous TV family is OK too!).\n\nTell your teacher: *I have a brother. His name is… My grandma has a cat…*\n\nYour teacher asks: *How old is he? Where is she from?*",
    ),
    text(
      "Talk to your teacher.",
      "- Do you know a family from a TV show or a cartoon? Tell about it. 📺\n- What pet is good for a small flat? 🏢\n- What is a cool name for a dog? A cat? 🐶🐱",
    ),
    tip("*If you have time:* the student describes a TV family (The Simpsons, a family from a cartoon), you guess the show."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "She ___ a brother.", options: ["*has", "have", "is"] },
      { q: "My dad's sister is my…", options: ["*aunt", "uncle", "cousin"] },
      { q: "No brothers or sisters =", options: ["*an only child", "twins", "parents"] },
      { q: "🇬🇧 I've got a cat. =", options: ["*I have a cat.", "I am a cat.", "I get a cat."] },
    ]),
    box("Word of the day: fur baby", "**fur baby** = a pet that is like a child in the family 🐶💕\n\n*This is Biscuit, my fur baby!*"),
  ]),

  homework(
    [
      match("Match.", [
        ["mother", "father"],
        ["sister", "brother"],
        ["aunt", "uncle"],
        ["grandma", "grandpa"],
        ["wife", "husband"],
      ]),
      gaps("Write the pet.", "1. 🐹 a [hamster]\n2. 🦜 a [parrot]\n3. 🐢 a [turtle]\n4. 🐰 a [rabbit]"),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      choose("have or has?", "1. My cousin [have/*has] a big dog.\n2. We [*have/has] two cats.\n3. Leo [have/*has] a sister.\n4. I [*have/has] a hamster."),
      order("Put the words in order.", ["My grandparents have a parrot.", "She has two brothers."]),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      video("Watch the video. Learn more family words.", "8tZsPvh2dJI"),
      write("Write 3 new family words from the video.", null),
    ],
    "Homework: Video",
  ),
  homework(
    [
      write("Write a #MyFamily post — your real family, a made-up family or a TV family. (30+ words)", 30, {
        read: "*Example:* My family is small. I have a mom, a dad and a brother. My brother is 10. My grandparents live in Shymkent. They have a big garden and a dog, Rex. I want a cat too!",
      }),
      record("Record your answer: show a family photo (or a drawing) and say who the people are.", 90),
    ],
    "Homework: Writing and speaking",
  ),
]);
