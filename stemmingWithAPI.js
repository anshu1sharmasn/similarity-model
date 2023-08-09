const natural = require('natural');
const axios = require('axios');

// Stemming
    const stemmer = natural.PorterStemmer;


function findNearestWord(word){

  
    const stemmedWord = stemmer.stem(word);
    let text="";
    console.log(stemmedWord);

    
    for(let i=0;i<stemmedWord.length;i++)
    {
        text+=stemmedWord[i];
        fetch(`https://api.dictionary.com/endpoint/${text}`)
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not OK');
            }
            return response.json();
        })
        .then(data => {
            // Process the response data
            console.log(data); 
            return text;
        })
        .catch(error => {
            console.error('Error:', error.message);
        });

    }   
    return "no word";
}
console.log(findNearestWord("running"));
