import {
  box,
  choose,
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

// 7.4 Practical English: At the doctor's — symptoms, I've had… since / for…, advice with should; at the doctor's and at the pharmacy; role-play. The module's only video in class.
export default lesson("a2-7.4", "Practical: At the doctor's", () => [
  section("Warm-up: Grandma's remedies", [
    box("Today you will…", "- say what's wrong: *I've got a sore throat. I've had it since Monday.* 🤒\n- understand a doctor's advice: *You should…* 🩺\n- buy medicine at a pharmacy 💊"),
    text(
      "Talk to your teacher.",
      "- What do you do when you catch a cold: go to the doctor, go to the pharmacy or wait? 🤧\n- What does your grandma or mom say you should do when you're sick? 🍯🍋 (honey and lemon? hot tea? wrap up warm?)\n- Do you believe in home remedies? Which ones really work, for you?\n- When did you last see a doctor? Was it a good experience?",
    ),
    tip("Home remedies are a great topic — every family has its own! Share yours first. Write the student's remedies on the board in English: *drink hot tea with honey, eat garlic, stay in bed…*"),
  ]),

  section("Vocabulary: What's the matter?", [
    words("Health problems", [
      ["a headache — a stomachache", "🤕 head — 🤢 stomach"],
      ["a sore throat", "🗣️😣 it hurts when you swallow"],
      ["a cough — cough", "😷", "I've had a cough for a week."],
      ["a cold — the flu", "🤧 — 🤒 a bad cold with a temperature · 🇺🇸 flu"],
      ["a temperature", "🌡️ 🇺🇸 a fever"],
      ["feel sick", "🤢 you might vomit"],
      ["feel dizzy", "😵‍💫 the room is spinning"],
      ["hurt", "😣", "My back hurts."],
      ["an allergy — be allergic to", "🤧🌸 — I'm allergic to cats."],
      ["a painkiller", "💊 medicine that stops pain"],
      ["a prescription", "📝💊 a paper from a doctor to get medicine"],
      ["rest — stay in bed", "🛌"],
    ]),
    match("What's the matter? Match.", [
      ["🤕", "a headache"],
      ["🤢", "a stomachache"],
      ["🌡️", "a temperature"],
      ["😷", "a cough"],
      ["😵‍💫", "I feel dizzy."],
      ["🤧🌸", "an allergy"],
    ]),
    sort("A cold or a stomach problem? Sort. 🤧🤢", {
      "🤧 a cold": ["a sore throat", "a cough", "a runny nose", "a temperature"],
      "🤢 a stomach problem": ["a stomachache", "I feel sick", "I can't eat", "I ate bad fish"],
    }),
    gaps(
      "Complete.",
      "1. My head hurts — I've got a [headache]. 🤕\n2. It hurts when I swallow. I've got a sore [throat]. 🗣️\n3. I can't stop coughing — I've got a bad [cough]. 😷\n4. My temperature is 38.5°. I think I've got the [flu]. 🤒\n5. I ate too much cake. Now I feel [sick]. 🤢\n6. I'm [allergic] to cats — I can't stop sneezing! 🐱🤧\n7. Take a [painkiller] for your headache. 💊\n8. You need a [prescription] from the doctor for this medicine. 📝",
    ),
  ]),

  section("Useful phrases: You should rest", [
    table("doctor"),
    sort("Who says it? Sort. 🩺🤒💊", {
      "🩺 doctor": ["What's the matter?", "How long have you had it?", "You should stay in bed."],
      "🤒 patient": ["I've got a terrible headache.", "I've felt sick since yesterday.", "My back hurts."],
      "💊 pharmacist": ["Take one tablet three times a day.", "Do you have a prescription?", "Are you allergic to anything?"],
    }),
    choose(
      "Choose.",
      "1. You [*should/should to] drink more water.\n2. You [*shouldn't/don't should] go to work today.\n3. I've had a cough [*since/for] Monday.\n4. I've [*had/have] a headache for three days.\n5. — What's the [*matter/matters]? — I feel dizzy.\n6. [*How long/How much] have you had this pain?\n7. My leg [*hurts/hurt] when I walk.\n8. She's [*got/get] a sore throat.",
    ),
    gaps(
      "Complete the doctor's advice.",
      "1. You've got a temperature. You [should] stay in bed. 🛌\n2. You [shouldn't/should not] go to the gym this week. ❌🏋️\n3. Drink a lot of water and [rest]. 💧\n4. Take this medicine three [times] a day. 💊\n5. If you don't feel better in three days, come [back]. 🔁\n6. You've got a cold — you [shouldn't/should not] eat ice cream! 🍦😄",
    ),
  ]),

  section("Dialogue: At the doctor's", [
    picture("At the doctor's", ["photos/doctor-office.jpg"], "A doctor during a consultation"),
    tip("Read the dialogue with the student: you are the doctor. Then change roles — and change the problem!"),
    trueFalse(
      "Read the dialogue. True or false?",
      [
        ["Arman has had a sore throat since Monday.", true],
        ["He has a temperature of 39°.", false],
        ["He's had a headache for two days.", true],
        ["The doctor thinks he's got the flu.", false],
        ["The doctor says he should go to work.", false],
      ],
      {
        read: [
          "## 🩺 At the doctor's",
          "**Doctor:** Good morning. Please sit down. What's the matter?",
          "**Arman:** I've got a sore throat and a cough. I've had them since Monday.",
          "**Doctor:** Have you got a temperature?",
          "**Arman:** Yes, a little — 37.8°. And I've had a headache for two days.",
          "**Doctor:** Let me have a look… Say “Ahh”. 👄 Hmm, your throat is very red. It's a bad cold, not the flu.",
          "**Arman:** What should I do?",
          "**Doctor:** You should stay at home and rest for three days. Drink a lot of warm water and tea with honey. 🍯 You shouldn't go to work — your colleagues don't want your cold! 😄",
          "**Arman:** Do I need any medicine?",
          "**Doctor:** Here's a prescription for throat spray. Take a painkiller for the headache if you need it. If you don't feel better by Friday, come back.",
          "**Arman:** Thank you, doctor!",
        ].join("\n\n"),
      },
    ),
    order(
      "Put the conversation in order.",
      ["What's the matter?\nI've got a terrible stomachache.\nHow long have you had it?\nSince yesterday evening.\nYou should eat light food and drink a lot of water."],
      "lines",
    ),
  ]),

  section("Listening: At the pharmacy", [
    picture("At the pharmacy", ["photos/pharmacy.jpg"], "Medicine at a pharmacy"),
    ...listening(
      "Listen. Dana goes to the pharmacy.",
      "**Pharmacist:** Hello! How can I help you?\n\n**Dana:** Hi. I think I've got an allergy. My eyes are red, and I've sneezed all morning! 🤧\n\n**Pharmacist:** Oh dear. How long have you had these symptoms?\n\n**Dana:** Since Saturday. I visited my friend, and she's got two cats. 🐱🐱\n\n**Pharmacist:** That's probably it. Have you ever had a cat allergy before?\n\n**Dana:** No, never. That's strange, isn't it?\n\n**Pharmacist:** Not really — allergies can start at any age. I can give you these allergy tablets. You don't need a prescription.\n\n**Dana:** How often should I take them?\n\n**Pharmacist:** One tablet a day, in the morning. They might make you a little sleepy, so you shouldn't drive after you take them.\n\n**Dana:** OK. And my eyes?\n\n**Pharmacist:** These eye drops will help. Two drops in each eye, three times a day. 💧\n\n**Dana:** Great. How much is that?\n\n**Pharmacist:** That's 4,500 tenge, please. And if it doesn't get better in a week, you should see a doctor.\n\n**Dana:** Thank you so much!",
    ),
    quiz("Listen and choose.", [
      { q: "What are Dana's symptoms?", options: ["*red eyes and sneezing", "a headache and a temperature", "a stomachache"] },
      { q: "When did the symptoms start?", options: ["*on Saturday", "yesterday", "a week ago"] },
      { q: "How often should she take the tablets?", options: ["*once a day, in the morning", "three times a day", "before bed"] },
      { q: "How much does Dana pay?", options: ["*4,500 tenge", "1,500 tenge", "45,000 tenge"] },
    ]),
    gaps(
      "Listen again. Complete the phrases.",
      "1. How can I [help] you?\n2. How long have you [had] these symptoms?\n3. Have you [ever] had a cat allergy before?\n4. You don't need a [prescription].\n5. You [shouldn't/should not] drive after you take them.\n6. If it doesn't get better in a week, you should [see] a doctor.",
    ),
  ]),

  section("Video: A doctor's appointment", [
    video("Watch an easy conversation at the doctor's. What's the problem? What's the advice?", "5jP6qM3Kakc"),
    text("Talk to your teacher.", "- What's wrong with the patient? What does the doctor say?\n- Which phrases from today's lesson do you hear? 👂"),
  ]),

  section("Let's talk: Role-play", [
    text(
      "Role-play: the doctor and the pharmacy 🎭",
      "**1. At the doctor's.** Choose a problem card: 🤧 a cold · 🤕 a headache after 10 hours on the computer · 🤢 a stomachache after a party · 🦶 your foot hurts after a run · 😴 you can't sleep.\n\nThe patient explains: *I've got… I've had it since… / for…* The doctor asks questions and gives advice: *You should… You shouldn't…*\n\n**2. At the pharmacy.** The patient asks for medicine. The pharmacist asks: *Are you allergic to anything?* and explains how to take it.\n\nThen change roles! 🔁",
    ),
    text(
      "Talk to your teacher.",
      "- How do you get a doctor's appointment in your city: an app, a phone call, a queue? 📱\n- Is it easy to see a doctor in your country? Is it expensive? 💸\n- What do you do to stay healthy? What should you do more? 🥗🏃\n- Have you ever been sick on holiday abroad? What happened? ✈️🤒",
    ),
    tip("*If you have time:* “Dr. Google” 💻 — the student describes funny “symptoms” (*I've laughed for three days and I can't stop!*), you give silly but grammatically correct advice: *You should watch a sad film!* 😄"),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "What's the ___?", options: ["*matter", "problem of", "wrong"] },
      { q: "You ___ rest.", options: ["*should", "should to", "shoulds"] },
      { q: "I've had a cough ___ Monday.", options: ["*since", "for", "from"] },
      { q: "a paper from a doctor to get medicine =", options: ["*a prescription", "a painkiller", "a receipt"] },
    ]),
    box("Word of the day: under the weather", "**under the weather** 🌧️🤒 = a little sick, not feeling well.\n\n*I'm a bit under the weather today — I'll stay at home.*"),
  ]),

  homework(
    [
      gaps(
        "Complete.",
        "1. My head hurts. I've got a [headache]. 🤕\n2. I've got a sore [throat]. 🗣️\n3. My temperature is 38°. I've got a [temperature/fever]. 🌡️\n4. I need a [prescription] to buy this medicine. 📝\n5. I'm [allergic] to nuts. 🥜\n6. You should stay in bed and [rest]. 🛌",
      ),
      choose(
        "Choose.",
        "1. You [*should/should to] see a doctor.\n2. I've had a cold [*for/since] a week.\n3. You [*shouldn't/don't should] eat so much sugar.\n4. My eyes [*hurt/hurts].\n5. How long [*have you had/do you have] this cough?\n6. Take one tablet three [*times/time] a day.",
      ),
    ],
    "Homework: Vocabulary and phrases",
  ),
  homework(
    [
      trueFalse(
        "Read the medicine label. True or false?",
        [
          ["You can take this medicine for a headache.", true],
          ["Adults can take 6 tablets a day.", false],
          ["Children under 12 shouldn't take it.", true],
          ["You should take it with food.", true],
          ["You can take it for a month without a doctor.", false],
        ],
        {
          read: "💊 **PainAway 500 mg** — for headaches, toothaches and back pain.\n\n**Adults:** 1–2 tablets every 6 hours. Maximum 4 tablets a day.\n\n**Children under 12:** don't take this medicine.\n\nTake with food and a glass of water. 🍽️💧\n\nDon't take for more than 3 days. If the pain doesn't stop, see a doctor.",
        },
      ),
    ],
    "Homework: Reading",
  ),
  homework(
    [
      write("You're sick and you can't come to your English lesson tomorrow. Write a message to your teacher: what's the matter, how long you've had it, what the doctor said. (35+ words)", 35, {
        read: "*Example:* Hi! I'm sorry, but I can't come to the lesson tomorrow. I've got the flu — I've had a temperature since Tuesday. 🤒 The doctor said I should stay in bed for a few days. Can we move our lesson to next week? Thank you! 🙏",
      }),
      record("Record your answer: What do you do to stay healthy? What advice would you give a friend with a cold? (1 minute)", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
