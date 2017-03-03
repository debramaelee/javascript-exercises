// Modify your hello program such that if no name is given: hello(), it will print "Hello, world!", otherwise it behaves the same as previously.

var name = 'Debra'

function hello(name) {
	if (typeof(name) == 'string') {
		console.log('Hello, ' + name);
	}
	else {
		console.log('Hello, world!');
	}
}

hello(name);