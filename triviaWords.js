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
    });
}

module.exports = getWords;




