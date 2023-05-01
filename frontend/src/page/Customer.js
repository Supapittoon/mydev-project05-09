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
import Department from "./Customer"
import Fromdepartment from "./Formdepartment"

//

export default function Customer() {
  const [usersdepartment, setUsersdepartment] = useState([])
  const [selectuser, setSelectuser] = useState({})
  const [isReady, setIsReady] = useState(false)
  const [selectdetail, setSelectDetail] = useState({})

  console.log("selectdetail", selectuser)

  const [open, setOpen] = useState(false)

  const getAllUserdepartment = () => {
    // setIsReady(false)
    axios
      .get(`${process.env.REACT_APP_API_URL}/user`)
      .then((res) => {
        setUsersdepartment(res?.data?.rows)
        setIsReady(true)
        console.log("USer", usersdepartment)
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
    getAllUserdepartment()
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
        .delete("http://localhost:3001/api/user/" + userId)
        .then((res) => {
          getAllUserdepartment()
        })
        .catch((error) => {
          alert(error?.message)
          console.log("Error", error?.message)
        })
    }
  }

  return (
    <div className="w-full  px-20">
      <h3 className="font-bold flex  justify-center  text-2xl font-sans ...  py-10">
        {" "}
        รายชื่อลูกค้า{" "}
      </h3>
      <div className="float-right ...  my-4 ">
        <Link to="/Formdepartment">
          <Button variant="contained" color="success" size="large">
            {" "}
            เพิ่มลูกค้า
          </Button>
        </Link>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="bg-blue-300  font-mono ...">
              <TableCell>ลำดับที่</TableCell>
              <TableCell>ชื่อ-นามสกุล</TableCell>
              <TableCell>เบอร์โทรศัพท์</TableCell>
              
              <TableCell>ดำเนินการ</TableCell>
            </TableRow>
          </TableHead>
          {_.map(usersdepartment, (eachData, index) => (
            <TableBody>
              <TableCell align="left">{index + 1}</TableCell>
              <TableCell align="left">{eachData.name}</TableCell>
              <TableCell align="left">{eachData.telephone}</TableCell>
              <TableCell align="left">
                <div className=" m-4 flex">
                  <Link to={`Detail/${eachData?._id} `}>
                    <div className=" p-2">
                      <Button
                        color="error"
                        variant="contained"
                        size="medium"
                        onClick={() => {
                          setSelectDetail(eachData)
                          handleClickOpen(eachData?._id)
                        }}
                      >
                        {" "}
                        รายละเอียด{" "}
                      </Button>
                    </div>
                  </Link>
                  <div className=" p-2">
                    <Button
                      className="px-8"
                      color="error"
                      variant="contained"
                      size="medium"
                      onClick={() => handleDeleteUser(eachData?._id)}
                    >
                      {" "}
                      ลบ{" "}
                    </Button>
                  </div>
                  <div className=" p-2">
                    <Button
                      color="secondary"
                      variant="contained"
                      size="medium"
                      onClick={() => {
                        setSelectuser(eachData)
                        handleClickOpen(eachData?._id)
                      }}
                    >
                      {" "}
                      แก้ไข{" "}
                    </Button>
                  </div>
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
                        <Fromdepartment
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
