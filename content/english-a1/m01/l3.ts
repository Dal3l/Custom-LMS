import { box, choose, gaps, homework, lesson, match, quiz, record, section, text, tip, trueFalse, words, write } from "../../kit";

// 1.3 My profile — a skills lesson (no new grammar): profiles, jobs with a / an (as phrases), numbers 20–100, email.
export default lesson("a1-1.3", "My profile", () => [
  section("Warm-up", [
    box("Today you will…", "- read short profiles\n- say your job or what you study\n- count from 20 to 100\n- make your own profile"),
    text(
      "Talk to your teacher.",
      "- Do you have a profile? Where — in a game 🎮, in a school app 🏫 or on social media 📱?\n- What's your username?\n- Is your profile picture a photo of you? 🙂",
    ),
    tip("Review: *Where are you from? Is your best friend from Kazakhstan?* Keep it light — the student can make up a username."),
  ]),

  section("Vocabulary", [
    words("Profiles and jobs", [
      ["profile", "📄 information about you in an app"],
      ["username", "🆔 your name in an app or a game", "My username is rocket_07."],
      ["bio", "✍️ a short text about you in a profile"],
      ["age", "🎂 how old you are", "Age: 16"],
      ["city", "🏙️ Almaty, London, Tokyo…"],
      ["a student", "🎓 you study at school or university", "I'm a student."],
      ["a teacher", "👩‍🏫", "She's a teacher."],
      ["a designer", "🎨 makes pictures, websites, clothes…"],
      ["a developer", "💻 makes apps and websites"],
      ["a doctor", "🩺"],
      ["a nurse", "🏥"],
      ["a driver", "🚕"],
      ["a blogger", "📱 makes videos or posts online"],
      ["an engineer", "⚙️"],
      ["an artist", "🖌️"],
    ]),
    box("a or an?", "**a** + consonant sound: *a student, a doctor, a designer*\n\n**an** + vowel sound (a, e, i, o, u): *an engineer, an artist, an actor*"),
    choose("Choose a or an.", "1. I'm [*a/an] student.\n2. She's [a/*an] engineer.\n3. He's [*a/an] developer.\n4. Mia is [a/*an] artist.\n5. Leo is [*a/an] blogger."),
    words("Numbers 20–100", [
      ["twenty", "20"],
      ["twenty-one", "21"],
      ["thirty", "30"],
      ["forty", "40"],
      ["fifty", "50"],
      ["sixty", "60"],
      ["seventy", "70"],
      ["eighty", "80"],
      ["ninety", "90"],
      ["one hundred", "100"],
    ]),
    match("Match the words and the numbers.", [
      ["thirteen", "13"],
      ["thirty", "30"],
      ["fifteen", "15"],
      ["fifty", "50"],
      ["forty-four", "44"],
      ["ninety-nine", "99"],
      ["sixty-two", "62"],
      ["one hundred", "100"],
    ]),
    tip("*Pronunciation tip:* thir**TEEN** — **THIR**ty, fif**TEEN** — **FIF**ty. Say a number, the student points to it: 13 or 30?"),
  ]),

  section("Reading", [
    quiz(
      "Read the profiles. Who is it?",
      [
        { q: "Who is a student?", options: ["*Aigerim", "Rocket", "Chen"] },
        { q: "Who is thirty-two?", options: ["Aigerim", "Rocket", "*Chen"] },
        { q: "Who is from Brazil?", options: ["Aigerim", "*Rocket", "Chen"] },
        { q: "Who is a designer?", options: ["Aigerim", "Rocket", "*Chen"] },
        { q: "Who is a gamer?", options: ["Aigerim", "*Rocket", "Chen"] },
      ],
      {
        read: [
          "## 🏫 SchoolApp\n**Aigerim Bekova**\nAge: 16 · City: Astana\nBio: *I'm a student. My favorite subject is English!* 📚",
          "## 🎮 Nova Games\n**Rocket** (Sofia Lima)\nAge: 19 · City: São Paulo, Brazil\nBio: *Gamer and streamer. GG!* 🚀",
          "## 💼 WorkHub\n**Chen Wei**\nAge: 32 · City: Shanghai, China\nBio: *I'm a designer. Apps and websites.* 🎨\nEmail: chen.wei@workhub.com",
        ].join("\n\n"),
      },
    ),
    text("Talk to your teacher.", "- Which profile is cool? Why?\n- What is in a good bio?"),
  ]),

  section("Listening", [
    box("How we say emails", "**@** = *at* · **.** = *dot* · **_** = *underscore*\n\n*chen.wei@workhub.com* = chen **dot** wei **at** workhub **dot** com"),
    gaps(
      "Read and write the email addresses.",
      "1. leo at mail dot com → [leo@mail.com]\n2. mia underscore art at nova dot com → [mia_art@nova.com]\n3. aigerim dot b at school dot kz → [aigerim.b@school.kz]",
    ),
    tip("Read more email addresses aloud (make them up, or use the student's own if they want). The student writes them on the board."),
  ]),

  section("Let's talk", [
    text(
      "Make your profile and tell your teacher about it.",
      "**Name:** …\n\n**Username:** …\n\n**Age:** …\n\n**City:** …\n\n**I'm a…** (student / designer / …)\n\n**Bio:** …\n\n*Hi! I'm… My username is… I'm a… I'm from…*",
    ),
    text("Now tell your teacher about a friend or a famous person.", "*This is… He's / She's… He's / She's from… He's / She's a…*"),
    tip("The student can make up a profile. *If you have time:* the student asks the teacher about the teacher's profile."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "She's ___ engineer.", options: ["*an", "a", "—"] },
      { q: "50 = ?", options: ["*fifty", "fifteen", "five"] },
      { q: "@ = ?", options: ["*at", "dot", "and"] },
    ]),
    box("Word of the day: no cap", "**no cap** = really, it's true! 🧢❌\n\n*This game is the best, no cap.*"),
  ]),

  homework([
    gaps("Write the numbers in words.", "1. 30 → [thirty]\n2. 14 → [fourteen]\n3. 45 → [forty-five]\n4. 100 → [one hundred/a hundred]\n5. 18 → [eighteen]"),
    trueFalse(
      "Read Leo's profile. True or false?",
      [
        ["Leo is twenty.", true],
        ["He's from Brazil.", true],
        ["He's a student.", false],
        ["His email is leo_photo@mail.com.", true],
      ],
      { read: "## 📷 PhotoGram\n**Leo Costa**\nAge: 20 · City: Rio, Brazil\nBio: *I'm a blogger. Photos of my city!* 🏖️\nEmail: leo_photo@mail.com" },
    ),
    write("Write your profile: name, age, city, job and a short bio. (25+ words)", 25, {
      read: "*Example:* My name is Daniyar. My username is dan_99. I'm seventeen. I'm from Astana. I'm a student. Bio: Gamer, football fan and English learner! ⚽",
    }),
    record("Record your answer: tell us about a friend — name, age, city, job.", 90),
  ]),
]);
