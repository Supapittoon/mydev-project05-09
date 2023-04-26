import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./page/Layout"
// import From from "./page/From"
import Home from "./page/Home"
import Fromdata from "./Components/Fromdata"
import Department from "./page/Department"
import Formdepartment from "./page/Formdepartment"
import Showuser from "./page/Showuser"
// import Navbar from "./Components/Navbar"
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Formdata" element={<Fromdata />} />
            <Route path="/Department" element={<Department />} />
            <Route path="/Formdepartment" element={<Formdepartment />} />
            <Route path="/Showuser" element={<Showuser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
