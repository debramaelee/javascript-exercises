//Write a function which takes an array of numbers as input and returns a new array containing only the even numbers in the given array.

var numsList = [0, 1, 2, -3, 49, -22, 43, 56, 100, -69]

function findEvens(n) {
	return n % 2 == 0;
}

var evens = numsList.filter(findEvens);
console.log(evens);