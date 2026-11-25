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

// 5.1 I needn't have bought it — G: needn't have done vs didn't need to; should have / ought to have / shouldn't have (regret and criticism); could have (a missed chance, criticism). V: money and spending (afford, overspend, a bargain, a rip-off, splash out, in debt, an impulse buy…); idioms (cost an arm and a leg, money doesn't grow on trees). S: talk about bad buys and money regrets. Main format: emoji money idioms + a long reading (why we regret what we buy, ~560 words) + TED-Ed video (how stores get us to spend more) + a long listening (a radio phone-in "Money regrets" with Daniyar, Dana and Leo, ~3:15). Video at home (BBC Learning English).
// Facts checked: Denis Diderot's essay "Regrets on Parting with My Old Dressing Gown" (1769) — after a friend gave him an elegant scarlet dressing gown, he replaced his old furniture one item after another; the anthropologist Grant McCracken called this the "Diderot effect" (1988); Leaf Van Boven and Thomas Gilovich, "To Do or to Have?" (2003) — people were happier with experiential purchases than with material ones; "hedonic adaptation" — people get used to new things quickly, so the pleasure fades.
export default lesson("b2-5.1", "I needn't have bought it", () => [
  section("Warm-up: Money in emojis", [
    box(
      "Today you will…",
      "- find out why we regret what we buy 🛍️\n- talk about past mistakes: needn't have, should have, could have 🤦\n- share your best bargains and worst buys 💸",
    ),
    gaps(
      "Guess the money idioms from the emojis. 💰",
      "1. 💰🌳 Money doesn't grow on [trees].\n2. 💪🦵 The new phone cost an arm and a [leg].\n3. ☔📅 Save some money for a rainy [day].\n4. ⏰💵 Hurry up! Time is [money].\n5. 🤏📒 We can't go out much — we're on a tight [budget].\n6. 🕳️👛 I can't come to the cinema — I'm completely [broke].\n7. 🔥👖 Money burns a hole in his [pocket] — he spends it all at once.\n8. 🤑🤑 They have three houses — they're rolling in [it].",
    ),
    text(
      "Talk to your teacher.",
      "- Which idiom describes you best? 😄\n- Are you a spender or a saver? Has it always been like that?\n- What's the best bargain you've ever found — and the worst buy you've ever made?",
    ),
    tip("Let the student guess first; give hints with gestures. Keep the questions light — today's grammar (*I shouldn't have bought it!*) will come naturally later."),
  ]),

  section("Vocabulary: Money and spending", [
    words("Money and spending", [
      ["afford", "💳 have enough money to buy something", "I can't afford a new car."],
      ["overspend", "📈 spend more than you planned or can afford"],
      ["a bargain", "🏷️ something bought for less than its real value"],
      ["a rip-off", "😠 something that costs much more than it should (informal)"],
      ["splash out (on)", "💦 spend a lot of money on something nice"],
      ["an impulse buy", "⚡ something you buy suddenly, without planning"],
      ["be in debt", "🧾 owe money to someone or to a bank"],
      ["a refund", "↩️ money you get back when you return something"],
      ["value for money", "⚖️ good quality for the price"],
      ["cut back (on)", "✂️ spend less on something"],
    ]),
    match("Match.", [
      ["I can't afford", "a holiday this year."],
      ["We splashed out", "on a really nice dinner."],
      ["The shop gave me", "a full refund."],
      ["Twenty dollars for a coffee? What", "a rip-off!"],
      ["I need to cut back", "on takeaways."],
      ["They borrowed too much, and now they're", "in debt."],
    ]),
    gaps(
      "Complete with a word from the list.",
      "1. Only $10 for these boots? What a [bargain]! 🥾\n2. I always [overspend] at the end of the month.\n3. That jacket was an [impulse] buy — I didn't need it at all.\n4. The hotel was cheap but clean — great value for [money].\n5. We can't [afford] to eat out every day.\n6. If you're not happy with it, you can ask for a [refund].",
    ),
  ]),

  section("Reading: Why do we regret what we buy?", [
    tip("A long text (~560 words). First reading — 5 minutes: *According to the article, what kind of spending makes us happier?* Then the tasks."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Diderot bought the scarlet dressing gown himself.", false],
        ["After the gift, Diderot replaced many of his other things.", true],
        ["The writer says shops are the only reason we buy things we don't need.", false],
        ["People usually feel the pleasure of a new thing for a long time.", false],
        ["In Van Boven and Gilovich's study, experiences made people happier than objects.", true],
        ["The writer suggests waiting before you buy something expensive.", true],
      ],
      {
        read: [
          "## 🛍️ Why do we regret what we buy?",
          "In 1769, the French writer Denis Diderot received a beautiful present from a friend: an elegant scarlet dressing gown. He loved it. But soon something strange happened. Next to his new gown, his old desk suddenly looked shabby. So he replaced it. Then the old chair looked wrong next to the new desk, and the curtains looked wrong next to the new chair. One by one, he replaced almost everything in his study — and ended up in debt and unhappy. He wrote an essay about it with a wonderful title: \"Regrets on Parting with My Old Dressing Gown\". In it, he admits that he had been the master of his old gown, but he had become a slave to the new one.",
          "Two hundred years later, the anthropologist Grant McCracken gave this pattern a name: the Diderot effect. One new purchase creates a chain of others. You buy a new phone, and suddenly you need a new case, new headphones and a faster charger. You buy one designer jacket, and your old shoes don't look good enough anymore.",
          "Most of us know the feeling that follows: buyer's remorse. We get home, open the box and think, \"I needn't have bought this.\" Or worse, \"I should have checked the price online.\" Why does it happen so often?",
          "Part of the answer is that shops are very good at making us spend. Music, lighting, \"only two left!\" signs and limited-time offers all push us to decide quickly. But the bigger reason is inside our heads. Psychologists talk about hedonic adaptation: we get used to new things surprisingly fast. The new car feels amazing for a few weeks; after that, it's just the car. The pleasure fades, but the payments don't.",
          "Not all spending is the same, though. In a well-known study in 2003, the psychologists Leaf Van Boven and Thomas Gilovich asked people to think about things they had bought to make themselves happy. Most said that experiences — a trip, a concert, a meal with friends — had made them happier than objects like clothes or gadgets. Experiences become part of who we are. We tell stories about them, we share them with other people, and, interestingly, they often get better in our memory. Nobody tells funny stories about their new fridge.",
          "So how can we avoid regrets? A few simple rules help. First, wait. Many people use a \"48-hour rule\" for anything expensive: if you still want it after two days, buy it. Second, think about the cost per use. An expensive winter coat that you wear every day for five years can be a better bargain than a cheap one that falls apart after a season. Third, ask yourself whether you're buying an object or an experience — and remember which one usually wins.",
          "And if you do make a mistake? Don't be too hard on yourself. Everyone has a drawer full of things they didn't need to buy. The important thing is to learn from it. As Diderot discovered, the most expensive purchase isn't always the one with the highest price. Sometimes it's the one that makes you want everything else. 💡",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Why did Diderot replace his old desk?", options: ["*It looked shabby next to the new gown.", "It was broken.", "His friend gave him a new one."] },
      { q: "What is the Diderot effect?", options: ["*One new purchase leads to many others.", "We forget what we bought.", "Gifts make people unhappy."] },
      { q: "What is hedonic adaptation?", options: ["*We quickly get used to new things.", "Shops change their music.", "We remember experiences better."] },
      { q: "Why do experiences often make us happier?", options: ["*They become part of who we are and we share them.", "They are always cheaper.", "They last longer than objects."] },
      { q: "What does “cost per use” mean?", options: ["*the price divided by the number of times you use something", "the price in a sale", "the cost of repairs"] },
    ]),
    gaps(
      "Find words in the article.",
      "1. bright red: [scarlet]\n2. old and in bad condition: [shabby]\n3. a feeling of being sorry after buying something: buyer's [remorse]\n4. becomes weaker and disappears: [fades]\n5. things you have bought: [purchases]\n6. breaks into pieces (of clothes, furniture): falls [apart]",
    ),
  ]),

  section("Grammar: I needn't have bought it", [
    quiz("Notice the rule 🔍 Look: “I needn't have bought this.” · “Everyone has a drawer full of things they didn't need to buy.” · “I should have checked the price online.”", [
      { q: "“I needn't have bought this” means…", options: ["*I bought it, but it wasn't necessary", "I didn't buy it because it wasn't necessary", "I had to buy it"] },
      { q: "“I should have checked the price” means…", options: ["*I didn't check it, and now I'm sorry", "I checked it", "I wasn't allowed to check it"] },
      { q: "After should / needn't / could we use…", options: ["*have + 3rd form", "had + 3rd form", "have + -ing"] },
    ]),
    table("past-modals"),
    choose(
      "Choose.",
      "1. I [*needn't have cooked/didn't need to cook] so much — only three people came. 🍲\n2. The train was late, so we [*didn't need to hurry/needn't hurry] after all.\n3. You [*should have told/should tell] me it was your birthday yesterday!\n4. We [*could have won/could win] the match — we just needed one more goal. ⚽\n5. I [*shouldn't have eaten/mustn't have eaten] that last piece of cake. 😩\n6. She [*ought to have asked/ought to ask] for a receipt.\n7. You [*could have hurt/should have hurt] yourself! Be careful!\n8. He [*didn't need to/needn't have] pay — his ticket was free, so he didn't.",
    ),
    gaps(
      "Complete with should have / shouldn't have / needn't have / could have + the verb.",
      "1. It was a rip-off. I [shouldn't have bought] it. (buy)\n2. You [needn't have brought] an umbrella — it's sunny! (bring)\n3. We [should have booked] earlier — now everything is full. (book)\n4. Why didn't you call me? I [could have helped] you. (help)\n5. I [should have checked] the size before I ordered. (check)\n6. You [needn't have paid] for me, but thank you! (pay)",
    ),
  ]),

  section("Grammar: Regrets and missed chances", [
    drag(
      "Complete the story.",
      "Last summer I splashed out on an expensive tent for a festival. I [needn't] have bought it — my friend had a huge one. I also [should] have checked the weather: it rained for three days. We [could] have stayed in a hotel, but we hadn't booked one, and they were all full. Luckily, I [didn't] need to carry the tent home — my friend had a car. In the end I sold the tent online. I [ought] to have kept the receipt — then I could have got a refund. Next time I'll [think] twice! ⛺",
      ["must", "would", "can"],
    ),
    sort("It happened or not? Sort the sentences. 🧩", {
      "✅ It happened (but it wasn't necessary)": [
        "I needn't have taken a taxi.",
        "You needn't have washed the dishes.",
        "We needn't have worried.",
        "She needn't have bought so much food.",
      ],
      "❌ It didn't happen (it wasn't necessary)": [
        "I didn't need to take a taxi.",
        "We didn't need to wait.",
        "He didn't need to pay.",
        "They didn't need to book.",
      ],
    }),
    order("Make sentences.", [
      "I should have saved more money.",
      "You needn't have bought me a present.",
      "We could have gone to the beach.",
      "She ought to have asked for a refund.",
      "They shouldn't have spent so much.",
    ]),
    tip("Say it right: in speech, *have* is weak: *should've* /ˈʃʊdəv/, *could've* /ˈkʊdəv/, *needn't've* /ˈniːdntəv/. Warn against writing *should of* — it's a common mistake even for native speakers! Stress for criticism: *You SHOULD have told me!*"),
  ]),

  section("Video: How shops make us spend", [
    video("Watch: TED-Ed — 5 sneaky ways stores get you to spend more.", "a_4eFB8pPwI"),
    text(
      "After the video: talk about it.",
      "- Which trick from the video works on you? Be honest! 😄\n- Have you ever bought something and thought later, “I needn't have bought that”? What made you buy it?\n- What could shops do to help customers spend wisely?",
    ),
    tip("Ask the student to use today's grammar about the video: *I should have noticed… I needn't have… The shop could have…* Connect with the reading: shops vs what happens in our heads."),
  ]),

  section("Listening: Money regrets", [
    tip("A long listening — about 3 minutes 15 seconds. A radio phone-in: listeners call in with their biggest money regrets — Daniyar, Dana and Leo. First listen: *Who regrets their purchase the most?* Second listen: the tasks."),
    ...listening(
      "Listen to a radio phone-in about money regrets.",
      "**Host:** Good evening, and welcome back to Money Talks. Tonight's topic: your biggest money regrets. The lines are open, and our first caller is Daniyar, who's calling from Seoul. Daniyar, go ahead.\n\n**Daniyar:** Hi! So, last year, in my first month in Korea, I bought a very expensive gaming chair. It was almost three hundred dollars — that's a lot for a student. The advert said it would change my life.\n\n**Host:** And did it?\n\n**Daniyar:** Well, it's a very comfortable chair. But my dormitory room is tiny, and the chair is enormous. I can't open my wardrobe properly. And the worst part: two weeks later, the university gave every new student a free desk chair. So I really needn't have bought it.\n\n**Host:** Oh no! What do you think you should have done?\n\n**Daniyar:** I should have waited a month and seen what I really needed. I could have used that money for a trip to Busan with my friends. They went without me, because I was broke.\n\n**Host:** A classic. Thank you, Daniyar. Our next caller is Dana. Dana, what's your story?\n\n**Dana:** Mine is the opposite, actually. I regret something I didn't buy.\n\n**Host:** Interesting! Tell us more.\n\n**Dana:** About five years ago, I was offered a really good design course in Barcelona. It cost a lot, and I decided I couldn't afford it. Instead, I put the money in the bank. I was being sensible, I thought. But the course would have taught me exactly the skills I needed. I spent the next two years learning them slowly on my own. I ought to have taken it. The money in the bank didn't grow much, but my career could have grown much faster.\n\n**Host:** So the expensive option would have been the bargain.\n\n**Dana:** Exactly. I didn't need to save that money — I needed to invest it in myself. Now, when something will help me learn, I don't think twice.\n\n**Host:** Wise words. And our last caller tonight is Leo. Leo, you're a musician, I believe?\n\n**Leo:** That's right. And my regret is very musical. A few years ago, I needed money for a new van for the band, so I sold my old electric guitar. It was a nineteen-seventies guitar my dad had given me. I sold it for six hundred dollars.\n\n**Host:** I think I can guess where this is going.\n\n**Leo:** Yes. Last month I saw the same model online for four thousand. But that's not even the worst part. The money doesn't matter so much. It was my dad's guitar. I shouldn't have sold it. I could have borrowed the van money from my bandmates — they offered! But I was too proud.\n\n**Host:** Have you tried to find it?\n\n**Leo:** I have! I found the man I sold it to. He's a nice guy, and he said he'd think about selling it back. So, fingers crossed.\n\n**Host:** Fingers crossed indeed. Let us know what happens, Leo. So, what have we learned tonight? Wait before you buy, sometimes the expensive choice is the smart one, and some things are worth more than money. That's all for tonight. Good night!",
    ),
    quiz("Listen and choose.", [
      { q: "Why does Daniyar regret buying the chair?", options: ["*The university gave him a free chair two weeks later.", "It broke after a week.", "It wasn't comfortable."] },
      { q: "What does Dana regret?", options: ["*not taking a design course", "buying a flat in Barcelona", "spending her savings"] },
      { q: "Why did Leo sell his guitar?", options: ["*to buy a van for the band", "to pay for a course", "because he didn't play it"] },
      { q: "Why does Leo regret it most?", options: ["*It was a present from his dad.", "He sold it too cheaply.", "He needed it for a concert."] },
      { q: "What is the host's final message?", options: ["*Wait, and remember that some things are worth more than money.", "Never buy expensive things.", "Always save your money."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Daniyar's chair cost almost three hundred dollars.", true],
      ["Daniyar went to Busan with his friends.", false],
      ["Dana thinks she was too careful with her money.", true],
      ["Leo sold the guitar for four thousand dollars.", false],
      ["Leo's bandmates offered to lend him money.", true],
      ["The man who bought the guitar refused to sell it back.", false],
    ]),
    gaps(
      "Complete the sentences from the phone-in.",
      "1. So I really [needn't] have bought it.\n2. I [should] have waited a month and seen what I really needed.\n3. I [could] have used that money for a trip to Busan.\n4. I [ought] to have taken it.\n5. I didn't [need] to save that money.\n6. I [shouldn't] have sold it.",
    ),
  ]),

  section("Let's talk: Bargains and bad buys", [
    text(
      "Your money story 💸",
      "Tell your teacher about **one bad buy** and **one great bargain** (or a time you didn't buy something and regret it).\n\n- What was it? How much did it cost?\n- Why did you buy it (or not)?\n- What should you have done? What could you have done instead?\n\nThen your teacher gives you advice — and you decide: **was it really a mistake?** 🤔\n\n*Useful:* I needn't have… · I didn't need to… · I should(n't) have… · I could have… · In the end…",
    ),
    tip("Model first with your own short story. Correct forms gently: *I should buy it* → *I should have bought it*; *I didn't need to buy it* (but I bought it) → *I needn't have bought it*. Push for 1–2 minutes of continuous speaking."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "I bought it, but it wasn't necessary: I ___ bought it.", options: ["*needn't have", "didn't need to", "mustn't have"] },
      { q: "You didn't tell me, and I'm upset: You ___ told me!", options: ["*should have", "could", "needn't have"] },
      { q: "Something that costs far too much is a ___.", options: ["*rip-off", "bargain", "refund"] },
      { q: "We had a great dinner — we really ___ out.", options: ["*splashed", "cut", "paid"] },
    ]),
    box(
      "Phrase of the day: buy cheap, buy twice",
      "🔁 If you buy something very cheap, it may break soon and you'll have to buy it again. Remember the winter coat in the reading?\n\n*Do you agree — or is cheap sometimes the smart choice?*",
    ),
  ]),

  homework(
    [
      video("Watch: BBC Learning English — ‘Didn't need to’ and ‘needn't have’.", "MT8_5vC54Xo"),
      choose(
        "Choose.",
        "1. I [*needn't have bought/didn't need to buy] milk — there were two bottles in the fridge.\n2. It was a holiday, so I [*didn't need to get up/needn't have got up] early. I slept till ten!\n3. You [*should have asked/should ask] me before you took my car yesterday.\n4. We [*could have taken/could take] the bus — it would have been cheaper.\n5. I [*shouldn't have said/didn't need to say] that. I'm sorry.\n6. They [*ought to have/ought] checked the price.",
      ),
      gaps(
        "Complete with the right form of the verb.",
        "1. I'm full. I shouldn't [have eaten] so much. (eat)\n2. You needn't [have cleaned] the kitchen — the cleaner comes tomorrow! (clean)\n3. We should [have left] earlier. Now we're late. (leave)\n4. She could [have become] a doctor, but she chose music. (become)\n5. He didn't need [to bring] anything, so he came with empty hands. (bring)\n6. You ought [to have told] us. (tell)",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      match("Match.", [
        ["afford", "have enough money for"],
        ["a bargain", "a very good price"],
        ["a rip-off", "far too expensive"],
        ["splash out", "spend a lot on something nice"],
        ["cut back", "spend less"],
        ["in debt", "owing money"],
      ]),
      write("Write a post for a website called “Money lessons” (140–190 words): the worst thing you've ever bought (or didn't buy). What happened? What should you have done? What have you learned? Use needn't have, should have and could have.", 140),
      record("Record a 1-minute answer: “Experiences or things — which make you happier? Give an example.” 🎙️", 75),
    ],
    "Homework: Writing and speaking",
  ),
]);
