import {
  box,
  choose,
  drag,
  gaps,
  homework,
  lesson,
  listening,
  match,
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

// 3.2 To be perfectly honest… — G: comment adverbs and attitude markers (frankly, admittedly, arguably, to be fair, to say the least, to put it mildly), intensifiers with gradable and non-gradable adjectives (extremely tired / utterly exhausted, highly unlikely, deeply grateful), softeners (somewhat, slightly, a tad, a bit of a). V: honesty and deception (a white lie, economical with the truth, come clean, sugar-coat…). S: "When is it OK not to tell the truth?" Main format: what they say vs what they mean + a long reading (in defense of the white lie, ~760 words) + a long listening (Asel's cake tasting, ~3:30) + BBC Learning English video at home.
// Facts checked: Bella DePaulo and colleagues (1996) — a diary study: college students reported telling about two lies a day, people from the community about one; most lies were small, and many were told to spare other people's feelings or to make interactions smoother. Immanuel Kant — in "On a Supposed Right to Lie from Philanthropy" (1797) argued that lying is wrong even to a murderer who asks where your friend is hiding.
// Warm-up format: match (what they say / what they mean) — after a sort in 3.1. Characters: Asel (Asel's Bakery — a second branch), Laura (from Manchester), Leo (outspoken), Kenji.
export default lesson("c1-3.2", "To be perfectly honest…", () => [
  section("Warm-up: What they say, what they mean", [
    box(
      "Today you will…",
      "- decode polite English — what people say and what they really mean 🕵️\n- show your attitude: *Frankly… Admittedly… to say the least… a tad…* 💬\n- discuss when (if ever) it's OK not to tell the truth 🤥",
    ),
    match("Polite English: what they say and what they (often) mean. Match. 😄", [
      ["“That's a very interesting idea.”", "I think it's a bad idea."],
      ["“I'll bear it in mind.”", "I'll forget it immediately."],
      ["“With the greatest respect…”", "I think you're completely wrong."],
      ["“Not bad at all.”", "That's actually really good."],
      ["“Correct me if I'm wrong…”", "I know I'm right."],
      ["“It's quite good.”", "It's a bit disappointing."],
    ]),
    text(
      "Talk to your teacher.",
      "- Do people in your culture say exactly what they mean, or do they prefer to hint?\n- Have you ever misunderstood someone because they were too polite — or too direct?\n- Is it more important to be honest or to be kind? Can you always be both?",
    ),
    tip("This is a well-known joke about British understatement — and it's only partly a joke. Laura, our teacher from Manchester, says that in the north of England “not bad” can be high praise. Ask the student for similar phrases in their own language."),
  ]),

  section("Vocabulary: Honesty and deception", [
    words("Honesty and lies", [
      ["a white lie", "🤍 a small lie told to be kind", "I told her I loved the scarf — it was a white lie."],
      ["economical with the truth", "✂️ not telling the whole truth (humorous, polite)"],
      ["come clean", "🧼 finally tell the truth about something"],
      ["a barefaced lie", "😐 an obvious lie told without shame"],
      ["bend the truth", "🌀 change the facts a little"],
      ["sugar-coat", "🍬 make bad news sound better than it is"],
      ["beat around the bush", "🌳 avoid saying something directly"],
      ["call a spade a spade", "♠️ say exactly what you think, directly"],
      ["tell it like it is", "📢 describe a situation honestly, even if it's unpleasant"],
      ["keep up appearances", "🎭 pretend everything is fine"],
      ["a fib", "🤏 a small, unimportant lie (informal)"],
      ["blunt", "🔨 very direct, without trying to be polite"],
    ]),
    match("Match the situations and the phrases.", [
      ["“After a month, he told his parents he'd quit university.”", "come clean"],
      ["“She said the delay was ‘a small technical issue’. The server had exploded.”", "sugar-coat"],
      ["“Just tell me! Stop talking about the weather.”", "beat around the bush"],
      ["“He mentioned his salary but not his debts.”", "economical with the truth"],
      ["“They lost their jobs but still invite everyone for expensive dinners.”", "keep up appearances"],
      ["“She looked straight at me and said she'd never seen my bike.”", "a barefaced lie"],
    ]),
    quiz("Choose the right word.", [
      { q: "My grandfather is very ___ — he'll tell you if your haircut is terrible.", options: ["*blunt", "white", "sugar-coated"] },
      { q: "I like her because she calls a spade a ___.", options: ["*spade", "shovel", "card"] },
      { q: "OK, I told a little ___ — I said I was ill, but I was just tired.", options: ["*fib", "truth", "spade"] },
      { q: "Politicians are often accused of ___ the truth.", options: ["*bending", "folding", "breaking"] },
    ]),
  ]),

  section("Grammar: Showing your attitude", [
    quiz("Notice the rule 🔍 Look: “Frankly, it's a terrible idea.” · “Admittedly, the price is high — but the quality is excellent.” · “The meeting was long, to say the least.” · “I was utterly exhausted.”", [
      { q: "“Frankly” tells the listener that…", options: ["*the speaker is about to be direct", "the speaker is joking", "the speaker is unsure"] },
      { q: "“Admittedly” is used to…", options: ["*accept a point before arguing the other way", "admit a crime", "end a conversation"] },
      { q: "Why can we say “utterly exhausted” but not “utterly tired”?", options: ["*“Exhausted” is already extreme; “utterly” goes with extreme adjectives.", "“Tired” is too informal.", "Both are wrong."] },
    ]),
    table("comment-adverbs"),
    choose(
      "Choose the correct option.",
      "1. I was [*absolutely/very] furious when I saw the bill.\n2. It's [*highly/utterly] unlikely that they'll finish on time.\n3. The film was [*utterly/extremely] ridiculous.\n4. We're [*deeply/highly] grateful for your help.\n5. She was [*bitterly/strongly] disappointed with the result.\n6. The new design is [*somewhat/utterly] better than the old one.\n7. The soup is [*a tad/a lot of] salty, but it's still delicious.\n8. He's [*a bit of a/a bit] perfectionist.",
    ),
    sort("Gradable or extreme? Sort the adjectives — then decide: very or absolutely? 🧩", {
      "📈 gradable (very, extremely)": ["tired", "angry", "cold", "good", "surprised"],
      "💥 extreme (absolutely, utterly)": ["exhausted", "furious", "freezing", "brilliant", "astonished"],
    }),
    gaps(
      "Complete with a comment adverb or phrase from the table.",
      "1. [Frankly/Honestly], I don't think we should hire him. He was late for the interview!\n2. [Admittedly/Granted], the hotel was expensive — but the view was worth it.\n3. The traffic was bad, to say the [least].\n4. To be [fair], she did apologize the next day.\n5. Messi is [arguably] the greatest footballer of his generation.\n6. The exam was difficult, to put it [mildly] — half the class failed.",
    ),
    drag(
      "Complete Asel's feedback to her new assistant with the words.",
      "To be [honest], the first week was a bit chaotic. [Admittedly], we were extremely busy. The croissants were [slightly] burnt on Tuesday, and the coffee was a [tad] too strong. But, to be [fair], the customers loved your cinnamon rolls — they were [absolutely] delicious!",
      ["very", "utterly", "frank"],
    ),
    tip("Say it right: comment adverbs at the start are followed by a short pause: *Frankly, ‖ it's a terrible idea.* Softeners are unstressed: *it's a tad ‖ SALty*. Practice giving criticism in two ways: blunt, then softened."),
  ]),

  section("Reading: In defense of the white lie", [
    tip("A long text (~760 words). First reading — 6 minutes: *Does Laura think lying is acceptable? When?* Then the tasks. Ask the student to find six comment adverbs, intensifiers or softeners in the text."),
    trueFalse(
      "Read the column. True or false?",
      [
        ["In DePaulo's study, students told fewer lies than other people.", false],
        ["Many of the lies in the study were told to make others feel better.", true],
        ["Kant believed that some lies are acceptable.", false],
        ["Laura's grandmother was famous for being completely honest.", true],
        ["Laura thinks honesty about people's appearance is always helpful.", false],
        ["Laura suggests asking yourself who the lie is really for.", true],
      ],
      {
        read: [
          "## 🤍 In defense of the white lie",
          "*by Laura, an English teacher in Almaty*",
          "Let me begin with a confession. This morning, before nine o'clock, I had already lied three times. I told a colleague that her new haircut was lovely. (It was, admittedly, a tad dramatic.) I told my neighbor I'd \"love to\" come to his son's violin concert. (I would rather have spent the evening at the dentist.) And I told a student, who asked whether her essay was good, that it was \"a really promising start\". (To put it mildly, it needed work.)",
          "If that makes me a terrible person, I am at least in large company. In 1996, the American psychologist Bella DePaulo and her colleagues asked two groups of people — college students and adults from the local community — to keep a diary of every lie they told for a week. The students reported telling about two lies a day; the community members, about one. Most of these lies were, unsurprisingly, small: exaggerating how much they liked a gift, pretending to agree, hiding a minor mistake. A large number were told not for personal gain but to protect someone else's feelings or to keep a conversation pleasant.",
          "Not everyone sees this as harmless. The German philosopher Immanuel Kant famously argued that lying is always wrong, without exception. In a short essay published in 1797, he went as far as to say that you should not lie even to a murderer who comes to your door and asks where your friend is hiding. Most people find this conclusion, frankly, absurd. But Kant's underlying point is harder to dismiss: every lie, however small, treats the other person as someone to be managed rather than respected. You decide what they are allowed to know.",
          "My grandmother in Manchester would have agreed with him, though she had never read a word of Kant. She was famous in our family for being utterly, devastatingly honest. If you put on weight, she told you. If your boyfriend was boring, she told you — in front of him. She called a spade a spade and, occasionally, a rusty old shovel. We loved her, and we were all slightly afraid of her. Arguably, she was the only person whose praise we completely trusted.",
          "Yet I'm not sure her approach made anyone happier. Telling someone that their wedding dress is unflattering on the morning of the wedding is honest, but it isn't useful. The truth, in that situation, can no longer change anything; it can only hurt. To my mind, that is where honesty stops being a virtue and becomes a kind of self-indulgence — the pleasure of saying what you think, paid for by someone else.",
          "So where should the line be drawn? I have come to rely on a simple question: *Who is this lie really for?* If I tell my colleague her haircut is lovely, the lie is mostly for her — and since she can't grow her hair back by lunchtime, the truth would be of no use to her. If, on the other hand, I tell my student her essay is wonderful, the lie is mostly for me: it saves me an uncomfortable conversation. But it costs her the chance to improve. That is not kindness. It is cowardice dressed up as kindness.",
          "Admittedly, this test doesn't solve every case. Some lies serve both people; some truths hurt both. Cultures differ, too. In England, we are notorious for saying \"quite good\" when we mean \"disappointing\", and \"I'll bear it in mind\" when we mean \"never\". My Kazakh friends are often far more direct with family and far more careful with strangers. My Japanese friend, Kenji, tells me that in his family, important things were often left unsaid, because everyone was expected to understand.",
          "What seems to matter, in the end, is not whether we ever lie, but whether the people around us can trust us on the things that matter. My grandmother told the truth about everything, including things that didn't matter. The best friends I have are more selective: kind about haircuts, honest about boyfriends — eventually — and completely, sometimes painfully, truthful when I ask them a question I really need answered.",
          "So, to my student, if you're reading this: your essay was not a promising start. It was a somewhat chaotic first draft with two excellent ideas buried in the middle. Let's find them together. That, I think, is the kind of truth worth telling. ✍️",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Why does Laura begin with her three lies?", options: ["*to show that white lies are very common, even for her", "to apologize to her colleague", "to criticize her neighbor"] },
      { q: "What is Kant's “underlying point”, according to Laura?", options: ["*Lying treats people as someone to manage, not respect.", "Murderers should be told the truth.", "Lies are useful in philosophy."] },
      { q: "Why does Laura call some honesty “self-indulgence”?", options: ["*It pleases the speaker but only hurts the listener.", "It's too expensive.", "It's typical of grandmothers."] },
      { q: "Why is the lie to her student wrong, according to Laura?", options: ["*It protects Laura and stops the student from improving.", "Students always know when teachers lie.", "The essay was actually good."] },
      { q: "What matters most in the end, according to Laura?", options: ["*being trustworthy about the things that really matter", "never lying about anything", "lying only to strangers"] },
    ]),
    gaps(
      "Find words and phrases in the article.",
      "1. completely unreasonable, silly: [absurd]\n2. extremely, in a way that shocks or upsets: [devastatingly]\n3. making you look less attractive (about clothes): [unflattering]\n4. a good quality in a person: a [virtue]\n5. well known for something bad: [notorious]\n6. choosing carefully: [selective]",
    ),
  ]),

  section("Listening: The honest cake test", [
    tip("A long listening — about 3 minutes 30 seconds. Asel is planning the menu for her second bakery and asks Laura, Leo and Kenji to taste a new cake — honestly. First listen: *Who is the most honest? Who is the kindest?* Second listen: the tasks. Ask the student to note comment adverbs, intensifiers and softeners."),
    ...listening(
      "Listen to Asel's cake tasting with Laura, Leo and Kenji.",
      "**Asel:** Right. Before you taste it, one rule. I don't want polite. I want honest. This cake is going on the menu at the new branch, and if it's bad, I need to know now — not after two hundred customers have told their friends.\n\n**Leo:** Honest. Got it. That's my specialty.\n\n**Laura:** Oh dear.\n\n**Asel:** It's a cardamom and apricot cake with a honey cream. Go on.\n\n**Kenji:** It looks beautiful.\n\n**Asel:** Kenji. Taste first, compliments later.\n\n**Leo:** OK… Frankly, the cream is amazing. Absolutely brilliant. The cake itself is a bit dry.\n\n**Asel:** Dry?\n\n**Leo:** Slightly dry. A tad. You asked for honest!\n\n**Asel:** I did. Thank you. Laura?\n\n**Laura:** Well, it's… it's a very interesting combination. I mean, I'd never have thought of cardamom with apricots. It's certainly… memorable.\n\n**Asel:** Laura, you're doing the English thing.\n\n**Laura:** What English thing?\n\n**Asel:** \"Interesting.\" \"Memorable.\" You told me last year that when an English person says \"interesting\", they mean \"terrible\".\n\n**Laura:** Did I? That was very careless of me. All right. To be perfectly honest, the cardamom is a little strong. Admittedly, I'm not a huge fan of cardamom in general, so that may well be just me. But after the second bite, it's all I can taste.\n\n**Leo:** See? That's what honest sounds like. It's not that difficult.\n\n**Laura:** It's easy for you, Leo. You were born without a filter. Last week you told the waiter his soup tasted like a swimming pool.\n\n**Leo:** It did, to be fair! He laughed. And then he changed the soup.\n\n**Asel:** He's got a point, Laura. If nobody tells you, you can't fix it.\n\n**Laura:** Fine. But there's a difference between honest and brutal.\n\n**Asel:** That's useful, both of you. Really. Kenji?\n\n**Kenji:** I think it's very good.\n\n**Asel:** Kenji.\n\n**Kenji:** It is very good! To be fair, I agree with Leo about the texture. It's somewhat dry at the edges, though the middle is perfect. And I agree with Laura that the cardamom is strong — but I actually like that. It's unusual. Arguably, that's what makes people remember it.\n\n**Leo:** That's the most diplomatic \"it's dry\" I've ever heard.\n\n**Kenji:** I work with designers. I've had practice.\n\n**Asel:** OK, so: the cream is good, the edges are dry, and the cardamom is either too strong or exactly right, depending on who you ask.\n\n**Laura:** That sounds about right. Sorry, Asel.\n\n**Asel:** Don't be sorry! This is exactly what I needed. Do you know how many times my friends have told me something was \"lovely\" and then never ordered it again?\n\n**Leo:** That's why you invited me. I'm the only one who'll tell you your cake is dry.\n\n**Asel:** You're the only one who tells me my coffee is too hot, my music is too loud and my sign is slightly crooked.\n\n**Leo:** It is slightly crooked.\n\n**Asel:** I know! Everyone's been too polite to say it for three years!\n\n**Kenji:** Can I make a suggestion? You could bake it for a bit less time, and use half the cardamom in one version, and test both with customers. Ask them to choose, not to give an opinion. People are more honest when they choose.\n\n**Asel:** That's a brilliant idea. Kenji, you're utterly wasted in tech.\n\n**Kenji:** I'll take that as a compliment.\n\n**Asel:** It was one. Mostly. Right — who wants another slice of the dry, controversial cake?\n\n**Leo:** Me, obviously.\n\n**Laura:** Just a small one. To be fair, it's growing on me.\n\n**Asel:** That, Laura, is the most English thing you've ever said.",
    ),
    quiz("Listen and choose.", [
      { q: "Why does Asel want honest opinions?", options: ["*The cake will be on the menu at her new branch.", "She is entering a competition.", "She wants to sell the recipe."] },
      { q: "What does Leo say about the cake?", options: ["*The cream is great, but the cake is a bit dry.", "It's perfect.", "It's too sweet."] },
      { q: "What does Asel mean by “the English thing”?", options: ["*using polite words that hide criticism", "drinking tea with cake", "talking about the weather"] },
      { q: "What does Kenji suggest?", options: ["*testing two versions and asking customers to choose", "removing the cardamom completely", "asking Leo to bake it"] },
      { q: "What has nobody told Asel for three years, except Leo?", options: ["*that her sign is slightly crooked", "that her coffee is cold", "that her prices are too high"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["The cake has cardamom, apricots and a honey cream.", true],
      ["Laura loves cardamom.", false],
      ["Kenji thinks the middle of the cake is perfect.", true],
      ["Kenji agrees that the cardamom is too strong and dislikes it.", false],
      ["Kenji says people are more honest when they choose.", true],
      ["Laura refuses another slice.", false],
    ]),
    gaps(
      "Complete the sentences from the conversation.",
      "1. [Frankly], the cream is amazing. Absolutely brilliant.\n2. Slightly dry. A [tad]. You asked for honest!\n3. To be perfectly [honest], the cardamom is a little strong.\n4. [Admittedly], I'm not a huge fan of cardamom in general.\n5. It's [somewhat] dry at the edges, though the middle is perfect.\n6. Kenji, you're [utterly] wasted in tech.",
    ),
  ]),

  section("Let's talk: Is it ever OK to lie?", [
    text(
      "What would you do? 🤥",
      "Discuss each situation. Would you tell the truth, a white lie, or say nothing? Why?\n\n1. Your best friend asks if you like their new partner. You don't.\n2. A colleague's presentation, which you saw, was boring. They ask how it went.\n3. Your grandmother has cooked a dish you hate and asks if it's good.\n4. A child asks if their pet hamster went to “live on a farm”.\n5. Your boss asks if you're happy in your job. You're looking for a new one.\n\nUse: *Frankly… / To be fair… / Admittedly…, but… / It would be somewhat… / to put it mildly…* — and Laura's test: **Who is the lie really for?**",
    ),
    tip("Push for nuance, not yes / no answers. Ask follow-ups: *And if they found out later? Would your answer be different in your culture / your family?* Note comment adverbs and intensifier + adjective collocations; correct *very exhausted* → *utterly exhausted / very tired*."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "I was ___ exhausted after the flight.", options: ["*utterly", "very", "highly"] },
      { q: "It's ___ unlikely that it will snow in July.", options: ["*highly", "utterly", "absolutely"] },
      { q: "___, the price is high — but the quality is excellent.", options: ["*Admittedly", "Utterly", "Somewhat"] },
      { q: "Stop beating around the ___ and tell me!", options: ["*bush", "tree", "garden"] },
    ]),
    box(
      "Phrase of the day: honesty is the best policy",
      "🤝 An old saying: being honest is always the wisest choice. Laura would add: *…on the things that matter.*\n\n*Is honesty always the best policy? When isn't it?*",
    ),
  ]),

  homework(
    [
      video("Watch: BBC Learning English — Should parents ever lie to children? (6 Minute English).", "Cn0oOdwryPo"),
      choose(
        "Choose.",
        "1. I was [*absolutely/extremely] starving after the hike.\n2. We're [*deeply/utterly] grateful for your support.\n3. It's [*highly/totally] likely that prices will rise.\n4. [*Frankly/Frank], I've had enough of this job.\n5. The hotel was disappointing, [*to say the least/to say at least].\n6. The room was [*a tad/a few] small for four people.\n7. She was [*bitterly/badly] disappointed not to be chosen.\n8. [*Admittedly/Admitted], I didn't read the instructions.",
      ),
      gaps(
        "Make the criticism softer. Use the word in brackets.",
        "1. The soup is salty. (tad) → The soup is [a tad salty].\n2. Your essay is chaotic. (somewhat) → Your essay is [somewhat chaotic].\n3. He's a perfectionist. (bit) → He's [a bit of a] perfectionist.\n4. The meeting was too long. (slightly) → The meeting was [slightly too long].\n5. The plan is risky. (rather) → The plan is [rather risky].\n6. The design is old-fashioned. (little) → The design is [a little old-fashioned].",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      match("Match the beginnings and endings.", [
        ["In the end, he decided to come…", "…clean about the accident."],
        ["Politicians are often economical…", "…with the truth."],
        ["My grandmother always tells it…", "…like it is."],
        ["Please don't sugar-coat…", "…the bad news."],
        ["Stop beating around…", "…the bush."],
        ["They were struggling, but kept up…", "…appearances."],
      ]),
      write(
        "Essay (220–260 words): “Honesty is always the best policy.” Discuss, giving examples from different situations — family, friendship, work. Use at least five comment adverbs, intensifiers or softeners.",
        220,
        { read: "*Plan:* introduction · when honesty clearly matters · when a white lie may be kinder · your own view and a rule you follow. Useful: *Admittedly… / Arguably… / To be fair… / It is highly unlikely that… / to put it mildly*" },
      ),
      record("Record a 1–2 minute answer: “Tell me about a time someone was honest with you and it really helped — or really hurt.” 🎤", 120),
    ],
    "Homework: Writing and speaking",
  ),
]);
