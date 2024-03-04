// Function to generate Lorem ipsum text
function generateLorem() {
  // Get the number of paragraphs and words from the HTML document
  const numParagraphs = parseInt(document.getElementById("num-paragraphs").value);
  const numWords = parseInt(document.getElementById("num-words").value);
 
  // Initialize the output string
  let output = "";
 
  // Loop through the specified number of paragraphs
  for (let i = 0; i < numParagraphs; i++) {
    // Generate a paragraph and add it to the output
    const paragraph = generateParagraph(numWords);
    output += paragraph + "\n\n";
  }
 
  // Display the generated text in the HTML document
  document.getElementById("output").innerText = output;
 }
 
 // Function to generate a single paragraph of Lorem ipsum text
 function generateParagraph(numWords) {
  // Define an array of Lorem ipsum words
  const words = [
    "If a dog and cat had a baby together that grew up and worked a desk job he'd be a Cog in the machine",
				"I'm still upset that Tie Domi didn't name his child Tyson",
				"A tagline for a car company that prides itself on its morals and ethics: Take the High Road",
				"Logan Broger is \"amazing\" and a \"wonderful boy\" according to Logan's mom. Felinamiss",
				"You know the Grammys are a joke when Future doesn't win Best Everything",
				"If you were a member of the Bloods and became paralyzed do you then become a member of the Crips?",
				"Curling is the best sport named after something you do to your hair",
				"You say potatoe, I say starchy carbs",
				"If you work for an ad agency and getting paid for it aren't you the one who is being influenced by advertising?",
				"Are there Out-of-Stock photos? Gafuffle",
				"I think of a lot of good ideas when going to the bathroom - I guess I have a real stream of consciousness",
				"Most streets are two-way streets...why does that make love so special?",
				"A tagline for an airline: Take the High Road",
				"Rumour has it targeted online advertising was developed because the internet was upset that you could read it but it couldn't read you. Trepidelicious",
				"This is a true fact: I never had a fear of heights until I fell off a roof",
				"A tagline for a special highway that is easy to navigate while under the influence of drugs: Take the High Road",
				"I'm the only person in the world with my name",
				"We need more werkin and less twerkin if you ask me. Balooby",
				"If Fantasy Hockey actually lived up to its name, every team would have Henrik Lundqvist and Joffrey Lupul on it",
				"I'm in a band that does Metallica covers with our private parts - it's called Myphallica. Petrovache",
				"Smiling could easily be misinterpreted for showing your teeth to someone because they said something that made you happy",
  ];
 
  // Initialize the paragraph string
  let paragraph = "";
 
  // Loop through the specified number of words
  for (let i = 0; i < numWords; i++) {
    // Select a random word from the array and add it to the paragraph
    const randomIndex = Math.floor(Math.random() * words.length);
    paragraph += words[randomIndex] + " ";
  }
 
  // Add a period to the end of the paragraph
  paragraph += ".";
 
  // Return the generated paragraph
  return paragraph;
 }