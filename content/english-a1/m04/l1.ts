import {
  box,
  choose,
  drag,
  gaps,
  homework,
  lesson,
  listening,
  matchPictures,
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

// 4.1 Room tour — G: there is / there are; in / on / under / next to. V: rooms and furniture. Main format: photos + listening (a room tour).
export default lesson("a1-4.1", "Room tour", () => [
  section("Warm-up: Nice room?", [
    box("Today you will…", "- name rooms and furniture\n- say *There's a… / There are…*\n- say where things are: *in, on, under, next to*\n- give a room tour 🏠"),
    picture("Look at the photo.", ["photos/room-living.jpg"], "A living room in Rio de Janeiro, Brazil 🇧🇷"),
    text(
      "Talk about the photo.",
      "- What things do you see? Say 5 things! 👀\n- What colors are in the room?\n- Is it a nice room? Is it cozy? 🛋️\n- Is it like your living room? What's different?",
    ),
    tip("New words are OK here — help the student, then come back to the photo after the vocabulary."),
  ]),

  section("Vocabulary: Rooms and furniture", [
    words("Rooms", [
      ["a bedroom", "🛏️", "My bedroom is small."],
      ["a living room", "🛋️ 🇬🇧 also: a lounge"],
      ["a kitchen", "🍳"],
      ["a bathroom", "🛁"],
      ["a hall", "🚪 the room next to the front door"],
      ["a balcony", "🌇"],
      ["a flat — an apartment", "🏢 🇬🇧 flat · 🇺🇸 apartment"],
      ["a house", "🏠"],
    ]),
    matchPictures("Which room is it? Match.", [
      ["photos/room-bedroom.jpg", "a bedroom"],
      ["photos/room-living.jpg", "a living room"],
      ["photos/room-kitchen.jpg", "a kitchen"],
      ["photos/room-bathroom.jpg", "a bathroom"],
    ]),
    words("Furniture and things", [
      ["a bed", "🛏️"],
      ["a sofa", "🛋️ 🇬🇧 also: a couch"],
      ["an armchair", "💺 a big soft chair"],
      ["a desk", "🧑‍💻 a table for work"],
      ["a chair", "🪑"],
      ["a lamp", "💡"],
      ["a wardrobe", "🚪 for clothes · 🇺🇸 a closet"],
      ["a shelf — shelves", "📚"],
      ["a mirror", "🪞"],
      ["a rug", "🟫 on the floor"],
      ["a plant", "🪴"],
      ["a fridge", "🧊 🍳 in the kitchen"],
      ["a cooker", "🔥 🇺🇸 a stove"],
      ["a shower — a bath", "🚿 — 🛁 🇺🇸 a bathtub"],
      ["a window", "🪟"],
      ["a poster", "🖼️ on the wall"],
      ["cozy", "🧸 warm and nice · 🇬🇧 cosy", "My room is small but cozy."],
    ]),
    sort("Where is it usually? Sort.", {
      "🛏️ bedroom": ["bed", "wardrobe"],
      "🛋️ living room": ["sofa", "armchair"],
      "🍳 kitchen": ["fridge", "cooker"],
      "🛁 bathroom": ["shower", "bath"],
    }),
    gaps("What is it?", "1. You sleep in it: a [bed]\n2. Your clothes are in it: a [wardrobe]\n3. You see your face in it: a [mirror]\n4. A table for homework: a [desk]\n5. It's green and it lives in a pot: a [plant]"),
  ]),

  section("Grammar: there is / there are", [
    tip("Use the living room photo: *There's a TV. There are two sofas. There isn't a bed!*"),
    table("there-is"),
    picture("Look at the living room again.", ["photos/room-living.jpg"]),
    trueFalse("Look at the photo. True or false?", [
      ["There's a TV.", true],
      ["There are two armchairs.", true],
      ["There's a bed.", false],
      ["There's a plant.", true],
      ["There aren't any windows.", false],
    ]),
    choose(
      "there's or there are? Choose.",
      "1. [*There's/There are] a lamp on the desk.\n2. [There's/*There are] three posters on the wall.\n3. [*There isn't/There aren't] a TV in my room.\n4. [There isn't/*There aren't] any chairs in the kitchen.",
    ),
    gaps("Complete with is, isn't, are or aren't.", "1. There [is] a rug on the floor. ✅\n2. There [are] two beds in the room. ✅\n3. There [isn't/is not] a balcony. ❌\n4. There [aren't/are not] any plants. ❌"),
  ]),

  section("Grammar: Where is it?", [
    table("prep-1"),
    picture("Look at the photos.", ["photos/room-desk.jpg", "photos/cat-under-bed.jpg"]),
    choose(
      "Look at the photos. Choose.",
      "1. The laptop is [*on/under] the desk.\n2. The plant is [*next to/in] the laptop.\n3. The cat is [on/*under] the bed.\n4. The lamp is [*on/under] the desk.",
    ),
    drag(
      "Complete.",
      "My keys are [in] my bag. My phone is [on] the table. My cat is [under] the sofa — he's shy! The lamp is [next to] my bed.",
      ["at", "between"],
    ),
  ]),

  section("Listening: Room tour", [
    tip("Read the script like a vlogger! The student can draw the room on the board while listening."),
    ...listening(
      "Listen. Leo gives a room tour. Draw his room!",
      "**Leo:** Hey, guys! Welcome to my room tour! 🎥\n\n**Leo:** OK, this is my room. It's small, but it's cozy. There's a big window, and there's a plant on the window sill.\n\n**Leo:** This is my bed. There are three pillows on it — and my cat, Tiger! Hi, Tiger! 🐱\n\n**Leo:** Next to the bed, there's my desk. There's a laptop and a lamp on it. My gaming headphones are on the desk too. 🎧\n\n**Leo:** On the wall, there are two posters — a football poster and a Minecraft poster.\n\n**Leo:** There isn't a TV in my room. And there aren't any books… OK, there's one book. It's under the bed! 😅\n\n**Leo:** That's my room! Bye!",
    ),
    quiz("Listen and choose.", [
      { q: "Leo's room is…", options: ["*small and cozy", "big and new", "white and cold"] },
      { q: "What's on the bed?", options: ["*three pillows and a cat", "a laptop", "two posters"] },
      { q: "What's next to the bed?", options: ["*the desk", "the window", "the TV"] },
      { q: "Where is the book?", options: ["*under the bed", "on the desk", "on the wall"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["There's a TV in Leo's room.", false],
      ["There are two posters on the wall.", true],
      ["The plant is on the desk.", false],
    ]),
  ]),

  section("Let's talk: My room", [
    text(
      "Room tour! 🎥",
      "Give a room tour of your room — real or your dream room. Use the camera, a photo or a drawing.\n\n*This is my room. There's a… There are… The lamp is next to…*\n\nYour teacher asks: *Where's your bed? Are there any posters?*",
    ),
    text(
      "Talk to your teacher.",
      "- What's your favorite place in your home? Why? 🏠\n- What's on your desk right now?\n- What's under your bed? 😄\n- Is your room tidy or messy? 🧹",
    ),
    order("Put the words in order.", ["There's a plant on the desk.", "There are two posters on the wall.", "My cat is under the bed."]),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "___ three chairs in the kitchen.", options: ["*There are", "There's", "There is"] },
      { q: "🇺🇸 closet = 🇬🇧 …", options: ["*wardrobe", "shelf", "desk"] },
      { q: "The cat is ___ the bed. ⬇️", options: ["*under", "on", "next to"] },
    ]),
    box("Word of the day: aesthetic", "**aesthetic** = beautiful, in a nice style ✨ — very popular for rooms!\n\n*Her room is so aesthetic: white walls, plants and fairy lights.*"),
  ]),

  homework(
    [
      matchPictures("Match the rooms.", [
        ["photos/room-kitchen.jpg", "a kitchen"],
        ["photos/room-bathroom.jpg", "a bathroom"],
        ["photos/room-bedroom.jpg", "a bedroom"],
      ]),
      gaps("Write the word.", "1. 🛋️ a [sofa]\n2. 🪞 a [mirror]\n3. 💡 a [lamp]\n4. 🪴 a [plant]"),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      choose("Choose.", "1. [*There's/There are] a desk in my room.\n2. There [isn't/*aren't] any posters.\n3. The keys are [*in/on] my bag. 📦\n4. The phone is [*on/under] the table. ⬆️"),
      video("Watch the grammar video: there is / there are.", "U-vMdpfxbnw"),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      video("Watch a real room tour. What furniture is in the room?", "aDbtAU2qqyg"),
      write("Write 5 things from the room in the video: “There's a… There are…”", null),
    ],
    "Homework: Video",
  ),
  homework(
    [
      write("Write a room tour of your room or your dream room. (35+ words)", 35, {
        read: "*Example:* This is my room. It's small but cozy. There's a bed next to the window. There's a desk with a laptop and a lamp on it. There are two posters on the wall. There isn't a TV. My cat is usually under the bed!",
      }),
      record("Record a room tour: show your room (or a photo) and describe it.", 120),
    ],
    "Homework: Writing and speaking",
  ),
]);
