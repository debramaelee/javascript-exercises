// Write a box function to return a string represent a box - but do not print it. The function should take two arguments (width, height)

// It should return a string, which if printed using console.log, would display the box in the terminal. 

function range(min, max) {
  var arr = [];
  for (var i = min; i < max; i++) {
    arr.push(i);
  }
  return arr;
}

function strMultiply(str, times) {
	var arr = range(0, times)
	var repeated = arr.map(function() {
		return str;
	});
	//join string
	var nameList = repeated.reduce(function(currentValue, name) {
		return currentValue + name;
	}, '');
console.log(nameList);
}

function generateBox(height, width) {
	return strMultiply(
		strMultiply('*', width) + '\n', height);


// alt solution
// function makeBox(width, height) {
// 	var arr = range(0, height)
// 	var repeated = arr.map(function(){
// 		console.log('*');
// 	});
// }

generateBox(4, 10);

