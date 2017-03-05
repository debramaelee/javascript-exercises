//Write a function that takes an array of numbers and returns the product of the numbers.

numsList1 = [1, 4, 7, 2]
numsList2 = [0, 4, 67, 5]
numsList3 = [-5, 10, 3, 9]

var multiply = function(a, b) {
	return a * b;
};

var product = numsList1.reduce(multiply)
console.log("List 1's product is: " + product);

var product = numsList2.reduce(multiply)
console.log("List 2's product is: " + product);

var product = numsList3.reduce(multiply)
console.log("List 3's product is: " + product);