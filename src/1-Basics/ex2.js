/**
 * Syntax of these new and exciting generator functions.
 * Generators are a special class of functions that simplify the task of writing iterators.
 * A generator is a function that produces a sequence of results instead of a single value, i.e you generate a series of values.
 */
const { log, delaySync } = require('../log');

// Creating a Generator
function* generatorFunction() {
	log('\nThis will be executed first.');
	yield 'Hello, ';

	delaySync(2000, !0);

	log('\nI will be printed after the pause');
	yield 'World!';
}

const generatorObject = generatorFunction();
log(generatorObject.next().value); // next = { value:'Hello,', done:false }
// This will be executed first.
// Hello,
log(generatorObject.next().value, '\n'); // next = { value:'World!', done:false }
// I'm 2000 ms sync delay...
// I will be printed after the pause
// World!
log(generatorObject.next().value); // next = { value:undefined, done:true }
// undefined
