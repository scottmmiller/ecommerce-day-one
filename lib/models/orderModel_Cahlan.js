
var Product = require('/Product')

var schema = new Schema({
	items: [Product],
	customer: {Schema.Types.ObjectId, ref: "Customer"},

	status: {type: String, enum: [""]},
	createdAt: {type: Date, default: Date.now};
	updatedAt: {type: Date, default: Date.now};
});