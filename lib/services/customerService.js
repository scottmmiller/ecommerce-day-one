"use strict";

var customerModel = require("./../models/customerModel");
var q = require('q');

module.exports.find = function(query) {
	var deferred = q.defer();
	customerModel.find(query, function(response, error) {
		if (!error) {
			deferred.resolve(response);
		}
		else {
			deferred.reject(error);
		};
	});
	return deferred.promise;
};

module.exports.save = function(customer) {
	var deferred = q.defer();
	customerModel(customer).save(function(response, error) {
		if(!error) {
			deferred.resolve(response);
		}
		else {
			deferred.reject(error);
		}
	});
	return deferred.promise;
};