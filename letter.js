// Letter Constructor (letter.js) 

//require word.js
var GetWord = require("./word.js");

var newWord = new GetWord();
newWord.word();

	// check if the guessed letter matches any of the letters in the word
	// record the guessed letters
// Used for each letter in the current word. 
// Each letter object should either display an underlying character, 
// or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. 
// This should contain letter specific logic and data.