//Write a function printNumbers which is given a start number and an end number. It will print the numbers from one to the other, one per line. 

//Write two versions of the above function. One using a while loop and the other using a for loop.

function forPrintNums(startNum, endNum) {
	for(var i = startNum; i <= endNum; i++) {
		console.log(i);
	}
}

forPrintNums(1, 10);


function whilePrintNums(startNum,endNum) {
	while(startNum <= endNum) {
		console.log(startNum);
		startNum++;
	}
}

whilePrintNums(2, 5);