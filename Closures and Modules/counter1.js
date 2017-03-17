//Make a counter function that returns a function that returns a successive number each time it is called.

function counter() {
	var count = 0;
	function actuallyCount(x) {
		count++;
		return count;
	}
	return actuallyCount;
}

var count1 = counter();
var count2 = counter();

console.log(count1());
// > 1
console.log(count1());
// > 2
console.log(count2());
// > 1
console.log(count2());
// > 2
console.log(count1());
// > 3