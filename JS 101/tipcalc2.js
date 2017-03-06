//Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.

//good -> 20%
//fair -> 15%
//bad -> 10%

function tipAmount(billAmount, serviceLevel) {
	if (serviceLevel == 'good') {
		totalBill = billAmount * 1.2;
	}
	else if (serviceLevel == 'fair') {
		totalBill = billAmount * 1.15;
	}
	else if (serviceLevel == 'bad') {
		totalBill = billAmount * 1.1;
	}
	console.log(totalBill);
}

tipAmount(100, 'fair');
tipAmount(71, 'bad');
tipAmount(23, 'good');
