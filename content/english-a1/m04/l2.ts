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
  picture,
  quiz,
  record,
  section,
  table,
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 4.2 Smart home — G: Is there…? Are there any…?; some / any; behind / in front of / between. V: home, gadgets. Main format: reading (an ad) + video.
export default lesson("a1-4.2", "Smart home", () => [
  section("Warm-up: Real or fake?", [
    box("Today you will…", "- name home gadgets\n- ask *Is there…? Are there any…?*\n- say *behind, in front of, between*\n- ask about someone's home"),
    trueFalse("Smart home: real 🤖 or fake 🙃? Guess!", [
      ["A robot vacuum cleans the floor.", true],
      ["A smart fridge can tell you: “There isn't any milk!”", true],
      ["A smart speaker can cook dinner.", false],
      ["Smart lights can change color.", true],
      ["A smart bed can make your homework.", false],
    ]),
    tip("Let the student guess and argue: *I think it's real! — No, it's fake!* Then talk."),
    text("Talk to your teacher.", "- What smart gadgets are in your home? 🏠\n- What gadget do you want? Why?"),
  ]),

  section("Vocabulary: Home gadgets", [
    words("Home gadgets", [
      ["a smart speaker", "🔊 you talk to it: “Play music!”", "There's a smart speaker in the kitchen."],
      ["a robot vacuum", "🤖 it cleans the floor"],
      ["smart lights", "💡 they change color"],
      ["a TV", "📺"],
      ["a washing machine", "🧺 it washes clothes"],
      ["a dishwasher", "🍽️ it washes plates"],
      ["a microwave", "🔥 it makes food hot, fast"],
      ["an air conditioner", "❄️ it makes the room cool"],
      ["a smart lock", "🔐 the door opens with your phone"],
      ["Wi-Fi", "📶 🇬🇧 why-fy"],
      ["a charger", "🔌"],
      ["upstairs — downstairs", "⬆️ — ⬇️"],
    ]),
    matchPictures("Match the photos.", [
      ["photos/smart-robot.jpg", "a robot vacuum"],
      ["photos/smart-speaker.jpg", "a smart speaker"],
      ["photos/obj-laptop.jpg", "a laptop"],
    ]),
    match("What does it do? Match.", [
      ["a dishwasher", "washes plates"],
      ["a washing machine", "washes clothes"],
      ["a robot vacuum", "cleans the floor"],
      ["an air conditioner", "makes the room cool"],
      ["a smart lock", "opens the door with your phone"],
    ]),
  ]),

  section("Reading: A smart flat", [
    tip("Read the ad together. Ask: *Is there a…? Are there any…?* — the student answers from the text."),
    quiz(
      "Read the ad. Choose.",
      [
        { q: "Where is the flat?", options: ["*in Astana", "in London", "in Seoul"] },
        { q: "How many bedrooms are there?", options: ["*two", "one", "three"] },
        { q: "The robot vacuum is…", options: ["*under the sofa", "in the bedroom", "on the balcony"] },
      ],
      {
        read: [
          "## 🏢 SMART FLAT FOR RENT — Astana",
          "This is a new flat on the 15th floor. There are two bedrooms, a living room, a kitchen and a bathroom. There's a big balcony with a city view! 🌆",
          "**It's a smart flat:** 🤖",
          "- There's a smart lock — the door opens with your phone.",
          "- There are smart lights in every room. They change color!",
          "- In the living room, there's a big TV and a smart speaker. The speaker is between the TV and the window.",
          "- There's a robot vacuum. It lives under the sofa. 😄",
          "- There's a dishwasher in the kitchen, but there isn't a microwave.",
          "There aren't any pets in the flat now, but pets are OK! 🐶",
        ].join("\n\n"),
      },
    ),
    trueFalse("Read again. True or false?", [
      ["There's a balcony.", true],
      ["There's a microwave in the kitchen.", false],
      ["There are smart lights in every room.", true],
      ["Pets aren't OK.", false],
    ]),
    text("Talk to your teacher.", "- Is it a good flat? Why? 👍👎\n- What's the best thing in the flat for you?\n- Is a smart flat expensive? Is it a good idea? 💸"),
  ]),

  section("Grammar: Is there…? Are there any…?", [
    table("there-questions"),
    choose(
      "Choose.",
      "1. [*Is there/Are there] a balcony?\n2. [Is there/*Are there] any plants?\n3. Is there a microwave? — No, there [*isn't/aren't].\n4. Are there any pets? — No, there [isn't/*aren't].\n5. There are [*some/any] chairs in the kitchen.\n6. There aren't [some/*any] books.",
    ),
    gaps(
      "Read the ad again. Answer.",
      "1. Is there a smart lock? — Yes, there [is].\n2. Is there a microwave? — No, there [isn't/is not].\n3. Are there any smart lights? — Yes, there [are].\n4. Are there any pets now? — No, there [aren't/are not].",
    ),
    order("Make questions.", ["Is there a TV in your room?", "Are there any plants in your kitchen?", "Is there Wi-Fi in your school?"]),
  ]),

  section("Grammar: behind / in front of / between", [
    table("prep-2"),
    picture("Look at the living room.", ["photos/room-living.jpg"]),
    choose(
      "Look at the photo. Choose.",
      "1. The table is [*in front of/behind] the sofa.\n2. The window is [*behind/in front of] the armchairs.\n3. The table is [*between/next to] the two sofas.",
    ),
    drag(
      "Complete.",
      "My desk is [between] the bed and the window. My bag is [behind] the door. The TV is [in front of] the sofa.",
      ["on", "under"],
    ),
  ]),

  section("Video: Smart home tour", [
    video("Watch the first 2–3 minutes of a smart home tour. What gadgets do you see?", "KY1aagQ_ues"),
    text("Talk to your teacher.", "- What gadgets are in the video? Is there a robot vacuum? Are there any smart lights?\n- What gadget is the coolest? 😎\n- What gadget is not useful? 🤔"),
    tip("The video is in natural English — the goal is to see the gadgets and catch a few words. Pause and ask *What's this?*"),
  ]),

  section("Let's talk: Your home", [
    text(
      "Interview: ask about your teacher's home 🏠",
      "Ask 6 questions:\n\n*Is there a balcony? Is there a dishwasher? Are there any plants? Are there any smart gadgets? Is there a desk in your room? Where is the TV?*\n\nThen your teacher asks you!",
    ),
    text(
      "Design a smart room 🤖",
      "Draw your dream smart room on the board. Say: *There's a… It's between… There are some…*",
    ),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "___ any plants in your room?", options: ["*Are there", "Is there", "There are"] },
      { q: "There aren't ___ books.", options: ["*any", "some", "a"] },
      { q: "It washes plates:", options: ["*a dishwasher", "a washing machine", "a microwave"] },
    ]),
    box("Word of the day: Wi-Fi password", "**What's the Wi-Fi password?** 📶 — maybe the most important question in a new home or café! 😄"),
  ]),

  homework(
    [
      gaps("Write the gadget.", "1. It cleans the floor: a robot [vacuum]\n2. It washes clothes: a washing [machine]\n3. It makes food hot: a [microwave]\n4. The door opens with your phone: a smart [lock]"),
      quiz("Choose.", [
        { q: "🔙 The cat is ___ the sofa.", options: ["*behind", "in front of", "between"] },
        { q: "↔️ The lamp is ___ the bed and the desk.", options: ["*between", "behind", "on"] },
      ]),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      choose("Choose.", "1. [*Is there/Are there] a TV in your bedroom?\n2. Are there [*any/some] gadgets in your kitchen?\n3. There are [*some/any] books on the shelf.\n4. Is there a balcony? — Yes, there [*is/are]."),
      trueFalse("Correct or not?", [
        ["Is there any plants?", false],
        ["Are there any chairs?", true],
        ["There aren't some books.", false],
        ["There's a smart speaker between the TV and the window.", true],
      ]),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      ...listening(
        "Listen. Aigerim calls about the smart flat.",
        "**Aigerim:** Hello! Is the flat in Astana free?\n\n**Owner:** Yes, it is!\n\n**Aigerim:** Great! Is there a desk in the bedroom? I'm a student.\n\n**Owner:** Yes, there is. It's next to the window.\n\n**Aigerim:** And is there a washing machine?\n\n**Owner:** Yes, there's a washing machine in the bathroom.\n\n**Aigerim:** Are there any shops near the flat?\n\n**Owner:** Yes, there are some shops and a café downstairs.\n\n**Aigerim:** Perfect! And I have a cat. Is that OK?\n\n**Owner:** Of course! Pets are OK.",
      ),
      quiz("Listen and choose.", [
        { q: "The desk is…", options: ["*next to the window", "in the kitchen", "behind the door"] },
        { q: "The washing machine is in the…", options: ["*bathroom", "kitchen", "hall"] },
        { q: "Downstairs there are…", options: ["*some shops and a café", "a park", "a gym"] },
      ]),
    ],
    "Homework: Listening",
  ),
  homework(
    [
      write("Write an ad for your dream smart home. What rooms and gadgets are there? (35+ words)", 35, {
        read: "*Example:* My dream home is a house by the sea. There are three bedrooms and a big kitchen. There's a smart speaker in every room. There's a robot vacuum and a robot cook! 🤖 There isn't a TV, but there are some big windows.",
      }),
      record("Record your answer: describe your home — 3 things that are there and 2 things that aren't.", 90),
    ],
    "Homework: Writing and speaking",
  ),
]);
