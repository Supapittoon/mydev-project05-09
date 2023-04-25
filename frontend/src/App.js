import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./page/Layout"
import From from "./page/From"
import Home from "./page/Home"
import Fromdata from "./Components/Fromdata"
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Formdata" element={<Fromdata  />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
