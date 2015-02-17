"use strict";

var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");


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
app.put("/customer", CustomerCtrlr.put);
app.put("/customer/push", CustomerCtrlr.push);
app.delete("/customer", CustomerCtrlr.delete);

app.get("/customers", CustomerCtrlr.getCustomers);

// app.get("/customer/order", OrderCtrlr.getOrder);
// app.post("/customer/order", OrderCtrlr.postOrder);

app.get('/products', ProductCtrlr.getAll);
app.post('/products', ProductCtrlr.post);


//CONNECTIONS
mongoose.connect(mongoUri);

mongoose.connection.once('open', function() {
	console.log("Connected to DB at " + mongoUri);
});

app.listen(port, function() {
	console.log("You're on port " + port);
});