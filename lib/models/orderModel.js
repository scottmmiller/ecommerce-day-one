"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Product = require("./productModel")

var orderSchema = new Schema({
	customer: {type: Schema.Types.ObjectId, ref: "Customer"},
	items: [Product],
	subtotal: {type: Number, precision: 2},
	sales_tax: {type: Number, default: 7},
	total: {type: Number, precision: 2},
	// services: service,
	status: {type: String, enum: ["Order Processing", "Order Shipped", "Order Delivered"], default: "Order Processing"},
	createdAt: {type: Date, default: Date.now},
	updatedAt: {type: Date, default: Date.now},
	active: Boolean

});

module.exports = mongoose.model("Order", orderSchema);





	// name: {type: String, required: true, index: true},
	// email: {type: String, required: true, index: true},
	// address: [{
	// 	house_num: {type: String, required: true, uppercase: true},
	// 	street_num: {type: String, required: true, uppercase: true},
	// 	city: {type: String, required: true, uppercase: true},
	// 	state: {type: String, required: true, uppercase: true},
	// 	zip: {type: String, required: true, uppercase: true}, 
	// 	kind: {type: String, enum: ["Billing", "Shipping", "Both"], default: "Both"}
	// }],
	// phones: [{
	// 	ph_num: {type: String, required: true},
	// 	kind: {type: String, enum: ["Home", "Mobile", "Work"], default: "Mobile", required: true}
	// }],