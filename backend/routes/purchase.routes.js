const express = require("express")
const router = express.Router()
const Purchase = require("../models/PurchaseOrder")

router.get("/", async (req, res) => {
  try {
    const result = await Purchase.find()
      .populate("customer")
      .populate("product")
    res.json({ rows: result })
  } catch (error) {
    res.status(404).json({ err: error })
  }
})

router.post("/", async (req, res) => {
  console.log("Creat User Body", req.body)
  const Obj = new Purchase(req.body)
  try {
    await Obj.save({})
    res.status(201).json(Obj)
  } catch (error) {
    console.log(error)
    res.status(400).json({ err: error })
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const result = await Purchase.findByIdAndDelete(req.params.id)
    res.status(204).json(result)
  } catch (error) {
    console.log(error.message)
    res.status(400).json({ error })
  }
})

router.put("/:id", async (req, res) => {
  try {
    console.log("req", req.body, req.params.id)
    const result = await Purchase.findByIdAndUpdate(
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
    const foundUser = await Purchase.findById(req.params.id)
    console.log(foundUser)
    res.json(foundUser)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
