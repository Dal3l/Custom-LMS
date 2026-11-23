import {
  box,
  choose,
  drag,
  gaps,
  homework,
  lesson,
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

// 3.1 I used to… — G: used to / didn't use to / did you use to…?; would for repeated past actions (not states). V: childhood, objects from the past, (old) technology. Say it right: used to /juːstə/. S: compare life then and now. Main format: a photo game with objects from the past + a reading (a dad's blog, ~370 words) + speaking. No video in class.
export default lesson("b1-3.1", "I used to…", () => [
  section("Warm-up: Museum of the past", [
    box(
      "Today you will…",
      "- talk about your childhood and how life has changed 🧸\n- use *used to* and *would*: *I used to play outside every day.* ⏪\n- discover objects your parents couldn't live without 📼",
    ),
    matchPictures("What's this? Match the objects from the past.", [
      ["photos/retro-cassette.jpg", "cassette tapes"],
      ["photos/retro-floppy.jpg", "floppy disks"],
      ["photos/retro-phone.jpg", "a rotary phone"],
      ["photos/retro-vhs.jpg", "a video cassette (VHS)"],
      ["photos/retro-payphone.jpg", "a payphone"],
      ["photos/retro-walkman.jpg", "a Walkman"],
    ]),
    text(
      "Talk to your teacher.",
      "- Have you ever used any of these objects? Which ones did your parents use? What for? 📼\n- What object from your childhood do you miss? Why?\n- Which thing that you use every day will look funny in a museum in 30 years? 🏛️",
    ),
    tip("Let the student guess what each object was for. If they don't know, explain with *used to*: *People used to listen to music on these. You had to wind the tape with a pencil!* Don't explain the grammar yet."),
  ]),

  section("Vocabulary: Then and now", [
    words("Childhood and change", [
      ["childhood", "🧸 the time when you were a child", "I had a happy childhood."],
      ["grow up", "🌱 become an adult; spend your childhood somewhere", "I grew up in a small town."],
      ["bring up", "👨‍👩‍👧 (parents) look after and teach a child", "My grandma brought me up."],
      ["a habit", "🔁 something you do regularly", "Biting your nails is a bad habit."],
      ["nowadays", "📅 at the present time, compared with the past"],
      ["in those days", "🕰️ at that time in the past", "In those days, nobody had a mobile phone."],
      ["out of date / old-fashioned", "👴 not modern anymore"],
      ["nostalgic", "🥹 a little sad and happy when you remember the past"],
      ["rewind", "⏪ go back on a tape or video"],
      ["dial a number", "☎️ press or turn the numbers on a phone"],
      ["get bored", "😑 start to feel bored", "We never got bored — we always found a game."],
      ["hang out (with)", "🛹 spend free time with friends", "We used to hang out in the park."],
    ]),
    match("Match.", [
      ["grow", "up in a village"],
      ["have a happy", "childhood"],
      ["hang out", "with friends"],
      ["dial", "a number"],
      ["a bad", "habit"],
      ["feel", "nostalgic"],
    ]),
    quiz("Choose the right word.", [
      { q: "My parents both worked, so my grandparents ___ me up.", options: ["*brought", "grew", "hung"] },
      { q: "Where did you ___ up? — In a small town near Almaty.", options: ["*grow", "bring", "hang"] },
      { q: "After school we used to ___ out at the mall.", options: ["*hang", "grow", "bring"] },
      { q: "___, kids spend more time online than outside.", options: ["*Nowadays", "In those days", "Old-fashioned"] },
    ]),
    gaps(
      "Complete with a word from the list above.",
      "1. I grew [up] in Shymkent, but now I live in Astana.\n2. My parents worked a lot, so my grandparents brought me [up].\n3. In those [days], people wrote letters by hand. ✉️\n4. [Nowadays], almost everyone has a smartphone. 📱\n5. When I hear songs from the 90s, I feel really [nostalgic]. 🥹\n6. Checking my phone in bed is a terrible [habit].\n7. After school we used to hang [out] in the yard until dark.\n8. This computer is so old-[fashioned] — it's from 2005!",
    ),
  ]),

  section("Reading: Things my kids will never understand", [
    tip("A blog post (~370 words). First reading: *Is the writer happy or sad about the changes?* Then the tasks. Ask the student to highlight every *used to* and *would* — they're the grammar of the next section."),
    trueFalse(
      "Read the blog post. True or false?",
      [
        ["The writer's kids have never seen a cassette before.", true],
        ["The writer used to record songs from the radio.", true],
        ["The writer's family didn't use to have a phone at home.", false],
        ["As a child, the writer used to stay inside most of the time.", false],
        ["The writer thinks everything was better in the past.", false],
        ["The writer has decided to change one family habit.", true],
      ],
      {
        read: [
          "## 📼 Things my kids will never understand",
          "*by Arman, dad of two*",
          "Last weekend my son found a box of my old cassettes in the garage. \"Dad, what are these?\" he asked. That's when I realized how much the world has changed since I was a kid.",
          "**Music.** When I was twelve, I used to sit next to the radio for hours with my finger on the \"record\" button, waiting for my favorite song. The DJ would always start talking before the song ended, and I would be so angry! If you wanted to hear a song again, you had to rewind the tape — and sometimes the tape got stuck, so you used to wind it back with a pencil. ✏️ My kids just say, \"Play it again,\" to a speaker.",
          "**Phones.** We used to have one phone for the whole family, in the hall. If you wanted to call a friend, you had to know their number by heart. Their mom or dad would usually answer, so you had to be polite: \"Good evening, can I speak to Ruslan, please?\" Today my daughter has 300 contacts and doesn't know a single number.",
          "**Free time.** We didn't use to have tablets or the internet, so we spent every free minute outside. We would play football until it got dark, and our parents never knew exactly where we were. Nobody had a phone, but we always came home for dinner. Did we use to get bored? Sometimes. But boredom made us creative — we invented games and built houses out of old boxes.",
          "**Photos.** My parents used to take maybe thirty photos a year. You had to wait a week for them to be printed, and half of them were terrible. Now we take thirty photos of our breakfast. 😄",
          "Am I nostalgic? Of course. But I'm not one of those people who think everything used to be better. My grandma used to wash all our clothes by hand, and I'm very happy that she didn't have to do it forever. Every generation has good and bad things.",
          "Still, I've made one decision: on Sundays, our family has a \"no-screen afternoon\". We play board games and go outside. My kids complained at first — but last Sunday my son asked if we could make a house out of boxes. 📦",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Why was Arman angry when he recorded songs?", options: ["*The DJ talked over the end of the song.", "The radio was broken.", "His parents turned it off."] },
      { q: "What did you need to call a friend?", options: ["*to know their number by heart", "a smartphone", "a lot of money"] },
      { q: "According to Arman, boredom…", options: ["*made children creative", "was a big problem", "never happened"] },
      { q: "What is the Sunday \"no-screen afternoon\"?", options: ["*time for games and going outside, without screens", "a day without school", "an afternoon of watching films"] },
    ]),
    text(
      "Talk to your teacher.",
      "- Which part of Arman's childhood sounds better than today? Which sounds worse?\n- Do you agree that boredom makes people creative? Have you ever experienced it?\n- Would a \"no-screen afternoon\" work in your family? Why / why not? 📵",
    ),
  ]),

  section("Grammar: used to and would", [
    quiz("Notice the rule 🔍 Look: “We used to have one phone for the whole family.” “We would play football until it got dark.” “We didn't use to have tablets.”", [
      { q: "Is it still true now?", options: ["*No — it was true in the past, but not now.", "Yes, it's still true.", "It's a plan for the future."] },
      { q: "“would play” here means…", options: ["*a repeated action in the past (like used to)", "a future plan", "a polite request"] },
      { q: "Can we say “We would have one phone” (a state)?", options: ["*No — for states, only used to.", "Yes, it's the same.", "Only in questions."] },
    ]),
    table("used-to"),
    choose(
      "Choose the right form.",
      "1. I [*used to/use to] have very long hair when I was a student.\n2. We [*didn't use to/didn't used to] have a car.\n3. [*Did you use to/Did you used to] play computer games as a child?\n4. My dad [*would/used] always read us a story before bed. 📖\n5. She [*used to/would] live in London. Now she lives in Paris.\n6. I [*went/used to go] to Japan in 2019 — it was my first trip abroad.\n7. There [*used to/would] be a cinema here. Now it's a supermarket.\n8. Every summer, we [*would/were] stay with our grandparents in the village.",
    ),
    gaps(
      "Complete with used to / didn't use to / Did … use to + the verb in brackets.",
      "1. I [used to play] the piano, but I stopped when I was twelve. (play)\n2. My brother [didn't use to like] vegetables, but now he's a vegetarian! (not / like)\n3. [Did you use to] have a pet when you were a child? (you)\n4. People [used to write] letters by hand. (write)\n5. We [didn't use to have] the internet at home. (not / have)\n6. Where [did you use to] go on holiday? (you)\n7. My grandma [used to work] in a factory. (work)\n8. This street [used to be] much quieter. (be)",
    ),
    sort("used to only, or used to AND would? Sort. 🤔", {
      "only used to (states)": ["I ___ have a dog.", "We ___ live in Almaty.", "She ___ be very shy.", "He ___ love cartoons."],
      "used to or would (actions)": ["Every day we ___ walk to school.", "My mom ___ sing to us at night.", "On Sundays we ___ visit grandma.", "We ___ play outside for hours."],
    }),
    drag(
      "Complete Arman's memories.",
      "When I was a kid, we [used] to live in a small flat. We [didn't] use to have a car, so we [would] walk everywhere. Every Sunday my grandma [would] bake bread, and the whole flat [used] to smell amazing. [Did] you use to have a tradition like that? I [went] to a summer camp only once — in 1991 — and I hated it! 😄",
      ["use", "wouldn't", "uses", "goes"],
    ),
    order("Make sentences.", [
      "I used to live in a small village.",
      "We didn't use to have a phone at home.",
      "Did you use to play outside a lot?",
      "My grandpa would tell us stories every evening.",
      "There used to be a park here.",
    ]),
  ]),

  section("Say it right: used to", [
    box(
      "🗣️ Say it right",
      "**used to** sounds like one word: **/ˈjuːstə/** — “*yoostuh*”.\n\nThe **d** is silent, and **to** is weak!\n\n*I used to live there.* → “I **yoostuh** live there.”\n\nCompare: *I **used** /juːzd/ my phone.* (the verb *use* in the past — different sound!)",
    ),
    quiz("Listen to your teacher. Which sound do you hear?", [
      { q: "I used to play tennis.", options: ["*/juːstə/", "/juːzd/"] },
      { q: "I used my phone to pay.", options: ["*/juːzd/", "/juːstə/"] },
      { q: "Did you use to live here?", options: ["*/juːstə/", "/juːzd/"] },
      { q: "We used a map to find it.", options: ["*/juːzd/", "/juːstə/"] },
    ]),
    tip("Drill a chain with the student's real childhood: *I used to… → I used to play… → I used to play outside every day.* Make sure they don't say “use-ed to”."),
  ]),

  section("Let's talk: Then and now", [
    text(
      "Then and now 🔄",
      "Tell your teacher about your life **ten years ago** and **now**. Talk about:\n\n- 🏠 where you used to live\n- 👕 how you used to look (hair, clothes)\n- 🎮 what you used to do in your free time\n- 🍔 food you used to love or hate\n- 🎵 music you used to listen to\n- 😅 a habit you used to have\n\nYour teacher asks: *Did you use to…? Do you still…?*",
    ),
    text(
      "Talk to your teacher.",
      "- What did your parents use to say to you all the time when you were a child? Do you say the same things now? 😄\n- Is there something you didn't use to like, but love now? How did it change?\n- In what ways is your childhood different from your parents' childhood?",
    ),
    tip("*If you have time:* “Two truths and a lie” — the student says three sentences with *used to* about their childhood; you guess the lie. Then swap."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "I ___ have a cat, but now I have a dog.", options: ["*used to", "would", "use to"] },
      { q: "We ___ have a TV when I was small.", options: ["*didn't use to", "didn't used to", "wouldn't use"] },
      { q: "Every evening my dad ___ cook dinner.", options: ["*would", "was used", "uses to"] },
      { q: "spend free time with friends =", options: ["*hang out", "grow up", "bring up"] },
    ]),
    box(
      "Word of the day: throwback",
      "📸 **a throwback** = something that reminds you of the past.\n\n*#ThrowbackThursday — people post old photos of themselves on Thursdays!*",
    ),
  ]),

  homework(
    [
      video("Watch: used to and would — 6 Minute Grammar.", "V2quIYo41Ig"),
      choose(
        "Choose.",
        "1. I [*used to/would] be afraid of the dark.\n2. My mom [*would/used] make pancakes every Saturday.\n3. [*Did/Do] you use to have a nickname?\n4. We [*didn't use to/didn't used to] go abroad much.\n5. He [*used to/would] have a beard, but he shaved it off.\n6. When I was a kid, I [*would/was] spend hours drawing.\n7. I [*met/used to meet] my wife in 2015.\n8. There [*used to/would] be a bakery on this corner.",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      gaps(
        "Complete with one word.",
        "1. I grew [up] by the sea. 🌊\n2. My aunt brought me [up] after my parents moved abroad.\n3. In those [days], there was no internet.\n4. We used to hang [out] in the shopping center.\n5. When I see my old toys, I feel [nostalgic].\n6. Smoking is a very bad [habit].",
      ),
      write("Write about how your life has changed in the last 10 years (100+ words). Use used to, didn't use to and would at least once each.", 100, {
        read: "*Example:* Ten years ago I used to live with my parents in Taraz. I didn't use to care about my health at all — I would eat chips and play computer games every evening. 🎮 I used to be very shy, and I didn't have many friends. Now everything is different. I live in Almaty, I go to the gym three times a week, and I've become much more outgoing…",
      }),
      record("Ask an older family member about their childhood (or imagine it!) and record a 1-minute story: “My grandma used to…” 🎤", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
