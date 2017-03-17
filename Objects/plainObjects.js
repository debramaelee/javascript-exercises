function sayHi() {
  console.log('I am ' + this.name + '!');
}

var spiderman = {
  name: 'Spiderman',
  realName: 'Peter Parker',
};

var superman = {
  name: 'Superman',
  realName: 'Clark Kent',
};

spiderman.sayHi = sayHi;
superman.sayHi = sayHi;

function sayHi() {
  console.log('I am ' + this.name + '!');
}

//Attach to the sayHi function as a property of the spiderman and superman objects and then call sayHi as a method calls.

spiderman.sayHi();
superman.sayHi();

//using apply method

// sayHi.apply(spiderman);
// sayHi.apply(superman);


