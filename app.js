'use strict';

//start with node -e require('./app').handler({}) on console

const _json = {
	'key1': 'https://latest-nostage-usage-reporting-service-container-services.flowfact.company/public/companies/all/1',
	'key2': 'https://latest-nostage-usage-reporting-service-container-services.flowfact.company/public/dump/1'
};

var _getData = require("./getData");

exports.handler = (event) => {
	var _obj;
	_obj = JSON.parse(JSON.stringify(event));
	if (Object.keys(_obj).length === 0) {
	_obj = JSON.parse(JSON.stringify(_json));
	}

	//check if there is a subnode in the input jsom (comes from AWS state machine)
	if (_obj.Input !== undefined) {
		_obj = _obj.Input;
	}

	for (var _attr in _obj) {
		request_loop(_obj[_attr])
	}
};

function request_loop(url){
		
	var options = {
		method: 'GET',
		'Accept-Encoding': 'gzip,deflate',
		uri: url,
		json: true
	};
	_getData.getData(options,function(body){
	console.log(body);
	})
}