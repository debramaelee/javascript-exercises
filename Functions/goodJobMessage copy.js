//Given an array of people's names, print out 'Good Job, {{name}}!' for each person's name, one on a line.

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

var goodJobMessage = function(person) {
  console.log('Good Job, ' + person + '!');
};
people.forEach(goodJobMessage);