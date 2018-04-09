// Trivia Hangman 
// Caitlin Everett 2018
// A Node-based hangman game 

const game = require("./game.js"); // keeps track of gameplay
const round = require("./round.js"); // keeps track of guesses for each word
const trivia = require("./triviaWords.js"); // fetches 10 new prompts
const word = require("./word.js");  // readies a trivia word for a round of play
const prompt = require("./prompt.js"); // prompts each guess
const letter = require("./letter.js"); // processes each guess

const inquirer = require("inquirer");	//prompt user for input

