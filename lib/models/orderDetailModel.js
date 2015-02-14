var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var orderSchema = new Schema({
	name: {type: String, required: true, index: true},
	email: {type: String, required: true},
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
		kind: {type: String, enum: ["Home", "Mobile", "Work"], default: "Mobile", required: true}
	}],
	payment_info: [{
		payment_method: {type: String, required: true, enum: ["VISA", "MasterCard", "American Express", "Cashier's Check", "Cash"], required: true},
		card_num: {type: Number, required: true},
		card_expiration: {type: String, required: true}
	}],
	subtotal: Number,
	sales_tax: .07,
	total: Number,
	products: product,
	services: service,
	active: Boolean

});

module.exports = mongoose.model("Order", orderSchema);