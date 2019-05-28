/**
 * Going Async With ES6 Generators
 * With one tiny npm utility package
 */
const fetch = require('node-fetch');
const co = require('co');
const { log } = require('../log');

const url = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';

// Generator function
function* createQuoteFetcher() {
	const response = yield fetch(url);
	const quote = yield response.json();
	return `${quote.quoteText} — ${quote.quoteAuthor}`;
}

// Call the Co-routine function
const quoteFetcher = co(createQuoteFetcher);
quoteFetcher.then(quote => log(quote)).catch(err => log('ERROR: ', err));
