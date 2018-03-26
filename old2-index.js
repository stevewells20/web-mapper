const util = require('util');

/// Pretty Jason ///
var prettyjson = require('prettyjson');

var options = {
  noColor: true
};
////////////////////

var crawl = require('crawl');

crawl.crawl("https://paulevans.org", function(err, pages) {
	if (err) {
		console.error("An error occured", err);
		return;
	}

	console.log(prettyjson.render(pages));
});
