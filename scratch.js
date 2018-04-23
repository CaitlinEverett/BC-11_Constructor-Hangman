//This JS picks a word and exports the word's letters to word.js and letter.js
const Client = require('node-rest-client').Client;

const client = new Client();
let arr = [];

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
		console.log(arr);
    });
}


const cb = function(array){
    console.log(array);
}

// call the trivia function and its callback
getWords(cb);