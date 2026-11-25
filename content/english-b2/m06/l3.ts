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
  video,
  words,
  write,
} from "../../kit";

// 6.3 Selling dreams — skills lesson: no new grammar; review of the passive in all forms, reporting passives (it is said that…) and have / get something done. V: advertising (a slogan, a target audience, a brand, a commercial, catchy, persuade, a celebrity endorsement, product placement, a jingle, a gimmick). S: analyze an ad and create your own. Main format: a famous slogans quiz + a long reading (the tricks that sold diamonds, mouthwash and dreams, ~570 words) + TED-Ed video (the hidden codes of media) + a long listening (Madina on making ads — what she will and won't do, ~3:15) + "pitch your ad".
// Facts checked: "A Diamond Is Forever" was written in 1947 by the copywriter Frances Gerety at the agency N. W. Ayer for De Beers; the campaign helped make diamond engagement rings a tradition in the US; in the 1920s Listerine (until then sold mainly as an antiseptic) used ads about "halitosis", a little-known medical-sounding word for bad breath, and its sales grew enormously; in 1929 Edward Bernays, often called "the father of public relations", organized women smoking cigarettes as "torches of freedom" at New York's Easter Parade for the American Tobacco Company; the psychologist Robert Zajonc (1968) described the "mere exposure effect" — people tend to like things more simply because they have seen them more often. Slogans: Nike "Just Do It" (1988), Apple "Think Different" (1997), L'Oréal "Because You're Worth It" (1970s), McDonald's "I'm Lovin' It" (2003).
export default lesson("b2-6.3", "Selling dreams", () => [
  section("Warm-up: Famous slogans", [
    box(
      "Today you will…",
      "- guess famous slogans 🏷️\n- discover the tricks that sold diamonds, mouthwash and dreams 💎\n- create and pitch your own advert 📣",
    ),
    quiz("Which company? Guess the slogan. 🏷️", [
      { q: "“Just Do It” (1988)", options: ["*Nike", "Adidas", "Coca-Cola"] },
      { q: "“Think Different” (1997)", options: ["*Apple", "Microsoft", "IBM"] },
      { q: "“Because You're Worth It” (1970s)", options: ["*L'Oréal", "Chanel", "Nivea"] },
      { q: "“A Diamond Is Forever” (1947)", options: ["*De Beers", "Tiffany & Co.", "Cartier"] },
      { q: "“I'm Lovin' It” (2003)", options: ["*McDonald's", "KFC", "Burger King"] },
    ]),
    text(
      "Talk to your teacher.",
      "- Which slogan do you think is the best? Why does it work?\n- Is there an advert you still remember from your childhood? What was it for?\n- Have you ever bought something because of an advert? 🛒",
    ),
    tip("Most students know 4–5 of these. Ask *why* the slogans work: short, positive, about the customer (*you*) rather than the product. These ideas come back in the reading and in the final task."),
  ]),

  section("Vocabulary: Advertising", [
    words("Advertising", [
      ["a slogan", "🏷️ a short, memorable phrase used in advertising"],
      ["a target audience", "🎯 the group of people an ad is made for"],
      ["a brand", "™️ a company's name and image"],
      ["a commercial", "📺 an advert on TV, radio or online video"],
      ["catchy", "🎶 easy to remember (a tune, a slogan)"],
      ["persuade", "🗣️ make someone decide to do or believe something"],
      ["a celebrity endorsement", "⭐ a famous person saying they use a product"],
      ["product placement", "🥤 showing a product in a film or TV show for money"],
      ["a jingle", "🎵 a short song used in an advert"],
      ["a gimmick", "🎪 a trick to attract attention, often with little real value"],
    ]),
    match("Match.", [
      ["The jingle was so", "catchy that I sang it all day."],
      ["The ad's target audience", "is teenagers."],
      ["In the film, you can see", "product placement — the hero drinks a famous cola."],
      ["The free toy is just", "a gimmick to sell more burgers."],
      ["A famous footballer", "endorses the brand."],
      ["The advert persuaded me", "to try the new app."],
    ]),
    gaps(
      "Complete with a word from the list.",
      "1. “Just Do It” is one of the most famous [slogans] in the world.\n2. Do you skip the [commercials] on YouTube?\n3. The company spent millions on a [celebrity] endorsement.\n4. It's not a great phone — the “AI camera” is just a [gimmick].\n5. Young people trust some [brands] more than politicians. 🤔\n6. I can't get that [jingle] out of my head! 🎵",
    ),
    quiz("Choose the right word.", [
      { q: "The tune is so ___ — I can't stop humming it.", options: ["*catchy", "catching", "caught"] },
      { q: "The advert is aimed at a young target ___.", options: ["*audience", "public", "crowd"] },
      { q: "Nike is one of the world's best-known ___.", options: ["*brands", "jingles", "commercials"] },
      { q: "Can you ___ me to buy it? Give me one good reason!", options: ["*persuade", "endorse", "advertise"] },
    ]),
  ]),

  section("Reading: Selling dreams", [
    tip("A long text (~570 words). First reading — 5 minutes: *What do the three famous campaigns have in common?* Then the tasks. Ask the student to find passive forms — advertising history is full of them."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["Before the 1940s, diamond engagement rings were already a strong American tradition.", false],
        ["The slogan “A Diamond Is Forever” was written by a woman.", true],
        ["Listerine invented bad breath.", false],
        ["The “torches of freedom” were really cigarettes.", true],
        ["We tend to like things more after we have seen them many times.", true],
        ["The writer thinks all advertising is dishonest.", false],
      ],
      {
        read: [
          "## 💎 Selling dreams: how adverts change what we want",
          "Adverts don't just sell products. The best ones sell feelings, identities and dreams — and sometimes they create needs we never knew we had. Three famous campaigns show how it's done.",
          "**A diamond is forever.** In the 1930s, diamonds were not selling well in the United States. Times were hard, and an engagement ring was not seen as something every couple needed. So in 1947, the diamond company De Beers asked an advertising agency for help. A young copywriter named Frances Gerety was given the job of writing a slogan. Late one night, exhausted, she wrote four words: \"A Diamond Is Forever.\" She later said she wasn't sure it was any good. It was voted the best slogan of the century by an advertising magazine in 1999. The campaign connected a small, expensive stone with eternal love, and within a generation, a diamond ring had become what an engagement \"was supposed to\" look like. It is still believed by many people to be an ancient tradition. It isn't.",
          "**The problem you didn't know you had.** In the 1920s, a product called Listerine was mainly sold as an antiseptic for cleaning cuts and floors. Then its makers found a forgotten medical word: halitosis, meaning bad breath. Their adverts told sad stories of young people who were never invited to parties or never got married — and who had no idea why. Their friends were too polite to tell them about their breath. The message was clear: you might have this problem without knowing it, and Listerine can fix it. Bad breath was suddenly a medical condition, and mouthwash sales grew enormously.",
          "**Torches of freedom.** In 1929, the public relations expert Edward Bernays was hired by a tobacco company. At the time, it was not socially acceptable for women in the US to smoke in public, which meant half the market was missing. Bernays arranged for a group of young women to walk in New York's famous Easter Parade, lighting cigarettes, which he called \"torches of freedom\" — a symbol of women's equality. The newspapers had been told in advance, and photos were printed all over the country. A product that harms health had been sold as a symbol of freedom.",
          "**The tricks behind the tricks.** These campaigns used ideas that advertisers still use every day. They connected a product with a feeling (love, freedom, belonging). They made people feel that something was normal, or that everyone else already had it. They created fear — of loneliness, of missing out, of not being good enough. And they repeated their messages again and again. Psychologists have shown that we tend to like things more simply because we've seen them before, a phenomenon called the mere exposure effect. That's why the same commercial is shown to you twenty times.",
          "**So should we feel manipulated?** Not completely. Advertising also tells us about useful products, pays for free websites and TV shows, and can be wonderfully creative and funny. Some campaigns have even changed behavior for the better — think of ads that persuaded people to wear seat belts or stop smoking. The point isn't to hate advertising, but to recognize the tricks.",
          "Next time an advert makes you feel something, ask yourself: What dream am I being sold? Who is the target audience? And do I really need this — or was I persuaded that I do? 🤔",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "What did the De Beers campaign connect diamonds with?", options: ["*eternal love", "wealth and power", "ancient history"] },
      { q: "How did the Listerine adverts work?", options: ["*They made people worry about a problem they didn't know they had.", "They showed doctors.", "They were very funny."] },
      { q: "Why did the tobacco company hire Bernays?", options: ["*Women didn't smoke in public, so half the market was missing.", "Men had stopped smoking.", "Cigarettes were too expensive."] },
      { q: "Why is the same commercial shown to us many times?", options: ["*We like things more after seeing them often.", "It's cheaper.", "People forget adverts quickly."] },
      { q: "What is the writer's main advice?", options: ["*Recognize the tricks and ask questions.", "Never watch adverts.", "Buy only famous brands."] },
    ]),
    gaps(
      "Find words in the article.",
      "1. a person who writes the words of adverts: a [copywriter]\n2. lasting forever: [eternal]\n3. a substance that kills bacteria: an [antiseptic]\n4. very much: [enormously]\n5. acceptable in society: socially [acceptable]\n6. controlled or influenced in an unfair way: [manipulated]",
    ),
  ]),

  section("Video: The hidden codes of media", [
    video("Watch: TED-Ed — The key to media's hidden codes (Ben Beaton).", "oZXqORn0z4E"),
    text(
      "After the video: talk about it.",
      "- What “codes” does the video talk about? Give an example.\n- Think of an advert you've seen recently. What colors, music, people and words did it use? Why?\n- Is it possible to watch an advert and not be influenced at all? 🤔",
    ),
    tip("Link to the reading: images and symbols carry meaning (a diamond = forever, a cigarette = freedom). Ask the student to describe one advert using passives: *A young couple is shown… The product is placed next to…*"),
  ]),

  section("Advertising tricks", [
    match("Match the trick and the example.", [
      ["social proof", "“Join 10 million happy customers!”"],
      ["scarcity", "“Only 2 left — order now!”"],
      ["celebrity endorsement", "A famous actor smiles and drinks the coffee."],
      ["fear", "“Are you sure your home is safe?”"],
      ["nostalgia", "Old photos and a song from your childhood."],
      ["humor", "A dog tries to order a pizza on the phone. 😄"],
    ]),
    sort("Is the advert's message mainly about a FEELING or about FACTS? Sort. 🧩", {
      "💗 a feeling": [
        "Because you're worth it.",
        "Taste the feeling of summer.",
        "Feel young again.",
        "Be the hero of your own story.",
      ],
      "📊 facts": [
        "Battery life: 30 hours.",
        "50% less sugar than before.",
        "Free delivery in 24 hours.",
        "Two-year warranty included.",
      ],
    }),
  ]),

  section("Describe an advert", [
    gaps(
      "Describe an advert with the passive. Use the verb in brackets.",
      "1. A young couple [is shown] on a beach at sunset. (show)\n2. The product [is placed] in the middle of the picture. (place)\n3. A famous song from the 1980s [is played] in the background. (play)\n4. The advert [was filmed] in Iceland last year. (film)\n5. It [has been watched] more than ten million times online. (watch)\n6. The slogan [was written] by a 22-year-old copywriter. (write)",
    ),
    tip("Then ask the student to describe a real advert they remember in the same way (3–4 sentences): *It was made by… The product is shown… Customers are told that…*"),
  ]),

  section("Listening: Inside the ad studio", [
    tip("A long listening — about 3 minutes 15 seconds. Madina, who runs a small design studio, talks to a radio host about making adverts — including a campaign for Asel's bakery. First listen: *What won't Madina do in her adverts?* Second listen: the tasks."),
    ...listening(
      "Listen to an interview with Madina about making adverts.",
      "**Host:** My guest today makes adverts — the things many of us try to skip. Madina runs a small design studio here in Almaty. Madina, welcome.\n\n**Madina:** Thank you. And I'll be honest: I skip adverts too.\n\n**Host:** So what makes a good advert, in your opinion?\n\n**Madina:** A good advert is about the customer, not the product. Nobody really cares about the product. They care about how it will make their life better. So the first question I ask every client is: who is your target audience, and what do they dream about?\n\n**Host:** Can you give us an example?\n\n**Madina:** Sure. Last year, a friend of mine, Asel, asked us to make a campaign for her bakeries. Her first idea was to show the bread: close-ups, the price, \"fresh every day\". That's information, but it's not a feeling. So we asked her customers why they came. And almost all of them said the same thing: \"It smells like my grandmother's kitchen.\"\n\n**Host:** That's lovely.\n\n**Madina:** Exactly. So that became the campaign. We had photos taken of real customers with their grandmothers — no models, no actors. The slogan was \"Baked like it's Sunday at Grandma's.\" Sales went up by about thirty percent in three months.\n\n**Host:** So you used nostalgia. Isn't that a kind of manipulation?\n\n**Madina:** It's a fair question. All advertising tries to persuade. For me, the line is honesty. Asel's bread really is baked by hand every morning, and the shop really does smell like that. We didn't invent a feeling. We found one that was already there.\n\n**Host:** Are there things you refuse to do?\n\n**Madina:** Yes, a few. I won't make adverts that make people feel bad about their bodies. I won't use fake reviews or \"only two left\" when there are actually two hundred left. And I won't work for companies that sell cigarettes or gambling. A client once asked us to say that his energy drink was \"recommended by doctors\". When we asked which doctors, he said, \"It is believed that doctors would recommend it.\" We said no.\n\n**Host:** How has advertising changed since you started?\n\n**Madina:** Completely. When I started, a campaign meant posters and maybe a TV commercial. Now most adverts are shown on phones, and you have about two seconds before people scroll past. So everything has to be faster and simpler. And people trust influencers more than brands now, so many companies pay influencers instead of making traditional adverts.\n\n**Host:** Is that a good thing?\n\n**Madina:** It can be. But it's harder for people to see when they're being sold something. A friend recommends a face cream, and you don't realize she's been paid to do it. That's why the law in many countries now says that paid posts must be clearly marked as adverts.\n\n**Host:** Final question. What advert are you proudest of?\n\n**Madina:** Funnily enough, it's the one I'm working on now: the posters for the city's winter festival. Everyone thinks a famous band is coming because of a rumor online. Nobody has confirmed it, so we couldn't promise anything. So we added one line to the posters: \"Come for the rumor. Stay for the music.\" Ticket sales have doubled in a week.\n\n**Host:** Madina, thank you.",
    ),
    quiz("Listen and choose.", [
      { q: "What is the first question Madina asks every client?", options: ["*Who is your target audience and what do they dream about?", "How much can you pay?", "What is your product?"] },
      { q: "What did Asel's customers say about the bakery?", options: ["*It smells like their grandmother's kitchen.", "The bread is cheap.", "The staff are friendly."] },
      { q: "Where, for Madina, is the line between persuasion and manipulation?", options: ["*honesty", "price", "humor"] },
      { q: "Why did Madina refuse the energy drink client?", options: ["*He wanted to claim doctors recommended it without evidence.", "He couldn't pay.", "She doesn't like energy drinks."] },
      { q: "What was the slogan on the festival posters?", options: ["*“Come for the rumor. Stay for the music.”", "“Baked like it's Sunday at Grandma's.”", "“The best festival in years.”"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Madina never skips adverts.", false],
      ["The bakery photos showed real customers, not models.", true],
      ["Sales at the bakery went up by about thirty percent.", true],
      ["Madina will make adverts for gambling companies.", false],
      ["According to Madina, people now trust influencers more than brands.", true],
      ["The winter festival has already taken place.", false],
    ]),
    choose(
      "Review: module 6 grammar. Choose.",
      "1. We had photos [*taken/take] of real customers.\n2. Asel's bread [*is baked/bakes] by hand every morning.\n3. “It [*is believed/believes] that doctors would recommend it.”\n4. Most adverts [*are now shown/now show] on phones.\n5. You don't realize she [*has been paid/has paid] to post it.\n6. Paid posts must [*be clearly marked/clearly mark] as adverts.",
    ),
  ]),

  section("Let's talk: Pitch your advert", [
    text(
      "📣 Your campaign",
      "Choose a product: a new language-learning app, a café in your town, an eco-friendly water bottle, or something of your own.\n\n**Plan your advert (5 minutes):**\n- 🎯 Who is the target audience? What do they dream about?\n- 💗 What feeling will you sell?\n- 🏷️ What's your slogan? (short, catchy, about the customer)\n- 🎬 What will people see and hear?\n- ✋ Which tricks will you use — and which won't you use?\n\n**Pitch it** to your teacher in 1–2 minutes, as if your teacher were the client. The client asks difficult questions: *Isn't that misleading? Why would teenagers care?*",
    ),
    tip("Play a demanding client. Afterwards, discuss honesty, like Madina: is the advert persuading or manipulating? Praise a catchy slogan and good use of passives (*The bottle is made from…, It's designed for…*)."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "A short phrase that is easy to remember is a ___.", options: ["*slogan", "brand", "gimmick"] },
      { q: "“Only 2 left!” uses the trick of ___.", options: ["*scarcity", "humor", "nostalgia"] },
      { q: "A famous person recommending a product is a celebrity ___.", options: ["*endorsement", "placement", "audience"] },
      { q: "The slogan “A Diamond Is Forever” was written ___ 1947.", options: ["*in", "on", "at"] },
    ]),
    box(
      "Phrase of the day: don't judge a book by its cover",
      "📚 Don't decide about something (or someone) only from how it looks. Advertisers spend millions hoping we will!\n\n*Have you ever bought something because of its packaging?*",
    ),
  ]),

  homework(
    [
      gaps(
        "Complete with one word.",
        "1. The new song is really [catchy] — everyone is singing it.\n2. Teenagers are the target [audience] for this game.\n3. A famous tennis player [endorses] the watch.\n4. The free gift is just a [gimmick].\n5. The ad [persuaded] me to buy a new phone.\n6. In the film, the hero drives a famous car — that's product [placement].",
      ),
      drag(
        "Complete the summary of the lesson.",
        "In 1947, the slogan “A Diamond Is Forever” was [written] by Frances Gerety. In the 1920s, bad breath was [turned] into a medical problem by Listerine's adverts. Advertisers connect products with [feelings], create fear, and repeat their messages. We tend to like things more after we have [seen] them many times. Madina believes the line between persuasion and manipulation is [honesty]. Paid posts must be clearly [marked] as adverts.",
        ["wrote", "facts", "price"],
      ),
      order("Make sentences.", [
        "The slogan was written in 1947.",
        "The same commercial is shown many times.",
        "Paid posts must be marked as adverts.",
        "We had photos taken of real customers.",
        "It is believed that the ad was very successful.",
      ]),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      write("Write an article (140–190 words) for a student magazine: “An advert that worked on me.” Describe the advert, explain which tricks it used and why it worked (or didn't). Use at least four passive forms.", 140),
      record("Record your 1-minute advert pitch from the lesson — improve it first! 📣🎙️", 75),
    ],
    "Homework: Writing and speaking",
  ),
]);
