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
  sort,
  text,
  tip,
  trueFalse,
  write,
} from "../../kit";

// 10.4 Revision 9–10 — skills tasks with scores + the project "Stories from my city".
export default lesson("a1-10.4", "Revision 9–10", () => [
  section("Warm-up: Odd one out", [
    box(
      "Today you will…",
      "- review modules 9 and 10: *directions, next to / opposite, transport, Present Continuous, clothes, weather*\n- check your vocabulary, grammar, reading and listening — get points! ⭐\n- start your project: **Stories from my city** 📱",
    ),
    quiz("Odd one out! Which word is different? 🤔", [
      { q: "bus · tram · metro · scarf", options: ["*scarf", "bus", "tram"] },
      { q: "sunny · rainy · nervous · snowy", options: ["*nervous", "sunny", "rainy"] },
      { q: "museum · pharmacy · hoodie · bank", options: ["*hoodie", "museum", "bank"] },
      { q: "turn left · go straight · cross · smile", options: ["*smile", "turn left", "cross"] },
      { q: "happy · tired · excited · foggy", options: ["*foggy", "happy", "tired"] },
    ]),
    tip("Like in other revision lessons, tasks give points. Go through the mistakes together after each section."),
  ]),

  section("Vocabulary", [
    sort("Sort the words.", {
      "🏙️ City": ["museum", "pharmacy", "bus stop", "cinema"],
      "👕 Clothes": ["hoodie", "boots", "scarf", "jeans"],
      "🌦️ Weather": ["foggy", "windy", "sunny", "snowy"],
    }),
    matchPictures("Match the photos.", [
      ["photos/tr-tram.jpg", "a tram"],
      ["photos/city-pharmacy.jpg", "a pharmacy"],
      ["photos/w-rain.jpg", "It's raining."],
      ["photos/now-musician.jpg", "He's playing the guitar."],
      ["photos/fit-harajuku.jpg", "She's wearing an orange jacket."],
    ]),
  ]),

  section("Grammar", [
    picture("The town map", ["maps/town.png"]),
    choose(
      "Look at the map. Choose.",
      "1. The café is [*next to/opposite] the supermarket.\n2. The bank is [*opposite/between] the café.\n3. [*Go/Goes] straight and cross Green Street. The museum is on your [*left/right].",
    ),
    choose(
      "Present Continuous: choose.",
      "1. Look! It [*'s snowing/snows]!\n2. They [*'re playing/is playing] football.\n3. [*Is/Are] she wearing a hat?\n4. I [*'m not/don't] sleeping — I'm reading!",
    ),
    choose(
      "usually or now? Choose.",
      "1. I usually [*go/'m going] to school by bus.\n2. Today I [walk/*'m walking] because it's sunny.\n3. She [*wears/is wearing] glasses every day.",
    ),
    drag(
      "Complete.",
      "Hi from the park! It's [sunny] today. I'm [sitting] on a bench. My brother [is] riding his bike. [Don't] call me now — I'm [taking] photos! 📸",
      ["sitting on", "are", "Not"],
    ),
  ]),

  section("Reading", [
    trueFalse(
      "Read Arman's stories. True or false?",
      [
        ["Arman is in Almaty.", true],
        ["It's snowing.", false],
        ["He's going to the mountains by bus.", true],
        ["His friends are wearing shorts.", false],
        ["They're drinking hot tea at the top.", true],
      ],
      {
        read: [
          "## 📱 arman.travels — Stories",
          "**Story 1 · 9:00** ☀️ *Good morning from Almaty! It's sunny and cold — 3 degrees. I'm waiting for the bus to the mountains. 🏔️*",
          "**Story 2 · 9:40** 🚌 *We're on bus 12. It's full! A man next to me is reading a newspaper, and two kids are singing. 😄*",
          "**Story 3 · 11:00** 🥾 *We're walking up the mountain. My friends are wearing big jackets and hats. I'm not cold — I'm excited!*",
          "**Story 4 · 12:30** ☕ *At the top! We're drinking hot tea and taking a lot of photos. The view is amazing! 😍*",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What's the temperature?", options: ["*3 degrees", "13 degrees", "−3 degrees"] },
      { q: "On the bus, two kids are…", options: ["*singing", "sleeping", "reading"] },
      { q: "How is Arman feeling on the mountain?", options: ["*excited", "tired", "bored"] },
    ]),
  ]),

  section("Listening", [
    tip("Read the script once at normal speed, then once more slowly."),
    ...listening(
      "Listen. Dana calls Leo.",
      "**Dana:** Hi, Leo! Where are you? We're waiting for you at the cinema! 🎬\n\n**Leo:** Sorry, Dana! I'm on the metro. There's a problem with the trains — we're not moving. 😩\n\n**Dana:** Oh no! The film starts in 20 minutes!\n\n**Leo:** I know! OK, the train is moving now. I'm getting off at Park Station.\n\n**Dana:** Great! From Park Station, go straight, cross the street and turn left. The cinema is opposite the bank.\n\n**Leo:** Opposite the bank. OK! What are you wearing? I can't see well in the dark!\n\n**Dana:** I'm wearing a red jacket and a white hat. See you soon!",
    ),
    quiz("Listen and choose.", [
      { q: "Where is Leo?", options: ["*on the metro", "at the cinema", "on a bus"] },
      { q: "The film starts in…", options: ["*20 minutes", "10 minutes", "an hour"] },
      { q: "The cinema is…", options: ["*opposite the bank", "next to the bank", "near the park"] },
      { q: "Dana is wearing…", options: ["*a red jacket and a white hat", "a black coat", "a blue hoodie"] },
    ]),
  ]),

  section("Speaking and writing", [
    text(
      "Speaking: tell your teacher 🗣️",
      "Talk for 1–2 minutes:\n\n- your city: places, transport, how to get from your home to your favorite place\n- right now: *What are you wearing? What's the weather like? How are you feeling?*\n- usually vs today: *I usually… but today I'm…*\n\nYour teacher asks 3 questions!",
    ),
    match("Match the questions and the answers.", [
      ["How do I get to the museum?", "Go straight and turn left."],
      ["What are you doing?", "I'm waiting for the bus."],
      ["What's the weather like?", "It's cloudy and cool."],
      ["How are you feeling?", "A bit tired, but OK!"],
    ]),
    order("Make sentences.", ["The pharmacy is opposite the park.", "I'm wearing a warm coat today.", "Take the metro and get off at the second stop."]),
  ]),

  section("Project: Stories from my city", [
    box(
      "Your project 🚀",
      "Make 4–6 “stories” about a day in your city — photos with captions, or a short video:\n\n1. **Where are you?** *I'm at… / I'm on the metro…*\n2. **What's happening?** *People are… My friend is…*\n3. **Weather and clothes:** *It's sunny. I'm wearing…*\n4. **How to get there:** *Take bus 5… It's next to…*\n5. **How are you feeling?** *I'm excited / relaxed…*\n\nUse Present Continuous! 📱",
    ),
    text("Plan your project. Talk to your teacher.", "- Which places in your city do you want to show? 🏙️\n- Photos or video? 📸🎥\n- What's the best time of day for your stories?"),
  ]),

  homework(
    [
      write("Project: Stories from my city — write 4–6 story captions. (70+ words)", 70, {
        read: "*Example:* 📸 1. Good morning from Shymkent! It's sunny and warm. I'm waiting for the bus to the center. 📸 2. I'm in the Central Park now. Kids are playing and an old man is feeding birds. 📸 3. I'm wearing my new sneakers — nice fit! 😎 📸 4. Now I'm in a café opposite the museum. Take bus 12 and get off at Museum Street. 📸 5. I'm drinking hot chocolate. I'm tired but happy!",
      }),
      record("Project video: “Stories from my city” — show or describe your city right now (1–2 minutes). 🎥", 120),
    ],
    "Homework: Project",
  ),
  homework(
    [
      gaps("Review: complete.", "1. [Turn] left at the bank.\n2. She [is] wearing a hat.\n3. It's [raining] — take an umbrella!\n4. I go to school [by] metro."),
      trueFalse("Correct or not?", [
        ["Look! It snows!", false],
        ["The café is opposite the bank.", true],
        ["Are you wearing sneakers?", true],
        ["I'm usually wearing jeans.", false],
      ]),
      choose("Choose.", "1. [*Don't/Not] cross here!\n2. How do I get [*to/at] the station?"),
    ],
    "Homework: Review",
  ),
]);
