const mongoose = require("mongoose")

const schema = new mongoose.Schema({
  name: String,
  cost: Number,
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
  },
})

const Product = mongoose.model("Product", schema)

module.exports = Product
