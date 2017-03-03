//Write a function splitAmount that takes the bill amount and the level of service, and the number of people to split the bill between. It will return the final amount for each person.

//good -> 20%
//fair -> 15%
//bad -> 10%

function splitAmount(billAmount, serviceLevel, numPeople) {
	if (serviceLevel == 'good') {
		totalBill = billAmount * 1.2;
	}
	else if (serviceLevel == 'fair') {
		totalBill = billAmount * 1.15;
	}
	else if (serviceLevel == 'bad') {
		totalBill = billAmount * 1.1;
	}

	totalBillSplit = totalBill / numPeople
	console.log(totalBillSplit);
}

splitAmount(100, 'fair', 3);
splitAmount(71, 'bad', 5);
splitAmount(23, 'good', 2);
splitAmount(100, 'good', 5);
splitAmount(40, 'fair', 2)
