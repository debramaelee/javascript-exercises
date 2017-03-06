// Write a function acronym that takes an array of words as argument and returns the acronym of the words. You may use the strJoin function you wrote in the previous step.

var strings = ['national', 'aeronautics', 'space', 'administration'];

// inlined version
// var strabbreviated = strings.map(function(str) {
//   return str[0];
//   });
  
function strabbreviated(str) {
  return str[0];
}
var abbreviated = strings.map(strabbreviated);
console.log(abbreviated);

//join letters

var strJoin = abbreviated.reduce(function(currentValue, word) {
	return currentValue + '' + word;
}, '');

console.log(strJoin);  

