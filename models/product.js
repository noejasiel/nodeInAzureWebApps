const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    curse: { type: String, required: true },
    price: Number,
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
