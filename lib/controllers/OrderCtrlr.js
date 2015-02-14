"use strict";

var orderService = require("./../services/orderService");


//PRODUCTS
module.exports.getOrder = function(req, res) {
	orderService.find(req.query)
		.then(function(response) {
			res.status(200).json(response);
		}, function(error) {
			res.status(418).json(error);
		});
};

module.exports.postOrder = function(req, res) {
	orderService.save(req.body)
		.then(function(response) {
			res.status(200).json(response);
		}, function(error) {
			res.status(418).json(error);
		});
};


//PRODUCTS/:ID
