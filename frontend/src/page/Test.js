import React, { useState, useEffect } from "react"
import Navbar from "./Components/Navbar"
import Searchbox from "./Components/SearchBox"
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

import { LinearProgress } from "@mui/material"
import Controllerform from "./Components/Controllerform"
import Fromdata from "./Components/Fromdata"

export default function App() {
  const [users, setUsers] = useState([])
  const [selectuser, setSelectuser] = useState({})
  const [formMode, setFormMode] = useState("create")
  const [isReady, setIsReady] = useState(false)

  const getAllUser = () => {
    setIsReady(false)
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

  useEffect(() => {
    getAllUser()

    return () => {}
  }, [])

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/user/")
      .then((res) => {
        setUsers(res?.data?.rows)
        setIsReady(true)
        console.log("User", res?.data?.rows)
      })
      .catch((error) => {
        console.error("Error", error?.message)
      })
    return () => {}
  }, [])

  // const [count, setCount] = useState(0)

  // function handleClick() {
  //   setCount(count + 1)
  // }

  if (!isReady) {
    return (
      <div>
        <LinearProgress />
      </div>
    )
  }
  // const handleEditUser =
  const handleDeleteUser = (userId) => {
    axios
      .delete("http://localhost:3001/api/user/" + userId)
      .then((res) => {
        getAllUser()
      })
      .catch((error) => {
        alert(error?.message)
        console.log("Error", error?.message)
      })
  }

  const postData = (data) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/user`, { ...data })
      .then((res) => {
        console.log("User", res?.data?.rows)
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

  const onCreateData = async (data) => {
    await postData(data)
    await getData()
    console.log(data)
  }

  const onUpdateData = async (data) => {}

  return (
    <div>
      {/* <Navbar /> */}
      {/* <div className="">
        <p> จำนวนครั้งในการกด </p>
        <button className=" ">{count}</button>
      </div> */}

      <div>
        <h3 className="font-bold"> User List</h3>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ลำดับที่</TableCell>
                <TableCell>ชื่อ-นามสกุล</TableCell>
                <TableCell>แผนก</TableCell>
                <TableCell>ดำเนินการ</TableCell>
              </TableRow>
            </TableHead>
            {_.map(users, (eachData, index) => (
              <TableBody>
                <TableCell align="left">{index + 1}</TableCell>
                <TableCell align="left">{eachData.name}</TableCell>
                <TableCell align="left">{eachData.department}</TableCell>
                <TableCell align="left">
                  <div className=" mr-8">
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
                        setFormMode("update")
                        setSelectuser(eachData)
                      }}
                    >
                      {" "}
                      Edit{" "}
                    </Button>
                  </div>
                </TableCell>
              </TableBody>
            ))}
          </Table>
        </TableContainer>
      </div>
      {/* <div>
        <h3 className="font-bold">User List</h3>
        <Table>
          <thead>
            <tr>
              <th>ลำดับที่</th>
              <th>ชื่อ</th>
              <th>แผนก</th>
              <th>ดำเนินการ</th>
            </tr>
          </thead>
          {_.map(users, (eachUser, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{eachUser?.name}</td>
              <td>{eachUser?.department}</td>
              <td>
                <Button color="danger">ลบ</Button>
              </td>
            </tr>
          ))}
        </Table>
      </div> */}
      {/* <Searchbox /> */}
      {/* <People Eachpeople={data} /> */}
      <br />
      <br />
      {/* <Controllerform /> */}
      {formMode}
      <Fromdata
        submitData={formMode === "create" ? onCreateData : onUpdateData}
        defaultValue={selectuser}
      />
    </div>
  )
}