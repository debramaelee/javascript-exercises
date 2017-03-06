//Write a function letterHistogram which takes a string as argument. It will tally(histogram) the number of times each character appears in the string, and return the tally as an object.

// var string;
var lettersList = {};

function letterHistogram(string) {
	for (var i = 0; i < string.length; i++) {
		var letter = string[i];
		//means if lettersList[letter] is empty, return 0. if not, add 1
		lettersList[letter] = (lettersList[letter] || 0) + 1;	
	}
	console.log(lettersList);
}

letterHistogram('banana')

