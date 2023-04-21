import React from "react"
import { Card, CardContent } from "@mui/material"
import _ from "lodash"

const People = ({ Eachpeople }) => {
  console.log(Eachpeople)
  return (
    <div className="p-2 flex-center ">
      <div className="mx-96 center">
        {_.map(Eachpeople, (People, index) => (
          <Card key={index} className="my-2">
            <CardContent>
              <div className="">
                <li>Name : {People?.name}</li>
                <li>Height : {People.height}</li>
                <li>Mass : {People.mass}</li>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default People
