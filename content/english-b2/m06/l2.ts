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

// 6.2 I'm having it fixed — G: have / get something done (I'm having my car repaired; I got my hair cut); have something done for bad experiences (I had my phone stolen); get + past participle (get lost, get stuck, get fired, get married, get dressed). V: services and repairs (a plumber, an electrician, a mechanic, a tailor, a leak, DIY, a quote, install, alter, replace). S: talk about what you do yourself and what you pay others to do. Main format: "who do you call?" match + a long reading (fix it or pay for it? — the IKEA effect and repair cafés, ~550 words) + a long listening (Leo gets ready for the winter festival — and gets his dad's guitar back, ~3:10). Video at home (BBC Learning English). Continues Leo's story from 5.1 (he sold his dad's guitar and was trying to buy it back) and the festival rumor from 6.1.
// Facts checked: Michael Norton, Daniel Mochon and Dan Ariely (2012) — "the IKEA effect": people valued things they had built themselves (IKEA boxes, origami, Lego) more highly than identical things built by others, and were willing to pay more for them; the first Repair Café was organized by Martine Postma in Amsterdam on 18 October 2009 — today there are thousands around the world, where volunteers help people repair things for free; in 2024 the European Union adopted "right to repair" rules that make manufacturers offer repairs for some products (e.g. washing machines, phones).
export default lesson("b2-6.2", "I'm having it fixed", () => [
  section("Warm-up: Who do you call?", [
    box(
      "Today you will…",
      "- talk about things you do yourself — and things you pay others to do 🔧\n- find out why we love furniture we built ourselves (even when it's wobbly) 🪑\n- hear how Leo's story with his dad's guitar ends 🎸",
    ),
    match("Who do you call? Match the problem with the person. 📞", [
      ["Water is coming out from under the sink.", "a plumber"],
      ["Half the lights in the flat don't work.", "an electrician"],
      ["The car makes a strange noise.", "a mechanic"],
      ["My new trousers are too long.", "a tailor"],
      ["I need passport photos.", "a photographer"],
      ["My hair is far too long.", "a hairdresser"],
    ]),
    text(
      "Talk to your teacher.",
      "- Which of these jobs could you do yourself? 😄\n- When did you last call someone to fix something? What happened?\n- Are you good with your hands, or do you prefer to pay a professional?",
    ),
    tip("Listen for the student's natural attempts: *I repaired my car* (did they do it themselves?). That's the bridge to today's grammar: *I had my car repaired*."),
  ]),

  section("Vocabulary: Services and repairs", [
    words("Services and repairs", [
      ["a leak", "💧 a hole that lets water or gas escape", "There's a leak in the bathroom."],
      ["DIY (do-it-yourself)", "🔨 making or repairing things yourself"],
      ["a quote", "🧾 the price a worker says a job will cost"],
      ["install", "🔌 put a machine or system in place so it works"],
      ["alter (clothes)", "✂️ change clothes so they fit better"],
      ["replace", "🔄 put a new thing instead of an old or broken one"],
      ["service (a car)", "🚗 check a car and repair small things regularly"],
      ["wobbly", "🪑 not steady, moving from side to side"],
      ["a spare part", "⚙️ a new part to replace a broken one"],
      ["a handyman", "🧰 a person who does small repairs in homes"],
    ]),
    match("Match.", [
      ["We got three quotes", "and chose the cheapest."],
      ["The plumber fixed", "the leak in ten minutes."],
      ["They installed", "a new washing machine."],
      ["The table is", "wobbly — one leg is shorter."],
      ["I had my dress", "altered for the wedding."],
      ["They couldn't find", "a spare part for my old phone."],
    ]),
    gaps(
      "Complete with a word from the list.",
      "1. My dad loves [DIY] — he built our kitchen himself. 🔨\n2. Before you start, ask for a [quote] so you know the price.\n3. The screen was broken, so they [replaced] it.\n4. We need someone to [install] the new air conditioner.\n5. You should [service] your car once a year.\n6. A [handyman] can fix the door, the shelves and the tap in one visit.",
    ),
  ]),

  section("Reading: Fix it or pay for it?", [
    tip("A long text (~550 words). First reading — 5 minutes: *What are the advantages of doing things yourself, according to the writer?* Then the tasks."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["In the IKEA study, people valued boxes they had built themselves more highly.", true],
        ["The IKEA effect only works if the result is perfect.", false],
        ["The first Repair Café opened in Amsterdam.", true],
        ["At repair cafés, you have to pay the volunteers.", false],
        ["The writer thinks you should never pay a professional.", false],
        ["New European rules make it easier to get some products repaired.", true],
      ],
      {
        read: [
          "## 🔧 Fix it or pay for it?",
          "A hundred years ago, most people repaired their own shoes, made their own clothes and fixed their own furniture. Today, many of us have our shoes repaired, our clothes altered and our furniture delivered and assembled. When something breaks, we often don't even try to fix it — we just replace it. So is it worth doing things yourself any more?",
          "Surprisingly, psychologists have an answer, and it has a very familiar name: the IKEA effect. In a series of experiments published in 2012, the researchers Michael Norton, Daniel Mochon and Dan Ariely asked people to build simple IKEA storage boxes, fold paper animals and put together Lego models. Afterwards, the builders were asked how much they would pay for the things they had made. Again and again, they valued their own creations more highly than identical boxes and models built by someone else — even when their own work wasn't very good. A wobbly box that you've built yourself, it seems, is worth more to you than a perfect one built by an expert.",
          "Interestingly, the effect disappeared when people failed to finish the job. If you give up halfway, you don't love the result — you just feel frustrated. So the secret is not just doing the work, but completing it. That feeling of \"I made this\" is part of what we're paying for.",
          "There's also a less romantic reason to learn some DIY: money. Calling a plumber or an electrician is expensive, and for small jobs — a dripping tap, a loose door handle, a blocked sink — a short video online is often enough. Many people discover that changing a light switch or putting up a shelf isn't as hard as they thought.",
          "But what if you can't fix something yourself, and you don't want to throw it away? In 2009, a journalist named Martine Postma organized an event in Amsterdam where people could bring broken things and get them repaired for free by volunteers. She called it a Repair Café. The idea spread fast. Today there are thousands of repair cafés around the world, in libraries, community centers and church halls. You bring your broken toaster, lamp or jacket, have a cup of coffee, and watch a volunteer repair it — or, better, learn how to do it with them.",
          "Governments are getting involved, too. In 2024, the European Union adopted new \"right to repair\" rules, which require manufacturers of some products, such as washing machines and phones, to offer repairs and spare parts for years after you buy them. The aim is simple: fewer things thrown away, less waste, and lower costs for customers.",
          "Of course, there are jobs you should never do yourself. If you have a gas leak, a problem with the electricity in the walls, or a car that makes a frightening noise on the highway, get it checked by a professional. Watching three videos doesn't make you an electrician.",
          "So, fix it or pay for it? The best answer might be: learn to do the simple things yourself, have the dangerous things done by experts, and before you throw anything away, ask whether someone could help you repair it. Your wallet will be happier — and so, according to science, will you. 🪑",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What did people build in the IKEA experiments?", options: ["*storage boxes, paper animals and Lego models", "sofas and beds", "kitchens"] },
      { q: "When did the IKEA effect disappear?", options: ["*when people didn't finish the job", "when the result was wobbly", "when experts helped"] },
      { q: "What happens at a Repair Café?", options: ["*Volunteers help you repair things for free.", "You buy second-hand things.", "You sell broken things."] },
      { q: "What is the aim of the “right to repair” rules?", options: ["*less waste and lower costs", "more new products", "more jobs for electricians"] },
      { q: "Which job should you leave to a professional, according to the writer?", options: ["*a gas leak", "a dripping tap", "a loose door handle"] },
    ]),
    gaps(
      "Find words in the article.",
      "1. put the parts of something together: [assembled]\n2. exactly the same: [identical]\n3. annoyed because you can't do something: [frustrated]\n4. (a tap) letting out drops of water: [dripping]\n5. companies that make products: [manufacturers]\n6. things that are thrown away because they are not wanted: [waste]",
    ),
  ]),

  section("Grammar: I'm having it fixed", [
    quiz("Notice the rule 🔍 Look: “Many of us have our shoes repaired and our clothes altered.” · “Get it checked by a professional.” · Compare: “I repaired my shoes.”", [
      { q: "“I had my shoes repaired” means…", options: ["*someone else repaired them for me", "I repaired them myself", "my shoes were never repaired"] },
      { q: "The word order is…", options: ["*have + object + 3rd form", "have + 3rd form + object", "have + object + -ing"] },
      { q: "“get it checked” is…", options: ["*a bit more informal than “have it checked”", "a different meaning", "wrong"] },
    ]),
    table("have-done"),
    choose(
      "Choose.",
      "1. I'm [*having my car serviced/servicing my car] tomorrow — the garage opens at 8.\n2. She [*had her hair cut/cut her hair] at a new salon. 💇\n3. We're getting [*the kitchen painted/painted the kitchen] next week.\n4. Have you ever [*had your photo taken/taken your photo] by a professional?\n5. I need to get [*my eyes tested/tested my eyes].\n6. He had [*his wallet stolen/stolen his wallet] on the bus. 😢\n7. Where do you [*have your clothes cleaned/have cleaned your clothes]?\n8. They [*are having a pool built/are building a pool by someone] in the garden.",
    ),
    gaps(
      "Complete with have / get + object + 3rd form.",
      "1. My laptop is broken. I need to [have it repaired/get it repaired]. (it / repair)\n2. Last week I [had my hair cut/got my hair cut]. (my hair / cut)\n3. We're [having the house painted/getting the house painted] next month. (the house / paint)\n4. You should [have your teeth checked/get your teeth checked] twice a year. (your teeth / check)\n5. He [had his phone stolen] at the concert. (his phone / steal)\n6. Where did you [have your suit made/get your suit made]? It's great! (your suit / make)",
    ),
  ]),

  section("Grammar: get lost, get stuck, get fired", [
    sort("have something done: a service (I paid for it) or a bad experience (it happened to me)? Sort. 🧩", {
      "💰 a service": [
        "I had my car washed.",
        "She had her nails done.",
        "We had a new door installed.",
        "He had his jacket altered.",
      ],
      "😱 a bad experience": [
        "I had my bike stolen.",
        "She had her flight canceled.",
        "We had our window broken.",
        "He had his bag searched at the airport.",
      ],
    }),
    match("get + 3rd form = become / happen. Match.", [
      ["We didn't have a map and we got", "lost."],
      ["The lift stopped and we got", "stuck for an hour."],
      ["He was always late, so he got", "fired."],
      ["They met in 2020 and got", "married in 2023."],
      ["Hurry up and get", "dressed — we're late!"],
      ["Be careful with that knife — you'll get", "hurt."],
    ]),
    drag(
      "Complete Leo's message.",
      "Crazy week! 😅 On Monday I had my phone [stolen] on the bus. On Tuesday I got [lost] trying to find the new studio. On Wednesday the van broke down, so now I'm having it [repaired] — the mechanic says it'll take three days. I also got my hair [cut] for the festival photos, and we're having new posters [printed]. Oh, and our drummer got [stuck] in the lift for an hour! 🙈",
      ["steal", "losing", "repair"],
    ),
    order("Make sentences.", [
      "I'm having my car repaired.",
      "She got her hair cut yesterday.",
      "We had our flat painted last month.",
      "He had his bag stolen at the airport.",
      "They got lost in the old town.",
    ]),
    tip("Say it right: stress the object and the verb, not *have*: *I'm having my CAR REpaired.* Common mistakes: *I cut my hair* (if a hairdresser did it — fine in casual speech, but *I had my hair cut* is clearer); *I had repaired my car* (= Past Perfect, a different meaning!)."),
  ]),

  section("Listening: Leo's busy week", [
    tip("A long listening — about 3 minutes 10 seconds. Leo meets Madina in a café a week before the winter festival. Remember Leo's guitar story from 5.1? First listen: *What happened with the guitar?* Second listen: the tasks."),
    ...listening(
      "Listen to Leo and Madina talking in a café.",
      "**Madina:** Leo! You look exhausted. Are you all right?\n\n**Leo:** Don't ask. It's been the craziest week of my life. We're playing at the winter festival on Saturday, and everything that could go wrong has gone wrong.\n\n**Madina:** Tell me everything.\n\n**Leo:** Well, on Monday I had my phone stolen on the bus. I didn't notice until I got off. So I had to get a new SIM card, and I lost all my contacts.\n\n**Madina:** Oh no. Is that why you didn't answer my messages?\n\n**Leo:** Exactly. Then on Wednesday, the van broke down on the way to rehearsal. It's being repaired now, but the mechanic had to order a spare part from Germany, so we won't get it back until Friday. If it isn't ready, we'll have to get our equipment taken to the festival by taxi.\n\n**Madina:** That's going to be expensive.\n\n**Leo:** I know. And I still need to get my hair cut, and we need to have new photos taken for the festival program. The organizers sent us a message saying that our old photo looks \"a bit two-thousand-and-fifteen\".\n\n**Madina:** Well, it is from two thousand and fifteen.\n\n**Leo:** Fair point. I had much longer hair back then. And a lot more confidence.\n\n**Madina:** Your hair was certainly braver. Look, I can help with the photos. I've got a photographer friend who owes me a favor. I'll have her come to your rehearsal tomorrow. Twenty minutes, and it's done.\n\n**Leo:** Really? Madina, you're a hero.\n\n**Madina:** I know. Now, tell me some good news. Did you ever get your dad's guitar back? Last time I heard, you'd found the man you sold it to.\n\n**Leo:** That's the one good thing this week. Yes! He called me on Thursday. He said he'd been thinking about it, and he'd decided it should go back to the family. He sold it back to me for exactly the price I'd sold it for.\n\n**Madina:** No way! That's so kind of him.\n\n**Leo:** I know. I nearly cried on the phone. But the guitar wasn't in great condition. One of the tuners was broken, and there was a crack in the body. So I'm having it repaired by an old guy who has a tiny workshop near the Green Bazaar. He's been fixing guitars for forty years. He said he'd have it done by Friday morning.\n\n**Madina:** So you could play your dad's guitar at the festival?\n\n**Leo:** That's the plan. I've already told him. He's coming to the concert. He doesn't know the guitar is back yet, though. I want it to be a surprise.\n\n**Madina:** Oh, Leo, he's going to love it. Wait — is it true that a famous British band is playing at the festival too? Everyone keeps asking me.\n\n**Leo:** I've heard the same rumor. Our drummer says he saw them at the airport. But our drummer also got lost in the airport car park for an hour, so I'm not sure I trust him.\n\n**Madina:** Ha! Well, famous band or not, I'll be in the front row for your set.\n\n**Leo:** Thanks. Now I just need to get my hair cut, get the van back, get the guitar back, and not get my phone stolen again.\n\n**Madina:** Easy.",
    ),
    quiz("Listen and choose.", [
      { q: "What happened to Leo on Monday?", options: ["*He had his phone stolen.", "He got lost.", "His van broke down."] },
      { q: "Why will the van take so long to repair?", options: ["*A spare part has to come from Germany.", "The mechanic is on holiday.", "It needs a new engine."] },
      { q: "How will Madina help Leo?", options: ["*She'll have a photographer friend take new photos.", "She'll drive the van.", "She'll cut his hair."] },
      { q: "How did Leo get his dad's guitar back?", options: ["*The buyer sold it back for the same price.", "He bought it in a shop.", "His dad found it."] },
      { q: "Why doesn't Leo's dad know the guitar is back?", options: ["*Leo wants it to be a surprise.", "Leo forgot to tell him.", "His dad is away."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Leo noticed that his phone had been stolen while he was on the bus.", false],
      ["The organizers think the band's old photo is out of date.", true],
      ["The guitar had a crack in it.", true],
      ["The man repairing the guitar has been doing it for forty years.", true],
      ["Leo is sure that the famous band is coming.", false],
      ["Leo's drummer got lost at the airport.", true],
    ]),
    gaps(
      "Complete the sentences from the conversation.",
      "1. On Monday I had my phone [stolen] on the bus.\n2. It's being [repaired] now.\n3. We need to have new photos [taken].\n4. I'll [have] her come to your rehearsal tomorrow.\n5. So I'm having it repaired [by] an old guy near the Green Bazaar.\n6. Our drummer also got [lost] in the airport car park.",
    ),
  ]),

  section("Let's talk: Do it yourself or have it done?", [
    text(
      "🔧 You or a professional?",
      "Talk about these jobs. Do you do them yourself, or do you have them done? Why?\n\n- 💇 cutting your hair\n- 🚗 washing / servicing the car\n- 🎨 painting a room\n- 👗 altering clothes\n- 💻 fixing a computer or phone\n- 🍰 making a birthday cake\n\nThen tell your teacher about **one bad experience** (*I once had my… stolen / damaged / canceled*) and **one time you got lost / stuck**. What happened? 😄",
    ),
    tip("Push for contrast: *I cut it myself / I have it cut.* Encourage storytelling in the second part — it's great practice for Part 2 of B2 First Speaking. Correct the word order gently: *I had cut my hair* → *I had my hair cut*."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "I don't fix my car myself — I ___.", options: ["*have it fixed", "have fixed it", "fix it have"] },
      { q: "He ___ at the airport. (Someone took it!)", options: ["*had his bag stolen", "stole his bag", "had stolen his bag"] },
      { q: "We didn't have a map, so we got ___.", options: ["*lost", "lose", "losing"] },
      { q: "A person who fixes water pipes is a ___.", options: ["*plumber", "tailor", "mechanic"] },
    ]),
    box(
      "Phrase of the day: if it ain't broke, don't fix it",
      "🛠️ Informal American saying (*ain't broke* = isn't broken): if something works well, don't try to change it.\n\n*Can you think of something that worked well until someone tried to “improve” it?*",
    ),
  ]),

  homework(
    [
      video("Watch: BBC Learning English — How to use 'have something done'.", "ck-_lvYFBbY"),
      choose(
        "Choose.",
        "1. I'm going to [*have my nails done/do my nails by someone] for the wedding. 💅\n2. We [*got our roof repaired/repaired our roof by a company] after the storm.\n3. She [*had her passport stolen/stole her passport] in Rome.\n4. I need to [*get my eyes tested/test my eyes by a doctor].\n5. They got [*married/marry] last summer.\n6. We got [*stuck/stick] in traffic for two hours.",
      ),
      gaps(
        "Complete with have / get + object + 3rd form.",
        "1. I [had my hair cut] yesterday. Do you like it? (my hair / cut)\n2. We're [having a new kitchen installed/getting a new kitchen installed] next week. (a new kitchen / install)\n3. You should [have your car serviced/get your car serviced] before the trip. (your car / service)\n4. He [had his bike stolen] outside the gym. (his bike / steal)\n5. Can I [have this jacket cleaned/get this jacket cleaned] by Friday? (this jacket / clean)\n6. She [had her photo taken] for her new passport. (her photo / take)",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      match("Match.", [
        ["a plumber", "fixes pipes and leaks"],
        ["an electrician", "fixes lights and wiring"],
        ["a mechanic", "repairs cars"],
        ["a tailor", "makes and alters clothes"],
        ["a quote", "the price of a job before it's done"],
        ["DIY", "doing repairs yourself"],
      ]),
      write("Write a post for a website called “Life hacks” (140–190 words): which jobs do you do yourself, and which do you have done by professionals? Tell the story of one DIY success or disaster. Use have / get something done at least four times.", 140),
      record("Record a 1-minute story: “A time I got lost or got stuck somewhere.” 🎙️", 75),
    ],
    "Homework: Writing and speaking",
  ),
]);
