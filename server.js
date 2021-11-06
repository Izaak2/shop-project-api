//First we need to create express server

var express = require("express");
var app = express();

var bodyParser = require("body-parser");

var mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Starting server that can be run on terminal
app.listen(3000, function() {
  console.log("Shop API running on port 3000...");
});
