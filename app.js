var inquirer = require("inquirer");
var Word = require("./word.js");
var Letter = require("./letter.js");


// Variables
var wordBank = ["afraid", "blood", "cadaver", "coffin", "monster", "murder", "spooky", "tombstone", "wicked"]; 
var guessesLeft = 12; // Number of guesses remaining
var guessesArray = [];
var missedArray = [];
var guess = process.argv[2]; //user's guess
var hangmanWord = [];
var word = "";


var game = {
	startGame: function() {
		console.log(".5)...running startGame()...");
		inquirer.prompt([
		      {
		        name: "startGame",
		        message: "Welcome to Hangman! Would you like to begin?",
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
		  			// word check
		  			console.log("now, i am writing: " + word);
		  			// reset all variables
		  			guessesArray = [];
		  			missedArray = [];
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
	playAgain: function() {
		inquirer.prompt([
		      {
		        name: "playAgain",
		        message: "Would you like to play again?",
		        type: "confirm"
		      }
		  	]).then(function(response) {
		  		if (response.playAgain) {
		  			// initialize the new word
		  			var newWord = new Word();
		  			// call the word.newWord function
		  			newWord.newWord();
		  			// re-assign the word variable to make the rest of my legacy code work
		  			word = newWord.word;
		  			// word check
		  			console.log("now, i am writing: " + word);
		  			// clear arrays
		  			guessesArray = [];
		  			missedArray = [];
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
		console.log("1)...running newGuess()...");
		console.log("now, i am writing: " + word);
		// if there are no guesses left, then end game
		if (guessesLeft == 0) {
			console.log("You used all your guesses -- Game Over! Try again...");
			game.playAgain();
		} else {
			// else prompt the new game.
			inquirer.prompt([
		      {
		        name: "guess",
		        message: "Guess a letter."
		      }
		  	]).then(function(guess) {
		  		// callback function returns {guess: b}, so to get the input letter, we need guess.guess
		  		console.log(guess.guess);
		  		// pass guess.guess to the next function
				game.verifyUnique(guess.guess);
		  	});
		};
	},
	verifyUnique: function(guess) {
		console.log("2)...running verifyUnique()...");
		// in this function, guess = guess.guess from the inquirer's callback
		console.log(guess);
		// if the guess has already not yet been guessed
		if (guessesArray.indexOf(guess) === -1) {
			game.compare(guess);
		} else {
			guessesArray.push(guess);
			console.log("You've already guessed that letter! Try again...");
			game.newGuess();
		};
		// add the guess to guessesArray
		guessesArray.push(guess);
	},
	compare: function(guess) {
		console.log("3)...running compare()...");
		console.log(guess);
		console.log(word.indexOf(guess));
		// reduce guessesLeft by 1
		guessesLeft--;
		// If the letter is in the word
		if (word.indexOf(guess) !== -1) {
			// call the game.correct() function & pass the guess
			game.correct(guess);
		} 
		// if the letter is not in the word
		else {
			// add the word to the missed array & decrease guesses left
			console.log("Sorry, \"" + guess + "\" is not in the word.")
			missedArray.push(guess);
			// print results
			game.print();
			// begin nextGuess again
			game.newGuess();
		}
	},
	//correct(),
	correct: function(guess){
		console.log("4)...running correct()...");
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
			game.playAgain();
		} else {
			// display the correctly guessed letter in the proper hangman spaces
			game.print();
			game.newGuess();
		};
	},
	//print(),
	print: function(){
		console.log("5)...running print()...");
		console.log(hangmanWord.join(""));
		console.log("You have " + guessesLeft + " guesses left.");
	}
};



game.startGame();

