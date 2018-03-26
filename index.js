const util = require('util');

/// Pretty Jason ///
var prettyjson = require('prettyjson');

var options = {
  noColor: true
};
////////////////////

/// Old crawl lib ///
// var crawl = require('crawl');
//
// crawl.crawl("https://paulevans.org", function(err, pages) {
// 	if (err) {
// 		console.error("An error occured", err);
// 		return;
// 	}
//
// 	console.log(prettyjson.render(pages));
// });
/////////////////////

/// New js-crawler lib ///
var Crawler = require("js-crawler");

new Crawler().configure({depth: 3})
  .crawl("http://paulevans.org", function onSuccess(page) {
    console.log(page.url);
  });
//////////////////////////
