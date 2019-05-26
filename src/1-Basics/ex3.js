/**
 * Iterators and generators
 *
 * Since generators are also iterables, they can be used to implement iterables
 * without the extra boilerplate code. Let’s see a simple example.
 */
const { log, delaySync } = require('../log');

// Generator function
function* iterableObj() {
	yield 'This';
	delaySync(600);
	yield 'is';
	delaySync(600);
	yield 'iterable.';
}

// Iterators
for (const val of iterableObj()) {
	log(val, '\n');
}
