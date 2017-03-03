//Write a function printBanner which is given some text and prints a banner with a border surrounding the text. The border has to stretch to the length of the text.

function printBanner(text) {
	for(i = 1; i <= 3; i++) {
		if (i == 1 || i == 3) {
			console.log('*'.repeat(text.length + 4));
		}
		else {
			console.log('* ' + text + ' *');
		}
	}
}

printBanner('hello i am a string');
printBanner('Welcome to DigitalCrafts');