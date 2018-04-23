//This JS picks a word and exports the word's letters to word.js and letter.js
const Client = require('node-rest-client').Client;
//const letter = require("./letter.js");

const client = new Client();
let arr = [];
let wordStuff = {};

const getWords = function(cb) {
    client.get('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple', function (data, response) {
        //process data from API
        for (let index = 0; index < data.results.length; index++) {
            //create a temporary object - to push into words array
            let tempObj = {
                category: JSON.stringify(data.results[index].category),
                question: JSON.stringify(data.results[index].question),
                word: JSON.stringify(data.results[index].correct_answer)
            };
            //push temp obj into words array
            arr.push(tempObj);
        }
		cb(arr);
    });
}


const cb = function(array){

	console.log(array);
        wordStuff = {
			words: [],
			randNum: 0,
			chosenWord: "",
			wordLetters:[],
			getWords: function (){
				for (i=0; i < array.length; i++){
					this.words.push(array[i]); //i read that i needed to set the object to an empty array before populating it --- is this true?
				}
			},
			pickWord: function(){
				this.randNum = Math.floor(Math.random()*this.words.length);
				this.chosenWord = this.words[this.randNum];
				this.wordLetters = this.chosenWord.split("");
			}
		}; //end object
	
	exports.toWordJS = wordStuff;
	exports.toLetterJS = wordStuff;
	exports.toMainJS = wordStuff;
}

// call the trivia function and its callback
getWords(cb);
makeObject(cb2);





