//Allow the caller of counter to initialize the count to the first argument that's passed in.

function counter(y) {
	var count = y;
	function actuallyCount(x) {
		count++;
		return count;
	}
	return actuallyCount;
}

var count1 = counter(4);

console.log(count1());
// > 5
console.log(count1());
// > 6