import {
  box,
  choose,
  drag,
  gaps,
  homework,
  lesson,
  listening,
  match,
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

// 5.2 I managed to… — G: could / was able to / managed to (general ability vs one difficult success); couldn't; had to / didn't have to. V: phrasal verbs for challenges (come up with, figure out, carry on, give in, get over, end up). Say it right: managed /ˈmænɪdʒd/. S: tell about a challenge you managed to beat. Main format: a long listening (a podcast: Dana's marathon and Kenji's first big mountain, ~2 min) + storytelling. Video at home.
export default lesson("b1-5.2", "I managed to…", () => [
  section("Warm-up: Proud moments", [
    box(
      "Today you will…",
      "- tell stories about challenges and success 💪\n- use *could, was able to, managed to*: *It was hard, but I **managed to** finish!* 🏁\n- learn phrasal verbs for difficult moments: *carry on, give in, get over* 🧗",
    ),
    text(
      "Rank it! 🧗 From easiest to hardest — for YOU",
      "Put these challenges in order from 1 (easiest) to 6 (hardest). Then compare with your teacher — and explain!\n\n🏃 run 10 km · 🎤 sing in front of 100 people · 🗣️ speak English for a whole day · 📵 live without your phone for a week · 🥦 eat only vegetables for a month · 🧊 swim in icy water\n\nWhich one have you already managed to do? 💪",
    ),
    text(
      "Talk to your teacher.",
      "- What's something you're really proud of — something that was difficult at the time? 🏆\n- What could you do as a child that you can't do now? (do the splits, draw, speak another language…) 🤸\n- When things get really hard, do you usually carry on or give up? Give an example.",
    ),
    tip("Tell your own short success story first, using *managed to* naturally. Listen for the student's mistakes like “I could pass the exam” (one success) — don't correct yet; they're the point of today's grammar."),
  ]),

  section("Vocabulary: Challenges", [
    words("Phrasal verbs and phrases for challenges", [
      ["come up with", "💡 think of an idea or a plan", "She came up with a brilliant solution."],
      ["figure out", "🧩 understand or solve something after thinking", "I finally figured out how to fix it."],
      ["carry on", "➡️ continue", "It was raining, but we carried on."],
      ["give in", "🏳️ stop trying; accept you can't win", "I was so tired, but I didn't give in."],
      ["get over", "🩹 feel better after something bad", "It took me months to get over the injury."],
      ["end up", "📍 finally be in a place or situation you didn't plan", "We got lost and ended up in a tiny village."],
      ["push yourself", "🏋️ make yourself work harder"],
      ["a setback", "⛔ a problem that stops progress"],
      ["overcome", "🧗 successfully deal with a problem", "He overcame his fear of flying."],
      ["determined", "🔥 not going to let anything stop you"],
      ["exhausted", "😵 extremely tired"],
      ["a sense of achievement", "🏅 the good feeling when you've done something hard"],
    ]),
    match("Match the phrasal verbs and the meanings.", [
      ["come up with", "think of an idea"],
      ["figure out", "understand after thinking"],
      ["carry on", "continue"],
      ["give in", "stop trying"],
      ["get over", "feel better after something bad"],
      ["end up", "finally be somewhere you didn't plan"],
    ]),
    gaps(
      "Complete with one word.",
      "1. I was really tired at the 30th kilometer, but I carried [on]. 🏃\n2. It took me a week to figure [out] how the new software works.\n3. We need to come up [with] a new name for the café. ☕\n4. She broke her leg in March, but she got [over] it quickly.\n5. We missed the train and ended [up] sleeping at the station!\n6. The kids asked for ice cream all day, and in the end their dad gave [in]. 🍦\n7. Losing my job was a big [setback], but I found a better one.\n8. Finishing my first book gave me a huge sense of [achievement]. 🏅",
    ),
    quiz("Choose the right word.", [
      { q: "After ten hours of walking, we were completely ___.", options: ["*exhausted", "determined", "achieved"] },
      { q: "She was ___ to pass the exam — she studied every day.", options: ["*determined", "exhausted", "overcome"] },
      { q: "He ___ his fear of water and learned to swim at 40.", options: ["*overcame", "gave in", "ended up"] },
      { q: "If you want to get better, you need to ___ yourself.", options: ["*push", "give", "carry"] },
    ]),
    sort("Positive or negative? Sort. 😊😟", {
      "😊 positive": ["a sense of achievement", "determined", "overcome a problem", "carry on", "come up with an idea"],
      "😟 negative": ["a setback", "exhausted", "give in", "an injury", "fail an exam"],
    }),
  ]),

  section("Listening: My biggest challenge", [
    tip("A long listening — about 2 minutes. You know Dana (the marathon in October!) and Kenji (he started climbing in 4.1). First listen: *Did they succeed? What was the hardest moment?* Second listen: the tasks."),
    ...listening(
      "Listen to a podcast. Dana and Kenji talk about their biggest challenges this year.",
      "**Host:** Welcome back to \"Small Steps\", the podcast about people who did something hard. Dana, in October you ran your first marathon. How did it go?\n\n**Dana:** I finished! But it wasn't easy. For the first twenty kilometers I felt great. I could talk to the runners next to me — I was even enjoying the view. Then, at about thirty-two kilometers, I hit the wall. My legs just stopped working.\n\n**Host:** What did you do?\n\n**Dana:** I had to walk for a while. I really wanted to give in. Then I saw my friend Leo at the side of the road with a sign that said \"You're stronger than your excuses!\" I laughed so much that I managed to start running again. 😄\n\n**Host:** And your time?\n\n**Dana:** Four hours and fifty-two minutes. Not fast, but I was able to finish without stopping again. When I crossed the line, I cried. The sense of achievement was incredible.\n\n**Host:** Wonderful. Kenji, you're a climber now?\n\n**Kenji:** A beginner! In spring I couldn't climb a simple wall at the gym. My arms were too weak. But I pushed myself — three times a week — and in August I managed to climb my first real mountain near Almaty.\n\n**Host:** Tell us about the day.\n\n**Kenji:** We set off at four in the morning. Near the top, the weather changed and it started to snow. We couldn't see the path for a while, and I was really scared. Our guide figured out a safer way, so we didn't have to turn back. We reached the top at eleven.\n\n**Host:** What did you learn?\n\n**Kenji:** That I can do more than I think. Last year I couldn't run five kilometers. This year I was able to climb a mountain. Small steps.\n\n**Dana:** Exactly. And good friends with funny signs!\n\n**Host:** Thank you both — and good luck with the next challenge.",
    ),
    gaps(
      "Complete what they said. Listen again if you need.",
      "1. Dana: For the first twenty kilometers I felt [great].\n2. Dana: At about thirty-two kilometers, I hit the [wall].\n3. Dana: I [managed] to start running again.\n4. Kenji: In spring I [couldn't] climb a simple wall at the gym.\n5. Kenji: Our guide figured [out] a safer way.\n6. Kenji: So we didn't [have] to turn back.",
    ),
    quiz("Listen and choose.", [
      { q: "What happened at about 32 km?", options: ["*Dana's legs stopped working.", "Dana got lost.", "Dana fell down."] },
      { q: "Why did Dana start running again?", options: ["*Leo's funny sign made her laugh.", "Her coach shouted at her.", "She drank some water."] },
      { q: "What was Dana's time?", options: ["*4 hours 52 minutes", "3 hours 52 minutes", "5 hours 42 minutes"] },
      { q: "How often did Kenji train?", options: ["*three times a week", "every day", "once a week"] },
      { q: "What problem did Kenji's group have near the top?", options: ["*It started to snow and they couldn't see the path.", "Kenji hurt his leg.", "They ran out of water."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Dana enjoyed the first part of the race.", true],
      ["Dana had to walk for a while.", true],
      ["Dana stopped again after she started running.", false],
      ["Kenji could climb well at the start of the year.", false],
      ["Kenji's group had to turn back.", false],
      ["Last year Kenji couldn't run five kilometers.", true],
    ]),
  ]),

  section("Grammar: could, was able to, managed to", [
    quiz("Notice the rule 🔍 Look: “For the first 20 km I could talk to other runners.” “I managed to start running again.” “I was able to finish without stopping again.”", [
      { q: "Which shows success in ONE difficult moment?", options: ["*managed to / was able to", "could"] },
      { q: "“In spring I couldn't climb a simple wall.” For negatives…", options: ["*couldn't is fine (general or one time)", "we can't use couldn't"] },
      { q: "Can we say “The race was hard, but I could finish”?", options: ["*No — say “I managed to / was able to finish”.", "Yes, it's perfect."] },
    ]),
    table("past-ability"),
    choose(
      "Choose the right form.",
      "1. When I was six, I [*could/managed to] read quite well.\n2. The door was locked, but we [*managed to/could] get in through the window.\n3. I [*couldn't/didn't manage] find my keys anywhere this morning. 🔑\n4. The exam was really hard, but she [*was able to/could] pass it.\n5. My grandma [*could/managed to] speak three languages.\n6. After two hours, the firefighters [*were able to/could] put out the fire. 🚒\n7. We [*had to/could] wait two hours because the flight was delayed.\n8. I [*didn't have to/couldn't] pay — my friend bought my ticket. 🎟️",
    ),
    gaps(
      "Complete with could / couldn't / managed to / had to / didn't have to.",
      "1. My phone died, but I [managed to] find the hotel without a map. 🗺️\n2. When I was a kid, I [could] run really fast.\n3. It was so noisy that we [couldn't] hear each other.\n4. The bus didn't come, so we [had to] walk home.\n5. It was a holiday, so I [didn't have to] go to work. 🎉\n6. The problem was difficult, but she [managed to] figure it out.\n7. I [couldn't] sleep last night — the neighbors were having a party.\n8. Kenji [managed to] climb the mountain in August.",
    ),
    sort("General ability or one difficult success? Sort. 🔁🏁", {
      "🔁 general ability (could)": ["I could swim when I was four.", "She could play the piano.", "My dad could fix anything.", "We could see the sea from our flat."],
      "🏁 one success (managed to / was able to)": ["I managed to catch the last train.", "We were able to finish on time.", "He managed to fix the car in the rain.", "Dana managed to finish the marathon."],
    }),
    drag(
      "Complete Saida's story.",
      "Last winter a wind turbine broke during a storm. We [couldn't] climb it for two days because the wind was too strong. On the third day, the weather got better and we [were] able to start. It was freezing at the top, and my hands hurt, but I didn't give [in]. After six hours, we [managed] to repair it. I was exhausted, but I [had] a huge sense of achievement. And the next day I [didn't] have to work — I slept for twelve hours! 😴",
      ["could", "was", "out", "has"],
    ),
    order("Make sentences.", [
      "I managed to finish the race.",
      "We couldn't see the path in the snow.",
      "She could speak French when she was ten.",
      "They were able to repair the turbine.",
      "We didn't have to turn back.",
    ]),
  ]),

  section("Say it right: managed to", [
    box(
      "🗣️ Say it right",
      "**managed** has 2 syllables: **/ˈmæn.ɪdʒd/** — “*MAN-idged*”, not “*man-ay-ged*”.\n\nIn fast speech: *I managed to* → “I **MAN-idge-tuh**”.\n\nAlso **able** → **/ˈeɪbəl/** — “*AY-bl*”.",
    ),
    quiz("Which pronunciation is right?", [
      { q: "managed", options: ["*MAN-idged (2 syllables)", "man-AY-ged (3 syllables)"] },
      { q: "able", options: ["*AY-bl", "AH-ble"] },
      { q: "exhausted", options: ["*ig-ZORS-tid (no h sound)", "ex-HAUS-ted"] },
      { q: "determined", options: ["*di-TER-mind", "de-ter-MINED"] },
    ]),
    tip("Drill: the student says three true sentences about things they managed to do this year, focusing on *managed* and *able*."),
  ]),

  section("Let's talk: Against the odds", [
    text(
      "Tell your story 🧗",
      "Tell your teacher about a challenge you managed to overcome — in sport, study, work, health, a trip, a language…\n\n1. What was the challenge? Why was it hard?\n2. What setbacks did you have? *I couldn't… I had to…*\n3. Did you want to give in? What helped you carry on?\n4. How did you manage it in the end? *Finally, I managed to…*\n5. How did you feel? What did you learn?",
    ),
    text(
      "Talk to your teacher.",
      "- What could you do five years ago that you can't do now? And the other way round? 🔄\n- Who has helped you most when you wanted to give in? How?\n- Is it better to push yourself hard or to be kind to yourself? When?\n- What's the next big challenge you want to try? 🎯",
    ),
    tip("Give 2 minutes to plan with the five questions. While the student tells the story, ask follow-ups: *How did you manage that? Could you… before?* Note 3 good phrases and 2–3 mistakes with could / managed to."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "The test was hard, but I ___ pass it.", options: ["*managed to", "could", "can"] },
      { q: "When I was young, I ___ run 10 km easily.", options: ["*could", "managed", "was able"] },
      { q: "stop trying =", options: ["*give in", "carry on", "come up with"] },
      { q: "feel better after something bad =", options: ["*get over", "end up", "figure out"] },
    ]),
    box(
      "Phrase of the day: hit the wall",
      "🧱 **hit the wall** = suddenly have no energy left (often in sport).\n\n*At 32 km I hit the wall — my legs just stopped working!*",
    ),
  ]),

  homework(
    [
      video("Watch: could, was able to and managed to.", "agnbL_BJsRM"),
      choose(
        "Choose.",
        "1. I [*managed to/could] book the last two tickets — lucky!\n2. My grandpa [*could/managed to] make furniture with his hands.\n3. We [*couldn't/didn't manage] find a taxi, so we walked.\n4. After three tries, he [*was able to/could] pass his driving test.\n5. I [*had to/could] work late yesterday — there was a deadline.\n6. She [*didn't have to/couldn't] cook — her husband made dinner.\n7. The fire was big, but everyone [*managed to/could] get out safely.\n8. As a child, I [*couldn't/didn't manage] stand vegetables! 🥦",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      gaps(
        "Complete.",
        "1. Don't give [in] — you can do it! 💪\n2. Let's come up [with] a plan.\n3. It took her months to get [over] the flu.\n4. We got lost and ended [up] in a different town.\n5. I couldn't figure [out] the answer.\n6. It was raining, but we carried [on] walking.",
      ),
      write("Write a story (100+ words): “The day I didn't give in.” Describe a challenge, what you could / couldn't do, what you had to do and how you managed it in the end.", 100, {
        read: "*Example:* Two years ago, I decided to learn to swim. I was 30 and I couldn't swim at all — I was afraid of water. 😨 The first lessons were terrible: I couldn't put my face in the water, and I wanted to give in. But my teacher was very patient. I had to go three times a week, even when I was tired. After two months, I managed to swim one length of the pool…",
      }),
      record("Record 1 minute: Tell a friend about something you managed to do this year. How did you feel? 🎤", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
