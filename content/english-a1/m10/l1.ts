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
  table,
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 10.1 What are you doing? — G: Present Continuous (positive). V: actions now. Main format: photos (describe what's happening) + listening (a live stream).
export default lesson("a1-10.1", "What are you doing?", () => [
  section("Warm-up: Stories and live streams", [
    box("Today you will…", "- say what's happening now: *She's dancing. They're playing.*\n- describe photos and stories 📸\n- talk like a live streamer 🔴"),
    text(
      "Talk to your teacher.",
      "- Do you post stories? What do you usually show? 📱\n- Do you watch live streams? Who? 🔴\n- What are your friends doing right now, do you think? 🤔\n- What's your teacher doing right now? 😄",
    ),
    tip("Right now / at the moment is the key idea of the lesson. Ask the student to look out of the window: *What can you see? What are people doing?*"),
  ]),

  section("Vocabulary: Actions", [
    words("Actions", [
      ["sit — stand", "🪑 — 🧍"],
      ["walk — run", "🚶 — 🏃"],
      ["talk — laugh — smile", "🗣️ — 😂 — 🙂"],
      ["sing — dance", "🎤 — 💃"],
      ["eat — drink", "🍕 — 🥤"],
      ["wait (for)", "⏳", "I'm waiting for the bus."],
      ["wear", "👕 have clothes on you", "She's wearing a red jacket."],
      ["hold", "🤲", "He's holding a guitar."],
      ["take a selfie", "🤳"],
      ["film — record", "🎥"],
      ["right now — at the moment", "▶️ = now"],
    ]),
    gaps("Write the -ing form.", "1. dance → [dancing]\n2. run → [running]\n3. sit → [sitting]\n4. take → [taking]\n5. play → [playing]\n6. smile → [smiling]"),
  ]),

  section("Grammar: Present Continuous", [
    table("pc-positive"),
    picture("What's happening? 👀", ["photos/now-musician.jpg", "photos/now-dancing.jpg", "photos/now-selfie.jpg", "photos/now-football.jpg"]),
    matchPictures("Match the photos and the sentences.", [
      ["photos/now-musician.jpg", "He's playing the guitar."],
      ["photos/now-dancing.jpg", "She's dancing to the music."],
      ["photos/now-selfie.jpg", "She's taking a selfie."],
      ["photos/now-football.jpg", "The boys are playing football."],
    ]),
    choose(
      "Choose.",
      "1. I [*'m/'s/'re] watching a stream right now.\n2. She [am/*is/are] wearing a red T-shirt.\n3. They [am/is/*are] dancing.\n4. Look! It's [*raining/rains]!\n5. We [*'re waiting/wait] for the bus at the moment.",
    ),
    drag(
      "Complete the story caption.",
      "📸 Hi from Paris! I ['m] sitting in a café. A man [is] playing the guitar. People [are] listening and smiling. My friend [is] taking photos. And I'm [drinking] hot chocolate! ☕",
      ["be", "drinks"],
    ),
  ]),

  section("Listening: Live!", [
    tip("Read the script with energy — like a real live streamer! The student can draw the scene while listening."),
    ...listening(
      "Listen. Mia is live on her channel from a festival.",
      "**Mia:** Hi, everyone! I'm live from the summer music festival! 🔴🎉\n\n**Mia:** OK, look around! A band is playing on the big stage. People are dancing and singing. It's so loud! 🎸\n\n**Mia:** On the left, a man is selling ice cream. 🍦 Some kids are waiting in line.\n\n**Mia:** And here's my friend Dana! She's taking photos with her old camera. Say hi, Dana! 👋\n\n**Mia:** Oh, I'm reading the chat now… Leo is asking: “Is it raining?” No, Leo, it isn't raining — it's sunny! ☀️\n\n**Mia:** OK, guys, the next band is coming on stage. I'm going to the front! Bye for now!",
    ),
    quiz("Listen and choose.", [
      { q: "Where is Mia?", options: ["*at a music festival", "at school", "at home"] },
      { q: "On the left, a man is…", options: ["*selling ice cream", "singing", "dancing"] },
      { q: "Dana is…", options: ["*taking photos", "eating ice cream", "playing in a band"] },
      { q: "The weather is…", options: ["*sunny", "rainy", "cold"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["People are dancing and singing.", true],
      ["Some kids are waiting in line.", true],
      ["Mia is reading a book.", false],
    ]),
  ]),

  section("Let's talk: Describe it!", [
    text(
      "Game: What am I doing? 🎭",
      "Mime an action (no words!). Your teacher guesses: *Are you swimming? — No! — Are you playing tennis? — Yes!*\n\nThen your teacher mimes and you guess. Try: *cooking, taking a selfie, playing the guitar, waiting for a bus, dancing…*",
    ),
    text(
      "Your story 📱",
      "Open a photo from your phone (or describe one). Tell your teacher what's happening in it:\n\n*In this photo I'm sitting on the beach. My friends are swimming. My dog is running…*",
    ),
    order("Make sentences.", ["I'm waiting for my friend.", "They're playing football in the park.", "She's wearing a big jacket."]),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "She ___ dancing.", options: ["*is", "are", "am"] },
      { q: "run → …", options: ["*running", "runing", "runeing"] },
      { q: "Look! They ___ football.", options: ["*'re playing", "play", "plays"] },
    ]),
    box("Word of the day: live", "**live** 🔴 (say: *LIVE* like *five*) = happening now, on the internet or TV.\n\n*I'm going live at 7! Join my stream!*"),
  ]),

  homework(
    [
      gaps("Complete with am, is or are.", "1. I [am] doing my homework.\n2. My mom [is] cooking dinner.\n3. My brothers [are] playing games.\n4. It [is] snowing! ❄️"),
      choose("Choose.", "1. Look! The cat [*is sleeping/sleeps] on my laptop!\n2. We [*'re watching/are watch] a film now.\n3. He's [*sitting/siting] next to me."),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      video("Watch the A1 lesson: Present Continuous.", "QILfPcah-CY"),
      write("Look around you right now. Write 4 sentences: What are people doing? *My sister is…*", 20),
    ],
    "Homework: Video",
  ),
  homework(
    [
      write("Write 3 “stories” (photo captions) from your day: What are you doing in the photo? Who's with you? (40+ words)", 40, {
        read: "*Example:* 📸 1. I'm sitting on the bus. I'm listening to music and looking out of the window. 📸 2. My friends and I are eating pizza in a café. Arman is laughing! 📸 3. It's evening. I'm lying on the sofa and my cat is sleeping on me. 🐱",
      }),
      record("Record a “live stream” (1 minute): Where are you? What's happening around you? 🔴", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
