const trivia = require('./triviaWords.js');
let wordsArray = [];

const cb = function(array){
    wordsArray = array;
    console.log(wordsArray);
}

trivia(cb);