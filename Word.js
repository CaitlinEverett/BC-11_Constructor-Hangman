var Client = require('node-rest-client').Client;  //get data from web api (same as my trivia web app)

var client = new Client();
// I tried to do this with regular node https and need some help to get this working right - for some 
// reason i had an easier time with this node package than with HTTPS

client.get('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple', function (data, response) {
    // parsed response body as js object 
    //console.log(data);
    // raw response 
    //console.log(response); 
    //this was the annoyingly long output I asked about on Slack

    var words = [];

    for (let index = 0; index < data.results.length; index++) {
        //create a temporary object - to push into words array
        var tempObj = {
            category : JSON.stringify(data.results[index].category),
            question : JSON.stringify(data.results[index].question),
            word : JSON.stringify(data.results[index].correct_answer)
        };

        words.push(tempObj);
    }

    console.log(words[1]);
});
