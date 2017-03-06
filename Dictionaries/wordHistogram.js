//Write a function wordHistogram which takes a string as argument and tallies the number of times each word appears in the string, and returns the tally as an object.

// var string;
var wordsList = {};

function letterHistogram(string) {
	var splitWords = string.split(" ");
	for (var i = 0; i < splitWords.length; i++) {
		var word = splitWords[i];

		//means if lettersList[letter] is empty, return 0. if not, add 1
		wordsList[word] = (wordsList[word] || 0) + 1;
	}
	console.log(wordsList);
}

letterHistogram('to be or not to be')

//Bonus: Print the top 2 most frequently used letters in the string
//solution declare 2 vars and compare 1 against each values


wordsList[0];
