import React from "react"
import { useForm, Controller } from "react-hook-form"
import TextField from "@mui/material/TextField"
import { Button } from "@mui/material"

export default function Controllerform() {
  const { handleSubmit, control, errors } = useForm()

  const submitData = (data) => {
    // alert(data?.remark)
    console.log(data)
  }

  return (
    <div>
      <form onClick={handleSubmit(submitData)}>
        <Controller
          name="remark"
          control={control}
          defaultValue={""}
          rules={{ required: false }}
          render={({ field }) => (
            <TextField
              {...field}
              label="หมายเหตุ"
              fullWidth
              size={"small"}
              rows={3}
              multiline={true}
              helperText={"กรุณาใส่ข้อมูล"}
            />
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
              label="หมายเหตุ"
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
    </div>
  )
}
