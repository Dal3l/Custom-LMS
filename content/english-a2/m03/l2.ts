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

// 3.2 The best in the world — G: superlatives (the biggest, the most…), as … as. V: geography and nature. Say it right: "the" /ðə/ and /ði/. S: a mini quiz show. Main format: a guessing quiz + reading (world records) + listening (a quiz show).
export default lesson("a2-3.2", "The best in the world", () => [
  section("Warm-up: Guess the record!", [
    box("Today you will…", "- learn amazing world records 🌍\n- say *the highest, the biggest, the most beautiful…*\n- compare with *as … as*\n- make your own quiz show 🎤"),
    quiz("Guess! Choose the answer you think is right. 🤔", [
      { q: "The highest mountain in the world is…", options: ["*Everest", "Elbrus", "Kilimanjaro"] },
      { q: "The tallest building in the world is in…", options: ["*Dubai", "New York", "Shanghai"] },
      { q: "The deepest lake in the world is…", options: ["*Baikal", "the Caspian Sea", "Lake Victoria"] },
      { q: "The biggest lake in the world is…", options: ["*the Caspian Sea", "Baikal", "Lake Superior"] },
    ]),
    tip("Let the student guess first, then press “Check”. Ask: *Were you surprised? Which one did you know?* The reading later gives more facts about each record."),
    text("Talk to your teacher.", "- Which of these places do you want to see? 🗺️\n- What's the most beautiful place in your country? 🏞️"),
  ]),

  section("Vocabulary: Our planet", [
    words("Geography and nature", [
      ["a mountain — a hill", "🏔️ — ⛰️ (smaller)"],
      ["a desert", "🏜️ hot, dry, a lot of sand"],
      ["a lake", "🏞️ water with land all around it"],
      ["a river", "🌊 water that moves to the sea"],
      ["an ocean", "🌊🌊 the Pacific, the Atlantic…"],
      ["a rainforest", "🌳🌧️ a hot, wet forest — the Amazon"],
      ["an island", "🏝️ land with water all around it"],
      ["a waterfall", "💦 water falling down"],
      ["a skyscraper", "🏙️ a very tall building"],
      ["high — deep", "⬆️ — ⬇️", "Baikal is very deep."],
      ["long — wide", "↔️ from end to end — from side to side"],
      ["dry — wet", "☀️ no water — 🌧️ a lot of water"],
    ]),
    matchPictures("Match the photos and the places.", [
      ["photos/world-everest.jpg", "a mountain — Everest"],
      ["photos/world-burj.jpg", "a skyscraper — the Burj Khalifa"],
      ["photos/world-sahara.jpg", "a desert — the Sahara"],
      ["photos/world-baikal.jpg", "a lake — Baikal"],
      ["photos/world-amazon.jpg", "a river — the Amazon (from space)"],
    ]),
    match("Match the words and the meanings.", [
      ["an island", "land with water all around it"],
      ["a desert", "a hot, dry place with a lot of sand"],
      ["a waterfall", "water falling down"],
      ["a rainforest", "a hot, wet forest"],
      ["a skyscraper", "a very tall building"],
      ["an ocean", "a very big sea, like the Pacific"],
    ]),
    gaps(
      "Complete.",
      "1. Everest is a very high [mountain]. 🏔️\n2. The Sahara is a hot, dry [desert]. 🏜️\n3. Baikal is a very [deep] lake. ⬇️\n4. The Amazon is a [river] in South America. 🌊\n5. Bali is an [island] in Indonesia. 🏝️\n6. Niagara Falls is a famous [waterfall]. 💦\n7. The Pacific is the biggest [ocean]. 🌊\n8. It never rains here. It's very [dry]. ☀️",
    ),
  ]),

  section("Reading: Planet of records", [
    tip("Read one record at a time. Ask: *Is it bigger / higher / older than something in your country?* Find the superlatives (*the highest, the deepest…*) and underline them."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Everest is 8,849 meters high.", true],
        ["The Burj Khalifa is in Abu Dhabi.", false],
        ["The Sahara is the biggest hot desert in the world.", true],
        ["Baikal is the biggest lake in the world.", false],
        ["The Amazon carries more water than any other river.", true],
        ["Kazakhstan is on the coast of the Caspian Sea.", true],
      ],
      {
        read: [
          "## 🌍 Planet of records",
          "**🏔️ The highest mountain.** Mount Everest, between Nepal and China, is 8,849 meters high. It's the highest place on Earth — planes fly only a little higher! The first people on the top were Edmund Hillary and Tenzing Norgay in 1953.",
          "**🏙️ The tallest building.** The Burj Khalifa in Dubai is 828 meters tall. It has more than 160 floors. On a clear day, you can see it from 95 kilometers away!",
          "**🏜️ The biggest hot desert.** The Sahara in Africa is almost as big as the USA. In summer it's one of the hottest places on the planet, but at night it can be very cold.",
          "**🧊 The deepest lake.** Lake Baikal in Russia is 1,642 meters deep. It's also the oldest lake in the world — about 25 million years old! In winter the ice is so thick that cars can drive on it.",
          "**🌊 The biggest lake.** The Caspian Sea is called a sea, but it's really a lake — the biggest in the world. Kazakhstan, Russia, Azerbaijan, Iran and Turkmenistan are on its coast.",
          "**🌳 The biggest river.** The Amazon carries more water than any other river — more than the next seven biggest rivers together! Is it longer than the Nile? Scientists still argue about it. 🤔",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Who were the first people on the top of Everest?", options: ["*Edmund Hillary and Tenzing Norgay", "Neil Armstrong and Buzz Aldrin", "the Wright brothers"] },
      { q: "How old is Lake Baikal?", options: ["*about 25 million years", "about 25,000 years", "about 2,500 years"] },
      { q: "The Sahara is almost as big as…", options: ["*the USA", "Kazakhstan", "Europe and Asia together"] },
      { q: "What is still a question for scientists?", options: ["*Is the Amazon longer than the Nile?", "How tall is the Burj Khalifa?", "Is the Caspian Sea a lake?"] },
    ]),
  ]),

  section("Grammar: the biggest, the most beautiful", [
    quiz("Notice the rule 🔍 Look: “the highest mountain… the deepest lake… the biggest river”. Which is true?", [
      { q: "We use these forms to say…", options: ["*number one in a group", "two things are the same", "something is a little bigger"] },
      { q: "Before -est we always put…", options: ["*the", "a", "than"] },
      { q: "Long adjectives: beautiful → …", options: ["*the most beautiful", "the beautifulest", "the more beautiful"] },
    ]),
    table("superlatives"),
    choose(
      "Choose.",
      "1. Everest is [*the highest/the higher] mountain in the world.\n2. This is [*the most expensive/the expensivest] hotel in the city.\n3. Summer is [*the best/the goodest] time to visit.\n4. It was [*the worst/the baddest] day of my life! 😩\n5. Baikal is the deepest lake [*in/of] the world.\n6. Who is [*the funniest/the most funny] person in your family?\n7. Monday is the [*busiest/most busy] day of the week.\n8. That's the most beautiful place I've [*ever/never] seen.",
    ),
    gaps(
      "Write the superlative.",
      "1. long → [the longest]\n2. big → [the biggest]\n3. happy → [the happiest]\n4. good → [the best]\n5. bad → [the worst]\n6. famous → [the most famous]\n7. hot → [the hottest]\n8. interesting → [the most interesting]",
    ),
    drag(
      "Complete the travel post.",
      "Kazakhstan is [the] biggest country in Central Asia. [The] most beautiful place for me is Kolsai Lakes — the water is [the] clearest I've ever seen! 💙 Almaty is [the] biggest city. Summer is the [best] time to visit, but winter is the [cheapest]. The [most] amazing thing? The people — they are the [friendliest] in the world! 😊",
      ["a", "good", "more", "friendlier"],
    ),
  ]),

  section("Grammar: as … as", [
    table("as-as"),
    video("Watch: “as … as” in one minute (BBC Learning English).", "5qI6meJ2kpc"),
    choose(
      "Choose.",
      "1. My brother is [*as tall as/as taller as] my dad now.\n2. Astana isn't [*as warm as/so warm than] Almaty.\n3. This phone is as good [*as/than] the expensive one.\n4. The test wasn't as [*difficult/more difficult] as I thought.\n5. I'm not as [*fast/faster] as my sister.\n6. Is Baikal as big [*as/like] the Caspian Sea? — No, it isn't.",
    ),
    order("Make sentences.", [
      "My phone is as fast as yours.",
      "Astana is not as warm as Almaty.",
      "This book isn't as good as the film.",
      "Is your city as big as Almaty?",
      "I'm not as tall as my brother.",
    ]),
  ]),

  section("Say it right: the", [
    box(
      "🗣️ Say it right",
      "**the** has two sounds:\n\n**/ðə/** before a consonant sound: *the biggest, the best, the most*\n\n**/ði/** before a vowel sound: *the oldest, the easiest, the Amazon*",
    ),
    sort("/ðə/ or /ði/? Sort. 🗣️", {
      "/ðə/ the + consonant": ["the biggest", "the best", "the most famous", "the deepest"],
      "/ði/ the + vowel": ["the oldest", "the easiest", "the Amazon", "the ocean"],
    }),
    tip("Say the pairs: *the best — the oldest, the most — the easiest*. The student repeats. Then the student reads the record titles from the article aloud."),
  ]),

  section("Listening: Quiz show", [
    ...listening(
      "Listen. Dana and Arman are on a quiz show.",
      "**Host:** Welcome to “World Champions”! Our players today are Dana and Arman. Question one: what's the biggest ocean in the world? Dana!\n\n**Dana:** The Pacific!\n\n**Host:** Correct! One point to Dana. Question two: what's the coldest place on Earth? Arman!\n\n**Arman:** Antarctica.\n\n**Host:** Yes! One point. Question three: which is longer — the Volga or the Danube?\n\n**Dana:** Hmm… the Danube?\n\n**Host:** I'm sorry, Dana, it's the Volga. It's the longest river in Europe. Arman?\n\n**Arman:** I didn't know that! 😅\n\n**Host:** Last question, and it's the most difficult one. What's the smallest country in the world?\n\n**Arman:** Monaco!\n\n**Dana:** No — the Vatican!\n\n**Host:** Dana is right! The Vatican City is the smallest country. So, the winner is… Dana, with two points! 🏆\n\n**Arman:** Well done, Dana. You're as clever as your mom — she's a geography teacher! 😄",
    ),
    quiz("Listen and choose.", [
      { q: "What's the biggest ocean?", options: ["*the Pacific", "the Atlantic", "the Indian Ocean"] },
      { q: "What's the longest river in Europe?", options: ["*the Volga", "the Danube", "the Thames"] },
      { q: "What's the smallest country in the world?", options: ["*the Vatican City", "Monaco", "Malta"] },
      { q: "What's Dana's mom's job?", options: ["*a geography teacher", "a quiz show host", "a scientist"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Arman answered the question about the coldest place.", true],
      ["Dana knew the answer about the Volga.", false],
      ["Arman thought Monaco was the smallest country.", true],
      ["The winner had three points.", false],
      ["The last question was the most difficult.", true],
    ]),
  ]),

  section("Video: The tallest and the shortest", [
    video("Watch: the world's tallest woman meets the world's shortest woman (Guinness World Records).", "SnustNWncu8"),
    text("Talk to your teacher.", "- Describe the two women. Use *taller, shorter, the tallest, the shortest*.\n- What world record do you want to have? 🏆 *the fastest… the longest… the most…*"),
  ]),

  section("Let's talk: Quiz master", [
    text(
      "Make a quiz! 🎤",
      "Write 4 questions for your teacher with superlatives — about the world, your country or your city.\n\n*What's the biggest city in Kazakhstan? What's the most popular food in your family? Who's the oldest person you know?*\n\nAsk your teacher. Who gets more points? 🏆",
    ),
    text(
      "Talk to your teacher.",
      "- What's the best place you've ever visited? Why? 🌍\n- What's the most beautiful place in your city?\n- Is your city as big as Almaty? As old? As green? 🌳\n- What's the most useful thing in your bag right now? 🎒",
    ),
    tip("*If you have time:* “The most… in my life”: the student finishes 4 sentences — *The best day… The scariest moment… The most delicious food… The worst trip…* — and you ask one more question about each."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "Everest is ___ mountain in the world.", options: ["*the highest", "the higher", "highest"] },
      { q: "bad → the …", options: ["*worst", "baddest", "most bad"] },
      { q: "My phone is as fast ___ yours.", options: ["*as", "than", "like"] },
      { q: "a very tall building =", options: ["*a skyscraper", "a waterfall", "an island"] },
    ]),
    box("Word of the day: GOAT", "**the GOAT** 🐐 = the **G**reatest **O**f **A**ll **T**ime (slang).\n\n*Messi or Ronaldo — who's the GOAT?* ⚽"),
  ]),

  homework(
    [
      gaps(
        "Complete.",
        "1. 🏔️ Everest is the highest [mountain].\n2. 🏜️ The Sahara is a [desert].\n3. 🏝️ Land with water all around it: an [island]\n4. 💦 Water falling down: a [waterfall]\n5. 🏙️ A very tall building: a [skyscraper]\n6. 🌳🌧️ The Amazon [rainforest] is in South America.",
      ),
      matchPictures("Match the photos and the records.", [
        ["photos/world-everest.jpg", "the highest mountain"],
        ["photos/world-burj.jpg", "the tallest building"],
        ["photos/world-sahara.jpg", "the biggest hot desert"],
        ["photos/world-baikal.jpg", "the deepest lake"],
        ["photos/world-amazon.jpg", "the river with the most water"],
      ]),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      video("Watch the grammar video: superlative adjectives.", "K1Rs793CjqE"),
      choose(
        "Choose.",
        "1. It's [*the coldest/the colder] day of the year.\n2. She's [*the most famous/the famousest] singer in Korea.\n3. This is [*the best/the better] pizza in town!\n4. My phone isn't [*as new as/as newer as] yours.\n5. He's the [*youngest/most young] in our class.\n6. Who is the [*most/more] popular blogger in your country?",
      ),
      gaps(
        "Complete with the superlative.",
        "1. Russia is [the biggest] country in the world. (big)\n2. Messi is [the best] player in the team. (good)\n3. This is [the most expensive] restaurant in the city. (expensive)\n4. January is [the coldest] month. (cold)\n5. That was [the worst] film of the year. (bad)\n6. She's [the friendliest] person I know. (friendly)",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      trueFalse(
        "Read about Kazakhstan's records. True or false?",
        [
          ["Kazakhstan is the biggest country in the world without a sea coast to the ocean.", true],
          ["The Caspian Sea is the smallest lake in the world.", false],
          ["Baikonur is the oldest spaceport in the world.", true],
          ["Gagarin flew into space from Baikonur.", true],
          ["Almaty is the capital of Kazakhstan.", false],
        ],
        {
          read: "🇰🇿 **Kazakhstan: country of records.** Kazakhstan is the ninth biggest country in the world and the biggest country with no coast on the open ocean. In the west, it's on the coast of the Caspian Sea — the biggest lake on Earth. 🌊 Baikonur, in the south, is the oldest spaceport in the world: Yuri Gagarin flew into space from here in 1961. 🚀 Almaty is the biggest city, but Astana is the capital.",
        },
      ),
    ],
    "Homework: Reading",
  ),
  homework(
    [
      write("Write about the records of your country or city: the biggest, the oldest, the most beautiful, the most popular… (50+ words)", 50, {
        read: "*Example:* Almaty is the biggest city in Kazakhstan. The most famous place is Medeu — it's one of the highest skating rinks in the world. The most popular food is beshbarmak. The most beautiful time of the year is spring, when the apple trees are in flower. 🍎 Almaty isn't as cold as Astana in winter!",
      }),
      record("Record your answer: What's the best place you've ever visited? Why is it the best? (1 minute)", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
