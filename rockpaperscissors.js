//Write a function rockPaperScissors which takes the throw of player 1 and the throw of player 2. A throw can have the values of 'rock', 'paper', or 'scissors'. It will return 'player 1' if player 1 wins, 'player 2' if player 2 wins, and 'draw' if there is no winner.

function rockPaperScissors(player1, player2) {
	if (player1 === 'rock' && player2 === 'scissors' || player1 === 'scissors' && player2 === 'paper' || player1 === 'paper' && player2 === 'rock'){
		console.log('player 1 wins');
	}
	else if (player1 === player2) {
		console.log('draw');
	}
	else {
		console.log('player 2 wins');
	}
}

rockPaperScissors('rock', 'paper');
rockPaperScissors('rock', 'rock');