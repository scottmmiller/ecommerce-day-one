"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var customerSchema = new Schema({
	name: {type: String, required: true, index: true},
	email: {type: String, required: true, index: true},
	address: [{
		house_num: {type: String, required: true, uppercase: true},
		street_num: {type: String, required: true, uppercase: true},
		city: {type: String, required: true, uppercase: true},
		state: {type: String, required: true, uppercase: true},
		zip: {type: String, required: true, uppercase: true}, 
		kind: {type: String, enum: ["Billing", "Shipping", "Both"], default: "Both"}
	}],
	phones: [{
		ph_num: {type: String, required: true},
		kind: {type: String, enum: ["Home", "Mobile", "Work"], default: "Mobile"}
	}],
	password: {type: String, required: true},
	age:  {type: Number, required: true, min: 13},
	date_started: {type: Date, default: Date.now},
	last_updated: {type: Date, default: Date.now},
	active: Boolean

});

module.exports = mongoose.model("Customer", customerSchema);