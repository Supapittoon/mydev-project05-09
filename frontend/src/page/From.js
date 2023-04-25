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

export default function Fromdata({ submitData, defaultValue }) {
  const { handleSubmit, control, setValue } = useForm({
    defaultValues: defaultValue,
  })
  console.log(submitData)

  useEffect(() => {
    setValue("name", defaultValue?.name)
    return () => {}
  }, [defaultValue])
  useEffect(() => {
    setValue("department", defaultValue?.department)

    return () => {}
  }, [defaultValue])

  useEffect(() => {
    setValue("telephone", defaultValue?.telephone)

    return () => {}
  }, [defaultValue])

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "5px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  )

  return (
    <div className="flex justify-center  ">
      <Card sx={{ minWidth: 500 }}>
        <CardContent>
          {" "}
          <h3>ข้อมูลพนักงาน</h3>
          <br />
          <form onSubmit={handleSubmit(submitData)}>
            <div>
              <Controller
                name="name"
                control={control}
                rules={{ required: false }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="ชื่อ-นามสกุล "
                    fullWidth
                    size={"small"}
                    helperText={"กรุณาใส่ข้อมูล"}
                  />
                )}
              />
              <Controller
                name="department"
                control={control}
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
                defaultValue={""}
                rules={{ required: false }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="อายุ"
                    fullWidth
                    size={"small"}
                    helperText={"กรุณาใส่ข้อมูล"}
                  />
                )}
              />
              <Controller
                name="telephone"
                control={control}
                defaultValue={""}
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
