import React from "react"
import TextField from "@mui/material/TextField"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import { useForm, Controller } from "react-hook-form"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

export default function Fromdepartment({
  setIsReady,
  isReady,
  setUsersdepartment,
  selectuser,
  type = "",
  handleClose,
}) {
  const { handleSubmit, control } = useForm()
  const navigate = useNavigate()

  console.log("selectuser in from data department", type, selectuser)

  const postData = (data) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/department`, { ...data })
      .then((res) => {
        console.log("User department", res?.data?.rows)
        setIsReady(!isReady)
      })
      .catch((error) => {
        console.error("Error", error?.message)
      })
  }
  const getData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/department`)
      .then((res) => {
        setUsersdepartment(res?.data?.rows)
        setIsReady(true)
        console.log("User", res?.data?.rows)
      })
      .catch((error) => {
        console.error("Error", error?.message)
      })
  }
  const editData = (data) => {
    axios
      .put(`${process.env.REACT_APP_API_URL}/department/` + selectuser?._id, {
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
    <div>
      <div className="flex justify-center  ">
        <Card sx={{ minWidth: 500 }}>
          <CardContent>
            <h3>ข้อมูลพนักงาน</h3>
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
                <Button variant="contained" type="submit">
                  บันทึก
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      <br />
      <div className="flex justify-center">
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
