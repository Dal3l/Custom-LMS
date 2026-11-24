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

// 12.1 I wish I could… — G: wish / if only + Past Simple (and could, were, would for annoying habits), hope vs wish; should have / shouldn't have + 3rd form for regrets. V: life choices (take a gap year, move abroad, lose touch, take a risk…). S: talk about wishes and regrets. Main format: an emoji "genie" match + a long reading (three generations, ~480 words) + a long listening (a late-night radio phone-in about regrets, ~2:45) + a short video (Daniel Pink, four kinds of regret).
// Facts checked: Daniel Pink's World Regret Survey — regrets from 16,000+ people in 105 countries, four core regrets (foundation, boldness, moral, connection; book "The Power of Regret", 2022). Research (Gilovich & Medvec): short term — we regret actions, long term — inactions. Live Aid at Wembley — 13 July 1985 (Tom's story from 2.3).
export default lesson("b1-12.1", "I wish I could…", () => [
  section("Warm-up: The genie game", [
    box(
      "Today you will…",
      "- talk about wishes: *I wish I could fly!* 🧞\n- talk about regrets: *I should have started earlier.* ⏪\n- find out what people regret most — at 17, 31 and 69",
    ),
    match("A genie heard six wishes. 🧞 Match the emojis and the wishes.", [
      ["🪽", "I wish I could fly to work."],
      ["🗣️🌍", "I wish I spoke ten languages."],
      ["⏰", "I wish I had more free time."],
      ["🎸", "I wish I could play the guitar like Brian May."],
      ["🏖️", "If only it were summer now!"],
      ["😴", "I wish I didn't have to get up so early."],
    ]),
    text(
      "Talk to your teacher.",
      "- Which of the six wishes is the closest to yours? Why?\n- What's one skill you wish you had? What would you do with it?\n- Think of a small thing that annoys you every day. Finish: *I wish…* 😄\n- Is it better to wish for things or to plan them?",
    ),
    tip("Don't explain the grammar yet — just let the student use *I wish I could / had…* naturally. Then ask: *Is it true now?* (No!) — that's the key idea of the lesson."),
  ]),

  section("Vocabulary: Life choices", [
    words("Life choices", [
      ["take a gap year", "🎒 take a year off between school and university (or work) to travel or work"],
      ["move abroad", "✈️ go to live in another country"],
      ["settle down", "🏡 start a calm life with a home, maybe a family"],
      ["change careers", "🔄 start a completely different kind of job"],
      ["take a risk", "🎲 do something that might go wrong", "Sometimes you have to take a risk."],
      ["miss a chance", "🚪 not use an opportunity when you have it"],
      ["lose touch with", "📵 stop being in contact with someone"],
      ["stay in touch with", "📱 keep being in contact"],
      ["follow your dreams", "🌠 try to do what you really want in life"],
      ["regret (n, v)", "😔 a sad feeling about something you did or didn't do", "I don't regret anything!"],
      ["give up", "🏳️ stop trying"],
      ["it's never too late", "⏳ you can still do it"],
    ]),
    match("Match.", [
      ["take a", "risk"],
      ["miss a", "chance"],
      ["lose touch", "with an old friend"],
      ["follow your", "dreams"],
      ["move", "abroad"],
      ["change", "careers"],
    ]),
    gaps(
      "Complete with a word from the list.",
      "1. After school, Mira took a [gap] year and worked in Spain. 🎒\n2. We lost [touch] after university — I don't even have her number.\n3. At forty, my uncle changed [careers] and became a chef. 👨‍🍳\n4. Don't [give] up — you're almost there!\n5. I don't [regret] moving abroad. It was the best decision of my life.\n6. Life is short — sometimes you have to take a [risk]. 🎲\n7. He wants to settle [down] and buy a house near his parents.\n8. I'm sixty and I've just started piano lessons. It's never too [late]! 🎹",
    ),
  ]),

  section("Reading: If only…", [
    tip("A long text (~480 words). First reading — 4 minutes: *Who has the biggest regret? Who is the happiest?* Then the tasks. Ask the student to underline every *wish / if only* and *should have* — the grammar of the next sections."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Daniyar spends his weekends in the mountains with friends.", false],
        ["Daniyar stopped learning Korean when he was fourteen.", true],
        ["Dana thinks her clients always want very creative covers.", false],
        ["Dana didn't go to Barcelona because she was afraid.", true],
        ["Saule says she has a lot of regrets.", false],
        ["Saule's sister lives in Canada.", true],
        ["In the long term, people usually regret the things they didn't do.", true],
      ],
      {
        read: [
          "## ✨ If only… Three generations, three wishes",
          "We asked three people of different ages a simple question: *What do you wish was different in your life — and what should you have done differently?* Their answers surprised us.",
          "**🎒 Daniyar, 17, school student.** \"Honestly? I wish I had more time. I'm studying for a scholarship in Seoul, so I have Korean classes every evening, and at weekends I do practice tests. I wish I could see my friends more often — they go to the mountains every Saturday, and I stay at home with my books. My grandma says I'm too serious. Maybe she's right! If only the exams were in summer — then I could relax in winter. Do I have any regrets? Just one: I should have started Korean earlier. At fourteen, I thought it was too difficult, so I gave up after two weeks. I shouldn't have listened to people who said it was impossible.\"",
          "**💼 Dana, 31, book designer.** \"I wish I didn't spend so many hours in front of a screen. I love designing book covers, but sometimes I look up and it's dark outside, and I haven't moved for six hours! I also wish my clients were a bit braver — they often want the same thing: a big title and a sunset. 😄 My biggest regret? I worked in a bank for years because it felt safe. When I was twenty-two, a friend invited me to work in a small design studio in Barcelona, and I said no because I was scared. I should have said yes. I shouldn't have worried so much about what other people would think. But it wasn't too late: last year I finally changed careers, and next summer I'm going to a design festival in Barcelona!\"",
          "**🌷 Saule, 69, retired teacher.** \"At my age, people expect me to have lots of regrets, but I don't really. Of course, I wish my knees worked like they used to! And I wish I lived closer to my sister — she moved to Canada, and I haven't seen her in person for thirty years. Thank goodness for video calls! I'm learning to use them, slowly. If only the buttons were bigger! My one real regret is that I didn't travel when I was young. We always said, 'Next year,' and next year never came. My advice? Don't wait for the perfect moment. And call your grandma!\"",
          "**🧠 What the experts say.** Researchers have found something interesting about regret. In the short term, people regret the things they did — an angry message, a bad decision, an expensive pair of shoes. But in the long term, most people regret the things they didn't do: the trip they never took, the course they never started, the friend they never called back. The writer Daniel Pink collected regrets from more than 16,000 people in 105 countries, and many of them sounded the same: *I should have been braver.*",
          "So maybe the best question isn't \"What do I wish was different?\" but \"What can I start today?\" 🌱",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Why doesn't Daniyar see his friends at weekends?", options: ["*He does practice tests.", "He works in a café.", "His friends live in Seoul."] },
      { q: "What does Dana wish about her job?", options: ["*that she spent less time in front of a screen", "that she earned more money", "that she worked in Barcelona now"] },
      { q: "What is Dana going to do next summer?", options: ["*go to a design festival in Barcelona", "move to Barcelona", "go back to the bank"] },
      { q: "Why does Saule like video calls?", options: ["*She can see her sister in Canada.", "She uses them for work.", "Daniyar lives far away."] },
      { q: "What is the main message of the last part?", options: ["*Don't wait — start what you really want to do.", "Never take risks.", "Regrets are always bad for you."] },
    ]),
    gaps(
      "Find words in the article.",
      "1. money that helps you study, given for good results: a [scholarship]\n2. stopped trying: gave [up]\n3. not afraid: [brave/braver]\n4. a pause in your working life: a career [break]\n5. the joints in the middle of your legs: [knees]\n6. a person who studies something scientifically: a [researcher/researchers]",
    ),
  ]),

  section("Grammar: I wish… / If only…", [
    quiz("Notice the rule 🔍 Look: “I wish I had more time.” · “If only the exams were in summer.” · “I wish I could see my friends more often.”", [
      { q: "Does Daniyar have more time now?", options: ["*No — it's a wish, not reality.", "Yes, he has a lot of time."] },
      { q: "After “I wish” for a wish about NOW we use…", options: ["*the past form (had, were, could)", "the present form (have, are, can)", "will"] },
      { q: "“If only…” is…", options: ["*a stronger, more emotional “I wish”", "a question", "a future plan"] },
    ]),
    table("wish"),
    choose(
      "Choose the right form.",
      "1. I'm so tired. I wish I [*didn't have/don't have] to work today. 😴\n2. It's raining again. If only it [*were/is] sunny!\n3. I wish I [*could/can] speak Korean like Daniyar.\n4. We live in a tiny flat. I wish we [*had/have] a garden. 🌳\n5. I [*hope/wish] you have a great holiday! (= it's possible)\n6. My brother always takes my charger. I wish he [*wouldn't/doesn't] do that!\n7. She wishes she [*lived/lives] closer to the sea. 🌊\n8. I [*hope/wish] I pass the exam tomorrow.",
    ),
    gaps(
      "Reality → wish. Complete.",
      "1. I don't have a car. → I wish I [had] a car. 🚗\n2. I can't swim. → I wish I [could] swim.\n3. I'm not good at drawing. → I wish I [were/was] good at drawing.\n4. My phone is so old. → I wish my phone [weren't/wasn't] so old.\n5. I live in the suburbs. → If only I [lived] in the center!\n6. I don't know her number. → I wish I [knew] her number. 📱\n7. My neighbor plays loud music at night. → I wish he [wouldn't] play it so loud!\n8. It's Monday. → If only it [were/was] Friday! 😄",
    ),
  ]),

  section("Video: Four kinds of regret", [
    video("Watch: Daniel Pink — the four regrets every human has.", "WLX7Xp5nISE"),
    match("After the video: match the type of regret and the example.", [
      ["foundation regret", "“If only I'd worked harder at school.” — basic choices about money, health, study"],
      ["boldness regret", "“If only I'd taken that chance.” — I wasn't brave enough"],
      ["moral regret", "“If only I'd done the right thing.” — I behaved badly"],
      ["connection regret", "“If only I'd called her.” — I lost touch with someone"],
    ]),
    text(
      "Talk about it.",
      "- Which type of regret is the most common for people of your age? Why?\n- Pink says regret can be useful. How can a regret help us?\n- Can you give an example of a boldness regret from a film or a book?",
    ),
    tip("The video uses *If only I'd…* (wish + past perfect) — that's B2 grammar, just recognize it. Students answer with *I should have…* — the next section."),
  ]),

  section("Grammar: should have — regrets", [
    table("should-have"),
    choose(
      "Choose.",
      "1. I failed the test. I [*should have/shouldn't have] studied more. 📚\n2. I'm so full! I [*shouldn't have/should have] eaten that third pizza. 🍕\n3. We missed the train. We [*should have left/should leave] earlier.\n4. She's angry with me. I [*shouldn't have said/shouldn't say] that.\n5. You look tired. You [*should go/should have gone] to bed now.\n6. It was a great party! You [*should have come/should come] — why didn't you?",
    ),
    drag(
      "Complete Dana's message to a friend.",
      "I'm so annoyed with myself! Yesterday the client asked for changes, and I [should] have said no, but I agreed. Then I worked until 2 a.m. I really [shouldn't] have stayed up so late. This morning I [overslept] and missed the meeting. I should have [set] two alarms! And I should have [eaten] breakfast — I was so hungry in the afternoon. I [wish] I had a normal job! 😅",
      ["must", "hope", "ate"],
    ),
    order("Make sentences.", [
      "I should have listened to you.",
      "We shouldn't have bought that car.",
      "You should have told me earlier.",
      "I wish I could speak Spanish.",
      "If only it were the weekend.",
    ]),
    sort("Wish about now or regret about the past? Sort the sentences. 🧩", {
      "💭 wish (now)": [
        "I wish I had a dog.",
        "If only I were taller.",
        "I wish I could cook.",
        "I wish it weren't so cold.",
      ],
      "⏪ regret (past)": [
        "I should have saved money.",
        "I shouldn't have shouted.",
        "We should have taken a taxi.",
        "He shouldn't have given up.",
      ],
    }),
    tip("Pronunciation: *should have* → /ʃʊdəv/, almost *shoulda*. Drill the sentences in the order task with weak *have*."),
  ]),

  section("Listening: Regrets? I've had a few", [
    tip("A long listening — about 2 minutes 45 seconds. A late-night radio phone-in: Tom, Leo, Laura and Kenji call in. First listen: *Whose regret is the funniest? Whose is the saddest?* Second listen: the tasks."),
    ...listening(
      "Listen to a late-night radio show. People call in to talk about their regrets.",
      "**Host:** Good evening, and welcome to Late Night Talk. Tonight's topic is regrets: big ones, small ones and funny ones. Our phone lines are open. Our first caller is Tom. Hi, Tom!\n\n**Tom:** Hi! Mine is a funny one, I think. In July 1985, I was at Wembley Stadium for Live Aid. I was sixteen, and my older brother took me. I saw Queen live, from near the front!\n\n**Host:** Lucky you! So, what's the regret?\n\n**Tom:** I threw my ticket away. Can you believe it? I should have kept it. Today, people sell those tickets online for a lot of money. But it's not about the money. I just wish I had something to show my kids. They think I'm making the whole story up!\n\n**Host:** Ha! Well, your memories are worth more than a ticket. Our next caller is Leo. Go ahead, Leo.\n\n**Leo:** Hi. Mine is more of a wish than a regret. I came back from Berlin last year, and I'm still living with my parents. I love them, but I wish I had my own place. Every time I practice the guitar, my dad knocks on the door and asks me to play more quietly. If only the walls were thicker!\n\n**Host:** So why don't you move out?\n\n**Leo:** Rent in our city is crazy. Honestly, I should have saved money when I was working in Berlin. Instead, I bought an expensive guitar, a new phone and far too many concert tickets. I shouldn't have spent it all so fast. Now I'm saving a bit every month — slowly.\n\n**Host:** Well, at least you have a good guitar! Next, we have Laura.\n\n**Laura:** Hello! I'm from Manchester, but I've been teaching English in Almaty for two years now. I love my job, but I wish I could speak the local languages well. I'm learning Russian and a bit of Kazakh, but it's slow, and in shops I still point at things! At school I studied French for two years, but I gave up. I should have kept going.\n\n**Host:** It's never too late, Laura!\n\n**Laura:** That's what my students tell me. So I've signed up for Kazakh classes in September. Better late than never!\n\n**Host:** Wonderful. One more caller before the news: Kenji.\n\n**Kenji:** Hi. My regret is small, but it still bothers me. Last year, my best friend from Tokyo got married, and I didn't go to the wedding. I was too busy with a project at work. I should have gone. The project finished, and nobody remembers it now. But I'll never see that wedding. Now, when I have to choose between work and people, I choose people.\n\n**Host:** That's great advice, Kenji. So, tonight Tom wishes he still had his ticket, Leo wishes he had his own flat, Laura wishes she could speak the local languages, and Kenji should have gone to the wedding. Remember, the experts say we regret the things we didn't do more than the things we did. So go and do them! Good night!",
    ),
    quiz("Listen and choose.", [
      { q: "What did Tom do with his Live Aid ticket?", options: ["*He threw it away.", "He sold it online.", "He gave it to his kids."] },
      { q: "Why does Leo's dad knock on the door?", options: ["*He wants Leo to play more quietly.", "He wants Leo to move out.", "Dinner is ready."] },
      { q: "What did Leo spend his Berlin money on?", options: ["*a guitar, a phone and concert tickets", "rent and food", "a car"] },
      { q: "Which classes has Laura signed up for?", options: ["*Kazakh", "French", "Spanish"] },
      { q: "Why didn't Kenji go to the wedding?", options: ["*He was busy with a project at work.", "He was ill.", "He didn't get an invitation."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Tom went to Live Aid with his brother.", true],
      ["Tom's kids believe his story.", false],
      ["Leo lives alone in his own flat.", false],
      ["Laura has been teaching in Almaty for two years.", true],
      ["Laura studied French at school for two years.", true],
      ["Kenji says he now chooses work over people.", false],
    ]),
    gaps(
      "Complete what they said. Listen again if you need.",
      "1. Tom: I should have [kept] it.\n2. Tom: I just wish I [had] something to show my kids.\n3. Leo: If only the walls [were] thicker!\n4. Leo: I shouldn't have [spent] it all so fast.\n5. Laura: I wish I [could] speak the local languages well.\n6. Kenji: I should have [gone].",
    ),
  ]),

  section("Let's talk: Wishes and regrets", [
    text(
      "The wish line 💬",
      "Answer your teacher's questions. Give reasons and examples.\n\n- What do you wish you could change about your daily routine?\n- Is there a skill you should have learned as a child? Why didn't you?\n- What's something you were afraid to do — but you're glad you did?\n- If a genie gave you ONE wish for your town, what would it be?\n- What advice would you give your younger self? *You should have… / You shouldn't have…*\n\nThen swap: you ask your teacher! 🔄",
    ),
    tip("Keep the topic positive — the student chooses how personal to be. Note 3 good *wish / should have* sentences and 2 mistakes (typical: *I wish I have…*, *I should had…*)."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "I wish I ___ more money.", options: ["*had", "have", "will have"] },
      { q: "If only I ___ sing!", options: ["*could", "can", "will"] },
      { q: "I'm late again. I ___ left earlier.", options: ["*should have", "should", "must"] },
      { q: "I ___ you feel better soon!", options: ["*hope", "wish", "regret"] },
    ]),
    box(
      "Phrase of the day: Regrets, I've had a few…",
      "🎤 *Regrets, I've had a few, but then again, too few to mention* — a famous line from the song **My Way**, sung by Frank Sinatra (1969).\n\n*Do you have regrets — or too few to mention?* 😉",
    ),
  ]),

  homework(
    [
      choose(
        "Choose.",
        "1. I wish I [*knew/know] the answer.\n2. If only we [*had/have] more time!\n3. I wish I [*could/can] drive.\n4. I [*hope/wish] it doesn't rain tomorrow.\n5. You [*should have/should] told me — I would have helped!\n6. I [*shouldn't have/should have] drunk so much coffee — now I can't sleep. ☕\n7. My sister wishes she [*lived/lives] in Paris.\n8. I wish my neighbors [*wouldn't/don't] park in front of my garage!",
      ),
      gaps(
        "Write the wish or the regret.",
        "1. I'm not on holiday. → I wish I [were/was] on holiday.\n2. I can't play chess. → I wish I [could] play chess. ♟️\n3. I didn't take my umbrella. → I should [have] taken my umbrella. ☔\n4. I ate too much. → I [shouldn't] have eaten so much.\n5. I don't have a bike. → If only I [had] a bike!\n6. I didn't call her back. → I should have [called] her back.",
      ),
      trueFalse("Correct or not?", [
        ["I wish I have a big house.", false],
        ["I wish I could fly.", true],
        ["I should have went to bed earlier.", false],
        ["You shouldn't have said that.", true],
        ["I wish you pass your exam!", false],
        ["If only it were Saturday!", true],
      ]),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      match("Match.", [
        ["take a gap", "year"],
        ["lose", "touch"],
        ["settle", "down"],
        ["take a", "risk"],
        ["miss a", "chance"],
        ["follow your", "dreams"],
      ]),
      write("Write a letter to your younger self (100+ words). Tell him or her what you wish you had or could do now, and what you should and shouldn't have done. End with your best advice.", 100, {
        read: "*Example:* Dear 12-year-old me, I wish I could tell you how fast time goes! Right now I wish I spoke English better, so please don't give up your lessons — you should have practiced more, and you shouldn't have been so afraid of mistakes. I wish I had more friends from school too. Stay in touch with them! …",
      }),
      record("Record a 1-minute message for the radio show “Late Night Talk”: one wish and one regret. 🎙️", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
