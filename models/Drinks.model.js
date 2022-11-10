
const mongoose = require("mongoose");

const drinksSchema = mongoose.Schema({
  name: String,
  price: Number,
  inStock: Boolean,
  caffeine: Boolean,
  volume: String,
  description: String,
});
const Drinks = mongoose.model("Drinks", drinksSchema);

module.exports = Drinks;
