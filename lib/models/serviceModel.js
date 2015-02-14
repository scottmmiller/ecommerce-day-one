var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var serviceSchema = new Schema({
	name: {type: String, required: true, index: true},
	description: {type: String, required: true},
	price: {type: Number, required: true; precision: 2},
	active: Boolean
});

module.exports = mongoose.model("Service", serviceSchema);