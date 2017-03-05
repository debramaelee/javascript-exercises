//Write a function which takes an array of numbers as input and returns a new array containing result of squaring each of the numbers in the given array by two. 

var numsList = [0, 1, 2, -3, 49, -22, 43, 56, 100, -69]

function findSquares(n) {
	return n * n;
}

var squares = numsList.map(findSquares);
console.log(squares);