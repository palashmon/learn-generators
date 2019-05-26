/**
 * Delegating Generators
 * Communication between two different generators is also possible
 */
const { log, delaySync } = require('../log');

function* create3To4Counter() {
	delaySync(800);
	yield 3;

	// Return a value from delegated generator
	return 4;
}

function* createCounter() {
	yield 1;
	yield 2;
	const four = yield* create3To4Counter();
	log(four);
	yield 5;
}

for (const value of createCounter()) {
	log(value);
	delaySync(400);
}
