import * as React from "react"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"

export default function SimplePaper() {
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
            ข้อมูลส่วนตัว{" "}
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
