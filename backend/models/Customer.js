const mongoose = require("mongoose")

const schema = new mongoose.Schema({
  name: String,
  price: Number,
  cost: Number,
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
  },
})

const Customer = mongoose.model("Customer", schema)

module.exports = Customer
