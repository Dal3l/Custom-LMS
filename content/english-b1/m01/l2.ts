import {
  box,
  choose,
  gaps,
  homework,
  lesson,
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

// 1.2 I think vs I'm thinking — G: state verbs (know, believe, seem, own…; think / have / see with two meanings); Present Perfect vs Present Perfect Continuous. V: personality adjectives, negative prefixes (un-, dis-, im-, ir-). Say it right: word stress in adjectives. S: describe yourself and a friend. Main format: a long reading (introverts and extroverts: myths, ~380 words) + a short grammar video in class.
export default lesson("b1-1.2", "I think vs I'm thinking", () => [
  section("Warm-up: Three words", [
    box(
      "Today you will…",
      "- describe personality: *reliable, stubborn, easy-going…* 🧩\n- use state verbs: *I know, I believe, it seems* — and *I think* vs *I'm thinking* 🧠\n- choose between *I've read* and *I've been reading* 📚",
    ),
    text(
      "Game: This or that? ⚡",
      "Answer fast — no thinking! Then your teacher guesses your personality. 🧩\n\n☕ coffee or 🍵 tea? · 🐦 early bird or 🦉 night owl? · 📞 call or 💬 text? · 🗺️ plan everything or 🎲 improvise? · 🎉 big party or 🍕 pizza with two friends? · 🏔️ mountains or 🏖️ beach? · 📚 book or 🎬 film? · 🐶 dogs or 🐱 cats?\n\nNow swap: ask your teacher the same questions — and describe THEIR personality!",
    ),
    text(
      "Talk to your teacher.",
      "- Describe yourself in three words. Would your best friend choose the same three? What about your mom? 🤔\n- In what ways are you like your parents — and in what ways are you completely different?\n- Has your personality changed in the last five years? What changed it — a person, a job, a difficult moment?",
    ),
    tip("Help with words when the student is stuck, but write them down — they come back in the vocabulary below. Share your own three words and ask the student to guess what your friends would say about you."),
  ]),

  section("Vocabulary: Personality", [
    words("Personality adjectives", [
      ["outgoing", "🎉 friendly, loves meeting people", "She's very outgoing — she talks to everyone."],
      ["reserved", "🤐 quiet, doesn't show feelings easily"],
      ["reliable", "🤝 you can trust them to do what they say", "If Tom says he'll come, he'll come. He's so reliable."],
      ["stubborn", "🐂 never changes their mind"],
      ["easy-going", "😌 relaxed, not easily upset"],
      ["ambitious", "🚀 wants to be successful", "She's ambitious — she wants to run the company one day."],
      ["sensitive", "🥺 easily hurt; or understands others' feelings"],
      ["self-confident", "💪 believes in themselves"],
      ["moody", "🌦️ happy one minute, angry the next"],
      ["generous", "🎁 likes giving things and time"],
      ["curious", "🔍 wants to know and learn things"],
      ["down-to-earth", "🌍 practical and normal, not proud"],
    ]),
    match("Match the people and the adjectives.", [
      ["She never says no to a party and talks to everyone.", "outgoing"],
      ["He always does what he promises.", "reliable"],
      ["She never changes her mind, even when she's wrong.", "stubborn"],
      ["Nothing stresses him — he's always relaxed.", "easy-going"],
      ["She asks a hundred questions about everything.", "curious"],
      ["He always pays for everyone's coffee.", "generous"],
      ["She's famous, but she's still normal and simple.", "down-to-earth"],
      ["One minute he's happy, the next he's angry.", "moody"],
    ]),
    sort("Make the opposite. Which prefix? Sort. ➖", {
      "un-": ["unreliable", "unfriendly", "unkind"],
      "dis-": ["dishonest", "disorganized", "disloyal"],
      "im-": ["impatient", "impolite", "immature"],
      "ir-": ["irresponsible", "irrational", "irregular"],
    }),
    gaps(
      "Complete with an adjective from this lesson.",
      "1. He's never on time and forgets everything. He's so [unreliable]. ⏰\n2. She tells lies all the time — she's [dishonest].\n3. My brother hates waiting — he's very [impatient]. 😤\n4. Leo's desk is a mess and he can never find anything. He's [disorganized].\n5. Kenji wants to be a manager by thirty — he's very [ambitious].\n6. Don't criticize her work too much — she's quite [sensitive].\n7. He left his little sister alone at home. That was really [irresponsible]!\n8. Dana loves parties and new people — she's very [outgoing].",
    ),
  ]),

  section("Reading: Introverts and extroverts", [
    tip("A long text (~380 words). Give 1 minute for the first look: *Which myth surprises you most?* Then the tasks. Ask the student to highlight the state verbs in the text (*know, believe, seem, prefer, need…*) — they're the grammar of the next section."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["The article says that most people are a mix of introvert and extrovert.", true],
        ["Introverts usually don't like other people.", false],
        ["For an introvert, a long party can feel tiring.", true],
        ["Extroverts are always good at listening.", false],
        ["Some famous actors and leaders are introverts.", true],
        ["The writer believes you can't change your personality at all.", false],
      ],
      {
        read: [
          "## 🧩 Introvert or extrovert? Five myths",
          "Most of us know the words. Extroverts are the people who love parties and talk to everyone; introverts are the quiet ones in the corner. But psychologists believe the truth is more interesting — and most people are actually somewhere in the middle. Here are five things that many people think, but that aren't quite true.",
          "**Myth 1: Introverts don't like people.** Not true. Introverts often have close, deep friendships. The difference is energy. After a long party, an extrovert feels full of energy, while an introvert feels tired and needs some time alone to \"recharge\" — like a phone battery. 🔋",
          "**Myth 2: Extroverts are always confident.** Being outgoing and being self-confident are not the same thing. Many extroverts love company because they don't like being alone with their thoughts. And some seem confident but feel nervous inside.",
          "**Myth 3: Introverts are shy.** Shyness is a fear of what other people think of you. Introversion is simply a preference for quieter situations. An introvert can give a great speech — they just need a quiet evening afterwards. Many well-known actors, writers and leaders describe themselves as introverts.",
          "**Myth 4: Extroverts are bad listeners.** Some are, of course — but so are some introverts! Many extroverts are curious about people and ask great questions. Listening is a skill, not a personality type.",
          "**Myth 5: You can't change.** Your basic personality probably stays quite similar during your life, but your behavior can change a lot. If you've been working in sales for ten years, you've probably become better at small talk, even if you're reserved by nature. 💼",
          "So, which one are you? Before you answer, think about what gives you energy and what takes it away. The answer might surprise you — and it might change, depending on the day.",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "According to the article, the main difference between introverts and extroverts is…", options: ["*where they get their energy", "how intelligent they are", "how many friends they have"] },
      { q: "Shyness is…", options: ["*a fear of what others think of you", "the same as introversion", "a kind of confidence"] },
      { q: "Why might a salesperson be good at small talk?", options: ["*They've practiced it for years.", "All salespeople are extroverts.", "They were born with it."] },
      { q: "What does the writer suggest at the end?", options: ["*Think about what gives you energy.", "Do an online test.", "Ask your friends."] },
    ]),
    gaps(
      "Find words in the article.",
      "1. to get energy back, like a battery: to [recharge]\n2. people who study the mind: [psychologists]\n3. liking one thing more than another: a [preference]\n4. being with other people: [company]\n5. how you act: your [behavior/behaviour]\n6. from birth, naturally: by [nature]",
    ),
    text(
      "Talk to your teacher.",
      "- Which myth did you believe before? Which one is true for someone you know?\n- What gives you energy — and what takes it away? 🔋\n- Is it easier to be an introvert or an extrovert in your culture? At school? At work?",
    ),
  ]),

  section("Grammar: State verbs", [
    quiz("Notice the rule 🔍 Look: “Most of us know the words.” “Psychologists believe…” “Some seem confident.” Why don't we say “we're knowing” or “they're seeming”?", [
      { q: "know, believe, seem…", options: ["*describe states (thoughts, feelings, having), not actions", "are always in the past", "are irregular verbs"] },
      { q: "“I think it's true.” “I'm thinking about my answer.” What's the difference?", options: ["*opinion (state) vs a process in my head (action)", "There's no difference.", "past vs present"] },
      { q: "So with most state verbs we…", options: ["*don't use the continuous (-ing) form", "always use -ing", "use will"] },
    ]),
    video("Watch: state verbs made simple.", "CeSNCDbX7KQ"),
    table("state-verbs"),
    choose(
      "Choose the right form.",
      "1. I [*don't understand/'m not understanding] this word. Can you explain?\n2. Look! The kids [*are playing/play] in the snow. ❄️\n3. This coffee [*tastes/is tasting] amazing. ☕\n4. Shh! I [*'m thinking/think] — give me a minute.\n5. Do you [*believe/are believing] in ghosts? 👻\n6. Kenji [*has/is having] a new car. — Really? What kind?\n7. We [*'re having/have] dinner at the moment — can I call you back?\n8. This bag [*belongs/is belonging] to Dana.",
    ),
    sort("State or action? Sort the sentences. 🧠🏃", {
      "🧠 state (no -ing)": ["I know the answer.", "She seems tired.", "This phone belongs to me.", "I prefer tea.", "They own a café."],
      "🏃 action (-ing is OK)": ["I'm thinking about it.", "We're having lunch.", "She's seeing a doctor today.", "He's tasting the soup.", "I'm looking at the photos."],
    }),
  ]),

  section("Grammar: I've read or I've been reading?", [
    quiz("Notice the rule 🔍 Look: “I've finished six modules.” “I've been doing an online course.” Which is about…", [
      { q: "a result — how many?", options: ["*I've finished six modules.", "I've been doing an online course."] },
      { q: "an activity — maybe still going on?", options: ["*I've been doing an online course.", "I've finished six modules."] },
      { q: "With state verbs (know, have = own) we use…", options: ["*the Present Perfect: I've known her for years.", "the Continuous: I've been knowing her."] },
    ]),
    table("pp-vs-ppc"),
    choose(
      "Present Perfect or Present Perfect Continuous? Choose.",
      "1. I [*'ve read/'ve been reading] three books this month. 📚\n2. I [*'ve been reading/'ve read] a lot lately — that's why I'm so tired.\n3. How many cups of coffee [*have you had/have you been having] today?\n4. She [*'s been cleaning/'s cleaned] all morning, but the house still isn't clean!\n5. They [*'ve known/'ve been knowing] each other since school.\n6. Look! I [*'ve painted/'ve been painting] the kitchen. Do you like it? ✅\n7. How long [*have you been learning/have you learned] to drive?\n8. He [*'s had/'s been having] that jacket for ten years.",
    ),
    gaps(
      "Complete. Use the Present Perfect or the Present Perfect Continuous.",
      "1. I [have written/'ve written] five emails this morning. (write)\n2. I [have been writing/'ve been writing] emails all morning. (write)\n3. We [have known/'ve known] Dana for ages. (know)\n4. She [has been working/'s been working] here since 2020. (work)\n5. How many countries [have you visited]? (you / visit)\n6. Your eyes are red. [Have you been crying]? (you / cry)\n7. I [have lost/'ve lost] my keys! I can't find them anywhere. (lose)\n8. He [has been playing/'s been playing] football for two hours. (play)",
    ),
    order("Make sentences.", [
      "I've known my best friend since I was five.",
      "She's been working on her project all week.",
      "How many books have you read this year?",
      "We've been waiting here for twenty minutes.",
      "I don't believe what he said.",
    ]),
  ]),

  section("Say it right: reLIable or reliABLE?", [
    box(
      "🗣️ Say it right",
      "Long adjectives have **one strong syllable**:\n\nre**LI**able · am**BI**tious · **SEN**sitive · **GEN**erous · **CU**rious · out**GO**ing\n\nPrefixes don't change it: un-re**LI**able · im-**PA**tient · dis-**HON**est",
    ),
    quiz("Where's the stress? Choose.", [
      { q: "ambitious", options: ["*am-BI-tious", "AM-bi-tious", "am-bi-TIOUS"] },
      { q: "generous", options: ["*GEN-er-ous", "gen-ER-ous", "gen-er-OUS"] },
      { q: "reliable", options: ["*re-LI-a-ble", "RE-li-a-ble", "re-li-A-ble"] },
      { q: "sensitive", options: ["*SEN-si-tive", "sen-SI-tive", "sen-si-TIVE"] },
      { q: "impatient", options: ["*im-PA-tient", "IM-pa-tient", "im-pa-TIENT"] },
    ]),
    tip("Clap the strong syllable together. Then a quick game: you say an adjective with the WRONG stress, the student corrects you."),
  ]),

  section("Let's talk: The real you", [
    text(
      "Describe a person 👥",
      "Think of a person you know very well (a friend, a relative, a colleague). Tell your teacher:\n\n- What are they like? Give **examples** — not just adjectives: *She's generous — she always…*\n- How long have you known them?\n- What have they been doing lately?\n- Do you think they've changed since you first met? How?\n\nYour teacher guesses: introvert or extrovert? 🔋",
    ),
    text(
      "Talk to your teacher.",
      "- Which is more important in a friend: being reliable or being fun? Why?\n- Is it good to be stubborn sometimes? When?\n- Can you be ambitious and easy-going at the same time? 🚀😌\n- What personality do you need for your job or your dream job?",
    ),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "I ___ what you mean.", options: ["*know", "'m knowing", "'ve been knowing"] },
      { q: "I ___ three emails today.", options: ["*'ve written", "'ve been writing", "'m writing"] },
      { q: "the opposite of honest:", options: ["*dishonest", "unhonest", "imhonest"] },
      { q: "never changes their mind =", options: ["*stubborn", "moody", "generous"] },
    ]),
    box(
      "Word of the day: down-to-earth",
      "🌍 **down-to-earth** = practical, simple, not proud — even if you're rich or famous.\n\n*She's a famous singer, but she's really down-to-earth — she still takes the bus!*",
    ),
  ]),

  homework(
    [
      video("Watch: Present Perfect simple or continuous?", "pvoqkQHb3lo"),
      choose(
        "Choose.",
        "1. I [*'ve been studying/'ve studied] for hours — I need a break.\n2. She [*'s visited/'s been visiting] Paris three times.\n3. We [*'ve had/'ve been having] this sofa since 2015.\n4. How long [*have you been waiting/have you waited]?\n5. They [*'ve finished/'ve been finishing] the project — finally! 🎉\n6. I [*'ve been thinking/'ve thought] about your idea all day.\n7. He [*'s lost/'s been losing] his phone again!\n8. You look hot. [*Have you been running/Have you run]?",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      gaps(
        "Write the opposite.",
        "1. patient → [impatient]\n2. honest → [dishonest]\n3. reliable → [unreliable]\n4. responsible → [irresponsible]\n5. polite → [impolite]\n6. organized → [disorganized]\n7. kind → [unkind]\n8. mature → [immature]",
      ),
      choose(
        "State verbs: choose.",
        "1. This soup [*smells/is smelling] delicious.\n2. I [*'m seeing/see] my dentist tomorrow at 10.\n3. What [*do you think/are you thinking] of my new haircut?\n4. Be quiet — I [*'m thinking/think]!\n5. We [*need/are needing] more time.\n6. She [*doesn't remember/isn't remembering] his name.",
      ),
    ],
    "Homework: Vocabulary and state verbs",
  ),
  homework(
    [
      write("Describe a person you know well. What are they like? Give examples. How long have you known them? What have they been doing lately? (100+ words)", 100, {
        read: "*Example:* My cousin Arman is one of the most generous people I know — he always pays for everyone and never wants anything back. 🎁 He's also quite stubborn: once he decides something, nobody can change his mind! I've known him all my life, but we've become really close in the last few years. Lately he's been working on his own business — he's been selling handmade furniture online. He's been working very long hours, but he seems happy…",
      }),
      record("Record yourself: describe your personality in one minute. Are you an introvert or an extrovert? Give examples. 🎤", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
