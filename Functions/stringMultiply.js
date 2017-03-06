// Write a strMultiply function which takes two arguments:

// str - the string to multiply
// times - number of times to multiply

// You may not use the native repeat method that strings provide. But you can use the range function define in the previous problem and you can use the strJoin function you wrote.

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

strMultiply('abc', 3)



