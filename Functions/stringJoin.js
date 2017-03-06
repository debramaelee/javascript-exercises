// Implement a strJoin function which takes two arguments:

// strs - an array of strings to be joined
// sep - a string separator to use to separate each string in the strs array

strings = ['Hello', 'and', 'goodbye', '!'];

var strJoin = strings.reduce(function(currentValue, word) {
	return currentValue + ' ' + word;
}, '');

console.log(strJoin);
