import { Outlet, Link } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Sidebar from "../Components/Sidebar"

const Layout = () => {
  return (
    <div>
      <div className=" ">
        <div className="flex">
          <div className="">
            <Sidebar />
          </div>
          <div className="w-full">
            <Navbar />
          </div>
        </div>
      </div>

      <>
        <nav>
          <ul>
            <li>
              <Link to="/"></Link>
            </li>
            <br />
            <br />
            <br />
            <li>
              <Link to="/Formdata"></Link>
            </li>
            <br />
            <br />
            <br />
            <li>
              <Link to="/Formdepartment"></Link>
            </li>
            <li>
              <Link to="/Showuser"></Link>
            </li>
          </ul>
        </nav>

        <Outlet />
      </>
    </div>
  )
}

export default Layout
