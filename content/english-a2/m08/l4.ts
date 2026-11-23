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
  text,
  tip,
  trueFalse,
  write,
} from "../../kit";

// 8.4 Revision 7–8 — tasks with points in the A2 Key style (vocabulary, grammar, reading, listening, writing, speaking) + the project "A guide for newcomers".
export default lesson("a2-8.4", "Revision 7–8", () => [
  section("Warm-up: Advice auction", [
    box(
      "Today you will…",
      "- review modules 7 and 8: *just / already / yet, for / since, have to, must, should*\n- do tasks like in the **A2 Key** exam — and get points! ⭐\n- start your project: **A guide for newcomers** 🗺️",
    ),
    tip("The tasks check themselves and give points. Don't help during the tasks — help after: look at the mistakes together and repeat the rules."),
    text(
      "Game: Quick advice ⚡",
      "Your teacher reads a problem — give advice in 5 seconds! Then change roles.\n\n- I've just broken my phone screen. 📱💔\n- I haven't slept for two days. 😵\n- I've lived here for a month, but I haven't made any friends yet. 😔\n- My boss wants me to work every Saturday. 😩\n- I've had a headache since this morning. 🤕\n- I've already spent all my money — and it's the 10th! 💸",
    ),
    text(
      "Talk to your teacher.",
      "- What's new in your life since our last revision lesson? 🔄\n- What rules have you followed this week — and what rules have you broken? 😇😈",
    ),
  ]),

  section("Vocabulary", [
    match("Match.", [
      ["get", "a promotion"],
      ["keep in", "touch"],
      ["mute", "a chat"],
      ["a sore", "throat"],
      ["a night", "shift"],
      ["take off", "your shoes"],
    ]),
    sort("Sort the words.", {
      "🔄 Life events": ["get engaged", "move house", "graduate", "have a baby"],
      "🤒 Health": ["a cough", "a temperature", "a painkiller", "feel dizzy"],
      "📋 Rules and manners": ["a dress code", "a fine", "rude", "a tip"],
    }),
    gaps(
      "Write the word.",
      "1. Become friends again after an argument: make [up] 🤝\n2. You can't stop using it: [addicted] 🔗\n3. A paper from a doctor to get medicine: a [prescription] 📝\n4. Rules about clothes at work: a dress [code] 👔\n5. Have no money (informal): be [broke] 💸\n6. Make someone feel bad: [offend] 😠\n7. Time you spend looking at screens: screen [time] 📱\n8. A person who answers problems in a magazine: an agony [aunt] 💌",
    ),
  ]),

  section("Useful phrases", [
    quiz("What do you say? Choose.", [
      { q: "Your friend says: “I've just passed my driving test!”", options: ["*Congratulations!", "Oh no!", "Fingers crossed!"] },
      { q: "The doctor asks: “What's the matter?”", options: ["*I've got a sore throat.", "I'm fine, thanks.", "It's a matter."] },
      { q: "You want advice:", options: ["*What should I do?", "What I should do?", "What do I should?"] },
      { q: "Your friend has an exam tomorrow:", options: ["*Good luck! Fingers crossed!", "Congratulations!", "Get well soon!"] },
    ]),
  ]),

  section("Grammar", [
    choose(
      "Present Perfect: choose.",
      "1. I've [*just/yet] finished my homework.\n2. Have you seen the new series [*yet/already]?\n3. She's lived here [*since/for] 2020.\n4. We've known each other [*for/since] ten years.\n5. He hasn't called me [*yet/just].\n6. How long [*have you had/do you have] your car?\n7. They've [*already/yet] booked the hotel.\n8. I haven't seen her [*since/for] Monday.",
    ),
    choose(
      "Rules and advice: choose.",
      "1. You [*mustn't/don't have to] use your phone in the exam.\n2. It's Saturday — I [*don't have to/mustn't] work!\n3. You look tired. You [*should/should to] rest.\n4. She [*has to/have to] wear a uniform.\n5. You [*shouldn't/don't should] eat so late.\n6. [*Do/Does] he have to work tomorrow?\n7. Yesterday I [*had to/must] get up at 5.\n8. What [*should I/I should] do?",
    ),
    drag(
      "Complete the message.",
      "Hi Kate! I've [just] arrived in Tokyo! 🇯🇵 I've [already] visited a temple, but I haven't tried real ramen [yet]. Tomorrow! My hotel is great, but there's a strict rule: you [have] to take off your shoes in the room. And you [mustn't] talk on the phone on the train! I've been here [for] only one day, but I love it. You [should] come here one day! 😊",
      ["since", "don't", "must to"],
    ),
    trueFalse("Correct or wrong? Find the mistakes. 🔍", [
      ["I've lived here since three years.", false],
      ["Have you finished yet?", true],
      ["You should to see a doctor.", false],
      ["She doesn't have to work on Sundays.", true],
      ["I've already done it.", true],
      ["He must to wear a suit.", false],
    ]),
  ]),

  section("Reading: Notices", [
    tip("A2 Key, Reading Part 1 style: short notices and messages. What does each one say? Read carefully — small words matter!"),
    quiz("Read the notices and messages. Choose the right answer.", [
      { q: "🏊 “Pool: You must wear a swimming cap. Children under 8 must be with an adult.” —", options: ["*A 6-year-old can't swim alone.", "You don't have to wear a cap.", "Adults can't swim here."] },
      { q: "💬 “Dana — I've just left the office. I'll be at the café in 20 min. Order for me — a latte! — Mia” — Mia…", options: ["*wants Dana to order her a drink", "is already at the café", "has ordered a latte"] },
      { q: "🏥 “Dr. Ivanova is sick today. Her patients don't have to come in — we'll call you to move your appointment.” —", options: ["*Patients will get a call about a new time.", "Patients must come in today.", "Dr. Ivanova will call everyone."] },
      { q: "📚 “Library: Food and drinks are not allowed. You can bring water in a closed bottle.” —", options: ["*You can drink water from a bottle.", "You can eat a sandwich.", "Drinks are fine."] },
      { q: "🎫 “Museum: Free entry on the first Sunday of every month. You don't have to book.” —", options: ["*On that Sunday, you can just come in for free.", "You must book on Sundays.", "The museum is closed on Sundays."] },
    ]),
  ]),

  section("Reading: A new life", [
    quiz(
      "Read the text. Choose.",
      [
        { q: "How long has Aruzhan lived in Seoul?", options: ["*for eight months", "for eight years", "since last week"] },
        { q: "What did she find difficult at first?", options: ["*the food and the language", "the weather", "her job"] },
        { q: "What does she have to do at work?", options: ["*arrive before her boss", "wear a uniform", "work at night"] },
        { q: "What does she say newcomers should do?", options: ["*learn some Korean", "only eat Kazakh food", "never ask for help"] },
        { q: "What hasn't she done yet?", options: ["*visited Jeju Island", "learned the alphabet", "made friends"] },
      ],
      {
        read: "## 🇰🇷 My new life in Seoul — by Aruzhan\n\nI moved from Astana to Seoul eight months ago for a job in a design company. At first, everything was difficult. The food was very spicy, and I couldn't read anything — not even the bus stops! 😅\n\nNow I've learned the Korean alphabet, and I've made a lot of friends. Work culture here is strict: you have to arrive before your boss, and you shouldn't leave before him. But on Fridays, the whole team goes to dinner together, and it's really fun. 🍜\n\nMy advice for newcomers: you should learn some Korean — even 20 words help a lot. And you shouldn't be afraid to ask for help. People are very kind.\n\nI've already visited Busan twice, but I haven't been to Jeju Island yet. It's on my list for the summer! 🏝️",
      },
    ),
    trueFalse("Read again. True or false?", [
      ["Aruzhan works for a design company.", true],
      ["She could read Korean when she arrived.", false],
      ["She shouldn't leave work before her boss.", true],
      ["The team goes to dinner together on Mondays.", false],
      ["She has been to Busan.", true],
    ]),
  ]),

  section("Listening", [
    tip("A2 Key, Listening Part 4 style: a longer talk and questions. Read the questions first. Listen twice."),
    ...listening(
      "Listen. A guide talks to a group of new students on their first day at a language school in London.",
      "**Woman:** Good morning, everyone, and welcome to Westside Language School! I'm Laura, and I'm the student manager. You've just arrived, so let me tell you the most important things.\n\nFirst, lessons. Lessons start at nine o'clock every morning, and you have to be on time — if you're more than fifteen minutes late, you can't come into the classroom until the break. ⏰\n\nYou don't have to wear anything special — there's no uniform. But you mustn't eat in the classrooms. You can eat in the student café on the ground floor. The coffee is very good, and it's cheap!\n\nIn the afternoons, we have activities. You don't have to join them, but you really should — it's the best way to make friends and practice English. This week we're going to the British Museum on Wednesday, and on Friday there's a football match in the park. ⚽\n\nIf you feel sick, you should call the school office before nine. Don't just stay at home! The phone number is on your student card.\n\nFinally, the most important rule: in this building, you must speak English — even with friends from your country! 😄 OK, any questions? No? Then let's take a group photo!",
    ),
    quiz("Listen and choose.", [
      { q: "What's Laura's job?", options: ["*student manager", "teacher", "café manager"] },
      { q: "What happens if you're more than 15 minutes late?", options: ["*You have to wait until the break.", "You have to go home.", "You have to pay a fine."] },
      { q: "Where can students eat?", options: ["*in the student café", "in the classrooms", "only outside"] },
      { q: "Where are they going on Wednesday?", options: ["*to the British Museum", "to a football match", "to the park"] },
      { q: "What's the most important rule?", options: ["*Speak English in the building.", "Wear a uniform.", "Join all the activities."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Lessons start at 9 a.m.", true],
      ["Students have to wear a uniform.", false],
      ["Students have to join the afternoon activities.", false],
      ["If you're sick, you should call the office before nine.", true],
      ["The phone number is on the student card.", true],
    ]),
  ]),

  section("Writing", [
    box(
      "✍️ A2 Key, Writing Part 6: an email",
      "- **25+ words**\n- answer **all 3 questions**\n- start: *Hi …!* — end: *See you soon! / Write back!*",
    ),
    write(
      "Your English friend Sam wrote: “What's new in your life? Have you started anything new this month? Do you have any advice for me — I want to learn your language!” Write an email to Sam. (25+ words)",
      25,
    ),
    tip("Give points like the exam: all 3 questions? 25+ words? Present Perfect and should used correctly? 1 point for each ✅."),
  ]),

  section("Speaking", [
    text(
      "Speaking: talk for 1 minute about each topic 🗣️",
      "1. Your life updates: *What have you done recently? What haven't you done yet?*\n2. Someone important: *How long have you known them? How did you meet?*\n3. Rules and advice: *What rules do you have at work / school? What advice would you give a new student or colleague?*",
    ),
    order("Make questions.", [
      "How long have you lived here?",
      "Have you finished your project yet?",
      "Do you have to work on Saturdays?",
      "What should I do?",
      "Have you ever been to Japan?",
    ]),
    tip("Look at the points for all the tasks together. Find the most difficult part (for or since? yet or already? mustn't or don't have to?) and go back to it in the next lesson."),
  ]),

  section("Project: A guide for newcomers", [
    box(
      "Your project 🗺️",
      "Make a guide for a newcomer — a person who has just moved to your city, joined your school or started at your work:\n\n1. **Welcome!** A few words about the place: *I've lived / worked here for…*\n2. **Rules:** *You have to… You mustn't… You don't have to…* 📋\n3. **Advice:** *You should… You shouldn't…* 💡 (where to eat, how to get around, who to ask…)\n4. **Survival phrases:** 3–5 useful words or phrases in your language for them 🗣️\n\nMake a poster, a slide, a video or a page in your notebook. Start now with your teacher — finish it at home!",
    ),
    text("Plan your project. Talk to your teacher.", "- Who is your newcomer? A tourist, a new student, a new colleague? 🧳\n- What's the most important rule they need to know? 📋\n- What mistake do newcomers usually make here? 😅"),
  ]),

  homework(
    [
      write("Project: A guide for newcomers. Write a welcome, 3 rules, 3 pieces of advice and 3 useful phrases. Use have to, mustn't, don't have to, should, shouldn't. (80+ words)", 80, {
        read: "*Example:* Welcome to Almaty! I've lived here for 10 years, and I love it. 🍎 Rules: You have to take off your shoes when you visit a home. You mustn't cross the road at a red light — the police will give you a fine! You don't have to tip in cafés, but people often leave 10%. Advice: You should try the Green Bazaar. You should go to the mountains at the weekend. You shouldn't take a taxi in the evening — use an app! 🚕 Useful phrases: Salem! (Hi!) · Rakhmet! (Thank you!) · Qansha? (How much?)",
      }),
      record("Project video: present your guide for newcomers (1–2 minutes).", 120),
    ],
    "Homework: Project",
  ),
  homework(
    [
      trueFalse(
        "Read the message. True or false?",
        [
          ["Leo has just started a new job.", true],
          ["He has worked there for a month.", false],
          ["He doesn't have to wear a suit.", true],
          ["He has to start at exactly 9.", false],
          ["Leo hasn't made friends at work yet.", false],
        ],
        { read: "💬 **Leo:** Hi Mia! I've just finished my first week at the new job! 💼 It's great — I don't have to wear a suit, and I can start between 8 and 10. I've already made two friends: Sam and Aigerim. We have lunch together every day. 🍜 The only problem: I have to work late on Fridays. Have you found a new job yet?" },
      ),
      quiz("Choose.", [
        { q: "How long has Leo worked there?", options: ["*for a week", "for a month", "for a year"] },
        { q: "When can Leo start work?", options: ["*between 8 and 10", "at exactly 9", "at 11"] },
        { q: "What's the problem with the job?", options: ["*He has to work late on Fridays.", "He has to wear a suit.", "He has no friends."] },
        { q: "What does Leo ask Mia?", options: ["*if she has found a new job", "if she wants lunch", "if she knows Sam"] },
      ]),
    ],
    "Homework: Reading",
  ),
  homework(
    [
      gaps(
        "Review: complete.",
        "1. I've lived in this city [for] five years.\n2. Have you done your homework [yet]?\n3. She's [just] left — you missed her!\n4. You [mustn't/must not] smoke here. ⛔\n5. You [don't have to/do not have to] pay — it's free. 🆓\n6. You look sick. You [should] go home. 💡",
      ),
      choose(
        "Choose.",
        "1. I haven't seen him [*since/for] Christmas.\n2. We've [*already/yet] eaten.\n3. He [*has to/have to] go to the dentist.\n4. You [*shouldn't/should] drink coffee before bed.\n5. Has she called [*yet/already]?\n6. Students [*mustn't/don't have to] cheat.",
      ),
    ],
    "Homework: Review",
  ),
]);
