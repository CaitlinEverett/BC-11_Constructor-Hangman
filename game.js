// The Game constructor is responsible for keeping score and controlling the flow of the overall game

// Save a reference for `this` in `self` as `this` will change inside of inquirer


// Sets the guesses to 10 and gets the next word


// Creates a new Word object using a random word from the array, asks the user for their guess


// Uses inquirer to prompt the user for their guess

// If the user has no guesses remaining after this guess, show them the word, ask if they want to play again


// If the user guessed all letters of the current word correctly, reset guessesLeft to 10 and get the next word


// Otherwise prompt the user to guess the next letter


// Asks the user if they want to play again after running out of guessesLeft

// If the user says yes to another game, play again, otherwise quit the game


// Prompts the user for a letter

// The users guess must be a number or letter

// If the user's guess is in the current word, log that they chose correctly


// Otherwise decrement `guessesLeft`, and let the user know how many guesses they have left


// Logs goodbye and exits the node app