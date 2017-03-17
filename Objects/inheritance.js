

var mom = {
  firstName: 'Alice',
  lastName: 'Wong',
  eyeColor: 'brown',
  hairColor: 'black',
  showInfo: showInfo
};

mom.showInfo = showInfo;

var daughter = {
  firstName: 'Ilene',
  hairColor: 'brown'
};

//Write code using __proto__ to make daughter inherit properties from mom. What are the daughter's properties and their values? Print them out.

daughter.__proto__ = mom;
console.log(daughter.firstName, daughter.lastName, daughter.eyeColor, daughter.hairColor);

//Add a method called showInfo to mom by attaching a function to it as a property. Calling this method will print out all four properties. Call this method on both mom and daughter.

function showInfo() {
	console.log('First Name: ' + this.firstName ,'Last Name: ' + this.lastName, 'Eye Color: ' + this.eyeColor,  'Hair Color: ' + this.hairColor);
}

mom.showInfo();
daughter.showInfo();





