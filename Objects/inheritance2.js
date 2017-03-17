function Person(name) {
  this.name = name;
  this.friends = [];
}

Person.prototype.addFriend = function(friend) {
  this.friends.push(friend);
};

Person.prototype.createGreeting = function(other) {
  return 'Yo ' + other.name + '! from ' + this.name + '.';
};

Person.prototype.greet = function(other) {
  console.log(this.createGreeting(other));
};

//Rewrite the above type by inlining it's greet method into it's constructor.

/////

function Person(name) {
  this.name = name;
  this.friends = [];
  this.greet = console.log('Yo' + other.name + '! from ' + this.name + '.')
}

//Take the previous Person type and rewrite it in factory function form.

function createPerson(name) {
	var person = {
		name : name,
	};

	person.greet = function(other) {
		console.log('Yo ' + other.name + '! from ' + this.name + '.');
	};
	return person;
}

//Given the Person type given in the last problem, add to it a lazyGreet method which will print out the same greeting message but only after 2 seconds.





