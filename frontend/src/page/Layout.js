import { Outlet, Link } from "react-router-dom"
import Navbar from "../Components/Navbar"


const Layout = () => {
  return (
    <div>
      <Navbar />
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
