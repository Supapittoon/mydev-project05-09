import * as React from "react"
import Box from "@mui/material/Box"
import { useParams } from "react-router-dom"
import Paper from "@mui/material/Paper"
import axios from "axios"
import { useState, useEffect } from "react"

export default function SimplePaper() {
  const [detail, setDetail] = useState([])
  const [isReady, setIsReady] = useState(false)
  const params = useParams()
  const getid = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/${params.id}`)
      .then((res) => {
        setDetail(res?.data)

        console.log("Customer", res?.data)
      })
      .catch((error) => {
        console.error("Error", error?.message)
      })
  }
  useEffect(() => {
    getid()
    return () => {}
  }, [isReady])

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 1650,
            height: 300,
          },
        }}
      >
        <Paper elevation={10}>
          <div className="font-bold text-xl  font-mono  p-4 ">
            ข้อมูลส่วนตัว <br />
          </div>
          <div className="font-bold text-md  font-mono  p-4 ">
            ชื่อ : {detail.name}
            <br />
          </div>
        </Paper>
      </Box>
      <br />
      <br />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 1650,
            height: 300,
          },
        }}
      >
        <Paper elevation={10}>
          <div className="font-bold text-xl  font-mono  p-4 ">
            ประวัติการซื้อสินค้า{" "}
          </div>
        </Paper>
      </Box>
    </div>
  )
}
