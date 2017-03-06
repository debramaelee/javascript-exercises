//Write function printBox which is given a width and height and prints a hollow box of those given dimensions.

function printBox(height, width) {
	for(i = 1; i <= height; i++) {
		if (i == 1 || i == height) {
			console.log('*'.repeat(width));
		}
		else {
			spaces = width - 2;
			console.log('*' + ' '.repeat(spaces) + '*');
		}
	}
}

printBox(4, 6);
printBox(10, 50);