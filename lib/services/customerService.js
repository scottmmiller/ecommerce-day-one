"use strict";

var customerModel = require("./../models/customerModel");
var q = require('q');


//SINGLE CUSTOMER
module.exports.findOne = function(query) {
	var deferred = q.defer();
	customerModel.findOne(query, function(response, error) {
		if (!error) {
			console.log(response)
			deferred.resolve(response);
		}
		else {
			console.log(error)
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

module.exports.updateOne = function(query, update) {   //req.body from CustomerCtrlr.put
	var deferred = q.defer();
	customerModel.findOneAndUpdate(query, update, function(response, error) {
		if(!error) {
			deferred.resolve(response);
		}
		else {
			deferred.reject(error);
		}
	});
	return deferred.promise;
};

module.exports.addAddr = function(query, update) {   //req.body from CustomerCtrlr.put
	var deferred = q.defer();
	customerModel.findOneAndUpdate(query, {$push: update}, function(response, error) {
		if(!error) {
			deferred.resolve(response);
		}
		else {
			deferred.reject(error);
		}
	});
	return deferred.promise;
};

module.exports.delete = function(query) {
	var deferred = q.defer();
	customerModel.findOneAndRemove(query, function(response, error) {
		if(!error) {
			deferred.resolve(response);
		}
		else {deferred.reject(error);
		}
	});
	return deferred.promise;
};


//ALL CUSTOMERS
module.exports.find = function(query) {
	var deferred = q.defer();
	customerModel.find(query, function(response, error) {
		if(!error) {
			deferred.resolve(response);
		}
		else {
			deferred.reject(error);
		}
	});
	return deferred.promise;
};