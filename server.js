//First we need to create express server
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//testing created blueprints
var Product = require("./model/product");
var WishList = require("./model/wishlist");


//connection to the DB for the shop
var db = mongoose.connect("mongodb://localhost/shop-project");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Starting server that can be run on terminal
app.listen(3000, function() {
  console.log("Shop API running on port 3000...");
});
