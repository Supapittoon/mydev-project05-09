const userRouter = require("./routes/user.routes")

const User = require("./models/User")
const express = require("express")
const app = express()

const port = 3001
const mockUser = [
  { id: 1, name: "Theethawat", department: "Software" },
  { id: 2, name: "Thanachit", department: "Software" },
  { id: 3, name: "Paipan", department: "Software" },
  { id: 4, name: "Aekapol", department: "Automation" },
]
const mongoose = require("mongoose")
const uri = "mongodb://127.0.0.1:27017/react-starter-test"
const cors = require("cors")
mongoose.connect(uri).then(
  () => {
    console.log("Connection is Successful")
  },
  (err) => {
    console.error("Connection to mongodb is error", err?.message)
  }
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({}))
app.use("/api/user", userRouter)

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
