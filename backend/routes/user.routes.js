const express = require("express")
const router = express.Router()
const User = require("../models/User")

router.get("/", async (req, res) => {
  console.log("Find All Users", res)
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
    await User.findByIdAndUpdate(req.params.id, req.body)
    res.status(204).json({ success: "Success" })
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
