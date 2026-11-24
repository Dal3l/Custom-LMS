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
  words,
  write,
} from "../../kit";

// 11.4 Practical: Giving a presentation — signposting (Today I'm going to talk about… Moving on to… To sum up…), presentation vocabulary (slide, audience, handout…), pausing and stress. S: a 2–3 minute mini-presentation. Main format: a "do or don't" warm-up + a long model presentation (Madina presents her design festival, ~2.5 min) + preparation and a real presentation.
export default lesson("b1-11.4", "Practical: Giving a presentation", () => [
  section("Warm-up: Do or don't?", [
    box(
      "Today you will…",
      "- learn the phrases that make a presentation clear 🗺️\n- listen to a model presentation 🎤\n- give your own 2–3 minute presentation 🌟",
    ),
    sort("Presentations: do or don't? Sort. 👍👎", {
      "👍 do": ["look at your audience", "speak slowly and clearly", "tell people what you'll talk about", "use a few pictures", "practice before"],
      "👎 don't": ["read every word from your slides", "put 200 words on one slide", "speak very fast because you're nervous", "look only at the floor", "go on for 20 minutes over time"],
    }),
    text(
      "Talk to your teacher.",
      "- Have you ever given a presentation — at school, university or work? How did it go? 😅\n- What's the worst presentation you've ever watched? What went wrong?\n- What makes you nervous about speaking in front of people? What helps?",
    ),
    tip("Act out 2–3 “don'ts” in a funny way (reading from a paper without looking up, talking super fast) and let the student say what's wrong. It relaxes everyone before their own presentation."),
  ]),

  section("Phrases: Signposts", [
    words("Presentation words", [
      ["a slide", "🖼️ one page of a presentation on a screen"],
      ["the audience", "👥 the people who listen"],
      ["a handout", "📄 a paper you give to the audience"],
      ["a chart", "📊 a picture with numbers"],
      ["a point", "☝️ an idea or argument", "My first point is…"],
      ["sum up", "🏁 say the main points again briefly"],
      ["get nervous", "😰 start to feel worried"],
      ["eye contact", "👀 looking at people's eyes"],
    ]),
    table("presentations"),
    sort("Which stage? Sort the phrases. 🗺️", {
      "👋 start": ["Today I'm going to talk about…", "My presentation has three parts.", "Let me start with a question."],
      "➡️ middle": ["Moving on to…", "Next, let's look at…", "As you can see in this photo…"],
      "🏁 end": ["To sum up…", "In conclusion…", "Thank you for listening. Any questions?"],
    }),
    match("Match the beginnings and endings.", [
      ["Today I'm going", "to talk about recycling."],
      ["My presentation has", "three parts."],
      ["Moving", "on to my second point…"],
      ["As you can see", "in this chart…"],
      ["To sum", "up, small changes matter."],
      ["Thank you for listening.", "Any questions?"],
    ]),
    choose(
      "Choose the best phrase.",
      "1. [*Today I'm going to talk about/Now I tell] our city's parks.\n2. [*First of all/Firstly of all], let me tell you why parks matter.\n3. [*Moving on to/Moving to on] my second point…\n4. [*As you can see/How you see] in this photo, the park is empty.\n5. [*Let me give you an example./Let me example.]\n6. [*Finally/At finally], I'd like to suggest a solution.\n7. [*To sum up/To summing], we need more green spaces.\n8. [*Thank you for listening./Thanks you for listen.]",
    ),
  ]),

  section("Listening: Madina's presentation", [
    tip("A long listening — about 2.5 minutes. Madina presents her idea for a design festival to the city council. First listen: *What's her idea, and what does she ask for?* Second listen: notice every signpost phrase."),
    ...listening(
      "Listen to Madina's presentation. She wants to organize a design festival in Almaty.",
      "**Madina:** Good afternoon, everyone, and thank you for having me. My name is Madina Nurlanova, and I'm a freelance designer. Today I'm going to talk about an idea which I think could make our city more creative: a young designers' festival in Almaty.\n\nMy presentation has three parts. First, I'll explain why we need it. Then I'll describe the festival. And finally, I'll tell you what we need from you.\n\nSo, first of all — why? Three years ago I started an online community for young designers. Today it has more than two thousand members from forty countries. But here in Almaty, there's no place where young designers can show their work to the public. Many of them leave for other cities. As you can see in this chart, the number of design students in Kazakhstan has grown a lot in recent years — but jobs and events haven't grown at the same speed.\n\nMoving on to the festival itself. Our idea is a three-day event next summer in the central park. There will be an open-air market where designers can sell their work, free workshops for teenagers, and talks by designers from abroad. Let me give you an example: last year in Istanbul, I went to a similar festival, and more than ten thousand people came in one weekend. Local cafés and shops did really well too.\n\nFinally, what do we need? We're not asking for a lot of money. We need permission to use the park, help with electricity and security, and support on the city's social media. Sponsors, including a local bakery and a design studio, have already offered to help.\n\nSo, to sum up: young designers need a place to grow, the city gets a creative event, and local businesses earn money. Everyone wins.\n\nThank you very much for listening. I'd be happy to answer any questions.\n\n**Man:** Thank you, Madina. It sounds interesting, but what happens if it rains? The festival is in a park.\n\n**Madina:** That's a good question. We've thought about it: there will be large tents for the market and the workshops, so people can stay dry. And if the weather is really bad, the talks can move to the city library, which has agreed to help.\n\n**Man:** And how will you make sure the park stays clean?\n\n**Madina:** We'll have volunteers from the Clean Mountains project, who already know how to organize clean-ups, and recycling bins at every entrance. We'll leave the park cleaner than we found it — I promise.\n\n**Man:** Thank you. We'll discuss it and let you know next week.",
    ),
    gaps(
      "Complete the signposts Madina used.",
      "1. Today I'm going to [talk] about an idea…\n2. My presentation has three [parts].\n3. So, first of [all] — why?\n4. As you can [see] in this chart…\n5. [Moving] on to the festival itself.\n6. Let me give you an [example].\n7. So, to sum [up]: …\n8. Thank you very much for [listening].",
    ),
    quiz("Listen and choose.", [
      { q: "Who is Madina presenting to?", options: ["*the city council", "her university teachers", "a TV audience"] },
      { q: "What's the problem she describes?", options: ["*Young designers have no place in Almaty to show their work.", "There are too many designers.", "The park is closed."] },
      { q: "How long will the festival be?", options: ["*three days", "one week", "one day"] },
      { q: "What example does she give?", options: ["*a similar festival in Istanbul", "a festival in Seoul", "a concert in Almaty"] },
      { q: "What does she ask the city for?", options: ["*permission, electricity and security help, and social media support", "a lot of money", "a new building"] },
    ]),
    trueFalse("Listen again. True or false?", [
      ["Madina's online community has members from forty countries.", true],
      ["The festival will be in a shopping center.", false],
      ["There will be free workshops for teenagers.", true],
      ["More than 10,000 people came to the festival in Istanbul in one weekend.", true],
      ["Nobody has offered to sponsor the festival yet.", false],
      ["If it rains, the talks can move to the city library.", true],
    ]),
    order(
      "Put the parts of Madina's presentation in order.",
      [[
        "She introduces herself and the topic.",
        "She explains the three parts of her talk.",
        "She explains why the city needs the festival.",
        "She describes the festival and gives an example.",
        "She says what she needs and sums up.",
      ].join("\n")],
      "lines",
    ),
  ]),

  section("Practice: Make it clear", [
    drag(
      "Complete the presentation about a school garden.",
      "Good morning, everyone. [Today] I'm going to talk about our school garden. My presentation has two [parts]. [First] of all, I'll show you what we've done. As you can [see] in this photo, the garden was empty last year. [Moving] on to our plans: next spring we want to grow vegetables. To sum [up], a garden is a place where students can learn and relax. Thank you for [listening]! 🌱",
      ["Now", "pieces", "look", "Going"],
    ),
    gaps(
      "Complete with one word.",
      "1. Let me [start] with a question: who has a bike?\n2. Next, let's [look] at the numbers.\n3. This brings me [to] my last point.\n4. In [conclusion], we need to act now.\n5. Are there any [questions]?\n6. Let me give you an [example].",
    ),
    trueFalse("Tips for a great presentation. True or false? 💡", [
      ["Tell the audience what your talk will be about at the start.", true],
      ["Put all your notes on the slides and read them.", false],
      ["Pause after each main part.", true],
      ["Give a real example or a short story.", true],
      ["End with “That's all, bye.”", false],
    ]),
  ]),

  section("Say it right: Pause and stress", [
    box(
      "🗣️ Say it right",
      "Good speakers **pause** — it gives the audience time to think.\n\n*Today I'm going to talk about… ⏸️ parks. ⏸️*\n\nStress the **key words**: *We need MORE green SPACES.*\n\nAnd go **down** ↘ at the end of a point — it sounds confident.",
    ),
    quiz("Where would you pause? Choose the best version.", [
      { q: "My presentation has three parts.", options: ["*My presentation has three parts. ⏸️", "My ⏸️ presentation has ⏸️ three ⏸️ parts."] },
      { q: "First of all, why do we need it?", options: ["*First of all, ⏸️ why do we need it?", "First ⏸️ of ⏸️ all why do we need it?"] },
      { q: "To sum up, everyone wins.", options: ["*To sum up, ⏸️ everyone wins.", "To ⏸️ sum ⏸️ up everyone ⏸️ wins."] },
      { q: "Which words should be stressed? “We need more green spaces.”", options: ["*MORE, GREEN SPACES", "We, need"] },
    ]),
  ]),

  section("Your presentation", [
    text(
      "Prepare: 5 minutes ⏱️",
      "Choose a topic you know and care about:\n\n- 💡 your project idea from the last lesson\n- 🏙️ “What our city needs”\n- 🎨 a hobby that everyone should try\n- 🌍 a place everyone should visit\n- 📱 an app or invention that changed your life\n\nPlan **three parts** and write only **key words** on a card — not full sentences!",
    ),
    write("Write your plan with key words for each part (40+ words): start · point 1 · point 2 (+ an example) · sum up.", 40),
    text(
      "Present: 2–3 minutes 🎤",
      "Stand up if you can. Use at least **five signposts** from the table. Look at your teacher, pause between parts, and finish with *Any questions?*\n\nYour teacher asks 2 questions at the end — answer them! Then your teacher gives feedback on: structure ✅ signposts ✅ voice and pauses ✅ eye contact ✅",
    ),
    tip("Time the presentation. Give feedback in a “sandwich”: one strong point, one thing to improve, one more strong point. If time allows, let the student give it again with the improvement — the second try is always much better."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "A good way to start:", options: ["*Today I'm going to talk about…", "OK, so… um…", "Bye!"] },
      { q: "A good way to move to the next part:", options: ["*Moving on to…", "Stop.", "Whatever."] },
      { q: "A good way to finish:", options: ["*To sum up… Thank you for listening.", "That's it.", "Finished, bye."] },
      { q: "the people who listen to you =", options: ["*the audience", "the slides", "the handout"] },
    ]),
    box(
      "Phrase of the day: break a leg!",
      "🦵🎭 **Break a leg!** = Good luck! (People say it before a performance or a presentation.)\n\n*“I have my big presentation tomorrow.” — “Break a leg!”* 🍀",
    ),
  ]),

  homework(
    [
      gaps(
        "Complete the phrases.",
        "1. Today I'm going to [talk] about…\n2. My presentation has three [parts].\n3. [Moving] on to my next point…\n4. As you can [see] in this chart…\n5. To sum [up]…\n6. Thank you for [listening].",
      ),
      choose(
        "Choose.",
        "1. [*First of all/Firstly of all], I'll explain the problem.\n2. [*Let me give/Let me to give] you an example.\n3. [*As you can see/As you can to see] on this slide…\n4. [*In conclusion/In concluding], we need your help.\n5. Are there [*any questions/some question]?\n6. [*Next, let's look/Next, let's looking] at the results.",
      ),
      match("Match the words and the meanings.", [
        ["a slide", "one page of a presentation"],
        ["the audience", "the people who listen"],
        ["a handout", "paper given to the audience"],
        ["a chart", "a picture with numbers"],
        ["eye contact", "looking at people"],
        ["sum up", "say the main points again"],
      ]),
    ],
    "Homework: Phrases",
  ),
  homework(
    [
      write("Write the full script for a 2-minute presentation (150+ words) on a topic you care about. Use at least six signposts.", 150),
      record("Record your presentation (2–3 minutes). Use your plan, not the full script! 🎤", 180),
    ],
    "Homework: Writing and speaking",
  ),
]);
