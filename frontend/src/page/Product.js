import React, { useState, useEffect } from "react"
// import Navbar from "./Components/Navbar"
// import Searchbox from "./Components/SearchBox"
import axios from "axios"
import _ from "lodash"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import Button from "@mui/material/Button"
// import { ReactDOM } from "react"
// import { LinearProgress } from "@mui/material"
import Fromdata from "../Components/Fromdata"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
// import Navbar from "../Components/Navbar"
import { Link } from "react-router-dom"

//

export default function Product() {
  const [users, setUsers] = useState([])
  const [selectuser, setSelectuser] = useState({})
  const [isReady, setIsReady] = useState(false)

  console.log("selectuser", selectuser)
  console.log("Data", users)

  const [open, setOpen] = React.useState(false)

  const getAllUser = () => {
    // setIsReady(false)
    axios
      .get(`${process.env.REACT_APP_API_URL}/Product`)
      .then((res) => {
        setUsers(res?.data?.rows)
        setIsReady(true)
        console.log("User", res?.data?.rows)
      })
      .catch((error) => {
        console.error("Error", error?.message)
      })

    // setIsReady(true)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    getAllUser()
    return () => {}
  }, [isReady])

  // if (!isReady) {
  //   return (
  //     <div>
  //       <LinearProgress />
  //     </div>
  //   )
  // }
  // const handleEditUser =
  const handleDeleteUser = (userId) => {
    const confirm = window.confirm("ยืนยันการลบข้อมูล")
    if (confirm) {
      axios
        .delete("http://localhost:3001/api/Product/" + userId)
        .then((res) => {
          getAllUser()
        })
        .catch((error) => {
          alert(error?.message)
          console.log("Error", error?.message)
        })
    }
  }

  return (
    <div className=" w-full px-10">
      <h3 className="font-bold flex  justify-center  my-4 text-xl font-sans ...">
        {" "}
        รายการสินค้า{" "}
      </h3>
      <div className="float-right ...  my-4 ">
        <Link to="/Formdata">
          <Button variant="contained" color="success" size="large">
            {" "}
            เพิ่มสินค้า
          </Button>
        </Link>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="bg-cyan-600  font-mono ...">
              <TableCell>ลำดับที่</TableCell>
              {/* <TableCell>รูปภาพ</TableCell> */}
              <TableCell>ชื่อสินค้า</TableCell>
              <TableCell>ราคา</TableCell>
              <TableCell>ดำเนินการ</TableCell>
            </TableRow>
          </TableHead>
          {_.map(users, (eachData, index) => (
            <TableBody>
              <TableCell align="left">{index + 1}</TableCell>
              <TableCell align="left">{eachData.name}</TableCell>
              <TableCell align="left">{eachData.cost}</TableCell>

              {/* <TableCell align="left">
                {eachData.department?.name || "-"}
              </TableCell> */}
              <TableCell align="left">
                <div className=" p-2">
                  <Button
                    color="error"
                    variant="contained"
                    size="small"
                    onClick={() => handleDeleteUser(eachData?._id)}
                  >
                    {" "}
                    delete{" "}
                  </Button>

                  <Button
                    color="secondary"
                    variant="contained"
                    size="small"
                    onClick={() => {
                      setSelectuser(eachData)
                      handleClickOpen(eachData?._id)
                    }}
                  >
                    {" "}
                    Edit{" "}
                  </Button>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {"Edit  Form"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        <Fromdata
                          selectuser={selectuser}
                          type={"edit"}
                          handleClose={handleClose}
                          isReady={isReady}
                          setIsReady={setIsReady}
                        />
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions></DialogActions>
                  </Dialog>
                </div>
              </TableCell>
            </TableBody>
          ))}
        </Table>
      </TableContainer>
    </div>
  )
}
