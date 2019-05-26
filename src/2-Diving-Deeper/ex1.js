/**
 * Error Handling
 * One can throw an error in a generator from the outside with it.throw().
 * Since all the code inside of a generator is synchronous,
 * we can use the standard try/catch method of handling errors!
 */
const { log } = require('../log');

// Code without any error handling
function* createHello() {
	const word = yield;
	log(`Hello ${word}`);
}

const hello = createHello();
hello.next();

// Lots of business logic might be going on between 1st next() and last next()
// and our whole app could crash if an error occurs here
// and it is not handled properly
// throw new Error('Unhandled Error');

hello.next('World!');
