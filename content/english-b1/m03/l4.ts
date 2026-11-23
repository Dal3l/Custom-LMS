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
  write,
} from "../../kit";

// 3.4 Practical: Complaining politely — complaints in a shop, a restaurant and online: I'm afraid there's a problem with… I'd like a refund. Would you mind…? Could I speak to the manager? V: faulty, damaged, refund, replacement, receipt, warranty. S: role-plays. Main format: a BBC drama video in class + three short listenings + role-play cards; a complaint email at home.
export default lesson("b1-3.4", "Practical: Complaining politely", () => [
  section("Warm-up: Not happy", [
    box(
      "Today you will…",
      "- complain politely — and get what you want 😤➡️😊\n- use phrases like *I'm afraid…, I'd like a refund, Would you mind…?* 🗣️\n- practice complaints in a shop, a restaurant and on the phone ☎️",
    ),
    text(
      "Talk to your teacher.",
      "- When did you last complain about something — in a shop, a café, online? Did it work?\n- Some people never complain; others complain about everything. Which are you? 😅\n- Is it easier to complain face to face, on the phone or in writing? Why?",
    ),
    tip("Share your own story of a complaint (successful or not). Note any phrases the student already uses — some will be too direct (*Give me my money back!*); you'll come back to them."),
  ]),

  section("Vocabulary: What's wrong?", [
    sort("Problem or solution? Sort. 🛠️", {
      "😟 the problem": ["It's faulty.", "It's damaged.", "It's the wrong size.", "Something is missing.", "The service was slow."],
      "😊 the solution": ["a refund", "a replacement", "a discount", "an apology", "a repair"],
    }),
    match("Match the words and the meanings.", [
      ["faulty", "doesn't work properly"],
      ["damaged", "broken or hurt, e.g. in delivery"],
      ["a refund", "your money back"],
      ["a replacement", "a new one instead of the old one"],
      ["a receipt", "the paper that shows you paid"],
      ["a warranty", "a promise to repair it for free for some time"],
      ["a discount", "a lower price"],
      ["the manager", "the person in charge"],
    ]),
    gaps(
      "Complete.",
      "1. The phone I bought yesterday is [faulty] — it switches off every five minutes. 📱\n2. Do you have the [receipt]? We need to see when you bought it. 🧾\n3. It's still under [warranty], so the repair is free.\n4. The box was [damaged] when it arrived, and the glass was broken.\n5. I don't want a new one. I'd like a [refund], please. 💰\n6. They didn't have my size, so they gave me a 20% [discount].\n7. We've been [waiting] for our food for forty minutes!\n8. If the assistant can't help, ask to speak to the [manager].",
    ),
  ]),

  section("Video: How to complain", [
    tip("A BBC drama for learners (about 6 minutes). Before watching: *Who is complaining, and about what?* Pause in the middle and ask: *Is he being polite? What would you say?*"),
    video("Watch: English at Work — complaining.", "X7nDkvYSbfs"),
    text(
      "After the video: talk to your teacher.",
      "- Was the complaint polite or rude? Which phrases did you notice?\n- How did the other person react? Did the complaint work?\n- What would you do differently?",
    ),
  ]),

  section("Phrases: Complaining politely", [
    table("complaints"),
    sort("Polite or too direct? Sort. 😊😠", {
      "😊 polite": ["I'm afraid there's a problem with my order.", "Would you mind checking again?", "I'd like a refund, please.", "Could I speak to the manager, please?"],
      "😠 too direct": ["This is rubbish!", "Give me my money back!", "You made a mistake!", "Get me your boss!"],
    }),
    choose(
      "Choose the best phrase.",
      "1. [*Excuse me, I'm afraid/Hey, listen,] there's a problem with my soup — it's cold.\n2. [*Would you mind/Do you mind to] changing it, please?\n3. [*I'd like/I want now] a replacement, please.\n4. [*Unfortunately/Fortunately], the jacket was damaged when it arrived.\n5. I ordered a large pizza, [*but I got/and I got] a small one.\n6. [*Could I speak/Can I speaking] to the manager, please?\n7. We've been waiting [*for/since] half an hour.\n8. [*I'm not happy with/I'm not happy for] this answer.",
    ),
    drag(
      "Complete the conversation in a shop.",
      "Customer: Excuse me, I'm [afraid] there's a problem with these headphones. I bought them last week, but the left side doesn't [work].\nAssistant: Oh, I'm sorry to hear that. Do you have the [receipt]?\nCustomer: Yes, here it is.\nAssistant: Thank you. Would you like a [replacement] or a refund?\nCustomer: I'd [like] a refund, please. I don't really trust this model now.\nAssistant: No [problem]. I'll do that for you now.\nCustomer: Thank you. I [appreciate] it.",
      ["sorry", "working", "want", "money"],
    ),
  ]),

  section("Responding to complaints", [
    match("Match the complaints and the best responses.", [
      ["This soup is cold.", "I do apologize. I'll heat it up for you right away."],
      ["We've been waiting for 30 minutes.", "I'm so sorry. Let me check with the kitchen."],
      ["The shirt has a hole in it.", "Would you like a replacement or a refund?"],
      ["I was charged twice.", "Let me check your payment on the system."],
      ["My room is very noisy.", "I'm sorry. We can move you to a quieter room."],
      ["The parcel never arrived.", "Could you give me your order number, please?"],
    ]),
    gaps(
      "Complete what the staff say.",
      "1. I do [apologize/apologise] for the delay.\n2. I'm sorry to [hear] that.\n3. Let me [check] for you.\n4. Would you [like] a replacement or a refund?\n5. Could you give me your order [number], please?\n6. The drinks are [on] us tonight.",
    ),
    quiz("What do you say?", [
      { q: "The waiter brought you the wrong dish.", options: ["*Excuse me, I'm afraid this isn't what I ordered.", "You're terrible at your job.", "Never mind, I'll eat it."] },
      { q: "The assistant says no refund without a receipt.", options: ["*I understand, but would you mind checking the card payment?", "Then give me something free!", "OK, goodbye."] },
      { q: "Nobody can help you.", options: ["*Could I speak to the manager, please?", "I'll write a terrible review!", "Get me your boss now!"] },
      { q: "The manager solves the problem.", options: ["*Thank you, I really appreciate it.", "Finally!", "It took you long enough."] },
    ]),
    trueFalse("Tips for a good complaint. True or false? 💡", [
      ["Stay calm and polite, even if you're angry.", true],
      ["Shout so that other customers can hear.", false],
      ["Say clearly what you want: a refund, a replacement…", true],
      ["Keep the receipt or the order number.", true],
      ["Complain a week later, not at the time.", false],
    ]),
  ]),

  section("Listening: Three complaints", [
    tip("Three short conversations (~1.5 minutes in total). First listen: *Where are they? What's the problem?* Second listen: the tasks. Then show the script: which phrases from the table did they use?"),
    ...listening(
      "Listen to three complaints. What's the problem in each one? How is it solved?",
      "**1.**\n\n**Kate:** Excuse me, I'm sorry to bother you, but we've been waiting for our main course for forty minutes.\n\n**Waiter:** Oh, I'm so sorry. The kitchen is very busy tonight. Let me check for you.\n\n**Kate:** Thank you. Also, I'm afraid this steak is quite cold.\n\n**Waiter:** I do apologize. I'll ask the chef to make you a new one, and the drinks are on us tonight.\n\n**Kate:** That's very kind. Thank you.\n\n**2.**\n\n**Support:** Good morning, TechStore online. How can I help?\n\n**Ben:** Hi. I ordered a laptop last week, and it arrived yesterday, but the screen is damaged. There's a big crack in the corner.\n\n**Support:** I'm sorry to hear that. Could you give me your order number, please?\n\n**Ben:** Yes, it's 4 8 1 5 2.\n\n**Support:** Thank you. Would you like a replacement or a refund?\n\n**Ben:** A replacement, please. I need it for work.\n\n**Support:** Of course. A courier will collect the damaged laptop tomorrow and bring you a new one at the same time.\n\n**3.**\n\n**Leo:** Hi. I bought this jacket here on Saturday, but the zip broke the first time I used it.\n\n**Assistant:** Do you have the receipt?\n\n**Leo:** I'm afraid I don't. I think I threw it away.\n\n**Assistant:** Hmm. Without a receipt, I can't give you a refund. I can only offer you a credit note for the store.\n\n**Leo:** I understand, but I paid by card. Would you mind checking the payment on your system? Here's my card.\n\n**Assistant:** Let me see… Yes, here it is, Saturday at 3:15. OK, no problem — I can give you a full refund.\n\n**Leo:** Great, thank you so much.",
    ),
    quiz("Listen and choose.", [
      { q: "1. What are Kate's two problems?", options: ["*The food is late and the steak is cold.", "The bill is wrong and the wine is warm.", "There's no table and the music is loud."] },
      { q: "1. What does the restaurant offer?", options: ["*a new steak and free drinks", "a 50% discount", "a free dessert"] },
      { q: "2. What's wrong with Ben's laptop?", options: ["*The screen is damaged.", "It doesn't switch on.", "It's the wrong color."] },
      { q: "2. Why does Ben want a replacement, not a refund?", options: ["*He needs it for work.", "Refunds take too long.", "He likes the store."] },
      { q: "3. How does Leo prove when he bought the jacket?", options: ["*The store checks his card payment.", "He finds the receipt in his pocket.", "He shows a photo."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["The waiter blames Kate for the problem.", false],
      ["Ben's laptop arrived yesterday.", true],
      ["A courier will bring Ben a new laptop and take the old one.", true],
      ["Leo still has the receipt.", false],
      ["In the end, Leo gets all his money back.", true],
    ]),
  ]),

  section("Role-play: Make a complaint", [
    order("Put the phone complaint in order.", [[
      "Good morning, how can I help?",
      "Hi, I'm calling about an order. The vase I received is broken.",
      "I'm sorry to hear that. Could you give me your order number?",
      "Yes, it's 7 3 9 0 1. I'd like a replacement, please.",
      "Of course. We'll send a new one tomorrow.",
    ].join("\n")], "lines"),
    text(
      "Role-play cards 🎭",
      "Choose a card. You're the customer; your teacher is the assistant / waiter / support person. Be polite but firm — and get what you want!\n\n🍝 **Restaurant**: your pasta has a hair in it, and you've been waiting for the bill for 20 minutes.\n\n👟 **Shop**: your new running shoes are falling apart after one week. You have the receipt.\n\n📦 **Online order (phone)**: you ordered a blue sofa; a green one arrived, and one leg is broken.\n\n🏨 **Hotel**: your room is next to the lift, the air conditioning doesn't work, and you paid for a sea view — but you can see the car park.\n\n**Remember the 4 steps:** start politely → explain → ask for a solution → if nothing happens, ask for the manager.",
    ),
    tip("Play the assistant a bit difficult at first (*I'm afraid we can't do that…*) so the student has to insist politely and use step 4. Then swap roles: the student is the assistant and must apologize and offer solutions (*I do apologize… Let me… Would you like…?*). Give feedback on politeness and on whether they clearly said what they wanted."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "your money back =", options: ["*a refund", "a receipt", "a warranty"] },
      { q: "The most polite start:", options: ["*Excuse me, I'm afraid there's a problem…", "Listen, this is terrible!", "You did it wrong."] },
      { q: "Would you mind ___ again?", options: ["*checking", "to check", "check"] },
      { q: "We've been waiting ___ an hour.", options: ["*for", "since", "during"] },
    ]),
    box(
      "Phrase of the day: The customer is always right",
      "🛍️ **The customer is always right** — an old business saying: shops should try to make customers happy.\n\nDo you agree? Is the customer *always* right? 🤔",
    ),
  ]),

  homework(
    [
      gaps(
        "Complete the phrases.",
        "1. I'm [afraid] there's a problem with my order.\n2. Would you [mind] checking again?\n3. I'd like a [refund], please.\n4. Could I [speak] to the manager?\n5. Unfortunately, the box was [damaged].\n6. I ordered a blue one, but I [got] a red one.",
      ),
      choose(
        "Choose the more polite option.",
        "1. [*I'm afraid/I'm angry because] the order is late.\n2. [*Could you/You must] send a new one?\n3. [*I'd like/I want] my money back.\n4. [*Unfortunately/Of course], it doesn't work.\n5. [*Would you mind/Do it] checking again?\n6. [*I look forward to hearing/Answer me] from you.",
      ),
      order("Put the complaint email in order.", [[
        "Dear Sir or Madam,",
        "I'm writing to complain about a coffee machine I bought from your website on 3 May.",
        "Unfortunately, it stopped working after only two days.",
        "I would like a full refund, as I no longer trust this model.",
        "I look forward to hearing from you.",
        "Yours faithfully, Ben Taylor",
      ].join("\n")], "lines"),
    ],
    "Homework: Phrases",
  ),
  homework(
    [
      write("Write a complaint email (100+ words). Choose: a hotel that was not like the photos, an online order that arrived damaged, or a course that was cancelled. Explain the problem politely and say what you want.", 100, {
        read: "*Example:* Dear Sir or Madam, I am writing to complain about my stay at your hotel from 10 to 14 July. Unfortunately, the room was very different from the photos on your website. 😕 The air conditioning did not work, and instead of a sea view, we could only see the car park. I spoke to the receptionist twice, but nothing was done. I would like a partial refund for the four nights. I look forward to hearing from you. Yours faithfully, Saule Nurlanova",
      }),
      record("Record a 1-minute phone complaint: something you bought online arrived damaged. Explain the problem and ask for a solution. 📞", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
