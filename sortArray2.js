//Sort the same array, but not by alphabetically order, but by how long each name is, shortest name first.

var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];

function findLength(n) {
	return n.length + ': ' + n;
}

var lengths = people.map(findLength);
// console.log(lengths);

function compareNum(a, b) {
	return a - b;
}

lengths.sort(compareNum);
console.log(lengths);