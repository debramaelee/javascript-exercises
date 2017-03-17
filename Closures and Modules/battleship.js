//The following code implements a battleship board. The fire function takes a row and col and returns 'Hit!' or 'miss' depending on if it hit a part of the ship. The problem is we don't want the enemy to see our board! So we need to hide the board variable within a closure, but still expose the fire function to the outside. Use the module pattern to do this.

// var myBoard = function initializeBoard() {
// 	var board = [
// 		['o', ' ', 'o', 'o', ' '],
// 		['o', ' ', ' ', ' ', ' '],
// 		['o', ' ', 'o', 'o', 'o'],
// 		['o', ' ', ' ', ' ', ' '],
// 		[' ', ' ', 'o', ' ', 'o'],
// 		[' ', ' ', 'o', ' ', 'o']
// 	];

// 	function fire(row, col) {
// 		if (board[row][col] === 'o') {
// 			board[row][col] = 'x'
// 			return 'Hit!'
// 		} else {
// 			return 'Miss'
//   		}	

// 	}
// }

function fire(row, col) {

	var board = [
	  ['o', ' ', 'o', 'o', ' '],
	  ['o', ' ', ' ', ' ', ' '],
	  ['o', ' ', 'o', 'o', 'o'],
	  ['o', ' ', ' ', ' ', ' '],
	  [' ', ' ', 'o', ' ', 'o'],
	  [' ', ' ', 'o', ' ', 'o']
];

  if (board[row][col] === 'o') {
    board[row][col] = 'x'
    return 'Hit!'
  } else {
    return 'Miss'
  }
}

console.log(fire(0, 1))