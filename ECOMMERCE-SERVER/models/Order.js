const mongoose = require("mongoose");

//Order Schema
const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true},
    products: [
      //Array of productIds and it's quantities
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
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Order", OrderSchema);
