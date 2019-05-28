/**
 * Going Async With ES6 Generators
 * With one tiny utility function we’ll unlock the full power of generators
 * to make them work well with Promises and thus be the perfect tool
 * for asynchronous flows in our apps.
 */
const fetch = require('node-fetch');
const { log } = require('../log');

const url = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';

// Generator function
function* createQuoteFetcher() {
	const response = yield fetch(url);
	const quote = yield response.json();
	return `${quote.quoteText} — ${quote.quoteAuthor}`;
}

// Co-routine utility function to return yield value
const coroutine = gen => {
	const generator = gen();

	const handle = result => {
		if (result.done) return Promise.resolve(result.value);
		return Promise.resolve(result.value).then(res => handle(generator.next(res)));
	};

	return handle(generator.next());
};

// Call the Co-routine function
const quoteFetcher = coroutine(createQuoteFetcher);
quoteFetcher.then(quote => log(quote)).catch(err => log('ERROR: ', err));
