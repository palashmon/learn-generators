const moment = require('moment');

const log = function(...args) {
	const time = [moment().format('HH:mm:ss:')];
	Array.prototype.push.apply(time, args);
	console.log.apply(null, args);
};

// Not a generator, just function
const delaySync = function(time, displayLog = false) {
	if (displayLog) log("\nI'm", time, 'ms sync delay...');
	const endTime = new Date().valueOf() + time;
	let now = new Date();
	while (now.valueOf() < endTime) {
		now = new Date();
	}
};

module.exports = {
	log,
	delaySync
};
