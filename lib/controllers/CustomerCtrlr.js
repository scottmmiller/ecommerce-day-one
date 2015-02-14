"use strict";

var customerService = require("./../services/customerService");


//CUSTOMER
module.exports.get = function(req, res) {
	customerService.find(req.query)
		.then(function(response) {
			res.status(200).json(response);
		}, function(error) {
			res.status(418).json(error);
		});
};

module.exports.post = function(req, res) {
	customerService.save(req.body)
		.then(function(response) {
			res.status(200).json(response);
		}, function(error){
			res.status(418).json(error);
		});
};

//CUSTOMERS


//CUSTOMERS/:ID

