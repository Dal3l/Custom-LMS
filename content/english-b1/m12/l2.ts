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

// 12.2 If I hadn't… — G: Third Conditional (first steps): If + had + 3rd form, would have + 3rd form; could have / might have; review of all conditionals (0, 1, 2, 3). V: chance and accidents (by chance, by accident, on purpose, a coincidence, a turning point…). S: tell an "if it hadn't been for…" story. Main format: a chain-of-events game (how the Beatles met) + a long reading (happy accidents in science, ~470 words) + a long listening (Zarina's podcast with Ruslan and Asel about turning points, ~2:45). Video at home.
// Facts checked: John Lennon and Paul McCartney met on 6 July 1957 at the St Peter's Church fête in Woolton, Liverpool, introduced by Ivan Vaughan; Paul played “Twenty Flight Rock”; George Harrison joined in 1958, Ringo Starr in August 1962. Fleming — returned from holiday in September 1928, mould on a Staphylococcus plate, Nobel Prize 1945 (with Florey and Chain). Percy Spencer (Raytheon) — a melted chocolate bar near a magnetron in 1945; the first microwave oven (Radarange, 1947) was almost 1.8 m tall. George de Mestral — burrs on his dog after a walk in 1941, Velcro (velours + crochet), patent 1955. Post-it — Spencer Silver's weak glue (3M, 1968), Art Fry's bookmarks in a church choir book (1974), on sale across the USA in 1980.
export default lesson("b1-12.2", "If I hadn't…", () => [
  section("Warm-up: One afternoon in 1957", [
    box(
      "Today you will…",
      "- talk about moments that changed everything 🔀\n- imagine a different past: *If I hadn't missed the bus, I wouldn't have met her.* ⏪\n- discover famous discoveries that happened by accident 🧪",
    ),
    order(
      "How did the Beatles begin? 🎸 Put the events in order.",
      [[
        "On 6 July 1957, Ivan Vaughan took his school friend Paul McCartney to a church party in Woolton, Liverpool.",
        "A local band, the Quarrymen, was playing there. Their leader was John Lennon.",
        "After the show, Ivan introduced Paul to John, and Paul played a rock and roll song on the guitar.",
        "John was impressed, and soon Paul was invited to join the band.",
        "The next year, Paul brought his young friend George Harrison into the band.",
        "In 1962, Ringo Starr joined, and the Beatles were complete.",
      ].join("\n")],
      "lines",
    ),
    text(
      "Talk to your teacher.",
      "- What if Paul had stayed at home that afternoon? Would the Beatles have existed? 🤔\n- Think of a friend you met by chance. How did it happen?\n- Do you believe in luck — or do we make our own luck?",
    ),
    tip("Don't teach the form yet. Let the student guess: *If Paul hadn't gone to the party…* — help with the second half: *…the Beatles might not have existed.* Ask: *Did it happen?* (Yes, he went!) — that's the key idea."),
  ]),

  section("Vocabulary: Chance and accidents", [
    words("Chance and accidents", [
      ["by chance", "🎲 without planning it", "We met by chance at the airport."],
      ["by accident (by mistake)", "😬 not on purpose", "I deleted the file by accident."],
      ["on purpose", "🎯 because you wanted to", "Did you do that on purpose?"],
      ["a coincidence", "😮 when two things happen together by chance", "What a coincidence — me too!"],
      ["a turning point", "🔀 a moment when everything changes"],
      ["luck — lucky — unlucky", "🍀 good or bad things that happen by chance"],
      ["bump into", "🙃 meet someone you know by chance", "I bumped into my teacher at the market."],
      ["happen to", "✨ do something by chance", "I happened to be there when it started."],
      ["a discovery", "🔬 finding something new"],
      ["notice", "👀 see something, often for the first time", "She noticed that the glass was empty."],
      ["a mistake", "❌ something you did wrong"],
      ["it changed everything", "🌍 after that, life was different"],
    ]),
    match("Match.", [
      ["by", "chance"],
      ["on", "purpose"],
      ["bump", "into"],
      ["a turning", "point"],
      ["make a", "discovery"],
      ["What a", "coincidence!"],
    ]),
    gaps(
      "Complete with a word from the list.",
      "1. I didn't break the vase on [purpose]! It was an accident. 🏺\n2. Guess who I bumped [into] at the supermarket — my old teacher!\n3. We were born on the same day in the same hospital — what a [coincidence]!\n4. Moving to Almaty was a turning [point] in my life.\n5. I sent the message to my boss by [mistake/accident]. 😱\n6. He was [lucky] — the bus was late, so he caught it.\n7. Did you [notice] that she has a new haircut?\n8. I [happened] to be in Paris when the concert was on. 🎶",
    ),
  ]),

  section("Reading: Happy accidents", [
    tip("A long text (~470 words). First reading — 4 minutes: *Which discovery is the most useful for you today?* Then the tasks. Ask the student to underline every sentence with *If… had…* — the grammar of the next section."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Fleming found the mould after a holiday.", true],
        ["Fleming won the Nobel Prize alone.", false],
        ["Percy Spencer was trying to invent a new oven.", false],
        ["The first microwave ovens were very big.", true],
        ["The idea for Velcro came from a walk with a dog.", true],
        ["Spencer Silver's glue was too strong.", false],
        ["Art Fry used the weak glue to make bookmarks.", true],
      ],
      {
        read: [
          "## 🧪 Happy accidents: four discoveries nobody planned",
          "We usually imagine great inventors working day and night with a clear plan. But some of the most useful things in our lives were discovered by accident — by people who simply noticed something strange and asked, \"Why?\"",
          "**💊 A messy laboratory.** In September 1928, the Scottish scientist Alexander Fleming came back to his London laboratory after a summer holiday. Before he left, he hadn't cleaned some glass dishes with bacteria in them. Now he noticed that a blue-green mould was growing on one dish — and around it, the bacteria had died. That mould gave the world penicillin, the first antibiotic, which has saved millions of lives. In 1945, Fleming shared the Nobel Prize with two other scientists, who found a way to produce it in large amounts. If Fleming had been a tidier person, he might not have made the discovery at all!",
          "**🍫 A melted chocolate bar.** In 1945, the American engineer Percy Spencer was working with radar equipment when he noticed that the chocolate bar in his pocket had melted. He wasn't trying to cook anything — but he was curious. He tried again with popcorn, and it started popping. Two years later, the first microwave oven went on sale. It was almost 1.8 meters tall and cost a fortune. If Spencer hadn't had a snack in his pocket that day, we would probably have waited much longer for microwaves.",
          "**🐕 A dog in the mountains.** In 1941, the Swiss engineer George de Mestral went for a walk with his dog. When they came home, both of them were covered in little seeds that stuck to everything. Instead of just cleaning them off, he looked at them under a microscope and saw thousands of tiny hooks. It took him years to copy the idea, but in 1955 he got a patent for Velcro — from the French words *velours* (velvet) and *crochet* (hook). Today it's on shoes, bags and even space suits.",
          "**📝 A failed glue.** In 1968, Spencer Silver, a scientist at the company 3M, was trying to make a super-strong glue. Instead, he made a very weak one: it stuck, but it came off easily. For years, nobody knew what to do with it. Then his colleague Art Fry, who sang in a church choir, got angry because his paper bookmarks kept falling out of his song book. He remembered Silver's glue — and the Post-it Note was born. It went on sale across the USA in 1980.",
          "What do these stories have in common? Each \"mistake\" became a discovery because someone noticed it. So next time something goes wrong, don't just clean it up. Look closer — you never know! 🔍",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What did Fleming notice around the mould?", options: ["*The bacteria had died.", "The dish had broken.", "The bacteria had grown faster."] },
      { q: "What was Spencer working with?", options: ["*radar equipment", "a new kind of oven", "chocolate"] },
      { q: "What did de Mestral see under the microscope?", options: ["*tiny hooks", "small insects", "dog hair"] },
      { q: "Why was Art Fry angry?", options: ["*His bookmarks kept falling out.", "Silver's glue didn't work.", "He lost his song book."] },
      { q: "What's the main message of the article?", options: ["*Mistakes can become discoveries if you notice them.", "Scientists are often messy.", "Only engineers make discoveries."] },
    ]),
    gaps(
      "Find words in the article.",
      "1. a soft green or blue thing that grows on old food: [mould/mold]\n2. very small living things that can make you ill: [bacteria]\n3. wanting to know about things: [curious]\n4. a very large amount of money: a [fortune]\n5. an official paper that says an invention is yours: a [patent]\n6. a group of people who sing together: a [choir]",
    ),
  ]),

  section("Grammar: Third Conditional", [
    quiz("Notice the rule 🔍 Look: “If Spencer hadn't had a snack in his pocket, we would have waited longer.”", [
      { q: "Did Spencer have a snack in his pocket?", options: ["*Yes — the “if” part is the opposite of what happened.", "No, he didn't."] },
      { q: "Is the sentence about the past or the future?", options: ["*the past — it's an imaginary past", "the future", "now"] },
      { q: "What comes after “if”?", options: ["*had + 3rd form", "would + verb", "will + verb"] },
    ]),
    table("third-conditional"),
    choose(
      "Choose the right form.",
      "1. If I [*had known/knew] about the party, I would have come. 🎉\n2. If she hadn't missed the bus, she [*wouldn't have met/wouldn't meet] him.\n3. We would have won if we [*had practiced/would have practiced] more.\n4. If Fleming had cleaned the dishes, he [*might not have/might not] found penicillin.\n5. I [*would have called/would call] you if my phone hadn't died. 📱\n6. If it hadn't rained, we [*could have/could] had a picnic.\n7. If you'd asked me, I [*would have/had] helped you.\n8. They wouldn't have got lost if they [*had taken/took] a map. 🗺️",
    ),
    gaps(
      "Complete with the right form of the verbs in brackets.",
      "1. If I [had left] (leave) earlier, I wouldn't have missed the train.\n2. If she had studied, she [would have passed] (pass) the exam.\n3. We [wouldn't have met] (not meet) if you hadn't invited me.\n4. If he [hadn't broken] (not break) his leg, he would have played in the final. ⚽\n5. What [would you have done] (you / do) if you had lost your passport?\n6. If they [had booked] (book) earlier, the tickets would have been cheaper.\n7. I would have bought the jacket if it [hadn't been] (not be) so expensive.\n8. If Art Fry [hadn't sung] (not sing) in a choir, 3M might not have made the Post-it!",
    ),
    drag(
      "Complete the story of a lucky day.",
      "Last Monday I overslept, so I missed my usual bus. If my alarm [had] worked, I would have caught it. While I was waiting for the next one, I [bumped] into an old friend from school. She told me her company needed a designer. If I hadn't [missed] the bus, I wouldn't [have] met her. And if she hadn't told me about the job, I [wouldn't] have applied. I got the job! What a [turning] point. 🍀",
      ["would", "has", "lucky"],
    ),
    order("Make sentences.", [
      "If I had known, I would have helped.",
      "She would have come if you had asked.",
      "If we hadn't got lost, we wouldn't have found the café.",
      "What would you have done?",
      "He might have won if he had trained.",
    ]),
    tip("Pronunciation: in speech it's short — *If I'd known, I'd've come* /aɪdəv/. *Would have* → /wʊdəv/. Drill the order sentences with the short forms."),
  ]),

  section("Listening: Turning points", [
    tip("A long listening — about 2 minutes 45 seconds. Zarina's podcast: Ruslan (the hiker who got lost in module 2 — now a rescuer) and Asel (from the bank to her own bakery). First listen: *What was each person's turning point?* Second listen: the tasks."),
    ...listening(
      "Listen to Zarina's podcast. Two guests talk about the turning points in their lives.",
      "**Zarina:** Hello and welcome to Sliding Doors, the podcast about small moments that change everything. I'm Zarina. Today I have two guests whose lives changed in one day. Ruslan, let's start with you.\n\n**Ruslan:** Hi, Zarina. Well, two years ago, I went for a one-day walk in the mountains, alone. I didn't tell anyone my exact route, and I didn't take a map. I left the path, and then the fog came down. I was lost for more than a day.\n\n**Zarina:** That sounds terrifying.\n\n**Ruslan:** It was. I drank river water and stayed in one place, and on the second day a helicopter found me. More than fifty volunteers had searched for me all night. People I'd never met! That was my turning point. If I hadn't got lost, I would never have met those volunteers. And if I hadn't met them, I wouldn't have become a rescuer.\n\n**Zarina:** So in a way, getting lost was lucky?\n\n**Ruslan:** Ha! I wouldn't say lucky. If I'd taken a map, I'd have saved my family a terrible night. But it changed my life. Now I lead the trips, and I always tell people: take a map, and tell someone where you're going.\n\n**Zarina:** Great advice. Asel, your story is very different.\n\n**Asel:** It is! I worked in a bank for eight years. Good salary, nine to five, everything my parents wanted for me. But I wasn't happy. My turning point was a birthday cake.\n\n**Zarina:** A cake?\n\n**Asel:** Yes! A colleague's daughter was turning six, and the bakery cancelled her cake at the last minute. My colleague was almost crying, so I said, \"Don't worry, I'll bake one tonight.\" I'd only baked for my family before. At the party, three parents asked for my number. If that bakery hadn't cancelled the order, I would never have baked that cake. And nobody would have asked for my number.\n\n**Zarina:** What happened next?\n\n**Asel:** I started baking at weekends, just for friends. Then for friends of friends. After a year, I was earning almost as much at weekends as at the bank! So I took a risk and left. Now I have my own bakery near the river.\n\n**Zarina:** Do you ever think about what would have happened if you'd stayed at the bank?\n\n**Asel:** Sometimes. I would have had more money, maybe. But I would have been bored. And I wouldn't have had to get up at four every morning — that's the only thing I miss about the bank!\n\n**Zarina:** And my own sliding doors moment? Eight years ago, a friend from a dubbing studio called me and asked me to play a mouse with three lines. If I hadn't answered the phone that day, I would never have become a voice actor. Thank you both, and see you next week!",
    ),
    quiz("Listen and choose.", [
      { q: "What did Ruslan forget to do before his walk?", options: ["*tell someone his route and take a map", "charge his phone", "buy water"] },
      { q: "How was Ruslan found?", options: ["*A helicopter found him.", "He walked back alone.", "A farmer found him."] },
      { q: "What is Ruslan's job now?", options: ["*He's a rescuer and leads trips.", "He's a pilot.", "He sells maps."] },
      { q: "Why did Asel bake the cake?", options: ["*The bakery had cancelled the order.", "It was her own birthday.", "Her boss asked her to."] },
      { q: "What doesn't Asel like about her new job?", options: ["*getting up at four in the morning", "the money", "the customers"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Ruslan was lost for more than a day.", true],
      ["Ruslan thinks getting lost was lucky.", false],
      ["Asel worked in a bank for eight years.", true],
      ["Asel had often baked for other people before the party.", false],
      ["Two parents asked for Asel's number at the party.", false],
      ["Zarina's first role was a mouse with three lines.", true],
    ]),
    gaps(
      "Complete what they said. Listen again if you need.",
      "1. Ruslan: If I hadn't got [lost], I would never have met those volunteers.\n2. Ruslan: If I hadn't met them, I wouldn't have [become] a rescuer.\n3. Ruslan: If I'd taken a [map], I'd have saved my family a terrible night.\n4. Asel: If that bakery hadn't [cancelled] the order, I would never have baked that cake.\n5. Asel: I would have been [bored].\n6. Zarina: If I hadn't [answered] the phone that day, I would never have become a voice [actor].",
    ),
  ]),

  section("Grammar: All the conditionals", [
    table("all-conditionals"),
    sort("Which conditional is it? Sort the sentences. 🧩", {
      "0 · always true": ["If you heat water to 100°C, it boils.", "If I drink coffee late, I can't sleep."],
      "1 · real future": ["If it rains tomorrow, we'll stay home.", "If you study, you'll pass."],
      "2 · imaginary now": ["If I had a boat, I'd sail around the world.", "If I were you, I'd apologize."],
      "3 · imaginary past": ["If I'd known, I'd have called you.", "If we'd left earlier, we wouldn't have missed it."],
    }),
    choose(
      "Mixed review. Choose.",
      "1. If you [*press/pressed] this button, the machine starts. (always)\n2. If I [*see/saw] Kenji tomorrow, I'll tell him.\n3. If I [*had/have] more time, I'd learn to paint. (but I don't)\n4. If she [*had told/told] me yesterday, I would have helped.\n5. I'll call you if I [*get/will get] lost.\n6. If I [*were/am] rich, I'd buy an island. 🏝️\n7. We [*would have gone/would go] to the beach last week if it hadn't rained.\n8. Unless you hurry, you [*'ll miss/'d missed] the bus.",
    ),
  ]),

  section("Let's talk: If it hadn't been for…", [
    text(
      "Your sliding doors story 🚪",
      "Think of a moment that changed something in your life — big or small: a person you met, a choice, a mistake, a lucky accident.\n\nTell your teacher in 2 minutes:\n\n- What happened? When and where?\n- What would have happened if it hadn't happened? *If I hadn't…, I wouldn't have…*\n- Are you glad it happened?\n\n🔗 **Chain game:** then play with your teacher: *If I hadn't woken up late, I wouldn't have missed the bus. If I hadn't missed the bus, I wouldn't have…* — who can make the longest chain?",
    ),
    tip("Help the student build the chain step by step. Note good third conditional sentences and typical mistakes: *If I would have known…*, *If I knew, I would have…*."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "If I ___ earlier, I'd have caught the train.", options: ["*had left", "left", "would leave"] },
      { q: "She ___ if you had invited her.", options: ["*would have come", "will come", "came"] },
      { q: "If I were you, I ___ the job.", options: ["*'d take", "'ll take", "'d have taken"] },
      { q: "I broke it ___ — sorry!", options: ["*by accident", "on purpose", "by chance of"] },
    ]),
    box(
      "Phrase of the day: a sliding doors moment",
      "🚪 **A sliding doors moment** — a small moment that changes your life. It comes from the film *Sliding Doors* (1998): a woman catches a train in one story and misses it in another — and her two lives become completely different.\n\n*What was your sliding doors moment?* 😉",
    ),
  ]),

  homework(
    [
      video("Watch: the third conditional.", "uyIoPpVbOhc"),
      choose(
        "Choose.",
        "1. If I [*had seen/saw] you, I would have said hello.\n2. She [*would have been/would be] late if she hadn't taken a taxi.\n3. If we [*hadn't/didn't] lost the map, we wouldn't have got lost.\n4. If you'd told me, I [*could have/can] helped.\n5. If it [*rains/rained] tomorrow, we'll stay at home.\n6. If I [*were/would be] you, I'd talk to her.\n7. He [*might have/might] passed if he'd studied more.\n8. If you mix red and white, you [*get/would have got] pink.",
      ),
      gaps(
        "Write Third Conditional sentences.",
        "1. I didn't know it was your birthday, so I didn't buy a present. → If I [had known] it was your birthday, I [would have bought] a present. 🎁\n2. She didn't take an umbrella, so she got wet. → If she [had taken] an umbrella, she [wouldn't have got] wet.\n3. We missed the start because the traffic was bad. → If the traffic [hadn't been] bad, we [wouldn't have missed] the start.",
      ),
      trueFalse("Correct or not?", [
        ["If I would have known, I would have come.", false],
        ["If I had known, I would have come.", true],
        ["If she hadn't missed the bus, she wouldn't have met him.", true],
        ["If we had more time, we would have visited the museum yesterday.", false],
        ["I'd have helped if you'd asked.", true],
      ]),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      match("Match.", [
        ["by", "accident"],
        ["on", "purpose"],
        ["bump", "into"],
        ["a turning", "point"],
        ["What a", "coincidence!"],
        ["make a", "discovery"],
      ]),
      write("Write a story for a website called “Sliding Doors” (100+ words): a small moment that changed something in your life — or in the life of someone you know. Use at least four Third Conditional sentences.", 100, {
        read: "*Example:* Three years ago, I wanted to study economics. But on the day of the open day, my train was cancelled, so I went to a different university near my house. There, I happened to meet a teacher of design… If my train hadn't been cancelled, I would never have visited that university. If I hadn't met that teacher, I wouldn't have…",
      }),
      record("Record your sliding doors story for Zarina's podcast (1–2 minutes). 🎙️", 120),
    ],
    "Homework: Writing and speaking",
  ),
]);
