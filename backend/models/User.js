const mongoose = require("mongoose")

const schema = new mongoose.Schema({
  name: String,
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
  },
  age: Number,
  telephone: String,
})

const User = mongoose.model("User", schema)

module.exports = User
