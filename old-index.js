var Crawler = require("crawler");

var c = new Crawler({
    maxConnections : 10,
		// rateLimit : 1000, // `maxConnections` will be forced to 1
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            console.log($("title").text(), ' : ', 'Grabbed', res.body.length, 'bytes');
        }
        done();
    }
});

// Queue just one URL, with default callback
c.queue('http://titan.dcs.bbk.ac.uk/~kikpef01/testpage.html');

// Queue a list of URLs
// c.queue(['http://www.google.com/','http://www.yahoo.com']);

// Queue URLs with custom callbacks & parameters
// c.queue([{
//     uri: 'http://titan.dcs.bbk.ac.uk/~kikpef01/testpage.html',
//     jQuery: false,
//
//     // The global callback won't be called
//     callback: function (error, res, done) {
//         if(error){
//             console.log(error);
//         }else{
// 					console.log('Grabbed', res.body.length, 'bytes');
//         }
//         done();
//     }
// }]);

// Queue some HTML code directly without grabbing (mostly for tests)
// c.queue([{
//     html: '<p>This is a <strong>test</strong></p>'
// }]);
