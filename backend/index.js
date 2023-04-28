const userRouter = require("./routes/user.routes")
const User = require("./models/User")
const departmentRouter = require("./routes/department.routes")
const express = require("express")
const app = express()

const port = 3001
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
app.use("/api/department", departmentRouter)

// app.get("/", (req, res) => {
//   res.send("Hello World!")
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
