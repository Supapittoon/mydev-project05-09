const express = require("express")
const router = express.Router()
const Department = require("../models/Department")

router.get("/", async (req, res) => {
  // console.log("Find All Users", req)
  try {
    const result = await Department.find()
    res.json({ rows: result })
  } catch (error) {
    res.status(404).json({ err: error })
  }
})

router.post("/", async (req, res) => {
  console.log("Creat User Body", req.body)
  const NewUser = new Department(req.body)
  try {
    await NewUser.save({})
    res.status(201).json(NewUser)
  } catch (error) {
    res.status(400).json({ err: error })
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const result = await Department.findByIdAndDelete(req.params.id)
    res.status(204).json(result)
  } catch (error) {
    console.log(error.message)
    res.status(400).json({ error })
  }
})

router.put("/:id", async (req, res) => {
  try {
    console.log("req", req.body, req.params.id)
    const result = await Department.findByIdAndUpdate(
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
module.exports = router
