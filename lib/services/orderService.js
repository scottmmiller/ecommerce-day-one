"use strict";

var orderModel = require("./../models/orderModel");
var q = require('q');

module.exports.find = function(query) {
	var deferred = q.defer();
	orderModel.find(query, function(response, error) {
		if(!error) {
			deferred.resolve(response);
		}
		else {
			deferred.reject(error);
		}
	});
	return deferred.promise;
};

module.exports.save = function(order) {
	var deferred = q.defer();
	orderModel(order).save(function(response, error) {
		if(!error) {
			deferred.resolve(response);
		}
		else {
			deferred.reject(error);
		}
	});
	return deferred.promise;
};
