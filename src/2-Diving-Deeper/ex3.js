/**
 * Delegating Generators
 * We can execute generators from generators,
 * and delegate the iteration control with the yield* keyword.
 */
const { log, delaySync } = require('../log');

function* create3To4Counter() {
	yield 3;
	yield 4;
}

function* createCounter() {
	yield 1;
	yield 2;
	yield* create3To4Counter();
	yield 5;
}

for (const value of createCounter()) {
	log(value);
	delaySync(600);
}
