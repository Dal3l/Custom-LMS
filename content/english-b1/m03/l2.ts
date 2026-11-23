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

// 3.2 Getting used to it — G: be used to / get used to + -ing or a noun (vs used to + verb). V: moving abroad, culture shock. S: give advice to a newcomer. Main format: a long listening (a podcast: two people who moved to another country, ~2 min) + a short grammar video in class + a role-play.
export default lesson("b1-3.2", "Getting used to it", () => [
  section("Warm-up: A new place", [
    box(
      "Today you will…",
      "- talk about moving to a new country, city or job 🧳\n- use *be used to* and *get used to*: *I'm getting used to the cold!* 🥶\n- give advice to someone new in your city 🗺️",
    ),
    quiz("Culture quiz 🌍 Where is it normal?", [
      { q: "People usually take off their shoes when they enter a home.", options: ["*Japan", "the USA", "the UK"] },
      { q: "Cars drive on the left side of the road.", options: ["*the UK", "France", "the USA"] },
      { q: "A tip of 15–20% in restaurants is expected.", options: ["*the USA", "Japan", "China"] },
      { q: "The sauna is a big part of national culture.", options: ["*Finland", "Spain", "Brazil"] },
    ]),
    text(
      "Talk to your teacher.",
      "- Have you ever moved — to a new city, school, job or country? What was the hardest thing at first?\n- What would surprise a foreigner most about life in your country? 🤔\n- Imagine you move abroad tomorrow. What would you miss most — food, people, a place, a habit?",
    ),
    tip("If the student hasn't moved, talk about starting a new school or job — the feelings are the same. Share your own example of something that felt strange at first and became normal."),
  ]),

  section("Vocabulary: Moving abroad", [
    words("Moving abroad", [
      ["culture shock", "😵 the confused feeling in a new culture"],
      ["homesick", "🏠🥺 sad because you're far from home", "I felt homesick in my first month."],
      ["adapt (to)", "🦎 change to fit a new situation", "Kids adapt to new places quickly."],
      ["a local", "🧑 a person who lives in a place", "Ask the locals for the best cafés."],
      ["customs", "🎎 traditional ways of doing things in a country"],
      ["fit in", "🧩 feel accepted as part of a group", "It took me a year to fit in."],
      ["stand out", "🦒 be very different and easy to notice"],
      ["make friends (with)", "🤝 start a friendship"],
      ["deal with", "🛠️ handle a problem", "How do you deal with stress?"],
      ["paperwork", "📄 documents you must fill in"],
      ["the cost of living", "💸 how much money you need for normal life"],
      ["take it for granted", "🤷 not notice how good something is because you always have it"],
    ]),
    match("Match.", [
      ["feel", "homesick"],
      ["experience", "culture shock"],
      ["adapt", "to a new life"],
      ["fit", "in at school"],
      ["deal", "with paperwork"],
      ["make friends", "with the locals"],
    ]),
    quiz("Choose the right word.", [
      { q: "Everything was new and confusing. It was real ___.", options: ["*culture shock", "homesick", "customs"] },
      { q: "With bright pink hair, she really ___ out at the office.", options: ["*stood", "fitted", "dealt"] },
      { q: "It took me six months to ___ in at my new job.", options: ["*fit", "stand", "deal"] },
      { q: "The ___ of living in this city is very high.", options: ["*cost", "price", "paperwork"] },
    ]),
    gaps(
      "Complete with a word from the list above.",
      "1. In my first weeks in Seoul I felt very [homesick] — I missed my mom's cooking. 🥟\n2. Everything was new and confusing — it was real culture [shock].\n3. Children usually [adapt] to a new country faster than adults.\n4. With my blond hair, I really stood [out] in Tokyo! 👱\n5. The best way to learn about a city is to talk to the [locals].\n6. It took me months to [deal] with all the visa paperwork. 📄\n7. The cost of [living] in London is very high.\n8. I'd always taken hot water for [granted] — until it stopped working!",
    ),
  ]),

  section("Listening: Far from home", [
    tip("A long listening — about 2 minutes. First listen: *Where did each person move? Are they happy there now?* Second listen: the tasks. Then show the script and underline every *used to / be used to / get used to*."),
    ...listening(
      "Listen to a podcast. Kenji and Laura talk about moving to a new country.",
      "**Host:** Welcome to \"New Here\", the podcast about starting a new life. Today I'm talking to two people who moved to Almaty. Kenji, you came from Tokyo, right?\n\n**Kenji:** That's right. I moved here three years ago for a job in an IT company.\n\n**Host:** What was the biggest shock?\n\n**Kenji:** Honestly? The hospitality. In Japan, people are very polite, but they don't usually invite you home quickly. Here, my colleague invited me to his family's house in my first week! There was so much food — I'm not used to eating that much. His mother kept putting more meat on my plate. 😅\n\n**Host:** And now?\n\n**Kenji:** Now I'm used to it. In fact, I've gained five kilos! The other thing was the winter. Tokyo winters are mild, so I wasn't used to minus twenty. The first year was hard, but I bought a good coat and I've got used to it.\n\n**Host:** Laura, you're from Manchester. How long have you been here?\n\n**Laura:** About eighteen months. I teach English at a university.\n\n**Host:** What did you find difficult?\n\n**Laura:** The language, of course. I'm learning Russian and a bit of Kazakh, but it's slow. In the beginning I used to point at things in shops because I didn't know the words! And traffic — in England we drive on the left, so I had to get used to cars coming from the other direction. I nearly got hit twice! 🚗\n\n**Host:** Did you feel homesick?\n\n**Laura:** Oh yes. In my first winter I used to call my mum every single day. I missed proper tea, and I missed people saying \"sorry\" all the time. 😄 But now I've made friends with some locals — we go hiking in the mountains every weekend — and I really feel like I fit in.\n\n**Host:** What advice would you give to someone who's just arrived?\n\n**Kenji:** Say yes to every invitation, even if you're tired. That's how you make friends.\n\n**Laura:** And be patient with yourself. It takes time to get used to a new life. For me, it took about six months before I stopped feeling like a tourist.\n\n**Host:** Thank you both!",
    ),
    gaps(
      "Complete what they said. Listen again if you need.",
      "1. Kenji: I'm not used to [eating] that much.\n2. Kenji: I wasn't used to minus [twenty].\n3. Kenji: I bought a good coat and I've got [used] to it.\n4. Laura: In the beginning I used to [point] at things in shops.\n5. Laura: I had to get used to cars coming from the other [direction].\n6. Laura: I really feel like I fit [in].",
    ),
    quiz("Listen and choose.", [
      { q: "Why did Kenji move to Almaty?", options: ["*for a job in IT", "to study", "to learn Russian"] },
      { q: "What surprised Kenji most?", options: ["*how quickly people invited him home", "the price of food", "the traffic"] },
      { q: "What does Laura do in Almaty?", options: ["*She teaches English at a university.", "She works in IT.", "She's a tour guide."] },
      { q: "Why was traffic difficult for Laura?", options: ["*In England people drive on the left.", "There are no traffic lights.", "She can't drive."] },
      { q: "How long did it take Laura to stop feeling like a tourist?", options: ["*about six months", "about eighteen months", "a few weeks"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Kenji wasn't used to eating so much food.", true],
      ["Winters in Tokyo are colder than in Almaty.", false],
      ["Laura used to point at things in shops.", true],
      ["Laura called her mum once a week in her first winter.", false],
      ["Laura goes hiking with local friends now.", true],
      ["Kenji's advice is to stay at home when you're tired.", false],
    ]),
  ]),

  section("Grammar: be used to and get used to", [
    quiz("Notice the rule 🔍 Look: “I'm not used to eating that much.” “I've got used to it.” “I used to point at things in shops.”", [
      { q: "“I'm used to it” means…", options: ["*It's normal for me now, not strange.", "I did it in the past.", "I use it."] },
      { q: "“get used to” means…", options: ["*the process of it becoming normal", "a finished past habit", "a future plan"] },
      { q: "After be / get used to we use…", options: ["*-ing or a noun: used to eating, used to the cold", "the base verb: used to eat", "the past: used to ate"] },
    ]),
    video("Watch: getting used to… used to — a mini lesson.", "OI1Qyt9wRto"),
    table("be-get-used-to"),
    choose(
      "Choose the right form.",
      "1. I've lived here for years, so I'm used to [*the noise/hear the noise].\n2. She [*isn't used to/doesn't used to] working at night.\n3. It took me a month to [*get used to/be used to use] my new phone.\n4. I [*used to/am used to] live in Canada, but I moved back home.\n5. Are you [*used to/use to] driving on the right yet?\n6. He's slowly [*getting used to/used to getting] his new job.\n7. We [*used to/are used to] have a dog when I was a kid.\n8. I'll never get used to [*waking/wake] up at 5 a.m.! ⏰",
    ),
    gaps(
      "Complete with the right form of used to, be used to or get used to.",
      "1. When I was a child, I [used to] eat sweets every day. 🍬\n2. I've worked in a hospital for ten years, so I [am used to/'m used to] seeing blood.\n3. It's my first week in my new job. I'm still [getting used to] it.\n4. Kenji [wasn't used to/was not used to] the cold when he first came.\n5. Don't worry — you'll [get used to] the food soon.\n6. My dad [used to] smoke, but he stopped five years ago.\n7. I can't [get used to] my new glasses — everything looks strange! 👓\n8. Laura [is used to/'s used to] the traffic now.",
    ),
    sort("Which meaning? Sort. 🔄", {
      "⏪ past habit (used to + verb)": ["I used to play the violin.", "We used to live by the sea.", "She used to be shy."],
      "✅ normal for me (be used to + -ing)": ["I'm used to working late.", "He's used to the cold.", "We're used to living in a big city."],
      "🔄 becoming normal (get used to + -ing)": ["I'm getting used to my new job.", "You'll get used to it.", "It took me a year to get used to the food."],
    }),
    drag(
      "Complete the conversation.",
      "A: How's your new job in Dubai?\nB: Good, but I'm still getting [used] to the heat! I'm not used to [working] when it's 45 degrees. 🥵\nA: And the food?\nB: Oh, I [got] used to that very quickly — I love it! I [used] to cook every day at home, but here I eat out a lot.\nA: Do you feel homesick?\nB: Sometimes. I'm used [to] seeing my family every weekend. But I'll [get] used to it.",
      ["use", "work", "be", "for"],
    ),
    order("Make sentences.", [
      "I'm not used to getting up so early.",
      "She's getting used to her new school.",
      "It took me months to get used to the cold.",
      "Are you used to driving in the city?",
      "We used to live in a small flat.",
    ]),
  ]),

  section("Let's talk: Welcome to my city", [
    text(
      "Role-play: The newcomer 🧳",
      "Your teacher has just moved to your city from another country. They're a bit homesick and confused.\n\n**Your teacher asks:**\n- What will be hard to get used to here? (weather, food, transport, customs…)\n- What are people here used to that might surprise me?\n- How can I make friends with locals?\n- Where should I go first?\n\n**Help them!** *You'll soon get used to… People here are used to… Don't worry, it took me… too. You should…*",
    ),
    text(
      "Talk to your teacher.",
      "- What's something you've never got used to, even after years? (an alarm clock, a neighbor, the winter…) 😅\n- What do people in your country take for granted that might be a luxury somewhere else?\n- Is it better to adapt completely to a new culture or to keep your own customs? Why?",
    ),
    tip("In the role-play, be a slightly difficult newcomer — complain a bit (*Why is everyone so…?*). The student must reassure you and give practical tips. Then swap: the student is a newcomer in YOUR (imagined) country."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "I'm not used to ___ so much.", options: ["*eating", "eat", "ate"] },
      { q: "It took me a year to ___ the climate.", options: ["*get used to", "use to", "used"] },
      { q: "sad because you're far from home =", options: ["*homesick", "nostalgic", "stubborn"] },
      { q: "feel accepted in a group =", options: ["*fit in", "stand out", "turn back"] },
    ]),
    box(
      "Phrase of the day: When in Rome…",
      "🏛️ **When in Rome, do as the Romans do.** = When you're in a new place, follow the local customs.\n\n*In Japan, people take off their shoes at home — so I do it too. When in Rome!*",
    ),
  ]),

  homework(
    [
      choose(
        "Choose.",
        "1. I'm used to [*living/live] alone.\n2. My grandpa [*used to/is used to] be a pilot.\n3. You'll soon [*get used to/be used] the new system.\n4. She [*isn't used to/didn't use to] speaking in public — she's really nervous.\n5. Have you [*got used to/used to] your new flat yet?\n6. We [*used to/are used to] go camping every summer.",
      ),
      drag(
        "Complete Laura's message to her mum.",
        "Hi Mum! I'm finally [getting] used to life here. I [used] to feel homesick every day, but now it's much better. I'm used to [walking] in the snow, and I'm even getting used to [the] food — I love the soup here! 🍲 The only thing I can't get used to [is] the traffic. People here are [used] to driving fast! Love, Laura",
        ["get", "walk", "use", "are"],
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      gaps(
        "Complete.",
        "1. I felt [homesick] in my first month abroad.\n2. It took her a while to fit [in] at her new school.\n3. Kids [adapt] quickly to new places.\n4. Ask the [locals] where to eat.\n5. We often take clean water for [granted].\n6. How do you deal [with] stress?",
      ),
      write("A friend from another country is moving to your city. Write an email (100+ words): what will be easy and difficult to get used to, what people here are used to, and two pieces of advice.", 100, {
        read: "*Example:* Hi Mia! I'm so happy you're moving to Astana! 😊 At first, you'll have to get used to the wind — it's really strong in winter, so buy a good hat. People here are used to the cold, so nobody stays at home! You'll also need to get used to eating a lot — when someone invites you, they'll give you SO much food… My advice: say yes to every invitation, and learn a few words of Kazakh — people will love it…",
      }),
      record("Record 1 minute: What's something that was difficult for you at first but you're used to now? How long did it take to get used to it? 🎤", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
