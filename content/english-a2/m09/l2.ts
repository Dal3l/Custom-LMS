import {
  box,
  choose,
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

// 9.2 Too much screen time — a SPEAKING and LISTENING lesson: a life-balance wheel, a long radio interview with a sleep doctor (~2.5 min), complaints and solutions role-play. G: too / too much / too many / (not) enough. V: sleep, sport, balance. Say it right: too / to / two, enough. No reading text or video in class.
export default lesson("a2-9.2", "Too much screen time", () => [
  section("Warm-up: Your balance wheel", [
    box("Today you will…", "- talk about your sleep, sport and screen time 😴🏃📱\n- say *too much, too many, not enough*\n- complain — and find solutions 💡"),
    text(
      "Your balance wheel ⚖️",
      "Give yourself a score from 1 to 10 for each part of your life this month:\n\n😴 sleep · 🏃 sport and movement · 📱 screen time (10 = very healthy!) · 🥗 food · 👫 friends and family · 💼 work / study · 🎨 hobbies and fun\n\nTell your teacher your scores. Your teacher asks: *Why only 4 for sleep? What's the problem?*",
    ),
    text(
      "Talk to your teacher.",
      "- Which part of your life has the lowest score? Why? 🤔\n- What time did you go to bed yesterday? What were you doing before you slept? 🌙\n- When do you feel the most stressed in your week? 😫\n- What one small change would make your week better?",
    ),
    tip("Do the wheel yourself too and share your scores — it makes the conversation real. Keep notes: you'll use the student's problems later in the role-play."),
  ]),

  section("Vocabulary: Sleep, sport and balance", [
    words("Sleep, sport and balance", [
      ["get enough sleep", "😴✅", "I don't get enough sleep."],
      ["stay up late", "🌙📺 go to bed late"],
      ["fall asleep — wake up", "😴 — ⏰"],
      ["oversleep", "⏰😱 sleep too long and be late"],
      ["take a nap", "😴🛋️ sleep a little in the day"],
      ["exercise — get exercise", "🏃 move your body"],
      ["sit (all day)", "🪑💻"],
      ["be in shape — be out of shape", "💪 — 🫠"],
      ["burn out — burnout", "🔥😵 be very tired from too much work"],
      ["take a break", "☕⏸️"],
      ["a routine", "🔁 what you do every day"],
      ["balance", "⚖️ the right amount of work and rest"],
    ]),
    match("Match.", [
      ["stay up", "late"],
      ["take", "a nap"],
      ["get enough", "sleep"],
      ["be in", "shape"],
      ["take a", "break"],
      ["fall", "asleep"],
    ]),
    gaps(
      "Complete.",
      "1. I watched a series until 3 a.m. — I stayed [up] too late. 🌙\n2. I [overslept] and missed my bus! ⏰😱\n3. My grandpa takes a [nap] after lunch every day. 🛋️\n4. I sit at my desk all day — I don't get enough [exercise]. 🪑\n5. I used to run, but now I'm out of [shape]. 🫠\n6. You've worked for 5 hours. Take a [break]! ☕\n7. She worked 70 hours a week and [burned/burnt] out. 🔥\n8. My morning [routine]: coffee, shower, a short walk. 🔁",
    ),
  ]),

  section("Listening: Ask the sleep doctor", [
    tip("A long listening — about 2–3 minutes. First listen: *What are the doctor's three main tips?* Second listen: the details — numbers and times. Stop after each caller if needed."),
    ...listening(
      "Listen to a radio show. A sleep doctor answers listeners' questions.",
      "**Host:** Good evening and welcome to “Healthy Living”. Tonight in the studio we have Doctor Anna White, a sleep expert. Doctor, why are so many people tired these days?\n\n**Anna:** Good evening! Well, the main problem is simple: most people don't get enough sleep. Adults need seven to nine hours a night, and teenagers need even more — eight to ten. But many people sleep only five or six.\n\n**Host:** Why is that?\n\n**Anna:** Often it's screens. People take their phones to bed and scroll for an hour. The light from the screen tells your brain it's still daytime, so it's harder to fall asleep. My advice: no screens for thirty to sixty minutes before bed.\n\n**Host:** Our first caller is Leo. Hi, Leo!\n\n**Leo:** Hi! I'm a student. I go to bed at about two a.m. because I play games, and then I oversleep and I'm late for my lectures. I drink too much coffee to stay awake. 😩\n\n**Anna:** Leo, that's a very common problem. Coffee stays in your body for many hours, so you shouldn't drink it after about three p.m. Try to go to bed at the same time every night — even at the weekend. And put your phone in another room!\n\n**Leo:** Another room? That's difficult… but OK, I'll try.\n\n**Host:** Next we have Saule.\n\n**Saule:** Hello! I work in an office, and I sit at my computer for ten hours a day. In the evening I'm too tired to exercise, but at night I can't sleep!\n\n**Anna:** Saule, your body isn't tired enough — your brain is tired, but your body hasn't moved! The World Health Organization says adults should do at least 150 minutes of exercise a week. That's just thirty minutes, five days a week. Walk to work, take the stairs, go for a walk at lunch.\n\n**Saule:** Thirty minutes a day… That sounds possible!\n\n**Host:** Doctor, three tips for everyone before we finish?\n\n**Anna:** One: get enough sleep — at the same time every day. Two: move your body every day. Three: no screens in bed. Your phone can wait until the morning! 📱😴\n\n**Host:** Thank you, Doctor Clark. Good night, everyone!",
    ),
    quiz("Listen and choose.", [
      { q: "How many hours of sleep do adults need, says the doctor?", options: ["*seven to nine", "five to six", "ten to twelve"] },
      { q: "What should you avoid before bed?", options: ["*screens", "water", "reading"] },
      { q: "When shouldn't Leo drink coffee?", options: ["*after about 3 p.m.", "before lunch", "in the morning"] },
      { q: "How long does Saule sit at her computer?", options: ["*ten hours a day", "five hours a day", "two hours a day"] },
      { q: "How much exercise does the WHO recommend for adults?", options: ["*at least 150 minutes a week", "10 minutes a day", "3 hours a day"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Teenagers need less sleep than adults.", false],
      ["Screen light tells your brain it's daytime.", true],
      ["Leo goes to bed at about midnight.", false],
      ["Leo drinks a lot of coffee to stay awake.", true],
      ["Saule is too tired to exercise in the evening.", true],
      ["The doctor says you can check your phone in bed.", false],
    ]),
    gaps(
      "Listen again. Complete the doctor's phrases.",
      "1. Most people don't get [enough] sleep.\n2. Many people sleep [only] five or six hours.\n3. I drink [too] much coffee.\n4. I'm too [tired] to exercise.\n5. Your body isn't tired [enough].\n6. Your phone can [wait] until the morning.",
    ),
  ]),

  section("Grammar: too much, not enough", [
    quiz("Notice the rule 🔍 From the radio show: “I drink too much coffee. I'm too tired to exercise. Most people don't get enough sleep. Your body isn't tired enough.” Which is true?", [
      { q: "too means…", options: ["*more than is good — a problem", "very — and it's good", "also"] },
      { q: "enough means…", options: ["*the amount we need", "too much", "nothing"] },
      { q: "With an adjective, enough goes…", options: ["*after it: tired enough", "before it: enough tired", "at the start of the sentence"] },
    ]),
    table("too-enough"),
    sort("too much or too many? Sort. 🥛🍎", {
      "too much + 🥛": ["coffee", "time online", "sugar", "work"],
      "too many + 🍎": ["sweets", "hours at the computer", "notifications", "meetings"],
    }),
    choose(
      "Choose.",
      "1. I drink [*too much/too many] coffee.\n2. I have [*too many/too much] apps on my phone.\n3. I'm [*too tired/tired too] to go out.\n4. I don't get [*enough sleep/sleep enough].\n5. This bag isn't [*big enough/enough big].\n6. There are [*too many/too much] people here!\n7. She isn't old [*enough/too] to drive.\n8. It's [*too/enough] cold to swim today. 🥶",
    ),
    gaps(
      "Complete with too, too much, too many or enough.",
      "1. I spend [too much] time on my phone. 📱\n2. I have [too many] notifications — 300 a day! 🔔\n3. It's [too] late to call him now. 🌙\n4. I don't drink [enough] water. 💧\n5. He's not tall [enough] to play basketball. 🏀\n6. You work [too much]! Take a break. 💼\n7. We don't have [enough] chairs for everyone. 🪑\n8. This coffee is [too] hot — I can't drink it! ☕",
    ),
    order("Make sentences.", [
      "I spend too much time online.",
      "I don't get enough exercise.",
      "She's too tired to go out.",
      "There are too many cars in the city.",
      "Is your room quiet enough to sleep?",
    ]),
  ]),

  section("Say it right: too, to, two · enough", [
    box(
      "🗣️ Say it right",
      "**too · to · two** — they can sound the same: /tuː/!\n\n*I've got **two** brothers.* · *It's **too** hot.* · *I want **to** go.* (in fast speech **to** is weak: /tə/)\n\n**enough** — the **gh** sounds like **f**: /ɪˈnʌf/ — like **tough** /tʌf/ and **laugh** /lɑːf/ 😄",
    ),
    quiz("too, to or two? Choose the word you need.", [
      { q: "I have ___ cats.", options: ["*two", "too", "to"] },
      { q: "It's ___ late.", options: ["*too", "two", "to"] },
      { q: "I'm going ___ the gym.", options: ["*to", "too", "two"] },
      { q: "Which word has the same “gh” sound as enough?", options: ["*tough", "night", "through"] },
    ]),
    tip("Dictation game: say 5 short sentences with *too / to / two* — the student writes them. Then the student says *enough, tough, laugh* — check the **f** sound."),
  ]),

  section("Let's talk: Complaints and solutions", [
    text(
      "Role-play: Life coach 🧑‍⚕️",
      "**Student A** has a problem — use your real problems from the balance wheel or a card:\n\n- 😴 *I don't get enough sleep. I stay up too late.*\n- 📱 *I spend too much time on my phone.*\n- 💼 *I have too much work and not enough free time.*\n- 🪑 *I sit too much. I'm out of shape.*\n- ☕ *I drink too much coffee.*\n\n**Student B** is a life coach: ask questions (*How many hours…? How much…? Why?*) and give 3 solutions: *You should… Why don't you…? Try to…*\n\nThen change roles! 🔁",
    ),
    text(
      "Talk to your teacher.",
      "- Do you have enough free time? What do you do with it? 🎨\n- Is there too much pressure on people your age? What kind? 😫\n- Have you ever felt burned out? What helped you? 🔥\n- What's your perfect evening routine before sleep? 🌙",
    ),
    text(
      "Debate: Agree or disagree? 🗳️",
      "- “Phones should be banned in schools.”\n- “Teenagers spend too much time online — it's their parents' fault.”\n- “Working from home is healthier than working in an office.”\n- “Naps at work are a good idea.” 😴",
    ),
    tip("*If you have time:* “7-day challenge” — the student chooses ONE change for next week (*no phone in bed, 30 minutes of walking a day…*). Next lesson: *How did it go?*"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "I drink ___ coffee.", options: ["*too much", "too many", "enough much"] },
      { q: "I'm not ___ to run 10 km.", options: ["*fit enough", "enough fit", "too fit"] },
      { q: "sleep too long and be late =", options: ["*oversleep", "take a nap", "stay up"] },
      { q: "It's ___ hot to go outside.", options: ["*too", "two", "enough"] },
    ]),
    box("Word of the day: revenge bedtime procrastination", "**revenge bedtime procrastination** 🌙📱 = staying up too late because it's the only free time you have for yourself.\n\n*I'm so tired — revenge bedtime procrastination again! I watched TikTok until 2.*"),
  ]),

  homework(
    [
      gaps(
        "Complete.",
        "1. I go to bed at 2 a.m. — I stay up too [late]. 🌙\n2. I don't get enough [sleep]. 😴\n3. I worked all day without a [break]. ☕\n4. My grandma takes a [nap] every afternoon. 🛋️\n5. I haven't done sport for a year — I'm out of [shape]. 🫠\n6. You need a good work-life [balance]. ⚖️",
      ),
      choose(
        "Choose.",
        "1. There's [*too much/too many] sugar in this cake.\n2. I'm [*too/enough] busy to see you today.\n3. Are you old [*enough/too] to drive?\n4. We have [*too many/too much] meetings at work.\n5. I don't have [*enough money/money enough].\n6. The music is [*too loud/loud too]!",
      ),
    ],
    "Homework: Vocabulary and grammar",
  ),
  homework(
    [
      video("Watch: too or enough? (BBC — English in a Minute)", "OvFweyjRAPI"),
      trueFalse(
        "Read Leo's message. True or false?",
        [
          ["Leo has tried the doctor's advice for a week.", true],
          ["He still plays games until 2 a.m.", false],
          ["He drinks less coffee now.", true],
          ["His phone is in the kitchen at night.", true],
          ["He thinks it's too difficult and wants to stop.", false],
        ],
        { read: "💬 **Leo:** One week with the sleep doctor's advice! 😴 I go to bed at 11:30 now — not 2 a.m. My phone sleeps in the kitchen. I drink only two coffees a day, before lunch. The first three days were too difficult, but now I wake up before my alarm! I'm not tired enough to go back to my old life. 😄" },
      ),
    ],
    "Homework: Video and reading",
  ),
  homework(
    [
      write("Write about your balance: what do you do too much? What don't you do enough? What are you going to change? (60+ words)", 60, {
        read: "*Example:* I spend too much time on my phone — about five hours a day. 📱 I drink too many energy drinks and I don't drink enough water. I don't get enough sleep because I stay up too late. But I do enough sport — I go to the gym three times a week! 💪 I'm going to put my phone in another room at night and drink more water.",
      }),
      record("Record your answer: Describe your perfect healthy day — from morning to night. (1 minute)", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
