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
  table,
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 6.2 Bucket list — G: Present Perfect vs Past Simple (I've been to… — I went there in 2022). V: travel experiences. Say it right: been /bɪn/ — been or gone? S: talk about your experiences and your bucket list. Main format: photos + reading (two travelers' lists) + listening (a conversation at a party). No video in class.
export default lesson("a2-6.2", "Bucket list", () => [
  section("Warm-up: Dream places", [
    box("Today you will…", "- talk about places you've been to — and when you went 🌍\n- use *Have you ever…? — When did you…?*\n- make your own bucket list 📝"),
    matchPictures("Where is it? Match the photos and the places.", [
      ["photos/bl-aurora.jpg", "the northern lights in Norway"],
      ["photos/bl-balloons.jpg", "hot-air balloons in Cappadocia, Turkey"],
      ["photos/bl-machu.jpg", "Machu Picchu in Peru"],
      ["photos/legend-wall.jpg", "the Great Wall of China"],
      ["photos/world-baikal.jpg", "Lake Baikal in winter"],
    ]),
    text(
      "Talk to your teacher.",
      "- A **bucket list** = a list of things you want to do in your life. Do you have one — on paper or in your head? 📝\n- Which of these places would you choose first? Why?\n- What's the most beautiful place you've seen with your own eyes? 👀\n- Is there a place everyone loves, but you don't understand why? 😄",
    ),
    tip("Share one thing from your own bucket list — and one thing you've already done. Students love to hear that their teacher has dreams too."),
  ]),

  section("Vocabulary: Travel experiences", [
    words("Travel experiences", [
      ["a bucket list", "📝 things you want to do before you die"],
      ["a once-in-a-lifetime trip", "✨ a very special trip"],
      ["go sightseeing", "📸🏛️ visit famous places"],
      ["go backpacking", "🎒 travel cheaply with a backpack"],
      ["go on a cruise", "🛳️ a holiday on a big ship"],
      ["fly in a hot-air balloon", "🎈"],
      ["see the northern lights", "🌌"],
      ["get a visa", "🛂 a document to enter a country"],
      ["cross the border", "🚧 go into another country"],
      ["jet lag", "😴✈️ tired after a long flight to another time zone"],
      ["a souvenir", "🧲 a thing you buy to remember a place"],
      ["stay with locals", "🏠👋 sleep in the home of people who live there"],
    ]),
    match("Match.", [
      ["go", "sightseeing"],
      ["get", "a visa"],
      ["cross", "the border"],
      ["fly in", "a hot-air balloon"],
      ["stay with", "locals"],
      ["see", "the northern lights"],
    ]),
    quiz("Choose.", [
      { q: "You flew 12 hours, and now you can't sleep at night. You have…", options: ["*jet lag", "a visa", "a souvenir"] },
      { q: "A fridge magnet from Paris is a…", options: ["*souvenir", "bucket list", "border"] },
      { q: "A holiday on a big ship is a…", options: ["*cruise", "backpacking trip", "visa"] },
      { q: "You travel with a backpack and stay in hostels. You go…", options: ["*backpacking", "sightseeing", "on a cruise"] },
    ]),
    gaps(
      "Complete.",
      "1. Seeing the northern lights is on my bucket [list]. 📝\n2. We went [sightseeing] in Rome — the Colosseum was amazing! 🏛️\n3. You need a [visa] to visit some countries. 🛂\n4. I bought a [souvenir] for my mom — a small plate. 🧲\n5. After the flight to New York, I had terrible jet [lag]. 😴\n6. In Georgia we stayed with [locals] — they cooked for us! 🏠\n7. We crossed the [border] by car. 🚧\n8. My grandparents went on a [cruise] around the Mediterranean. 🛳️",
    ),
  ]),

  section("Reading: My bucket list — so far", [
    tip("Two travelers share their bucket lists. While reading, the student marks ✅ (done) and ⬜ (not yet). Then ask: *When did they do it? Where?* — notice how the past forms give the details."),
    trueFalse(
      "Read the posts. True or false?",
      [
        ["Aliya has seen the northern lights.", true],
        ["Aliya saw the northern lights in Finland.", false],
        ["Aliya has never flown in a hot-air balloon.", false],
        ["Ben has been to Machu Picchu.", true],
        ["Ben went to Peru last year.", false],
        ["Ben has never seen snow.", true],
      ],
      {
        read: [
          "## 📝 My bucket list — so far",
          "**aliya.travels** 🇰🇿 *I made my bucket list when I was 16. I've done 6 of the 20 things! I've seen the northern lights — I went to Tromsø, in Norway, in 2023. It was −20°C, but I didn't feel the cold. 🌌 I've flown in a hot-air balloon in Cappadocia — we went up at 6 a.m. for the sunrise. I've never been on a cruise, and I've never been to America. Next on my list: Japan in cherry blossom season! 🌸*",
          "**ben_on_the_road** 🇦🇺 *I'm from Sydney, so I've been to a lot of beaches 🏖️, but I've never seen snow! Crazy, right? My biggest adventure: I've walked to Machu Picchu. I did it two years ago with my brother — four days on foot! I've also stayed with locals in Vietnam. They taught me to cook pho. 🍜 What haven't I done? I've never been to Central Asia. Aliya, you've invited me to Almaty — I'm coming!*",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "How old was Aliya when she made her bucket list?", options: ["*16", "20", "6"] },
      { q: "What time did Aliya's balloon go up?", options: ["*at 6 a.m.", "at sunset", "at noon"] },
      { q: "How long did Ben walk to Machu Picchu?", options: ["*four days", "four hours", "two weeks"] },
      { q: "What did Ben learn in Vietnam?", options: ["*to cook pho", "to surf", "to speak Vietnamese"] },
    ]),
  ]),

  section("Grammar: I've been… — I went…", [
    quiz("Notice the rule 🔍 Look: “I've seen the northern lights — I went to Tromsø in 2023.” Which is true?", [
      { q: "“I've seen” — we don't say when. It's…", options: ["*an experience in my life", "a plan", "a habit"] },
      { q: "“I went in 2023” — we say when. It's…", options: ["*the Past Simple", "the Present Perfect", "the future"] },
      { q: "Which word goes with the Past Simple?", options: ["*ago", "ever", "never"] },
    ]),
    table("pp-ps"),
    choose(
      "Choose.",
      "1. I [*'ve been/went] to Turkey three times.\n2. I [*went/'ve been] there last summer.\n3. Have you ever [*tried/try] Georgian food?\n4. — Yes, I have. I [*tried/'ve tried] it in Tbilisi in 2021.\n5. She [*'s never seen/never saw] snow in her life.\n6. When [*did you go/have you gone] to Japan?\n7. We [*visited/'ve visited] Baikal two years ago.\n8. He [*'s been/was] to Almaty, but he hasn't been to Astana.",
    ),
    gaps(
      "Present Perfect or Past Simple? Complete the conversation.",
      "A: [Have] you ever been to Georgia? (have / did)\nB: Yes, I [have]. I [went] there in 2022. (go)\nA: Did you like it?\nB: Yes, I [loved] it! I [ate] khachapuri every day. (love, eat)\nA: Have you ever [been] to Armenia? (be)\nB: No, I [haven't/have not]. But my brother [has]!\nA: When [did] he go?\nB: He [went] last year. (go)",
    ),
    drag(
      "Complete the story.",
      "I've [been] to Istanbul twice. The first time, I [went] with my parents in 2019. We [visited] the Blue Mosque and ate a lot of baklava. 😋 Last year I [went] again with my friends. Have you [ever] been there? It's amazing! But I've [never] been to Cappadocia. I [haven't] seen the balloons yet. It's on my bucket list! 🎈 My friend Aliya [has] — she flew in one in 2023!",
      ["go", "was", "did"],
    ),
    order("Make questions.", [
      "Have you ever been to Japan?",
      "When did you go there?",
      "Who did you go with?",
      "Have you ever flown in a hot-air balloon?",
      "What did you buy there?",
    ]),
  ]),

  section("Say it right: been or gone?", [
    box(
      "🗣️ Say it right — and say it right!",
      "**been** in a sentence is short: **/bɪn/** (🇺🇸 /bɪn/, 🇬🇧 also /biːn/)\n\n*I've been to Rome* → “I've **bin** to Rome”\n\n⚠️ **been to** vs **gone to**:\n\n*She's **been** to Paris.* ✈️➡️🔙 she went and came back\n*She's **gone** to Paris.* ✈️➡️ she's there now!",
    ),
    quiz("been or gone? Choose.", [
      { q: "“Where's Dana?” — “She's ___ to the shop. She'll be back in 10 minutes.”", options: ["*gone", "been"] },
      { q: "I've ___ to Turkey three times. I love it!", options: ["*been", "gone"] },
      { q: "“Is Leo at home?” — “No, he's ___ to Astana for a week.”", options: ["*gone", "been"] },
      { q: "Have you ever ___ to Georgia?", options: ["*been", "gone"] },
    ]),
    tip("Draw it: an arrow there and back for *been* ✈️🔙, an arrow only there for *gone* ✈️. Say *I've been to…* fast with /bɪn/ — the student repeats with 3 places they've been to."),
  ]),

  section("Listening: At a party", [
    ...listening(
      "Listen. Leo meets Kenji at a party. They talk about travel.",
      "**Leo:** So, Kenji, you're from Japan. Have you ever been to Kazakhstan before?\n\n**Kenji:** No, this is my first time! I arrived two weeks ago. I love it here.\n\n**Leo:** Great! Have you been to the mountains yet?\n\n**Kenji:** Yes, I have! I went to Big Almaty Lake last Saturday. The water was so blue! 💙\n\n**Leo:** Have you tried beshbarmak?\n\n**Kenji:** Yes — my host family made it on my first night. It was delicious. But I haven't tried kumys yet. What is it exactly?\n\n**Leo:** It's horse milk. You'll love it… or hate it! 😄 What about you — have you traveled a lot?\n\n**Kenji:** Quite a lot. I've been to twelve countries. My favorite was Iceland — I went there in 2022 and saw a volcano! 🌋\n\n**Leo:** A real volcano? Wow! I've never been to Europe. I've only been to Turkey and Uzbekistan.\n\n**Kenji:** Uzbekistan is on my bucket list! When did you go?\n\n**Leo:** Last spring. Samarkand is beautiful. Let's go together one day!\n\n**Kenji:** Deal! 🤝",
    ),
    quiz("Listen and choose.", [
      { q: "When did Kenji arrive in Kazakhstan?", options: ["*two weeks ago", "two months ago", "yesterday"] },
      { q: "Where did Kenji go last Saturday?", options: ["*to Big Almaty Lake", "to Samarkand", "to Astana"] },
      { q: "What hasn't Kenji tried yet?", options: ["*kumys", "beshbarmak", "pho"] },
      { q: "How many countries has Kenji been to?", options: ["*twelve", "two", "twenty"] },
      { q: "What did Kenji see in Iceland?", options: ["*a volcano", "the northern lights", "a whale"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["This is Kenji's first time in Kazakhstan.", true],
      ["Kenji's host family made beshbarmak for him.", true],
      ["Leo has been to many countries in Europe.", false],
      ["Leo went to Uzbekistan last spring.", true],
      ["Kenji has been to Uzbekistan.", false],
    ]),
  ]),

  section("Let's talk: My bucket list", [
    text(
      "Make your bucket list 📝",
      "Write 5 things you want to do in your life — places, adventures, experiences.\n\nThen ask your teacher: *Have you ever…?* If the answer is “Yes”, ask 3 more questions in the Past Simple: *When did you…? Where…? What was it like?*\n\nYour teacher asks you about your list: *Why is it on your list? When are you going to do it?*",
    ),
    text(
      "Talk to your teacher.",
      "- What's the best trip you've ever had? Where, when, who with? ✈️\n- Have you ever been somewhere and felt disappointed? Why? 😕\n- What's the most interesting place in your country for a foreign tourist? Have you been there? 🇰🇿\n- What souvenirs do you buy? Have you ever bought something you never used? 😄",
    ),
    tip("*If you have time:* “Travel liar” 🤥 — the student tells about 3 trips; one never happened. You ask *When did you go? Where did you stay? What did you eat?* and find the invented one."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "I've ___ to Rome. I went there in 2020.", options: ["*been", "gone", "went"] },
      { q: "When ___ you go to Turkey?", options: ["*did", "have", "were"] },
      { q: "She's ___ to Paris — she's there now.", options: ["*gone", "been", "went"] },
      { q: "tired after a long flight =", options: ["*jet lag", "a souvenir", "a visa"] },
    ]),
    box("Word of the day: workation", "**a workation** 💻🏖️ = work + vacation: you work remotely from a nice place.\n\n*She's on a workation in Bali — she works in the morning and surfs in the afternoon!*"),
  ]),

  homework(
    [
      gaps(
        "Complete.",
        "1. A list of things you want to do in your life: a bucket [list] 📝\n2. Visit famous places: go [sightseeing] 📸\n3. A document to enter a country: a [visa] 🛂\n4. A thing you buy to remember a place: a [souvenir] 🧲\n5. Tired after a long flight: jet [lag] 😴\n6. A holiday on a big ship: a [cruise] 🛳️",
      ),
      match("Match the questions and answers.", [
        ["Have you ever been to Japan?", "No, I haven't."],
        ["When did you go to Turkey?", "Last summer."],
        ["Has she ever flown in a balloon?", "Yes, she has."],
        ["Who did you go with?", "With my cousins."],
        ["What did you buy there?", "A magnet."],
        ["Where's Leo?", "He's gone to the shop."],
      ]),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      video("Watch a funny story: the Present Perfect vs the Past Simple (Tom's story).", "q1LKzp2ozVM"),
      choose(
        "Choose.",
        "1. I [*'ve never eaten/never ate] sushi in my life.\n2. We [*went/'ve been] to the cinema yesterday.\n3. [*Have you ever met/Did you ever meet] a famous person?\n4. She [*bought/'s bought] this dress two weeks ago.\n5. When [*did they arrive/have they arrived]?\n6. I [*'ve been/went] to Astana five times.",
      ),
      gaps(
        "Complete with the Present Perfect or the Past Simple.",
        "1. I [have visited/'ve visited] Paris twice. (visit)\n2. We [visited] Paris in 2019. (visit)\n3. [Have you ever ridden] a horse? (you / ever / ride)\n4. She [rode] a horse last weekend. (ride)\n5. They [have never seen/'ve never seen] the sea. (never / see)\n6. He [saw] the sea for the first time last year. (see)",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      write("Write your bucket list: 3 things you've already done (with when and where) and 5 things you want to do. (70+ words)", 70, {
        read: "*Example:* Things I've done: I've been to Georgia — I went there with my family in 2022 and I loved the food. I've slept in a tent in the mountains. I've seen a real concert of my favorite band! 🎸 My bucket list: I want to see the northern lights, fly in a hot-air balloon, visit Japan, learn to surf and run a half marathon. 🏃",
      }),
      record("Record your answer: Tell your teacher about the best trip you've ever had. Where did you go? When? What did you do? (1–2 minutes)", 120),
    ],
    "Homework: Writing and speaking",
  ),
]);
