//Write a function which takes an array of city objects like such as below as input and returns a new array containing the cities whose temperature is cooler than 70 degrees.

var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];

var coolerThan70Cities = cities.filter(function(cities) {
	return cities.temperature < 70;
});
console.log(coolerThan70Cities);

//Write a function which takes an array of city objects like the above problem as input and returns an array of the cities names.

var cityNames = cities.map(function(cities) {
	return cities.name;
});
console.log(cityNames);
