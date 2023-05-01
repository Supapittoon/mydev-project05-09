import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import axios from "axios"
import React, { useState, useEffect } from "react"
import _ from "lodash"
import Formpurchase from "../Components/Formpurchase"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"

const bull = (
  <Box
    component="span"
    sx={{ display: "-ms-flexbox", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
)

export default function Home() {
  const [product, setProduct] = useState({})
  const [isReady, setIsReady] = useState(false)
  const [customer, setCustomer] = useState([])
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  console.log("customer", customer)
  const getProduct = () => {
    // setIsReady(false)
    axios
      .get(`${process.env.REACT_APP_API_URL}/Product`)
      .then((res) => {
        setProduct(res?.data?.rows)
        setIsReady(true)
        // console.log("User", res?.data?.rows)
      })
      .catch((error) => {
        console.error("Error", error?.message)
      })
    // setIsReady(true)
  }

  const getCustomer = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/user`)
      .then((res) => {
        setCustomer(res?.data.rows)
      })
      .catch((error) => {
        console.error("Error", error?.message)
      })
  }

  const CreatePurchase = (data) => {
    try {
      const confirm = window.confirm("ยืนยันลบข้อมูล")
      if (confirm) {
        axios
          .post(`${process.env.REACT_APP_API_URL}/purchase`, { ...data })
          .then((res) => {
            console.log("history purchase", res?.data?.rows)
            setIsReady(!isReady)
          })
          .catch((error) => {
            console.error("Error", error?.message)
          })
      }
    } catch (error) {}
  }

  useEffect(() => {
    getProduct()
    getCustomer()

    return () => {}
  }, [open])

  return (
    <div>
      <div className="float-right">
        <Button
          color="secondary"
          variant="contained"
          size="small"
          onClick={() => {
            handleOpen()
          }}
        >
          {" "}
          เพิ่มคำสั่งซื้อ{" "}
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"คำสั่งซื้อสินค้า"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Formpurchase
                handleClose={handleClose}
                customer={customer}
                product={product}
                CreatePurchase={CreatePurchase}
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>
      </div>
      <div className="flex flex-wrap">
        {_.map(product, (eachData, index) => (
          <div className="p-2">
            <Card>
              <div class="px-6 py-4 ">
                <div class="font-bold text-xl mb-2 flex justify-center">
                  {eachData.name}
                  <br />
                  <br />
                  <br />
                  ราคา
                  <br />
                  {eachData.cost}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
