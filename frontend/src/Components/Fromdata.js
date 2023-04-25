import React, { useState, useEffect } from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { useForm, Controller } from "react-hook-form"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

export default function Fromdata({
  setIsReady,
  isReady,
  setUsers,
  selectuser,
  type = "",
  handleClose,
}) {
  const { handleSubmit, control, errors } = useForm()
  const navigate = useNavigate()

  console.log("selectuser in from data", type, selectuser)

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "5px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  )

  const postData = (data) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/user`, { ...data })
      .then((res) => {
        console.log("User", res?.data?.rows)
        setIsReady(!isReady)
      })
      .catch((error) => {
        console.error("Error", error?.message)
      })
  }
  const getData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/user`)
      .then((res) => {
        setUsers(res?.data?.rows)
        setIsReady(true)
        console.log("User", res?.data?.rows)
      })
      .catch((error) => {
        console.error("Error", error?.message)
      })
  }
  const editData = (data) => {
    axios
      .put(`${process.env.REACT_APP_API_URL}/user/` + selectuser?._id, {
        ...data,
      })
      .then((res) => {
        console.log("User", res?.data?.rows)
        setIsReady(!isReady)
      })
      .catch((error) => {
        console.error("Error", error?.message)
      })
  }

  const submitData = (data) => {
    if (type === "edit") {
      // edit
      editData(data)
      handleClose()
      getData()
    } else {
      // post
      postData(data)
      getData()
      navigate(-1)
      console.log(data)
    }
  }
  return (
    <div className="flex justify-center  ">
      <Card sx={{ minWidth: 500 }}>
        <CardContent>
          <h3>ข้อมูลพนักงาน1</h3>
          <br />
          <form onSubmit={handleSubmit(submitData)}>
            <div>
              <Controller
                name="name"
                control={control}
                defaultValue={selectuser ? selectuser?.name : ""}
                rules={{ required: false }}
                render={({ field }) => (
                  <div className="grid grid-rows -">
                    <TextField
                      {...field}
                      label="ชื่อ-นามสกุล "
                      fullWidth
                      size={"small"}
                      helperText={"กรุณาใส่ข้อมูล"}
                    />
                  </div>
                )}
              />
              <Controller
                name="department"
                control={control}
                defaultValue={selectuser ? selectuser?.department : ""}
                rules={{ required: false }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="แผนก"
                    fullWidth
                    size={"small"}
                    helperText={"กรุณาใส่ข้อมูล"}
                  />
                )}
              />
              <Controller
                name="age"
                control={control}
                defaultValue={selectuser ? selectuser?.age : ""}
                rules={{ required: false }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="อายุ"
                    fullWidth
                    size={"small"}
                    type="number"
                    helperText={"กรุณาใส่ข้อมูล"}
                  />
                )}
              />
              <Controller
                name="telephone"
                control={control}
                defaultValue={selectuser ? selectuser?.telephone : ""}
                rules={{ required: false }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="เบอร์โทรศัพท์"
                    fullWidth
                    size={"small"}
                    helperText={"กรุณาใส่ข้อมูล"}
                  />
                )}
              />

              <Button variant="contained" type="submit">
                บันทึก
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
