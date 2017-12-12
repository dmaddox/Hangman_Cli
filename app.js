var inquirer = require("inquirer");
var Word = require("./word.js");
var Letter = require("./letter.js");


// Variables 
var guessesLeft = 12; // Number of guesses remaining
var guessesArray = [];
var hangmanWord = [];
var word = "";
var prompt = "Welcome to Hangman! Would you like to begin a game?"


var game = {
	startGame: function() {
		inquirer.prompt([
		      {
		        name: "startGame",
		        message: prompt,
		        type: "confirm"
		      }
		  	]).then(function(response) {
		  		if (response.startGame) {
		  			// initialize the new word
		  			var newWord = new Word();
		  			// call the word.newWord function
		  			newWord.newWord();
		  			// re-assign the word variable to make the rest of my legacy code work
		  			word = newWord.word;
		  			// reset all variables
		  			guessesArray = [];
		  			hangmanWord = [];
		  			for (i =0; i < word.length; i++) {
		  				hangmanWord.push("-");			
		  			};
		  			guessesLeft = 12;
		  			game.print();
		  			game.newGuess();
		  		} else {
		  			console.log("Ok bye!");
		  		};
		  	});
	},
	newGuess: function() {
		// if there are no guesses left, then end game
		if (guessesLeft == 0) {
			console.log("You used all your guesses -- Game Over! (The word was " + word + ")");
			prompt = "Would you like to play again?"
			game.startGame();
		} else {
			// else prompt the new game.
			inquirer.prompt([
		      {
		        name: "guess",
		        message: "Guess a letter."
		      }
		  	]).then(function(guess) {
		  		// pass guess.guess to the next function
				game.verifyUnique(guess.guess);
		  	});
		};
	},
	verifyUnique: function(guess) {
		// initialize the new letter object w/ the Letter constructor function
		var newLetter = new Letter(guess);
		// if the guess has already not yet been guessed
		if (guessesArray.indexOf(newLetter.currentLetter) === -1) {
			// reduce guesses by 1
			guessesLeft--;
			// call compare function -- traditionally
			// game.compare(guess);
			// call compare function -- constructor function
			newLetter.compare(word);
			if (newLetter.display !== "-") {
				game.correct(guess);
			} else {
				// print results
				game.print();
				// begin nextGuess again
				game.newGuess();
			};
		} else {
			guessesArray.push(newLetter.currentLetter);
			console.log("You've already guessed that letter! Try again...");
			game.newGuess();
		};
		// add the guess to guessesArray
		guessesArray.push(newLetter.currentLetter);
	},
	//correct(),
	correct: function(guess){
		// loop through the word
		for (i = 0; i < word.length; i++) {
			//if the index of the word (letter) matches the guess
			if (guess === word[i]) {
				hangmanWord[i] = guess;
			};
		};
		// if the game has been won
		if (hangmanWord.join("") == word) {
			// celebrate!
			console.log(word);
			console.log("You win!!!");
			// ask the user if they want to start a new game
			prompt = "Would you like to play again?"
			game.startGame();
		} else {
			// display the correctly guessed letter in the proper hangman spaces
			game.print();
			game.newGuess();
		};
	},
	//print(),
	print: function(){
		console.log(hangmanWord.join(""));
		console.log("You have " + guessesLeft + " guesses left.");
	}
};

// begin the game!
game.startGame();

