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

// 6.4 Revision 5–6 — points for every task, in the format of Cambridge B2 First: Use of English Parts 1–4, Reading Part 7 (multiple matching: four people who work in the media, ~560 words), Listening Part 3 (five speakers talk about a time they complained, ~3:10), Speaking Part 4 (discussion); grammar and vocabulary of modules 5–6. Project: a review of a film, series or podcast (140–190 words). Warm-up format: "find the mistake" (6.3 had a quiz, 6.2 a match).
// No new facts: the four media workers and the five speakers are invented. Characters: Zarina (podcaster) is one of the four people in Reading Part 7 — consistent with her podcast in earlier lessons.
export default lesson("b2-6.4", "Revision 5–6", () => [
  section("Warm-up: Find the mistake", [
    box(
      "Today you will…",
      "- check what you remember from modules 5–6 🧠\n- try Reading Part 7 and Listening Part 3 of B2 First 📝\n- plan your review of a film, series or podcast 🎬",
    ),
    trueFalse("Correct or not? Find the mistakes. 🔍", [
      ["I needn't have bought so much food — half of it is still in the fridge.", true],
      ["My boss made me to work on Saturday.", false],
      ["We aren't allowed to use our phones in the office.", true],
      ["He is said to have stolen the painting in 2003.", true],
      ["I cut my hair at the new salon — the hairdresser was great.", false],
      ["The bridge is building at the moment.", false],
      ["You should have told me about the party!", true],
      ["We were let to leave early on Friday.", false],
    ]),
    tip("Every task gives points. For each false sentence, the student corrects it: *made me work · had my hair cut · is being built · were allowed to*. Score guide: 80%+ excellent; 65–80% good — review the weak topics in the next warm-ups; under 65% — go back to the grammar sections of modules 5–6."),
  ]),

  section("Use of English Part 1: Choose the word", [
    tip("Exam tip: Part 1 tests collocations, phrasal verbs and fixed phrases. Read the whole sentence — often the word AFTER the gap decides the answer (*cut BACK on, go VIRAL*)."),
    choose(
      "Read the text and choose the best word for each gap.",
      "How a small bakery went viral 🥐\n\nWhen Asel opened her first bakery, she couldn't [*afford/pay/spend/cost] to advertise. So she decided to [*rely/count/trust/depend] on her customers instead. Every Friday, she posted a short video of the morning's baking. For months, nobody paid much [*attention/interest/notice/care]. Then one video, of a grandmother teaching her granddaughter to make bread, went [*viral/famous/popular/public]. Within a week, it had been [*watched/seen/looked/viewed] by two million people. Journalists began to call, and it was [*reported/told/spoken/said] that people were driving from other cities just to buy her bread. Asel had no [*choice/option/way/chance] but to hire three new bakers. \"I [*should/must/would/might] have started making videos years ago,\" she laughs.",
    ),
  ]),

  section("Use of English Part 2: One word", [
    tip("Exam tip: Part 2 tests grammar words — auxiliaries, prepositions, articles, linkers. Read the whole text first, then think: what KIND of word is missing?"),
    gaps(
      "Read the text and write ONE word in each gap.",
      "Do we still need newspapers? 📰\n\nNewspapers [are] being read by fewer people every year. Many young people say they get [all/most] their news from social media. However, journalists argue that news [has] to be checked carefully before it is published, and this costs money. It is [said] that a good newspaper is like a filter: it separates facts [from] rumors. Some newspapers now make readers pay [for] online articles, while others are supported by advertising. Whatever happens, we will always need someone [who/that] checks the facts — and readers who think [before] they share.",
    ),
  ]),

  section("Use of English Part 3: Word formation", [
    tip("Exam tip: decide first which part of speech you need (noun? adjective? adverb?), then check if it should be negative or plural."),
    gaps(
      "Read the sentences. Use the word in brackets to form a word that fits the gap.",
      "1. The advert was completely [misleading]. (lead)\n2. She's very [successful] in her job. (succeed)\n3. Customer [satisfaction] is the company's main goal. (satisfy)\n4. The repair was [surprisingly] cheap. (surprise)\n5. The story was [unbelievable] — but it was true! (believe)\n6. We need a [replacement] for the broken oven. (replace)\n7. The rumor turned out to be [false/untrue]. (truth)\n8. He made a [complaint] about the late delivery. (complain)",
    ),
  ]),

  section("Use of English Part 4: Say it differently", [
    tip("Exam tip: use the word in capitals WITHOUT changing it, and write 2–5 words. Keep the meaning exactly the same — check tense and negatives."),
    gaps(
      "Complete the second sentence so that it means the same as the first. Use the word in capitals and 2–5 words.",
      "1. It wasn't necessary to buy a new phone, but I did. (NEEDN'T) → I [needn't have bought] a new phone.\n2. It was a mistake not to check the price. (SHOULD) → I [should have checked] the price.\n3. A mechanic is repairing my car. (HAVING) → I [am having my car repaired/'m having my car repaired].\n4. People believe that the thief left the city. (BELIEVED) → The thief [is believed to have left] the city.\n5. We aren't allowed to eat in the classroom. (SUPPOSED) → We [aren't supposed to eat/are not supposed to eat] in the classroom.\n6. They forced him to apologize. (MADE) → He [was made to apologize].",
    ),
  ]),

  section("Reading Part 7: Four people in the media", [
    tip("Exam tip: read the questions first and underline the key words. Then read the texts and find the same idea in DIFFERENT words. The questions are not in the order of the texts. 8 minutes."),
    quiz(
      "Read about four people who work in the media. Which person…",
      [
        { q: "1. …was surprised by how much a short text earned?", options: ["*Ben", "Zarina", "Oliver", "Nadia"] },
        { q: "2. …says that being honest with followers matters more than money?", options: ["*Nadia", "Zarina", "Ben", "Oliver"] },
        { q: "3. …once had to correct a mistake in public?", options: ["*Oliver", "Ben", "Nadia", "Zarina"] },
        { q: "4. …started their job without any plan?", options: ["*Zarina", "Nadia", "Oliver", "Ben"] },
        { q: "5. …works mostly at night?", options: ["*Oliver", "Zarina", "Ben", "Nadia"] },
        { q: "6. …refused a well-paid offer?", options: ["*Nadia", "Ben", "Zarina", "Oliver"] },
        { q: "7. …enjoys hearing what strangers think about their work?", options: ["*Zarina", "Oliver", "Nadia", "Ben"] },
        { q: "8. …thinks the shortest texts are often the hardest to write?", options: ["*Ben", "Nadia", "Oliver", "Zarina"] },
      ],
      {
        read: [
          "## 🎙️ Working in the media: four stories",
          "**Zarina, podcaster.** I never planned to become a podcaster. During a long winter, I started recording conversations with friends just for fun, and I put them online without thinking much about it. A year later, thousands of people were listening every week. The best part of the job is the messages I get from listeners I've never met — people in other countries who tell me a story from the podcast helped them with a problem. The worst part? Editing. One hour of conversation can take me six hours to edit. I also have to find sponsors, answer emails and plan guests months in advance. Some weeks I feel more like a manager than a creative person. But when a guest says something nobody expected, I remember why I started.",
          "**Oliver, news editor.** I work on the website of a national newspaper, mostly on the night shift, from ten in the evening until six in the morning. That's when a lot of international news breaks. My job is to decide which stories go at the top of the page and to check that every fact has been confirmed by at least two sources. It's stressful. A few years ago, we published a story that turned out to be wrong, and I had to write an apology that was read by half a million people. I've checked everything three times ever since. Working at night has its advantages, though: the office is quiet, nobody interrupts you with meetings, and there's a special feeling when you're the first person to see the morning's news. My family, on the other hand, sees me mostly at weekends.",
          "**Ben, copywriter.** I write the words for adverts — slogans, posters, the text on the back of a cereal box. People think it's easy because the texts are so short, but in my experience it's the opposite. Anyone can write a page; writing five perfect words can take a week. My first big job was a slogan for a bank. It was six words long, and I was paid more for it than for a whole month in my previous job. I couldn't believe it. My mum still thinks I write birthday cards. The hardest part of the job is that clients often change their minds at the last minute, so a slogan you love can be thrown away the day before a campaign starts. You learn not to fall in love with your own words.",
          "**Nadia, influencer.** I post videos about cooking cheap, healthy food, and I have about 400,000 followers. People imagine influencers just take photos of themselves all day, but I spend most of my time planning, testing recipes and answering messages. Brands contact me every week. Last year, a fast-food company offered me more money than I earn in six months to promote their burgers. I said no. My followers trust me to tell them what I really think, and if I lose that trust, I've lost everything. I always mark paid posts clearly as adverts. I also film everything myself, in my own small kitchen, so my videos look like real life, not a TV show. Of course, there's a lot of pressure to post every day, and I've learned to take one day a week completely offline.",
        ].join("\n\n"),
      },
    ),
    gaps(
      "Find words in the texts.",
      "1. preparing a recording or text by cutting and changing it: [editing]\n2. the period of work from evening to morning: the night [shift]\n3. a statement saying sorry: an [apology]\n4. the job before this one: my [previous] job\n5. advertise, help to sell: [promote]\n6. people who follow someone online: [followers]",
    ),
  ]),

  section("Listening Part 3: Five speakers", [
    tip("Exam tip: you hear five people talking about the same topic. Read the options first. The speakers often mention ideas from several options — listen for the MAIN point. In the exam, there are eight options and three are not used; you hear everything twice."),
    ...listening(
      "Listen to five people talking about a time they complained about something.",
      "**Speaker 1:** I'm not usually someone who complains. But last summer, I booked a hotel online that promised a sea view, and when we arrived, our room looked straight at a car park. I was tired after a twelve-hour journey, and my first reaction was to get angry. Instead, I asked politely at reception, and the young man said there was nothing he could do. So I wrote an email that evening — calm, clear, with photos. By the next morning, we'd been moved to a beautiful room on the top floor, and they gave us free dinner too. I learned that a polite email can achieve far more than shouting at reception. And honestly, the view from that room was worth every word of the email.\n\n**Speaker 2:** My problem was with a phone company. Every month, my bill was higher than it should have been, and every time I called, I was told it had been fixed. I must have spent ten hours on hold, listening to the same terrible music. After six months, I'd had enough. I counted it up, and they owed me nearly two hundred dollars. In the end, I posted my story online, and it was shared thousands of times. The next day, the company called me. I got my money back — but honestly, I shouldn't have needed to go public. They should have dealt with it the first time.\n\n**Speaker 3:** I once complained about a meal in a restaurant, and I still feel terrible about it. The soup was cold, and I made a big fuss. The waiter apologized and took it away. Later, I found out it was his first day, the chef was ill, and he was doing the work of three people. He looked so stressed, and I just made it worse. I could have just asked him to warm it up. Now, before I complain, I always try to remember that there's a real person on the other side.\n\n**Speaker 4:** I bought an expensive coat that started falling apart after two weeks. The shop said I'd damaged it myself and refused to give me a refund. I hadn't even worn it in the rain. I was furious, but I didn't give up. I found out about my rights as a customer, wrote a formal letter mentioning the law, and sent a copy to a consumer organization. Three weeks later, I received a full refund and a letter of apology. It took time, but knowing my rights made all the difference.\n\n**Speaker 5:** At my old job, I was supposed to work until six, but my manager kept making us stay until eight, without paying overtime. Everyone complained to each other, but nobody said anything to him. Eventually, I suggested that we write to him together, all twelve of us. We listed the dates and the extra hours, and we suggested a solution instead of just complaining. It was signed by everyone, and we kept it very professional. He was a bit embarrassed, I think, but the extra hours stopped, and now we're paid for any overtime. Complaining together was so much more powerful than complaining alone.",
    ),
    quiz("Listen. What is the MAIN point each speaker makes?", [
      { q: "Speaker 1", options: ["*A calm written complaint worked better than arguing.", "Hotels never listen to customers.", "Going public is the best way to complain."] },
      { q: "Speaker 2", options: ["*The company should have solved the problem without public pressure.", "Complaining by phone always works.", "Phone bills are always wrong."] },
      { q: "Speaker 3", options: ["*They regret complaining without understanding the situation.", "Restaurants should always heat soup.", "Waiters should be trained better."] },
      { q: "Speaker 4", options: ["*Knowing their rights helped them win.", "They gave up after the shop refused.", "Expensive clothes are always good quality."] },
      { q: "Speaker 5", options: ["*Complaining as a group was more effective.", "They resigned from the job.", "Their manager refused to change."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Speaker 1 shouted at the man at reception.", false],
      ["The phone company owed Speaker 2 nearly two hundred dollars.", true],
      ["The waiter in Speaker 3's story was very experienced.", false],
      ["Speaker 4 received a full refund.", true],
      ["Twelve people signed the letter in Speaker 5's story.", true],
    ]),
    gaps(
      "Complete the sentences from the recording.",
      "1. A polite email can [achieve] far more than shouting at reception.\n2. I must have spent ten hours on [hold].\n3. They should have dealt [with] it the first time.\n4. The waiter apologized, and I made a big [fuss].\n5. Knowing my [rights] made all the difference.\n6. Complaining together was so much more [powerful] than complaining alone.",
    ),
  ]),

  section("Grammar check", [
    choose(
      "Choose the right answer.",
      "1. We [*needn't have taken/didn't need to take] umbrellas — it didn't rain, and we carried them all day.\n2. You [*could have/should] told me you were vegetarian!\n3. In my school, we [*weren't allowed/weren't let] to wear jeans.\n4. My parents made me [*practice/to practice] the piano every day.\n5. The new stadium [*is being built/is building] near the airport.\n6. The singer is said [*to have canceled/to cancel] the concert last night.\n7. I'm going to [*have my eyes tested/test my eyes] tomorrow.\n8. We got [*lost/losing] on the way to the festival.",
    ),
    drag(
      "Complete the story.",
      "Last month I had my wallet [stolen] on the metro. I should [have] been more careful! I went to the police, where I was made [to] fill in three forms. The thief is believed to have [taken] five other wallets the same day. Then I had to have my bank card [replaced]. Luckily, I [needn't] have worried about my documents — they were found in a bin the next day! 🍀",
      ["steal", "being", "didn't"],
    ),
    gaps(
      "Complete with the right form of the verb in brackets.",
      "1. I [should have called] you yesterday — sorry! (should / call)\n2. The results [are being checked] right now. (check)\n3. She [had her bag stolen] at the station. (have / her bag / steal)\n4. We [had no choice but to] cancel the trip. (have / no choice / but)\n5. The castle [is thought to have been] built in the 12th century. (think / build)\n6. You [needn't have cooked] — we've already eaten! (need / cook)",
    ),
  ]),

  section("Vocabulary check", [
    match("Match the words and the meanings.", [
      ["a bargain", "something cheap for its value"],
      ["a perk", "an extra advantage of a job"],
      ["a windfall", "unexpected money"],
      ["a refund", "money you get back"],
      ["a rumor", "a story that may not be true"],
      ["a slogan", "a short phrase used in advertising"],
    ]),
    sort("Sort the words. 🧩", {
      "💰 money": ["afford", "in debt", "make ends meet", "splash out"],
      "💼 work": ["be promoted", "resign", "overtime", "a dress code"],
      "📰 media": ["a headline", "go viral", "a commercial", "a source"],
    }),
    quiz("Choose the right word.", [
      { q: "I'm broke — I can't ___ a holiday this year.", options: ["*afford", "spend", "cost"] },
      { q: "He worked hard and was ___ to manager.", options: ["*promoted", "resigned", "laid off"] },
      { q: "The plumber gave us a ___ before starting the job.", options: ["*quote", "slogan", "refund"] },
      { q: "Don't share it until it's been ___-checked!", options: ["*fact", "true", "news"] },
    ]),
  ]),

  section("Speaking Part 4: Discussion", [
    text(
      "Discuss with your teacher 🗣️",
      "In B2 First Speaking Part 4, the examiner asks more general questions connected with Part 3. Give your opinion, reasons and examples — and react to what your partner says.\n\n- Do you think adverts should be banned from children's TV and apps? Why (not)?\n- How can young people check whether a news story is true?\n- Is it better to repair things or to buy new ones?\n- Should companies be obliged to offer a four-day week?\n- Does money make people happier, in your experience?",
    ),
    tip("About 4 minutes. Give feedback on: giving reasons (*because… for example… on the other hand…*), reacting (*That's a good point, but…*) and grammar from modules 5–6."),
  ]),

  section("Writing: plan your review", [
    order(
      "Put the parts of a good review in the right order.",
      [[
        "a title and an opening that catches the reader's attention",
        "basic information: what it is, who made it, what it's about (no spoilers!)",
        "what you liked, with examples",
        "what you didn't like or what could have been better",
        "a recommendation: who would enjoy it, and a final opinion",
      ].join("\n")],
      "lines",
    ),
    box(
      "✍️ Project: a review",
      "Write a **review** (140–190 words) of a film, series or podcast for a website called *“What to watch and listen to”*.\n\n**Include:**\n- a catchy title and opening\n- what it's about — without spoilers\n- what you liked and what could have been better (*should have…, could have…*)\n- passive forms (*It was filmed in… It is said to be…*)\n- a clear recommendation\n\n🎙️ Or record it as a 2-minute audio review.",
    ),
    tip("Brainstorm together: the student chooses something they've watched or listened to recently and tells you about it in 1 minute. Help them find vivid adjectives (*gripping, predictable, hilarious, overrated*)."),
  ]),

  section("Your result", [
    trueFalse("Check yourself. Can you do it? True or false? ✅", [
      ["I can talk about regrets with needn't have, should have and could have.", true],
      ["I can talk about rules with be supposed to, be allowed to, make and let.", true],
      ["I can use the passive in all tenses.", true],
      ["I can report news carefully: It is said that… He is believed to have…", true],
      ["I can use have / get something done.", true],
      ["I can write a formal email and take part in a debate.", true],
    ]),
    tip("This list is for reflection: if the student wants to say “false”, talk about it and plan review. Count the points from today's tasks together."),
  ]),

  homework(
    [
      choose(
        "Choose.",
        "1. I [*shouldn't have eaten/needn't eat] so much cake — I feel sick. 🍰\n2. The match [*was called off/called off] because of the rain.\n3. We were made [*to wait/wait] outside for an hour.\n4. The museum [*is being renovated/is renovating] this year.\n5. He's having [*his flat painted/painted his flat].\n6. The film is said [*to be/being] based on a true story.",
      ),
      gaps(
        "Word formation.",
        "1. The company offered [compensation] for the delay. (compensate)\n2. Her [explanation] was very clear. (explain)\n3. The ad was [effective] — sales doubled. (effect)\n4. That was a [ridiculous] price for a coffee. (ridicule)\n5. He's [financially] independent now. (finance)\n6. The rumor caused a lot of [confusion]. (confuse)",
      ),
      order("Make sentences.", [
        "I needn't have bought so many presents.",
        "We aren't allowed to park here.",
        "The painting is believed to have been stolen.",
        "I'm having my phone repaired.",
        "The new bridge is being built.",
      ]),
    ],
    "Homework: Review",
  ),
  homework(
    [
      write("Project: write your review of a film, series or podcast (140–190 words).", 140),
      record("Project (option): record your review as a 2-minute audio review. 🎙️", 120),
    ],
    "Homework: Project",
  ),
]);
