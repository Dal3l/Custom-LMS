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
  table,
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 6.2 How often? — G: doesn't, Does she…?; always / usually / often / sometimes / never; How often…? Main format: a habits quiz + listening (a survey).
export default lesson("a1-6.2", "How often?", () => [
  section("Warm-up: Habits", [
    box("Today you will…", "- say how often: *always, usually, often, sometimes, never*\n- ask *How often do you…? Does she…?*\n- do a habits survey 📊"),
    picture("Habits", ["photos/hab-sleep.jpg", "photos/hab-run.jpg", "photos/hab-cook.jpg", "photos/screen-man.jpg"]),
    text(
      "Talk about the photos.",
      "- What do the people do? *She sleeps. She runs…*\n- Which of these things do you do every day? 🔁\n- What's a good habit? What's a bad habit? 👍👎",
    ),
  ]),

  section("Vocabulary: Habits and how often", [
    words("Habits", [
      ["sleep 8 hours", "😴"],
      ["do sport — exercise", "🏃 🏋️"],
      ["eat fast food", "🍔🍟"],
      ["drink water", "💧"],
      ["eat fruit and vegetables", "🍎🥦"],
      ["walk", "🚶", "I walk to school."],
      ["cook", "🍳", "My dad cooks on Sunday."],
      ["read books", "📚"],
      ["be late", "⏰😬", "He's often late."],
      ["How often…?", "❓📅", "How often do you do sport? — Twice a week."],
      ["once — twice — three times a week", "1️⃣ — 2️⃣ — 3️⃣ in a week"],
    ]),
    table("frequency"),
    matchPictures("Match the photos and the habits.", [
      ["photos/hab-sleep.jpg", "sleep 8 hours"],
      ["photos/hab-run.jpg", "do sport"],
      ["photos/hab-cook.jpg", "cook"],
      ["photos/screen-man.jpg", "use the phone"],
    ]),
    choose(
      "Put the word in the right place. Choose.",
      "1. I [*always have/have always] breakfast.\n2. She [*is often/often is] late.\n3. We [*never eat/eat never] fast food.\n4. They [*sometimes cook/cook sometimes] dinner.",
    ),
  ]),

  section("Quiz: Healthy or not? 🍏", [
    tip("Do the quiz like a magazine quiz. There are no right answers — the student answers honestly, then counts points: always = 4, usually = 3, often = 2, sometimes = 1, never = 0."),
    text(
      "Magazine quiz: How healthy are your habits?",
      "Answer with *always / usually / often / sometimes / never*:\n\n1. Do you sleep 8 hours? 😴\n2. Do you drink 6–8 glasses of water a day? 💧\n3. Do you eat fruit and vegetables? 🍎\n4. Do you do sport? 🏃\n5. Do you walk 30 minutes a day? 🚶\n6. Do you turn off your phone before bed? 📵\n\n**18–24 points:** Wow, a health star! ⭐\n**10–17 points:** Not bad! 👍\n**0–9 points:** Time for new habits! 😅",
    ),
    text("Talk to your teacher.", "- What's your score? Are you surprised?\n- What habit do you want to change? 💪\n- Ask your teacher the quiz questions! Who has more points?"),
  ]),

  section("Listening: A habits survey", [
    ...listening(
      "Listen. Aigerim does a school survey. She asks Dana about her brother, Arman.",
      "**Aigerim:** Hi, Dana! It's for a school survey. Can I ask about your brother?\n\n**Dana:** Sure!\n\n**Aigerim:** How often does Arman do sport?\n\n**Dana:** Oh, he plays football three times a week. He loves it! ⚽\n\n**Aigerim:** Does he eat fast food?\n\n**Dana:** Yes, he does. He sometimes eats burgers with his friends.\n\n**Aigerim:** Does he sleep 8 hours?\n\n**Dana:** No, he doesn't! He usually goes to bed at one o'clock. He plays games at night. 🎮\n\n**Aigerim:** Does he drink water?\n\n**Dana:** Not much. He never drinks water — he drinks cola! 🥤\n\n**Aigerim:** And is he late for school?\n\n**Dana:** Always! 😄",
    ),
    quiz("Listen and choose.", [
      { q: "How often does Arman play football?", options: ["*three times a week", "every day", "never"] },
      { q: "Does he sleep 8 hours?", options: ["*No, he doesn't.", "Yes, he does."] },
      { q: "He usually goes to bed at…", options: ["*1:00", "11:00", "10:00"] },
      { q: "Is he late for school?", options: ["*always", "never", "sometimes"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Arman sometimes eats burgers.", true],
      ["He drinks a lot of water.", false],
      ["He plays games at night.", true],
    ]),
  ]),

  section("Grammar: doesn't, Does she…?", [
    table("ps-doesnt"),
    choose(
      "Choose.",
      "1. Arman [*doesn't/don't] drink water.\n2. [*Does/Do] she cook?\n3. Does he play football? — Yes, he [*does/do].\n4. My sister doesn't [*like/likes] coffee.",
    ),
    gaps("Make it negative ❌.", "1. She plays tennis. → She [doesn't/does not] play tennis.\n2. He drinks coffee. → He doesn't [drink] coffee.\n3. My cat eats fish. → My cat [doesn't/does not] eat fish."),
    drag(
      "Complete the questions.",
      "1. [Does] your mom cook? — Yes, she does.\n2. How often [does] he do sport? — Twice a week.\n3. [Do] you walk to school? — No, I don't.\n4. When [does] she go to bed? — At 11.",
      ["Is", "Are"],
    ),
    order("Make questions.", ["How often does she read?", "Does your brother do sport?", "How often do you eat fast food?"]),
  ]),

  section("Let's talk: Survey", [
    text(
      "Survey: your family's habits 📊",
      "Ask your teacher about a person in their family (or a friend):\n\n*How often does he / she do sport? Does he / she cook? Does he / she drink coffee? When does he / she go to bed?*\n\nThen answer about a person in your family!",
    ),
    text("Talk to your teacher.", "- Who in your family has the best habits? 🏆\n- What do you never do? 😄\n- What do you always do on Sunday?"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "100% =", options: ["*always", "usually", "never"] },
      { q: "She ___ like coffee.", options: ["*doesn't", "don't", "isn't"] },
      { q: "___ he play football?", options: ["*Does", "Do", "Is"] },
      { q: "2 times a week =", options: ["*twice a week", "two week", "second week"] },
    ]),
    box("Word of the day: couch potato", "**a couch potato** 🛋️🥔 = a person who sits on the sofa and watches TV all day.\n\n*On Sunday I'm a couch potato!*"),
  ]),

  homework(
    [
      match("Match.", [
        ["always", "100%"],
        ["usually", "80%"],
        ["often", "60%"],
        ["sometimes", "40%"],
        ["never", "0%"],
      ]),
      choose("Choose.", "1. She [*doesn't/don't] eat meat.\n2. [*Does/Do] he walk to work?\n3. I [*often read/read often] in bed.\n4. He [*is never/never is] late."),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      video("Watch the video about always, sometimes, never.", "m7a6i-iMzuo"),
      trueFalse("Correct or not?", [
        ["He doesn't plays games.", false],
        ["Does she cook every day?", true],
        ["I usually go to bed at 11.", true],
        ["She always is happy.", false],
      ]),
    ],
    "Homework: Video",
  ),
  homework(
    [
      write("Write about the habits of a person in your family or a friend. Use always, usually, often, sometimes, never. (40+ words)", 40, {
        read: "*Example:* My mom has good habits. She always gets up at 6 and drinks water. She often walks in the park. She never eats fast food. But she sometimes goes to bed late, because she reads books at night! 📚",
      }),
      record("Record your answer: How healthy are your habits? Tell your quiz score and one habit you want to change.", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
