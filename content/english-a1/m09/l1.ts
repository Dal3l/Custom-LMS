import {
  box,
  choose,
  gaps,
  homework,
  lesson,
  listening,
  matchPictures,
  picture,
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

// 9.1 My city — G: imperative (Go straight, turn left, don't…). V: places in the city. Main format: a town map + listening.
// The map is drawn by scripts/content/city-map.py — the directions below follow its layout.
export default lesson("a1-9.1", "My city", () => [
  section("Warm-up: Around town", [
    box("Today you will…", "- name places in a city\n- give directions: *Go straight. Turn left.*\n- explain the way to a place in your city 🗺️"),
    picture("Places in a city", ["photos/city-pharmacy.jpg", "photos/city-supermarket.jpg", "photos/city-museum.jpg"]),
    text(
      "Talk about the photos.",
      "- What places are in the photos? Do you know the words?\n- Photo 1: The pharmacy is in New York, but the sign is in two languages. Can you read it? 😄\n- What's your favorite place in your city? Why?\n- Is there a museum near your home? A supermarket?",
    ),
  ]),

  section("Vocabulary: Places in the city", [
    words("Places in the city", [
      ["a park", "🌳"],
      ["a museum", "🏛️"],
      ["a bank", "🏦"],
      ["a hospital", "🏥"],
      ["a school", "🏫"],
      ["a pharmacy", "💊 🇬🇧 also: a chemist's"],
      ["a supermarket", "🛒"],
      ["a café", "☕"],
      ["a cinema", "🎬 🇺🇸 a movie theater"],
      ["a metro station", "🚇 🇬🇧 the Underground · 🇺🇸 the subway"],
      ["a bus stop", "🚏"],
      ["a mall", "🛍️ a big shopping center"],
      ["a street — a road", "🛣️"],
      ["a corner", "📐 where two streets meet"],
      ["traffic lights", "🚦"],
    ]),
    matchPictures("Match the photos.", [
      ["photos/city-pharmacy.jpg", "a pharmacy"],
      ["photos/city-supermarket.jpg", "a supermarket"],
      ["photos/city-museum.jpg", "a museum"],
      ["photos/tr-metro.jpg", "a metro station"],
    ]),
    quiz("Where do you go? Choose.", [
      { q: "You want to see a film. 🎬", options: ["*a cinema", "a bank", "a pharmacy"] },
      { q: "You need medicine. 💊", options: ["*a pharmacy", "a museum", "a café"] },
      { q: "You want to buy food. 🛒", options: ["*a supermarket", "a hospital", "a school"] },
      { q: "You need money. 💳", options: ["*a bank", "a park", "a cinema"] },
    ]),
  ]),

  section("Grammar: Directions", [
    tip("Use your hands and the map! The student is at “YOU ARE HERE” and looks right, along Main Street."),
    table("directions"),
    picture("The town map", ["maps/town.png"], "You are here: on Main Street. You look right ➡️"),
    quiz("Look at the map. Follow the directions. Where are you? 🗺️", [
      { q: "Go straight along Main Street. Cross Green Street. It's on your right, next to the café.", options: ["*the supermarket", "the museum", "the bank"] },
      { q: "Go straight. Cross Green Street and River Road. It's on your left.", options: ["*the hospital", "the cinema", "the park"] },
      { q: "Go straight. It's on your right, next to the school, before Green Street.", options: ["*the pharmacy", "the café", "the metro"] },
      { q: "Go straight along Main Street to the end. It's on your right.", options: ["*the metro", "the hospital", "the bank"] },
    ]),
    choose(
      "Choose.",
      "1. [*Go/Goes] straight on.\n2. [*Turn/You turn] left at the bank.\n3. [*Don't/Not] turn right!\n4. The museum is [*on/in] your left.",
    ),
    gaps("Complete the directions to the bank.", "[Go] straight along Main Street. [Cross] Green Street. The bank is on your [left], next to the museum, on the [corner] of Main Street and River Road."),
  ]),

  section("Listening: Excuse me, where's…?", [
    ...listening(
      "Listen. Tourists ask Dana for directions. Look at the map!",
      "**Tourist 1:** Excuse me! Where's the museum, please?\n\n**Dana:** The museum? Go straight along Main Street. Cross Green Street. The museum is on your left.\n\n**Tourist 1:** On the left. Thank you!\n\n**Tourist 2:** Hi! Sorry, is there a café near here? ☕\n\n**Dana:** Yes, there is. Go straight, cross Green Street, and it's on your right, next to the supermarket.\n\n**Tourist 2:** Great, thanks!\n\n**Tourist 3:** Excuse me, how do I get to the cinema? 🎬\n\n**Dana:** Go straight along Main Street. Cross Green Street and River Road. The cinema is on your right. Don't take a taxi — it's only five minutes on foot!\n\n**Tourist 3:** Thank you so much!",
    ),
    quiz("Listen and choose.", [
      { q: "The museum is…", options: ["*on the left", "on the right", "opposite the park"] },
      { q: "The café is next to…", options: ["*the supermarket", "the bank", "the cinema"] },
      { q: "How long is it to the cinema on foot?", options: ["*five minutes", "fifteen minutes", "an hour"] },
    ]),
    trueFalse("Look at the map. True or false?", [
      ["The park is on Main Street, on your left.", true],
      ["The hospital is next to the school.", false],
      ["The cinema is next to the metro.", true],
    ]),
  ]),

  section("Let's talk: Show me the way", [
    text(
      "Game: Where am I? 🗺️",
      "Look at the map. Give your teacher directions from “YOU ARE HERE” — don't say the place! Your teacher follows and guesses.\n\n*Go straight. Cross Green Street. It's on your left…* — *Is it the museum?*\n\nThen change roles!",
    ),
    text(
      "Your city 🏙️",
      "- How do you get from your home to your school, work or favorite café? Explain the way.\n- What's near your home? *There's a park and a supermarket near my home.*\n- What's a good place for tourists in your city? How do they get there?",
    ),
    tip("*If you have time:* open a real map app (on the board or a phone) and give directions in the student's real city."),
  ]),

  section("Wrap-up", [
    quiz("Quick quiz. Choose.", [
      { q: "⬅️ =", options: ["*Turn left.", "Turn right.", "Go straight."] },
      { q: "🇺🇸 the subway = 🇬🇧 …", options: ["*the Underground", "the bus", "the street"] },
      { q: "A polite question:", options: ["*Excuse me, where's the bank?", "Where bank?", "Bank where is?"] },
    ]),
    box("Word of the day: pin", "**drop a pin** 📍 = put a mark on a map in an app and send it.\n\n*I can't find the café! — No problem, I can drop a pin!*"),
  ]),

  homework(
    [
      sort("Sort the places.", {
        "🛒 Buy things": ["supermarket", "mall", "pharmacy"],
        "🎉 Free time": ["cinema", "park", "museum"],
        "🚇 Transport": ["metro station", "bus stop"],
      }),
      gaps("Complete.", "1. You buy medicine at a [pharmacy].\n2. You watch films at a [cinema].\n3. Red, yellow, green: traffic [lights] 🚦"),
    ],
    "Homework: Vocabulary",
  ),
  homework(
    [
      picture("The town map", ["maps/town.png"]),
      gaps("Look at the map. Complete the directions to the hospital.", "Go [straight] along Main Street. [Cross] Green Street and River Road. The hospital is on your [left]."),
      video("Watch: how to ask and give directions.", "UT0NtF2rXJw"),
    ],
    "Homework: Grammar and video",
  ),
  homework(
    [
      write("A tourist is at your home. Write the way to your favorite place in your city (a café, a park, a mall…). (35+ words)", 35, {
        read: "*Example:* Go out of my building and turn left. Go straight along Abay Street. Cross the street at the traffic lights. Turn right. The café is on your left, next to a pharmacy. It's called Coffee Point. Don't take a taxi — it's only ten minutes on foot!",
      }),
      record("Record directions: from your home to your school or work. Use go straight, turn left / right, cross.", 60),
    ],
    "Homework: Writing and speaking",
  ),
]);
