"use strict";

var customerService = require("./../services/customerService");


//SINGLE CUSTOMER
module.exports.get = function(req, res) {
	customerService.findOne(req.query)
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

module.exports.put = function(req, res) {
	customerService.updateOne(req.query, req.body)
		.then(function(response) {
			res.status(200).json(response);
		}, function(error) {
			res.status(418).json(error);
		});
};

module.exports.push = function(req, res) {
	customerService.addAddr(req.query, req.body)
		.then(function(response) {
			res.status(200).json(response);
		}, function(error) {
			res.status(418).json(error);
		});
};

module.exports.delete = function(req, res) {
	customerService.delete(req.query)
		.then(function(response) {
			res.status(200).json(response);
		}, function(error) {
			res.status(418).json(error);
		});
};


//ALL CUSTOMERS
module.exports.getCustomers = function(req, res) {
	customerService.find(req.query)
		.then(function(response) {
			res.status(200).json(response);
		}, function(error) {
			res.status(418).json(error);
		});
};

//CUSTOMERS/:ID

