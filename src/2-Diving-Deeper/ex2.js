/**
 * Error Handling
 * One can throw an error in a generator from the outside with it.throw().
 * Since all the code inside of a generator is synchronous,
 * we can use the standard try/catch method of handling errors!
 */
const { log } = require('../log');

// Code without any error handling
function* createHello() {
	try {
		const word = yield;
		log(`Hello ${word}`);
	} catch (err) {
		log(`Error: ${err}`);
	}
}

const hello = createHello();
hello.next();

// Throw an error in a generator from the outside
// hello.throw('Something went Wrong!');
try {
	throw new Error('Something went wrong!');
} catch (err) {
	hello.throw(err.message);
}

hello.next('World!');
