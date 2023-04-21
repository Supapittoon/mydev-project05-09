import React from "react"
export default function ControlCard({ title }) {
  const alertStart = () => window.alert(title)

  const renderHello = () => {
    return (
      <div>
        <li> Hello </li>
        <li> World</li>
      </div>
    )
  }

  return (
    <div className=" border-4 m-2 rounded-lg">
      <h1> {title} </h1>
      <button
        className="text-base p-2 font-bold bg-green-400 rounded-md  mr-2"
        onClick={() => alertStart()}
      >
        Start
      </button>
      <button className="text-base p-2 font-bold bg-blue-500 rounded-md mr-2">
        {" "}
        Restart
      </button>
      <button className="text-base p-2 font-bold bg-red-400 rounded-md  mr-2">
        Down
      </button>
      {renderHello()}
    </div>
  )
}
