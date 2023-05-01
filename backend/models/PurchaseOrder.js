const mongoose = require("mongoose")

const schema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  product: [{ name: { type: mongoose.Schema.Types.ObjectId, ref: "Product" } }],
  date: { type: Date },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
  },
})

const PurchaseOrder = mongoose.model("PurchaseOrder", schema)

module.exports = PurchaseOrder
