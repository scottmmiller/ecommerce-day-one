"use strict";

var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Migrate = require("./migrations/ecommerce-add-product");


var app = express();

var port = 9999;
var mongoUri = "mongodb://localhost:27017/ecommerce";


//CONTROLLERS
var CustomerCtrlr = require("./lib/controllers/CustomerCtrlr");
var ProductCtrlr = require("./lib/controllers/ProductCtrlr");
var OrderCtrlr = require("./lib/controllers/OrderCtrlr");
var OrderDetailsCtrlr = require("./lib/controllers/OrderDetailsCtrlr");



//MIDDLEWARE
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


//ENDPOINTS
app.get("/customer", CustomerCtrlr.get);
app.post("/customer", CustomerCtrlr.post);
// app.delete("/customer", CustomerCtrlr.delete);

// app.get("/customers", CustomerCtrlr.getCustomers);
// app.post("/customers", CustomerCtrlr.postCustomers);

// app.get("/customer/order", OrderCtrlr.getOrder);
// app.post("/customer/order", OrderCtrlr.postOrder);


//CONNECTIONS
mongoose.connect(mongoUri);

mongoose.connection.once('open', function() {
	console.log("Connected to DB at " + mongoUri);
});

app.listen(port, function() {
	console.log("You're on port " + port);
});