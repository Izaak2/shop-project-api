var mongoose = require("mongoose");
var Schema = mongoose.Schema; //blueprint, scheme behinde data that they may be consistent

var product = new Schema({
  title: String,
  price: Number,
  likes: {type: Number, default: 0}
});

module.exports = mongoose.model("Product", product); // Product is store in DB (Capital P)
//everything what we save must contains stuff from Schema, oterwise, it will not be saved.
