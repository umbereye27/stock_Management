const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  measurements: {
    required: true,
    type: String,
    enum: {
      values: ["LITERS", "PCS", "KILOS", "GRAMS"],
      message: "{value} is not valid",
    },
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
