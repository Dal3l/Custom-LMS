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
  table,
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 10.1 It must be… — G: modals of deduction about the present: must / might / may / could / can't + verb (and + be -ing). V: describing objects and people (shape, texture, material, look like…). Say it right: must be, can't be — linked and stressed. S: guess what's in a photo and whose things they are. Main format: a close-up photo game + a "lost bag" reading + a listening (Leo and Asel find a phone in the café, ~1 min). Video at home.
export default lesson("b1-10.1", "It must be…", () => [
  section("Warm-up: What on earth is it?", [
    box(
      "Today you will…",
      "- guess what things are and who they belong to 🕵️\n- use *must, might, can't*: *It **must be** a strawberry. It **can't be** a tomato!* 🔍\n- describe objects: shape, color, texture ✋",
    ),
    matchPictures("Very close-up photos! What do you think they are? Match. 🔍", [
      ["photos/mystery-zipper.jpg", "a zipper on jeans"],
      ["photos/mystery-honeycomb.jpg", "a honeycomb"],
      ["photos/mystery-cauliflower.jpg", "a cauliflower"],
      ["photos/mystery-strawberry.jpg", "a strawberry"],
      ["photos/mystery-kiwi.jpg", "a kiwi fruit"],
    ]),
    text(
      "Talk to your teacher.",
      "- Before you matched them, what did you think each photo was? Were you right? 😄\n- Which photo was the hardest? Why?\n- Take a very close photo of something in your room now — can your teacher guess it?",
    ),
    tip("Before the student matches, ask them to guess aloud: *What do you think it is?* Model the language: *It might be… It could be… It can't be a… because…* Then the photo challenge with the student's phone is always fun."),
  ]),

  section("Vocabulary: Describing things", [
    words("Describing objects", [
      ["round — square — oval", "⚪ — 🟦 — 🥚"],
      ["pointed — curved", "🔺 with a sharp end — 🌙 not straight"],
      ["smooth — rough", "🪞 flat and soft to touch — 🪨 not even, scratchy"],
      ["soft — hard", "🧸 — 🪨"],
      ["shiny — dull", "✨ reflects light — 🌫️ not bright"],
      ["made of (wood / metal / plastic)", "🪵 — ⚙️ — 🧴"],
      ["look like + noun", "👀 be similar to", "It looks like a strawberry."],
      ["look + adjective", "👀 seem", "It looks soft."],
      ["a pattern", "🔶🔷 a design that repeats"],
      ["a texture", "✋ how something feels when you touch it"],
      ["belong to", "👤 be someone's", "This bag belongs to Dana."],
      ["a clue", "🧩 a piece of information that helps you find the answer"],
    ]),
    match("Match the opposites.", [
      ["smooth", "rough"],
      ["soft", "hard"],
      ["shiny", "dull"],
      ["round", "square"],
      ["curved", "straight"],
      ["heavy", "light"],
    ]),
    gaps(
      "Complete with a word from the list above.",
      "1. A strawberry has small seeds all over it, so it isn't [smooth]. 🍓\n2. That stone looks [like] a heart! ❤️\n3. This old table is made [of] wood. 🪵\n4. The detective found an important [clue] — a red hair on the sofa. 🕵️\n5. A honeycomb has a [pattern] of six-sided cells. 🐝\n6. This blanket is so [soft] — like a cloud! ☁️\n7. Whose phone is this? Does it [belong] to you?\n8. The new car was so [shiny] that I could see my face in it. ✨",
    ),
    quiz("Choose the right word.", [
      { q: "This cake looks ___ — I want to eat it now!", options: ["*delicious", "like delicious", "a delicious"] },
      { q: "That cloud looks ___ a dragon. 🐉", options: ["*like", "as", "for"] },
      { q: "A pineapple skin is very ___ to touch.", options: ["*rough", "smooth", "shiny"] },
      { q: "A ___ helped the police find the thief.", options: ["*clue", "pattern", "texture"] },
    ]),
  ]),

  section("Reading: Whose bag is it?", [
    tip("A short puzzle. The student reads the list, makes deductions aloud (*It must be someone who…*) and then answers. Encourage reasons: *It can't be Saule's because…*"),
    quiz(
      "Someone left this bag at the café. Read the list of things in it. Choose the best answer.",
      [
        { q: "Whose bag is it, probably?", options: ["*Dana's", "Saule's", "Kenji's"] },
        { q: "Why must the owner be a runner?", options: ["*There are running shoes and an energy bar.", "There's a book about running.", "There's a medal."] },
        { q: "What does the sketchbook tell us?", options: ["*The owner must draw or design things.", "The owner must be a teacher.", "The owner can't draw."] },
        { q: "Why can't it be Kenji's bag?", options: ["*The note is signed “Mr. Park” — Dana's boss.", "Kenji never goes to cafés.", "Kenji doesn't have a bag."] },
      ],
      {
        read: [
          "## 👜 Lost bag at the café",
          "Inside the bag, the café staff found:",
          "- 👟 a pair of running shoes (size 38) and an energy bar\n- 📓 a sketchbook full of drawings of book covers and flowers\n- 🎟️ a ticket for a design exhibition — today's date\n- 📝 a note: *“Great work on the cover! See you at 9 tomorrow. — Mr. Park”*\n- 🔑 keys with a small marathon medal on the key ring\n- ☕ a loyalty card from this café with 9 stamps out of 10",
        ].join("\n\n"),
      },
    ),
    trueFalse("Read again. Deduce — true or false?", [
      ["The owner must come to this café often.", true],
      ["The owner can't be interested in design.", false],
      ["The owner might go to an exhibition today.", true],
      ["The owner must be a man with very big feet.", false],
      ["The owner must have a job — someone wrote about her work.", true],
    ]),
  ]),

  section("Grammar: must, might, can't", [
    quiz("Notice the rule 🔍 Look: “It must be Dana's bag — there's a note from her boss.” “It might be an exhibition ticket for today.” “It can't be Saule's — she doesn't run marathons.”", [
      { q: "“must be” means…", options: ["*I'm almost sure it's true.", "It's a rule.", "I'm not sure at all."] },
      { q: "“can't be” means…", options: ["*I'm almost sure it's NOT true.", "It's not allowed.", "I don't know."] },
      { q: "“might / could be” means…", options: ["*It's possible.", "It's 100% sure.", "It's impossible."] },
    ]),
    table("deduction"),
    choose(
      "Choose the best modal.",
      "1. He's wearing a uniform and carrying letters. He [*must/can't] be a postman. 📬\n2. She's only 15. She [*can't/must] be a doctor!\n3. I'm not sure where Leo is. He [*might/must] be at the gym.\n4. The restaurant is always full. The food [*must/can't] be really good. 🍝\n5. That [*can't/must] be Asel — she works at her bakery all day on Saturdays!\n6. Take an umbrella. It [*could/must] rain later — the sky looks grey.\n7. They're not answering. They [*must be sleeping/must sleep] — it's 3 a.m.\n8. You've worked 12 hours! You [*must be/can't be] exhausted.",
    ),
    gaps(
      "Complete with must, might or can't.",
      "1. Look at all those medals! She [must] be a great athlete. 🏅\n2. He [can't] be at work — it's Sunday and the office is closed.\n3. I don't know who's at the door. It [might] be the delivery. 📦\n4. You've just eaten a big pizza. You [can't] be hungry again!\n5. Her eyes are red. She [must] be tired — or she's been crying.\n6. Take your coat. It [might] be cold later.\n7. This [can't] be the right address — it's a car park!\n8. That phone has a Japanese case. It [might] be Kenji's — let's ask him.",
    ),
    sort("Sure or not sure? Sort the sentences. ✅🤔❌", {
      "✅ almost sure it's true": ["It must be Dana's bag.", "They must be on holiday.", "He must be very rich."],
      "🤔 possible": ["It might be a strawberry.", "She could be at home.", "It may rain tonight."],
      "❌ almost sure it's not true": ["It can't be Saule's bag.", "He can't be 50 — he looks 30!", "That can't be right."],
    }),
    drag(
      "Complete the detective's thoughts.",
      "There's mud on his shoes, so he [must] have a garden — or he works outside. His hands are rough, so he [can't] be an office worker. He's carrying a large bag. It [might] be full of tools, but I'm not sure. He keeps checking his watch. He [must] be late for something. And look — he's smiling at the phone. He [could] be texting someone he loves. ❤️ He [can't] be a criminal — he's too happy! Elementary! 🕵️",
      ["mustn't", "can", "should"],
    ),
    order("Make sentences.", [
      "It must be Dana's bag.",
      "She can't be at work today.",
      "It might be a strawberry.",
      "They must be sleeping.",
      "That can't be true!",
    ]),
  ]),

  section("Listening: The lost phone", [
    tip("About 1 minute. Leo and Asel find a phone in the café. Listen to their deductions. First listen: *Whose phone is it?*"),
    ...listening(
      "Listen. Leo and Asel find a phone in the café.",
      "**Leo:** Hey, Asel, look — someone left a phone on this table.\n\n**Asel:** Oh no. Whose is it? It can't be the waiter's — he's got his phone in his hand.\n\n**Leo:** It's got a cover with mountains on it. It must belong to someone who likes hiking.\n\n**Asel:** That could be half of Almaty! 😄 Look, a message is coming in. It's in Japanese!\n\n**Leo:** Japanese? Then it might be Kenji's. He was here this morning, wasn't he?\n\n**Asel:** Yes, he was having coffee with Laura. But Kenji's phone is black, and this one is blue.\n\n**Leo:** Hmm. He might have a new phone. Or it could be Laura's — she's learning Japanese, isn't she?\n\n**Asel:** She is! And look — the lock screen photo. That's Laura's cat! It must be her phone.\n\n**Leo:** You're right. She must be really worried. Let's call Kenji — he'll know where she is.\n\n**Asel:** Good idea. Mystery solved, Detective Leo! 🕵️",
    ),
    quiz("Listen and choose.", [
      { q: "Why can't it be the waiter's phone?", options: ["*He's holding his phone.", "He doesn't have a phone.", "He's not at work."] },
      { q: "Why does Leo think it might be Kenji's at first?", options: ["*A message comes in Japanese.", "It has Kenji's name on it.", "Kenji called it."] },
      { q: "How do they know it's Laura's phone?", options: ["*The lock screen shows Laura's cat.", "Laura calls the café.", "It has her photo."] },
      { q: "What will they do next?", options: ["*call Kenji", "take the phone to the police", "wait in the café"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["The phone cover has mountains on it.", true],
      ["Kenji's phone is blue.", false],
      ["Laura is learning Japanese.", true],
      ["Kenji and Laura were in the café in the morning.", true],
      ["They decide to call Laura's mother.", false],
    ]),
  ]),

  section("Say it right: must be, can't be", [
    box(
      "🗣️ Say it right",
      "**must be** — the **t** almost disappears: “*mus-be*” /ˈmʌs bi/\n\n**can't be** — stress on **can't**, and the **t** is short: “*KAHN-be*”\n\nIn British English: /kɑːnt/ · In American English: /kænt/\n\nTo sound sure, stress the modal: *It **MUST** be Laura's!* · *It **CAN'T** be true!*",
    ),
    quiz("Which word is stressed when you're very sure?", [
      { q: "It must be Laura's phone!", options: ["*MUST", "phone"] },
      { q: "That can't be true!", options: ["*CAN'T", "That"] },
      { q: "He must be joking!", options: ["*MUST", "He"] },
      { q: "She can't be 60!", options: ["*CAN'T", "She"] },
    ]),
  ]),

  section("Let's talk: Detective game", [
    text(
      "Game: Whose things? 🕵️",
      "Your teacher describes what's in a stranger's bag or pocket. Deduce: who is the person? What's their job? What did they do today?\n\n🎒 **Bag 1:** a stethoscope, chocolate, a train ticket, a photo of two kids\n🎒 **Bag 2:** a passport, sunglasses, a Spanish phrasebook, sun cream\n🎒 **Bag 3:** a dog lead, a tennis ball, a key, a newspaper\n\n*He must be… She might be… They can't be… because…*\n\nThen describe your own bag — your teacher deduces who you are! 😄",
    ),
    text(
      "Talk to your teacher.",
      "- Look at the person next to you on the bus (or in a photo) — what can you deduce about them? 🚌\n- What would a detective say about you from your phone's home screen?\n- Do you like detective stories or crime series? Which ones?",
    ),
    tip("Push for reasons with *because*: *She must be a doctor because…* and for all three levels of certainty. Make one bag tricky so the student has to use *might / could*."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "The lights are off. They ___ be out.", options: ["*must", "can't", "mustn't"] },
      { q: "He ___ be 18 — he looks about 12!", options: ["*can't", "must", "might"] },
      { q: "I'm not sure. It ___ be a bird or a plane.", options: ["*could", "must", "can't"] },
      { q: "a piece of information that helps you solve a mystery =", options: ["*a clue", "a texture", "a pattern"] },
    ]),
    box(
      "Phrase of the day: You must be joking!",
      "😲 **You must be joking!** = I can't believe it!\n\n*“The concert tickets cost $500.” — “You must be joking!”*",
    ),
  ]),

  homework(
    [
      video("Watch: how to use modal verbs of deduction — English in a Minute.", "u6hEQdGGMuc"),
      choose(
        "Choose.",
        "1. She's been running for an hour. She [*must/can't] be tired.\n2. He [*can't/must] be the boss — he's the newest employee!\n3. I don't know where my keys are. They [*might/must] be in the car.\n4. That [*must/can't] be expensive — it's a designer bag.\n5. You've only been here a day. You [*can't/must] know everyone yet!\n6. Somebody's knocking. It [*could/can't] be the neighbor.\n7. They're shouting. They [*must be arguing/must argue].\n8. It [*can't/mustn't] be lunchtime already — it's only 10!",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      gaps(
        "Complete.",
        "1. The table is made [of] glass.\n2. That cloud looks [like] a horse.\n3. The detective found a [clue] under the sofa.\n4. This phone doesn't [belong] to me.\n5. Silk is very [smooth] to touch.\n6. The old coin was dull, but after cleaning it was [shiny].",
      ),
      write("Look at a photo of a stranger (from a magazine or the internet) or imagine one. Write a detective's report (100+ words): Who must / might / can't they be? What's their job? What are they doing? Give reasons.", 100, {
        read: "*Example:* The woman in the photo is standing at a train station with a big suitcase. She must be going on a long trip. She's wearing a business suit, so she can't be on holiday — she might be going to a meeting in another city. She's looking at her phone and smiling. She could be reading a message from her family…",
      }),
      record("Record 1 minute: Describe a mysterious object in your home without naming it. Your teacher will guess next lesson! 🎤", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
