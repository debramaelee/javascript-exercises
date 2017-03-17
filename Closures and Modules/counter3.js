//Allow the counter to either increment 1 or decrement by 1 by calling the increment and decrement methods, respectively. Note: now the counter needs to return an object rather than a function.

// > var count = counter(4);
// > count.increment()
// 5
// > count.increment()
// 6
// > count.decrement()
// 5
// > count.decrement()
// 4

function counter(y) {
	var count = y;
	function actuallyCount(x) {
		count++;
		return count;
		var increment = function() {
		// function increment() {
			return count++;
		}
		// function decrement() {
		var decrement = function() {
			return count--;
		}
		
	}
	return actuallyCount;
}

var count = counter(4);


count.increment();