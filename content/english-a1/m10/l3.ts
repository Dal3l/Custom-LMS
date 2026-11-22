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
  quiz,
  record,
  section,
  sort,
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 10.3 How are you feeling? — skills lesson: weather, feelings, It's raining; light mental-health tips; review of module 10. Main format: reading + video.
export default lesson("a1-10.3", "How are you feeling?", () => [
  section("Warm-up: Weather around the world", [
    box("Today you will…", "- talk about the weather: *It's sunny. It's raining.*\n- say how you feel: *I'm tired. I'm excited.*\n- give tips for a bad day 💛"),
    quiz("What's the weather usually like? Guess! 🌍", [
      { q: "☀️🔥 Dubai in July", options: ["*very hot", "snowy", "cold and windy"] },
      { q: "❄️ Astana in January", options: ["*very cold — often −20°", "warm and sunny", "hot and rainy"] },
      { q: "🌧️ London in November", options: ["*cloudy and often rainy", "very hot", "snowy every day"] },
      { q: "⛈️ Mumbai in July (the monsoon)", options: ["*very rainy", "dry and cold", "snowy"] },
    ]),
    text("Talk to your teacher.", "- What's the weather like today where you are? 🌤️\n- What's your favorite weather? Why?"),
  ]),

  section("Vocabulary: Weather", [
    words("Weather", [
      ["sunny — cloudy", "☀️ — ☁️", "It's sunny today."],
      ["It's raining. — rainy", "🌧️", "It's raining right now!"],
      ["It's snowing. — snowy", "❄️"],
      ["windy — foggy", "💨 — 🌫️"],
      ["hot — warm — cool — cold", "🥵 — 🙂 — 🍃 — 🥶"],
      ["a storm", "⛈️"],
      ["degrees", "🌡️ 25° = twenty-five degrees"],
      ["What's the weather like?", "❓🌦️", "What's the weather like in Almaty? — It's cold and snowy."],
    ]),
    matchPictures("Match the photos and the weather.", [
      ["photos/w-rain.jpg", "It's raining."],
      ["photos/w-snow.jpg", "It's snowy."],
      ["photos/w-sun.jpg", "It's sunny and warm."],
      ["photos/w-fog.jpg", "It's foggy."],
    ]),
    choose(
      "Choose.",
      "1. Take an umbrella! It's [*raining/rains]. ☔\n2. It's [*sunny/sun] today — let's go to the park!\n3. −20°? It's very [*cold/hot]! 🥶\n4. I can't see the street. It's very [*foggy/windy]. 🌫️",
    ),
  ]),

  section("Vocabulary: Feelings", [
    words("Feelings", [
      ["happy — sad", "😊 — 😢"],
      ["tired — sleepy", "🥱 — 😴"],
      ["bored", "😑 nothing interesting"],
      ["excited", "🤩 very happy about something soon", "I'm excited about the concert!"],
      ["nervous — stressed", "😬 — 😫", "I'm nervous before exams."],
      ["relaxed — calm", "😌"],
      ["angry", "😠"],
      ["How are you feeling?", "❓💭", "How are you feeling today? — A bit tired."],
      ["a bit — very", "🤏 — 💯", "I'm a bit tired. I'm very happy!"],
    ]),
    match("How do they feel? Match.", [
      ["I have an exam tomorrow! 😬", "nervous"],
      ["I'm going to a concert tonight! 🎉", "excited"],
      ["I'm in bed at 2 a.m. and I'm working… 🥱", "tired"],
      ["Nothing to do, nothing to watch… 😑", "bored"],
      ["I'm on the beach with a book. 🏖️", "relaxed"],
    ]),
    sort("Good feelings or bad feelings? Sort.", {
      "😊 Good": ["happy", "excited", "relaxed", "calm"],
      "😟 Not good": ["sad", "stressed", "angry", "bored"],
    }),
  ]),

  section("Reading: Weather and mood", [
    tip("Keep the talk light — the student doesn't have to share personal problems. Focus on the tips."),
    quiz(
      "Read the article. Choose.",
      [
        { q: "When do many people feel tired and sad?", options: ["*in winter, when it's dark", "in summer", "on sunny days"] },
        { q: "Tip 1: Go outside…", options: ["*every day, also when it's cloudy", "only when it's sunny", "at night"] },
        { q: "Tip 3 says: talk to…", options: ["*a friend or family", "your phone", "nobody"] },
      ],
      {
        read: [
          "## 🌦️ Weather and mood: tips for grey days",
          "Is it cold, dark and rainy outside? Are you feeling tired or a bit sad? You're not alone! In winter, many people feel tired and sad. The days are short and there isn't much sun. ☁️",
          "**Here are 4 easy tips:**",
          "1. 🚶 **Go outside every day** — also when it's cloudy. Daylight is good for your mood.",
          "2. 🏃 **Move!** Dance, walk, play sport. 20 minutes is great.",
          "3. 💬 **Talk to a friend or family.** Say how you're feeling — it helps!",
          "4. 😴 **Sleep 8 hours** and don't scroll in bed. 📵",
          "And remember: if you feel sad for a long time, talk to an adult you trust or a doctor. 💛",
        ].join("\n\n"),
      },
    ),
    trueFalse("Read again. True or false?", [
      ["In winter, the days are long.", false],
      ["20 minutes of sport is great.", true],
      ["The article says: scroll your phone in bed.", false],
    ]),
    text("Talk to your teacher.", "- Does the weather change your mood? How? 🌧️☀️\n- What do you do on a grey day? 🎮📚☕\n- What's your best tip for a bad day?"),
  ]),

  section("Video: What's the weather like?", [
    video("Watch the A1 video about weather and seasons.", "x0Ty-Nd0l5Y"),
    text("Talk to your teacher.", "- What seasons are there in your country? 🍂❄️🌸☀️\n- What clothes do you wear in each season?"),
  ]),

  section("Review: Module 10", [
    choose(
      "Choose.",
      "1. Look! It [*'s snowing/snows]! ❄️\n2. I [*'m wearing/wear] a warm coat today.\n3. I usually [*feel/am feeling] happy on Friday.\n4. [*Are/Do] you feeling OK?",
    ),
    drag(
      "Complete the message.",
      "Hi from London! 🇬🇧 It's [raining] and it's [cold]. I'm [wearing] my big coat. My friends [are] drinking tea. I'm a bit [tired], but I'm happy! 😊",
      ["rains", "hot", "is"],
    ),
    gaps("Write the -ing form.", "1. rain → [raining]\n2. snow → [snowing]\n3. feel → [feeling]\n4. sit → [sitting]"),
  ]),

  section("Let's talk: Weather and me", [
    text(
      "Be a weather reporter! 🎤🌦️",
      "Present the weather in your city today, like on TV:\n\n*Good morning! It's Monday. In Almaty, it's sunny and cool — 12 degrees. People are wearing jackets. Don't forget your sunglasses!* 😎",
    ),
    text("Talk to your teacher.", "- How are you feeling today? Why? (only if you want to share 🙂)\n- What makes you happy? 😊\n- What do you do when you're stressed? 😫➡️😌"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "☔ It's ___ .", options: ["*raining", "snowing", "sunny"] },
      { q: "Very happy about something soon:", options: ["*excited", "bored", "tired"] },
      { q: "−15° =", options: ["*minus fifteen degrees", "fifteen degrees", "fifty degrees"] },
    ]),
    box("Word of the day: vibe check", "**vibe check** ✨ = a quick question: *How are you feeling?*\n\n*Vibe check! How's everyone today? 😊*"),
  ]),

  homework(
    [
      gaps("Complete.", "1. ☀️ It's [sunny].\n2. ❄️ It's [snowing].\n3. 🥱 I'm [tired].\n4. 🤩 I'm [excited] about my birthday!"),
      ...listening(
        "Listen to the weather forecast for the weekend.",
        "**Reporter:** Good morning! Here's the weather for the weekend. On Saturday, it's sunny and warm in the south — 24 degrees. ☀️ Great for the beach! In the north, it's cloudy and cool — 15 degrees. On Sunday, it's raining everywhere 🌧️, and it's windy in the mountains. Take an umbrella! Have a nice weekend!",
      ),
      quiz("Listen and choose.", [
        { q: "Saturday in the south:", options: ["*sunny and warm", "rainy", "snowy"] },
        { q: "How many degrees in the north?", options: ["*15", "24", "5"] },
        { q: "On Sunday, it's…", options: ["*raining everywhere", "sunny everywhere", "foggy"] },
      ]),
    ],
    "Homework: Vocabulary and listening",
  ),
  homework(
    [
      video("Watch: 20 feelings and emotions in English.", "jgUyLoPH8_U"),
      write("Write 5 feelings from the video and when you feel them: *I'm nervous before exams.*", 25),
    ],
    "Homework: Video",
  ),
  homework(
    [
      write("Write a message to a friend: What's the weather like? What are you doing? How are you feeling? (35+ words)", 35, {
        read: "*Example:* Hi Dana! 👋 It's snowing in Astana today — it's −18°! 🥶 I'm sitting at home with hot chocolate. I'm wearing my big sweater. I'm a bit bored, but I'm relaxed. What's the weather like in Almaty? What are you doing?",
      }),
      record("Record a weather report for your city today, like a TV reporter. 🎤", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
