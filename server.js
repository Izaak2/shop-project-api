//First we need to create express server
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//testing created blueprints
//you can require anything that you exports
var Product = require("./model/product");
var WishList = require("./model/wishlist");



//connection to the DB for the shop
var db = mongoose.connect("mongodb://localhost/shop-project");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//API functions
app.post("/product", function(request, response) {
  var product = new Product();
  product.title = request.body.title;
  product.price = request.body.price;
  //alternative way
  // var product = new Product(request.body);
  // var product = new Product(request.body.title, request.body.price);
  product.save(function(err, savedProduct) {
    if(err) {
      response.status(500).send({error: "Could not save product"});
    } else {
      response.status(200).send(savedProduct); // It is typical to REST API that we send newly send product back to user. it is esier than refreshing whole list of prodcts.
      //alternative
      //response.send(savedProduct);
      //response.json(savedProdcut0);
    }
  });
});

app.get("/product", function(request, response) {

  Product.find({}, function(err, products) { // this is asynchronous
        if(err) {
          response.status(500).send({error: "Could not find the collection"});
        } else {
          response.status(200).send(products);
        }
  });
  //Very bad example due to asynchronous processing
  // var prods;
  // Product.find({}, function(err, products) { // this is asynchronous
  //       if(err) {
  //         response.status(500).send({error: "Could not find the collection"});
  //       } else {
  //         prods = products;
  //       }
  // });
  // response.send(prods); //this will send incorrect data, usually empty.
});

//Starting server that can be run on terminal
app.listen(3000, function() {
  console.log("Shop API running on port 3000...");
});
