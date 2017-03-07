//Give an array of products, sort array by price.

var products = [
  { name: 'Basketball', price: 12.00 },
  { name: 'Tennis Racquet', price: 66.00 },
  { name: 'Tennis Balls', price: 9.00 },
  { name: 'Tennis Balls', price: 9.00 }
];

function compare(a, b) {
	return a.price - b.price;
}

products.sort(compare);

console.log(products);