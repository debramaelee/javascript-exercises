//Write a function factors which is given a number and returns an array containing all its factors. What are factors? 

numbersList = [];

function factors(number) {
	for(i = 1; i <= number; i++) {
		if(number % i == 0) {
			numbersList.push(i);
		}
	}
	console.log(numbersList);
}

factors(12);