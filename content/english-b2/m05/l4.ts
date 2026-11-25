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

// 5.4 Practical: Formal emails and complaints — functional language: the formal email of B2 First (140–190 words): tone, structure, polite formulas (I am writing to…, I would be grateful if…, I look forward to hearing from you); complaining politely but firmly on the phone (I'm afraid there's a problem with…, I'd like to speak to someone who can…, What I'd like is…). Review of module 5 grammar (should have, be supposed to). Main format: informal vs formal match + a medium-long reading (Asel's complaint email and the company's reply, ~450 words) + a long listening (Asel phones customer service about a broken oven, ~3:15) + a role play "talking to a company". Video at home (British Council, formal and informal emails).
// Characters: Asel owns two bakeries (B1 → B2); the oven company is invented. Facts: no new facts.
export default lesson("b2-5.4", "Practical: Formal emails and complaints", () => [
  section("Warm-up: Too informal!", [
    box(
      "Today you will…",
      "- turn informal phrases into polite, formal ones ✉️\n- read a real complaint email — and the company's reply 📨\n- complain on the phone: polite but firm 📞",
    ),
    match("These phrases are too informal for an email to a company. Match each one with a formal version. 🎩", [
      ["Hi there!", "Dear Sir or Madam,"],
      ["I'm writing about…", "I am writing with regard to…"],
      ["Can you send me…?", "I would be grateful if you could send me…"],
      ["Sorry, but…", "I regret to inform you that…"],
      ["Get back to me soon!", "I look forward to hearing from you."],
      ["Cheers, Asel", "Yours faithfully, Asel Nurlanova"],
    ]),
    text(
      "Talk to your teacher.",
      "- Have you ever complained to a company — by email, on the phone or in a shop? What happened?\n- Do you prefer to complain by email or on the phone? Why?\n- What makes a company's customer service good — or terrible? 😤",
    ),
    tip("Point out the register: in English, formal emails avoid contractions (*I'm → I am*), phrasal verbs (*get back to → reply*) and direct questions (*Can you…? → I would be grateful if you could…*). In the US, *Sincerely* is more common than *Yours faithfully / sincerely*."),
  ]),

  section("Vocabulary: Complaints", [
    words("Complaints", [
      ["faulty", "⚠️ not working correctly (a faulty product)"],
      ["damaged", "💥 broken or harmed"],
      ["a replacement", "🔄 a new one instead of the faulty one"],
      ["compensation", "💶 money you get because something went wrong"],
      ["a receipt", "🧾 a paper that proves you paid"],
      ["a warranty", "📜 the company's promise to repair or replace a product for a time"],
      ["out of order", "🚫 (a machine) not working"],
      ["deal with (a complaint)", "🛠️ do what is needed to solve a problem"],
      ["escalate", "⬆️ pass a problem to a more senior person"],
      ["a reference number", "🔢 a number that identifies your order or complaint"],
    ]),
    match("Match.", [
      ["The oven arrived", "damaged."],
      ["Please keep your receipt", "as proof of purchase."],
      ["The product is still under", "warranty."],
      ["We will send you", "a replacement."],
      ["Could you give me your", "reference number?"],
      ["The lift is", "out of order."],
    ]),
    gaps(
      "Complete with a word from the list.",
      "1. The phone was [faulty], so I took it back to the shop.\n2. They offered me a voucher as [compensation] for the delay.\n3. Customer service didn't help, so I asked them to [escalate] the problem.\n4. Who is going to deal [with] my complaint?\n5. Without a [receipt], they won't give you a refund.\n6. My laptop is two years old, so the [warranty] has expired.",
    ),
  ]),

  section("Reading: A complaint and a reply", [
    tip("A medium-long text (~450 words): Asel's complaint email and the company's reply. First reading — 3 minutes: *Does Asel get what she wants?* Then the tasks. Ask the student to underline formal phrases."),
    trueFalse(
      "Read the emails. True or false?",
      [
        ["The oven was supposed to arrive on 3 March.", true],
        ["The oven arrived on time but didn't work.", false],
        ["Asel wants a replacement and compensation.", true],
        ["Asel's email is angry and rude.", false],
        ["The company refuses to send a technician.", false],
        ["The company offers Asel a free service.", true],
      ],
      {
        read: [
          "## ✉️ Email 1: the complaint",
          "Subject: Order BK-4471 — damaged oven and late delivery",
          "Dear Sir or Madam,",
          "I am writing to complain about a professional oven (model Baker Pro 60) which I ordered from your company on 12 February for my bakery, Asel's Bakery. The order reference is BK-4471.",
          "According to your website, delivery was guaranteed within two weeks, and I was told that the oven would arrive on 3 March. However, it was not delivered until 17 March, two weeks late. As a result, we were unable to open our second kitchen as planned and had to cancel several large orders, including a wedding cake.",
          "Furthermore, when the oven finally arrived, the glass door was cracked and the temperature control did not work. I contacted your customer service line three times, but on each occasion I was told that someone would call me back. Nobody did.",
          "I have been a customer of yours for five years and have always been satisfied with your products, so I am particularly disappointed by this experience. In my opinion, your company should have informed me about the delay and should have checked the oven before it was delivered.",
          "I would therefore be grateful if you could replace the oven within seven days. I would also like to request compensation for the orders we lost because of the delay. I have attached photos of the damage and a copy of my receipt.",
          "I look forward to hearing from you at your earliest convenience.",
          "Yours faithfully,\n\nAsel Nurlanova\n\nOwner, Asel's Bakery",
          "## 📨 Email 2: the reply",
          "Subject: RE: Order BK-4471 — damaged oven and late delivery",
          "Dear Ms. Nurlanova,",
          "Thank you for your email of 18 March, and please accept our sincere apologies for the problems you have experienced with your order.",
          "Having looked into the matter, I can confirm that the delay was caused by a problem at our warehouse. You should have been informed immediately, and I regret that this did not happen. I also apologize that your calls were not returned; I have discussed this with our customer service team.",
          "I am pleased to inform you that a replacement oven will be delivered to your bakery on Friday, 22 March, and our technician will install it free of charge. The damaged oven will be collected on the same day.",
          "With regard to compensation, we would like to offer you a refund of 15% of the price of the oven. In addition, we will provide a free service for the next two years.",
          "If you have any further questions, please do not hesitate to contact me directly on the number below.",
          "Yours sincerely,\n\nDaniel Ortiz\n\nCustomer Relations Manager",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Why did the late delivery cause problems for Asel?", options: ["*She had to cancel several large orders.", "She had to close the first bakery.", "She lost her receipt."] },
      { q: "What happened when Asel phoned customer service?", options: ["*Nobody called her back.", "They were rude.", "They gave her a refund."] },
      { q: "Why does Asel mention that she's been a customer for five years?", options: ["*to show that she's usually satisfied and loyal", "to ask for a discount", "to complain about old products"] },
      { q: "What compensation does the company offer?", options: ["*a 15% refund and a free service for two years", "a full refund", "a second oven for free"] },
    ]),
    order(
      "Put the parts of Asel's email in the right order.",
      [[
        "the reason for writing and the order details",
        "the first problem: the late delivery and its results",
        "the second problem: the damage and the phone calls",
        "her feelings and what the company should have done",
        "what she wants the company to do",
        "a polite formal ending",
      ].join("\n")],
      "lines",
    ),
    gaps(
      "Find formal phrases in the emails.",
      "1. I'm writing because I'm unhappy about… → I am writing to [complain] about…\n2. Also, … → [Furthermore], …\n3. So… → I would [therefore] be grateful if…\n4. Please answer soon. → I look forward to hearing from you at your earliest [convenience].\n5. We're really sorry. → Please accept our sincere [apologies].\n6. Just call me if you need anything. → Please do not [hesitate] to contact me.",
    ),
  ]),

  section("Language: Formal emails", [
    table("formal-email"),
    choose(
      "Formal or informal? Choose the formal option.",
      "1. [*I am writing with regard to/I'm writing about] my order.\n2. [*I would be grateful if you could/Can you] send me a refund.\n3. The product [*did not/didn't] work.\n4. I [*received/got] the parcel yesterday.\n5. I would like to [*request/ask for some] compensation.\n6. [*I look forward to hearing from you./Hope to hear from you soon!]\n7. [*However/But], it arrived two weeks late.\n8. Please [*contact/get in touch with] me at the number below.",
    ),
    sort("Formal or informal? Sort. 🧩", {
      "🎩 formal": ["I regret to inform you that…", "I would appreciate a prompt reply.", "Furthermore, …", "Yours faithfully,"],
      "👕 informal": ["Thanks a lot!", "By the way, …", "Can't wait to hear from you!", "Take care,"],
    }),
    drag(
      "Make the email formal. Complete.",
      "Dear Sir or Madam,\n\nI am writing to [complain] about the headphones I ordered from your website. They arrived on time; [however], the left side does not work. I would be [grateful] if you could send me a replacement or a full [refund]. I have [attached] a copy of my receipt.\n\nI look forward to [hearing] from you.\n\nYours faithfully,\nTom Wilson",
      ["moan", "but", "glad"],
    ),
    tip("Remind: *Dear Sir or Madam* → *Yours faithfully*; *Dear Mr. Ortiz* → *Yours sincerely*. In American English, *Sincerely* works for both. No emojis, no exclamation marks, no contractions!"),
  ]),

  section("Listening: Complaining on the phone", [
    tip("A long listening — about 3 minutes 15 seconds. Before Asel wrote her email, she phoned customer service. Listen to her third call. First listen: *What does Asel do to get a result?* Second listen: the tasks and the phrases."),
    ...listening(
      "Listen to Asel's phone call to customer service.",
      "**Support:** Good morning, Kitchen Pro customer service, my name's Mira. How can I help you?\n\n**Asel:** Good morning, Mira. My name is Asel Nurlanova, and I'm calling about an oven I ordered from you. I'm afraid there's a problem with it. In fact, there are two problems.\n\n**Support:** I'm sorry to hear that. Could I have your order reference, please?\n\n**Asel:** Yes, it's B-K four four seven one.\n\n**Support:** Thank you. One moment… Yes, I can see it. A Baker Pro 60, delivered on the seventeenth of March.\n\n**Asel:** That's right. And that's the first problem. It was supposed to arrive on the third of March. Because of the delay, we had to cancel several large orders, including a wedding cake.\n\n**Support:** I see. I do apologize for that.\n\n**Asel:** Thank you. The second problem is that when it finally arrived, the glass door was cracked and the temperature control doesn't work. So we can't use it at all.\n\n**Support:** Oh dear. Have you tried turning it off and on again?\n\n**Asel:** Yes, several times. I've also checked the manual. It's definitely faulty.\n\n**Support:** Could you tell me what exactly happens when you switch it on?\n\n**Asel:** The display lights up, but the temperature stays at about forty degrees, even when I set it to two hundred. You can't bake bread at forty degrees. Believe me, I tried — the dough just sat there looking sad.\n\n**Support:** That does sound like a problem with the controller. Right. Well, what I can do is book a technician to look at it. The first available date is… the fifteenth of April.\n\n**Asel:** I'm sorry, but that's not really acceptable. That's almost a month from now, and the oven was faulty when it arrived. I'd also like to point out that this is my third call. Twice I was told that someone would call me back, and nobody did.\n\n**Support:** I'm very sorry about that. I'm afraid I'm only able to book technicians through our system.\n\n**Asel:** I understand that it's not your fault, Mira. But I'm not asking for a repair. What I'd like is a replacement oven within a week. Could I speak to someone who can make that decision, please?\n\n**Support:** Let me see if my manager is available. Would you mind holding for a moment?\n\n**Asel:** Not at all.\n\n**Support:** … Thank you for holding. My manager, Mr. Ortiz, is in a meeting right now, but he's asked me to tell you that he'll deal with your case personally. He suggests that you send an email with photos of the damage, and he'll reply within two working days.\n\n**Asel:** Thank you, that's helpful. Could you give me his email address?\n\n**Support:** Of course. It's d dot ortiz at kitchenpro dot com. And your complaint number is C-two-nine-eight.\n\n**Asel:** C two nine eight. Got it. And just to confirm: Mr. Ortiz will reply within two working days.\n\n**Support:** That's right. I've written a note on your file.\n\n**Asel:** Thank you very much for your help, Mira. I really appreciate it.\n\n**Support:** You're welcome. Once again, I'm sorry for the trouble, and have a good day.\n\n**Asel:** You too. Goodbye.",
    ),
    quiz("Listen and choose.", [
      { q: "What does the agent first offer?", options: ["*a technician on 15 April", "a refund", "a new oven"] },
      { q: "Why does Asel say the offer is not acceptable?", options: ["*It's almost a month away and the oven was faulty on arrival.", "She doesn't like technicians.", "She wants to cancel the order."] },
      { q: "What does Asel ask for?", options: ["*a replacement within a week and to speak to a decision-maker", "a full refund", "a discount on her next order"] },
      { q: "What does the manager suggest?", options: ["*an email with photos of the damage", "another phone call tomorrow", "visiting the shop"] },
      { q: "How does Asel end the call?", options: ["*She confirms the next step and thanks the agent.", "She threatens to go to court.", "She hangs up angrily."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["This is Asel's first call about the oven.", false],
      ["Asel blames Mira personally.", false],
      ["Asel has already tried turning the oven off and on.", true],
      ["The manager is in a meeting.", true],
      ["Mr. Ortiz will reply within two working days.", true],
      ["Asel's complaint number is C-389.", false],
    ]),
    gaps(
      "Complete Asel's phrases.",
      "1. I'm [afraid] there's a problem with it.\n2. I'm sorry, but that's not really [acceptable].\n3. I'd also like to [point] out that this is my third call.\n4. What I'd [like] is a replacement oven within a week.\n5. Could I speak to someone who can make that [decision], please?\n6. And just to [confirm]: Mr. Ortiz will reply within two working days.",
    ),
    table("complaint-call"),
  ]),

  section("Role play: Talking to a company", [
    text(
      "📞 Role play",
      "Choose a situation. The student is the **customer**, the teacher is the **customer service agent**. Then swap.\n\n**A.** 📱 Your new phone stopped working after two weeks. The shop says it's “your fault”.\n\n**B.** ✈️ Your flight was cancelled, and the airline offers you a seat in three days' time.\n\n**C.** 🏨 You booked a room with a sea view. You got a room next to the kitchen.\n\n**Customer:** stay polite but firm, explain the problem clearly, say what you want, ask for a manager if necessary, confirm the next step.\n\n**Agent:** apologize, ask for details (reference number…), first offer something small, then something better.",
    ),
    tip("As the agent, make it realistically difficult: put the student on hold, offer a bad solution, misunderstand once. Then give feedback on tone (*I'm afraid… / That's not really acceptable / What I'd like is…*) and on staying calm. Swap roles so the student practices apologizing too."),
  ]),

  section("Writing: plan your formal email", [
    box(
      "✍️ B2 First: a formal email (140–190 words)",
      "**Task:** You bought a ticket for a music festival. When you arrived, the main band had been cancelled, and nobody had informed the ticket holders. Write an email to the organizers.\n\n**Plan:**\n1. Dear Sir or Madam, + reason for writing (ticket details)\n2. what happened (facts, dates)\n3. why you are disappointed — what the organizers should have done\n4. what you want (a refund? compensation?)\n5. a polite formal ending\n\n**Use:** I am writing to complain about… · However, … · Furthermore, … · should have + 3rd form · I would be grateful if you could… · I look forward to hearing from you.",
    ),
    tip("Brainstorm together for 3 minutes: the student tells you the facts as if on the phone, then you decide together which details are important. The email is the homework."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "Dear Sir or Madam, … Yours ___,", options: ["*faithfully", "sincerely", "truly yours"] },
      { q: "I would be grateful if you ___ send me a refund.", options: ["*could", "can", "will"] },
      { q: "On the phone: “Could I ___ to a manager, please?”", options: ["*speak", "say", "tell"] },
      { q: "A product that doesn't work correctly is ___.", options: ["*faulty", "out of date", "expired"] },
    ]),
    box(
      "Phrase of the day: the customer is always right",
      "🛎️ An old business motto: always try to keep the customer happy. Asel uses it in her bakeries — but she also knows that customers are not ALWAYS right! 😄\n\n*Do you agree with the motto?*",
    ),
  ]),

  homework(
    [
      video("Watch: British Council — English for Emails: Formal and informal language.", "3-QoPcJHQws"),
      choose(
        "Choose the formal option.",
        "1. [*I am writing to inquire about/Just wanted to ask about] your summer courses.\n2. [*Could you please inform me/Tell me] when the course starts.\n3. [*In addition/Plus], I would like to know the price.\n4. I [*would appreciate/'d love] a reply by Friday.\n5. [*Unfortunately/Sadly enough], the room was not clean.\n6. [*Yours sincerely/Love], Anna Petrova",
      ),
      gaps(
        "Complete the formal phrases.",
        "1. I am writing with [regard] to my order.\n2. I would be [grateful] if you could reply soon.\n3. Please accept our sincere [apologies].\n4. Please do not [hesitate] to contact me.\n5. I look [forward] to hearing from you.\n6. I have [attached] a copy of my receipt.",
      ),
    ],
    "Homework: Formal language",
  ),
  homework(
    [
      write("Write your formal email to the festival organizers (140–190 words). Use the plan from the lesson.", 140, {
        read: "Check: no contractions · a clear reason for writing · facts with dates · what they should have done · what you want · a formal ending.",
      }),
      record("Record a phone message (about 1 minute) to a company: explain a problem with something you bought, say what you'd like them to do, and leave your contact details. 📞", 75),
    ],
    "Homework: Writing and speaking",
  ),
]);
