// Write a box function to return a string represent a box - but do not print it. The function should take two arguments (width, height)

// It should return a string, which if printed using console.log, would display the box in the terminal. 

function range(min, max) {
  var arr = [];
  for (var i = min; i < max; i++) {
    arr.push(i);
  }
  return arr;
}


function makeBox(width, height) {
	var arr = range(0, height)
	var repeated = arr.map(function(){
		console.log('*');
	});
}

makeBox(4, 10);

