import React, { useState, useEffect } from "react"
import { Card, CardContent, Input } from "@mui/material"
export default function SearchBox() {
  const [searchBox, setSearchBox] = useState()
  useEffect(() => {
    // alert(`You search ${searchBox}`)
    return () => {}
  }, [searchBox])
  return (
    <div className=" border">
      <Card>
        <CardContent>
          <div> Search Box</div>
          <Input
            placeholder="Input Some Search Word"
            onChange={(e) => setSearchBox(e.target.value)}
          />
          <div>
            You Search <span className="text-blue-500">{searchBox}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
