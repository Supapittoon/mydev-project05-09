import React, { useState, useEffect } from "react"
import TextField from "@mui/material/TextField"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import { useForm, Controller } from "react-hook-form"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import _ from "lodash"

export default function Fromdata({
  setIsReady,
  isReady,
  setUsers,
  selectuser,
  type = "",
  handleClose,
}) {
  const { handleSubmit, control } = useForm()
  // const [namedepartment, setNamedepartment] = useState([])

  const navigate = useNavigate()

  console.log("selectuser in from data", type, selectuser)
  // const getDepartmentUser = () => {
  //   // setIsReady(false)
  //   axios
  //     .get(`${process.env.REACT_APP_API_URL}/department`)
  //     .then((res) => {
  //       setNamedepartment(res?.data?.rows)
  //       console.log("test after", namedepartment)
  //     })
  //     .catch((error) => {
  //       console.error("Error", error?.message)
  //     })

  //   // setIsReady(true)
  // }
  // useEffect(() => {
  //   getDepartmentUser()
  //   return () => {}
  // }, [])

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
    <div className="w-full">
      <div className=" p-20">
        <Card sx={{ minWidth: 500 }}>
          <CardContent>
            <h3>เพิ่มสินค้า</h3>
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
                        label="ชื่อสินค้า "
                        fullWidth
                        size={"small"}
                        helperText={"กรุณาใส่ข้อมูล"}
                      />
                    </div>
                  )}
                />
                {/* <Controller
                  name="department"
                  control={control}
                  defaultValue={selectuser ? selectuser?.department : ""}
                  rules={{ required: false }}
                  render={({ field }) => (
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          {...field}
                        >
                          {_.map(namedepartment, (eachData, index) => (
                            <MenuItem value={eachData?._id}>
                              {eachData?.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  )}
                /> */}
                <Controller
                  name="cost"
                  control={control}
                  defaultValue={selectuser ? selectuser?.age : ""}
                  rules={{ required: false }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="ราคา(บาท)"
                      fullWidth
                      size={"small"}
                      type="number"
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
      <br />
      <div className="flex  justify-center">
        <Link to="/">
          <Button
            variant="contained"
            size="large"
            color="success"
            onClick={handleClose}
          >
            Back
          </Button>
        </Link>
      </div>
    </div>
  )
}
