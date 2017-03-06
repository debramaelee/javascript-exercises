//Write a function cipher which is given a string, an offset, and returns the Caesar cipher of the string.


var string = 'hello world';
var newString = [];

function cipher(string) {
	for (var i = 0; i < string.length; i++) {
	  var oldCode = string.charCodeAt(i);
	    if (oldCode < 110) {
	      var newCode = oldCode + 13;
	    }
	    else {
	      var newCode = oldCode - 13;
	    }
    var newLetter = String.fromCharCode(newCode);
 //    newString.push(newLetter);
	// }
	// var makeString = newString.join();
	// var noComma = makeString.replace(/\,/g,"");
	// console.log(noComma);
	console.log(newLetter);
}
}
	  
cipher('hello world');