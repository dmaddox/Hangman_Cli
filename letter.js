// Letter Constructor (letter.js) 
function Letter(letter) {
	this.currentLetter = letter;
	this.display = "";
	this.compare = function(word) {
		// If the letter is in the word
		if (word.indexOf(this.currentLetter) !== -1) {
			// set this.display to the currentLetter *guess*
			this.display = this.currentLetter;
		} 
		// if the letter is not in the word
		else {
			// notify the user
			console.log("Sorry, \"" + this.currentLetter + "\" is not in the word.")
			// set this.display to display a "-"
			this.display = "-";
		}
	};
};

module.exports = Letter;

	// check if the guessed letter matches any of the letters in the word
	// record the guessed letters
// Used for each letter in the current word. 
// Each letter object should either display an underlying character, 
// or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. 
// This should contain letter specific logic and data.