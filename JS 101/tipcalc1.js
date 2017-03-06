//Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:

//good -> 20%
//fair -> 15%
//bad -> 10%

function tipAmount(billAmount, serviceLevel) {
	if (serviceLevel == 'good') {
		totalTip = billAmount * 0.2;
	}
	else if (serviceLevel == 'fair') {
		totalTip = billAmount * 0.15;
	}
	else if (serviceLevel == 'bad') {
		totalTip = billAmount * 0.1;
	}
	console.log(totalTip);
}

tipAmount(100, 'fair');
tipAmount(71, 'bad');
tipAmount(23, 'good');
