import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./page/Layout"
// import From from "./page/From"
import Home from "./page/Home"
import Fromdata from "./Components/Fromdata"
import Department from "./page/Department"
import Formdepartment from "./page/Formdepartment"
import Sidebar from "./Components/Sidebar"
import Example from "../src/Components/Navbar"
import Showdata from "./page/Showdata"
// import Navbar from "./Components/Navbar"
export default function App() {
  return (
    <BrowserRouter>
      <div className="App w-full">
        <Example />
        <div className="flex">
          <Sidebar />
          <Routes>
            {/* <Route path="/" element={<Layout />}> */}
            <Route index element={<Home />} />
            <Route path="/Formdata" element={<Fromdata />} />
            <Route path="/Department" element={<Department />} />
            <Route path="/Formdepartment" element={<Formdepartment />} />
            <Route path="/Showdata" element={<Showdata />} />
            {/* </Route> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
