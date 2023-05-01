import React, { useState, useEffect } from "react"
import TextField from "@mui/material/TextField"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import { useForm, Controller, useFieldArray } from "react-hook-form"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import _ from "lodash"
import Autocomplete from "@mui/material/Autocomplete"

export default function Formpurchase({
  handleClose,
  customer,
  product,
  CreatePurchase,
}) {
  const { handleSubmit, control, register } = useForm()
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "product", // unique name for your Field Array
    }
  )

  return (
    <div>
      <div className="">
        <div className=" ">
          <Card sx={{ minWidth: 500 }}>
            <CardContent>
              <form onSubmit={handleSubmit(CreatePurchase)}>
                <div className="w-full">
                  <div className="w-full">
                    <Controller
                      name="customer"
                      control={control}
                      rules={{ required: false }}
                      render={({ field }) => (
                        <Autocomplete
                          options={customer}
                          getOptionLabel={(option) => option?.name}
                          onChange={(e, value) => field.onChange(value._id)}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              fullWidth
                              label="ผู้สั่งสินค้า"
                              size={"small"}
                            />
                          )}
                        />
                      )}
                    />
                  </div>
                  {/* <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            {...field}
                          >
                            {_.map(customer, (eachData, index) => (
                              <MenuItem value={eachData?._id}>
                                {eachData?.name}
                              </MenuItem>
                            ))}
                          </Select> */}

                  <br />
                  {fields.map((field, index) => (
                    <div className="flex">
                      <div className="w-full">
                        <Controller
                          name={`product.${index}.name`}
                          control={control}
                          rules={{ required: false }}
                          render={({ field }) => (
                            <div className="py-1">
                              <div className="grid grid-rows">
                                <Autocomplete
                                  name={field.name}
                                  options={product}
                                  getOptionLabel={(option) => option?.name}
                                  onChange={(e, value) =>
                                    field.onChange(value._id)
                                  }
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      fullWidth
                                      label="รายการสินค้า"
                                      size={"small"}
                                    />
                                  )}
                                />
                              </div>
                            </div>
                          )}
                        />
                      </div>
                      <div>
                        <Button onClick={() => remove(index)}>ลบ</Button>
                      </div>
                    </div>
                  ))}
                  <Button onClick={() => append({ name: "1" })}>เพิ่ม</Button>

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
    </div>
  )
}
