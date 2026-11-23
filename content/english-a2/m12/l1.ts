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

// 12.1 If it rains… — a GAME and SPEAKING lesson: a consequences chain, superstitions, Plan B. G: First Conditional (If it rains, we'll stay home). V: weather and plans. Say it right: the pause and the tune in if-sentences. Listening: a forecast + weekend plans. No video in class.
export default lesson("a2-12.1", "If it rains…", () => [
  section("Warm-up: Plan B", [
    box("Today you will…", "- talk about possible situations: *If it rains, we'll…* 🌧️\n- make plans with a Plan B\n- share superstitions from your country 🐈‍⬛🪞"),
    picture("A rainy day in London ☔", ["photos/umbrellas.jpg"], "Oxford Street, London — umbrellas everywhere!"),
    text(
      "Talk to your teacher.",
      "- What do you do when it rains on your day off? ☔🛋️\n- Do you always check the weather forecast? Which app? 📱\n- Are you a “Plan A only” person or do you always have a Plan B? 🤔\n- What's your favorite weather — and the weather you hate? ☀️❄️🌧️",
    ),
    tip("Keep the student's answers about the weekend — you'll use them for the Plan B game at the end. Notice if the student says *If it will rain…* — don't correct yet, it's today's grammar point!"),
  ]),

  section("Vocabulary: Weather and plans", [
    words("Weather and plans", [
      ["the weather forecast", "📺🌦️ what the weather will be"],
      ["a shower — a storm", "🌦️ short rain — ⛈️"],
      ["thunder and lightning", "🌩️⚡"],
      ["fog — foggy", "🌫️"],
      ["a heatwave", "🥵🔥 many very hot days"],
      ["below zero — 10 degrees", "🥶 −5°C — 🌡️ 10°C"],
      ["indoor — outdoor", "🏠 inside — 🌳 outside", "an outdoor concert"],
      ["postpone", "📅➡️ move to a later date"],
      ["just in case", "🌂 to be ready if something happens", "Take an umbrella just in case."],
      ["Plan B", "🅱️ another plan if the first doesn't work"],
      ["a superstition", "🐈‍⬛🪞 a belief about good or bad luck"],
      ["bad luck — good luck", "😩🍀"],
    ]),
    match("Match.", [
      ["the weather", "forecast"],
      ["thunder and", "lightning"],
      ["just in", "case"],
      ["an outdoor", "concert"],
      ["below", "zero"],
      ["bad", "luck"],
    ]),
    gaps(
      "Complete.",
      "1. The weather [forecast] says it'll rain tomorrow. 📺\n2. It's −15°C — that's 15 degrees below [zero]! 🥶\n3. It's 40°C for a week — it's a [heatwave]. 🥵\n4. I can't see anything — it's very [foggy]. 🌫️\n5. Take a jacket just in [case]. 🧥\n6. It's raining, so they [postponed] the match to next Sunday. 📅\n7. If the picnic is canceled, what's our Plan [B]? 🅱️\n8. My grandma has a lot of [superstitions] — she never puts keys on the table! 🔑",
    ),
  ]),

  section("Grammar: If it rains, we'll…", [
    quiz("Notice the rule 🔍 Look: “If it rains, we'll stay home. If you don't hurry, you'll miss the bus.” Which is true?", [
      { q: "These sentences are about…", options: ["*a real possibility in the future", "the past", "a dream that can't happen"] },
      { q: "After if we use…", options: ["*the Present Simple: if it rains", "will: if it will rain", "the past: if it rained"] },
      { q: "In the other part we use…", options: ["*will / won't + verb", "the Present Simple", "-ing"] },
    ]),
    table("first-conditional"),
    choose(
      "Choose.",
      "1. If it [*rains/will rain] tomorrow, we'll go to the cinema.\n2. If you [*study/will study], you'll pass the test.\n3. We [*'ll miss/miss] the train if we don't hurry.\n4. If she [*doesn't/won't] call, I'll be worried.\n5. What will you do if the shop [*is/will be] closed?\n6. If it's sunny, we [*'ll have/have had] a picnic.\n7. I [*won't/don't] go if you don't come with me.\n8. If you [*eat/will eat] all that cake, you'll feel sick! 🍰",
    ),
    gaps(
      "Complete with the right form.",
      "1. If it [snows], we'll build a snowman. (snow) ⛄\n2. If you're late, the teacher [will be/'ll be] angry. (be)\n3. If I [have] time, I'll call you. (have) 📞\n4. She [will be/'ll be] happy if you come. (be) 😊\n5. If we [don't leave/do not leave] now, we'll miss the bus. (not leave) 🚌\n6. If it's cold, I [will wear/'ll wear] my new coat. (wear) 🧥\n7. If they [win], they'll be the champions! (win) 🏆\n8. You [won't/will not] sleep if you drink coffee now. (not) ☕",
    ),
    match("Match the halves.", [
      ["If it rains,", "we'll stay home."],
      ["If you don't hurry,", "you'll miss the bus."],
      ["If I pass the exam,", "I'll celebrate with friends."],
      ["If you eat too much,", "you'll feel sick."],
      ["If my phone dies,", "I'll call you from Dana's phone."],
      ["If the flight is delayed,", "we'll miss our connection."],
    ]),
    drag(
      "Complete the chat.",
      "Dana: Are we still going to the mountains on Saturday?\nLeo: Yes, if the weather [is] OK. If it [rains], we'll go to the new museum.\nDana: Good Plan B! If it's sunny, I['ll] bring my camera. 📸\nLeo: And if we [leave] at 8, we'll miss the traffic.\nDana: 8?! If I [get] up that early, I'll be a zombie all day! 🧟\nLeo: If you [come] at 8, I'll buy you a coffee. ☕\nDana: Deal! But if you're late, you['ll] buy two! 😄\nLeo: I [won't] be late, I promise!",
      ["will rain", "will get", "am"],
    ),
    order("Make sentences.", [
      "If it rains, we'll stay home.",
      "I'll call you if I have time.",
      "If you don't hurry, you'll be late.",
      "What will you do if it snows?",
      "She won't come if he's there.",
    ]),
  ]),

  section("Say it right: the tune of if-sentences", [
    box(
      "🗣️ Say it right",
      "An if-sentence has two parts — and two tunes:\n\n*If it **RAINS** ↗️ | we'll **STAY** home ↘️.*\n\nThe voice goes **up** at the end of the if-part (the comma), makes a small **pause**, then goes **down** at the end.\n\nIt sounds like: “there's more coming…” ↗️ | “…finished!” ↘️",
    ),
    quiz("Where's the pause? Choose.", [
      { q: "If it's sunny we'll go to the beach.", options: ["*after “sunny”", "after “we'll”", "after “go”"] },
      { q: "If you call me I'll come.", options: ["*after “me”", "after “you”", "after “I'll”"] },
      { q: "If the bus is late we'll take a taxi.", options: ["*after “late”", "after “bus”", "after “take”"] },
      { q: "We'll stay home if it rains.", options: ["*no pause — if is in the second part", "after “We'll”", "after “stay”"] },
    ]),
    tip("Say a sentence with a big ↗️ | ↘️ tune, then a flat robot voice 🤖 — the student hears the difference. Then the student finishes your if-parts with the right tune: *If I'm hungry ↗️…*"),
  ]),

  section("Listening: Weekend forecast", [
    ...listening(
      "Listen. First, the weather forecast. Then Dana and Leo talk about their weekend.",
      "**Reporter:** And now the weather for the weekend. On Saturday morning it'll be sunny and warm in Almaty — about 24 degrees. But in the afternoon there'll be showers, and in the mountains there might be thunderstorms. On Sunday it'll be cooler and cloudy, with a strong wind. Have a great weekend!\n\n**Dana:** Did you hear that? Thunderstorms in the mountains on Saturday afternoon!\n\n**Leo:** Yes. So if we go, we'll have to leave very early — at six — and come back before lunch.\n\n**Dana:** Six?! OK… And if there's a storm when we're up there?\n\n**Leo:** If we see dark clouds, we'll turn back. Safety first. ⚡\n\n**Dana:** Fine. And what's our Plan B?\n\n**Leo:** If the weather's really bad, we'll go to the climbing center in the city. 🧗\n\n**Dana:** I like it. And on Sunday?\n\n**Leo:** If it's windy, I won't go cycling. Let's just watch a film at home. 🎬\n\n**Dana:** Perfect. If you make popcorn, I'll bring the film!",
    ),
    quiz("Listen and choose.", [
      { q: "What will the weather be like on Saturday morning?", options: ["*sunny and warm", "rainy", "windy and cold"] },
      { q: "What might happen in the mountains on Saturday afternoon?", options: ["*thunderstorms", "snow", "fog"] },
      { q: "What time does Leo want to leave?", options: ["*at six", "at eight", "after lunch"] },
      { q: "What's their Plan B for Saturday?", options: ["*the climbing center", "the cinema", "a café"] },
      { q: "What will Dana bring on Sunday?", options: ["*a film", "popcorn", "a bike"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["It'll be about 24 degrees on Saturday morning.", true],
      ["Sunday will be hotter than Saturday.", false],
      ["If they see dark clouds, they'll turn back.", true],
      ["Leo will go cycling on Sunday if it's windy.", false],
      ["Leo will make popcorn.", true],
    ]),
  ]),

  section("Let's talk: Superstitions and Plan B", [
    text(
      "Superstitions 🐈‍⬛🪞",
      "Many cultures have superstitions with **if**. Do you know these? Are there similar ones in your family?\n\n- 🪞 *If you break a mirror, you'll have seven years of bad luck.*\n- 🎶 *If you whistle inside the house, you won't have money.* (a popular one in Kazakhstan and Russia!)\n- 🐈‍⬛ *If a black cat crosses your path, you'll have bad luck.*\n- 🍀 *If you find a four-leaf clover, you'll have good luck.*\n\nTell your teacher 2 superstitions from your family. Do you believe them? 🤔",
    ),
    text(
      "Game: Plan B 🅱️",
      "Plan your real weekend — with a Plan B for everything!\n\n*If it's sunny, I'll… · If it rains, I'll… · If my friend can't come, I'll… · If I'm too tired, I'll…*\n\nYour teacher tries to ruin your plans: *But what if the shop is closed? What if your phone dies?* 😈 Find a Plan B every time!",
    ),
    text(
      "Talk to your teacher.",
      "- What will you do if you have a free day next week? 🗓️\n- If you have some extra money this month, what will you buy? 💰\n- What will you do if you finish this English course? 🎓\n- What happens if you don't sleep enough? 😴",
    ),
    tip("*If you have time:* “Consequences chain” ⛓️ — start: *If I go out tonight, I'll be tired tomorrow.* The student continues: *If I'm tired tomorrow, I'll…* Keep going as long as you can — the story gets crazy! 😄"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "If it ___ , we'll stay home.", options: ["*rains", "will rain", "rained"] },
      { q: "If you hurry, you ___ the bus.", options: ["*'ll catch", "catch", "caught"] },
      { q: "move to a later date =", options: ["*postpone", "forecast", "cancel"] },
      { q: "Take an umbrella just in ___.", options: ["*case", "time", "rain"] },
    ]),
    box("Word of the day: Murphy's law", "**Murphy's law** 😩 = “If something can go wrong, it will go wrong.”\n\n*I washed my car, and then it rained. Murphy's law!* 🚗🌧️"),
  ]),

  homework(
    [
      gaps(
        "Complete.",
        "1. The weather [forecast] says it'll be sunny. 📺\n2. It's 38°C every day — what a [heatwave]! 🥵\n3. Take a coat just in [case]. 🧥\n4. They [postponed] the concert because of the storm. 📅\n5. Breaking a mirror means bad [luck]. 🪞\n6. If the trip is canceled, we need a Plan [B]. 🅱️",
      ),
      choose(
        "Choose.",
        "1. If it [*snows/will snow], we'll go skiing.\n2. I [*'ll help/help] you if you ask.\n3. If they [*don't/won't] hurry, they'll be late.\n4. What will you do if you [*miss/will miss] the bus?\n5. If he [*calls/called], I'll tell him.\n6. You'll be tired if you [*go/will go] to bed late.",
      ),
    ],
    "Homework: Vocabulary and grammar",
  ),
  homework(
    [
      video("Watch: the first conditional (BBC — Conditionals with Georgie).", "kpDaqFQ1YCM"),
      gaps(
        "Finish the sentences with the right form.",
        "1. If I [get] a good mark, my parents will be happy. (get)\n2. If it's hot tomorrow, we [will go/'ll go] to the lake. (go)\n3. You [will feel/'ll feel] better if you rest. (feel)\n4. If she [doesn't come/does not come], we'll start without her. (not come)\n5. If you [press] this button, the music will stop. (press)\n6. I [won't tell/will not tell] anyone if you tell me your secret. (not tell)",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      write("Write your plans for next weekend with a Plan B: If it's sunny, I'll… If it rains… If my friends are busy… (60+ words)", 60, {
        read: "*Example:* If it's sunny on Saturday, I'll go to the mountains with my brother. 🏔️ If it rains, we'll go to the new climbing center instead. In the evening, if my friends are free, we'll have a barbecue. If they're busy, I'll watch a film at home. On Sunday, if I'm not too tired, I'll clean my room… but I probably will be too tired! 😄",
      }),
      record("Record your answer: Tell your teacher 3 superstitions from your country or family. Do you believe them? (1 minute)", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
