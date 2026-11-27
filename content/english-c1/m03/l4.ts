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

// 3.4 Practical: Negotiating — functional language: exploring interests, proposing (What if we…? We could consider… provided that…), conceding with a condition (If you can…, then we can…), saying no politely, gaining time, summarizing and closing. Role play "a negotiation". Main format: what's the best move? + a column (~730 words) + a long listening (Asel and Madina negotiate the design for the new bakery, ~3:45) + role play; a TED video at home.
// Facts checked: Roger Fisher and William Ury, "Getting to Yes" (1981, Harvard Negotiation Project) — separate the people from the problem; focus on interests, not positions; invent options for mutual gain; the story of two sisters who argue over an orange (one wants the juice, the other the peel); BATNA — "best alternative to a negotiated agreement".
// Warm-up format: quiz (what's the best move?) — after the game in 3.3. Characters: Asel (Asel's Bakery — the second branch), Madina (her design studio).
export default lesson("c1-3.4", "Practical: Negotiating", () => [
  section("Warm-up: What's the best move?", [
    box(
      "Today you will…",
      "- find out why the best negotiators ask “why?” before they say “no” 🍊\n- propose, concede and say no — politely: *What if we…? We could consider… provided that…* 🤝\n- negotiate a real deal in a role play 💼",
    ),
    quiz("You're negotiating. What's the best move? 🤔", [
      { q: "A client says your price is too high. You…", options: ["*ask what matters most to them in the project", "immediately offer a 30% discount", "say “Take it or leave it.”"] },
      { q: "The other side makes an offer that's far too low. You…", options: ["*stay calm and ask how they arrived at that number", "laugh and leave the room", "accept it to be polite"] },
      { q: "You want to give something away. You…", options: ["*give it in exchange for something: “If you…, then we…”", "give it for free to show goodwill", "never give anything away"] },
      { q: "At the end of the meeting, you…", options: ["*summarize what you agreed and put it in writing", "shake hands and hope everyone remembers", "start a new topic"] },
    ]),
    text(
      "Talk to your teacher.",
      "- Do you enjoy negotiating, or do you avoid it? Why?\n- Where do people negotiate in your culture — markets, salaries, family decisions?\n- Tell me about a time you got a good deal — or a bad one.",
    ),
    tip("The “correct” answers reflect principled negotiation (the reading explains it). Accept other views if the student argues them well — in some markets, walking away is a classic move! Note how the student makes and refuses requests now."),
  ]),

  section("Reading: The orange and the oven", [
    tip("A column (~730 words). First reading — 5 minutes: *What's the difference between a position and an interest?* Then the tasks."),
    trueFalse(
      "Read the column. True or false?",
      [
        ["Asel used to think negotiation meant winning against the other side.", true],
        ["In the orange story, both sisters wanted the juice.", false],
        ["A position is what you say you want; an interest is why you want it.", true],
        ["The oven supplier refused to change anything.", false],
        ["BATNA means your best option if you don't reach an agreement.", true],
        ["Asel thinks you should never say no in a negotiation.", false],
      ],
      {
        read: [
          "## 🍊 The orange and the oven",
          "*by Asel, owner of Asel's Bakery*",
          "When I worked at the bank, I thought I knew how to negotiate. You decided what you wanted, you asked for a bit more, you refused to move until the other side moved first, and eventually you met somewhere in the middle. Negotiation was a polite kind of arm-wrestling. Whoever had stronger nerves won.",
          "Then I opened a bakery, and I discovered that arm-wrestling with your flour supplier is not a long-term strategy. You need him next month, and the month after that. If you \"win\" every negotiation, you soon have nobody left to negotiate with.",
          "The book that changed my thinking was *Getting to Yes*, written by Roger Fisher and William Ury of the Harvard Negotiation Project and first published in 1981. It contains a simple story that I now tell everyone. Two sisters are arguing over an orange. After a long fight, they agree to cut it in half. One sister squeezes her half and drinks the juice, throwing away the peel. The other sister throws away the fruit and uses the peel to bake a cake. Each of them could have had twice as much of what she actually needed — if only they had asked each other why they wanted the orange.",
          "This is the difference between a *position* and an *interest*. A position is what you say you want: \"I want the orange.\" An interest is the reason behind it: \"I need the peel for a cake.\" Positions often clash; interests frequently don't. The authors argue that the most useful question in any negotiation is not \"How much?\" but \"Why?\"",
          "I tested this the following year, when I needed a new oven. The supplier's price was far above my budget, and his position was clear: no discount. My first instinct was the old bank one — push, threaten to walk away, wait. Instead, I asked what mattered most to him. It turned out that he was less worried about the price than about the timing. It was the end of the season, his warehouse was full, and he needed the oven gone before a new delivery arrived. My interest was different: I didn't need the oven for another two months, but I couldn't afford to pay for it all at once.",
          "Once we understood each other's interests, the solution was almost obvious. I agreed to take the oven immediately and store it in my back room, which solved his problem. In return, he agreed that I could pay in three parts over three months, which solved mine. We didn't meet in the middle. We found something better than the middle.",
          "The book contains another idea that I find equally useful: your BATNA, or *best alternative to a negotiated agreement*. In plain English: what will you do if this deal doesn't happen? If you know your alternative — another supplier, a second-hand oven, waiting until spring — you can negotiate calmly, because you are not desperate. If you don't know it, you will probably agree to almost anything just to make the discomfort stop. Before every important conversation, I now write my BATNA on a small piece of paper and keep it in my pocket. Nobody else sees it. It simply reminds me that I have a choice.",
          "This doesn't mean you should never say no. Some offers are simply unacceptable, and it is better to say so clearly than to agree and regret it later. But there are ways of saying no that keep the door open. \"I'm afraid that's not something we can do\" is firm. \"That would be difficult for us, unless…\" is firm and creative. The second one often leads somewhere.",
          "I have also learned to be careful with concessions. In my first year, I gave discounts to almost anyone who asked nicely, and my regular customers started to expect them. Now I try to follow one rule: never give something for nothing. If a café wants a lower price, I ask for a bigger regular order. If a customer wants a cake by tomorrow, I'm happy to try — provided they pay for the extra hours.",
          "Negotiation, I've come to believe, is less about winning than about understanding. The best deals I've made were the ones where both of us left feeling slightly surprised at how well it had gone. That is a very different feeling from winning at arm-wrestling. It lasts much longer, too. 🥐",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Why is “winning” every negotiation a bad strategy for a bakery?", options: ["*You need long-term relationships with the same people.", "Bakeries make too little money.", "Suppliers never negotiate."] },
      { q: "What is the lesson of the orange story?", options: ["*Asking why people want something can lead to a better solution.", "Always cut things in half.", "Sisters shouldn't share."] },
      { q: "What was the oven supplier's real interest?", options: ["*getting the oven out of his warehouse quickly", "a higher price", "a long-term contract"] },
      { q: "Why does Asel keep her BATNA in her pocket?", options: ["*to remind herself she has a choice and needn't be desperate", "to show it to the other side", "to remember the price"] },
    ]),
    gaps(
      "Find words and phrases in the column.",
      "1. a contest where two people try to push each other's arm down: [arm-wrestling]\n2. press fruit to get the juice: [squeeze]\n3. come into conflict, disagree strongly: [clash]\n4. a building for storing goods: a [warehouse]\n5. things you give up to reach an agreement: [concessions]\n6. impossible to accept: [unacceptable]",
    ),
  ]),

  section("Language: Firm but friendly", [
    table("negotiating"),
    sort("Too aggressive, or firm but friendly? Sort. 🧩", {
      "💥 too aggressive": ["That's ridiculous.", "Take it or leave it.", "You must lower your price.", "We won't pay that.", "I want a decision now."],
      "🤝 firm but friendly": ["I'm afraid that's not something we can agree to.", "That would be difficult for us, unless…", "We could consider a lower price, provided that…", "Let me think about that and come back to you.", "What if we looked at the timing instead?"],
    }),
    choose(
      "Choose the most natural option.",
      "1. What [*if we/if will we] extended the deadline by a week?\n2. We could [*consider/considering] a discount, provided that you order more.\n3. [*If you can/If you could will] pay in advance, then we can lower the price.\n4. I'm [*afraid/scared] that's not something we can agree to.\n5. Let me [*think/thinking] about that and come back to you.\n6. So, just to [*recap/recapping]: we deliver on Monday, and you pay within 30 days.",
    ),
    gaps(
      "Make the sentences more diplomatic. Complete.",
      "1. Your price is too high. → I'm [afraid] your price is a little above our budget.\n2. Lower the price. → [What] if you lowered the price slightly?\n3. We'll give a discount only if you order more. → We could [consider] a discount, provided that you order more.\n4. No. → That would be [difficult] for us, unless we change the timing.\n5. I need to think. → Let me [check] with my team and come back to you.\n6. So we agree. → So, just to [recap/summarize/sum up]: we've agreed on three things.",
    ),
    order("Make sentences.", [
      "What matters most to you in this deal?",
      "We could be flexible on the price, as long as you pay in advance.",
      "That's not something we can agree to, I'm afraid.",
      "Shall we put that in writing?",
      "If you can deliver by Friday, we can sign today.",
    ]),
    tip("Say it right: in conditional offers, the voice rises on the condition and falls on the result: *If you can pay in ADvance ↗, ‖ we can lower the PRICE ↘.* A calm, slow *no* sounds stronger than a fast one."),
  ]),

  section("Vocabulary: Making a deal", [
    words("Negotiation", [
      ["meet someone halfway", "↔️ agree to a compromise", "I can't do 20%, but I'll meet you halfway — 10%."],
      ["a sticking point", "🧱 a problem that stops an agreement"],
      ["a deal-breaker", "💔 something that makes you reject the whole deal"],
      ["drive a hard bargain", "💪 negotiate firmly to get a good price"],
      ["bottom line", "📉 the lowest price or minimum you can accept"],
      ["a win-win situation", "🏆 a result good for both sides"],
      ["wiggle room", "🕹️ a little flexibility to change a plan or a price"],
      ["strike a deal", "🤝 reach an agreement"],
      ["walk away", "🚶 leave a negotiation without agreeing"],
      ["counter-offer", "🔁 an offer made in reply to another offer"],
    ]),
    match("Match the beginnings and endings.", [
      ["The payment date was the main sticking…", "…point."],
      ["If they don't agree to a contract, that's a deal-…", "…breaker for us."],
      ["She drives a hard…", "…bargain — she got 25% off."],
      ["We couldn't agree, so we decided to walk…", "…away."],
      ["After three hours, they finally struck…", "…a deal."],
      ["They rejected our offer and made a counter-…", "…offer."],
    ]),

    quiz("Choose the right phrase.", [
      { q: "If they won't give us a contract, we'll end the talks. The contract is a…", options: ["*deal-breaker", "win-win", "counter-offer"] },
      { q: "You want 20%, I offer 10%. We agree on 15%. We…", options: ["*meet halfway", "walk away", "strike out"] },
      { q: "She got a great price because she…", options: ["*drove a hard bargain", "made a sticking point", "lost her BATNA"] },
      { q: "Keep a little flexibility in your price — leave yourself some…", options: ["*wiggle room", "bottom line", "deal-breaker"] },
    ]),
  ]),

  section("Listening: Friends, business and a new logo", [
    tip("A long listening — about 3 minutes 45 seconds. Asel wants a new logo and design for her second bakery. Madina's studio will do it — but friends still need to agree on the price and the deadline. First listen: *What do they agree in the end?* Second listen: the tasks. Ask the student to note the negotiation moves."),
    ...listening(
      "Listen to Asel and Madina negotiating the design for the new bakery.",
      "**Madina:** OK, before we start — this is weird, isn't it? Negotiating with a friend.\n\n**Asel:** Very weird. Let's pretend we've never met. Hello, I'm Asel, I'm opening a second bakery, and I need a new logo, a sign and menus by the first of March.\n\n**Madina:** Lovely to meet you, Asel. I've looked at your brief, and I've sent you our proposal. The full package — logo, sign, menus, packaging and social media templates — comes to the figure on page two.\n\n**Asel:** Yes, I saw page two. I nearly dropped my coffee. To be perfectly honest, it's quite a lot above my budget.\n\n**Madina:** I understand. Can I ask what matters most to you in this project? Is it the price, the timing, or something else?\n\n**Asel:** The timing, definitely. The opening is the first of March, and I can't move it — I've already paid the rent and I've hired two new bakers. If the sign isn't ready, I'll open with a piece of paper on the door.\n\n**Madina:** OK. And is every part of the package equally important to you?\n\n**Asel:** Not really. The logo and the sign are essential. The menus too. The packaging can wait — I've still got lots of boxes from the first bakery. And honestly, I don't know what social media templates are.\n\n**Madina:** That's helpful. So what if we split the project into two stages? Stage one, the logo, the sign and the menus, ready by mid-February — that gives you two weeks to spare. Stage two, the packaging and the templates, in spring, when you know what you need.\n\n**Asel:** I like that. And the price for stage one?\n\n**Madina:** About sixty percent of the total.\n\n**Asel:** That's better. But I'm afraid it's still a little more than I'd planned. Could you be flexible on that?\n\n**Madina:** We could consider a lower price, provided that we can use the project in our portfolio and on our website. A bakery opening is a lovely case study for us.\n\n**Asel:** That's no problem at all. You can photograph anything you like. And — what if I added something? Free coffee and pastries for your studio every Friday for a year.\n\n**Madina:** Every Friday? For the whole team?\n\n**Asel:** For the whole team. All six of you.\n\n**Madina:** You drive a hard bargain. My designers would never forgive me if I said no.\n\n**Asel:** So, ten percent off stage one, in exchange for the portfolio and the Fridays?\n\n**Madina:** Let me think about that for a second… I can do seven. Ten would be difficult for us, unless you pay half in advance.\n\n**Asel:** Half in advance is fine. I can do that this week.\n\n**Madina:** Then we can do ten. One last thing — the number of changes. Our price includes two rounds of changes. After that, extra changes are charged by the hour.\n\n**Asel:** Two rounds? What if I hate everything?\n\n**Madina:** Then we'll have a coffee and talk about it. But you won't hate everything. You've never hated anything I've designed.\n\n**Asel:** That's true. OK, two rounds is fair.\n\n**Madina:** So, just to recap: stage one — logo, sign and menus — by the fifteenth of February, at ten percent off, with half paid in advance. Two rounds of changes. We can use the project in our portfolio. Stage two in spring, priced separately. And…\n\n**Asel:** And coffee and pastries every Friday for a year.\n\n**Madina:** Shall I put that in writing?\n\n**Asel:** Please do. Especially the pastries. My accountant will want to know why I'm feeding a design studio.\n\n**Madina:** Tell her it was a win-win situation.\n\n**Asel:** I think it was. Now can we stop pretending we've never met?\n\n**Madina:** Absolutely. Come here. And — the sign at the old bakery? It's slightly crooked.\n\n**Asel:** I know! Leo told me!",
    ),
    quiz("Listen and choose.", [
      { q: "What matters most to Asel?", options: ["*the opening date", "the lowest possible price", "the social media templates"] },
      { q: "What does Madina suggest first?", options: ["*splitting the project into two stages", "a 50% discount", "moving the opening date"] },
      { q: "What does Madina ask for in exchange for a lower price?", options: ["*permission to use the project in the studio's portfolio", "a longer deadline", "free advertising in the bakery"] },
      { q: "What does Asel add to the deal?", options: ["*free coffee and pastries for the studio every Friday for a year", "a bigger order", "a recommendation to other bakeries"] },
      { q: "Why does Madina finally agree to ten percent?", options: ["*Asel agrees to pay half in advance.", "Asel threatens to walk away.", "Leo convinces her."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Asel has already hired two new bakers.", true],
      ["The packaging is essential for the opening.", false],
      ["Stage one will be ready by mid-February.", true],
      ["Madina's studio has six people.", true],
      ["The price includes unlimited changes.", false],
      ["Madina will put the agreement in writing.", true],
    ]),
    gaps(
      "Complete the sentences from the negotiation.",
      "1. Can I ask what [matters] most to you in this project?\n2. So what [if] we split the project into two stages?\n3. Could you be [flexible] on that?\n4. We could consider a lower price, [provided/providing] that we can use the project in our portfolio.\n5. Ten would be difficult for us, [unless] you pay half in advance.\n6. So, just to [recap]: stage one by the fifteenth of February.",
    ),
  ]),

  section("Role play: Let's make a deal", [
    text(
      "Negotiate! 💼",
      "Choose a situation. Your teacher plays the other side and has secret interests — find them out!\n\n- **A. The salary.** You've been offered a job. The salary is lower than you hoped. Negotiate the whole package (salary, days working from home, training, start date).\n- **B. The flat.** You want to rent a flat for a year. The rent is above your budget. The owner wants reliable tenants.\n- **C. The event.** You're organizing a conference and need a hotel for 100 people. The hotel's price is high, but your dates are in the low season.\n\nPrepare first (3 minutes): your **interests**, your **bottom line** and your **BATNA**.\n\nThen negotiate (5–7 minutes):\n1. 🎯 explore interests — *What matters most to you…?*\n2. 💡 propose — *What if…? We could consider… provided that…*\n3. 🔄 concede only with a condition — *If you…, then we…*\n4. ✋ say no politely if you need to\n5. ✅ recap and close",
    ),
    drag(
      "Complete the negotiation with the words.",
      "A: The rent is a little above my budget, I'm [afraid].\nB: I understand. What [matters] most to you?\nA: A long contract. What [if] I signed for two years instead of one?\nB: We could consider a lower rent, [provided] that you pay two months in advance.\nA: That would be difficult, [unless] the first month is free.\nB: Let's meet [halfway]: two weeks free.",
      ["scared", "important", "despite"],
    ),
    tip("Teacher's secret interests: A — the company can't raise the salary this year but can offer remote days and paid training. B — the owner cares most about a long contract and no pets. C — the hotel is empty in that month and wants a contract for next year too. Play realistically: give nothing for nothing. Feedback: did the student find your interests? Did every concession have a condition? Did they recap? Then swap roles."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "We could consider a discount, ___ you order more.", options: ["*provided that", "unless", "despite"] },
      { q: "I'm ___ that's not something we can agree to.", options: ["*afraid", "scared", "frightened"] },
      { q: "A result that's good for both sides is a ___ situation.", options: ["*win-win", "win-lose", "double-win"] },
      { q: "Your best option if there's no deal is your ___.", options: ["*BATNA", "bottom line", "sticking point"] },
    ]),
    box(
      "Phrase of the day: you don't get what you deserve, you get what you negotiate",
      "💼 A popular saying among negotiators. Asel would add: *…and what you understand about the other side.*\n\n*What would you like to negotiate this year — at work, at home, or with yourself?*",
    ),
  ]),

  homework(
    [
      video("Watch: TED — 3 steps to getting what you want in a negotiation (The Way We Work).", "Z3HJCQJ2Lmo"),
      choose(
        "Choose the most natural option.",
        "1. What [*matters/matter] most to you here?\n2. What if we [*moved/move] the deadline to Friday?\n3. We could [*consider/to consider] it, provided that you pay in advance.\n4. If you [*can/could will] guarantee delivery, we can sign today.\n5. I'm afraid that's [*not something/nothing something] we can do.\n6. That would be difficult, [*unless/provided] you change the dates.\n7. Let me [*check/to check] with my manager.\n8. So, just to [*recap/recaps]: we've agreed on the price.",
      ),
      match("Match the words and the meanings.", [
        ["a deal-breaker", "something that ends the whole deal"],
        ["a sticking point", "a problem that stops agreement"],
        ["meet halfway", "compromise"],
        ["strike a deal", "reach an agreement"],
        ["bottom line", "the minimum you can accept"],
        ["a counter-offer", "an offer in reply to an offer"],
      ]),
    ],
    "Homework: Language",
  ),
  homework(
    [
      write(
        "After a negotiation (real or imagined), write a follow-up email (220–260 words) to the other side: thank them, summarize exactly what you agreed, mention one point that still needs to be decided, and suggest the next step.",
        220,
        { read: "*Useful:* Thank you for your time on… · Just to recap, we agreed that… · provided that… · One point we still need to discuss is… · Would it be possible to…? · I look forward to…" },
      ),
      record("Record a 1–2 minute story: the best (or worst) deal you've ever made. What did you learn? 🎤", 120),
    ],
    "Homework: Writing and speaking",
  ),
]);
