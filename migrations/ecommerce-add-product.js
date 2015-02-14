"use strict";

var Product = require("./../lib/models/productModel");
				require('./../server.js');


exports.up = function(next){
	var watch = new Product({
		name: "Rolex Watch",
		description: "ONe of the most expensive, luxurious items around.",
		price: 3500000,
		active: true
	});
	watch.save(function(error) {
		if (error) {
			console.log(error);
			next(error);
		}
		else {
			console.log("Watch Data Included");
			next();
		}
	});

	var tablet = new Product({
		name: "Samsung Galaxy Tab 4",
		description: "Brilliant 10.1\" widescreen HD display delivers clear text & bright colors; Perfect for the family to enjoy games, movies, books, magazines & more; Sleek, light design with expandable memory, Multi-User mode, and Multi Window™* capability; WatchON, Multi Window, Multi-User Mode, Kids Mode, Netflix Preloaded",
		price: 39999,
		active: true
	});
	tablet.save(function(error) {
		if (error) {
			console.log(error);
			next();
		}
		else {
			console.log("Tablet Data Included");
			next();
		}
	});

	var tv = new Product({
		name: "Samsung 75\" Class 4K 3D Smart LED UltraHDTV",
		description: "See a picture that’s more lifelike than ever with Samsung Smart UHD. Samsung Ultra High Definition TV displays your movies, sports and shows at 4x the resolution of Full HD and upscales your existing entertainment with incredible detail. Samsung UHD is also 4K UHD Standard Future Ready, so you’ll never get left behind as new 4K standards and smart technology arrive.",
		price: 597999,
		active: true
	});
	tv.save(function(error) {
		if (error) {
			console.log(error)
				next();
		}
		else {
			console.log('TV Data Included');
			next();
		}
	})
};

exports.down = function(next){
  next();
};
