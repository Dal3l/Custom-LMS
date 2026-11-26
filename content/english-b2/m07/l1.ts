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

// 7.1 She accused me of lying — G: reporting verbs and their patterns: + -ing (deny, admit, suggest, recommend), + preposition + -ing (accuse sb of, blame sb for, apologize for, insist on, thank sb for), + to-infinitive (agree, refuse, offer, promise, threaten), + object + to-infinitive (warn, remind, advise, persuade, encourage), + that (admit, explain, complain, insist, suggest). V: relationships (fall out, make up, get on with, a misunderstanding, hold a grudge, clear the air, take sides…). S: retell an argument fairly, without taking sides. Main format: "put the quarrel in order" + a long reading (why we fall out and how we make up, ~560 words) + a long listening (Daniyar and Lucas fall out over a pot of feijoada; Ji-woo tells the story fairly, ~3:15). Video at home (BBC Learning English).
// Facts checked: the psychologist John Gottman (University of Washington, "love lab") described four behaviors that predict the end of relationships, the "Four Horsemen": criticism, contempt, defensiveness and stonewalling; in his research, stable couples had about five positive interactions for every negative one during conflict (the "5:1 ratio"); he calls attempts to calm a conflict (a joke, an apology, a touch) "repair attempts". Characters: Daniyar (studying in Seoul), Ji-woo and Lucas (his friends from B2 2.4: Ji-woo corrects his Korean, Lucas from Brazil cooks better than anyone he knows).
export default lesson("b2-7.1", "She accused me of lying", () => [
  section("Warm-up: How an argument happens", [
    box(
      "Today you will…",
      "- find out why friends fall out — and how they make up 🤝\n- report what people said with the right verb: accuse, deny, admit, apologize… 🗣️\n- tell the story of an argument fairly, without taking sides ⚖️",
    ),
    order(
      "Put the story of a typical argument in order. 😤➡️🤝",
      [[
        "Two friends plan to go to a concert together.",
        "One of them forgets to buy the tickets.",
        "The other one gets angry and accuses him of never thinking of anyone else.",
        "He refuses to apologize and says it wasn't his job.",
        "They don't speak to each other for a week.",
        "Finally, one of them calls and suggests meeting for coffee.",
        "They both apologize and laugh about it.",
      ].join("\n")],
      "lines",
    ),
    text(
      "Talk to your teacher.",
      "- What do friends or families usually argue about? 🤔\n- Are you quick to forgive, or do you hold a grudge?\n- Who usually apologizes first in an argument — you or the other person?",
    ),
    tip("Notice the verbs in the story: *accuses him of…, refuses to…, suggests meeting…* — today's grammar. Keep the talk light; nobody has to share a real argument if they don't want to."),
  ]),

  section("Vocabulary: Relationships", [
    words("Relationships", [
      ["fall out (with)", "😤 stop being friends after an argument", "She fell out with her sister."],
      ["make up", "🤝 become friends again after an argument"],
      ["get on (well) with", "😊 have a good relationship with someone"],
      ["a misunderstanding", "🌀 when people understand something differently"],
      ["hold a grudge", "🧊 stay angry with someone for a long time"],
      ["clear the air", "🌬️ talk openly to end bad feelings"],
      ["take sides", "⚖️ support one person in an argument"],
      ["let someone down", "😞 disappoint someone who trusted you"],
      ["see someone's point", "👀 understand someone's opinion"],
      ["forgive — forgave — forgiven", "💗 stop being angry with someone"],
    ]),
    match("Match.", [
      ["They had a big argument and", "fell out."],
      ["After a week, they", "made up."],
      ["I really get on", "with my new colleagues."],
      ["It was all just", "a misunderstanding."],
      ["Let's sit down and", "clear the air."],
      ["My parents never", "take sides when we argue."],
    ]),
    gaps(
      "Complete with a word from the list.",
      "1. Don't hold a [grudge] — it was ten years ago!\n2. You promised to help, and you let me [down].\n3. I don't agree, but I can see your [point].\n4. She found it hard to [forgive] him.\n5. We used to argue, but now we get [on] really well.\n6. It wasn't a lie — it was a [misunderstanding].",
    ),
  ]),

  section("Reading: Why we fall out — and how we make up", [
    tip("A long text (~560 words). First reading — 5 minutes: *According to the article, what matters more: how often people argue, or how they argue?* Then the tasks."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Gottman's research showed that happy couples never argue.", false],
        ["Contempt is one of the “Four Horsemen”.", true],
        ["Stonewalling means refusing to communicate.", true],
        ["Stable couples have about five positive moments for every negative one.", true],
        ["The writer says you should never apologize first.", false],
        ["A repair attempt can be as simple as a joke.", true],
      ],
      {
        read: [
          "## 🤝 Why we fall out — and how we make up",
          "Every relationship has arguments. Friends fall out over money, couples argue about housework, and families fight about who should host the New Year dinner. For a long time, people believed that the best relationships were the ones with the fewest arguments. Then a psychologist named John Gottman decided to watch couples actually arguing — and discovered that the number of arguments matters much less than the way people argue.",
          "In his laboratory at the University of Washington, which journalists soon called \"the love lab\", Gottman filmed thousands of couples as they discussed problems in their relationships. He measured what they said, the expressions on their faces, even their heart rates. Then he followed them for years to see which couples stayed together. Over time, he noticed four kinds of behavior that appeared again and again before relationships ended. He called them the Four Horsemen.",
          "The first is criticism: not complaining about something someone did (\"You forgot to buy the tickets\") but attacking who they are (\"You never think of anyone else\"). The second, and the most dangerous, is contempt — eye-rolling, sarcasm, mocking, treating the other person as if they were stupid. The third is defensiveness: refusing to accept any responsibility, or blaming the other person instead (\"It wasn't my job!\"). The fourth is stonewalling: shutting down completely, refusing to talk, staring at your phone while the other person speaks.",
          "The good news is that Gottman also found what works. Happy couples argue too — sometimes loudly. But during conflicts, they have about five positive interactions for every negative one: a smile, a kind word, a moment of agreement, a little humor. And they are good at what Gottman calls repair attempts. A repair attempt is anything that stops an argument getting worse: a joke, an apology, a touch on the arm, or simply saying, \"Okay, I can see your point.\" What matters isn't that the argument was perfect. It's that someone tried to repair it, and the other person accepted.",
          "Although Gottman studied couples, his ideas work for friendships, families and colleagues too. Before you speak, try to complain about the situation, not the person. Instead of \"You're so selfish\", try \"I was upset when you didn't call\". When you've made a mistake, admit it quickly; a sincere apology often ends an argument in seconds. And when the other person apologizes, accept it, even if it isn't perfect. Holding a grudge rarely punishes the other person; usually, it just makes you unhappy.",
          "Timing matters, too. When people are very angry, their heart beats fast and they find it difficult to listen. Gottman suggests taking a break of at least twenty minutes — doing something calming, not planning your next attack — and then coming back to clear the air.",
          "None of this means we should avoid conflict. Arguments can be healthy: they show that something matters to both people and give them a chance to understand each other better. The friends who never argue are not always the closest ones. Sometimes they're just the ones who have stopped telling each other the truth. 💬",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What did Gottman discover?", options: ["*How people argue matters more than how often.", "Happy couples never argue.", "Arguments always end relationships."] },
      { q: "What is the difference between a complaint and criticism?", options: ["*A complaint is about an action, criticism attacks the person.", "Criticism is more polite.", "There is no difference."] },
      { q: "Which Horseman is the most dangerous?", options: ["*contempt", "criticism", "stonewalling"] },
      { q: "What does Gottman suggest when people are very angry?", options: ["*a break of at least twenty minutes", "shouting to release the anger", "never discussing the problem again"] },
      { q: "What is the writer's final point?", options: ["*Arguments can be healthy.", "Close friends never argue.", "We should avoid conflict."] },
    ]),
    gaps(
      "Find words in the article.",
      "1. a feeling that someone is worthless: [contempt]\n2. saying the opposite of what you mean to hurt someone: [sarcasm]\n3. laughing at someone in an unkind way: [mocking]\n4. not accepting blame: [defensiveness]\n5. honest, really meant: [sincere]\n6. a disagreement or fight: a [conflict]",
    ),
  ]),

  section("Grammar: She accused me of lying", [
    quiz("Notice the rule 🔍 Look: “She accused me of lying.” · “He refused to apologize.” · “She suggested meeting for coffee.” · “He warned me not to be late.”", [
      { q: "After accuse sb of, blame sb for, apologize for we use…", options: ["*a preposition + -ing", "to + verb", "that + sentence"] },
      { q: "After refuse, promise, offer, agree we use…", options: ["*to + verb", "-ing", "object + -ing"] },
      { q: "After warn, remind, advise, persuade we use…", options: ["*object + to + verb", "-ing", "preposition + -ing"] },
    ]),
    table("reporting-verbs"),
    choose(
      "Choose.",
      "1. She accused me [*of lying/to lie]. 😠\n2. He refused [*to apologize/apologizing].\n3. They suggested [*going/to go] for a walk.\n4. My mum reminded me [*to call/calling] Grandma.\n5. He denied [*taking/to take] the money.\n6. I apologized [*for being/to be] late.\n7. She offered [*to help/helping] me with the move.\n8. They blamed me [*for losing/to lose] the keys.",
    ),
    gaps(
      "Complete with the right form of the verb in brackets.",
      "1. He admitted [eating] the last piece of cake. (eat)\n2. She promised [to call] me every day. (call)\n3. They warned us [not to swim] in the river. (not / swim)\n4. I insisted on [paying] for dinner. (pay)\n5. My teacher persuaded me [to enter] the competition. (enter)\n6. He thanked me for [helping] him. (help)",
    ),
  ]),

  section("Grammar: Report it with the right verb", [
    match("What did they say? Match the words and the reporting verb.", [
      ["“It was you! You broke it!”", "She accused him of breaking it."],
      ["“I didn't take your phone.”", "He denied taking her phone."],
      ["“OK, it was me. I forgot.”", "He admitted forgetting."],
      ["“I'm so sorry I was rude.”", "She apologized for being rude."],
      ["“Don't touch the oven — it's hot!”", "He warned her not to touch the oven."],
      ["“Let's go out for dinner.”", "She suggested going out for dinner."],
    ]),
    sort("Which pattern? Sort the verbs. 🧩", {
      "➡️ + to + verb": ["refuse", "promise", "offer", "agree"],
      "➡️ + -ing / preposition + -ing": ["deny", "suggest", "apologize for", "insist on"],
    }),
    gaps(
      "Report the sentences. Use the verb in capitals.",
      "1. “You forgot my birthday!” (ACCUSED) → She [accused him of forgetting] her birthday.\n2. “No, I didn't read your diary.” (DENIED) → He [denied reading] her diary.\n3. “I'll help you move.” (OFFERED) → Lucas [offered to help] me move.\n4. “Don't forget your passport.” (REMINDED) → Mum [reminded me to take/reminded me not to forget] my passport.\n5. “I'm sorry I shouted.” (APOLOGIZED) → He [apologized for shouting].\n6. “I won't lend you my car.” (REFUSED) → She [refused to lend] me her car.",
    ),
    drag(
      "Complete the story.",
      "Last week my brother accused me [of] taking his headphones. I denied [taking] them, of course. Then Mum suggested [looking] in his bag — and there they were! He refused [to] apologize at first, but Dad persuaded [him] to say sorry. In the end he apologized for [blaming] me and promised to buy me an ice cream. 🍦",
      ["to take", "for", "look"],
    ),
    order("Make sentences.", [
      "She accused me of lying.",
      "He refused to apologize.",
      "They suggested meeting for coffee.",
      "I apologized for being late.",
      "My friend warned me not to go.",
    ]),
    tip("Say it right: the reporting verb carries the meaning — stress it: *He de-NIED it. She ac-CUSED me.* Typical mistakes: *suggest to go* → *suggest going*; *apologize to be late* → *apologize for being late*; *explain me* → *explain to me*."),
  ]),

  section("Listening: The feijoada war", [
    tip("A long listening — about 3 minutes 15 seconds. In Seoul, Daniyar and his friend Lucas fell out. Their friend Ji-woo tells Daniyar's sister Madina what happened — fairly, without taking sides. First listen: *How did the argument end?* Second listen: the tasks."),
    ...listening(
      "Listen to Ji-woo telling the story of an argument.",
      "**Madina:** Ji-woo! Thanks for calling. Daniyar told me he'd had a fight with Lucas, but he only told me his side of the story. You were there. What actually happened?\n\n**Ji-woo:** Okay, I'll try to be fair, because they're both my friends. So, you know Lucas loves cooking. Last Friday, he spent the whole afternoon making feijoada — it's a Brazilian dish, black beans and meat — for a party on Saturday. He left a huge pot in the kitchen on our floor.\n\n**Madina:** And let me guess. Daniyar ate it.\n\n**Ji-woo:** Some of it. He came back from the library at midnight, starving, and saw the pot. He thought it was for everyone, because people often share food in that kitchen. So he had a bowl. Then another bowl.\n\n**Madina:** Oh, Daniyar.\n\n**Ji-woo:** The next morning, Lucas found that about a third of it was gone, and he was furious. He accused Daniyar of eating it without asking. At first, Daniyar denied eating so much. He said he'd only had \"a little bit\". Then Lucas found two bowls in Daniyar's room. So Daniyar admitted eating two bowls, but he insisted that he hadn't known it was for a party. And then Lucas said something like, \"You never think about anyone else.\" That was the moment it went really wrong.\n\n**Madina:** Because that's criticism, not a complaint.\n\n**Ji-woo:** Exactly! Daniyar got defensive. He blamed Lucas for leaving the pot in a shared kitchen without a note. Lucas refused to listen. They didn't speak for three days. It was so awkward — they sat at opposite ends of the table at lunch. Lucas even started cooking at a different time, so he wouldn't meet Daniyar in the kitchen. I felt like a child whose parents weren't speaking to each other.\n\n**Madina:** So how did it end?\n\n**Ji-woo:** Well, I didn't want to take sides. But I did suggest that they should talk. On Tuesday, Daniyar finally apologized for eating the food without asking. He offered to pay for the ingredients, and he promised to put a label on anything he leaves in the kitchen too, so nobody makes the same mistake with his food.\n\n**Madina:** And Lucas?\n\n**Ji-woo:** He accepted the apology. And he apologized for what he'd said — he admitted that it wasn't fair. He explained that he'd been stressed about the party, and he'd wanted everything to be perfect. Then he did something really nice. He refused to take Daniyar's money. Instead, he invited him to help cook the next feijoada.\n\n**Madina:** That's so Lucas.\n\n**Ji-woo:** I know. So on Thursday they cooked together for four hours. Daniyar chopped onions and cried the whole time. He claimed it was the onions.\n\n**Madina:** Of course he did. So they've made up?\n\n**Ji-woo:** Completely. Now Lucas has made a sign for the kitchen. It says, in English, Korean and Portuguese: \"If it's not yours, ask. If it's feijoada, ask twice.\"\n\n**Madina:** Ha! Thank you, Ji-woo. You'd make a very good judge.\n\n**Ji-woo:** Don't tell them that. They'll make me decide every argument now.",
    ),
    quiz("Listen and choose.", [
      { q: "Why did Daniyar eat the feijoada?", options: ["*He thought it was for everyone.", "Lucas offered it to him.", "He wanted to annoy Lucas."] },
      { q: "What made the argument much worse?", options: ["*Lucas said Daniyar never thinks about anyone else.", "Daniyar ate the whole pot.", "Ji-woo took sides."] },
      { q: "What did Daniyar blame Lucas for?", options: ["*leaving the pot in a shared kitchen without a note", "cooking too much", "inviting too many people"] },
      { q: "Why had Lucas been so angry?", options: ["*He was stressed and wanted the party to be perfect.", "He was very hungry.", "He didn't like Daniyar."] },
      { q: "What did Lucas do instead of taking Daniyar's money?", options: ["*invited him to cook together", "asked him to clean the kitchen", "made him buy a new pot"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Daniyar came back from the library at midnight.", true],
      ["Daniyar immediately admitted eating two bowls.", false],
      ["Lucas and Daniyar didn't speak for three days.", true],
      ["Ji-woo took Lucas's side.", false],
      ["Lucas accepted Daniyar's money for the ingredients.", false],
      ["The sign in the kitchen is in three languages.", true],
    ]),
    gaps(
      "Complete the sentences from the story.",
      "1. He accused Daniyar [of] eating it without asking.\n2. At first, Daniyar denied [eating] so much.\n3. He insisted that he hadn't [known] it was for a party.\n4. He blamed Lucas [for] leaving the pot in a shared kitchen.\n5. Daniyar finally apologized for [eating] the food without asking.\n6. He promised [to] put a label on anything he leaves in the kitchen.",
    ),
  ]),

  section("Let's talk: Tell it fairly", [
    text(
      "⚖️ Be the judge",
      "Tell your teacher about an argument — a real one (yours, a friend's, from a film or series) or an invented one. Tell it **fairly**, like Ji-woo: both sides, no taking sides.\n\nUse at least **six** reporting verbs: *accused… of, denied, admitted, insisted on / that, blamed… for, apologized for, refused to, suggested, promised to, offered to*.\n\nThen your teacher asks: *Who was right? What should each person have done?* (module 5 grammar!) 😉",
    ),
    tip("Count the reporting verbs the student uses and note the pattern mistakes. Then swap: you tell a short story (e.g. two neighbors and a noisy party) using the wrong patterns on purpose — the student corrects you."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "He denied ___ the window.", options: ["*breaking", "to break", "break"] },
      { q: "She refused ___ to me.", options: ["*to talk", "talking", "for talking"] },
      { q: "They blamed me ___ the mistake.", options: ["*for", "of", "about"] },
      { q: "After a week, they finally made ___.", options: ["*up", "out", "off"] },
    ]),
    box(
      "Phrase of the day: it takes two to tango",
      "💃🕺 Both people in a difficult situation are usually responsible — like Daniyar AND Lucas.\n\n*Do you agree that in an argument, both sides are always a little bit to blame?*",
    ),
  ]),

  homework(
    [
      video("Watch: BBC Learning English — 6 Minute Vocabulary: reporting verbs like 'insist', 'demand' and 'advise'.", "Pu_3OgQxe2s"),
      choose(
        "Choose.",
        "1. He admitted [*cheating/to cheat] in the test.\n2. My friend offered [*to drive/driving] me to the airport.\n3. She insisted [*on paying/to pay] for everything.\n4. The doctor advised me [*to rest/resting] for a week.\n5. They accused the company [*of lying/for lying] to customers.\n6. I suggested [*taking/to take] a taxi.",
      ),
      gaps(
        "Report the sentences.",
        "1. “I'll never do it again,” he said. → He promised [never to do/not to do] it again.\n2. “I didn't eat your sandwich,” she said. → She denied [eating] my sandwich.\n3. “Don't be late,” Mum told me. → Mum warned me [not to be] late.\n4. “Let's watch a film,” he said. → He suggested [watching] a film.\n5. “It's your fault we missed the bus!” she said. → She blamed me [for missing] the bus.\n6. “Sorry I forgot,” he said. → He apologized [for forgetting].",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      match("Match.", [
        ["fall out", "stop being friends after an argument"],
        ["make up", "become friends again"],
        ["hold a grudge", "stay angry for a long time"],
        ["clear the air", "talk to end bad feelings"],
        ["take sides", "support one person in an argument"],
        ["let someone down", "disappoint someone"],
      ]),
      write("Write a story (140–190 words) for a website called “We made up!”: two people (friends, family, neighbors…) fall out and then make up. Tell it fairly. Use at least six different reporting verbs.", 140),
      record("Record a 1-minute answer: “What's the best way to make up after an argument?” 🎙️", 75),
    ],
    "Homework: Writing and speaking",
  ),
]);
