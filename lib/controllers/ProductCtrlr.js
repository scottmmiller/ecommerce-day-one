"use strict";

// var productService = require("./../services/productService");
var productModel = require("./../models/productModel");
var q = require('q');

module.exports.getAll = function(req, res) {
	var deferred = q.defer();
	productModel.find(req.query, function(response, error) {
		if(!error) {
			return deferred.resolve(resposnse);
		}
		else {
			return deferred.reject(error);
		}
	});
	return deferred.promise;
};

module.exports.post = function(req, res) {
	var deferred = q.defer();
	productModel(req.body).save(function(response, error) {
		if(!error) {
			return deferred.resolve(response);
		}
		else {
			return deferred.reject(error);
		}
	});
	return deferred.promise;
};