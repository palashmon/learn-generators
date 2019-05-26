/**
 * Iterators and generators
 *
 * Processing each of the items in a collection is a very common operation.
 * JavaScript provides a number of ways of iterating over a collection,
 * from simple for loops to map() and filter().
 * Iterators and Generators bring the concept of iteration directly into the core language
 * and provide a mechanism for customizing the behavior of for...of loops.
 */
const { log, delaySync } = require('../log');

// Generator functions
function* makeRangeIterator(start = 0, end = 100, step = 1) {
	for (let i = start; i < end; i += step) {
		yield i;
	}
}

// Iterators
const it = makeRangeIterator(1, 10, 2);

// We can use for...of
/*
for (const val of it) {
	log(val);
	delaySync(600);
}
*/

// Or, while loop also like this
let result = it.next();
while (!result.done) {
	log(result.value); // 1 3 5 7 9
	result = it.next();
	delaySync(600);
}

log('\nIterated over the sequence');
