//Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.

var numsList = [0, 1, 2, -3, 49, -22, 43, 56, 100, -69]

function findPos(n) {
	return n > 0;
}

var pos = numsList.filter(findPos);
console.log(pos);