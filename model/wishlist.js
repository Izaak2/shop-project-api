var mongoose = require("mongoose");
var Schema = mongoose.schema; //blueprint, scheme behinde data that they may be consistent
var ObjectId = mongoose.Schema.Types.ObjectId;

var wishList = new Schema ({
  title: {type: String, default: "Your wish list."},
  products:[{type: ObjectId, ref:"Product"}] //Must be spelt exactly the same as in the product.js (module.exports = mongose.model("Product", product);)
  //reletionships to product in a Product
})

module.exports = mongoose.model("WishList", whishList);
