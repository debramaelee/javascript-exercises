//You will write a function callNTimes that takes two arguments: times as a number, and fun as a function. It will call that function for that many times.

function fun() {
	console.log("Hello world!");
} 

function callNTimes(times, fun) {
  for (i = 0; i < times; i++) {
  	fun();
  }
}

callNTimes(5, fun);