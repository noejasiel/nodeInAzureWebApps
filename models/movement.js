const mongoose = require("mongoose");

const movementSchema = mongoose.Schema(
  {
    type: String,
    quantity: Number,
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    delete: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const Movement = mongoose.model("Movement", movementSchema, "movements");

module.exports = Movement;
