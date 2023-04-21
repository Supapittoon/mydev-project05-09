import React from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { useForm, Controller } from "react-hook-form"

export default function Fromdata() {
  const { handleSubmit, control, errors } = useForm()
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "5px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  )

  const submitData = (data) => {
    // alert(data?.remark)
    console.log(data)
  }
  return (
    <div className="flex justify-center  ">
      <Card sx={{ minWidth: 500 }}>
        <CardContent>
          <h3>ข้อมูลพนักงาน</h3>
          <br />
          <form onClick={handleSubmit(submitData)}>
            <Controller
              name="remark"
              control={control}
              defaultValue={""}
              rules={{ required: false }}
              render={({ field }) => (
                <div className="grid grid-rows -2">
                  <TextField
                    {...field}
                    label="ชื่อ-นามสกุล "
                    fullWidth
                    size={"small"}
                    rows={3}
                    multiline={true}
                    helperText={"กรุณาใส่ข้อมูล"}
                  />
                </div>
              )}
            />
            <Controller
              name="remark2"
              control={control}
              defaultValue={""}
              rules={{ required: false }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="ตำแหน่ง"
                  fullWidth
                  size={"small"}
                  rows={3}
                  multiline={true}
                  helperText={"กรุณาใส่ข้อมูล"}
                />
              )}
            />

            <Button variant="contained" type="submit">
              บันทึก
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
