//Write a function ticTacToe which takes a two-dimensional array of size 3x3. Each cell in the two dimensional array can be one of 'O', 'X', or null. The ticTacToe function will determine the winner by

// returning 'O' if O makes a row
// returning 'X' if X makes a row
// return null if neither makes a row

function ticTacToe(arr) {
  var winner = null;
  for (var i = 0; i < 3; i++) {
    if (arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2]) {
      winner = arr[i][0];
      break;
    } else if (arr[0][i] === arr[1][i] && arr[1][i] === arr[2][i]) {
      winner = arr[0][i];
      break;
    } else if (i===1 && ((arr[i-i][i-i] === arr[i][i] && arr[i][i] === arr[i+i][i+i]) || (arr[i-i][i+i] === arr[i][i] && arr[i][i] === arr[i+i][i-i]))) {
      winner = arr[i][i];
      break;
    }
  }
  return winner;
}

var g1 = ticTacToe([
  ['O', 'O', 'O'],
  ['X', null, 'X'],
  [null, 'X', null]
]);

var g2 = ticTacToe([
  ['O', 'X', 'O'],
  ['O', 'X', null],
  [null, 'X', null]
]);

var g3 = ticTacToe([
  ['O', 'X', 'O'],
  ['O', 'O', null],
  [null, 'X', 'X']
]);

console.log(g1);
console.log(g2);
console.log(g3);
