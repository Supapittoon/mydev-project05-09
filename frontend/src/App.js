import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./page/Layout"
// import From from "./page/From"
import Home from "./page/Home"
import Fromdata from "./Components/Fromdata"
import Customer from "./page/Customer"
import Formdepartment from "./page/Formdepartment"
import Sidebar from "./Components/Sidebar"
import Example from "../src/Components/Navbar"
import Showdata from "./page/Showdata"
import Detailcutomer from "./page/Detailcutomer"
import PurchaseHistory from "./page/PurchaseHistory"
import Product from "./page/Product"
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
            <Route path="/Customer" element={<Customer />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/PurchaseHistory" element={<PurchaseHistory />} />
            <Route path="/Formdepartment" element={<Formdepartment />} />
            <Route path="/Showdata" element={<Showdata />} />
            <Route path="/Customer/Detail/:id" element={<Detailcutomer />} />
            {/* </Route> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
