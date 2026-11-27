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

// 3.1 It would appear that… — G: hedging and distancing: It would appear / seem that…, apparently, seemingly, reportedly, It is said / thought that…, X is said / believed / alleged + (perfect) infinitive, There is thought to be…, may well, could conceivably. V: media and misinformation (misleading, unfounded, debunk…). S: retell a disputed news story carefully. Main format: neutral or clickbait? + a long reading (why false news spreads, ~790 words) + TED-Ed video in class + a long listening (a radio news report and a fact-checker, ~3:30).
// Facts checked: Vosoughi, Roy & Aral, "The spread of true and false news online", Science (2018) — about 126,000 stories shared on Twitter by about 3 million people, 2006–2017; false stories were about 70% more likely to be retweeted; true stories took about six times as long to reach 1,500 people; automated accounts (bots) spread true and false news at about the same rate, so humans were mainly responsible. Hasher, Goldstein & Toppino (1977) — the "illusory truth effect": repeated statements are more likely to be judged true. Roozenbeek & van der Linden (University of Cambridge) — the online game "Bad News" (2018); a 2019 study found that playing it made people rate fake headlines as less reliable ("prebunking", the idea of psychological "inoculation").
// Warm-up format: sort headlines (neutral or clickbait?) — after a quiz in 2.4. Characters: Dana (an editor), Samal (new — a fact-checker in Almaty).
export default lesson("c1-3.1", "It would appear that…", () => [
  section("Warm-up: Neutral or clickbait?", [
    box(
      "Today you will…",
      "- find out why false news travels faster than the truth 📰\n- report things carefully when you're not sure: *It would appear that… He is said to have… This may well be…* 🌫️\n- retell a disputed news story like a careful journalist 🎙️",
    ),
    sort("Neutral headline or clickbait? Sort. 🧩", {
      "📰 neutral": [
        "City council approves new cycle lanes",
        "Study links regular exercise to better sleep",
        "Heavy snow expected in the mountains this weekend",
        "Local bakery opens second branch",
        "Survey suggests most teenagers read news online",
      ],
      "🎣 clickbait": [
        "You won't BELIEVE what this teacher did next!",
        "Doctors HATE this one simple trick",
        "This photo will change the way you see your city FOREVER",
        "Scientists are terrified by what they found",
        "Number 7 will shock you!",
      ],
    }),
    text(
      "Talk to your teacher.",
      "- Where do you usually get your news? How much do you trust it?\n- Have you ever shared something that turned out to be false? What happened?\n- Why do you think clickbait headlines work so well?",
    ),
    tip("Point out the features of clickbait: capital letters, emotional words, missing information (*what this teacher did*), promises (*will change… forever*). Then ask how a careful journalist would rewrite one of them — a preview of hedging."),
  ]),

  section("Vocabulary: Truth, lies and the media", [
    words("Media and misinformation", [
      ["misleading", "🧭 giving the wrong idea, even if not completely false", "The headline was misleading — the study was only on mice."],
      ["unfounded", "🏚️ not based on facts"],
      ["debunk", "🔨 show that a belief or story is false"],
      ["fact-check", "✔️ check whether information is true"],
      ["go viral", "🦠 spread very quickly online"],
      ["a hoax", "🃏 a trick to make people believe something false"],
      ["take something at face value", "🪞 accept it as it seems, without checking"],
      ["a reliable source", "📚 a person or organization you can trust"],
      ["out of context", "✂️ without the information around it that explains it"],
      ["sensationalist", "📢 trying to shock people rather than inform them"],
      ["corroborate", "🤝 confirm with more evidence"],
      ["disinformation", "🎭 false information spread on purpose"],
    ]),
    match("Match the sentences and the words.", [
      ["“The quote is real, but they left out the second half of the sentence.”", "out of context"],
      ["“Two other witnesses confirmed her story.”", "corroborate"],
      ["“The ‘alien’ in the photo was a balloon.”", "a hoax"],
      ["“A scientist explained why the claim is false.”", "debunk"],
      ["“The video had ten million views in a day.”", "go viral"],
      ["“There is no evidence at all for these rumors.”", "unfounded"],
    ]),
    gaps(
      "Complete with a word from the list above.",
      "1. Don't take everything you read online at face [value].\n2. [Disinformation] is false information spread deliberately, often for political reasons.\n3. A good journalist always looks for a [reliable] source.\n4. Many newsrooms now have a team that [fact-checks] stories before publication.\n5. The headline was [sensationalist] — the real story was much less dramatic.\n6. The claim is [misleading]: it's technically true but gives the wrong impression.",
    ),
  ]),

  section("Reading: Why lies travel faster", [
    tip("A long text (~790 words). First reading — 7 minutes: *According to the research, who spreads false news — machines or people?* Then the tasks. Ask the student to find five hedging expressions and say why the writer uses them."),
    trueFalse(
      "Read the article. True or false?",
      [
        ["The 2018 study looked at stories shared over more than ten years.", true],
        ["True stories reached 1,500 people faster than false ones.", false],
        ["Bots were mainly responsible for the spread of false news.", false],
        ["False news tends to be more surprising than true news.", true],
        ["Hearing a claim many times can make it seem more believable.", true],
        ["The writer thinks there is nothing we can do about false news.", false],
        ["In the “Bad News” game, players create fake news themselves.", true],
      ],
      {
        read: [
          "## 📰 Why lies travel faster",
          "*by Dana, an editor who works for a publisher in Barcelona*",
          "There is an old saying, often attributed to Mark Twain, that \"a lie can travel halfway around the world while the truth is putting on its shoes.\" It is a wonderful line. It is also, rather fittingly, almost certainly not by Mark Twain: researchers have found versions of it long before he was born. But whoever said it first, it would appear that they were right.",
          "In 2018, three researchers at the Massachusetts Institute of Technology — Soroush Vosoughi, Deb Roy and Sinan Aral — published what is thought to be one of the largest studies of misinformation ever carried out. They looked at about 126,000 stories that had been shared on Twitter by around three million people between 2006 and 2017. Each story had been checked by independent fact-checking organizations and labeled as true or false.",
          "The results, published in the journal *Science*, were striking, to say the least. False stories spread further, faster and more widely than true ones in every category they examined, and the effect was strongest for political news. Falsehoods were about 70 percent more likely to be retweeted than the truth. True stories, meanwhile, took about six times as long as false stories to reach 1,500 people.",
          "Perhaps the most uncomfortable finding concerned who was responsible. It is often assumed that fake news is mainly spread by automated accounts, or *bots*. The researchers did find bots, but these seemed to spread true and false stories at roughly the same rate. The difference, it turned out, was us. Human beings were the ones choosing to share lies more than the truth.",
          "Why would we do that? The researchers suggested one likely answer: novelty. False stories tend to be more surprising than true ones, simply because they are not limited by reality. A true story about a new cycle lane has to describe an actual cycle lane. A false story can claim that the mayor has secretly sold the city to a foreign company. The replies people wrote to false stories also seemed to contain more surprise and disgust. Surprising news makes us look informed and interesting when we share it — and we may well share it before we have stopped to check.",
          "There is a second, slower effect at work. In 1977, the psychologists Lynn Hasher, David Goldstein and Thomas Toppino found that people were more likely to rate a statement as true if they had seen it before, even when they had no idea whether it was correct. This *illusory truth effect* has since been confirmed in many studies. Repetition, it seems, feels like evidence. A claim we have seen ten times in a week begins to sound familiar, and familiar things sound true.",
          "So what can be done? Fact-checking is important, but it is necessarily slow: by the time a claim has been carefully debunked, it has often been shared thousands of times, and the correction rarely travels as far as the original. For this reason, some researchers have argued that we should focus less on cleaning up after false news and more on preparing people before they meet it.",
          "One of the most interesting attempts comes from a team at the University of Cambridge led by Jon Roozenbeek and Sander van der Linden. In 2018, they helped to create an online game called *Bad News*, in which players are asked to become fake news producers. To win, they have to use the classic techniques: emotional language, fake experts, conspiracy theories, attacks on opponents. The idea, sometimes described as *prebunking* or psychological \"inoculation\", is that by experiencing a weak dose of manipulation, people become more resistant to the real thing. A study published in 2019 found that, after playing, people rated fake headlines as noticeably less reliable.",
          "None of this means that we should trust nothing. Constant suspicion can be just as harmful as constant belief: if everything might be fake, people may simply stop caring what is true. What it does mean is that we should become a little more careful about our own reactions. If a story makes you feel strongly — angry, delighted, shocked — that is precisely the moment to slow down.",
          "As an editor, I have a simple rule that I try to apply to my own sharing. Before I press the button, I ask three questions: Who is saying this? How do they know? And who else is reporting it? If I can't answer all three, I wait. Waiting is not very exciting, and it will never go viral. But it would appear to be one of the few things that actually works. 🕰️",
        ].join("\n\n"),
      },
    ),
    quiz("Read again. Choose.", [
      { q: "Why does Dana say the Twain quote is “rather fittingly” not by Twain?", options: ["*A saying about the spread of false information is itself falsely attributed.", "Twain never wrote about lies.", "The quote is too modern for Twain."] },
      { q: "What was the “most uncomfortable finding”?", options: ["*People, not bots, were mainly responsible for spreading false news.", "Bots spread only false news.", "Fact-checkers made mistakes."] },
      { q: "According to the researchers, why do people share false stories more?", options: ["*They are more surprising and novel.", "They are shorter.", "They come from famous people."] },
      { q: "What is the idea behind “prebunking”?", options: ["*Experiencing manipulation in a safe way makes people more resistant to it.", "Deleting false news before it appears.", "Punishing people who share fake news."] },
      { q: "What is Dana's personal rule?", options: ["*Ask three questions before sharing, and wait if you can't answer them.", "Never share news online.", "Only share news from friends."] },
    ]),
    gaps(
      "Find words and phrases in the article.",
      "1. said to be written or said by someone: [attributed] to\n2. very noticeable, impressive: [striking]\n3. newness, the quality of being new and unusual: [novelty]\n4. a strong feeling of dislike, almost sickness: [disgust]\n5. able to fight against something: [resistant]\n6. the feeling of not trusting someone: [suspicion]",
    ),
  ]),

  section("Video: How false news can spread", [
    video("Watch: TED-Ed — How false news can spread (Noah Tavlin).", "cSKGa_7XJkg"),
    text(
      "After the video: talk about it.",
      "- What is “circular reporting”? Explain it in your own words.\n- What examples does the video give? Which one surprised you most?\n- How is the video connected to the research in Dana's article?\n- What can journalists — and ordinary readers — do to stop the cycle?",
    ),
    tip("Ask the student to retell the main example from the video using hedging: *It would appear that… The story was said to have… It later turned out that…*"),
  ]),

  section("Grammar: Hedging and distancing", [
    quiz("Notice the rule 🔍 Look: “It would appear that they were right.” · “It is thought to be one of the largest studies.” · “We may well share it before we have stopped to check.”", [
      { q: "Why does the writer say “It would appear that…” instead of “They were right”?", options: ["*to sound careful and not too certain", "because she's sure", "because it's the past"] },
      { q: "“The study is thought to be one of the largest” means…", options: ["*People generally think it's one of the largest.", "The writer knows it's the largest.", "The study thinks it's large."] },
      { q: "“We may well share it” means…", options: ["*It's quite likely that we share it.", "We share it well.", "We must share it."] },
    ]),
    table("hedging"),
    choose(
      "Choose the correct option.",
      "1. The minister is said [*to have known/to know] about the problem last year.\n2. There [*are thought to be/are thought being] about 500 people in the building.\n3. It would [*appear/appearing] that the photo was edited.\n4. The suspect is believed [*to be hiding/hiding] in the mountains at the moment.\n5. The singer [*reportedly/reportedly is] canceled the tour.\n6. This [*may well/may good] be the most important discovery of the decade.\n7. She is alleged [*to have taken/to take] the money while she was manager.\n8. The video [*seems to have been filmed/seems to film] in another country.",
    ),
    gaps(
      "Rewrite the sentences. Start with the words given.",
      "1. People say that the castle is haunted. → The castle [is said to be] haunted.\n2. People believe that the thief escaped through the window. → The thief [is believed to have escaped] through the window.\n3. People think that there are hundreds of fake accounts. → There [are thought to be] hundreds of fake accounts.\n4. It seems that the report contains several mistakes. → The report [seems to contain] several mistakes.\n5. People claim that he lied about his age. → He [is claimed to have lied] about his age.\n6. It appears that the company has lost a lot of money. → The company [appears to have lost] a lot of money.",
    ),
    drag(
      "Make the news report more careful. Complete with the words.",
      "A video that [apparently] shows a snow leopard in a city park has gone viral. The animal is [said] to have been seen near the lake on Tuesday evening. However, experts say the video [may] well have been filmed somewhere else. It would [appear] that the same clip was posted online two years ago. The park manager is [believed] to have asked visitors to stay calm. There [is] thought to be no danger to the public.",
      ["surely", "certainly", "says"],
    ),
    tip("Say it right: hedges are usually unstressed and quick — the stress stays on the information: *It would appear that the VIDEO was filmed ABROAD.* Too much stress on *appear* sounds sarcastic."),
  ]),

  section("Listening: The leopard in the park", [
    tip("A long listening — about 3 minutes 30 seconds. A local radio news report about a viral video, followed by an interview with Samal, a fact-checker. First listen: *Was there really a snow leopard in the park?* Second listen: the tasks. Ask the student to note hedging expressions."),
    ...listening(
      "Listen to a radio news report and an interview with a fact-checker.",
      "**Newsreader:** Good evening. A video which apparently shows a snow leopard walking through a city park has been viewed more than two million times since yesterday. Our reporter has been finding out more.\n\n**Reporter:** Thanks. The video is about twenty seconds long and seems to show a large spotted cat walking along a path near the lake, at dusk. It was posted yesterday evening by an account with the caption \"Right now in the city center!!!\", and it went viral within hours. By this morning, some parents were reportedly keeping their children at home, and the park is said to have been unusually empty today.\n\n**Newsreader:** So was there a snow leopard in the park?\n\n**Reporter:** That's the question. The park management has not confirmed any sighting, and no one appears to have reported the animal to the police. To find out more, I spoke to Samal, who works as a fact-checker for an independent news website.\n\n**Samal:** Hello. Well, the first thing we do is not to ask \"Is it true?\" but \"Where did it come from?\" The account that posted it was created last month and has posted nothing else, which is always a warning sign.\n\n**Reporter:** What did you find?\n\n**Samal:** We took several still images from the video and did a reverse image search. It would appear that the same clip was posted online two years ago — by a wildlife center in another country. In the original version, the lake in the background is clearly visible, and the trees are a different species. Someone seems to have cut the beginning and the end, so that you can't see the fence.\n\n**Reporter:** So it's a fake.\n\n**Samal:** I'd be careful with that word. The video itself is real — it's a real snow leopard. What's false is the claim about where and when it was filmed. That's actually the most common kind of misinformation we see: real pictures, wrong context.\n\n**Reporter:** Could there conceivably be a leopard in the city, though? They do live in the mountains nearby.\n\n**Samal:** It's not impossible. There have been cases in different countries where wild animals came close to towns, especially in winter. So we didn't want to say \"definitely not\". What we can say is that this particular video does not appear to show our park, and that there is no other evidence — no photos from different angles, no reports from park staff, no tracks in the snow.\n\n**Reporter:** Why do you think so many people shared it?\n\n**Samal:** It's surprising, a little scary, and it's about a place they know. That's a perfect combination. People share things like this to warn their friends — they mean well. Very few of them stopped to ask who posted it.\n\n**Reporter:** Do you ever get it wrong yourselves?\n\n**Samal:** Of course. Last year we said a photo had been edited, and it turned out it hadn't — the strange shadow was real. We published a correction the same day. Admitting mistakes is part of the job.\n\n**Reporter:** What should people do when they see something like this?\n\n**Samal:** Three things. Check the source: who posted it, and what else have they posted? Look for confirmation from someone who would actually know — in this case, the park or the police. And if you're not sure, don't share it with the words \"Right now!\" Share it, if at all, with a question mark.\n\n**Reporter:** Since our conversation, the park management has issued a statement saying there is thought to be no danger to visitors. The original account has been deleted.\n\n**Newsreader:** Thank you. And if you do see a snow leopard in the city, we'd be very grateful for a photo — from more than one angle, please.",
    ),
    quiz("Listen and choose.", [
      { q: "What did the video seem to show?", options: ["*a snow leopard walking in a city park", "a leopard in the mountains", "a cat in a zoo"] },
      { q: "What was the first warning sign Samal noticed?", options: ["*The account was new and had posted nothing else.", "The video was too short.", "The picture quality was poor."] },
      { q: "What did the reverse image search show?", options: ["*The clip had been posted two years earlier by a wildlife center abroad.", "The video was made with a computer.", "The leopard was a large house cat."] },
      { q: "Why does Samal avoid the word “fake”?", options: ["*The video is real; only the place and time are false.", "She isn't sure about anything.", "Fake is too informal."] },
      { q: "What is Samal's advice about sharing uncertain stories?", options: ["*If you share it, add a question mark rather than “Right now!”", "Never share any animal videos.", "Share it quickly to warn people."] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["The video has been watched more than two million times.", true],
      ["The police confirmed the sighting.", false],
      ["In the original version of the video, a fence can be seen.", true],
      ["Samal says it is completely impossible for a leopard to come to the city.", false],
      ["According to Samal, most people shared the video to warn others.", true],
      ["The account that posted the video is still online.", false],
    ]),
    gaps(
      "Complete the sentences from the report.",
      "1. A video which [apparently] shows a snow leopard has been viewed more than two million times.\n2. The park is said to [have] been unusually empty today.\n3. It would [appear] that the same clip was posted online two years ago.\n4. Someone [seems] to have cut the beginning and the end.\n5. Could there [conceivably] be a leopard in the city, though?\n6. There is [thought] to be no danger to visitors.",
    ),
  ]),

  section("Let's talk: Tell it carefully", [
    text(
      "Retell a disputed story 🎙️",
      "Choose a story: something from the news this week, a rumor at your school or work, or one of these:\n\n- A famous singer has supposedly bought an island.\n- A new diet claims to make people live to 120.\n- A local café was reportedly closed for using fake honey.\n\nTell it in **two ways** (1 minute each):\n\n1. 📢 as a sensationalist post — *BREAKING! You won't believe…*\n2. 🎙️ as a careful journalist — *It would appear that… X is said to have… There is thought to be… This may well…*\n\nThen discuss: **Is it ever right for a journalist to publish something they're not sure about?**",
    ),
    tip("Contrast is the point: the first version should be fun and exaggerated, the second precise and calm. Note hedging and distancing in the second version; correct *is said that he* → *it is said that he / he is said to*. In a group: pairs prepare both versions, the class votes for the most professional report."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "The actor is said ___ married last year.", options: ["*to have got", "to get", "getting"] },
      { q: "___ that the report was wrong.", options: ["*It would appear", "It would appear to", "Would appear"] },
      { q: "A story that spreads very fast online goes ___.", options: ["*viral", "virus", "virtual"] },
      { q: "To show that a story is false is to ___ it.", options: ["*debunk", "debate", "decline"] },
    ]),
    box(
      "Phrase of the day: take it with a pinch of salt",
      "🧂 Don't believe something completely: *I'd take that headline with a pinch of salt.*\n\n*What kind of news do you take with a pinch of salt?*",
    ),
  ]),

  homework(
    [
      choose(
        "Choose.",
        "1. The company is believed [*to have lost/to lose] millions last year.\n2. There [*is said to be/is said being] a secret tunnel under the castle.\n3. [*Apparently/Apparent], the concert has been canceled.\n4. He appears [*to have forgotten/to forget] his password again.\n5. It is thought [*that/what] the fire started in the kitchen.\n6. That [*could conceivably/could conceivable] be true, but I doubt it.\n7. The singer is reported [*to be recording/recording] a new album at the moment.\n8. The photo [*seems to have been/seems being] edited.",
      ),
      gaps(
        "Rewrite the headlines as careful reports. Start with the words given.",
        "1. Mayor knew about the problem! → The mayor is said [to have known] about the problem.\n2. Hundreds of fake accounts on the site! → There are thought [to be] hundreds of fake accounts on the site.\n3. Star secretly married! → The star [is reported to have married/is believed to have married] in secret.\n4. Video filmed abroad! → The video appears [to have been filmed] abroad.\n5. Thief still in the city! → The thief is believed [to be] still in the city.\n6. Report full of mistakes! → It [would appear/would seem] that the report contains several mistakes.",
      ),
      trueFalse("Correct or not?", [
        ["He is said to have left the country.", true],
        ["It is believed him to be innocent.", false],
        ["There are thought to be ten survivors.", true],
        ["The video seems to filmed in Spain.", false],
        ["The minister is alleged to have lied.", true],
      ]),
    ],
    "Homework: Grammar",
  ),
  homework(
    [
      match("Match the beginnings and endings.", [
        ["Don't take everything at face…", "…value."],
        ["The quote was taken out…", "…of context."],
        ["Two witnesses were able to corroborate…", "…her story."],
        ["The fact-checkers quickly debunked…", "…the rumor."],
        ["The video went…", "…viral overnight."],
        ["Always look for a reliable…", "…source."],
      ]),
      write(
        "Write an article for a student website (220–260 words): “How to avoid being fooled by false news”. Explain why false news spreads, give practical advice, and use at least five hedging or distancing expressions.",
        220,
        { read: "*Useful:* It would appear that… · Research is thought to show… · X tends to… · This may well… · It is worth… · Before sharing, it might be wise to…" },
      ),
      record("Record a 1–2 minute “careful” news report about something that happened in your town, school or workplace — use hedging, as if you weren't completely sure of the facts. 🎙️", 120),
    ],
    "Homework: Writing and speaking",
  ),
]);
