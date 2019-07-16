// JavaScript File
'use strict';

var request = require('request');

module.exports = {
	getData: function (options,callback) {
        //_getData(options,what);
        request(options, function (error, response, body) {
            if (error || response.statusCode !== 200) {
                console.log('Status '+response.statusCode.toString());
                //console.log(error); // Print the web page.
             }else{
                 return callback(body);
                 }  
            });
	}
};