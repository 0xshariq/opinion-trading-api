const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  symbol: { type: String, required: true },
  optionType: { type: String, enum: ["CALL", "PUT"], required: true },
  strikePrice: { type: Number, required: true },
  expirationDate: { type: Date, required: true },
  side: { type: String, enum: ["BUY", "SELL"], required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  status: { type: String, enum: ["PENDING", "FILLED", "CANCELLED"], default: "PENDING" },
});

module.exports = mongoose.model("Order", OrderSchema);
