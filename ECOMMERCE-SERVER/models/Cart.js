const mongoose = require("mongoose");

//Cart Schema
const CartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, unique: true },
    products: [ //Array of productIds and it's quantities
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("Cart", CartSchema);
