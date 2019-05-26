/**
 * Run To Completion
 * Functions: once the function starts running, it will always
 * run to completion before any other JS code can run.
 */
const { log, delaySync } = require('../log');

setTimeout(() => {
	log('\nHello World');
}, 1);

function main() {
	for (let i = 0; i <= 10; i += 1) {
		log(i);
		delaySync(500);
	}
}

main();
// 0..10
// "Hello World"
