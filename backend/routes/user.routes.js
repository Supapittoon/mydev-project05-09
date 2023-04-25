const express = require("express")
const router = express.Router()
const User = require("../models/User")

const mockData = [
  { name: "123555", id: 0 },
  { name: "123444", id: 1 },
]

router.get("/", async (req, res) => {
  // console.log("Find All Users", req)
  try {
    const result = await User.find()
    res.json({ rows: result })
  } catch (error) {
    res.status(404).json({ err: error })
  }
})

router.post("/", async (req, res) => {
  console.log("Creat User Body", req.body)
  const NewUser = new User(req.body)
  try {
    await NewUser.save({})
    res.status(201).json(NewUser)
  } catch (error) {
    res.status(400).json({ err: error })
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const result = await User.findByIdAndDelete(req.params.id)
    res.status(204).json(result)
  } catch (error) {
    console.log(error.message)
    res.status(400).json({ error })
  }
})

router.put("/:id", async (req, res) => {
  try {
    console.log("req", req.body, req.params.id)
    const result = await User.findByIdAndUpdate(
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

router.get("/:id", (req, res) => {
  console.log("Fine One User with Id" + req.params.id)
  const foundUser = mockUser.find((data) => data.id === parseInt(req.params.id))
  res.json(foundUser)
})

module.exports = router
