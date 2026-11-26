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
  table,
  text,
  tip,
  trueFalse,
  video,
  words,
  write,
} from "../../kit";

// 10.2 Having lived abroad… — G: participle clauses: -ing for actions at the same time or reasons (Feeling tired, I went to bed), Having + 3rd form for an earlier action (Having lived abroad, she…), past participle with a passive meaning (Built in 1890, the house…), reduced relative clauses (the man standing there, a book written in 1961); the dangling participle mistake. V: migration and culture (emigrate / immigrate, an expat, homesick, settle in, fit in, adapt to, integrate, customs, a newcomer, bilingual). S: compare life in two countries. Main format: migration facts true / false + a long reading (third culture kids — "Where are you from? It's complicated", ~550 words) + TED video (Pico Iyer, Where is home?) + a long listening (Zarina's podcast with Laura, Kenji and Lucas — three people living abroad, ~3:15). Video at home (BBC Learning English, participle clauses).
// Facts checked: according to the UN, about 281 million people (about 3.6% of the world's population) were international migrants in 2020; refugees are a minority of them; India has the largest number of people living abroad; the term "third culture kids" was introduced by the sociologist Ruth Hill Useem in the 1950s after studying American families living in India; Pico Iyer was born in England to Indian parents, grew up partly in California and has lived in Japan for many years — his TED talk "Where is home?" (2013). Characters: Laura (from Manchester, an English teacher in Almaty; felt homesick at first — B2 earlier), Kenji (from Japan, works at a tech company in Almaty), Lucas (from Brazil, studying in Seoul, loves cooking — 7.1), Zarina (podcaster).
export default lesson("b2-10.2", "Having lived abroad…", () => [
  section("Warm-up: People on the move", [
    box(
      "Today you will…",
      "- find out why “Where are you from?” can be a difficult question 🌍\n- tell stories more elegantly: Having arrived…, Feeling homesick…, Built in 1890… ✍️\n- compare life in two countries 🇰🇿🇯🇵🇧🇷🇬🇧",
    ),
    trueFalse("Migration: true or false? Guess first. 🌍", [
      ["About 280 million people live outside the country where they were born.", true],
      ["That's more than 3% of the world's population.", true],
      ["Most international migrants are refugees.", false],
      ["India is the country with the most people living abroad.", true],
      ["“Third culture kids” are children who grow up in a culture different from their parents'.", true],
    ]),
    text(
      "Talk to your teacher.",
      "- Have you ever lived (or would you like to live) in another country? Where?\n- What would you miss most about home? 🏠\n- Do you know anyone who grew up between two cultures? What is it like for them?",
    ),
    tip("The answers come from UN data (2020). Use the talk to introduce vocabulary: *settle in, fit in, homesick, adapt*."),
  ]),

  section("Vocabulary: Migration and culture", [
    words("Migration and culture", [
      ["emigrate — immigrate", "✈️ leave your country to live abroad — 🛬 come to live in a new country"],
      ["an expat", "🌍 a person living outside their own country (often for work)"],
      ["homesick", "🥺 sad because you miss home"],
      ["settle in", "🛋️ start to feel comfortable in a new place"],
      ["fit in", "🧩 feel accepted as part of a group"],
      ["adapt (to)", "🦎 change to suit a new situation"],
      ["integrate", "🤝 become part of a community"],
      ["customs", "🎎 traditional ways of doing things"],
      ["a newcomer", "🆕 a person who has just arrived"],
      ["bilingual", "🗣️🗣️ able to speak two languages fluently"],
    ]),
    match("Match.", [
      ["It took me six months to", "settle in."],
      ["At first I felt very", "homesick."],
      ["Children usually adapt", "faster than adults."],
      ["She grew up bilingual —", "Kazakh and Russian."],
      ["Learning local customs", "helps you fit in."],
      ["The city welcomes", "newcomers from all over the world."],
    ]),
    gaps(
      "Complete with a word from the list.",
      "1. Her grandparents [emigrated] from Korea to Kazakhstan.\n2. It's hard to [fit] in when you don't speak the language.\n3. Many [expats] in Dubai work in banking.\n4. Every country has its own [customs] — for example, how to greet people.\n5. The school helps immigrant children [integrate].\n6. As a [newcomer], I didn't know where anything was.",
    ),
  ]),

  section("Reading: “Where are you from?” — It's complicated", [
    tip("A long text (~550 words). First reading — 5 minutes: *Why is “Where are you from?” a difficult question for third culture kids?* Then the tasks. Ask the student to underline the participle clauses at the start of sentences."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["The term “third culture kids” was created in the 1950s.", true],
        ["Ruth Hill Useem studied families in Japan.", false],
        ["The “third culture” is the culture of the parents.", false],
        ["Many third culture kids find it easy to adapt to new places.", true],
        ["Pico Iyer was born in India.", false],
        ["The writer suggests a different question instead of “Where are you from?”", true],
      ],
      {
        read: [
          "## 🌍 “Where are you from?” — It's complicated",
          "For most people, it's the easiest question in the world. For Selin, it's the hardest. Born in Almaty to a Kazakh father and a German mother, raised in Dubai and educated at an international school in Singapore, she has never known what to say. At school, her best friends came from Brazil, India and Canada, and the four of them spoke a mixture of English, Spanish slang and jokes nobody else understood. \"If I say Kazakhstan, people expect me to know places I've only visited on holiday. If I say Germany, my German cousins laugh at my accent. If I say Dubai, people ask why I'm not Emirati.\" Having moved five times before she was eighteen, Selin usually just smiles and says, \"It's complicated.\"",
          "Selin is what sociologists call a third culture kid. The term was introduced in the 1950s by the American sociologist Ruth Hill Useem. Studying American families who were living and working in India, she noticed that their children didn't fully belong to either American or Indian culture. Instead, they created a \"third culture\" of their own, shared with other children who had grown up between countries. Today, with millions of families moving for work, there are more third culture kids than ever.",
          "Growing up this way brings real advantages. Having changed schools and countries many times, third culture kids often become very good at adapting. Many are bilingual or even trilingual. Used to meeting people from different backgrounds, they tend to be open-minded and curious, and they often notice things that locals miss. Some become excellent diplomats, translators or teachers.",
          "But there are difficulties, too. Moving constantly, many of them find it hard to keep friendships. Saying goodbye becomes a normal part of life: every summer some friends leave, and new ones arrive in September. They may feel like a visitor everywhere, even in the country printed on their passport. Asked about their \"home\", some describe a feeling rather than a place. Returning to their parents' country as young adults, they sometimes experience a strange \"reverse culture shock\": they look like everyone else but feel like outsiders.",
          "The travel writer Pico Iyer knows this feeling well. Born in England to Indian parents, he grew up partly in California and has lived in Japan for many years. In a well-known TED talk, he described himself as a kind of \"multicultural mix\" and suggested that, for more and more people, home is not the place where they were born. Home, he said, is less about the soil and more about the soul — the place where you become yourself.",
          "So what should you ask a person like Selin? Experts on third culture kids often suggest a simple change. Instead of \"Where are you from?\", try \"Where do you feel at home?\" or \"Where did you grow up?\" Given the chance to tell their story instead of choosing one country, most people are happy to talk.",
          "Selin has found her own answer. Asked recently by a new classmate, she laughed and said, \"I'm from the airport.\" Then, seeing his confused face, she added: \"And from everywhere I've ever been happy.\" ✈️",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Why is “Where are you from?” hard for Selin?", options: ["*Every answer creates new questions.", "She doesn't want to talk.", "She was born on a plane."] },
      { q: "What is the “third culture”?", options: ["*a culture shared by children who grew up between countries", "the culture of the parents", "the culture of the new country"] },
      { q: "What is one advantage of being a third culture kid?", options: ["*They are often good at adapting.", "They never move.", "They have more money."] },
      { q: "What is “reverse culture shock”?", options: ["*feeling like an outsider when returning to your parents' country", "loving a new country immediately", "forgetting your language"] },
      { q: "What does Pico Iyer say about home?", options: ["*It's the place where you become yourself.", "It's where you were born.", "It's your passport country."] },
    ]),
    gaps(
      "Find words in the article.",
      "1. brought up (as a child): [raised]\n2. able to speak three languages: [trilingual]\n3. people who live in a place: [locals]\n4. all the time: [constantly]\n5. people who don't belong to a group: [outsiders]\n6. the earth in which plants grow: the [soil]",
    ),
  ]),

  section("Grammar: Having lived abroad…", [
    quiz("Notice the rule 🔍 Look: “Having moved five times, Selin usually just smiles.” · “Studying American families, she noticed…” · “Born in England to Indian parents, he grew up partly in California.”", [
      { q: "“Having moved five times” describes an action that happened…", options: ["*before the main action", "at the same time", "after the main action"] },
      { q: "“Studying American families, she noticed…” means…", options: ["*While she was studying…", "After she had studied…", "Because she will study…"] },
      { q: "“Born in England” has a ___ meaning.", options: ["*passive (he was born)", "active", "future"] },
    ]),
    table("participle-clauses"),
    choose(
      "Choose.",
      "1. [*Having finished/Finishing] the exam, she went straight home.\n2. [*Feeling/Felt] homesick, he called his mother every day.\n3. [*Built/Building] in 1890, the house is the oldest on the street.\n4. Who's the woman [*standing/stood] next to the door?\n5. [*Having lived/Living] in Japan for ten years, he speaks perfect Japanese.\n6. The book, [*written/writing] in 1961, changed city planning forever.\n7. [*Not knowing/Not knew] the language, I used a translation app.\n8. Students [*wanting/wanted] to join the trip should register by Friday.",
    ),
    gaps(
      "Rewrite with a participle clause.",
      "1. After she had arrived in Seoul, she looked for a flat. → [Having arrived] in Seoul, she looked for a flat.\n2. Because I didn't know anyone, I felt lonely. → [Not knowing] anyone, I felt lonely.\n3. The bridge was built in 1903. It is still used today. → [Built] in 1903, the bridge is still used today.\n4. Do you know the man who is talking to Laura? → Do you know the man [talking] to Laura?\n5. Since he was born in Brazil, Lucas speaks Portuguese. → [Born] in Brazil, Lucas speaks Portuguese.\n6. After we had finished dinner, we went for a walk. → [Having finished] dinner, we went for a walk.",
    ),
  ]),

  section("Grammar: Avoid the dangling participle!", [
    trueFalse("Correct or a “dangling” mistake? The subject of the participle must be the subject of the sentence. 🚩", [
      ["Walking down the street, I saw an old friend.", true],
      ["Walking down the street, a dog bit me. (The dog wasn't walking down the street!)", false],
      ["Having finished the report, she sent it to her boss.", true],
      ["Having finished the report, the computer crashed.", false],
      ["Born in Almaty, Dana loves the mountains.", true],
      ["Feeling tired, the bed looked very comfortable.", false],
    ]),
    drag(
      "Complete Lucas's blog post.",
      "[Having] arrived in Seoul two years ago, I knew only three Korean words. [Feeling] homesick, I cooked Brazilian food every weekend. [Invited] to a classmate's birthday, I brought feijoada — and everyone loved it! The friends [sitting] around that table are still my best friends. [Having] learned some Korean, I now order food without pointing. Life [lived] between two cultures is never boring! 🇧🇷🇰🇷",
      ["Have", "Felt", "Inviting"],
    ),
    order("Make sentences.", [
      "Having lived abroad, she speaks three languages.",
      "Feeling tired, I went to bed early.",
      "Built in 1890, the house is very old.",
      "The man standing by the door is my uncle.",
      "Not knowing the way, we asked a policeman.",
    ]),
    tip("Participle clauses are more common in writing than in speech — great for essays and reviews in B2 First. Typical mistakes: dangling participles (*Arriving at the airport, my suitcase was lost*) and wrong time (*Living in Seoul for two years, he moved* → *Having lived…*)."),
  ]),

  section("Video: Where is home?", [
    video("Watch: TED — Pico Iyer, Where is home? (2013)", "3m6dV7Xo3Vc"),
    text(
      "After the video: talk about it.",
      "- How does Pico Iyer describe himself?\n- What does he say home is, if not a place?\n- Do you agree? Where is home for you? 🏠",
    ),
    tip("Iyer is the writer from the reading. Ask the student to summarize his ideas with participle clauses: *Born in England, Iyer… Having lived in Japan for years, he…*"),
  ]),

  section("Listening: Three homes", [
    tip("A long listening — about 3 minutes 15 seconds. Zarina's podcast: Laura (from Manchester, now in Almaty), Kenji (from Japan, in Almaty) and Lucas (from Brazil, in Seoul, by video call) talk about living abroad. First listen: *What was hardest for each of them at first?* Second listen: the tasks."),
    ...listening(
      "Listen to Zarina's podcast about living abroad.",
      "**Zarina:** Welcome back! Today, three guests who have made a home far from home. Laura, you came from Manchester. What was the hardest thing at first?\n\n**Laura:** Honestly? The homesickness. Having grown up surrounded by family, I suddenly didn't know anyone. The first winter was hard: dark, cold, and I couldn't read the signs in the shops. I remember sitting in my tiny flat, eating cereal for dinner, wondering what I'd done.\n\n**Zarina:** What changed?\n\n**Laura:** My neighbor, an elderly lady, knocked on the door one evening with a plate of hot baursaks. She didn't speak English, and I didn't speak Russian or Kazakh, but we sat together and drank tea for an hour. Feeling welcome for the first time, I decided to stay. That was years ago.\n\n**Zarina:** Kenji, what about you?\n\n**Kenji:** For me, the hardest thing was the directness. Having grown up in Japan, I was used to people saying \"maybe\" when they meant \"no\". Here, people tell you exactly what they think. At first I found it rude. Now I find it refreshing. When a colleague says, \"This design is bad,\" at least I know where I stand.\n\n**Zarina:** And is there anything you still find difficult?\n\n**Kenji:** Being invited to dinner. Arriving at a Kazakh home, you think there will be one meal. There are three. Then tea. Then more food. I've learned to eat very slowly at the beginning. And the size of everything! In Tokyo, my flat was eighteen square meters. Here, my first living room was bigger than my whole Tokyo apartment. Not knowing what to do with so much space, I bought a piano.\n\n**Zarina:** Do you play?\n\n**Kenji:** Not yet. But having bought it, I feel I have to learn.\n\n**Zarina:** That's a very important survival skill. Lucas, you're in Seoul. How was it for you?\n\n**Lucas:** Very different from Brazil! Coming from a culture where everyone hugs, I tried to hug my professor on the first day. That was a mistake. In Korea, people bow, and they're more reserved with people they don't know well. Having made that mistake once, I watched people very carefully afterwards.\n\n**Zarina:** And food?\n\n**Lucas:** I love Korean food, but I missed Brazilian food so much that I started cooking it every weekend. Invited to a classmate's birthday, I brought a huge pot of feijoada. Everyone loved it. That's how I made my first real friends — Daniyar, Ji-woo… Food is the best language.\n\n**Zarina:** One last question for everyone. Where is home now?\n\n**Laura:** Both places, I think. When I'm in Manchester, I miss the mountains. When I'm here, I miss my mum's Sunday roast. Living between two places, you're never completely at home — but you're never completely a stranger either.\n\n**Kenji:** For me, home is wherever my colleagues are arguing directly about my designs.\n\n**Zarina:** Ha!\n\n**Lucas:** Home is wherever there's a kitchen and people to cook for.\n\n**Zarina:** I love that. Laura, Kenji, Lucas — thank you.",
    ),
    quiz("Listen and choose.", [
      { q: "What was hardest for Laura at first?", options: ["*homesickness", "the food", "the directness"] },
      { q: "What made Laura decide to stay?", options: ["*a neighbor who brought her baursaks and tea", "a new job", "learning Russian"] },
      { q: "What surprised Kenji?", options: ["*how directly people say what they think", "the cold weather", "the size of the city"] },
      { q: "What mistake did Lucas make on his first day?", options: ["*He tried to hug his professor.", "He forgot to bow to his friends.", "He brought the wrong food."] },
      { q: "How did Lucas make his first real friends?", options: ["*by bringing feijoada to a birthday", "at a language course", "playing football"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Laura's neighbor spoke English.", false],
      ["Kenji now finds directness refreshing.", true],
      ["Kenji eats quickly at Kazakh dinners.", false],
      ["Lucas misses Brazilian food.", true],
      ["Laura says she feels at home in both places.", true],
      ["Lucas says home is wherever there's a kitchen.", true],
    ]),
    gaps(
      "Complete the sentences from the podcast.",
      "1. [Having] grown up surrounded by family, I suddenly didn't know anyone.\n2. [Feeling] welcome for the first time, I decided to stay.\n3. [Arriving] at a Kazakh home, you think there will be one meal.\n4. [Coming] from a culture where everyone hugs, I tried to hug my professor.\n5. [Invited] to a classmate's birthday, I brought a huge pot of feijoada.\n6. [Living] between two places, you're never completely at home.",
    ),
  ]),

  section("Let's talk: Two countries", [
    text(
      "🌍 Compare two countries",
      "Compare life in your country with life in another country you know (from travel, friends, films…). Talk about:\n\n- 👋 greetings and personal space\n- 🍽️ food and hospitality\n- 🗣️ how direct people are\n- ⏰ time and punctuality\n\nThen give advice to a newcomer to your country, using participle clauses: *Arriving in Almaty, you should… Having learned a few words of Kazakh, you'll… Invited to someone's home, never…*",
    ),
    tip("Encourage cultural observations without stereotypes (*many people*, *in my experience*). Check participle clauses for dangling mistakes."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "___ in Japan for years, he speaks fluent Japanese.", options: ["*Having lived", "Lived", "Live"] },
      { q: "___ in 1890, the bridge is still used today.", options: ["*Built", "Building", "Having built"] },
      { q: "Sad because you miss home = ___", options: ["*homesick", "bilingual", "expat"] },
      { q: "Who's the girl ___ next to Lucas?", options: ["*sitting", "sat", "sits"] },
    ]),
    box(
      "Phrase of the day: when in Rome, do as the Romans do",
      "🏛️ When you're in another country, follow the local customs. (Lucas learned this on his first day in Seoul! 😄)\n\n*What should a visitor to your country know?*",
    ),
  ]),

  homework(
    [
      video("Watch: BBC Learning English — Participle clauses.", "RuTSOQ9kIdY"),
      choose(
        "Choose.",
        "1. [*Having missed/Missing] the last bus, we took a taxi.\n2. [*Not wanting/Not wanted] to be late, she left early.\n3. [*Painted/Painting] in 1503, the Mona Lisa is very famous.\n4. The people [*living/lived] next door are from Italy.\n5. [*Having spent/Spent] a year in Spain, he came back fluent.\n6. Anyone [*wanting/wants] a ticket should call this number.",
      ),
      gaps(
        "Rewrite with a participle clause.",
        "1. When I opened the door, I saw a strange man. → [Opening] the door, I saw a strange man.\n2. After he had saved enough money, he bought a ticket. → [Having saved] enough money, he bought a ticket.\n3. The house was destroyed in the fire. It was never rebuilt. → [Destroyed] in the fire, the house was never rebuilt.\n4. Because she felt nervous, she practiced her speech again. → [Feeling] nervous, she practiced her speech again.\n5. The girl who is wearing the red coat is my sister. → The girl [wearing] the red coat is my sister.\n6. Since I didn't have a map, I got lost. → [Not having] a map, I got lost.",
      ),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      match("Match.", [
        ["homesick", "sad because you miss home"],
        ["settle in", "start to feel comfortable in a new place"],
        ["fit in", "feel accepted"],
        ["customs", "traditional ways of doing things"],
        ["a newcomer", "a person who has just arrived"],
        ["bilingual", "speaking two languages fluently"],
      ]),
      write("Write an article (140–190 words) for an international student magazine: “A guide for newcomers to my country”. Give practical and cultural advice. Use at least four participle clauses (Having…, Arriving…, Invited…, Not knowing…).", 140),
      record("Record a 1-minute answer: “Where is home for you — a place, people or a feeling?” 🎙️🏠", 75),
    ],
    "Homework: Writing and speaking",
  ),
]);
