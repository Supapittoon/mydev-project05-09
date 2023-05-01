const express = require("express")
const router = express.Router()
const Product = require("../models/Product")

router.get("/", async (req, res) => {
  try {
    const result = await Product.find().populate("department")
    res.json({ rows: result })
  } catch (error) {
    res.status(404).json({ err: error })
  }
})

router.post("/", async (req, res) => {
  console.log("Creat User Body", req.body)
  const Obj = new Product(req.body)
  try {
    await Obj.save({})
    res.status(201).json(Obj)
  } catch (error) {
    res.status(400).json({ err: error })
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const result = await Product.findByIdAndDelete(req.params.id)
    res.status(204).json(result)
  } catch (error) {
    console.log(error.message)
    res.status(400).json({ error })
  }
})

router.put("/:id", async (req, res) => {
  try {
    console.log("req", req.body, req.params.id)
    const result = await Product.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    )
    console.log("result", result)
    res.status(204).json(result)
  } catch (error) {
    console.log(error.message)
    res.status(400).json({ error })
  }
})

router.get("/:id", async (req, res) => {
  try {
    const foundUser = await Product.findById(req.params.id)
    console.log(foundUser)
    res.json(foundUser)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
