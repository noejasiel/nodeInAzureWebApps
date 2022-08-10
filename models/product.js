const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    curse: { type: String, required: true },
    price: Number,
    delete: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
