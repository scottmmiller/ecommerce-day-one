"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productSchema = new Schema({
	product_name: {type: String, required: true, index: true},
	description: {type: String, required: true},
	price: {type: Number, required: true, precision: 2},
	createdAt: {type: Date, default: Date.now},
	updatedAt: {type: Date, default: Date.now},
	active: Boolean
});

module.exports = mongoose.model("Product", productSchema);